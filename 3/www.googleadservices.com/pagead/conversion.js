(function() {
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this)
      , ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x")
      , k = {}
      , fa = {};
    function t(a, b) {
        var c = fa[b];
        if (null == c)
            return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }
    function u(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in k ? f = k : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = ea && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? ba(k, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0,
                fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d),
                ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++,f)
        }
        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.g
        }
        ;
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0,
        k.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    function ha(a) {
        a = {
            next: a
        };
        a[t(k.Symbol, "iterator")] = function() {
            return this
        }
        ;
        return a
    }
    var ia = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , la;
    if (ea && "function" == typeof Object.setPrototypeOf)
        la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                a: !0
            }
              , oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var pa = la;
    function qa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    u("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this)
                throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp)
                throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c; )
                if (this[--c] != b[--d])
                    return !1;
            return 0 >= d
        }
    }, "es6");
    function ra(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[t(k.Symbol, "iterator")] = function() {
            return e
        }
        ;
        return e
    }
    u("globalThis", function(a) {
        return a || da
    }, "es_2020");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ra(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ra(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    var x = this || self;
    function sa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.K = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Y = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
    function ta(a) {
        return a
    }
    ;function ua(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    }
    ;function y(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, y);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    sa(y, Error);
    y.prototype.name = "CustomError";
    function va(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        y.call(this, c + a[d])
    }
    sa(va, y);
    va.prototype.name = "AssertionError";
    function A(a, b) {
        this.h = a === wa && b || "";
        this.i = xa
    }
    A.prototype.l = !0;
    A.prototype.g = function() {
        return this.h
    }
    ;
    function ya(a) {
        return a instanceof A && a.constructor === A && a.i === xa ? a.h : "type_error:Const"
    }
    var xa = {}
      , wa = {};
    var za = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Aa = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    ;
    var Ba = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Ca;
    function Da() {
        if (void 0 === Ca) {
            var a = null
              , b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                Ca = a
            } else
                Ca = a
        }
        return Ca
    }
    ;function B(a, b) {
        this.i = b === Ea ? a : ""
    }
    B.prototype.l = !0;
    B.prototype.g = function() {
        return this.i.toString()
    }
    ;
    B.prototype.A = !0;
    B.prototype.h = function() {
        return 1
    }
    ;
    B.prototype.toString = function() {
        return this.i + ""
    }
    ;
    function Fa(a) {
        return a instanceof B && a.constructor === B ? a.i : "type_error:TrustedResourceUrl"
    }
    var Ia = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , Ea = {};
    function Ja(a) {
        var b = Da();
        a = b ? b.createScriptURL(a) : a;
        return new B(a,Ea)
    }
    function Ka(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;function La(a) {
        if (!Ma.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Na, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Oa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Pa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Qa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ra, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Sa, "&#0;"));
        return a
    }
    var Na = /&/g
      , Oa = /</g
      , Pa = />/g
      , Qa = /"/g
      , Ra = /'/g
      , Sa = /\x00/g
      , Ma = /[\x00&<>"']/;
    function D(a, b) {
        this.i = b === Ta ? a : ""
    }
    D.prototype.l = !0;
    D.prototype.g = function() {
        return this.i.toString()
    }
    ;
    D.prototype.A = !0;
    D.prototype.h = function() {
        return 1
    }
    ;
    D.prototype.toString = function() {
        return this.i.toString()
    }
    ;
    function Ua(a) {
        return a instanceof D && a.constructor === D ? a.i : "type_error:SafeUrl"
    }
    var Va = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i")
      , Wa = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , Xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Ya(a) {
        if (a instanceof D)
            return a;
        a = "object" == typeof a && a.l ? a.g() : String(a);
        if (Xa.test(a))
            a = new D(a,Ta);
        else {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(Wa);
            a = b && Va.test(b[1]) ? new D(a,Ta) : null
        }
        return a
    }
    var Ta = {}
      , Za = new D("about:invalid#zClosurez",Ta);
    var $a = {};
    function E(a, b) {
        this.h = b === $a ? a : "";
        this.l = !0
    }
    E.prototype.g = function() {
        return this.h
    }
    ;
    E.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var ab = new E("",$a);
    function bb(a) {
        if (a instanceof D)
            return 'url("' + Ua(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof A)
            a = ya(a);
        else {
            a = String(a);
            var b = a.replace(cb, "$1").replace(cb, "$1").replace(db, "url");
            if (eb.test(b)) {
                if (b = !fb.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && gb(a)
                }
                a = b ? hb(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new va("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function gb(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var eb = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$")
      , db = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g")
      , cb = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g")
      , fb = /\/\*/;
    function hb(a) {
        return a.replace(db, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, m) {
                f = h;
                return m
            });
            b = (Ya(d) || Za).g();
            return c + f + b + f + e
        })
    }
    ;var ib = {};
    function F(a, b, c) {
        this.i = c === ib ? a : "";
        this.J = b;
        this.l = this.A = !0
    }
    F.prototype.h = function() {
        return this.J
    }
    ;
    F.prototype.g = function() {
        return this.i.toString()
    }
    ;
    F.prototype.toString = function() {
        return this.i.toString()
    }
    ;
    function G(a) {
        return a instanceof F && a.constructor === F ? a.i : "type_error:SafeHtml"
    }
    function jb(a) {
        if (a instanceof F)
            return a;
        var b = "object" == typeof a
          , c = null;
        b && a.A && (c = a.h());
        return I(La(b && a.l ? a.g() : String(a)), c)
    }
    function kb(a) {
        function b(f) {
            Array.isArray(f) ? f.forEach(b) : (f = jb(f),
            e.push(G(f).toString()),
            f = f.h(),
            0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = jb(lb)
          , d = c.h()
          , e = [];
        a.forEach(b);
        return I(e.join(G(c).toString()), d)
    }
    function mb(a) {
        return kb(Array.prototype.slice.call(arguments))
    }
    function I(a, b) {
        var c = Da();
        a = c ? c.createHTML(a) : a;
        return new F(a,b,ib)
    }
    var nb = /^[a-zA-Z0-9-]+$/
      , ob = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , pb = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    }
      , lb = new F(x.trustedTypes && x.trustedTypes.emptyHTML || "",0,ib);
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    var qb = {};
    function rb() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var sb;
    function tb() {
        var a, b;
        if (void 0 === sb)
            try {
                sb = null !== (b = null === (a = rb()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                    createHTML: function(c) {
                        return c
                    },
                    createScript: function(c) {
                        return c
                    },
                    createScriptURL: function(c) {
                        return c
                    }
                })) && void 0 !== b ? b : null
            } catch (c) {
                sb = null
            }
        return sb
    }
    ;function J() {}
    function K(a) {
        this.g = a
    }
    K.prototype = ia(J.prototype);
    K.prototype.constructor = K;
    if (pa)
        pa(K, J);
    else
        for (var L in J)
            if ("prototype" != L)
                if (Object.defineProperties) {
                    var ub = Object.getOwnPropertyDescriptor(J, L);
                    ub && Object.defineProperty(K, L, ub)
                } else
                    K[L] = J[L];
    K.K = J.prototype;
    K.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    function vb(a) {
        if (a instanceof J)
            if (a instanceof K)
                a = a.g;
            else
                throw Error("");
        else
            a = G(a);
        return a
    }
    ;function wb(a, b) {
        a.src = Fa(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    }
    ;function xb(a) {
        var b = a.write
          , c = b.apply
          , d = qa.apply(1, arguments).map(vb);
        if (!(d instanceof Array)) {
            var e = "undefined" != typeof k.Symbol && t(k.Symbol, "iterator") && d[t(k.Symbol, "iterator")];
            d = e ? e.call(d) : {
                next: aa(d)
            };
            for (var f = []; !(e = d.next()).done; )
                f.push(e.value);
            d = f
        }
        c.call(b, a, d)
    }
    ;function yb(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function zb(a) {
        zb[" "](a);
        return a
    }
    zb[" "] = function() {}
    ;
    var Ab = yb(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = G(lb);
        return !b.parentElement
    });
    function Bb(a, b) {
        a.write(G(b))
    }
    ;function Cb() {
        var a = document;
        var b = "SCRIPT";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    ;var Db = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function Eb(a) {
        var b = a.match(Db);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }
    function Fb(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e),
                !f || 61 == f || 38 == f || 35 == f)
                    return b;
            b += e + 1
        }
        return -1
    }
    var Gb = /#|$/;
    function Hb(a, b) {
        var c = a.search(Gb)
          , d = Fb(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Ib = /[?&]($|#)/;
    function M(a, b, c) {
        for (var d = a.search(Gb), e = 0, f, g = []; 0 <= (f = Fb(a, e, b, d)); )
            g.push(a.substring(e, f)),
            e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = g.join("").replace(Ib, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"),
        0 > c && (c = a.length),
        d = a.indexOf("?"),
        0 > d || d > c ? (d = c,
        e = "") : e = a.substring(d + 1, c),
        c = [a.substr(0, d), e, a.substr(c)],
        a = c[1],
        c[1] = b ? a ? a + "&" + b : b : a,
        b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    }
    ;function Jb() {
        if (!k.globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            k.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
    function Kb(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    var Mb = yb(function() {
        return Aa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Lb) || 1E-4 > Math.random()
    })
      , Nb = yb(function() {
        return Lb("MSIE")
    });
    function Lb(a) {
        var b;
        a: {
            if (b = x.navigator)
                if (b = b.userAgent)
                    break a;
            b = ""
        }
        return -1 != b.indexOf(a)
    }
    function N(a) {
        return /^true$/.test(a)
    }
    function Ob(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
    ;var Pb = ua("0.20")
      , Qb = ua("0.002")
      , Rb = ua("0.00")
      , Sb = ua("0.00")
      , Tb = N("false")
      , Ub = N("true")
      , Vb = N("true")
      , Wb = N("true")
      , Xb = N("true");
    var Yb = null;
    function Zb() {
        if (null === Yb) {
            Yb = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Yb = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Yb
    }
    function $b(a, b, c) {
        var d = O;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = Zb()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e)
                a = e;
            else
                a: {
                    if (!Nb() && !Mb() && (e = Math.random(),
                    e < b)) {
                        e = Jb();
                        a = a[Math.floor(e * a.length)];
                        break a
                    }
                    a = null
                }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.h[a] = !0)
        }
    }
    function R(a) {
        var b = O;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }
    function ac() {
        var a = O
          , b = [];
        Kb(a.h, function(c, d) {
            b.push(d)
        });
        Kb(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    }
    ;var bc = {
        P: 2,
        X: 13,
        W: 14,
        T: 16,
        S: 17,
        R: 18,
        O: 19
    }
      , O = null;
    function cc() {
        return !!O && "592230571" == R(16)
    }
    ;function dc(a) {
        return "function" == typeof a
    }
    var ec = Array.isArray;
    function fc(a, b) {
        if (a && ec(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
    function gc(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
    ;function hc(a) {
        this.g = a;
        this.defaultValue = !1
    }
    ;var ic = new hc(1933)
      , jc = new hc(1959);
    var S = window
      , T = document;
    var kc = {};
    function lc(a) {
        kc.TAGGING = kc.TAGGING || [];
        kc.TAGGING[a] = !0
    }
    ;function mc(a) {
        var b = "B";
        if (a.B && a.hasOwnProperty(b))
            return a.B;
        b = new a;
        return a.B = b
    }
    ;function nc() {
        var a = {};
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
    }
    function oc(a) {
        return mc(nc).g(a.g, a.defaultValue)
    }
    ;var pc = [];
    function U() {
        var a = {};
        var b = S.google_tag_data;
        S.google_tag_data = void 0 === b ? a : b;
        a = S.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: qc,
            update: rc,
            addListener: sc,
            notifyListeners: tc,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }
    function qc(a, b, c, d, e, f) {
        var g = U();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var m = g.region;
            c = c && "string" == typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? m !== e : !c && !m)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var l = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial)
                    h[a] = l;
                e && S.setTimeout(function() {
                    h[a] === l && l.quiet && (l.quiet = !1,
                    vc(a),
                    tc(),
                    lc(2))
                }, f)
            }
        }
    }
    function rc(a, b) {
        var c = U();
        c.active = !0;
        if (void 0 != b) {
            var d = wc(a);
            c = c.entries;
            c = c[a] = c[a] || {};
            c.update = "granted" === b;
            b = wc(a);
            c.quiet ? (c.quiet = !1,
            vc(a)) : b !== d && vc(a)
        }
    }
    function sc(a, b) {
        pc.push({
            u: a,
            G: b
        })
    }
    function vc(a) {
        for (var b = 0; b < pc.length; ++b) {
            var c = pc[b];
            ec(c.u) && -1 !== c.u.indexOf(a) && (c.F = !0)
        }
    }
    function tc(a) {
        for (var b = 0; b < pc.length; ++b) {
            var c = pc[b];
            if (c.F) {
                c.F = !1;
                try {
                    c.G({
                        Z: a
                    })
                } catch (d) {}
            }
        }
    }
    function wc(a) {
        a = U().entries[a] || {};
        return void 0 !== a.update ? a.update : a.initial
    }
    function xc(a) {
        return !(U().entries[a] || {}).quiet
    }
    function yc(a, b) {
        U().addListener(a, b)
    }
    function zc(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!xc(c[e]))
                    return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            yc(c, function(e) {
                d || b() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
    function Ac(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === wc(g) || d[g] || (e.push(g),
                d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"]
          , d = {};
        b().length !== c.length && yc(c, function(e) {
            var f = b();
            0 < f.length && (e.u = f,
            a(e))
        })
    }
    ;function Bc(a, b, c, d) {
        if (Cc(d)) {
            d = [];
            b = String(b || Dc()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("=")
                  , g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)),
                d.push(f))
            }
            a = d
        } else
            a = [];
        return a
    }
    function Ec(a, b, c, d) {
        var e = Dc()
          , f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = Dc();
        return e != a || void 0 != c && 0 <= Bc(b, a, !1, d).indexOf(c)
    }
    function Fc(a, b, c) {
        function d(n, q, v) {
            if (null == v)
                return delete g[q],
                n;
            g[q] = v;
            return n + "; " + q + "=" + v
        }
        function e(n, q) {
            if (null == q)
                return delete g[q],
                n;
            g[q] = !0;
            return n + "; " + q
        }
        if (Cc(c.s)) {
            if (void 0 == b)
                var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else
                c.encode && (b = encodeURIComponent(b)),
                b = Gc(b),
                f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date)
                var h = c.expires.toUTCString();
            else
                null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.$);
            f = d(f, "samesite", c.aa);
            c.ba && (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = Hc();
                for (var m = 0; m < h.length; ++m) {
                    var l = "none" !== h[m] ? h[m] : void 0
                      , p = d(f, "domain", l);
                    p = e(p, c.flags);
                    if (!Ic(l, c.path) && Ec(p, a, b, c.s))
                        break
                }
            } else
                h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)),
                f = e(f, c.flags),
                Ic(h, c.path) || Ec(f, a, b, c.s)
        }
    }
    function Jc(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        Fc(a, b, c)
    }
    function Gc(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Kc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Lc = /(^|\.)doubleclick\.net$/i;
    function Ic(a, b) {
        return Lc.test(window.document.location.hostname) || "/" === b && Kc.test(a)
    }
    function Dc() {
        return "null" !== window.origin ? window.document.cookie : ""
    }
    function Hc() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--)
            a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Lc.test(b) || Kc.test(b) || a.push("none");
        return a
    }
    function Cc(a) {
        if (!(oc(ic) && a && oc(ic) && U().active))
            return !0;
        if (!xc(a))
            return !1;
        a = wc(a);
        return null == a ? !0 : !!a
    }
    ;function Mc(a, b) {
        var c, d = Number(null != a.D ? a.D : void 0);
        0 !== d && (c = new Date((b || (new Date(Date.now())).getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c
        }
    }
    ;function Nc(a) {
        var b = []
          , c = T.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                C: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }
    function Oc(a, b) {
        a = Nc(a);
        var c = {};
        if (!a || !a.length)
            return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].C] || (c[a[d].C] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    j: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].C].push(f)
            }
        }
        return c
    }
    ;var Pc = /:[0-9]+$/;
    function Qc(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b)
                return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }
    function Rc(a, b) {
        var c = "query";
        if ("protocol" === c || "port" === c)
            a.protocol = Sc(a.protocol) || Sc(S.location.protocol);
        "port" === c ? a.port = String(Number(a.hostname ? a.port : S.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === c && (a.hostname = (a.hostname || S.location.hostname).replace(Pc, "").toLowerCase());
        var d = Sc(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
        case "url_no_fragment":
            b = "";
            a && a.href && (b = a.href.indexOf("#"),
            b = 0 > b ? a.href : a.href.substr(0, b));
            a = b;
            break;
        case "protocol":
            a = d;
            break;
        case "host":
            a = a.hostname.replace(Pc, "").toLowerCase();
            break;
        case "port":
            a = String(Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || lc(1);
            a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
            a = a.split("/");
            0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = "");
            a = a.join("/");
            break;
        case "query":
            a = a.search.replace("?", "");
            b && (a = Qc(a, b));
            break;
        case "extension":
            a = a.pathname.split(".");
            a = 1 < a.length ? a[a.length - 1] : "";
            a = a.split("/")[0];
            break;
        case "fragment":
            a = a.hash.replace("#", "");
            break;
        default:
            a = a && a.href
        }
        return a
    }
    function Sc(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
    ;var Tc = {};
    var Uc = /^\w+$/
      , Vc = /^[\w-]+$/
      , Wc = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    };
    function V() {
        if (!oc(ic) || !oc(ic) || !U().active)
            return !0;
        var a = wc("ad_storage");
        return null == a ? !0 : !!a
    }
    function Xc(a, b) {
        xc("ad_storage") ? V() ? a() : Ac(a) : b ? lc(3) : zc(function() {
            Xc(a, !0)
        })
    }
    function Yc(a) {
        return Zc(a).map(function(b) {
            return b.j
        })
    }
    function Zc(a) {
        var b = [];
        if ("null" === S.origin || !T.cookie)
            return b;
        a = Bc(a, T.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length)
            return b;
        for (var c = {}, d = 0; d < a.length; c = {
            m: c.m
        },
        d++) {
            var e = $c(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.m = f.j;
                var g = f.timestamp;
                f = f.labels;
                var h = fc(b, function(m) {
                    return function(l) {
                        return l.j === m.m
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g),
                h.labels = ad(h.labels, f || [])) : b.push({
                    version: e,
                    j: c.m,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(m, l) {
            return l.timestamp - m.timestamp
        });
        return bd(b)
    }
    function ad(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (a = 0; a < b.length; a++)
            c[b[a]] || d.push(b[a]);
        return d
    }
    function cd(a) {
        return a && "string" == typeof a && a.match(Uc) ? a : "_gcl"
    }
    function dd() {
        var a = S.location.href
          , b = T.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || lc(1),
        c = "/" + c);
        a = b.hostname.replace(Pc, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = Rc(d, "gclid");
        c = Rc(d, "gclsrc");
        a = Rc(d, "wbraid");
        var e = Rc(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""),
        b = b || Qc(d, "gclid"),
        c = c || Qc(d, "gclsrc"),
        a = a || Qc(d, "wbraid"));
        return ed(b, c, e, a)
    }
    function ed(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Vc.test(d) && (f.gbraid = d,
        e(d, "gb"));
        if (void 0 !== a && a.match(Vc))
            switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
            }
        c && e(c, "dc");
        return f
    }
    function fd() {
        var a = {}
          , b = dd();
        Xc(function() {
            gd(b, !1, a)
        })
    }
    function gd(a, b, c, d, e) {
        function f(n) {
            n = ["GCL", p, n];
            0 < e.length && n.push(e.join("."));
            return n.join(".")
        }
        function g(n, q) {
            if (n = hd(n, h))
                Jc(n, q, m),
                l = !0
        }
        c = c || {};
        e = e || [];
        var h = cd(c.prefix);
        d = d || (new Date(Date.now())).getTime();
        var m = Mc(c, d);
        m.s = "ad_storage";
        var l = !1
          , p = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == Tc.enable_gbraid_cookie_write ? 0 : Tc.enable_gbraid_cookie_write) && !l && a.gb) {
            a = a.gb[0];
            d = hd("gb", h);
            c = !1;
            if (!b)
                for (b = Zc(d),
                d = 0; d < b.length; d++)
                    b[d].j === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }
    function hd(a, b) {
        a = Wc[a];
        if (void 0 !== a)
            return b + a
    }
    function id(a) {
        return 0 !== jd(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }
    function $c(a) {
        a = jd(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            j: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }
    function jd(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Vc.test(a[2]) ? [] : a
    }
    function bd(a) {
        return a.filter(function(b) {
            return Vc.test(b.j)
        })
    }
    function kd() {
        var a = ["aw"]
          , b = {};
        if ("null" !== S.origin) {
            for (var c = cd(b.prefix), d = {}, e = 0; e < a.length; e++)
                Wc[a[e]] && (d[a[e]] = Wc[a[e]]);
            Xc(function() {
                gc(d, function(f, g) {
                    g = Bc(c + g, T.cookie, void 0, "ad_storage");
                    g.sort(function(p, n) {
                        return id(n) - id(p)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = id(h);
                        var m = 0 !== jd(h.split(".")).length ? h.split(".").slice(3) : []
                          , l = {};
                        h = 0 !== jd(h.split(".")).length ? h.split(".")[2] : void 0;
                        l[f] = [h];
                        gd(l, !0, b, g, m)
                    }
                })
            })
        }
    }
    function ld(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!V())
            return e;
        var f = Zc(a);
        if (!f.length)
            return e;
        for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        1 !== e[0] && (d = f[0],
        f = f[0].timestamp,
        b = [d.version, Math.round(f / 1E3), d.j].concat(d.labels || [], [b]).join("."),
        c = Mc(c, f),
        c.s = "ad_storage",
        Jc(a, b, c));
        return e
    }
    function md(a, b) {
        b = cd(b);
        a = hd(a, b);
        if (!a)
            return 0;
        a = Zc(a);
        for (var c = b = 0; c < a.length; c++)
            b = Math.max(b, a[c].timestamp);
        return b
    }
    function nd(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    ;var od = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , pd = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , qd = /^\d+\.fls\.doubleclick\.net$/
      , rd = /;gac=([^;?]+)/
      , sd = /;gacgb=([^;?]+)/
      , td = /;gclaw=([^;?]+)/
      , ud = /;gclgb=([^;?]+)/;
    function vd(a, b, c) {
        if (qd.test(a.location.host))
            return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(od) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++)
                c.push(e[f].j);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }
    function wd(a, b, c, d) {
        var e = V() ? Oc("_gac_gb", !0) : {}, f = [], g = !1, h;
        for (h in e) {
            var m = ld("_gac_gb_" + h, b, c, d);
            g = g || 0 !== m.length && m.some(function(l) {
                return 1 === l
            });
            f.push(h + ":" + m.join(","))
        }
        return {
            I: g ? f.join(";") : "",
            H: vd(a, e, sd)
        }
    }
    function xd(a, b, c, d) {
        if (qd.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(pd))
                return [{
                    j: a[1]
                }]
        } else
            return Zc((b || "_gcl") + c);
        return []
    }
    function yd(a, b) {
        return xd(a, b, "_aw", td).map(function(c) {
            return c.j
        }).join(".")
    }
    function zd(a, b) {
        return xd(a, b, "_gb", ud).map(function(c) {
            return c.j
        }).join(".")
    }
    function Ad(a) {
        0 !== Yc("_gcl_aw").length || a && 0 !== Yc(a + "_aw").length || (fd(),
        kd())
    }
    function Bd(a, b, c) {
        a = ld((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    }
    ;function Cd(a) {
        var b = x.performance;
        return b && b.timing && b.timing[a] || 0
    }
    ;var Dd = {
        U: 0,
        L: 1,
        V: 2,
        N: 3,
        M: 4
    };
    function Ed() {
        this.g = {}
    }
    function Fd(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }
    function Gd(a) {
        var b = mc(Ed);
        var c = void 0 === c ? x : c;
        c = c.performance;
        Fd(b, a, c && c.now ? c.now() : null)
    }
    function Hd() {
        function a() {
            return Fd(b, 0, Cd("loadEventStart") - Cd("navigationStart"))
        }
        var b = mc(Ed);
        0 != Cd("loadEventStart") ? a() : window.addEventListener("load", a)
    }
    function Id() {
        var a = mc(Ed);
        return t(Object, "values").call(Object, Dd).map(function(b) {
            return [b, a.g[b] || 0]
        })
    }
    ;function Jd(a, b, c) {
        a = Kd(a, !0);
        if (a[b])
            return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }
    function Kd(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {},
        b && (a.GooglebQhCsO = c));
        return c
    }
    ;var Ld = {}
      , Md = null;
    function Nd(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Md)
            for (Md = {},
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
            d = ["+/=", "+/", "-_=", "-_.", "-_"],
            e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Ld[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Md[h] && (Md[h] = g)
                }
            }
        a = Ld[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var m = b[f]
              , l = b[f + 1];
            h = b[f + 2];
            g = a[m >> 2];
            m = a[(m & 3) << 4 | l >> 4];
            l = a[(l & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + m + l + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
        case 2:
            g = b[f + 1],
            h = a[(g & 15) << 2] || d;
        case 1:
            b = b[f],
            c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    }
    ;function Od(a, b, c, d) {
        var e = Hb(c, "fmt");
        if (d) {
            var f = Hb(c, "random")
              , g = Hb(c, "label") || "";
            if (!f)
                return !1;
            f = Nd(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Jd(a, f, d))
                return !1
        }
        e && 4 != e && (c = M(c, "rfmt", e));
        c = M(c, "fmt", 4);
        e = Cb();
        wb(e, Ja(c));
        e.onload = function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null,
            d())
        }
        ;
        b.getElementsByTagName("script")[0].parentElement.appendChild(e);
        return !0
    }
    ;var Pd = N("true");
    function Qd() {
        if (dc(S.__uspapi)) {
            var a = "";
            try {
                S.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    }
    ;var Rd = /^[a-zA-Z0-9_]+$/
      , Sd = !1
      , Td = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ")
      , Ud = ["google_conversion_first_time", "google_conversion_snippets"];
    function W(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }
    function Vd(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }
    function X(a, b) {
        b = W(b);
        return "" != b && (a = W(a),
        "" != a) ? "&".concat(a, "=", b) : ""
    }
    function Wd(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }
    function Xd(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join)
            return "";
        var b = [], c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Wd(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else
                    d = Wd(d);
                (e = Wd(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }
    function Yd(a) {
        return "number" != typeof a && "string" != typeof a ? "" : W(a.toString())
    }
    function Zd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix)))
            return "";
        var c = "";
        var d = b.google_gcl_cookie_prefix && "_gcl" !== b.google_gcl_cookie_prefix && Rd.test(b.google_gcl_cookie_prefix) ? b.google_gcl_cookie_prefix : "";
        var e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.D = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if ($d(b) && b.v)
            var f = void 0 === b.o;
        else
            qd.test(a.location.host) ? f = !(td.test(a.location.href) || rd.test(a.location.href)) : (f = Math.max(md("aw", d), nd(V() ? Oc() : {})),
            f = Math.max(md("gb", d), nd(V() ? Oc("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.o)
                return b.o;
            c = zd(a, d || void 0);
            f = b.google_conversion_label;
            var g = Bd(f, e, b.v);
            c = X("gclgb", c) + (g ? X("mcov", g) : "");
            if (d)
                return b.o = c;
            d = wd(a, f, e, b.v);
            a = d.H;
            d = d.I;
            c += (a ? X("gacgb", a) : "") + (d ? X("gacmcov", d) : "");
            return b.o = c
        }
        if (d)
            return b = yd(a, d),
            X("gclaw", b);
        (b = yd(a)) && (c = X("gclaw", b));
        b = vd(a, V() ? Oc() : {}, rd);
        return c + (b ? X("gac", b) : "")
    }
    function ae(a) {
        function b(d) {
            try {
                return decodeURIComponent(d),
                !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a)
            return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c)); )
            c--;
        return "&tiba=" + a.substr(0, c)
    }
    function be(a, b, c, d, e) {
        var f = "https://"
          , g = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
        default:
            return "";
        case 2:
        case 3:
            var h = "googleads.g.doubleclick.net/";
            var m = "pagead/viewthroughconversion/";
            break;
        case 1:
            h = "www.google.com/";
            m = "pagead/1p-conversion/";
            break;
        case 6:
            h = "www.google.com/";
            m = "ccm/conversion/";
            break;
        case 0:
            h = d.google_conversion_domain || "www.googleadservices.com/";
            m = "pagead/conversion/";
            break;
        case 5:
            h = d.google_conversion_domain || "www.googleadservices.com/";
            m = "ccm/conversion/";
            break;
        case 4:
            h = (h = d.google_gtm_experiments) && h.apcm ? "www.google.com" : h && h.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/",
            m = "pagead/privacysandbox/conversion/"
        }
        Tb && d.google_transport_url && (h = d.google_transport_url);
        "/" !== h[h.length - 1] && (h += "/");
        if (0 === h.indexOf("http://") || 0 === h.indexOf("https://"))
            f = "";
        f = [f, h, m, W(d.google_conversion_id), g, "?random=", W(d.google_conversion_time)].join("");
        g = X("cv", d.google_conversion_js_version);
        h = X("fst", d.google_conversion_first_time);
        m = X("num", d.google_conversion_snippets);
        var l = X("fmt", d.google_conversion_format)
          , p = d.google_remarketing_only ? X("userId", d.google_user_id) : "";
        var n = d.google_tag_for_child_directed_treatment;
        n = null == n || 0 !== n && 1 !== n ? "" : X("tfcd", n);
        var q = d.google_tag_for_under_age_of_consent;
        q = null == q || 0 !== q && 1 !== q ? "" : X("tfua", q);
        var v = d.google_allow_ad_personalization_signals;
        v = !1 === v ? X("npa", 1) : !0 === v ? X("npa", 0) : "";
        var ja = d.google_restricted_data_processing;
        ja = Vb ? !0 === ja ? X("rdp", 1) : !1 === ja ? X("rdp", 0) : "" : "";
        var ne = X("value", d.google_conversion_value)
          , oe = X("currency_code", d.google_conversion_currency)
          , pe = X("label", d.google_conversion_label)
          , qe = X("oid", d.google_conversion_order_id)
          , re = X("bg", d.google_conversion_color);
        a: {
            var z = d.google_conversion_language;
            if (null != z) {
                z = z.toString();
                if (2 == z.length) {
                    z = X("hl", z);
                    break a
                }
                if (5 == z.length) {
                    z = X("hl", z.substring(0, 2)) + X("gl", z.substring(3, 5));
                    break a
                }
            }
            z = ""
        }
        var se = X("guid", "ON")
          , te = !d.google_conversion_domain && "GooglemKTybQhCsO"in x && "function" == typeof x.GooglemKTybQhCsO ? X("resp", "GooglemKTybQhCsO") : ""
          , ue = X("disvt", d.google_disable_viewthrough)
          , ve = X("eid", ac().join());
        var ka = d.google_conversion_date;
        var w = [];
        if (a) {
            var H = a.screen;
            H && (w.push(X("u_h", H.height)),
            w.push(X("u_w", H.width)),
            w.push(X("u_ah", H.availHeight)),
            w.push(X("u_aw", H.availWidth)),
            w.push(X("u_cd", H.colorDepth)));
            a.history && w.push(X("u_his", a.history.length))
        }
        ka && "function" == typeof ka.getTimezoneOffset && w.push(X("u_tz", -ka.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && w.push(X("u_java", b.javaEnabled())),
        b.plugins && w.push(X("u_nplug", b.plugins.length)),
        b.mimeTypes && w.push(X("u_nmime", b.mimeTypes.length)));
        ka = w.join("");
        w = X("gtm", d.google_gtm);
        b = b && b.sendBeacon ? X("sendb", "1") : "";
        H = ce();
        var xe = X("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0);
        var P = Xd(d.google_custom_params);
        var Ga = Xd(void 0);
        P = P.concat(0 < P.length && 0 < Ga.length ? ";" : "", Ga);
        P = "" == P ? "" : "&".concat("data=", encodeURIComponent(P));
        Ga = Zd(c, d);
        var uc = d.google_conversion_page_url
          , ye = d.google_conversion_referrer_url
          , Ha = "";
        if (c) {
            if (a.top == a)
                var r = 0;
            else {
                var Q = a.location.ancestorOrigins;
                if (Q)
                    r = Q[Q.length - 1] == a.location.origin ? 1 : 2;
                else {
                    Q = a.top;
                    try {
                        var C;
                        if (C = !!Q && null != Q.location.href)
                            c: {
                                try {
                                    zb(Q.foo);
                                    C = !0;
                                    break c
                                } catch (ze) {}
                                C = !1
                            }
                        r = C
                    } catch (ze) {
                        r = !1
                    }
                    r = r ? 1 : 2
                }
            }
            C = uc ? uc : 1 == r ? a.top.location.href : a.location.href;
            Ha += X("frm", r);
            Ha += X("url", Vd(C));
            Ha += X("ref", Vd(ye || c.referrer))
        }
        a = [g, h, m, l, p, n, q, v, ja, ne, oe, pe, qe, re, z, se, te, ue, ve, ka, w, b, H, xe, P, Ga, Ha, ae(c), de(d.google_additional_params), de(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + W("www.googleadservices.com"), ee(a)].join("");
        c = Zb();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [X("mid", d.google_conversion_merchant_id), X("fcntr", d.google_basket_feed_country), X("flng", d.google_basket_feed_language), X("dscnt", d.google_basket_discount), X("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (r = d.google_conversion_items) {
                    C = [];
                    g = 0;
                    for (h = r.length; g < h; g++)
                        m = r[g],
                        l = [],
                        m && (l.push(Yd(m.value)),
                        l.push(Yd(m.quantity)),
                        l.push(Yd(m.item_id)),
                        l.push(Yd(m.start_date)),
                        l.push(Yd(m.end_date)),
                        C.push("(" + l.join("*") + ")"));
                    r = 0 < C.length ? "&item=" + C.join("") : ""
                } else
                    r = "";
            else
                r = "";
            c = [a, c, r].join("");
            a = 4E3 < c.length ? [a, X("item", "elngth")].join("") : c
        }
        f += a;
        1 === e || 6 === e ? f += [X("gcp", 1), X("sscte", 1), X("ct_cookie_present", 1)].join("") : 3 == e && (f += X("gcp", 1),
        f += X("ct_cookie_present", 1));
        Ub && (e = Qd(),
        void 0 !== e && (f += X("us_privacy", e || "error")));
        $d(d) && (f = d.v ? f + X("gbcov", 1) : f + X("gbcov", 0));
        return f
    }
    function fe(a, b, c, d, e, f, g) {
        return '<iframe name="' + a + '"' + (g ? ' id="' + g + '"' : "") + ' title="' + b + '" width="' + d + '" height="' + e + '"' + (c ? ' src="' + c + '"' : "") + ' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"' + (f ? ' style="display:none"' : "") + ' scrolling="no"></iframe>'
    }
    function ge(a) {
        return {
            ar: 1,
            bg: 1,
            cs: 1,
            da: 1,
            de: 1,
            el: 1,
            en_AU: 1,
            en_US: 1,
            en_GB: 1,
            es: 1,
            et: 1,
            fi: 1,
            fr: 1,
            hi: 1,
            hr: 1,
            hu: 1,
            id: 1,
            is: 1,
            it: 1,
            iw: 1,
            ja: 1,
            ko: 1,
            lt: 1,
            nl: 1,
            no: 1,
            pl: 1,
            pt_BR: 1,
            pt_PT: 1,
            ro: 1,
            ru: 1,
            sk: 1,
            sl: 1,
            sr: 1,
            sv: 1,
            th: 1,
            tl: 1,
            tr: 1,
            vi: 1,
            zh_CN: 1,
            zh_TW: 1
        }[a] ? a + ".html" : "en_US.html"
    }
    function he(a, b, c, d) {
        function e(h, m, l, p) {
            return '<img height="' + l + '" width="' + m + '" border="0" alt="" src="' + h + '"' + (p ? ' style="display:none"' : "") + " />"
        }
        cc() && Gd(2);
        var f = "";
        d.google_remarketing_only && d.google_enable_display_cookie_match && !Pd && (O && $b(["376635470", "376635471"], Pb, 2),
        f = d.google_remarketing_only && d.google_enable_display_cookie_match && !Pd && O && "376635471" == R(2) ? fe("google_cookie_match_frame", "Google cookie match frame", "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE", 1, 1, !0, null) : "");
        d.google_remarketing_only && !d.google_conversion_domain && O && $b(["759238990", "759238991"], Sb, 13);
        !d.google_remarketing_only || d.google_conversion_domain || O && ("759248991" == R(14) || "759248990" == R(14)) || O && $b(["759248990", "759248991"], Rb, 14);
        !1 !== d.google_conversion_linker && Ad(d.google_gcl_cookie_prefix);
        b = be(a, b, c, d, d.google_remarketing_only ? 2 : 0);
        if (0 == d.google_conversion_format && null == d.google_conversion_domain)
            return '<a href="https://services.google.com/sitestats/' + (ge(d.google_conversion_language) + "?cid=" + W(d.google_conversion_id)) + '" target="_blank">' + e(b, 135, 27, !1) + "</a>" + f;
        if (void 0 !== d.google_conversion_snippets && 1 < d.google_conversion_snippets || 3 == d.google_conversion_format) {
            var g = b;
            null == d.google_conversion_domain && (g = 3 == d.google_conversion_format ? b : M(b, "fmt", 3));
            return ie(a, c, d, g) ? f : e(g, 1, 1, !0) + f
        }
        g = null;
        !d.google_conversion_domain && ie(a, c, d, b) && (g = "goog_conv_iframe",
        b = "");
        return fe("google_conversion_frame", "Google conversion frame", b, 2 == d.google_conversion_format ? 200 : 300, 2 == d.google_conversion_format ? 26 : 13, !1, g) + f
    }
    function je() {
        return new Image
    }
    function ie(a, b, c, d) {
        if (c.google_conversion_domain)
            return !1;
        try {
            return Od(a, b, d, null)
        } catch (e) {
            return !1
        }
    }
    function ke(a, b) {
        b += X("async", "1");
        var c = a.google_gtm_url_processor;
        dc(c) && (b = c(b));
        a = a.opt_image_generator;
        c = je;
        a && a.call && (c = a);
        a = c();
        a.src = b;
        a.onload = function() {}
    }
    function le(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough)
            return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version = "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }
    function me(a) {
        for (var b = 0; b < Td.length; b++)
            a[Td[b]] = null
    }
    function we(a) {
        for (var b = {}, c = 0; c < Td.length; c++)
            b[Td[c]] = a[Td[c]];
        for (c = 0; c < Ud.length; c++)
            b[Ud[c]] = a[Ud[c]];
        return b
    }
    function ce() {
        var a = "";
        cc() && (a = Id().map(function(b) {
            return b.join("-")
        }).join("_"));
        return X("li", a)
    }
    function ee(a) {
        if (!Wb || !a.__gsaExp || !a.__gsaExp.id)
            return "";
        a = a.__gsaExp.id;
        if (!dc(a))
            return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : X("gsaexp", b)
        } catch (c) {
            return ""
        }
    }
    function de(a) {
        if (!a)
            return "";
        var b = "", c;
        for (c in a)
            a.hasOwnProperty(c) && (b += X(c, a[c]));
        return b
    }
    function $d(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }
    function Ae(a, b, c, d) {
        var e;
        if (e = !d.google_remarketing_only)
            if (d.google_transport_url || !O || "375603261" != R(19) && "375603260" != R(19))
                e = !1;
            else {
                if (!(e = Sd)) {
                    e = c;
                    var f = t("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "A+sitaPn3hlQ8QipTsncwHz+k1NvfPtFsQqIOiD8GK3M9v9XCeQqlF7x1P9AVJdoYTiJPZXZc5XZYpwc10fH4wEAAACfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9";
                    e = void 0 === e ? window.document : e;
                    if (f && e.head) {
                        var g = Ob("META");
                        e.head.appendChild(g);
                        g.httpEquiv = "origin-trial";
                        g.content = f;
                        e = g
                    } else
                        e = null
                }
                e ? (Sd = !0,
                e = (e = T.featurePolicy) && dc(e.allowsFeature) ? e.allowsFeature("attribution-reporting") : !1) : e = !1
            }
        e && (e = d.google_additional_conversion_params || {},
        f = d.google_gtm_experiments,
        e.capi = f && f.apcm ? "2" : "1",
        d.google_additional_conversion_params = e,
        ke(d, be(a, b, c, d, 4)))
    }
    ;var Be = !1
      , Ce = document.currentScript && document.currentScript.src || "";
    function De(a, b, c) {
        try {
            if (!Be && (Be = !0,
            !c.google_gtm)) {
                var d = void 0
                  , e = Hb(a.location.href, "gtm_debug");
                Ee(e) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                var f;
                if (f = !d)
                    f = 0 <= za(b.cookie.split("; "), "__TAG_ASSISTANT=x");
                f && (d = 4);
                if (!d) {
                    var g = b.documentElement.getAttribute("data-tag-assistant-present");
                    Ee(g) && (d = 5)
                }
                if (d) {
                    var h = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var m = Ja(ya(new A(wa,"https://www.googletagmanager.com/debug/bootstrap")));
                        c = {
                            id: h,
                            src: "LEGACY",
                            cond: d
                        };
                        var l = Ia.exec(Fa(m).toString())
                          , p = l[3] || "";
                        var n = Ja(l[1] + Ka("?", l[2] || "", c) + Ka("#", p, void 0));
                        var q = Ob("SCRIPT", b);
                        wb(q, n);
                        var v = b.getElementsByTagName("script")[0];
                        v && v.parentNode && v.parentNode.insertBefore(q, v)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: h,
                            scriptSource: Ce
                        }
                    })
                }
            }
        } catch (ja) {}
    }
    function Ee(a) {
        if (null == a || 0 === a.length)
            return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    }
    ;function Fe(a) {
        return oc(jc) && a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
    function Ge(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    function He(a, b) {
        if (3 == Fe(b))
            return !1;
        a();
        return !0
    }
    function Ie(a, b) {
        if (!He(a, b)) {
            var c = !1
              , d = Ge(b)
              , e = function() {
                !c && He(a, b) && (c = !0,
                b.removeEventListener && b.removeEventListener(d, e, !1))
            };
            d && b.addEventListener && b.addEventListener(d, e, !1)
        }
    }
    ;function Je(a) {
        var b = a.id, c = ["id"], d = {}, e;
        for (e in a)
            Object.prototype.hasOwnProperty.call(a, e) && 0 > c.indexOf(e) && (d[e] = a[e]);
        if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
            var f = 0;
            for (e = Object.getOwnPropertySymbols(a); f < e.length; f++)
                0 > c.indexOf(e[f]) && (d[e[f]] = a[e[f]])
        }
        if (t(Object, "keys").call(Object, d).length)
            throw Error("Invalid attribute(s): " + t(Object, "keys").call(Object, d));
        a = {
            id: b
        };
        if (!nb.test("span"))
            throw Error("");
        if ("SPAN"in pb)
            throw Error("");
        c = void 0;
        b = null;
        d = "";
        if (a)
            for (l in a)
                if (Object.prototype.hasOwnProperty.call(a, l)) {
                    if (!nb.test(l))
                        throw Error("");
                    var g = a[l];
                    if (null != g) {
                        e = void 0;
                        f = l;
                        if (g instanceof A)
                            g = ya(g);
                        else if ("style" == f.toLowerCase()) {
                            var h = typeof g;
                            h = "object" == h && null != g || "function" == h;
                            if (!h)
                                throw Error("");
                            if (!(g instanceof E)) {
                                h = "";
                                for (e in g)
                                    if (Object.prototype.hasOwnProperty.call(g, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e))
                                            throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var m = g[e];
                                        null != m && (m = Array.isArray(m) ? m.map(bb).join(" ") : bb(m),
                                        h += e + ":" + m + ";")
                                    }
                                g = h ? new E(h,$a) : ab
                            }
                            g = g instanceof E && g.constructor === E ? g.h : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(f))
                                throw Error("");
                            if (f.toLowerCase()in ob)
                                if (g instanceof B)
                                    g = Fa(g).toString();
                                else if (g instanceof D)
                                    g = Ua(g);
                                else if ("string" === typeof g)
                                    g = (Ya(g) || Za).g();
                                else
                                    throw Error("");
                        }
                        g.l && (g = g.g());
                        e = f + '="' + La(String(g)) + '"';
                        d += " " + e
                    }
                }
        var l = "<span" + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Ba.span ? l += ">" : (b = mb(c),
        l += ">" + G(b).toString() + "</span>",
        b = b.h());
        (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? b = 0 : b = null);
        l = I(l, b);
        var p;
        l = vb(l).toString();
        a = null === (p = tb()) || void 0 === p ? void 0 : p.createHTML(l);
        return new K(null !== a && void 0 !== a ? a : l,qb)
    }
    ;O = new function() {
        var a = [], b = 0, c;
        for (c in bc)
            a[b++] = bc[c];
        this.h = {};
        this.g = {};
        a = a || [];
        b = 0;
        for (c = a.length; b < c; ++b)
            this.g[a[b]] = ""
    }
    ;
    $b(["592230570", "592230571"], Qb, 16);
    cc() && (Gd(1),
    Hd());
    function Ke(a, b, c) {
        function d(l, p) {
            var n = new Image;
            n.onload = l;
            n.src = p
        }
        function e() {
            --f;
            if (0 >= f) {
                var l = Kd(a, !1)
                  , p = l[b];
                p && (delete l[b],
                (l = p[0]) && l.call && l())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0]
              , h = c[1];
            0 <= Fb(g, 0, "rmt_tld", g.search(Gb)) && 0 <= Fb(g, 0, "ipr", g.search(Gb)) && !h.match(Db)[6] && (h += Eb(g),
            c[1] = M(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var m = Hb(h, "fmt");
            switch (parseInt(m, 10)) {
            case 1:
            case 2:
                (m = a.document.getElementById("goog_conv_iframe")) && !m.src ? (m.onload = e,
                m.src = h) : d(e, h);
                break;
            case 4:
                Od(a, a.document, h, e);
                break;
            case 5:
                if (a.navigator && a.navigator.sendBeacon)
                    if (a.navigator.sendBeacon(h, "")) {
                        e();
                        break
                    } else
                        h = M(h, "sendb", 2);
                h = M(h, "fmt", 3);
            default:
                d(e, h)
            }
        }
        e()
    }
    var Le = ["GooglemKTybQhCsO"]
      , Y = x;
    Le[0]in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + Le[0]);
    for (var Z; Le.length && (Z = Le.shift()); )
        Le.length || void 0 === Ke ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Ke;
    (function(a, b, c) {
        if (a) {
            De(a, c, a);
            try {
                if (le(a)) {
                    var d = we(a);
                    O && $b(["375603260", "375603261"], Xb ? 1 : 0, 19);
                    if (3 == Fe(c)) {
                        var e = "google_conversion_" + Math.floor(1E9 * Math.random());
                        xb(c, Je({
                            id: e
                        }));
                        Ie(function() {
                            try {
                                Ae(a, b, c, d);
                                var f = c.getElementById(e);
                                if (f) {
                                    var g = I(he(a, b, c, d), null);
                                    if (Ab())
                                        for (; f.lastChild; )
                                            f.removeChild(f.lastChild);
                                    f.innerHTML = G(g)
                                }
                            } catch (h) {}
                        }, c)
                    } else
                        Ae(a, b, c, d),
                        Bb(c, I(he(a, b, c, d), null))
                }
            } catch (f) {}
            me(a)
        }
    }
    )(window, navigator, document);
}
).call(this);
