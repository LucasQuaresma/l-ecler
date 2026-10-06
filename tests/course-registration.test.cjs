const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

// Execute the actual TS/TSX handlers with isolated browser and service doubles.
function load(file, mocks, globals = {}) {
  const source = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  });
  const exports = {};
  vm.runInNewContext(outputText, {
    exports, console: { error() {} }, ...globals,
    require(name) {
      if (name in mocks) return mocks[name];
      if (name === "zod") return require("zod");
      throw new Error(`Unexpected dependency: ${name}`);
    },
  });
  return exports;
}

const jsx = (type, props) => ({ type, props });
const jsxRuntime = { jsx, jsxs: jsx };
function find(node, predicate) {
  if (!node || typeof node !== "object") return;
  if (predicate(node)) return node;
  for (const child of [node.props?.children].flat(Infinity)) {
    const match = find(child, predicate);
    if (match) return match;
  }
}

const courses = [
  ["fullface", "Curso Full Face"],
  ["toxina", "Curso Toxina Botulínica"],
  ["fios", "Curso de Fios Faciais"],
];

test("registration tracks each existing pixel once before thank-you navigation", async () => {
  const events = [];
  const pending = [];
  const lib = load("src/lib/course-registration.ts", {
    "@/lib/meta-pixel": {
      trackMetaLead: (payload) => events.push(["general", payload]),
      trackCourseMetaLead: (payload) => events.push(["course", payload]),
    },
  }, { window: { setTimeout: (fn, ms) => pending.push({ fn, ms }),
    location: { assign: (url) => events.push(["navigate", url]) } } });
  const completion = lib.redirectCourseLeadToThankYou({
    courseName: courses[0][1], source: "cursofullface", thankYouPath: "/obrigadofullface",
  });
  assert.equal(events.length, 2);
  assert.equal(pending[0].ms, 350);
  pending[0].fn();
  await completion;
  assert.equal(events[2][1], "/obrigadofullface");
  for (const [, courseName] of courses) {
    const url = new URL(lib.getCourseWhatsappUrl(courseName));
    assert.equal(url.searchParams.get("phone"), "5511915633857");
    assert.ok(url.searchParams.get("text").includes(courseName));
  }
});

for (const [slug, courseName] of courses) {
  for (const scenario of ["success", "database failure", "invalid input"]) {
    test(`${slug}: ${scenario}`, async () => {
      const calls = [];
      const states = [scenario === "invalid input" ? "" : "Test User", "test@example.invalid", "11999990000", {}, false];
      const { Route } = load(`src/routes/curso${slug}.tsx`, {
        react: { useState: () => [states.shift(), () => {}] },
        "react/jsx-runtime": jsxRuntime,
        "@tanstack/react-router": { createFileRoute: () => (route) => route },
        "framer-motion": { motion: { div: "div", h1: "h1" } },
        "lucide-react": {},
        "@/components/ui/button": {}, "@/components/ui/input": {}, "@/components/ui/label": {},
        "@/components/CoursePixelTracker": {},
        sonner: { toast: { error: () => calls.push("error") } },
        "@/integrations/supabase/client": { supabase: { from: () => ({
          insert: async () => { calls.push("insert"); return { error: scenario === "database failure" ? new Error("offline") : null }; },
        }) } },
        "@/lib/course-registration": { redirectCourseLeadToThankYou: async (options) => {
          calls.push("redirect");
          assert.equal(options.thankYouPath, `/obrigado${slug}`);
          assert.equal(options.courseName, courseName);
        } },
      }, { fetch: async () => { calls.push("webhook"); } });
      const form = find(Route.component(), (node) => node.type === "form");
      assert.ok(form);
      await form.props.onSubmit({ preventDefault() {} });
      assert.deepEqual(calls, scenario === "success" ? ["insert", "webhook", "redirect"]
        : scenario === "database failure" ? ["insert", "error"] : []);
    });
  }

  test(`${slug}: thank-you waits 5000 ms, button matches destination, unmount cancels timer`, () => {
    let effect;
    let pending;
    let destination;
    let cancelled;
    const url = `https://api.whatsapp.com/send?phone=5511915633857&text=${encodeURIComponent(courseName)}`;
    const { CourseThankYouPage } = load("src/components/CourseThankYouPage.tsx", {
      react: { useEffect: (fn) => { effect = fn; } },
      "react/jsx-runtime": jsxRuntime,
      "@tanstack/react-router": { Link: "link" }, "lucide-react": {},
      "@/lib/course-registration": { getCourseWhatsappUrl: () => url },
    }, { window: {
      setTimeout: (fn, ms) => { pending = { fn, ms }; return 42; },
      clearTimeout: (id) => { cancelled = id; },
      location: { replace: (value) => { destination = value; } },
    } });
    const tree = CourseThankYouPage({ courseName, coursePath: `/curso${slug}` });
    const cleanup = effect();
    assert.equal(pending.ms, 5000);
    assert.equal(destination, undefined);
    assert.equal(find(tree, (node) => node.type === "a").props.href, url);
    pending.fn();
    assert.equal(destination, url);
    cleanup();
    assert.equal(cancelled, 42);
  });
}
