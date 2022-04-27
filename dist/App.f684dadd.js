// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/nanoid/non-secure/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nanoid = exports.customAlphabet = void 0;
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = '';
    let i = size;

    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }

    return id;
  };
};

exports.customAlphabet = customAlphabet;

let nanoid = (size = 21) => {
  let id = '';
  let i = size;

  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

exports.nanoid = nanoid;
},{}],"node_modules/immer/dist/immer.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPatches = exports.Immer = void 0;
exports.castDraft = K;
exports.castImmutable = $;
exports.createDraft = void 0;
exports.current = D;
exports.default = void 0;
exports.enableAllPlugins = J;
exports.enableES5 = N;
exports.enableMapSet = C;
exports.enablePatches = T;
exports.finishDraft = void 0;
exports.freeze = d;
exports.immerable = void 0;
exports.isDraft = r;
exports.isDraftable = t;
exports.nothing = void 0;
exports.original = e;
exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = void 0;

function n(n) {
  for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];

  if ("production" !== "development") {
    var i = Y[n],
        o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function (n) {
    return "'" + n + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function r(n) {
  return !!n && !!n[Q];
}

function t(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var r = Object.getPrototypeOf(n);
    if (null === r) return !0;
    var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
  }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v(n));
}

function e(t) {
  return r(t) || n(23, t), t[Q].t;
}

function i(n, r, t) {
  void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function (e) {
    t && "symbol" == typeof e || r(e, n[e], n);
  }) : n.forEach(function (t, e) {
    return r(e, t, n);
  });
}

function o(n) {
  var r = n[Q];
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}

function u(n, r) {
  return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}

function a(n, r) {
  return 2 === o(n) ? n.get(r) : n[r];
}

function f(n, r, t) {
  var e = o(n);
  2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : n[r] = t;
}

function c(n, r) {
  return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}

function s(n) {
  return X && n instanceof Map;
}

function v(n) {
  return q && n instanceof Set;
}

function p(n) {
  return n.o || n.t;
}

function l(n) {
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  var r = rn(n);
  delete r[Q];

  for (var t = nn(r), e = 0; e < t.length; e++) {
    var i = t[e],
        o = r[i];
    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: n[i]
    });
  }

  return Object.create(Object.getPrototypeOf(n), r);
}

function d(n, e) {
  return void 0 === e && (e = !1), y(n) || r(n) || !t(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function (n, r) {
    return d(r, !0);
  }, !0), n);
}

function h() {
  n(2);
}

function y(n) {
  return null == n || "object" != typeof n || Object.isFrozen(n);
}

function b(r) {
  var t = tn[r];
  return t || n(18, r), t;
}

function m(n, r) {
  tn[n] || (tn[n] = r);
}

function _() {
  return "production" === "development" || U || n(0), U;
}

function j(n, r) {
  r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}

function O(n) {
  g(n), n.p.forEach(S), n.p = null;
}

function g(n) {
  n === U && (U = n.l);
}

function w(n) {
  return U = {
    p: [],
    l: U,
    h: n,
    m: !0,
    _: 0
  };
}

function S(n) {
  var r = n[Q];
  0 === r.i || 1 === r.i ? r.j() : r.O = !0;
}

function P(r, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== r && r !== i;
  return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}

function M(n, r, t) {
  if (y(r)) return r;
  var e = r[Q];
  if (!e) return i(r, function (i, o) {
    return A(n, e, r, i, o, t);
  }, !0), r;
  if (e.A !== n) return r;
  if (!e.P) return x(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
    i(3 === e.i ? new Set(o) : o, function (r, i) {
      return A(n, e, o, r, i, t);
    }), x(n, o, !1), t && n.u && b("Patches").R(e, t, n.u, n.s);
  }

  return e.o;
}

function A(e, i, o, a, c, s) {
  if ("production" !== "development" && c === o && n(5), r(c)) {
    var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
    if (f(o, a, v), !r(v)) return;
    e.m = !1;
  }

  if (t(c) && !y(c)) {
    if (!e.h.F && e._ < 1) return;
    M(e, c), i && i.A.l || x(e, c);
  }
}

function x(n, r, t) {
  void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
}

function z(n, r) {
  var t = n[Q];
  return (t ? p(t) : n)[r];
}

function I(n, r) {
  if (r in n) for (var t = Object.getPrototypeOf(n); t;) {
    var e = Object.getOwnPropertyDescriptor(t, r);
    if (e) return e;
    t = Object.getPrototypeOf(t);
  }
}

function k(n) {
  n.P || (n.P = !0, n.l && k(n.l));
}

function E(n) {
  n.o || (n.o = l(n.t));
}

function R(n, r, t) {
  var e = s(r) ? b("MapSet").N(r, t) : v(r) ? b("MapSet").T(r, t) : n.g ? function (n, r) {
    var t = Array.isArray(n),
        e = {
      i: t ? 1 : 0,
      A: r ? r.A : _(),
      P: !1,
      I: !1,
      D: {},
      l: r,
      t: n,
      k: null,
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = en;
    t && (i = [e], o = on);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(r, t) : b("ES5").J(r, t);
  return (t ? t.A : _()).p.push(e), e;
}

function D(e) {
  return r(e) || n(22, e), function n(r) {
    if (!t(r)) return r;
    var e,
        u = r[Q],
        c = o(r);

    if (u) {
      if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
      u.I = !0, e = F(r, c), u.I = !1;
    } else e = F(r, c);

    return i(e, function (r, t) {
      u && a(u.t, r) === t || f(e, r, n(t));
    }), 3 === c ? new Set(e) : e;
  }(e);
}

function F(n, r) {
  switch (r) {
    case 2:
      return new Map(n);

    case 3:
      return Array.from(n);
  }

  return l(n);
}

function N() {
  function t(n, r) {
    var t = s[n];
    return t ? t.enumerable = r : s[n] = t = {
      configurable: !0,
      enumerable: r,
      get: function () {
        var r = this[Q];
        return "production" !== "development" && f(r), en.get(r, n);
      },
      set: function (r) {
        var t = this[Q];
        "production" !== "development" && f(t), en.set(t, n, r);
      }
    }, t;
  }

  function e(n) {
    for (var r = n.length - 1; r >= 0; r--) {
      var t = n[r][Q];
      if (!t.P) switch (t.i) {
        case 5:
          a(t) && k(t);
          break;

        case 4:
          o(t) && k(t);
      }
    }
  }

  function o(n) {
    for (var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--) {
      var o = e[i];

      if (o !== Q) {
        var a = r[o];
        if (void 0 === a && !u(r, o)) return !0;
        var f = t[o],
            s = f && f[Q];
        if (s ? s.t !== a : !c(f, a)) return !0;
      }
    }

    var v = !!r[Q];
    return e.length !== nn(r).length + (v ? 0 : 1);
  }

  function a(n) {
    var r = n.k;
    if (r.length !== n.t.length) return !0;
    var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
    if (t && !t.get) return !0;

    for (var e = 0; e < r.length; e++) if (!r.hasOwnProperty(e)) return !0;

    return !1;
  }

  function f(r) {
    r.O && n(3, JSON.stringify(p(r)));
  }

  var s = {};
  m("ES5", {
    J: function (n, r) {
      var e = Array.isArray(n),
          i = function (n, r) {
        if (n) {
          for (var e = Array(r.length), i = 0; i < r.length; i++) Object.defineProperty(e, "" + i, t(i, !0));

          return e;
        }

        var o = rn(r);
        delete o[Q];

        for (var u = nn(o), a = 0; a < u.length; a++) {
          var f = u[a];
          o[f] = t(f, n || !!o[f].enumerable);
        }

        return Object.create(Object.getPrototypeOf(r), o);
      }(e, n),
          o = {
        i: e ? 5 : 4,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: r,
        t: n,
        k: i,
        o: null,
        O: !1,
        C: !1
      };

      return Object.defineProperty(i, Q, {
        value: o,
        writable: !0
      }), i;
    },
    S: function (n, t, o) {
      o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
        if (r && "object" == typeof r) {
          var t = r[Q];

          if (t) {
            var e = t.t,
                o = t.k,
                f = t.D,
                c = t.i;
            if (4 === c) i(o, function (r) {
              r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
            }), i(e, function (n) {
              void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
            });else if (5 === c) {
              if (a(t) && (k(t), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < o.length; v++) f[v] = !0;

              for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
            }
          }
        }
      }(n.p[0]), e(n.p));
    },
    K: function (n) {
      return 4 === n.i ? o(n) : a(n);
    }
  });
}

function T() {
  function e(n) {
    if (!t(n)) return n;
    if (Array.isArray(n)) return n.map(e);
    if (s(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], e(n[1])];
    }));
    if (v(n)) return new Set(Array.from(n).map(e));
    var r = Object.create(Object.getPrototypeOf(n));

    for (var i in n) r[i] = e(n[i]);

    return u(n, L) && (r[L] = n[L]), r;
  }

  function f(n) {
    return r(n) ? e(n) : n;
  }

  var c = "add";
  m("Patches", {
    $: function (r, t) {
      return t.forEach(function (t) {
        for (var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++) {
          var v = o(f),
              p = "" + i[s];
          0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
        }

        var l = o(f),
            d = e(t.value),
            h = i[i.length - 1];

        switch (u) {
          case "replace":
            switch (l) {
              case 2:
                return f.set(h, d);

              case 3:
                n(16);

              default:
                return f[h] = d;
            }

          case c:
            switch (l) {
              case 1:
                return "-" === h ? f.push(d) : f.splice(h, 0, d);

              case 2:
                return f.set(h, d);

              case 3:
                return f.add(d);

              default:
                return f[h] = d;
            }

          case "remove":
            switch (l) {
              case 1:
                return f.splice(h, 1);

              case 2:
                return f.delete(h);

              case 3:
                return f.delete(t.value);

              default:
                return delete f[h];
            }

          default:
            n(17, u);
        }
      }), r;
    },
    R: function (n, r, t, e) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, r, t, e) {
            var o = n.t,
                s = n.o;
            i(n.D, function (n, i) {
              var v = a(o, n),
                  p = a(s, n),
                  l = i ? u(o, n) ? "replace" : c : "remove";

              if (v !== p || "replace" !== l) {
                var d = r.concat(n);
                t.push("remove" === l ? {
                  op: l,
                  path: d
                } : {
                  op: l,
                  path: d,
                  value: p
                }), e.push(l === c ? {
                  op: "remove",
                  path: d
                } : "remove" === l ? {
                  op: c,
                  path: d,
                  value: f(v)
                } : {
                  op: "replace",
                  path: d,
                  value: f(v)
                });
              }
            });
          }(n, r, t, e);

        case 5:
        case 1:
          return function (n, r, t, e) {
            var i = n.t,
                o = n.D,
                u = n.o;

            if (u.length < i.length) {
              var a = [u, i];
              i = a[0], u = a[1];
              var s = [e, t];
              t = s[0], e = s[1];
            }

            for (var v = 0; v < i.length; v++) if (o[v] && u[v] !== i[v]) {
              var p = r.concat([v]);
              t.push({
                op: "replace",
                path: p,
                value: f(u[v])
              }), e.push({
                op: "replace",
                path: p,
                value: f(i[v])
              });
            }

            for (var l = i.length; l < u.length; l++) {
              var d = r.concat([l]);
              t.push({
                op: c,
                path: d,
                value: f(u[l])
              });
            }

            i.length < u.length && e.push({
              op: "replace",
              path: r.concat(["length"]),
              value: i.length
            });
          }(n, r, t, e);

        case 3:
          return function (n, r, t, e) {
            var i = n.t,
                o = n.o,
                u = 0;
            i.forEach(function (n) {
              if (!o.has(n)) {
                var i = r.concat([u]);
                t.push({
                  op: "remove",
                  path: i,
                  value: n
                }), e.unshift({
                  op: c,
                  path: i,
                  value: n
                });
              }

              u++;
            }), u = 0, o.forEach(function (n) {
              if (!i.has(n)) {
                var o = r.concat([u]);
                t.push({
                  op: c,
                  path: o,
                  value: n
                }), e.unshift({
                  op: "remove",
                  path: o,
                  value: n
                });
              }

              u++;
            });
          }(n, r, t, e);
      }
    },
    M: function (n, r, t, e) {
      t.push({
        op: "replace",
        path: [],
        value: r === H ? void 0 : r
      }), e.push({
        op: "replace",
        path: [],
        value: n
      });
    }
  });
}

function C() {
  function r(n, r) {
    function t() {
      this.constructor = n;
    }

    a(n, r), n.prototype = (t.prototype = r.prototype, new t());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function o(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (r) {
      if (t(r)) {
        var e = R(n.A.h, r, n);
        n.p.set(r, e), n.o.add(e);
      } else n.o.add(r);
    }));
  }

  function u(r) {
    r.O && n(3, JSON.stringify(p(r)));
  }

  var a = function (n, r) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, r) {
      n.__proto__ = r;
    } || function (n, r) {
      for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
    })(n, r);
  },
      f = function () {
    function n(n, r) {
      return this[Q] = {
        i: 2,
        l: r,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    r(n, Map);
    var o = n.prototype;
    return Object.defineProperty(o, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o.has = function (n) {
      return p(this[Q]).has(n);
    }, o.set = function (n, r) {
      var t = this[Q];
      return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.D.set(n, !0), t.o.set(n, r), t.D.set(n, !0)), this;
    }, o.delete = function (n) {
      if (!this.has(n)) return !1;
      var r = this[Q];
      return u(r), e(r), k(r), r.t.has(n) ? r.D.set(n, !1) : r.D.delete(n), r.o.delete(n), !0;
    }, o.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (e(n), k(n), n.D = new Map(), i(n.t, function (r) {
        n.D.set(r, !1);
      }), n.o.clear());
    }, o.forEach = function (n, r) {
      var t = this;
      p(this[Q]).forEach(function (e, i) {
        n.call(r, t.get(i), i, t);
      });
    }, o.get = function (n) {
      var r = this[Q];
      u(r);
      var i = p(r).get(n);
      if (r.I || !t(i)) return i;
      if (i !== r.t.get(n)) return i;
      var o = R(r.A.h, i, r);
      return e(r), r.o.set(n, o), o;
    }, o.keys = function () {
      return p(this[Q]).keys();
    }, o.values = function () {
      var n,
          r = this,
          t = this.keys();
      return (n = {})[V] = function () {
        return r.values();
      }, n.next = function () {
        var n = t.next();
        return n.done ? n : {
          done: !1,
          value: r.get(n.value)
        };
      }, n;
    }, o.entries = function () {
      var n,
          r = this,
          t = this.keys();
      return (n = {})[V] = function () {
        return r.entries();
      }, n.next = function () {
        var n = t.next();
        if (n.done) return n;
        var e = r.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, o[V] = function () {
      return this.entries();
    }, n;
  }(),
      c = function () {
    function n(n, r) {
      return this[Q] = {
        i: 3,
        l: r,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    r(n, Set);
    var t = n.prototype;
    return Object.defineProperty(t, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), t.has = function (n) {
      var r = this[Q];
      return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
    }, t.add = function (n) {
      var r = this[Q];
      return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
    }, t.delete = function (n) {
      if (!this.has(n)) return !1;
      var r = this[Q];
      return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
    }, t.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (o(n), k(n), n.o.clear());
    }, t.values = function () {
      var n = this[Q];
      return u(n), o(n), n.o.values();
    }, t.entries = function () {
      var n = this[Q];
      return u(n), o(n), n.o.entries();
    }, t.keys = function () {
      return this.values();
    }, t[V] = function () {
      return this.values();
    }, t.forEach = function (n, r) {
      for (var t = this.values(), e = t.next(); !e.done;) n.call(r, e.value, e.value, this), e = t.next();
    }, n;
  }();

  m("MapSet", {
    N: function (n, r) {
      return new f(n, r);
    },
    T: function (n, r) {
      return new c(n, r);
    }
  });
}

function J() {
  N(), C(), T();
}

function K(n) {
  return n;
}

function $(n) {
  return n;
}

var G,
    U,
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    q = "undefined" != typeof Set,
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
  },
  22: function (n) {
    return "'current' expects a draft, got: " + n;
  },
  23: function (n) {
    return "'original' expects a draft, got: " + n;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
},
    Z = "" + Object.prototype.constructor,
    nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    rn = Object.getOwnPropertyDescriptors || function (n) {
  var r = {};
  return nn(n).forEach(function (t) {
    r[t] = Object.getOwnPropertyDescriptor(n, t);
  }), r;
},
    tn = {},
    en = {
  get: function (n, r) {
    if (r === Q) return n;
    var e = p(n);
    if (!u(e, r)) return function (n, r, t) {
      var e,
          i = I(r, t);
      return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
    }(n, e, r);
    var i = e[r];
    return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = R(n.A.h, i, n)) : i;
  },
  has: function (n, r) {
    return r in p(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(p(n));
  },
  set: function (n, r, t) {
    var e = I(p(n), r);
    if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;

    if (!n.P) {
      var i = z(p(n), r),
          o = null == i ? void 0 : i[Q];
      if (o && o.t === t) return n.o[r] = t, n.D[r] = !1, !0;
      if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
      E(n), k(n);
    }

    return n.o[r] === t && "number" != typeof t && (void 0 !== t || r in n.o) || (n.o[r] = t, n.D[r] = !0, !0);
  },
  deleteProperty: function (n, r) {
    return void 0 !== z(n.t, r) || r in n.t ? (n.D[r] = !1, E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
  },
  getOwnPropertyDescriptor: function (n, r) {
    var t = p(n),
        e = Reflect.getOwnPropertyDescriptor(t, r);
    return e ? {
      writable: !0,
      configurable: 1 !== n.i || "length" !== r,
      enumerable: e.enumerable,
      value: t[r]
    } : e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    on = {};

exports.immerable = L;
exports.nothing = H;
i(en, function (n, r) {
  on[n] = function () {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
}), on.deleteProperty = function (r, t) {
  return "production" !== "development" && isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
}, on.set = function (r, t, e) {
  return "production" !== "development" && "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
};

var un = function () {
  function e(r) {
    var e = this;
    this.g = B, this.F = !0, this.produce = function (r, i, o) {
      if ("function" == typeof r && "function" != typeof i) {
        var u = i;
        i = r;
        var a = e;
        return function (n) {
          var r = this;
          void 0 === n && (n = u);

          for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];

          return a.produce(n, function (n) {
            var t;
            return (t = i).call.apply(t, [r, n].concat(e));
          });
        };
      }

      var f;

      if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
        var c = w(e),
            s = R(e, r, void 0),
            v = !0;

        try {
          f = i(s), v = !1;
        } finally {
          v ? O(c) : g(c);
        }

        return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
          return j(c, o), P(n, c);
        }, function (n) {
          throw O(c), n;
        }) : (j(c, o), P(f, c));
      }

      if (!r || "object" != typeof r) {
        if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.F && d(f, !0), o) {
          var p = [],
              l = [];
          b("Patches").M(r, f, p, l), o(p, l);
        }

        return f;
      }

      n(21, r);
    }, this.produceWithPatches = function (n, r) {
      if ("function" == typeof n) return function (r) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];

        return e.produceWithPatches(r, function (r) {
          return n.apply(void 0, [r].concat(i));
        });
      };
      var t,
          i,
          o = e.produce(n, r, function (n, r) {
        t = n, i = r;
      });
      return "undefined" != typeof Promise && o instanceof Promise ? o.then(function (n) {
        return [n, t, i];
      }) : [o, t, i];
    }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
  }

  var i = e.prototype;
  return i.createDraft = function (e) {
    t(e) || n(8), r(e) && (e = D(e));
    var i = w(this),
        o = R(this, e, void 0);
    return o[Q].C = !0, g(i), o;
  }, i.finishDraft = function (r, t) {
    var e = r && r[Q];
    "production" !== "development" && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return j(i, t), P(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.F = n;
  }, i.setUseProxies = function (r) {
    r && !B && n(20), this.g = r;
  }, i.applyPatches = function (n, t) {
    var e;

    for (e = t.length - 1; e >= 0; e--) {
      var i = t[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    e > -1 && (t = t.slice(e + 1));
    var o = b("Patches").$;
    return r(n) ? o(n, t) : this.produce(n, function (n) {
      return o(n, t);
    });
  }, e;
}(),
    an = new un(),
    fn = an.produce,
    cn = an.produceWithPatches.bind(an),
    sn = an.setAutoFreeze.bind(an),
    vn = an.setUseProxies.bind(an),
    pn = an.applyPatches.bind(an),
    ln = an.createDraft.bind(an),
    dn = an.finishDraft.bind(an);

exports.finishDraft = dn;
exports.createDraft = ln;
exports.applyPatches = pn;
exports.setUseProxies = vn;
exports.setAutoFreeze = sn;
exports.produceWithPatches = cn;
exports.produce = fn;
exports.Immer = un;
var _default = fn;
exports.default = _default;
},{}],"node_modules/boardgame.io/dist/esm/plugin-random-087f861e.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.R = void 0;
exports.a = alea;

// Inlined version of Alea from https://github.com/davidbau/seedrandom.
// Converted to Typescript October 2020.
class Alea {
  constructor(seed) {
    const mash = Mash(); // Apply the seeding algorithm from Baagoe.

    this.c = 1;
    this.s0 = mash(' ');
    this.s1 = mash(' ');
    this.s2 = mash(' ');
    this.s0 -= mash(seed);

    if (this.s0 < 0) {
      this.s0 += 1;
    }

    this.s1 -= mash(seed);

    if (this.s1 < 0) {
      this.s1 += 1;
    }

    this.s2 -= mash(seed);

    if (this.s2 < 0) {
      this.s2 += 1;
    }
  }

  next() {
    const t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32

    this.s0 = this.s1;
    this.s1 = this.s2;
    return this.s2 = t - (this.c = Math.trunc(t));
  }

}

function Mash() {
  let n = 0xefc8249d;

  const mash = function (data) {
    const str = data.toString();

    for (let i = 0; i < str.length; i++) {
      n += str.charCodeAt(i);
      let h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }

    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function alea(seed, state) {
  const xg = new Alea(seed);
  const prng = xg.next.bind(xg);
  if (state) copy(state, xg);

  prng.state = () => copy(xg, {});

  return prng;
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Random
 *
 * Calls that require a pseudorandom number generator.
 * Uses a seed from ctx, and also persists the PRNG
 * state in ctx so that moves can stay pure.
 */


class Random {
  /**
   * constructor
   * @param {object} ctx - The ctx object to initialize from.
   */
  constructor(state) {
    // If we are on the client, the seed is not present.
    // Just use a temporary seed to execute the move without
    // crashing it. The move state itself is discarded,
    // so the actual value doesn't matter.
    this.state = state || {
      seed: '0'
    };
    this.used = false;
  }
  /**
   * Generates a new seed from the current date / time.
   */


  static seed() {
    return Date.now().toString(36).slice(-10);
  }

  isUsed() {
    return this.used;
  }

  getState() {
    return this.state;
  }
  /**
   * Generate a random number.
   */


  _random() {
    this.used = true;
    const R = this.state;
    const seed = R.prngstate ? '' : R.seed;
    const rand = alea(seed, R.prngstate);
    const number = rand();
    this.state = { ...R,
      prngstate: rand.state()
    };
    return number;
  }

  api() {
    const random = this._random.bind(this);

    const SpotValue = {
      D4: 4,
      D6: 6,
      D8: 8,
      D10: 10,
      D12: 12,
      D20: 20
    }; // Generate functions for predefined dice values D4 - D20.

    const predefined = {};

    for (const key in SpotValue) {
      const spotvalue = SpotValue[key];

      predefined[key] = diceCount => {
        return diceCount === undefined ? Math.floor(random() * spotvalue) + 1 : Array.from({
          length: diceCount
        }).map(() => Math.floor(random() * spotvalue) + 1);
      };
    }

    function Die() {
      let spotvalue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      let diceCount = arguments.length > 1 ? arguments[1] : undefined;
      return diceCount === undefined ? Math.floor(random() * spotvalue) + 1 : Array.from({
        length: diceCount
      }).map(() => Math.floor(random() * spotvalue) + 1);
    }

    return {
      /**
       * Similar to Die below, but with fixed spot values.
       * Supports passing a diceCount
       *    if not defined, defaults to 1 and returns the value directly.
       *    if defined, returns an array containing the random dice values.
       *
       * D4: (diceCount) => value
       * D6: (diceCount) => value
       * D8: (diceCount) => value
       * D10: (diceCount) => value
       * D12: (diceCount) => value
       * D20: (diceCount) => value
       */
      ...predefined,

      /**
       * Roll a die of specified spot value.
       *
       * @param {number} spotvalue - The die dimension (default: 6).
       * @param {number} diceCount - number of dice to throw.
       *                             if not defined, defaults to 1 and returns the value directly.
       *                             if defined, returns an array containing the random dice values.
       */
      Die,

      /**
       * Generate a random number between 0 and 1.
       */
      Number: () => {
        return random();
      },

      /**
       * Shuffle an array.
       *
       * @param {Array} deck - The array to shuffle. Does not mutate
       *                       the input, but returns the shuffled array.
       */
      Shuffle: deck => {
        const clone = [...deck];
        let sourceIndex = deck.length;
        let destinationIndex = 0;
        const shuffled = Array.from({
          length: sourceIndex
        });

        while (sourceIndex) {
          const randomIndex = Math.trunc(sourceIndex * random());
          shuffled[destinationIndex++] = clone[randomIndex];
          clone[randomIndex] = clone[--sourceIndex];
        }

        return shuffled;
      },
      _private: this
    };
  }

}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


const RandomPlugin = {
  name: 'random',
  noClient: _ref => {
    let {
      api
    } = _ref;
    return api._private.isUsed();
  },
  flush: _ref2 => {
    let {
      api
    } = _ref2;
    return api._private.getState();
  },
  api: _ref3 => {
    let {
      data
    } = _ref3;
    const random = new Random(data);
    return random.api();
  },
  setup: _ref4 => {
    let {
      game
    } = _ref4;
    let {
      seed
    } = game;

    if (seed === undefined) {
      seed = Random.seed();
    }

    return {
      seed
    };
  },
  playerView: () => undefined
};
exports.R = RandomPlugin;
},{}],"node_modules/lodash.isplainobject/index.js":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;

},{}],"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.G = exports.F = exports.E = exports.C = exports.B = exports.A = void 0;
exports.I = InitTurnOrderState;
exports.T = exports.S = exports.R = exports.P = exports.N = exports.M = void 0;
exports.U = UpdateTurnOrderState;
exports.a = supportDeprecatedMoveLimit;
exports.b = SetActivePlayers;
exports.c = UpdateActivePlayersOnceEmpty;
exports.d = void 0;
exports.e = error;
exports.h = exports.g = exports.f = void 0;
exports.i = info;
exports.z = exports.y = exports.x = exports.w = exports.v = exports.u = exports.t = exports.s = exports.r = exports.q = exports.p = exports.o = exports.n = exports.m = exports.l = exports.k = exports.j = void 0;

var _immer = _interopRequireDefault(require("immer"));

var _pluginRandom087f861e = require("./plugin-random-087f861e.js");

var _lodash = _interopRequireDefault(require("lodash.isplainobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const MAKE_MOVE = 'MAKE_MOVE';
exports.M = MAKE_MOVE;
const GAME_EVENT = 'GAME_EVENT';
exports.o = GAME_EVENT;
const REDO = 'REDO';
exports.R = REDO;
const RESET = 'RESET';
exports.l = RESET;
const SYNC = 'SYNC';
exports.j = SYNC;
const UNDO = 'UNDO';
exports.h = UNDO;
const UPDATE = 'UPDATE';
exports.k = UPDATE;
const PATCH = 'PATCH';
exports.P = PATCH;
const PLUGIN = 'PLUGIN';
exports.d = PLUGIN;
const STRIP_TRANSIENTS = 'STRIP_TRANSIENTS';
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Generate a move to be dispatched to the game move reducer.
 *
 * @param {string} type - The move type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */

exports.p = STRIP_TRANSIENTS;

const makeMove = (type, args, playerID, credentials) => ({
  type: MAKE_MOVE,
  payload: {
    type,
    args,
    playerID,
    credentials
  }
});
/**
 * Generate a game event to be dispatched to the flow reducer.
 *
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */


exports.B = makeMove;

const gameEvent = (type, args, playerID, credentials) => ({
  type: GAME_EVENT,
  payload: {
    type,
    args,
    playerID,
    credentials
  }
});
/**
 * Generate an automatic game event that is a side-effect of a move.
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */


exports.g = gameEvent;

const automaticGameEvent = (type, args, playerID, credentials) => ({
  type: GAME_EVENT,
  payload: {
    type,
    args,
    playerID,
    credentials
  },
  automatic: true
});

const sync = info => ({
  type: SYNC,
  state: info.state,
  log: info.log,
  initialState: info.initialState,
  clientOnly: true
});
/**
 * Used to update the Redux store's state with patch in response to
 * an action coming from another player.
 * @param prevStateID previous stateID
 * @param stateID stateID after this patch
 * @param {Operation[]} patch - The patch to apply.
 * @param {LogEntry[]} deltalog - A log delta.
 */


exports.s = sync;

const patch = (prevStateID, stateID, patch, deltalog) => ({
  type: PATCH,
  prevStateID,
  stateID,
  patch,
  deltalog,
  clientOnly: true
});
/**
 * Used to update the Redux store's state in response to
 * an action coming from another player.
 * @param {object} state - The state to restore.
 * @param {Array} deltalog - A log delta.
 */


exports.y = patch;

const update = (state, deltalog) => ({
  type: UPDATE,
  state,
  deltalog,
  clientOnly: true
});
/**
 * Used to reset the game state.
 * @param {object} state - The initial state.
 */


exports.z = update;

const reset = state => ({
  type: RESET,
  state,
  clientOnly: true
});
/**
 * Used to undo the last move.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */


exports.u = reset;

const undo = (playerID, credentials) => ({
  type: UNDO,
  payload: {
    type: null,
    args: null,
    playerID,
    credentials
  }
});
/**
 * Used to redo the last undone move.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */


exports.v = undo;

const redo = (playerID, credentials) => ({
  type: REDO,
  payload: {
    type: null,
    args: null,
    playerID,
    credentials
  }
});
/**
 * Allows plugins to define their own actions and intercept them.
 */


exports.w = redo;

const plugin = (type, args, playerID, credentials) => ({
  type: PLUGIN,
  payload: {
    type,
    args,
    playerID,
    credentials
  }
});
/**
 * Private action used to strip transient metadata (e.g. errors) from the game
 * state.
 */


const stripTransients = () => ({
  type: STRIP_TRANSIENTS
});

exports.r = stripTransients;
var ActionCreators = /*#__PURE__*/Object.freeze({
  __proto__: null,
  makeMove: makeMove,
  gameEvent: gameEvent,
  automaticGameEvent: automaticGameEvent,
  sync: sync,
  patch: patch,
  update: update,
  reset: reset,
  undo: undo,
  redo: redo,
  plugin: plugin,
  stripTransients: stripTransients
});
/**
 * Moves can return this when they want to indicate
 * that the combination of arguments is illegal and
 * the move ought to be discarded.
 */

exports.A = ActionCreators;
const INVALID_MOVE = 'INVALID_MOVE';
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Plugin that allows using Immer to make immutable changes
 * to G by just mutating it.
 */

exports.n = INVALID_MOVE;
const ImmerPlugin = {
  name: 'plugin-immer',
  fnWrap: move => function (G, ctx) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    let isInvalid = false;
    const newG = (0, _immer.default)(G, G => {
      const result = move(G, ctx, ...args);

      if (result === INVALID_MOVE) {
        isInvalid = true;
        return;
      }

      return result;
    });
    if (isInvalid) return INVALID_MOVE;
    return newG;
  }
};
var GameMethod;
exports.G = GameMethod;

(function (GameMethod) {
  GameMethod["MOVE"] = "MOVE";
  GameMethod["GAME_ON_END"] = "GAME_ON_END";
  GameMethod["PHASE_ON_BEGIN"] = "PHASE_ON_BEGIN";
  GameMethod["PHASE_ON_END"] = "PHASE_ON_END";
  GameMethod["TURN_ON_BEGIN"] = "TURN_ON_BEGIN";
  GameMethod["TURN_ON_MOVE"] = "TURN_ON_MOVE";
  GameMethod["TURN_ON_END"] = "TURN_ON_END";
})(GameMethod || (exports.G = GameMethod = {}));
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


var Errors;

(function (Errors) {
  Errors["CalledOutsideHook"] = "Events must be called from moves or the `onBegin`, `onEnd`, and `onMove` hooks.\nThis error probably means you called an event from other game code, like an `endIf` trigger or one of the `turn.order` methods.";
  Errors["EndTurnInOnEnd"] = "`endTurn` is disallowed in `onEnd` hooks \u2014 the turn is already ending.";
  Errors["MaxTurnEndings"] = "Maximum number of turn endings exceeded for this update.\nThis likely means game code is triggering an infinite loop.";
  Errors["PhaseEventInOnEnd"] = "`setPhase` & `endPhase` are disallowed in a phase\u2019s `onEnd` hook \u2014 the phase is already ending.\nIf you\u2019re trying to dynamically choose the next phase when a phase ends, use the phase\u2019s `next` trigger.";
  Errors["StageEventInOnEnd"] = "`setStage`, `endStage` & `setActivePlayers` are disallowed in `onEnd` hooks.";
  Errors["StageEventInPhaseBegin"] = "`setStage`, `endStage` & `setActivePlayers` are disallowed in a phase\u2019s `onBegin` hook.\nUse `setActivePlayers` in a `turn.onBegin` hook or declare stages with `turn.activePlayers` instead.";
  Errors["StageEventInTurnBegin"] = "`setStage` & `endStage` are disallowed in `turn.onBegin`.\nUse `setActivePlayers` or declare stages with `turn.activePlayers` instead.";
})(Errors || (Errors = {}));
/**
 * Events
 */


class Events {
  constructor(flow, ctx, playerID) {
    this.flow = flow;
    this.playerID = playerID;
    this.dispatch = [];
    this.initialTurn = ctx.turn;
    this.updateTurnContext(ctx, undefined); // This is an arbitrarily large upper threshold, which could be made
    // configurable via a game option if the need arises.

    this.maxEndedTurnsPerAction = ctx.numPlayers * 100;
  }

  api() {
    var _this = this;

    const events = {
      _private: this
    };

    for (const type of this.flow.eventNames) {
      events[type] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this.dispatch.push({
          type,
          args,
          phase: _this.currentPhase,
          turn: _this.currentTurn,
          calledFrom: _this.currentMethod,
          // Used to capture a stack trace in case it is needed later.
          error: new Error('Events Plugin Error')
        });
      };
    }

    return events;
  }

  isUsed() {
    return this.dispatch.length > 0;
  }

  updateTurnContext(ctx, methodType) {
    this.currentPhase = ctx.phase;
    this.currentTurn = ctx.turn;
    this.currentMethod = methodType;
  }

  unsetCurrentMethod() {
    this.currentMethod = undefined;
  }
  /**
   * Updates ctx with the triggered events.
   * @param {object} state - The state object { G, ctx }.
   */


  update(state) {
    const initialState = state;

    const stateWithError = (_ref, message) => {
      let {
        stack
      } = _ref;
      return { ...initialState,
        plugins: { ...initialState.plugins,
          events: { ...initialState.plugins.events,
            data: {
              error: message + '\n' + stack
            }
          }
        }
      };
    };

    EventQueue: for (let i = 0; i < this.dispatch.length; i++) {
      const event = this.dispatch[i];
      const turnHasEnded = event.turn !== state.ctx.turn; // This protects against potential infinite loops if specific events are called on hooks.
      // The moment we exceed the defined threshold, we just bail out of all phases.

      const endedTurns = this.currentTurn - this.initialTurn;

      if (endedTurns >= this.maxEndedTurnsPerAction) {
        return stateWithError(event.error, Errors.MaxTurnEndings);
      }

      if (event.calledFrom === undefined) {
        return stateWithError(event.error, Errors.CalledOutsideHook);
      } // Stop processing events once the game has finished.


      if (state.ctx.gameover) break EventQueue;

      switch (event.type) {
        case 'endStage':
        case 'setStage':
        case 'setActivePlayers':
          {
            switch (event.calledFrom) {
              // Disallow all stage events in onEnd and phase.onBegin hooks.
              case GameMethod.TURN_ON_END:
              case GameMethod.PHASE_ON_END:
                return stateWithError(event.error, Errors.StageEventInOnEnd);

              case GameMethod.PHASE_ON_BEGIN:
                return stateWithError(event.error, Errors.StageEventInPhaseBegin);
              // Disallow setStage & endStage in turn.onBegin hooks.

              case GameMethod.TURN_ON_BEGIN:
                if (event.type === 'setActivePlayers') break;
                return stateWithError(event.error, Errors.StageEventInTurnBegin);
            } // If the turn already ended, don't try to process stage events.


            if (turnHasEnded) continue EventQueue;
            break;
          }

        case 'endTurn':
          {
            if (event.calledFrom === GameMethod.TURN_ON_END || event.calledFrom === GameMethod.PHASE_ON_END) {
              return stateWithError(event.error, Errors.EndTurnInOnEnd);
            } // If the turn already ended some other way,
            // don't try to end the turn again.


            if (turnHasEnded) continue EventQueue;
            break;
          }

        case 'endPhase':
        case 'setPhase':
          {
            if (event.calledFrom === GameMethod.PHASE_ON_END) {
              return stateWithError(event.error, Errors.PhaseEventInOnEnd);
            } // If the phase already ended some other way,
            // don't try to end the phase again.


            if (event.phase !== state.ctx.phase) continue EventQueue;
            break;
          }
      }

      const action = automaticGameEvent(event.type, event.args, this.playerID);
      state = this.flow.processEvent(state, action);
    }

    return state;
  }

}
/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


const EventsPlugin = {
  name: 'events',
  noClient: _ref2 => {
    let {
      api
    } = _ref2;
    return api._private.isUsed();
  },
  isInvalid: _ref3 => {
    let {
      data
    } = _ref3;
    return data.error || false;
  },
  // Update the events plugin’s internal turn context each time a move
  // or hook is called. This allows events called after turn or phase
  // endings to dispatch the current turn and phase correctly.
  fnWrap: (method, methodType) => function (G, ctx) {
    const api = ctx.events;
    if (api) api._private.updateTurnContext(ctx, methodType);

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    G = method(G, ctx, ...args);
    if (api) api._private.unsetCurrentMethod();
    return G;
  },
  dangerouslyFlushRawState: _ref4 => {
    let {
      state,
      api
    } = _ref4;
    return api._private.update(state);
  },
  api: _ref5 => {
    let {
      game,
      ctx,
      playerID
    } = _ref5;
    return new Events(game.flow, ctx, playerID).api();
  }
};
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Plugin that makes it possible to add metadata to log entries.
 * During a move, you can set metadata using ctx.log.setMetadata and it will be
 * available on the log entry for that move.
 */

const LogPlugin = {
  name: 'log',
  flush: () => ({}),
  api: _ref6 => {
    let {
      data
    } = _ref6;
    return {
      setMetadata: metadata => {
        data.metadata = metadata;
      }
    };
  },
  setup: () => ({})
};
/**
 * Check if a value can be serialized (e.g. using `JSON.stringify`).
 * Adapted from: https://stackoverflow.com/a/30712764/3829557
 */

function isSerializable(value) {
  // Primitives are OK.
  if (value === undefined || value === null || typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    return true;
  } // A non-primitive value that is neither a POJO or an array cannot be serialized.


  if (!(0, _lodash.default)(value) && !Array.isArray(value)) {
    return false;
  } // Recurse entries if the value is an object or array.


  for (const key in value) {
    if (!isSerializable(value[key])) return false;
  }

  return true;
}
/**
 * Plugin that checks whether state is serializable, in order to avoid
 * network serialization bugs.
 */


const SerializablePlugin = {
  name: 'plugin-serializable',
  fnWrap: move => function (G, ctx) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    const result = move(G, ctx, ...args); // Check state in non-production environments.

    if ("development" !== 'production' && !isSerializable(result)) {
      throw new Error('Move state is not JSON-serialiazable.\n' + 'See https://boardgame.io/documentation/#/?id=state for more information.');
    }

    return result;
  }
};
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const production = "development" === 'production';
const logfn = production ? () => {} : function () {
  return console.log(...arguments);
};

const errorfn = function () {
  return console.error(...arguments);
};

function info(msg) {
  logfn("INFO: ".concat(msg));
}

function error(error) {
  errorfn('ERROR:', error);
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * List of plugins that are always added.
 */


const CORE_PLUGINS = [ImmerPlugin, _pluginRandom087f861e.R, LogPlugin, SerializablePlugin];
const DEFAULT_PLUGINS = [...CORE_PLUGINS, EventsPlugin];
/**
 * Allow plugins to intercept actions and process them.
 */

const ProcessAction = (state, action, opts) => {
  // TODO(#723): Extend error handling to plugins.
  opts.game.plugins.filter(plugin => plugin.action !== undefined).filter(plugin => plugin.name === action.payload.type).forEach(plugin => {
    const name = plugin.name;
    const pluginState = state.plugins[name] || {
      data: {}
    };
    const data = plugin.action(pluginState.data, action.payload);
    state = { ...state,
      plugins: { ...state.plugins,
        [name]: { ...pluginState,
          data
        }
      }
    };
  });
  return state;
};
/**
 * The API's created by various plugins are stored in the plugins
 * section of the state object:
 *
 * {
 *   G: {},
 *   ctx: {},
 *   plugins: {
 *     plugin-a: {
 *       data: {},  // this is generated by the plugin at Setup / Flush.
 *       api: {},   // this is ephemeral and generated by Enhance.
 *     }
 *   }
 * }
 *
 * This function takes these API's and stuffs them back into
 * ctx for consumption inside a move function or hook.
 */


exports.f = ProcessAction;

const EnhanceCtx = state => {
  const ctx = { ...state.ctx
  };
  const plugins = state.plugins || {};
  Object.entries(plugins).forEach(_ref7 => {
    let [name, {
      api
    }] = _ref7;
    ctx[name] = api;
  });
  return ctx;
};
/**
 * Applies the provided plugins to the given move / flow function.
 *
 * @param methodToWrap - The move function or hook to apply the plugins to.
 * @param methodType - The type of the move or hook being wrapped.
 * @param plugins - The list of plugins.
 */


exports.E = EnhanceCtx;

const FnWrap = (methodToWrap, methodType, plugins) => {
  return [...CORE_PLUGINS, ...plugins, EventsPlugin].filter(plugin => plugin.fnWrap !== undefined).reduce((method, _ref8) => {
    let {
      fnWrap
    } = _ref8;
    return fnWrap(method, methodType);
  }, methodToWrap);
};
/**
 * Allows the plugin to generate its initial state.
 */


exports.F = FnWrap;

const Setup = (state, opts) => {
  [...DEFAULT_PLUGINS, ...opts.game.plugins].filter(plugin => plugin.setup !== undefined).forEach(plugin => {
    const name = plugin.name;
    const data = plugin.setup({
      G: state.G,
      ctx: state.ctx,
      game: opts.game
    });
    state = { ...state,
      plugins: { ...state.plugins,
        [name]: {
          data
        }
      }
    };
  });
  return state;
};
/**
 * Invokes the plugin before a move or event.
 * The API that the plugin generates is stored inside
 * the `plugins` section of the state (which is subsequently
 * merged into ctx).
 */


exports.t = Setup;

const Enhance = (state, opts) => {
  [...DEFAULT_PLUGINS, ...opts.game.plugins].filter(plugin => plugin.api !== undefined).forEach(plugin => {
    const name = plugin.name;
    const pluginState = state.plugins[name] || {
      data: {}
    };
    const api = plugin.api({
      G: state.G,
      ctx: state.ctx,
      data: pluginState.data,
      game: opts.game,
      playerID: opts.playerID
    });
    state = { ...state,
      plugins: { ...state.plugins,
        [name]: { ...pluginState,
          api
        }
      }
    };
  });
  return state;
};
/**
 * Allows plugins to update their state after a move / event.
 */


exports.m = Enhance;

const Flush = (state, opts) => {
  // We flush the events plugin first, then custom plugins and the core plugins.
  // This means custom plugins cannot use the events API but will be available in event hooks.
  // Note that plugins are flushed in reverse, to allow custom plugins calling each other.
  [...CORE_PLUGINS, ...opts.game.plugins, EventsPlugin].reverse().forEach(plugin => {
    const name = plugin.name;
    const pluginState = state.plugins[name] || {
      data: {}
    };

    if (plugin.flush) {
      const newData = plugin.flush({
        G: state.G,
        ctx: state.ctx,
        game: opts.game,
        api: pluginState.api,
        data: pluginState.data
      });
      state = { ...state,
        plugins: { ...state.plugins,
          [plugin.name]: {
            data: newData
          }
        }
      };
    } else if (plugin.dangerouslyFlushRawState) {
      state = plugin.dangerouslyFlushRawState({
        state,
        game: opts.game,
        api: pluginState.api,
        data: pluginState.data
      }); // Remove everything other than data.

      const data = state.plugins[name].data;
      state = { ...state,
        plugins: { ...state.plugins,
          [plugin.name]: {
            data
          }
        }
      };
    }
  });
  return state;
};
/**
 * Allows plugins to indicate if they should not be materialized on the client.
 * This will cause the client to discard the state update and wait for the
 * master instead.
 */


const NoClient = (state, opts) => {
  return [...DEFAULT_PLUGINS, ...opts.game.plugins].filter(plugin => plugin.noClient !== undefined).map(plugin => {
    const name = plugin.name;
    const pluginState = state.plugins[name];

    if (pluginState) {
      return plugin.noClient({
        G: state.G,
        ctx: state.ctx,
        game: opts.game,
        api: pluginState.api,
        data: pluginState.data
      });
    }

    return false;
  }).includes(true);
};
/**
 * Allows plugins to indicate if the entire action should be thrown out
 * as invalid. This will cancel the entire state update.
 */


exports.N = NoClient;

const IsInvalid = (state, opts) => {
  const firstInvalidReturn = [...DEFAULT_PLUGINS, ...opts.game.plugins].filter(plugin => plugin.isInvalid !== undefined).map(plugin => {
    const {
      name
    } = plugin;
    const pluginState = state.plugins[name];
    const message = plugin.isInvalid({
      G: state.G,
      ctx: state.ctx,
      game: opts.game,
      data: pluginState && pluginState.data
    });
    return message ? {
      plugin: name,
      message
    } : false;
  }).find(value => value);
  return firstInvalidReturn || false;
};
/**
 * Update plugin state after move/event & check if plugins consider the update to be valid.
 * @returns Tuple of `[updatedState]` or `[originalState, invalidError]`.
 */


const FlushAndValidate = (state, opts) => {
  const updatedState = Flush(state, opts);
  const isInvalid = IsInvalid(updatedState, opts);
  if (!isInvalid) return [updatedState];
  const {
    plugin,
    message
  } = isInvalid;
  error("".concat(plugin, " plugin declared action invalid:\n").concat(message));
  return [state, isInvalid];
};
/**
 * Allows plugins to customize their data for specific players.
 * For example, a plugin may want to share no data with the client, or
 * want to keep some player data secret from opponents.
 */


exports.q = FlushAndValidate;

const PlayerView = (_ref9, _ref10) => {
  let {
    G,
    ctx,
    plugins = {}
  } = _ref9;
  let {
    game,
    playerID
  } = _ref10;
  [...DEFAULT_PLUGINS, ...game.plugins].forEach(_ref11 => {
    let {
      name,
      playerView
    } = _ref11;
    if (!playerView) return;
    const {
      data
    } = plugins[name] || {
      data: {}
    };
    const newData = playerView({
      G,
      ctx,
      game,
      data,
      playerID
    });
    plugins = { ...plugins,
      [name]: {
        data: newData
      }
    };
  });
  return plugins;
};
/**
 * Adjust the given options to use the new minMoves/maxMoves if a legacy moveLimit was given
 * @param options The options object to apply backwards compatibility to
 * @param enforceMinMoves Use moveLimit to set both minMoves and maxMoves
 */


exports.x = PlayerView;

function supportDeprecatedMoveLimit(options) {
  let enforceMinMoves = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (options.moveLimit) {
    if (enforceMinMoves) {
      options.minMoves = options.moveLimit;
    }

    options.maxMoves = options.moveLimit;
    delete options.moveLimit;
  }
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


function SetActivePlayers(ctx, arg) {
  let activePlayers = {};
  let _prevActivePlayers = [];
  let _nextActivePlayers = null;
  let _activePlayersMinMoves = {};
  let _activePlayersMaxMoves = {};

  if (Array.isArray(arg)) {
    // support a simple array of player IDs as active players
    const value = {};
    arg.forEach(v => value[v] = Stage.NULL);
    activePlayers = value;
  } else {
    // process active players argument object
    // stages previously did not enforce minMoves, this behaviour is kept intentionally
    supportDeprecatedMoveLimit(arg);

    if (arg.next) {
      _nextActivePlayers = arg.next;
    }

    if (arg.revert) {
      _prevActivePlayers = [...ctx._prevActivePlayers, {
        activePlayers: ctx.activePlayers,
        _activePlayersMinMoves: ctx._activePlayersMinMoves,
        _activePlayersMaxMoves: ctx._activePlayersMaxMoves,
        _activePlayersNumMoves: ctx._activePlayersNumMoves
      }];
    }

    if (arg.currentPlayer !== undefined) {
      ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, ctx.currentPlayer, arg.currentPlayer);
    }

    if (arg.others !== undefined) {
      for (let i = 0; i < ctx.playOrder.length; i++) {
        const id = ctx.playOrder[i];

        if (id !== ctx.currentPlayer) {
          ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, id, arg.others);
        }
      }
    }

    if (arg.all !== undefined) {
      for (let i = 0; i < ctx.playOrder.length; i++) {
        const id = ctx.playOrder[i];
        ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, id, arg.all);
      }
    }

    if (arg.value) {
      for (const id in arg.value) {
        ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, id, arg.value[id]);
      }
    }

    if (arg.minMoves) {
      for (const id in activePlayers) {
        if (_activePlayersMinMoves[id] === undefined) {
          _activePlayersMinMoves[id] = arg.minMoves;
        }
      }
    }

    if (arg.maxMoves) {
      for (const id in activePlayers) {
        if (_activePlayersMaxMoves[id] === undefined) {
          _activePlayersMaxMoves[id] = arg.maxMoves;
        }
      }
    }
  }

  if (Object.keys(activePlayers).length === 0) {
    activePlayers = null;
  }

  if (Object.keys(_activePlayersMinMoves).length === 0) {
    _activePlayersMinMoves = null;
  }

  if (Object.keys(_activePlayersMaxMoves).length === 0) {
    _activePlayersMaxMoves = null;
  }

  const _activePlayersNumMoves = {};

  for (const id in activePlayers) {
    _activePlayersNumMoves[id] = 0;
  }

  return { ...ctx,
    activePlayers,
    _activePlayersMinMoves,
    _activePlayersMaxMoves,
    _activePlayersNumMoves,
    _prevActivePlayers,
    _nextActivePlayers
  };
}
/**
 * Update activePlayers, setting it to previous, next or null values
 * when it becomes empty.
 * @param ctx
 */


function UpdateActivePlayersOnceEmpty(ctx) {
  let {
    activePlayers,
    _activePlayersMinMoves,
    _activePlayersMaxMoves,
    _activePlayersNumMoves,
    _prevActivePlayers,
    _nextActivePlayers
  } = ctx;

  if (activePlayers && Object.keys(activePlayers).length === 0) {
    if (_nextActivePlayers) {
      ctx = SetActivePlayers(ctx, _nextActivePlayers);
      ({
        activePlayers,
        _activePlayersMinMoves,
        _activePlayersMaxMoves,
        _activePlayersNumMoves,
        _prevActivePlayers
      } = ctx);
    } else if (_prevActivePlayers.length > 0) {
      const lastIndex = _prevActivePlayers.length - 1;
      ({
        activePlayers,
        _activePlayersMinMoves,
        _activePlayersMaxMoves,
        _activePlayersNumMoves
      } = _prevActivePlayers[lastIndex]);
      _prevActivePlayers = _prevActivePlayers.slice(0, lastIndex);
    } else {
      activePlayers = null;
      _activePlayersMinMoves = null;
      _activePlayersMaxMoves = null;
    }
  }

  return { ...ctx,
    activePlayers,
    _activePlayersMinMoves,
    _activePlayersMaxMoves,
    _activePlayersNumMoves,
    _prevActivePlayers
  };
}
/**
 * Apply an active player argument to the given player ID
 * @param {Object} activePlayers
 * @param {Object} _activePlayersMinMoves
 * @param {Object} _activePlayersMaxMoves
 * @param {String} playerID The player to apply the parameter to
 * @param {(String|Object)} arg An active player argument
 */


function ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, playerID, arg) {
  if (typeof arg !== 'object' || arg === Stage.NULL) {
    arg = {
      stage: arg
    };
  }

  if (arg.stage !== undefined) {
    // stages previously did not enforce minMoves, this behaviour is kept intentionally
    supportDeprecatedMoveLimit(arg);
    activePlayers[playerID] = arg.stage;
    if (arg.minMoves) _activePlayersMinMoves[playerID] = arg.minMoves;
    if (arg.maxMoves) _activePlayersMaxMoves[playerID] = arg.maxMoves;
  }
}
/**
 * Converts a playOrderPos index into its value in playOrder.
 * @param {Array} playOrder - An array of player ID's.
 * @param {number} playOrderPos - An index into the above.
 */


function getCurrentPlayer(playOrder, playOrderPos) {
  // convert to string in case playOrder is set to number[]
  return playOrder[playOrderPos] + '';
}
/**
 * Called at the start of a turn to initialize turn order state.
 *
 * TODO: This is called inside StartTurn, which is called from
 * both UpdateTurn and StartPhase (so it's called at the beginning
 * of a new phase as well as between turns). We should probably
 * split it into two.
 */


function InitTurnOrderState(state, turn) {
  let {
    G,
    ctx
  } = state;
  const {
    numPlayers
  } = ctx;
  const ctxWithAPI = EnhanceCtx(state);
  const order = turn.order;
  let playOrder = [...Array.from({
    length: numPlayers
  })].map((_, i) => i + '');

  if (order.playOrder !== undefined) {
    playOrder = order.playOrder(G, ctxWithAPI);
  }

  const playOrderPos = order.first(G, ctxWithAPI);
  const posType = typeof playOrderPos;

  if (posType !== 'number') {
    error("invalid value returned by turn.order.first \u2014 expected number got ".concat(posType, " \u201C").concat(playOrderPos, "\u201D."));
  }

  const currentPlayer = getCurrentPlayer(playOrder, playOrderPos);
  ctx = { ...ctx,
    currentPlayer,
    playOrderPos,
    playOrder
  };
  ctx = SetActivePlayers(ctx, turn.activePlayers || {});
  return ctx;
}
/**
 * Called at the end of each turn to update the turn order state.
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 * @param {string} endTurnArg - An optional argument to endTurn that
                                may specify the next player.
 */


function UpdateTurnOrderState(state, currentPlayer, turn, endTurnArg) {
  const order = turn.order;
  let {
    G,
    ctx
  } = state;
  let playOrderPos = ctx.playOrderPos;
  let endPhase = false;

  if (endTurnArg && endTurnArg !== true) {
    if (typeof endTurnArg !== 'object') {
      error("invalid argument to endTurn: ".concat(endTurnArg));
    }

    Object.keys(endTurnArg).forEach(arg => {
      switch (arg) {
        case 'remove':
          currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
          break;

        case 'next':
          playOrderPos = ctx.playOrder.indexOf(endTurnArg.next);
          currentPlayer = endTurnArg.next;
          break;

        default:
          error("invalid argument to endTurn: ".concat(arg));
      }
    });
  } else {
    const ctxWithAPI = EnhanceCtx(state);
    const t = order.next(G, ctxWithAPI);
    const type = typeof t;

    if (t !== undefined && type !== 'number') {
      error("invalid value returned by turn.order.next \u2014 expected number or undefined got ".concat(type, " \u201C").concat(t, "\u201D."));
    }

    if (t === undefined) {
      endPhase = true;
    } else {
      playOrderPos = t;
      currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
    }
  }

  ctx = { ...ctx,
    playOrderPos,
    currentPlayer
  };
  return {
    endPhase,
    ctx
  };
}
/**
 * Set of different turn orders possible in a phase.
 * These are meant to be passed to the `turn` setting
 * in the flow objects.
 *
 * Each object defines the first player when the phase / game
 * begins, and also a function `next` to determine who the
 * next player is when the turn ends.
 *
 * The phase ends if next() returns undefined.
 */


const TurnOrder = {
  /**
   * DEFAULT
   *
   * The default round-robin turn order.
   */
  DEFAULT: {
    first: (G, ctx) => ctx.turn === 0 ? ctx.playOrderPos : (ctx.playOrderPos + 1) % ctx.playOrder.length,
    next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.playOrder.length
  },

  /**
   * RESET
   *
   * Similar to DEFAULT, but starts from 0 each time.
   */
  RESET: {
    first: () => 0,
    next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.playOrder.length
  },

  /**
   * CONTINUE
   *
   * Similar to DEFAULT, but starts with the player who ended the last phase.
   */
  CONTINUE: {
    first: (G, ctx) => ctx.playOrderPos,
    next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.playOrder.length
  },

  /**
   * ONCE
   *
   * Another round-robin turn order, but goes around just once.
   * The phase ends after all players have played.
   */
  ONCE: {
    first: () => 0,
    next: (G, ctx) => {
      if (ctx.playOrderPos < ctx.playOrder.length - 1) {
        return ctx.playOrderPos + 1;
      }
    }
  },

  /**
   * CUSTOM
   *
   * Identical to DEFAULT, but also sets playOrder at the
   * beginning of the phase.
   *
   * @param {Array} playOrder - The play order.
   */
  CUSTOM: playOrder => ({
    playOrder: () => playOrder,
    first: () => 0,
    next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.playOrder.length
  }),

  /**
   * CUSTOM_FROM
   *
   * Identical to DEFAULT, but also sets playOrder at the
   * beginning of the phase to a value specified by a field
   * in G.
   *
   * @param {string} playOrderField - Field in G.
   */
  CUSTOM_FROM: playOrderField => ({
    playOrder: G => G[playOrderField],
    first: () => 0,
    next: (G, ctx) => (ctx.playOrderPos + 1) % ctx.playOrder.length
  })
};
exports.T = TurnOrder;
const Stage = {
  NULL: null
};
exports.S = Stage;
const ActivePlayers = {
  /**
   * ALL
   *
   * The turn stays with one player, but any player can play (in any order)
   * until the phase ends.
   */
  ALL: {
    all: Stage.NULL
  },

  /**
   * ALL_ONCE
   *
   * The turn stays with one player, but any player can play (once, and in any order).
   * This is typically used in a phase where you want to elicit a response
   * from every player in the game.
   */
  ALL_ONCE: {
    all: Stage.NULL,
    minMoves: 1,
    maxMoves: 1
  },

  /**
   * OTHERS
   *
   * The turn stays with one player, and every *other* player can play (in any order)
   * until the phase ends.
   */
  OTHERS: {
    others: Stage.NULL
  },

  /**
   * OTHERS_ONCE
   *
   * The turn stays with one player, and every *other* player can play (once, and in any order).
   * This is typically used in a phase where you want to elicit a response
   * from every *other* player in the game.
   */
  OTHERS_ONCE: {
    others: Stage.NULL,
    minMoves: 1,
    maxMoves: 1
  }
};
exports.C = ActivePlayers;
},{"immer":"node_modules/immer/dist/immer.esm.js","./plugin-random-087f861e.js":"node_modules/boardgame.io/dist/esm/plugin-random-087f861e.js","lodash.isplainobject":"node_modules/lodash.isplainobject/index.js"}],"node_modules/rfc6902/pointer.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
/**
Unescape token part of a JSON Pointer string

`token` should *not* contain any '/' characters.

> Evaluation of each reference token begins by decoding any escaped
> character sequence.  This is performed by first transforming any
> occurrence of the sequence '~1' to '/', and then transforming any
> occurrence of the sequence '~0' to '~'.  By performing the
> substitutions in this order, an implementation avoids the error of
> turning '~01' first into '~1' and then into '/', which would be
> incorrect (the string '~01' correctly becomes '~1' after
> transformation).

Here's my take:

~1 is unescaped with higher priority than ~0 because it is a lower-order escape character.
I say "lower order" because '/' needs escaping due to the JSON Pointer serialization technique.
Whereas, '~' is escaped because escaping '/' uses the '~' character.
*/
function unescape(token) {
    return token.replace(/~1/g, '/').replace(/~0/g, '~');
}
/** Escape token part of a JSON Pointer string

> '~' needs to be encoded as '~0' and '/'
> needs to be encoded as '~1' when these characters appear in a
> reference token.

This is the exact inverse of `unescape()`, so the reverse replacements must take place in reverse order.
*/
function escape(token) {
    return token.replace(/~/g, '~0').replace(/\//g, '~1');
}
/**
JSON Pointer representation
*/
var Pointer = /** @class */ (function () {
    function Pointer(tokens) {
        if (tokens === void 0) { tokens = ['']; }
        this.tokens = tokens;
    }
    /**
    `path` *must* be a properly escaped string.
    */
    Pointer.fromJSON = function (path) {
        var tokens = path.split('/').map(unescape);
        if (tokens[0] !== '')
            throw new Error("Invalid JSON Pointer: " + path);
        return new Pointer(tokens);
    };
    Pointer.prototype.toString = function () {
        return this.tokens.map(escape).join('/');
    };
    /**
    Returns an object with 'parent', 'key', and 'value' properties.
    In the special case that this Pointer's path == "",
    this object will be {parent: null, key: '', value: object}.
    Otherwise, parent and key will have the property such that parent[key] == value.
    */
    Pointer.prototype.evaluate = function (object) {
        var parent = null;
        var key = '';
        var value = object;
        for (var i = 1, l = this.tokens.length; i < l; i++) {
            parent = value;
            key = this.tokens[i];
            if (key == '__proto__' || key == 'constructor' || key == 'prototype') {
                continue;
            }
            // not sure if this the best way to handle non-existant paths...
            value = (parent || {})[key];
        }
        return { parent: parent, key: key, value: value };
    };
    Pointer.prototype.get = function (object) {
        return this.evaluate(object).value;
    };
    Pointer.prototype.set = function (object, value) {
        var cursor = object;
        for (var i = 1, l = this.tokens.length - 1, token = this.tokens[i]; i < l; i++) {
            // not sure if this the best way to handle non-existant paths...
            cursor = (cursor || {})[token];
        }
        if (cursor) {
            cursor[this.tokens[this.tokens.length - 1]] = value;
        }
    };
    Pointer.prototype.push = function (token) {
        // mutable
        this.tokens.push(token);
    };
    /**
    `token` should be a String. It'll be coerced to one anyway.
  
    immutable (shallowly)
    */
    Pointer.prototype.add = function (token) {
        var tokens = this.tokens.concat(String(token));
        return new Pointer(tokens);
    };
    return Pointer;
}());
exports.Pointer = Pointer;

},{}],"node_modules/rfc6902/util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.objectType = exports.hasOwnProperty = void 0;
exports.hasOwnProperty = Object.prototype.hasOwnProperty;
function objectType(object) {
    if (object === undefined) {
        return 'undefined';
    }
    if (object === null) {
        return 'null';
    }
    if (Array.isArray(object)) {
        return 'array';
    }
    return typeof object;
}
exports.objectType = objectType;
function isNonPrimitive(value) {
    // loose-equality checking for null is faster than strict checking for each of null/undefined/true/false
    // checking null first, then calling typeof, is faster than vice-versa
    return value != null && typeof value == 'object';
}
/**
Recursively copy a value.

@param source - should be a JavaScript primitive, Array, Date, or (plain old) Object.
@returns copy of source where every Array and Object have been recursively
         reconstructed from their constituent elements
*/
function clone(source) {
    if (!isNonPrimitive(source)) {
        // short-circuiting is faster than a single return
        return source;
    }
    // x.constructor == Array is the fastest way to check if x is an Array
    if (source.constructor == Array) {
        // construction via imperative for-loop is faster than source.map(arrayVsObject)
        var length_1 = source.length;
        // setting the Array length during construction is faster than just `[]` or `new Array()`
        var arrayTarget = new Array(length_1);
        for (var i = 0; i < length_1; i++) {
            arrayTarget[i] = clone(source[i]);
        }
        return arrayTarget;
    }
    // Date
    if (source.constructor == Date) {
        var dateTarget = new Date(+source);
        return dateTarget;
    }
    // Object
    var objectTarget = {};
    // declaring the variable (with const) inside the loop is faster
    for (var key in source) {
        // hasOwnProperty costs a bit of performance, but it's semantically necessary
        // using a global helper is MUCH faster than calling source.hasOwnProperty(key)
        if (exports.hasOwnProperty.call(source, key)) {
            objectTarget[key] = clone(source[key]);
        }
    }
    return objectTarget;
}
exports.clone = clone;

},{}],"node_modules/rfc6902/diff.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffAny = exports.diffObjects = exports.diffArrays = exports.intersection = exports.subtract = exports.isDestructive = void 0;
var util_1 = require("./util");
function isDestructive(_a) {
    var op = _a.op;
    return op === 'remove' || op === 'replace' || op === 'copy' || op === 'move';
}
exports.isDestructive = isDestructive;
/**
List the keys in `minuend` that are not in `subtrahend`.

A key is only considered if it is both 1) an own-property (o.hasOwnProperty(k))
of the object, and 2) has a value that is not undefined. This is to match JSON
semantics, where JSON object serialization drops keys with undefined values.

@param minuend Object of interest
@param subtrahend Object of comparison
@returns Array of keys that are in `minuend` but not in `subtrahend`.
*/
function subtract(minuend, subtrahend) {
    // initialize empty object; we only care about the keys, the values can be anything
    var obj = {};
    // build up obj with all the properties of minuend
    for (var add_key in minuend) {
        if (util_1.hasOwnProperty.call(minuend, add_key) && minuend[add_key] !== undefined) {
            obj[add_key] = 1;
        }
    }
    // now delete all the properties of subtrahend from obj
    // (deleting a missing key has no effect)
    for (var del_key in subtrahend) {
        if (util_1.hasOwnProperty.call(subtrahend, del_key) && subtrahend[del_key] !== undefined) {
            delete obj[del_key];
        }
    }
    // finally, extract whatever keys remain in obj
    return Object.keys(obj);
}
exports.subtract = subtract;
/**
List the keys that shared by all `objects`.

The semantics of what constitutes a "key" is described in {@link subtract}.

@param objects Array of objects to compare
@returns Array of keys that are in ("own-properties" of) every object in `objects`.
*/
function intersection(objects) {
    var length = objects.length;
    // prepare empty counter to keep track of how many objects each key occurred in
    var counter = {};
    // go through each object and increment the counter for each key in that object
    for (var i = 0; i < length; i++) {
        var object = objects[i];
        for (var key in object) {
            if (util_1.hasOwnProperty.call(object, key) && object[key] !== undefined) {
                counter[key] = (counter[key] || 0) + 1;
            }
        }
    }
    // now delete all keys from the counter that were not seen in every object
    for (var key in counter) {
        if (counter[key] < length) {
            delete counter[key];
        }
    }
    // finally, extract whatever keys remain in the counter
    return Object.keys(counter);
}
exports.intersection = intersection;
function isArrayAdd(array_operation) {
    return array_operation.op === 'add';
}
function isArrayRemove(array_operation) {
    return array_operation.op === 'remove';
}
function appendArrayOperation(base, operation) {
    return {
        // the new operation must be pushed on the end
        operations: base.operations.concat(operation),
        cost: base.cost + 1,
    };
}
/**
Calculate the shortest sequence of operations to get from `input` to `output`,
using a dynamic programming implementation of the Levenshtein distance algorithm.

To get from the input ABC to the output AZ we could just delete all the input
and say "insert A, insert Z" and be done with it. That's what we do if the
input is empty. But we can be smarter.

          output
               A   Z
               -   -
          [0]  1   2
input A |  1  [0]  1
      B |  2  [1]  1
      C |  3   2  [2]

1) start at 0,0 (+0)
2) keep A (+0)
3) remove B (+1)
4) replace C with Z (+1)

If the `input` (source) is empty, they'll all be in the top row, resulting in an
array of 'add' operations.
If the `output` (target) is empty, everything will be in the left column,
resulting in an array of 'remove' operations.

@returns A list of add/remove/replace operations.
*/
function diffArrays(input, output, ptr, diff) {
    if (diff === void 0) { diff = diffAny; }
    // set up cost matrix (very simple initialization: just a map)
    var memo = {
        '0,0': { operations: [], cost: 0 },
    };
    /**
    Calculate the cheapest sequence of operations required to get from
    input.slice(0, i) to output.slice(0, j).
    There may be other valid sequences with the same cost, but none cheaper.
  
    @param i The row in the layout above
    @param j The column in the layout above
    @returns An object containing a list of operations, along with the total cost
             of applying them (+1 for each add/remove/replace operation)
    */
    function dist(i, j) {
        // memoized
        var memo_key = i + "," + j;
        var memoized = memo[memo_key];
        if (memoized === undefined) {
            // TODO: this !diff(...).length usage could/should be lazy
            if (i > 0 && j > 0 && !diff(input[i - 1], output[j - 1], ptr.add(String(i - 1))).length) {
                // equal (no operations => no cost)
                memoized = dist(i - 1, j - 1);
            }
            else {
                var alternatives = [];
                if (i > 0) {
                    // NOT topmost row
                    var remove_base = dist(i - 1, j);
                    var remove_operation = {
                        op: 'remove',
                        index: i - 1,
                    };
                    alternatives.push(appendArrayOperation(remove_base, remove_operation));
                }
                if (j > 0) {
                    // NOT leftmost column
                    var add_base = dist(i, j - 1);
                    var add_operation = {
                        op: 'add',
                        index: i - 1,
                        value: output[j - 1],
                    };
                    alternatives.push(appendArrayOperation(add_base, add_operation));
                }
                if (i > 0 && j > 0) {
                    // TABLE MIDDLE
                    // supposing we replaced it, compute the rest of the costs:
                    var replace_base = dist(i - 1, j - 1);
                    // okay, the general plan is to replace it, but we can be smarter,
                    // recursing into the structure and replacing only part of it if
                    // possible, but to do so we'll need the original value
                    var replace_operation = {
                        op: 'replace',
                        index: i - 1,
                        original: input[i - 1],
                        value: output[j - 1],
                    };
                    alternatives.push(appendArrayOperation(replace_base, replace_operation));
                }
                // the only other case, i === 0 && j === 0, has already been memoized
                // the meat of the algorithm:
                // sort by cost to find the lowest one (might be several ties for lowest)
                // [4, 6, 7, 1, 2].sort((a, b) => a - b) -> [ 1, 2, 4, 6, 7 ]
                var best = alternatives.sort(function (a, b) { return a.cost - b.cost; })[0];
                memoized = best;
            }
            memo[memo_key] = memoized;
        }
        return memoized;
    }
    // handle weird objects masquerading as Arrays that don't have proper length
    // properties by using 0 for everything but positive numbers
    var input_length = (isNaN(input.length) || input.length <= 0) ? 0 : input.length;
    var output_length = (isNaN(output.length) || output.length <= 0) ? 0 : output.length;
    var array_operations = dist(input_length, output_length).operations;
    var padded_operations = array_operations.reduce(function (_a, array_operation) {
        var operations = _a[0], padding = _a[1];
        if (isArrayAdd(array_operation)) {
            var padded_index = array_operation.index + 1 + padding;
            var index_token = padded_index < (input_length + padding) ? String(padded_index) : '-';
            var operation = {
                op: array_operation.op,
                path: ptr.add(index_token).toString(),
                value: array_operation.value,
            };
            // padding++ // maybe only if array_operation.index > -1 ?
            return [operations.concat(operation), padding + 1];
        }
        else if (isArrayRemove(array_operation)) {
            var operation = {
                op: array_operation.op,
                path: ptr.add(String(array_operation.index + padding)).toString(),
            };
            // padding--
            return [operations.concat(operation), padding - 1];
        }
        else { // replace
            var replace_ptr = ptr.add(String(array_operation.index + padding));
            var replace_operations = diff(array_operation.original, array_operation.value, replace_ptr);
            return [operations.concat.apply(operations, replace_operations), padding];
        }
    }, [[], 0])[0];
    return padded_operations;
}
exports.diffArrays = diffArrays;
function diffObjects(input, output, ptr, diff) {
    if (diff === void 0) { diff = diffAny; }
    // if a key is in input but not output -> remove it
    var operations = [];
    subtract(input, output).forEach(function (key) {
        operations.push({ op: 'remove', path: ptr.add(key).toString() });
    });
    // if a key is in output but not input -> add it
    subtract(output, input).forEach(function (key) {
        operations.push({ op: 'add', path: ptr.add(key).toString(), value: output[key] });
    });
    // if a key is in both, diff it recursively
    intersection([input, output]).forEach(function (key) {
        operations.push.apply(operations, diff(input[key], output[key], ptr.add(key)));
    });
    return operations;
}
exports.diffObjects = diffObjects;
/**
`diffAny()` returns an empty array if `input` and `output` are materially equal
(i.e., would produce equivalent JSON); otherwise it produces an array of patches
that would transform `input` into `output`.

> Here, "equal" means that the value at the target location and the
> value conveyed by "value" are of the same JSON type, and that they
> are considered equal by the following rules for that type:
> o  strings: are considered equal if they contain the same number of
>    Unicode characters and their code points are byte-by-byte equal.
> o  numbers: are considered equal if their values are numerically
>    equal.
> o  arrays: are considered equal if they contain the same number of
>    values, and if each value can be considered equal to the value at
>    the corresponding position in the other array, using this list of
>    type-specific rules.
> o  objects: are considered equal if they contain the same number of
>    members, and if each member can be considered equal to a member in
>    the other object, by comparing their keys (as strings) and their
>    values (using this list of type-specific rules).
> o  literals (false, true, and null): are considered equal if they are
>    the same.
*/
function diffAny(input, output, ptr, diff) {
    if (diff === void 0) { diff = diffAny; }
    // strict equality handles literals, numbers, and strings (a sufficient but not necessary cause)
    if (input === output) {
        return [];
    }
    var input_type = util_1.objectType(input);
    var output_type = util_1.objectType(output);
    if (input_type == 'array' && output_type == 'array') {
        return diffArrays(input, output, ptr, diff);
    }
    if (input_type == 'object' && output_type == 'object') {
        return diffObjects(input, output, ptr, diff);
    }
    // at this point we know that input and output are materially different;
    // could be array -> object, object -> array, boolean -> undefined,
    // number -> string, or some other combination, but nothing that can be split
    // up into multiple patches: so `output` must replace `input` wholesale.
    return [{ op: 'replace', path: ptr.toString(), value: output }];
}
exports.diffAny = diffAny;

},{"./util":"node_modules/rfc6902/util.js"}],"node_modules/rfc6902/patch.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.InvalidOperationError = exports.test = exports.copy = exports.move = exports.replace = exports.remove = exports.add = exports.TestError = exports.MissingError = void 0;
var pointer_1 = require("./pointer");
var util_1 = require("./util");
var diff_1 = require("./diff");
var MissingError = /** @class */ (function (_super) {
    __extends(MissingError, _super);
    function MissingError(path) {
        var _this = _super.call(this, "Value required at path: " + path) || this;
        _this.path = path;
        _this.name = 'MissingError';
        return _this;
    }
    return MissingError;
}(Error));
exports.MissingError = MissingError;
var TestError = /** @class */ (function (_super) {
    __extends(TestError, _super);
    function TestError(actual, expected) {
        var _this = _super.call(this, "Test failed: " + actual + " != " + expected) || this;
        _this.actual = actual;
        _this.expected = expected;
        _this.name = 'TestError';
        return _this;
    }
    return TestError;
}(Error));
exports.TestError = TestError;
function _add(object, key, value) {
    if (Array.isArray(object)) {
        // `key` must be an index
        if (key == '-') {
            object.push(value);
        }
        else {
            var index = parseInt(key, 10);
            object.splice(index, 0, value);
        }
    }
    else {
        object[key] = value;
    }
}
function _remove(object, key) {
    if (Array.isArray(object)) {
        // '-' syntax doesn't make sense when removing
        var index = parseInt(key, 10);
        object.splice(index, 1);
    }
    else {
        // not sure what the proper behavior is when path = ''
        delete object[key];
    }
}
/**
>  o  If the target location specifies an array index, a new value is
>     inserted into the array at the specified index.
>  o  If the target location specifies an object member that does not
>     already exist, a new member is added to the object.
>  o  If the target location specifies an object member that does exist,
>     that member's value is replaced.
*/
function add(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    // it's not exactly a "MissingError" in the same way that `remove` is -- more like a MissingParent, or something
    if (endpoint.parent === undefined) {
        return new MissingError(operation.path);
    }
    _add(endpoint.parent, endpoint.key, util_1.clone(operation.value));
    return null;
}
exports.add = add;
/**
> The "remove" operation removes the value at the target location.
> The target location MUST exist for the operation to be successful.
*/
function remove(object, operation) {
    // endpoint has parent, key, and value properties
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.value === undefined) {
        return new MissingError(operation.path);
    }
    // not sure what the proper behavior is when path = ''
    _remove(endpoint.parent, endpoint.key);
    return null;
}
exports.remove = remove;
/**
> The "replace" operation replaces the value at the target location
> with a new value.  The operation object MUST contain a "value" member
> whose content specifies the replacement value.
> The target location MUST exist for the operation to be successful.

> This operation is functionally identical to a "remove" operation for
> a value, followed immediately by an "add" operation at the same
> location with the replacement value.

Even more simply, it's like the add operation with an existence check.
*/
function replace(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === null) {
        return new MissingError(operation.path);
    }
    // this existence check treats arrays as a special case
    if (Array.isArray(endpoint.parent)) {
        if (parseInt(endpoint.key, 10) >= endpoint.parent.length) {
            return new MissingError(operation.path);
        }
    }
    else if (endpoint.value === undefined) {
        return new MissingError(operation.path);
    }
    endpoint.parent[endpoint.key] = operation.value;
    return null;
}
exports.replace = replace;
/**
> The "move" operation removes the value at a specified location and
> adds it to the target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to move the value from.
> This operation is functionally identical to a "remove" operation on
> the "from" location, followed immediately by an "add" operation at
> the target location with the value that was just removed.

> The "from" location MUST NOT be a proper prefix of the "path"
> location; i.e., a location cannot be moved into one of its children.

TODO: throw if the check described in the previous paragraph fails.
*/
function move(object, operation) {
    var from_endpoint = pointer_1.Pointer.fromJSON(operation.from).evaluate(object);
    if (from_endpoint.value === undefined) {
        return new MissingError(operation.from);
    }
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === undefined) {
        return new MissingError(operation.path);
    }
    _remove(from_endpoint.parent, from_endpoint.key);
    _add(endpoint.parent, endpoint.key, from_endpoint.value);
    return null;
}
exports.move = move;
/**
> The "copy" operation copies the value at a specified location to the
> target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to copy the value from.
> The "from" location MUST exist for the operation to be successful.

> This operation is functionally identical to an "add" operation at the
> target location using the value specified in the "from" member.

Alternatively, it's like 'move' without the 'remove'.
*/
function copy(object, operation) {
    var from_endpoint = pointer_1.Pointer.fromJSON(operation.from).evaluate(object);
    if (from_endpoint.value === undefined) {
        return new MissingError(operation.from);
    }
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === undefined) {
        return new MissingError(operation.path);
    }
    _add(endpoint.parent, endpoint.key, util_1.clone(from_endpoint.value));
    return null;
}
exports.copy = copy;
/**
> The "test" operation tests that a value at the target location is
> equal to a specified value.
> The operation object MUST contain a "value" member that conveys the
> value to be compared to the target location's value.
> The target location MUST be equal to the "value" value for the
> operation to be considered successful.
*/
function test(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    // TODO: this diffAny(...).length usage could/should be lazy
    if (diff_1.diffAny(endpoint.value, operation.value, new pointer_1.Pointer()).length) {
        return new TestError(endpoint.value, operation.value);
    }
    return null;
}
exports.test = test;
var InvalidOperationError = /** @class */ (function (_super) {
    __extends(InvalidOperationError, _super);
    function InvalidOperationError(operation) {
        var _this = _super.call(this, "Invalid operation: " + operation.op) || this;
        _this.operation = operation;
        _this.name = 'InvalidOperationError';
        return _this;
    }
    return InvalidOperationError;
}(Error));
exports.InvalidOperationError = InvalidOperationError;
/**
Switch on `operation.op`, applying the corresponding patch function for each
case to `object`.
*/
function apply(object, operation) {
    // not sure why TypeScript can't infer typesafety of:
    //   {add, remove, replace, move, copy, test}[operation.op](object, operation)
    // (seems like a bug)
    switch (operation.op) {
        case 'add': return add(object, operation);
        case 'remove': return remove(object, operation);
        case 'replace': return replace(object, operation);
        case 'move': return move(object, operation);
        case 'copy': return copy(object, operation);
        case 'test': return test(object, operation);
    }
    return new InvalidOperationError(operation);
}
exports.apply = apply;

},{"./pointer":"node_modules/rfc6902/pointer.js","./util":"node_modules/rfc6902/util.js","./diff":"node_modules/rfc6902/diff.js"}],"node_modules/rfc6902/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTests = exports.createPatch = exports.applyPatch = void 0;
var pointer_1 = require("./pointer");
var patch_1 = require("./patch");
var diff_1 = require("./diff");
/**
Apply a 'application/json-patch+json'-type patch to an object.

`patch` *must* be an array of operations.

> Operation objects MUST have exactly one "op" member, whose value
> indicates the operation to perform.  Its value MUST be one of "add",
> "remove", "replace", "move", "copy", or "test"; other values are
> errors.

This method mutates the target object in-place.

@returns list of results, one for each operation: `null` indicated success,
         otherwise, the result will be an instance of one of the Error classes:
         MissingError, InvalidOperationError, or TestError.
*/
function applyPatch(object, patch) {
    return patch.map(function (operation) { return patch_1.apply(object, operation); });
}
exports.applyPatch = applyPatch;
function wrapVoidableDiff(diff) {
    function wrappedDiff(input, output, ptr) {
        var custom_patch = diff(input, output, ptr);
        // ensure an array is always returned
        return Array.isArray(custom_patch) ? custom_patch : diff_1.diffAny(input, output, ptr, wrappedDiff);
    }
    return wrappedDiff;
}
/**
Produce a 'application/json-patch+json'-type patch to get from one object to
another.

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

`diff` is called on each pair of comparable non-primitive nodes in the
`input`/`output` object trees, producing nested patches. Return `undefined`
to fall back to default behaviour.

Returns list of operations to perform on `input` to produce `output`.
*/
function createPatch(input, output, diff) {
    var ptr = new pointer_1.Pointer();
    // a new Pointer gets a default path of [''] if not specified
    return (diff ? wrapVoidableDiff(diff) : diff_1.diffAny)(input, output, ptr);
}
exports.createPatch = createPatch;
/**
Create a test operation based on `input`'s current evaluation of the JSON
Pointer `path`; if such a pointer cannot be resolved, returns undefined.
*/
function createTest(input, path) {
    var endpoint = pointer_1.Pointer.fromJSON(path).evaluate(input);
    if (endpoint !== undefined) {
        return { op: 'test', path: path, value: endpoint.value };
    }
}
/**
Produce an 'application/json-patch+json'-type list of tests, to verify that
existing values in an object are identical to the those captured at some
checkpoint (whenever this function is called).

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

Returns list of test operations.
*/
function createTests(input, patch) {
    var tests = new Array();
    patch.filter(diff_1.isDestructive).forEach(function (operation) {
        var pathTest = createTest(input, operation.path);
        if (pathTest)
            tests.push(pathTest);
        if ('from' in operation) {
            var fromTest = createTest(input, operation.from);
            if (fromTest)
                tests.push(fromTest);
        }
    });
    return tests;
}
exports.createTests = createTests;

},{"./pointer":"node_modules/rfc6902/pointer.js","./patch":"node_modules/rfc6902/patch.js","./diff":"node_modules/rfc6902/diff.js"}],"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C = CreateGameReducer;
exports.I = IsLongFormMove;
exports.P = ProcessGameConfig;
exports.T = void 0;

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _rfc = require("rfc6902");

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Flow
 *
 * Creates a reducer that updates ctx (analogous to how moves update G).
 */
function Flow(_ref) {
  let {
    moves,
    phases,
    endIf,
    onEnd,
    turn,
    events,
    plugins
  } = _ref;

  // Attach defaults.
  if (moves === undefined) {
    moves = {};
  }

  if (events === undefined) {
    events = {};
  }

  if (plugins === undefined) {
    plugins = [];
  }

  if (phases === undefined) {
    phases = {};
  }

  if (!endIf) endIf = () => undefined;
  if (!onEnd) onEnd = G => G;
  if (!turn) turn = {};
  const phaseMap = { ...phases
  };

  if ('' in phaseMap) {
    (0, _turnOrder0b7dce3d.e)('cannot specify phase with empty name');
  }

  phaseMap[''] = {};
  const moveMap = {};
  const moveNames = new Set();
  let startingPhase = null;
  Object.keys(moves).forEach(name => moveNames.add(name));

  const HookWrapper = (hook, hookType) => {
    const withPlugins = (0, _turnOrder0b7dce3d.F)(hook, hookType, plugins);
    return state => {
      const ctxWithAPI = (0, _turnOrder0b7dce3d.E)(state);
      return withPlugins(state.G, ctxWithAPI);
    };
  };

  const TriggerWrapper = trigger => {
    return state => {
      const ctxWithAPI = (0, _turnOrder0b7dce3d.E)(state);
      return trigger(state.G, ctxWithAPI);
    };
  };

  const wrapped = {
    onEnd: HookWrapper(onEnd, _turnOrder0b7dce3d.G.GAME_ON_END),
    endIf: TriggerWrapper(endIf)
  };

  for (const phase in phaseMap) {
    const phaseConfig = phaseMap[phase];

    if (phaseConfig.start === true) {
      startingPhase = phase;
    }

    if (phaseConfig.moves !== undefined) {
      for (const move of Object.keys(phaseConfig.moves)) {
        moveMap[phase + '.' + move] = phaseConfig.moves[move];
        moveNames.add(move);
      }
    }

    if (phaseConfig.endIf === undefined) {
      phaseConfig.endIf = () => undefined;
    }

    if (phaseConfig.onBegin === undefined) {
      phaseConfig.onBegin = G => G;
    }

    if (phaseConfig.onEnd === undefined) {
      phaseConfig.onEnd = G => G;
    }

    if (phaseConfig.turn === undefined) {
      phaseConfig.turn = turn;
    }

    if (phaseConfig.turn.order === undefined) {
      phaseConfig.turn.order = _turnOrder0b7dce3d.T.DEFAULT;
    }

    if (phaseConfig.turn.onBegin === undefined) {
      phaseConfig.turn.onBegin = G => G;
    }

    if (phaseConfig.turn.onEnd === undefined) {
      phaseConfig.turn.onEnd = G => G;
    }

    if (phaseConfig.turn.endIf === undefined) {
      phaseConfig.turn.endIf = () => false;
    }

    if (phaseConfig.turn.onMove === undefined) {
      phaseConfig.turn.onMove = G => G;
    }

    if (phaseConfig.turn.stages === undefined) {
      phaseConfig.turn.stages = {};
    } // turns previously treated moveLimit as both minMoves and maxMoves, this behaviour is kept intentionally


    (0, _turnOrder0b7dce3d.a)(phaseConfig.turn, true);

    for (const stage in phaseConfig.turn.stages) {
      const stageConfig = phaseConfig.turn.stages[stage];
      const moves = stageConfig.moves || {};

      for (const move of Object.keys(moves)) {
        const key = phase + '.' + stage + '.' + move;
        moveMap[key] = moves[move];
        moveNames.add(move);
      }
    }

    phaseConfig.wrapped = {
      onBegin: HookWrapper(phaseConfig.onBegin, _turnOrder0b7dce3d.G.PHASE_ON_BEGIN),
      onEnd: HookWrapper(phaseConfig.onEnd, _turnOrder0b7dce3d.G.PHASE_ON_END),
      endIf: TriggerWrapper(phaseConfig.endIf)
    };
    phaseConfig.turn.wrapped = {
      onMove: HookWrapper(phaseConfig.turn.onMove, _turnOrder0b7dce3d.G.TURN_ON_MOVE),
      onBegin: HookWrapper(phaseConfig.turn.onBegin, _turnOrder0b7dce3d.G.TURN_ON_BEGIN),
      onEnd: HookWrapper(phaseConfig.turn.onEnd, _turnOrder0b7dce3d.G.TURN_ON_END),
      endIf: TriggerWrapper(phaseConfig.turn.endIf)
    };

    if (typeof phaseConfig.next !== 'function') {
      const {
        next
      } = phaseConfig;

      phaseConfig.next = () => next || null;
    }

    phaseConfig.wrapped.next = TriggerWrapper(phaseConfig.next);
  }

  function GetPhase(ctx) {
    return ctx.phase ? phaseMap[ctx.phase] : phaseMap[''];
  }

  function OnMove(s) {
    return s;
  }

  function Process(state, events) {
    const phasesEnded = new Set();
    const turnsEnded = new Set();

    for (let i = 0; i < events.length; i++) {
      const {
        fn,
        arg,
        ...rest
      } = events[i]; // Detect a loop of EndPhase calls.
      // This could potentially even be an infinite loop
      // if the endIf condition of each phase blindly
      // returns true. The moment we detect a single
      // loop, we just bail out of all phases.

      if (fn === EndPhase) {
        turnsEnded.clear();
        const phase = state.ctx.phase;

        if (phasesEnded.has(phase)) {
          const ctx = { ...state.ctx,
            phase: null
          };
          return { ...state,
            ctx
          };
        }

        phasesEnded.add(phase);
      } // Process event.


      const next = [];
      state = fn(state, { ...rest,
        arg,
        next
      });

      if (fn === EndGame) {
        break;
      } // Check if we should end the game.


      const shouldEndGame = ShouldEndGame(state);

      if (shouldEndGame) {
        events.push({
          fn: EndGame,
          arg: shouldEndGame,
          turn: state.ctx.turn,
          phase: state.ctx.phase,
          automatic: true
        });
        continue;
      } // Check if we should end the phase.


      const shouldEndPhase = ShouldEndPhase(state);

      if (shouldEndPhase) {
        events.push({
          fn: EndPhase,
          arg: shouldEndPhase,
          turn: state.ctx.turn,
          phase: state.ctx.phase,
          automatic: true
        });
        continue;
      } // Check if we should end the turn.


      if ([OnMove, UpdateStage, UpdateActivePlayers].includes(fn)) {
        const shouldEndTurn = ShouldEndTurn(state);

        if (shouldEndTurn) {
          events.push({
            fn: EndTurn,
            arg: shouldEndTurn,
            turn: state.ctx.turn,
            phase: state.ctx.phase,
            automatic: true
          });
          continue;
        }
      }

      events.push(...next);
    }

    return state;
  } ///////////
  // Start //
  ///////////


  function StartGame(state, _ref2) {
    let {
      next
    } = _ref2;
    next.push({
      fn: StartPhase
    });
    return state;
  }

  function StartPhase(state, _ref3) {
    let {
      next
    } = _ref3;
    let {
      G,
      ctx
    } = state;
    const phaseConfig = GetPhase(ctx); // Run any phase setup code provided by the user.

    G = phaseConfig.wrapped.onBegin(state);
    next.push({
      fn: StartTurn
    });
    return { ...state,
      G,
      ctx
    };
  }

  function StartTurn(state, _ref4) {
    let {
      currentPlayer
    } = _ref4;
    let {
      ctx
    } = state;
    const phaseConfig = GetPhase(ctx); // Initialize the turn order state.

    if (currentPlayer) {
      ctx = { ...ctx,
        currentPlayer
      };

      if (phaseConfig.turn.activePlayers) {
        ctx = (0, _turnOrder0b7dce3d.b)(ctx, phaseConfig.turn.activePlayers);
      }
    } else {
      // This is only called at the beginning of the phase
      // when there is no currentPlayer yet.
      ctx = (0, _turnOrder0b7dce3d.I)(state, phaseConfig.turn);
    }

    const turn = ctx.turn + 1;
    ctx = { ...ctx,
      turn,
      numMoves: 0,
      _prevActivePlayers: []
    };
    const G = phaseConfig.turn.wrapped.onBegin({ ...state,
      ctx
    });
    return { ...state,
      G,
      ctx,
      _undo: [],
      _redo: []
    };
  } ////////////
  // Update //
  ////////////


  function UpdatePhase(state, _ref5) {
    let {
      arg,
      next,
      phase
    } = _ref5;
    const phaseConfig = GetPhase({
      phase
    });
    let {
      ctx
    } = state;

    if (arg && arg.next) {
      if (arg.next in phaseMap) {
        ctx = { ...ctx,
          phase: arg.next
        };
      } else {
        (0, _turnOrder0b7dce3d.e)('invalid phase: ' + arg.next);
        return state;
      }
    } else {
      ctx = { ...ctx,
        phase: phaseConfig.wrapped.next(state) || null
      };
    }

    state = { ...state,
      ctx
    }; // Start the new phase.

    next.push({
      fn: StartPhase
    });
    return state;
  }

  function UpdateTurn(state, _ref6) {
    let {
      arg,
      currentPlayer,
      next
    } = _ref6;
    let {
      G,
      ctx
    } = state;
    const phaseConfig = GetPhase(ctx); // Update turn order state.

    const {
      endPhase,
      ctx: newCtx
    } = (0, _turnOrder0b7dce3d.U)(state, currentPlayer, phaseConfig.turn, arg);
    ctx = newCtx;
    state = { ...state,
      G,
      ctx
    };

    if (endPhase) {
      next.push({
        fn: EndPhase,
        turn: ctx.turn,
        phase: ctx.phase
      });
    } else {
      next.push({
        fn: StartTurn,
        currentPlayer: ctx.currentPlayer
      });
    }

    return state;
  }

  function UpdateStage(state, _ref7) {
    let {
      arg,
      playerID
    } = _ref7;

    if (typeof arg === 'string' || arg === _turnOrder0b7dce3d.S.NULL) {
      arg = {
        stage: arg
      };
    }

    if (typeof arg !== 'object') return state; // `arg` should be of type `StageArg`, loose typing as `any` here for historic reasons
    // stages previously did not enforce minMoves, this behaviour is kept intentionally

    (0, _turnOrder0b7dce3d.a)(arg);
    let {
      ctx
    } = state;
    let {
      activePlayers,
      _activePlayersMinMoves,
      _activePlayersMaxMoves,
      _activePlayersNumMoves
    } = ctx; // Checking if stage is valid, even Stage.NULL

    if (arg.stage !== undefined) {
      if (activePlayers === null) {
        activePlayers = {};
      }

      activePlayers[playerID] = arg.stage;
      _activePlayersNumMoves[playerID] = 0;

      if (arg.minMoves) {
        if (_activePlayersMinMoves === null) {
          _activePlayersMinMoves = {};
        }

        _activePlayersMinMoves[playerID] = arg.minMoves;
      }

      if (arg.maxMoves) {
        if (_activePlayersMaxMoves === null) {
          _activePlayersMaxMoves = {};
        }

        _activePlayersMaxMoves[playerID] = arg.maxMoves;
      }
    }

    ctx = { ...ctx,
      activePlayers,
      _activePlayersMinMoves,
      _activePlayersMaxMoves,
      _activePlayersNumMoves
    };
    return { ...state,
      ctx
    };
  }

  function UpdateActivePlayers(state, _ref8) {
    let {
      arg
    } = _ref8;
    return { ...state,
      ctx: (0, _turnOrder0b7dce3d.b)(state.ctx, arg)
    };
  } ///////////////
  // ShouldEnd //
  ///////////////


  function ShouldEndGame(state) {
    return wrapped.endIf(state);
  }

  function ShouldEndPhase(state) {
    const phaseConfig = GetPhase(state.ctx);
    return phaseConfig.wrapped.endIf(state);
  }

  function ShouldEndTurn(state) {
    const phaseConfig = GetPhase(state.ctx); // End the turn if the required number of moves has been made.

    const currentPlayerMoves = state.ctx.numMoves || 0;

    if (phaseConfig.turn.maxMoves && currentPlayerMoves >= phaseConfig.turn.maxMoves) {
      return true;
    }

    return phaseConfig.turn.wrapped.endIf(state);
  } /////////
  // End //
  /////////


  function EndGame(state, _ref9) {
    let {
      arg,
      phase
    } = _ref9;
    state = EndPhase(state, {
      phase
    });

    if (arg === undefined) {
      arg = true;
    }

    state = { ...state,
      ctx: { ...state.ctx,
        gameover: arg
      }
    }; // Run game end hook.

    const G = wrapped.onEnd(state);
    return { ...state,
      G
    };
  }

  function EndPhase(state, _ref10) {
    let {
      arg,
      next,
      turn: initialTurn,
      automatic
    } = _ref10;
    // End the turn first.
    state = EndTurn(state, {
      turn: initialTurn,
      force: true,
      automatic: true
    });
    const {
      phase,
      turn
    } = state.ctx;

    if (next) {
      next.push({
        fn: UpdatePhase,
        arg,
        phase
      });
    } // If we aren't in a phase, there is nothing else to do.


    if (phase === null) {
      return state;
    } // Run any cleanup code for the phase that is about to end.


    const phaseConfig = GetPhase(state.ctx);
    const G = phaseConfig.wrapped.onEnd(state); // Reset the phase.

    const ctx = { ...state.ctx,
      phase: null
    }; // Add log entry.

    const action = (0, _turnOrder0b7dce3d.g)('endPhase', arg);
    const {
      _stateID
    } = state;
    const logEntry = {
      action,
      _stateID,
      turn,
      phase
    };
    if (automatic) logEntry.automatic = true;
    const deltalog = [...(state.deltalog || []), logEntry];
    return { ...state,
      G,
      ctx,
      deltalog
    };
  }

  function EndTurn(state, _ref11) {
    let {
      arg,
      next,
      turn: initialTurn,
      force,
      automatic,
      playerID
    } = _ref11;

    // This is not the turn that EndTurn was originally
    // called for. The turn was probably ended some other way.
    if (initialTurn !== state.ctx.turn) {
      return state;
    }

    const {
      currentPlayer,
      numMoves,
      phase,
      turn
    } = state.ctx;
    const phaseConfig = GetPhase(state.ctx); // Prevent ending the turn if minMoves haven't been reached.

    const currentPlayerMoves = numMoves || 0;

    if (!force && phaseConfig.turn.minMoves && currentPlayerMoves < phaseConfig.turn.minMoves) {
      (0, _turnOrder0b7dce3d.i)("cannot end turn before making ".concat(phaseConfig.turn.minMoves, " moves"));
      return state;
    } // Run turn-end triggers.


    const G = phaseConfig.turn.wrapped.onEnd(state);

    if (next) {
      next.push({
        fn: UpdateTurn,
        arg,
        currentPlayer
      });
    } // Reset activePlayers.


    let ctx = { ...state.ctx,
      activePlayers: null
    }; // Remove player from playerOrder

    if (arg && arg.remove) {
      playerID = playerID || currentPlayer;
      const playOrder = ctx.playOrder.filter(i => i != playerID);
      const playOrderPos = ctx.playOrderPos > playOrder.length - 1 ? 0 : ctx.playOrderPos;
      ctx = { ...ctx,
        playOrder,
        playOrderPos
      };

      if (playOrder.length === 0) {
        next.push({
          fn: EndPhase,
          turn,
          phase
        });
        return state;
      }
    } // Create log entry.


    const action = (0, _turnOrder0b7dce3d.g)('endTurn', arg);
    const {
      _stateID
    } = state;
    const logEntry = {
      action,
      _stateID,
      turn,
      phase
    };
    if (automatic) logEntry.automatic = true;
    const deltalog = [...(state.deltalog || []), logEntry];
    return { ...state,
      G,
      ctx,
      deltalog,
      _undo: [],
      _redo: []
    };
  }

  function EndStage(state, _ref12) {
    let {
      arg,
      next,
      automatic,
      playerID
    } = _ref12;
    playerID = playerID || state.ctx.currentPlayer;
    let {
      ctx,
      _stateID
    } = state;
    let {
      activePlayers,
      _activePlayersNumMoves,
      _activePlayersMinMoves,
      _activePlayersMaxMoves,
      phase,
      turn
    } = ctx;
    const playerInStage = activePlayers !== null && playerID in activePlayers;
    const phaseConfig = GetPhase(ctx);

    if (!arg && playerInStage) {
      const stage = phaseConfig.turn.stages[activePlayers[playerID]];

      if (stage && stage.next) {
        arg = stage.next;
      }
    } // Checking if arg is a valid stage, even Stage.NULL


    if (next) {
      next.push({
        fn: UpdateStage,
        arg,
        playerID
      });
    } // If player isn’t in a stage, there is nothing else to do.


    if (!playerInStage) return state; // Prevent ending the stage if minMoves haven't been reached.

    const currentPlayerMoves = _activePlayersNumMoves[playerID] || 0;

    if (_activePlayersMinMoves && _activePlayersMinMoves[playerID] && currentPlayerMoves < _activePlayersMinMoves[playerID]) {
      (0, _turnOrder0b7dce3d.i)("cannot end stage before making ".concat(_activePlayersMinMoves[playerID], " moves"));
      return state;
    } // Remove player from activePlayers.


    activePlayers = { ...activePlayers
    };
    delete activePlayers[playerID];

    if (_activePlayersMinMoves) {
      // Remove player from _activePlayersMinMoves.
      _activePlayersMinMoves = { ..._activePlayersMinMoves
      };
      delete _activePlayersMinMoves[playerID];
    }

    if (_activePlayersMaxMoves) {
      // Remove player from _activePlayersMaxMoves.
      _activePlayersMaxMoves = { ..._activePlayersMaxMoves
      };
      delete _activePlayersMaxMoves[playerID];
    }

    ctx = (0, _turnOrder0b7dce3d.c)({ ...ctx,
      activePlayers,
      _activePlayersMinMoves,
      _activePlayersMaxMoves
    }); // Create log entry.

    const action = (0, _turnOrder0b7dce3d.g)('endStage', arg);
    const logEntry = {
      action,
      _stateID,
      turn,
      phase
    };
    if (automatic) logEntry.automatic = true;
    const deltalog = [...(state.deltalog || []), logEntry];
    return { ...state,
      ctx,
      deltalog
    };
  }
  /**
   * Retrieves the relevant move that can be played by playerID.
   *
   * If ctx.activePlayers is set (i.e. one or more players are in some stage),
   * then it attempts to find the move inside the stages config for
   * that turn. If the stage for a player is '', then the player is
   * allowed to make a move (as determined by the phase config), but
   * isn't restricted to a particular set as defined in the stage config.
   *
   * If not, it then looks for the move inside the phase.
   *
   * If it doesn't find the move there, it looks at the global move definition.
   *
   * @param {object} ctx
   * @param {string} name
   * @param {string} playerID
   */


  function GetMove(ctx, name, playerID) {
    const phaseConfig = GetPhase(ctx);
    const stages = phaseConfig.turn.stages;
    const {
      activePlayers
    } = ctx;

    if (activePlayers && activePlayers[playerID] !== undefined && activePlayers[playerID] !== _turnOrder0b7dce3d.S.NULL && stages[activePlayers[playerID]] !== undefined && stages[activePlayers[playerID]].moves !== undefined) {
      // Check if moves are defined for the player's stage.
      const stage = stages[activePlayers[playerID]];
      const moves = stage.moves;

      if (name in moves) {
        return moves[name];
      }
    } else if (phaseConfig.moves) {
      // Check if moves are defined for the current phase.
      if (name in phaseConfig.moves) {
        return phaseConfig.moves[name];
      }
    } else if (name in moves) {
      // Check for the move globally.
      return moves[name];
    }

    return null;
  }

  function ProcessMove(state, action) {
    const {
      playerID,
      type
    } = action;
    const {
      currentPlayer,
      activePlayers,
      _activePlayersMaxMoves
    } = state.ctx;
    const move = GetMove(state.ctx, type, playerID);
    const shouldCount = !move || typeof move === 'function' || move.noLimit !== true;
    let {
      numMoves,
      _activePlayersNumMoves
    } = state.ctx;

    if (shouldCount) {
      if (playerID === currentPlayer) numMoves++;
      if (activePlayers) _activePlayersNumMoves[playerID]++;
    }

    state = { ...state,
      ctx: { ...state.ctx,
        numMoves,
        _activePlayersNumMoves
      }
    };

    if (_activePlayersMaxMoves && _activePlayersNumMoves[playerID] >= _activePlayersMaxMoves[playerID]) {
      state = EndStage(state, {
        playerID,
        automatic: true
      });
    }

    const phaseConfig = GetPhase(state.ctx);
    const G = phaseConfig.turn.wrapped.onMove({ ...state,
      ctx: { ...state.ctx,
        playerID
      }
    });
    state = { ...state,
      G
    };
    const events = [{
      fn: OnMove
    }];
    return Process(state, events);
  }

  function SetStageEvent(state, playerID, arg) {
    return Process(state, [{
      fn: EndStage,
      arg,
      playerID
    }]);
  }

  function EndStageEvent(state, playerID) {
    return Process(state, [{
      fn: EndStage,
      playerID
    }]);
  }

  function SetActivePlayersEvent(state, _playerID, arg) {
    return Process(state, [{
      fn: UpdateActivePlayers,
      arg
    }]);
  }

  function SetPhaseEvent(state, _playerID, newPhase) {
    return Process(state, [{
      fn: EndPhase,
      phase: state.ctx.phase,
      turn: state.ctx.turn,
      arg: {
        next: newPhase
      }
    }]);
  }

  function EndPhaseEvent(state) {
    return Process(state, [{
      fn: EndPhase,
      phase: state.ctx.phase,
      turn: state.ctx.turn
    }]);
  }

  function EndTurnEvent(state, _playerID, arg) {
    return Process(state, [{
      fn: EndTurn,
      turn: state.ctx.turn,
      phase: state.ctx.phase,
      arg
    }]);
  }

  function PassEvent(state, _playerID, arg) {
    return Process(state, [{
      fn: EndTurn,
      turn: state.ctx.turn,
      phase: state.ctx.phase,
      force: true,
      arg
    }]);
  }

  function EndGameEvent(state, _playerID, arg) {
    return Process(state, [{
      fn: EndGame,
      turn: state.ctx.turn,
      phase: state.ctx.phase,
      arg
    }]);
  }

  const eventHandlers = {
    endStage: EndStageEvent,
    setStage: SetStageEvent,
    endTurn: EndTurnEvent,
    pass: PassEvent,
    endPhase: EndPhaseEvent,
    setPhase: SetPhaseEvent,
    endGame: EndGameEvent,
    setActivePlayers: SetActivePlayersEvent
  };
  const enabledEventNames = [];

  if (events.endTurn !== false) {
    enabledEventNames.push('endTurn');
  }

  if (events.pass !== false) {
    enabledEventNames.push('pass');
  }

  if (events.endPhase !== false) {
    enabledEventNames.push('endPhase');
  }

  if (events.setPhase !== false) {
    enabledEventNames.push('setPhase');
  }

  if (events.endGame !== false) {
    enabledEventNames.push('endGame');
  }

  if (events.setActivePlayers !== false) {
    enabledEventNames.push('setActivePlayers');
  }

  if (events.endStage !== false) {
    enabledEventNames.push('endStage');
  }

  if (events.setStage !== false) {
    enabledEventNames.push('setStage');
  }

  function ProcessEvent(state, action) {
    const {
      type,
      playerID,
      args
    } = action.payload;
    if (typeof eventHandlers[type] !== 'function') return state;
    return eventHandlers[type](state, playerID, ...(Array.isArray(args) ? args : [args]));
  }

  function IsPlayerActive(_G, ctx, playerID) {
    if (ctx.activePlayers) {
      return playerID in ctx.activePlayers;
    }

    return ctx.currentPlayer === playerID;
  }

  return {
    ctx: numPlayers => ({
      numPlayers,
      turn: 0,
      currentPlayer: '0',
      playOrder: [...Array.from({
        length: numPlayers
      })].map((_, i) => i + ''),
      playOrderPos: 0,
      phase: startingPhase,
      activePlayers: null
    }),
    init: state => {
      return Process(state, [{
        fn: StartGame
      }]);
    },
    isPlayerActive: IsPlayerActive,
    eventHandlers,
    eventNames: Object.keys(eventHandlers),
    enabledEventNames,
    moveMap,
    moveNames: [...moveNames.values()],
    processMove: ProcessMove,
    processEvent: ProcessEvent,
    getMove: GetMove
  };
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


function IsProcessed(game) {
  return game.processMove !== undefined;
}
/**
 * Helper to generate the game move reducer. The returned
 * reducer has the following signature:
 *
 * (G, action, ctx) => {}
 *
 * You can roll your own if you like, or use any Redux
 * addon to generate such a reducer.
 *
 * The convention used in this framework is to
 * have action.type contain the name of the move, and
 * action.args contain any additional arguments as an
 * Array.
 */


function ProcessGameConfig(game) {
  // The Game() function has already been called on this
  // config object, so just pass it through.
  if (IsProcessed(game)) {
    return game;
  }

  if (game.name === undefined) game.name = 'default';
  if (game.deltaState === undefined) game.deltaState = false;
  if (game.disableUndo === undefined) game.disableUndo = false;
  if (game.setup === undefined) game.setup = () => ({});
  if (game.moves === undefined) game.moves = {};
  if (game.playerView === undefined) game.playerView = G => G;
  if (game.plugins === undefined) game.plugins = [];
  game.plugins.forEach(plugin => {
    if (plugin.name === undefined) {
      throw new Error('Plugin missing name attribute');
    }

    if (plugin.name.includes(' ')) {
      throw new Error(plugin.name + ': Plugin name must not include spaces');
    }
  });

  if (game.name.includes(' ')) {
    throw new Error(game.name + ': Game name must not include spaces');
  }

  const flow = Flow(game);
  return { ...game,
    flow,
    moveNames: flow.moveNames,
    pluginNames: game.plugins.map(p => p.name),
    processMove: (state, action) => {
      let moveFn = flow.getMove(state.ctx, action.type, action.playerID);

      if (IsLongFormMove(moveFn)) {
        moveFn = moveFn.move;
      }

      if (moveFn instanceof Function) {
        const fn = (0, _turnOrder0b7dce3d.F)(moveFn, _turnOrder0b7dce3d.G.MOVE, game.plugins);
        const ctxWithAPI = { ...(0, _turnOrder0b7dce3d.E)(state),
          playerID: action.playerID
        };
        let args = [];

        if (action.args !== undefined) {
          args = Array.isArray(action.args) ? action.args : [action.args];
        }

        return fn(state.G, ctxWithAPI, ...args);
      }

      (0, _turnOrder0b7dce3d.e)("invalid move object: ".concat(action.type));
      return state.G;
    }
  };
}

function IsLongFormMove(move) {
  return move instanceof Object && move.move !== undefined;
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


var UpdateErrorType;

(function (UpdateErrorType) {
  // The action’s credentials were missing or invalid
  UpdateErrorType["UnauthorizedAction"] = "update/unauthorized_action"; // The action’s matchID was not found

  UpdateErrorType["MatchNotFound"] = "update/match_not_found"; // Could not apply Patch operation (rfc6902).

  UpdateErrorType["PatchFailed"] = "update/patch_failed";
})(UpdateErrorType || (UpdateErrorType = {}));

var ActionErrorType;

(function (ActionErrorType) {
  // The action contained a stale state ID
  ActionErrorType["StaleStateId"] = "action/stale_state_id"; // The requested move is unknown or not currently available

  ActionErrorType["UnavailableMove"] = "action/unavailable_move"; // The move declared it was invalid (INVALID_MOVE constant)

  ActionErrorType["InvalidMove"] = "action/invalid_move"; // The player making the action is not currently active

  ActionErrorType["InactivePlayer"] = "action/inactive_player"; // The game has finished

  ActionErrorType["GameOver"] = "action/gameover"; // The requested action is disabled (e.g. undo/redo, events)

  ActionErrorType["ActionDisabled"] = "action/action_disabled"; // The requested action is not currently possible

  ActionErrorType["ActionInvalid"] = "action/action_invalid"; // The requested action was declared invalid by a plugin

  ActionErrorType["PluginActionInvalid"] = "action/plugin_invalid";
})(ActionErrorType || (ActionErrorType = {}));
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Check if the payload for the passed action contains a playerID.
 */


const actionHasPlayerID = action => action.payload.playerID !== null && action.payload.playerID !== undefined;
/**
 * Returns true if a move can be undone.
 */


const CanUndoMove = (G, ctx, move) => {
  function HasUndoable(move) {
    return move.undoable !== undefined;
  }

  function IsFunction(undoable) {
    return undoable instanceof Function;
  }

  if (!HasUndoable(move)) {
    return true;
  }

  if (IsFunction(move.undoable)) {
    return move.undoable(G, ctx);
  }

  return move.undoable;
};
/**
 * Update the undo and redo stacks for a move or event.
 */


function updateUndoRedoState(state, opts) {
  if (opts.game.disableUndo) return state;
  const undoEntry = {
    G: state.G,
    ctx: state.ctx,
    plugins: state.plugins,
    playerID: opts.action.payload.playerID || state.ctx.currentPlayer
  };

  if (opts.action.type === 'MAKE_MOVE') {
    undoEntry.moveType = opts.action.payload.type;
  }

  return { ...state,
    _undo: [...state._undo, undoEntry],
    // Always reset redo stack when making a move or event
    _redo: []
  };
}
/**
 * Process state, adding the initial deltalog for this action.
 */


function initializeDeltalog(state, action, move) {
  // Create a log entry for this action.
  const logEntry = {
    action,
    _stateID: state._stateID,
    turn: state.ctx.turn,
    phase: state.ctx.phase
  };
  const pluginLogMetadata = state.plugins.log.data.metadata;

  if (pluginLogMetadata !== undefined) {
    logEntry.metadata = pluginLogMetadata;
  }

  if (typeof move === 'object' && move.redact === true) {
    logEntry.redact = true;
  }

  return { ...state,
    deltalog: [logEntry]
  };
}
/**
 * Update plugin state after move/event & check if plugins consider the action to be valid.
 * @param state Current version of state in the reducer.
 * @param oldState State to revert to in case of error.
 * @param pluginOpts Plugin configuration options.
 * @returns Tuple of the new state updated after flushing plugins and the old
 * state augmented with an error if a plugin declared the action invalid.
 */


function flushAndValidatePlugins(state, oldState, pluginOpts) {
  const [newState, isInvalid] = (0, _turnOrder0b7dce3d.q)(state, pluginOpts);
  if (!isInvalid) return [newState];
  return [newState, WithError(oldState, ActionErrorType.PluginActionInvalid, isInvalid)];
}
/**
 * ExtractTransientsFromState
 *
 * Split out transients from the a TransientState
 */


function ExtractTransients(transientState) {
  if (!transientState) {
    // We preserve null for the state for legacy callers, but the transient
    // field should be undefined if not present to be consistent with the
    // code path below.
    return [null, undefined];
  }

  const {
    transients,
    ...state
  } = transientState;
  return [state, transients];
}
/**
 * WithError
 *
 * Augment a State instance with transient error information.
 */


function WithError(state, errorType, payload) {
  const error = {
    type: errorType,
    payload
  };
  return { ...state,
    transients: {
      error
    }
  };
}
/**
 * Middleware for processing TransientState associated with the reducer
 * returned by CreateGameReducer.
 * This should pretty much be used everywhere you want realistic state
 * transitions and error handling.
 */


const TransientHandlingMiddleware = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case _turnOrder0b7dce3d.p:
      {
        return result;
      }

    default:
      {
        const [, transients] = ExtractTransients(store.getState());

        if (typeof transients !== 'undefined') {
          store.dispatch((0, _turnOrder0b7dce3d.r)()); // Dev Note: If parent middleware needs to correlate the spawned
          // StripTransients action to the triggering action, instrument here.
          //
          // This is a bit tricky; for more details, see:
          //   https://github.com/boardgameio/boardgame.io/pull/940#discussion_r636200648

          return { ...result,
            transients
          };
        }

        return result;
      }
  }
};
/**
 * CreateGameReducer
 *
 * Creates the main game state reducer.
 */


exports.T = TransientHandlingMiddleware;

function CreateGameReducer(_ref13) {
  let {
    game,
    isClient
  } = _ref13;
  game = ProcessGameConfig(game);
  /**
   * GameReducer
   *
   * Redux reducer that maintains the overall game state.
   * @param {object} state - The state before the action.
   * @param {object} action - A Redux action.
   */

  return function () {
    let stateWithTransients = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let action = arguments.length > 1 ? arguments[1] : undefined;
    let [state
    /*, transients */
    ] = ExtractTransients(stateWithTransients);

    switch (action.type) {
      case _turnOrder0b7dce3d.p:
        {
          // This action indicates that transient metadata in the state has been
          // consumed and should now be stripped from the state..
          return state;
        }

      case _turnOrder0b7dce3d.o:
        {
          state = { ...state,
            deltalog: []
          }; // Process game events only on the server.
          // These events like `endTurn` typically
          // contain code that may rely on secret state
          // and cannot be computed on the client.

          if (isClient) {
            return state;
          } // Disallow events once the game is over.


          if (state.ctx.gameover !== undefined) {
            (0, _turnOrder0b7dce3d.e)("cannot call event after game end");
            return WithError(state, ActionErrorType.GameOver);
          } // Ignore the event if the player isn't active.


          if (actionHasPlayerID(action) && !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
            (0, _turnOrder0b7dce3d.e)("disallowed event: ".concat(action.payload.type));
            return WithError(state, ActionErrorType.InactivePlayer);
          } // Execute plugins.


          state = (0, _turnOrder0b7dce3d.m)(state, {
            game,
            isClient: false,
            playerID: action.payload.playerID
          }); // Process event.

          let newState = game.flow.processEvent(state, action); // Execute plugins.

          let stateWithError;
          [newState, stateWithError] = flushAndValidatePlugins(newState, state, {
            game,
            isClient: false
          });
          if (stateWithError) return stateWithError; // Update undo / redo state.

          newState = updateUndoRedoState(newState, {
            game,
            action
          });
          return { ...newState,
            _stateID: state._stateID + 1
          };
        }

      case _turnOrder0b7dce3d.M:
        {
          const oldState = state = { ...state,
            deltalog: []
          }; // Check whether the move is allowed at this time.

          const move = game.flow.getMove(state.ctx, action.payload.type, action.payload.playerID || state.ctx.currentPlayer);

          if (move === null) {
            (0, _turnOrder0b7dce3d.e)("disallowed move: ".concat(action.payload.type));
            return WithError(state, ActionErrorType.UnavailableMove);
          } // Don't run move on client if move says so.


          if (isClient && move.client === false) {
            return state;
          } // Disallow moves once the game is over.


          if (state.ctx.gameover !== undefined) {
            (0, _turnOrder0b7dce3d.e)("cannot make move after game end");
            return WithError(state, ActionErrorType.GameOver);
          } // Ignore the move if the player isn't active.


          if (actionHasPlayerID(action) && !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
            (0, _turnOrder0b7dce3d.e)("disallowed move: ".concat(action.payload.type));
            return WithError(state, ActionErrorType.InactivePlayer);
          } // Execute plugins.


          state = (0, _turnOrder0b7dce3d.m)(state, {
            game,
            isClient,
            playerID: action.payload.playerID
          }); // Process the move.

          const G = game.processMove(state, action.payload); // The game declared the move as invalid.

          if (G === _turnOrder0b7dce3d.n) {
            (0, _turnOrder0b7dce3d.e)("invalid move: ".concat(action.payload.type, " args: ").concat(action.payload.args)); // TODO(#723): Marshal a nice error payload with the processed move.

            return WithError(state, ActionErrorType.InvalidMove);
          }

          const newState = { ...state,
            G
          }; // Some plugin indicated that it is not suitable to be
          // materialized on the client (and must wait for the server
          // response instead).

          if (isClient && (0, _turnOrder0b7dce3d.N)(newState, {
            game
          })) {
            return state;
          }

          state = newState; // If we're on the client, just process the move
          // and no triggers in multiplayer mode.
          // These will be processed on the server, which
          // will send back a state update.

          if (isClient) {
            let stateWithError;
            [state, stateWithError] = flushAndValidatePlugins(state, oldState, {
              game,
              isClient: true
            });
            if (stateWithError) return stateWithError;
            return { ...state,
              _stateID: state._stateID + 1
            };
          } // On the server, construct the deltalog.


          state = initializeDeltalog(state, action, move); // Allow the flow reducer to process any triggers that happen after moves.

          state = game.flow.processMove(state, action.payload);
          let stateWithError;
          [state, stateWithError] = flushAndValidatePlugins(state, oldState, {
            game
          });
          if (stateWithError) return stateWithError; // Update undo / redo state.

          state = updateUndoRedoState(state, {
            game,
            action
          });
          return { ...state,
            _stateID: state._stateID + 1
          };
        }

      case _turnOrder0b7dce3d.l:
      case _turnOrder0b7dce3d.k:
      case _turnOrder0b7dce3d.j:
        {
          return action.state;
        }

      case _turnOrder0b7dce3d.h:
        {
          state = { ...state,
            deltalog: []
          };

          if (game.disableUndo) {
            (0, _turnOrder0b7dce3d.e)('Undo is not enabled');
            return WithError(state, ActionErrorType.ActionDisabled);
          }

          const {
            G,
            ctx,
            _undo,
            _redo,
            _stateID
          } = state;

          if (_undo.length < 2) {
            (0, _turnOrder0b7dce3d.e)("No moves to undo");
            return WithError(state, ActionErrorType.ActionInvalid);
          }

          const last = _undo[_undo.length - 1];
          const restore = _undo[_undo.length - 2]; // Only allow players to undo their own moves.

          if (actionHasPlayerID(action) && action.payload.playerID !== last.playerID) {
            (0, _turnOrder0b7dce3d.e)("Cannot undo other players' moves");
            return WithError(state, ActionErrorType.ActionInvalid);
          } // If undoing a move, check it is undoable.


          if (last.moveType) {
            const lastMove = game.flow.getMove(restore.ctx, last.moveType, last.playerID);

            if (!CanUndoMove(G, ctx, lastMove)) {
              (0, _turnOrder0b7dce3d.e)("Move cannot be undone");
              return WithError(state, ActionErrorType.ActionInvalid);
            }
          }

          state = initializeDeltalog(state, action);
          return { ...state,
            G: restore.G,
            ctx: restore.ctx,
            plugins: restore.plugins,
            _stateID: _stateID + 1,
            _undo: _undo.slice(0, -1),
            _redo: [last, ..._redo]
          };
        }

      case _turnOrder0b7dce3d.R:
        {
          state = { ...state,
            deltalog: []
          };

          if (game.disableUndo) {
            (0, _turnOrder0b7dce3d.e)('Redo is not enabled');
            return WithError(state, ActionErrorType.ActionDisabled);
          }

          const {
            _undo,
            _redo,
            _stateID
          } = state;

          if (_redo.length === 0) {
            (0, _turnOrder0b7dce3d.e)("No moves to redo");
            return WithError(state, ActionErrorType.ActionInvalid);
          }

          const first = _redo[0]; // Only allow players to redo their own undos.

          if (actionHasPlayerID(action) && action.payload.playerID !== first.playerID) {
            (0, _turnOrder0b7dce3d.e)("Cannot redo other players' moves");
            return WithError(state, ActionErrorType.ActionInvalid);
          }

          state = initializeDeltalog(state, action);
          return { ...state,
            G: first.G,
            ctx: first.ctx,
            plugins: first.plugins,
            _stateID: _stateID + 1,
            _undo: [..._undo, first],
            _redo: _redo.slice(1)
          };
        }

      case _turnOrder0b7dce3d.d:
        {
          // TODO(#723): Expose error semantics to plugin processing.
          return (0, _turnOrder0b7dce3d.f)(state, action, {
            game
          });
        }

      case _turnOrder0b7dce3d.P:
        {
          const oldState = state;
          const newState = JSON.parse(JSON.stringify(oldState));
          const patchError = (0, _rfc.applyPatch)(newState, action.patch);
          const hasError = patchError.some(entry => entry !== null);

          if (hasError) {
            (0, _turnOrder0b7dce3d.e)("Patch ".concat(JSON.stringify(action.patch), " apply failed"));
            return WithError(oldState, UpdateErrorType.PatchFailed, patchError);
          } else {
            return newState;
          }
        }

      default:
        {
          return state;
        }
    }
  };
}
},{"./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","rfc6902":"node_modules/rfc6902/index.js"}],"node_modules/flatted/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJSON = exports.stringify = exports.parse = exports.fromJSON = void 0;

/*! (c) 2020 Andrea Giammarchi */
const {
  parse: $parse,
  stringify: $stringify
} = JSON;
const {
  keys
} = Object;
const Primitive = String; // it could be Number

const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => value instanceof Primitive ? Primitive(value) : value;

const Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;

const revive = (input, parsed, output, $) => {
  const lazy = [];

  for (let ke = keys(output), {
    length
  } = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];

    if (value instanceof Primitive) {
      const tmp = input[value];

      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({
          k,
          a: [input, parsed, tmp, $]
        });
      } else output[k] = $.call(output, k, tmp);
    } else if (output[k] !== ignore) output[k] = $.call(output, k, value);
  }

  for (let {
    length
  } = lazy, i = 0; i < length; i++) {
    const {
      k,
      a
    } = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }

  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ? revive(input, new Set(), value, $) : value;
  return $.call({
    '': tmp
  }, '', tmp);
};

exports.parse = parse;

const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ? (k, v) => k === '' || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
  const known = new Map();
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({
    '': value
  }, '', value));
  let firstRun = !i;

  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }

  return '[' + output.join(',') + ']';

  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }

    const after = $.call(this, key, value);

    switch (typeof after) {
      case object:
        if (after === null) return after;

      case primitive:
        return known.get(after) || set(known, input, after);
    }

    return after;
  }
};

exports.stringify = stringify;

const toJSON = any => $parse(stringify(any));

exports.toJSON = toJSON;

const fromJSON = any => parse($stringify(any));

exports.fromJSON = fromJSON;
},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/setimmediate/setImmediate.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

},{"process":"node_modules/process/browser.js"}],"node_modules/boardgame.io/dist/esm/ai-3099ce9a.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.R = exports.M = exports.B = void 0;
exports.S = Step;
exports.a = Simulate;

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _pluginRandom087f861e = require("./plugin-random-087f861e.js");

var _reducer07c7b = require("./reducer-07c7b307.js");

require("setimmediate");

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Base class that bots can extend.
 */
class Bot {
  constructor(_ref) {
    let {
      enumerate,
      seed
    } = _ref;
    this.enumerateFn = enumerate;
    this.seed = seed;
    this.iterationCounter = 0;
    this._opts = {};
  }

  addOpt(_ref2) {
    let {
      key,
      range,
      initial
    } = _ref2;
    this._opts[key] = {
      range,
      value: initial
    };
  }

  getOpt(key) {
    return this._opts[key].value;
  }

  setOpt(key, value) {
    if (key in this._opts) {
      this._opts[key].value = value;
    }
  }

  opts() {
    return this._opts;
  }

  enumerate(G, ctx, playerID) {
    const actions = this.enumerateFn(G, ctx, playerID);
    return actions.map(a => {
      if ('payload' in a) {
        return a;
      }

      if ('move' in a) {
        return (0, _turnOrder0b7dce3d.B)(a.move, a.args, playerID);
      }

      if ('event' in a) {
        return (0, _turnOrder0b7dce3d.g)(a.event, a.args, playerID);
      }
    });
  }

  random(arg) {
    let number;

    if (this.seed !== undefined) {
      const seed = this.prngstate ? '' : this.seed;
      const rand = (0, _pluginRandom087f861e.a)(seed, this.prngstate);
      number = rand();
      this.prngstate = rand.state();
    } else {
      number = Math.random();
    }

    if (arg) {
      if (Array.isArray(arg)) {
        const id = Math.floor(number * arg.length);
        return arg[id];
      } else {
        return Math.floor(number * arg);
      }
    }

    return number;
  }

}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * The number of iterations to run before yielding to
 * the JS event loop (in async mode).
 */


exports.B = Bot;
const CHUNK_SIZE = 25;
/**
 * Bot that uses Monte-Carlo Tree Search to find promising moves.
 */

class MCTSBot extends Bot {
  constructor(_ref3) {
    let {
      enumerate,
      seed,
      objectives,
      game,
      iterations,
      playoutDepth,
      iterationCallback
    } = _ref3;
    super({
      enumerate,
      seed
    });

    if (objectives === undefined) {
      objectives = () => ({});
    }

    this.objectives = objectives;

    this.iterationCallback = iterationCallback || (() => {});

    this.reducer = (0, _reducer07c7b.C)({
      game
    });
    this.iterations = iterations;
    this.playoutDepth = playoutDepth;
    this.addOpt({
      key: 'async',
      initial: false
    });
    this.addOpt({
      key: 'iterations',
      initial: typeof iterations === 'number' ? iterations : 1000,
      range: {
        min: 1,
        max: 2000
      }
    });
    this.addOpt({
      key: 'playoutDepth',
      initial: typeof playoutDepth === 'number' ? playoutDepth : 50,
      range: {
        min: 1,
        max: 100
      }
    });
  }

  createNode(_ref4) {
    let {
      state,
      parentAction,
      parent,
      playerID
    } = _ref4;
    const {
      G,
      ctx
    } = state;
    let actions = [];
    let objectives = [];

    if (playerID !== undefined) {
      actions = this.enumerate(G, ctx, playerID);
      objectives = this.objectives(G, ctx, playerID);
    } else if (ctx.activePlayers) {
      for (const playerID in ctx.activePlayers) {
        actions.push(...this.enumerate(G, ctx, playerID));
        objectives.push(this.objectives(G, ctx, playerID));
      }
    } else {
      actions = this.enumerate(G, ctx, ctx.currentPlayer);
      objectives = this.objectives(G, ctx, ctx.currentPlayer);
    }

    return {
      state,
      parent,
      parentAction,
      actions,
      objectives,
      children: [],
      visits: 0,
      value: 0
    };
  }

  select(node) {
    // This node has unvisited children.
    if (node.actions.length > 0) {
      return node;
    } // This is a terminal node.


    if (node.children.length === 0) {
      return node;
    }

    let selectedChild = null;
    let best = 0;

    for (const child of node.children) {
      const childVisits = child.visits + Number.EPSILON;
      const uct = child.value / childVisits + Math.sqrt(2 * Math.log(node.visits) / childVisits);

      if (selectedChild == null || uct > best) {
        best = uct;
        selectedChild = child;
      }
    }

    return this.select(selectedChild);
  }

  expand(node) {
    const actions = node.actions;

    if (actions.length === 0 || node.state.ctx.gameover !== undefined) {
      return node;
    }

    const id = this.random(actions.length);
    const action = actions[id];
    node.actions.splice(id, 1);
    const childState = this.reducer(node.state, action);
    const childNode = this.createNode({
      state: childState,
      parentAction: action,
      parent: node
    });
    node.children.push(childNode);
    return childNode;
  }

  playout(_ref5) {
    let {
      state
    } = _ref5;
    let playoutDepth = this.getOpt('playoutDepth');

    if (typeof this.playoutDepth === 'function') {
      playoutDepth = this.playoutDepth(state.G, state.ctx);
    }

    for (let i = 0; i < playoutDepth && state.ctx.gameover === undefined; i++) {
      const {
        G,
        ctx
      } = state;
      let playerID = ctx.currentPlayer;

      if (ctx.activePlayers) {
        playerID = Object.keys(ctx.activePlayers)[0];
      }

      const moves = this.enumerate(G, ctx, playerID); // Check if any objectives are met.

      const objectives = this.objectives(G, ctx, playerID);
      const score = Object.keys(objectives).reduce((score, key) => {
        const objective = objectives[key];

        if (objective.checker(G, ctx)) {
          return score + objective.weight;
        }

        return score;
      }, 0); // If so, stop and return the score.

      if (score > 0) {
        return {
          score
        };
      }

      if (!moves || moves.length === 0) {
        return undefined;
      }

      const id = this.random(moves.length);
      const childState = this.reducer(state, moves[id]);
      state = childState;
    }

    return state.ctx.gameover;
  }

  backpropagate(node) {
    let result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    node.visits++;

    if (result.score !== undefined) {
      node.value += result.score;
    }

    if (result.draw === true) {
      node.value += 0.5;
    }

    if (node.parentAction && result.winner === node.parentAction.payload.playerID) {
      node.value++;
    }

    if (node.parent) {
      this.backpropagate(node.parent, result);
    }
  }

  play(state, playerID) {
    const root = this.createNode({
      state,
      playerID
    });
    let numIterations = this.getOpt('iterations');

    if (typeof this.iterations === 'function') {
      numIterations = this.iterations(state.G, state.ctx);
    }

    const getResult = () => {
      let selectedChild = null;

      for (const child of root.children) {
        if (selectedChild == null || child.visits > selectedChild.visits) {
          selectedChild = child;
        }
      }

      const action = selectedChild && selectedChild.parentAction;
      const metadata = root;
      return {
        action,
        metadata
      };
    };

    return new Promise(resolve => {
      const iteration = () => {
        for (let i = 0; i < CHUNK_SIZE && this.iterationCounter < numIterations; i++) {
          const leaf = this.select(root);
          const child = this.expand(leaf);
          const result = this.playout(child);
          this.backpropagate(child, result);
          this.iterationCounter++;
        }

        this.iterationCallback({
          iterationCounter: this.iterationCounter,
          numIterations,
          metadata: root
        });
      };

      this.iterationCounter = 0;

      if (this.getOpt('async')) {
        const asyncIteration = () => {
          if (this.iterationCounter < numIterations) {
            iteration();
            setImmediate(asyncIteration);
          } else {
            resolve(getResult());
          }
        };

        asyncIteration();
      } else {
        while (this.iterationCounter < numIterations) {
          iteration();
        }

        resolve(getResult());
      }
    });
  }

}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Bot that picks a move at random.
 */


exports.M = MCTSBot;

class RandomBot extends Bot {
  play(_ref6, playerID) {
    let {
      G,
      ctx
    } = _ref6;
    const moves = this.enumerate(G, ctx, playerID);
    return Promise.resolve({
      action: this.random(moves)
    });
  }

}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Make a single move on the client with a bot.
 *
 * @param {...object} client - The game client.
 * @param {...object} bot - The bot.
 */


exports.R = RandomBot;

async function Step(client, bot) {
  const state = client.store.getState();
  let playerID = state.ctx.currentPlayer;

  if (state.ctx.activePlayers) {
    playerID = Object.keys(state.ctx.activePlayers)[0];
  }

  const {
    action,
    metadata
  } = await bot.play(state, playerID);

  if (action) {
    const a = { ...action,
      payload: { ...action.payload,
        metadata
      }
    };
    client.store.dispatch(a);
    return a;
  }
}
/**
 * Simulates the game till the end or a max depth.
 *
 * @param {...object} game - The game object.
 * @param {...object} bots - An array of bots.
 * @param {...object} state - The game state to start from.
 */


async function Simulate(_ref7) {
  let {
    game,
    bots,
    state,
    depth
  } = _ref7;
  if (depth === undefined) depth = 10000;
  const reducer = (0, _reducer07c7b.C)({
    game
  });
  let metadata = null;
  let iter = 0;

  while (state.ctx.gameover === undefined && iter < depth) {
    let playerID = state.ctx.currentPlayer;

    if (state.ctx.activePlayers) {
      playerID = Object.keys(state.ctx.activePlayers)[0];
    }

    const bot = bots instanceof Bot ? bots : bots[playerID];
    const t = await bot.play(state, playerID);

    if (!t.action) {
      break;
    }

    metadata = t.metadata;
    state = reducer(state, t.action);
    iter++;
  }

  return {
    state,
    metadata
  };
}
},{"./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","./plugin-random-087f861e.js":"node_modules/boardgame.io/dist/esm/plugin-random-087f861e.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js","setimmediate":"node_modules/setimmediate/setImmediate.js"}],"node_modules/boardgame.io/dist/esm/Debug-fd09b8bc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.D = void 0;
exports._ = _inherits;
exports.a = _createSuper;
exports.b = _createClass;
exports.c = _defineProperty;
exports.d = _classCallCheck;
exports.e = _objectWithoutProperties;
exports.f = _objectSpread2;

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _reducer07c7b = require("./reducer-07c7b307.js");

var _flatted = require("flatted");

var _ai3099ce9a = require("./ai-3099ce9a.js");

function noop() {}

const identity = x => x;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function subscribe(store) {
  if (store == null) {
    return noop;
  }

  for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callbacks[_key - 1] = arguments[_key];
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;

    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }

    return dirty;
  }

  return -1;
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

const is_client = typeof window !== 'undefined';
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);

  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element('style');
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}

function get_root_for_style(node) {
  if (!node) return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

  if (root.host) {
    return root;
  }

  return document;
}

function append_empty_stylesheet(node) {
  const style_element = element('style');
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element;
}

function append_stylesheet(node, style) {
  append(node.head || node, style);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function children(element) {
  return Array.from(element.childNodes);
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  let bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}

const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn) {
  let uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
  }

  const rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
  const name = "__svelte_".concat(hash(rule), "_").concat(uid);
  const doc = get_root_for_style(node);
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = append_empty_stylesheet(node).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

let current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    // @ts-ignore
    callbacks.slice().forEach(fn => fn.call(this, event));
  }
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      started = true;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

function create_component(block) {
  block && block.c();
}

function mount_component(component, target, anchor, customElement) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
  let dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
    const value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }

  set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */

function writable(value) {
  let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  let stop;
  const subscribers = new Set();

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    let invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return () => {
      subscribers.delete(subscriber);

      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}

function cubicOut(t) {
  const f = t - 1.0;
  return f * f * f + 1.0;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function fly(node) {
  let {
    delay = 0,
    duration = 400,
    easing = cubicOut,
    x = 0,
    y = 0,
    opacity = 0
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u)
  };
}

function crossfade(_a) {
  var {
    fallback
  } = _a,
      defaults = __rest(_a, ["fallback"]);

  const to_receive = new Map();
  const to_send = new Map();

  function crossfade(from, node, params) {
    const {
      delay = 0,
      duration = d => Math.sqrt(d) * 30,
      easing = cubicOut
    } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => "\n\t\t\t\topacity: ".concat(t * opacity, ";\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ").concat(transform, " translate(").concat(u * dx, "px,").concat(u * dy, "px) scale(").concat(t + (1 - t) * dw, ", ").concat(t + (1 - t) * dh, ");\n\t\t\t")
    };
  }

  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const {
            rect
          } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade(rect, node, params);
        } // if the node is disappearing altogether
        // (i.e. wasn't claimed by the other list)
        // then we need to supply an outro


        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }

  return [transition(to_send, to_receive, false), transition(to_receive, to_send, true)];
}
/* node_modules/svelte-icons/components/IconBase.svelte generated by Svelte v3.41.0 */


function add_css(target) {
  append_styles(target, "svelte-c8tyih", "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}");
} // (18:2) {#if title}


function create_if_block(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(
      /*title*/
      ctx[0]);
    },

    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },

    p(ctx, dirty) {
      if (dirty &
      /*title*/
      1) set_data(t,
      /*title*/
      ctx[0]);
    },

    d(detaching) {
      if (detaching) detach(title_1);
    }

  };
}

function create_fragment(ctx) {
  let svg;
  let if_block_anchor;
  let current;
  let if_block =
  /*title*/
  ctx[0] && create_if_block(ctx);
  const default_slot_template =
  /*#slots*/
  ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  return {
    c() {
      svg = svg_element("svg");
      if (if_block) if_block.c();
      if_block_anchor = empty();
      if (default_slot) default_slot.c();
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox",
      /*viewBox*/
      ctx[1]);
      attr(svg, "class", "svelte-c8tyih");
    },

    m(target, anchor) {
      insert(target, svg, anchor);
      if (if_block) if_block.m(svg, null);
      append(svg, if_block_anchor);

      if (default_slot) {
        default_slot.m(svg, null);
      }

      current = true;
    },

    p(ctx, _ref) {
      let [dirty] = _ref;

      if (
      /*title*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(svg, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        4)) {
          update_slot_base(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[2], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[2]) : get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[2], dirty, null), null);
        }
      }

      if (!current || dirty &
      /*viewBox*/
      2) {
        attr(svg, "viewBox",
        /*viewBox*/
        ctx[1]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },

    o(local) {
      transition_out(default_slot, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(svg);
      if (if_block) if_block.d();
      if (default_slot) default_slot.d(detaching);
    }

  };
}

function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  let {
    title = null
  } = $$props;
  let {
    viewBox
  } = $$props;

  $$self.$$set = $$props => {
    if ('title' in $$props) $$invalidate(0, title = $$props.title);
    if ('viewBox' in $$props) $$invalidate(1, viewBox = $$props.viewBox);
    if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  return [title, viewBox, $$scope, slots];
}

class IconBase extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      title: 0,
      viewBox: 1
    }, add_css);
  }

}
/* node_modules/svelte-icons/fa/FaChevronRight.svelte generated by Svelte v3.41.0 */


function create_default_slot(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z");
    },

    m(target, anchor) {
      insert(target, path, anchor);
    },

    d(detaching) {
      if (detaching) detach(path);
    }

  };
}

function create_fragment$1(ctx) {
  let iconbase;
  let current;
  const iconbase_spread_levels = [{
    viewBox: "0 0 320 512"
  },
  /*$$props*/
  ctx[0]];
  let iconbase_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx
    }
  };

  for (let i = 0; i < iconbase_spread_levels.length; i += 1) {
    iconbase_props = assign(iconbase_props, iconbase_spread_levels[i]);
  }

  iconbase = new IconBase({
    props: iconbase_props
  });
  return {
    c() {
      create_component(iconbase.$$.fragment);
    },

    m(target, anchor) {
      mount_component(iconbase, target, anchor);
      current = true;
    },

    p(ctx, _ref2) {
      let [dirty] = _ref2;
      const iconbase_changes = dirty &
      /*$$props*/
      1 ? get_spread_update(iconbase_spread_levels, [iconbase_spread_levels[0], get_spread_object(
      /*$$props*/
      ctx[0])]) : {};

      if (dirty &
      /*$$scope*/
      2) {
        iconbase_changes.$$scope = {
          dirty,
          ctx
        };
      }

      iconbase.$set(iconbase_changes);
    },

    i(local) {
      if (current) return;
      transition_in(iconbase.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(iconbase.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(iconbase, detaching);
    }

  };
}

function instance$1($$self, $$props, $$invalidate) {
  $$self.$$set = $$new_props => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };

  $$props = exclude_internal_props($$props);
  return [$$props];
}

class FaChevronRight extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }

}
/* src/client/debug/Menu.svelte generated by Svelte v3.41.0 */


function add_css$1(target) {
  append_styles(target, "svelte-1xg9v5h", ".menu.svelte-1xg9v5h{display:flex;margin-top:43px;flex-direction:row-reverse;border:1px solid #ccc;border-radius:5px 5px 0 0;height:25px;line-height:25px;margin-right:-500px;transform-origin:bottom right;transform:rotate(-90deg) translate(0, -500px)}.menu-item.svelte-1xg9v5h{line-height:25px;cursor:pointer;border:0;background:#fefefe;color:#555;padding-left:15px;padding-right:15px;text-align:center}.menu-item.svelte-1xg9v5h:first-child{border-radius:0 5px 0 0}.menu-item.svelte-1xg9v5h:last-child{border-radius:5px 0 0 0}.menu-item.active.svelte-1xg9v5h{cursor:default;font-weight:bold;background:#ddd;color:#555}.menu-item.svelte-1xg9v5h:hover,.menu-item.svelte-1xg9v5h:focus{background:#eee;color:#555}");
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i][0];
  child_ctx[5] = list[i][1].label;
  return child_ctx;
} // (57:2) {#each Object.entries(panes) as [key, {label}


function create_each_block(ctx) {
  let button;
  let t0_value =
  /*label*/
  ctx[5] + "";
  let t0;
  let t1;
  let mounted;
  let dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[3](
      /*key*/
      ctx[4])
    );
  }

  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      attr(button, "class", "menu-item svelte-1xg9v5h");
      toggle_class(button, "active",
      /*pane*/
      ctx[0] ==
      /*key*/
      ctx[4]);
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);

      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*panes*/
      2 && t0_value !== (t0_value =
      /*label*/
      ctx[5] + "")) set_data(t0, t0_value);

      if (dirty &
      /*pane, Object, panes*/
      3) {
        toggle_class(button, "active",
        /*pane*/
        ctx[0] ==
        /*key*/
        ctx[4]);
      }
    },

    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }

  };
}

function create_fragment$2(ctx) {
  let nav;
  let each_value = Object.entries(
  /*panes*/
  ctx[1]);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c() {
      nav = element("nav");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(nav, "class", "menu svelte-1xg9v5h");
    },

    m(target, anchor) {
      insert(target, nav, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(nav, null);
      }
    },

    p(ctx, _ref3) {
      let [dirty] = _ref3;

      if (dirty &
      /*pane, Object, panes, dispatch*/
      7) {
        each_value = Object.entries(
        /*panes*/
        ctx[1]);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(nav, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(nav);
      destroy_each(each_blocks, detaching);
    }

  };
}

function instance$2($$self, $$props, $$invalidate) {
  let {
    pane
  } = $$props;
  let {
    panes
  } = $$props;
  const dispatch = createEventDispatcher();

  const click_handler = key => dispatch('change', key);

  $$self.$$set = $$props => {
    if ('pane' in $$props) $$invalidate(0, pane = $$props.pane);
    if ('panes' in $$props) $$invalidate(1, panes = $$props.panes);
  };

  return [pane, panes, dispatch, click_handler];
}

class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      pane: 0,
      panes: 1
    }, add_css$1);
  }

}

var contextKey = {};
/* node_modules/svelte-json-tree-auto/src/JSONArrow.svelte generated by Svelte v3.41.0 */

function add_css$2(target) {
  append_styles(target, "svelte-1vyml86", ".container.svelte-1vyml86{display:inline-block;cursor:pointer;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1vyml86{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-sign);user-select:none;font-family:'Courier New', Courier, monospace}.expanded.svelte-1vyml86{transform:rotateZ(90deg) translateX(-3px)}");
}

function create_fragment$3(ctx) {
  let div1;
  let div0;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      div0.textContent = '\u25B6';
      attr(div0, "class", "arrow svelte-1vyml86");
      toggle_class(div0, "expanded",
      /*expanded*/
      ctx[0]);
      attr(div1, "class", "container svelte-1vyml86");
    },

    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);

      if (!mounted) {
        dispose = listen(div1, "click",
        /*click_handler*/
        ctx[1]);
        mounted = true;
      }
    },

    p(ctx, _ref4) {
      let [dirty] = _ref4;

      if (dirty &
      /*expanded*/
      1) {
        toggle_class(div0, "expanded",
        /*expanded*/
        ctx[0]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div1);
      mounted = false;
      dispose();
    }

  };
}

function instance$3($$self, $$props, $$invalidate) {
  let {
    expanded
  } = $$props;

  function click_handler(event) {
    bubble.call(this, $$self, event);
  }

  $$self.$$set = $$props => {
    if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
  };

  return [expanded, click_handler];
}

class JSONArrow extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      expanded: 0
    }, add_css$2);
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONKey.svelte generated by Svelte v3.41.0 */


function add_css$3(target) {
  append_styles(target, "svelte-1vlbacg", "label.svelte-1vlbacg{display:inline-block;color:var(--label-color);padding:0}.spaced.svelte-1vlbacg{padding-right:var(--li-colon-space)}");
} // (16:0) {#if showKey && key}


function create_if_block$1(ctx) {
  let label;
  let span;
  let t0;
  let t1;
  let mounted;
  let dispose;
  return {
    c() {
      label = element("label");
      span = element("span");
      t0 = text(
      /*key*/
      ctx[0]);
      t1 = text(
      /*colon*/
      ctx[2]);
      attr(label, "class", "svelte-1vlbacg");
      toggle_class(label, "spaced",
      /*isParentExpanded*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, label, anchor);
      append(label, span);
      append(span, t0);
      append(span, t1);

      if (!mounted) {
        dispose = listen(label, "click",
        /*click_handler*/
        ctx[5]);
        mounted = true;
      }
    },

    p(ctx, dirty) {
      if (dirty &
      /*key*/
      1) set_data(t0,
      /*key*/
      ctx[0]);
      if (dirty &
      /*colon*/
      4) set_data(t1,
      /*colon*/
      ctx[2]);

      if (dirty &
      /*isParentExpanded*/
      2) {
        toggle_class(label, "spaced",
        /*isParentExpanded*/
        ctx[1]);
      }
    },

    d(detaching) {
      if (detaching) detach(label);
      mounted = false;
      dispose();
    }

  };
}

function create_fragment$4(ctx) {
  let if_block_anchor;
  let if_block =
  /*showKey*/
  ctx[3] &&
  /*key*/
  ctx[0] && create_if_block$1(ctx);
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },

    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },

    p(ctx, _ref5) {
      let [dirty] = _ref5;

      if (
      /*showKey*/
      ctx[3] &&
      /*key*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }

  };
}

function instance$4($$self, $$props, $$invalidate) {
  let showKey;
  let {
    key,
    isParentExpanded,
    isParentArray = false,
    colon = ':'
  } = $$props;

  function click_handler(event) {
    bubble.call(this, $$self, event);
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
    if ('colon' in $$props) $$invalidate(2, colon = $$props.colon);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*isParentExpanded, isParentArray, key*/
    19) {
      $$invalidate(3, showKey = isParentExpanded || !isParentArray || key != +key);
    }
  };

  return [key, isParentExpanded, colon, showKey, isParentArray, click_handler];
}

class JSONKey extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      key: 0,
      isParentExpanded: 1,
      isParentArray: 4,
      colon: 2
    }, add_css$3);
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONNested.svelte generated by Svelte v3.41.0 */


function add_css$4(target) {
  append_styles(target, "svelte-rwxv37", "label.svelte-rwxv37{display:inline-block}.indent.svelte-rwxv37{padding-left:var(--li-identation)}.collapse.svelte-rwxv37{--li-display:inline;display:inline;font-style:italic}.comma.svelte-rwxv37{margin-left:-0.5em;margin-right:0.5em}label.svelte-rwxv37{position:relative}");
}

function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[20] = i;
  return child_ctx;
} // (57:4) {#if expandable && isParentExpanded}


function create_if_block_3(ctx) {
  let jsonarrow;
  let current;
  jsonarrow = new JSONArrow({
    props: {
      expanded:
      /*expanded*/
      ctx[0]
    }
  });
  jsonarrow.$on("click",
  /*toggleExpand*/
  ctx[15]);
  return {
    c() {
      create_component(jsonarrow.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonarrow, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const jsonarrow_changes = {};
      if (dirty &
      /*expanded*/
      1) jsonarrow_changes.expanded =
      /*expanded*/
      ctx[0];
      jsonarrow.$set(jsonarrow_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonarrow.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonarrow.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonarrow, detaching);
    }

  };
} // (75:4) {:else}


function create_else_block(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "…";
    },

    m(target, anchor) {
      insert(target, span, anchor);
    },

    p: noop,
    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(span);
    }

  };
} // (63:4) {#if isParentExpanded}


function create_if_block$2(ctx) {
  let ul;
  let t;
  let current;
  let mounted;
  let dispose;
  let each_value =
  /*slicedKeys*/
  ctx[13];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  const out = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  let if_block =
  /*slicedKeys*/
  ctx[13].length <
  /*previewKeys*/
  ctx[7].length && create_if_block_1();
  return {
    c() {
      ul = element("ul");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t = space();
      if (if_block) if_block.c();
      attr(ul, "class", "svelte-rwxv37");
      toggle_class(ul, "collapse", !
      /*expanded*/
      ctx[0]);
    },

    m(target, anchor) {
      insert(target, ul, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }

      append(ul, t);
      if (if_block) if_block.m(ul, null);
      current = true;

      if (!mounted) {
        dispose = listen(ul, "click",
        /*expand*/
        ctx[16]);
        mounted = true;
      }
    },

    p(ctx, dirty) {
      if (dirty &
      /*expanded, previewKeys, getKey, slicedKeys, isArray, getValue, getPreviewValue*/
      10129) {
        each_value =
        /*slicedKeys*/
        ctx[13];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, t);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }

      if (
      /*slicedKeys*/
      ctx[13].length <
      /*previewKeys*/
      ctx[7].length) {
        if (if_block) ;else {
          if_block = create_if_block_1();
          if_block.c();
          if_block.m(ul, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*expanded*/
      1) {
        toggle_class(ul, "collapse", !
        /*expanded*/
        ctx[0]);
      }
    },

    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },

    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },

    d(detaching) {
      if (detaching) detach(ul);
      destroy_each(each_blocks, detaching);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }

  };
} // (67:10) {#if !expanded && index < previewKeys.length - 1}


function create_if_block_2(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = ",";
      attr(span, "class", "comma svelte-rwxv37");
    },

    m(target, anchor) {
      insert(target, span, anchor);
    },

    d(detaching) {
      if (detaching) detach(span);
    }

  };
} // (65:8) {#each slicedKeys as key, index}


function create_each_block$1(ctx) {
  let jsonnode;
  let t;
  let if_block_anchor;
  let current;
  jsonnode = new JSONNode({
    props: {
      key:
      /*getKey*/
      ctx[8](
      /*key*/
      ctx[12]),
      isParentExpanded:
      /*expanded*/
      ctx[0],
      isParentArray:
      /*isArray*/
      ctx[4],
      value:
      /*expanded*/
      ctx[0] ?
      /*getValue*/
      ctx[9](
      /*key*/
      ctx[12]) :
      /*getPreviewValue*/
      ctx[10](
      /*key*/
      ctx[12])
    }
  });
  let if_block = !
  /*expanded*/
  ctx[0] &&
  /*index*/
  ctx[20] <
  /*previewKeys*/
  ctx[7].length - 1 && create_if_block_2();
  return {
    c() {
      create_component(jsonnode.$$.fragment);
      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },

    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      insert(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const jsonnode_changes = {};
      if (dirty &
      /*getKey, slicedKeys*/
      8448) jsonnode_changes.key =
      /*getKey*/
      ctx[8](
      /*key*/
      ctx[12]);
      if (dirty &
      /*expanded*/
      1) jsonnode_changes.isParentExpanded =
      /*expanded*/
      ctx[0];
      if (dirty &
      /*isArray*/
      16) jsonnode_changes.isParentArray =
      /*isArray*/
      ctx[4];
      if (dirty &
      /*expanded, getValue, slicedKeys, getPreviewValue*/
      9729) jsonnode_changes.value =
      /*expanded*/
      ctx[0] ?
      /*getValue*/
      ctx[9](
      /*key*/
      ctx[12]) :
      /*getPreviewValue*/
      ctx[10](
      /*key*/
      ctx[12]);
      jsonnode.$set(jsonnode_changes);

      if (!
      /*expanded*/
      ctx[0] &&
      /*index*/
      ctx[20] <
      /*previewKeys*/
      ctx[7].length - 1) {
        if (if_block) ;else {
          if_block = create_if_block_2();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },

    i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnode, detaching);
      if (detaching) detach(t);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }

  };
} // (71:8) {#if slicedKeys.length < previewKeys.length }


function create_if_block_1(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "…";
    },

    m(target, anchor) {
      insert(target, span, anchor);
    },

    d(detaching) {
      if (detaching) detach(span);
    }

  };
}

function create_fragment$5(ctx) {
  let li;
  let label_1;
  let t0;
  let jsonkey;
  let t1;
  let span1;
  let span0;
  let t2;
  let t3;
  let t4;
  let current_block_type_index;
  let if_block1;
  let t5;
  let span2;
  let t6;
  let current;
  let mounted;
  let dispose;
  let if_block0 =
  /*expandable*/
  ctx[11] &&
  /*isParentExpanded*/
  ctx[2] && create_if_block_3(ctx);
  jsonkey = new JSONKey({
    props: {
      key:
      /*key*/
      ctx[12],
      colon:
      /*context*/
      ctx[14].colon,
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3]
    }
  });
  jsonkey.$on("click",
  /*toggleExpand*/
  ctx[15]);
  const if_block_creators = [create_if_block$2, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*isParentExpanded*/
    ctx[2]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      li = element("li");
      label_1 = element("label");
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(jsonkey.$$.fragment);
      t1 = space();
      span1 = element("span");
      span0 = element("span");
      t2 = text(
      /*label*/
      ctx[1]);
      t3 = text(
      /*bracketOpen*/
      ctx[5]);
      t4 = space();
      if_block1.c();
      t5 = space();
      span2 = element("span");
      t6 = text(
      /*bracketClose*/
      ctx[6]);
      attr(label_1, "class", "svelte-rwxv37");
      attr(li, "class", "svelte-rwxv37");
      toggle_class(li, "indent",
      /*isParentExpanded*/
      ctx[2]);
    },

    m(target, anchor) {
      insert(target, li, anchor);
      append(li, label_1);
      if (if_block0) if_block0.m(label_1, null);
      append(label_1, t0);
      mount_component(jsonkey, label_1, null);
      append(label_1, t1);
      append(label_1, span1);
      append(span1, span0);
      append(span0, t2);
      append(span1, t3);
      append(li, t4);
      if_blocks[current_block_type_index].m(li, null);
      append(li, t5);
      append(li, span2);
      append(span2, t6);
      current = true;

      if (!mounted) {
        dispose = listen(span1, "click",
        /*toggleExpand*/
        ctx[15]);
        mounted = true;
      }
    },

    p(ctx, _ref6) {
      let [dirty] = _ref6;

      if (
      /*expandable*/
      ctx[11] &&
      /*isParentExpanded*/
      ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*expandable, isParentExpanded*/
          2052) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(label_1, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      const jsonkey_changes = {};
      if (dirty &
      /*key*/
      4096) jsonkey_changes.key =
      /*key*/
      ctx[12];
      if (dirty &
      /*isParentExpanded*/
      4) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonkey_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonkey.$set(jsonkey_changes);
      if (!current || dirty &
      /*label*/
      2) set_data(t2,
      /*label*/
      ctx[1]);
      if (!current || dirty &
      /*bracketOpen*/
      32) set_data(t3,
      /*bracketOpen*/
      ctx[5]);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];

        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block1.c();
        } else {
          if_block1.p(ctx, dirty);
        }

        transition_in(if_block1, 1);
        if_block1.m(li, t5);
      }

      if (!current || dirty &
      /*bracketClose*/
      64) set_data(t6,
      /*bracketClose*/
      ctx[6]);

      if (dirty &
      /*isParentExpanded*/
      4) {
        toggle_class(li, "indent",
        /*isParentExpanded*/
        ctx[2]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(jsonkey.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(jsonkey.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      if (if_block0) if_block0.d();
      destroy_component(jsonkey);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }

  };
}

function instance$5($$self, $$props, $$invalidate) {
  let slicedKeys;
  let {
    key,
    keys,
    colon = ':',
    label = '',
    isParentExpanded,
    isParentArray,
    isArray = false,
    bracketOpen,
    bracketClose
  } = $$props;
  let {
    previewKeys = keys
  } = $$props;
  let {
    getKey = key => key
  } = $$props;
  let {
    getValue = key => key
  } = $$props;
  let {
    getPreviewValue = getValue
  } = $$props;
  let {
    expanded = false,
    expandable = true
  } = $$props;
  const context = getContext(contextKey);
  setContext(contextKey, { ...context,
    colon
  });

  function toggleExpand() {
    $$invalidate(0, expanded = !expanded);
  }

  function expand() {
    $$invalidate(0, expanded = true);
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(12, key = $$props.key);
    if ('keys' in $$props) $$invalidate(17, keys = $$props.keys);
    if ('colon' in $$props) $$invalidate(18, colon = $$props.colon);
    if ('label' in $$props) $$invalidate(1, label = $$props.label);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    if ('isArray' in $$props) $$invalidate(4, isArray = $$props.isArray);
    if ('bracketOpen' in $$props) $$invalidate(5, bracketOpen = $$props.bracketOpen);
    if ('bracketClose' in $$props) $$invalidate(6, bracketClose = $$props.bracketClose);
    if ('previewKeys' in $$props) $$invalidate(7, previewKeys = $$props.previewKeys);
    if ('getKey' in $$props) $$invalidate(8, getKey = $$props.getKey);
    if ('getValue' in $$props) $$invalidate(9, getValue = $$props.getValue);
    if ('getPreviewValue' in $$props) $$invalidate(10, getPreviewValue = $$props.getPreviewValue);
    if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
    if ('expandable' in $$props) $$invalidate(11, expandable = $$props.expandable);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*isParentExpanded*/
    4) {
      if (!isParentExpanded) {
        $$invalidate(0, expanded = false);
      }
    }

    if ($$self.$$.dirty &
    /*expanded, keys, previewKeys*/
    131201) {
      $$invalidate(13, slicedKeys = expanded ? keys : previewKeys.slice(0, 5));
    }
  };

  return [expanded, label, isParentExpanded, isParentArray, isArray, bracketOpen, bracketClose, previewKeys, getKey, getValue, getPreviewValue, expandable, key, slicedKeys, context, toggleExpand, expand, keys, colon];
}

class JSONNested extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      key: 12,
      keys: 17,
      colon: 18,
      label: 1,
      isParentExpanded: 2,
      isParentArray: 3,
      isArray: 4,
      bracketOpen: 5,
      bracketClose: 6,
      previewKeys: 7,
      getKey: 8,
      getValue: 9,
      getPreviewValue: 10,
      expanded: 0,
      expandable: 11
    }, add_css$4);
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONObjectNode.svelte generated by Svelte v3.41.0 */


function create_fragment$6(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      expanded:
      /*expanded*/
      ctx[4],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[1],
      isParentArray:
      /*isParentArray*/
      ctx[2],
      keys:
      /*keys*/
      ctx[5],
      previewKeys:
      /*keys*/
      ctx[5],
      getValue:
      /*getValue*/
      ctx[6],
      label: "" + (
      /*nodeType*/
      ctx[3] + " "),
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },

    p(ctx, _ref7) {
      let [dirty] = _ref7;
      const jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*expanded*/
      16) jsonnested_changes.expanded =
      /*expanded*/
      ctx[4];
      if (dirty &
      /*isParentExpanded*/
      2) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[1];
      if (dirty &
      /*isParentArray*/
      4) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[2];
      if (dirty &
      /*keys*/
      32) jsonnested_changes.keys =
      /*keys*/
      ctx[5];
      if (dirty &
      /*keys*/
      32) jsonnested_changes.previewKeys =
      /*keys*/
      ctx[5];
      if (dirty &
      /*nodeType*/
      8) jsonnested_changes.label = "" + (
      /*nodeType*/
      ctx[3] + " ");
      jsonnested.$set(jsonnested_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnested, detaching);
    }

  };
}

function instance$6($$self, $$props, $$invalidate) {
  let keys;
  let {
    key,
    value,
    isParentExpanded,
    isParentArray,
    nodeType
  } = $$props;
  let {
    expanded = true
  } = $$props;

  function getValue(key) {
    return value[key];
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(7, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(3, nodeType = $$props.nodeType);
    if ('expanded' in $$props) $$invalidate(4, expanded = $$props.expanded);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*value*/
    128) {
      $$invalidate(5, keys = Object.getOwnPropertyNames(value));
    }
  };

  return [key, isParentExpanded, isParentArray, nodeType, expanded, keys, getValue, value];
}

class JSONObjectNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      key: 0,
      value: 7,
      isParentExpanded: 1,
      isParentArray: 2,
      nodeType: 3,
      expanded: 4
    });
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONArrayNode.svelte generated by Svelte v3.41.0 */


function create_fragment$7(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      expanded:
      /*expanded*/
      ctx[4],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      isArray: true,
      keys:
      /*keys*/
      ctx[5],
      previewKeys:
      /*previewKeys*/
      ctx[6],
      getValue:
      /*getValue*/
      ctx[7],
      label: "Array(" +
      /*value*/
      ctx[1].length + ")",
      bracketOpen: "[",
      bracketClose: "]"
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },

    p(ctx, _ref8) {
      let [dirty] = _ref8;
      const jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*expanded*/
      16) jsonnested_changes.expanded =
      /*expanded*/
      ctx[4];
      if (dirty &
      /*isParentExpanded*/
      4) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      if (dirty &
      /*keys*/
      32) jsonnested_changes.keys =
      /*keys*/
      ctx[5];
      if (dirty &
      /*previewKeys*/
      64) jsonnested_changes.previewKeys =
      /*previewKeys*/
      ctx[6];
      if (dirty &
      /*value*/
      2) jsonnested_changes.label = "Array(" +
      /*value*/
      ctx[1].length + ")";
      jsonnested.$set(jsonnested_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnested, detaching);
    }

  };
}

function instance$7($$self, $$props, $$invalidate) {
  let keys;
  let previewKeys;
  let {
    key,
    value,
    isParentExpanded,
    isParentArray
  } = $$props;
  let {
    expanded = JSON.stringify(value).length < 1024
  } = $$props;
  const filteredKey = new Set(['length']);

  function getValue(key) {
    return value[key];
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    if ('expanded' in $$props) $$invalidate(4, expanded = $$props.expanded);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*value*/
    2) {
      $$invalidate(5, keys = Object.getOwnPropertyNames(value));
    }

    if ($$self.$$.dirty &
    /*keys*/
    32) {
      $$invalidate(6, previewKeys = keys.filter(key => !filteredKey.has(key)));
    }
  };

  return [key, value, isParentExpanded, isParentArray, expanded, keys, previewKeys, getValue];
}

class JSONArrayNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      key: 0,
      value: 1,
      isParentExpanded: 2,
      isParentArray: 3,
      expanded: 4
    });
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONIterableArrayNode.svelte generated by Svelte v3.41.0 */


function create_fragment$8(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[1],
      isParentArray:
      /*isParentArray*/
      ctx[2],
      keys:
      /*keys*/
      ctx[4],
      getKey,
      getValue,
      isArray: true,
      label: "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")"),
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },

    p(ctx, _ref9) {
      let [dirty] = _ref9;
      const jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*isParentExpanded*/
      2) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[1];
      if (dirty &
      /*isParentArray*/
      4) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[2];
      if (dirty &
      /*keys*/
      16) jsonnested_changes.keys =
      /*keys*/
      ctx[4];
      if (dirty &
      /*nodeType, keys*/
      24) jsonnested_changes.label = "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")");
      jsonnested.$set(jsonnested_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnested, detaching);
    }

  };
}

function getKey(key) {
  return String(key[0]);
}

function getValue(key) {
  return key[1];
}

function instance$8($$self, $$props, $$invalidate) {
  let {
    key,
    value,
    isParentExpanded,
    isParentArray,
    nodeType
  } = $$props;
  let keys = [];

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(5, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(3, nodeType = $$props.nodeType);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*value*/
    32) {
      {
        let result = [];
        let i = 0;

        for (const entry of value) {
          result.push([i++, entry]);
        }

        $$invalidate(4, keys = result);
      }
    }
  };

  return [key, isParentExpanded, isParentArray, nodeType, keys, value];
}

class JSONIterableArrayNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      key: 0,
      value: 5,
      isParentExpanded: 1,
      isParentArray: 2,
      nodeType: 3
    });
  }

}

class MapEntry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONIterableMapNode.svelte generated by Svelte v3.41.0 */


function create_fragment$9(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[1],
      isParentArray:
      /*isParentArray*/
      ctx[2],
      keys:
      /*keys*/
      ctx[4],
      getKey: getKey$1,
      getValue: getValue$1,
      label: "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")"),
      colon: "",
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },

    p(ctx, _ref10) {
      let [dirty] = _ref10;
      const jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*isParentExpanded*/
      2) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[1];
      if (dirty &
      /*isParentArray*/
      4) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[2];
      if (dirty &
      /*keys*/
      16) jsonnested_changes.keys =
      /*keys*/
      ctx[4];
      if (dirty &
      /*nodeType, keys*/
      24) jsonnested_changes.label = "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")");
      jsonnested.$set(jsonnested_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnested, detaching);
    }

  };
}

function getKey$1(entry) {
  return entry[0];
}

function getValue$1(entry) {
  return entry[1];
}

function instance$9($$self, $$props, $$invalidate) {
  let {
    key,
    value,
    isParentExpanded,
    isParentArray,
    nodeType
  } = $$props;
  let keys = [];

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(5, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(3, nodeType = $$props.nodeType);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*value*/
    32) {
      {
        let result = [];
        let i = 0;

        for (const entry of value) {
          result.push([i++, new MapEntry(entry[0], entry[1])]);
        }

        $$invalidate(4, keys = result);
      }
    }
  };

  return [key, isParentExpanded, isParentArray, nodeType, keys, value];
}

class JSONIterableMapNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      key: 0,
      value: 5,
      isParentExpanded: 1,
      isParentArray: 2,
      nodeType: 3
    });
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONMapEntryNode.svelte generated by Svelte v3.41.0 */


function create_fragment$a(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      expanded:
      /*expanded*/
      ctx[4],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      key:
      /*isParentExpanded*/
      ctx[2] ? String(
      /*key*/
      ctx[0]) :
      /*value*/
      ctx[1].key,
      keys:
      /*keys*/
      ctx[5],
      getValue:
      /*getValue*/
      ctx[6],
      label:
      /*isParentExpanded*/
      ctx[2] ? 'Entry ' : '=> ',
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },

    p(ctx, _ref11) {
      let [dirty] = _ref11;
      const jsonnested_changes = {};
      if (dirty &
      /*expanded*/
      16) jsonnested_changes.expanded =
      /*expanded*/
      ctx[4];
      if (dirty &
      /*isParentExpanded*/
      4) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      if (dirty &
      /*isParentExpanded, key, value*/
      7) jsonnested_changes.key =
      /*isParentExpanded*/
      ctx[2] ? String(
      /*key*/
      ctx[0]) :
      /*value*/
      ctx[1].key;
      if (dirty &
      /*isParentExpanded*/
      4) jsonnested_changes.label =
      /*isParentExpanded*/
      ctx[2] ? 'Entry ' : '=> ';
      jsonnested.$set(jsonnested_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnested, detaching);
    }

  };
}

function instance$a($$self, $$props, $$invalidate) {
  let {
    key,
    value,
    isParentExpanded,
    isParentArray
  } = $$props;
  let {
    expanded = false
  } = $$props;
  const keys = ['key', 'value'];

  function getValue(key) {
    return value[key];
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    if ('expanded' in $$props) $$invalidate(4, expanded = $$props.expanded);
  };

  return [key, value, isParentExpanded, isParentArray, expanded, keys, getValue];
}

class JSONMapEntryNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {
      key: 0,
      value: 1,
      isParentExpanded: 2,
      isParentArray: 3,
      expanded: 4
    });
  }

}
/* node_modules/svelte-json-tree-auto/src/JSONValueNode.svelte generated by Svelte v3.41.0 */


function add_css$5(target) {
  append_styles(target, "svelte-3bjyvl", "li.svelte-3bjyvl{user-select:text;word-wrap:break-word;word-break:break-all}.indent.svelte-3bjyvl{padding-left:var(--li-identation)}.String.svelte-3bjyvl{color:var(--string-color)}.Date.svelte-3bjyvl{color:var(--date-color)}.Number.svelte-3bjyvl{color:var(--number-color)}.Boolean.svelte-3bjyvl{color:var(--boolean-color)}.Null.svelte-3bjyvl{color:var(--null-color)}.Undefined.svelte-3bjyvl{color:var(--undefined-color)}.Function.svelte-3bjyvl{color:var(--function-color);font-style:italic}.Symbol.svelte-3bjyvl{color:var(--symbol-color)}");
}

function create_fragment$b(ctx) {
  let li;
  let jsonkey;
  let t0;
  let span;
  let t1_value = (
  /*valueGetter*/
  ctx[2] ?
  /*valueGetter*/
  ctx[2](
  /*value*/
  ctx[1]) :
  /*value*/
  ctx[1]) + "";
  let t1;
  let span_class_value;
  let current;
  jsonkey = new JSONKey({
    props: {
      key:
      /*key*/
      ctx[0],
      colon:
      /*colon*/
      ctx[6],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[3],
      isParentArray:
      /*isParentArray*/
      ctx[4]
    }
  });
  return {
    c() {
      li = element("li");
      create_component(jsonkey.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      attr(span, "class", span_class_value = "" + (null_to_empty(
      /*nodeType*/
      ctx[5]) + " svelte-3bjyvl"));
      attr(li, "class", "svelte-3bjyvl");
      toggle_class(li, "indent",
      /*isParentExpanded*/
      ctx[3]);
    },

    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(jsonkey, li, null);
      append(li, t0);
      append(li, span);
      append(span, t1);
      current = true;
    },

    p(ctx, _ref12) {
      let [dirty] = _ref12;
      const jsonkey_changes = {};
      if (dirty &
      /*key*/
      1) jsonkey_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*isParentExpanded*/
      8) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[3];
      if (dirty &
      /*isParentArray*/
      16) jsonkey_changes.isParentArray =
      /*isParentArray*/
      ctx[4];
      jsonkey.$set(jsonkey_changes);
      if ((!current || dirty &
      /*valueGetter, value*/
      6) && t1_value !== (t1_value = (
      /*valueGetter*/
      ctx[2] ?
      /*valueGetter*/
      ctx[2](
      /*value*/
      ctx[1]) :
      /*value*/
      ctx[1]) + "")) set_data(t1, t1_value);

      if (!current || dirty &
      /*nodeType*/
      32 && span_class_value !== (span_class_value = "" + (null_to_empty(
      /*nodeType*/
      ctx[5]) + " svelte-3bjyvl"))) {
        attr(span, "class", span_class_value);
      }

      if (dirty &
      /*isParentExpanded*/
      8) {
        toggle_class(li, "indent",
        /*isParentExpanded*/
        ctx[3]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(jsonkey.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonkey.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      destroy_component(jsonkey);
    }

  };
}

function instance$b($$self, $$props, $$invalidate) {
  let {
    key,
    value,
    valueGetter = null,
    isParentExpanded,
    isParentArray,
    nodeType
  } = $$props;
  const {
    colon
  } = getContext(contextKey);

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('valueGetter' in $$props) $$invalidate(2, valueGetter = $$props.valueGetter);
    if ('isParentExpanded' in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(5, nodeType = $$props.nodeType);
  };

  return [key, value, valueGetter, isParentExpanded, isParentArray, nodeType, colon];
}

class JSONValueNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
      key: 0,
      value: 1,
      valueGetter: 2,
      isParentExpanded: 3,
      isParentArray: 4,
      nodeType: 5
    }, add_css$5);
  }

}
/* node_modules/svelte-json-tree-auto/src/ErrorNode.svelte generated by Svelte v3.41.0 */


function add_css$6(target) {
  append_styles(target, "svelte-1ca3gb2", "li.svelte-1ca3gb2{user-select:text;word-wrap:break-word;word-break:break-all}.indent.svelte-1ca3gb2{padding-left:var(--li-identation)}.collapse.svelte-1ca3gb2{--li-display:inline;display:inline;font-style:italic}");
}

function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  child_ctx[10] = i;
  return child_ctx;
} // (40:2) {#if isParentExpanded}


function create_if_block_2$1(ctx) {
  let jsonarrow;
  let current;
  jsonarrow = new JSONArrow({
    props: {
      expanded:
      /*expanded*/
      ctx[0]
    }
  });
  jsonarrow.$on("click",
  /*toggleExpand*/
  ctx[7]);
  return {
    c() {
      create_component(jsonarrow.$$.fragment);
    },

    m(target, anchor) {
      mount_component(jsonarrow, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const jsonarrow_changes = {};
      if (dirty &
      /*expanded*/
      1) jsonarrow_changes.expanded =
      /*expanded*/
      ctx[0];
      jsonarrow.$set(jsonarrow_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonarrow.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonarrow.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonarrow, detaching);
    }

  };
} // (45:2) {#if isParentExpanded}


function create_if_block$3(ctx) {
  let ul;
  let current;
  let if_block =
  /*expanded*/
  ctx[0] && create_if_block_1$1(ctx);
  return {
    c() {
      ul = element("ul");
      if (if_block) if_block.c();
      attr(ul, "class", "svelte-1ca3gb2");
      toggle_class(ul, "collapse", !
      /*expanded*/
      ctx[0]);
    },

    m(target, anchor) {
      insert(target, ul, anchor);
      if (if_block) if_block.m(ul, null);
      current = true;
    },

    p(ctx, dirty) {
      if (
      /*expanded*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*expanded*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(ul, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }

      if (dirty &
      /*expanded*/
      1) {
        toggle_class(ul, "collapse", !
        /*expanded*/
        ctx[0]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(ul);
      if (if_block) if_block.d();
    }

  };
} // (47:6) {#if expanded}


function create_if_block_1$1(ctx) {
  let jsonnode;
  let t0;
  let li;
  let jsonkey;
  let t1;
  let span;
  let current;
  jsonnode = new JSONNode({
    props: {
      key: "message",
      value:
      /*value*/
      ctx[2].message
    }
  });
  jsonkey = new JSONKey({
    props: {
      key: "stack",
      colon: ":",
      isParentExpanded:
      /*isParentExpanded*/
      ctx[3]
    }
  });
  let each_value =
  /*stack*/
  ctx[5];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }

  return {
    c() {
      create_component(jsonnode.$$.fragment);
      t0 = space();
      li = element("li");
      create_component(jsonkey.$$.fragment);
      t1 = space();
      span = element("span");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(li, "class", "svelte-1ca3gb2");
    },

    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      insert(target, t0, anchor);
      insert(target, li, anchor);
      mount_component(jsonkey, li, null);
      append(li, t1);
      append(li, span);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(span, null);
      }

      current = true;
    },

    p(ctx, dirty) {
      const jsonnode_changes = {};
      if (dirty &
      /*value*/
      4) jsonnode_changes.value =
      /*value*/
      ctx[2].message;
      jsonnode.$set(jsonnode_changes);
      const jsonkey_changes = {};
      if (dirty &
      /*isParentExpanded*/
      8) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[3];
      jsonkey.$set(jsonkey_changes);

      if (dirty &
      /*stack*/
      32) {
        each_value =
        /*stack*/
        ctx[5];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(span, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },

    i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      transition_in(jsonkey.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      transition_out(jsonkey.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(jsonnode, detaching);
      if (detaching) detach(t0);
      if (detaching) detach(li);
      destroy_component(jsonkey);
      destroy_each(each_blocks, detaching);
    }

  };
} // (52:12) {#each stack as line, index}


function create_each_block$2(ctx) {
  let span;
  let t_value =
  /*line*/
  ctx[8] + "";
  let t;
  let br;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      br = element("br");
      attr(span, "class", "svelte-1ca3gb2");
      toggle_class(span, "indent",
      /*index*/
      ctx[10] > 0);
    },

    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
      insert(target, br, anchor);
    },

    p(ctx, dirty) {
      if (dirty &
      /*stack*/
      32 && t_value !== (t_value =
      /*line*/
      ctx[8] + "")) set_data(t, t_value);
    },

    d(detaching) {
      if (detaching) detach(span);
      if (detaching) detach(br);
    }

  };
}

function create_fragment$c(ctx) {
  let li;
  let t0;
  let jsonkey;
  let t1;
  let span;
  let t2;
  let t3_value = (
  /*expanded*/
  ctx[0] ? '' :
  /*value*/
  ctx[2].message) + "";
  let t3;
  let t4;
  let current;
  let mounted;
  let dispose;
  let if_block0 =
  /*isParentExpanded*/
  ctx[3] && create_if_block_2$1(ctx);
  jsonkey = new JSONKey({
    props: {
      key:
      /*key*/
      ctx[1],
      colon:
      /*context*/
      ctx[6].colon,
      isParentExpanded:
      /*isParentExpanded*/
      ctx[3],
      isParentArray:
      /*isParentArray*/
      ctx[4]
    }
  });
  let if_block1 =
  /*isParentExpanded*/
  ctx[3] && create_if_block$3(ctx);
  return {
    c() {
      li = element("li");
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(jsonkey.$$.fragment);
      t1 = space();
      span = element("span");
      t2 = text("Error: ");
      t3 = text(t3_value);
      t4 = space();
      if (if_block1) if_block1.c();
      attr(li, "class", "svelte-1ca3gb2");
      toggle_class(li, "indent",
      /*isParentExpanded*/
      ctx[3]);
    },

    m(target, anchor) {
      insert(target, li, anchor);
      if (if_block0) if_block0.m(li, null);
      append(li, t0);
      mount_component(jsonkey, li, null);
      append(li, t1);
      append(li, span);
      append(span, t2);
      append(span, t3);
      append(li, t4);
      if (if_block1) if_block1.m(li, null);
      current = true;

      if (!mounted) {
        dispose = listen(span, "click",
        /*toggleExpand*/
        ctx[7]);
        mounted = true;
      }
    },

    p(ctx, _ref13) {
      let [dirty] = _ref13;

      if (
      /*isParentExpanded*/
      ctx[3]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*isParentExpanded*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(li, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      const jsonkey_changes = {};
      if (dirty &
      /*key*/
      2) jsonkey_changes.key =
      /*key*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      8) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[3];
      if (dirty &
      /*isParentArray*/
      16) jsonkey_changes.isParentArray =
      /*isParentArray*/
      ctx[4];
      jsonkey.$set(jsonkey_changes);
      if ((!current || dirty &
      /*expanded, value*/
      5) && t3_value !== (t3_value = (
      /*expanded*/
      ctx[0] ? '' :
      /*value*/
      ctx[2].message) + "")) set_data(t3, t3_value);

      if (
      /*isParentExpanded*/
      ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*isParentExpanded*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$3(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(li, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }

      if (dirty &
      /*isParentExpanded*/
      8) {
        toggle_class(li, "indent",
        /*isParentExpanded*/
        ctx[3]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(jsonkey.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(jsonkey.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      if (if_block0) if_block0.d();
      destroy_component(jsonkey);
      if (if_block1) if_block1.d();
      mounted = false;
      dispose();
    }

  };
}

function instance$c($$self, $$props, $$invalidate) {
  let stack;
  let {
    key,
    value,
    isParentExpanded,
    isParentArray
  } = $$props;
  let {
    expanded = false
  } = $$props;
  const context = getContext(contextKey);
  setContext(contextKey, { ...context,
    colon: ':'
  });

  function toggleExpand() {
    $$invalidate(0, expanded = !expanded);
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(1, key = $$props.key);
    if ('value' in $$props) $$invalidate(2, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
    if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*value*/
    4) {
      $$invalidate(5, stack = value.stack.split('\n'));
    }

    if ($$self.$$.dirty &
    /*isParentExpanded*/
    8) {
      if (!isParentExpanded) {
        $$invalidate(0, expanded = false);
      }
    }
  };

  return [expanded, key, value, isParentExpanded, isParentArray, stack, context, toggleExpand];
}

class ErrorNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      key: 1,
      value: 2,
      isParentExpanded: 3,
      isParentArray: 4,
      expanded: 0
    }, add_css$6);
  }

}

function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);

  if (type === 'Object') {
    if (typeof obj[Symbol.iterator] === 'function') {
      return 'Iterable';
    }

    return obj.constructor.name;
  }

  return type;
}
/* node_modules/svelte-json-tree-auto/src/JSONNode.svelte generated by Svelte v3.41.0 */


function create_fragment$d(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value =
  /*componentType*/
  ctx[6];

  function switch_props(ctx) {
    return {
      props: {
        key:
        /*key*/
        ctx[0],
        value:
        /*value*/
        ctx[1],
        isParentExpanded:
        /*isParentExpanded*/
        ctx[2],
        isParentArray:
        /*isParentArray*/
        ctx[3],
        nodeType:
        /*nodeType*/
        ctx[4],
        valueGetter:
        /*valueGetter*/
        ctx[5]
      }
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },

    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },

    p(ctx, _ref14) {
      let [dirty] = _ref14;
      const switch_instance_changes = {};
      if (dirty &
      /*key*/
      1) switch_instance_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) switch_instance_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) switch_instance_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) switch_instance_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      if (dirty &
      /*nodeType*/
      16) switch_instance_changes.nodeType =
      /*nodeType*/
      ctx[4];
      if (dirty &
      /*valueGetter*/
      32) switch_instance_changes.valueGetter =
      /*valueGetter*/
      ctx[5];

      if (switch_value !== (switch_value =
      /*componentType*/
      ctx[6])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },

    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },

    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }

  };
}

function instance$d($$self, $$props, $$invalidate) {
  let nodeType;
  let componentType;
  let valueGetter;
  let {
    key,
    value,
    isParentExpanded,
    isParentArray
  } = $$props;

  function getComponent(nodeType) {
    switch (nodeType) {
      case 'Object':
        return JSONObjectNode;

      case 'Error':
        return ErrorNode;

      case 'Array':
        return JSONArrayNode;

      case 'Iterable':
      case 'Map':
      case 'Set':
        return typeof value.set === 'function' ? JSONIterableMapNode : JSONIterableArrayNode;

      case 'MapEntry':
        return JSONMapEntryNode;

      default:
        return JSONValueNode;
    }
  }

  function getValueGetter(nodeType) {
    switch (nodeType) {
      case 'Object':
      case 'Error':
      case 'Array':
      case 'Iterable':
      case 'Map':
      case 'Set':
      case 'MapEntry':
      case 'Number':
        return undefined;

      case 'String':
        return raw => "\"".concat(raw, "\"");

      case 'Boolean':
        return raw => raw ? 'true' : 'false';

      case 'Date':
        return raw => raw.toISOString();

      case 'Null':
        return () => 'null';

      case 'Undefined':
        return () => 'undefined';

      case 'Function':
      case 'Symbol':
        return raw => raw.toString();

      default:
        return () => "<".concat(nodeType, ">");
    }
  }

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*value*/
    2) {
      $$invalidate(4, nodeType = objType(value));
    }

    if ($$self.$$.dirty &
    /*nodeType*/
    16) {
      $$invalidate(6, componentType = getComponent(nodeType));
    }

    if ($$self.$$.dirty &
    /*nodeType*/
    16) {
      $$invalidate(5, valueGetter = getValueGetter(nodeType));
    }
  };

  return [key, value, isParentExpanded, isParentArray, nodeType, valueGetter, componentType];
}

class JSONNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      key: 0,
      value: 1,
      isParentExpanded: 2,
      isParentArray: 3
    });
  }

}
/* node_modules/svelte-json-tree-auto/src/Root.svelte generated by Svelte v3.41.0 */


function add_css$7(target) {
  append_styles(target, "svelte-773n60", "ul.svelte-773n60{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--arrow-color:var(--json-tree-arrow-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);--li-colon-space:0.3em;font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}ul.svelte-773n60 li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}ul.svelte-773n60,ul.svelte-773n60 ul{padding:0;margin:0}");
}

function create_fragment$e(ctx) {
  let ul;
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded: true,
      isParentArray: false
    }
  });
  return {
    c() {
      ul = element("ul");
      create_component(jsonnode.$$.fragment);
      attr(ul, "class", "svelte-773n60");
    },

    m(target, anchor) {
      insert(target, ul, anchor);
      mount_component(jsonnode, ul, null);
      current = true;
    },

    p(ctx, _ref15) {
      let [dirty] = _ref15;
      const jsonnode_changes = {};
      if (dirty &
      /*key*/
      1) jsonnode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonnode_changes.value =
      /*value*/
      ctx[1];
      jsonnode.$set(jsonnode_changes);
    },

    i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(ul);
      destroy_component(jsonnode);
    }

  };
}

function instance$e($$self, $$props, $$invalidate) {
  setContext(contextKey, {});
  let {
    key = '',
    value
  } = $$props;

  $$self.$$set = $$props => {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
  };

  return [key, value];
}

class Root extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, {
      key: 0,
      value: 1
    }, add_css$7);
  }

}
/* src/client/debug/main/ClientSwitcher.svelte generated by Svelte v3.41.0 */


function add_css$8(target) {
  append_styles(target, "svelte-jvfq3i", ".svelte-jvfq3i{box-sizing:border-box}section.switcher.svelte-jvfq3i{position:sticky;bottom:0;transform:translateY(20px);margin:40px -20px 0;border-top:1px solid #999;padding:20px;background:#fff}label.svelte-jvfq3i{display:flex;align-items:baseline;gap:5px;font-weight:bold}select.svelte-jvfq3i{min-width:140px}");
}

function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  child_ctx[9] = i;
  return child_ctx;
} // (42:0) {#if debuggableClients.length > 1}


function create_if_block$4(ctx) {
  let section;
  let label;
  let t;
  let select;
  let mounted;
  let dispose;
  let each_value =
  /*debuggableClients*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }

  return {
    c() {
      section = element("section");
      label = element("label");
      t = text("Client\n      \n      ");
      select = element("select");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(select, "id", selectId);
      attr(select, "class", "svelte-jvfq3i");
      if (
      /*selected*/
      ctx[2] === void 0) add_render_callback(() =>
      /*select_change_handler*/
      ctx[6].call(select));
      attr(label, "class", "svelte-jvfq3i");
      attr(section, "class", "switcher svelte-jvfq3i");
    },

    m(target, anchor) {
      insert(target, section, anchor);
      append(section, label);
      append(label, t);
      append(label, select);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }

      select_option(select,
      /*selected*/
      ctx[2]);

      if (!mounted) {
        dispose = [listen(select, "change",
        /*handleSelection*/
        ctx[3]), listen(select, "change",
        /*select_change_handler*/
        ctx[6])];
        mounted = true;
      }
    },

    p(ctx, dirty) {
      if (dirty &
      /*debuggableClients, JSON*/
      2) {
        each_value =
        /*debuggableClients*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*selected*/
      4) {
        select_option(select,
        /*selected*/
        ctx[2]);
      }
    },

    d(detaching) {
      if (detaching) detach(section);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }

  };
} // (48:8) {#each debuggableClients as clientOption, index}


function create_each_block$3(ctx) {
  let option;
  let t0;
  let t1;
  let t2_value = JSON.stringify(
  /*clientOption*/
  ctx[7].playerID) + "";
  let t2;
  let t3;
  let t4_value = JSON.stringify(
  /*clientOption*/
  ctx[7].matchID) + "";
  let t4;
  let t5;
  let t6_value =
  /*clientOption*/
  ctx[7].game.name + "";
  let t6;
  let t7;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t0 = text(
      /*index*/
      ctx[9]);
      t1 = text(" —\n            playerID: ");
      t2 = text(t2_value);
      t3 = text(",\n            matchID: ");
      t4 = text(t4_value);
      t5 = text("\n            (");
      t6 = text(t6_value);
      t7 = text(")\n          ");
      option.__value = option_value_value =
      /*index*/
      ctx[9];
      option.value = option.__value;
      attr(option, "class", "svelte-jvfq3i");
    },

    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t0);
      append(option, t1);
      append(option, t2);
      append(option, t3);
      append(option, t4);
      append(option, t5);
      append(option, t6);
      append(option, t7);
    },

    p(ctx, dirty) {
      if (dirty &
      /*debuggableClients*/
      2 && t2_value !== (t2_value = JSON.stringify(
      /*clientOption*/
      ctx[7].playerID) + "")) set_data(t2, t2_value);
      if (dirty &
      /*debuggableClients*/
      2 && t4_value !== (t4_value = JSON.stringify(
      /*clientOption*/
      ctx[7].matchID) + "")) set_data(t4, t4_value);
      if (dirty &
      /*debuggableClients*/
      2 && t6_value !== (t6_value =
      /*clientOption*/
      ctx[7].game.name + "")) set_data(t6, t6_value);
    },

    d(detaching) {
      if (detaching) detach(option);
    }

  };
}

function create_fragment$f(ctx) {
  let if_block_anchor;
  let if_block =
  /*debuggableClients*/
  ctx[1].length > 1 && create_if_block$4(ctx);
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },

    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },

    p(ctx, _ref16) {
      let [dirty] = _ref16;

      if (
      /*debuggableClients*/
      ctx[1].length > 1) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$4(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }

  };
}

const selectId = 'bgio-debug-select-client';

function instance$f($$self, $$props, $$invalidate) {
  let client;
  let debuggableClients;
  let selected;

  let $clientManager,
      $$unsubscribe_clientManager = noop,
      $$subscribe_clientManager = () => ($$unsubscribe_clientManager(), $$unsubscribe_clientManager = subscribe(clientManager, $$value => $$invalidate(5, $clientManager = $$value)), clientManager);

  $$self.$$.on_destroy.push(() => $$unsubscribe_clientManager());
  let {
    clientManager
  } = $$props;
  $$subscribe_clientManager();

  const handleSelection = e => {
    // Request to switch to the selected client.
    const selectedClient = debuggableClients[e.target.value];
    clientManager.switchToClient(selectedClient); // Maintain focus on the client select menu after switching clients.
    // Necessary because switching clients will usually trigger a mount/unmount.

    const select = document.getElementById(selectId);
    if (select) select.focus();
  };

  function select_change_handler() {
    selected = select_value(this);
    (($$invalidate(2, selected), $$invalidate(1, debuggableClients)), $$invalidate(4, client)), $$invalidate(5, $clientManager);
  }

  $$self.$$set = $$props => {
    if ('clientManager' in $$props) $$subscribe_clientManager($$invalidate(0, clientManager = $$props.clientManager));
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$clientManager*/
    32) {
      $$invalidate(4, ({
        client,
        debuggableClients
      } = $clientManager), client, ($$invalidate(1, debuggableClients), $$invalidate(5, $clientManager)));
    }

    if ($$self.$$.dirty &
    /*debuggableClients, client*/
    18) {
      $$invalidate(2, selected = debuggableClients.indexOf(client));
    }
  };

  return [clientManager, debuggableClients, selected, handleSelection, client, $clientManager, select_change_handler];
}

class ClientSwitcher extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {
      clientManager: 0
    }, add_css$8);
  }

}
/* src/client/debug/main/Hotkey.svelte generated by Svelte v3.41.0 */


function add_css$9(target) {
  append_styles(target, "svelte-1vfj1mn", ".key.svelte-1vfj1mn.svelte-1vfj1mn{display:flex;flex-direction:row;align-items:center}button.svelte-1vfj1mn.svelte-1vfj1mn{cursor:pointer;min-width:10px;padding-left:5px;padding-right:5px;height:20px;line-height:20px;text-align:center;border:1px solid #ccc;box-shadow:1px 1px 1px #888;background:#eee;color:#444}button.svelte-1vfj1mn.svelte-1vfj1mn:hover{background:#ddd}.key.active.svelte-1vfj1mn button.svelte-1vfj1mn{background:#ddd;border:1px solid #999;box-shadow:none}label.svelte-1vfj1mn.svelte-1vfj1mn{margin-left:10px}");
} // (78:2) {#if label}


function create_if_block$5(ctx) {
  let label_1;
  let t0;
  let t1;
  let span;
  let t2_value = "(shortcut: ".concat(
  /*value*/
  ctx[0], ")") + "";
  let t2;
  return {
    c() {
      label_1 = element("label");
      t0 = text(
      /*label*/
      ctx[1]);
      t1 = space();
      span = element("span");
      t2 = text(t2_value);
      attr(span, "class", "screen-reader-only");
      attr(label_1, "for",
      /*id*/
      ctx[5]);
      attr(label_1, "class", "svelte-1vfj1mn");
    },

    m(target, anchor) {
      insert(target, label_1, anchor);
      append(label_1, t0);
      append(label_1, t1);
      append(label_1, span);
      append(span, t2);
    },

    p(ctx, dirty) {
      if (dirty &
      /*label*/
      2) set_data(t0,
      /*label*/
      ctx[1]);
      if (dirty &
      /*value*/
      1 && t2_value !== (t2_value = "(shortcut: ".concat(
      /*value*/
      ctx[0], ")") + "")) set_data(t2, t2_value);
    },

    d(detaching) {
      if (detaching) detach(label_1);
    }

  };
}

function create_fragment$g(ctx) {
  let div;
  let button;
  let t0;
  let t1;
  let mounted;
  let dispose;
  let if_block =
  /*label*/
  ctx[1] && create_if_block$5(ctx);
  return {
    c() {
      div = element("div");
      button = element("button");
      t0 = text(
      /*value*/
      ctx[0]);
      t1 = space();
      if (if_block) if_block.c();
      attr(button, "id",
      /*id*/
      ctx[5]);
      button.disabled =
      /*disable*/
      ctx[2];
      attr(button, "class", "svelte-1vfj1mn");
      attr(div, "class", "key svelte-1vfj1mn");
      toggle_class(div, "active",
      /*active*/
      ctx[3]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      append(div, button);
      append(button, t0);
      append(div, t1);
      if (if_block) if_block.m(div, null);

      if (!mounted) {
        dispose = [listen(window, "keydown",
        /*Keypress*/
        ctx[7]), listen(button, "click",
        /*Activate*/
        ctx[6])];
        mounted = true;
      }
    },

    p(ctx, _ref17) {
      let [dirty] = _ref17;
      if (dirty &
      /*value*/
      1) set_data(t0,
      /*value*/
      ctx[0]);

      if (dirty &
      /*disable*/
      4) {
        button.disabled =
        /*disable*/
        ctx[2];
      }

      if (
      /*label*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$5(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*active*/
      8) {
        toggle_class(div, "active",
        /*active*/
        ctx[3]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      mounted = false;
      run_all(dispose);
    }

  };
}

function instance$g($$self, $$props, $$invalidate) {
  let $disableHotkeys;
  let {
    value
  } = $$props;
  let {
    onPress = null
  } = $$props;
  let {
    label = null
  } = $$props;
  let {
    disable = false
  } = $$props;
  const {
    disableHotkeys
  } = getContext('hotkeys');
  component_subscribe($$self, disableHotkeys, value => $$invalidate(9, $disableHotkeys = value));
  let active = false;
  let id = "key-".concat(value);

  function Deactivate() {
    $$invalidate(3, active = false);
  }

  function Activate() {
    $$invalidate(3, active = true);
    setTimeout(Deactivate, 200);

    if (onPress) {
      setTimeout(onPress, 1);
    }
  }

  function Keypress(e) {
    if (!$disableHotkeys && !disable && !e.ctrlKey && !e.metaKey && e.key == value) {
      e.preventDefault();
      Activate();
    }
  }

  $$self.$$set = $$props => {
    if ('value' in $$props) $$invalidate(0, value = $$props.value);
    if ('onPress' in $$props) $$invalidate(8, onPress = $$props.onPress);
    if ('label' in $$props) $$invalidate(1, label = $$props.label);
    if ('disable' in $$props) $$invalidate(2, disable = $$props.disable);
  };

  return [value, label, disable, active, disableHotkeys, id, Activate, Keypress, onPress];
}

class Hotkey extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, {
      value: 0,
      onPress: 8,
      label: 1,
      disable: 2
    }, add_css$9);
  }

}
/* src/client/debug/main/InteractiveFunction.svelte generated by Svelte v3.41.0 */


function add_css$a(target) {
  append_styles(target, "svelte-1mppqmp", ".move.svelte-1mppqmp{display:flex;flex-direction:row;cursor:pointer;margin-left:10px;color:#666}.move.svelte-1mppqmp:hover{color:#333}.move.active.svelte-1mppqmp{color:#111;font-weight:bold}.arg-field.svelte-1mppqmp{outline:none;font-family:monospace}");
}

function create_fragment$h(ctx) {
  let div;
  let span0;
  let t0;
  let t1;
  let span1;
  let t3;
  let span2;
  let t4;
  let span3;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      span0 = element("span");
      t0 = text(
      /*name*/
      ctx[2]);
      t1 = space();
      span1 = element("span");
      span1.textContent = "(";
      t3 = space();
      span2 = element("span");
      t4 = space();
      span3 = element("span");
      span3.textContent = ")";
      attr(span2, "class", "arg-field svelte-1mppqmp");
      attr(span2, "contenteditable", "");
      attr(div, "class", "move svelte-1mppqmp");
      toggle_class(div, "active",
      /*active*/
      ctx[3]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      append(div, span0);
      append(span0, t0);
      append(div, t1);
      append(div, span1);
      append(div, t3);
      append(div, span2);
      /*span2_binding*/

      ctx[6](span2);
      append(div, t4);
      append(div, span3);

      if (!mounted) {
        dispose = [listen(span2, "focus", function () {
          if (is_function(
          /*Activate*/
          ctx[0]))
            /*Activate*/
            ctx[0].apply(this, arguments);
        }), listen(span2, "blur", function () {
          if (is_function(
          /*Deactivate*/
          ctx[1]))
            /*Deactivate*/
            ctx[1].apply(this, arguments);
        }), listen(span2, "keypress", stop_propagation(keypress_handler)), listen(span2, "keydown",
        /*OnKeyDown*/
        ctx[5]), listen(div, "click", function () {
          if (is_function(
          /*Activate*/
          ctx[0]))
            /*Activate*/
            ctx[0].apply(this, arguments);
        })];
        mounted = true;
      }
    },

    p(new_ctx, _ref18) {
      let [dirty] = _ref18;
      ctx = new_ctx;
      if (dirty &
      /*name*/
      4) set_data(t0,
      /*name*/
      ctx[2]);

      if (dirty &
      /*active*/
      8) {
        toggle_class(div, "active",
        /*active*/
        ctx[3]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
      /*span2_binding*/

      ctx[6](null);
      mounted = false;
      run_all(dispose);
    }

  };
}

const keypress_handler = () => {};

function instance$h($$self, $$props, $$invalidate) {
  let {
    Activate
  } = $$props;
  let {
    Deactivate
  } = $$props;
  let {
    name
  } = $$props;
  let {
    active
  } = $$props;
  let span;
  const dispatch = createEventDispatcher();

  function Submit() {
    try {
      const value = span.innerText;
      let argArray = new Function("return [".concat(value, "]"))();
      dispatch('submit', argArray);
    } catch (error) {
      dispatch('error', error);
    }

    $$invalidate(4, span.innerText = '', span);
  }

  function OnKeyDown(e) {
    if (e.key == 'Enter') {
      e.preventDefault();
      Submit();
    }

    if (e.key == 'Escape') {
      e.preventDefault();
      Deactivate();
    }
  }

  afterUpdate(() => {
    if (active) {
      span.focus();
    } else {
      span.blur();
    }
  });

  function span2_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](() => {
      span = $$value;
      $$invalidate(4, span);
    });
  }

  $$self.$$set = $$props => {
    if ('Activate' in $$props) $$invalidate(0, Activate = $$props.Activate);
    if ('Deactivate' in $$props) $$invalidate(1, Deactivate = $$props.Deactivate);
    if ('name' in $$props) $$invalidate(2, name = $$props.name);
    if ('active' in $$props) $$invalidate(3, active = $$props.active);
  };

  return [Activate, Deactivate, name, active, span, OnKeyDown, span2_binding];
}

class InteractiveFunction extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, {
      Activate: 0,
      Deactivate: 1,
      name: 2,
      active: 3
    }, add_css$a);
  }

}
/* src/client/debug/main/Move.svelte generated by Svelte v3.41.0 */


function add_css$b(target) {
  append_styles(target, "svelte-smqssc", ".move-error.svelte-smqssc{color:#a00;font-weight:bold}.wrapper.svelte-smqssc{display:flex;flex-direction:row;align-items:center}");
} // (65:2) {#if error}


function create_if_block$6(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
      /*error*/
      ctx[2]);
      attr(span, "class", "move-error svelte-smqssc");
    },

    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },

    p(ctx, dirty) {
      if (dirty &
      /*error*/
      4) set_data(t,
      /*error*/
      ctx[2]);
    },

    d(detaching) {
      if (detaching) detach(span);
    }

  };
}

function create_fragment$i(ctx) {
  let div1;
  let div0;
  let hotkey;
  let t0;
  let interactivefunction;
  let t1;
  let current;
  hotkey = new Hotkey({
    props: {
      value:
      /*shortcut*/
      ctx[0],
      onPress:
      /*Activate*/
      ctx[4]
    }
  });
  interactivefunction = new InteractiveFunction({
    props: {
      Activate:
      /*Activate*/
      ctx[4],
      Deactivate:
      /*Deactivate*/
      ctx[5],
      name:
      /*name*/
      ctx[1],
      active:
      /*active*/
      ctx[3]
    }
  });
  interactivefunction.$on("submit",
  /*Submit*/
  ctx[6]);
  interactivefunction.$on("error",
  /*Error*/
  ctx[7]);
  let if_block =
  /*error*/
  ctx[2] && create_if_block$6(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(hotkey.$$.fragment);
      t0 = space();
      create_component(interactivefunction.$$.fragment);
      t1 = space();
      if (if_block) if_block.c();
      attr(div0, "class", "wrapper svelte-smqssc");
    },

    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      mount_component(hotkey, div0, null);
      append(div0, t0);
      mount_component(interactivefunction, div0, null);
      append(div1, t1);
      if (if_block) if_block.m(div1, null);
      current = true;
    },

    p(ctx, _ref19) {
      let [dirty] = _ref19;
      const hotkey_changes = {};
      if (dirty &
      /*shortcut*/
      1) hotkey_changes.value =
      /*shortcut*/
      ctx[0];
      hotkey.$set(hotkey_changes);
      const interactivefunction_changes = {};
      if (dirty &
      /*name*/
      2) interactivefunction_changes.name =
      /*name*/
      ctx[1];
      if (dirty &
      /*active*/
      8) interactivefunction_changes.active =
      /*active*/
      ctx[3];
      interactivefunction.$set(interactivefunction_changes);

      if (
      /*error*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$6(ctx);
          if_block.c();
          if_block.m(div1, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },

    i(local) {
      if (current) return;
      transition_in(hotkey.$$.fragment, local);
      transition_in(interactivefunction.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(hotkey.$$.fragment, local);
      transition_out(interactivefunction.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div1);
      destroy_component(hotkey);
      destroy_component(interactivefunction);
      if (if_block) if_block.d();
    }

  };
}

function instance$i($$self, $$props, $$invalidate) {
  let {
    shortcut
  } = $$props;
  let {
    name
  } = $$props;
  let {
    fn
  } = $$props;
  const {
    disableHotkeys
  } = getContext('hotkeys');
  let error$1 = '';
  let active = false;

  function Activate() {
    disableHotkeys.set(true);
    $$invalidate(3, active = true);
  }

  function Deactivate() {
    disableHotkeys.set(false);
    $$invalidate(2, error$1 = '');
    $$invalidate(3, active = false);
  }

  function Submit(e) {
    $$invalidate(2, error$1 = '');
    Deactivate();
    fn.apply(this, e.detail);
  }

  function Error(e) {
    $$invalidate(2, error$1 = e.detail);
    (0, _turnOrder0b7dce3d.e)(e.detail);
  }

  $$self.$$set = $$props => {
    if ('shortcut' in $$props) $$invalidate(0, shortcut = $$props.shortcut);
    if ('name' in $$props) $$invalidate(1, name = $$props.name);
    if ('fn' in $$props) $$invalidate(8, fn = $$props.fn);
  };

  return [shortcut, name, error$1, active, Activate, Deactivate, Submit, Error, fn];
}

class Move extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, {
      shortcut: 0,
      name: 1,
      fn: 8
    }, add_css$b);
  }

}
/* src/client/debug/main/Controls.svelte generated by Svelte v3.41.0 */


function add_css$c(target) {
  append_styles(target, "svelte-c3lavh", "ul.svelte-c3lavh{padding-left:0}li.svelte-c3lavh{list-style:none;margin:none;margin-bottom:5px}");
}

function create_fragment$j(ctx) {
  let ul;
  let li0;
  let hotkey0;
  let t0;
  let li1;
  let hotkey1;
  let t1;
  let li2;
  let hotkey2;
  let t2;
  let li3;
  let hotkey3;
  let current;
  hotkey0 = new Hotkey({
    props: {
      value: "1",
      onPress:
      /*client*/
      ctx[0].reset,
      label: "reset"
    }
  });
  hotkey1 = new Hotkey({
    props: {
      value: "2",
      onPress:
      /*Save*/
      ctx[2],
      label: "save"
    }
  });
  hotkey2 = new Hotkey({
    props: {
      value: "3",
      onPress:
      /*Restore*/
      ctx[3],
      label: "restore"
    }
  });
  hotkey3 = new Hotkey({
    props: {
      value: ".",
      onPress:
      /*ToggleVisibility*/
      ctx[1],
      label: "hide"
    }
  });
  return {
    c() {
      ul = element("ul");
      li0 = element("li");
      create_component(hotkey0.$$.fragment);
      t0 = space();
      li1 = element("li");
      create_component(hotkey1.$$.fragment);
      t1 = space();
      li2 = element("li");
      create_component(hotkey2.$$.fragment);
      t2 = space();
      li3 = element("li");
      create_component(hotkey3.$$.fragment);
      attr(li0, "class", "svelte-c3lavh");
      attr(li1, "class", "svelte-c3lavh");
      attr(li2, "class", "svelte-c3lavh");
      attr(li3, "class", "svelte-c3lavh");
      attr(ul, "id", "debug-controls");
      attr(ul, "class", "controls svelte-c3lavh");
    },

    m(target, anchor) {
      insert(target, ul, anchor);
      append(ul, li0);
      mount_component(hotkey0, li0, null);
      append(ul, t0);
      append(ul, li1);
      mount_component(hotkey1, li1, null);
      append(ul, t1);
      append(ul, li2);
      mount_component(hotkey2, li2, null);
      append(ul, t2);
      append(ul, li3);
      mount_component(hotkey3, li3, null);
      current = true;
    },

    p(ctx, _ref20) {
      let [dirty] = _ref20;
      const hotkey0_changes = {};
      if (dirty &
      /*client*/
      1) hotkey0_changes.onPress =
      /*client*/
      ctx[0].reset;
      hotkey0.$set(hotkey0_changes);
      const hotkey3_changes = {};
      if (dirty &
      /*ToggleVisibility*/
      2) hotkey3_changes.onPress =
      /*ToggleVisibility*/
      ctx[1];
      hotkey3.$set(hotkey3_changes);
    },

    i(local) {
      if (current) return;
      transition_in(hotkey0.$$.fragment, local);
      transition_in(hotkey1.$$.fragment, local);
      transition_in(hotkey2.$$.fragment, local);
      transition_in(hotkey3.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(hotkey0.$$.fragment, local);
      transition_out(hotkey1.$$.fragment, local);
      transition_out(hotkey2.$$.fragment, local);
      transition_out(hotkey3.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(ul);
      destroy_component(hotkey0);
      destroy_component(hotkey1);
      destroy_component(hotkey2);
      destroy_component(hotkey3);
    }

  };
}

function instance$j($$self, $$props, $$invalidate) {
  let {
    client
  } = $$props;
  let {
    ToggleVisibility
  } = $$props;

  function Save() {
    // get state to persist and overwrite deltalog, _undo, and _redo
    const state = client.getState();
    const json = (0, _flatted.stringify)({ ...state,
      _undo: [],
      _redo: [],
      deltalog: []
    });
    window.localStorage.setItem('gamestate', json);
    window.localStorage.setItem('initialState', (0, _flatted.stringify)(client.initialState));
  }

  function Restore() {
    const gamestateJSON = window.localStorage.getItem('gamestate');
    const initialStateJSON = window.localStorage.getItem('initialState');

    if (gamestateJSON !== null && initialStateJSON !== null) {
      const gamestate = (0, _flatted.parse)(gamestateJSON);
      const initialState = (0, _flatted.parse)(initialStateJSON);
      client.store.dispatch((0, _turnOrder0b7dce3d.s)({
        state: gamestate,
        initialState
      }));
    }
  }

  $$self.$$set = $$props => {
    if ('client' in $$props) $$invalidate(0, client = $$props.client);
    if ('ToggleVisibility' in $$props) $$invalidate(1, ToggleVisibility = $$props.ToggleVisibility);
  };

  return [client, ToggleVisibility, Save, Restore];
}

class Controls extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, {
      client: 0,
      ToggleVisibility: 1
    }, add_css$c);
  }

}
/* src/client/debug/main/PlayerInfo.svelte generated by Svelte v3.41.0 */


function add_css$d(target) {
  append_styles(target, "svelte-19aan9p", ".player-box.svelte-19aan9p{display:flex;flex-direction:row}.player.svelte-19aan9p{cursor:pointer;text-align:center;width:30px;height:30px;line-height:30px;background:#eee;border:3px solid #fefefe;box-sizing:content-box;padding:0}.player.current.svelte-19aan9p{background:#555;color:#eee;font-weight:bold}.player.active.svelte-19aan9p{border:3px solid #ff7f50}");
}

function get_each_context$4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (59:2) {#each players as player}


function create_each_block$4(ctx) {
  let button;
  let t0_value =
  /*player*/
  ctx[7] + "";
  let t0;
  let t1;
  let button_aria_label_value;
  let mounted;
  let dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[5](
      /*player*/
      ctx[7])
    );
  }

  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      attr(button, "class", "player svelte-19aan9p");
      attr(button, "aria-label", button_aria_label_value =
      /*playerLabel*/
      ctx[4](
      /*player*/
      ctx[7]));
      toggle_class(button, "current",
      /*player*/
      ctx[7] ==
      /*ctx*/
      ctx[0].currentPlayer);
      toggle_class(button, "active",
      /*player*/
      ctx[7] ==
      /*playerID*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);

      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*players*/
      4 && t0_value !== (t0_value =
      /*player*/
      ctx[7] + "")) set_data(t0, t0_value);

      if (dirty &
      /*players*/
      4 && button_aria_label_value !== (button_aria_label_value =
      /*playerLabel*/
      ctx[4](
      /*player*/
      ctx[7]))) {
        attr(button, "aria-label", button_aria_label_value);
      }

      if (dirty &
      /*players, ctx*/
      5) {
        toggle_class(button, "current",
        /*player*/
        ctx[7] ==
        /*ctx*/
        ctx[0].currentPlayer);
      }

      if (dirty &
      /*players, playerID*/
      6) {
        toggle_class(button, "active",
        /*player*/
        ctx[7] ==
        /*playerID*/
        ctx[1]);
      }
    },

    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }

  };
}

function create_fragment$k(ctx) {
  let div;
  let each_value =
  /*players*/
  ctx[2];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
  }

  return {
    c() {
      div = element("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(div, "class", "player-box svelte-19aan9p");
    },

    m(target, anchor) {
      insert(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },

    p(ctx, _ref21) {
      let [dirty] = _ref21;

      if (dirty &
      /*playerLabel, players, ctx, playerID, OnClick*/
      31) {
        each_value =
        /*players*/
        ctx[2];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$4(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$4(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
    }

  };
}

function instance$k($$self, $$props, $$invalidate) {
  let {
    ctx
  } = $$props;
  let {
    playerID
  } = $$props;
  const dispatch = createEventDispatcher();

  function OnClick(player) {
    if (player == playerID) {
      dispatch("change", {
        playerID: null
      });
    } else {
      dispatch("change", {
        playerID: player
      });
    }
  }

  function playerLabel(player) {
    const properties = [];
    if (player == ctx.currentPlayer) properties.push('current');
    if (player == playerID) properties.push('active');
    let label = "Player ".concat(player);
    if (properties.length) label += " (".concat(properties.join(', '), ")");
    return label;
  }

  let players;

  const click_handler = player => OnClick(player);

  $$self.$$set = $$props => {
    if ('ctx' in $$props) $$invalidate(0, ctx = $$props.ctx);
    if ('playerID' in $$props) $$invalidate(1, playerID = $$props.playerID);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*ctx*/
    1) {
      $$invalidate(2, players = ctx ? [...Array(ctx.numPlayers).keys()].map(i => i.toString()) : []);
    }
  };

  return [ctx, playerID, players, OnClick, playerLabel, click_handler];
}

class PlayerInfo extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$k, safe_not_equal, {
      ctx: 0,
      playerID: 1
    }, add_css$d);
  }

}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


function AssignShortcuts(moveNames, blacklist) {
  var shortcuts = {};
  var taken = {};

  var _iterator = _createForOfIteratorHelper(blacklist),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c = _step.value;
      taken[c] = true;
    } // Try assigning the first char of each move as the shortcut.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var t = taken;
  var canUseFirstChar = true;

  for (var name in moveNames) {
    var shortcut = name[0];

    if (t[shortcut]) {
      canUseFirstChar = false;
      break;
    }

    t[shortcut] = true;
    shortcuts[name] = shortcut;
  }

  if (canUseFirstChar) {
    return shortcuts;
  } // If those aren't unique, use a-z.


  t = taken;
  var next = 97;
  shortcuts = {};

  for (var _name in moveNames) {
    var _shortcut = String.fromCharCode(next);

    while (t[_shortcut]) {
      next++;
      _shortcut = String.fromCharCode(next);
    }

    t[_shortcut] = true;
    shortcuts[_name] = _shortcut;
  }

  return shortcuts;
}
/* src/client/debug/main/Main.svelte generated by Svelte v3.41.0 */


function add_css$e(target) {
  append_styles(target, "svelte-146sq5f", ".tree.svelte-146sq5f{--json-tree-font-family:monospace;--json-tree-font-size:14px;--json-tree-null-color:#757575}.label.svelte-146sq5f{margin-bottom:0;text-transform:none}h3.svelte-146sq5f{text-transform:uppercase}ul.svelte-146sq5f{padding-left:0}li.svelte-146sq5f{list-style:none;margin:0;margin-bottom:5px}");
}

function get_each_context$5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i][0];
  child_ctx[11] = list[i][1];
  return child_ctx;
} // (78:4) {#each Object.entries(moves) as [name, fn]}


function create_each_block$5(ctx) {
  let li;
  let move;
  let t;
  let current;
  move = new Move({
    props: {
      shortcut:
      /*shortcuts*/
      ctx[8][
      /*name*/
      ctx[10]],
      fn:
      /*fn*/
      ctx[11],
      name:
      /*name*/
      ctx[10]
    }
  });
  return {
    c() {
      li = element("li");
      create_component(move.$$.fragment);
      t = space();
      attr(li, "class", "svelte-146sq5f");
    },

    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(move, li, null);
      append(li, t);
      current = true;
    },

    p(ctx, dirty) {
      const move_changes = {};
      if (dirty &
      /*moves*/
      16) move_changes.shortcut =
      /*shortcuts*/
      ctx[8][
      /*name*/
      ctx[10]];
      if (dirty &
      /*moves*/
      16) move_changes.fn =
      /*fn*/
      ctx[11];
      if (dirty &
      /*moves*/
      16) move_changes.name =
      /*name*/
      ctx[10];
      move.$set(move_changes);
    },

    i(local) {
      if (current) return;
      transition_in(move.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(move.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      destroy_component(move);
    }

  };
} // (90:2) {#if ctx.activePlayers && events.endStage}


function create_if_block_2$2(ctx) {
  let li;
  let move;
  let current;
  move = new Move({
    props: {
      name: "endStage",
      shortcut: 7,
      fn:
      /*events*/
      ctx[5].endStage
    }
  });
  return {
    c() {
      li = element("li");
      create_component(move.$$.fragment);
      attr(li, "class", "svelte-146sq5f");
    },

    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(move, li, null);
      current = true;
    },

    p(ctx, dirty) {
      const move_changes = {};
      if (dirty &
      /*events*/
      32) move_changes.fn =
      /*events*/
      ctx[5].endStage;
      move.$set(move_changes);
    },

    i(local) {
      if (current) return;
      transition_in(move.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(move.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      destroy_component(move);
    }

  };
} // (95:2) {#if events.endTurn}


function create_if_block_1$2(ctx) {
  let li;
  let move;
  let current;
  move = new Move({
    props: {
      name: "endTurn",
      shortcut: 8,
      fn:
      /*events*/
      ctx[5].endTurn
    }
  });
  return {
    c() {
      li = element("li");
      create_component(move.$$.fragment);
      attr(li, "class", "svelte-146sq5f");
    },

    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(move, li, null);
      current = true;
    },

    p(ctx, dirty) {
      const move_changes = {};
      if (dirty &
      /*events*/
      32) move_changes.fn =
      /*events*/
      ctx[5].endTurn;
      move.$set(move_changes);
    },

    i(local) {
      if (current) return;
      transition_in(move.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(move.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      destroy_component(move);
    }

  };
} // (100:2) {#if ctx.phase && events.endPhase}


function create_if_block$7(ctx) {
  let li;
  let move;
  let current;
  move = new Move({
    props: {
      name: "endPhase",
      shortcut: 9,
      fn:
      /*events*/
      ctx[5].endPhase
    }
  });
  return {
    c() {
      li = element("li");
      create_component(move.$$.fragment);
      attr(li, "class", "svelte-146sq5f");
    },

    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(move, li, null);
      current = true;
    },

    p(ctx, dirty) {
      const move_changes = {};
      if (dirty &
      /*events*/
      32) move_changes.fn =
      /*events*/
      ctx[5].endPhase;
      move.$set(move_changes);
    },

    i(local) {
      if (current) return;
      transition_in(move.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(move.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(li);
      destroy_component(move);
    }

  };
}

function create_fragment$l(ctx) {
  let section0;
  let h30;
  let t1;
  let controls;
  let t2;
  let section1;
  let h31;
  let t4;
  let playerinfo;
  let t5;
  let section2;
  let h32;
  let t7;
  let ul0;
  let t8;
  let section3;
  let h33;
  let t10;
  let ul1;
  let t11;
  let t12;
  let t13;
  let section4;
  let h34;
  let t15;
  let jsontree0;
  let t16;
  let section5;
  let h35;
  let t18;
  let jsontree1;
  let t19;
  let clientswitcher;
  let current;
  controls = new Controls({
    props: {
      client:
      /*client*/
      ctx[0],
      ToggleVisibility:
      /*ToggleVisibility*/
      ctx[2]
    }
  });
  playerinfo = new PlayerInfo({
    props: {
      ctx:
      /*ctx*/
      ctx[6],
      playerID:
      /*playerID*/
      ctx[3]
    }
  });
  playerinfo.$on("change",
  /*change_handler*/
  ctx[9]);
  let each_value = Object.entries(
  /*moves*/
  ctx[4]);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
  }

  const out = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  let if_block0 =
  /*ctx*/
  ctx[6].activePlayers &&
  /*events*/
  ctx[5].endStage && create_if_block_2$2(ctx);
  let if_block1 =
  /*events*/
  ctx[5].endTurn && create_if_block_1$2(ctx);
  let if_block2 =
  /*ctx*/
  ctx[6].phase &&
  /*events*/
  ctx[5].endPhase && create_if_block$7(ctx);
  jsontree0 = new Root({
    props: {
      value:
      /*G*/
      ctx[7]
    }
  });
  jsontree1 = new Root({
    props: {
      value: SanitizeCtx(
      /*ctx*/
      ctx[6])
    }
  });
  clientswitcher = new ClientSwitcher({
    props: {
      clientManager:
      /*clientManager*/
      ctx[1]
    }
  });
  return {
    c() {
      section0 = element("section");
      h30 = element("h3");
      h30.textContent = "Controls";
      t1 = space();
      create_component(controls.$$.fragment);
      t2 = space();
      section1 = element("section");
      h31 = element("h3");
      h31.textContent = "Players";
      t4 = space();
      create_component(playerinfo.$$.fragment);
      t5 = space();
      section2 = element("section");
      h32 = element("h3");
      h32.textContent = "Moves";
      t7 = space();
      ul0 = element("ul");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t8 = space();
      section3 = element("section");
      h33 = element("h3");
      h33.textContent = "Events";
      t10 = space();
      ul1 = element("ul");
      if (if_block0) if_block0.c();
      t11 = space();
      if (if_block1) if_block1.c();
      t12 = space();
      if (if_block2) if_block2.c();
      t13 = space();
      section4 = element("section");
      h34 = element("h3");
      h34.textContent = "G";
      t15 = space();
      create_component(jsontree0.$$.fragment);
      t16 = space();
      section5 = element("section");
      h35 = element("h3");
      h35.textContent = "ctx";
      t18 = space();
      create_component(jsontree1.$$.fragment);
      t19 = space();
      create_component(clientswitcher.$$.fragment);
      attr(h30, "class", "svelte-146sq5f");
      attr(h31, "class", "svelte-146sq5f");
      attr(h32, "class", "svelte-146sq5f");
      attr(ul0, "class", "svelte-146sq5f");
      attr(h33, "class", "svelte-146sq5f");
      attr(ul1, "class", "svelte-146sq5f");
      attr(h34, "class", "label svelte-146sq5f");
      attr(section4, "class", "tree svelte-146sq5f");
      attr(h35, "class", "label svelte-146sq5f");
      attr(section5, "class", "tree svelte-146sq5f");
    },

    m(target, anchor) {
      insert(target, section0, anchor);
      append(section0, h30);
      append(section0, t1);
      mount_component(controls, section0, null);
      insert(target, t2, anchor);
      insert(target, section1, anchor);
      append(section1, h31);
      append(section1, t4);
      mount_component(playerinfo, section1, null);
      insert(target, t5, anchor);
      insert(target, section2, anchor);
      append(section2, h32);
      append(section2, t7);
      append(section2, ul0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul0, null);
      }

      insert(target, t8, anchor);
      insert(target, section3, anchor);
      append(section3, h33);
      append(section3, t10);
      append(section3, ul1);
      if (if_block0) if_block0.m(ul1, null);
      append(ul1, t11);
      if (if_block1) if_block1.m(ul1, null);
      append(ul1, t12);
      if (if_block2) if_block2.m(ul1, null);
      insert(target, t13, anchor);
      insert(target, section4, anchor);
      append(section4, h34);
      append(section4, t15);
      mount_component(jsontree0, section4, null);
      insert(target, t16, anchor);
      insert(target, section5, anchor);
      append(section5, h35);
      append(section5, t18);
      mount_component(jsontree1, section5, null);
      insert(target, t19, anchor);
      mount_component(clientswitcher, target, anchor);
      current = true;
    },

    p(ctx, _ref22) {
      let [dirty] = _ref22;
      const controls_changes = {};
      if (dirty &
      /*client*/
      1) controls_changes.client =
      /*client*/
      ctx[0];
      if (dirty &
      /*ToggleVisibility*/
      4) controls_changes.ToggleVisibility =
      /*ToggleVisibility*/
      ctx[2];
      controls.$set(controls_changes);
      const playerinfo_changes = {};
      if (dirty &
      /*ctx*/
      64) playerinfo_changes.ctx =
      /*ctx*/
      ctx[6];
      if (dirty &
      /*playerID*/
      8) playerinfo_changes.playerID =
      /*playerID*/
      ctx[3];
      playerinfo.$set(playerinfo_changes);

      if (dirty &
      /*shortcuts, Object, moves*/
      272) {
        each_value = Object.entries(
        /*moves*/
        ctx[4]);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$5(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$5(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul0, null);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }

      if (
      /*ctx*/
      ctx[6].activePlayers &&
      /*events*/
      ctx[5].endStage) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*ctx, events*/
          96) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(ul1, t11);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*events*/
      ctx[5].endTurn) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*events*/
          32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(ul1, t12);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }

      if (
      /*ctx*/
      ctx[6].phase &&
      /*events*/
      ctx[5].endPhase) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*ctx, events*/
          96) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$7(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(ul1, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }

      const jsontree0_changes = {};
      if (dirty &
      /*G*/
      128) jsontree0_changes.value =
      /*G*/
      ctx[7];
      jsontree0.$set(jsontree0_changes);
      const jsontree1_changes = {};
      if (dirty &
      /*ctx*/
      64) jsontree1_changes.value = SanitizeCtx(
      /*ctx*/
      ctx[6]);
      jsontree1.$set(jsontree1_changes);
      const clientswitcher_changes = {};
      if (dirty &
      /*clientManager*/
      2) clientswitcher_changes.clientManager =
      /*clientManager*/
      ctx[1];
      clientswitcher.$set(clientswitcher_changes);
    },

    i(local) {
      if (current) return;
      transition_in(controls.$$.fragment, local);
      transition_in(playerinfo.$$.fragment, local);

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(jsontree0.$$.fragment, local);
      transition_in(jsontree1.$$.fragment, local);
      transition_in(clientswitcher.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(controls.$$.fragment, local);
      transition_out(playerinfo.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(jsontree0.$$.fragment, local);
      transition_out(jsontree1.$$.fragment, local);
      transition_out(clientswitcher.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(section0);
      destroy_component(controls);
      if (detaching) detach(t2);
      if (detaching) detach(section1);
      destroy_component(playerinfo);
      if (detaching) detach(t5);
      if (detaching) detach(section2);
      destroy_each(each_blocks, detaching);
      if (detaching) detach(t8);
      if (detaching) detach(section3);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      if (detaching) detach(t13);
      if (detaching) detach(section4);
      destroy_component(jsontree0);
      if (detaching) detach(t16);
      if (detaching) detach(section5);
      destroy_component(jsontree1);
      if (detaching) detach(t19);
      destroy_component(clientswitcher, detaching);
    }

  };
}

function SanitizeCtx(ctx) {
  let r = {};

  for (const key in ctx) {
    if (!key.startsWith('_')) {
      r[key] = ctx[key];
    }
  }

  return r;
}

function instance$l($$self, $$props, $$invalidate) {
  let {
    client
  } = $$props;
  let {
    clientManager
  } = $$props;
  let {
    ToggleVisibility
  } = $$props;
  const shortcuts = AssignShortcuts(client.moves, 'mlia');
  let {
    playerID,
    moves,
    events
  } = client;
  let ctx = {};
  let G = {};
  client.subscribe(state => {
    if (state) $$invalidate(7, ({
      G,
      ctx
    } = state), G, $$invalidate(6, ctx));
    $$invalidate(3, ({
      playerID,
      moves,
      events
    } = client), playerID, $$invalidate(4, moves), $$invalidate(5, events));
  });

  const change_handler = e => clientManager.switchPlayerID(e.detail.playerID);

  $$self.$$set = $$props => {
    if ('client' in $$props) $$invalidate(0, client = $$props.client);
    if ('clientManager' in $$props) $$invalidate(1, clientManager = $$props.clientManager);
    if ('ToggleVisibility' in $$props) $$invalidate(2, ToggleVisibility = $$props.ToggleVisibility);
  };

  return [client, clientManager, ToggleVisibility, playerID, moves, events, ctx, G, shortcuts, change_handler];
}

class Main extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$l, safe_not_equal, {
      client: 0,
      clientManager: 1,
      ToggleVisibility: 2
    }, add_css$e);
  }

}
/* src/client/debug/info/Item.svelte generated by Svelte v3.41.0 */


function add_css$f(target) {
  append_styles(target, "svelte-13qih23", ".item.svelte-13qih23.svelte-13qih23{padding:10px}.item.svelte-13qih23.svelte-13qih23:not(:first-child){border-top:1px dashed #aaa}.item.svelte-13qih23 div.svelte-13qih23{float:right;text-align:right}");
}

function create_fragment$m(ctx) {
  let div1;
  let strong;
  let t0;
  let t1;
  let div0;
  let t2_value = JSON.stringify(
  /*value*/
  ctx[1]) + "";
  let t2;
  return {
    c() {
      div1 = element("div");
      strong = element("strong");
      t0 = text(
      /*name*/
      ctx[0]);
      t1 = space();
      div0 = element("div");
      t2 = text(t2_value);
      attr(div0, "class", "svelte-13qih23");
      attr(div1, "class", "item svelte-13qih23");
    },

    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, strong);
      append(strong, t0);
      append(div1, t1);
      append(div1, div0);
      append(div0, t2);
    },

    p(ctx, _ref23) {
      let [dirty] = _ref23;
      if (dirty &
      /*name*/
      1) set_data(t0,
      /*name*/
      ctx[0]);
      if (dirty &
      /*value*/
      2 && t2_value !== (t2_value = JSON.stringify(
      /*value*/
      ctx[1]) + "")) set_data(t2, t2_value);
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div1);
    }

  };
}

function instance$m($$self, $$props, $$invalidate) {
  let {
    name
  } = $$props;
  let {
    value
  } = $$props;

  $$self.$$set = $$props => {
    if ('name' in $$props) $$invalidate(0, name = $$props.name);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
  };

  return [name, value];
}

class Item extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$m, safe_not_equal, {
      name: 0,
      value: 1
    }, add_css$f);
  }

}
/* src/client/debug/info/Info.svelte generated by Svelte v3.41.0 */


function add_css$g(target) {
  append_styles(target, "svelte-1yzq5o8", ".gameinfo.svelte-1yzq5o8{padding:10px}");
} // (19:2) {#if client.multiplayer}


function create_if_block$8(ctx) {
  let item;
  let current;
  item = new Item({
    props: {
      name: "isConnected",
      value:
      /*$client*/
      ctx[1].isConnected
    }
  });
  return {
    c() {
      create_component(item.$$.fragment);
    },

    m(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const item_changes = {};
      if (dirty &
      /*$client*/
      2) item_changes.value =
      /*$client*/
      ctx[1].isConnected;
      item.$set(item_changes);
    },

    i(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(item, detaching);
    }

  };
}

function create_fragment$n(ctx) {
  let section;
  let item0;
  let t0;
  let item1;
  let t1;
  let item2;
  let t2;
  let current;
  item0 = new Item({
    props: {
      name: "matchID",
      value:
      /*client*/
      ctx[0].matchID
    }
  });
  item1 = new Item({
    props: {
      name: "playerID",
      value:
      /*client*/
      ctx[0].playerID
    }
  });
  item2 = new Item({
    props: {
      name: "isActive",
      value:
      /*$client*/
      ctx[1].isActive
    }
  });
  let if_block =
  /*client*/
  ctx[0].multiplayer && create_if_block$8(ctx);
  return {
    c() {
      section = element("section");
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      if (if_block) if_block.c();
      attr(section, "class", "gameinfo svelte-1yzq5o8");
    },

    m(target, anchor) {
      insert(target, section, anchor);
      mount_component(item0, section, null);
      append(section, t0);
      mount_component(item1, section, null);
      append(section, t1);
      mount_component(item2, section, null);
      append(section, t2);
      if (if_block) if_block.m(section, null);
      current = true;
    },

    p(ctx, _ref24) {
      let [dirty] = _ref24;
      const item0_changes = {};
      if (dirty &
      /*client*/
      1) item0_changes.value =
      /*client*/
      ctx[0].matchID;
      item0.$set(item0_changes);
      const item1_changes = {};
      if (dirty &
      /*client*/
      1) item1_changes.value =
      /*client*/
      ctx[0].playerID;
      item1.$set(item1_changes);
      const item2_changes = {};
      if (dirty &
      /*$client*/
      2) item2_changes.value =
      /*$client*/
      ctx[1].isActive;
      item2.$set(item2_changes);

      if (
      /*client*/
      ctx[0].multiplayer) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*client*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$8(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(section, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(section);
      destroy_component(item0);
      destroy_component(item1);
      destroy_component(item2);
      if (if_block) if_block.d();
    }

  };
}

function instance$n($$self, $$props, $$invalidate) {
  let $client,
      $$unsubscribe_client = noop,
      $$subscribe_client = () => ($$unsubscribe_client(), $$unsubscribe_client = subscribe(client, $$value => $$invalidate(1, $client = $$value)), client);

  $$self.$$.on_destroy.push(() => $$unsubscribe_client());
  let {
    client
  } = $$props;
  $$subscribe_client();
  let {
    clientManager
  } = $$props;
  let {
    ToggleVisibility
  } = $$props;

  $$self.$$set = $$props => {
    if ('client' in $$props) $$subscribe_client($$invalidate(0, client = $$props.client));
    if ('clientManager' in $$props) $$invalidate(2, clientManager = $$props.clientManager);
    if ('ToggleVisibility' in $$props) $$invalidate(3, ToggleVisibility = $$props.ToggleVisibility);
  };

  return [client, $client, clientManager, ToggleVisibility];
}

class Info extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, create_fragment$n, safe_not_equal, {
      client: 0,
      clientManager: 2,
      ToggleVisibility: 3
    }, add_css$g);
  }

}
/* src/client/debug/log/TurnMarker.svelte generated by Svelte v3.41.0 */


function add_css$h(target) {
  append_styles(target, "svelte-6eza86", ".turn-marker.svelte-6eza86{display:flex;justify-content:center;align-items:center;grid-column:1;background:#555;color:#eee;text-align:center;font-weight:bold;border:1px solid #888}");
}

function create_fragment$o(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(
      /*turn*/
      ctx[0]);
      attr(div, "class", "turn-marker svelte-6eza86");
      attr(div, "style",
      /*style*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },

    p(ctx, _ref25) {
      let [dirty] = _ref25;
      if (dirty &
      /*turn*/
      1) set_data(t,
      /*turn*/
      ctx[0]);
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
    }

  };
}

function instance$o($$self, $$props, $$invalidate) {
  let {
    turn
  } = $$props;
  let {
    numEvents
  } = $$props;
  const style = "grid-row: span ".concat(numEvents);

  $$self.$$set = $$props => {
    if ('turn' in $$props) $$invalidate(0, turn = $$props.turn);
    if ('numEvents' in $$props) $$invalidate(2, numEvents = $$props.numEvents);
  };

  return [turn, style, numEvents];
}

class TurnMarker extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$o, safe_not_equal, {
      turn: 0,
      numEvents: 2
    }, add_css$h);
  }

}
/* src/client/debug/log/PhaseMarker.svelte generated by Svelte v3.41.0 */


function add_css$i(target) {
  append_styles(target, "svelte-1t4xap", ".phase-marker.svelte-1t4xap{grid-column:3;background:#555;border:1px solid #888;color:#eee;text-align:center;font-weight:bold;padding-top:10px;padding-bottom:10px;text-orientation:sideways;writing-mode:vertical-rl;line-height:30px;width:100%}");
}

function create_fragment$p(ctx) {
  let div;
  let t_value = (
  /*phase*/
  ctx[0] || '') + "";
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      attr(div, "class", "phase-marker svelte-1t4xap");
      attr(div, "style",
      /*style*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },

    p(ctx, _ref26) {
      let [dirty] = _ref26;
      if (dirty &
      /*phase*/
      1 && t_value !== (t_value = (
      /*phase*/
      ctx[0] || '') + "")) set_data(t, t_value);
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
    }

  };
}

function instance$p($$self, $$props, $$invalidate) {
  let {
    phase
  } = $$props;
  let {
    numEvents
  } = $$props;
  const style = "grid-row: span ".concat(numEvents);

  $$self.$$set = $$props => {
    if ('phase' in $$props) $$invalidate(0, phase = $$props.phase);
    if ('numEvents' in $$props) $$invalidate(2, numEvents = $$props.numEvents);
  };

  return [phase, style, numEvents];
}

class PhaseMarker extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$p, create_fragment$p, safe_not_equal, {
      phase: 0,
      numEvents: 2
    }, add_css$i);
  }

}
/* src/client/debug/log/LogMetadata.svelte generated by Svelte v3.41.0 */


function create_fragment$q(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "".concat(
      /*renderedMetadata*/
      ctx[0]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
    },

    p: noop,
    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
    }

  };
}

function instance$q($$self, $$props, $$invalidate) {
  let {
    metadata
  } = $$props;
  const renderedMetadata = metadata !== undefined ? JSON.stringify(metadata, null, 4) : '';

  $$self.$$set = $$props => {
    if ('metadata' in $$props) $$invalidate(1, metadata = $$props.metadata);
  };

  return [renderedMetadata, metadata];
}

class LogMetadata extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$q, create_fragment$q, safe_not_equal, {
      metadata: 1
    });
  }

}
/* src/client/debug/log/LogEvent.svelte generated by Svelte v3.41.0 */


function add_css$j(target) {
  append_styles(target, "svelte-vajd9z", ".log-event.svelte-vajd9z{grid-column:2;cursor:pointer;overflow:hidden;display:flex;flex-direction:column;justify-content:center;background:#fff;border:1px dotted #ccc;border-left:5px solid #ccc;padding:5px;text-align:center;color:#666;font-size:14px;min-height:25px;line-height:25px}.log-event.svelte-vajd9z:hover,.log-event.svelte-vajd9z:focus{border-style:solid;background:#eee}.log-event.pinned.svelte-vajd9z{border-style:solid;background:#eee;opacity:1}.args.svelte-vajd9z{text-align:left;white-space:pre-wrap}.player0.svelte-vajd9z{border-left-color:#ff851b}.player1.svelte-vajd9z{border-left-color:#7fdbff}.player2.svelte-vajd9z{border-left-color:#0074d9}.player3.svelte-vajd9z{border-left-color:#39cccc}.player4.svelte-vajd9z{border-left-color:#3d9970}.player5.svelte-vajd9z{border-left-color:#2ecc40}.player6.svelte-vajd9z{border-left-color:#01ff70}.player7.svelte-vajd9z{border-left-color:#ffdc00}.player8.svelte-vajd9z{border-left-color:#001f3f}.player9.svelte-vajd9z{border-left-color:#ff4136}.player10.svelte-vajd9z{border-left-color:#85144b}.player11.svelte-vajd9z{border-left-color:#f012be}.player12.svelte-vajd9z{border-left-color:#b10dc9}.player13.svelte-vajd9z{border-left-color:#111111}.player14.svelte-vajd9z{border-left-color:#aaaaaa}.player15.svelte-vajd9z{border-left-color:#dddddd}");
} // (146:2) {:else}


function create_else_block$1(ctx) {
  let logmetadata;
  let current;
  logmetadata = new LogMetadata({
    props: {
      metadata:
      /*metadata*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(logmetadata.$$.fragment);
    },

    m(target, anchor) {
      mount_component(logmetadata, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const logmetadata_changes = {};
      if (dirty &
      /*metadata*/
      4) logmetadata_changes.metadata =
      /*metadata*/
      ctx[2];
      logmetadata.$set(logmetadata_changes);
    },

    i(local) {
      if (current) return;
      transition_in(logmetadata.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(logmetadata.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(logmetadata, detaching);
    }

  };
} // (144:2) {#if metadataComponent}


function create_if_block$9(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value =
  /*metadataComponent*/
  ctx[3];

  function switch_props(ctx) {
    return {
      props: {
        metadata:
        /*metadata*/
        ctx[2]
      }
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },

    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const switch_instance_changes = {};
      if (dirty &
      /*metadata*/
      4) switch_instance_changes.metadata =
      /*metadata*/
      ctx[2];

      if (switch_value !== (switch_value =
      /*metadataComponent*/
      ctx[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },

    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },

    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }

  };
}

function create_fragment$r(ctx) {
  let button;
  let div;
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let current_block_type_index;
  let if_block;
  let button_class_value;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$9, create_else_block$1];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*metadataComponent*/
    ctx[3]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      button = element("button");
      div = element("div");
      t0 = text(
      /*actionType*/
      ctx[4]);
      t1 = text("(");
      t2 = text(
      /*renderedArgs*/
      ctx[6]);
      t3 = text(")");
      t4 = space();
      if_block.c();
      attr(div, "class", "args svelte-vajd9z");
      attr(button, "class", button_class_value = "log-event player" +
      /*playerID*/
      ctx[7] + " svelte-vajd9z");
      toggle_class(button, "pinned",
      /*pinned*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, div);
      append(div, t0);
      append(div, t1);
      append(div, t2);
      append(div, t3);
      append(button, t4);
      if_blocks[current_block_type_index].m(button, null);
      current = true;

      if (!mounted) {
        dispose = [listen(button, "click",
        /*click_handler*/
        ctx[9]), listen(button, "mouseenter",
        /*mouseenter_handler*/
        ctx[10]), listen(button, "focus",
        /*focus_handler*/
        ctx[11]), listen(button, "mouseleave",
        /*mouseleave_handler*/
        ctx[12]), listen(button, "blur",
        /*blur_handler*/
        ctx[13])];
        mounted = true;
      }
    },

    p(ctx, _ref27) {
      let [dirty] = _ref27;
      if (!current || dirty &
      /*actionType*/
      16) set_data(t0,
      /*actionType*/
      ctx[4]);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(button, null);
      }

      if (dirty &
      /*pinned*/
      2) {
        toggle_class(button, "pinned",
        /*pinned*/
        ctx[1]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(button);
      if_blocks[current_block_type_index].d();
      mounted = false;
      run_all(dispose);
    }

  };
}

function instance$r($$self, $$props, $$invalidate) {
  let {
    logIndex
  } = $$props;
  let {
    action
  } = $$props;
  let {
    pinned
  } = $$props;
  let {
    metadata
  } = $$props;
  let {
    metadataComponent
  } = $$props;
  const dispatch = createEventDispatcher();
  const args = action.payload.args;
  const renderedArgs = Array.isArray(args) ? args.map(arg => JSON.stringify(arg, null, 2)).join(',') : JSON.stringify(args, null, 2) || '';
  const playerID = action.payload.playerID;
  let actionType;

  switch (action.type) {
    case 'UNDO':
      actionType = 'undo';
      break;

    case 'REDO':
      actionType = 'redo';

    case 'GAME_EVENT':
    case 'MAKE_MOVE':
    default:
      actionType = action.payload.type;
      break;
  }

  const click_handler = () => dispatch('click', {
    logIndex
  });

  const mouseenter_handler = () => dispatch('mouseenter', {
    logIndex
  });

  const focus_handler = () => dispatch('mouseenter', {
    logIndex
  });

  const mouseleave_handler = () => dispatch('mouseleave');

  const blur_handler = () => dispatch('mouseleave');

  $$self.$$set = $$props => {
    if ('logIndex' in $$props) $$invalidate(0, logIndex = $$props.logIndex);
    if ('action' in $$props) $$invalidate(8, action = $$props.action);
    if ('pinned' in $$props) $$invalidate(1, pinned = $$props.pinned);
    if ('metadata' in $$props) $$invalidate(2, metadata = $$props.metadata);
    if ('metadataComponent' in $$props) $$invalidate(3, metadataComponent = $$props.metadataComponent);
  };

  return [logIndex, pinned, metadata, metadataComponent, actionType, dispatch, renderedArgs, playerID, action, click_handler, mouseenter_handler, focus_handler, mouseleave_handler, blur_handler];
}

class LogEvent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$r, create_fragment$r, safe_not_equal, {
      logIndex: 0,
      action: 8,
      pinned: 1,
      metadata: 2,
      metadataComponent: 3
    }, add_css$j);
  }

}
/* node_modules/svelte-icons/fa/FaArrowAltCircleDown.svelte generated by Svelte v3.41.0 */


function create_default_slot$1(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z");
    },

    m(target, anchor) {
      insert(target, path, anchor);
    },

    d(detaching) {
      if (detaching) detach(path);
    }

  };
}

function create_fragment$s(ctx) {
  let iconbase;
  let current;
  const iconbase_spread_levels = [{
    viewBox: "0 0 512 512"
  },
  /*$$props*/
  ctx[0]];
  let iconbase_props = {
    $$slots: {
      default: [create_default_slot$1]
    },
    $$scope: {
      ctx
    }
  };

  for (let i = 0; i < iconbase_spread_levels.length; i += 1) {
    iconbase_props = assign(iconbase_props, iconbase_spread_levels[i]);
  }

  iconbase = new IconBase({
    props: iconbase_props
  });
  return {
    c() {
      create_component(iconbase.$$.fragment);
    },

    m(target, anchor) {
      mount_component(iconbase, target, anchor);
      current = true;
    },

    p(ctx, _ref28) {
      let [dirty] = _ref28;
      const iconbase_changes = dirty &
      /*$$props*/
      1 ? get_spread_update(iconbase_spread_levels, [iconbase_spread_levels[0], get_spread_object(
      /*$$props*/
      ctx[0])]) : {};

      if (dirty &
      /*$$scope*/
      2) {
        iconbase_changes.$$scope = {
          dirty,
          ctx
        };
      }

      iconbase.$set(iconbase_changes);
    },

    i(local) {
      if (current) return;
      transition_in(iconbase.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(iconbase.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(iconbase, detaching);
    }

  };
}

function instance$s($$self, $$props, $$invalidate) {
  $$self.$$set = $$new_props => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };

  $$props = exclude_internal_props($$props);
  return [$$props];
}

class FaArrowAltCircleDown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$s, create_fragment$s, safe_not_equal, {});
  }

}
/* src/client/debug/mcts/Action.svelte generated by Svelte v3.41.0 */


function add_css$k(target) {
  append_styles(target, "svelte-1a7time", "div.svelte-1a7time{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:500px}");
}

function create_fragment$t(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(
      /*text*/
      ctx[0]);
      attr(div, "alt",
      /*text*/
      ctx[0]);
      attr(div, "class", "svelte-1a7time");
    },

    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },

    p(ctx, _ref29) {
      let [dirty] = _ref29;
      if (dirty &
      /*text*/
      1) set_data(t,
      /*text*/
      ctx[0]);

      if (dirty &
      /*text*/
      1) {
        attr(div, "alt",
        /*text*/
        ctx[0]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
    }

  };
}

function instance$t($$self, $$props, $$invalidate) {
  let {
    action
  } = $$props;
  let text;

  $$self.$$set = $$props => {
    if ('action' in $$props) $$invalidate(1, action = $$props.action);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*action*/
    2) {
      {
        const {
          type,
          args
        } = action.payload;
        const argsFormatted = (args || []).join(',');
        $$invalidate(0, text = "".concat(type, "(").concat(argsFormatted, ")"));
      }
    }
  };

  return [text, action];
}

class Action extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$t, create_fragment$t, safe_not_equal, {
      action: 1
    }, add_css$k);
  }

}
/* src/client/debug/mcts/Table.svelte generated by Svelte v3.41.0 */


function add_css$l(target) {
  append_styles(target, "svelte-ztcwsu", "table.svelte-ztcwsu.svelte-ztcwsu{font-size:12px;border-collapse:collapse;border:1px solid #ddd;padding:0}tr.svelte-ztcwsu.svelte-ztcwsu{cursor:pointer}tr.svelte-ztcwsu:hover td.svelte-ztcwsu{background:#eee}tr.selected.svelte-ztcwsu td.svelte-ztcwsu{background:#eee}td.svelte-ztcwsu.svelte-ztcwsu{padding:10px;height:10px;line-height:10px;font-size:12px;border:none}th.svelte-ztcwsu.svelte-ztcwsu{background:#888;color:#fff;padding:10px;text-align:center}");
}

function get_each_context$6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  child_ctx[12] = i;
  return child_ctx;
} // (86:2) {#each children as child, i}


function create_each_block$6(ctx) {
  let tr;
  let td0;
  let t0_value =
  /*child*/
  ctx[10].value + "";
  let t0;
  let t1;
  let td1;
  let t2_value =
  /*child*/
  ctx[10].visits + "";
  let t2;
  let t3;
  let td2;
  let action;
  let t4;
  let current;
  let mounted;
  let dispose;
  action = new Action({
    props: {
      action:
      /*child*/
      ctx[10].parentAction
    }
  });

  function click_handler() {
    return (
      /*click_handler*/
      ctx[6](
      /*child*/
      ctx[10],
      /*i*/
      ctx[12])
    );
  }

  function mouseout_handler() {
    return (
      /*mouseout_handler*/
      ctx[7](
      /*i*/
      ctx[12])
    );
  }

  function mouseover_handler() {
    return (
      /*mouseover_handler*/
      ctx[8](
      /*child*/
      ctx[10],
      /*i*/
      ctx[12])
    );
  }

  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      create_component(action.$$.fragment);
      t4 = space();
      attr(td0, "class", "svelte-ztcwsu");
      attr(td1, "class", "svelte-ztcwsu");
      attr(td2, "class", "svelte-ztcwsu");
      attr(tr, "class", "svelte-ztcwsu");
      toggle_class(tr, "clickable",
      /*children*/
      ctx[1].length > 0);
      toggle_class(tr, "selected",
      /*i*/
      ctx[12] ===
      /*selectedIndex*/
      ctx[0]);
    },

    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, td0);
      append(td0, t0);
      append(tr, t1);
      append(tr, td1);
      append(td1, t2);
      append(tr, t3);
      append(tr, td2);
      mount_component(action, td2, null);
      append(tr, t4);
      current = true;

      if (!mounted) {
        dispose = [listen(tr, "click", click_handler), listen(tr, "mouseout", mouseout_handler), listen(tr, "mouseover", mouseover_handler)];
        mounted = true;
      }
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty &
      /*children*/
      2) && t0_value !== (t0_value =
      /*child*/
      ctx[10].value + "")) set_data(t0, t0_value);
      if ((!current || dirty &
      /*children*/
      2) && t2_value !== (t2_value =
      /*child*/
      ctx[10].visits + "")) set_data(t2, t2_value);
      const action_changes = {};
      if (dirty &
      /*children*/
      2) action_changes.action =
      /*child*/
      ctx[10].parentAction;
      action.$set(action_changes);

      if (dirty &
      /*children*/
      2) {
        toggle_class(tr, "clickable",
        /*children*/
        ctx[1].length > 0);
      }

      if (dirty &
      /*selectedIndex*/
      1) {
        toggle_class(tr, "selected",
        /*i*/
        ctx[12] ===
        /*selectedIndex*/
        ctx[0]);
      }
    },

    i(local) {
      if (current) return;
      transition_in(action.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(action.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(tr);
      destroy_component(action);
      mounted = false;
      run_all(dispose);
    }

  };
}

function create_fragment$u(ctx) {
  let table;
  let thead;
  let t5;
  let tbody;
  let current;
  let each_value =
  /*children*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
  }

  const out = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  return {
    c() {
      table = element("table");
      thead = element("thead");
      thead.innerHTML = "<th class=\"svelte-ztcwsu\">Value</th> \n    <th class=\"svelte-ztcwsu\">Visits</th> \n    <th class=\"svelte-ztcwsu\">Action</th>";
      t5 = space();
      tbody = element("tbody");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(table, "class", "svelte-ztcwsu");
    },

    m(target, anchor) {
      insert(target, table, anchor);
      append(table, thead);
      append(table, t5);
      append(table, tbody);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }

      current = true;
    },

    p(ctx, _ref30) {
      let [dirty] = _ref30;

      if (dirty &
      /*children, selectedIndex, Select, Preview*/
      15) {
        each_value =
        /*children*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$6(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$6(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(tbody, null);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }
    },

    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },

    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },

    d(detaching) {
      if (detaching) detach(table);
      destroy_each(each_blocks, detaching);
    }

  };
}

function instance$u($$self, $$props, $$invalidate) {
  let {
    root
  } = $$props;
  let {
    selectedIndex = null
  } = $$props;
  const dispatch = createEventDispatcher();
  let parents = [];
  let children = [];

  function Select(node, i) {
    dispatch('select', {
      node,
      selectedIndex: i
    });
  }

  function Preview(node, i) {
    if (selectedIndex === null) {
      dispatch('preview', {
        node
      });
    }
  }

  const click_handler = (child, i) => Select(child, i);

  const mouseout_handler = i => Preview(null);

  const mouseover_handler = (child, i) => Preview(child);

  $$self.$$set = $$props => {
    if ('root' in $$props) $$invalidate(4, root = $$props.root);
    if ('selectedIndex' in $$props) $$invalidate(0, selectedIndex = $$props.selectedIndex);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*root, parents*/
    48) {
      {
        let t = root;
        $$invalidate(5, parents = []);

        while (t.parent) {
          const parent = t.parent;
          const {
            type,
            args
          } = t.parentAction.payload;
          const argsFormatted = (args || []).join(',');
          const arrowText = "".concat(type, "(").concat(argsFormatted, ")");
          parents.push({
            parent,
            arrowText
          });
          t = parent;
        }

        parents.reverse();
        $$invalidate(1, children = [...root.children].sort((a, b) => a.visits < b.visits ? 1 : -1).slice(0, 50));
      }
    }
  };

  return [selectedIndex, children, Select, Preview, root, parents, click_handler, mouseout_handler, mouseover_handler];
}

class Table extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$u, create_fragment$u, safe_not_equal, {
      root: 4,
      selectedIndex: 0
    }, add_css$l);
  }

}
/* src/client/debug/mcts/MCTS.svelte generated by Svelte v3.41.0 */


function add_css$m(target) {
  append_styles(target, "svelte-1f0amz4", ".visualizer.svelte-1f0amz4{display:flex;flex-direction:column;align-items:center;padding:50px}.preview.svelte-1f0amz4{opacity:0.5}.icon.svelte-1f0amz4{color:#777;width:32px;height:32px;margin-bottom:20px}");
}

function get_each_context$7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i].node;
  child_ctx[10] = list[i].selectedIndex;
  child_ctx[12] = i;
  return child_ctx;
} // (50:4) {#if i !== 0}


function create_if_block_2$3(ctx) {
  let div;
  let arrow;
  let current;
  arrow = new FaArrowAltCircleDown({});
  return {
    c() {
      div = element("div");
      create_component(arrow.$$.fragment);
      attr(div, "class", "icon svelte-1f0amz4");
    },

    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(arrow, div, null);
      current = true;
    },

    i(local) {
      if (current) return;
      transition_in(arrow.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(arrow.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      destroy_component(arrow);
    }

  };
} // (61:6) {:else}


function create_else_block$2(ctx) {
  let table;
  let current;

  function select_handler_1() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (
      /*select_handler_1*/
      ctx[7](
      /*i*/
      ctx[12], ...args)
    );
  }

  table = new Table({
    props: {
      root:
      /*node*/
      ctx[9],
      selectedIndex:
      /*selectedIndex*/
      ctx[10]
    }
  });
  table.$on("select", select_handler_1);
  return {
    c() {
      create_component(table.$$.fragment);
    },

    m(target, anchor) {
      mount_component(table, target, anchor);
      current = true;
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      const table_changes = {};
      if (dirty &
      /*nodes*/
      1) table_changes.root =
      /*node*/
      ctx[9];
      if (dirty &
      /*nodes*/
      1) table_changes.selectedIndex =
      /*selectedIndex*/
      ctx[10];
      table.$set(table_changes);
    },

    i(local) {
      if (current) return;
      transition_in(table.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(table.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(table, detaching);
    }

  };
} // (57:6) {#if i === nodes.length - 1}


function create_if_block_1$3(ctx) {
  let table;
  let current;

  function select_handler() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (
      /*select_handler*/
      ctx[5](
      /*i*/
      ctx[12], ...args)
    );
  }

  function preview_handler() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return (
      /*preview_handler*/
      ctx[6](
      /*i*/
      ctx[12], ...args)
    );
  }

  table = new Table({
    props: {
      root:
      /*node*/
      ctx[9]
    }
  });
  table.$on("select", select_handler);
  table.$on("preview", preview_handler);
  return {
    c() {
      create_component(table.$$.fragment);
    },

    m(target, anchor) {
      mount_component(table, target, anchor);
      current = true;
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      const table_changes = {};
      if (dirty &
      /*nodes*/
      1) table_changes.root =
      /*node*/
      ctx[9];
      table.$set(table_changes);
    },

    i(local) {
      if (current) return;
      transition_in(table.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(table.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(table, detaching);
    }

  };
} // (49:2) {#each nodes as { node, selectedIndex }


function create_each_block$7(ctx) {
  let t;
  let section;
  let current_block_type_index;
  let if_block1;
  let current;
  let if_block0 =
  /*i*/
  ctx[12] !== 0 && create_if_block_2$3();
  const if_block_creators = [create_if_block_1$3, create_else_block$2];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*i*/
    ctx[12] ===
    /*nodes*/
    ctx[0].length - 1) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if (if_block0) if_block0.c();
      t = space();
      section = element("section");
      if_block1.c();
    },

    m(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert(target, t, anchor);
      insert(target, section, anchor);
      if_blocks[current_block_type_index].m(section, null);
      current = true;
    },

    p(ctx, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];

        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block1.c();
        } else {
          if_block1.p(ctx, dirty);
        }

        transition_in(if_block1, 1);
        if_block1.m(section, null);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },

    d(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach(t);
      if (detaching) detach(section);
      if_blocks[current_block_type_index].d();
    }

  };
} // (69:2) {#if preview}


function create_if_block$a(ctx) {
  let div;
  let arrow;
  let t;
  let section;
  let table;
  let current;
  arrow = new FaArrowAltCircleDown({});
  table = new Table({
    props: {
      root:
      /*preview*/
      ctx[1]
    }
  });
  return {
    c() {
      div = element("div");
      create_component(arrow.$$.fragment);
      t = space();
      section = element("section");
      create_component(table.$$.fragment);
      attr(div, "class", "icon svelte-1f0amz4");
      attr(section, "class", "preview svelte-1f0amz4");
    },

    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(arrow, div, null);
      insert(target, t, anchor);
      insert(target, section, anchor);
      mount_component(table, section, null);
      current = true;
    },

    p(ctx, dirty) {
      const table_changes = {};
      if (dirty &
      /*preview*/
      2) table_changes.root =
      /*preview*/
      ctx[1];
      table.$set(table_changes);
    },

    i(local) {
      if (current) return;
      transition_in(arrow.$$.fragment, local);
      transition_in(table.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(arrow.$$.fragment, local);
      transition_out(table.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      destroy_component(arrow);
      if (detaching) detach(t);
      if (detaching) detach(section);
      destroy_component(table);
    }

  };
}

function create_fragment$v(ctx) {
  let div;
  let t;
  let current;
  let each_value =
  /*nodes*/
  ctx[0];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
  }

  const out = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  let if_block =
  /*preview*/
  ctx[1] && create_if_block$a(ctx);
  return {
    c() {
      div = element("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t = space();
      if (if_block) if_block.c();
      attr(div, "class", "visualizer svelte-1f0amz4");
    },

    m(target, anchor) {
      insert(target, div, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      append(div, t);
      if (if_block) if_block.m(div, null);
      current = true;
    },

    p(ctx, _ref31) {
      let [dirty] = _ref31;

      if (dirty &
      /*nodes, SelectNode, PreviewNode*/
      13) {
        each_value =
        /*nodes*/
        ctx[0];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$7(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$7(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, t);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }

      if (
      /*preview*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*preview*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$a(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      transition_in(if_block);
      current = true;
    },

    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
      if (if_block) if_block.d();
    }

  };
}

function instance$v($$self, $$props, $$invalidate) {
  let {
    metadata
  } = $$props;
  let nodes = [];
  let preview = null;

  function SelectNode(_ref32, i) {
    let {
      node,
      selectedIndex
    } = _ref32;
    $$invalidate(1, preview = null);
    $$invalidate(0, nodes[i].selectedIndex = selectedIndex, nodes);
    $$invalidate(0, nodes = [...nodes.slice(0, i + 1), {
      node
    }]);
  }

  function PreviewNode(_ref33, i) {
    let {
      node
    } = _ref33;
    $$invalidate(1, preview = node);
  }

  const select_handler = (i, e) => SelectNode(e.detail, i);

  const preview_handler = (i, e) => PreviewNode(e.detail);

  const select_handler_1 = (i, e) => SelectNode(e.detail, i);

  $$self.$$set = $$props => {
    if ('metadata' in $$props) $$invalidate(4, metadata = $$props.metadata);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*metadata*/
    16) {
      {
        $$invalidate(0, nodes = [{
          node: metadata
        }]);
      }
    }
  };

  return [nodes, preview, SelectNode, PreviewNode, metadata, select_handler, preview_handler, select_handler_1];
}

class MCTS extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$v, create_fragment$v, safe_not_equal, {
      metadata: 4
    }, add_css$m);
  }

}
/* src/client/debug/log/Log.svelte generated by Svelte v3.41.0 */


function add_css$n(target) {
  append_styles(target, "svelte-1pq5e4b", ".gamelog.svelte-1pq5e4b{display:grid;grid-template-columns:30px 1fr 30px;grid-auto-rows:auto;grid-auto-flow:column}");
}

function get_each_context$8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i].phase;
  child_ctx[18] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i].action;
  child_ctx[20] = list[i].metadata;
  child_ctx[18] = i;
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i].turn;
  child_ctx[18] = i;
  return child_ctx;
} // (136:4) {#if i in turnBoundaries}


function create_if_block_1$4(ctx) {
  let turnmarker;
  let current;
  turnmarker = new TurnMarker({
    props: {
      turn:
      /*turn*/
      ctx[22],
      numEvents:
      /*turnBoundaries*/
      ctx[3][
      /*i*/
      ctx[18]]
    }
  });
  return {
    c() {
      create_component(turnmarker.$$.fragment);
    },

    m(target, anchor) {
      mount_component(turnmarker, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const turnmarker_changes = {};
      if (dirty &
      /*renderedLogEntries*/
      2) turnmarker_changes.turn =
      /*turn*/
      ctx[22];
      if (dirty &
      /*turnBoundaries*/
      8) turnmarker_changes.numEvents =
      /*turnBoundaries*/
      ctx[3][
      /*i*/
      ctx[18]];
      turnmarker.$set(turnmarker_changes);
    },

    i(local) {
      if (current) return;
      transition_in(turnmarker.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(turnmarker.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(turnmarker, detaching);
    }

  };
} // (135:2) {#each renderedLogEntries as { turn }


function create_each_block_2(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*i*/
  ctx[18] in
  /*turnBoundaries*/
  ctx[3] && create_if_block_1$4(ctx);
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },

    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      if (
      /*i*/
      ctx[18] in
      /*turnBoundaries*/
      ctx[3]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*turnBoundaries*/
          8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$4(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }

  };
} // (141:2) {#each renderedLogEntries as { action, metadata }


function create_each_block_1(ctx) {
  let logevent;
  let current;
  logevent = new LogEvent({
    props: {
      pinned:
      /*i*/
      ctx[18] ===
      /*pinned*/
      ctx[2],
      logIndex:
      /*i*/
      ctx[18],
      action:
      /*action*/
      ctx[19],
      metadata:
      /*metadata*/
      ctx[20]
    }
  });
  logevent.$on("click",
  /*OnLogClick*/
  ctx[5]);
  logevent.$on("mouseenter",
  /*OnMouseEnter*/
  ctx[6]);
  logevent.$on("mouseleave",
  /*OnMouseLeave*/
  ctx[7]);
  return {
    c() {
      create_component(logevent.$$.fragment);
    },

    m(target, anchor) {
      mount_component(logevent, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const logevent_changes = {};
      if (dirty &
      /*pinned*/
      4) logevent_changes.pinned =
      /*i*/
      ctx[18] ===
      /*pinned*/
      ctx[2];
      if (dirty &
      /*renderedLogEntries*/
      2) logevent_changes.action =
      /*action*/
      ctx[19];
      if (dirty &
      /*renderedLogEntries*/
      2) logevent_changes.metadata =
      /*metadata*/
      ctx[20];
      logevent.$set(logevent_changes);
    },

    i(local) {
      if (current) return;
      transition_in(logevent.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(logevent.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(logevent, detaching);
    }

  };
} // (153:4) {#if i in phaseBoundaries}


function create_if_block$b(ctx) {
  let phasemarker;
  let current;
  phasemarker = new PhaseMarker({
    props: {
      phase:
      /*phase*/
      ctx[16],
      numEvents:
      /*phaseBoundaries*/
      ctx[4][
      /*i*/
      ctx[18]]
    }
  });
  return {
    c() {
      create_component(phasemarker.$$.fragment);
    },

    m(target, anchor) {
      mount_component(phasemarker, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const phasemarker_changes = {};
      if (dirty &
      /*renderedLogEntries*/
      2) phasemarker_changes.phase =
      /*phase*/
      ctx[16];
      if (dirty &
      /*phaseBoundaries*/
      16) phasemarker_changes.numEvents =
      /*phaseBoundaries*/
      ctx[4][
      /*i*/
      ctx[18]];
      phasemarker.$set(phasemarker_changes);
    },

    i(local) {
      if (current) return;
      transition_in(phasemarker.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(phasemarker.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(phasemarker, detaching);
    }

  };
} // (152:2) {#each renderedLogEntries as { phase }


function create_each_block$8(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*i*/
  ctx[18] in
  /*phaseBoundaries*/
  ctx[4] && create_if_block$b(ctx);
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },

    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      if (
      /*i*/
      ctx[18] in
      /*phaseBoundaries*/
      ctx[4]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*phaseBoundaries*/
          16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$b(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }

  };
}

function create_fragment$w(ctx) {
  let div;
  let t0;
  let t1;
  let current;
  let mounted;
  let dispose;
  let each_value_2 =
  /*renderedLogEntries*/
  ctx[1];
  let each_blocks_2 = [];

  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  const out = i => transition_out(each_blocks_2[i], 1, 1, () => {
    each_blocks_2[i] = null;
  });

  let each_value_1 =
  /*renderedLogEntries*/
  ctx[1];
  let each_blocks_1 = [];

  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  const out_1 = i => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });

  let each_value =
  /*renderedLogEntries*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
  }

  const out_2 = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  return {
    c() {
      div = element("div");

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }

      t0 = space();

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }

      t1 = space();

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(div, "class", "gamelog svelte-1pq5e4b");
      toggle_class(div, "pinned",
      /*pinned*/
      ctx[2]);
    },

    m(target, anchor) {
      insert(target, div, anchor);

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(div, null);
      }

      append(div, t0);

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div, null);
      }

      append(div, t1);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen(window, "keydown",
        /*OnKeyDown*/
        ctx[8]);
        mounted = true;
      }
    },

    p(ctx, _ref34) {
      let [dirty] = _ref34;

      if (dirty &
      /*renderedLogEntries, turnBoundaries*/
      10) {
        each_value_2 =
        /*renderedLogEntries*/
        ctx[1];
        let i;

        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);

          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
            transition_in(each_blocks_2[i], 1);
          } else {
            each_blocks_2[i] = create_each_block_2(child_ctx);
            each_blocks_2[i].c();
            transition_in(each_blocks_2[i], 1);
            each_blocks_2[i].m(div, t0);
          }
        }

        group_outros();

        for (i = each_value_2.length; i < each_blocks_2.length; i += 1) {
          out(i);
        }

        check_outros();
      }

      if (dirty &
      /*pinned, renderedLogEntries, OnLogClick, OnMouseEnter, OnMouseLeave*/
      230) {
        each_value_1 =
        /*renderedLogEntries*/
        ctx[1];
        let i;

        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);

          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(div, t1);
          }
        }

        group_outros();

        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out_1(i);
        }

        check_outros();
      }

      if (dirty &
      /*renderedLogEntries, phaseBoundaries*/
      18) {
        each_value =
        /*renderedLogEntries*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$8(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$8(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_2(i);
        }

        check_outros();
      }

      if (dirty &
      /*pinned*/
      4) {
        toggle_class(div, "pinned",
        /*pinned*/
        ctx[2]);
      }
    },

    i(local) {
      if (current) return;

      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }

      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },

    o(local) {
      each_blocks_2 = each_blocks_2.filter(Boolean);

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }

      each_blocks_1 = each_blocks_1.filter(Boolean);

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }

      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }

  };
}

function instance$w($$self, $$props, $$invalidate) {
  let $client,
      $$unsubscribe_client = noop,
      $$subscribe_client = () => ($$unsubscribe_client(), $$unsubscribe_client = subscribe(client, $$value => $$invalidate(10, $client = $$value)), client);

  $$self.$$.on_destroy.push(() => $$unsubscribe_client());
  let {
    client
  } = $$props;
  $$subscribe_client();
  const {
    secondaryPane
  } = getContext('secondaryPane');
  const reducer = (0, _reducer07c7b.C)({
    game: client.game
  });
  const initialState = client.getInitialState();
  let {
    log
  } = $client;
  let pinned = null;

  function rewind(logIndex) {
    let state = initialState;

    for (let i = 0; i < log.length; i++) {
      const {
        action,
        automatic
      } = log[i];

      if (!automatic) {
        state = reducer(state, action);

        if (logIndex == 0) {
          break;
        }

        logIndex--;
      }
    }

    return {
      G: state.G,
      ctx: state.ctx,
      plugins: state.plugins
    };
  }

  function OnLogClick(e) {
    const {
      logIndex
    } = e.detail;
    const state = rewind(logIndex);
    const renderedLogEntries = log.filter(e => !e.automatic);
    client.overrideGameState(state);

    if (pinned == logIndex) {
      $$invalidate(2, pinned = null);
      secondaryPane.set(null);
    } else {
      $$invalidate(2, pinned = logIndex);
      const {
        metadata
      } = renderedLogEntries[logIndex].action.payload;

      if (metadata) {
        secondaryPane.set({
          component: MCTS,
          metadata
        });
      }
    }
  }

  function OnMouseEnter(e) {
    const {
      logIndex
    } = e.detail;

    if (pinned === null) {
      const state = rewind(logIndex);
      client.overrideGameState(state);
    }
  }

  function OnMouseLeave() {
    if (pinned === null) {
      client.overrideGameState(null);
    }
  }

  function Reset() {
    $$invalidate(2, pinned = null);
    client.overrideGameState(null);
    secondaryPane.set(null);
  }

  onDestroy(Reset);

  function OnKeyDown(e) {
    // ESC.
    if (e.keyCode == 27) {
      Reset();
    }
  }

  let renderedLogEntries;
  let turnBoundaries = {};
  let phaseBoundaries = {};

  $$self.$$set = $$props => {
    if ('client' in $$props) $$subscribe_client($$invalidate(0, client = $$props.client));
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$client, log, renderedLogEntries*/
    1538) {
      {
        $$invalidate(9, log = $client.log);
        $$invalidate(1, renderedLogEntries = log.filter(e => !e.automatic));
        let eventsInCurrentPhase = 0;
        let eventsInCurrentTurn = 0;
        $$invalidate(3, turnBoundaries = {});
        $$invalidate(4, phaseBoundaries = {});

        for (let i = 0; i < renderedLogEntries.length; i++) {
          const {
            action,
            payload,
            turn,
            phase
          } = renderedLogEntries[i];
          eventsInCurrentTurn++;
          eventsInCurrentPhase++;

          if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].turn != turn) {
            $$invalidate(3, turnBoundaries[i] = eventsInCurrentTurn, turnBoundaries);
            eventsInCurrentTurn = 0;
          }

          if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].phase != phase) {
            $$invalidate(4, phaseBoundaries[i] = eventsInCurrentPhase, phaseBoundaries);
            eventsInCurrentPhase = 0;
          }
        }
      }
    }
  };

  return [client, renderedLogEntries, pinned, turnBoundaries, phaseBoundaries, OnLogClick, OnMouseEnter, OnMouseLeave, OnKeyDown, log, $client];
}

class Log extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$w, create_fragment$w, safe_not_equal, {
      client: 0
    }, add_css$n);
  }

}
/* src/client/debug/ai/Options.svelte generated by Svelte v3.41.0 */


function add_css$o(target) {
  append_styles(target, "svelte-1fu900w", "label.svelte-1fu900w{color:#666}.option.svelte-1fu900w{margin-bottom:20px}.value.svelte-1fu900w{font-weight:bold;color:#000}input[type='checkbox'].svelte-1fu900w{vertical-align:middle}");
}

function get_each_context$9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i][0];
  child_ctx[7] = list[i][1];
  child_ctx[8] = list;
  child_ctx[9] = i;
  return child_ctx;
} // (44:47) 


function create_if_block_1$5(ctx) {
  let input;
  let input_id_value;
  let mounted;
  let dispose;

  function input_change_handler() {
    /*input_change_handler*/
    ctx[5].call(input,
    /*key*/
    ctx[6]);
  }

  return {
    c() {
      input = element("input");
      attr(input, "id", input_id_value =
      /*makeID*/
      ctx[3](
      /*key*/
      ctx[6]));
      attr(input, "type", "checkbox");
      attr(input, "class", "svelte-1fu900w");
    },

    m(target, anchor) {
      insert(target, input, anchor);
      input.checked =
      /*values*/
      ctx[1][
      /*key*/
      ctx[6]];

      if (!mounted) {
        dispose = [listen(input, "change", input_change_handler), listen(input, "change",
        /*OnChange*/
        ctx[2])];
        mounted = true;
      }
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*bot*/
      1 && input_id_value !== (input_id_value =
      /*makeID*/
      ctx[3](
      /*key*/
      ctx[6]))) {
        attr(input, "id", input_id_value);
      }

      if (dirty &
      /*values, Object, bot*/
      3) {
        input.checked =
        /*values*/
        ctx[1][
        /*key*/
        ctx[6]];
      }
    },

    d(detaching) {
      if (detaching) detach(input);
      mounted = false;
      run_all(dispose);
    }

  };
} // (41:4) {#if value.range}


function create_if_block$c(ctx) {
  let span;
  let t0_value =
  /*values*/
  ctx[1][
  /*key*/
  ctx[6]] + "";
  let t0;
  let t1;
  let input;
  let input_id_value;
  let input_min_value;
  let input_max_value;
  let mounted;
  let dispose;

  function input_change_input_handler() {
    /*input_change_input_handler*/
    ctx[4].call(input,
    /*key*/
    ctx[6]);
  }

  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      attr(span, "class", "value svelte-1fu900w");
      attr(input, "id", input_id_value =
      /*makeID*/
      ctx[3](
      /*key*/
      ctx[6]));
      attr(input, "type", "range");
      attr(input, "min", input_min_value =
      /*value*/
      ctx[7].range.min);
      attr(input, "max", input_max_value =
      /*value*/
      ctx[7].range.max);
    },

    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      insert(target, t1, anchor);
      insert(target, input, anchor);
      set_input_value(input,
      /*values*/
      ctx[1][
      /*key*/
      ctx[6]]);

      if (!mounted) {
        dispose = [listen(input, "change", input_change_input_handler), listen(input, "input", input_change_input_handler), listen(input, "change",
        /*OnChange*/
        ctx[2])];
        mounted = true;
      }
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*values, bot*/
      3 && t0_value !== (t0_value =
      /*values*/
      ctx[1][
      /*key*/
      ctx[6]] + "")) set_data(t0, t0_value);

      if (dirty &
      /*bot*/
      1 && input_id_value !== (input_id_value =
      /*makeID*/
      ctx[3](
      /*key*/
      ctx[6]))) {
        attr(input, "id", input_id_value);
      }

      if (dirty &
      /*bot*/
      1 && input_min_value !== (input_min_value =
      /*value*/
      ctx[7].range.min)) {
        attr(input, "min", input_min_value);
      }

      if (dirty &
      /*bot*/
      1 && input_max_value !== (input_max_value =
      /*value*/
      ctx[7].range.max)) {
        attr(input, "max", input_max_value);
      }

      if (dirty &
      /*values, Object, bot*/
      3) {
        set_input_value(input,
        /*values*/
        ctx[1][
        /*key*/
        ctx[6]]);
      }
    },

    d(detaching) {
      if (detaching) detach(span);
      if (detaching) detach(t1);
      if (detaching) detach(input);
      mounted = false;
      run_all(dispose);
    }

  };
} // (37:0) {#each Object.entries(bot.opts()) as [key, value]}


function create_each_block$9(ctx) {
  let div;
  let label;
  let t0_value =
  /*key*/
  ctx[6] + "";
  let t0;
  let label_for_value;
  let t1;
  let t2;

  function select_block_type(ctx, dirty) {
    if (
    /*value*/
    ctx[7].range) return create_if_block$c;
    if (typeof
    /*value*/
    ctx[7].value === 'boolean') return create_if_block_1$5;
  }

  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div = element("div");
      label = element("label");
      t0 = text(t0_value);
      t1 = space();
      if (if_block) if_block.c();
      t2 = space();
      attr(label, "for", label_for_value =
      /*makeID*/
      ctx[3](
      /*key*/
      ctx[6]));
      attr(label, "class", "svelte-1fu900w");
      attr(div, "class", "option svelte-1fu900w");
    },

    m(target, anchor) {
      insert(target, div, anchor);
      append(div, label);
      append(label, t0);
      append(div, t1);
      if (if_block) if_block.m(div, null);
      append(div, t2);
    },

    p(ctx, dirty) {
      if (dirty &
      /*bot*/
      1 && t0_value !== (t0_value =
      /*key*/
      ctx[6] + "")) set_data(t0, t0_value);

      if (dirty &
      /*bot*/
      1 && label_for_value !== (label_for_value =
      /*makeID*/
      ctx[3](
      /*key*/
      ctx[6]))) {
        attr(label, "for", label_for_value);
      }

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if (if_block) if_block.d(1);
        if_block = current_block_type && current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div, t2);
        }
      }
    },

    d(detaching) {
      if (detaching) detach(div);

      if (if_block) {
        if_block.d();
      }
    }

  };
}

function create_fragment$x(ctx) {
  let each_1_anchor;
  let each_value = Object.entries(
  /*bot*/
  ctx[0].opts());
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
  }

  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = empty();
    },

    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
    },

    p(ctx, _ref35) {
      let [dirty] = _ref35;

      if (dirty &
      /*makeID, Object, bot, values, OnChange*/
      15) {
        each_value = Object.entries(
        /*bot*/
        ctx[0].opts());
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$9(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$9(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }

  };
}

function instance$x($$self, $$props, $$invalidate) {
  let {
    bot
  } = $$props;
  let values = {};

  for (let [key, value] of Object.entries(bot.opts())) {
    values[key] = value.value;
  }

  function OnChange() {
    for (let [key, value] of Object.entries(values)) {
      bot.setOpt(key, value);
    }
  }

  const makeID = key => 'ai-option-' + key;

  function input_change_input_handler(key) {
    values[key] = to_number(this.value);
    $$invalidate(1, values);
    $$invalidate(0, bot);
  }

  function input_change_handler(key) {
    values[key] = this.checked;
    $$invalidate(1, values);
    $$invalidate(0, bot);
  }

  $$self.$$set = $$props => {
    if ('bot' in $$props) $$invalidate(0, bot = $$props.bot);
  };

  return [bot, values, OnChange, makeID, input_change_input_handler, input_change_handler];
}

class Options extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$x, create_fragment$x, safe_not_equal, {
      bot: 0
    }, add_css$o);
  }

}
/* src/client/debug/ai/AI.svelte generated by Svelte v3.41.0 */


function add_css$p(target) {
  append_styles(target, "svelte-lifdi8", "ul.svelte-lifdi8{padding-left:0}li.svelte-lifdi8{list-style:none;margin:none;margin-bottom:5px}h3.svelte-lifdi8{text-transform:uppercase}label.svelte-lifdi8{color:#666}input[type='checkbox'].svelte-lifdi8{vertical-align:middle}");
}

function get_each_context$a(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (202:4) {:else}


function create_else_block$3(ctx) {
  let p0;
  let t1;
  let p1;
  return {
    c() {
      p0 = element("p");
      p0.textContent = "No bots available.";
      t1 = space();
      p1 = element("p");
      p1.innerHTML = "Follow the instructions\n        <a href=\"https://boardgame.io/documentation/#/tutorial?id=bots\" target=\"_blank\">here</a>\n        to set up bots.";
    },

    m(target, anchor) {
      insert(target, p0, anchor);
      insert(target, t1, anchor);
      insert(target, p1, anchor);
    },

    p: noop,
    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(p0);
      if (detaching) detach(t1);
      if (detaching) detach(p1);
    }

  };
} // (200:4) {#if client.multiplayer}


function create_if_block_5(ctx) {
  let p;
  return {
    c() {
      p = element("p");
      p.textContent = "The bot debugger is only available in singleplayer mode.";
    },

    m(target, anchor) {
      insert(target, p, anchor);
    },

    p: noop,
    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(p);
    }

  };
} // (150:2) {#if client.game.ai && !client.multiplayer}


function create_if_block$d(ctx) {
  let section0;
  let h30;
  let t1;
  let ul;
  let li0;
  let hotkey0;
  let t2;
  let li1;
  let hotkey1;
  let t3;
  let li2;
  let hotkey2;
  let t4;
  let section1;
  let h31;
  let t6;
  let select;
  let t7;
  let show_if = Object.keys(
  /*bot*/
  ctx[7].opts()).length;
  let t8;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  hotkey0 = new Hotkey({
    props: {
      value: "1",
      onPress:
      /*Reset*/
      ctx[13],
      label: "reset"
    }
  });
  hotkey1 = new Hotkey({
    props: {
      value: "2",
      onPress:
      /*Step*/
      ctx[11],
      label: "play"
    }
  });
  hotkey2 = new Hotkey({
    props: {
      value: "3",
      onPress:
      /*Simulate*/
      ctx[12],
      label: "simulate"
    }
  });
  let each_value = Object.keys(
  /*bots*/
  ctx[8]);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$a(get_each_context$a(ctx, each_value, i));
  }

  let if_block0 = show_if && create_if_block_4(ctx);
  let if_block1 = (
  /*botAction*/
  ctx[5] ||
  /*iterationCounter*/
  ctx[3]) && create_if_block_1$6(ctx);
  return {
    c() {
      section0 = element("section");
      h30 = element("h3");
      h30.textContent = "Controls";
      t1 = space();
      ul = element("ul");
      li0 = element("li");
      create_component(hotkey0.$$.fragment);
      t2 = space();
      li1 = element("li");
      create_component(hotkey1.$$.fragment);
      t3 = space();
      li2 = element("li");
      create_component(hotkey2.$$.fragment);
      t4 = space();
      section1 = element("section");
      h31 = element("h3");
      h31.textContent = "Bot";
      t6 = space();
      select = element("select");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t7 = space();
      if (if_block0) if_block0.c();
      t8 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
      attr(h30, "class", "svelte-lifdi8");
      attr(li0, "class", "svelte-lifdi8");
      attr(li1, "class", "svelte-lifdi8");
      attr(li2, "class", "svelte-lifdi8");
      attr(ul, "class", "svelte-lifdi8");
      attr(h31, "class", "svelte-lifdi8");
      if (
      /*selectedBot*/
      ctx[4] === void 0) add_render_callback(() =>
      /*select_change_handler*/
      ctx[17].call(select));
    },

    m(target, anchor) {
      insert(target, section0, anchor);
      append(section0, h30);
      append(section0, t1);
      append(section0, ul);
      append(ul, li0);
      mount_component(hotkey0, li0, null);
      append(ul, t2);
      append(ul, li1);
      mount_component(hotkey1, li1, null);
      append(ul, t3);
      append(ul, li2);
      mount_component(hotkey2, li2, null);
      insert(target, t4, anchor);
      insert(target, section1, anchor);
      append(section1, h31);
      append(section1, t6);
      append(section1, select);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }

      select_option(select,
      /*selectedBot*/
      ctx[4]);
      insert(target, t7, anchor);
      if (if_block0) if_block0.m(target, anchor);
      insert(target, t8, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen(select, "change",
        /*select_change_handler*/
        ctx[17]), listen(select, "change",
        /*ChangeBot*/
        ctx[10])];
        mounted = true;
      }
    },

    p(ctx, dirty) {
      if (dirty &
      /*Object, bots*/
      256) {
        each_value = Object.keys(
        /*bots*/
        ctx[8]);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$a(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$a(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*selectedBot, Object, bots*/
      272) {
        select_option(select,
        /*selectedBot*/
        ctx[4]);
      }

      if (dirty &
      /*bot*/
      128) show_if = Object.keys(
      /*bot*/
      ctx[7].opts()).length;

      if (show_if) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*bot*/
          128) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t8.parentNode, t8);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*botAction*/
      ctx[5] ||
      /*iterationCounter*/
      ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1$6(ctx);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },

    i(local) {
      if (current) return;
      transition_in(hotkey0.$$.fragment, local);
      transition_in(hotkey1.$$.fragment, local);
      transition_in(hotkey2.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },

    o(local) {
      transition_out(hotkey0.$$.fragment, local);
      transition_out(hotkey1.$$.fragment, local);
      transition_out(hotkey2.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(section0);
      destroy_component(hotkey0);
      destroy_component(hotkey1);
      destroy_component(hotkey2);
      if (detaching) detach(t4);
      if (detaching) detach(section1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach(t7);
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach(t8);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach(if_block1_anchor);
      mounted = false;
      run_all(dispose);
    }

  };
} // (169:8) {#each Object.keys(bots) as bot}


function create_each_block$a(ctx) {
  let option;
  let t_value =
  /*bot*/
  ctx[7] + "";
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      option.__value = option_value_value =
      /*bot*/
      ctx[7];
      option.value = option.__value;
    },

    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t);
    },

    p: noop,

    d(detaching) {
      if (detaching) detach(option);
    }

  };
} // (175:4) {#if Object.keys(bot.opts()).length}


function create_if_block_4(ctx) {
  let section;
  let h3;
  let t1;
  let label;
  let t3;
  let input;
  let t4;
  let options;
  let current;
  let mounted;
  let dispose;
  options = new Options({
    props: {
      bot:
      /*bot*/
      ctx[7]
    }
  });
  return {
    c() {
      section = element("section");
      h3 = element("h3");
      h3.textContent = "Options";
      t1 = space();
      label = element("label");
      label.textContent = "debug";
      t3 = space();
      input = element("input");
      t4 = space();
      create_component(options.$$.fragment);
      attr(h3, "class", "svelte-lifdi8");
      attr(label, "for", "ai-option-debug");
      attr(label, "class", "svelte-lifdi8");
      attr(input, "id", "ai-option-debug");
      attr(input, "type", "checkbox");
      attr(input, "class", "svelte-lifdi8");
    },

    m(target, anchor) {
      insert(target, section, anchor);
      append(section, h3);
      append(section, t1);
      append(section, label);
      append(section, t3);
      append(section, input);
      input.checked =
      /*debug*/
      ctx[1];
      append(section, t4);
      mount_component(options, section, null);
      current = true;

      if (!mounted) {
        dispose = [listen(input, "change",
        /*input_change_handler*/
        ctx[18]), listen(input, "change",
        /*OnDebug*/
        ctx[9])];
        mounted = true;
      }
    },

    p(ctx, dirty) {
      if (dirty &
      /*debug*/
      2) {
        input.checked =
        /*debug*/
        ctx[1];
      }

      const options_changes = {};
      if (dirty &
      /*bot*/
      128) options_changes.bot =
      /*bot*/
      ctx[7];
      options.$set(options_changes);
    },

    i(local) {
      if (current) return;
      transition_in(options.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(options.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(section);
      destroy_component(options);
      mounted = false;
      run_all(dispose);
    }

  };
} // (184:4) {#if botAction || iterationCounter}


function create_if_block_1$6(ctx) {
  let section;
  let h3;
  let t1;
  let t2;
  let if_block0 =
  /*progress*/
  ctx[2] &&
  /*progress*/
  ctx[2] < 1.0 && create_if_block_3$1(ctx);
  let if_block1 =
  /*botAction*/
  ctx[5] && create_if_block_2$4(ctx);
  return {
    c() {
      section = element("section");
      h3 = element("h3");
      h3.textContent = "Result";
      t1 = space();
      if (if_block0) if_block0.c();
      t2 = space();
      if (if_block1) if_block1.c();
      attr(h3, "class", "svelte-lifdi8");
    },

    m(target, anchor) {
      insert(target, section, anchor);
      append(section, h3);
      append(section, t1);
      if (if_block0) if_block0.m(section, null);
      append(section, t2);
      if (if_block1) if_block1.m(section, null);
    },

    p(ctx, dirty) {
      if (
      /*progress*/
      ctx[2] &&
      /*progress*/
      ctx[2] < 1.0) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_3$1(ctx);
          if_block0.c();
          if_block0.m(section, t2);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*botAction*/
      ctx[5]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_2$4(ctx);
          if_block1.c();
          if_block1.m(section, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },

    d(detaching) {
      if (detaching) detach(section);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }

  };
} // (187:6) {#if progress && progress < 1.0}


function create_if_block_3$1(ctx) {
  let progress_1;
  return {
    c() {
      progress_1 = element("progress");
      progress_1.value =
      /*progress*/
      ctx[2];
    },

    m(target, anchor) {
      insert(target, progress_1, anchor);
    },

    p(ctx, dirty) {
      if (dirty &
      /*progress*/
      4) {
        progress_1.value =
        /*progress*/
        ctx[2];
      }
    },

    d(detaching) {
      if (detaching) detach(progress_1);
    }

  };
} // (191:6) {#if botAction}


function create_if_block_2$4(ctx) {
  let ul;
  let li0;
  let t0;
  let t1;
  let t2;
  let li1;
  let t3;
  let t4_value = JSON.stringify(
  /*botActionArgs*/
  ctx[6]) + "";
  let t4;
  return {
    c() {
      ul = element("ul");
      li0 = element("li");
      t0 = text("Action: ");
      t1 = text(
      /*botAction*/
      ctx[5]);
      t2 = space();
      li1 = element("li");
      t3 = text("Args: ");
      t4 = text(t4_value);
      attr(li0, "class", "svelte-lifdi8");
      attr(li1, "class", "svelte-lifdi8");
      attr(ul, "class", "svelte-lifdi8");
    },

    m(target, anchor) {
      insert(target, ul, anchor);
      append(ul, li0);
      append(li0, t0);
      append(li0, t1);
      append(ul, t2);
      append(ul, li1);
      append(li1, t3);
      append(li1, t4);
    },

    p(ctx, dirty) {
      if (dirty &
      /*botAction*/
      32) set_data(t1,
      /*botAction*/
      ctx[5]);
      if (dirty &
      /*botActionArgs*/
      64 && t4_value !== (t4_value = JSON.stringify(
      /*botActionArgs*/
      ctx[6]) + "")) set_data(t4, t4_value);
    },

    d(detaching) {
      if (detaching) detach(ul);
    }

  };
}

function create_fragment$y(ctx) {
  let section;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$d, create_if_block_5, create_else_block$3];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*client*/
    ctx[0].game.ai && !
    /*client*/
    ctx[0].multiplayer) return 0;
    if (
    /*client*/
    ctx[0].multiplayer) return 1;
    return 2;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      section = element("section");
      if_block.c();
    },

    m(target, anchor) {
      insert(target, section, anchor);
      if_blocks[current_block_type_index].m(section, null);
      current = true;

      if (!mounted) {
        dispose = listen(window, "keydown",
        /*OnKeyDown*/
        ctx[14]);
        mounted = true;
      }
    },

    p(ctx, _ref36) {
      let [dirty] = _ref36;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(section, null);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(section);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }

  };
}

function instance$y($$self, $$props, $$invalidate) {
  let {
    client
  } = $$props;
  let {
    clientManager
  } = $$props;
  let {
    ToggleVisibility
  } = $$props;
  const {
    secondaryPane
  } = getContext('secondaryPane');
  const bots = {
    'MCTS': _ai3099ce9a.M,
    'Random': _ai3099ce9a.R
  };
  let debug = false;
  let progress = null;
  let iterationCounter = 0;
  let metadata = null;

  const iterationCallback = _ref37 => {
    let {
      iterationCounter: c,
      numIterations,
      metadata: m
    } = _ref37;
    $$invalidate(3, iterationCounter = c);
    $$invalidate(2, progress = c / numIterations);
    metadata = m;

    if (debug && metadata) {
      secondaryPane.set({
        component: MCTS,
        metadata
      });
    }
  };

  function OnDebug() {
    if (debug && metadata) {
      secondaryPane.set({
        component: MCTS,
        metadata
      });
    } else {
      secondaryPane.set(null);
    }
  }

  let bot;

  if (client.game.ai) {
    bot = new _ai3099ce9a.M({
      game: client.game,
      enumerate: client.game.ai.enumerate,
      iterationCallback
    });
    bot.setOpt('async', true);
  }

  let selectedBot;
  let botAction;
  let botActionArgs;

  function ChangeBot() {
    const botConstructor = bots[selectedBot];
    $$invalidate(7, bot = new botConstructor({
      game: client.game,
      enumerate: client.game.ai.enumerate,
      iterationCallback
    }));
    bot.setOpt('async', true);
    $$invalidate(5, botAction = null);
    metadata = null;
    secondaryPane.set(null);
    $$invalidate(3, iterationCounter = 0);
  }

  async function Step$1() {
    $$invalidate(5, botAction = null);
    metadata = null;
    $$invalidate(3, iterationCounter = 0);
    const t = await (0, _ai3099ce9a.S)(client, bot);

    if (t) {
      $$invalidate(5, botAction = t.payload.type);
      $$invalidate(6, botActionArgs = t.payload.args);
    }
  }

  function Simulate() {
    let iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
    let sleepTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    $$invalidate(5, botAction = null);
    metadata = null;
    $$invalidate(3, iterationCounter = 0);

    const step = async () => {
      for (let i = 0; i < iterations; i++) {
        const action = await (0, _ai3099ce9a.S)(client, bot);
        if (!action) break;
        await new Promise(resolve => setTimeout(resolve, sleepTimeout));
      }
    };

    return step();
  }

  function Exit() {
    client.overrideGameState(null);
    secondaryPane.set(null);
    $$invalidate(1, debug = false);
  }

  function Reset() {
    client.reset();
    $$invalidate(5, botAction = null);
    metadata = null;
    $$invalidate(3, iterationCounter = 0);
    Exit();
  }

  function OnKeyDown(e) {
    // ESC.
    if (e.keyCode == 27) {
      Exit();
    }
  }

  onDestroy(Exit);

  function select_change_handler() {
    selectedBot = select_value(this);
    $$invalidate(4, selectedBot);
    $$invalidate(8, bots);
  }

  function input_change_handler() {
    debug = this.checked;
    $$invalidate(1, debug);
  }

  $$self.$$set = $$props => {
    if ('client' in $$props) $$invalidate(0, client = $$props.client);
    if ('clientManager' in $$props) $$invalidate(15, clientManager = $$props.clientManager);
    if ('ToggleVisibility' in $$props) $$invalidate(16, ToggleVisibility = $$props.ToggleVisibility);
  };

  return [client, debug, progress, iterationCounter, selectedBot, botAction, botActionArgs, bot, bots, OnDebug, ChangeBot, Step$1, Simulate, Reset, OnKeyDown, clientManager, ToggleVisibility, select_change_handler, input_change_handler];
}

class AI extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$y, create_fragment$y, safe_not_equal, {
      client: 0,
      clientManager: 15,
      ToggleVisibility: 16
    }, add_css$p);
  }

}
/* src/client/debug/Debug.svelte generated by Svelte v3.41.0 */


function add_css$q(target) {
  append_styles(target, "svelte-8ymctk", ".debug-panel.svelte-8ymctk.svelte-8ymctk{position:fixed;color:#555;font-family:monospace;right:0;top:0;height:100%;font-size:14px;opacity:0.9;z-index:99999}.panel.svelte-8ymctk.svelte-8ymctk{display:flex;position:relative;flex-direction:row;height:100%}.visibility-toggle.svelte-8ymctk.svelte-8ymctk{position:absolute;box-sizing:border-box;top:7px;border:1px solid #ccc;border-radius:5px;width:48px;height:48px;padding:8px;background:white;color:#555;box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.visibility-toggle.svelte-8ymctk.svelte-8ymctk:hover,.visibility-toggle.svelte-8ymctk.svelte-8ymctk:focus{background:#eee}.opener.svelte-8ymctk.svelte-8ymctk{right:10px}.closer.svelte-8ymctk.svelte-8ymctk{left:-326px}@keyframes svelte-8ymctk-rotateFromZero{from{transform:rotateZ(0deg)}to{transform:rotateZ(180deg)}}.icon.svelte-8ymctk.svelte-8ymctk{display:flex;height:100%;animation:svelte-8ymctk-rotateFromZero 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s 1\n      normal forwards}.closer.svelte-8ymctk .icon.svelte-8ymctk{animation-direction:reverse}.pane.svelte-8ymctk.svelte-8ymctk{flex-grow:2;overflow-x:hidden;overflow-y:scroll;background:#fefefe;padding:20px;border-left:1px solid #ccc;box-shadow:-1px 0 5px rgba(0, 0, 0, 0.2);box-sizing:border-box;width:280px}.secondary-pane.svelte-8ymctk.svelte-8ymctk{background:#fefefe;overflow-y:scroll}.debug-panel.svelte-8ymctk button,.debug-panel.svelte-8ymctk select{cursor:pointer;font-size:14px;font-family:monospace}.debug-panel.svelte-8ymctk select{background:#eee;border:1px solid #bbb;color:#555;padding:3px;border-radius:3px}.debug-panel.svelte-8ymctk section{margin-bottom:20px}.debug-panel.svelte-8ymctk .screen-reader-only{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}");
} // (199:2) {:else}


function create_else_block$4(ctx) {
  let div1;
  let t0;
  let menu;
  let t1;
  let div0;
  let switch_instance;
  let t2;
  let div1_transition;
  let current;
  let if_block0 =
  /*showToggleButton*/
  ctx[10] && create_if_block_3$2(ctx);
  menu = new Menu({
    props: {
      panes:
      /*panes*/
      ctx[6],
      pane:
      /*pane*/
      ctx[2]
    }
  });
  menu.$on("change",
  /*MenuChange*/
  ctx[8]);
  var switch_value =
  /*panes*/
  ctx[6][
  /*pane*/
  ctx[2]].component;

  function switch_props(ctx) {
    return {
      props: {
        client:
        /*client*/
        ctx[4],
        clientManager:
        /*clientManager*/
        ctx[0],
        ToggleVisibility:
        /*ToggleVisibility*/
        ctx[9]
      }
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  let if_block1 =
  /*$secondaryPane*/
  ctx[5] && create_if_block_2$5(ctx);
  return {
    c() {
      div1 = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(menu.$$.fragment);
      t1 = space();
      div0 = element("div");
      if (switch_instance) create_component(switch_instance.$$.fragment);
      t2 = space();
      if (if_block1) if_block1.c();
      attr(div0, "class", "pane svelte-8ymctk");
      attr(div0, "role", "region");
      attr(div0, "aria-label",
      /*pane*/
      ctx[2]);
      attr(div0, "tabindex", "-1");
      attr(div1, "class", "panel svelte-8ymctk");
    },

    m(target, anchor) {
      insert(target, div1, anchor);
      if (if_block0) if_block0.m(div1, null);
      append(div1, t0);
      mount_component(menu, div1, null);
      append(div1, t1);
      append(div1, div0);

      if (switch_instance) {
        mount_component(switch_instance, div0, null);
      }
      /*div0_binding*/


      ctx[16](div0);
      append(div1, t2);
      if (if_block1) if_block1.m(div1, null);
      current = true;
    },

    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (
      /*showToggleButton*/
      ctx[10]) if_block0.p(ctx, dirty);
      const menu_changes = {};
      if (dirty &
      /*pane*/
      4) menu_changes.pane =
      /*pane*/
      ctx[2];
      menu.$set(menu_changes);
      const switch_instance_changes = {};
      if (dirty &
      /*client*/
      16) switch_instance_changes.client =
      /*client*/
      ctx[4];
      if (dirty &
      /*clientManager*/
      1) switch_instance_changes.clientManager =
      /*clientManager*/
      ctx[0];

      if (switch_value !== (switch_value =
      /*panes*/
      ctx[6][
      /*pane*/
      ctx[2]].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div0, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }

      if (!current || dirty &
      /*pane*/
      4) {
        attr(div0, "aria-label",
        /*pane*/
        ctx[2]);
      }

      if (
      /*$secondaryPane*/
      ctx[5]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*$secondaryPane*/
          32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2$5(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(menu.$$.fragment, local);
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      transition_in(if_block1);
      add_render_callback(() => {
        if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fly, {
          x: 400,
          ...
          /*transitionOpts*/
          ctx[12]
        }, true);
        div1_transition.run(1);
      });
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(menu.$$.fragment, local);
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      transition_out(if_block1);
      if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fly, {
        x: 400,
        ...
        /*transitionOpts*/
        ctx[12]
      }, false);
      div1_transition.run(0);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div1);
      if (if_block0) if_block0.d();
      destroy_component(menu);
      if (switch_instance) destroy_component(switch_instance);
      /*div0_binding*/

      ctx[16](null);
      if (if_block1) if_block1.d();
      if (detaching && div1_transition) div1_transition.end();
    }

  };
} // (185:2) {#if !visible}


function create_if_block$e(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*showToggleButton*/
  ctx[10] && create_if_block_1$7(ctx);
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },

    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      if (
      /*showToggleButton*/
      ctx[10]) if_block.p(ctx, dirty);
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }

  };
} // (201:6) {#if showToggleButton}


function create_if_block_3$2(ctx) {
  let button;
  let span;
  let chevron;
  let button_intro;
  let button_outro;
  let current;
  let mounted;
  let dispose;
  chevron = new FaChevronRight({});
  return {
    c() {
      button = element("button");
      span = element("span");
      create_component(chevron.$$.fragment);
      attr(span, "class", "icon svelte-8ymctk");
      attr(span, "aria-hidden", "true");
      attr(button, "class", "visibility-toggle closer svelte-8ymctk");
      attr(button, "title", "Hide Debug Panel");
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, span);
      mount_component(chevron, span, null);
      current = true;

      if (!mounted) {
        dispose = listen(button, "click",
        /*ToggleVisibility*/
        ctx[9]);
        mounted = true;
      }
    },

    p: noop,

    i(local) {
      if (current) return;
      transition_in(chevron.$$.fragment, local);
      add_render_callback(() => {
        if (button_outro) button_outro.end(1);
        button_intro = create_in_transition(button,
        /*receive*/
        ctx[14], {
          key: 'toggle'
        });
        button_intro.start();
      });
      current = true;
    },

    o(local) {
      transition_out(chevron.$$.fragment, local);
      if (button_intro) button_intro.invalidate();
      button_outro = create_out_transition(button,
      /*send*/
      ctx[13], {
        key: 'toggle'
      });
      current = false;
    },

    d(detaching) {
      if (detaching) detach(button);
      destroy_component(chevron);
      if (detaching && button_outro) button_outro.end();
      mounted = false;
      dispose();
    }

  };
} // (229:6) {#if $secondaryPane}


function create_if_block_2$5(ctx) {
  let div;
  let switch_instance;
  let current;
  var switch_value =
  /*$secondaryPane*/
  ctx[5].component;

  function switch_props(ctx) {
    return {
      props: {
        metadata:
        /*$secondaryPane*/
        ctx[5].metadata
      }
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c() {
      div = element("div");
      if (switch_instance) create_component(switch_instance.$$.fragment);
      attr(div, "class", "secondary-pane svelte-8ymctk");
    },

    m(target, anchor) {
      insert(target, div, anchor);

      if (switch_instance) {
        mount_component(switch_instance, div, null);
      }

      current = true;
    },

    p(ctx, dirty) {
      const switch_instance_changes = {};
      if (dirty &
      /*$secondaryPane*/
      32) switch_instance_changes.metadata =
      /*$secondaryPane*/
      ctx[5].metadata;

      if (switch_value !== (switch_value =
      /*$secondaryPane*/
      ctx[5].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },

    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },

    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      if (switch_instance) destroy_component(switch_instance);
    }

  };
} // (186:4) {#if showToggleButton}


function create_if_block_1$7(ctx) {
  let button;
  let span;
  let chevron;
  let button_intro;
  let button_outro;
  let current;
  let mounted;
  let dispose;
  chevron = new FaChevronRight({});
  return {
    c() {
      button = element("button");
      span = element("span");
      create_component(chevron.$$.fragment);
      attr(span, "class", "icon svelte-8ymctk");
      attr(span, "aria-hidden", "true");
      attr(button, "class", "visibility-toggle opener svelte-8ymctk");
      attr(button, "title", "Show Debug Panel");
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, span);
      mount_component(chevron, span, null);
      current = true;

      if (!mounted) {
        dispose = listen(button, "click",
        /*ToggleVisibility*/
        ctx[9]);
        mounted = true;
      }
    },

    p: noop,

    i(local) {
      if (current) return;
      transition_in(chevron.$$.fragment, local);
      add_render_callback(() => {
        if (button_outro) button_outro.end(1);
        button_intro = create_in_transition(button,
        /*receive*/
        ctx[14], {
          key: 'toggle'
        });
        button_intro.start();
      });
      current = true;
    },

    o(local) {
      transition_out(chevron.$$.fragment, local);
      if (button_intro) button_intro.invalidate();
      button_outro = create_out_transition(button,
      /*send*/
      ctx[13], {
        key: 'toggle'
      });
      current = false;
    },

    d(detaching) {
      if (detaching) detach(button);
      destroy_component(chevron);
      if (detaching && button_outro) button_outro.end();
      mounted = false;
      dispose();
    }

  };
}

function create_fragment$z(ctx) {
  let section;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$e, create_else_block$4];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (!
    /*visible*/
    ctx[3]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      section = element("section");
      if_block.c();
      attr(section, "aria-label", "boardgame.io Debug Panel");
      attr(section, "class", "debug-panel svelte-8ymctk");
    },

    m(target, anchor) {
      insert(target, section, anchor);
      if_blocks[current_block_type_index].m(section, null);
      current = true;

      if (!mounted) {
        dispose = listen(window, "keypress",
        /*Keypress*/
        ctx[11]);
        mounted = true;
      }
    },

    p(ctx, _ref38) {
      let [dirty] = _ref38;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(section, null);
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(section);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }

  };
}

function instance$z($$self, $$props, $$invalidate) {
  let client;

  let $clientManager,
      $$unsubscribe_clientManager = noop,
      $$subscribe_clientManager = () => ($$unsubscribe_clientManager(), $$unsubscribe_clientManager = subscribe(clientManager, $$value => $$invalidate(15, $clientManager = $$value)), clientManager);

  let $secondaryPane;
  $$self.$$.on_destroy.push(() => $$unsubscribe_clientManager());
  let {
    clientManager
  } = $$props;
  $$subscribe_clientManager();
  const panes = {
    main: {
      label: 'Main',
      shortcut: 'm',
      component: Main
    },
    log: {
      label: 'Log',
      shortcut: 'l',
      component: Log
    },
    info: {
      label: 'Info',
      shortcut: 'i',
      component: Info
    },
    ai: {
      label: 'AI',
      shortcut: 'a',
      component: AI
    }
  };
  const disableHotkeys = writable(false);
  const secondaryPane = writable(null);
  component_subscribe($$self, secondaryPane, value => $$invalidate(5, $secondaryPane = value));
  setContext('hotkeys', {
    disableHotkeys
  });
  setContext('secondaryPane', {
    secondaryPane
  });
  let paneDiv;
  let pane = 'main';

  function MenuChange(e) {
    $$invalidate(2, pane = e.detail);
    paneDiv.focus();
  } // Toggle debugger visibilty


  function ToggleVisibility() {
    $$invalidate(3, visible = !visible);
  }

  const debugOpt = $clientManager.client.debugOpt;
  let visible = !debugOpt || !debugOpt.collapseOnLoad;
  const showToggleButton = !debugOpt || !debugOpt.hideToggleButton;

  function Keypress(e) {
    if (e.key == '.') {
      ToggleVisibility();
      return;
    } // Set displayed pane


    if (!visible) return;
    Object.entries(panes).forEach(_ref39 => {
      let [key, {
        shortcut
      }] = _ref39;

      if (e.key == shortcut) {
        $$invalidate(2, pane = key);
      }
    });
  }

  const transitionOpts = {
    duration: 150,
    easing: cubicOut
  };
  const [send, receive] = crossfade(transitionOpts);

  function div0_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](() => {
      paneDiv = $$value;
      $$invalidate(1, paneDiv);
    });
  }

  $$self.$$set = $$props => {
    if ('clientManager' in $$props) $$subscribe_clientManager($$invalidate(0, clientManager = $$props.clientManager));
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$clientManager*/
    32768) {
      $$invalidate(4, client = $clientManager.client);
    }
  };

  return [clientManager, paneDiv, pane, visible, client, $secondaryPane, panes, secondaryPane, MenuChange, ToggleVisibility, showToggleButton, Keypress, transitionOpts, send, receive, $clientManager, div0_binding];
}

class Debug extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$z, create_fragment$z, safe_not_equal, {
      clientManager: 0
    }, add_css$q);
  }

}

exports.D = Debug;
},{"./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js","flatted":"node_modules/flatted/esm/index.js","./ai-3099ce9a.js":"node_modules/boardgame.io/dist/esm/ai-3099ce9a.js"}],"node_modules/@babel/runtime/helpers/esm/defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _defineProperty;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
},{}],"node_modules/@babel/runtime/helpers/esm/objectSpread2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectSpread2;

var _defineProperty = _interopRequireDefault(require("./defineProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0, _defineProperty.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
},{"./defineProperty.js":"node_modules/@babel/runtime/helpers/esm/defineProperty.js"}],"node_modules/redux/es/redux.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__DO_NOT_USE__ActionTypes = void 0;
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;
exports.legacy_createStore = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
} // Inlined version of the `symbol-observable` polyfill


var $$observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */


var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

exports.__DO_NOT_USE__ActionTypes = ActionTypes;

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
} // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of


function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if ("development" !== 'production') {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error("development" === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error("development" === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error("development" === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error("development" === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error("development" === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */

exports.legacy_createStore = legacy_createStore;

function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if ("development" !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if ("development" !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if ("development" !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error("development" === "production" ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("development" === "production" ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("development" === "production" ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}
},{"@babel/runtime/helpers/esm/objectSpread2":"node_modules/@babel/runtime/helpers/esm/objectSpread2.js"}],"node_modules/boardgame.io/dist/esm/initialize-9ac1bbf5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I = InitializeGame;

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _reducer07c7b = require("./reducer-07c7b307.js");

/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Creates the initial game state.
 */
function InitializeGame(_ref) {
  let {
    game,
    numPlayers,
    setupData
  } = _ref;
  game = (0, _reducer07c7b.P)(game);

  if (!numPlayers) {
    numPlayers = 2;
  }

  const ctx = game.flow.ctx(numPlayers);
  let state = {
    // User managed state.
    G: {},
    // Framework managed state.
    ctx,
    // Plugin related state.
    plugins: {}
  }; // Run plugins over initial state.

  state = (0, _turnOrder0b7dce3d.t)(state, {
    game
  });
  state = (0, _turnOrder0b7dce3d.m)(state, {
    game,
    playerID: undefined
  });
  const enhancedCtx = (0, _turnOrder0b7dce3d.E)(state);
  state.G = game.setup(enhancedCtx, setupData);
  let initial = { ...state,
    // List of {G, ctx} pairs that can be undone.
    _undo: [],
    // List of {G, ctx} pairs that can be redone.
    _redo: [],
    // A monotonically non-decreasing ID to ensure that
    // state updates are only allowed from clients that
    // are at the same version that the server.
    _stateID: 0
  };
  initial = game.flow.init(initial);
  [initial] = (0, _turnOrder0b7dce3d.q)(initial, {
    game
  }); // Initialize undo stack.

  if (!game.disableUndo) {
    initial._undo = [{
      G: initial.G,
      ctx: initial.ctx,
      plugins: initial.plugins
    }];
  }

  return initial;
}
},{"./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js"}],"node_modules/boardgame.io/dist/esm/transport-ce07b771.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = void 0;

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
class Transport {
  constructor(_ref) {
    let {
      transportDataCallback,
      gameName,
      playerID,
      matchID,
      credentials,
      numPlayers
    } = _ref;

    /** Callback to let the client know when the connection status has changed. */
    this.connectionStatusCallback = () => {};

    this.isConnected = false;
    this.transportDataCallback = transportDataCallback;
    this.gameName = gameName || 'default';
    this.playerID = playerID || null;
    this.matchID = matchID || 'default';
    this.credentials = credentials;
    this.numPlayers = numPlayers || 2;
  }
  /** Subscribe to connection state changes. */


  subscribeToConnectionStatus(fn) {
    this.connectionStatusCallback = fn;
  }
  /** Transport implementations should call this when they connect/disconnect. */


  setConnectionStatus(isConnected) {
    this.isConnected = isConnected;
    this.connectionStatusCallback();
  }
  /** Transport implementations should call this when they receive data from a master. */


  notifyClient(data) {
    this.transportDataCallback(data);
  }

}

exports.T = Transport;
},{}],"node_modules/boardgame.io/dist/esm/client-fa36c03a.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C = Client;

var _nonSecure = require("nanoid/non-secure");

var _DebugFd09b8bc = require("./Debug-fd09b8bc.js");

var _redux = require("redux");

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _reducer07c7b = require("./reducer-07c7b307.js");

var _initialize9ac1bbf = require("./initialize-9ac1bbf5.js");

var _transportCe07b = require("./transport-ce07b771.js");

/**
 * This class doesn’t do anything, but simplifies the client class by providing
 * dummy functions to call, so we don’t need to mock them in the client.
 */
class DummyImpl extends _transportCe07b.T {
  connect() {}

  disconnect() {}

  sendAction() {}

  sendChatMessage() {}

  requestSync() {}

  updateCredentials() {}

  updateMatchID() {}

  updatePlayerID() {}

}

const DummyTransport = opts => new DummyImpl(opts);
/**
 * Class to manage boardgame.io clients and limit debug panel rendering.
 */


class ClientManager {
  constructor() {
    this.debugPanel = null;
    this.currentClient = null;
    this.clients = new Map();
    this.subscribers = new Map();
  }
  /**
   * Register a client with the client manager.
   */


  register(client) {
    // Add client to clients map.
    this.clients.set(client, client); // Mount debug for this client (no-op if another debug is already mounted).

    this.mountDebug(client);
    this.notifySubscribers();
  }
  /**
   * Unregister a client from the client manager.
   */


  unregister(client) {
    // Remove client from clients map.
    this.clients.delete(client);

    if (this.currentClient === client) {
      // If the removed client owned the debug panel, unmount it.
      this.unmountDebug(); // Mount debug panel for next available client.

      for (const [client] of this.clients) {
        if (this.debugPanel) break;
        this.mountDebug(client);
      }
    }

    this.notifySubscribers();
  }
  /**
   * Subscribe to the client manager state.
   * Calls the passed callback each time the current client changes or a client
   * registers/unregisters.
   * Returns a function to unsubscribe from the state updates.
   */


  subscribe(callback) {
    const id = Symbol();
    this.subscribers.set(id, callback);
    callback(this.getState());
    return () => {
      this.subscribers.delete(id);
    };
  }
  /**
   * Switch to a client with a matching playerID.
   */


  switchPlayerID(playerID) {
    // For multiplayer clients, try switching control to a different client
    // that is using the same transport layer.
    if (this.currentClient.multiplayer) {
      for (const [client] of this.clients) {
        if (client.playerID === playerID && client.debugOpt !== false && client.multiplayer === this.currentClient.multiplayer) {
          this.switchToClient(client);
          return;
        }
      }
    } // If no client matches, update the playerID for the current client.


    this.currentClient.updatePlayerID(playerID);
    this.notifySubscribers();
  }
  /**
   * Set the passed client as the active client for debugging.
   */


  switchToClient(client) {
    if (client === this.currentClient) return;
    this.unmountDebug();
    this.mountDebug(client);
    this.notifySubscribers();
  }
  /**
   * Notify all subscribers of changes to the client manager state.
   */


  notifySubscribers() {
    const arg = this.getState();
    this.subscribers.forEach(cb => {
      cb(arg);
    });
  }
  /**
   * Get the client manager state.
   */


  getState() {
    return {
      client: this.currentClient,
      debuggableClients: this.getDebuggableClients()
    };
  }
  /**
   * Get an array of the registered clients that haven’t disabled the debug panel.
   */


  getDebuggableClients() {
    return [...this.clients.values()].filter(client => client.debugOpt !== false);
  }
  /**
   * Mount the debug panel using the passed client.
   */


  mountDebug(client) {
    if (client.debugOpt === false || this.debugPanel !== null || typeof document === 'undefined') {
      return;
    }

    let DebugImpl;
    let target = document.body;

    if ("development" !== 'production') {
      DebugImpl = _DebugFd09b8bc.D;
    }

    if (client.debugOpt && client.debugOpt !== true) {
      DebugImpl = client.debugOpt.impl || DebugImpl;
      target = client.debugOpt.target || target;
    }

    if (DebugImpl) {
      this.currentClient = client;
      this.debugPanel = new DebugImpl({
        target,
        props: {
          clientManager: this
        }
      });
    }
  }
  /**
   * Unmount the debug panel.
   */


  unmountDebug() {
    this.debugPanel.$destroy();
    this.debugPanel = null;
    this.currentClient = null;
  }

}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Global client manager instance that all clients register with.
 */


const GlobalClientManager = new ClientManager();
/**
 * Standardise the passed playerID, using currentPlayer if appropriate.
 */

function assumedPlayerID(playerID, store, multiplayer) {
  // In singleplayer mode, if the client does not have a playerID
  // associated with it, we attach the currentPlayer as playerID.
  if (!multiplayer && (playerID === null || playerID === undefined)) {
    const state = store.getState();
    playerID = state.ctx.currentPlayer;
  }

  return playerID;
}
/**
 * createDispatchers
 *
 * Create action dispatcher wrappers with bound playerID and credentials
 */


function createDispatchers(storeActionType, innerActionNames, store, playerID, credentials, multiplayer) {
  const dispatchers = {};

  for (const name of innerActionNames) {
    dispatchers[name] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const action = _turnOrder0b7dce3d.A[storeActionType](name, args, assumedPlayerID(playerID, store, multiplayer), credentials);

      store.dispatch(action);
    };
  }

  return dispatchers;
} // Creates a set of dispatchers to make moves.


const createMoveDispatchers = createDispatchers.bind(null, 'makeMove'); // Creates a set of dispatchers to dispatch game flow events.

const createEventDispatchers = createDispatchers.bind(null, 'gameEvent'); // Creates a set of dispatchers to dispatch actions to plugins.

const createPluginDispatchers = createDispatchers.bind(null, 'plugin');
/**
 * Implementation of Client (see below).
 */

class _ClientImpl {
  constructor(_ref) {
    let {
      game,
      debug,
      numPlayers,
      multiplayer,
      matchID: matchID,
      playerID,
      credentials,
      enhancer
    } = _ref;
    this.game = (0, _reducer07c7b.P)(game);
    this.playerID = playerID;
    this.matchID = matchID || 'default';
    this.credentials = credentials;
    this.multiplayer = multiplayer;
    this.debugOpt = debug;
    this.manager = GlobalClientManager;
    this.gameStateOverride = null;
    this.subscribers = {};
    this._running = false;
    this.reducer = (0, _reducer07c7b.C)({
      game: this.game,
      isClient: multiplayer !== undefined
    });
    this.initialState = null;

    if (!multiplayer) {
      this.initialState = (0, _initialize9ac1bbf.I)({
        game: this.game,
        numPlayers
      });
    }

    this.reset = () => {
      this.store.dispatch((0, _turnOrder0b7dce3d.u)(this.initialState));
    };

    this.undo = () => {
      const undo$1 = (0, _turnOrder0b7dce3d.v)(assumedPlayerID(this.playerID, this.store, this.multiplayer), this.credentials);
      this.store.dispatch(undo$1);
    };

    this.redo = () => {
      const redo$1 = (0, _turnOrder0b7dce3d.w)(assumedPlayerID(this.playerID, this.store, this.multiplayer), this.credentials);
      this.store.dispatch(redo$1);
    };

    this.log = [];
    /**
     * Middleware that manages the log object.
     * Reducers generate deltalogs, which are log events
     * that are the result of application of a single action.
     * The master may also send back a deltalog or the entire
     * log depending on the type of request.
     * The middleware below takes care of all these cases while
     * managing the log object.
     */

    const LogMiddleware = store => next => action => {
      const result = next(action);
      const state = store.getState();

      switch (action.type) {
        case _turnOrder0b7dce3d.M:
        case _turnOrder0b7dce3d.o:
        case _turnOrder0b7dce3d.h:
        case _turnOrder0b7dce3d.R:
          {
            const deltalog = state.deltalog;
            this.log = [...this.log, ...deltalog];
            break;
          }

        case _turnOrder0b7dce3d.l:
          {
            this.log = [];
            break;
          }

        case _turnOrder0b7dce3d.P:
        case _turnOrder0b7dce3d.k:
          {
            let id = -1;

            if (this.log.length > 0) {
              id = this.log[this.log.length - 1]._stateID;
            }

            let deltalog = action.deltalog || []; // Filter out actions that are already present
            // in the current log. This may occur when the
            // client adds an entry to the log followed by
            // the update from the master here.

            deltalog = deltalog.filter(l => l._stateID > id);
            this.log = [...this.log, ...deltalog];
            break;
          }

        case _turnOrder0b7dce3d.j:
          {
            this.initialState = action.initialState;
            this.log = action.log || [];
            break;
          }
      }

      return result;
    };
    /**
     * Middleware that intercepts actions and sends them to the master,
     * which keeps the authoritative version of the state.
     */


    const TransportMiddleware = store => next => action => {
      const baseState = store.getState();
      const result = next(action);

      if (!('clientOnly' in action) && action.type !== _turnOrder0b7dce3d.p) {
        this.transport.sendAction(baseState, action);
      }

      return result;
    };
    /**
     * Middleware that intercepts actions and invokes the subscription callback.
     */


    const SubscriptionMiddleware = () => next => action => {
      const result = next(action);
      this.notifySubscribers();
      return result;
    };

    const middleware = (0, _redux.applyMiddleware)(_reducer07c7b.T, SubscriptionMiddleware, TransportMiddleware, LogMiddleware);
    enhancer = enhancer !== undefined ? (0, _redux.compose)(middleware, enhancer) : middleware;
    this.store = (0, _redux.createStore)(this.reducer, this.initialState, enhancer);
    if (!multiplayer) multiplayer = DummyTransport;
    this.transport = multiplayer({
      transportDataCallback: data => this.receiveTransportData(data),
      gameKey: game,
      game: this.game,
      matchID,
      playerID,
      credentials,
      gameName: this.game.name,
      numPlayers
    });
    this.createDispatchers();
    this.chatMessages = [];

    this.sendChatMessage = payload => {
      this.transport.sendChatMessage(this.matchID, {
        id: (0, _nonSecure.nanoid)(7),
        sender: this.playerID,
        payload: payload
      });
    };
  }
  /** Handle incoming match data from a multiplayer transport. */


  receiveMatchData(matchData) {
    this.matchData = matchData;
    this.notifySubscribers();
  }
  /** Handle an incoming chat message from a multiplayer transport. */


  receiveChatMessage(message) {
    this.chatMessages = [...this.chatMessages, message];
    this.notifySubscribers();
  }
  /** Handle all incoming updates from a multiplayer transport. */


  receiveTransportData(data) {
    const [matchID] = data.args;
    if (matchID !== this.matchID) return;

    switch (data.type) {
      case 'sync':
        {
          const [, syncInfo] = data.args;
          const action = (0, _turnOrder0b7dce3d.s)(syncInfo);
          this.receiveMatchData(syncInfo.filteredMetadata);
          this.store.dispatch(action);
          break;
        }

      case 'update':
        {
          const [, state, deltalog] = data.args;
          const currentState = this.store.getState();

          if (state._stateID >= currentState._stateID) {
            const action = (0, _turnOrder0b7dce3d.z)(state, deltalog);
            this.store.dispatch(action);
          }

          break;
        }

      case 'patch':
        {
          const [, prevStateID, stateID, patch$1, deltalog] = data.args;

          const currentStateID = this.store.getState()._stateID;

          if (prevStateID !== currentStateID) break;
          const action = (0, _turnOrder0b7dce3d.y)(prevStateID, stateID, patch$1, deltalog);
          this.store.dispatch(action); // Emit sync if patch apply failed.

          if (this.store.getState()._stateID === currentStateID) {
            this.transport.requestSync();
          }

          break;
        }

      case 'matchData':
        {
          const [, matchData] = data.args;
          this.receiveMatchData(matchData);
          break;
        }

      case 'chat':
        {
          const [, chatMessage] = data.args;
          this.receiveChatMessage(chatMessage);
          break;
        }
    }
  }

  notifySubscribers() {
    Object.values(this.subscribers).forEach(fn => fn(this.getState()));
  }

  overrideGameState(state) {
    this.gameStateOverride = state;
    this.notifySubscribers();
  }

  start() {
    this.transport.connect();
    this._running = true;
    this.manager.register(this);
  }

  stop() {
    this.transport.disconnect();
    this._running = false;
    this.manager.unregister(this);
  }

  subscribe(fn) {
    const id = Object.keys(this.subscribers).length;
    this.subscribers[id] = fn;
    this.transport.subscribeToConnectionStatus(() => this.notifySubscribers());

    if (this._running || !this.multiplayer) {
      fn(this.getState());
    } // Return a handle that allows the caller to unsubscribe.


    return () => {
      delete this.subscribers[id];
    };
  }

  getInitialState() {
    return this.initialState;
  }

  getState() {
    let state = this.store.getState();

    if (this.gameStateOverride !== null) {
      state = this.gameStateOverride;
    } // This is the state before a sync with the game master.


    if (state === null) {
      return state;
    } // isActive.


    let isActive = true;
    const isPlayerActive = this.game.flow.isPlayerActive(state.G, state.ctx, this.playerID);

    if (this.multiplayer && !isPlayerActive) {
      isActive = false;
    }

    if (!this.multiplayer && this.playerID !== null && this.playerID !== undefined && !isPlayerActive) {
      isActive = false;
    }

    if (state.ctx.gameover !== undefined) {
      isActive = false;
    } // Secrets are normally stripped on the server,
    // but we also strip them here so that game developers
    // can see their effects while prototyping.
    // Do not strip again if this is a multiplayer game
    // since the server has already stripped secret info. (issue #818)


    if (!this.multiplayer) {
      state = { ...state,
        G: this.game.playerView(state.G, state.ctx, this.playerID),
        plugins: (0, _turnOrder0b7dce3d.x)(state, this)
      };
    } // Combine into return value.


    return { ...state,
      log: this.log,
      isActive,
      isConnected: this.transport.isConnected
    };
  }

  createDispatchers() {
    this.moves = createMoveDispatchers(this.game.moveNames, this.store, this.playerID, this.credentials, this.multiplayer);
    this.events = createEventDispatchers(this.game.flow.enabledEventNames, this.store, this.playerID, this.credentials, this.multiplayer);
    this.plugins = createPluginDispatchers(this.game.pluginNames, this.store, this.playerID, this.credentials, this.multiplayer);
  }

  updatePlayerID(playerID) {
    this.playerID = playerID;
    this.createDispatchers();
    this.transport.updatePlayerID(playerID);
    this.notifySubscribers();
  }

  updateMatchID(matchID) {
    this.matchID = matchID;
    this.createDispatchers();
    this.transport.updateMatchID(matchID);
    this.notifySubscribers();
  }

  updateCredentials(credentials) {
    this.credentials = credentials;
    this.createDispatchers();
    this.transport.updateCredentials(credentials);
    this.notifySubscribers();
  }

}
/**
 * Client
 *
 * boardgame.io JS client.
 *
 * @param {...object} game - The return value of `Game`.
 * @param {...object} numPlayers - The number of players.
 * @param {...object} multiplayer - Set to a falsy value or a transportFactory, e.g., SocketIO()
 * @param {...object} matchID - The matchID that you want to connect to.
 * @param {...object} playerID - The playerID associated with this client.
 * @param {...string} credentials - The authentication credentials associated with this client.
 *
 * Returns:
 *   A JS object that provides an API to interact with the
 *   game by dispatching moves and events.
 */


function Client(opts) {
  return new _ClientImpl(opts);
}
},{"nanoid/non-secure":"node_modules/nanoid/non-secure/index.js","./Debug-fd09b8bc.js":"node_modules/boardgame.io/dist/esm/Debug-fd09b8bc.js","redux":"node_modules/redux/es/redux.js","./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js","./initialize-9ac1bbf5.js":"node_modules/boardgame.io/dist/esm/initialize-9ac1bbf5.js","./transport-ce07b771.js":"node_modules/boardgame.io/dist/esm/transport-ce07b771.js"}],"node_modules/boardgame.io/dist/esm/client-5f57c3f2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = exports.L = void 0;

const assertString = (str, label) => {
  if (!str || typeof str !== 'string') {
    throw new Error("Expected ".concat(label, " string, got \"").concat(str, "\"."));
  }
};

const assertGameName = name => assertString(name, 'game name');

const assertMatchID = id => assertString(id, 'match ID');

const validateBody = (body, schema) => {
  if (!body) throw new Error("Expected body, got \u201C".concat(body, "\u201D."));

  for (const key in schema) {
    const propSchema = schema[key];
    const types = Array.isArray(propSchema) ? propSchema : [propSchema];
    const received = body[key];

    if (!types.includes(typeof received)) {
      const union = types.join('|');
      throw new TypeError("Expected body.".concat(key, " to be of type ").concat(union, ", got \u201C").concat(received, "\u201D."));
    }
  }
};

class LobbyClientError extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
  }

}
/**
 * Create a boardgame.io Lobby API client.
 * @param server The API’s base URL, e.g. `http://localhost:8000`.
 */


exports.a = LobbyClientError;

class LobbyClient {
  constructor() {
    let {
      server = ''
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // strip trailing slash if passed
    this.server = server.replace(/\/$/, '');
  }

  async request(route, init) {
    const response = await fetch(this.server + route, init);

    if (!response.ok) {
      let details;

      try {
        details = await response.clone().json();
      } catch {
        try {
          details = await response.text();
        } catch (error) {
          details = error.message;
        }
      }

      throw new LobbyClientError("HTTP status ".concat(response.status), details);
    }

    return response.json();
  }

  async post(route, opts) {
    let init = {
      method: 'post',
      body: JSON.stringify(opts.body),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (opts.init) init = { ...init,
      ...opts.init,
      headers: { ...init.headers,
        ...opts.init.headers
      }
    };
    return this.request(route, init);
  }
  /**
   * Get a list of the game names available on this server.
   * @param  init Optional RequestInit interface to override defaults.
   * @return Array of game names.
   *
   * @example
   * lobbyClient.listGames()
   *   .then(console.log); // => ['chess', 'tic-tac-toe']
   */


  async listGames(init) {
    return this.request('/games', init);
  }
  /**
   * Get a list of the matches for a specific game type on the server.
   * @param  gameName The game to list for, e.g. 'tic-tac-toe'.
   * @param  where    Options to filter matches by update time or gameover state
   * @param  init     Optional RequestInit interface to override defaults.
   * @return Array of match metadata objects.
   *
   * @example
   * lobbyClient.listMatches('tic-tac-toe', where: { isGameover: false })
   *   .then(data => console.log(data.matches));
   * // => [
   * //   {
   * //     matchID: 'xyz',
   * //     gameName: 'tic-tac-toe',
   * //     players: [{ id: 0, name: 'Alice' }, { id: 1 }]
   * //   },
   * //   ...
   * // ]
   */


  async listMatches(gameName, where, init) {
    assertGameName(gameName);
    let query = '';

    if (where) {
      const queries = [];
      const {
        isGameover,
        updatedBefore,
        updatedAfter
      } = where;
      if (isGameover !== undefined) queries.push("isGameover=".concat(isGameover));
      if (updatedBefore) queries.push("updatedBefore=".concat(updatedBefore));
      if (updatedAfter) queries.push("updatedAfter=".concat(updatedAfter));
      if (queries.length > 0) query = '?' + queries.join('&');
    }

    return this.request("/games/".concat(gameName).concat(query), init);
  }
  /**
   * Get metadata for a specific match.
   * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
   * @param  matchID  Match ID for the match to fetch.
   * @param  init     Optional RequestInit interface to override defaults.
   * @return A match metadata object.
   *
   * @example
   * lobbyClient.getMatch('tic-tac-toe', 'xyz').then(console.log);
   * // => {
   * //   matchID: 'xyz',
   * //   gameName: 'tic-tac-toe',
   * //   players: [{ id: 0, name: 'Alice' }, { id: 1 }]
   * // }
   */


  async getMatch(gameName, matchID, init) {
    assertGameName(gameName);
    assertMatchID(matchID);
    return this.request("/games/".concat(gameName, "/").concat(matchID), init);
  }
  /**
   * Create a new match for a specific game type.
   * @param  gameName The game to create a match for, e.g. 'tic-tac-toe'.
   * @param  body     Options required to configure match creation.
   * @param  init     Optional RequestInit interface to override defaults.
   * @return An object containing the created `matchID`.
   *
   * @example
   * lobbyClient.createMatch('tic-tac-toe', { numPlayers: 2 })
   *   .then(console.log);
   * // => { matchID: 'xyz' }
   */


  async createMatch(gameName, body, init) {
    assertGameName(gameName);
    validateBody(body, {
      numPlayers: 'number'
    });
    return this.post("/games/".concat(gameName, "/create"), {
      body,
      init
    });
  }
  /**
   * Join a match using its matchID.
   * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
   * @param  matchID  Match ID for the match to join.
   * @param  body     Options required to join match.
   * @param  init     Optional RequestInit interface to override defaults.
   * @return Object containing `playerCredentials` for the player who joined.
   *
   * @example
   * lobbyClient.joinMatch('tic-tac-toe', 'xyz', {
   *   playerID: '1',
   *   playerName: 'Bob',
   * }).then(console.log);
   * // => { playerID: '1', playerCredentials: 'random-string' }
   */


  async joinMatch(gameName, matchID, body, init) {
    assertGameName(gameName);
    assertMatchID(matchID);
    validateBody(body, {
      playerID: ['string', 'undefined'],
      playerName: 'string'
    });
    return this.post("/games/".concat(gameName, "/").concat(matchID, "/join"), {
      body,
      init
    });
  }
  /**
   * Leave a previously joined match.
   * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
   * @param  matchID  Match ID for the match to leave.
   * @param  body     Options required to leave match.
   * @param  init     Optional RequestInit interface to override defaults.
   * @return Promise resolves if successful.
   *
   * @example
   * lobbyClient.leaveMatch('tic-tac-toe', 'xyz', {
   *   playerID: '1',
   *   credentials: 'credentials-returned-when-joining',
   * })
   *   .then(() => console.log('Left match.'))
   *   .catch(error => console.error('Error leaving match', error));
   */


  async leaveMatch(gameName, matchID, body, init) {
    assertGameName(gameName);
    assertMatchID(matchID);
    validateBody(body, {
      playerID: 'string',
      credentials: 'string'
    });
    await this.post("/games/".concat(gameName, "/").concat(matchID, "/leave"), {
      body,
      init
    });
  }
  /**
   * Update a player’s name or custom metadata.
   * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
   * @param  matchID  Match ID for the match to update.
   * @param  body     Options required to update player.
   * @param  init     Optional RequestInit interface to override defaults.
   * @return Promise resolves if successful.
   *
   * @example
   * lobbyClient.updatePlayer('tic-tac-toe', 'xyz', {
   *   playerID: '0',
   *   credentials: 'credentials-returned-when-joining',
   *   newName: 'Al',
   * })
   *   .then(() => console.log('Updated player data.'))
   *   .catch(error => console.error('Error updating data', error));
   */


  async updatePlayer(gameName, matchID, body, init) {
    assertGameName(gameName);
    assertMatchID(matchID);
    validateBody(body, {
      playerID: 'string',
      credentials: 'string'
    });
    await this.post("/games/".concat(gameName, "/").concat(matchID, "/update"), {
      body,
      init
    });
  }
  /**
   * Create a new match based on the configuration of the current match.
   * @param  gameName The match’s game type, e.g. 'tic-tac-toe'.
   * @param  matchID  Match ID for the match to play again.
   * @param  body     Options required to configure match.
   * @param  init     Optional RequestInit interface to override defaults.
   * @return Object containing `nextMatchID`.
   *
   * @example
   * lobbyClient.playAgain('tic-tac-toe', 'xyz', {
   *   playerID: '0',
   *   credentials: 'credentials-returned-when-joining',
   * })
   *   .then(({ nextMatchID }) => {
   *     return lobbyClient.joinMatch('tic-tac-toe', nextMatchID, {
   *       playerID: '0',
   *       playerName: 'Al',
   *     })
   *   })
   *   .then({ playerCredentials } => {
   *     console.log(playerCredentials);
   *   })
   *   .catch(console.error);
   */


  async playAgain(gameName, matchID, body, init) {
    assertGameName(gameName);
    assertMatchID(matchID);
    validateBody(body, {
      playerID: 'string',
      credentials: 'string'
    });
    return this.post("/games/".concat(gameName, "/").concat(matchID, "/playAgain"), {
      body,
      init
    });
  }

}

exports.L = LobbyClient;
},{}],"node_modules/boardgame.io/dist/esm/client.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Client", {
  enumerable: true,
  get: function () {
    return _clientFa36c03a.C;
  }
});
Object.defineProperty(exports, "LobbyClient", {
  enumerable: true,
  get: function () {
    return _client5f57c3f.L;
  }
});
Object.defineProperty(exports, "LobbyClientError", {
  enumerable: true,
  get: function () {
    return _client5f57c3f.a;
  }
});

require("nanoid/non-secure");

require("./Debug-fd09b8bc.js");

require("redux");

require("./turn-order-0b7dce3d.js");

require("immer");

require("./plugin-random-087f861e.js");

require("lodash.isplainobject");

require("./reducer-07c7b307.js");

require("rfc6902");

require("./initialize-9ac1bbf5.js");

require("./transport-ce07b771.js");

var _clientFa36c03a = require("./client-fa36c03a.js");

require("flatted");

require("setimmediate");

require("./ai-3099ce9a.js");

var _client5f57c3f = require("./client-5f57c3f2.js");
},{"nanoid/non-secure":"node_modules/nanoid/non-secure/index.js","./Debug-fd09b8bc.js":"node_modules/boardgame.io/dist/esm/Debug-fd09b8bc.js","redux":"node_modules/redux/es/redux.js","./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","immer":"node_modules/immer/dist/immer.esm.js","./plugin-random-087f861e.js":"node_modules/boardgame.io/dist/esm/plugin-random-087f861e.js","lodash.isplainobject":"node_modules/lodash.isplainobject/index.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js","rfc6902":"node_modules/rfc6902/index.js","./initialize-9ac1bbf5.js":"node_modules/boardgame.io/dist/esm/initialize-9ac1bbf5.js","./transport-ce07b771.js":"node_modules/boardgame.io/dist/esm/transport-ce07b771.js","./client-fa36c03a.js":"node_modules/boardgame.io/dist/esm/client-fa36c03a.js","flatted":"node_modules/flatted/esm/index.js","setimmediate":"node_modules/setimmediate/setImmediate.js","./ai-3099ce9a.js":"node_modules/boardgame.io/dist/esm/ai-3099ce9a.js","./client-5f57c3f2.js":"node_modules/boardgame.io/dist/esm/client-5f57c3f2.js"}],"node_modules/boardgame.io/dist/esm/core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ActivePlayers", {
  enumerable: true,
  get: function () {
    return _turnOrder0b7dce3d.C;
  }
});
Object.defineProperty(exports, "GameMethod", {
  enumerable: true,
  get: function () {
    return _turnOrder0b7dce3d.G;
  }
});
Object.defineProperty(exports, "INVALID_MOVE", {
  enumerable: true,
  get: function () {
    return _turnOrder0b7dce3d.n;
  }
});
exports.PlayerView = void 0;
Object.defineProperty(exports, "Stage", {
  enumerable: true,
  get: function () {
    return _turnOrder0b7dce3d.S;
  }
});
Object.defineProperty(exports, "TurnOrder", {
  enumerable: true,
  get: function () {
    return _turnOrder0b7dce3d.T;
  }
});

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

require("immer");

require("./plugin-random-087f861e.js");

require("lodash.isplainobject");

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * PlayerView reducers.
 */
const PlayerView = {
  /**
   * STRIP_SECRETS
   *
   * Reducer which removes a key named `secret` and
   * removes all the keys in `players`, except for the one
   * corresponding to the current playerID.
   */
  STRIP_SECRETS: (G, ctx, playerID) => {
    const r = { ...G
    };

    if (r.secret !== undefined) {
      delete r.secret;
    }

    if (r.players) {
      r.players = playerID ? {
        [playerID]: r.players[playerID]
      } : {};
    }

    return r;
  }
};
exports.PlayerView = PlayerView;
},{"./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","immer":"node_modules/immer/dist/immer.esm.js","./plugin-random-087f861e.js":"node_modules/boardgame.io/dist/esm/plugin-random-087f861e.js","lodash.isplainobject":"node_modules/lodash.isplainobject/index.js"}],"src/Game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = void 0;

var _core = require("boardgame.io/core");

const Example = {
  setup: () => ({
    cells: Array(9).fill(null)
  }),
  turn: {
    minMoves: 1,
    maxMoves: 1
  },
  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id] !== null) {
        return _core.INVALID_MOVE;
      }

      G.cells[id] = ctx.currentPlayer;
    }
  },
  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return {
        winner: ctx.currentPlayer
      };
    }

    if (IsDraw(G.cells)) {
      return {
        draw: true
      };
    }
  }
};
exports.Example = Example;

function IsVictory(cells) {
  const position = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const isRowComplete = row => {
    const symbols = row.map(i => cells[i]);
    return symbols.every(i => i !== null && i === symbols[0]);
  };

  return position.map(isRowComplete).some(i => i === true);
}

function IsDraw(cells) {
  return cells.filter(c => c === null).length === 0;
}
},{"boardgame.io/core":"node_modules/boardgame.io/dist/esm/core.js"}],"node_modules/boardgame.io/dist/esm/util-b1699aa1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.c = exports.S = exports.A = void 0;
exports.i = isSynchronous;

var _initialize9ac1bbf = require("./initialize-9ac1bbf5.js");

var Type;

(function (Type) {
  Type[Type["SYNC"] = 0] = "SYNC";
  Type[Type["ASYNC"] = 1] = "ASYNC";
})(Type || (Type = {}));
/**
 * Type guard that checks if a storage implementation is synchronous.
 */


function isSynchronous(storageAPI) {
  return storageAPI.type() === Type.SYNC;
}

class Async {
  /* istanbul ignore next */
  type() {
    /* istanbul ignore next */
    return Type.ASYNC;
  }
  /**
   * Create a new match.
   *
   * This might just need to call setState and setMetadata in
   * most implementations.
   *
   * However, it exists as a separate call so that the
   * implementation can provision things differently when
   * a match is created.  For example, it might stow away the
   * initial match state in a separate field for easier retrieval.
   */

  /* istanbul ignore next */


  async createMatch(matchID, opts) {
    if (this.createGame) {
      console.warn('The database connector does not implement a createMatch method.', '\nUsing the deprecated createGame method instead.');
      return this.createGame(matchID, opts);
    } else {
      console.error('The database connector does not implement a createMatch method.');
    }
  }
  /**
   * Return all matches.
   */

  /* istanbul ignore next */


  async listMatches(opts) {
    if (this.listGames) {
      console.warn('The database connector does not implement a listMatches method.', '\nUsing the deprecated listGames method instead.');
      return this.listGames(opts);
    } else {
      console.error('The database connector does not implement a listMatches method.');
    }
  }

}

exports.A = Async;

class Sync {
  type() {
    return Type.SYNC;
  }
  /**
   * Connect.
   */


  connect() {
    return;
  }
  /**
   * Create a new match.
   *
   * This might just need to call setState and setMetadata in
   * most implementations.
   *
   * However, it exists as a separate call so that the
   * implementation can provision things differently when
   * a match is created.  For example, it might stow away the
   * initial match state in a separate field for easier retrieval.
   */

  /* istanbul ignore next */


  createMatch(matchID, opts) {
    if (this.createGame) {
      console.warn('The database connector does not implement a createMatch method.', '\nUsing the deprecated createGame method instead.');
      return this.createGame(matchID, opts);
    } else {
      console.error('The database connector does not implement a createMatch method.');
    }
  }
  /**
   * Return all matches.
   */

  /* istanbul ignore next */


  listMatches(opts) {
    if (this.listGames) {
      console.warn('The database connector does not implement a listMatches method.', '\nUsing the deprecated listGames method instead.');
      return this.listGames(opts);
    } else {
      console.error('The database connector does not implement a listMatches method.');
    }
  }

}
/**
 * Creates a new match metadata object.
 */


exports.S = Sync;

const createMetadata = _ref => {
  let {
    game,
    unlisted,
    setupData,
    numPlayers
  } = _ref;
  const metadata = {
    gameName: game.name,
    unlisted: !!unlisted,
    players: {},
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  if (setupData !== undefined) metadata.setupData = setupData;

  for (let playerIndex = 0; playerIndex < numPlayers; playerIndex++) {
    metadata.players[playerIndex] = {
      id: playerIndex
    };
  }

  return metadata;
};
/**
 * Creates initial state and metadata for a new match.
 * If the provided `setupData` doesn’t pass the game’s validation,
 * an error object is returned instead.
 */


const createMatch = _ref2 => {
  let {
    game,
    numPlayers,
    setupData,
    unlisted
  } = _ref2;
  if (!numPlayers || typeof numPlayers !== 'number') numPlayers = 2;
  const setupDataError = game.validateSetupData && game.validateSetupData(setupData, numPlayers);
  if (setupDataError !== undefined) return {
    setupDataError
  };
  const metadata = createMetadata({
    game,
    numPlayers,
    setupData,
    unlisted
  });
  const initialState = (0, _initialize9ac1bbf.I)({
    game,
    numPlayers,
    setupData
  });
  return {
    metadata,
    initialState
  };
};

exports.c = createMatch;
},{"./initialize-9ac1bbf5.js":"node_modules/boardgame.io/dist/esm/initialize-9ac1bbf5.js"}],"node_modules/boardgame.io/dist/esm/master-be1abdd0.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.M = void 0;

var _redux = require("redux");

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _reducer07c7b = require("./reducer-07c7b307.js");

var _utilB1699aa = require("./util-b1699aa1.js");

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Filter match data to get a player metadata object with credentials stripped.
 */
const filterMatchData = matchData => Object.values(matchData.players).map(player => {
  const {
    credentials,
    ...filteredData
  } = player;
  return filteredData;
});
/**
 * Remove player credentials from action payload
 */


const stripCredentialsFromAction = action => {
  const {
    credentials,
    ...payload
  } = action.payload;
  return { ...action,
    payload
  };
};
/**
 * Master
 *
 * Class that runs the game and maintains the authoritative state.
 * It uses the transportAPI to communicate with clients and the
 * storageAPI to communicate with the database.
 */


class Master {
  constructor(game, storageAPI, transportAPI, auth) {
    this.game = (0, _reducer07c7b.P)(game);
    this.storageAPI = storageAPI;
    this.transportAPI = transportAPI;

    this.subscribeCallback = () => {};

    this.auth = auth;
  }

  subscribe(fn) {
    this.subscribeCallback = fn;
  }
  /**
   * Called on each move / event made by the client.
   * Computes the new value of the game state and returns it
   * along with a deltalog.
   */


  async onUpdate(credAction, stateID, matchID, playerID) {
    if (!credAction || !credAction.payload) {
      return {
        error: 'missing action or action payload'
      };
    }

    let metadata;

    if ((0, _utilB1699aa.i)(this.storageAPI)) {
      ({
        metadata
      } = this.storageAPI.fetch(matchID, {
        metadata: true
      }));
    } else {
      ({
        metadata
      } = await this.storageAPI.fetch(matchID, {
        metadata: true
      }));
    }

    if (this.auth) {
      const isAuthentic = await this.auth.authenticateCredentials({
        playerID,
        credentials: credAction.payload.credentials,
        metadata
      });

      if (!isAuthentic) {
        return {
          error: 'unauthorized action'
        };
      }
    }

    const action = stripCredentialsFromAction(credAction);
    const key = matchID;
    let state;

    if ((0, _utilB1699aa.i)(this.storageAPI)) {
      ({
        state
      } = this.storageAPI.fetch(key, {
        state: true
      }));
    } else {
      ({
        state
      } = await this.storageAPI.fetch(key, {
        state: true
      }));
    }

    if (state === undefined) {
      (0, _turnOrder0b7dce3d.e)("game not found, matchID=[".concat(key, "]"));
      return {
        error: 'game not found'
      };
    }

    if (state.ctx.gameover !== undefined) {
      (0, _turnOrder0b7dce3d.e)("game over - matchID=[".concat(key, "] - playerID=[").concat(playerID, "]") + " - action[".concat(action.payload.type, "]"));
      return;
    }

    const reducer = (0, _reducer07c7b.C)({
      game: this.game
    });
    const middleware = (0, _redux.applyMiddleware)(_reducer07c7b.T);
    const store = (0, _redux.createStore)(reducer, state, middleware); // Only allow UNDO / REDO if there is exactly one player
    // that can make moves right now and the person doing the
    // action is that player.

    if (action.type == _turnOrder0b7dce3d.h || action.type == _turnOrder0b7dce3d.R) {
      const hasActivePlayers = state.ctx.activePlayers !== null;
      const isCurrentPlayer = state.ctx.currentPlayer === playerID;

      if ( // If activePlayers is empty, non-current players can’t undo.
      !hasActivePlayers && !isCurrentPlayer || // If player is not active or multiple players are active, can’t undo.
      hasActivePlayers && (state.ctx.activePlayers[playerID] === undefined || Object.keys(state.ctx.activePlayers).length > 1)) {
        (0, _turnOrder0b7dce3d.e)("playerID=[".concat(playerID, "] cannot undo / redo right now"));
        return;
      }
    } // Check whether the player is active.


    if (!this.game.flow.isPlayerActive(state.G, state.ctx, playerID)) {
      (0, _turnOrder0b7dce3d.e)("player not active - playerID=[".concat(playerID, "]") + " - action[".concat(action.payload.type, "]"));
      return;
    } // Get move for further checks


    const move = action.type == _turnOrder0b7dce3d.M ? this.game.flow.getMove(state.ctx, action.payload.type, playerID) : null; // Check whether the player is allowed to make the move.

    if (action.type == _turnOrder0b7dce3d.M && !move) {
      (0, _turnOrder0b7dce3d.e)("move not processed - canPlayerMakeMove=false - playerID=[".concat(playerID, "]") + " - action[".concat(action.payload.type, "]"));
      return;
    } // Check if action's stateID is different than store's stateID
    // and if move does not have ignoreStaleStateID truthy.


    if (state._stateID !== stateID && !(move && (0, _reducer07c7b.I)(move) && move.ignoreStaleStateID)) {
      (0, _turnOrder0b7dce3d.e)("invalid stateID, was=[".concat(stateID, "], expected=[").concat(state._stateID, "]") + " - playerID=[".concat(playerID, "] - action[").concat(action.payload.type, "]"));
      return;
    }

    const prevState = store.getState(); // Update server's version of the store.

    store.dispatch(action);
    state = store.getState();
    this.subscribeCallback({
      state,
      action,
      matchID
    });

    if (this.game.deltaState) {
      this.transportAPI.sendAll({
        type: 'patch',
        args: [matchID, stateID, prevState, state]
      });
    } else {
      this.transportAPI.sendAll({
        type: 'update',
        args: [matchID, state]
      });
    }

    const {
      deltalog,
      ...stateWithoutDeltalog
    } = state;
    let newMetadata;

    if (metadata && (metadata.gameover === undefined || metadata.gameover === null)) {
      newMetadata = { ...metadata,
        updatedAt: Date.now()
      };

      if (state.ctx.gameover !== undefined) {
        newMetadata.gameover = state.ctx.gameover;
      }
    }

    if ((0, _utilB1699aa.i)(this.storageAPI)) {
      this.storageAPI.setState(key, stateWithoutDeltalog, deltalog);
      if (newMetadata) this.storageAPI.setMetadata(key, newMetadata);
    } else {
      const writes = [this.storageAPI.setState(key, stateWithoutDeltalog, deltalog)];

      if (newMetadata) {
        writes.push(this.storageAPI.setMetadata(key, newMetadata));
      }

      await Promise.all(writes);
    }
  }
  /**
   * Called when the client connects / reconnects.
   * Returns the latest game state and the entire log.
   */


  async onSync(matchID, playerID, credentials) {
    let numPlayers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    const key = matchID;
    const fetchOpts = {
      state: true,
      metadata: true,
      log: true,
      initialState: true
    };
    const fetchResult = (0, _utilB1699aa.i)(this.storageAPI) ? this.storageAPI.fetch(key, fetchOpts) : await this.storageAPI.fetch(key, fetchOpts);
    let {
      state,
      initialState,
      log,
      metadata
    } = fetchResult;

    if (this.auth && playerID !== undefined && playerID !== null) {
      const isAuthentic = await this.auth.authenticateCredentials({
        playerID,
        credentials,
        metadata
      });

      if (!isAuthentic) {
        return {
          error: 'unauthorized'
        };
      }
    } // If the game doesn't exist, then create one on demand.
    // TODO: Move this out of the sync call.


    if (state === undefined) {
      const match = (0, _utilB1699aa.c)({
        game: this.game,
        unlisted: true,
        numPlayers,
        setupData: undefined
      });

      if ('setupDataError' in match) {
        return {
          error: 'game requires setupData'
        };
      }

      initialState = state = match.initialState;
      metadata = match.metadata;
      this.subscribeCallback({
        state,
        matchID
      });

      if ((0, _utilB1699aa.i)(this.storageAPI)) {
        this.storageAPI.createMatch(key, {
          initialState,
          metadata
        });
      } else {
        await this.storageAPI.createMatch(key, {
          initialState,
          metadata
        });
      }
    }

    const filteredMetadata = metadata ? filterMatchData(metadata) : undefined;
    const syncInfo = {
      state,
      log,
      filteredMetadata,
      initialState
    };
    this.transportAPI.send({
      playerID,
      type: 'sync',
      args: [matchID, syncInfo]
    });
    return;
  }
  /**
   * Called when a client connects or disconnects.
   * Updates and sends out metadata to reflect the player’s connection status.
   */


  async onConnectionChange(matchID, playerID, credentials, connected) {
    const key = matchID; // Ignore changes for clients without a playerID, e.g. spectators.

    if (playerID === undefined || playerID === null) {
      return;
    }

    let metadata;

    if ((0, _utilB1699aa.i)(this.storageAPI)) {
      ({
        metadata
      } = this.storageAPI.fetch(key, {
        metadata: true
      }));
    } else {
      ({
        metadata
      } = await this.storageAPI.fetch(key, {
        metadata: true
      }));
    }

    if (metadata === undefined) {
      (0, _turnOrder0b7dce3d.e)("metadata not found for matchID=[".concat(key, "]"));
      return {
        error: 'metadata not found'
      };
    }

    if (metadata.players[playerID] === undefined) {
      (0, _turnOrder0b7dce3d.e)("Player not in the match, matchID=[".concat(key, "] playerID=[").concat(playerID, "]"));
      return {
        error: 'player not in the match'
      };
    }

    if (this.auth) {
      const isAuthentic = await this.auth.authenticateCredentials({
        playerID,
        credentials,
        metadata
      });

      if (!isAuthentic) {
        return {
          error: 'unauthorized'
        };
      }
    }

    metadata.players[playerID].isConnected = connected;
    const filteredMetadata = filterMatchData(metadata);
    this.transportAPI.sendAll({
      type: 'matchData',
      args: [matchID, filteredMetadata]
    });

    if ((0, _utilB1699aa.i)(this.storageAPI)) {
      this.storageAPI.setMetadata(key, metadata);
    } else {
      await this.storageAPI.setMetadata(key, metadata);
    }
  }

  async onChatMessage(matchID, chatMessage, credentials) {
    const key = matchID;

    if (this.auth) {
      const {
        metadata
      } = await this.storageAPI.fetch(key, {
        metadata: true
      });

      if (!(chatMessage && typeof chatMessage.sender === 'string')) {
        return {
          error: 'unauthorized'
        };
      }

      const isAuthentic = await this.auth.authenticateCredentials({
        playerID: chatMessage.sender,
        credentials,
        metadata
      });

      if (!isAuthentic) {
        return {
          error: 'unauthorized'
        };
      }
    }

    this.transportAPI.sendAll({
      type: 'chat',
      args: [matchID, chatMessage]
    });
  }

}

exports.M = Master;
},{"redux":"node_modules/redux/es/redux.js","./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js","./util-b1699aa1.js":"node_modules/boardgame.io/dist/esm/util-b1699aa1.js"}],"node_modules/boardgame.io/dist/esm/filter-player-view-c30cdfbf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.g = void 0;

var _turnOrder0b7dce3d = require("./turn-order-0b7dce3d.js");

var _rfc = require("rfc6902");

const applyPlayerView = (game, playerID, state) => ({ ...state,
  G: game.playerView(state.G, state.ctx, playerID),
  plugins: (0, _turnOrder0b7dce3d.x)(state, {
    playerID,
    game
  }),
  deltalog: undefined,
  _undo: [],
  _redo: []
});
/** Gets a function that filters the TransportData for a given player and game. */


const getFilterPlayerView = game => (playerID, payload) => {
  switch (payload.type) {
    case 'patch':
      {
        const [matchID, stateID, prevState, state] = payload.args;
        const log = redactLog(state.deltalog, playerID);
        const filteredState = applyPlayerView(game, playerID, state);
        const newStateID = state._stateID;
        const prevFilteredState = applyPlayerView(game, playerID, prevState);
        const patch = (0, _rfc.createPatch)(prevFilteredState, filteredState);
        return {
          type: 'patch',
          args: [matchID, stateID, newStateID, patch, log]
        };
      }

    case 'update':
      {
        const [matchID, state] = payload.args;
        const log = redactLog(state.deltalog, playerID);
        const filteredState = applyPlayerView(game, playerID, state);
        return {
          type: 'update',
          args: [matchID, filteredState, log]
        };
      }

    case 'sync':
      {
        const [matchID, syncInfo] = payload.args;
        const filteredState = applyPlayerView(game, playerID, syncInfo.state);
        const log = redactLog(syncInfo.log, playerID);
        const newSyncInfo = { ...syncInfo,
          state: filteredState,
          log
        };
        return {
          type: 'sync',
          args: [matchID, newSyncInfo]
        };
      }

    default:
      {
        return payload;
      }
  }
};
/**
 * Redact the log.
 *
 * @param {Array} log - The game log (or deltalog).
 * @param {String} playerID - The playerID that this log is
 *                            to be sent to.
 */


exports.g = getFilterPlayerView;

function redactLog(log, playerID) {
  if (log === undefined) {
    return log;
  }

  return log.map(logEvent => {
    // filter for all other players and spectators.
    if (playerID !== null && +playerID === +logEvent.action.payload.playerID) {
      return logEvent;
    }

    if (logEvent.redact !== true) {
      return logEvent;
    }

    const payload = { ...logEvent.action.payload,
      args: null
    };
    const filteredEvent = { ...logEvent,
      action: { ...logEvent.action,
        payload
      }
    };
    const {
      redact,
      ...remaining
    } = filteredEvent;
    return remaining;
  });
}
},{"./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","rfc6902":"node_modules/rfc6902/index.js"}],"node_modules/engine.io-parser/build/esm/commons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = exports.ERROR_PACKET = void 0;
const PACKET_TYPES = Object.create(null); // no Map = no polyfill

exports.PACKET_TYPES = PACKET_TYPES;
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
  type: "error",
  data: "parser error"
};
exports.ERROR_PACKET = ERROR_PACKET;
},{}],"node_modules/engine.io-parser/build/esm/encodePacket.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commons = require("./commons.js");

const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

const encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(_commons.PACKET_TYPES[type] + (data || ""));
};

const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();

  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };

  return fileReader.readAsDataURL(data);
};

var _default = encodePacket;
exports.default = _default;
},{"./commons.js":"node_modules/engine.io-parser/build/esm/commons.js"}],"node_modules/@socket.io/base64-arraybuffer/dist/base64-arraybuffer.es5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encode = exports.decode = void 0;

/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}

var encode = function (arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
      i,
      len = bytes.length,
      base64 = '';

  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }

  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }

  return base64;
};

exports.encode = encode;

var decode = function (base64) {
  var bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;

  if (base64[base64.length - 1] === '=') {
    bufferLength--;

    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }

  var arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer);

  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }

  return arraybuffer;
};

exports.decode = decode;
},{}],"node_modules/engine.io-parser/build/esm/decodePacket.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commons = require("./commons.js");

var _base64Arraybuffer = require("@socket.io/base64-arraybuffer");

const withNativeArrayBuffer = typeof ArrayBuffer === "function";

const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  const type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  const packetType = _commons.PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return _commons.ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: _commons.PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: _commons.PACKET_TYPES_REVERSE[type]
  };
};

const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer) {
    const decoded = (0, _base64Arraybuffer.decode)(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    }; // fallback for old browsers
  }
};

const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

var _default = decodePacket;
exports.default = _default;
},{"./commons.js":"node_modules/engine.io-parser/build/esm/commons.js","@socket.io/base64-arraybuffer":"node_modules/@socket.io/base64-arraybuffer/dist/base64-arraybuffer.es5.js"}],"node_modules/engine.io-parser/build/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "decodePacket", {
  enumerable: true,
  get: function () {
    return _decodePacket.default;
  }
});
exports.decodePayload = void 0;
Object.defineProperty(exports, "encodePacket", {
  enumerable: true,
  get: function () {
    return _encodePacket.default;
  }
});
exports.protocol = exports.encodePayload = void 0;

var _encodePacket = _interopRequireDefault(require("./encodePacket.js"));

var _decodePacket = _interopRequireDefault(require("./decodePacket.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

const encodePayload = (packets, callback) => {
  // some packets may be added to the array while encoding, so the initial length must be saved
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    // force base64 encoding for binary packets
    (0, _encodePacket.default)(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

exports.encodePayload = encodePayload;

const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];

  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = (0, _decodePacket.default)(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

exports.decodePayload = decodePayload;
const protocol = 4;
exports.protocol = protocol;
},{"./encodePacket.js":"node_modules/engine.io-parser/build/esm/encodePacket.browser.js","./decodePacket.js":"node_modules/engine.io-parser/build/esm/decodePacket.browser.js"}],"node_modules/@socket.io/component-emitter/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */
function Emitter(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
}; // alias used for reserved events (protected method)


Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};
},{}],"node_modules/engine.io-client/build/esm/globalThis.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

exports.default = _default;
},{}],"node_modules/engine.io-client/build/esm/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byteLength = byteLength;
exports.installTimerFunctions = installTimerFunctions;
exports.pick = pick;

var _globalThis = _interopRequireDefault(require("./globalThis.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }

    return acc;
  }, {});
} // Keep a reference to the real timeout functions so they can be used when overridden


const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;

function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globalThis.default);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globalThis.default);
  } else {
    obj.setTimeoutFn = setTimeout.bind(_globalThis.default);
    obj.clearTimeoutFn = clearTimeout.bind(_globalThis.default);
  }
} // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)


const BASE64_OVERHEAD = 1.33; // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9

function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  } // arraybuffer or blob


  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}

function utf8Length(str) {
  let c = 0,
      length = 0;

  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);

    if (c < 0x80) {
      length += 1;
    } else if (c < 0x800) {
      length += 2;
    } else if (c < 0xd800 || c >= 0xe000) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }

  return length;
}
},{"./globalThis.js":"node_modules/engine.io-client/build/esm/globalThis.browser.js"}],"node_modules/engine.io-client/build/esm/transport.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transport = void 0;

var _engine = require("engine.io-parser");

var _componentEmitter = require("@socket.io/component-emitter");

var _util = require("./util.js");

class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }

}

class Transport extends _componentEmitter.Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(opts) {
    super();
    this.writable = false;
    (0, _util.installTimerFunctions)(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @api protected
   */


  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   *
   * @api public
   */


  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }

    return this;
  }
  /**
   * Closes the transport.
   *
   * @api public
   */


  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api public
   */


  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {// this might happen if the transport was silently closed in the beforeunload event handler
    }
  }
  /**
   * Called upon open
   *
   * @api protected
   */


  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @api protected
   */


  onData(data) {
    const packet = (0, _engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @api protected
   */


  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @api protected
   */


  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }

}

exports.Transport = Transport;
},{"engine.io-parser":"node_modules/engine.io-parser/build/esm/index.js","@socket.io/component-emitter":"node_modules/@socket.io/component-emitter/index.mjs","./util.js":"node_modules/engine.io-client/build/esm/util.js"}],"node_modules/engine.io-client/build/esm/contrib/yeast.js":[function(require,module,exports) {
// imported from https://github.com/unshiftio/yeast
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;
exports.encode = encode;
exports.yeast = yeast;
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
      length = 64,
      map = {};
let seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  let encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  let decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet[i]] = i;
},{}],"node_modules/engine.io-client/build/esm/contrib/parseqs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;
exports.encode = encode;

// imported from https://github.com/galkn/querystring

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
  let str = '';

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


function decode(qs) {
  let qry = {};
  let pairs = qs.split('&');

  for (let i = 0, l = pairs.length; i < l; i++) {
    let pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
}
},{}],"node_modules/engine.io-client/build/esm/contrib/has-cors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCORS = void 0;
// imported from https://github.com/component/has-cors
let value = false;

try {
  value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {// if XMLHttp support is disabled in IE then it will throw
  // when trying to create
}

const hasCORS = value;
exports.hasCORS = hasCORS;
},{}],"node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _hasCors = require("../contrib/has-cors.js");

var _globalThis = _interopRequireDefault(require("../globalThis.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// browser shim for xmlhttprequest module
function _default(opts) {
  const xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE

  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _hasCors.hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new _globalThis.default[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}
},{"../contrib/has-cors.js":"node_modules/engine.io-client/build/esm/contrib/has-cors.js","../globalThis.js":"node_modules/engine.io-client/build/esm/globalThis.browser.js"}],"node_modules/engine.io-client/build/esm/transports/polling.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = exports.Polling = void 0;

var _transport = require("../transport.js");

var _yeast = require("../contrib/yeast.js");

var _parseqs = require("../contrib/parseqs.js");

var _engine = require("engine.io-parser");

var _xmlhttprequest = _interopRequireDefault(require("./xmlhttprequest.js"));

var _componentEmitter = require("@socket.io/component-emitter");

var _util = require("../util.js");

var _globalThis = _interopRequireDefault(require("../globalThis.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function empty() {}

const hasXHR2 = function () {
  const xhr = new _xmlhttprequest.default({
    xdomain: false
  });
  return null != xhr.responseType;
}();

class Polling extends _transport.Transport {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.polling = false;

    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port; // some user agents have empty `location.port`

      if (!port) {
        port = isSSL ? "443" : "80";
      }

      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    /**
     * XHR supports binary
     */


    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  /**
   * Transport name.
   */


  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */


  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */


  pause(onPause) {
    this.readyState = "pausing";

    const pause = () => {
      this.readyState = "paused";
      onPause();
    };

    if (this.polling || !this.writable) {
      let total = 0;

      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }

      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @api public
   */


  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */


  onData(data) {
    const callback = packet => {
      // if its the first message we consider the transport open
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      } // if its a close packet, we close the ongoing requests


      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      } // otherwise bypass onData and handle the message


      this.onPacket(packet);
    }; // decode payload


    (0, _engine.decodePayload)(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

    if ("closed" !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emitReserved("pollComplete");

      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @api private
   */


  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };

    if ("open" === this.readyState) {
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */


  write(packets) {
    this.writable = false;
    (0, _engine.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */


  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = ""; // cache busting is forced

    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0, _yeast.yeast)();
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    } // avoid port if default for schema


    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }

    const encodedQuery = (0, _parseqs.encode)(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */


  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */


  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data: data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @api private
   */


  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }

}

exports.Polling = Polling;

class Request extends _componentEmitter.Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts) {
    super();
    (0, _util.installTimerFunctions)(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = undefined !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */


  create() {
    const opts = (0, _util.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new _xmlhttprequest.default(opts);

    try {
      xhr.open(this.method, this.uri, this.async);

      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}

      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }

      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {} // ie6 check


      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }

      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }

      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };

      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly from the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }

    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @api private
   */


  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @api private
   */


  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }

    this.xhr.onreadystatechange = empty;

    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }

    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }

    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @api private
   */


  onLoad() {
    const data = this.xhr.responseText;

    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @api public
   */


  abort() {
    this.cleanup();
  }

}

exports.Request = Request;
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (typeof document !== "undefined") {
  // @ts-ignore
  if (typeof attachEvent === "function") {
    // @ts-ignore
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in _globalThis.default ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
},{"../transport.js":"node_modules/engine.io-client/build/esm/transport.js","../contrib/yeast.js":"node_modules/engine.io-client/build/esm/contrib/yeast.js","../contrib/parseqs.js":"node_modules/engine.io-client/build/esm/contrib/parseqs.js","engine.io-parser":"node_modules/engine.io-parser/build/esm/index.js","./xmlhttprequest.js":"node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js","@socket.io/component-emitter":"node_modules/@socket.io/component-emitter/index.mjs","../util.js":"node_modules/engine.io-client/build/esm/util.js","../globalThis.js":"node_modules/engine.io-client/build/esm/globalThis.browser.js"}],"node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usingBrowserWebSocket = exports.nextTick = exports.defaultBinaryType = exports.WebSocket = void 0;

var _globalThis = _interopRequireDefault(require("../globalThis.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";

  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();

exports.nextTick = nextTick;
const WebSocket = _globalThis.default.WebSocket || _globalThis.default.MozWebSocket;
exports.WebSocket = WebSocket;
const usingBrowserWebSocket = true;
exports.usingBrowserWebSocket = usingBrowserWebSocket;
const defaultBinaryType = "arraybuffer";
exports.defaultBinaryType = defaultBinaryType;
},{"../globalThis.js":"node_modules/engine.io-client/build/esm/globalThis.browser.js"}],"node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"node_modules/base64-js/index.js","ieee754":"node_modules/ieee754/index.js","isarray":"node_modules/isarray/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/engine.io-client/build/esm/transports/websocket.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WS = void 0;

var _transport = require("../transport.js");

var _parseqs = require("../contrib/parseqs.js");

var _yeast = require("../contrib/yeast.js");

var _util = require("../util.js");

var _websocketConstructor = require("./websocket-constructor.js");

var _engine = require("engine.io-parser");

// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

class WS extends _transport.Transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Transport name.
   *
   * @api public
   */


  get name() {
    return "websocket";
  }
  /**
   * Opens socket.
   *
   * @api private
   */


  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }

    const uri = this.uri();
    const protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

    const opts = isReactNative ? {} : (0, _util.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws = _websocketConstructor.usingBrowserWebSocket && !isReactNative ? protocols ? new _websocketConstructor.WebSocket(uri, protocols) : new _websocketConstructor.WebSocket(uri) : new _websocketConstructor.WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }

    this.ws.binaryType = this.socket.binaryType || _websocketConstructor.defaultBinaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @api private
   */


  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }

      this.onOpen();
    };

    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });

    this.ws.onmessage = ev => this.onData(ev.data);

    this.ws.onerror = e => this.onError("websocket error", e);
  }
  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */


  write(packets) {
    this.writable = false; // encodePacket efficient as it uses WS framing
    // no need for encodePayload

    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      (0, _engine.encodePacket)(packet, this.supportsBinary, data => {
        // always create a new object (GH-437)
        const opts = {};

        if (!_websocketConstructor.usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (this.opts.perMessageDeflate) {
            const len = // @ts-ignore
            "string" === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (_websocketConstructor.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}

        if (lastPacket) {
          // fake drain
          // defer to next tick to allow Socket to clear writeBuffer
          (0, _websocketConstructor.nextTick)(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  /**
   * Closes socket.
   *
   * @api private
   */


  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */


  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = ""; // avoid port if default for schema

    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    } // append timestamp to URI


    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0, _yeast.yeast)();
    } // communicate binary support capabilities


    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    const encodedQuery = (0, _parseqs.encode)(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */


  check() {
    return !!_websocketConstructor.WebSocket && !("__initialize" in _websocketConstructor.WebSocket && this.name === WS.prototype.name);
  }

}

exports.WS = WS;
},{"../transport.js":"node_modules/engine.io-client/build/esm/transport.js","../contrib/parseqs.js":"node_modules/engine.io-client/build/esm/contrib/parseqs.js","../contrib/yeast.js":"node_modules/engine.io-client/build/esm/contrib/yeast.js","../util.js":"node_modules/engine.io-client/build/esm/util.js","./websocket-constructor.js":"node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js","engine.io-parser":"node_modules/engine.io-parser/build/esm/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/engine.io-client/build/esm/transports/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transports = void 0;

var _polling = require("./polling.js");

var _websocket = require("./websocket.js");

const transports = {
  websocket: _websocket.WS,
  polling: _polling.Polling
};
exports.transports = transports;
},{"./polling.js":"node_modules/engine.io-client/build/esm/transports/polling.js","./websocket.js":"node_modules/engine.io-client/build/esm/transports/websocket.js"}],"node_modules/engine.io-client/build/esm/contrib/parseuri.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
// imported from https://github.com/galkn/parseuri

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

function parse(str) {
  const src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  let m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
}

function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

  if (path.substr(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.substr(path.length - 1, 1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}
},{}],"node_modules/engine.io-client/build/esm/socket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var _index = require("./transports/index.js");

var _util = require("./util.js");

var _parseqs = require("./contrib/parseqs.js");

var _parseuri = require("./contrib/parseuri.js");

var _componentEmitter = require("@socket.io/component-emitter");

var _engine = require("engine.io-parser");

class Socket extends _componentEmitter.Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} opts - options
   * @api public
   */
  constructor(uri, opts = {}) {
    super();

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = (0, _parseuri.parse)(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = (0, _parseuri.parse)(opts.host).host;
    }

    (0, _util.installTimerFunctions)(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? "443" : "80";
    }

    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";

    if (typeof this.opts.query === "string") {
      this.opts.query = (0, _parseqs.decode)(this.opts.query);
    } // set on handshake


    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null; // set on heartbeat

    this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        addEventListener("beforeunload", () => {
          if (this.transport) {
            // silently close the transport
            this.transport.removeAllListeners();
            this.transport.close();
          }
        }, false);
      }

      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };

        addEventListener("offline", this.offlineEventListener, false);
      }
    }

    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */


  createTransport(name) {
    const query = Object.assign({}, this.opts.query); // append engine.io protocol identifier

    query.EIO = _engine.protocol; // transport name

    query.transport = name; // session id if we already have one

    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new _index.transports[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */


  open() {
    let transport;

    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }

    this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }

    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */


  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    } // set up transport


    this.transport = transport; // set up transport listeners

    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */


  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;

    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;

        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error"); // @ts-ignore

          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };

    function freezeTransport() {
      if (failed) return; // Any callback called by transport should be ignored since now

      failed = true;
      cleanup();
      transport.close();
      transport = null;
    } // Handle any error that happens while probing


    const onerror = err => {
      const error = new Error("probe error: " + err); // @ts-ignore

      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };

    function onTransportClose() {
      onerror("transport closed");
    } // When the socket is closed while we're probing


    function onclose() {
      onerror("socket closed");
    } // When the socket is upgraded while we're probing


    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    } // Remove all listeners on the transport and on self


    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };

    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @api private
   */


  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush(); // we check for `readyState` in case an `open`
    // listener already closed the socket

    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      let i = 0;
      const l = this.upgrades.length;

      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @api private
   */


  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet); // Socket is live - any packet counts

      this.emitReserved("heartbeat");

      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;

        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;

        case "error":
          const err = new Error("server error"); // @ts-ignore

          err.code = packet.data;
          this.onError(err);
          break;

        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @api private
   */


  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen(); // In case open handler closes socket

    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */


  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);

    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @api private
   */


  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`

    this.prevBufferLen = 0;

    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @api private
   */


  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets); // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`

      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */


  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;

    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }

    let payloadSize = 1; // first packet type

    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;

      if (data) {
        payloadSize += (0, _util.byteLength)(data);
      }

      if (i > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i);
      }

      payloadSize += 2; // separator + packet type
    }

    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */


  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */


  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = undefined;
    }

    if ("function" === typeof options) {
      fn = options;
      options = null;
    }

    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }

    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type: type,
      data: data,
      options: options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   *
   * @api public
   */


  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };

    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };

    const waitForUpgrade = () => {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };

    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";

      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }

    return this;
  }
  /**
   * Called upon transport error
   *
   * @api private
   */


  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @api private
   */


  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      // clear timers
      this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport

      this.transport.removeAllListeners("close"); // ensure transport won't stay open

      this.transport.close(); // ignore further transport communication

      this.transport.removeAllListeners();

      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      } // set ready state


      this.readyState = "closed"; // clear session id

      this.id = null; // emit close event

      this.emitReserved("close", reason, description); // clean buffers after, so users can still
      // grab the buffers on `close` event

      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */


  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;

    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }

    return filteredUpgrades;
  }

}

exports.Socket = Socket;
Socket.protocol = _engine.protocol;
},{"./transports/index.js":"node_modules/engine.io-client/build/esm/transports/index.js","./util.js":"node_modules/engine.io-client/build/esm/util.js","./contrib/parseqs.js":"node_modules/engine.io-client/build/esm/contrib/parseqs.js","./contrib/parseuri.js":"node_modules/engine.io-client/build/esm/contrib/parseuri.js","@socket.io/component-emitter":"node_modules/@socket.io/component-emitter/index.mjs","engine.io-parser":"node_modules/engine.io-parser/build/esm/index.js"}],"node_modules/engine.io-client/build/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Socket", {
  enumerable: true,
  get: function () {
    return _socket.Socket;
  }
});
Object.defineProperty(exports, "Transport", {
  enumerable: true,
  get: function () {
    return _transport.Transport;
  }
});
Object.defineProperty(exports, "installTimerFunctions", {
  enumerable: true,
  get: function () {
    return _util.installTimerFunctions;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parseuri.parse;
  }
});
exports.protocol = void 0;
Object.defineProperty(exports, "transports", {
  enumerable: true,
  get: function () {
    return _index.transports;
  }
});

var _socket = require("./socket.js");

var _transport = require("./transport.js");

var _index = require("./transports/index.js");

var _util = require("./util.js");

var _parseuri = require("./contrib/parseuri.js");

const protocol = _socket.Socket.protocol;
exports.protocol = protocol;
},{"./socket.js":"node_modules/engine.io-client/build/esm/socket.js","./transport.js":"node_modules/engine.io-client/build/esm/transport.js","./transports/index.js":"node_modules/engine.io-client/build/esm/transports/index.js","./util.js":"node_modules/engine.io-client/build/esm/util.js","./contrib/parseuri.js":"node_modules/engine.io-client/build/esm/contrib/parseuri.js"}],"node_modules/socket.io-client/build/esm/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = url;

var _engine = require("engine.io-client");

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
  let obj = uri; // default to window.location

  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    } // parse


    obj = (0, _engine.parse)(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

  obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}
},{"engine.io-client":"node_modules/engine.io-client/build/esm/index.js"}],"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasBinary = hasBinary;
exports.isBinary = isBinary;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";

const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */

function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}

function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }

  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (isBinary(obj)) {
    return true;
  }

  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
},{}],"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deconstructPacket = deconstructPacket;
exports.reconstructPacket = reconstructPacket;

var _isBinary = require("./is-binary.js");

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
}

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if ((0, _isBinary.isBinary)(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);

    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */


function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
}

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }

  return data;
}
},{"./is-binary.js":"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js"}],"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protocol = exports.PacketType = exports.Encoder = exports.Decoder = void 0;

var _componentEmitter = require("@socket.io/component-emitter");

var _binary = require("./binary.js");

var _isBinary = require("./is-binary.js");

/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
exports.protocol = protocol;
var PacketType;
exports.PacketType = PacketType;

(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (exports.PacketType = PacketType = {}));
/**
 * A socket.io Encoder instance
 */


class Encoder {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */


  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if ((0, _isBinary.hasBinary)(obj)) {
        obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
        return this.encodeAsBinary(obj);
      }
    }

    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */


  encodeAsString(obj) {
    // first is type
    let str = "" + obj.type; // attachments if we have them

    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    } // if we have a namespace other than `/`
    // we append it followed by a comma `,`


    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    } // immediately followed by the id


    if (null != obj.id) {
      str += obj.id;
    } // json data


    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }

    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */


  encodeAsBinary(obj) {
    const deconstruction = (0, _binary.deconstructPacket)(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    return buffers; // write all the buffers
  }

}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */


exports.Encoder = Encoder;

class Decoder extends _componentEmitter.Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */


  add(obj) {
    let packet;

    if (typeof obj === "string") {
      packet = this.decodeString(obj);

      if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
        // binary packet's json
        this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        // non-binary full packet
        super.emitReserved("decoded", packet);
      }
    } else if ((0, _isBinary.isBinary)(obj) || obj.base64) {
      // raw binary data
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);

        if (packet) {
          // received final buffer
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */


  decodeString(str) {
    let i = 0; // look up type

    const p = {
      type: Number(str.charAt(0))
    };

    if (PacketType[p.type] === undefined) {
      throw new Error("unknown packet type " + p.type);
    } // look up attachments if type binary


    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;

      while (str.charAt(++i) !== "-" && i != str.length) {}

      const buf = str.substring(start, i);

      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }

      p.attachments = Number(buf);
    } // look up namespace (if any)


    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;

      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }

      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    } // look up id


    const next = str.charAt(i + 1);

    if ("" !== next && Number(next) == next) {
      const start = i + 1;

      while (++i) {
        const c = str.charAt(i);

        if (null == c || Number(c) != c) {
          --i;
          break;
        }

        if (i === str.length) break;
      }

      p.id = Number(str.substring(start, i + 1));
    } // look up json data


    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));

      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }

    return p;
  }

  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }

  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";

      case PacketType.DISCONNECT:
        return payload === undefined;

      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";

      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;

      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */


  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  }

}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */


exports.Decoder = Decoder;

class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */


  takeBinaryData(binData) {
    this.buffers.push(binData);

    if (this.buffers.length === this.reconPack.attachments) {
      // done with buffer list
      const packet = (0, _binary.reconstructPacket)(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }

    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */


  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }

}
},{"@socket.io/component-emitter":"node_modules/@socket.io/component-emitter/index.mjs","./binary.js":"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js","./is-binary.js":"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js"}],"node_modules/socket.io-client/build/esm/on.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}
},{}],"node_modules/socket.io-client/build/esm/socket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var _socket = require("socket.io-parser");

var _on = require("./on.js");

var _componentEmitter = require("@socket.io/component-emitter");

/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});

class Socket extends _componentEmitter.Emitter {
  /**
   * `Socket` constructor.
   *
   * @public
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;

    if (opts && opts.auth) {
      this.auth = opts.auth;
    }

    if (this.io._autoConnect) this.open();
  }
  /**
   * Whether the socket is currently disconnected
   */


  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */


  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [(0, _on.on)(io, "open", this.onopen.bind(this)), (0, _on.on)(io, "packet", this.onpacket.bind(this)), (0, _on.on)(io, "error", this.onerror.bind(this)), (0, _on.on)(io, "close", this.onclose.bind(this))];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects
   */


  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @public
   */


  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open(); // ensure open

    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  /**
   * Alias for connect()
   */


  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * @return self
   * @public
   */


  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @return self
   * @public
   */


  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev + '" is a reserved event name');
    }

    args.unshift(ev);
    const packet = {
      type: _socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false; // event ack callback

    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();

      this._registerAckCallback(id, ack);

      packet.id = id;
    }

    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }

    this.flags = {};
    return this;
  }
  /**
   * @private
   */


  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;

    if (timeout === undefined) {
      this.acks[id] = ack;
      return;
    } // @ts-ignore


    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];

      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }

      ack.call(this, new Error("operation has timed out"));
    }, timeout);

    this.acks[id] = (...args) => {
      // @ts-ignore
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */


  packet(packet) {
    packet.nsp = this.nsp;

    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */


  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this.packet({
          type: _socket.PacketType.CONNECT,
          data
        });
      });
    } else {
      this.packet({
        type: _socket.PacketType.CONNECT,
        data: this.auth
      });
    }
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */


  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */


  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */


  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;

    switch (packet.type) {
      case _socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }

        break;

      case _socket.PacketType.EVENT:
      case _socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;

      case _socket.PacketType.ACK:
      case _socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;

      case _socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;

      case _socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message); // @ts-ignore

        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */


  onevent(packet) {
    const args = packet.data || [];

    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }

    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }

  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }

    super.emit.apply(this, args);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */


  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      // prevent double callbacks
      if (sent) return;
      sent = true;
      self.packet({
        type: _socket.PacketType.ACK,
        id: id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */


  onack(packet) {
    const ack = this.acks[packet.id];

    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  /**
   * Called upon server connect.
   *
   * @private
   */


  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */


  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */


  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */


  destroy() {
    if (this.subs) {
      // clean subscriptions to avoid reconnections
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = undefined;
    }

    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually.
   *
   * @return self
   * @public
   */


  disconnect() {
    if (this.connected) {
      this.packet({
        type: _socket.PacketType.DISCONNECT
      });
    } // remove socket from pool


    this.destroy();

    if (this.connected) {
      // fire events
      this.onclose("io client disconnect");
    }

    return this;
  }
  /**
   * Alias for disconnect()
   *
   * @return self
   * @public
   */


  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   * @public
   */


  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @returns self
   * @public
   */


  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * ```
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   * ```
   *
   * @returns self
   * @public
   */


  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @param listener
   * @public
   */


  onAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.push(listener);

    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @param listener
   * @public
   */


  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.unshift(listener);

    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @param listener
   * @public
   */


  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }

    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   *
   * @public
   */


  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @param listener
   *
   * <pre><code>
   *
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(event);
   * });
   *
   * </pre></code>
   *
   * @public
   */


  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.push(listener);

    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @param listener
   *
   * <pre><code>
   *
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(event);
   * });
   *
   * </pre></code>
   *
   * @public
   */


  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.unshift(listener);

    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @param listener
   *
   * <pre><code>
   *
   * const handler = (event, ...args) => {
   *   console.log(event);
   * }
   *
   * socket.onAnyOutgoing(handler);
   *
   * // then later
   * socket.offAnyOutgoing(handler);
   *
   * </pre></code>
   *
   * @public
   */


  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyOutgoingListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }

    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   *
   * @public
   */


  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */


  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }

}

exports.Socket = Socket;
},{"socket.io-parser":"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js","./on.js":"node_modules/socket.io-client/build/esm/on.js","@socket.io/component-emitter":"node_modules/@socket.io/component-emitter/index.mjs"}],"node_modules/socket.io-client/build/esm/contrib/backo2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Backoff = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};
},{}],"node_modules/socket.io-client/build/esm/manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Manager = void 0;

var _engine = require("engine.io-client");

var _socket = require("./socket.js");

var parser = _interopRequireWildcard(require("socket.io-parser"));

var _on = require("./on.js");

var _backo = require("./contrib/backo2.js");

var _componentEmitter = require("@socket.io/component-emitter");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Manager extends _componentEmitter.Emitter {
  constructor(uri, opts) {
    var _a;

    super();
    this.nsps = {};
    this.subs = [];

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, _engine.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new _backo.Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;

    const _parser = opts.parser || parser;

    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }

  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }

  reconnectionAttempts(v) {
    if (v === undefined) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }

  reconnectionDelay(v) {
    var _a;

    if (v === undefined) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }

  randomizationFactor(v) {
    var _a;

    if (v === undefined) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }

  reconnectionDelayMax(v) {
    var _a;

    if (v === undefined) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }

  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */


  maybeReconnectOnOpen() {
    // Only try to reconnect if it's the first time we're connecting
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      // keeps reconnection from firing twice for the same reconnection loop
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */


  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new _engine.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false; // emit `open`

    const openSubDestroy = (0, _on.on)(socket, "open", function () {
      self.onopen();
      fn && fn();
    }); // emit `error`

    const errorSub = (0, _on.on)(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);

      if (fn) {
        fn(err);
      } else {
        // Only do this if there is no fn to handle the error
        self.maybeReconnectOnOpen();
      }
    });

    if (false !== this._timeout) {
      const timeout = this._timeout;

      if (timeout === 0) {
        openSubDestroy(); // prevents a race condition with the 'open' event
      } // set timer


      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close(); // @ts-ignore

        socket.emit("error", new Error("timeout"));
      }, timeout);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }

    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */


  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */


  onopen() {
    // clear old subs
    this.cleanup(); // mark as open

    this._readyState = "open";
    this.emitReserved("open"); // add new subs

    const socket = this.engine;
    this.subs.push((0, _on.on)(socket, "ping", this.onping.bind(this)), (0, _on.on)(socket, "data", this.ondata.bind(this)), (0, _on.on)(socket, "error", this.onerror.bind(this)), (0, _on.on)(socket, "close", this.onclose.bind(this)), (0, _on.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */


  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */


  ondata(data) {
    this.decoder.add(data);
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */


  ondecoded(packet) {
    this.emitReserved("packet", packet);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */


  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */


  socket(nsp, opts) {
    let socket = this.nsps[nsp];

    if (!socket) {
      socket = new _socket.Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }

    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */


  _destroy(socket) {
    const nsps = Object.keys(this.nsps);

    for (const nsp of nsps) {
      const socket = this.nsps[nsp];

      if (socket.active) {
        return;
      }
    }

    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */


  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);

    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */


  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */


  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */


  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */


  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);

    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */


  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;

    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events

        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */


  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }

}

exports.Manager = Manager;
},{"engine.io-client":"node_modules/engine.io-client/build/esm/index.js","./socket.js":"node_modules/socket.io-client/build/esm/socket.js","socket.io-parser":"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js","./on.js":"node_modules/socket.io-client/build/esm/on.js","./contrib/backo2.js":"node_modules/socket.io-client/build/esm/contrib/backo2.js","@socket.io/component-emitter":"node_modules/@socket.io/component-emitter/index.mjs"}],"node_modules/socket.io-client/build/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Manager", {
  enumerable: true,
  get: function () {
    return _manager.Manager;
  }
});
Object.defineProperty(exports, "Socket", {
  enumerable: true,
  get: function () {
    return _socket.Socket;
  }
});
exports.default = exports.connect = exports.io = lookup;
Object.defineProperty(exports, "protocol", {
  enumerable: true,
  get: function () {
    return _socket2.protocol;
  }
});

var _url = require("./url.js");

var _manager = require("./manager.js");

var _socket = require("./socket.js");

var _socket2 = require("socket.io-parser");

/**
 * Managers cache.
 */
const cache = {};

function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  const parsed = (0, _url.url)(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;

  if (newConnection) {
    io = new _manager.Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new _manager.Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }

  return io.socket(parsed.path, opts);
} // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility


Object.assign(lookup, {
  Manager: _manager.Manager,
  Socket: _socket.Socket,
  io: lookup,
  connect: lookup
});
/**
 * Protocol version.
 *
 * @public
 */
},{"./url.js":"node_modules/socket.io-client/build/esm/url.js","./manager.js":"node_modules/socket.io-client/build/esm/manager.js","./socket.js":"node_modules/socket.io-client/build/esm/socket.js","socket.io-parser":"node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js"}],"node_modules/boardgame.io/dist/esm/socketio-e4fb268a.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.L = Local;
exports.S = SocketIO;

var _transportCe07b = require("./transport-ce07b771.js");

var _utilB1699aa = require("./util-b1699aa1.js");

var _masterBe1abdd = require("./master-be1abdd0.js");

var _filterPlayerViewC30cdfbf = require("./filter-player-view-c30cdfbf.js");

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * InMemory data storage.
 */
class InMemory extends _utilB1699aa.S {
  /**
   * Creates a new InMemory storage.
   */
  constructor() {
    super();
    this.state = new Map();
    this.initial = new Map();
    this.metadata = new Map();
    this.log = new Map();
  }
  /**
   * Create a new match.
   *
   * @override
   */


  createMatch(matchID, opts) {
    this.initial.set(matchID, opts.initialState);
    this.setState(matchID, opts.initialState);
    this.setMetadata(matchID, opts.metadata);
  }
  /**
   * Write the match metadata to the in-memory object.
   */


  setMetadata(matchID, metadata) {
    this.metadata.set(matchID, metadata);
  }
  /**
   * Write the match state to the in-memory object.
   */


  setState(matchID, state, deltalog) {
    if (deltalog && deltalog.length > 0) {
      const log = this.log.get(matchID) || [];
      this.log.set(matchID, [...log, ...deltalog]);
    }

    this.state.set(matchID, state);
  }
  /**
   * Fetches state for a particular matchID.
   */


  fetch(matchID, opts) {
    const result = {};

    if (opts.state) {
      result.state = this.state.get(matchID);
    }

    if (opts.metadata) {
      result.metadata = this.metadata.get(matchID);
    }

    if (opts.log) {
      result.log = this.log.get(matchID) || [];
    }

    if (opts.initialState) {
      result.initialState = this.initial.get(matchID);
    }

    return result;
  }
  /**
   * Remove the match state from the in-memory object.
   */


  wipe(matchID) {
    this.state.delete(matchID);
    this.metadata.delete(matchID);
  }
  /**
   * Return all keys.
   *
   * @override
   */


  listMatches(opts) {
    return [...this.metadata.entries()].filter(_ref => {
      let [, metadata] = _ref;

      if (!opts) {
        return true;
      }

      if (opts.gameName !== undefined && metadata.gameName !== opts.gameName) {
        return false;
      }

      if (opts.where !== undefined) {
        if (opts.where.isGameover !== undefined) {
          const isGameover = metadata.gameover !== undefined;

          if (isGameover !== opts.where.isGameover) {
            return false;
          }
        }

        if (opts.where.updatedBefore !== undefined && metadata.updatedAt >= opts.where.updatedBefore) {
          return false;
        }

        if (opts.where.updatedAfter !== undefined && metadata.updatedAt <= opts.where.updatedAfter) {
          return false;
        }
      }

      return true;
    }).map(_ref2 => {
      let [key] = _ref2;
      return key;
    });
  }

}

class WithLocalStorageMap extends Map {
  constructor(key) {
    super();
    this.key = key;
    const cache = JSON.parse(localStorage.getItem(this.key)) || [];
    cache.forEach(entry => this.set(...entry));
  }

  sync() {
    const entries = [...this.entries()];
    localStorage.setItem(this.key, JSON.stringify(entries));
  }

  set(key, value) {
    super.set(key, value);
    this.sync();
    return this;
  }

  delete(key) {
    const result = super.delete(key);
    this.sync();
    return result;
  }

}
/**
 * locaStorage data storage.
 */


class LocalStorage extends InMemory {
  constructor() {
    let storagePrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bgio';
    super();

    const StorageMap = stateKey => new WithLocalStorageMap("".concat(storagePrefix, "_").concat(stateKey));

    this.state = StorageMap('state');
    this.initial = StorageMap('initial');
    this.metadata = StorageMap('metadata');
    this.log = StorageMap('log');
  }

}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Returns null if it is not a bot's turn.
 * Otherwise, returns a playerID of a bot that may play now.
 */


function GetBotPlayer(state, bots) {
  if (state.ctx.gameover !== undefined) {
    return null;
  }

  if (state.ctx.activePlayers) {
    for (const key of Object.keys(bots)) {
      if (key in state.ctx.activePlayers) {
        return key;
      }
    }
  } else if (state.ctx.currentPlayer in bots) {
    return state.ctx.currentPlayer;
  }

  return null;
}
/**
 * Creates a local version of the master that the client
 * can interact with.
 */


class LocalMaster extends _masterBe1abdd.M {
  constructor(_ref3) {
    let {
      game,
      bots,
      storageKey,
      persist
    } = _ref3;
    const clientCallbacks = {};
    const initializedBots = {};

    if (game && game.ai && bots) {
      for (const playerID in bots) {
        const bot = bots[playerID];
        initializedBots[playerID] = new bot({
          game,
          enumerate: game.ai.enumerate,
          seed: game.seed
        });
      }
    }

    const send = _ref4 => {
      let {
        playerID,
        ...data
      } = _ref4;
      const callback = clientCallbacks[playerID];

      if (callback !== undefined) {
        callback(filterPlayerView(playerID, data));
      }
    };

    const filterPlayerView = (0, _filterPlayerViewC30cdfbf.g)(game);
    const transportAPI = {
      send,
      sendAll: payload => {
        for (const playerID in clientCallbacks) {
          send({
            playerID,
            ...payload
          });
        }
      }
    };
    const storage = persist ? new LocalStorage(storageKey) : new InMemory();
    super(game, storage, transportAPI);

    this.connect = (playerID, callback) => {
      clientCallbacks[playerID] = callback;
    };

    this.subscribe(_ref5 => {
      let {
        state,
        matchID
      } = _ref5;

      if (!bots) {
        return;
      }

      const botPlayer = GetBotPlayer(state, initializedBots);

      if (botPlayer !== null) {
        setTimeout(async () => {
          const botAction = await initializedBots[botPlayer].play(state, botPlayer);
          await this.onUpdate(botAction.action, state._stateID, matchID, botAction.action.payload.playerID);
        }, 100);
      }
    });
  }

}
/**
 * Local
 *
 * Transport interface that embeds a GameMaster within it
 * that you can connect multiple clients to.
 */


class LocalTransport extends _transportCe07b.T {
  /**
   * Creates a new Mutiplayer instance.
   * @param {string} matchID - The game ID to connect to.
   * @param {string} playerID - The player ID associated with this client.
   * @param {string} gameName - The game type (the `name` field in `Game`).
   * @param {string} numPlayers - The number of players.
   */
  constructor(_ref6) {
    let {
      master,
      ...opts
    } = _ref6;
    super(opts);
    this.master = master;
  }

  sendChatMessage(matchID, chatMessage) {
    const args = [matchID, chatMessage, this.credentials];
    this.master.onChatMessage(...args);
  }

  sendAction(state, action) {
    this.master.onUpdate(action, state._stateID, this.matchID, this.playerID);
  }

  requestSync() {
    this.master.onSync(this.matchID, this.playerID, this.credentials, this.numPlayers);
  }

  connect() {
    this.setConnectionStatus(true);
    this.master.connect(this.playerID, data => this.notifyClient(data));
    this.requestSync();
  }

  disconnect() {
    this.setConnectionStatus(false);
  }

  updateMatchID(id) {
    this.matchID = id;
    this.connect();
  }

  updatePlayerID(id) {
    this.playerID = id;
    this.connect();
  }

  updateCredentials(credentials) {
    this.credentials = credentials;
    this.connect();
  }

}
/**
 * Global map storing local master instances.
 */


const localMasters = new Map();
/**
 * Create a local transport.
 */

function Local() {
  let {
    bots,
    persist,
    storageKey
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return transportOpts => {
    const {
      gameKey,
      game
    } = transportOpts;
    let master;
    const instance = localMasters.get(gameKey);

    if (instance && instance.bots === bots && instance.storageKey === storageKey && instance.persist === persist) {
      master = instance.master;
    }

    if (!master) {
      master = new LocalMaster({
        game,
        bots,
        persist,
        storageKey
      });
      localMasters.set(gameKey, {
        master,
        bots,
        persist,
        storageKey
      });
    }

    return new LocalTransport({
      master,
      ...transportOpts
    });
  };
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


const io = _socket.default;
/**
 * SocketIO
 *
 * Transport interface that interacts with the Master via socket.io.
 */

class SocketIOTransport extends _transportCe07b.T {
  /**
   * Creates a new Multiplayer instance.
   * @param {object} socket - Override for unit tests.
   * @param {object} socketOpts - Options to pass to socket.io.
   * @param {object} store - Redux store
   * @param {string} matchID - The game ID to connect to.
   * @param {string} playerID - The player ID associated with this client.
   * @param {string} credentials - Authentication credentials
   * @param {string} gameName - The game type (the `name` field in `Game`).
   * @param {string} numPlayers - The number of players.
   * @param {string} server - The game server in the form of 'hostname:port'. Defaults to the server serving the client if not provided.
   */
  constructor(_ref7) {
    let {
      socket,
      socketOpts,
      server,
      ...opts
    } = _ref7;
    super(opts);
    this.server = server;
    this.socket = socket;
    this.socketOpts = socketOpts;
  }

  sendAction(state, action) {
    const args = [action, state._stateID, this.matchID, this.playerID];
    this.socket.emit('update', ...args);
  }

  sendChatMessage(matchID, chatMessage) {
    const args = [matchID, chatMessage, this.credentials];
    this.socket.emit('chat', ...args);
  }

  connect() {
    if (!this.socket) {
      if (this.server) {
        let server = this.server;

        if (server.search(/^https?:\/\//) == -1) {
          server = 'http://' + this.server;
        }

        if (server.slice(-1) != '/') {
          // add trailing slash if not already present
          server = server + '/';
        }

        this.socket = io(server + this.gameName, this.socketOpts);
      } else {
        this.socket = io('/' + this.gameName, this.socketOpts);
      }
    } // Called when another player makes a move and the
    // master broadcasts the update as a patch to other clients (including
    // this one).


    this.socket.on('patch', (matchID, prevStateID, stateID, patch, deltalog) => {
      this.notifyClient({
        type: 'patch',
        args: [matchID, prevStateID, stateID, patch, deltalog]
      });
    }); // Called when another player makes a move and the
    // master broadcasts the update to other clients (including
    // this one).

    this.socket.on('update', (matchID, state, deltalog) => {
      this.notifyClient({
        type: 'update',
        args: [matchID, state, deltalog]
      });
    }); // Called when the client first connects to the master
    // and requests the current game state.

    this.socket.on('sync', (matchID, syncInfo) => {
      this.notifyClient({
        type: 'sync',
        args: [matchID, syncInfo]
      });
    }); // Called when new player joins the match or changes
    // it's connection status

    this.socket.on('matchData', (matchID, matchData) => {
      this.notifyClient({
        type: 'matchData',
        args: [matchID, matchData]
      });
    });
    this.socket.on('chat', (matchID, chatMessage) => {
      this.notifyClient({
        type: 'chat',
        args: [matchID, chatMessage]
      });
    }); // Keep track of connection status.

    this.socket.on('connect', () => {
      // Initial sync to get game state.
      this.requestSync();
      this.setConnectionStatus(true);
    });
    this.socket.on('disconnect', () => {
      this.setConnectionStatus(false);
    });
  }

  disconnect() {
    this.socket.close();
    this.socket = null;
    this.setConnectionStatus(false);
  }

  requestSync() {
    if (this.socket) {
      const args = [this.matchID, this.playerID, this.credentials, this.numPlayers];
      this.socket.emit('sync', ...args);
    }
  }

  updateMatchID(id) {
    this.matchID = id;
    this.requestSync();
  }

  updatePlayerID(id) {
    this.playerID = id;
    this.requestSync();
  }

  updateCredentials(credentials) {
    this.credentials = credentials;
    this.requestSync();
  }

}

function SocketIO() {
  let {
    server,
    socketOpts
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return transportOpts => new SocketIOTransport({
    server,
    socketOpts,
    ...transportOpts
  });
}
},{"./transport-ce07b771.js":"node_modules/boardgame.io/dist/esm/transport-ce07b771.js","./util-b1699aa1.js":"node_modules/boardgame.io/dist/esm/util-b1699aa1.js","./master-be1abdd0.js":"node_modules/boardgame.io/dist/esm/master-be1abdd0.js","./filter-player-view-c30cdfbf.js":"node_modules/boardgame.io/dist/esm/filter-player-view-c30cdfbf.js","socket.io-client":"node_modules/socket.io-client/build/esm/index.js"}],"node_modules/boardgame.io/dist/esm/multiplayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Local", {
  enumerable: true,
  get: function () {
    return _socketioE4fb268a.L;
  }
});
Object.defineProperty(exports, "SocketIO", {
  enumerable: true,
  get: function () {
    return _socketioE4fb268a.S;
  }
});

require("redux");

require("./turn-order-0b7dce3d.js");

require("immer");

require("./plugin-random-087f861e.js");

require("lodash.isplainobject");

require("./reducer-07c7b307.js");

require("rfc6902");

require("./initialize-9ac1bbf5.js");

require("./transport-ce07b771.js");

require("./util-b1699aa1.js");

var _socketioE4fb268a = require("./socketio-e4fb268a.js");

require("./master-be1abdd0.js");

require("./filter-player-view-c30cdfbf.js");

require("socket.io-client");
},{"redux":"node_modules/redux/es/redux.js","./turn-order-0b7dce3d.js":"node_modules/boardgame.io/dist/esm/turn-order-0b7dce3d.js","immer":"node_modules/immer/dist/immer.esm.js","./plugin-random-087f861e.js":"node_modules/boardgame.io/dist/esm/plugin-random-087f861e.js","lodash.isplainobject":"node_modules/lodash.isplainobject/index.js","./reducer-07c7b307.js":"node_modules/boardgame.io/dist/esm/reducer-07c7b307.js","rfc6902":"node_modules/rfc6902/index.js","./initialize-9ac1bbf5.js":"node_modules/boardgame.io/dist/esm/initialize-9ac1bbf5.js","./transport-ce07b771.js":"node_modules/boardgame.io/dist/esm/transport-ce07b771.js","./util-b1699aa1.js":"node_modules/boardgame.io/dist/esm/util-b1699aa1.js","./socketio-e4fb268a.js":"node_modules/boardgame.io/dist/esm/socketio-e4fb268a.js","./master-be1abdd0.js":"node_modules/boardgame.io/dist/esm/master-be1abdd0.js","./filter-player-view-c30cdfbf.js":"node_modules/boardgame.io/dist/esm/filter-player-view-c30cdfbf.js","socket.io-client":"node_modules/socket.io-client/build/esm/index.js"}],"src/App.js":[function(require,module,exports) {
"use strict";

var _client = require("boardgame.io/client");

var _Game = require("./Game");

var _multiplayer = require("boardgame.io/multiplayer");

class ExampleClient {
  constructor(rootElement) {
    let {
      playerID
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.client = (0, _client.Client)({
      game: _Game.Example,
      multiplayer: (0, _multiplayer.SocketIO)({
        server: 'localhost:8000'
      }),
      playerID
    });
    this.client.start();
    this.rootElement = rootElement;
    this.createBoard();
    this.attachListeners();
    this.client.subscribe(state => this.update(state));
  }

  createBoard() {
    // Create cells in rows for the Tic-Tac-Toe board.
    const rows = [];

    for (let i = 0; i < 3; i++) {
      const cells = [];

      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push("<td class=\"cell\" data-id=\"".concat(id, "\"></td>"));
      }

      rows.push("<tr>".concat(cells.join(''), "</tr>"));
    } // Add the HTML to our app <div>.
    // We’ll use the empty <p> to display the game winner later.


    this.rootElement.innerHTML = "\n      <table>".concat(rows.join(''), "</table>\n      <p class=\"winner\"></p>\n    ");
  }

  attachListeners() {
    const handleCellClick = event => {
      console.log(event.target);
      const id = parseInt(event.target.dataset.id);
      this.client.moves.clickCell(id); // event.target.innerHTML = this.client.ctx.currentPlayer
    }; // Attach the event listener to each of the board cells.


    const cells = this.rootElement.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.onclick = handleCellClick;
    });
  }

  update(state) {
    if (state === null) return;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      console.log(cell);
      const cellId = parseInt(cell.dataset.id);
      const cellValue = state.G.cells[cellId];
      cell.textContent = cellValue !== null ? cellValue : '';
    });
    const messageEl = document.querySelector('.winner');

    if (state.ctx.gameover) {
      messageEl.textContent = state.ctx.gameover.winner !== undefined ? 'Winner: ' + state.ctx.gameover.winner : 'Draw!';
    } else {
      messageEl.textContent = '';
    }
  }

}

const appElement = document.getElementById('app');
const playerID = 1;
const app = new ExampleClient(appElement, {
  playerID
});
},{"boardgame.io/client":"node_modules/boardgame.io/dist/esm/client.js","./Game":"src/Game.js","boardgame.io/multiplayer":"node_modules/boardgame.io/dist/esm/multiplayer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40151" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/App.js"], null)
//# sourceMappingURL=/App.f684dadd.js.map