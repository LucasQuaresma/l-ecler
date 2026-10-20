const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

function renderContact() {
  const timers = [];
  const intervals = [];
  const cancelled = [];
  const navigation = [];
  const effects = [];
  const states = [];
  const exports = {};
  const source = fs.readFileSync(path.join(__dirname, "../src/routes/academy-contato.tsx"), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  });
  const jsx = (type, props) => ({ type, props });
  const mocks = {
    react: {
      useEffect: (effect) => effects.push(effect),
      useState: (initial) => [initial, (value) => states.push(value)],
    },
    "react/jsx-runtime": { jsx, jsxs: jsx },
    "@tanstack/react-router": {
      createFileRoute: (routePath) => (options) => ({ ...options, path: routePath }),
    },
    "lucide-react": { MessageCircle: "icon" },
    "@/lib/site": { absoluteUrl: (routePath) => `https://leclersaude.com.br${routePath}` },
    "@/assets/lecler-academy-logo.png": { default: "/logo.png" },
  };
  vm.runInNewContext(outputText, {
    exports,
    URLSearchParams,
    Date,
    require(name) {
      if (name in mocks) return mocks[name];
      throw new Error(name);
    },
    window: {
      setTimeout: (fn, ms) => {
        timers.push({ fn, ms });
        return "redirect";
      },
      setInterval: (fn, ms) => {
        intervals.push({ fn, ms });
        return "ticker";
      },
      clearTimeout: (id) => cancelled.push(id),
      clearInterval: (id) => cancelled.push(id),
      location: { replace: (url) => navigation.push(url) },
    },
  });
  const tree = exports.Route.component();
  return { ...exports, tree, timers, intervals, cancelled, navigation, effects, states, source };
}

function nodes(tree) {
  if (!tree || typeof tree !== "object") return [];
  return [tree, ...[tree.props?.children].flat(Infinity).flatMap(nodes)];
}

test("one contact CTA opens the confirmed Academy number with no personal lead data", () => {
  const { tree, Route } = renderContact();
  const links = nodes(tree).filter((node) => node.type === "a");
  assert.equal(links.length, 1);
  const url = new URL(links[0].props.href);
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/5511915633857");
  assert.equal(url.searchParams.size, 1);
  assert.match(url.searchParams.get("text"), /Fios Faciais/);
  assert.equal(Route.path, "/academy-contato");
  assert.equal(Route.head().meta.find((item) => item.name === "robots").content, "noindex, follow");
});

test("redirect waits 30 seconds, uses the same destination, and cleans up both timers", () => {
  const page = renderContact();
  assert.equal(page.navigation.length, 0);
  const cleanup = page.effects[0]();
  assert.equal(page.timers[0].ms, 30000);
  assert.equal(page.intervals[0].ms, 1000);
  assert.equal(page.navigation.length, 0);
  page.timers[0].fn();
  assert.equal(page.navigation[0], nodes(page.tree).find((node) => node.type === "a").props.href);
  cleanup();
  assert.deepEqual(page.cancelled.sort(), ["redirect", "ticker"]);
});

test("contact page does not create registrations or lead conversion events", () => {
  const { source, tree } = renderContact();
  assert.doesNotMatch(source, /fbq|trackMetaLead|trackCourseMetaLead|supabase|fetch\(/);
  assert.equal(nodes(tree).filter((node) => node.type === "form").length, 0);
  assert.equal(nodes(tree).filter((node) => node.type === "img").length, 1);
});
