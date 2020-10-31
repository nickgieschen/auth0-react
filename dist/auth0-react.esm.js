import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
  useContext,
} from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e = function (t, n) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(t, n);
};
function t(t, n) {
  function i() {
    this.constructor = t;
  }
  e(t, n),
    (t.prototype =
      null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
}
var n = function () {
  return (n =
    Object.assign ||
    function (e) {
      for (var t, n = 1, i = arguments.length; n < i; n++)
        for (var r in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e;
    }).apply(this, arguments);
};
function i(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
        (n[i[r]] = e[i[r]]);
  }
  return n;
}
function r(e, t, n, i) {
  return new (n || (n = Promise))(function (r, o) {
    function c(e) {
      try {
        a(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function s(e) {
      try {
        a(i.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function a(e) {
      e.done
        ? r(e.value)
        : new n(function (t) {
            t(e.value);
          }).then(c, s);
    }
    a((i = i.apply(e, t || [])).next());
  });
}
function o(e, t) {
  var n,
    i,
    r,
    o,
    c = {
      label: 0,
      sent: function () {
        if (1 & r[0]) throw r[1];
        return r[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: s(0), throw: s(1), return: s(2) }),
    'function' == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(o) {
    return function (s) {
      return (function (o) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; c; )
          try {
            if (
              ((n = 1),
              i &&
                (r =
                  2 & o[0]
                    ? i.return
                    : o[0]
                    ? i.throw || ((r = i.return) && r.call(i), 0)
                    : i.next) &&
                !(r = r.call(i, o[1])).done)
            )
              return r;
            switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
              case 0:
              case 1:
                r = o;
                break;
              case 4:
                return c.label++, { value: o[1], done: !1 };
              case 5:
                c.label++, (i = o[1]), (o = [0]);
                continue;
              case 7:
                (o = c.ops.pop()), c.trys.pop();
                continue;
              default:
                if (
                  !((r = c.trys),
                  (r = r.length > 0 && r[r.length - 1]) ||
                    (6 !== o[0] && 2 !== o[0]))
                ) {
                  c = 0;
                  continue;
                }
                if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                  c.label = o[1];
                  break;
                }
                if (6 === o[0] && c.label < r[1]) {
                  (c.label = r[1]), (r = o);
                  break;
                }
                if (r && c.label < r[2]) {
                  (c.label = r[2]), c.ops.push(o);
                  break;
                }
                r[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            o = t.call(e, c);
          } catch (e) {
            (o = [6, e]), (i = 0);
          } finally {
            n = r = 0;
          }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, s]);
    };
  }
}
var c =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function a(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var u = function (e) {
    return e && e.Math == Math && e;
  },
  l =
    u('object' == typeof globalThis && globalThis) ||
    u('object' == typeof window && window) ||
    u('object' == typeof self && self) ||
    u('object' == typeof c && c) ||
    Function('return this')(),
  d = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  g = !d(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  I = {}.propertyIsEnumerable,
  f = Object.getOwnPropertyDescriptor,
  p = {
    f:
      f && !I.call({ 1: 2 }, 1)
        ? function (e) {
            var t = f(this, e);
            return !!t && t.enumerable;
          }
        : I,
  },
  h = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    };
  },
  y = {}.toString,
  b = function (e) {
    return y.call(e).slice(8, -1);
  },
  m = ''.split,
  B = d(function () {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function (e) {
        return 'String' == b(e) ? m.call(e, '') : Object(e);
      }
    : Object,
  F = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  v = function (e) {
    return B(F(e));
  },
  C = function (e) {
    return 'object' == typeof e ? null !== e : 'function' == typeof e;
  },
  U = function (e, t) {
    if (!C(e)) return e;
    var n, i;
    if (t && 'function' == typeof (n = e.toString) && !C((i = n.call(e))))
      return i;
    if ('function' == typeof (n = e.valueOf) && !C((i = n.call(e)))) return i;
    if (!t && 'function' == typeof (n = e.toString) && !C((i = n.call(e))))
      return i;
    throw TypeError("Can't convert object to primitive value");
  },
  S = {}.hasOwnProperty,
  V = function (e, t) {
    return S.call(e, t);
  },
  Z = l.document,
  X = C(Z) && C(Z.createElement),
  G = function (e) {
    return X ? Z.createElement(e) : {};
  },
  w =
    !g &&
    !d(function () {
      return (
        7 !=
        Object.defineProperty(G('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  R = Object.getOwnPropertyDescriptor,
  x = {
    f: g
      ? R
      : function (e, t) {
          if (((e = v(e)), (t = U(t, !0)), w))
            try {
              return R(e, t);
            } catch (e) {}
          if (V(e, t)) return h(!p.f.call(e, t), e[t]);
        },
  },
  A = function (e) {
    if (!C(e)) throw TypeError(String(e) + ' is not an object');
    return e;
  },
  Q = Object.defineProperty,
  W = {
    f: g
      ? Q
      : function (e, t, n) {
          if ((A(e), (t = U(t, !0)), A(n), w))
            try {
              return Q(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        },
  },
  L = g
    ? function (e, t, n) {
        return W.f(e, t, h(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  H = function (e, t) {
    try {
      L(l, e, t);
    } catch (n) {
      l[e] = t;
    }
    return t;
  },
  J = l['__core-js_shared__'] || H('__core-js_shared__', {}),
  k = Function.toString;
'function' != typeof J.inspectSource &&
  (J.inspectSource = function (e) {
    return k.call(e);
  });
var E,
  Y,
  T,
  K = J.inspectSource,
  N = l.WeakMap,
  O = 'function' == typeof N && /native code/.test(K(N)),
  z = a(function (e) {
    (e.exports = function (e, t) {
      return J[e] || (J[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.6.5',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    });
  }),
  j = 0,
  P = Math.random(),
  _ = function (e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++j + P).toString(36)
    );
  },
  D = z('keys'),
  M = function (e) {
    return D[e] || (D[e] = _(e));
  },
  q = {},
  $ = l.WeakMap;
if (O) {
  var ee = new $(),
    te = ee.get,
    ne = ee.has,
    ie = ee.set;
  (E = function (e, t) {
    return ie.call(ee, e, t), t;
  }),
    (Y = function (e) {
      return te.call(ee, e) || {};
    }),
    (T = function (e) {
      return ne.call(ee, e);
    });
} else {
  var re = M('state');
  (q[re] = !0),
    (E = function (e, t) {
      return L(e, re, t), t;
    }),
    (Y = function (e) {
      return V(e, re) ? e[re] : {};
    }),
    (T = function (e) {
      return V(e, re);
    });
}
var oe,
  ce = {
    set: E,
    get: Y,
    has: T,
    enforce: function (e) {
      return T(e) ? Y(e) : E(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!C(t) || (n = Y(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required');
        return n;
      };
    },
  },
  se = a(function (e) {
    var t = ce.get,
      n = ce.enforce,
      i = String(String).split('String');
    (e.exports = function (e, t, r, o) {
      var c = !!o && !!o.unsafe,
        s = !!o && !!o.enumerable,
        a = !!o && !!o.noTargetGet;
      'function' == typeof r &&
        ('string' != typeof t || V(r, 'name') || L(r, 'name', t),
        (n(r).source = i.join('string' == typeof t ? t : ''))),
        e !== l
          ? (c ? !a && e[t] && (s = !0) : delete e[t],
            s ? (e[t] = r) : L(e, t, r))
          : s
          ? (e[t] = r)
          : H(t, r);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && t(this).source) || K(this);
    });
  }),
  ae = l,
  ue = function (e) {
    return 'function' == typeof e ? e : void 0;
  },
  le = function (e, t) {
    return arguments.length < 2
      ? ue(ae[e]) || ue(l[e])
      : (ae[e] && ae[e][t]) || (l[e] && l[e][t]);
  },
  de = Math.ceil,
  ge = Math.floor,
  Ie = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? ge : de)(e);
  },
  fe = Math.min,
  pe = function (e) {
    return e > 0 ? fe(Ie(e), 9007199254740991) : 0;
  },
  he = Math.max,
  ye = Math.min,
  be = function (e) {
    return function (t, n, i) {
      var r,
        o = v(t),
        c = pe(o.length),
        s = (function (e, t) {
          var n = Ie(e);
          return n < 0 ? he(n + t, 0) : ye(n, t);
        })(i, c);
      if (e && n != n) {
        for (; c > s; ) if ((r = o[s++]) != r) return !0;
      } else
        for (; c > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  me = { includes: be(!0), indexOf: be(!1) },
  Be = me.indexOf,
  Fe = function (e, t) {
    var n,
      i = v(e),
      r = 0,
      o = [];
    for (n in i) !V(q, n) && V(i, n) && o.push(n);
    for (; t.length > r; ) V(i, (n = t[r++])) && (~Be(o, n) || o.push(n));
    return o;
  },
  ve = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  Ce = ve.concat('length', 'prototype'),
  Ue = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return Fe(e, Ce);
      },
  },
  Se = { f: Object.getOwnPropertySymbols },
  Ve =
    le('Reflect', 'ownKeys') ||
    function (e) {
      var t = Ue.f(A(e)),
        n = Se.f;
      return n ? t.concat(n(e)) : t;
    },
  Ze = function (e, t) {
    for (var n = Ve(t), i = W.f, r = x.f, o = 0; o < n.length; o++) {
      var c = n[o];
      V(e, c) || i(e, c, r(t, c));
    }
  },
  Xe = /#|\.prototype\./,
  Ge = function (e, t) {
    var n = Re[we(e)];
    return n == Ae || (n != xe && ('function' == typeof t ? d(t) : !!t));
  },
  we = (Ge.normalize = function (e) {
    return String(e).replace(Xe, '.').toLowerCase();
  }),
  Re = (Ge.data = {}),
  xe = (Ge.NATIVE = 'N'),
  Ae = (Ge.POLYFILL = 'P'),
  Qe = Ge,
  We = x.f,
  Le = function (e, t) {
    var n,
      i,
      r,
      o,
      c,
      s = e.target,
      a = e.global,
      u = e.stat;
    if ((n = a ? l : u ? l[s] || H(s, {}) : (l[s] || {}).prototype))
      for (i in t) {
        if (
          ((o = t[i]),
          (r = e.noTargetGet ? (c = We(n, i)) && c.value : n[i]),
          !Qe(a ? i : s + (u ? '.' : '#') + i, e.forced) && void 0 !== r)
        ) {
          if (typeof o == typeof r) continue;
          Ze(o, r);
        }
        (e.sham || (r && r.sham)) && L(o, 'sham', !0), se(n, i, o, e);
      }
  },
  He =
    !!Object.getOwnPropertySymbols &&
    !d(function () {
      return !String(Symbol());
    }),
  Je = He && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  ke = z('wks'),
  Ee = l.Symbol,
  Ye = Je ? Ee : (Ee && Ee.withoutSetter) || _,
  Te = function (e) {
    return (
      V(ke, e) ||
        (He && V(Ee, e) ? (ke[e] = Ee[e]) : (ke[e] = Ye('Symbol.' + e))),
      ke[e]
    );
  },
  Ke = Te('match'),
  Ne = function (e) {
    if (
      (function (e) {
        var t;
        return C(e) && (void 0 !== (t = e[Ke]) ? !!t : 'RegExp' == b(e));
      })(e)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
  Oe = Te('match'),
  ze = function (e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[Oe] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  je = x.f,
  Pe = ''.startsWith,
  _e = Math.min,
  De = ze('startsWith'),
  Me = !(De || ((oe = je(String.prototype, 'startsWith')), !oe || oe.writable));
Le(
  { target: 'String', proto: !0, forced: !Me && !De },
  {
    startsWith: function (e) {
      var t = String(F(this));
      Ne(e);
      var n = pe(_e(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        i = String(e);
      return Pe ? Pe.call(t, i, n) : t.slice(n, n + i.length) === i;
    },
  }
);
var qe,
  $e,
  et,
  tt = function (e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function');
    return e;
  },
  nt = function (e, t, n) {
    if ((tt(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function () {
          return e.call(t);
        };
      case 1:
        return function (n) {
          return e.call(t, n);
        };
      case 2:
        return function (n, i) {
          return e.call(t, n, i);
        };
      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  },
  it = Function.call,
  rt = function (e, t, n) {
    return nt(it, l[e].prototype[t], n);
  },
  ot =
    (rt('String', 'startsWith'),
    function (e) {
      return function (t, n) {
        var i,
          r,
          o = String(F(t)),
          c = Ie(n),
          s = o.length;
        return c < 0 || c >= s
          ? e
            ? ''
            : void 0
          : (i = o.charCodeAt(c)) < 55296 ||
            i > 56319 ||
            c + 1 === s ||
            (r = o.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? e
            ? o.charAt(c)
            : i
          : e
          ? o.slice(c, c + 2)
          : r - 56320 + ((i - 55296) << 10) + 65536;
      };
    }),
  ct = { codeAt: ot(!1), charAt: ot(!0) },
  st = function (e) {
    return Object(F(e));
  },
  at = !d(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  ut = M('IE_PROTO'),
  lt = Object.prototype,
  dt = at
    ? Object.getPrototypeOf
    : function (e) {
        return (
          (e = st(e)),
          V(e, ut)
            ? e[ut]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? lt
            : null
        );
      },
  gt = Te('iterator'),
  It = !1;
[].keys &&
  ('next' in (et = [].keys())
    ? ($e = dt(dt(et))) !== Object.prototype && (qe = $e)
    : (It = !0)),
  null == qe && (qe = {}),
  V(qe, gt) ||
    L(qe, gt, function () {
      return this;
    });
var ft,
  pt = { IteratorPrototype: qe, BUGGY_SAFARI_ITERATORS: It },
  ht =
    Object.keys ||
    function (e) {
      return Fe(e, ve);
    },
  yt = g
    ? Object.defineProperties
    : function (e, t) {
        A(e);
        for (var n, i = ht(t), r = i.length, o = 0; r > o; )
          W.f(e, (n = i[o++]), t[n]);
        return e;
      },
  bt = le('document', 'documentElement'),
  mt = M('IE_PROTO'),
  Bt = function () {},
  Ft = function (e) {
    return '<script>' + e + '</script>';
  },
  vt = function () {
    try {
      ft = document.domain && new ActiveXObject('htmlfile');
    } catch (e) {}
    var e, t;
    vt = ft
      ? (function (e) {
          e.write(Ft('')), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        })(ft)
      : (((t = G('iframe')).style.display = 'none'),
        bt.appendChild(t),
        (t.src = String('javascript:')),
        (e = t.contentWindow.document).open(),
        e.write(Ft('document.F=Object')),
        e.close(),
        e.F);
    for (var n = ve.length; n--; ) delete vt.prototype[ve[n]];
    return vt();
  };
q[mt] = !0;
var Ct =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((Bt.prototype = A(e)),
            (n = new Bt()),
            (Bt.prototype = null),
            (n[mt] = e))
          : (n = vt()),
        void 0 === t ? n : yt(n, t)
      );
    },
  Ut = W.f,
  St = Te('toStringTag'),
  Vt = function (e, t, n) {
    e &&
      !V((e = n ? e : e.prototype), St) &&
      Ut(e, St, { configurable: !0, value: t });
  },
  Zt = {},
  Xt = pt.IteratorPrototype,
  Gt = function () {
    return this;
  },
  wt =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var e,
            t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function (n, i) {
            return (
              A(n),
              (function (e) {
                if (!C(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + ' as a prototype');
              })(i),
              t ? e.call(n, i) : (n.__proto__ = i),
              n
            );
          };
        })()
      : void 0),
  Rt = pt.IteratorPrototype,
  xt = pt.BUGGY_SAFARI_ITERATORS,
  At = Te('iterator'),
  Qt = function () {
    return this;
  },
  Wt = function (e, t, n, i, r, o, c) {
    !(function (e, t, n) {
      var i = t + ' Iterator';
      (e.prototype = Ct(Xt, { next: h(1, n) })), Vt(e, i, !1), (Zt[i] = Gt);
    })(n, t, i);
    var s,
      a,
      u,
      l = function (e) {
        if (e === r && p) return p;
        if (!xt && e in I) return I[e];
        switch (e) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      },
      d = t + ' Iterator',
      g = !1,
      I = e.prototype,
      f = I[At] || I['@@iterator'] || (r && I[r]),
      p = (!xt && f) || l(r),
      y = ('Array' == t && I.entries) || f;
    if (
      (y &&
        ((s = dt(y.call(new e()))),
        Rt !== Object.prototype &&
          s.next &&
          (dt(s) !== Rt &&
            (wt ? wt(s, Rt) : 'function' != typeof s[At] && L(s, At, Qt)),
          Vt(s, d, !0))),
      'values' == r &&
        f &&
        'values' !== f.name &&
        ((g = !0),
        (p = function () {
          return f.call(this);
        })),
      I[At] !== p && L(I, At, p),
      (Zt[t] = p),
      r)
    )
      if (
        ((a = {
          values: l('values'),
          keys: o ? p : l('keys'),
          entries: l('entries'),
        }),
        c)
      )
        for (u in a) (xt || g || !(u in I)) && se(I, u, a[u]);
      else Le({ target: t, proto: !0, forced: xt || g }, a);
    return a;
  },
  Lt = ct.charAt,
  Ht = ce.set,
  Jt = ce.getterFor('String Iterator');
Wt(
  String,
  'String',
  function (e) {
    Ht(this, { type: 'String Iterator', string: String(e), index: 0 });
  },
  function () {
    var e,
      t = Jt(this),
      n = t.string,
      i = t.index;
    return i >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Lt(n, i)), (t.index += e.length), { value: e, done: !1 });
  }
);
var kt = function (e, t, n, i) {
    try {
      return i ? t(A(n)[0], n[1]) : t(n);
    } catch (t) {
      var r = e.return;
      throw (void 0 !== r && A(r.call(e)), t);
    }
  },
  Et = Te('iterator'),
  Yt = Array.prototype,
  Tt = function (e) {
    return void 0 !== e && (Zt.Array === e || Yt[Et] === e);
  },
  Kt = function (e, t, n) {
    var i = U(t);
    i in e ? W.f(e, i, h(0, n)) : (e[i] = n);
  },
  Nt = {};
Nt[Te('toStringTag')] = 'z';
var Ot = '[object z]' === String(Nt),
  zt = Te('toStringTag'),
  jt =
    'Arguments' ==
    b(
      (function () {
        return arguments;
      })()
    ),
  Pt = Ot
    ? b
    : function (e) {
        var t, n, i;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), zt))
          ? n
          : jt
          ? b(t)
          : 'Object' == (i = b(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : i;
      },
  _t = Te('iterator'),
  Dt = function (e) {
    if (null != e) return e[_t] || e['@@iterator'] || Zt[Pt(e)];
  },
  Mt = Te('iterator'),
  qt = !1;
try {
  var $t = 0,
    en = {
      next: function () {
        return { done: !!$t++ };
      },
      return: function () {
        qt = !0;
      },
    };
  (en[Mt] = function () {
    return this;
  }),
    Array.from(en, function () {
      throw 2;
    });
} catch (e) {}
var tn = function (e, t) {
    if (!t && !qt) return !1;
    var n = !1;
    try {
      var i = {};
      (i[Mt] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          },
        };
      }),
        e(i);
    } catch (e) {}
    return n;
  },
  nn = !tn(function (e) {
    Array.from(e);
  });
Le(
  { target: 'Array', stat: !0, forced: nn },
  {
    from: function (e) {
      var t,
        n,
        i,
        r,
        o,
        c,
        s = st(e),
        a = 'function' == typeof this ? this : Array,
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        d = void 0 !== l,
        g = Dt(s),
        I = 0;
      if (
        (d && (l = nt(l, u > 2 ? arguments[2] : void 0, 2)),
        null == g || (a == Array && Tt(g)))
      )
        for (n = new a((t = pe(s.length))); t > I; I++)
          (c = d ? l(s[I], I) : s[I]), Kt(n, I, c);
      else
        for (o = (r = g.call(s)).next, n = new a(); !(i = o.call(r)).done; I++)
          (c = d ? kt(r, l, [i.value, I], !0) : i.value), Kt(n, I, c);
      return (n.length = I), n;
    },
  }
);
ae.Array.from;
var rn,
  on = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  cn = W.f,
  sn = l.Int8Array,
  an = sn && sn.prototype,
  un = l.Uint8ClampedArray,
  ln = un && un.prototype,
  dn = sn && dt(sn),
  gn = an && dt(an),
  In = Object.prototype,
  fn = In.isPrototypeOf,
  pn = Te('toStringTag'),
  hn = _('TYPED_ARRAY_TAG'),
  yn = on && !!wt && 'Opera' !== Pt(l.opera),
  bn = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  },
  mn = function (e) {
    return C(e) && V(bn, Pt(e));
  };
for (rn in bn) l[rn] || (yn = !1);
if (
  (!yn || 'function' != typeof dn || dn === Function.prototype) &&
  ((dn = function () {
    throw TypeError('Incorrect invocation');
  }),
  yn)
)
  for (rn in bn) l[rn] && wt(l[rn], dn);
if ((!yn || !gn || gn === In) && ((gn = dn.prototype), yn))
  for (rn in bn) l[rn] && wt(l[rn].prototype, gn);
if ((yn && dt(ln) !== gn && wt(ln, gn), g && !V(gn, pn)))
  for (rn in (cn(gn, pn, {
    get: function () {
      return C(this) ? this[hn] : void 0;
    },
  }),
  bn))
    l[rn] && L(l[rn], hn, rn);
var Bn = function (e) {
    if (mn(e)) return e;
    throw TypeError('Target is not a typed array');
  },
  Fn = function (e) {
    if (wt) {
      if (fn.call(dn, e)) return e;
    } else
      for (var t in bn)
        if (V(bn, rn)) {
          var n = l[t];
          if (n && (e === n || fn.call(n, e))) return e;
        }
    throw TypeError('Target is not a typed array constructor');
  },
  vn = function (e, t, n) {
    if (g) {
      if (n)
        for (var i in bn) {
          var r = l[i];
          r && V(r.prototype, e) && delete r.prototype[e];
        }
      (gn[e] && !n) || se(gn, e, n ? t : (yn && an[e]) || t);
    }
  },
  Cn = Te('species'),
  Un = Bn,
  Sn = Fn,
  Vn = [].slice;
vn(
  'slice',
  function (e, t) {
    for (
      var n = Vn.call(Un(this), e, t),
        i = (function (e, t) {
          var n,
            i = A(e).constructor;
          return void 0 === i || null == (n = A(i)[Cn]) ? t : tt(n);
        })(this, this.constructor),
        r = 0,
        o = n.length,
        c = new (Sn(i))(o);
      o > r;

    )
      c[r] = n[r++];
    return c;
  },
  d(function () {
    new Int8Array(1).slice();
  })
);
var Zn = Te('unscopables'),
  Xn = Array.prototype;
null == Xn[Zn] && W.f(Xn, Zn, { configurable: !0, value: Ct(null) });
var Gn = function (e) {
    Xn[Zn][e] = !0;
  },
  wn = Object.defineProperty,
  Rn = {},
  xn = function (e) {
    throw e;
  },
  An = me.includes,
  Qn = (function (e, t) {
    if (V(Rn, e)) return Rn[e];
    t || (t = {});
    var n = [][e],
      i = !!V(t, 'ACCESSORS') && t.ACCESSORS,
      r = V(t, 0) ? t[0] : xn,
      o = V(t, 1) ? t[1] : void 0;
    return (Rn[e] =
      !!n &&
      !d(function () {
        if (i && !g) return !0;
        var e = { length: -1 };
        i ? wn(e, 1, { enumerable: !0, get: xn }) : (e[1] = 1), n.call(e, r, o);
      }));
  })('indexOf', { ACCESSORS: !0, 1: 0 });
Le(
  { target: 'Array', proto: !0, forced: !Qn },
  {
    includes: function (e) {
      return An(this, e, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  Gn('includes');
rt('Array', 'includes');
Le(
  { target: 'String', proto: !0, forced: !ze('includes') },
  {
    includes: function (e) {
      return !!~String(F(this)).indexOf(
        Ne(e),
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
);
rt('String', 'includes');
var Wn = !d(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Ln = a(function (e) {
    var t = W.f,
      n = _('meta'),
      i = 0,
      r =
        Object.isExtensible ||
        function () {
          return !0;
        },
      o = function (e) {
        t(e, n, { value: { objectID: 'O' + ++i, weakData: {} } });
      },
      c = (e.exports = {
        REQUIRED: !1,
        fastKey: function (e, t) {
          if (!C(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!V(e, n)) {
            if (!r(e)) return 'F';
            if (!t) return 'E';
            o(e);
          }
          return e[n].objectID;
        },
        getWeakData: function (e, t) {
          if (!V(e, n)) {
            if (!r(e)) return !0;
            if (!t) return !1;
            o(e);
          }
          return e[n].weakData;
        },
        onFreeze: function (e) {
          return Wn && c.REQUIRED && r(e) && !V(e, n) && o(e), e;
        },
      });
    q[n] = !0;
  }),
  Hn =
    (Ln.REQUIRED,
    Ln.fastKey,
    Ln.getWeakData,
    Ln.onFreeze,
    a(function (e) {
      var t = function (e, t) {
        (this.stopped = e), (this.result = t);
      };
      (e.exports = function (e, n, i, r, o) {
        var c,
          s,
          a,
          u,
          l,
          d,
          g,
          I = nt(n, i, r ? 2 : 1);
        if (o) c = e;
        else {
          if ('function' != typeof (s = Dt(e)))
            throw TypeError('Target is not iterable');
          if (Tt(s)) {
            for (a = 0, u = pe(e.length); u > a; a++)
              if (
                (l = r ? I(A((g = e[a]))[0], g[1]) : I(e[a])) &&
                l instanceof t
              )
                return l;
            return new t(!1);
          }
          c = s.call(e);
        }
        for (d = c.next; !(g = d.call(c)).done; )
          if (
            'object' == typeof (l = kt(c, I, g.value, r)) &&
            l &&
            l instanceof t
          )
            return l;
        return new t(!1);
      }).stop = function (e) {
        return new t(!0, e);
      };
    })),
  Jn = function (e, t, n) {
    if (!(e instanceof t))
      throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
    return e;
  },
  kn = function (e, t, n) {
    for (var i in t) se(e, i, t[i], n);
    return e;
  },
  En = Te('species'),
  Yn = W.f,
  Tn = Ln.fastKey,
  Kn = ce.set,
  Nn = ce.getterFor,
  On =
    ((function (e, t, n) {
      var i = -1 !== e.indexOf('Map'),
        r = -1 !== e.indexOf('Weak'),
        o = i ? 'set' : 'add',
        c = l[e],
        s = c && c.prototype,
        a = c,
        u = {},
        g = function (e) {
          var t = s[e];
          se(
            s,
            e,
            'add' == e
              ? function (e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : 'delete' == e
              ? function (e) {
                  return !(r && !C(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : 'get' == e
              ? function (e) {
                  return r && !C(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : 'has' == e
              ? function (e) {
                  return !(r && !C(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : function (e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        Qe(
          e,
          'function' != typeof c ||
            !(
              r ||
              (s.forEach &&
                !d(function () {
                  new c().entries().next();
                }))
            )
        )
      )
        (a = n.getConstructor(t, e, i, o)), (Ln.REQUIRED = !0);
      else if (Qe(e, !0)) {
        var I = new a(),
          f = I[o](r ? {} : -0, 1) != I,
          p = d(function () {
            I.has(1);
          }),
          h = tn(function (e) {
            new c(e);
          }),
          y =
            !r &&
            d(function () {
              for (var e = new c(), t = 5; t--; ) e[o](t, t);
              return !e.has(-0);
            });
        h ||
          (((a = t(function (t, n) {
            Jn(t, a, e);
            var r = (function (e, t, n) {
              var i, r;
              return (
                wt &&
                  'function' == typeof (i = t.constructor) &&
                  i !== n &&
                  C((r = i.prototype)) &&
                  r !== n.prototype &&
                  wt(e, r),
                e
              );
            })(new c(), t, a);
            return null != n && Hn(n, r[o], r, i), r;
          })).prototype = s),
          (s.constructor = a)),
          (p || y) && (g('delete'), g('has'), i && g('get')),
          (y || f) && g(o),
          r && s.clear && delete s.clear;
      }
      (u[e] = a),
        Le({ global: !0, forced: a != c }, u),
        Vt(a, e),
        r || n.setStrong(a, e, i);
    })(
      'Set',
      function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      {
        getConstructor: function (e, t, n, i) {
          var r = e(function (e, o) {
              Jn(e, r, t),
                Kn(e, {
                  type: t,
                  index: Ct(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                g || (e.size = 0),
                null != o && Hn(o, e[i], e, n);
            }),
            o = Nn(t),
            c = function (e, t, n) {
              var i,
                r,
                c = o(e),
                a = s(e, t);
              return (
                a
                  ? (a.value = n)
                  : ((c.last = a = {
                      index: (r = Tn(t, !0)),
                      key: t,
                      value: n,
                      previous: (i = c.last),
                      next: void 0,
                      removed: !1,
                    }),
                    c.first || (c.first = a),
                    i && (i.next = a),
                    g ? c.size++ : e.size++,
                    'F' !== r && (c.index[r] = a)),
                e
              );
            },
            s = function (e, t) {
              var n,
                i = o(e),
                r = Tn(t);
              if ('F' !== r) return i.index[r];
              for (n = i.first; n; n = n.next) if (n.key == t) return n;
            };
          return (
            kn(r.prototype, {
              clear: function () {
                for (var e = o(this), t = e.index, n = e.first; n; )
                  (n.removed = !0),
                    n.previous && (n.previous = n.previous.next = void 0),
                    delete t[n.index],
                    (n = n.next);
                (e.first = e.last = void 0), g ? (e.size = 0) : (this.size = 0);
              },
              delete: function (e) {
                var t = this,
                  n = o(t),
                  i = s(t, e);
                if (i) {
                  var r = i.next,
                    c = i.previous;
                  delete n.index[i.index],
                    (i.removed = !0),
                    c && (c.next = r),
                    r && (r.previous = c),
                    n.first == i && (n.first = r),
                    n.last == i && (n.last = c),
                    g ? n.size-- : t.size--;
                }
                return !!i;
              },
              forEach: function (e) {
                for (
                  var t,
                    n = o(this),
                    i = nt(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (t = t ? t.next : n.first);

                )
                  for (i(t.value, t.key, this); t && t.removed; )
                    t = t.previous;
              },
              has: function (e) {
                return !!s(this, e);
              },
            }),
            kn(
              r.prototype,
              n
                ? {
                    get: function (e) {
                      var t = s(this, e);
                      return t && t.value;
                    },
                    set: function (e, t) {
                      return c(this, 0 === e ? 0 : e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return c(this, (e = 0 === e ? 0 : e), e);
                    },
                  }
            ),
            g &&
              Yn(r.prototype, 'size', {
                get: function () {
                  return o(this).size;
                },
              }),
            r
          );
        },
        setStrong: function (e, t, n) {
          var i = t + ' Iterator',
            r = Nn(t),
            o = Nn(i);
          Wt(
            e,
            t,
            function (e, t) {
              Kn(this, {
                type: i,
                target: e,
                state: r(e),
                kind: t,
                last: void 0,
              });
            },
            function () {
              for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
                n = n.previous;
              return e.target && (e.last = n = n ? n.next : e.state.first)
                ? 'keys' == t
                  ? { value: n.key, done: !1 }
                  : 'values' == t
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((e.target = void 0), { value: void 0, done: !0 });
            },
            n ? 'entries' : 'values',
            !n,
            !0
          ),
            (function (e) {
              var t = le(e),
                n = W.f;
              g &&
                t &&
                !t[En] &&
                n(t, En, {
                  configurable: !0,
                  get: function () {
                    return this;
                  },
                });
            })(t);
        },
      }
    ),
    Ot
      ? {}.toString
      : function () {
          return '[object ' + Pt(this) + ']';
        });
Ot || se(Object.prototype, 'toString', On, { unsafe: !0 });
var zn = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  jn = ce.set,
  Pn = ce.getterFor('Array Iterator'),
  _n = Wt(
    Array,
    'Array',
    function (e, t) {
      jn(this, { type: 'Array Iterator', target: v(e), index: 0, kind: t });
    },
    function () {
      var e = Pn(this),
        t = e.target,
        n = e.kind,
        i = e.index++;
      return !t || i >= t.length
        ? ((e.target = void 0), { value: void 0, done: !0 })
        : 'keys' == n
        ? { value: i, done: !1 }
        : 'values' == n
        ? { value: t[i], done: !1 }
        : { value: [i, t[i]], done: !1 };
    },
    'values'
  );
(Zt.Arguments = Zt.Array), Gn('keys'), Gn('values'), Gn('entries');
var Dn = Te('iterator'),
  Mn = Te('toStringTag'),
  qn = _n.values;
for (var $n in zn) {
  var ei = l[$n],
    ti = ei && ei.prototype;
  if (ti) {
    if (ti[Dn] !== qn)
      try {
        L(ti, Dn, qn);
      } catch (e) {
        ti[Dn] = qn;
      }
    if ((ti[Mn] || L(ti, Mn, $n), zn[$n]))
      for (var ni in _n)
        if (ti[ni] !== _n[ni])
          try {
            L(ti, ni, _n[ni]);
          } catch (e) {
            ti[ni] = _n[ni];
          }
  }
}
ae.Set;
function ii(e) {
  var t = this.constructor;
  return this.then(
    function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    },
    function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    }
  );
}
var ri = setTimeout;
function oi(e) {
  return Boolean(e && void 0 !== e.length);
}
function ci() {}
function si(e) {
  if (!(this instanceof si))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    Ii(e, this);
}
function ai(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      si._immediateFn(function () {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var i;
          try {
            i = n(e._value);
          } catch (e) {
            return void li(t.promise, e);
          }
          ui(t.promise, i);
        } else (1 === e._state ? ui : li)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function ui(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof si) return (e._state = 3), (e._value = t), void di(e);
      if ('function' == typeof n)
        return void Ii(
          ((i = n),
          (r = t),
          function () {
            i.apply(r, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), di(e);
  } catch (t) {
    li(e, t);
  }
  var i, r;
}
function li(e, t) {
  (e._state = 2), (e._value = t), di(e);
}
function di(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    si._immediateFn(function () {
      e._handled || si._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) ai(e, e._deferreds[t]);
  e._deferreds = null;
}
function gi(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function Ii(e, t) {
  var n = !1;
  try {
    e(
      function (e) {
        n || ((n = !0), ui(t, e));
      },
      function (e) {
        n || ((n = !0), li(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), li(t, e);
  }
}
(si.prototype.catch = function (e) {
  return this.then(null, e);
}),
  (si.prototype.then = function (e, t) {
    var n = new this.constructor(ci);
    return ai(this, new gi(e, t, n)), n;
  }),
  (si.prototype.finally = ii),
  (si.all = function (e) {
    return new si(function (t, n) {
      if (!oi(e)) return n(new TypeError('Promise.all accepts an array'));
      var i = Array.prototype.slice.call(e);
      if (0 === i.length) return t([]);
      var r = i.length;
      function o(e, c) {
        try {
          if (c && ('object' == typeof c || 'function' == typeof c)) {
            var s = c.then;
            if ('function' == typeof s)
              return void s.call(
                c,
                function (t) {
                  o(e, t);
                },
                n
              );
          }
          (i[e] = c), 0 == --r && t(i);
        } catch (e) {
          n(e);
        }
      }
      for (var c = 0; c < i.length; c++) o(c, i[c]);
    });
  }),
  (si.resolve = function (e) {
    return e && 'object' == typeof e && e.constructor === si
      ? e
      : new si(function (t) {
          t(e);
        });
  }),
  (si.reject = function (e) {
    return new si(function (t, n) {
      n(e);
    });
  }),
  (si.race = function (e) {
    return new si(function (t, n) {
      if (!oi(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var i = 0, r = e.length; i < r; i++) si.resolve(e[i]).then(t, n);
    });
  }),
  (si._immediateFn =
    ('function' == typeof setImmediate &&
      function (e) {
        setImmediate(e);
      }) ||
    function (e) {
      ri(e, 0);
    }),
  (si._unhandledRejectionFn = function (e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var fi = (function () {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'Promise' in fi
  ? fi.Promise.prototype.finally || (fi.Promise.prototype.finally = ii)
  : (fi.Promise = si),
  (function (e) {
    function t() {}
    function n(e, t) {
      if (
        ((e = void 0 === e ? 'utf-8' : e),
        (t = void 0 === t ? { fatal: !1 } : t),
        -1 === r.indexOf(e.toLowerCase()))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    function i(e) {
      for (
        var t = 0,
          n = Math.min(65536, e.length + 1),
          i = new Uint16Array(n),
          r = [],
          o = 0;
        ;

      ) {
        var c = t < e.length;
        if (!c || o >= n - 1) {
          if ((r.push(String.fromCharCode.apply(null, i.subarray(0, o))), !c))
            return r.join('');
          (e = e.subarray(t)), (o = t = 0);
        }
        if (0 == (128 & (c = e[t++]))) i[o++] = c;
        else if (192 == (224 & c)) {
          var s = 63 & e[t++];
          i[o++] = ((31 & c) << 6) | s;
        } else if (224 == (240 & c)) {
          s = 63 & e[t++];
          var a = 63 & e[t++];
          i[o++] = ((31 & c) << 12) | (s << 6) | a;
        } else if (240 == (248 & c)) {
          65535 <
            (c =
              ((7 & c) << 18) |
              ((s = 63 & e[t++]) << 12) |
              ((a = 63 & e[t++]) << 6) |
              (63 & e[t++])) &&
            ((c -= 65536),
            (i[o++] = ((c >>> 10) & 1023) | 55296),
            (c = 56320 | (1023 & c))),
            (i[o++] = c);
        }
      }
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            i = 0,
            r = Math.max(32, n + (n >>> 1) + 7),
            o = new Uint8Array((r >>> 3) << 3);
          t < n;

        ) {
          var c = e.charCodeAt(t++);
          if (55296 <= c && 56319 >= c) {
            if (t < n) {
              var s = e.charCodeAt(t);
              56320 == (64512 & s) &&
                (++t, (c = ((1023 & c) << 10) + (1023 & s) + 65536));
            }
            if (55296 <= c && 56319 >= c) continue;
          }
          if (
            (i + 4 > o.length &&
              ((r += 8),
              (r = ((r *= 1 + (t / e.length) * 2) >>> 3) << 3),
              (s = new Uint8Array(r)).set(o),
              (o = s)),
            0 == (4294967168 & c))
          )
            o[i++] = c;
          else {
            if (0 == (4294965248 & c)) o[i++] = ((c >>> 6) & 31) | 192;
            else if (0 == (4294901760 & c))
              (o[i++] = ((c >>> 12) & 15) | 224),
                (o[i++] = ((c >>> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & c)) continue;
              (o[i++] = ((c >>> 18) & 7) | 240),
                (o[i++] = ((c >>> 12) & 63) | 128),
                (o[i++] = ((c >>> 6) & 63) | 128);
            }
            o[i++] = (63 & c) | 128;
          }
        }
        return o.slice ? o.slice(0, i) : o.subarray(0, i);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
    var o = i;
    'function' == typeof Buffer && Buffer.from
      ? (o = function (e) {
          return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
            'utf-8'
          );
        })
      : 'function' == typeof Blob &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        (o = function (e) {
          var t = URL.createObjectURL(
            new Blob([e], { type: 'text/plain;charset=UTF-8' })
          );
          try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
          } catch (t) {
            return i(e);
          } finally {
            URL.revokeObjectURL(t);
          }
        }),
      (n.prototype.decode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        return (
          (e =
            e instanceof Uint8Array
              ? e
              : e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer)
              : new Uint8Array(e)),
          o(e)
        );
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : c),
  (function () {
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function n(e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && o(e, t);
    }
    function r(e) {
      return (r = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function o(e, t) {
      return (o =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function s() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function a(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function u(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t) ? a(e) : t;
    }
    function l(e) {
      var t = s();
      return function () {
        var n,
          i = r(e);
        if (t) {
          var o = r(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else n = i.apply(this, arguments);
        return u(this, n);
      };
    }
    function d(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));

      );
      return e;
    }
    function g(e, t, n) {
      return (g =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var i = d(e, t);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value;
              }
            })(e, t, n || e);
    }
    var I = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'listeners', {
              value: {},
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'addEventListener',
              value: function (e, t) {
                e in this.listeners || (this.listeners[e] = []),
                  this.listeners[e].push(t);
              },
            },
            {
              key: 'removeEventListener',
              value: function (e, t) {
                if (e in this.listeners)
                  for (
                    var n = this.listeners[e], i = 0, r = n.length;
                    i < r;
                    i++
                  )
                    if (n[i] === t) return void n.splice(i, 1);
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                var t = this;
                if (e.type in this.listeners) {
                  for (
                    var n = function (n) {
                        setTimeout(function () {
                          return n.call(t, e);
                        });
                      },
                      i = this.listeners[e.type],
                      r = 0,
                      o = i.length;
                    r < o;
                    r++
                  )
                    n(i[r]);
                  return !e.defaultPrevented;
                }
              },
            },
          ]),
          t
        );
      })(),
      f = (function (t) {
        i(c, t);
        var o = l(c);
        function c() {
          var t;
          return (
            e(this, c),
            (t = o.call(this)).listeners || I.call(a(t)),
            Object.defineProperty(a(t), 'aborted', {
              value: !1,
              writable: !0,
              configurable: !0,
            }),
            Object.defineProperty(a(t), 'onabort', {
              value: null,
              writable: !0,
              configurable: !0,
            }),
            t
          );
        }
        return (
          n(c, [
            {
              key: 'toString',
              value: function () {
                return '[object AbortSignal]';
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                'abort' === e.type &&
                  ((this.aborted = !0),
                  'function' == typeof this.onabort &&
                    this.onabort.call(this, e)),
                  g(r(c.prototype), 'dispatchEvent', this).call(this, e);
              },
            },
          ]),
          c
        );
      })(I),
      p = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'signal', {
              value: new f(),
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'abort',
              value: function () {
                var e;
                try {
                  e = new Event('abort');
                } catch (t) {
                  'undefined' != typeof document
                    ? document.createEvent
                      ? (e = document.createEvent('Event')).initEvent(
                          'abort',
                          !1,
                          !1
                        )
                      : ((e = document.createEventObject()).type = 'abort')
                    : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                }
                this.signal.dispatchEvent(e);
              },
            },
            {
              key: 'toString',
              value: function () {
                return '[object AbortController]';
              },
            },
          ]),
          t
        );
      })();
    function h(e) {
      return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        ? (console.log(
            '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
          ),
          !0)
        : ('function' == typeof e.Request &&
            !e.Request.prototype.hasOwnProperty('signal')) ||
            !e.AbortController;
    }
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      ((p.prototype[Symbol.toStringTag] = 'AbortController'),
      (f.prototype[Symbol.toStringTag] = 'AbortSignal')),
      (function (e) {
        h(e) && ((e.AbortController = p), (e.AbortSignal = f));
      })('undefined' != typeof self ? self : c);
  })();
var pi = a(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function () {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function (t, n) {
          var i = e.locked.get(t);
          void 0 === i
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (i.unshift(n), e.locked.set(t, i));
        }),
        (this.isLocked = function (t) {
          return e.locked.has(t);
        }),
        (this.lock = function (t) {
          return new Promise(function (n, i) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function (t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var i = n.pop();
            e.locked.set(t, n), void 0 !== i && setTimeout(i, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function () {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
s(pi);
var hi = s(
  a(function (e, t) {
    var n =
        (c && c.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function c(e) {
              try {
                a(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                a(i.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              e.done
                ? r(e.value)
                : new n(function (t) {
                    t(e.value);
                  }).then(c, s);
            }
            a((i = i.apply(e, t || [])).next());
          });
        },
      i =
        (c && c.__generator) ||
        function (e, t) {
          var n,
            i,
            r,
            o,
            c = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            'function' == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; c; )
                  try {
                    if (
                      ((n = 1),
                      i &&
                        (r =
                          2 & o[0]
                            ? i.return
                            : o[0]
                            ? i.throw || ((r = i.return) && r.call(i), 0)
                            : i.next) &&
                        !(r = r.call(i, o[1])).done)
                    )
                      return r;
                    switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                      case 0:
                      case 1:
                        r = o;
                        break;
                      case 4:
                        return c.label++, { value: o[1], done: !1 };
                      case 5:
                        c.label++, (i = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !((r = c.trys),
                          (r = r.length > 0 && r[r.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!r || (o[1] > r[0] && o[1] < r[3]))
                        ) {
                          c.label = o[1];
                          break;
                        }
                        if (6 === o[0] && c.label < r[1]) {
                          (c.label = r[1]), (r = o);
                          break;
                        }
                        if (r && c.label < r[2]) {
                          (c.label = r[2]), c.ops.push(o);
                          break;
                        }
                        r[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    o = t.call(e, c);
                  } catch (e) {
                    (o = [6, e]), (i = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = 'browser-tabs-lock-key';
    function o(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function s(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          i = 0;
        i < e;
        i++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var a = (function () {
      function e() {
        (this.acquiredIatSet = new Set()),
          (this.id = Date.now().toString() + s(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ = this.releaseLock__private__.bind(
            this
          )),
          (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
            this
          )),
          (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
            this
          )),
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function (t, c) {
          return (
            void 0 === c && (c = 5e3),
            n(this, void 0, void 0, function () {
              var n, a, u, l, d, g;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = Date.now() + s(4)),
                      (a = Date.now() + c),
                      (u = r + '-' + t),
                      (l = window.localStorage),
                      (i.label = 1);
                  case 1:
                    return Date.now() < a ? [4, o(30)] : [3, 8];
                  case 2:
                    return (
                      i.sent(),
                      null !== l.getItem(u)
                        ? [3, 5]
                        : ((d = this.id + '-' + t + '-' + n),
                          [4, o(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      i.sent(),
                      l.setItem(
                        u,
                        JSON.stringify({
                          id: this.id,
                          iat: n,
                          timeoutKey: d,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, o(30)]
                    );
                  case 4:
                    return (
                      i.sent(),
                      null !== (g = l.getItem(u)) &&
                      (g = JSON.parse(g)).id === this.id &&
                      g.iat === n
                        ? (this.acquiredIatSet.add(n),
                          this.refreshLockWhileAcquired(u, n),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      e.lockCorrector(), [4, this.waitForSomethingToChange(a)]
                    );
                  case 6:
                    i.sent(), (i.label = 7);
                  case 7:
                    return (n = Date.now() + s(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (e.prototype.refreshLockWhileAcquired = function (e, t) {
          return n(this, void 0, void 0, function () {
            var r = this;
            return i(this, function (o) {
              return (
                setTimeout(function () {
                  return n(r, void 0, void 0, function () {
                    var n, r;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, pi.default().lock(t)];
                        case 1:
                          return (
                            i.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (r = n.getItem(e))
                                  ? (pi.default().unlock(t), [2])
                                  : (((r = JSON.parse(
                                      r
                                    )).timeRefreshed = Date.now()),
                                    n.setItem(e, JSON.stringify(r)),
                                    pi.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (pi.default().unlock(t), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e.prototype.waitForSomethingToChange = function (t) {
          return n(this, void 0, void 0, function () {
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (n) {
                      var i = !1,
                        r = Date.now(),
                        o = !1;
                      function c() {
                        if (
                          (o ||
                            (window.removeEventListener('storage', c),
                            e.removeFromWaiting(c),
                            clearTimeout(s),
                            (o = !0)),
                          !i)
                        ) {
                          i = !0;
                          var t = 50 - (Date.now() - r);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', c), e.addToWaiting(c);
                      var s = setTimeout(c, Math.max(0, t - Date.now()));
                    }),
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function (t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function (t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function (e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function () {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function (e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function (t) {
          return n(this, void 0, void 0, function () {
            var n, o, c;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (o = r + '-' + t),
                    null === (c = n.getItem(o))
                      ? [2]
                      : (c = JSON.parse(c)).id !== this.id
                      ? [3, 2]
                      : [4, pi.default().lock(c.iat)]
                  );
                case 1:
                  i.sent(),
                    this.acquiredIatSet.delete(c.iat),
                    n.removeItem(o),
                    pi.default().unlock(c.iat),
                    e.notifyWaiters(),
                    (i.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.lockCorrector = function () {
          for (
            var t = Date.now() - 5e3,
              n = window.localStorage,
              i = Object.keys(n),
              o = !1,
              c = 0;
            c < i.length;
            c++
          ) {
            var s = i[c];
            if (s.includes(r)) {
              var a = n.getItem(s);
              null !== a &&
                ((void 0 === (a = JSON.parse(a)).timeRefreshed &&
                  a.timeAcquired < t) ||
                  (void 0 !== a.timeRefreshed && a.timeRefreshed < t)) &&
                (n.removeItem(s), (o = !0));
            }
          }
          o && e.notifyWaiters();
        }),
        (e.waiters = void 0),
        e
      );
    })();
    t.default = a;
  })
);
var yi = { timeoutInSeconds: 60 },
  bi = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    'access_denied',
  ],
  mi = (function (e) {
    function n(t, i) {
      var r = e.call(this, i) || this;
      return (
        (r.error = t),
        (r.error_description = i),
        Object.setPrototypeOf(r, n.prototype),
        r
      );
    }
    return (
      t(n, e),
      (n.fromPayload = function (e) {
        return new n(e.error, e.error_description);
      }),
      n
    );
  })(Error),
  Bi = (function (e) {
    function n(t, i, r, o) {
      void 0 === o && (o = null);
      var c = e.call(this, t, i) || this;
      return (
        (c.state = r),
        (c.appState = o),
        Object.setPrototypeOf(c, n.prototype),
        c
      );
    }
    return t(n, e), n;
  })(mi),
  Fi = (function (e) {
    function n() {
      var t = e.call(this, 'timeout', 'Timeout') || this;
      return Object.setPrototypeOf(t, n.prototype), t;
    }
    return t(n, e), n;
  })(mi),
  vi = (function (e) {
    function n(t) {
      var i = e.call(this) || this;
      return (i.popup = t), Object.setPrototypeOf(i, n.prototype), i;
    }
    return t(n, e), n;
  })(Fi),
  Ci = function (e, t, n) {
    return (
      void 0 === n && (n = 60),
      new Promise(function (i, r) {
        var o = window.document.createElement('iframe');
        o.setAttribute('width', '0'),
          o.setAttribute('height', '0'),
          (o.style.display = 'none');
        var c = function () {
            window.document.body.contains(o) &&
              window.document.body.removeChild(o);
          },
          s = setTimeout(function () {
            r(new Fi()), c();
          }, 1e3 * n),
          a = function (e) {
            if (
              e.origin == t &&
              e.data &&
              'authorization_response' === e.data.type
            ) {
              var n = e.source;
              n && n.close(),
                e.data.response.error
                  ? r(mi.fromPayload(e.data.response))
                  : i(e.data.response),
                clearTimeout(s),
                window.removeEventListener('message', a, !1),
                setTimeout(c, 2e3);
            }
          };
        window.addEventListener('message', a, !1),
          window.document.body.appendChild(o),
          o.setAttribute('src', e);
      })
    );
  },
  Ui = function (e, t) {
    var n,
      i,
      r,
      o = t.popup;
    if (
      (o
        ? (o.location.href = e)
        : ((n = e),
          (i = window.screenX + (window.innerWidth - 400) / 2),
          (r = window.screenY + (window.innerHeight - 600) / 2),
          (o = window.open(
            n,
            'auth0:authorize:popup',
            'left=' +
              i +
              ',top=' +
              r +
              ',width=400,height=600,resizable,scrollbars=yes,status=1'
          ))),
      !o)
    )
      throw new Error('Could not open popup');
    return new Promise(function (e, n) {
      var i = setTimeout(function () {
        n(new vi(o));
      }, 1e3 * (t.timeoutInSeconds || 60));
      window.addEventListener('message', function (t) {
        if (t.data && 'authorization_response' === t.data.type) {
          if ((clearTimeout(i), o.close(), t.data.response.error))
            return n(mi.fromPayload(t.data.response));
          e(t.data.response);
        }
      });
    });
  },
  Si = function () {
    return window.crypto || window.msCrypto;
  },
  Vi = function () {
    var e = Si();
    return e.subtle || e.webkitSubtle;
  },
  Zi = function () {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Si().getRandomValues(new Uint8Array(43))).forEach(function (
        n
      ) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Xi = function (e) {
    return btoa(e);
  },
  Gi = function (e) {
    return Object.keys(e)
      .filter(function (t) {
        return void 0 !== e[t];
      })
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  wi = function (e) {
    return r(void 0, void 0, void 0, function () {
      var t;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = Vi().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function (e, n) {
                      (t.oncomplete = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function (e) {
                          n(e.error);
                        }),
                        (t.onabort = function () {
                          n('The digest operation was aborted');
                        });
                    }),
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Ri = function (e) {
    return (function (e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function (e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  xi = function (e) {
    var t = new Uint8Array(e);
    return (function (e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[+/=]/g, function (e) {
        return t[e];
      });
    })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
  },
  Ai = function (e, t, i, c, s, a) {
    return r(void 0, void 0, void 0, function () {
      var r, u;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            return a
              ? (delete c.signal,
                [
                  2,
                  ((g = n({ url: e, audience: t, scope: i, timeout: s }, c)),
                  (I = a),
                  new Promise(function (e, t) {
                    var n = new MessageChannel();
                    (n.port1.onmessage = function (n) {
                      n.data.error ? t(new Error(n.data.error)) : e(n.data);
                    }),
                      I.postMessage(g, [n.port2]);
                  })),
                ])
              : [3, 1];
          case 1:
            return [
              4,
              ((l = e),
              (d = c),
              (d = d || {}),
              new Promise(function (e, t) {
                var n = new XMLHttpRequest(),
                  i = [],
                  r = [],
                  o = {},
                  c = function () {
                    return {
                      ok: 2 == ((n.status / 100) | 0),
                      statusText: n.statusText,
                      status: n.status,
                      url: n.responseURL,
                      text: function () {
                        return Promise.resolve(n.responseText);
                      },
                      json: function () {
                        return Promise.resolve(JSON.parse(n.responseText));
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([n.response]));
                      },
                      clone: c,
                      headers: {
                        keys: function () {
                          return i;
                        },
                        entries: function () {
                          return r;
                        },
                        get: function (e) {
                          return o[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in o;
                        },
                      },
                    };
                  };
                for (var s in (n.open(d.method || 'get', l, !0),
                (n.onload = function () {
                  n
                    .getAllResponseHeaders()
                    .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (
                      e,
                      t,
                      n
                    ) {
                      i.push((t = t.toLowerCase())),
                        r.push([t, n]),
                        (o[t] = o[t] ? o[t] + ',' + n : n);
                    }),
                    e(c());
                }),
                (n.onerror = t),
                (n.withCredentials = 'include' == d.credentials),
                d.headers))
                  n.setRequestHeader(s, d.headers[s]);
                n.send(d.body || null);
              })),
            ];
          case 2:
            return (r = o.sent()), (u = { ok: r.ok }), [4, r.json()];
          case 3:
            return [2, ((u.json = o.sent()), u)];
        }
        var l, d, g, I;
      });
    });
  },
  Qi = function (e, t, i, r, o, c) {
    void 0 === c && (c = 1e4);
    var s,
      a = new AbortController(),
      u = a.signal,
      l = n(n({}, r), { signal: u });
    return Promise.race([
      Ai(e, t, i, l, c, o),
      new Promise(function (e, t) {
        s = setTimeout(function () {
          a.abort(), t(new Error("Timeout when executing 'fetch'"));
        }, c);
      }),
    ]).finally(function () {
      clearTimeout(s);
    });
  },
  Wi = function (e, t, n, c, s, a) {
    return r(void 0, void 0, void 0, function () {
      var r, u, l, d, g, I, f, p, h, y;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            (r = null), (l = 0), (o.label = 1);
          case 1:
            if (!(l < 3)) return [3, 6];
            o.label = 2;
          case 2:
            return o.trys.push([2, 4, , 5]), [4, Qi(e, n, c, s, a, t)];
          case 3:
            return (u = o.sent()), (r = null), [3, 6];
          case 4:
            return (d = o.sent()), (r = d), [3, 5];
          case 5:
            return l++, [3, 1];
          case 6:
            if (r) throw ((r.message = r.message || 'Failed to fetch'), r);
            if (
              ((g = u.json),
              (I = g.error),
              (f = g.error_description),
              (p = i(g, ['error', 'error_description'])),
              !u.ok)
            )
              throw (
                ((h = f || 'HTTP error. Unable to fetch ' + e),
                ((y = new Error(h)).error = I || 'request_error'),
                (y.error_description = h),
                y)
              );
            return [2, p];
        }
      });
    });
  },
  Li = function (e, t) {
    return r(void 0, void 0, void 0, function () {
      var r = e.baseUrl,
        c = e.timeout,
        s = e.audience,
        a = e.scope,
        u = i(e, ['baseUrl', 'timeout', 'audience', 'scope']);
      return o(this, function (e) {
        switch (e.label) {
          case 0:
            return [
              4,
              Wi(
                r + '/oauth/token',
                c,
                s || 'default',
                a,
                {
                  method: 'POST',
                  body: JSON.stringify(
                    n({ redirect_uri: window.location.origin }, u)
                  ),
                  headers: { 'Content-type': 'application/json' },
                },
                t
              ),
            ];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  },
  Hi = function (e) {
    return Array.from(new Set(e));
  },
  Ji = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Hi(e.join(' ').trim().split(/\s+/)).join(' ');
  },
  ki = function (e) {
    return (
      '@@auth0spajs@@::' + e.client_id + '::' + e.audience + '::' + e.scope
    );
  },
  Ei = function (e) {
    var t = Math.floor(Date.now() / 1e3) + e.expires_in;
    return { body: e, expiresAt: Math.min(t, e.decodedToken.claims.exp) };
  },
  Yi = (function () {
    function e() {}
    return (
      (e.prototype.save = function (e) {
        var t = ki(e),
          n = Ei(e);
        window.localStorage.setItem(t, JSON.stringify(n));
      }),
      (e.prototype.get = function (e, t) {
        void 0 === t && (t = 0);
        var n = ki(e),
          i = this.readJson(n),
          r = Math.floor(Date.now() / 1e3);
        if (i) {
          if (!(i.expiresAt - t < r)) return i.body;
          if (i.body.refresh_token) {
            var o = this.stripData(i);
            return this.writeJson(n, o), o.body;
          }
          localStorage.removeItem(n);
        }
      }),
      (e.prototype.clear = function () {
        for (var e = localStorage.length - 1; e >= 0; e--)
          localStorage.key(e).startsWith('@@auth0spajs@@') &&
            localStorage.removeItem(localStorage.key(e));
      }),
      (e.prototype.readJson = function (e) {
        var t,
          n = window.localStorage.getItem(e);
        if (n && (t = JSON.parse(n))) return t;
      }),
      (e.prototype.writeJson = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }),
      (e.prototype.stripData = function (e) {
        return {
          body: { refresh_token: e.body.refresh_token },
          expiresAt: e.expiresAt,
        };
      }),
      e
    );
  })(),
  Ti = function () {
    this.enclosedCache = (function () {
      var e = { body: {}, expiresAt: 0 };
      return {
        save: function (t) {
          var n = ki(t),
            i = Ei(t);
          e[n] = i;
        },
        get: function (t, n) {
          void 0 === n && (n = 0);
          var i = ki(t),
            r = e[i],
            o = Math.floor(Date.now() / 1e3);
          if (r)
            return r.expiresAt - n < o
              ? r.body.refresh_token
                ? ((r.body = { refresh_token: r.body.refresh_token }), r.body)
                : void delete e[i]
              : r.body;
        },
        clear: function () {
          e = { body: {}, expiresAt: 0 };
        },
      };
    })();
  },
  Ki = (function () {
    function e(e) {
      (this.storage = e), (this.transaction = this.storage.get('a0.spajs.txs'));
    }
    return (
      (e.prototype.create = function (e) {
        (this.transaction = e),
          this.storage.save('a0.spajs.txs', e, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function () {
        return this.transaction;
      }),
      (e.prototype.remove = function () {
        delete this.transaction, this.storage.remove('a0.spajs.txs');
      }),
      e
    );
  })(),
  Ni = function (e) {
    return 'number' == typeof e;
  },
  Oi = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm',
  ],
  zi = function (e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function (e) {
      var t = e.split('.'),
        n = t[0],
        i = t[1],
        r = t[2];
      if (3 !== t.length || !n || !i || !r)
        throw new Error('ID token could not be decoded');
      var o = JSON.parse(Ri(i)),
        c = { __raw: e },
        s = {};
      return (
        Object.keys(o).forEach(function (e) {
          (c[e] = o[e]), Oi.includes(e) || (s[e] = o[e]);
        }),
        {
          encoded: { header: n, payload: i, signature: r },
          header: JSON.parse(Ri(n)),
          claims: c,
          user: s,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "' +
          e.iss +
          '", found "' +
          t.claims.iss +
          '"'
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "' +
          t.header.alg +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but was not one of "' +
            t.claims.aud.join(', ') +
            '"'
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              e.aud +
              '", found "' +
              t.claims.azp +
              '"'
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          e.aud +
          '" but found "' +
          t.claims.aud +
          '"'
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "' +
            e.nonce +
            '", found "' +
            t.claims.nonce +
            '"'
        );
    }
    if (e.max_age && !Ni(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!Ni(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!Ni(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      i = new Date(Date.now()),
      r = new Date(0),
      o = new Date(0),
      c = new Date(0);
    if (
      (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
      r.setUTCSeconds(t.claims.exp + n),
      o.setUTCSeconds(t.claims.nbf - n),
      i > r)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time (' +
          i +
          ') is after expiration time (' +
          r +
          ')'
      );
    if (Ni(t.claims.nbf) && i < o)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          i +
          ') is before ' +
          o
      );
    if (Ni(t.claims.auth_time) && i > c)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          i +
          ') is after last auth at ' +
          c
      );
    return t;
  },
  ji = a(function (e, t) {
    var n =
      (c && c.__assign) ||
      function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
    function i(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function r(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            i('Expires', e.expires ? e.expires.toUTCString() : '') +
            i('Domain', e.domain) +
            i('Path', e.path) +
            i('Secure', e.secure) +
            i('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function o(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], i = /(%[\dA-F]{2})+/gi, r = 0;
        r < n.length;
        r++
      ) {
        var o = n[r].split('='),
          c = o.slice(1).join('=');
        '"' === c.charAt(0) && (c = c.slice(1, -1));
        try {
          t[o[0].replace(i, decodeURIComponent)] = c.replace(
            i,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function s() {
      return o(document.cookie);
    }
    function a(e, t, i) {
      document.cookie = r(e, t, n({ path: '/' }, i));
    }
    (t.__esModule = !0),
      (t.encode = r),
      (t.parse = o),
      (t.getAll = s),
      (t.get = function (e) {
        return s()[e];
      }),
      (t.set = a),
      (t.remove = function (e, t) {
        a(e, '', n(n({}, t), { expires: -1 }));
      });
  });
s(ji);
ji.encode, ji.parse, ji.getAll;
var Pi = ji.get,
  _i = ji.set,
  Di = ji.remove,
  Mi = {
    get: function (e) {
      var t = Pi(e);
      if (void 0 !== t) return JSON.parse(t);
    },
    save: function (e, t, n) {
      var i = {};
      'https:' === window.location.protocol &&
        (i = { secure: !0, sameSite: 'none' }),
        (i.expires = n.daysUntilExpire),
        _i(e, JSON.stringify(t), i);
    },
    remove: function (e) {
      Di(e);
    },
  },
  qi = {
    get: function (e) {
      var t = Mi.get(e);
      return t || Mi.get('_legacy_' + e);
    },
    save: function (e, t, n) {
      var i = {};
      'https:' === window.location.protocol && (i = { secure: !0 }),
        (i.expires = n.daysUntilExpire),
        _i('_legacy_' + e, JSON.stringify(t), i),
        Mi.save(e, t, n);
    },
    remove: function (e) {
      Mi.remove(e), Mi.remove('_legacy_' + e);
    },
  },
  $i = {
    get: function (e) {
      if ('undefined' != typeof sessionStorage) {
        var t = sessionStorage.getItem(e);
        if (void 0 !== t) return JSON.parse(t);
      }
    },
    save: function (e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove: function (e) {
      sessionStorage.removeItem(e);
    },
  };
function er(e, t, n) {
  var i = void 0 === t ? null : t,
    r = (function (e, t) {
      var n = atob(e);
      if (t) {
        for (var i = new Uint8Array(n.length), r = 0, o = n.length; r < o; ++r)
          i[r] = n.charCodeAt(r);
        return String.fromCharCode.apply(null, new Uint16Array(i.buffer));
      }
      return n;
    })(e, void 0 !== n && n),
    o = r.indexOf('\n', 10) + 1,
    c = r.substring(o) + (i ? '//# sourceMappingURL=' + i : ''),
    s = new Blob([c], { type: 'application/javascript' });
  return URL.createObjectURL(s);
}
var tr,
  nr,
  ir,
  rr,
  or =
    ((tr =
      'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOyB5b3UgbWF5IG5vdCB1c2UKdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUKTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKClRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkKS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRApXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLApNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULgoKU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zCmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8KdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0PXt9LG49ZnVuY3Rpb24oZSxyKXtyZXR1cm4gZSsifCIrcn07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKG8pe3ZhciBzLGEsaSx1LGMsbCxmLHAsaCx5LGI7cmV0dXJuIHA9dm9pZCAwLGg9dm9pZCAwLGI9ZnVuY3Rpb24oKXt2YXIgcCxoLHksYixkLHYsdyxnO3JldHVybiByKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6cz1vLmRhdGEsYT1zLnVybCxpPXMudGltZW91dCx1PXMuYXVkaWVuY2UsYz1zLnNjb3BlLGw9ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmci5pbmRleE9mKG4pPDAmJih0W25dPWVbbl0pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxuLmxlbmd0aDtvKyspci5pbmRleE9mKG5bb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLG5bb10pJiYodFtuW29dXT1lW25bb11dKX1yZXR1cm4gdH0ocyxbInVybCIsInRpbWVvdXQiLCJhdWRpZW5jZSIsInNjb3BlIl0pLGY9by5wb3J0c1swXSxyLmxhYmVsPTE7Y2FzZSAxOmlmKHIudHJ5cy5wdXNoKFsxLDcsLDhdKSwhKGg9SlNPTi5wYXJzZShsLmJvZHkpKS5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1oLmdyYW50X3R5cGUpe2lmKCEoeT1mdW5jdGlvbihlLHIpe3JldHVybiB0W24oZSxyKV19KHUsYykpKXRocm93IG5ldyBFcnJvcigiVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbiIpO2wuYm9keT1KU09OLnN0cmluZ2lmeShlKGUoe30saCkse3JlZnJlc2hfdG9rZW46eX0pKX1iPW5ldyBBYm9ydENvbnRyb2xsZXIsZD1iLnNpZ25hbCx2PXZvaWQgMCxyLmxhYmVsPTI7Y2FzZSAyOnJldHVybiByLnRyeXMucHVzaChbMiw0LCw1XSksWzQsUHJvbWlzZS5yYWNlKFsoaz1pLG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChlLGspfSkpKSxmZXRjaChhLGUoZSh7fSxsKSx7c2lnbmFsOmR9KSldKV07Y2FzZSAzOnJldHVybiB2PXIuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtlcnJvcjp3Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiB2P1s0LHYuanNvbigpXTooYi5hYm9ydCgpLFsyXSk7Y2FzZSA2OnJldHVybihwPXIuc2VudCgpKS5yZWZyZXNoX3Rva2VuPyhmdW5jdGlvbihlLHIsbyl7dFtuKHIsbyldPWV9KHAucmVmcmVzaF90b2tlbix1LGMpLGRlbGV0ZSBwLnJlZnJlc2hfdG9rZW4pOmZ1bmN0aW9uKGUscil7ZGVsZXRlIHRbbihlLHIpXX0odSxjKSxmLnBvc3RNZXNzYWdlKHtvazp2Lm9rLGpzb246cH0pLFszLDhdO2Nhc2UgNzpyZXR1cm4gZz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcl9kZXNjcmlwdGlvbjpnLm1lc3NhZ2V9fSksWzMsOF07Y2FzZSA4OnJldHVyblsyXX12YXIga30pKX0sbmV3KCh5PXZvaWQgMCl8fCh5PVByb21pc2UpKSgoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiB0KGUpe3RyeXtvKGIubmV4dChlKSl9Y2F0Y2goZSl7cihlKX19ZnVuY3Rpb24gbihlKXt0cnl7byhiLnRocm93KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBvKHIpe3IuZG9uZT9lKHIudmFsdWUpOm5ldyB5KChmdW5jdGlvbihlKXtlKHIudmFsdWUpfSkpLnRoZW4odCxuKX1vKChiPWIuYXBwbHkocCxofHxbXSkpLm5leHQoKSl9KSl9KSk7Cgo='),
    (nr =
      'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJ3b3JrZXI6Ly93ZWItd29ya2VyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy9jb25zdGFudHMudHMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy90b2tlbi53b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXBDb25maWdPcHRpb25zIH0gZnJvbSAnLi9nbG9iYWwnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQVVUSE9SSVpFX1RJTUVPVVRfSU5fU0VDT05EUyA9IDYwO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9QVVBfQ09ORklHX09QVElPTlM6IFBvcHVwQ29uZmlnT3B0aW9ucyA9IHtcbiAgdGltZW91dEluU2Vjb25kczogREVGQVVMVF9BVVRIT1JJWkVfVElNRU9VVF9JTl9TRUNPTkRTXG59O1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0lMRU5UX1RPS0VOX1JFVFJZX0NPVU5UID0gMztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBDTEVBTlVQX0lGUkFNRV9USU1FT1VUX0lOX1NFQ09ORFMgPSAyO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRkVUQ0hfVElNRU9VVF9NUyA9IDEwMDAwO1xuXG5leHBvcnQgY29uc3QgQ0FDSEVfTE9DQVRJT05fTUVNT1JZID0gJ21lbW9yeSc7XG5leHBvcnQgY29uc3QgQ0FDSEVfTE9DQVRJT05fTE9DQUxfU1RPUkFHRSA9ICdsb2NhbHN0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFID1cbiAgJ1RoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4nO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0NPUEUgPSAnb3BlbmlkIHByb2ZpbGUgZW1haWwnO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBjYW4gYmUgaXNzdWVkIGJ5IHRoZSBhdXRob3JpemF0aW9uIHNlcnZlciB3aGljaCB0aGVcbiAqIHVzZXIgY2FuIHJlY292ZXIgZnJvbSBieSBzaWduaW5nIGluIGludGVyYWN0aXZlbHkuXG4gKiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNBdXRoRXJyb3JcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IFJFQ09WRVJBQkxFX0VSUk9SUyA9IFtcbiAgJ2xvZ2luX3JlcXVpcmVkJyxcbiAgJ2NvbnNlbnRfcmVxdWlyZWQnLFxuICAnaW50ZXJhY3Rpb25fcmVxdWlyZWQnLFxuICAnYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWQnLFxuICAvLyBTdHJpY3RseSBzcGVha2luZyB0aGUgdXNlciBjYW4ndCByZWNvdmVyIGZyb20gYGFjY2Vzc19kZW5pZWRgIC0gYnV0IHRoZXlcbiAgLy8gY2FuIGdldCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZWlyIGFjY2VzcyBiZWluZyBkZW5pZWQgYnkgbG9nZ2luZyBpblxuICAvLyBpbnRlcmFjdGl2ZWx5LlxuICAnYWNjZXNzX2RlbmllZCdcbl07XG4iLCJpbXBvcnQgeyBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHJlZnJlc2hUb2tlbnMgPSB7fTtcblxuY29uc3QgY2FjaGVLZXkgPSAoYXVkaWVuY2UsIHNjb3BlKSA9PiBgJHthdWRpZW5jZX18JHtzY29wZX1gO1xuXG5jb25zdCBnZXRSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PlxuICByZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldO1xuXG5jb25zdCBzZXRSZWZyZXNoVG9rZW4gPSAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpID0+XG4gIChyZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldID0gcmVmcmVzaFRva2VuKTtcblxuY29uc3QgZGVsZXRlUmVmcmVzaFRva2VuID0gKGF1ZGllbmNlLCBzY29wZSkgPT5cbiAgZGVsZXRlIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XG5cbmNvbnN0IHdhaXQ6IGFueSA9IHRpbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcblxuY29uc3QgbWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoe1xuICBkYXRhOiB7IHVybCwgdGltZW91dCwgYXVkaWVuY2UsIHNjb3BlLCAuLi5vcHRzIH0sXG4gIHBvcnRzOiBbcG9ydF1cbn0pID0+IHtcbiAgbGV0IGpzb247XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2Uob3B0cy5ib2R5KTtcbiAgICBpZiAoIWJvZHkucmVmcmVzaF90b2tlbiAmJiBib2R5LmdyYW50X3R5cGUgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gZ2V0UmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpO1xuICAgICAgfVxuICAgICAgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5ib2R5LCByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4gfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHsgc2lnbmFsIH0gPSBhYm9ydENvbnRyb2xsZXI7XG5cbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgd2FpdCh0aW1lb3V0KSxcbiAgICAgICAgZmV0Y2godXJsLCB7IC4uLm9wdHMsIHNpZ25hbCB9KVxuICAgICAgXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5LlxuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAvLyBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsIGFib3J0IGl0IGFuZCBsZXQgYGZldGNoV2l0aFRpbWVvdXRgIHJhaXNlIHRoZSBlcnJvci5cbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICBzZXRSZWZyZXNoVG9rZW4oanNvbi5yZWZyZXNoX3Rva2VuLCBhdWRpZW5jZSwgc2NvcGUpO1xuICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgfVxuXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogcmVzcG9uc2Uub2ssXG4gICAgICBqc29uXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBqc29uOiB7XG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIERvbid0IHJ1biBgYWRkRXZlbnRMaXN0ZW5lcmAgaW4gb3VyIHRlc3RzICh0aGlzIGlzIHJlcGxhY2VkIGluIHJvbGx1cClcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG1lc3NhZ2VIYW5kbGVyIH07XG59IGVsc2Uge1xuICAvLyBAdHMtaWdub3JlXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7XG59XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwidGhpcyIsIl9fZ2VuZXJhdG9yIiwidGhpc0FyZyIsImJvZHkiLCJmIiwieSIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsIm5leHQiLCJ2ZXJiIiwidGhyb3ciLCJyZXR1cm4iLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsImRvbmUiLCJ2YWx1ZSIsInBvcCIsInB1c2giLCJlIiwic3RlcCIsInJlZnJlc2hUb2tlbnMiLCJjYWNoZUtleSIsImF1ZGllbmNlIiwic2NvcGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2EiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIl9iIiwidXJsIiwidGltZW91dCIsIm9wdHMiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJwb3J0IiwiSlNPTiIsInBhcnNlIiwicmVmcmVzaF90b2tlbiIsImdyYW50X3R5cGUiLCJyZWZyZXNoVG9rZW4iLCJnZXRSZWZyZXNoVG9rZW4iLCJFcnJvciIsInN0cmluZ2lmeSIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJhY2UiLCJ0aW1lIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJmZXRjaCIsIl9jIiwicG9zdE1lc3NhZ2UiLCJlcnJvciIsImVycm9yXzEiLCJtZXNzYWdlIiwianNvbiIsImFib3J0Iiwic2V0UmVmcmVzaFRva2VuIiwiZGVsZXRlUmVmcmVzaFRva2VuIiwib2siLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yXzIiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInJlc3VsdCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBNkJPLElBQUlBLEVBQVcsV0FRbEIsT0FQQUEsRUFBV0MsT0FBT0MsUUFBVSxTQUFrQkMsR0FDMUMsSUFBSyxJQUFJQyxFQUFHQyxFQUFJLEVBQUdDLEVBQUlDLFVBQVVDLE9BQVFILEVBQUlDLEVBQUdELElBRTVDLElBQUssSUFBSUksS0FEVEwsRUFBSUcsVUFBVUYsR0FDT0osT0FBT1MsVUFBVUMsZUFBZUMsS0FBS1IsRUFBR0ssS0FBSU4sRUFBRU0sR0FBS0wsRUFBRUssSUFFOUUsT0FBT04sSUFFS1UsTUFBTUMsS0FBTVAsWUF1Q3pCLFNBQVNRLEVBQVlDLEVBQVNDLEdBQ2pDLElBQXNHQyxFQUFHQyxFQUFHaEIsRUFBR2lCLEVBQTNHQyxFQUFJLENBQUVDLE1BQU8sRUFBR0MsS0FBTSxXQUFhLEdBQVcsRUFBUHBCLEVBQUUsR0FBUSxNQUFNQSxFQUFFLEdBQUksT0FBT0EsRUFBRSxJQUFPcUIsS0FBTSxHQUFJQyxJQUFLLElBQ2hHLE9BQU9MLEVBQUksQ0FBRU0sS0FBTUMsRUFBSyxHQUFJQyxNQUFTRCxFQUFLLEdBQUlFLE9BQVVGLEVBQUssSUFBd0IsbUJBQVhHLFNBQTBCVixFQUFFVSxPQUFPQyxVQUFZLFdBQWEsT0FBT2pCLE9BQVVNLEVBQ3ZKLFNBQVNPLEVBQUtyQixHQUFLLE9BQU8sU0FBVTBCLEdBQUssT0FDekMsU0FBY0MsR0FDVixHQUFJZixFQUFHLE1BQU0sSUFBSWdCLFVBQVUsbUNBQzNCLEtBQU9iLE9BQ0gsR0FBSUgsRUFBSSxFQUFHQyxJQUFNaEIsRUFBWSxFQUFSOEIsRUFBRyxHQUFTZCxFQUFVLE9BQUljLEVBQUcsR0FBS2QsRUFBUyxTQUFPaEIsRUFBSWdCLEVBQVUsU0FBTWhCLEVBQUVTLEtBQUtPLEdBQUksR0FBS0EsRUFBRU8sU0FBV3ZCLEVBQUlBLEVBQUVTLEtBQUtPLEVBQUdjLEVBQUcsS0FBS0UsS0FBTSxPQUFPaEMsRUFFM0osT0FESWdCLEVBQUksRUFBR2hCLElBQUc4QixFQUFLLENBQVMsRUFBUkEsRUFBRyxHQUFROUIsRUFBRWlDLFFBQ3pCSCxFQUFHLElBQ1AsS0FBSyxFQUFHLEtBQUssRUFBRzlCLEVBQUk4QixFQUFJLE1BQ3hCLEtBQUssRUFBYyxPQUFYWixFQUFFQyxRQUFnQixDQUFFYyxNQUFPSCxFQUFHLEdBQUlFLE1BQU0sR0FDaEQsS0FBSyxFQUFHZCxFQUFFQyxRQUFTSCxFQUFJYyxFQUFHLEdBQUlBLEVBQUssQ0FBQyxHQUFJLFNBQ3hDLEtBQUssRUFBR0EsRUFBS1osRUFBRUksSUFBSVksTUFBT2hCLEVBQUVHLEtBQUthLE1BQU8sU0FDeEMsUUFDSSxLQUFNbEMsRUFBSWtCLEVBQUVHLE1BQU1yQixFQUFJQSxFQUFFSyxPQUFTLEdBQUtMLEVBQUVBLEVBQUVLLE9BQVMsS0FBa0IsSUFBVnlCLEVBQUcsSUFBc0IsSUFBVkEsRUFBRyxJQUFXLENBQUVaLEVBQUksRUFBRyxTQUNqRyxHQUFjLElBQVZZLEVBQUcsTUFBYzlCLEdBQU04QixFQUFHLEdBQUs5QixFQUFFLElBQU04QixFQUFHLEdBQUs5QixFQUFFLElBQU0sQ0FBRWtCLEVBQUVDLE1BQVFXLEVBQUcsR0FBSSxNQUM5RSxHQUFjLElBQVZBLEVBQUcsSUFBWVosRUFBRUMsTUFBUW5CLEVBQUUsR0FBSSxDQUFFa0IsRUFBRUMsTUFBUW5CLEVBQUUsR0FBSUEsRUFBSThCLEVBQUksTUFDN0QsR0FBSTlCLEdBQUtrQixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJLENBQUVrQixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJa0IsRUFBRUksSUFBSWEsS0FBS0wsR0FBSyxNQUN2RDlCLEVBQUUsSUFBSWtCLEVBQUVJLElBQUlZLE1BQ2hCaEIsRUFBRUcsS0FBS2EsTUFBTyxTQUV0QkosRUFBS2hCLEVBQUtMLEtBQUtJLEVBQVNLLEdBQzFCLE1BQU9rQixHQUFLTixFQUFLLENBQUMsRUFBR00sR0FBSXBCLEVBQUksVUFBZUQsRUFBSWYsRUFBSSxFQUN0RCxHQUFZLEVBQVI4QixFQUFHLEdBQVEsTUFBTUEsRUFBRyxHQUFJLE1BQU8sQ0FBRUcsTUFBT0gsRUFBRyxHQUFLQSxFQUFHLFFBQUssRUFBUUUsTUFBTSxHQXJCOUJLLENBQUssQ0FBQ2xDLEVBQUcwQixNQ2hEdEQsSUM3QkhTLEVBQWdCLEdBRWRDLEVBQVcsU0FBQ0MsRUFBVUMsR0FBVSxPQUFHRCxNQUFZQyxHQWdGbkRDLGlCQUFpQixXQW5FSSxTQUFPQyxxQkZrREo5QixFQUFTK0IsRUFBWUMsRUFBR0MsU0FBeEJqQyxTQUFTK0IsU0FBZUUsbUZFakRoREMsU0FBUUMsUUFBS0MsWUFBU1QsYUFBVUMsVUFBVVMsRUZzQnJDLFNBQWdCakQsRUFBR21DLEdBQ3RCLElBQUlwQyxFQUFJLEdBQ1IsSUFBSyxJQUFJTSxLQUFLTCxFQUFPSCxPQUFPUyxVQUFVQyxlQUFlQyxLQUFLUixFQUFHSyxJQUFNOEIsRUFBRWUsUUFBUTdDLEdBQUssSUFDOUVOLEVBQUVNLEdBQUtMLEVBQUVLLElBQ2IsR0FBUyxNQUFMTCxHQUFxRCxtQkFBakNILE9BQU9zRCxzQkFDdEIsQ0FBQSxJQUFJbEQsRUFBSSxFQUFiLElBQWdCSSxFQUFJUixPQUFPc0Qsc0JBQXNCbkQsR0FBSUMsRUFBSUksRUFBRUQsT0FBUUgsSUFDM0RrQyxFQUFFZSxRQUFRN0MsRUFBRUosSUFBTSxHQUFLSixPQUFPUyxVQUFVOEMscUJBQXFCNUMsS0FBS1IsRUFBR0ssRUFBRUosTUFDdkVGLEVBQUVNLEVBQUVKLElBQU1ELEVBQUVLLEVBQUVKLEtBRTFCLE9BQU9GLEtFL0JILHNDQUNFc0QsOEJBS04sMkJBRE14QyxFQUFPeUMsS0FBS0MsTUFBTU4sRUFBS3BDLE9BQ25CMkMsZUFBcUMsa0JBQXBCM0MsRUFBSzRDLFdBQWdDLENBRTlELEtBRE1DLEVBbkJZLFNBQUNuQixFQUFVQyxHQUNqQyxPQUFBSCxFQUFjQyxFQUFTQyxFQUFVQyxJQWtCUm1CLENBQWdCcEIsRUFBVUMsSUFFN0MsTUFBTSxJQUFJb0IsTURLaEIsK0NDSElYLEVBQUtwQyxLQUFPeUMsS0FBS08saUJBQWVoRCxJQUFNMkMsY0FBZUUsS0FHakRJLEVBQWtCLElBQUlDLGdCQUNwQkMsRUFBV0YsU0FFZkcsMEJBRVMsZ0NBQU1DLFFBQVFDLEtBQUssRUF0QmxCQyxFQXVCTHBCLEVBdkJhLElBQUlrQixTQUFRLFNBQUFHLEdBQVcsT0FBQUMsV0FBV0QsRUFBU0QsT0F3QjdERyxNQUFNeEIsU0FBVUUsSUFBTWUsNkJBRnhCQyxFQUFXTyxzQkFTWCxrQkFIQW5CLEVBQUtvQixZQUFZLENBQ2ZDLE1BQU9DLEVBQU1DLHFCQUtqQixPQUFLWCxLQU1RQSxFQUFTWSxTQUpwQmYsRUFBZ0JnQiwyQkFJbEJELEVBQU9MLFVBRUVoQixlQWhEVyxTQUFDRSxFQUFjbkIsRUFBVUMsR0FDOUNILEVBQWNDLEVBQVNDLEVBQVVDLElBQVVrQixFQWdEeENxQixDQUFnQkYsRUFBS3JCLGNBQWVqQixFQUFVQyxVQUN2Q3FDLEVBQUtyQixlQS9DUyxTQUFDakIsRUFBVUMsVUFDN0JILEVBQWNDLEVBQVNDLEVBQVVDLElBZ0RwQ3dDLENBQW1CekMsRUFBVUMsR0FHL0JhLEVBQUtvQixZQUFZLENBQ2ZRLEdBQUloQixFQUFTZ0IsR0FDYkosd0NBR0Z4QixFQUFLb0IsWUFBWSxDQUNmUSxJQUFJLEVBQ0pKLEtBQU0sQ0FDSkssa0JBQW1CQyxFQUFNUCxrQ0F6RGYsSUFBQVIsTUZxRFAsS0FEb0N4QixZQUN6QkEsRUFBSXNCLFdBQVUsU0FBVUcsRUFBU2UsR0FDL0MsU0FBU0MsRUFBVXJELEdBQVMsSUFBTUksRUFBS1MsRUFBVXZCLEtBQUtVLElBQVcsTUFBT0csR0FBS2lELEVBQU9qRCxJQUNwRixTQUFTbUQsRUFBU3RELEdBQVMsSUFBTUksRUFBS1MsRUFBaUIsTUFBRWIsSUFBVyxNQUFPRyxHQUFLaUQsRUFBT2pELElBQ3ZGLFNBQVNDLEVBQUttRCxHQUFVQSxFQUFPeEQsS0FBT3NDLEVBQVFrQixFQUFPdkQsT0FBUyxJQUFJWSxHQUFFLFNBQVV5QixHQUFXQSxFQUFRa0IsRUFBT3ZELFVBQVd3RCxLQUFLSCxFQUFXQyxHQUNuSWxELEdBQU1TLEVBQVlBLEVBQVVwQyxNQUFNRyxFQUFTK0IsR0FBYyxLQUFLckIifQ=='),
    (ir = !1),
    function (e) {
      return (rr = rr || er(tr, nr, ir)), new Worker(rr, e);
    }),
  cr = new hi(),
  sr = {
    memory: function () {
      return new Ti().enclosedCache;
    },
    localstorage: function () {
      return new Yi();
    },
  },
  ar = function (e) {
    return sr[e];
  },
  ur = (function () {
    function e(e) {
      var t, n, r, o;
      if (
        ((this.options = e),
        'undefined' != typeof window &&
          (function () {
            if (!Si())
              throw new Error(
                'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
              );
            if (void 0 === Vi())
              throw new Error(
                '\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    '
              );
          })(),
        (this.cacheLocation = e.cacheLocation || 'memory'),
        (this.cookieStorage = !1 === e.legacySameSiteCookie ? Mi : qi),
        !ar(this.cacheLocation))
      )
        throw new Error('Invalid cache location "' + this.cacheLocation + '"');
      (this.cache = ar(this.cacheLocation)()),
        (this.scope = this.options.scope),
        (this.transactionManager = new Ki($i)),
        (this.domainUrl = 'https://' + this.options.domain),
        (this.tokenIssuer =
          ((r = this.options.issuer),
          (o = this.domainUrl),
          r ? (r.startsWith('https://') ? r : 'https://' + r + '/') : o + '/')),
        (this.defaultScope = Ji(
          'openid',
          void 0 !==
            (null ===
              (n =
                null === (t = this.options) || void 0 === t
                  ? void 0
                  : t.advancedOptions) || void 0 === n
              ? void 0
              : n.defaultScope)
            ? this.options.advancedOptions.defaultScope
            : 'openid profile email'
        )),
        this.options.useRefreshTokens &&
          (this.scope = Ji(this.scope, 'offline_access')),
        'undefined' != typeof window &&
          window.Worker &&
          this.options.useRefreshTokens &&
          'memory' === this.cacheLocation &&
          !/Trident.*rv:11\.0/.test(navigator.userAgent) &&
          (this.worker = new or()),
        (this.customOptions = (function (e) {
          return (
            e.advancedOptions,
            e.audience,
            e.auth0Client,
            e.authorizeTimeoutInSeconds,
            e.cacheLocation,
            e.client_id,
            e.domain,
            e.issuer,
            e.leeway,
            e.max_age,
            e.redirect_uri,
            e.scope,
            e.useRefreshTokens,
            i(e, [
              'advancedOptions',
              'audience',
              'auth0Client',
              'authorizeTimeoutInSeconds',
              'cacheLocation',
              'client_id',
              'domain',
              'issuer',
              'leeway',
              'max_age',
              'redirect_uri',
              'scope',
              'useRefreshTokens',
            ])
          );
        })(e));
    }
    return (
      (e.prototype._url = function (e) {
        var t = encodeURIComponent(
          btoa(
            JSON.stringify(
              this.options.auth0Client || {
                name: 'auth0-spa-js',
                version: '1.12.1',
              }
            )
          )
        );
        return '' + this.domainUrl + e + '&auth0Client=' + t;
      }),
      (e.prototype._getParams = function (e, t, r, o, c) {
        var s = this.options,
          a =
            (s.domain,
            s.leeway,
            s.useRefreshTokens,
            s.auth0Client,
            s.cacheLocation,
            s.advancedOptions,
            i(s, [
              'domain',
              'leeway',
              'useRefreshTokens',
              'auth0Client',
              'cacheLocation',
              'advancedOptions',
            ]));
        return n(n(n({}, a), e), {
          scope: Ji(this.defaultScope, this.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: t,
          nonce: r,
          redirect_uri: c || this.options.redirect_uri,
          code_challenge: o,
          code_challenge_method: 'S256',
        });
      }),
      (e.prototype._authorizeUrl = function (e) {
        return this._url('/authorize?' + Gi(e));
      }),
      (e.prototype._verifyIdToken = function (e, t) {
        return zi({
          iss: this.tokenIssuer,
          aud: this.options.client_id,
          id_token: e,
          nonce: t,
          leeway: this.options.leeway,
          max_age: this._parseNumber(this.options.max_age),
        });
      }),
      (e.prototype._parseNumber = function (e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype.buildAuthorizeUrl = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t, n, r, c, s, a, u, l, d, g, I;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (n = e.appState),
                    (r = i(e, ['redirect_uri', 'appState'])),
                    (c = Xi(Zi())),
                    (s = Xi(Zi())),
                    (a = Zi()),
                    [4, wi(a)]
                  );
                case 1:
                  return (
                    (u = o.sent()),
                    (l = xi(u)),
                    (d = e.fragment ? '#' + e.fragment : ''),
                    (g = this._getParams(r, c, s, l, t)),
                    (I = this._authorizeUrl(g)),
                    this.transactionManager.create({
                      nonce: s,
                      code_verifier: a,
                      appState: n,
                      scope: g.scope,
                      audience: g.audience || 'default',
                      redirect_uri: g.redirect_uri,
                    }),
                    [2, I + d]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function () {
            var r, c, s, a, u, l, d, g, I, f, p, h;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (r = i(e, [])),
                    (c = Xi(Zi())),
                    (s = Xi(Zi())),
                    (a = Zi()),
                    [4, wi(a)]
                  );
                case 1:
                  return (
                    (u = o.sent()),
                    (l = xi(u)),
                    (d = this._getParams(
                      r,
                      c,
                      s,
                      l,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (g = this._authorizeUrl(
                      n(n({}, d), { response_mode: 'web_message' })
                    )),
                    [
                      4,
                      Ui(
                        g,
                        n(n({}, t), {
                          timeoutInSeconds:
                            t.timeoutInSeconds ||
                            this.options.authorizeTimeoutInSeconds ||
                            60,
                        })
                      ),
                    ]
                  );
                case 2:
                  if (((I = o.sent()), c !== I.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    Li(
                      {
                        audience: d.audience,
                        scope: d.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: a,
                        code: I.code,
                        grant_type: 'authorization_code',
                        redirect_uri: d.redirect_uri,
                      },
                      this.worker
                    ),
                  ];
                case 3:
                  return (
                    (f = o.sent()),
                    (p = this._verifyIdToken(f.id_token, s)),
                    (h = n(n({}, f), {
                      decodedToken: p,
                      scope: d.scope,
                      audience: d.audience || 'default',
                      client_id: this.options.client_id,
                    })),
                    this.cache.save(h),
                    this.cookieStorage.save('auth0.is.authenticated', !0, {
                      daysUntilExpire: 1,
                    }),
                    [2]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getUser = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t, n, i;
            return o(this, function (r) {
              return (
                (t = e.audience || this.options.audience || 'default'),
                (n = Ji(this.defaultScope, this.scope, e.scope)),
                [
                  2,
                  (i = this.cache.get({
                    client_id: this.options.client_id,
                    audience: t,
                    scope: n,
                  })) &&
                    i.decodedToken &&
                    i.decodedToken.user,
                ]
              );
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t, n, i;
            return o(this, function (r) {
              return (
                (t = e.audience || this.options.audience || 'default'),
                (n = Ji(this.defaultScope, this.scope, e.scope)),
                [
                  2,
                  (i = this.cache.get({
                    client_id: this.options.client_id,
                    audience: t,
                    scope: n,
                  })) &&
                    i.decodedToken &&
                    i.decodedToken.claims,
                ]
              );
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.buildAuthorizeUrl(e)];
                case 1:
                  return (t = n.sent()), window.location.assign(t), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function (e) {
        return (
          void 0 === e && (e = window.location.href),
          r(this, void 0, void 0, function () {
            var t, i, r, c, s, a, u, l, d, g, I;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (0 === (t = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((i = (function (e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var t = e.split('&'),
                        i = {};
                      return (
                        t.forEach(function (e) {
                          var t = e.split('='),
                            n = t[0],
                            r = t[1];
                          i[n] = decodeURIComponent(r);
                        }),
                        n(n({}, i), { expires_in: parseInt(i.expires_in) })
                      );
                    })(t.join(''))),
                    (r = i.state),
                    (c = i.code),
                    (s = i.error),
                    (a = i.error_description),
                    !(u = this.transactionManager.get()) ||
                      !u.code_verifier ||
                      !u.nonce)
                  )
                    throw new Error('Invalid state');
                  if (s)
                    throw (
                      (this.transactionManager.remove(),
                      new Bi(s, a, r, u.appState))
                    );
                  return (
                    this.transactionManager.remove(),
                    (l = {
                      audience: u.audience,
                      scope: u.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: u.code_verifier,
                      grant_type: 'authorization_code',
                      code: c,
                    }),
                    void 0 !== u.redirect_uri &&
                      (l.redirect_uri = u.redirect_uri),
                    [4, Li(l, this.worker)]
                  );
                case 1:
                  return (
                    (d = o.sent()),
                    (g = this._verifyIdToken(d.id_token, u.nonce)),
                    (I = n(n({}, d), {
                      decodedToken: g,
                      audience: u.audience,
                      scope: u.scope,
                      client_id: this.options.client_id,
                    })),
                    this.cache.save(I),
                    this.cookieStorage.save('auth0.is.authenticated', !0, {
                      daysUntilExpire: 1,
                    }),
                    [2, { appState: u.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.checkSession = function (e) {
        return r(this, void 0, void 0, function () {
          var t;
          return o(this, function (n) {
            switch (n.label) {
              case 0:
                if (
                  'memory' === this.cacheLocation &&
                  !this.cookieStorage.get('auth0.is.authenticated')
                )
                  return [2];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                if (((t = n.sent()), !bi.includes(t.error))) throw t;
                return [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t,
              r,
              c,
              s,
              a,
              u,
              l,
              d = this;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    ((t = n(
                      n(
                        { audience: this.options.audience, ignoreCache: !1 },
                        e
                      ),
                      { scope: Ji(this.defaultScope, this.scope, e.scope) }
                    )),
                    (r = t.ignoreCache),
                    (c = i(t, ['ignoreCache'])),
                    (s = function () {
                      var e = d.cache.get(
                        {
                          scope: c.scope,
                          audience: c.audience || 'default',
                          client_id: d.options.client_id,
                        },
                        60
                      );
                      return e && e.access_token;
                    }),
                    !r && (a = s()))
                  )
                    return [2, a];
                  o.label = 1;
                case 1:
                  return (
                    o.trys.push([1, 7, 8, 10]),
                    [4, cr.acquireLock('auth0.lock.getTokenSilently', 5e3)]
                  );
                case 2:
                  return (
                    o.sent(),
                    !r && (a = s())
                      ? [2, a]
                      : this.options.useRefreshTokens
                      ? [4, this._getTokenUsingRefreshToken(c)]
                      : [3, 4]
                  );
                case 3:
                  return (l = o.sent()), [3, 6];
                case 4:
                  return [4, this._getTokenFromIFrame(c)];
                case 5:
                  (l = o.sent()), (o.label = 6);
                case 6:
                  return (
                    (u = l),
                    this.cache.save(
                      n({ client_id: this.options.client_id }, u)
                    ),
                    this.cookieStorage.save('auth0.is.authenticated', !0, {
                      daysUntilExpire: 1,
                    }),
                    [2, u.access_token]
                  );
                case 7:
                  throw o.sent();
                case 8:
                  return [4, cr.releaseLock('auth0.lock.getTokenSilently')];
                case 9:
                  return o.sent(), [7];
                case 10:
                  return [2];
              }
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function () {
            return o(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e.audience = e.audience || this.options.audience),
                    (e.scope = Ji(this.defaultScope, this.scope, e.scope)),
                    (t = n(n({}, yi), t)),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    i.sent(),
                    [
                      2,
                      this.cache.get({
                        scope: e.scope,
                        audience: e.audience || 'default',
                        client_id: this.options.client_id,
                      }).access_token,
                    ]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function () {
        return r(this, void 0, void 0, function () {
          return o(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.logout = function (e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id;
        var t = e.federated,
          n = e.localOnly,
          r = i(e, ['federated', 'localOnly']);
        if (n && t)
          throw new Error(
            'It is invalid to set both the `federated` and `localOnly` options to `true`'
          );
        if (
          (this.cache.clear(),
          this.cookieStorage.remove('auth0.is.authenticated'),
          !n)
        ) {
          var o = t ? '&federated' : '',
            c = this._url('/v2/logout?' + Gi(r));
          window.location.assign('' + c + o);
        }
      }),
      (e.prototype._getTokenFromIFrame = function (e) {
        return r(this, void 0, void 0, function () {
          var t, r, c, s, a, u, l, d, g, I, f, p, h, y;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (t = Xi(Zi())), (r = Xi(Zi())), (c = Zi()), [4, wi(c)];
              case 1:
                return (
                  (s = o.sent()),
                  (a = xi(s)),
                  (u = this._getParams(
                    e,
                    t,
                    r,
                    a,
                    e.redirect_uri ||
                      this.options.redirect_uri ||
                      window.location.origin
                  )),
                  (l = this._authorizeUrl(
                    n(n({}, u), {
                      prompt: 'none',
                      response_mode: 'web_message',
                    })
                  )),
                  (d =
                    e.timeoutInSeconds ||
                    this.options.authorizeTimeoutInSeconds),
                  [4, Ci(l, this.domainUrl, d)]
                );
              case 2:
                if (((g = o.sent()), t !== g.state))
                  throw new Error('Invalid state');
                return (
                  (I = e.scope),
                  (f = e.audience),
                  e.redirect_uri,
                  e.ignoreCache,
                  e.timeoutInSeconds,
                  (p = i(e, [
                    'scope',
                    'audience',
                    'redirect_uri',
                    'ignoreCache',
                    'timeoutInSeconds',
                  ])),
                  [
                    4,
                    Li(
                      n(n(n({}, this.customOptions), p), {
                        scope: I,
                        audience: f,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: c,
                        code: g.code,
                        grant_type: 'authorization_code',
                        redirect_uri: u.redirect_uri,
                      }),
                      this.worker
                    ),
                  ]
                );
              case 3:
                return (
                  (h = o.sent()),
                  (y = this._verifyIdToken(h.id_token, r)),
                  [
                    2,
                    n(n({}, h), {
                      decodedToken: y,
                      scope: u.scope,
                      audience: u.audience || 'default',
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype._getTokenUsingRefreshToken = function (e) {
        return r(this, void 0, void 0, function () {
          var t, r, c, s, a, u, l, d;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (e.scope = Ji(
                    this.defaultScope,
                    this.options.scope,
                    e.scope
                  )),
                  ((t = this.cache.get({
                    scope: e.scope,
                    audience: e.audience || 'default',
                    client_id: this.options.client_id,
                  })) &&
                    t.refresh_token) ||
                  this.worker
                    ? [3, 2]
                    : [4, this._getTokenFromIFrame(e)]
                );
              case 1:
                return [2, o.sent()];
              case 2:
                (r =
                  e.redirect_uri ||
                  this.options.redirect_uri ||
                  window.location.origin),
                  (s = e.scope),
                  (a = e.audience),
                  e.ignoreCache,
                  e.timeoutInSeconds,
                  (u = i(e, [
                    'scope',
                    'audience',
                    'ignoreCache',
                    'timeoutInSeconds',
                  ])),
                  (o.label = 3);
              case 3:
                return (
                  o.trys.push([3, 5, , 8]),
                  [
                    4,
                    Li(
                      n(n(n({}, this.customOptions), u), {
                        audience: a,
                        scope: s,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        grant_type: 'refresh_token',
                        refresh_token: t && t.refresh_token,
                        redirect_uri: r,
                      }),
                      this.worker
                    ),
                  ]
                );
              case 4:
                return (c = o.sent()), [3, 8];
              case 5:
                return 'The web worker is missing the refresh token' !==
                  (l = o.sent()).message
                  ? [3, 7]
                  : [4, this._getTokenFromIFrame(e)];
              case 6:
                return [2, o.sent()];
              case 7:
                throw l;
              case 8:
                return (
                  (d = this._verifyIdToken(c.id_token)),
                  [
                    2,
                    n(n({}, c), {
                      decodedToken: d,
                      scope: e.scope,
                      audience: e.audience || 'default',
                    }),
                  ]
                );
            }
          });
        });
      }),
      e
    );
  })();

/**
 * The initial auth state.
 */
var initialAuthState = {
  isAuthenticated: false,
  // In SSR mode the library will never check the session, so loading should be initialised as false
  isLoading: typeof window !== 'undefined',
};

/**
 * @ignore
 */
var stub = function () {
  throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */
var initialContext = __assign(__assign({}, initialAuthState), {
  getAccessTokenSilently: stub,
  getAccessTokenWithPopup: stub,
  getIdTokenClaims: stub,
  loginWithRedirect: stub,
  loginWithPopup: stub,
  logout: stub,
});
/**
 * The Auth0 Context
 */
var Auth0Context = createContext(initialContext);

/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */
var OAuthError = /** @class */ (function (_super) {
  __extends(OAuthError, _super);
  function OAuthError(error, error_description) {
    var _this = _super.call(this, error_description || error) || this;
    _this.error = error;
    _this.error_description = error_description;
    return _this;
  }
  return OAuthError;
})(Error);

var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function (searchParams) {
  if (searchParams === void 0) {
    searchParams = window.location.search;
  }
  return (
    (CODE_RE.test(searchParams) && STATE_RE.test(searchParams)) ||
    ERROR_RE.test(searchParams)
  );
};
var normalizeErrorFn = function (fallbackMessage) {
  return function (error) {
    if ('error' in error) {
      return new OAuthError(error.error, error.error_description);
    }
    if (error instanceof Error) {
      return error;
    }
    return new Error(fallbackMessage);
  };
};
var loginError = normalizeErrorFn('Login failed');
var tokenError = normalizeErrorFn('Get access token failed');

/**
 * Handles how that state changes in the `useAuth0` hook.
 */
var reducer = function (state, action) {
  switch (action.type) {
    case 'LOGIN_POPUP_STARTED':
      return __assign(__assign({}, state), { isLoading: true });
    case 'LOGIN_POPUP_COMPLETE':
    case 'INITIALISED':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
        isLoading: false,
        error: undefined,
      });
    case 'GET_TOKEN_COMPLETE':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
      });
    case 'LOGOUT':
      return __assign(__assign({}, state), {
        isAuthenticated: false,
        user: undefined,
      });
    case 'ERROR':
      return __assign(__assign({}, state), {
        isLoading: false,
        error: action.error,
      });
  }
};

/**
 * @ignore
 */
var toAuth0ClientOptions = function (opts) {
  var clientId = opts.clientId,
    redirectUri = opts.redirectUri,
    maxAge = opts.maxAge,
    validOpts = __rest(opts, ['clientId', 'redirectUri', 'maxAge']);
  return __assign(__assign({}, validOpts), {
    client_id: clientId,
    redirect_uri: redirectUri,
    max_age: maxAge,
    auth0Client: {
      name: 'auth0-react',
      version: '1.1.0',
    },
  });
};
/**
 * @ignore
 */
var toAuth0LoginRedirectOptions = function (opts) {
  if (!opts) {
    return;
  }
  var redirectUri = opts.redirectUri,
    validOpts = __rest(opts, ['redirectUri']);
  return __assign(__assign({}, validOpts), { redirect_uri: redirectUri });
};
/**
 * @ignore
 */
var defaultOnRedirectCallback = function (appState) {
  window.history.replaceState(
    {},
    document.title,
    (appState === null || appState === void 0 ? void 0 : appState.returnTo) ||
      window.location.pathname
  );
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   redirectUri={window.location.origin}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
var Auth0Provider = function (opts) {
  var children = opts.children,
    skipRedirectCallback = opts.skipRedirectCallback,
    _a = opts.onRedirectCallback,
    onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a,
    clientOpts = __rest(opts, [
      'children',
      'skipRedirectCallback',
      'onRedirectCallback',
    ]);
  var client = useState(function () {
    return new ur(toAuth0ClientOptions(clientOpts));
  })[0];
  var _b = useReducer(reducer, initialAuthState),
    state = _b[0],
    dispatch = _b[1];
  useEffect(
    function () {
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var appState, user, error_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(hasAuthParams() && !skipRedirectCallback))
                  return [3 /*break*/, 2];
                return [4 /*yield*/, client.handleRedirectCallback()];
              case 1:
                appState = _a.sent().appState;
                onRedirectCallback(appState);
                return [3 /*break*/, 4];
              case 2:
                return [4 /*yield*/, client.checkSession()];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [4 /*yield*/, client.getUser()];
              case 5:
                user = _a.sent();
                dispatch({ type: 'INITIALISED', user: user });
                return [3 /*break*/, 7];
              case 6:
                error_1 = _a.sent();
                dispatch({ type: 'ERROR', error: loginError(error_1) });
                return [3 /*break*/, 7];
              case 7:
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [client, onRedirectCallback, skipRedirectCallback]
  );
  var loginWithRedirect = useCallback(
    function (opts) {
      return client.loginWithRedirect(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var loginWithPopup = useCallback(
    function (options, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              dispatch({ type: 'LOGIN_POPUP_STARTED' });
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4 /*yield*/, client.loginWithPopup(options, config)];
            case 2:
              _a.sent();
              return [3 /*break*/, 4];
            case 3:
              error_2 = _a.sent();
              dispatch({ type: 'ERROR', error: loginError(error_2) });
              return [2 /*return*/];
            case 4:
              return [4 /*yield*/, client.getUser()];
            case 5:
              user = _a.sent();
              dispatch({ type: 'LOGIN_POPUP_COMPLETE', user: user });
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var logout = useCallback(
    function (opts) {
      if (opts === void 0) {
        opts = {};
      }
      client.logout(opts);
      if (opts.localOnly) {
        dispatch({ type: 'LOGOUT' });
      }
    },
    [client]
  );
  var getAccessTokenSilently = useCallback(
    function (opts) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, client.getTokenSilently(opts)];
            case 1:
              token = _a.sent();
              return [3 /*break*/, 3];
            case 2:
              error_3 = _a.sent();
              throw tokenError(error_3);
            case 3:
              return [4 /*yield*/, client.getUser()];
            case 4:
              user = _a.sent();
              dispatch({ type: 'GET_TOKEN_COMPLETE', user: user });
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getAccessTokenWithPopup = useCallback(
    function (opts, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, client.getTokenWithPopup(opts, config)];
            case 1:
              token = _a.sent();
              return [3 /*break*/, 3];
            case 2:
              error_4 = _a.sent();
              throw tokenError(error_4);
            case 3:
              return [4 /*yield*/, client.getUser()];
            case 4:
              user = _a.sent();
              dispatch({ type: 'GET_TOKEN_COMPLETE', user: user });
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getIdTokenClaims = useCallback(
    function (opts) {
      return client.getIdTokenClaims(opts);
    },
    [client]
  );
  return React.createElement(
    Auth0Context.Provider,
    {
      value: __assign(__assign({}, state), {
        getAccessTokenSilently: getAccessTokenSilently,
        getAccessTokenWithPopup: getAccessTokenWithPopup,
        getIdTokenClaims: getIdTokenClaims,
        loginWithRedirect: loginWithRedirect,
        loginWithPopup: loginWithPopup,
        logout: logout,
      }),
    },
    children
  );
};

/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 */
var useAuth0 = function () {
  return useContext(Auth0Context);
};

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the Auth0Context
 */
var withAuth0 = function (Component) {
  return function (props) {
    return React.createElement(Auth0Context.Consumer, null, function (auth) {
      return React.createElement(Component, __assign({ auth0: auth }, props));
    });
  };
};

/**
 * @ignore
 */
var defaultOnRedirecting = function () {
  return React.createElement(React.Fragment, null);
};
/**
 * @ignore
 */
var defaultReturnTo = function () {
  return '' + window.location.pathname + window.location.search;
};
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page and returned to the page they we're redirected from after login.
 */
var withAuthenticationRequired = function (Component, options) {
  if (options === void 0) {
    options = {};
  }
  return function WithAuthenticationRequired(props) {
    var _this = this;
    var _a = useAuth0(),
      isAuthenticated = _a.isAuthenticated,
      isLoading = _a.isLoading,
      loginWithRedirect = _a.loginWithRedirect;
    var _b = options.returnTo,
      returnTo = _b === void 0 ? defaultReturnTo : _b,
      _c = options.onRedirecting,
      onRedirecting = _c === void 0 ? defaultOnRedirecting : _c,
      _d = options.loginOptions,
      loginOptions = _d === void 0 ? {} : _d;
    useEffect(
      function () {
        if (isLoading || isAuthenticated) {
          return;
        }
        var opts = __assign(__assign({}, loginOptions), {
          appState: __assign(__assign({}, loginOptions.appState), {
            returnTo: typeof returnTo === 'function' ? returnTo() : returnTo,
          }),
        });
        (function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, loginWithRedirect(opts)];
                case 1:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        })();
      },
      [isLoading, isAuthenticated, loginWithRedirect, loginOptions, returnTo]
    );
    return isAuthenticated
      ? React.createElement(Component, __assign({}, props))
      : onRedirecting();
  };
};

export {
  Auth0Context,
  Auth0Provider,
  OAuthError,
  useAuth0,
  withAuth0,
  withAuthenticationRequired,
};
//# sourceMappingURL=auth0-react.esm.js.map
