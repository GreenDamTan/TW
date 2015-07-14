function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}
function onYouTubePlayerReady(e) {
    mejs.YouTubeApi.flashReady(e)
}
function sqexfooter_loaded() {
    
} !
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = e.length,
        n = at.type(e);
        return "function" === n || at.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function i(e, t, n) {
        if (at.isFunction(t)) return at.grep(e,
        function(e, i) {
            return !! t.call(e, i, e) !== n
        });
        if (t.nodeType) return at.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ft.test(t)) return at.filter(t, e, n);
            t = at.filter(t, e)
        }
        return at.grep(e,
        function(e) {
            return at.inArray(e, t) >= 0 !== n
        })
    }
    function r(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function a(e) {
        var t = xt[e] = {};
        return at.each(e.match(wt) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function o() {
        mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (mt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }
    function s() { (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (o(), at.ready())
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ct, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: St.test(n) ? at.parseJSON(n) : n
                } catch(r) {}
                at.data(e, t, n)
            } else n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e) if (("data" !== t || !at.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function c(e, t, n, i) {
        if (at.acceptData(e)) {
            var r, a, o = at.expando,
            s = e.nodeType,
            u = s ? at.cache: e,
            l = s ? e[o] : e[o] && o;
            if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[o] = X.pop() || at.guid++:o),
            u[l] || (u[l] = s ? {}: {
                toJSON: at.noop
            }),
            ("object" == typeof t || "function" == typeof t) && (i ? u[l] = at.extend(u[l], t) : u[l].data = at.extend(u[l].data, t)),
            a = u[l],
            i || (a.data || (a.data = {}), a = a.data),
            void 0 !== n && (a[at.camelCase(t)] = n),
            "string" == typeof t ? (r = a[t], null == r && (r = a[at.camelCase(t)])) : r = a,
            r
        }
    }
    function d(e, t, n) {
        if (at.acceptData(e)) {
            var i, r, a = e.nodeType,
            o = a ? at.cache: e,
            s = a ? e[at.expando] : at.expando;
            if (o[s]) {
                if (t && (i = n ? o[s] : o[s].data)) {
                    at.isArray(t) ? t = t.concat(at.map(t, at.camelCase)) : t in i ? t = [t] : (t = at.camelCase(t), t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !l(i) : !at.isEmptyObject(i)) return
                } (n || (delete o[s].data, l(o[s]))) && (a ? at.cleanData([e], !0) : it.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
            }
        }
    }
    function p() {
        return ! 0
    }
    function f() {
        return ! 1
    }
    function h() {
        try {
            return mt.activeElement
        } catch(e) {}
    }
    function m(e) {
        var t = It.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, i, r = 0,
        a = typeof e.getElementsByTagName !== _t ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== _t ? e.querySelectorAll(t || "*") : void 0;
        if (!a) for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) ! t || at.nodeName(i, t) ? a.push(i) : at.merge(a, g(i, t));
        return void 0 === t || t && at.nodeName(e, t) ? at.merge([e], a) : a
    }
    function v(e) {
        Ft.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return at.nodeName(e, "table") && at.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (null !== at.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function w(e) {
        var t = Xt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) at._data(n, "globalEval", !t || at._data(t[i], "globalEval"))
    }
    function E(e, t) {
        if (1 === t.nodeType && at.hasData(e)) {
            var n, i, r, a = at._data(e),
            o = at._data(t, a),
            s = a.events;
            if (s) {
                delete o.handle,
                o.events = {};
                for (n in s) for (i = 0, r = s[n].length; r > i; i++) at.event.add(t, n, s[n][i])
            }
            o.data && (o.data = at.extend({},
            o.data))
        }
    }
    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !it.noCloneEvent && t[at.expando]) {
                r = at._data(t);
                for (i in r.events) at.removeEvent(t, i, r.handle);
                t.removeAttribute(at.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), it.html5Clone && e.innerHTML && !at.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ft.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function _(t, n) {
        var i = at(n.createElement(t)).appendTo(n.body),
        r = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display: at.css(i[0], "display");
        return i.detach(),
        r
    }
    function S(e) {
        var t = mt,
        n = en[e];
        return n || (n = _(e, t), "none" !== n && n || (Zt = (Zt || at("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = _(e, t), Zt.detach()), en[e] = n),
        n
    }
    function C(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function A(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = hn.length; r--;) if (t = hn[r] + n, t in e) return t;
        return i
    }
    function k(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; s > o; o++) i = e[o],
        i.style && (a[o] = at._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && jt(i) && (a[o] = at._data(i, "olddisplay", S(i.nodeName)))) : a[o] || (r = jt(i), (n && "none" !== n || !r) && at._data(i, "olddisplay", r ? n: at.css(i, "display"))));
        for (o = 0; s > o; o++) i = e[o],
        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "": "none"));
        return e
    }
    function j(e, t, n) {
        var i = cn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function N(e, t, n, i, r) {
        for (var a = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += at.css(e, n + kt[a], !0, r)),
        i ? ("content" === n && (o -= at.css(e, "padding" + kt[a], !0, r)), "margin" !== n && (o -= at.css(e, "border" + kt[a] + "Width", !0, r))) : (o += at.css(e, "padding" + kt[a], !0, r), "padding" !== n && (o += at.css(e, "border" + kt[a] + "Width", !0, r)));
        return o
    }
    function F(e, t, n) {
        var i = !0,
        r = "width" === t ? e.offsetWidth: e.offsetHeight,
        a = tn(e),
        o = it.boxSizing() && "border-box" === at.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = nn(e, t, a), (0 > r || null == r) && (r = e.style[t]), an.test(r)) return r;
            i = o && (it.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + N(e, t, n || (o ? "border": "content"), i, a) + "px"
    }
    function M(e, t, n, i, r) {
        return new M.prototype.init(e, t, n, i, r)
    }
    function L() {
        return setTimeout(function() {
            mn = void 0
        }),
        mn = at.now()
    }
    function O(e, t) {
        var n, i = {
            height: e
        },
        r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = kt[r],
        i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function D(e, t, n) {
        for (var i, r = (xn[t] || []).concat(xn["*"]), a = 0, o = r.length; o > a; a++) if (i = r[a].call(n, t, e)) return i
    }
    function B(e, t, n) {
        var i, r, a, o, s, u, l, c, d = this,
        p = {},
        f = e.style,
        h = e.nodeType && jt(e),
        m = at._data(e, "fxshow");
        n.queue || (s = at._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--,
                at.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = at.css(e, "display"), c = S(e.nodeName), "none" === l && (l = c), "inline" === l && "none" === at.css(e, "float") && (it.inlineBlockNeedsLayout && "inline" !== c ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden", it.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in t) if (r = t[i], vn.exec(r)) {
            if (delete t[i], a = a || "toggle" === r, r === (h ? "hide": "show")) {
                if ("show" !== r || !m || void 0 === m[i]) continue;
                h = !0
            }
            p[i] = m && m[i] || at.style(e, i)
        }
        if (!at.isEmptyObject(p)) {
            m ? "hidden" in m && (h = m.hidden) : m = at._data(e, "fxshow", {}),
            a && (m.hidden = !h),
            h ? at(e).show() : d.done(function() {
                at(e).hide()
            }),
            d.done(function() {
                var t;
                at._removeData(e, "fxshow");
                for (t in p) at.style(e, t, p[t])
            });
            for (i in p) o = D(h ? m[i] : 0, i, d),
            i in m || (m[i] = o.start, h && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function I(e, t) {
        var n, i, r, a, o;
        for (n in e) if (i = at.camelCase(n), r = t[i], a = e[n], at.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = at.cssHooks[i], o && "expand" in o) {
            a = o.expand(a),
            delete e[i];
            for (n in a) n in e || (e[n] = a[n], t[n] = r)
        } else t[i] = r
    }
    function P(e, t, n) {
        var i, r, a = 0,
        o = wn.length,
        s = at.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (r) return ! 1;
            for (var t = mn || L(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, a = 1 - i, o = 0, u = l.tweens.length; u > o; o++) l.tweens[o].run(a);
            return s.notifyWith(e, [l, a, n]),
            1 > a && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: at.extend({},
            t),
            opts: at.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: mn || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = at.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0,
                i = t ? l.tweens.length: 0;
                if (r) return this;
                for (r = !0; i > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (I(c, l.opts.specialEasing); o > a; a++) if (i = wn[a].call(l, e, c, l.opts)) return i;
        return at.map(c, D, l),
        at.isFunction(l.opts.start) && l.opts.start.call(e, l),
        at.fx.timer(at.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
            a = t.toLowerCase().match(wt) || [];
            if (at.isFunction(n)) for (; i = a[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function H(e, t, n, i) {
        function r(s) {
            var u;
            return a[s] = !0,
            at.each(e[s] || [],
            function(e, s) {
                var l = s(t, n, i);
                return "string" != typeof l || o || a[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }),
            u
        }
        var a = {},
        o = e === Wn;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }
    function R(e, t) {
        var n, i, r = at.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e: n || (n = {}))[i] = t[i]);
        return n && at.extend(!0, e, n),
        e
    }
    function q(e, t, n) {
        for (var i, r, a, o, s = e.contents,
        u = e.dataTypes;
        "*" === u[0];) u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (o in s) if (s[o] && s[o].test(r)) {
            u.unshift(o);
            break
        }
        if (u[0] in n) a = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    a = o;
                    break
                }
                i || (i = o)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), n[a]) : void 0
    }
    function z(e, t, n, i) {
        var r, a, o, s, u, l = {},
        c = e.dataTypes.slice();
        if (c[1]) for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = a, a = c.shift()) if ("*" === a) a = u;
        else if ("*" !== u && u !== a) {
            if (o = l[u + " " + a] || l["* " + a], !o) for (r in l) if (s = r.split(" "), s[1] === a && (o = l[u + " " + s[0]] || l["* " + s[0]])) {
                o === !0 ? o = l[r] : l[r] !== !0 && (a = s[0], c.unshift(s[1]));
                break
            }
            if (o !== !0) if (o && e["throws"]) t = o(t);
            else try {
                t = o(t)
            } catch(d) {
                return {
                    state: "parsererror",
                    error: o ? d: "No conversion from " + u + " to " + a
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function U(e, t, n, i) {
        var r;
        if (at.isArray(t)) at.each(t,
        function(t, r) {
            n || Qn.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r ? t: "") + "]", r, n, i)
        });
        else if (n || "object" !== at.type(t)) i(e, t);
        else for (r in t) U(e + "[" + r + "]", t[r], n, i)
    }
    function W() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function G(e) {
        return at.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var X = [],
    Q = X.slice,
    Y = X.concat,
    K = X.push,
    J = X.indexOf,
    Z = {},
    et = Z.toString,
    tt = Z.hasOwnProperty,
    nt = "".trim,
    it = {},
    rt = "1.11.0",
    at = function(e, t) {
        return new at.fn.init(e, t)
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    st = /^-ms-/,
    ut = /-([\da-z])/gi,
    lt = function(e, t) {
        return t.toUpperCase()
    };
    at.fn = at.prototype = {
        jquery: rt,
        constructor: at,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = at.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return at.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(at.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: X.sort,
        splice: X.splice
    },
    at.extend = at.fn.extend = function() {
        var e, t, n, i, r, a, o = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[s] || {},
        s++), "object" == typeof o || at.isFunction(o) || (o = {}), s === u && (o = this, s--); u > s; s++) if (null != (r = arguments[s])) for (i in r) e = o[i],
        n = r[i],
        o !== n && (l && n && (at.isPlainObject(n) || (t = at.isArray(n))) ? (t ? (t = !1, a = e && at.isArray(e) ? e: []) : a = e && at.isPlainObject(e) ? e: {},
        o[i] = at.extend(l, a, n)) : void 0 !== n && (o[i] = n));
        return o
    },
    at.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === at.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === at.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== at.type(e) || e.nodeType || at.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (it.ownLast) for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object": typeof e
        },
        globalEval: function(t) {
            t && at.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(st, "ms-").replace(ut, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, a = 0,
            o = e.length,
            s = n(e);
            if (i) {
                if (s) for (; o > a && (r = t.apply(e[a], i), r !== !1); a++);
                else for (a in e) if (r = t.apply(e[a], i), r === !1) break
            } else if (s) for (; o > a && (r = t.call(e[a], a, e[a]), r !== !1); a++);
            else for (a in e) if (r = t.call(e[a], a, e[a]), r === !1) break;
            return e
        },
        trim: nt && !nt.call("\ufeff\xa0") ?
        function(e) {
            return null == e ? "": nt.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ot, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? at.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (J) return J.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, t) {
            for (var n = +t.length,
            i = 0,
            r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n) for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i, r = [], a = 0, o = e.length, s = !n; o > a; a++) i = !t(e[a], a),
            i !== s && r.push(e[a]);
            return r
        },
        map: function(e, t, i) {
            var r, a = 0,
            o = e.length,
            s = n(e),
            u = [];
            if (s) for (; o > a; a++) r = t(e[a], a, i),
            null != r && u.push(r);
            else for (a in e) r = t(e[a], a, i),
            null != r && u.push(r);
            return Y.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r),
            at.isFunction(e) ? (n = Q.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)))
            },
            i.guid = e.guid = e.guid || at.guid++, i) : void 0
        },
        now: function() {
            return + new Date
        },
        support: it
    }),
    at.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, i) {
            var r, a, o, s, u, l, d, h, m, g;
            if ((t ? t.ownerDocument || t: H) !== M && F(t), t = t || M, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (O && !i) {
                if (r = yt.exec(e)) if (o = r[1]) {
                    if (9 === s) {
                        if (a = t.getElementById(o), !a || !a.parentNode) return n;
                        if (a.id === o) return n.push(a),
                        n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && P(t, a) && a.id === o) return n.push(a),
                    n
                } else {
                    if (r[2]) return Z.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((o = r[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)),
                    n
                }
                if (T.qsa && (!D || !D.test(e))) {
                    if (h = d = $, m = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = p(e), (d = t.getAttribute("id")) ? h = d.replace(wt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + f(l[u]);
                        m = bt.test(e) && c(t.parentNode) || t,
                        g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, m.querySelectorAll(g)),
                        n
                    } catch(v) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(ut, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[$] = !0,
            e
        }
        function r(e) {
            var t = M.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
        }
        function o(e, t) {
            var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== G && e
        }
        function d() {}
        function p(e, n) {
            var i, r, a, o, s, u, l, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = _.preFilter; s;) { (!i || (r = lt.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(a = [])),
                i = !1,
                (r = ct.exec(s)) && (i = r.shift(), a.push({
                    value: i,
                    type: r[0].replace(ut, " ")
                }), s = s.slice(i.length));
                for (o in _.filter) ! (r = ht[o].exec(s)) || l[o] && !(r = l[o](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: o,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length: s ? t.error(e) : U(e, u).slice(0)
        }
        function f(e) {
            for (var t = 0,
            n = e.length,
            i = ""; n > t; t++) i += e[t].value;
            return i
        }
        function h(e, t, n) {
            var i = t.dir,
            r = n && "parentNode" === i,
            a = q++;
            return t.first ?
            function(t, n, a) {
                for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, a)
            }: function(t, n, o) {
                var s, u, l = [R, a];
                if (o) {
                    for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, o)) return ! 0
                } else for (; t = t[i];) if (1 === t.nodeType || r) {
                    if (u = t[$] || (t[$] = {}), (s = u[i]) && s[0] === R && s[1] === a) return l[2] = s[2];
                    if (u[i] = l, l[2] = e(t, n, o)) return ! 0
                }
            }
        }
        function m(e) {
            return e.length > 1 ?
            function(t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, t, n, i, r) {
            for (var a, o = [], s = 0, u = e.length, l = null != t; u > s; s++)(a = e[s]) && (!n || n(a, i, r)) && (o.push(a), l && t.push(s));
            return o
        }
        function v(e, t, n, r, a, o) {
            return r && !r[$] && (r = v(r)),
            a && !a[$] && (a = v(a, o)),
            i(function(i, o, s, u) {
                var l, c, d, p = [],
                f = [],
                h = o.length,
                m = i || w(t || "*", s.nodeType ? [s] : s, []),
                v = !e || !i && t ? m: g(m, p, e, s, u),
                y = n ? a || (i ? e: h || r) ? [] : o: v;
                if (n && n(v, y, s, u), r) for (l = g(y, f), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (y[f[c]] = !(v[f[c]] = d));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (l = [], c = y.length; c--;)(d = y[c]) && l.push(v[c] = d);
                            a(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(d = y[c]) && (l = a ? tt.call(i, d) : p[c]) > -1 && (i[l] = !(o[l] = d))
                    }
                } else y = g(y === o ? y.splice(h, y.length) : y),
                a ? a(null, o, y, u) : Z.apply(o, y)
            })
        }
        function y(e) {
            for (var t, n, i, r = e.length,
            a = _.relative[e[0].type], o = a || _.relative[" "], s = a ? 1 : 0, u = h(function(e) {
                return e === t
            },
            o, !0), l = h(function(e) {
                return tt.call(t, e) > -1
            },
            o, !0), c = [function(e, n, i) {
                return ! a && (i || n !== k) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i))
            }]; r > s; s++) if (n = _.relative[e[s].type]) c = [h(m(c), n)];
            else {
                if (n = _.filter[e[s].type].apply(null, e[s].matches), n[$]) {
                    for (i = ++s; r > i && !_.relative[e[i].type]; i++);
                    return v(s > 1 && m(c), s > 1 && f(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*": ""
                    })).replace(ut, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                }
                c.push(n)
            }
            return m(c)
        }
        function b(e, n) {
            var r = n.length > 0,
            a = e.length > 0,
            o = function(i, o, s, u, l) {
                var c, d, p, f = 0,
                h = "0",
                m = i && [],
                v = [],
                y = k,
                b = i || a && _.find.TAG("*", l),
                w = R += null == y ? 1 : Math.random() || .1,
                x = b.length;
                for (l && (k = o !== M && o); h !== x && null != (c = b[h]); h++) {
                    if (a && c) {
                        for (d = 0; p = e[d++];) if (p(c, o, s)) {
                            u.push(c);
                            break
                        }
                        l && (R = w)
                    }
                    r && ((c = !p && c) && f--, i && m.push(c))
                }
                if (f += h, r && h !== f) {
                    for (d = 0; p = n[d++];) p(m, v, o, s);
                    if (i) {
                        if (f > 0) for (; h--;) m[h] || v[h] || (v[h] = K.call(u));
                        v = g(v)
                    }
                    Z.apply(u, v),
                    l && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(u)
                }
                return l && (R = w, k = y),
                m
            };
            return r ? i(o) : o
        }
        function w(e, n, i) {
            for (var r = 0,
            a = n.length; a > r; r++) t(e, n[r], i);
            return i
        }
        function x(e, t, n, i) {
            var r, a, o, s, u, l = p(e);
            if (!i && 1 === l.length) {
                if (a = l[0] = l[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && T.getById && 9 === t.nodeType && O && _.relative[a[1].type]) {
                    if (t = (_.find.ID(o.matches[0].replace(xt, Et), t) || [])[0], !t) return n;
                    e = e.slice(a.shift().value.length)
                }
                for (r = ht.needsContext.test(e) ? 0 : a.length; r--&&(o = a[r], !_.relative[s = o.type]);) if ((u = _.find[s]) && (i = u(o.matches[0].replace(xt, Et), bt.test(a[0].type) && c(t.parentNode) || t))) {
                    if (a.splice(r, 1), e = i.length && f(a), !e) return Z.apply(n, i),
                    n;
                    break
                }
            }
            return A(e, l)(i, t, !O, n, bt.test(e) && c(t.parentNode) || t),
            n
        }
        var E, T, _, S, C, A, k, j, N, F, M, L, O, D, B, I, P, $ = "sizzle" + -new Date,
        H = e.document,
        R = 0,
        q = 0,
        z = n(),
        U = n(),
        W = n(),
        V = function(e, t) {
            return e === t && (N = !0),
            0
        },
        G = "undefined",
        X = 1 << 31,
        Q = {}.hasOwnProperty,
        Y = [],
        K = Y.pop,
        J = Y.push,
        Z = Y.push,
        et = Y.slice,
        tt = Y.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        at = rt.replace("w", "w#"),
        ot = "\\[" + it + "*(" + rt + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
        st = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
        ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        lt = new RegExp("^" + it + "*," + it + "*"),
        ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
        pt = new RegExp(st),
        ft = new RegExp("^" + at + "$"),
        ht = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + nt + ")$", "i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        mt = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        vt = /^[^{]+\{\s*\[native \w/,
        yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /[+~]/,
        wt = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        Et = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            Z.apply(Y = et.call(H.childNodes), H.childNodes),
            Y[H.childNodes.length].nodeType
        } catch(Tt) {
            Z = {
                apply: Y.length ?
                function(e, t) {
                    J.apply(e, et.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        F = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e: H,
            i = n.defaultView;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, L = n.documentElement, O = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload",
            function() {
                F()
            },
            !1) : i.attachEvent && i.attachEvent("onunload",
            function() {
                F()
            })), T.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), T.getElementsByTagName = r(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), T.getById = r(function(e) {
                return L.appendChild(e).id = $,
                !n.getElementsByName || !n.getElementsByName($).length
            }), T.getById ? (_.find.ID = function(e, t) {
                if (typeof t.getElementById !== G && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            _.filter.ID = function(e) {
                var t = e.replace(xt, Et);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(xt, Et);
                return function(e) {
                    var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = T.getElementsByTagName ?
            function(e, t) {
                return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0
            }: function(e, t) {
                var n, i = [],
                r = 0,
                a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            },
            _.find.CLASS = T.getElementsByClassName &&
            function(e, t) {
                return typeof t.getElementsByClassName !== G && O ? t.getElementsByClassName(e) : void 0
            },
            B = [], D = [], (T.qsa = vt.test(n.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>",
                e.querySelectorAll("[t^='']").length && D.push("[*^$]=" + it + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || D.push("\\[" + it + "*(?:value|" + nt + ")"),
                e.querySelectorAll(":checked").length || D.push(":checked")
            }), r(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && D.push("name" + it + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                D.push(",.*:")
            })), (T.matchesSelector = vt.test(I = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                T.disconnectedMatch = I.call(e, "div"),
                I.call(e, "[s!='']:x"),
                B.push("!=", st)
            }), D = D.length && new RegExp(D.join("|")), B = B.length && new RegExp(B.join("|")), t = vt.test(L.compareDocumentPosition), P = t || vt.test(L.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            V = t ?
            function(e, t) {
                if (e === t) return N = !0,
                0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i: (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === H && P(H, e) ? -1 : t === n || t.ownerDocument === H && P(H, t) ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0 : 4 & i ? -1 : 1)
            }: function(e, t) {
                if (e === t) return N = !0,
                0;
                var i, r = 0,
                a = e.parentNode,
                s = t.parentNode,
                u = [e],
                l = [t];
                if (!a || !s) return e === n ? -1 : t === n ? 1 : a ? -1 : s ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0;
                if (a === s) return o(e, t);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; u[r] === l[r];) r++;
                return r ? o(u[r], l[r]) : u[r] === H ? -1 : l[r] === H ? 1 : 0
            },
            n) : M
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && F(e), n = n.replace(dt, "='$1']"), !(!T.matchesSelector || !O || B && B.test(n) || D && D.test(n))) try {
                var i = I.call(e, n);
                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch(r) {}
            return t(n, M, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && F(e),
            P(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== M && F(e);
            var n = _.attrHandle[t.toLowerCase()],
            i = n && Q.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i: T.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            i = 0,
            r = 0;
            if (N = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(V), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return j = null,
            e
        },
        S = t.getText = function(e) {
            var t, n = "",
            i = 0,
            r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += S(t);
            return n
        },
        _ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Et),
                    e[3] = (e[4] || e[5] || "").replace(xt, Et),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ht.CHILD.test(e[0]) ? null: (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pt.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, Et).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === n: n ? (a += "", "=" === n ? a === i: "!=" === n ? a !== i: "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice( - i.length) === i: "~=" === n ? (" " + a + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3),
                    o = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === i && 0 === r ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, d, p, f, h, m = a !== o ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !u && !s;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [o ? g.firstChild: g.lastChild], o && y) {
                                for (c = g[$] || (g[$] = {}), l = c[e] || [], f = l[0] === R && l[1], p = l[0] === R && l[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();) if (1 === d.nodeType && ++p && d === t) {
                                    c[e] = [R, f, p];
                                    break
                                }
                            } else if (y && (l = (t[$] || (t[$] = {}))[e]) && l[0] === R) p = l[1];
                            else for (; (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++p || (y && ((d[$] || (d[$] = {}))[e] = [R, p]), d !== t)););
                            return p -= r,
                            p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[$] ? a(n) : a.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = a(e, n), o = r.length; o--;) i = tt.call(e, r[o]),
                        e[i] = !(t[i] = r[o])
                    }) : function(e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = A(e.replace(ut, "$1"));
                    return r[$] ? i(function(e, t, n, i) {
                        for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, i, a) {
                        return t[0] = e,
                        r(t, null, a, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xt, Et).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = O ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! _.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = 0 > n ? n + t: n; ++i < t;) e.push(i);
                    return e
                })
            }
        },
        _.pseudos.nth = _.pseudos.eq;
        for (E in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[E] = s(E);
        for (E in {
            submit: !0,
            reset: !0
        }) _.pseudos[E] = u(E);
        return d.prototype = _.filters = _.pseudos,
        _.setFilters = new d,
        A = t.compile = function(e, t) {
            var n, i = [],
            r = [],
            a = W[e + " "];
            if (!a) {
                for (t || (t = p(e)), n = t.length; n--;) a = y(t[n]),
                a[$] ? i.push(a) : r.push(a);
                a = W(e, b(r, i))
            }
            return a
        },
        T.sortStable = $.split("").sort(V).join("") === $,
        T.detectDuplicates = !!N,
        F(),
        T.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        T.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || a("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(nt,
        function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        }),
        t
    } (e);
    at.find = ct,
    at.expr = ct.selectors,
    at.expr[":"] = at.expr.pseudos,
    at.unique = ct.uniqueSort,
    at.text = ct.getText,
    at.isXMLDoc = ct.isXML,
    at.contains = ct.contains;
    var dt = at.expr.match.needsContext,
    pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ft = /^.[^:#\[\.,]*$/;
    at.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? at.find.matchesSelector(i, e) ? [i] : [] : at.find.matches(e, at.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    at.fn.extend({
        find: function(e) {
            var t, n = [],
            i = this,
            r = i.length;
            if ("string" != typeof e) return this.pushStack(at(e).filter(function() {
                for (t = 0; r > t; t++) if (at.contains(i[t], this)) return ! 0
            }));
            for (t = 0; r > t; t++) at.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? at.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !! i(this, "string" == typeof e && dt.test(e) ? at(e) : e || [], !1).length
        }
    });
    var ht, mt = e.document,
    gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    vt = at.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof at ? t[0] : t, at.merge(this, at.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: mt, !0)), pt.test(n[1]) && at.isPlainObject(t)) for (n in t) at.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (i = mt.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2]) return ht.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = mt,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : at.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(at) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), at.makeArray(e, this))
    };
    vt.prototype = at.fn,
    ht = at(mt);
    var yt = /^(?:parents|prev(?:Until|All))/,
    bt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    at.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !at(r).is(n));) 1 === r.nodeType && i.push(r),
            r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    at.fn.extend({
        has: function(e) {
            var t, n = at(e, this),
            i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++) if (at.contains(this, n[t])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0,
            r = this.length,
            a = [], o = dt.test(e) || "string" != typeof e ? at(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && at.find.matchesSelector(n, e))) {
                a.push(n);
                break
            }
            return this.pushStack(a.length > 1 ? at.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? at.inArray(this[0], at(e)) : at.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(at.unique(at.merge(this.get(), at(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    at.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return at.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return at.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return at.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return at.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return at.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return at.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return at.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return at.sibling(e.firstChild)
        },
        contents: function(e) {
            return at.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: at.merge([], e.childNodes)
        }
    },
    function(e, t) {
        at.fn[e] = function(n, i) {
            var r = at.map(this, t, n);
            return "Until" !== e.slice( - 5) && (i = n),
            i && "string" == typeof i && (r = at.filter(i, r)),
            this.length > 1 && (bt[e] || (r = at.unique(r)), yt.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var wt = /\S+/g,
    xt = {};
    at.Callbacks = function(e) {
        e = "string" == typeof e ? xt[e] || a(e) : at.extend({},
        e);
        var t, n, i, r, o, s, u = [],
        l = !e.once && [],
        c = function(a) {
            for (n = e.memory && a, i = !0, o = s || 0, s = 0, r = u.length, t = !0; u && r > o; o++) if (u[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            t = !1,
            u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
        },
        d = {
            add: function() {
                if (u) {
                    var i = u.length; !
                    function a(t) {
                        at.each(t,
                        function(t, n) {
                            var i = at.type(n);
                            "function" === i ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && a(n)
                        })
                    } (arguments),
                    t ? r = u.length: n && (s = i, c(n))
                }
                return this
            },
            remove: function() {
                return u && at.each(arguments,
                function(e, n) {
                    for (var i; (i = at.inArray(n, u, i)) > -1;) u.splice(i, 1),
                    t && (r >= i && r--, o >= i && o--)
                }),
                this
            },
            has: function(e) {
                return e ? at.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                r = 0,
                this
            },
            disable: function() {
                return u = l = n = void 0,
                this
            },
            disabled: function() {
                return ! u
            },
            lock: function() {
                return l = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(e, n) {
                return ! u || i && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return d
    },
    at.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", at.Callbacks("once memory"), "resolved"], ["reject", "fail", at.Callbacks("once memory"), "rejected"], ["notify", "progress", at.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return at.Deferred(function(n) {
                        at.each(t,
                        function(t, a) {
                            var o = at.isFunction(e[t]) && e[t];
                            r[a[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && at.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? at.extend(e, i) : i
                }
            },
            r = {};
            return i.pipe = i.then,
            at.each(t,
            function(e, a) {
                var o = a[2],
                s = a[3];
                i[a[1]] = o.add,
                s && o.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                r[a[0]] = function() {
                    return r[a[0] + "With"](this === r ? i: this, arguments),
                    this
                },
                r[a[0] + "With"] = o.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0,
            a = Q.call(arguments),
            o = a.length,
            s = 1 !== o || e && at.isFunction(e.promise) ? o: 0,
            u = 1 === s ? e: at.Deferred(),
            l = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? Q.call(arguments) : r,
                    i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                }
            };
            if (o > 1) for (t = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) a[r] && at.isFunction(a[r].promise) ? a[r].promise().done(l(r, i, a)).fail(u.reject).progress(l(r, n, t)) : --s;
            return s || u.resolveWith(i, a),
            u.promise()
        }
    });
    var Et;
    at.fn.ready = function(e) {
        return at.ready.promise().done(e),
        this
    },
    at.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? at.readyWait++:at.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--at.readyWait: !at.isReady) {
                if (!mt.body) return setTimeout(at.ready);
                at.isReady = !0,
                e !== !0 && --at.readyWait > 0 || (Et.resolveWith(mt, [at]), at.fn.trigger && at(mt).trigger("ready").off("ready"))
            }
        }
    }),
    at.ready.promise = function(t) {
        if (!Et) if (Et = at.Deferred(), "complete" === mt.readyState) setTimeout(at.ready);
        else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", s, !1),
        e.addEventListener("load", s, !1);
        else {
            mt.attachEvent("onreadystatechange", s),
            e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && mt.documentElement
            } catch(i) {}
            n && n.doScroll && !
            function r() {
                if (!at.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(r, 50)
                    }
                    o(),
                    at.ready()
                }
            } ()
        }
        return Et.promise(t)
    };
    var Tt, _t = "undefined";
    for (Tt in at(it)) break;
    it.ownLast = "0" !== Tt,
    it.inlineBlockNeedsLayout = !1,
    at(function() {
        var e, t, n = mt.getElementsByTagName("body")[0];
        n && (e = mt.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = mt.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== _t && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (it.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function() {
        var e = mt.createElement("div");
        if (null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                it.deleteExpando = !1
            }
        }
        e = null
    } (),
    at.acceptData = function(e) {
        var t = at.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ct = /([A-Z])/g;
    at.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? at.cache[e[at.expando]] : e[at.expando],
            !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    at.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0],
            o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = at.data(a), 1 === a.nodeType && !at._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--;) i = o[n].name,
                    0 === i.indexOf("data-") && (i = at.camelCase(i.slice(5)), u(a, i, r[i]));
                    at._data(a, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                at.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                at.data(this, e, t)
            }) : a ? u(a, e, at.data(a, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                at.removeData(this, e)
            })
        }
    }),
    at.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = at._data(e, t), n && (!i || at.isArray(n) ? i = at._data(e, t, at.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = at.queue(e, t),
            i = n.length,
            r = n.shift(),
            a = at._queueHooks(e, t),
            o = function() {
                at.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--),
            r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)),
            !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return at._data(e, n) || at._data(e, n, {
                empty: at.Callbacks("once memory").add(function() {
                    at._removeData(e, t + "queue"),
                    at._removeData(e, n)
                })
            })
        }
    }),
    at.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? at.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = at.queue(this, e, t);
                at._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && at.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                at.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
            r = at.Deferred(),
            a = this,
            o = this.length,
            s = function() {--i || r.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = at._data(a[o], e + "queueHooks"),
            n && n.empty && (i++, n.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    kt = ["Top", "Right", "Bottom", "Left"],
    jt = function(e, t) {
        return e = t || e,
        "none" === at.css(e, "display") || !at.contains(e.ownerDocument, e)
    },
    Nt = at.access = function(e, t, n, i, r, a, o) {
        var s = 0,
        u = e.length,
        l = null == n;
        if ("object" === at.type(n)) {
            r = !0;
            for (s in n) at.access(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== i && (r = !0, at.isFunction(i) || (o = !0), l && (o ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
            return l.call(at(e), n)
        })), t)) for (; u > s; s++) t(e[s], n, o ? i: i.call(e[s], s, t(e[s], n)));
        return r ? e: l ? t.call(e) : u ? t(e[0], n) : a
    },
    Ft = /^(?:checkbox|radio)$/i; !
    function() {
        var e = mt.createDocumentFragment(),
        t = mt.createElement("div"),
        n = mt.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", it.leadingWhitespace = 3 === t.firstChild.nodeType, it.tbody = !t.getElementsByTagName("tbody").length, it.htmlSerialize = !!t.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), it.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",
        function() {
            it.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete t.test
            } catch(i) {
                it.deleteExpando = !1
            }
        }
        e = t = n = null
    } (),
    function() {
        var t, n, i = mt.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t,
        (it[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), it[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    } ();
    var Mt = /^(?:input|select|textarea)$/i,
    Lt = /^key/,
    Ot = /^(?:mouse|contextmenu)|click/,
    Dt = /^(?:focusinfocus|focusoutblur)$/,
    Bt = /^([^.]*)(?:\.(.+)|)$/;
    at.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, o, s, u, l, c, d, p, f, h, m, g = at._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = at.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                    return typeof at === _t || e && at.event.triggered === e.type ? void 0 : at.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = e), t = (t || "").match(wt) || [""], s = t.length; s--;) a = Bt.exec(t[s]) || [],
                f = m = a[1],
                h = (a[2] || "").split(".").sort(),
                f && (l = at.event.special[f] || {},
                f = (r ? l.delegateType: l.bindType) || f, l = at.event.special[f] || {},
                d = at.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && at.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                },
                u), (p = o[f]) || (p = o[f] = [], p.delegateCount = 0, l.setup && l.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), at.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var a, o, s, u, l, c, d, p, f, h, m, g = at.hasData(e) && at._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(wt) || [""], l = t.length; l--;) if (s = Bt.exec(t[l]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (d = at.event.special[f] || {},
                    f = (i ? d.delegateType: d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = a = p.length; a--;) o = p[a],
                    !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (p.splice(a, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                    u && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || at.removeEvent(e, f, g.handle), delete c[f])
                } else for (f in c) at.event.remove(e, f + t[l], n, i, !0);
                at.isEmptyObject(c) && (delete g.handle, at._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var a, o, s, u, l, c, d, p = [i || mt],
            f = tt.call(t, "type") ? t.type: t,
            h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || mt, 3 !== i.nodeType && 8 !== i.nodeType && !Dt.test(f + at.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), o = f.indexOf(":") < 0 && "on" + f, t = t[at.expando] ? t: new at.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : at.makeArray(n, [t]), l = at.event.special[f] || {},
            r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                if (!r && !l.noBubble && !at.isWindow(i)) {
                    for (u = l.delegateType || f, Dt.test(u + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                    c = s;
                    c === (i.ownerDocument || mt) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u: l.bindType || f,
                a = (at._data(s, "events") || {})[t.type] && at._data(s, "handle"),
                a && a.apply(s, n),
                a = o && s[o],
                a && a.apply && at.acceptData(s) && (t.result = a.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !r && !t.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), n) === !1) && at.acceptData(i) && o && i[f] && !at.isWindow(i)) {
                    c = i[o],
                    c && (i[o] = null),
                    at.event.triggered = f;
                    try {
                        i[f]()
                    } catch(m) {}
                    at.event.triggered = void 0,
                    c && (i[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = at.event.fix(e);
            var t, n, i, r, a, o = [],
            s = Q.call(arguments),
            u = (at._data(this, "events") || {})[e.type] || [],
            l = at.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (o = at.event.handlers.call(this, e, u), t = 0; (r = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, a = 0; (i = r.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((at.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, o = [],
            s = t.delegateCount,
            u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (r = [], a = 0; s > a; a++) i = t[a],
                n = i.selector + " ",
                void 0 === r[n] && (r[n] = i.needsContext ? at(n, this).index(u) >= 0 : at.find(n, this, null, [u]).length),
                r[n] && r.push(i);
                r.length && o.push({
                    elem: u,
                    handlers: r
                })
            }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }),
            o
        },
        fix: function(e) {
            if (e[at.expando]) return e;
            var t, n, i, r = e.type,
            a = e,
            o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ot.test(r) ? this.mouseHooks: Lt.test(r) ? this.keyHooks: {}), i = o.props ? this.props.concat(o.props) : this.props, e = new at.Event(a), t = i.length; t--;) n = i[t],
            e[n] = a[n];
            return e.target || (e.target = a.srcElement || mt),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, a = t.button,
                o = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || mt, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement: o),
                e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return at.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return at.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = at.extend(new at.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? at.event.trigger(r, null, t) : at.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    at.removeEvent = mt.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === _t && (e[i] = null), e.detachEvent(i, n))
    },
    at.Event = function(e, t) {
        return this instanceof at.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? p: f) : this.type = e, t && at.extend(this, t), this.timeStamp = e && e.timeStamp || at.now(), void(this[at.expando] = !0)) : new at.Event(e, t)
    },
    at.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = p,
            this.stopPropagation()
        }
    },
    at.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        at.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                r = e.relatedTarget,
                a = e.handleObj;
                return (!r || r !== i && !at.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    it.submitBubbles || (at.event.special.submit = {
        setup: function() {
            return at.nodeName(this, "form") ? !1 : void at.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                n = at.nodeName(t, "input") || at.nodeName(t, "button") ? t.form: void 0;
                n && !at._data(n, "submitBubbles") && (at.event.add(n, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), at._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && at.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return at.nodeName(this, "form") ? !1 : void at.event.remove(this, "._submit")
        }
    }),
    it.changeBubbles || (at.event.special.change = {
        setup: function() {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (at.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), at.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                at.event.simulate("change", this, e, !0)
            })), !1) : void at.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Mt.test(t.nodeName) && !at._data(t, "changeBubbles") && (at.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || at.event.simulate("change", this.parentNode, e, !0)
                }), at._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return at.event.remove(this, "._change"),
            !Mt.test(this.nodeName)
        }
    }),
    it.focusinBubbles || at.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            at.event.simulate(t, e.target, at.event.fix(e), !0)
        };
        at.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                r = at._data(i, t);
                r || i.addEventListener(e, n, !0),
                at._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                r = at._data(i, t) - 1;
                r ? at._data(i, t, r) : (i.removeEventListener(e, n, !0), at._removeData(i, t))
            }
        }
    }),
    at.fn.extend({
        on: function(e, t, n, i, r) {
            var a, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(e) {
                return at().off(e),
                o.apply(this, arguments)
            },
            i.guid = o.guid || (o.guid = at.guid++)),
            this.each(function() {
                at.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            at(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = f),
            this.each(function() {
                at.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                at.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? at.event.trigger(e, t, n, !0) : void 0
        }
    });
    var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Pt = / jQuery\d+="(?:null|\d+)"/g,
    $t = new RegExp("<(?:" + It + ")[\\s/>]", "i"),
    Ht = /^\s+/,
    Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    qt = /<([\w:]+)/,
    zt = /<tbody/i,
    Ut = /<|&#?\w+;/,
    Wt = /<(?:script|style|link)/i,
    Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Gt = /^$|\/(?:java|ecma)script/i,
    Xt = /^true\/(.*)/,
    Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Yt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Kt = m(mt),
    Jt = Kt.appendChild(mt.createElement("div"));
    Yt.optgroup = Yt.option,
    Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead,
    Yt.th = Yt.td,
    at.extend({
        clone: function(e, t, n) {
            var i, r, a, o, s, u = at.contains(e.ownerDocument, e);
            if (it.html5Clone || at.isXMLDoc(e) || !$t.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Jt.innerHTML = e.outerHTML, Jt.removeChild(a = Jt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || at.isXMLDoc(e))) for (i = g(a), s = g(e), o = 0; null != (r = s[o]); ++o) i[o] && T(r, i[o]);
            if (t) if (n) for (s = s || g(e), i = i || g(a), o = 0; null != (r = s[o]); o++) E(r, i[o]);
            else E(e, a);
            return i = g(a, "script"),
            i.length > 0 && x(i, !u && g(e, "script")),
            i = s = r = null,
            a
        },
        buildFragment: function(e, t, n, i) {
            for (var r, a, o, s, u, l, c, d = e.length,
            p = m(t), f = [], h = 0; d > h; h++) if (a = e[h], a || 0 === a) if ("object" === at.type(a)) at.merge(f, a.nodeType ? [a] : a);
            else if (Ut.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (qt.exec(a) || ["", ""])[1].toLowerCase(), c = Yt[u] || Yt._default, s.innerHTML = c[1] + a.replace(Rt, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!it.leadingWhitespace && Ht.test(a) && f.push(t.createTextNode(Ht.exec(a)[0])), !it.tbody) for (a = "table" !== u || zt.test(a) ? "<table>" !== c[1] || zt.test(a) ? 0 : s: s.firstChild, r = a && a.childNodes.length; r--;) at.nodeName(l = a.childNodes[r], "tbody") && !l.childNodes.length && a.removeChild(l);
                for (at.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else f.push(t.createTextNode(a));
            for (s && p.removeChild(s), it.appendChecked || at.grep(g(f, "input"), v), h = 0; a = f[h++];) if ((!i || -1 === at.inArray(a, i)) && (o = at.contains(a.ownerDocument, a), s = g(p.appendChild(a), "script"), o && x(s), n)) for (r = 0; a = s[r++];) Gt.test(a.type || "") && n.push(a);
            return s = null,
            p
        },
        cleanData: function(e, t) {
            for (var n, i, r, a, o = 0,
            s = at.expando,
            u = at.cache,
            l = it.deleteExpando,
            c = at.event.special; null != (n = e[o]); o++) if ((t || at.acceptData(n)) && (r = n[s], a = r && u[r])) {
                if (a.events) for (i in a.events) c[i] ? at.event.remove(n, i) : at.removeEvent(n, i, a.handle);
                u[r] && (delete u[r], l ? delete n[s] : typeof n.removeAttribute !== _t ? n.removeAttribute(s) : n[s] = null, X.push(r))
            }
        }
    }),
    at.fn.extend({
        text: function(e) {
            return Nt(this,
            function(e) {
                return void 0 === e ? at.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? at.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || at.cleanData(g(n)),
            n.parentNode && (t && at.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && at.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && at.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return at.clone(this, e, t)
            })
        },
        html: function(e) {
            return Nt(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
                if (! ("string" != typeof e || Wt.test(e) || !it.htmlSerialize && $t.test(e) || !it.leadingWhitespace && Ht.test(e) || Yt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {},
                        1 === t.nodeType && (at.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(r) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments,
            function(t) {
                e = this.parentNode,
                at.cleanData(g(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Y.apply([], e);
            var n, i, r, a, o, s, u = 0,
            l = this.length,
            c = this,
            d = l - 1,
            p = e[0],
            f = at.isFunction(p);
            if (f || l > 1 && "string" == typeof p && !it.checkClone && Vt.test(p)) return this.each(function(n) {
                var i = c.eq(n);
                f && (e[0] = p.call(this, n, i.html())),
                i.domManip(e, t)
            });
            if (l && (s = at.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (a = at.map(g(s, "script"), b), r = a.length; l > u; u++) i = s,
                u !== d && (i = at.clone(i, !0, !0), r && at.merge(a, g(i, "script"))),
                t.call(this[u], i, u);
                if (r) for (o = a[a.length - 1].ownerDocument, at.map(a, w), u = 0; r > u; u++) i = a[u],
                Gt.test(i.type || "") && !at._data(i, "globalEval") && at.contains(o, i) && (i.src ? at._evalUrl && at._evalUrl(i.src) : at.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qt, "")));
                s = n = null
            }
            return this
        }
    }),
    at.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        at.fn[e] = function(e) {
            for (var n, i = 0,
            r = [], a = at(e), o = a.length - 1; o >= i; i++) n = i === o ? this: this.clone(!0),
            at(a[i])[t](n),
            K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Zt, en = {}; !
    function() {
        var e, t, n = mt.createElement("div"),
        i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "float:left;opacity:.5",
        it.opacity = /^0.5/.test(e.style.opacity),
        it.cssFloat = !!e.style.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        it.clearCloneStyle = "content-box" === n.style.backgroundClip,
        e = n = null,
        it.shrinkWrapBlocks = function() {
            var e, n, r, a;
            if (null == t) {
                if (e = mt.getElementsByTagName("body")[0], !e) return;
                a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                n = mt.createElement("div"),
                r = mt.createElement("div"),
                e.appendChild(n).appendChild(r),
                t = !1,
                typeof r.style.zoom !== _t && (r.style.cssText = i + ";width:1px;padding:1px;zoom:1", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t = 3 !== r.offsetWidth),
                e.removeChild(n),
                e = n = r = null
            }
            return t
        }
    } ();
    var tn, nn, rn = /^margin/,
    an = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
    on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tn = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    },
    nn = function(e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || tn(e),
        o = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== o || at.contains(e.ownerDocument, e) || (o = at.style(e, t)), an.test(o) && rn.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)),
        void 0 === o ? o: o + ""
    }) : mt.documentElement.currentStyle && (tn = function(e) {
        return e.currentStyle
    },
    nn = function(e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || tn(e),
        o = n ? n[t] : void 0,
        null == o && s && s[t] && (o = s[t]),
        an.test(o) && !on.test(t) && (i = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)),
        void 0 === o ? o: o + "" || "auto"
    }),
    function() {
        function t() {
            var t, n, i = mt.getElementsByTagName("body")[0];
            i && (t = mt.createElement("div"), n = mt.createElement("div"), t.style.cssText = l, i.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", at.swap(i, null != i.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                r = 4 === n.offsetWidth
            }), a = !0, o = !1, s = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(n, null) || {}).top, a = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), i.removeChild(t), n = i = null)
        }
        var n, i, r, a, o, s, u = mt.createElement("div"),
        l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
        c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = u.getElementsByTagName("a")[0],
        n.style.cssText = "float:left;opacity:.5",
        it.opacity = /^0.5/.test(n.style.opacity),
        it.cssFloat = !!n.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        it.clearCloneStyle = "content-box" === u.style.backgroundClip,
        n = u = null,
        at.extend(it, {
            reliableHiddenOffsets: function() {
                if (null != i) return i;
                var e, t, n, r = mt.createElement("div"),
                a = mt.getElementsByTagName("body")[0];
                if (a) return r.setAttribute("className", "t"),
                r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                e = mt.createElement("div"),
                e.style.cssText = l,
                a.appendChild(e).appendChild(r),
                r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                t = r.getElementsByTagName("td"),
                t[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                n = 0 === t[0].offsetHeight,
                t[0].style.display = "",
                t[1].style.display = "none",
                i = n && 0 === t[0].offsetHeight,
                a.removeChild(e),
                r = a = null,
                i
            },
            boxSizing: function() {
                return null == r && t(),
                r
            },
            boxSizingReliable: function() {
                return null == a && t(),
                a
            },
            pixelPosition: function() {
                return null == o && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n, i, r;
                if (null == s && e.getComputedStyle) {
                    if (t = mt.getElementsByTagName("body")[0], !t) return;
                    n = mt.createElement("div"),
                    i = mt.createElement("div"),
                    n.style.cssText = l,
                    t.appendChild(n).appendChild(i),
                    r = i.appendChild(mt.createElement("div")),
                    r.style.cssText = i.style.cssText = c,
                    r.style.marginRight = r.style.width = "0",
                    i.style.width = "1px",
                    s = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight),
                    t.removeChild(n)
                }
                return s
            }
        })
    } (),
    at.swap = function(e, t, n, i) {
        var r, a, o = {};
        for (a in t) o[a] = e.style[a],
        e.style[a] = t[a];
        r = n.apply(e, i || []);
        for (a in t) e.style[a] = o[a];
        return r
    };
    var sn = /alpha\([^)]*\)/i,
    un = /opacity\s*=\s*([^)]*)/,
    ln = /^(none|table(?!-c[ea]).+)/,
    cn = new RegExp("^(" + At + ")(.*)$", "i"),
    dn = new RegExp("^([+-])=(" + At + ")", "i"),
    pn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    fn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    hn = ["Webkit", "O", "Moz", "ms"];
    at.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": it.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = at.camelCase(t),
                u = e.style;
                if (t = at.cssProps[s] || (at.cssProps[s] = A(u, s)), o = at.cssHooks[t] || at.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r: u[t];
                if (a = typeof n, "string" === a && (r = dn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(at.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || at.cssNumber[s] || (n += "px"), it.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                    u[t] = "",
                    u[t] = n
                } catch(l) {}
            }
        },
        css: function(e, t, n, i) {
            var r, a, o, s = at.camelCase(t);
            return t = at.cssProps[s] || (at.cssProps[s] = A(e.style, s)),
            o = at.cssHooks[t] || at.cssHooks[s],
            o && "get" in o && (a = o.get(e, !0, n)),
            void 0 === a && (a = nn(e, t, i)),
            "normal" === a && t in fn && (a = fn[t]),
            "" === n || n ? (r = parseFloat(a), n === !0 || at.isNumeric(r) ? r || 0 : a) : a
        }
    }),
    at.each(["height", "width"],
    function(e, t) {
        at.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? 0 === e.offsetWidth && ln.test(at.css(e, "display")) ? at.swap(e, pn,
                function() {
                    return F(e, t, i)
                }) : F(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && tn(e);
                return j(e, n, i ? N(e, t, i, it.boxSizing() && "border-box" === at.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    it.opacity || (at.cssHooks.opacity = {
        get: function(e, t) {
            return un.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            i = e.currentStyle,
            r = at.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            a = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === at.trim(a.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = sn.test(a) ? a.replace(sn, r) : a + " " + r)
        }
    }),
    at.cssHooks.marginRight = C(it.reliableMarginRight,
    function(e, t) {
        return t ? at.swap(e, {
            display: "inline-block"
        },
        nn, [e, "marginRight"]) : void 0
    }),
    at.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        at.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0,
                r = {},
                a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + kt[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        },
        rn.test(e) || (at.cssHooks[e + t].set = j)
    }),
    at.fn.extend({
        css: function(e, t) {
            return Nt(this,
            function(e, t, n) {
                var i, r, a = {},
                o = 0;
                if (at.isArray(t)) {
                    for (i = tn(e), r = t.length; r > o; o++) a[t[o]] = at.css(e, t[o], !1, i);
                    return a
                }
                return void 0 !== n ? at.style(e, t, n) : at.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                jt(this) ? at(this).show() : at(this).hide()
            })
        }
    }),
    at.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(e, t, n, i, r, a) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = a || (at.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? at.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = at.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                at.fx.step[e.prop] ? at.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[at.cssProps[e.prop]] || at.cssHooks[e.prop]) ? at.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    at.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    at.fx = M.prototype.init,
    at.fx.step = {};
    var mn, gn, vn = /^(?:toggle|show|hide)$/,
    yn = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
    bn = /queueHooks$/,
    wn = [B],
    xn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            i = n.cur(),
            r = yn.exec(t),
            a = r && r[3] || (at.cssNumber[e] ? "": "px"),
            o = (at.cssNumber[e] || "px" !== a && +i) && yn.exec(at.css(n.elem, e)),
            s = 1,
            u = 20;
            if (o && o[3] !== a) {
                a = a || o[3],
                r = r || [],
                o = +i || 1;
                do s = s || ".5",
                o /= s,
                at.style(n.elem, e, o + a);
                while (s !== (s = n.cur() / i) && 1 !== s && --u)
            }
            return r && (o = n.start = +o || +i || 0, n.unit = a, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]),
            n
        }]
    };
    at.Animation = at.extend(P, {
        tweener: function(e, t) {
            at.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0,
            r = e.length; r > i; i++) n = e[i],
            xn[n] = xn[n] || [],
            xn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? wn.unshift(e) : wn.push(e)
        }
    }),
    at.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? at.extend({},
        e) : {
            complete: n || !n && t || at.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !at.isFunction(t) && t
        };
        return i.duration = at.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in at.fx.speeds ? at.fx.speeds[i.duration] : at.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            at.isFunction(i.old) && i.old.call(this),
            i.queue && at.dequeue(this, i.queue)
        },
        i
    },
    at.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(jt).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = at.isEmptyObject(e),
            a = at.speed(t, n, i),
            o = function() {
                var t = P(this, at.extend({},
                e), a); (r || at._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                r = null != e && e + "queueHooks",
                a = at.timers,
                o = at._data(this);
                if (r) o[r] && o[r].stop && i(o[r]);
                else for (r in o) o[r] && o[r].stop && bn.test(r) && i(o[r]);
                for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1)); (t || !n) && at.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = at._data(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                a = at.timers,
                o = i ? i.length: 0;
                for (n.finish = !0, at.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    at.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = at.fn[t];
        at.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, r)
        }
    }),
    at.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        at.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    at.timers = [],
    at.fx.tick = function() {
        var e, t = at.timers,
        n = 0;
        for (mn = at.now(); n < t.length; n++) e = t[n],
        e() || t[n] !== e || t.splice(n--, 1);
        t.length || at.fx.stop(),
        mn = void 0
    },
    at.fx.timer = function(e) {
        at.timers.push(e),
        e() ? at.fx.start() : at.timers.pop()
    },
    at.fx.interval = 13,
    at.fx.start = function() {
        gn || (gn = setInterval(at.fx.tick, at.fx.interval))
    },
    at.fx.stop = function() {
        clearInterval(gn),
        gn = null
    },
    at.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    at.fn.delay = function(e, t) {
        return e = at.fx ? at.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var e, t, n, i, r = mt.createElement("div");
        r.setAttribute("className", "t"),
        r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = r.getElementsByTagName("a")[0],
        n = mt.createElement("select"),
        i = n.appendChild(mt.createElement("option")),
        t = r.getElementsByTagName("input")[0],
        e.style.cssText = "top:1px",
        it.getSetAttribute = "t" !== r.className,
        it.style = /top/.test(e.getAttribute("style")),
        it.hrefNormalized = "/a" === e.getAttribute("href"),
        it.checkOn = !!t.value,
        it.optSelected = i.selected,
        it.enctype = !!mt.createElement("form").enctype,
        n.disabled = !0,
        it.optDisabled = !i.disabled,
        t = mt.createElement("input"),
        t.setAttribute("value", ""),
        it.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        it.radioValue = "t" === t.value,
        e = t = n = i = r = null
    } ();
    var En = /\r/g;
    at.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = at.isFunction(e),
                this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, at(this).val()) : e, null == r ? r = "": "number" == typeof r ? r += "": at.isArray(r) && (r = at.map(r,
                    function(e) {
                        return null == e ? "": e + ""
                    })), t = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = at.valHooks[r.type] || at.valHooks[r.nodeName.toLowerCase()],
                t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n: (n = r.value, "string" == typeof n ? n.replace(En, "") : null == n ? "": n)
            }
        }
    }),
    at.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = at.find.attr(e, "value");
                    return null != t ? t: at.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options,
                    r = e.selectedIndex,
                    a = "select-one" === e.type || 0 > r,
                    o = a ? null: [], s = a ? r + 1 : i.length, u = 0 > r ? s: a ? r: 0; s > u; u++) if (n = i[u], !(!n.selected && u !== r || (it.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && at.nodeName(n.parentNode, "optgroup"))) {
                        if (t = at(n).val(), a) return t;
                        o.push(t)
                    }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options,
                    a = at.makeArray(t), o = r.length; o--;) if (i = r[o], at.inArray(at.valHooks.option.get(i), a) >= 0) try {
                        i.selected = n = !0
                    } catch(s) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    at.each(["radio", "checkbox"],
    function() {
        at.valHooks[this] = {
            set: function(e, t) {
                return at.isArray(t) ? e.checked = at.inArray(at(e).val(), t) >= 0 : void 0
            }
        },
        it.checkOn || (at.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var Tn, _n, Sn = at.expr.attrHandle,
    Cn = /^(?:checked|selected)$/i,
    An = it.getSetAttribute,
    kn = it.input;
    at.fn.extend({
        attr: function(e, t) {
            return Nt(this, at.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                at.removeAttr(this, e)
            })
        }
    }),
    at.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === _t ? at.prop(e, t, n) : (1 === a && at.isXMLDoc(e) || (t = t.toLowerCase(), i = at.attrHooks[t] || (at.expr.match.bool.test(t) ? _n: Tn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = at.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : void at.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
            a = t && t.match(wt);
            if (a && 1 === e.nodeType) for (; n = a[r++];) i = at.propFix[n] || n,
            at.expr.match.bool.test(n) ? kn && An || !Cn.test(n) ? e[i] = !1 : e[at.camelCase("default-" + n)] = e[i] = !1 : at.attr(e, n, ""),
            e.removeAttribute(An ? n: i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!it.radioValue && "radio" === t && at.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    _n = {
        set: function(e, t, n) {
            return t === !1 ? at.removeAttr(e, n) : kn && An || !Cn.test(n) ? e.setAttribute(!An && at.propFix[n] || n, n) : e[at.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    at.each(at.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = Sn[t] || at.find.attr;
        Sn[t] = kn && An || !Cn.test(t) ?
        function(e, t, i) {
            var r, a;
            return i || (a = Sn[t], Sn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Sn[t] = a),
            r
        }: function(e, t, n) {
            return n ? void 0 : e[at.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    kn && An || (at.attrHooks.value = {
        set: function(e, t, n) {
            return at.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
        }
    }),
    An || (Tn = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t: void 0
        }
    },
    Sn.id = Sn.name = Sn.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value: null
    },
    at.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value: void 0
        },
        set: Tn.set
    },
    at.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    },
    at.each(["width", "height"],
    function(e, t) {
        at.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })),
    it.style || (at.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var jn = /^(?:input|select|textarea|button|object)$/i,
    Nn = /^(?:a|area)$/i;
    at.fn.extend({
        prop: function(e, t) {
            return Nt(this, at.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = at.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    at.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !at.isXMLDoc(e),
            a && (t = at.propFix[t] || t, r = at.propHooks[t]),
            void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: e[t] = n: r && "get" in r && null !== (i = r.get(e, t)) ? i: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = at.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jn.test(e.nodeName) || Nn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    it.hrefNormalized || at.each(["href", "src"],
    function(e, t) {
        at.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    it.optSelected || (at.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        at.propFix[this.toLowerCase()] = this
    }),
    it.enctype || (at.propFix.enctype = "encoding");
    var Fn = /[\t\r\n\f]/g;
    at.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, o, s = 0,
            u = this.length,
            l = "string" == typeof e && e;
            if (at.isFunction(e)) return this.each(function(t) {
                at(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(wt) || []; u > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Fn, " ") : " ")) {
                for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o = at.trim(i),
                n.className !== o && (n.className = o)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, o, s = 0,
            u = this.length,
            l = 0 === arguments.length || "string" == typeof e && e;
            if (at.isFunction(e)) return this.each(function(t) {
                at(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(wt) || []; u > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Fn, " ") : "")) {
                for (a = 0; r = t[a++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                o = e ? at.trim(i) : "",
                n.className !== o && (n.className = o)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(at.isFunction(e) ?
            function(n) {
                at(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var t, i = 0,
                r = at(this), a = e.match(wt) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === _t || "boolean" === n) && (this.className && at._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": at._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Fn, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        }
    }),
    at.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        at.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    at.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Mn = at.now(),
    Ln = /\?/,
    On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    at.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
        r = at.trim(t + "");
        return r && !at.trim(r.replace(On,
        function(e, t, r, a) {
            return n && t && (i = 0),
            0 === i ? e: (n = r || t, i += !a - !r, "")
        })) ? Function("return " + r)() : at.error("Invalid JSON: " + t)
    },
    at.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch(r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || at.error("Invalid XML: " + t),
        n
    };
    var Dn, Bn, In = /#.*$/,
    Pn = /([?&])_=[^&]*/,
    $n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Rn = /^(?:GET|HEAD)$/,
    qn = /^\/\//,
    zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Un = {},
    Wn = {},
    Vn = "*/".concat("*");
    try {
        Bn = location.href
    } catch(Gn) {
        Bn = mt.createElement("a"),
        Bn.href = "",
        Bn = Bn.href
    }
    Dn = zn.exec(Bn.toLowerCase()) || [],
    at.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Bn,
            type: "GET",
            isLocal: Hn.test(Dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": at.parseJSON,
                "text xml": at.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, at.ajaxSettings), t) : R(at.ajaxSettings, e)
        },
        ajaxPrefilter: $(Un),
        ajaxTransport: $(Wn),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, c, v, y, w, E = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, o = i || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = q(d, x, n)), y = z(d, y, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (at.lastModified[a] = w), w = x.getResponseHeader("etag"), w && (at.etag[a] = w)), 204 === e || "HEAD" === d.type ? E = "nocontent": 304 === e ? E = "notmodified": (E = y.state, c = y.data, v = y.error, r = !v)) : (v = E, (e || !E) && (E = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || E) + "", r ? h.resolveWith(p, [c, E, x]) : h.rejectWith(p, [x, E, v]), x.statusCode(g), g = void 0, u && f.trigger(r ? "ajaxSuccess": "ajaxError", [x, d, r ? c: v]), m.fireWith(p, [x, E]), u && (f.trigger("ajaxComplete", [x, d]), --at.active || at.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var i, r, a, o, s, u, l, c, d = at.ajaxSetup({},
            t),
            p = d.context || d,
            f = d.context && (p.nodeType || p.jquery) ? at(p) : at.event,
            h = at.Deferred(),
            m = at.Callbacks("once memory"),
            g = d.statusCode || {},
            v = {},
            y = {},
            b = 0,
            w = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) for (c = {}; t = $n.exec(o);) c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                    else x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return l && l.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Bn) + "").replace(In, "").replace(qn, Dn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = at.trim(d.dataType || "*").toLowerCase().match(wt) || [""], null == d.crossDomain && (i = zn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Dn[1] && i[2] === Dn[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Dn[3] || ("http:" === Dn[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = at.param(d.data, d.traditional)), H(Un, d, t, x), 2 === b) return x;
            u = d.global,
            u && 0 === at.active++&&at.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Rn.test(d.type),
            a = d.url,
            d.hasContent || (d.data && (a = d.url += (Ln.test(a) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = Pn.test(a) ? a.replace(Pn, "$1_=" + Mn++) : a + (Ln.test(a) ? "&": "?") + "_=" + Mn++)),
            d.ifModified && (at.lastModified[a] && x.setRequestHeader("If-Modified-Since", at.lastModified[a]), at.etag[a] && x.setRequestHeader("If-None-Match", at.etag[a])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType),
            x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vn + "; q=0.01": "") : d.accepts["*"]);
            for (r in d.headers) x.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) x[r](d[r]);
            if (l = H(Wn, d, t, x)) {
                x.readyState = 1,
                u && f.trigger("ajaxSend", [x, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                },
                d.timeout));
                try {
                    b = 1,
                    l.send(v, n)
                } catch(E) {
                    if (! (2 > b)) throw E;
                    n( - 1, E)
                }
            } else n( - 1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return at.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return at.get(e, void 0, t, "script")
        }
    }),
    at.each(["get", "post"],
    function(e, t) {
        at[t] = function(e, n, i, r) {
            return at.isFunction(n) && (r = r || i, i = n, n = void 0),
            at.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }),
    at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        at.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    at._evalUrl = function(e) {
        return at.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    at.fn.extend({
        wrapAll: function(e) {
            if (at.isFunction(e)) return this.each(function(t) {
                at(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = at(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(at.isFunction(e) ?
            function(t) {
                at(this).wrapInner(e.call(this, t))
            }: function() {
                var t = at(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = at.isFunction(e);
            return this.each(function(n) {
                at(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                at.nodeName(this, "body") || at(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    at.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (e.style && e.style.display || at.css(e, "display"))
    },
    at.expr.filters.visible = function(e) {
        return ! at.expr.filters.hidden(e)
    };
    var Xn = /%20/g,
    Qn = /\[\]$/,
    Yn = /\r?\n/g,
    Kn = /^(?:submit|button|image|reset|file)$/i,
    Jn = /^(?:input|select|textarea|keygen)/i;
    at.param = function(e, t) {
        var n, i = [],
        r = function(e, t) {
            t = at.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = at.ajaxSettings && at.ajaxSettings.traditional), at.isArray(e) || e.jquery && !at.isPlainObject(e)) at.each(e,
        function() {
            r(this.name, this.value)
        });
        else for (n in e) U(n, e[n], t, r);
        return i.join("&").replace(Xn, "+")
    },
    at.fn.extend({
        serialize: function() {
            return at.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = at.prop(this, "elements");
                return e ? at.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !at(this).is(":disabled") && Jn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Ft.test(e))
            }).map(function(e, t) {
                var n = at(this).val();
                return null == n ? null: at.isArray(n) ? at.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yn, "\r\n")
                }
            }).get()
        }
    }),
    at.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
    }: W;
    var Zn = 0,
    ei = {},
    ti = at.ajaxSettings.xhr();
    e.ActiveXObject && at(e).on("unload",
    function() {
        for (var e in ei) ei[e](void 0, !0)
    }),
    it.cors = !!ti && "withCredentials" in ti,
    ti = it.ajax = !!ti,
    ti && at.ajaxTransport(function(e) {
        if (!e.crossDomain || it.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, a = e.xhr(),
                    o = ++Zn;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && a.setRequestHeader(r, n[r] + "");
                    a.send(e.hasContent && e.data || null),
                    t = function(n, r) {
                        var s, u, l;
                        if (t && (r || 4 === a.readyState)) if (delete ei[o], t = void 0, a.onreadystatechange = at.noop, r) 4 !== a.readyState && a.abort();
                        else {
                            l = {},
                            s = a.status,
                            "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText
                            } catch(c) {
                                u = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                        }
                        l && i(s, u, l, a.getAllResponseHeaders())
                    },
                    e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = ei[o] = t: t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    at.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return at.globalEval(e),
                e
            }
        }
    }),
    at.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    at.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n = mt.head || at("head")[0] || mt.documentElement;
            return {
                send: function(i, r) {
                    t = mt.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    },
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ni = [],
    ii = /(=)\?(?=&|$)|\?\?/;
    at.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ni.pop() || at.expando + "_" + Mn++;
            return this[e] = !0,
            e
        }
    }),
    at.ajaxPrefilter("json jsonp",
    function(t, n, i) {
        var r, a, o, s = t.jsonp !== !1 && (ii.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = at.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ii, "$1" + r) : t.jsonp !== !1 && (t.url += (Ln.test(t.url) ? "&": "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return o || at.error(r + " was not called"),
            o[0]
        },
        t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            o = arguments
        },
        i.always(function() {
            e[r] = a,
            t[r] && (t.jsonpCallback = n.jsonpCallback, ni.push(r)),
            o && at.isFunction(a) && a(o[0]),
            o = a = void 0
        }), "script") : void 0
    }),
    at.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || mt;
        var i = pt.exec(e),
        r = !n && [];
        return i ? [t.createElement(i[1])] : (i = at.buildFragment([e], t, r), r && r.length && at(r).remove(), at.merge([], i.childNodes))
    };
    var ri = at.fn.load;
    at.fn.load = function(e, t, n) {
        if ("string" != typeof e && ri) return ri.apply(this, arguments);
        var i, r, a, o = this,
        s = e.indexOf(" ");
        return s >= 0 && (i = e.slice(s, e.length), e = e.slice(0, s)),
        at.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"),
        o.length > 0 && at.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            o.html(i ? at("<div>").append(at.parseHTML(e)).find(i) : e)
        }).complete(n &&
        function(e, t) {
            o.each(n, r || [e.responseText, t, e])
        }),
        this
    },
    at.expr.filters.animated = function(e) {
        return at.grep(at.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var ai = e.document.documentElement;
    at.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, o, s, u, l, c = at.css(e, "position"),
            d = at(e),
            p = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            a = at.css(e, "top"),
            u = at.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && at.inArray("auto", [a, u]) > -1,
            l ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(u) || 0),
            at.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (p.top = t.top - s.top + o),
            null != t.left && (p.left = t.left - s.left + r),
            "using" in t ? t.using.call(e, p) : d.css(p)
        }
    },
    at.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                at.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                top: 0,
                left: 0
            },
            r = this[0],
            a = r && r.ownerDocument;
            if (a) return t = a.documentElement,
            at.contains(t, r) ? (typeof r.getBoundingClientRect !== _t && (i = r.getBoundingClientRect()), n = G(a), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === at.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), at.nodeName(e[0], "html") || (n = e.offset()), n.top += at.css(e[0], "borderTopWidth", !0), n.left += at.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - at.css(i, "marginTop", !0),
                    left: t.left - n.left - at.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ai; e && !at.nodeName(e, "html") && "static" === at.css(e, "position");) e = e.offsetParent;
                return e || ai
            })
        }
    }),
    at.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = /Y/.test(t);
        at.fn[e] = function(i) {
            return Nt(this,
            function(e, i, r) {
                var a = G(e);
                return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? at(a).scrollLeft() : r, n ? r: at(a).scrollTop()) : e[i] = r)
            },
            e, i, arguments.length, null)
        }
    }),
    at.each(["top", "left"],
    function(e, t) {
        at.cssHooks[t] = C(it.pixelPosition,
        function(e, n) {
            return n ? (n = nn(e, t), an.test(n) ? at(e).position()[t] + "px": n) : void 0
        })
    }),
    at.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        at.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, i) {
            at.fn[i] = function(i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                o = n || (i === !0 || r === !0 ? "margin": "border");
                return Nt(this,
                function(t, n, i) {
                    var r;
                    return at.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? at.css(t, n, o) : at.style(t, n, i, o)
                },
                t, a ? i: void 0, a, null)
            }
        })
    }),
    at.fn.size = function() {
        return this.length
    },
    at.fn.andSelf = at.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return at
    });
    var oi = e.jQuery,
    si = e.$;
    return at.noConflict = function(t) {
        return e.$ === at && (e.$ = si),
        t && e.jQuery === at && (e.jQuery = oi),
        at
    },
    typeof t === _t && (e.jQuery = e.$ = at),
    at
}),
function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        },
        fire: function(t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i),
            r.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(i) {
            var r, a, o, s, u, l, c, d;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"), u = s === t ? null: s, l = i.data("with-credentials") || null, c = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"),
                    a = i.attr("action"),
                    o = i.serializeArray();
                    var p = i.data("ujs:submit-button");
                    p && (o.push(p), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), a = n.href(i), o = i.data("params") || null);
                d = {
                    type: r || "GET",
                    data: o,
                    dataType: c,
                    beforeSend: function(e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script),
                        n.fire(i, "ajax:beforeSend", [e, r])
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: u
                },
                l && (d.xhrFields = {
                    withCredentials: l
                }),
                a && (d.url = a);
                var f = n.ajax(d);
                return i.trigger("ajax:send", f),
                f
            }
            return ! 1
        },
        handleMethod: function(i) {
            var r = n.href(i),
            a = i.data("method"),
            o = i.attr("target"),
            s = e("meta[name=csrf-token]").attr("content"),
            u = e("meta[name=csrf-param]").attr("content"),
            l = e('<form method="post" action="' + r + '"></form>'),
            c = '<input name="_method" value="' + a + '" type="hidden" />';
            u !== t && s !== t && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'),
            o && l.attr("target", o),
            l.hide().append(c).appendTo("body"),
            l.submit()
        },
        disableFormElements: function(t) {
            t.find(n.disableSelector).each(function() {
                var t = e(this),
                n = t.is("button") ? "html": "val";
                t.data("ujs:enable-with", t[n]()),
                t[n](t.data("disable-with")),
                t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(n.enableSelector).each(function() {
                var t = e(this),
                n = t.is("button") ? "html": "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")),
                t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
            r = !1;
            return i ? (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
        },
        blankInputs: function(t, n, i) {
            var r, a, o = e(),
            s = n || "input,textarea",
            u = t.find(s);
            return u.each(function() {
                if (r = e(this), a = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !a == !i) {
                    if (r.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return ! 0;
                    o = o.add(r)
                }
            }),
            o.length ? o: !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()),
            e.html(e.data("disable-with")),
            e.bind("click.railsDisable",
            function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable")
        }
    },
    n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete",
    function() {
        n.enableElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails",
    function(i) {
        var r = e(this),
        a = r.data("method"),
        o = r.data("params"),
        s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
            if (s && (!a || "GET" === a) && !o) return ! 0;
            var u = n.handleRemote(r);
            return u === !1 ? n.enableElement(r) : u.error(function() {
                n.enableElement(r)
            }),
            !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails",
    function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.inputChangeSelector, "change.rails",
    function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails",
    function(i) {
        var r = e(this),
        a = r.data("remote") !== t,
        o = n.blankInputs(r, n.requiredInputSelector),
        s = n.nonBlankInputs(r, n.fileInputSelector);
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (o && r.attr("novalidate") == t && n.fire(r, "ajax:aborted:required", [o])) return n.stopEverything(i);
        if (a) {
            if (s) {
                setTimeout(function() {
                    n.disableFormElements(r)
                },
                13);
                var u = n.fire(r, "ajax:aborted:file", [s]);
                return u || setTimeout(function() {
                    n.enableFormElements(r)
                },
                13),
                u
            }
            return n.handleRemote(r),
            !1
        }
        setTimeout(function() {
            n.disableFormElements(r)
        },
        13)
    }), i.delegate(n.formInputClickSelector, "click.rails",
    function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
        a = r ? {
            name: r,
            value: i.val()
        }: null;
        i.closest("form").data("ujs:submit-button", a)
    }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails",
    function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails",
    function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
} (jQuery),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, r) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function(e, t, n, i, r) {
        return i * (t /= r) * t + n
    },
    easeOutQuad: function(e, t, n, i, r) {
        return - i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n: -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, i, r) {
        return i * (t /= r) * t * t + n
    },
    easeOutCubic: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n: i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, i, r) {
        return - i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n: -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n: i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, i, r) {
        return - i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(e, t, n, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, i, r) {
        return - i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function(e, t, n, i, r) {
        return 0 == t ? n: i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function(e, t, n, i, r) {
        return t == r ? n + i: i * ( - Math.pow(2, -10 * t / r) + 1) + n
    },
    easeInOutExpo: function(e, t, n, i, r) {
        return 0 == t ? n: t == r ? n + i: (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n: i / 2 * ( - Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, i, r) {
        return - i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n: i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, i, r) {
        var a = 1.70158,
        o = 0,
        s = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (o || (o = .3 * r), s < Math.abs(i)) {
            s = i;
            var a = o / 4
        } else var a = o / (2 * Math.PI) * Math.asin(i / s);
        return - (s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, i, r) {
        var a = 1.70158,
        o = 0,
        s = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (o || (o = .3 * r), s < Math.abs(i)) {
            s = i;
            var a = o / 4
        } else var a = o / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - a) * Math.PI / o) + i + n
    },
    easeInOutElastic: function(e, t, n, i, r) {
        var a = 1.70158,
        o = 0,
        s = i;
        if (0 == t) return n;
        if (2 == (t /= r / 2)) return n + i;
        if (o || (o = .3 * r * 1.5), s < Math.abs(i)) {
            s = i;
            var a = o / 4
        } else var a = o / (2 * Math.PI) * Math.asin(i / s);
        return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / o) + n: s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / o) * .5 + i + n
    },
    easeInBack: function(e, t, n, i, r, a) {
        return void 0 == a && (a = 1.70158),
        i * (t /= r) * t * ((a + 1) * t - a) + n
    },
    easeOutBack: function(e, t, n, i, r, a) {
        return void 0 == a && (a = 1.70158),
        i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + n
    },
    easeInOutBack: function(e, t, n, i, r, a) {
        return void 0 == a && (a = 1.70158),
        (t /= r / 2) < 1 ? i / 2 * t * t * (((a *= 1.525) + 1) * t - a) + n: i / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + n
    },
    easeInBounce: function(e, t, n, i, r) {
        return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function(e, t, n, i, r) {
        return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n: 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n: 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n: i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, i, r) {
        return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n: .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
}),
function(e) {
    function t(t, i, r) {
        var a = this;
        return this.on("click.pjax", t,
        function(t) {
            var o = e.extend({},
            p(i, r));
            o.container || (o.container = e(this).attr("data-pjax") || a),
            n(t, o)
        })
    }
    function n(t, n, i) {
        i = p(n, i);
        var a = t.currentTarget;
        if ("A" !== a.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (! (t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== a.protocol || location.hostname !== a.hostname || a.hash && a.href.replace(a.hash, "") === location.href.replace(location.hash, "") || a.href === location.href + "#")) {
            var o = {
                url: a.href,
                container: e(a).attr("data-pjax"),
                target: a
            },
            s = e.extend({},
            o, i),
            u = e.Event("pjax:click");
            e(a).trigger(u, [s]),
            u.isDefaultPrevented() || (r(s), t.preventDefault(), e(a).trigger("pjax:clicked", [s]))
        }
    }
    function i(t, n, i) {
        i = p(n, i);
        var a = t.currentTarget;
        if ("FORM" !== a.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
        var o = {
            type: a.method.toUpperCase(),
            url: a.action,
            data: e(a).serializeArray(),
            container: e(a).attr("data-pjax"),
            target: a
        };
        r(e.extend({},
        o, i)),
        t.preventDefault()
    }
    function r(t) {
        function n(t, n) {
            var r = e.Event(t, {
                relatedTarget: i
            });
            return s.trigger(r, n),
            !r.isDefaultPrevented()
        }
        t = e.extend(!0, {},
        e.ajaxSettings, r.defaults, t),
        e.isFunction(t.url) && (t.url = t.url());
        var i = t.target,
        a = d(t.url).hash,
        s = t.context = f(t.container);
        t.data || (t.data = {}),
        t.data._pjax = s.selector;
        var u;
        t.beforeSend = function(e, i) {
            return "GET" !== i.type && (i.timeout = 0),
            e.setRequestHeader("X-PJAX", "true"),
            e.setRequestHeader("X-PJAX-Container", s.selector),
            n("pjax:beforeSend", [e, i]) ? (i.timeout > 0 && (u = setTimeout(function() {
                n("pjax:timeout", [e, t]) && e.abort("timeout")
            },
            i.timeout), i.timeout = 0), void(t.requestUrl = d(i.url).href)) : !1
        },
        t.complete = function(e, i) {
            u && clearTimeout(u),
            n("pjax:complete", [e, i, t]),
            n("pjax:end", [e, t])
        },
        t.error = function(e, i, r) {
            var a = g("", e, t),
            s = n("pjax:error", [e, i, r, t]);
            "GET" == t.type && "abort" !== i && s && o(a.url)
        },
        t.success = function(i, u, c) {
            var p = "function" == typeof e.pjax.defaults.version ? e.pjax.defaults.version() : e.pjax.defaults.version,
            f = c.getResponseHeader("X-PJAX-Version"),
            h = g(i, c, t);
            if (p && f && p !== f) return void o(h.url);
            if (!h.contents) return void o(h.url);
            r.state = {
                id: t.id || l(),
                url: h.url,
                title: h.title,
                container: s.selector,
                fragment: t.fragment,
                timeout: t.timeout
            },
            (t.push || t.replace) && window.history.replaceState(r.state, h.title, h.url),
            document.activeElement.blur(),
            h.title && (document.title = h.title),
            s.html(h.contents);
            var m = s.find("input[autofocus], textarea[autofocus]").last()[0];
            if (m && document.activeElement !== m && m.focus(), v(h.scripts), "number" == typeof t.scrollTo && e(window).scrollTop(t.scrollTo), "" !== a) {
                var y = d(h.url);
                y.hash = a,
                r.state.url = y.href,
                window.history.replaceState(r.state, h.title, y.href);
                var b = e(y.hash);
                b.length && e(window).scrollTop(b.offset().top)
            }
            n("pjax:success", [i, u, c, t])
        },
        r.state || (r.state = {
            id: l(),
            url: window.location.href,
            title: document.title,
            container: s.selector,
            fragment: t.fragment,
            timeout: t.timeout
        },
        window.history.replaceState(r.state, document.title));
        var p = r.xhr;
        p && p.readyState < 4 && (p.onreadystatechange = e.noop, p.abort()),
        r.options = t;
        var p = r.xhr = e.ajax(t);
        return p.readyState > 0 && (t.push && !t.replace && (y(r.state.id, s.clone().contents()), window.history.pushState(null, "", c(t.requestUrl))), n("pjax:start", [p, t]), n("pjax:send", [p, t])),
        r.xhr
    }
    function a(t, n) {
        var i = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return r(e.extend(i, p(t, n)))
    }
    function o(e) {
        window.history.replaceState(null, "", "#"),
        window.location.replace(e)
    }
    function s(t) {
        var n = t.state;
        if (n && n.container) {
            if (T && _ == n.url) return;
            if (r.state && r.state.id === n.id) return;
            var i = e(n.container);
            if (i.length) {
                var a, s = C[n.id];
                r.state && (a = r.state.id < n.id ? "forward": "back", b(a, r.state.id, i.clone().contents()));
                var u = e.Event("pjax:popstate", {
                    state: n,
                    direction: a
                });
                i.trigger(u);
                var l = {
                    id: n.id,
                    url: n.url,
                    container: i,
                    push: !1,
                    fragment: n.fragment,
                    timeout: n.timeout,
                    scrollTo: !1
                };
                s ? (i.trigger("pjax:start", [null, l]), n.title && (document.title = n.title), i.html(s), r.state = n, i.trigger("pjax:end", [null, l])) : r(l),
                i[0].offsetHeight
            } else o(location.href)
        }
        T = !1
    }
    function u(t) {
        var n = e.isFunction(t.url) ? t.url() : t.url,
        i = t.type ? t.type.toUpperCase() : "GET",
        r = e("<form>", {
            method: "GET" === i ? "GET": "POST",
            action: n,
            style: "display:none"
        });
        "GET" !== i && "POST" !== i && r.append(e("<input>", {
            type: "hidden",
            name: "_method",
            value: i.toLowerCase()
        }));
        var a = t.data;
        if ("string" == typeof a) e.each(a.split("&"),
        function(t, n) {
            var i = n.split("=");
            r.append(e("<input>", {
                type: "hidden",
                name: i[0],
                value: i[1]
            }))
        });
        else if ("object" == typeof a) for (key in a) r.append(e("<input>", {
            type: "hidden",
            name: key,
            value: a[key]
        }));
        e(document.body).append(r),
        r.submit()
    }
    function l() {
        return (new Date).getTime()
    }
    function c(e) {
        return e.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }
    function d(e) {
        var t = document.createElement("a");
        return t.href = e,
        t
    }
    function p(t, n) {
        return t && n ? n.container = t: n = e.isPlainObject(t) ? t: {
            container: t
        },
        n.container && (n.container = f(n.container)),
        n
    }
    function f(t) {
        if (t = e(t), t.length) {
            if ("" !== t.selector && t.context === document) return t;
            if (t.attr("id")) return e("#" + t.attr("id"));
            throw "cant get selector for pjax container!"
        }
        throw "no pjax container for " + t.selector
    }
    function h(e, t) {
        return e.filter(t).add(e.find(t))
    }
    function m(t) {
        return e.parseHTML(t, document, !0)
    }
    function g(t, n, i) {
        var r = {};
        if (r.url = c(n.getResponseHeader("X-PJAX-URL") || i.requestUrl), /<html/i.test(t)) var a = e(m(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
        o = e(m(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
        else var a = o = e(m(t));
        if (0 === o.length) return r;
        if (r.title = h(a, "title").last().text(), i.fragment) {
            if ("body" === i.fragment) var s = o;
            else var s = h(o, i.fragment).first();
            s.length && (r.contents = s.contents(), r.title || (r.title = s.attr("title") || s.data("title")))
        } else / <html / i.test(t) || (r.contents = o);
        return r.contents && (r.contents = r.contents.not(function() {
            return e(this).is("title")
        }), r.contents.find("title").remove(), r.scripts = h(r.contents, "script[src]").remove(), r.contents = r.contents.not(r.scripts)),
        r.title && (r.title = e.trim(r.title)),
        r
    }
    function v(t) {
        if (t) {
            var n = e("script[src]");
            t.each(function() {
                var t = this.src,
                i = n.filter(function() {
                    return this.src === t
                });
                if (!i.length) {
                    var r = document.createElement("script");
                    r.type = e(this).attr("type"),
                    r.src = e(this).attr("src"),
                    document.head.appendChild(r)
                }
            })
        }
    }
    function y(e, t) {
        for (C[e] = t, k.push(e); A.length;) delete C[A.shift()];
        for (; k.length > r.defaults.maxCacheLength;) delete C[k.shift()]
    }
    function b(e, t, n) {
        var i, r;
        C[t] = n,
        "forward" === e ? (i = k, r = A) : (i = A, r = k),
        i.push(t),
        (t = r.pop()) && delete C[t]
    }
    function w() {
        return e("meta").filter(function() {
            var t = e(this).attr("http-equiv");
            return t && "X-PJAX-VERSION" === t.toUpperCase()
        }).attr("content")
    }
    function x() {
        e.fn.pjax = t,
        e.pjax = r,
        e.pjax.enable = e.noop,
        e.pjax.disable = E,
        e.pjax.click = n,
        e.pjax.submit = i,
        e.pjax.reload = a,
        e.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20,
            version: w
        },
        e(window).on("popstate.pjax", s)
    }
    function E() {
        e.fn.pjax = function() {
            return this
        },
        e.pjax = u,
        e.pjax.enable = x,
        e.pjax.disable = e.noop,
        e.pjax.click = e.noop,
        e.pjax.submit = e.noop,
        e.pjax.reload = function() {
            window.location.reload()
        },
        e(window).off("popstate.pjax", s)
    }
    var T = !0,
    _ = window.location.href,
    S = window.history.state;
    S && S.container && (r.state = S),
    "state" in window.history && (T = !1);
    var C = {},
    A = [],
    k = [];
    e.inArray("state", e.event.props) < 0 && e.event.props.push("state"),
    e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),
    e.support.pjax ? x() : E()
} (jQuery),
function(e) {
    function t(e) {
        if (e in d.style) return e;
        var t = ["Moz", "Webkit", "O", "ms"],
        n = e.charAt(0).toUpperCase() + e.substr(1);
        if (e in d.style) return e;
        for (var i = 0; i < t.length; ++i) {
            var r = t[i] + n;
            if (r in d.style) return r
        }
    }
    function n() {
        return d.style[p.transform] = "",
        d.style[p.transform] = "rotateY(90deg)",
        "" !== d.style[p.transform]
    }
    function i(e) {
        return "string" == typeof e && this.parse(e),
        this
    }
    function r(e, t, n) {
        t === !0 ? e.queue(n) : t ? e.queue(t, n) : n()
    }
    function a(t) {
        var n = [];
        return e.each(t,
        function(t) {
            t = e.camelCase(t),
            t = e.transit.propertyMap[t] || e.cssProps[t] || t,
            t = u(t),
            -1 === e.inArray(t, n) && n.push(t)
        }),
        n
    }
    function o(t, n, i, r) {
        var o = a(t);
        e.cssEase[i] && (i = e.cssEase[i]);
        var s = "" + c(n) + " " + i;
        parseInt(r, 10) > 0 && (s += " " + c(r));
        var u = [];
        return e.each(o,
        function(e, t) {
            u.push(t + " " + s)
        }),
        u.join(", ")
    }
    function s(t, n) {
        n || (e.cssNumber[t] = !0),
        e.transit.propertyMap[t] = p.transform,
        e.cssHooks[t] = {
            get: function(n) {
                var i = e(n).css("transit:transform");
                return i.get(t)
            },
            set: function(n, i) {
                var r = e(n).css("transit:transform");
                r.setFromString(t, i),
                e(n).css({
                    "transit:transform": r
                })
            }
        }
    }
    function u(e) {
        return e.replace(/([A-Z])/g,
        function(e) {
            return "-" + e.toLowerCase()
        })
    }
    function l(e, t) {
        return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t: e
    }
    function c(t) {
        var n = t;
        return e.fx.speeds[n] && (n = e.fx.speeds[n]),
        l(n, "ms")
    }
    e.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var d = document.createElement("div"),
    p = {},
    f = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    p.transition = t("transition"),
    p.transitionDelay = t("transitionDelay"),
    p.transform = t("transform"),
    p.transformOrigin = t("transformOrigin"),
    p.transform3d = n();
    var h = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    },
    m = p.transitionEnd = h[p.transition] || null;
    for (var g in p) p.hasOwnProperty(g) && "undefined" == typeof e.support[g] && (e.support[g] = p[g]);
    d = null,
    e.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    },
    e.cssHooks["transit:transform"] = {
        get: function(t) {
            return e(t).data("transform") || new i
        },
        set: function(t, n) {
            var r = n;
            r instanceof i || (r = new i(r)),
            t.style[p.transform] = "WebkitTransform" !== p.transform || f ? r.toString() : r.toString(!0),
            e(t).data("transform", r)
        }
    },
    e.cssHooks.transform = {
        set: e.cssHooks["transit:transform"].set
    },
    e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
        get: function(e) {
            return e.style[p.transformOrigin]
        },
        set: function(e, t) {
            e.style[p.transformOrigin] = t
        }
    },
    e.cssHooks.transition = {
        get: function(e) {
            return e.style[p.transition]
        },
        set: function(e, t) {
            e.style[p.transition] = t
        }
    }),
    s("scale"),
    s("translate"),
    s("rotate"),
    s("rotateX"),
    s("rotateY"),
    s("rotate3d"),
    s("perspective"),
    s("skewX"),
    s("skewY"),
    s("x", !0),
    s("y", !0),
    i.prototype = {
        setFromString: function(e, t) {
            var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t: [t];
            n.unshift(e),
            i.prototype.set.apply(this, n)
        },
        set: function(e) {
            var t = Array.prototype.slice.apply(arguments, [1]);
            this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
        },
        get: function(e) {
            return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
        },
        setter: {
            rotate: function(e) {
                this.rotate = l(e, "deg")
            },
            rotateX: function(e) {
                this.rotateX = l(e, "deg")
            },
            rotateY: function(e) {
                this.rotateY = l(e, "deg")
            },
            scale: function(e, t) {
                void 0 === t && (t = e),
                this.scale = e + "," + t
            },
            skewX: function(e) {
                this.skewX = l(e, "deg")
            },
            skewY: function(e) {
                this.skewY = l(e, "deg")
            },
            perspective: function(e) {
                this.perspective = l(e, "px")
            },
            x: function(e) {
                this.set("translate", e, null)
            },
            y: function(e) {
                this.set("translate", null, e)
            },
            translate: function(e, t) {
                void 0 === this._translateX && (this._translateX = 0),
                void 0 === this._translateY && (this._translateY = 0),
                null !== e && void 0 !== e && (this._translateX = l(e, "px")),
                null !== t && void 0 !== t && (this._translateY = l(t, "px")),
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var e = (this.scale || "1,1").split(",");
                return e[0] && (e[0] = parseFloat(e[0])),
                e[1] && (e[1] = parseFloat(e[1])),
                e[0] === e[1] ? e[0] : e
            },
            rotate3d: function() {
                for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t) e[t] && (e[t] = parseFloat(e[t]));
                return e[3] && (e[3] = l(e[3], "deg")),
                e
            }
        },
        parse: function(e) {
            var t = this;
            e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,
            function(e, n, i) {
                t.setFromString(n, i)
            })
        },
        toString: function(e) {
            var t = [];
            for (var n in this) if (this.hasOwnProperty(n)) {
                if (!p.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
                "_" !== n[0] && t.push(e && "scale" === n ? n + "3d(" + this[n] + ",1)": e && "translate" === n ? n + "3d(" + this[n] + ",0)": n + "(" + this[n] + ")")
            }
            return t.join(" ")
        }
    },
    e.fn.transition = e.fn.transit = function(t, n, i, a) {
        var s = this,
        u = 0,
        l = !0;
        "function" == typeof n && (a = n, n = void 0),
        "function" == typeof i && (a = i, i = void 0),
        "undefined" != typeof t.easing && (i = t.easing, delete t.easing),
        "undefined" != typeof t.duration && (n = t.duration, delete t.duration),
        "undefined" != typeof t.complete && (a = t.complete, delete t.complete),
        "undefined" != typeof t.queue && (l = t.queue, delete t.queue),
        "undefined" != typeof t.delay && (u = t.delay, delete t.delay),
        "undefined" == typeof n && (n = e.fx.speeds._default),
        "undefined" == typeof i && (i = e.cssEase._default),
        n = c(n);
        var d = o(t, n, i, u),
        f = e.transit.enabled && p.transition,
        h = f ? parseInt(n, 10) + parseInt(u, 10) : 0;
        if (0 === h) {
            var g = function(e) {
                s.css(t),
                a && a.apply(s),
                e && e()
            };
            return r(s, l, g),
            s
        }
        var v = {},
        y = function(n) {
            var i = !1,
            r = function() {
                i && s.unbind(m, r),
                h > 0 && s.each(function() {
                    this.style[p.transition] = v[this] || null
                }),
                "function" == typeof a && a.apply(s),
                "function" == typeof n && n()
            };
            h > 0 && m && e.transit.useTransitionEnd ? (i = !0, s.bind(m, r)) : window.setTimeout(r, h),
            s.each(function() {
                h > 0 && (this.style[p.transition] = d),
                e(this).css(t)
            })
        },
        b = function(e) {
            this.offsetWidth,
            y(e)
        };
        return r(s, l, b),
        this
    },
    e.transit.getTransitionValue = o
} (jQuery);
var mejs = mejs || {};
mejs.version = "2.14.2",
mejs.meIndex = 0,
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
},
mejs.Utility = {
    encodeUrl: function(e) {
        return encodeURIComponent(e)
    },
    escapeHTML: function(e) {
        return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>',
        t.firstChild.href
    },
    getScriptPath: function(e) {
        for (var t, n, i, r = 0,
        a = "",
        o = "",
        s = document.getElementsByTagName("script"), u = s.length, l = e.length; u > r; r++) {
            for (n = s[r].src, t = n.lastIndexOf("/"), t > -1 ? (i = n.substring(t + 1), n = n.substring(0, t + 1)) : (i = n, n = ""), t = 0; l > t; t++) if (o = e[t], o = i.indexOf(o), o > -1) {
                a = n;
                break
            }
            if ("" !== a) break
        }
        return a
    },
    secondsToTimeCode: function(e, t, n, i) {
        "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
        var r = Math.floor(e / 3600) % 24,
        a = Math.floor(e / 60) % 60,
        o = Math.floor(e % 60);
        return e = Math.floor((e % 1 * i).toFixed(3)),
        (t || r > 0 ? (10 > r ? "0" + r: r) + ":": "") + (10 > a ? "0" + a: a) + ":" + (10 > o ? "0" + o: o) + (n ? ":" + (10 > e ? "0" + e: e) : "")
    },
    timeCodeToSeconds: function(e, t, n, i) {
        "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25),
        e = e.split(":"),
        t = parseInt(e[0], 10);
        var r = parseInt(e[1], 10),
        a = parseInt(e[2], 10),
        o = 0,
        s = 0;
        return n && (o = parseInt(e[3]) / i),
        s = 3600 * t + 60 * r + a + o
    },
    convertSMPTEtoSeconds: function(e) {
        if ("string" != typeof e) return ! 1;
        e = e.replace(",", ".");
        var t = 0,
        n = -1 != e.indexOf(".") ? e.split(".")[1].length: 0,
        i = 1;
        e = e.split(":").reverse();
        for (var r = 0; r < e.length; r++) i = 1,
        r > 0 && (i = Math.pow(60, r)),
        t += Number(e[r]) * i;
        return Number(t.toFixed(n))
    },
    removeSwf: function(e) {
        var t = document.getElementById(e);
        t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none",
        function() {
            4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
        } ()) : t.parentNode.removeChild(t))
    },
    removeObjectInIE: function(e) {
        if (e = document.getElementById(e)) {
            for (var t in e)"function" == typeof e[t] && (e[t] = null);
            e.parentNode.removeChild(e)
        }
    }
},
mejs.PluginDetector = {
    hasPluginVersion: function(e, t) {
        var n = this.plugins[e];
        return t[1] = t[1] || 0,
        t[2] = t[2] || 0,
        n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(e, t, n, i, r) {
        this.plugins[e] = this.detectPlugin(t, n, i, r)
    },
    detectPlugin: function(e, t, n, i) {
        var r, a = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
            if ((n = this.nav.plugins[e].description) && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin)) for (a = n.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), e = 0; e < a.length; e++) a[e] = parseInt(a[e].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject) try { (r = new ActiveXObject(n)) && (a = i(r))
        } catch(o) {}
        return a
    }
},
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash",
function(e) {
    var t = [];
    return (e = e.GetVariable("$version")) && (e = e.split(" ")[1].split(","), t = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]),
    t
}),
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl",
function(e) {
    var t = [0, 0, 0, 0],
    n = function(e, t, n, i) {
        for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
        t[n] -= i
    };
    return n(e, t, 0, 1),
    n(e, t, 1, 1),
    n(e, t, 2, 1e4),
    n(e, t, 2, 1e3),
    n(e, t, 2, 100),
    n(e, t, 2, 10),
    n(e, t, 2, 1),
    n(e, t, 3, 1),
    t
}),
mejs.MediaFeatures = {
    init: function() {
        var e, t = this,
        n = document,
        i = mejs.PluginDetector.nav,
        r = mejs.PluginDetector.ua.toLowerCase(),
        a = ["source", "track", "audio", "video"];
        t.isiPad = null !== r.match(/ipad/i),
        t.isiPhone = null !== r.match(/iphone/i),
        t.isiOS = t.isiPhone || t.isiPad,
        t.isAndroid = null !== r.match(/android/i),
        t.isBustedAndroid = null !== r.match(/android 2\.[12]/),
        t.isBustedNativeHTTPS = "https:" === location.protocol && (null !== r.match(/android [12]\./) || null !== r.match(/macintosh.* version.* safari/)),
        t.isIE = -1 != i.appName.toLowerCase().indexOf("microsoft") || null !== i.appName.toLowerCase().match(/trident/gi),
        t.isChrome = null !== r.match(/chrome/gi),
        t.isFirefox = null !== r.match(/firefox/gi),
        t.isWebkit = null !== r.match(/webkit/gi),
        t.isGecko = null !== r.match(/gecko/gi) && !t.isWebkit && !t.isIE,
        t.isOpera = null !== r.match(/opera/gi),
        t.hasTouch = "ontouchstart" in window,
        t.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (i = 0; i < a.length; i++) e = document.createElement(a[i]);
        t.supportsMediaTag = "undefined" != typeof e.canPlayType || t.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch(o) {
            t.supportsMediaTag = !1
        }
        t.hasSemiNativeFullScreen = "undefined" != typeof e.webkitEnterFullscreen,
        t.hasNativeFullscreen = "undefined" != typeof e.requestFullscreen,
        t.hasWebkitNativeFullScreen = "undefined" != typeof e.webkitRequestFullScreen,
        t.hasMozNativeFullScreen = "undefined" != typeof e.mozRequestFullScreen,
        t.hasMsNativeFullScreen = "undefined" != typeof e.msRequestFullscreen,
        t.hasTrueNativeFullScreen = t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen || t.hasMsNativeFullScreen,
        t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen,
        t.hasMozNativeFullScreen ? t.nativeFullScreenEnabled = document.mozFullScreenEnabled: t.hasMsNativeFullScreen && (t.nativeFullScreenEnabled = document.msFullscreenEnabled),
        t.isChrome && (t.hasSemiNativeFullScreen = !1),
        t.hasTrueNativeFullScreen && (t.fullScreenEventName = "", t.hasWebkitNativeFullScreen ? t.fullScreenEventName = "webkitfullscreenchange": t.hasMozNativeFullScreen ? t.fullScreenEventName = "mozfullscreenchange": t.hasMsNativeFullScreen && (t.fullScreenEventName = "MSFullscreenChange"), t.isFullScreen = function() {
            return e.mozRequestFullScreen ? n.mozFullScreen: e.webkitRequestFullScreen ? n.webkitIsFullScreen: e.hasMsNativeFullScreen ? null !== n.msFullscreenElement: void 0
        },
        t.requestFullScreen = function(e) {
            t.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : t.hasMozNativeFullScreen ? e.mozRequestFullScreen() : t.hasMsNativeFullScreen && e.msRequestFullscreen()
        },
        t.cancelFullScreen = function() {
            t.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : t.hasMozNativeFullScreen ? document.mozCancelFullScreen() : t.hasMsNativeFullScreen && document.msExitFullscreen()
        }),
        t.hasSemiNativeFullScreen && r.match(/mac os x 10_5/i) && (t.hasNativeFullScreen = !1, t.hasSemiNativeFullScreen = !1)
    }
},
mejs.MediaFeatures.init(),
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(e) {
        this.currentTime = e
    },
    setMuted: function(e) {
        this.muted = e
    },
    setVolume: function(e) {
        this.volume = e
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(e) {
        for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
        if ("string" == typeof e) this.src = e;
        else {
            var n;
            for (t = 0; t < e.length; t++) if (n = e[t], this.canPlayType(n.type)) {
                this.src = n.src;
                break
            }
        }
    },
    setVideoSize: function(e, t) {
        this.width = e,
        this.height = t
    }
},
mejs.PluginMediaElement = function(e, t, n) {
    this.id = e,
    this.pluginType = t,
    this.src = n,
    this.events = {},
    this.attributes = {}
},
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function(e) {
        var t, n, i, r = mejs.plugins[this.pluginType];
        for (t = 0; t < r.length; t++) if (i = r[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version)) for (n = 0; n < i.types.length; n++) if (e == i.types[n]) return "probably";
        return ""
    },
    positionFullscreenButton: function(e, t, n) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
    },
    hideFullscreenButton: function() {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(e) {
        if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)),
        this.src = mejs.Utility.absolutizeUrl(e);
        else {
            var t, n;
            for (t = 0; t < e.length; t++) if (n = e[t], this.canPlayType(n.type)) {
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)),
                this.src = mejs.Utility.absolutizeUrl(e);
                break
            }
        }
    },
    setCurrentTime: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
    },
    setVolume: function(e) {
        null != this.pluginApi && (this.pluginApi.setVolume("youtube" == this.pluginType || "vimeo" == this.pluginType ? 100 * e: e), this.volume = e)
    },
    setMuted: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e)
    },
    setVideoSize: function(e, t) {
        this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"),
        null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
    },
    setFullscreen: function(e) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
    },
    enterFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function(e, t) {
        this.events[e] = this.events[e] || [],
        this.events[e].push(t)
    },
    removeEventListener: function(e, t) {
        if (!e) return this.events = {},
        !0;
        var n = this.events[e];
        if (!n) return ! 0;
        if (!t) return this.events[e] = [],
        !0;
        for (var i = 0; i < n.length; i++) if (n[i] === t) return this.events[e].splice(i, 1),
        !0;
        return ! 1
    },
    dispatchEvent: function(e) {
        var t, n, i = this.events[e];
        if (i) for (n = Array.prototype.slice.call(arguments, 1), t = 0; t < i.length; t++) i[t].apply(null, n)
    },
    hasAttribute: function(e) {
        return e in this.attributes
    },
    removeAttribute: function(e) {
        delete this.attributes[e]
    },
    getAttribute: function(e) {
        return this.hasAttribute(e) ? this.attributes[e] : ""
    },
    setAttribute: function(e, t) {
        this.attributes[e] = t
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id),
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
},
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(e, t, n) {
        this.pluginMediaElements[e] = t,
        this.htmlMediaElements[e] = n
    },
    unregisterPluginElement: function(e) {
        delete this.pluginMediaElements[e],
        delete this.htmlMediaElements[e]
    },
    initPlugin: function(e) {
        var t = this.pluginMediaElements[e],
        n = this.htmlMediaElements[e];
        if (t) {
            switch (t.pluginType) {
            case "flash":
                t.pluginElement = t.pluginApi = document.getElementById(e);
                break;
            case "silverlight":
                t.pluginElement = document.getElementById(t.id),
                t.pluginApi = t.pluginElement.Content.MediaElementJS
            }
            null != t.pluginApi && t.success && t.success(t, n)
        }
    },
    fireEvent: function(e, t, n) {
        var i, r;
        if (e = this.pluginMediaElements[e]) {
            t = {
                type: t,
                target: e
            };
            for (i in n) e[i] = n[i],
            t[i] = n[i];
            r = n.bufferedTime || 0,
            t.target.buffered = t.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return r
                },
                length: 1
            },
            e.dispatchEvent(t.type, t)
        }
    }
},
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
},
mejs.MediaElement = function(e, t) {
    return mejs.HtmlMediaElementShim.create(e, t)
},
mejs.HtmlMediaElementShim = {
    create: function(e, t) {
        var n = mejs.MediaElementDefaults,
        i = "string" == typeof e ? document.getElementById(e) : e,
        r = i.tagName.toLowerCase(),
        a = "audio" === r || "video" === r,
        o = i.getAttribute(a ? "src": "href");
        r = i.getAttribute("poster");
        var s, u = i.getAttribute("autoplay"),
        l = i.getAttribute("preload"),
        c = i.getAttribute("controls");
        for (s in t) n[s] = t[s];
        return o = "undefined" == typeof o || null === o || "" == o ? null: o,
        r = "undefined" == typeof r || null === r ? "": r,
        l = "undefined" == typeof l || null === l || "false" === l ? "none": l,
        u = !("undefined" == typeof u || null === u || "false" === u),
        c = !("undefined" == typeof c || null === c || "false" === c),
        s = this.determinePlayback(i, n, mejs.MediaFeatures.supportsMediaTag, a, o),
        s.url = null !== s.url ? mejs.Utility.absolutizeUrl(s.url) : "",
        "native" == s.method ? (mejs.MediaFeatures.isBustedAndroid && (i.src = s.url, i.addEventListener("click",
        function() {
            i.play()
        },
        !1)), this.updateNative(s, n, u, l)) : "" !== s.method ? this.createPlugin(s, n, r, u, l, c) : (this.createErrorMessage(s, n, r), this)
    },
    determinePlayback: function(e, t, n, i, r) {
        var a, o, s, u, l = [],
        c = {
            method: "",
            url: "",
            htmlMediaElement: e,
            isVideo: "audio" != e.tagName.toLowerCase()
        };
        if ("undefined" != typeof t.type && "" !== t.type) if ("string" == typeof t.type) l.push({
            type: t.type,
            url: r
        });
        else for (a = 0; a < t.type.length; a++) l.push({
            type: t.type[a],
            url: r
        });
        else if (null !== r) s = this.formatType(r, e.getAttribute("type")),
        l.push({
            type: s,
            url: r
        });
        else for (a = 0; a < e.childNodes.length; a++) o = e.childNodes[a],
        1 == o.nodeType && "source" == o.tagName.toLowerCase() && (r = o.getAttribute("src"), s = this.formatType(r, o.getAttribute("type")), o = o.getAttribute("media"), (!o || !window.matchMedia || window.matchMedia && window.matchMedia(o).matches) && l.push({
            type: s,
            url: r
        }));
        if (!i && l.length > 0 && null !== l[0].url && this.getTypeFromFile(l[0].url).indexOf("audio") > -1 && (c.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
            return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe": ""
        }), !(!n || "auto" !== t.mode && "auto_plugin" !== t.mode && "native" !== t.mode || mejs.MediaFeatures.isBustedNativeHTTPS && t.httpsBasicAuthSite === !0)) {
            for (i || (a = document.createElement(c.isVideo ? "video": "audio"), e.parentNode.insertBefore(a, e), e.style.display = "none", c.htmlMediaElement = e = a), a = 0; a < l.length; a++) if ("" !== e.canPlayType(l[a].type).replace(/no/, "") || "" !== e.canPlayType(l[a].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(l[a].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                c.method = "native",
                c.url = l[a].url;
                break
            }
            if ("native" === c.method && (null !== c.url && (e.src = c.url), "auto_plugin" !== t.mode)) return c
        }
        if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode) for (a = 0; a < l.length; a++) for (s = l[a].type, e = 0; e < t.plugins.length; e++) for (r = t.plugins[e], o = mejs.plugins[r], n = 0; n < o.length; n++) if (u = o[n], null == u.version || mejs.PluginDetector.hasPluginVersion(r, u.version)) for (i = 0; i < u.types.length; i++) if (s == u.types[i]) return c.method = r,
        c.url = l[a].url,
        c;
        return "auto_plugin" === t.mode && "native" === c.method ? c: ("" === c.method && l.length > 0 && (c.url = l[0].url), c)
    },
    formatType: function(e, t) {
        return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
    },
    getTypeFromFile: function(e) {
        return e = e.split("?")[0],
        e = e.substring(e.lastIndexOf(".") + 1).toLowerCase(),
        (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(e) ? "video": "audio") + "/" + this.getTypeFromExtension(e)
    },
    getTypeFromExtension: function(e) {
        switch (e) {
        case "mp4":
        case "m4v":
        case "m4a":
            return "mp4";
        case "webm":
        case "webma":
        case "webmv":
            return "webm";
        case "ogg":
        case "oga":
        case "ogv":
            return "ogg";
        default:
            return e
        }
    },
    createErrorMessage: function(e, t, n) {
        var i = e.htmlMediaElement,
        r = document.createElement("div");
        r.className = "me-cannotplay";
        try {
            r.style.width = i.width + "px",
            r.style.height = i.height + "px"
        } catch(a) {}
        r.innerHTML = t.customError ? t.customError: "" !== n ? '<a href="' + e.url + '"><img src="' + n + '" width="100%" height="100%" /></a>': '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>",
        i.parentNode.insertBefore(r, i),
        i.style.display = "none",
        t.error(i)
    },
    createPlugin: function(e, t, n, i, r, a) {
        n = e.htmlMediaElement;
        var o, s = 1,
        u = 1,
        l = "me_" + e.method + "_" + mejs.meIndex++,
        c = new mejs.PluginMediaElement(l, e.method, e.url),
        d = document.createElement("div");
        for (c.tagName = n.tagName, o = 0; o < n.attributes.length; o++) {
            var p = n.attributes[o];
            1 == p.specified && c.setAttribute(p.name, p.value)
        }
        for (o = n.parentNode; null !== o && "body" !== o.tagName.toLowerCase() && null != o.parentNode;) {
            if ("p" === o.parentNode.tagName.toLowerCase()) {
                o.parentNode.parentNode.insertBefore(o, o.parentNode);
                break
            }
            o = o.parentNode
        }
        switch (e.isVideo ? (s = t.pluginWidth > 0 ? t.pluginWidth: t.videoWidth > 0 ? t.videoWidth: null !== n.getAttribute("width") ? n.getAttribute("width") : t.defaultVideoWidth, u = t.pluginHeight > 0 ? t.pluginHeight: t.videoHeight > 0 ? t.videoHeight: null !== n.getAttribute("height") ? n.getAttribute("height") : t.defaultVideoHeight, s = mejs.Utility.encodeUrl(s), u = mejs.Utility.encodeUrl(u)) : t.enablePluginDebug && (s = 320, u = 240), c.success = t.success, mejs.MediaPluginBridge.registerPluginElement(l, c, n), d.className = "me-plugin", d.id = l + "_container", e.isVideo ? n.parentNode.insertBefore(d, n) : document.body.insertBefore(d, document.body.childNodes[0]), i = ["id=" + l, "isvideo=" + (e.isVideo ? "true": "false"), "autoplay=" + (i ? "true": "false"), "preload=" + r, "width=" + s, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + u, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && i.push("flash" == e.method ? "file=" + mejs.Utility.encodeUrl(e.url) : "file=" + e.url), t.enablePluginDebug && i.push("debug=true"), t.enablePluginSmoothing && i.push("smoothing=true"), t.enablePseudoStreaming && i.push("pseudostreaming=true"), a && i.push("controls=true"), t.pluginVars && (i = i.concat(t.pluginVars)), e.method) {
        case "silverlight":
            d.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + l + '" name="' + l + '" width="' + s + '" height="' + u + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
            break;
        case "flash":
            mejs.MediaFeatures.isIE ? (e = document.createElement("div"), d.appendChild(e), e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + l + '" width="' + s + '" height="' + u + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : d.innerHTML = '<embed id="' + l + '" name="' + l + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + i.join("&") + '" width="' + s + '" height="' + u + '" scale="default"class="mejs-shim"></embed>';
            break;
        case "youtube":
            -1 != e.url.lastIndexOf("youtu.be") ? (e = e.url.substr(e.url.lastIndexOf("/") + 1), -1 != e.indexOf("?") && (e = e.substr(0, e.indexOf("?")))) : e = e.url.substr(e.url.lastIndexOf("=") + 1),
            youtubeSettings = {
                container: d,
                containerId: d.id,
                pluginMediaElement: c,
                pluginId: l,
                videoId: e,
                height: u,
                width: s
            },
            mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            break;
        case "vimeo":
            if (t = l + "_player", c.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), d.innerHTML = '<iframe src="//player.vimeo.com/video/' + c.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + t + '" width="' + s + '" height="' + u + '" frameborder="0" class="mejs-shim" id="' + t + '"></iframe>', "function" == typeof $f) {
                var f = $f(d.childNodes[0]);
                f.addEvent("ready",
                function() {
                    function e(e, t, n, i) {
                        e = {
                            type: n,
                            target: t
                        },
                        "timeupdate" == n && (t.currentTime = e.currentTime = i.seconds, t.duration = e.duration = i.duration),
                        t.dispatchEvent(e.type, e)
                    }
                    f.playVideo = function() {
                        f.api("play")
                    },
                    f.pauseVideo = function() {
                        f.api("pause")
                    },
                    f.seekTo = function(e) {
                        f.api("seekTo", e)
                    },
                    f.addEvent("play",
                    function() {
                        e(f, c, "play"),
                        e(f, c, "playing")
                    }),
                    f.addEvent("pause",
                    function() {
                        e(f, c, "pause")
                    }),
                    f.addEvent("finish",
                    function() {
                        e(f, c, "ended")
                    }),
                    f.addEvent("playProgress",
                    function(t) {
                        e(f, c, "timeupdate", t)
                    }),
                    c.pluginApi = f,
                    mejs.MediaPluginBridge.initPlugin(l)
                })
            } else console.warn("You need to include froogaloop for vimeo to work")
        }
        return n.style.display = "none",
        n.removeAttribute("autoplay"),
        c
    },
    updateNative: function(e, t) {
        var n, i = e.htmlMediaElement;
        for (n in mejs.HtmlMediaElement) i[n] = mejs.HtmlMediaElement[n];
        return t.success(i, i),
        i
    }
},
mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = "//www.youtube.com/player_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t),
            this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function(e) {
        this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e))
    },
    createIframe: function(e) {
        var t = e.pluginMediaElement,
        n = new YT.Player(e.containerId, {
            height: e.height,
            width: e.width,
            videoId: e.videoId,
            playerVars: {
                controls: 0
            },
            events: {
                onReady: function() {
                    e.pluginMediaElement.pluginApi = n,
                    mejs.MediaPluginBridge.initPlugin(e.pluginId),
                    setInterval(function() {
                        mejs.YouTubeApi.createEvent(n, t, "timeupdate")
                    },
                    250)
                },
                onStateChange: function(e) {
                    mejs.YouTubeApi.handleStateChange(e.data, n, t)
                }
            }
        })
    },
    createEvent: function(e, t, n) {
        if (n = {
            type: n,
            target: t
        },
        e && e.getDuration) {
            t.currentTime = n.currentTime = e.getCurrentTime(),
            t.duration = n.duration = e.getDuration(),
            n.paused = t.paused,
            n.ended = t.ended,
            n.muted = e.isMuted(),
            n.volume = e.getVolume() / 100,
            n.bytesTotal = e.getVideoBytesTotal(),
            n.bufferedBytes = e.getVideoBytesLoaded();
            var i = n.bufferedBytes / n.bytesTotal * n.duration;
            n.target.buffered = n.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return i
                },
                length: 1
            }
        }
        t.dispatchEvent(n.type, n)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = !0; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(e) {
        this.flashPlayers[e.pluginId] = e;
        var t, n = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(e) {
        var t = this.flashPlayers[e],
        n = document.getElementById(e),
        i = t.pluginMediaElement;
        i.pluginApi = i.pluginElement = n,
        mejs.MediaPluginBridge.initPlugin(e),
        n.cueVideoById(t.videoId),
        e = t.containerId + "_callback",
        window[e] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, n, i)
        },
        n.addEventListener("onStateChange", e),
        setInterval(function() {
            mejs.YouTubeApi.createEvent(n, i, "timeupdate")
        },
        250)
    },
    handleStateChange: function(e, t, n) {
        switch (e) {
        case - 1 : n.paused = !0,
            n.ended = !0,
            mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
            break;
        case 0:
            n.paused = !1,
            n.ended = !0,
            mejs.YouTubeApi.createEvent(t, n, "ended");
            break;
        case 1:
            n.paused = !1,
            n.ended = !1,
            mejs.YouTubeApi.createEvent(t, n, "play"),
            mejs.YouTubeApi.createEvent(t, n, "playing");
            break;
        case 2:
            n.paused = !0,
            n.ended = !1,
            mejs.YouTubeApi.createEvent(t, n, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(t, n, "progress")
        }
    }
},
window.mejs = mejs,
window.MediaElement = mejs.MediaElement,
function(e, t) {
    var n = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    n.getLanguage = function() {
        return (n.locale.language || window.navigator.userLanguage || window.navigator.language).substr(0, 2).toLowerCase()
    },
    "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language),
    n.methods.checkPlain = function(e) {
        var t, n, i = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        e = String(e);
        for (t in i) i.hasOwnProperty(t) && (n = RegExp(t, "g"), e = e.replace(n, i[t]));
        return e
    },
    n.methods.t = function(e, t) {
        return n.locale.strings && n.locale.strings[t.context] && n.locale.strings[t.context][e] && (e = n.locale.strings[t.context][e]),
        n.methods.checkPlain(e)
    },
    n.t = function(e, t) {
        if ("string" == typeof e && e.length > 0) {
            var i = n.getLanguage();
            return t = t || {
                context: i
            },
            n.methods.t(e, t)
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        }
    },
    t.i18n = n
} (document, mejs),
function(e) {
    "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
} (mejs.i18n.locale.strings),
function(e) {
    "undefined" == typeof e.de && (e.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\xdfen"
    })
} (mejs.i18n.locale.strings),
function(e) {
    "undefined" == typeof e.zh && (e.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    })
} (mejs.i18n.locale.strings),
function() {
    this.BackgroundVideo = function() {
        function e(e) {
            this.container = $(e.container),
            this.els = $(".bg_video"),
            $(window).on("resize",
            function(e) {
                return function() {
                    return e.resizeHandler()
                }
            } (this)),
            this.resizeHandler()
        }
        return e.prototype.start = function() {
            return this.container.animate({
                opacity: 1
            },
            1e3, "easeOutQuart")
        },
        e.prototype.showVideo = function(e) {
            switch (e) {
            case "top":
                return $("#bg_gacha_movie").fadeOut();
            default:
                return $("#bg_gacha_movie").fadeIn()
            }
        },
        e.prototype.resizeHandler = function() {
            var e, t, n, i, r, a;
            return e = 1.775,
            a = $(window).width(),
            r = $(window).height(),
            a / r > e ? (i = a, n = a / e) : (i = r * e, n = r),
            t = $.support.opacity ? this.els: $(".bg_video"),
            t.css({
                width: i,
                height: n,
                marginLeft: -i / 2,
                marginTop: -n / 2
            })
        },
        e
    } ()
}.call(this),
function() {
    var e = "001561201348966604375:u2hxhm3fhtc",
    t = document.createElement("script");
    t.type = "text/javascript",
    t.async = !0,
    t.src = ("https:" == document.location.protocol ? "https:": "http:") + "//www.google.com/cse/cse.js?cx=" + e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n)
} (),
function(e, t) {
    function n() {
        var e = m.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function i(e) {
        var t = h[e[p]];
        return t || (t = {},
        f++, e[p] = f, h[f] = t),
        t
    }
    function r(e, n, r) {
        return n || (n = t),
        u ? n.createElement(e) : (r || (r = i(n)), n = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), n.canHaveChildren && !c.test(e) ? r.frag.appendChild(n) : n)
    }
    function a(e, t) {
        t.cache || (t.cache = {},
        t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
        e.createElement = function(n) {
            return m.shivMethods ? r(n, e, t) : t.createElem(n)
        },
        e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g,
        function(e) {
            return t.createElem(e),
            t.frag.createElement(e),
            'c("' + e + '")'
        }) + ");return n}")(m, t.frag)
    }
    function o(e) {
        e || (e = t);
        var n = i(e);
        if (m.shivCSS && !s && !n.hasCSS) {
            var r, o = e;
            r = o.createElement("p"),
            o = o.getElementsByTagName("head")[0] || o.documentElement,
            r.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
            r = o.insertBefore(r.lastChild, o.firstChild),
            n.hasCSS = !!r
        }
        return u || a(e, n),
        e
    }
    var s, u, l = e.html5 || {},
    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    p = "_html5shiv",
    f = 0,
    h = {}; !
    function() {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>",
            s = "hidden" in e;
            var n;
            if (! (n = 1 == e.childNodes.length)) {
                t.createElement("a");
                var i = t.createDocumentFragment();
                n = "undefined" == typeof i.cloneNode || "undefined" == typeof i.createDocumentFragment || "undefined" == typeof i.createElement
            }
            u = n
        } catch(r) {
            u = s = !0
        }
    } ();
    var m = {
        elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== l.shivCSS,
        supportsUnknownElements: u,
        shivMethods: !1 !== l.shivMethods,
        type: "default",
        shivDocument: o,
        createElement: r,
        createDocumentFragment: function(e, r) {
            if (e || (e = t), u) return e.createDocumentFragment();
            for (var r = r || i(e), a = r.frag.cloneNode(), o = 0, s = n(), l = s.length; l > o; o++) a.createElement(s[o]);
            return a
        }
    };
    e.html5 = m,
    o(t)
} (this, document),
$(function() {
    sqexfooter_loaded()
}),
$(function() {
    $("#sqexHeader-black_rsp").replaceWith('<header id="sqexHeader-black_rsp"><hgroup id="header-title" class="clearfix"><div class="logo"><a href="http://www.jp.square-enix.com/"><img src="http://www.jp.square-enix.com/common/templates/images/logo-black.gif" alt="SQUARE ENIX"></a></div><script type="text/javascript" src="http://www.jp.square-enix.com/common/templates/js/gcsearch_css_black.js"></script><script type="text/javascript" src="http://www.jp.square-enix.com/common/templates/js/gcsearch.js"></script><gcse:search queryParameterName="query"></gcse:search></hgroup><div id="spOnly"><hgroup id="phone-title"><div class="logo"><a href="http://www.jp.square-enix.com/"><img src="http://www.jp.square-enix.com/common/templates/images/logo_ipn_b.gif" alt="SQUARE ENIX"></a></div></hgroup></div></header>')
}),
function() {
    this.Text = {
        BLANK: "",
        OK: "ok",
        CLOSE: "close",
        POST_SUCCESS_TITLE: "\u7372\u5f97\u30c4\u30a4\u30fc\u30c8\u3092\u6295\u7a3f\u3057\u307e\u3057\u305f\uff01",
        POST_SUCCESS: "\u30ac\u30c1\u30e3\u306f\u3001\u7372\u5f97\u30c4\u30a4\u30fc\u30c8\u5f8c\u3082\u5f15\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u65b0\u305f\u306b\u5f15\u3044\u305f\u9a0e\u58eb\u30ab\u30fc\u30c9\u306f\u3001\u7372\u5f97\u30c4\u30a4\u30fc\u30c8\u3092\u3059\u308b\u3053\u3068\u3067\u3001\u5165\u308c\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",
        LOGOUT_ERROR: "\u3059\u3067\u306b\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u304a\u624b\u6570\u3067\u3059\u304c\u3001\u518d\u5ea6\u3001\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u203b\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002",
        TWITTER_AUTH_ERROR: "Twitter\u306e\u8a8d\u8a3c\u304c\u5207\u308c\u3066\u3044\u307e\u3059\u3002\u304a\u624b\u6570\u3067\u3059\u304c\u3001\u518d\u5ea6\u3001\u8a8d\u8a3c\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\n\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002",
        POST_ERROR: "\u6295\u7a3f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
        TWEET_LENGTH_OVER: "117\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u73fe\u5728\u3001%LENGTH%\u6587\u5b57\u3067\u3059\u3002",
        TWEET_LENGTH_ZERO: "\u5185\u5bb9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",
        RESULT_TWEET: "%NAME%\u3001\u541b\u306b\u6c7a\u3081\u305f\uff01\u5186\u5353\u306e\u9a0e\u58eb\u3068\u3057\u3066\u79c1\u306b\u4ed5\u3048\u308b\u304c\u3044\u3044\uff01\u3010100\u4e07\u4eba\u306e\u5019\u88dc\u306e\u4e2d\u304b\u3089\u4e00\u4eba\u306e\u30a2\u30fc\u30b5\u30fc\u738b\u3092\u76ee\u6307\u3059\u7269\u8a9e\u300e\u4e56\u96e2\u6027\u30df\u30ea\u30aa\u30f3\u30a2\u30fc\u30b5\u30fc\u300f\u3011\u3000https://pre.kairisei-ma.jp/\u3000#\u4e56\u96e2\u6027\u30df\u30ea\u30aa\u30f3\u30a2\u30fc\u30b5\u30fc",
        GACHA_REST_COUNT_ZERO: "\u56de\u5fa9\u30c4\u30a4\u30fc\u30c8\u3092\u3059\u308b\u3053\u3068\u3067\u3001\u3055\u3089\u306b5\u56de\u5f15\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",
        GACHA_REST_COUNT_RECOVERED: "\u30ac\u30c1\u30e3\u56de\u6570\u304c\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3057\u305f\uff01"
    },
    this.URL = {
        SIGN_OUT: "/sign_out"
    },
    this.Gacha = function() {
        function e(e, t, n) {
            var i;
            i = this,
            this.gacha_area = $(e.gacha_area),
            this.recovery_tweet_area = $(e.recovery_tweet_area),
            this.gacha_limit_area = $(e.gacha_limit_area),
            this.gacha_button = $("button", this.gacha_area),
            t.setOnUpdate(function() {
                return i.onUserStatusUpdate()
            }),
            this.user_status = t,
            this.gacha_state = n,
            this.gacha_state.setGachaInstance(this),
            this.updateView(),
            this.gacha_button.on("click",
            function() {
                return i.gacha_button.attr("diabled", !0),
                i.turn()
            })
        }
        return e.prototype.turn = function() {
            var t;
            return t = this,
            $.ajax(e.API_PATH, {
                type: "POST",
                success: function(e) {
                    return t.onGacha(e)
                },
                error: function() {
                    return t.onGachaError()
                }
            })
        },
        e.prototype.onGacha = function(e) {
            return e.expired === !0 && (window.location.href = "/"),
            this.gacha_button.attr("disabled", !1),
            this.user_status.update(e.current_gacha.rest_count, e.current_gacha.rest_tweet_count, e.current_gacha.tweet),
            this.last_result = new GachaResult(e),
            this.gacha_state.onGacha(this.last_result)
        },
        e.prototype.onGachaError = function() {
            return window.location.reload()
        },
        e.prototype.onUserStatusUpdate = function() {
            return this.updateView()
        },
        e.prototype.updateView = function() {
            return this.user_status.rest_count > 0 ? (this.gacha_area.show(), this.recovery_tweet_area.hide(), this.gacha_limit_area.hide(), $("#gacha_result_navigations").removeClass("disabled"), $("#gacha_result_navigations .btnArea").addClass("half")) : this.user_status.tweet ? (this.gacha_area.hide(), this.recovery_tweet_area.hide(), this.gacha_limit_area.show(), $("#gacha_result_navigations").addClass("disabled"), $("#gacha_result_navigations .btnArea").removeClass("half")) : (this.gacha_area.hide(), this.recovery_tweet_area.show(), this.gacha_limit_area.hide(), $("#gacha_result_navigations").removeClass("disabled"), $("#gacha_result_navigations .btnArea").addClass("half"))
        },
        e.prototype.getLastResult = function() {
            return this.last_result
        },
        e
    } (),
    this.Gacha.API_PATH = "/gacha/turn",
    this.Gacha.LAST_RESULT_CHANGE_EVENT = "last_result_change_event",
    this.Gacha.CLOSE_RESULT_VIEW_EVENT = "close_result_view_event",
    this.UserStatus = function() {
        function e(e) {
            this.rest_count = e.rest_count,
            this.rest_tweet_count = e.rest_tweet_count,
            this.tweet = e.tweet,
            this.rest_count_area = e.rest_count_area,
            this.rest_tweet_count_area = e.rest_tweet_count_area,
            this.retry_button_area = e.retry_button_area,
            this.notice_area = e.notice_area,
            this.onUpdate = function() {}
        }
        return e.prototype.update = function(e, t, n) {
            return this.rest_count = e,
            this.tweet = n,
            $(this.rest_count_area).text(e),
            $(this.rest_tweet_count_area).text(t),
            e > 0 ? $("a", $(this.retry_button_area)).attr("class", "limited" + e) : n ? ($(this.notice_area).text(Text.BLANK), $(this.retry_button_area).parent().removeClass("half"), $(this.retry_button_area).remove()) : ($(this.notice_area).text(Text.GACHA_REST_COUNT_ZERO), $("a", $(this.retry_button_area)).attr("class", "limited").off("click")),
            this.onUpdate()
        },
        e.prototype.setOnUpdate = function(e) {
            return this.onUpdate = e
        },
        e
    } (),
    this.GachaState = function() {
        function e(e, t, n, i) {
            this.gacha_container = $(e.gacha),
            this.gacha_movie = $(e.movie),
            this.gacha_result = $(e.result),
            this.current_card = $(e.current_card),
            this.no_card = $(e.no_card),
            this.card = t,
            this.keep = n,
            this.counter = i,
            this.movie_timer_id = null,
            this.gacha_instance = null,
            this.last_result = null,
            $(e.result + " .retry a").on("click",
            function(e) {
                return function(t) {
                    return t.preventDefault(),
                    e.gacha_instance.turn(),
                    $(document).trigger(Gacha.CLOSE_RESULT_VIEW_EVENT)
                }
            } (this)),
            this.showContainer()
        }
        return e.prototype.setGachaInstance = function(e) {
            return this.gacha_instance = e
        },
        e.prototype.setCard = function(e) {
            return this.card = e
        },
        e.prototype.setKeep = function(e) {
            return e && this.setCard(this.last_result.getCard()),
            this.keep = e
        },
        e.prototype.onGacha = function(e) {
            return this.last_result = e,
            this.showMovie()
        },
        e.prototype.showContainer = function() {
            return this.gacha_container.show(),
            this.gacha_movie.hide(),
            this.gacha_result.hide(),
            $("body").removeClass("gacha_result"),
            null !== this.card ? (this.current_card.show(), this.no_card.hide(), $(".stars", this.gacha_container).attr("src", this.card.stars_file), $(".card_title", this.gacha_container).attr("src", this.card.title_file), $(".card_name", this.gacha_container).attr("src", this.card.name_file), $(".card_image", this.gacha_container).attr("src", this.card.image_file)) : (this.current_card.hide(), this.no_card.show())
        },
        e.prototype.showMovie = function() {
            var e, t, n, i, r, a, o;
            return a = this,
            o = null,
            t = !1,
            $("html, body").scrollTop(0),
            $("#animation_layer").show(),
            $("#light").remove(),
            $("<div />").attr("id", "light").appendTo("#animation_layer"),
            n = this.last_result.getCard(),
            i = new Image,
            $(i).on("load",
            function() {
                return r()
            }),
            i.id = "get_card",
            i.src = n.image_file,
            setTimeout(function() {
                return r()
            },
            2e3),
            r = function() {
                return t !== !0 ? (t = !0, window.MA.oldie ? e() : $("#container").transition({
                    opacity: 0
                },
                500, "cubic-bezier(0.165, 0.84, 0.44, 1)",
                function() {
                    return e()
                })) : void 0
            },
            e = function() {
                var e;
                return e = window.MA.isMobileLauout ? {
                    scale: [8, 8, 1]
                }: {
                    scale: [20, 20, 1],
                    rotate: 60
                },
                $("#light").css({
                    scale: [0, 0],
                    rotate: 0
                }).transition(e, 800, "cubic-bezier(0.165, 0.84, 0.44, 1)",
                function() {
                    return a.showResult(),
                    $("#light").fadeOut(1e3,
                    function() {
                        var e;
                        return $(this).remove(),
                        e = $(".card_image", a.gacha_result),
                        $("#animation_layer").hide()
                    })
                })
            }
        },
        e.prototype.showResult = function() {
            var e, t;
            return $("body").addClass("gacha_result"),
            e = $("#container"),
            $("#container").animate({
                opacity: 1
            },
            500, "easeOutQuart"),
            this.gacha_container.hide(),
            this.gacha_result.show(),
            t = this.last_result.getCard(),
            $("span.stars", this.gacha_result).text(t.rarity + " \u2605" + t.rarity_number),
            $("span.card_name", this.gacha_result).text(t.name),
            $("img.stars", this.gacha_result).attr({
                src: t.stars_file,
                alt: t.rarity_stars
            }),
            $("img.rarity", this.gacha_result).attr({
                src: t.rarity_file,
                alt: t.rarity
            }),
            $("img.card_title", this.gacha_result).attr({
                src: t.title_file,
                alt: t.title
            }),
            $("img.card_name", this.gacha_result).attr({
                src: t.name_file,
                alt: t.name
            }),
            $("img.card_image", this.gacha_result).attr({
                src: t.image_file,
                alt: t.name
            }),
            $(".serif", this.gacha_result).text(t.serif),
            $(".type", this.gacha_result).text(t.type),
            $(".illustrator", this.gacha_result).text(t.illustrator),
            $(".voice_actor", this.gacha_result).text(t.voice_actor),
            $("a#play_voice", this.gacha_result).attr("data-sound", t.sound_file_mp3),
            $(document).trigger(Gacha.LAST_RESULT_CHANGE_EVENT),
            this.counter.countUp(t),
            this.keep ? void 0 : this.setCard(t)
        },
        e
    } (),
    this.RecoveryTweet = function() {
        function e(t, n, i) {
            var r, a;
            this.status = i,
            this.tweet_input = t,
            this.tweet_button = n,
            this.loader = new Loader,
            r = this,
            a = e.DEFAULT_TEXTS[Math.floor(Math.random() * e.DEFAULT_TEXTS.length)],
            $(t).val(a),
            $(n).on("click",
            function() {
                var e, n;
                return r.loader.open(),
                r.disableButton(),
                n = $(t).val(),
                0 === $.trim(n).length ? new AlertDialog(Text.TWEET_LENGTH_ZERO, Text.OK,
                function() {
                    return r.enableButton(),
                    r.loader.close()
                }) : n.length > 117 ? (e = Text.TWEET_LENGTH_OVER.replace("%LENGTH%", n.length), new AlertDialog(e, Text.OK,
                function() {
                    return r.enableButton(),
                    r.loader.close()
                })) : r.send(n),
                !1
            })
        }
        return e.prototype.disableButton = function() {
            return $(this.tweet_button).attr("disabled", !0)
        },
        e.prototype.enableButton = function() {
            return $(this.tweet_button).attr("disabled", !1)
        },
        e.prototype.send = function(t) {
            var n;
            return n = this,
            $.ajax(e.API_PATH, {
                type: "POST",
                data: {
                    tweet: {
                        text: t
                    }
                },
                success: function(e) {
                    return n.onSuccess(e)
                },
                error: function(e) {
                    return n.onError(e)
                },
                complete: function() {
                    return n.enableButton()
                }
            })
        },
        e.prototype.onSuccess = function(e) {
            var t;
            return 302 === e.status ? new AlertDialog(Text.LOGOUT_ERROR, Text.OK,
            function() {
                return window.location.href = e.redirectURL
            }) : e.expired === !0 ? window.location.href = "/": (t = this, this.status.update(e.rest_count, e.rest_tweet_count, e.tweet), new AlertDialog(Text.GACHA_REST_COUNT_RECOVERED, Text.CLOSE,
            function() {
                return t.loader.close()
            }))
        },
        e.prototype.onError = function(e) {
            var t, n, i;
            return n = this,
            400 === e.status ? (i = $(n.tweet_input).val(), t = 0 === $.trim(i).length ? Text.TWEET_LENGTH_ZERO: 117 < i.length ? Text.TWEET_LENGTH_OVER.replace("%LENGTH%", i.length) : Text.POST_ERROR, new AlertDialog(t, Text.OK,
            function() {
                return n.loader.close()
            })) : 412 === e.status ? new AlertDialog(Text.TWITTER_AUTH_ERROR, Text.OK,
            function() {
                return window.location.href = URL.SIGN_OUT
            }) : e.status < 500 ? new AlertDialog(Text.LOGOUT_ERROR, Text.OK,
            function() {
                return window.location.href = URL.SIGN_OUT
            }) : new AlertDialog(Text.POST_ERROR, Text.CLOSE,
            function() {
                return n.loader.close()
            })
        },
        e
    } (),
    this.RecoveryTweet.API_PATH = "/gacha/recovery_tweet",
    this.RecoveryTweet.DEFAULT_TEXTS = [""],
    this.GachaResult = function() {
        function e(e) {
            this.data = e
        }
        return e.prototype.buildTweetText = function() {
            return void 0 !== this.data ? Text.RESULT_TWEET.replace("%NAME%", this.data.card.name) : Text.BLANK
        },
        e.prototype.getCard = function() {
            return this.data.card
        },
        e.prototype.isMillionRare = function() {
            return 5 === this.data.card.rarity_number
        },
        e
    } (),
    this.KeepTweet = function() {
        function e(e, t) {
            var n;
            this.input = e.input,
            this.button = e.button,
            this.post_area = e.post_area,
            this.complete_area = e.complete_area,
            this.loader = new Loader,
            this.gacha = t,
            this.initializeView(),
            n = this,
            $(document).on(Gacha.LAST_RESULT_CHANGE_EVENT,
            function() {
                var e;
                return e = n.gacha.getLastResult(),
                "undefined" != typeof e ? $(n.input).val(e.buildTweetText()) : void 0
            }).on(Gacha.CLOSE_RESULT_VIEW_EVENT,
            function() {
                return n.initializeView()
            }).on("click", n.button,
            function() {
                var e, t;
                return n.loader.open(),
                n.disableButton(),
                t = $(n.input).val(),
                0 === t.length ? new AlertDialog(Text.TWEET_LENGTH_ZERO, Text.OK,
                function() {
                    return n.enableButton(),
                    n.loader.close()
                }) : t.length > 117 ? (e = Text.TWEET_LENGTH_OVER.replace("%LENGTH%", t.length), new AlertDialog(e, Text.OK,
                function() {
                    return n.enableButton(),
                    n.loader.close()
                })) : n.send(t),
                !1
            })
        }
        return e.prototype.initializeView = function() {
            return $(this.post_area).show(),
            $(this.complete_area).hide()
        },
        e.prototype.disableButton = function() {
            return $(self.button).attr("disabled", !0)
        },
        e.prototype.enableButton = function() {
            return $(self.button).attr("disabled", !1)
        },
        e.prototype.send = function(t) {
            var n;
            return n = this,
            $.ajax(e.API_PATH, {
                type: "POST",
                data: {
                    tweet: {
                        text: t
                    }
                },
                success: function(e) {
                    return n.onSuccess(e)
                },
                error: function(e) {
                    return n.onError(e)
                },
                complete: function() {
                    return n.enableButton()
                }
            })
        },
        e.prototype.onSuccess = function(e) {
            var t;
            return t = this,
            302 === e.status ? new AlertDialog(Text.LOGOUT_ERROR, Text.OK,
            function() {
                return window.location.href = e.redirectURL
            }) : e.expired === !0 ? window.location.href = "/": ($(this.post_area).hide(), $(this.complete_area).show(), this.gacha.gacha_state.setKeep(!0), new AlertDialog(Text.POST_SUCCESS, Text.CLOSE,
            function() {
                return t.loader.close()
            },
            Text.POST_SUCCESS_TITLE))
        },
        e.prototype.onError = function(e) {
            var t;
            return t = this,
            400 === e.status ? new AlertDialog(Text.TWEET_LENGTH_ZERO, Text.OK,
            function() {
                return t.loader.close()
            }) : 412 === e.status ? new AlertDialog(Text.TWITTER_AUTH_ERROR, Text.OK,
            function() {
                return window.location.href = URL.SIGN_OUT
            }) : e.status < 500 ? new AlertDialog(Text.LOGOUT_ERROR, Text.OK,
            function() {
                return window.location.href = URL.SIGN_OUT
            }) : new AlertDialog(Text.POST_ERROR, Text.CLOSE,
            function() {
                return t.loader.close()
            })
        },
        e
    } (),
    this.KeepTweet.API_PATH = "/gacha/keep_tweet",
    this.Loader = function() {
        function e() {
            this.el = $("#lightBoxBg")
        }
        return e.prototype.open = function() {
            return $("#lightBox").hide(),
            $("#connection").show(),
            this.el.fadeIn()
        },
        e.prototype.close = function() {
            return this.el.fadeOut()
        },
        e
    } (),
    this.AlertDialog = function() {
        function e(e, t, n, i) {
            var r;
            r = this,
            this.el = $("#lightBox"),
            $("#ligthBoxButton").attr("class", t),
            $(".text", this.el).html(e.replace(/\n/, "<br>")),
            $("a", this.el).on("click",
            function(e) {
                return e.preventDefault(),
                r.close()
            }),
            "undefined" != typeof i ? $(".title", this.el).text(i).show() : $(".title", this.el).hide(),
            null != n && (this.callback = n),
            this.open()
        }
        return e.prototype.open = function() {
            return this.el.fadeIn(),
            $("#connection").hide()
        },
        e.prototype.close = function() {
            return this.el.fadeOut(500,
            function(e) {
                return function() {
                    return null != e.callback ? e.callback() : void 0
                }
            } (this))
        },
        e
    } (),
    this.Counter = function() {
        function e(e) {
            this.all_counter_elm = $(e.all_counter_elm),
            this.mr_counter_elm = $(e.mr_counter_elm),
            this.all_count = e.all_count,
            this.mr_count = e.mr_count,
            this.figures = e.all_counter_figures,
            this.mr_figures = e.mr_counter_figures
        }
        return e.prototype.countUp = function(e) {
            return this.all_count++,
            5 === e.rarity_number && this.mr_count++,
            this.updateCounter()
        },
        e.prototype.updateCounter = function() {
            var e, t, n, i, r, a, o, s;
            for (a = this, e = Math.min(a.all_count, Math.pow(10, 8) - 1), t = a.zeroPadding(e, 8).split(""), this.all_counter_elm.children().each(function(e, n) {
                return $("img", n).attr({
                    src: a.figures[parseInt(t[e])],
                    alt: t[e]
                })
            }), n = "", r = Math.min(a.mr_count, Math.pow(10, 5) - 1), t = (r + "").split(""), i = o = 0, s = t.length - 1; s >= 0 ? s >= o: o >= s; i = s >= 0 ? ++o: --o) n += '<li><img src="' + a.mr_figures[parseInt(t[i])] + '" alt="' + t[i] + '"></li>';
            return this.mr_counter_elm.html(n)
        },
        e.prototype.zeroPadding = function(e, t) {
            return e += "",
            t <= e.length ? e: new Array(t - e.length + 1).join("0") + e
        },
        e
    } ()
}.call(this),
function(e, t) {
    function n() {
        var e = m.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function i(e) {
        var t = h[e[p]];
        return t || (t = {},
        f++, e[p] = f, h[f] = t),
        t
    }
    function r(e, n, r) {
        return n || (n = t),
        u ? n.createElement(e) : (r || (r = i(n)), n = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), n.canHaveChildren && !c.test(e) ? r.frag.appendChild(n) : n)
    }
    function a(e, t) {
        t.cache || (t.cache = {},
        t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
        e.createElement = function(n) {
            return m.shivMethods ? r(n, e, t) : t.createElem(n)
        },
        e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g,
        function(e) {
            return t.createElem(e),
            t.frag.createElement(e),
            'c("' + e + '")'
        }) + ");return n}")(m, t.frag)
    }
    function o(e) {
        e || (e = t);
        var n = i(e);
        if (m.shivCSS && !s && !n.hasCSS) {
            var r, o = e;
            r = o.createElement("p"),
            o = o.getElementsByTagName("head")[0] || o.documentElement,
            r.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",
            r = o.insertBefore(r.lastChild, o.firstChild),
            n.hasCSS = !!r
        }
        return u || a(e, n),
        e
    }
    var s, u, l = e.html5 || {},
    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    p = "_html5shiv",
    f = 0,
    h = {}; !
    function() {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>",
            s = "hidden" in e;
            var n;
            if (! (n = 1 == e.childNodes.length)) {
                t.createElement("a");
                var i = t.createDocumentFragment();
                n = "undefined" == typeof i.cloneNode || "undefined" == typeof i.createDocumentFragment || "undefined" == typeof i.createElement
            }
            u = n
        } catch(r) {
            u = s = !0
        }
    } ();
    var m = {
        elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
        version: "3.6.2pre",
        shivCSS: !1 !== l.shivCSS,
        supportsUnknownElements: u,
        shivMethods: !1 !== l.shivMethods,
        type: "default",
        shivDocument: o,
        createElement: r,
        createDocumentFragment: function(e, r) {
            if (e || (e = t), u) return e.createDocumentFragment();
            for (var r = r || i(e), a = r.frag.cloneNode(), o = 0, s = n(), l = s.length; l > o; o++) a.createElement(s[o]);
            return a
        }
    };
    e.html5 = m,
    o(t)
} (this, document),
function(e, t, n, i) {
    var r = e("<div>")[0],
    a = /url\(["']?(.*?)["']?\)/,
    o = [],
    s = {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1,
        center: .5
    };
    if (! ("backgroundSize" in r.style) || e.debugBGS) {
        e.cssHooks.backgroundSize = {
            set: function(t, n) {
                var i, r, a, u = !e.data(t, "bgsImg");
                e.data(t, "bgsValue", n),
                u ? (o.push(t), e.refreshBackgroundDimensions(t, !0), r = e("<div>").css({
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    overflow: "hidden"
                }), a = e("<img>").css({
                    position: "absolute"
                }).appendTo(r), r.prependTo(t), e.data(t, "bgsImg", a[0]), i = (e.css(t, "backgroundPosition") || e.css(t, "backgroundPositionX") + " " + e.css(t, "backgroundPositionY")).split(" "), e.data(t, "bgsPos", [s[i[0]] || parseFloat(i[0]) / 100, s[i[1]] || parseFloat(i[1]) / 100]), "auto" == e.css(t, "zIndex") && (t.style.zIndex = 0), "static" == e.css(t, "position") && (t.style.position = "relative"), e.refreshBackgroundImage(t)) : e.refreshBackground(t)
            },
            get: function(t) {
                return e.data(t, "bgsValue") || ""
            }
        },
        e.cssHooks.backgroundImage = {
            set: function(t, n) {
                return e.data(t, "bgsImg") ? e.refreshBackgroundImage(t, n) : n
            }
        },
        e.refreshBackgroundDimensions = function(t, n) {
            var i = e(t),
            r = {
                width: i.innerWidth(),
                height: i.innerHeight()
            },
            a = e.data(t, "bgsDim"),
            o = !a || r.width != a.width || r.height != a.height;
            e.data(t, "bgsDim", r),
            o && !n && e.refreshBackground(t)
        },
        e.refreshBackgroundImage = function(t, n) {
            var i = e.data(t, "bgsImg"),
            r = (a.exec(n || e.css(t, "backgroundImage")) || [])[1],
            o = i && i.src,
            s = r != o;
            s && (i.style.height = i.style.width = "auto", i.onload = function() {
                var n = {
                    width: i.width,
                    height: i.height
                }; (1 != n.width || 1 != n.height) && (e.data(t, "bgsImgDim", n), e.data(t, "bgsConstrain", !1), e.refreshBackground(t), i.style.visibility = "visible", i.onload = null)
            },
            i.style.visibility = "hidden", i.src = r, (i.readyState || i.complete) && (i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", i.src = r), t.style.backgroundImage = "none")
        },
        e.refreshBackground = function(t) {
            var n, r, a = e.data(t, "bgsValue"),
            o = e.data(t, "bgsDim"),
            s = e.data(t, "bgsImgDim"),
            u = e(e.data(t, "bgsImg")),
            l = e.data(t, "bgsPos"),
            c = e.data(t, "bgsConstrain"),
            d = o.width / o.height,
            p = s.width / s.height;
            "contain" == a ? p > d ? (e.data(t, "bgsConstrain", n = "width"), r = i.floor((o.height - o.width / p) * l[1]), u.css({
                top: r
            }), n != c && u.css({
                width: "100%",
                height: "auto",
                left: 0
            })) : (e.data(t, "bgsConstrain", n = "height"), r = i.floor((o.width - o.height * p) * l[0]), u.css({
                left: r
            }), n != c && u.css({
                height: "100%",
                width: "auto",
                top: 0
            })) : "cover" == a && (p > d ? (e.data(t, "bgsConstrain", n = "height"), r = i.floor((o.height * p - o.width) * l[0]), u.css({
                left: -r
            }), n != c && u.css({
                height: "100%",
                width: "auto",
                top: 0
            })) : (e.data(t, "bgsConstrain", n = "width"), r = i.floor((o.width / p - o.height) * l[1]), u.css({
                top: -r
            }), n != c && u.css({
                width: "100%",
                height: "auto",
                left: 0
            })))
        };
        var u, l, c, d = e.event,
        p = {
            _: 0
        },
        f = 0;
        u = d.special.throttledresize = {
            setup: function() {
                e(this).on("resize", u.handler)
            },
            teardown: function() {
                e(this).off("resize", u.handler)
            },
            handler: function(t, n) {
                var i = this,
                r = arguments;
                l = !0,
                c || (e(p).animate(p, {
                    duration: 1 / 0,
                    step: function() {
                        f++,
                        (f > u.threshold && l || n) && (t.type = "throttledresize", d.dispatch.apply(i, r), l = !1, f = 0),
                        f > 9 && (e(p).stop(), c = !1, f = 0)
                    }
                }), c = !0)
            },
            threshold: 1
        },
        e(t).on("throttledresize",
        function() {
            e(o).each(function() {
                e.refreshBackgroundDimensions(this)
            })
        })
    }
} (jQuery, window, document, Math),
jQuery.fn.extend({
    backgroundImage: function(e) {
        return this.each(function() {
            $(this).css("background-image", "url(" + e + ")")
        })
    }
}),
function() {
    $(function() {
        var e, t, n, i, r;
        return window.MA = {},
        window.MA.oldie = $("html").hasClass("oldie"),
        e = $("#container"),
        r = function() {
            var t;
            return window.MA.isMobileLauout = $(window).width() < 768,
            t = window.navigator.userAgent.toLowerCase(),
            window.MA.isMobile = t.indexOf("iphone") >= 0 || t.indexOf("ipod") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("android") >= 0,
            e.css({
                margin: Math.min(50, Math.max(20, ($(window).height() - 770) / 2)) + "px 0"
            })
        },
        r(),
        $(window).on("resize", r),
        n = new BackgroundVideo({
            container: "#background"
        }),
        setTimeout(function() {
            return $("#container").animate({
                opacity: 1
            },
            500, "easeInQuad")
        },
        "/" === location.pathname && window.MA.isMobileLauout === !1 && window.MA.isMobile === !1 ? 6500 : 0),
        i = function() {
            return $("#contents").animate({
                opacity: 1
            },
            300, "easeOutQuad"),
            "undefined" != typeof initializeGacha && "/gacha" === location.pathname ? initializeGacha() : "undefined" != typeof initializeBonus && "/bonus" === location.pathname && initializeBonus(),
            "/" === location.pathname ? ($("body").removeClass("gacha"), n.showVideo("top")) : ($("body").addClass("gacha"), n.showVideo("gacha")),
            $("body").hasClass("gacha_result") ? $(".twinkle").fadeIn() : void 0
        },
        i(),
        setTimeout(function() {
            return n.start()
        },
        500),
        t = !0,
        $(document).on("pjax:start",
        function() {
            return $("body").removeClass("gacha_result")
        }).on("pjax:send",
        function() {
            return delete window.charactor_voice
        }).on("pjax:complete",
        function() {
            return i()
        }).on("click", "a.pjax",
        function(e) {
            var t;
            return e.preventDefault(),
            $(".twinkle").fadeOut(),
            t = $(this).attr("href"),
            $("[data-pjax-container]").animate({
                opacity: 0
            },
            300, "easeOutQuad",
            function() {
                return $.pjax({
                    url: t,
                    container: "[data-pjax-container]"
                })
            })
        }).on("click", "a[data-sound]",
        function(e) {
            var n;
            return e.preventDefault(),
            t !== !1 ? (t = !1, window.MA.oldie ? ($("<bgsound />").attr("src", $(this).attr("data-sound")).appendTo("body"), t = !0) : (n = new Audio($(this).attr("data-sound")), n.addEventListener("ended",
            function() {
                return function() {
                    return t = !0
                }
            } (this)), n.play())) : void 0
        })
    })
}.call(this);