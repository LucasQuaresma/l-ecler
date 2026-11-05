const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

function loadModules(browser = {}) {
  const cache = {};
  function load(name) {
    if (cache[name]) return cache[name];
    const file = path.join(__dirname, "../src/lib", `${name}.ts`);
    const { outputText } = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    });
    const exports = {};
    vm.runInNewContext(outputText, {
      exports,
      URL,
      URLSearchParams,
      AbortSignal,
      fetch,
      ...browser,
      require: (id) => (id.startsWith("./") ? load(id.slice(2)) : require(id)),
    });
    cache[name] = exports;
    return exports;
  }
  return { ...load("bioframe-registration"), ...load("bioframe-registration-transport.server") };
}

const input = {
  name: "Teste QA Bioframe",
  email: " QA.BIOFRAME@EXAMPLE.INVALID ",
  whatsapp: "(11) 98765-4321",
  consent: true,
  website: "",
  requestId: "0e858c0d-b662-40c8-a12a-a4c03b9a8449",
  attribution: {
    utm_source: "vida-bela",
    utm_campaign: "bioframe",
    landing_page: "https://leclersaude.com.br/live-bioframe-lift",
  },
};
const ack = {
  ok: true,
  eventId: input.requestId,
  source: "live-bioframe-lift-2026-11-30",
  sheet_saved: true,
  dov_synced: true,
  duplicate: false,
};

test("validates contact, consent and honeypot before any outbound request", async () => {
  const { deliverBioframeRegistration } = loadModules();
  for (const changes of [
    { email: "invalid" },
    { whatsapp: "111" },
    { consent: false },
    { website: "bot" },
    { name: "a" },
  ]) {
    let sent = false;
    await assert.rejects(() =>
      deliverBioframeRegistration(
        { ...input, ...changes },
        {
          secret: "test-only",
          fetcher: async () => {
            sent = true;
            return Response.json(ack);
          },
        },
      ),
    );
    assert.equal(sent, false);
  }
});

test("requires backend secret and fixes source/tags independently from browser input", async () => {
  const { deliverBioframeRegistration } = loadModules();
  await assert.rejects(() => deliverBioframeRegistration(input), /indisponível/);
  let request;
  const result = await deliverBioframeRegistration(
    { ...input, source: "agency", tags: ["wrong"], tenant: "agency" },
    {
      secret: "test-only",
      fetcher: async (url, options) => {
        request = { url, ...options };
        return Response.json(ack);
      },
    },
  );
  const payload = JSON.parse(request.body);
  assert.equal(result.confirmed, true);
  assert.equal(payload.source, ack.source);
  assert.deepEqual(payload.tags, ["live", "Bioframe Lift", "Vida Bela"]);
  assert.equal(payload.tenant, undefined);
  assert.equal(payload.contact.email, "qa.bioframe@example.invalid");
  assert.equal(payload.contact.whatsapp, "5511987654321");
  assert.equal(payload.attribution.utm_source, "vida-bela");
  assert.equal(request.headers["X-Lecler-Ebook-Key"], "test-only");
  assert.equal(request.redirect, "error");
  assert.ok(request.signal instanceof AbortSignal);
});

test("never confirms HTTP errors, queued or partial acknowledgements, wrong source or request", async () => {
  const { deliverBioframeRegistration } = loadModules();
  const responses = [
    () => Response.json(ack, { status: 503 }),
    () => Response.json({ ok: true, queued: true }),
    () => Response.json({ ...ack, sheet_saved: false }),
    () => Response.json({ ...ack, dov_synced: false }),
    () => Response.json({ ...ack, source: "another-event" }),
    () => Response.json({ ...ack, eventId: "5e858c0d-b662-40c8-a12a-a4c03b9a8449" }),
    () => new Response("not-json"),
    () => {
      throw new Error("Network unavailable");
    },
  ];
  for (const response of responses) {
    await assert.rejects(() =>
      deliverBioframeRegistration(input, { secret: "test-only", fetcher: async () => response() }),
    );
  }
});

test("accepts an already persisted registration only with both confirmations", async () => {
  const { deliverBioframeRegistration } = loadModules();
  const result = await deliverBioframeRegistration(input, {
    secret: "test-only",
    fetcher: async () => Response.json({ ...ack, duplicate: true }),
  });
  assert.equal(result.confirmed, true);
  assert.equal(result.duplicate, true);
});

test("preserves campaign context across navigation without mixing separate campaigns or storing PII", () => {
  const storage = new Map();
  const window = {
    location: {
      href: "https://leclersaude.com.br/live-bioframe-lift?utm_source=facebook&utm_medium=cpc&utm_campaign=first&email=private%40example.com",
    },
    sessionStorage: {
      getItem: (key) => storage.get(key),
      setItem: (key, value) => storage.set(key, value),
    },
  };
  const { collectBioframeAttribution } = loadModules({
    window,
    document: { referrer: "https://example.com/page?secret=private" },
  });
  const first = collectBioframeAttribution();
  assert.equal(first.utm_source, "facebook");
  assert.ok(!first.landing_page.includes("email="));
  assert.equal(first.referrer, "https://example.com/page");
  window.location.href = "https://leclersaude.com.br/live-bioframe-lift";
  assert.equal(collectBioframeAttribution().utm_campaign, "first");
  window.location.href = "https://leclersaude.com.br/live-bioframe-lift?utm_source=vidabela";
  const next = collectBioframeAttribution();
  assert.equal(next.utm_source, "vidabela");
  assert.equal(next.utm_campaign, undefined);
  assert.equal(next.utm_medium, undefined);
  assert.ok(![...storage.values()].join("").includes("private"));
});
