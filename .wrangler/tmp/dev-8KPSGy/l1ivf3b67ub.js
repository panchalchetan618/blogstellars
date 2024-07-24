// .wrangler/tmp/bundle-6dcypR/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-RxdAy5/bundledWorker-0.08684686751928727.mjs
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var te = Object.create;
var U = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var ae = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ne = Object.prototype.hasOwnProperty;
var M = (t, e) => () => (t && (e = t(t = 0)), e);
var V = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ie = (t, e, a, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of ae(e))
      !ne.call(t, n) && n !== a && U(t, n, { get: () => e[n], enumerable: !(s = se(e, n)) || s.enumerable });
  return t;
};
var j = (t, e, a) => (a = t != null ? te(re(t)) : {}, ie(e || !t || !t.__esModule ? U(a, "default", { value: t, enumerable: true }) : a, t));
var g;
var l = M(() => {
  g = { collectedLocales: [] };
});
var f;
var d = M(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/?$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }, { src: "^/blog/(?<nxtPid>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/blog/[id].rsc?nxtPid=$nxtPid" }, { src: "^/blog/(?<nxtPid>[^/]+?)(?:/)?$", dest: "/blog/[id]?nxtPid=$nxtPid" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|IXjshnJwhRVo8jsO3uq4Y)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.2.5" }, crons: [] };
});
var m;
var h = M(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/IXjshnJwhRVo8jsO3uq4Y/_buildManifest.js": { type: "static" }, "/_next/static/IXjshnJwhRVo8jsO3uq4Y/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/307-26fe48c0d3a77eed.js": { type: "static" }, "/_next/static/chunks/526-15f56ebb5c673f45.js": { type: "static" }, "/_next/static/chunks/5e22fd23-c072c3154ed20227.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-306bfa9d84dc430d.js": { type: "static" }, "/_next/static/chunks/app/blog/[id]/page-ef097dc25fde7605.js": { type: "static" }, "/_next/static/chunks/app/layout-6eb60bdb8efd2ce2.js": { type: "static" }, "/_next/static/chunks/app/page-ee9670778c7f3eff.js": { type: "static" }, "/_next/static/chunks/fd9d1056-cb422f7581ecfa2f.js": { type: "static" }, "/_next/static/chunks/framework-f66176bb897dc684.js": { type: "static" }, "/_next/static/chunks/main-app-3fc87d86a5dd9460.js": { type: "static" }, "/_next/static/chunks/main-f7b29c3d23dd238a.js": { type: "static" }, "/_next/static/chunks/pages/_app-6a626577ffa902a4.js": { type: "static" }, "/_next/static/chunks/pages/_error-1be831200e60c5c0.js": { type: "static" }, "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js": { type: "static" }, "/_next/static/chunks/webpack-e151b704c86dbcfc.js": { type: "static" }, "/_next/static/css/5c53c273673e7df9.css": { type: "static" }, "/_next/static/css/5ccd5ae0955f9a02.css": { type: "static" }, "/_next/static/media/05a31a2ca4975f99-s.woff2": { type: "static" }, "/_next/static/media/513657b02c5c193f-s.woff2": { type: "static" }, "/_next/static/media/51ed15f9841b9f9d-s.woff2": { type: "static" }, "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2": { type: "static" }, "/_next/static/media/d6b16ce4a6175f26-s.woff2": { type: "static" }, "/_next/static/media/ec159349637c90ad-s.woff2": { type: "static" }, "/_next/static/media/fd4db3eb5472fc27-s.woff2": { type: "static" }, "/next.svg": { type: "static" }, "/vercel.svg": { type: "static" }, "/blog/[id]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/[id].func.js" }, "/blog/[id].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/[id].func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } } };
});
var q = V((qe, $) => {
  "use strict";
  l();
  d();
  h();
  function w(t, e) {
    t = String(t || "").trim();
    let a = t, s, n = "";
    if (/^[^a-zA-Z\\\s]/.test(t)) {
      s = t[0];
      let o = t.lastIndexOf(s);
      n += t.substring(o + 1), t = t.substring(1, o);
    }
    let r = 0;
    return t = ue(t, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let u = o.substring(c[0].length, o.length - 1);
        return e && (e[r] = c[1]), r++, `(${u})`;
      }
      return o.substring(0, 3) === "(?:" || r++, o;
    }), t = t.replace(/\[:([^:]+):\]/g, (o, c) => w.characterClasses[c] || o), new w.PCRE(t, n, a, n, s);
  }
  function ue(t, e) {
    let a = 0, s = 0, n = false;
    for (let i = 0; i < t.length; i++) {
      let r = t[i];
      if (n) {
        n = false;
        continue;
      }
      switch (r) {
        case "(":
          s === 0 && (a = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = a === 0 ? "" : t.substring(0, a), u = t.substring(o), p = String(e(t.substring(a, o)));
            t = c + p + u, i = a;
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return t;
  }
  (function(t) {
    class e extends RegExp {
      constructor(s, n, i, r, o) {
        super(s, n), this.pcrePattern = i, this.pcreFlags = r, this.delimiter = o;
      }
    }
    t.PCRE = e, t.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(w || (w = {}));
  w.prototype = w.PCRE.prototype;
  $.exports = w;
});
var Z = V((O) => {
  "use strict";
  l();
  d();
  h();
  O.parse = _e;
  O.serialize = ve;
  var we = Object.prototype.toString, k = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function _e(t, e) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, s = e || {}, n = s.decode || Pe, i = 0; i < t.length; ) {
      var r = t.indexOf("=", i);
      if (r === -1)
        break;
      var o = t.indexOf(";", i);
      if (o === -1)
        o = t.length;
      else if (o < r) {
        i = t.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      var c = t.slice(i, r).trim();
      if (a[c] === void 0) {
        var u = t.slice(r + 1, o).trim();
        u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), a[c] = Ce(u, n);
      }
      i = o + 1;
    }
    return a;
  }
  function ve(t, e, a) {
    var s = a || {}, n = s.encode || be;
    if (typeof n != "function")
      throw new TypeError("option encode is invalid");
    if (!k.test(t))
      throw new TypeError("argument name is invalid");
    var i = n(e);
    if (i && !k.test(i))
      throw new TypeError("argument val is invalid");
    var r = t + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      r += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!k.test(s.domain))
        throw new TypeError("option domain is invalid");
      r += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!k.test(s.path))
        throw new TypeError("option path is invalid");
      r += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!Se(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      r += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (r += "; HttpOnly"), s.secure && (r += "; Secure"), s.priority) {
      var u = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (u) {
        case "low":
          r += "; Priority=Low";
          break;
        case "medium":
          r += "; Priority=Medium";
          break;
        case "high":
          r += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var p = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (p) {
        case true:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return r;
  }
  function Pe(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function be(t) {
    return encodeURIComponent(t);
  }
  function Se(t) {
    return we.call(t) === "[object Date]" || t instanceof Date;
  }
  function Ce(t, e) {
    try {
      return e(t);
    } catch {
      return t;
    }
  }
});
l();
d();
h();
l();
d();
h();
l();
d();
h();
var v = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
d();
h();
l();
d();
h();
l();
d();
h();
l();
d();
h();
var F = j(q());
function C(t, e, a) {
  if (e == null)
    return { match: null, captureGroupKeys: [] };
  let s = a ? "" : "i", n = [];
  return { match: (0, F.default)(`%${t}%${s}`, n).exec(e), captureGroupKeys: n };
}
function P(t, e, a, { namedOnly: s } = {}) {
  return t.replace(/\$([a-zA-Z0-9_]+)/g, (n, i) => {
    let r = a.indexOf(i);
    return s && r === -1 ? n : (r === -1 ? e[parseInt(i, 10)] : e[r + 1]) || "";
  });
}
function L(t, { url: e, cookies: a, headers: s, routeDest: n }) {
  switch (t.type) {
    case "host":
      return { valid: e.hostname === t.value };
    case "header":
      return t.value !== void 0 ? N(t.value, s.get(t.key), n) : { valid: s.has(t.key) };
    case "cookie": {
      let i = a[t.key];
      return i && t.value !== void 0 ? N(t.value, i, n) : { valid: i !== void 0 };
    }
    case "query":
      return t.value !== void 0 ? N(t.value, e.searchParams.get(t.key), n) : { valid: e.searchParams.has(t.key) };
  }
}
function N(t, e, a) {
  let { match: s, captureGroupKeys: n } = C(t, e);
  return a && s && n.length ? { valid: !!s, newRouteDest: P(a, s, n, { namedOnly: true }) } : { valid: !!s };
}
l();
d();
h();
function D(t) {
  let e = new Headers(t.headers);
  return t.cf && (e.set("x-vercel-ip-city", encodeURIComponent(t.cf.city)), e.set("x-vercel-ip-country", t.cf.country), e.set("x-vercel-ip-country-region", t.cf.region), e.set("x-vercel-ip-latitude", t.cf.latitude), e.set("x-vercel-ip-longitude", t.cf.longitude)), e.set("x-vercel-sc-host", v), new Request(t, { headers: e });
}
l();
d();
h();
function R(t, e, a) {
  let s = e instanceof Headers ? e.entries() : Object.entries(e);
  for (let [n, i] of s) {
    let r = n.toLowerCase(), o = a?.match ? P(i, a.match, a.captureGroupKeys) : i;
    r === "set-cookie" ? t.append(r, o) : t.set(r, o);
  }
}
function b(t) {
  return /^https?:\/\//.test(t);
}
function x(t, e) {
  for (let [a, s] of e.entries()) {
    let n = /^nxtP(.+)$/.exec(a), i = /^nxtI(.+)$/.exec(a);
    n?.[1] ? (t.set(a, s), t.set(n[1], s)) : i?.[1] ? t.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!t.has(a) || !!s && !t.getAll(a).includes(s)) && t.append(a, s);
  }
}
function I(t, e) {
  let a = new URL(e, t.url);
  return x(a.searchParams, new URL(t.url).searchParams), a.pathname = a.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(a, t);
}
function S(t) {
  return new Response(t.body, t);
}
function A(t) {
  return t.split(",").map((e) => {
    let [a, s] = e.split(";"), n = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [a.trim(), isNaN(n) ? 1 : n];
  }).sort((e, a) => a[1] - e[1]).map(([e]) => e === "*" || e === "" ? [] : e).flat();
}
l();
d();
h();
function H(t) {
  switch (t) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function E(t, { request: e, assetsFetcher: a, ctx: s }, { path: n, searchParams: i }) {
  let r, o = new URL(e.url);
  x(o.searchParams, i);
  let c = new Request(o, e);
  try {
    switch (t?.type) {
      case "function":
      case "middleware": {
        let u = await import(t.entrypoint);
        try {
          r = await u.default(c, s);
        } catch (p) {
          let y = p;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${t.entrypoint})`) : p;
        }
        break;
      }
      case "override": {
        r = S(await a.fetch(I(c, t.path ?? n))), t.headers && R(r.headers, t.headers);
        break;
      }
      case "static": {
        r = await a.fetch(I(c, n));
        break;
      }
      default:
        r = new Response("Not Found", { status: 404 });
    }
  } catch (u) {
    return console.error(u), new Response("Internal Server Error", { status: 500 });
  }
  return S(r);
}
function B(t, e) {
  let a = "^//?(?:", s = ")/(.*)$";
  return !t.startsWith(a) || !t.endsWith(s) ? false : t.slice(a.length, -s.length).split("|").every((i) => e.has(i));
}
l();
d();
h();
function le(t, { protocol: e, hostname: a, port: s, pathname: n }) {
  return !(e && t.protocol.replace(/:$/, "") !== e || !new RegExp(a).test(t.hostname) || s && !new RegExp(s).test(t.port) || n && !new RegExp(n).test(t.pathname));
}
function de(t, e) {
  if (t.method !== "GET")
    return;
  let { origin: a, searchParams: s } = new URL(t.url), n = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), r = Number.parseInt(s.get("q") ?? "75", 10);
  if (!n || Number.isNaN(i) || Number.isNaN(r) || !e?.sizes?.includes(i) || r < 0 || r > 100)
    return;
  let o = new URL(n, a);
  if (o.pathname.endsWith(".svg") && !e?.dangerouslyAllowSVG)
    return;
  let c = n.startsWith("//"), u = n.startsWith("/") && !c;
  if (!u && !e?.domains?.includes(o.hostname) && !e?.remotePatterns?.find((_) => le(o, _)))
    return;
  let p = t.headers.get("Accept") ?? "", y = e?.formats?.find((_) => p.includes(_))?.replace("image/", "");
  return { isRelative: u, imageUrl: o, options: { width: i, quality: r, format: y } };
}
function he(t, e, a) {
  let s = new Headers();
  if (a?.contentSecurityPolicy && s.set("Content-Security-Policy", a.contentSecurityPolicy), a?.contentDispositionType) {
    let i = e.pathname.split("/").pop(), r = i ? `${a.contentDispositionType}; filename="${i}"` : a.contentDispositionType;
    s.set("Content-Disposition", r);
  }
  t.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let n = S(t);
  return R(n.headers, s), n;
}
async function G(t, { buildOutput: e, assetsFetcher: a, imagesConfig: s }) {
  let n = de(t, s);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: r } = n, c = await (i && r.pathname in e ? a.fetch.bind(a) : fetch)(r);
  return he(c, r, s);
}
l();
d();
h();
l();
d();
h();
var pe = "x-vercel-cache-tags";
var fe = "x-next-cache-soft-tags";
var me = Symbol.for("__cloudflare-request-context__");
async function z(t) {
  let e = `https://${v}/v1/suspense-cache/`;
  if (!t.url.startsWith(e))
    return null;
  try {
    let a = new URL(t.url), s = await ge();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let i = a.searchParams.get("tags")?.split(",") ?? [];
      for (let r of i)
        await s.revalidateTag(r);
      return new Response(null, { status: 200 });
    }
    let n = a.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (t.method) {
      case "GET": {
        let i = K(t, fe), r = await s.get(n, { softTags: i });
        return r ? new Response(JSON.stringify(r.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (r.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = globalThis[me], r = async () => {
          let o = await t.json();
          o.data.tags === void 0 && (o.tags ??= K(t, pe) ?? []), await s.set(n, o);
        };
        return i ? i.ctx.waitUntil(r()) : await r(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return console.error(a), new Response("Error handling cache request", { status: 500 });
  }
}
async function ge() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? W("kv") : W("cache-api");
}
async function W(t) {
  let e = await import(`./__next-on-pages-dist__/cache/${t}.js`);
  return new e.default();
}
function K(t, e) {
  return t.headers.get(e)?.split(",")?.filter(Boolean);
}
function X() {
  globalThis[J] || (ye(), globalThis[J] = true);
}
function ye() {
  let t = globalThis.fetch;
  globalThis.fetch = async (...e) => {
    let a = new Request(...e), s = await Re(a);
    return s || (s = await z(a), s) ? s : (xe(a), t(a));
  };
}
async function Re(t) {
  if (t.url.startsWith("blob:"))
    try {
      let a = (await import(`./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return a;
      }, get body() {
        return new ReadableStream({ start(n) {
          let i = Buffer.from(a);
          n.enqueue(i), n.close();
        } });
      }, async text() {
        return Buffer.from(a).toString();
      }, async json() {
        let n = Buffer.from(a);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(a);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function xe(t) {
  t.headers.has("user-agent") || t.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
l();
d();
h();
var Y = j(Z());
var T = class {
  constructor(e, a, s, n, i) {
    this.routes = e;
    this.output = a;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Y.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((r) => r.domain === this.url.hostname), this.locales = new Set(n.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(e, { checkStatus: a, checkIntercept: s }) {
    let n = C(e.src, this.path, e.caseSensitive);
    if (!n.match || e.methods && !e.methods.map((r) => r.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: e.dest };
    if (!e.has?.find((r) => {
      let o = L(r, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !e.missing?.find((r) => L(r, i).valid) && !(a && e.status !== this.status)) {
      if (s && e.dest) {
        let r = /\/(\(\.+\))+/, o = r.test(e.dest), c = r.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: n, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(e) {
    let a = "x-middleware-override-headers", s = e.headers.get(a);
    if (s) {
      let c = new Set(s.split(",").map((u) => u.trim()));
      for (let u of c.keys()) {
        let p = `x-middleware-request-${u}`, y = e.headers.get(p);
        this.reqCtx.request.headers.get(u) !== y && (y ? this.reqCtx.request.headers.set(u, y) : this.reqCtx.request.headers.delete(u)), e.headers.delete(p);
      }
      e.headers.delete(a);
    }
    let n = "x-middleware-rewrite", i = e.headers.get(n);
    if (i) {
      let c = new URL(i, this.url), u = this.url.hostname !== c.hostname;
      this.path = u ? `${c}` : c.pathname, x(this.searchParams, c.searchParams), e.headers.delete(n);
    }
    let r = "x-middleware-next";
    e.headers.get(r) ? e.headers.delete(r) : !i && !e.headers.has("location") ? (this.body = e.body, this.status = e.status) : e.headers.has("location") && e.status >= 300 && e.status < 400 && (this.status = e.status), R(this.reqCtx.request.headers, e.headers), R(this.headers.normal, e.headers), this.headers.middlewareLocation = e.headers.get("location");
  }
  async runRouteMiddleware(e) {
    if (!e)
      return true;
    let a = e && this.output[e];
    if (!a || a.type !== "middleware")
      return this.status = 500, false;
    let s = await E(a, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(e), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(e) {
    !e.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(e, a, s) {
    !e.headers || (R(this.headers.normal, e.headers, { match: a, captureGroupKeys: s }), e.important && R(this.headers.important, e.headers, { match: a, captureGroupKeys: s }));
  }
  applyRouteStatus(e) {
    !e.status || (this.status = e.status);
  }
  applyRouteDest(e, a, s) {
    if (!e.dest)
      return this.path;
    let n = this.path, i = e.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = P(i, a, s);
    let r = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(n), c = /^\/__index\.prefetch\.rsc$/i.test(n);
    r && !o && !c && (this.path = n);
    let u = /\.rsc$/i.test(this.path), p = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    u && !p && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let _ = new URL(this.path, this.url);
    return x(this.searchParams, _.searchParams), b(this.path) || (this.path = _.pathname), n;
  }
  applyLocaleRedirects(e) {
    if (!e.locale?.redirect || !/^\^(.)*$/.test(e.src) && e.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: n } } = e, i = n && this.cookies[n], r = A(i ?? ""), o = A(this.reqCtx.request.headers.get("accept-language") ?? ""), p = [...r, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (p) {
      !this.path.startsWith(p) && (this.headers.normal.set("location", p), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(e, a) {
    return !this.locales || a !== "miss" ? e : B(e.src, this.locales) ? { ...e, src: e.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : e;
  }
  async checkRoute(e, a) {
    let s = this.getLocaleFriendlyRoute(a, e), { routeMatch: n, routeDest: i } = this.checkRouteMatch(s, { checkStatus: e === "error", checkIntercept: e === "rewrite" }) ?? {}, r = { ...s, dest: i };
    if (!n?.match || r.middlewarePath && this.middlewareInvoked.includes(r.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = n;
    if (this.applyRouteOverrides(r), this.applyLocaleRedirects(r), !await this.runRouteMiddleware(r.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(r, o, c), this.applyRouteStatus(r);
    let p = this.applyRouteDest(r, o, c);
    if (r.check && !b(this.path))
      if (p === this.path) {
        if (e !== "miss")
          return this.checkPhase(H(e));
        this.status = 404;
      } else if (e === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !r.continue || r.status && r.status >= 300 && r.status <= 399 ? "done" : "next";
  }
  async checkPhase(e) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let a = true;
    for (let i of this.routes[e]) {
      let r = await this.checkRoute(e, i);
      if (r === "error")
        return "error";
      if (r === "done") {
        a = false;
        break;
      }
    }
    if (e === "hit" || b(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (e === "none")
      for (let i of this.locales) {
        let r = new RegExp(`/${i}(/.*)`), c = this.path.match(r)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (e === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let n = "miss";
    return s || e === "miss" || e === "error" ? n = "hit" : a && (n = H(e)), this.checkPhase(n);
  }
  async run(e = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(e);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), a;
  }
};
async function Q(t, e, a, s) {
  let n = new T(e.routes, a, t, s, e.wildcard), i = await ee(n);
  return Ee(t, i, a);
}
async function ee(t, e = "none", a = false) {
  return await t.run(e) === "error" || !a && t.status && t.status >= 400 ? ee(t, "error", true) : { path: t.path, status: t.status, headers: t.headers, searchParams: t.searchParams, body: t.body };
}
async function Ee(t, { path: e = "/404", status: a, headers: s, searchParams: n, body: i }, r) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let p = [...n.keys()].length ? `?${n.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${p}`);
    }
    return new Response(null, { status: a, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: a });
  else if (b(e)) {
    let p = new URL(e);
    x(p.searchParams, n), c = await fetch(p, t.request);
  } else
    c = await E(r[e], t, { path: e, status: a, headers: s, searchParams: n });
  let u = s.normal;
  return R(u, c.headers), R(u, s.important), c = new Response(c.body, { ...c, status: a || c.status, headers: u }), c;
}
var is = { async fetch(t, e, a) {
  X();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let r = new URL(t.url), o = await e.ASSETS.fetch(`${r.protocol}//${r.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: i } = s;
  return n.run({ ...e, NODE_ENV: "production", SUSPENSE_CACHE_URL: v }, async () => i.run({ env: e, ctx: a, cf: t.cf }, async () => {
    if (new URL(t.url).pathname.startsWith("/_next/image"))
      return G(t, { buildOutput: m, assetsFetcher: e.ASSETS, imagesConfig: f.images });
    let o = D(t);
    return Q({ request: o, ctx: a, assetsFetcher: e.ASSETS }, f, m, g);
  }));
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-RxdAy5/l1ivf3b67ub.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.12.1.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (is.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return is.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-6dcypR/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-6dcypR/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=l1ivf3b67ub.js.map
