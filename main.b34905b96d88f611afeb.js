(window.webpackJsonp = window.webpackJsonp || []).push([
            [2], {
                0: function (t, e, n) {
                    t.exports = n("zUnb")
                },
                "0EUg": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("bHdf");

                    function s() {
                        return Object(r.a)(1)
                    }
                },
                "1G5W": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("l7GE"),
                        s = n("ZUHj");

                    function i(t) {
                        return e => e.lift(new o(t))
                    }
                    class o {
                        constructor(t) {
                            this.notifier = t
                        }
                        call(t, e) {
                            const n = new a(t),
                                r = Object(s.a)(n, this.notifier);
                            return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
                        }
                    }
                    class a extends r.a {
                        constructor(t) {
                            super(t), this.seenValue = !1
                        }
                        notifyNext(t, e, n, r, s) {
                            this.seenValue = !0, this.complete()
                        }
                        notifyComplete() {}
                    }
                },
                "1kSV": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return ht
                    })), n.d(e, "b", (function () {
                        return st
                    })), n.d(e, "c", (function () {
                        return tt
                    })), n.d(e, "d", (function () {
                        return et
                    })), n.d(e, "e", (function () {
                        return it
                    })), n.d(e, "f", (function () {
                        return rt
                    })), n.d(e, "g", (function () {
                        return gt
                    })), n.d(e, "h", (function () {
                        return yt
                    })), n.d(e, "i", (function () {
                        return jt
                    }));
                    var r = n("fXoL"),
                        s = n("ofXK"),
                        i = (n("cp0P"), n("Cfvw"), n("lJxs"));
                    let o = (() => {
                            class t {
                                constructor() {
                                    this._accessors = []
                                }
                                add(t, e) {
                                    this._accessors.push([t, e])
                                }
                                remove(t) {
                                    for (let e = this._accessors.length - 1; e >= 0; --e)
                                        if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
                                }
                                select(t) {
                                    this._accessors.forEach(e => {
                                        this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value)
                                    })
                                }
                                _isSameGroup(t, e) {
                                    return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = r.Gb({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        a = (() => {
                            class t {}
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })(),
                        c = (() => {
                            class t {}
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [o],
                                imports: [a]
                            }), t
                        })();
                    var l = n("XNiG"),
                        u = (n("2Vo4"), n("itXk"), n("HDdC")),
                        h = n("D0XW"),
                        d = n("DH7j");
                    n("z+Ro"), n("KqfI");
                    var f = n("n6bG");

                    function p(t, e, n, r) {
                        return Object(f.a)(n) && (r = n, n = void 0), r ? p(t, e, n).pipe(Object(i.a)(t => Object(d.a)(t) ? r(...t) : r(t))) : new u.a(r => {
                            ! function t(e, n, r, s, i) {
                                let o;
                                if (function (t) {
                                        return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                                    }(e)) {
                                    const t = e;
                                    e.addEventListener(n, r, i), o = () => t.removeEventListener(n, r, i)
                                } else if (function (t) {
                                        return t && "function" == typeof t.on && "function" == typeof t.off
                                    }(e)) {
                                    const t = e;
                                    e.on(n, r), o = () => t.off(n, r)
                                } else if (function (t) {
                                        return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                                    }(e)) {
                                    const t = e;
                                    e.addListener(n, r), o = () => t.removeListener(n, r)
                                } else {
                                    if (!e || !e.length) throw new TypeError("Invalid event target");
                                    for (let o = 0, a = e.length; o < a; o++) t(e[o], n, r, s, i)
                                }
                                s.add(o)
                            }(t, e, (function (t) {
                                r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t)
                            }), r, n)
                        })
                    }
                    n("VRyK");
                    var m = n("yCtX"),
                        g = n("l7GE"),
                        y = n("ZUHj");
                    class b {
                        call(t, e) {
                            return e.subscribe(new v(t))
                        }
                    }
                    class v extends g.a {
                        constructor(t) {
                            super(t), this.hasFirst = !1, this.observables = [], this.subscriptions = []
                        }
                        _next(t) {
                            this.observables.push(t)
                        }
                        _complete() {
                            const t = this.observables,
                                e = t.length;
                            if (0 === e) this.destination.complete();
                            else {
                                for (let n = 0; n < e && !this.hasFirst; n++) {
                                    let e = t[n],
                                        r = Object(y.a)(this, e, e, n);
                                    this.subscriptions && this.subscriptions.push(r), this.add(r)
                                }
                                this.observables = null
                            }
                        }
                        notifyNext(t, e, n, r, s) {
                            if (!this.hasFirst) {
                                this.hasFirst = !0;
                                for (let t = 0; t < this.subscriptions.length; t++)
                                    if (t !== n) {
                                        let e = this.subscriptions[t];
                                        e.unsubscribe(), this.remove(e)
                                    } this.subscriptions = null
                            }
                            this.destination.next(e)
                        }
                    }
                    n("JX91");
                    var _ = n("7o/Q"),
                        w = n("eIep"),
                        S = n("1G5W"),
                        C = n("pLZG"),
                        E = n("IzEk"),
                        x = n("vkgz");

                    function O(...t) {
                        return e => {
                            let n;
                            return "function" == typeof t[t.length - 1] && (n = t.pop()), e.lift(new k(t, n))
                        }
                    }
                    class k {
                        constructor(t, e) {
                            this.observables = t, this.project = e
                        }
                        call(t, e) {
                            return e.subscribe(new T(t, this.observables, this.project))
                        }
                    }
                    class T extends g.a {
                        constructor(t, e, n) {
                            super(t), this.observables = e, this.project = n, this.toRespond = [];
                            const r = e.length;
                            this.values = new Array(r);
                            for (let s = 0; s < r; s++) this.toRespond.push(s);
                            for (let s = 0; s < r; s++) {
                                let t = e[s];
                                this.add(Object(y.a)(this, t, t, s))
                            }
                        }
                        notifyNext(t, e, n, r, s) {
                            this.values[n] = e;
                            const i = this.toRespond;
                            if (i.length > 0) {
                                const t = i.indexOf(n); - 1 !== t && i.splice(t, 1)
                            }
                        }
                        notifyComplete() {}
                        _next(t) {
                            if (0 === this.toRespond.length) {
                                const e = [t, ...this.values];
                                this.project ? this._tryProject(e) : this.destination.next(e)
                            }
                        }
                        _tryProject(t) {
                            let e;
                            try {
                                e = this.project.apply(this, t)
                            } catch (n) {
                                return void this.destination.error(n)
                            }
                            this.destination.next(e)
                        }
                    }
                    var j = n("WMd4");
                    class A {
                        constructor(t, e) {
                            this.delay = t, this.scheduler = e
                        }
                        call(t, e) {
                            return e.subscribe(new I(t, this.delay, this.scheduler))
                        }
                    }
                    class I extends _.a {
                        constructor(t, e, n) {
                            super(t), this.delay = e, this.scheduler = n, this.queue = [], this.active = !1, this.errored = !1
                        }
                        static dispatch(t) {
                            const e = t.source,
                                n = e.queue,
                                r = t.scheduler,
                                s = t.destination;
                            for (; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(s);
                            if (n.length > 0) {
                                const e = Math.max(0, n[0].time - r.now());
                                this.schedule(t, e)
                            } else this.unsubscribe(), e.active = !1
                        }
                        _schedule(t) {
                            this.active = !0, this.destination.add(t.schedule(I.dispatch, this.delay, {
                                source: this,
                                destination: this.destination,
                                scheduler: t
                            }))
                        }
                        scheduleNotification(t) {
                            if (!0 === this.errored) return;
                            const e = this.scheduler,
                                n = new P(e.now() + this.delay, t);
                            this.queue.push(n), !1 === this.active && this._schedule(e)
                        }
                        _next(t) {
                            this.scheduleNotification(j.a.createNext(t))
                        }
                        _error(t) {
                            this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe()
                        }
                        _complete() {
                            this.scheduleNotification(j.a.createComplete()), this.unsubscribe()
                        }
                    }
                    class P {
                        constructor(t, e) {
                            this.time = t, this.notification = e
                        }
                    }
                    n("w1tV"), $localize `:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
                    const N = ["*"];
                    $localize `:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`, $localize `:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`, $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`, $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`, $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`, $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`, $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`, $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`, $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`, $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`;
                    const R = ["dialog"];

                    function D(t) {
                        return null != t
                    }
                    $localize `:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`, $localize `:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`, $localize `:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`, $localize `:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`, $localize `:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`, $localize `:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`, $localize `:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`, $localize `:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`, $localize `:@@ngb.progressbar.value␟f8e9a947b9db4252c0e9905765338712f2fd032f␟3720830768741091151:${"\ufffd0\ufffd"}:INTERPOLATION:`, $localize `:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`, $localize `:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`, $localize `:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`, $localize `:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`, $localize `:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`, $localize `:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`, $localize `:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`, $localize `:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`, $localize `:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`, $localize `:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`, $localize `:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`, $localize `:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`, $localize `:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${"\ufffd0\ufffd"}:INTERPOLATION:`, $localize `:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${"\ufffd0\ufffd"}:INTERPOLATION:`, $localize `:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`, "undefined" == typeof Element || Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (t) {
                        let e = this;
                        if (!document.documentElement.contains(e)) return null;
                        do {
                            if (e.matches(t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    });
                    let L = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        M = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        F = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })(),
                        H = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        z = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })();
                    var U = function (t) {
                        return t[t.Tab = 9] = "Tab", t[t.Enter = 13] = "Enter", t[t.Escape = 27] = "Escape", t[t.Space = 32] = "Space", t[t.PageUp = 33] = "PageUp", t[t.PageDown = 34] = "PageDown", t[t.End = 35] = "End", t[t.Home = 36] = "Home", t[t.ArrowLeft = 37] = "ArrowLeft", t[t.ArrowUp = 38] = "ArrowUp", t[t.ArrowRight = 39] = "ArrowRight", t[t.ArrowDown = 40] = "ArrowDown", t
                    }({});
                    const V = (t, e) => !!e && e.some(e => e.contains(t)),
                        $ = (t, e) => !e || null != function (t, e) {
                            return e ? void 0 === t.closest ? null : t.closest(e) : null
                        }(t, e),
                        B = (() => "undefined" != typeof navigator && !!navigator.userAgent && (/iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 || /Android/.test(navigator.userAgent)))();
                    const q = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");

                    function K(t) {
                        const e = Array.from(t.querySelectorAll(q)).filter(t => -1 !== t.tabIndex);
                        return [e[0], e[e.length - 1]]
                    }
                    class G {
                        getAllStyles(t) {
                            return window.getComputedStyle(t)
                        }
                        getStyle(t, e) {
                            return this.getAllStyles(t)[e]
                        }
                        isStaticPositioned(t) {
                            return "static" === (this.getStyle(t, "position") || "static")
                        }
                        offsetParent(t) {
                            let e = t.offsetParent || document.documentElement;
                            for (; e && e !== document.documentElement && this.isStaticPositioned(e);) e = e.offsetParent;
                            return e || document.documentElement
                        }
                        position(t, e = !0) {
                            let n, r = {
                                width: 0,
                                height: 0,
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0
                            };
                            if ("fixed" === this.getStyle(t, "position")) n = t.getBoundingClientRect(), n = {
                                top: n.top,
                                bottom: n.bottom,
                                left: n.left,
                                right: n.right,
                                height: n.height,
                                width: n.width
                            };
                            else {
                                const e = this.offsetParent(t);
                                n = this.offset(t, !1), e !== document.documentElement && (r = this.offset(e, !1)), r.top += e.clientTop, r.left += e.clientLeft
                            }
                            return n.top -= r.top, n.bottom -= r.top, n.left -= r.left, n.right -= r.left, e && (n.top = Math.round(n.top), n.bottom = Math.round(n.bottom), n.left = Math.round(n.left), n.right = Math.round(n.right)), n
                        }
                        offset(t, e = !0) {
                            const n = t.getBoundingClientRect(),
                                r = window.pageYOffset - document.documentElement.clientTop,
                                s = window.pageXOffset - document.documentElement.clientLeft;
                            let i = {
                                height: n.height || t.offsetHeight,
                                width: n.width || t.offsetWidth,
                                top: n.top + r,
                                bottom: n.bottom + r,
                                left: n.left + s,
                                right: n.right + s
                            };
                            return e && (i.height = Math.round(i.height), i.width = Math.round(i.width), i.top = Math.round(i.top), i.bottom = Math.round(i.bottom), i.left = Math.round(i.left), i.right = Math.round(i.right)), i
                        }
                        positionElements(t, e, n, r) {
                            const [s = "top", i = "center"] = n.split("-"), o = r ? this.offset(t, !1) : this.position(t, !1), a = this.getAllStyles(e), c = parseFloat(a.marginTop), l = parseFloat(a.marginBottom), u = parseFloat(a.marginLeft), h = parseFloat(a.marginRight);
                            let d = 0,
                                f = 0;
                            switch (s) {
                                case "top":
                                    d = o.top - (e.offsetHeight + c + l);
                                    break;
                                case "bottom":
                                    d = o.top + o.height;
                                    break;
                                case "left":
                                    f = o.left - (e.offsetWidth + u + h);
                                    break;
                                case "right":
                                    f = o.left + o.width
                            }
                            switch (i) {
                                case "top":
                                    d = o.top;
                                    break;
                                case "bottom":
                                    d = o.top + o.height - e.offsetHeight;
                                    break;
                                case "left":
                                    f = o.left;
                                    break;
                                case "right":
                                    f = o.left + o.width - e.offsetWidth;
                                    break;
                                case "center":
                                    "top" === s || "bottom" === s ? f = o.left + o.width / 2 - e.offsetWidth / 2 : d = o.top + o.height / 2 - e.offsetHeight / 2
                            }
                            e.style.transform = `translate(${Math.round(f)}px, ${Math.round(d)}px)`;
                            const p = e.getBoundingClientRect(),
                                m = document.documentElement,
                                g = window.innerHeight || m.clientHeight,
                                y = window.innerWidth || m.clientWidth;
                            return p.left >= 0 && p.top >= 0 && p.right <= y && p.bottom <= g
                        }
                    }
                    const W = /\s+/,
                        X = new G;
                    let Q = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b, c]
                                ]
                            }), t
                        })(),
                        Z = (() => {
                            let t = class {
                                constructor() {
                                    this.autoClose = !0, this.placement = ["bottom-left", "bottom-right", "top-left", "top-right"]
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })();
                    var Y;
                    let J = (() => {
                            let t = class {};
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["", 8, "navbar"]
                                ]
                            }), t
                        })(),
                        tt = (() => {
                            let t = class {
                                constructor(t) {
                                    this.elementRef = t, this._disabled = !1
                                }
                                set disabled(t) {
                                    this._disabled = "" === t || !0 === t
                                }
                                get disabled() {
                                    return this._disabled
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(r.l))
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["", "ngbDropdownItem", ""]
                                ],
                                hostAttrs: [1, "dropdown-item"],
                                hostVars: 2,
                                hostBindings: function (t, e) {
                                    2 & t && r.Cb("disabled", e.disabled)
                                },
                                inputs: {
                                    disabled: "disabled"
                                }
                            }), t
                        })(),
                        et = (() => {
                            let t = class {
                                constructor(t, e) {
                                    this.dropdown = t, this.placement = "bottom", this.isOpen = !1, this.nativeElement = e.nativeElement
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(Object(r.S)(() => st)), r.Kb(r.l))
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["", "ngbDropdownMenu", ""]
                                ],
                                contentQueries: function (t, e, n) {
                                    var s;
                                    1 & t && r.Db(n, tt, !1), 2 & t && r.pc(s = r.bc()) && (e.menuItems = s)
                                },
                                hostVars: 5,
                                hostBindings: function (t, e) {
                                    1 & t && r.ac("keydown.ArrowUp", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.ArrowDown", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Home", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.End", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Enter", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Space", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Tab", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Shift.Tab", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    })), 2 & t && (r.yb("x-placement", e.placement), r.Cb("dropdown-menu", !0)("show", e.dropdown.isOpen()))
                                }
                            }), t
                        })(),
                        nt = (() => {
                            let t = class {
                                constructor(t, e) {
                                    this.dropdown = t, this.nativeElement = e.nativeElement
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(Object(r.S)(() => st)), r.Kb(r.l))
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["", "ngbDropdownAnchor", ""]
                                ],
                                hostAttrs: [1, "dropdown-toggle"],
                                hostVars: 1,
                                hostBindings: function (t, e) {
                                    2 & t && r.yb("aria-expanded", e.dropdown.isOpen())
                                }
                            }), t
                        })(),
                        rt = (() => {
                            let t = Y = class extends nt {
                                constructor(t, e) {
                                    super(t, e)
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(Object(r.S)(() => st)), r.Kb(r.l))
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["", "ngbDropdownToggle", ""]
                                ],
                                hostAttrs: [1, "dropdown-toggle"],
                                hostVars: 1,
                                hostBindings: function (t, e) {
                                    1 & t && r.ac("click", (function () {
                                        return e.dropdown.toggle()
                                    }))("keydown.ArrowUp", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.ArrowDown", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Home", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.End", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Tab", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    }))("keydown.Shift.Tab", (function (t) {
                                        return e.dropdown.onKeyDown(t)
                                    })), 2 & t && r.yb("aria-expanded", e.dropdown.isOpen())
                                },
                                features: [r.wb([{
                                    provide: nt,
                                    useExisting: Object(r.S)(() => Y)
                                }]), r.ub]
                            }), t
                        })(),
                        st = (() => {
                            let t = class {
                                constructor(t, e, n, s, i, o, a) {
                                    this._changeDetector = t, this._document = n, this._ngZone = s, this._elementRef = i, this._renderer = o, this._closed$ = new l.a, this._bodyContainer = null, this._open = !1, this.openChange = new r.n, this.placement = e.placement, this.container = e.container, this.autoClose = e.autoClose, this.display = a ? "static" : "dynamic", this._zoneSubscription = s.onStable.subscribe(() => {
                                        this._positionMenu()
                                    })
                                }
                                ngAfterContentInit() {
                                    this._ngZone.onStable.pipe(Object(E.a)(1)).subscribe(() => {
                                        this._applyPlacementClasses(), this._open && this._setCloseHandlers()
                                    })
                                }
                                ngOnChanges(t) {
                                    t.container && this._open && this._applyContainer(this.container), t.placement && !t.placement.isFirstChange && this._applyPlacementClasses()
                                }
                                isOpen() {
                                    return this._open
                                }
                                open() {
                                    this._open || (this._open = !0, this._applyContainer(this.container), this.openChange.emit(!0), this._setCloseHandlers(), this._anchor && this._anchor.nativeElement.focus())
                                }
                                _setCloseHandlers() {
                                    ! function (t, e, n, r, s, o, a, c) {
                                        var l;
                                        n && t.runOutsideAngular((l = () => {
                                            const l = p(e, "keydown").pipe(Object(S.a)(s), Object(C.a)(t => t.which === U.Escape), Object(x.a)(t => t.preventDefault())),
                                                u = p(e, "mousedown").pipe(Object(i.a)(t => {
                                                    const e = t.target;
                                                    return 2 !== t.button && !V(e, a) && ("inside" === n ? V(e, o) && $(e, c) : "outside" === n ? !V(e, o) : $(e, c) || !V(e, o))
                                                }), Object(S.a)(s)),
                                                f = p(e, "mouseup").pipe(O(u), Object(C.a)(([t, e]) => e), function (t, e = h.a) {
                                                    var n;
                                                    const r = (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
                                                    return t => t.lift(new A(r, e))
                                                }(0), Object(S.a)(s));
                                            (function (...t) {
                                                if (1 === t.length) {
                                                    if (!Object(d.a)(t[0])) return t[0];
                                                    t = t[0]
                                                }
                                                return Object(m.a)(t, void 0).lift(new b)
                                            })([l.pipe(Object(i.a)(t => 0)), f.pipe(Object(i.a)(t => 1))]).subscribe(e => t.run(() => r(e)))
                                        }, B ? () => setTimeout(() => l(), 100) : l))
                                    }(this._ngZone, this._document, this.autoClose, t => {
                                        this.close(), 0 === t && this._anchor.nativeElement.focus()
                                    }, this._closed$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], ".dropdown-item,.dropdown-divider")
                                }
                                close() {
                                    this._open && (this._open = !1, this._resetContainer(), this._closed$.next(), this.openChange.emit(!1), this._changeDetector.markForCheck())
                                }
                                toggle() {
                                    this.isOpen() ? this.close() : this.open()
                                }
                                ngOnDestroy() {
                                    this._resetContainer(), this._closed$.next(), this._zoneSubscription.unsubscribe()
                                }
                                onKeyDown(t) {
                                    const e = t.which,
                                        n = this._getMenuElements();
                                    let r = -1,
                                        s = null;
                                    const i = this._isEventFromToggle(t);
                                    if (!i && n.length && n.forEach((e, n) => {
                                            e.contains(t.target) && (s = e), e === this._document.activeElement && (r = n)
                                        }), e !== U.Space && e !== U.Enter) {
                                        if (e !== U.Tab) {
                                            if (i || s) {
                                                if (this.open(), n.length) {
                                                    switch (e) {
                                                        case U.ArrowDown:
                                                            r = Math.min(r + 1, n.length - 1);
                                                            break;
                                                        case U.ArrowUp:
                                                            if (this._isDropup() && -1 === r) {
                                                                r = n.length - 1;
                                                                break
                                                            }
                                                            r = Math.max(r - 1, 0);
                                                            break;
                                                        case U.Home:
                                                            r = 0;
                                                            break;
                                                        case U.End:
                                                            r = n.length - 1
                                                    }
                                                    n[r].focus()
                                                }
                                                t.preventDefault()
                                            }
                                        } else if (t.target && this.isOpen() && this.autoClose) {
                                            if (this._anchor.nativeElement === t.target) return void("body" !== this.container || t.shiftKey ? t.shiftKey && this.close() : (this._renderer.setAttribute(this._menu.nativeElement, "tabindex", "0"), this._menu.nativeElement.focus(), this._renderer.removeAttribute(this._menu.nativeElement, "tabindex")));
                                            if ("body" === this.container) {
                                                const e = this._menu.nativeElement.querySelectorAll(q);
                                                t.shiftKey && t.target === e[0] ? (this._anchor.nativeElement.focus(), t.preventDefault()) : t.shiftKey || t.target !== e[e.length - 1] || (this._anchor.nativeElement.focus(), this.close())
                                            } else p(t.target, "focusout").pipe(Object(E.a)(1)).subscribe(({
                                                relatedTarget: t
                                            }) => {
                                                this._elementRef.nativeElement.contains(t) || this.close()
                                            })
                                        }
                                    } else !s || !0 !== this.autoClose && "inside" !== this.autoClose || p(s, "click").pipe(Object(E.a)(1)).subscribe(() => this.close())
                                }
                                _isDropup() {
                                    return this._elementRef.nativeElement.classList.contains("dropup")
                                }
                                _isEventFromToggle(t) {
                                    return this._anchor.nativeElement.contains(t.target)
                                }
                                _getMenuElements() {
                                    const t = this._menu;
                                    return null == t ? [] : t.menuItems.filter(t => !t.disabled).map(t => t.elementRef.nativeElement)
                                }
                                _positionMenu() {
                                    const t = this._menu;
                                    this.isOpen() && t && this._applyPlacementClasses("dynamic" === this.display ? function (t, e, n, r, s) {
                                        let i = Array.isArray(n) ? n : n.split(W);
                                        const o = ["top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"],
                                            a = t => {
                                                const [e, n] = t.split("-"), r = [];
                                                return r
                                            };
                                        let c = i.findIndex(t => "auto" === t);
                                        c >= 0 && o.forEach((function (t) {
                                            null == i.find(e => -1 !== e.search("^" + t)) && i.splice(c++, 1, t)
                                        }));
                                        const l = e.style;
                                        l.position = "absolute", l.top = "0", l.left = "0", l["will-change"] = "transform";
                                        let u = null,
                                            h = !1;
                                        for (u of i) {
                                            a(u);
                                            if (X.positionElements(t, e, u, r)) {
                                                h = !0;
                                                break
                                            }
                                        }
                                        return h || (u = i[0], a(u), X.positionElements(t, e, u, r)), u
                                    }(this._anchor.nativeElement, this._bodyContainer || this._menu.nativeElement, this.placement, "body" === this.container) : this._getFirstPlacement(this.placement))
                                }
                                _getFirstPlacement(t) {
                                    return Array.isArray(t) ? t[0] : t.split(" ")[0]
                                }
                                _resetContainer() {
                                    const t = this._renderer;
                                    if (this._menu) {
                                        const e = this._menu.nativeElement;
                                        t.appendChild(this._elementRef.nativeElement, e), t.removeStyle(e, "position"), t.removeStyle(e, "transform")
                                    }
                                    this._bodyContainer && (t.removeChild(this._document.body, this._bodyContainer), this._bodyContainer = null)
                                }
                                _applyContainer(t = null) {
                                    if (this._resetContainer(), "body" === t) {
                                        const t = this._renderer,
                                            e = this._menu.nativeElement,
                                            n = this._bodyContainer = this._bodyContainer || t.createElement("div");
                                        t.setStyle(n, "position", "absolute"), t.setStyle(e, "position", "static"), t.setStyle(n, "z-index", "1050"), t.appendChild(n, e), t.appendChild(this._document.body, n)
                                    }
                                }
                                _applyPlacementClasses(t) {
                                    const e = this._menu;
                                    if (e) {
                                        t || (t = this._getFirstPlacement(this.placement));
                                        const n = this._renderer,
                                            r = this._elementRef.nativeElement;
                                        n.removeClass(r, "dropup"), n.removeClass(r, "dropdown"), e.placement = "static" === this.display ? null : t;
                                        const s = -1 !== t.search("^top") ? "dropup" : "dropdown";
                                        n.addClass(r, s);
                                        const i = this._bodyContainer;
                                        i && (n.removeClass(i, "dropup"), n.removeClass(i, "dropdown"), n.addClass(i, s))
                                    }
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(r.h), r.Kb(Z), r.Kb(s.c), r.Kb(r.z), r.Kb(r.l), r.Kb(r.D), r.Kb(J, 8))
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["", "ngbDropdown", ""]
                                ],
                                contentQueries: function (t, e, n) {
                                    var s;
                                    1 & t && (r.Db(n, et, !0), r.Db(n, nt, !0)), 2 & t && (r.pc(s = r.bc()) && (e._menu = s.first), r.pc(s = r.bc()) && (e._anchor = s.first))
                                },
                                hostVars: 2,
                                hostBindings: function (t, e) {
                                    2 & t && r.Cb("show", e.isOpen())
                                },
                                inputs: {
                                    _open: ["open", "_open"],
                                    placement: "placement",
                                    container: "container",
                                    autoClose: "autoClose",
                                    display: "display"
                                },
                                outputs: {
                                    openChange: "openChange"
                                },
                                exportAs: ["ngbDropdown"],
                                features: [r.vb]
                            }), t
                        })(),
                        it = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })(),
                        ot = (() => {
                            let t = class {
                                constructor() {
                                    this.backdrop = !0, this.keyboard = !0
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })();
                    class at {
                        constructor(t, e, n) {
                            this.nodes = t, this.viewRef = e, this.componentRef = n
                        }
                    }
                    const ct = () => {};
                    let lt = (() => {
                            let t = class {
                                constructor(t) {
                                    this._document = t
                                }
                                compensate() {
                                    const t = this._getWidth();
                                    return this._isPresent(t) ? this._adjustBody(t) : ct
                                }
                                _adjustBody(t) {
                                    const e = this._document.body,
                                        n = e.style.paddingRight,
                                        r = parseFloat(window.getComputedStyle(e)["padding-right"]);
                                    return e.style["padding-right"] = r + t + "px", () => e.style["padding-right"] = n
                                }
                                _isPresent(t) {
                                    const e = this._document.body.getBoundingClientRect();
                                    return window.innerWidth - (e.left + e.right) >= t - .1 * t
                                }
                                _getWidth() {
                                    const t = this._document.createElement("div");
                                    t.className = "modal-scrollbar-measure";
                                    const e = this._document.body;
                                    e.appendChild(t);
                                    const n = t.getBoundingClientRect().width - t.clientWidth;
                                    return e.removeChild(t), n
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Xb(s.c))
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t(Object(r.Xb)(s.c))
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })(),
                        ut = (() => {
                            let t = class {};
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275cmp = r.Eb({
                                type: t,
                                selectors: [
                                    ["ngb-modal-backdrop"]
                                ],
                                hostAttrs: [2, "z-index", "1050"],
                                hostVars: 2,
                                hostBindings: function (t, e) {
                                    2 & t && r.zb("modal-backdrop fade show" + (e.backdropClass ? " " + e.backdropClass : ""))
                                },
                                inputs: {
                                    backdropClass: "backdropClass"
                                },
                                decls: 0,
                                vars: 0,
                                template: function (t, e) {},
                                encapsulation: 2
                            }), t
                        })();
                    class ht {
                        close(t) {}
                        dismiss(t) {}
                    }
                    class dt {
                        constructor(t, e, n, r) {
                            this._windowCmptRef = t, this._contentRef = e, this._backdropCmptRef = n, this._beforeDismiss = r, t.instance.dismissEvent.subscribe(t => {
                                this.dismiss(t)
                            }), this.result = new Promise((t, e) => {
                                this._resolve = t, this._reject = e
                            }), this.result.then(null, () => {})
                        }
                        get componentInstance() {
                            if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance
                        }
                        close(t) {
                            this._windowCmptRef && (this._resolve(t), this._removeModalElements())
                        }
                        _dismiss(t) {
                            this._reject(t), this._removeModalElements()
                        }
                        dismiss(t) {
                            if (this._windowCmptRef)
                                if (this._beforeDismiss) {
                                    const e = this._beforeDismiss();
                                    e && e.then ? e.then(e => {
                                        !1 !== e && this._dismiss(t)
                                    }, () => {}) : !1 !== e && this._dismiss(t)
                                } else this._dismiss(t)
                        }
                        _removeModalElements() {
                            const t = this._windowCmptRef.location.nativeElement;
                            if (t.parentNode.removeChild(t), this._windowCmptRef.destroy(), this._backdropCmptRef) {
                                const t = this._backdropCmptRef.location.nativeElement;
                                t.parentNode.removeChild(t), this._backdropCmptRef.destroy()
                            }
                            this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(), this._windowCmptRef = null, this._backdropCmptRef = null, this._contentRef = null
                        }
                    }
                    var ft = function (t) {
                        return t[t.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", t[t.ESC = 1] = "ESC", t
                    }({});
                    let pt = (() => {
                            let t = class {
                                constructor(t, e, n) {
                                    this._document = t, this._elRef = e, this._zone = n, this._closed$ = new l.a, this._elWithFocus = null, this.backdrop = !0, this.keyboard = !0, this.dismissEvent = new r.n
                                }
                                dismiss(t) {
                                    this.dismissEvent.emit(t)
                                }
                                ngOnInit() {
                                    this._elWithFocus = this._document.activeElement
                                }
                                ngAfterViewInit() {
                                    const {
                                        nativeElement: t
                                    } = this._elRef;
                                    if (this._zone.runOutsideAngular(() => {
                                            p(t, "keydown").pipe(Object(S.a)(this._closed$), Object(C.a)(t => t.which === U.Escape && this.keyboard)).subscribe(t => requestAnimationFrame(() => {
                                                t.defaultPrevented || this._zone.run(() => this.dismiss(ft.ESC))
                                            }));
                                            let e = !1;
                                            p(this._dialogEl.nativeElement, "mousedown").pipe(Object(S.a)(this._closed$), Object(x.a)(() => e = !1), Object(w.a)(() => p(t, "mouseup").pipe(Object(S.a)(this._closed$), Object(E.a)(1))), Object(C.a)(({
                                                target: e
                                            }) => t === e)).subscribe(() => {
                                                e = !0
                                            }), p(t, "click").pipe(Object(S.a)(this._closed$)).subscribe(({
                                                target: n
                                            }) => {
                                                !0 !== this.backdrop || t !== n || e || this._zone.run(() => this.dismiss(ft.BACKDROP_CLICK)), e = !1
                                            })
                                        }), !t.contains(document.activeElement)) {
                                        const e = t.querySelector("[ngbAutofocus]"),
                                            n = K(t)[0];
                                        (e || n || t).focus()
                                    }
                                }
                                ngOnDestroy() {
                                    const t = this._document.body,
                                        e = this._elWithFocus;
                                    let n;
                                    n = e && e.focus && t.contains(e) ? e : t, this._zone.runOutsideAngular(() => {
                                        setTimeout(() => n.focus()), this._elWithFocus = null
                                    }), this._closed$.next()
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(s.c), r.Kb(r.l), r.Kb(r.z))
                            }, t.\u0275cmp = r.Eb({
                                type: t,
                                selectors: [
                                    ["ngb-modal-window"]
                                ],
                                viewQuery: function (t, e) {
                                    var n;
                                    1 & t && r.xc(R, !0), 2 & t && r.pc(n = r.bc()) && (e._dialogEl = n.first)
                                },
                                hostAttrs: ["role", "dialog", "tabindex", "-1"],
                                hostVars: 5,
                                hostBindings: function (t, e) {
                                    2 & t && (r.yb("aria-modal", !0)("aria-labelledby", e.ariaLabelledBy)("aria-describedby", e.ariaDescribedBy), r.zb("modal fade show d-block" + (e.windowClass ? " " + e.windowClass : "")))
                                },
                                inputs: {
                                    backdrop: "backdrop",
                                    keyboard: "keyboard",
                                    ariaLabelledBy: "ariaLabelledBy",
                                    ariaDescribedBy: "ariaDescribedBy",
                                    centered: "centered",
                                    scrollable: "scrollable",
                                    size: "size",
                                    windowClass: "windowClass"
                                },
                                outputs: {
                                    dismissEvent: "dismiss"
                                },
                                ngContentSelectors: N,
                                decls: 4,
                                vars: 2,
                                consts: [
                                    ["role", "document"],
                                    ["dialog", ""],
                                    [1, "modal-content"]
                                ],
                                template: function (t, e) {
                                    1 & t && (r.hc(), r.Pb(0, "div", 0, 1), r.Pb(2, "div", 2), r.gc(3), r.Ob(), r.Ob()), 2 & t && r.zb("modal-dialog" + (e.size ? " modal-" + e.size : "") + (e.centered ? " modal-dialog-centered" : "") + (e.scrollable ? " modal-dialog-scrollable" : ""))
                                },
                                styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"],
                                encapsulation: 2
                            }), t
                        })(),
                        mt = (() => {
                            let t = class {
                                constructor(t, e, n, s, o, a) {
                                    this._applicationRef = t, this._injector = e, this._document = n, this._scrollBar = s, this._rendererFactory = o, this._ngZone = a, this._activeWindowCmptHasChanged = new l.a, this._ariaHiddenValues = new Map, this._backdropAttributes = ["backdropClass"], this._modalRefs = [], this._windowAttributes = ["ariaLabelledBy", "ariaDescribedBy", "backdrop", "centered", "keyboard", "scrollable", "size", "windowClass"], this._windowCmpts = [], this._activeInstances = new r.n, this._activeWindowCmptHasChanged.subscribe(() => {
                                        if (this._windowCmpts.length) {
                                            const t = this._windowCmpts[this._windowCmpts.length - 1];
                                            ((t, e, n, r = !1) => {
                                                this._ngZone.runOutsideAngular(() => {
                                                    const t = p(e, "focusin").pipe(Object(S.a)(n), Object(i.a)(t => t.target));
                                                    p(e, "keydown").pipe(Object(S.a)(n), Object(C.a)(t => t.which === U.Tab), O(t)).subscribe(([t, n]) => {
                                                        const [r, s] = K(e);
                                                        n !== r && n !== e || !t.shiftKey || (s.focus(), t.preventDefault()), n !== s || t.shiftKey || (r.focus(), t.preventDefault())
                                                    }), r && p(e, "click").pipe(Object(S.a)(n), O(t), Object(i.a)(t => t[1])).subscribe(t => t.focus())
                                                })
                                            })(0, t.location.nativeElement, this._activeWindowCmptHasChanged), this._revertAriaHidden(), this._setAriaHidden(t.location.nativeElement)
                                        }
                                    })
                                }
                                open(t, e, n, r) {
                                    const s = r.container instanceof HTMLElement ? r.container : D(r.container) ? this._document.querySelector(r.container) : this._document.body,
                                        i = this._rendererFactory.createRenderer(null, null),
                                        o = this._scrollBar.compensate(),
                                        a = () => {
                                            this._modalRefs.length || (i.removeClass(this._document.body, "modal-open"), this._revertAriaHidden())
                                        };
                                    if (!s) throw new Error(`The specified modal container "${r.container||"body"}" was not found in the DOM.`);
                                    const c = new ht,
                                        l = this._getContentRef(t, r.injector || e, n, c, r);
                                    let u = !1 !== r.backdrop ? this._attachBackdrop(t, s) : void 0,
                                        h = this._attachWindowComponent(t, s, l),
                                        d = new dt(h, l, u, r.beforeDismiss);
                                    return this._registerModalRef(d), this._registerWindowCmpt(h), d.result.then(o, o), d.result.then(a, a), c.close = t => {
                                        d.close(t)
                                    }, c.dismiss = t => {
                                        d.dismiss(t)
                                    }, this._applyWindowOptions(h.instance, r), 1 === this._modalRefs.length && i.addClass(this._document.body, "modal-open"), u && u.instance && this._applyBackdropOptions(u.instance, r), d
                                }
                                get activeInstances() {
                                    return this._activeInstances
                                }
                                dismissAll(t) {
                                    this._modalRefs.forEach(e => e.dismiss(t))
                                }
                                hasOpenModals() {
                                    return this._modalRefs.length > 0
                                }
                                _attachBackdrop(t, e) {
                                    let n = t.resolveComponentFactory(ut).create(this._injector);
                                    return this._applicationRef.attachView(n.hostView), e.appendChild(n.location.nativeElement), n
                                }
                                _attachWindowComponent(t, e, n) {
                                    let r = t.resolveComponentFactory(pt).create(this._injector, n.nodes);
                                    return this._applicationRef.attachView(r.hostView), e.appendChild(r.location.nativeElement), r
                                }
                                _applyWindowOptions(t, e) {
                                    this._windowAttributes.forEach(n => {
                                        D(e[n]) && (t[n] = e[n])
                                    })
                                }
                                _applyBackdropOptions(t, e) {
                                    this._backdropAttributes.forEach(n => {
                                        D(e[n]) && (t[n] = e[n])
                                    })
                                }
                                _getContentRef(t, e, n, s, i) {
                                    return n ? n instanceof r.K ? this._createFromTemplateRef(n, s) : "string" == typeof n ? this._createFromString(n) : this._createFromComponent(t, e, n, s, i) : new at([])
                                }
                                _createFromTemplateRef(t, e) {
                                    const n = t.createEmbeddedView({
                                        $implicit: e,
                                        close(t) {
                                            e.close(t)
                                        },
                                        dismiss(t) {
                                            e.dismiss(t)
                                        }
                                    });
                                    return this._applicationRef.attachView(n), new at([n.rootNodes], n)
                                }
                                _createFromString(t) {
                                    const e = this._document.createTextNode("" + t);
                                    return new at([
                                        [e]
                                    ])
                                }
                                _createFromComponent(t, e, n, s, i) {
                                    const o = t.resolveComponentFactory(n),
                                        a = r.r.create({
                                            providers: [{
                                                provide: ht,
                                                useValue: s
                                            }],
                                            parent: e
                                        }),
                                        c = o.create(a),
                                        l = c.location.nativeElement;
                                    return i.scrollable && l.classList.add("component-host-scrollable"), this._applicationRef.attachView(c.hostView), new at([
                                        [l]
                                    ], c.hostView, c)
                                }
                                _setAriaHidden(t) {
                                    const e = t.parentElement;
                                    e && t !== this._document.body && (Array.from(e.children).forEach(e => {
                                        e !== t && "SCRIPT" !== e.nodeName && (this._ariaHiddenValues.set(e, e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
                                    }), this._setAriaHidden(e))
                                }
                                _revertAriaHidden() {
                                    this._ariaHiddenValues.forEach((t, e) => {
                                        t ? e.setAttribute("aria-hidden", t) : e.removeAttribute("aria-hidden")
                                    }), this._ariaHiddenValues.clear()
                                }
                                _registerModalRef(t) {
                                    const e = () => {
                                        const e = this._modalRefs.indexOf(t);
                                        e > -1 && (this._modalRefs.splice(e, 1), this._activeInstances.emit(this._modalRefs))
                                    };
                                    this._modalRefs.push(t), this._activeInstances.emit(this._modalRefs), t.result.then(e, e)
                                }
                                _registerWindowCmpt(t) {
                                    this._windowCmpts.push(t), this._activeWindowCmptHasChanged.next(), t.onDestroy(() => {
                                        const e = this._windowCmpts.indexOf(t);
                                        e > -1 && (this._windowCmpts.splice(e, 1), this._activeWindowCmptHasChanged.next())
                                    })
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Xb(r.g), r.Xb(r.r), r.Xb(s.c), r.Xb(lt), r.Xb(r.E), r.Xb(r.z))
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t(Object(r.Xb)(r.g), Object(r.Xb)(r.o), Object(r.Xb)(s.c), Object(r.Xb)(lt), Object(r.Xb)(r.E), Object(r.Xb)(r.z))
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })(),
                        gt = (() => {
                            let t = class {
                                constructor(t, e, n, r) {
                                    this._moduleCFR = t, this._injector = e, this._modalStack = n, this._config = r
                                }
                                open(t, e = {}) {
                                    const n = Object.assign({}, this._config, e);
                                    return this._modalStack.open(this._moduleCFR, this._injector, t, n)
                                }
                                get activeInstances() {
                                    return this._modalStack.activeInstances
                                }
                                dismissAll(t) {
                                    this._modalStack.dismissAll(t)
                                }
                                hasOpenModals() {
                                    return this._modalStack.hasOpenModals()
                                }
                            };
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Xb(r.j), r.Xb(r.r), r.Xb(mt), r.Xb(ot))
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t(Object(r.Xb)(r.j), Object(r.Xb)(r.o), Object(r.Xb)(mt), Object(r.Xb)(ot))
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })(),
                        yt = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [gt]
                            }), t
                        })(),
                        bt = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        vt = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        _t = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        wt = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        St = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        Ct = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        Et = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        xt = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })(),
                        Ot = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })(),
                        kt = (() => {
                            let t = class {};
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                imports: [
                                    [s.b]
                                ]
                            }), t
                        })();
                    const Tt = [L, M, F, H, z, Q, it, yt, bt, vt, _t, wt, St, Et, xt, Ot, kt, Ct];
                    let jt = (() => {
                        let t = class {};
                        return t.\u0275mod = r.Ib({
                            type: t
                        }), t.\u0275inj = r.Hb({
                            factory: function (e) {
                                return new(e || t)
                            },
                            imports: [Tt, L, M, F, H, z, Q, it, yt, bt, vt, _t, wt, St, Et, xt, Ot, kt, Ct]
                        }), t
                    })()
                },
                "2QA8": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())()
                },
                "2Vo4": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("XNiG"),
                        s = n("9ppp");
                    class i extends r.a {
                        constructor(t) {
                            super(), this._value = t
                        }
                        get value() {
                            return this.getValue()
                        }
                        _subscribe(t) {
                            const e = super._subscribe(t);
                            return e && !e.closed && t.next(this._value), e
                        }
                        getValue() {
                            if (this.hasError) throw this.thrownError;
                            if (this.closed) throw new s.a;
                            return this._value
                        }
                        next(t) {
                            super.next(this._value = t)
                        }
                    }
                },
                "2fFW": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    let r = !1;
                    const s = {
                        Promise: void 0,
                        set useDeprecatedSynchronousErrorHandling(t) {
                            if (t) {
                                const t = new Error;
                                console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                            } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                            r = t
                        },
                        get useDeprecatedSynchronousErrorHandling() {
                            return r
                        }
                    }
                },
                "3N8a": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("quSY");
                    class s extends r.a {
                        constructor(t, e) {
                            super()
                        }
                        schedule(t, e = 0) {
                            return this
                        }
                    }
                    class i extends s {
                        constructor(t, e) {
                            super(t, e), this.scheduler = t, this.work = e, this.pending = !1
                        }
                        schedule(t, e = 0) {
                            if (this.closed) return this;
                            this.state = t;
                            const n = this.id,
                                r = this.scheduler;
                            return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                        }
                        requestAsyncId(t, e, n = 0) {
                            return setInterval(t.flush.bind(t, this), n)
                        }
                        recycleAsyncId(t, e, n = 0) {
                            if (null !== n && this.delay === n && !1 === this.pending) return e;
                            clearInterval(e)
                        }
                        execute(t, e) {
                            if (this.closed) return new Error("executing a cancelled action");
                            this.pending = !1;
                            const n = this._execute(t, e);
                            if (n) return n;
                            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                        }
                        _execute(t, e) {
                            let n = !1,
                                r = void 0;
                            try {
                                this.work(t)
                            } catch (s) {
                                n = !0, r = !!s && s || new Error(s)
                            }
                            if (n) return this.unsubscribe(), r
                        }
                        _unsubscribe() {
                            const t = this.id,
                                e = this.scheduler,
                                n = e.actions,
                                r = n.indexOf(this);
                            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                        }
                    }
                },
                "4I5i": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => {
                        function t() {
                            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                        }
                        return t.prototype = Object.create(Error.prototype), t
                    })()
                },
                "5+tZ": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return c
                    }));
                    var r = n("ZUHj"),
                        s = n("l7GE"),
                        i = n("51Dv"),
                        o = n("lJxs"),
                        a = n("Cfvw");

                    function c(t, e, n = Number.POSITIVE_INFINITY) {
                        return "function" == typeof e ? r => r.pipe(c((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))), n)) : ("number" == typeof e && (n = e), e => e.lift(new l(t, n)))
                    }
                    class l {
                        constructor(t, e = Number.POSITIVE_INFINITY) {
                            this.project = t, this.concurrent = e
                        }
                        call(t, e) {
                            return e.subscribe(new u(t, this.project, this.concurrent))
                        }
                    }
                    class u extends s.a {
                        constructor(t, e, n = Number.POSITIVE_INFINITY) {
                            super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                        }
                        _next(t) {
                            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                        }
                        _tryNext(t) {
                            let e;
                            const n = this.index++;
                            try {
                                e = this.project(t, n)
                            } catch (r) {
                                return void this.destination.error(r)
                            }
                            this.active++, this._innerSub(e, t, n)
                        }
                        _innerSub(t, e, n) {
                            const s = new i.a(this, e, n),
                                o = this.destination;
                            o.add(s);
                            const a = Object(r.a)(this, t, void 0, void 0, s);
                            a !== s && o.add(a)
                        }
                        _complete() {
                            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                        }
                        notifyNext(t, e, n, r, s) {
                            this.destination.next(e)
                        }
                        notifyComplete(t) {
                            const e = this.buffer;
                            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                        }
                    }
                },
                "51Dv": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("7o/Q");
                    class s extends r.a {
                        constructor(t, e, n) {
                            super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
                        }
                        _next(t) {
                            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                        }
                        _error(t) {
                            this.parent.notifyError(t, this), this.unsubscribe()
                        }
                        _complete() {
                            this.parent.notifyComplete(this), this.unsubscribe()
                        }
                    }
                },
                "6NWb": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return xt
                    })), n.d(e, "b", (function () {
                        return St
                    })), n.d(e, "c", (function () {
                        return Ot
                    }));
                    var r = n("fXoL");

                    function s(t) {
                        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function i(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function o(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            })))), r.forEach((function (e) {
                                i(t, e, n[e])
                            }))
                        }
                        return t
                    }

                    function a(t, e) {
                        return function (t) {
                            if (Array.isArray(t)) return t
                        }(t) || function (t, e) {
                            var n = [],
                                r = !0,
                                s = !1,
                                i = void 0;
                            try {
                                for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
                            } catch (c) {
                                s = !0, i = c
                            } finally {
                                try {
                                    r || null == a.return || a.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                            return n
                        }(t, e) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }
                    var c = {},
                        l = {};
                    try {
                        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && performance
                    } catch (kt) {}
                    var u = (c.navigator || {}).userAgent,
                        h = void 0 === u ? "" : u,
                        d = c,
                        f = l,
                        p = !!f.documentElement && !!f.head && "function" == typeof f.addEventListener && "function" == typeof f.createElement,
                        m = (~h.indexOf("MSIE") || h.indexOf("Trident/"), "svg-inline--fa"),
                        g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        y = g.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                        b = {
                            GROUP: "group",
                            SWAP_OPACITY: "swap-opacity",
                            PRIMARY: "primary",
                            SECONDARY: "secondary"
                        },
                        v = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", b.GROUP, b.SWAP_OPACITY, b.PRIMARY, b.SECONDARY].concat(g.map((function (t) {
                            return "".concat(t, "x")
                        }))).concat(y.map((function (t) {
                            return "w-".concat(t)
                        }))), d.FontAwesomeConfig || {});
                    f && "function" == typeof f.querySelector && [
                        ["data-family-prefix", "familyPrefix"],
                        ["data-replacement-class", "replacementClass"],
                        ["data-auto-replace-svg", "autoReplaceSvg"],
                        ["data-auto-add-css", "autoAddCss"],
                        ["data-auto-a11y", "autoA11y"],
                        ["data-search-pseudo-elements", "searchPseudoElements"],
                        ["data-observe-mutations", "observeMutations"],
                        ["data-mutate-approach", "mutateApproach"],
                        ["data-keep-original-source", "keepOriginalSource"],
                        ["data-measure-performance", "measurePerformance"],
                        ["data-show-missing-icons", "showMissingIcons"]
                    ].forEach((function (t) {
                        var e = a(t, 2),
                            n = e[1],
                            r = function (t) {
                                return "" === t || "false" !== t && ("true" === t || t)
                            }(function (t) {
                                var e = f.querySelector("script[" + t + "]");
                                if (e) return e.getAttribute(t)
                            }(e[0]));
                        null != r && (v[n] = r)
                    }));
                    var _ = o({}, {
                        familyPrefix: "fa",
                        replacementClass: m,
                        autoReplaceSvg: !0,
                        autoAddCss: !0,
                        autoA11y: !0,
                        searchPseudoElements: !1,
                        observeMutations: !0,
                        mutateApproach: "async",
                        keepOriginalSource: !0,
                        measurePerformance: !1,
                        showMissingIcons: !0
                    }, v);
                    _.autoReplaceSvg || (_.observeMutations = !1);
                    var w = o({}, _);
                    d.FontAwesomeConfig = w;
                    var S = d || {};
                    S.___FONT_AWESOME___ || (S.___FONT_AWESOME___ = {}), S.___FONT_AWESOME___.styles || (S.___FONT_AWESOME___.styles = {}), S.___FONT_AWESOME___.hooks || (S.___FONT_AWESOME___.hooks = {}), S.___FONT_AWESOME___.shims || (S.___FONT_AWESOME___.shims = []);
                    var C = S.___FONT_AWESOME___,
                        E = [];
                    p && ((f.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(f.readyState) || f.addEventListener("DOMContentLoaded", (function t() {
                        f.removeEventListener("DOMContentLoaded", t), E.map((function (t) {
                            return t()
                        }))
                    })));
                    var x, O = "pending",
                        k = "settled",
                        T = "fulfilled",
                        j = "rejected",
                        A = function () {},
                        I = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
                        P = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
                        N = [];

                    function R() {
                        for (var t = 0; t < N.length; t++) N[t][0](N[t][1]);
                        N = [], x = !1
                    }

                    function D(t, e) {
                        N.push([t, e]), x || (x = !0, P(R, 0))
                    }

                    function L(t) {
                        var e = t.owner,
                            n = e._state,
                            r = e._data,
                            s = t[n],
                            i = t.then;
                        if ("function" == typeof s) {
                            n = T;
                            try {
                                r = s(r)
                            } catch (kt) {
                                z(i, kt)
                            }
                        }
                        M(i, r) || (n === T && F(i, r), n === j && z(i, r))
                    }

                    function M(t, e) {
                        var n;
                        try {
                            if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                            if (e && ("function" == typeof e || "object" === s(e))) {
                                var r = e.then;
                                if ("function" == typeof r) return r.call(e, (function (r) {
                                    n || (n = !0, e === r ? H(t, r) : F(t, r))
                                }), (function (e) {
                                    n || (n = !0, z(t, e))
                                })), !0
                            }
                        } catch (kt) {
                            return n || z(t, kt), !0
                        }
                        return !1
                    }

                    function F(t, e) {
                        t !== e && M(t, e) || H(t, e)
                    }

                    function H(t, e) {
                        t._state === O && (t._state = k, t._data = e, D(V, t))
                    }

                    function z(t, e) {
                        t._state === O && (t._state = k, t._data = e, D($, t))
                    }

                    function U(t) {
                        t._then = t._then.forEach(L)
                    }

                    function V(t) {
                        t._state = T, U(t)
                    }

                    function $(t) {
                        t._state = j, U(t), !t._handled && I && global.process.emit("unhandledRejection", t._data, t)
                    }

                    function B(t) {
                        global.process.emit("rejectionHandled", t)
                    }

                    function q(t) {
                        if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
                        if (this instanceof q == 0) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                        this._then = [],
                            function (t, e) {
                                function n(t) {
                                    z(e, t)
                                }
                                try {
                                    t((function (t) {
                                        F(e, t)
                                    }), n)
                                } catch (kt) {
                                    n(kt)
                                }
                            }(t, this)
                    }
                    q.prototype = {
                        constructor: q,
                        _state: O,
                        _then: null,
                        _data: void 0,
                        _handled: !1,
                        then: function (t, e) {
                            var n = {
                                owner: this,
                                then: new this.constructor(A),
                                fulfilled: t,
                                rejected: e
                            };
                            return !e && !t || this._handled || (this._handled = !0, this._state === j && I && D(B, this)), this._state === T || this._state === j ? D(L, n) : this._then.push(n), n.then
                        },
                        catch: function (t) {
                            return this.then(null, t)
                        }
                    }, q.all = function (t) {
                        if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.all().");
                        return new q((function (e, n) {
                            var r = [],
                                s = 0;

                            function i(t) {
                                return s++,
                                    function (n) {
                                        r[t] = n, --s || e(r)
                                    }
                            }
                            for (var o, a = 0; a < t.length; a++)(o = t[a]) && "function" == typeof o.then ? o.then(i(a), n) : r[a] = o;
                            s || e(r)
                        }))
                    }, q.race = function (t) {
                        if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race().");
                        return new q((function (e, n) {
                            for (var r, s = 0; s < t.length; s++)(r = t[s]) && "function" == typeof r.then ? r.then(e, n) : e(r)
                        }))
                    }, q.resolve = function (t) {
                        return t && "object" === s(t) && t.constructor === q ? t : new q((function (e) {
                            e(t)
                        }))
                    }, q.reject = function (t) {
                        return new q((function (e, n) {
                            n(t)
                        }))
                    };
                    var K = {
                        size: 16,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        flipX: !1,
                        flipY: !1
                    };

                    function G() {
                        for (var t = 12, e = ""; t-- > 0;) e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                        return e
                    }

                    function W(t) {
                        return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }

                    function X(t) {
                        return Object.keys(t || {}).reduce((function (e, n) {
                            return e + "".concat(n, ": ").concat(t[n], ";")
                        }), "")
                    }

                    function Q(t) {
                        return t.size !== K.size || t.x !== K.x || t.y !== K.y || t.rotate !== K.rotate || t.flipX || t.flipY
                    }

                    function Z(t) {
                        var e = t.transform,
                            n = t.iconWidth,
                            r = {
                                transform: "translate(".concat(t.containerWidth / 2, " 256)")
                            },
                            s = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
                            i = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
                            o = "rotate(".concat(e.rotate, " 0 0)");
                        return {
                            outer: r,
                            inner: {
                                transform: "".concat(s, " ").concat(i, " ").concat(o)
                            },
                            path: {
                                transform: "translate(".concat(n / 2 * -1, " -256)")
                            }
                        }
                    }
                    var Y = {
                        x: 0,
                        y: 0,
                        width: "100%",
                        height: "100%"
                    };

                    function J(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t
                    }

                    function tt(t) {
                        var e = t.icons,
                            n = e.main,
                            r = e.mask,
                            s = t.prefix,
                            i = t.iconName,
                            a = t.transform,
                            c = t.symbol,
                            l = t.title,
                            u = t.maskId,
                            h = t.titleId,
                            d = t.extra,
                            f = t.watchable,
                            p = void 0 !== f && f,
                            m = r.found ? r : n,
                            g = m.width,
                            y = m.height,
                            b = "fa-w-".concat(Math.ceil(g / y * 16)),
                            v = [w.replacementClass, i ? "".concat(w.familyPrefix, "-").concat(i) : "", b].filter((function (t) {
                                return -1 === d.classes.indexOf(t)
                            })).concat(d.classes).join(" "),
                            _ = {
                                children: [],
                                attributes: o({}, d.attributes, {
                                    "data-prefix": s,
                                    "data-icon": i,
                                    class: v,
                                    role: d.attributes.role || "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 ".concat(g, " ").concat(y)
                                })
                            };
                        p && (_.attributes["data-fa-i2svg"] = ""), l && _.children.push({
                            tag: "title",
                            attributes: {
                                id: _.attributes["aria-labelledby"] || "title-".concat(h || G())
                            },
                            children: [l]
                        });
                        var S = o({}, _, {
                                prefix: s,
                                iconName: i,
                                main: n,
                                mask: r,
                                maskId: u,
                                transform: a,
                                symbol: c,
                                styles: d.styles
                            }),
                            C = r.found && n.found ? function (t) {
                                var e, n = t.children,
                                    r = t.attributes,
                                    s = t.main,
                                    i = t.mask,
                                    a = t.maskId,
                                    c = s.icon,
                                    l = i.icon,
                                    u = Z({
                                        transform: t.transform,
                                        containerWidth: i.width,
                                        iconWidth: s.width
                                    }),
                                    h = {
                                        tag: "rect",
                                        attributes: o({}, Y, {
                                            fill: "white"
                                        })
                                    },
                                    d = c.children ? {
                                        children: c.children.map(J)
                                    } : {},
                                    f = {
                                        tag: "g",
                                        attributes: o({}, u.inner),
                                        children: [J(o({
                                            tag: c.tag,
                                            attributes: o({}, c.attributes, u.path)
                                        }, d))]
                                    },
                                    p = {
                                        tag: "g",
                                        attributes: o({}, u.outer),
                                        children: [f]
                                    },
                                    m = "mask-".concat(a || G()),
                                    g = "clip-".concat(a || G()),
                                    y = {
                                        tag: "mask",
                                        attributes: o({}, Y, {
                                            id: m,
                                            maskUnits: "userSpaceOnUse",
                                            maskContentUnits: "userSpaceOnUse"
                                        }),
                                        children: [h, p]
                                    },
                                    b = {
                                        tag: "defs",
                                        children: [{
                                            tag: "clipPath",
                                            attributes: {
                                                id: g
                                            },
                                            children: (e = l, "g" === e.tag ? e.children : [e])
                                        }, y]
                                    };
                                return n.push(b, {
                                    tag: "rect",
                                    attributes: o({
                                        fill: "currentColor",
                                        "clip-path": "url(#".concat(g, ")"),
                                        mask: "url(#".concat(m, ")")
                                    }, Y)
                                }), {
                                    children: n,
                                    attributes: r
                                }
                            }(S) : function (t) {
                                var e = t.children,
                                    n = t.attributes,
                                    r = t.main,
                                    s = t.transform,
                                    i = X(t.styles);
                                if (i.length > 0 && (n.style = i), Q(s)) {
                                    var a = Z({
                                        transform: s,
                                        containerWidth: r.width,
                                        iconWidth: r.width
                                    });
                                    e.push({
                                        tag: "g",
                                        attributes: o({}, a.outer),
                                        children: [{
                                            tag: "g",
                                            attributes: o({}, a.inner),
                                            children: [{
                                                tag: r.icon.tag,
                                                children: r.icon.children,
                                                attributes: o({}, r.icon.attributes, a.path)
                                            }]
                                        }]
                                    })
                                } else e.push(r.icon);
                                return {
                                    children: e,
                                    attributes: n
                                }
                            }(S),
                            E = C.attributes;
                        return S.children = C.children, S.attributes = E, c ? function (t) {
                            var e = t.iconName,
                                n = t.children,
                                r = t.symbol;
                            return [{
                                tag: "svg",
                                attributes: {
                                    style: "display: none;"
                                },
                                children: [{
                                    tag: "symbol",
                                    attributes: o({}, t.attributes, {
                                        id: !0 === r ? "".concat(t.prefix, "-").concat(w.familyPrefix, "-").concat(e) : r
                                    }),
                                    children: n
                                }]
                            }]
                        }(S) : function (t) {
                            var e = t.children,
                                n = t.main,
                                r = t.mask,
                                s = t.attributes,
                                i = t.styles,
                                a = t.transform;
                            if (Q(a) && n.found && !r.found) {
                                var c = {
                                    x: n.width / n.height / 2,
                                    y: .5
                                };
                                s.style = X(o({}, i, {
                                    "transform-origin": "".concat(c.x + a.x / 16, "em ").concat(c.y + a.y / 16, "em")
                                }))
                            }
                            return [{
                                tag: "svg",
                                attributes: s,
                                children: e
                            }]
                        }(S)
                    }
                    var et = function (t, e, n, r) {
                        var s, i, o, a = Object.keys(t),
                            c = a.length,
                            l = void 0 !== r ? function (t, e) {
                                return function (n, r, s, i) {
                                    return t.call(e, n, r, s, i)
                                }
                            }(e, r) : e;
                        for (void 0 === n ? (s = 1, o = t[a[0]]) : (s = 0, o = n); s < c; s++) o = l(o, t[i = a[s]], i, t);
                        return o
                    };

                    function nt(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = n.skipHooks,
                            s = void 0 !== r && r,
                            i = Object.keys(e).reduce((function (t, n) {
                                var r = e[n];
                                return r.icon ? t[r.iconName] = r.icon : t[n] = r, t
                            }), {});
                        "function" != typeof C.hooks.addPack || s ? C.styles[t] = o({}, C.styles[t] || {}, i) : C.hooks.addPack(t, i), "fas" === t && nt("fa", e)
                    }
                    var rt = C.styles,
                        st = C.shims,
                        it = function () {
                            var t = function (t) {
                                return et(rt, (function (e, n, r) {
                                    return e[r] = et(n, t, {}), e
                                }), {})
                            };
                            t((function (t, e, n) {
                                return e[3] && (t[e[3]] = n), t
                            })), t((function (t, e, n) {
                                var r = e[2];
                                return t[n] = n, r.forEach((function (e) {
                                    t[e] = n
                                })), t
                            }));
                            var e = "far" in rt;
                            et(st, (function (t, n) {
                                var r = n[1];
                                return "far" !== r || e || (r = "fas"), t[n[0]] = {
                                    prefix: r,
                                    iconName: n[2]
                                }, t
                            }), {})
                        };

                    function ot(t, e, n) {
                        if (t && t[e] && t[e][n]) return {
                            prefix: e,
                            iconName: n,
                            icon: t[e][n]
                        }
                    }

                    function at(t) {
                        var e = t.tag,
                            n = t.attributes,
                            r = void 0 === n ? {} : n,
                            s = t.children,
                            i = void 0 === s ? [] : s;
                        return "string" == typeof t ? W(t) : "<".concat(e, " ").concat(function (t) {
                            return Object.keys(t || {}).reduce((function (e, n) {
                                return e + "".concat(n, '="').concat(W(t[n]), '" ')
                            }), "").trim()
                        }(r), ">").concat(i.map(at).join(""), "</").concat(e, ">")
                    }

                    function ct(t) {
                        this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
                    }
                    it(), (ct.prototype = Object.create(Error.prototype)).constructor = ct;
                    var lt = {
                            fill: "currentColor"
                        },
                        ut = {
                            attributeType: "XML",
                            repeatCount: "indefinite",
                            dur: "2s"
                        },
                        ht = (o({}, lt, {
                            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        }), o({}, ut, {
                            attributeName: "opacity"
                        }));

                    function dt(t) {
                        var e = t[0],
                            n = t[1],
                            r = a(t.slice(4), 1)[0];
                        return {
                            found: !0,
                            width: e,
                            height: n,
                            icon: Array.isArray(r) ? {
                                tag: "g",
                                attributes: {
                                    class: "".concat(w.familyPrefix, "-").concat(b.GROUP)
                                },
                                children: [{
                                    tag: "path",
                                    attributes: {
                                        class: "".concat(w.familyPrefix, "-").concat(b.SECONDARY),
                                        fill: "currentColor",
                                        d: r[0]
                                    }
                                }, {
                                    tag: "path",
                                    attributes: {
                                        class: "".concat(w.familyPrefix, "-").concat(b.PRIMARY),
                                        fill: "currentColor",
                                        d: r[1]
                                    }
                                }]
                            } : {
                                tag: "path",
                                attributes: {
                                    fill: "currentColor",
                                    d: r
                                }
                            }
                        }
                    }

                    function ft() {
                        w.autoAddCss && !bt && (function (t) {
                            if (t && p) {
                                var e = f.createElement("style");
                                e.setAttribute("type", "text/css"), e.innerHTML = t;
                                for (var n = f.head.childNodes, r = null, s = n.length - 1; s > -1; s--) {
                                    var i = n[s],
                                        o = (i.tagName || "").toUpperCase();
                                    ["STYLE", "LINK"].indexOf(o) > -1 && (r = i)
                                }
                                f.head.insertBefore(e, r)
                            }
                        }(function () {
                            var t = "fa",
                                e = m,
                                n = w.familyPrefix,
                                r = w.replacementClass,
                                s = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
                            if (n !== t || r !== e) {
                                var i = new RegExp("\\.".concat(t, "\\-"), "g"),
                                    o = new RegExp("\\--".concat(t, "\\-"), "g"),
                                    a = new RegExp("\\.".concat(e), "g");
                                s = s.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(r))
                            }
                            return s
                        }()), bt = !0)
                    }

                    function pt(t, e) {
                        return Object.defineProperty(t, "abstract", {
                            get: e
                        }), Object.defineProperty(t, "html", {
                            get: function () {
                                return t.abstract.map((function (t) {
                                    return at(t)
                                }))
                            }
                        }), Object.defineProperty(t, "node", {
                            get: function () {
                                if (p) {
                                    var e = f.createElement("div");
                                    return e.innerHTML = t.html, e.children
                                }
                            }
                        }), t
                    }

                    function mt(t) {
                        var e = t.prefix,
                            n = void 0 === e ? "fa" : e,
                            r = t.iconName;
                        if (r) return ot(yt.definitions, n, r) || ot(C.styles, n, r)
                    }
                    o({}, lt, {
                        cx: "256",
                        cy: "364",
                        r: "28"
                    }), o({}, ut, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    }), o({}, ht, {
                        values: "1;0;1;1;0;1;"
                    }), o({}, lt, {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                    }), o({}, ht, {
                        values: "1;0;0;0;0;1;"
                    }), o({}, lt, {
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                    }), o({}, ht, {
                        values: "0;0;1;1;0;0;"
                    });
                    var gt, yt = new(function () {
                            function t() {
                                ! function (t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.definitions = {}
                            }
                            var e;
                            return (e = [{
                                key: "add",
                                value: function () {
                                    for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    var s = n.reduce(this._pullDefinitions, {});
                                    Object.keys(s).forEach((function (e) {
                                        t.definitions[e] = o({}, t.definitions[e] || {}, s[e]), nt(e, s[e]), it()
                                    }))
                                }
                            }, {
                                key: "reset",
                                value: function () {
                                    this.definitions = {}
                                }
                            }, {
                                key: "_pullDefinitions",
                                value: function (t, e) {
                                    var n = e.prefix && e.iconName && e.icon ? {
                                        0: e
                                    } : e;
                                    return Object.keys(n).map((function (e) {
                                        var r = n[e],
                                            s = r.prefix,
                                            i = r.iconName,
                                            o = r.icon;
                                        t[s] || (t[s] = {}), t[s][i] = o
                                    })), t
                                }
                            }]) && function (t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }(t.prototype, e), t
                        }()),
                        bt = !1,
                        vt = (gt = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.transform,
                                r = void 0 === n ? K : n,
                                s = e.symbol,
                                i = void 0 !== s && s,
                                a = e.mask,
                                c = void 0 === a ? null : a,
                                l = e.maskId,
                                u = void 0 === l ? null : l,
                                h = e.title,
                                d = void 0 === h ? null : h,
                                f = e.titleId,
                                p = void 0 === f ? null : f,
                                m = e.classes,
                                g = void 0 === m ? [] : m,
                                y = e.attributes,
                                b = void 0 === y ? {} : y,
                                v = e.styles,
                                _ = void 0 === v ? {} : v;
                            if (t) {
                                var S = t.prefix,
                                    C = t.iconName,
                                    E = t.icon;
                                return pt(o({
                                    type: "icon"
                                }, t), (function () {
                                    return ft(), w.autoA11y && (d ? b["aria-labelledby"] = "".concat(w.replacementClass, "-title-").concat(p || G()) : (b["aria-hidden"] = "true", b.focusable = "false")), tt({
                                        icons: {
                                            main: dt(E),
                                            mask: c ? dt(c.icon) : {
                                                found: !1,
                                                width: null,
                                                height: null,
                                                icon: {}
                                            }
                                        },
                                        prefix: S,
                                        iconName: C,
                                        transform: o({}, K, r),
                                        symbol: i,
                                        title: d,
                                        maskId: u,
                                        titleId: p,
                                        extra: {
                                            attributes: b,
                                            styles: _,
                                            classes: g
                                        }
                                    })
                                }))
                            }
                        }, function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (t || {}).icon ? t : mt(t || {}),
                                r = e.mask;
                            return r && (r = (r || {}).icon ? r : mt(r || {})), gt(n, o({}, e, {
                                mask: r
                            }))
                        }),
                        _t = n("jhN1");
                    let wt = (() => {
                            class t {
                                constructor() {
                                    this.defaultPrefix = "fas", this.fallbackIcon = null, this.globalLibrary = !1
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })(),
                        St = (() => {
                            class t {
                                constructor() {
                                    this.definitions = {}
                                }
                                addIcons(...t) {
                                    for (const e of t) e.prefix in this.definitions || (this.definitions[e.prefix] = {}), this.definitions[e.prefix][e.iconName] = e
                                }
                                addIconPacks(...t) {
                                    for (const e of t) {
                                        const t = Object.keys(e).map(t => e[t]);
                                        this.addIcons(...t)
                                    }
                                }
                                getIconDefinition(t, e) {
                                    return t in this.definitions && e in this.definitions[t] ? this.definitions[t][e] : null
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = Object(r.Gb)({
                                factory: function () {
                                    return new t
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })();
                    const Ct = t => {
                        const e = {
                            "fa-spin": t.spin,
                            "fa-pulse": t.pulse,
                            "fa-fw": t.fixedWidth,
                            "fa-border": t.border,
                            "fa-inverse": t.inverse,
                            "fa-layers-counter": t.counter,
                            "fa-flip-horizontal": "horizontal" === t.flip || "both" === t.flip,
                            "fa-flip-vertical": "vertical" === t.flip || "both" === t.flip,
                            ["fa-" + t.size]: null !== t.size,
                            ["fa-rotate-" + t.rotate]: null !== t.rotate,
                            ["fa-pull-" + t.pull]: null !== t.pull,
                            ["fa-stack-" + t.stackItemSize]: null != t.stackItemSize
                        };
                        return Object.keys(e).map(t => e[t] ? t : null).filter(t => t)
                    };
                    let Et = (() => {
                            class t {
                                constructor() {
                                    this.stackItemSize = "1x"
                                }
                                ngOnChanges(t) {
                                    if ("size" in t) throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275dir = r.Fb({
                                type: t,
                                selectors: [
                                    ["fa-icon", "stackItemSize", ""],
                                    ["fa-duotone-icon", "stackItemSize", ""]
                                ],
                                inputs: {
                                    stackItemSize: "stackItemSize",
                                    size: "size"
                                },
                                features: [r.vb]
                            }), t
                        })(),
                        xt = (() => {
                            class t {
                                constructor(t, e, n, r) {
                                    this.sanitizer = t, this.config = e, this.iconLibrary = n, this.stackItem = r, this.classes = []
                                }
                                ngOnChanges(t) {
                                    if (null == this.icon && null == this.config.fallbackIcon) return (() => {
                                        throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")
                                    })();
                                    let e = null;
                                    if (e = null == this.icon ? this.config.fallbackIcon : this.icon, t) {
                                        const t = this.findIconDefinition(e);
                                        if (null != t) {
                                            const e = this.buildParams();
                                            this.renderIcon(t, e)
                                        }
                                    }
                                }
                                render() {
                                    this.ngOnChanges({})
                                }
                                findIconDefinition(t) {
                                    const e = ((t, e) => {
                                        return void 0 !== (n = t).prefix && void 0 !== n.iconName ? t : Array.isArray(t) && 2 === t.length ? {
                                            prefix: t[0],
                                            iconName: t[1]
                                        } : "string" == typeof t ? {
                                            prefix: e,
                                            iconName: t
                                        } : void 0;
                                        var n
                                    })(t, this.config.defaultPrefix);
                                    if ("icon" in e) return e;
                                    const n = this.iconLibrary.getIconDefinition(e.prefix, e.iconName);
                                    if (null != n) return n;
                                    const r = mt(e);
                                    if (null != r) {
                                        const t = "Global icon library is deprecated. Consult https://github.com/FortAwesome/angular-fontawesome/blob/master/UPGRADING.md for the migration instructions.";
                                        if ("unset" === this.config.globalLibrary) console.error("FontAwesome: " + t);
                                        else if (!this.config.globalLibrary) throw new Error(t);
                                        return r
                                    }
                                    return (t => {
                                        throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)
                                    })(e), null
                                }
                                buildParams() {
                                    const t = {
                                            flip: this.flip,
                                            spin: this.spin,
                                            pulse: this.pulse,
                                            border: this.border,
                                            inverse: this.inverse,
                                            size: this.size || null,
                                            pull: this.pull || null,
                                            rotate: this.rotate || null,
                                            fixedWidth: "boolean" == typeof this.fixedWidth ? this.fixedWidth : this.config.fixedWidth,
                                            stackItemSize: null != this.stackItem ? this.stackItem.stackItemSize : null
                                        },
                                        e = "string" == typeof this.transform ? function (t) {
                                            var e = {
                                                size: 16,
                                                x: 0,
                                                y: 0,
                                                flipX: !1,
                                                flipY: !1,
                                                rotate: 0
                                            };
                                            return t ? t.toLowerCase().split(" ").reduce((function (t, e) {
                                                var n = e.toLowerCase().split("-"),
                                                    r = n[0],
                                                    s = n.slice(1).join("-");
                                                if (r && "h" === s) return t.flipX = !0, t;
                                                if (r && "v" === s) return t.flipY = !0, t;
                                                if (s = parseFloat(s), isNaN(s)) return t;
                                                switch (r) {
                                                    case "grow":
                                                        t.size = t.size + s;
                                                        break;
                                                    case "shrink":
                                                        t.size = t.size - s;
                                                        break;
                                                    case "left":
                                                        t.x = t.x - s;
                                                        break;
                                                    case "right":
                                                        t.x = t.x + s;
                                                        break;
                                                    case "up":
                                                        t.y = t.y - s;
                                                        break;
                                                    case "down":
                                                        t.y = t.y + s;
                                                        break;
                                                    case "rotate":
                                                        t.rotate = t.rotate + s
                                                }
                                                return t
                                            }), e) : e
                                        }(this.transform) : this.transform;
                                    return {
                                        title: this.title,
                                        transform: e,
                                        classes: [...Ct(t), ...this.classes],
                                        mask: null != this.mask ? this.findIconDefinition(this.mask) : null,
                                        styles: null != this.styles ? this.styles : {},
                                        symbol: this.symbol,
                                        attributes: {
                                            role: this.a11yRole
                                        }
                                    }
                                }
                                renderIcon(t, e) {
                                    const n = vt(t, e);
                                    this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(n.html.join("\n"))
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Kb(_t.b), r.Kb(wt), r.Kb(St), r.Kb(Et, 8))
                            }, t.\u0275cmp = r.Eb({
                                type: t,
                                selectors: [
                                    ["fa-icon"]
                                ],
                                hostAttrs: [1, "ng-fa-icon"],
                                hostVars: 2,
                                hostBindings: function (t, e) {
                                    2 & t && (r.Sb("innerHTML", e.renderedIconHTML, r.tc), r.yb("title", e.title))
                                },
                                inputs: {
                                    classes: "classes",
                                    icon: "icon",
                                    title: "title",
                                    spin: "spin",
                                    pulse: "pulse",
                                    mask: "mask",
                                    styles: "styles",
                                    flip: "flip",
                                    size: "size",
                                    pull: "pull",
                                    border: "border",
                                    inverse: "inverse",
                                    symbol: "symbol",
                                    rotate: "rotate",
                                    fixedWidth: "fixedWidth",
                                    transform: "transform",
                                    a11yRole: "a11yRole"
                                },
                                features: [r.vb],
                                decls: 0,
                                vars: 0,
                                template: function (t, e) {},
                                encapsulation: 2
                            }), t
                        })(),
                        Ot = (() => {
                            class t {}
                            return t.\u0275mod = r.Ib({
                                type: t
                            }), t.\u0275inj = r.Hb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })()
                },
                "7o/Q": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return l
                    }));
                    var r = n("n6bG"),
                        s = n("gRHU"),
                        i = n("quSY"),
                        o = n("2QA8"),
                        a = n("2fFW"),
                        c = n("NJ4a");
                    class l extends i.a {
                        constructor(t, e, n) {
                            switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                                case 0:
                                    this.destination = s.a;
                                    break;
                                case 1:
                                    if (!t) {
                                        this.destination = s.a;
                                        break
                                    }
                                    if ("object" == typeof t) {
                                        t instanceof l ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, t));
                                        break
                                    }
                                    default:
                                        this.syncErrorThrowable = !0, this.destination = new u(this, t, e, n)
                            }
                        } [o.a]() {
                            return this
                        }
                        static create(t, e, n) {
                            const r = new l(t, e, n);
                            return r.syncErrorThrowable = !1, r
                        }
                        next(t) {
                            this.isStopped || this._next(t)
                        }
                        error(t) {
                            this.isStopped || (this.isStopped = !0, this._error(t))
                        }
                        complete() {
                            this.isStopped || (this.isStopped = !0, this._complete())
                        }
                        unsubscribe() {
                            this.closed || (this.isStopped = !0, super.unsubscribe())
                        }
                        _next(t) {
                            this.destination.next(t)
                        }
                        _error(t) {
                            this.destination.error(t), this.unsubscribe()
                        }
                        _complete() {
                            this.destination.complete(), this.unsubscribe()
                        }
                        _unsubscribeAndRecycle() {
                            const {
                                _parentOrParents: t
                            } = this;
                            return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                        }
                    }
                    class u extends l {
                        constructor(t, e, n, i) {
                            let o;
                            super(), this._parentSubscriber = t;
                            let a = this;
                            Object(r.a)(e) ? o = e : e && (o = e.next, n = e.error, i = e.complete, e !== s.a && (a = Object.create(e), Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = o, this._error = n, this._complete = i
                        }
                        next(t) {
                            if (!this.isStopped && this._next) {
                                const {
                                    _parentSubscriber: e
                                } = this;
                                a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                            }
                        }
                        error(t) {
                            if (!this.isStopped) {
                                const {
                                    _parentSubscriber: e
                                } = this, {
                                    useDeprecatedSynchronousErrorHandling: n
                                } = a.a;
                                if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                                else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(c.a)(t), this.unsubscribe();
                                else {
                                    if (this.unsubscribe(), n) throw t;
                                    Object(c.a)(t)
                                }
                            }
                        }
                        complete() {
                            if (!this.isStopped) {
                                const {
                                    _parentSubscriber: t
                                } = this;
                                if (this._complete) {
                                    const e = () => this._complete.call(this._context);
                                    a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
                                } else this.unsubscribe()
                            }
                        }
                        __tryOrUnsub(t, e) {
                            try {
                                t.call(this._context, e)
                            } catch (n) {
                                if (this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling) throw n;
                                Object(c.a)(n)
                            }
                        }
                        __tryOrSetError(t, e, n) {
                            if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                            try {
                                e.call(this._context, n)
                            } catch (r) {
                                return a.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (Object(c.a)(r), !0)
                            }
                            return !1
                        }
                        _unsubscribe() {
                            const {
                                _parentSubscriber: t
                            } = this;
                            this._context = null, this._parentSubscriber = null, t.unsubscribe()
                        }
                    }
                },
                "9ppp": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => {
                        function t() {
                            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                        }
                        return t.prototype = Object.create(Error.prototype), t
                    })()
                },
                AytR: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = {
                        production: !0,
                        languages: ["EN", "DE"],
                        chatWithHuman: "https://t.me/TeamUnifund",
                        socialLinks: [{
                            text: "",
                            icon: "telegram",
                            url: "https://t.me/UnifundGlobal"
                        }, {
                            text: "",
                            icon: "twitter",
                            url: "https://twitter.com/UnifundGlobal"
                        }, {
                            text: "",
                            icon: "medium",
                            url: "https://medium.com/@unifundGlobal"
                        }],
                        announcement: {
                            intro: "TRADING_COMPETITION.INTRO",
                            title: "TRADING_COMPETITION.TITLE",
                            subtitle: "TRADING_COMPETITION.SUB",
                            description: "TRADING_COMPETITION.DESCRIPTION",
                            action: "REGISTER",
                            link: "https://bit.ly/ifundrsvp"
                        },
                        appUrl: "https://app.unifund.global/",
                        landingUrl: "/",
                        tokenAddress: "https://bit.ly/myIFUND",
                        tokenDistribution: [{
                            category: "MARKETING",
                            value: 5
                        }, {
                            category: "CONTEST",
                            value: 10
                        }, {
                            category: "STAKING_POOL",
                            value: 10
                        }, {
                            category: "UNISWAP_LIQUIDITY_LOCK",
                            value: 20
                        }, {
                            category: "TEAM_ALLOCATION",
                            value: 15
                        }, {
                            category: "PRE_SALE",
                            value: 40
                        }],
                        quickActions: {
                            create: "https://app.unifund.global/#/group",
                            join: "https://app.unifund.global/#/",
                            stake: "https://app.unifund.global/#/staking"
                        },
                        tutorials: {
                            forInvestors: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                            forManagers: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                        },
                        topNav: {
                            getStarted: {
                                header: "START_HERE",
                                links: [{
                                    display: "THE_PROJECT",
                                    value: "project",
                                    external: !1
                                }, {
                                    display: "FAQ",
                                    value: "faq",
                                    external: !1
                                }]
                            },
                            token: {
                                header: "TOKEN",
                                links: [{
                                    display: "GET_TOKEN",
                                    value: "https://app.uniswap.org/#/swap?outputCurrency=0x04b5e13000c6e9a3255dc057091f3e3eeee7b0f0",
                                    external: !0
                                }, {
                                    display: "HIGH_YIELD_STAKING",
                                    value: "https://bit.ly/StakingIFUND",
                                    external: !0
                                }, {
                                    display: "TOKENOMICS",
                                    value: "tokenomics",
                                    external: !1
                                }, {
                                    display: "EXPLORE_CONTRACT",
                                    value: "https://etherscan.io/address/0x04b5e13000c6e9a3255dc057091f3e3eeee7b0f0",
                                    external: !0
                                }]
                            },
                            community: {
                                header: "COMMUNITY",
                                links: [{
                                    display: "ANNOUNCEMENTS",
                                    value: "https://t.me/UNIFUNDANN",
                                    external: !0
                                }, {
                                    display: "TWITTER",
                                    value: "https://twitter.com/UnifundGlobal",
                                    external: !0
                                }, {
                                    display: "TELEGRAM",
                                    value: "https://t.me/UnifundGlobal",
                                    external: !0
                                }, {
                                    display: "MEDIUM",
                                    value: "https://medium.com/@unifundGlobal",
                                    external: !0
                                }]
                            },
                            development: {
                                header: "DEVELOPMENT",
                                links: [{
                                    display: "ROADMAP",
                                    value: "landing",
                                    external: !1
                                }, {
                                    display: "WHITEPAPER",
                                    value: "/assets/docs/UnipumpWPv1.pdf",
                                    external: !0
                                }, {
                                    display: "AUDIT",
                                    value: "/assets/docs/audit.pdf",
                                    external: !0
                                }]
                            }
                        }
                    }
                },
                Cfvw: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return h
                    }));
                    var r = n("HDdC"),
                        s = n("SeVD"),
                        i = n("quSY"),
                        o = n("kJWO"),
                        a = n("jZKg"),
                        c = n("Lhse"),
                        l = n("c2HN"),
                        u = n("I55L");

                    function h(t, e) {
                        return e ? function (t, e) {
                            if (null != t) {
                                if (function (t) {
                                        return t && "function" == typeof t[o.a]
                                    }(t)) return function (t, e) {
                                    return new r.a(n => {
                                        const r = new i.a;
                                        return r.add(e.schedule(() => {
                                            const s = t[o.a]();
                                            r.add(s.subscribe({
                                                next(t) {
                                                    r.add(e.schedule(() => n.next(t)))
                                                },
                                                error(t) {
                                                    r.add(e.schedule(() => n.error(t)))
                                                },
                                                complete() {
                                                    r.add(e.schedule(() => n.complete()))
                                                }
                                            }))
                                        })), r
                                    })
                                }(t, e);
                                if (Object(l.a)(t)) return function (t, e) {
                                    return new r.a(n => {
                                        const r = new i.a;
                                        return r.add(e.schedule(() => t.then(t => {
                                            r.add(e.schedule(() => {
                                                n.next(t), r.add(e.schedule(() => n.complete()))
                                            }))
                                        }, t => {
                                            r.add(e.schedule(() => n.error(t)))
                                        }))), r
                                    })
                                }(t, e);
                                if (Object(u.a)(t)) return Object(a.a)(t, e);
                                if (function (t) {
                                        return t && "function" == typeof t[c.a]
                                    }(t) || "string" == typeof t) return function (t, e) {
                                    if (!t) throw new Error("Iterable cannot be null");
                                    return new r.a(n => {
                                        const r = new i.a;
                                        let s;
                                        return r.add(() => {
                                            s && "function" == typeof s.return && s.return()
                                        }), r.add(e.schedule(() => {
                                            s = t[c.a](), r.add(e.schedule((function () {
                                                if (n.closed) return;
                                                let t, e;
                                                try {
                                                    const n = s.next();
                                                    t = n.value, e = n.done
                                                } catch (r) {
                                                    return void n.error(r)
                                                }
                                                e ? n.complete() : (n.next(t), this.schedule())
                                            })))
                                        })), r
                                    })
                                }(t, e)
                            }
                            throw new TypeError((null !== t && typeof t || t) + " is not observable")
                        }(t, e) : t instanceof r.a ? t : new r.a(Object(s.a)(t))
                    }
                },
                D0XW: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("3N8a");
                    const s = new(n("IjjT").a)(r.a)
                },
                DH7j: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => Array.isArray || (t => t && "number" == typeof t.length))()
                },
                EY2u: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    })), n.d(e, "b", (function () {
                        return i
                    }));
                    var r = n("HDdC");
                    const s = new r.a(t => t.complete());

                    function i(t) {
                        return t ? function (t) {
                            return new r.a(e => t.schedule(() => e.complete()))
                        }(t) : s
                    }
                },
                GyhO: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("LRne"),
                        s = n("0EUg");

                    function i(...t) {
                        return Object(s.a)()(Object(r.a)(...t))
                    }
                },
                HDdC: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return l
                    }));
                    var r = n("7o/Q"),
                        s = n("2QA8"),
                        i = n("gRHU"),
                        o = n("kJWO"),
                        a = n("SpAZ"),
                        c = n("2fFW");
                    let l = (() => {
                        class t {
                            constructor(t) {
                                this._isScalar = !1, t && (this._subscribe = t)
                            }
                            lift(e) {
                                const n = new t;
                                return n.source = this, n.operator = e, n
                            }
                            subscribe(t, e, n) {
                                const {
                                    operator: o
                                } = this, a = function (t, e, n) {
                                    if (t) {
                                        if (t instanceof r.a) return t;
                                        if (t[s.a]) return t[s.a]()
                                    }
                                    return t || e || n ? new r.a(t, e, n) : new r.a(i.a)
                                }(t, e, n);
                                if (a.add(o ? o.call(a, this.source) : this.source || c.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable ? this._subscribe(a) : this._trySubscribe(a)), c.a.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable && (a.syncErrorThrowable = !1, a.syncErrorThrown)) throw a.syncErrorValue;
                                return a
                            }
                            _trySubscribe(t) {
                                try {
                                    return this._subscribe(t)
                                } catch (e) {
                                    c.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                                        function (t) {
                                            for (; t;) {
                                                const {
                                                    closed: e,
                                                    destination: n,
                                                    isStopped: s
                                                } = t;
                                                if (e || s) return !1;
                                                t = n && n instanceof r.a ? n : null
                                            }
                                            return !0
                                        }(t) ? t.error(e) : console.warn(e)
                                }
                            }
                            forEach(t, e) {
                                return new(e = u(e))((e, n) => {
                                    let r;
                                    r = this.subscribe(e => {
                                        try {
                                            t(e)
                                        } catch (s) {
                                            n(s), r && r.unsubscribe()
                                        }
                                    }, n, e)
                                })
                            }
                            _subscribe(t) {
                                const {
                                    source: e
                                } = this;
                                return e && e.subscribe(t)
                            } [o.a]() {
                                return this
                            }
                            pipe(...t) {
                                return 0 === t.length ? this : (0 === (e = t).length ? a.a : 1 === e.length ? e[0] : function (t) {
                                    return e.reduce((t, e) => e(t), t)
                                })(this);
                                var e
                            }
                            toPromise(t) {
                                return new(t = u(t))((t, e) => {
                                    let n;
                                    this.subscribe(t => n = t, t => e(t), () => t(n))
                                })
                            }
                        }
                        return t.create = e => new t(e), t
                    })();

                    function u(t) {
                        if (t || (t = c.a.Promise || Promise), !t) throw new Error("no Promise impl found");
                        return t
                    }
                },
                I55L: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = t => t && "number" == typeof t.length && "function" != typeof t
                },
                IjjT: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    let r = (() => {
                        class t {
                            constructor(e, n = t.now) {
                                this.SchedulerAction = e, this.now = n
                            }
                            schedule(t, e = 0, n) {
                                return new this.SchedulerAction(this, t).schedule(n, e)
                            }
                        }
                        return t.now = () => Date.now(), t
                    })();
                    class s extends r {
                        constructor(t, e = r.now) {
                            super(t, () => s.delegate && s.delegate !== this ? s.delegate.now() : e()), this.actions = [], this.active = !1, this.scheduled = void 0
                        }
                        schedule(t, e = 0, n) {
                            return s.delegate && s.delegate !== this ? s.delegate.schedule(t, e, n) : super.schedule(t, e, n)
                        }
                        flush(t) {
                            const {
                                actions: e
                            } = this;
                            if (this.active) return void e.push(t);
                            let n;
                            this.active = !0;
                            do {
                                if (n = t.execute(t.state, t.delay)) break
                            } while (t = e.shift());
                            if (this.active = !1, n) {
                                for (; t = e.shift();) t.unsubscribe();
                                throw n
                            }
                        }
                    }
                },
                IzEk: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("7o/Q"),
                        s = n("4I5i"),
                        i = n("EY2u");

                    function o(t) {
                        return e => 0 === t ? Object(i.b)() : e.lift(new a(t))
                    }
                    class a {
                        constructor(t) {
                            if (this.total = t, this.total < 0) throw new s.a
                        }
                        call(t, e) {
                            return e.subscribe(new c(t, this.total))
                        }
                    }
                    class c extends r.a {
                        constructor(t, e) {
                            super(t), this.total = e, this.count = 0
                        }
                        _next(t) {
                            const e = this.total,
                                n = ++this.count;
                            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                        }
                    }
                },
                JX91: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("GyhO"),
                        s = n("z+Ro");

                    function i(...t) {
                        const e = t[t.length - 1];
                        return Object(s.a)(e) ? (t.pop(), n => Object(r.a)(t, n, e)) : e => Object(r.a)(t, e)
                    }
                },
                KqfI: function (t, e, n) {
                    "use strict";

                    function r() {}
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                LRne: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("z+Ro"),
                        s = n("yCtX"),
                        i = n("jZKg");

                    function o(...t) {
                        let e = t[t.length - 1];
                        return Object(r.a)(e) ? (t.pop(), Object(i.a)(t, e)) : Object(s.a)(t)
                    }
                },
                Lhse: function (t, e, n) {
                    "use strict";

                    function r() {
                        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
                    }
                    n.d(e, "a", (function () {
                        return s
                    }));
                    const s = r()
                },
                NJ4a: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        setTimeout(() => {
                            throw t
                        }, 0)
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                NXyV: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("HDdC"),
                        s = n("Cfvw"),
                        i = n("EY2u");

                    function o(t) {
                        return new r.a(e => {
                            let n;
                            try {
                                n = t()
                            } catch (r) {
                                return void e.error(r)
                            }
                            return (n ? Object(s.a)(n) : Object(i.b)()).subscribe(e)
                        })
                    }
                },
                R0Ic: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    })), n.d(e, "b", (function () {
                        return r
                    })), n.d(e, "c", (function () {
                        return s
                    })), n.d(e, "d", (function () {
                        return g
                    })), n.d(e, "e", (function () {
                        return a
                    })), n.d(e, "f", (function () {
                        return f
                    })), n.d(e, "g", (function () {
                        return c
                    })), n.d(e, "h", (function () {
                        return p
                    })), n.d(e, "i", (function () {
                        return l
                    })), n.d(e, "j", (function () {
                        return h
                    })), n.d(e, "k", (function () {
                        return u
                    })), n.d(e, "l", (function () {
                        return d
                    })), n.d(e, "m", (function () {
                        return o
                    })), n.d(e, "n", (function () {
                        return y
                    })), n.d(e, "o", (function () {
                        return b
                    }));
                    class r {}
                    class s {}
                    const i = "*";

                    function o(t, e) {
                        return {
                            type: 7,
                            name: t,
                            definitions: e,
                            options: {}
                        }
                    }

                    function a(t, e = null) {
                        return {
                            type: 4,
                            styles: e,
                            timings: t
                        }
                    }

                    function c(t, e = null) {
                        return {
                            type: 3,
                            steps: t,
                            options: e
                        }
                    }

                    function l(t, e = null) {
                        return {
                            type: 2,
                            steps: t,
                            options: e
                        }
                    }

                    function u(t) {
                        return {
                            type: 6,
                            styles: t,
                            offset: null
                        }
                    }

                    function h(t, e, n) {
                        return {
                            type: 0,
                            name: t,
                            styles: e,
                            options: n
                        }
                    }

                    function d(t, e, n = null) {
                        return {
                            type: 1,
                            expr: t,
                            animation: e,
                            options: n
                        }
                    }

                    function f(t = null) {
                        return {
                            type: 9,
                            options: t
                        }
                    }

                    function p(t, e, n = null) {
                        return {
                            type: 11,
                            selector: t,
                            animation: e,
                            options: n
                        }
                    }

                    function m(t) {
                        Promise.resolve(null).then(t)
                    }
                    class g {
                        constructor(t = 0, e = 0) {
                            this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
                        }
                        _onFinish() {
                            this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
                        }
                        onStart(t) {
                            this._onStartFns.push(t)
                        }
                        onDone(t) {
                            this._onDoneFns.push(t)
                        }
                        onDestroy(t) {
                            this._onDestroyFns.push(t)
                        }
                        hasStarted() {
                            return this._started
                        }
                        init() {}
                        play() {
                            this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
                        }
                        triggerMicrotask() {
                            m(() => this._onFinish())
                        }
                        _onStart() {
                            this._onStartFns.forEach(t => t()), this._onStartFns = []
                        }
                        pause() {}
                        restart() {}
                        finish() {
                            this._onFinish()
                        }
                        destroy() {
                            this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
                        }
                        reset() {}
                        setPosition(t) {}
                        getPosition() {
                            return 0
                        }
                        triggerCallback(t) {
                            const e = "start" == t ? this._onStartFns : this._onDoneFns;
                            e.forEach(t => t()), e.length = 0
                        }
                    }
                    class y {
                        constructor(t) {
                            this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                            let e = 0,
                                n = 0,
                                r = 0;
                            const s = this.players.length;
                            0 == s ? m(() => this._onFinish()) : this.players.forEach(t => {
                                t.onDone(() => {
                                    ++e == s && this._onFinish()
                                }), t.onDestroy(() => {
                                    ++n == s && this._onDestroy()
                                }), t.onStart(() => {
                                    ++r == s && this._onStart()
                                })
                            }), this.totalTime = this.players.reduce((t, e) => Math.max(t, e.totalTime), 0)
                        }
                        _onFinish() {
                            this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
                        }
                        init() {
                            this.players.forEach(t => t.init())
                        }
                        onStart(t) {
                            this._onStartFns.push(t)
                        }
                        _onStart() {
                            this.hasStarted() || (this._started = !0, this._onStartFns.forEach(t => t()), this._onStartFns = [])
                        }
                        onDone(t) {
                            this._onDoneFns.push(t)
                        }
                        onDestroy(t) {
                            this._onDestroyFns.push(t)
                        }
                        hasStarted() {
                            return this._started
                        }
                        play() {
                            this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play())
                        }
                        pause() {
                            this.players.forEach(t => t.pause())
                        }
                        restart() {
                            this.players.forEach(t => t.restart())
                        }
                        finish() {
                            this._onFinish(), this.players.forEach(t => t.finish())
                        }
                        destroy() {
                            this._onDestroy()
                        }
                        _onDestroy() {
                            this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(t => t.destroy()), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
                        }
                        reset() {
                            this.players.forEach(t => t.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
                        }
                        setPosition(t) {
                            const e = t * this.totalTime;
                            this.players.forEach(t => {
                                const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                                t.setPosition(n)
                            })
                        }
                        getPosition() {
                            let t = 0;
                            return this.players.forEach(e => {
                                const n = e.getPosition();
                                t = Math.min(n, t)
                            }), t
                        }
                        beforeDestroy() {
                            this.players.forEach(t => {
                                t.beforeDestroy && t.beforeDestroy()
                            })
                        }
                        triggerCallback(t) {
                            const e = "start" == t ? this._onStartFns : this._onDoneFns;
                            e.forEach(t => t()), e.length = 0
                        }
                    }
                    const b = "!"
                },
                SeVD: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return u
                    }));
                    var r = n("ngJS"),
                        s = n("NJ4a"),
                        i = n("Lhse"),
                        o = n("kJWO"),
                        a = n("I55L"),
                        c = n("c2HN"),
                        l = n("XoHu");
                    const u = t => {
                        if (t && "function" == typeof t[o.a]) return u = t, t => {
                            const e = u[o.a]();
                            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                            return e.subscribe(t)
                        };
                        if (Object(a.a)(t)) return Object(r.a)(t);
                        if (Object(c.a)(t)) return n = t, t => (n.then(e => {
                            t.closed || (t.next(e), t.complete())
                        }, e => t.error(e)).then(null, s.a), t);
                        if (t && "function" == typeof t[i.a]) return e = t, t => {
                            const n = e[i.a]();
                            for (;;) {
                                const e = n.next();
                                if (e.done) {
                                    t.complete();
                                    break
                                }
                                if (t.next(e.value), t.closed) break
                            }
                            return "function" == typeof n.return && t.add(() => {
                                n.return && n.return()
                            }), t
                        }; {
                            const e = Object(l.a)(t) ? "an invalid object" : `'${t}'`;
                            throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
                        }
                        var e, n, u
                    }
                },
                SpAZ: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return t
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                VRyK: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return a
                    }));
                    var r = n("HDdC"),
                        s = n("z+Ro"),
                        i = n("bHdf"),
                        o = n("yCtX");

                    function a(...t) {
                        let e = Number.POSITIVE_INFINITY,
                            n = null,
                            a = t[t.length - 1];
                        return Object(s.a)(a) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof a && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof r.a ? t[0] : Object(i.a)(e)(Object(o.a)(t, n))
                    }
                },
                WMd4: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("EY2u"),
                        s = n("LRne"),
                        i = n("HDdC");
                    let o = (() => {
                        class t {
                            constructor(t, e, n) {
                                this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
                            }
                            observe(t) {
                                switch (this.kind) {
                                    case "N":
                                        return t.next && t.next(this.value);
                                    case "E":
                                        return t.error && t.error(this.error);
                                    case "C":
                                        return t.complete && t.complete()
                                }
                            }
                            do(t, e, n) {
                                switch (this.kind) {
                                    case "N":
                                        return t && t(this.value);
                                    case "E":
                                        return e && e(this.error);
                                    case "C":
                                        return n && n()
                                }
                            }
                            accept(t, e, n) {
                                return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
                            }
                            toObservable() {
                                switch (this.kind) {
                                    case "N":
                                        return Object(s.a)(this.value);
                                    case "E":
                                        return t = this.error, new i.a(e => e.error(t));
                                    case "C":
                                        return Object(r.b)()
                                }
                                var t;
                                throw new Error("unexpected notification kind value")
                            }
                            static
                            createNext(e) {
                                return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
                            }
                            static createError(e) {
                                return new t("E", void 0, e)
                            }
                            static createComplete() {
                                return t.completeNotification
                            }
                        }
                        return t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
                    })()
                },
                XNiG: function (t, e, n) {
                    "use strict";
                    n.d(e, "b", (function () {
                        return l
                    })), n.d(e, "a", (function () {
                        return u
                    }));
                    var r = n("HDdC"),
                        s = n("7o/Q"),
                        i = n("quSY"),
                        o = n("9ppp"),
                        a = n("Ylt2"),
                        c = n("2QA8");
                    class l extends s.a {
                        constructor(t) {
                            super(t), this.destination = t
                        }
                    }
                    let u = (() => {
                        class t extends r.a {
                            constructor() {
                                super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                            } [c.a]() {
                                return new l(this)
                            }
                            lift(t) {
                                const e = new h(this, this);
                                return e.operator = t, e
                            }
                            next(t) {
                                if (this.closed) throw new o.a;
                                if (!this.isStopped) {
                                    const {
                                        observers: e
                                    } = this, n = e.length, r = e.slice();
                                    for (let s = 0; s < n; s++) r[s].next(t)
                                }
                            }
                            error(t) {
                                if (this.closed) throw new o.a;
                                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                                const {
                                    observers: e
                                } = this, n = e.length, r = e.slice();
                                for (let s = 0; s < n; s++) r[s].error(t);
                                this.observers.length = 0
                            }
                            complete() {
                                if (this.closed) throw new o.a;
                                this.isStopped = !0;
                                const {
                                    observers: t
                                } = this, e = t.length, n = t.slice();
                                for (let r = 0; r < e; r++) n[r].complete();
                                this.observers.length = 0
                            }
                            unsubscribe() {
                                this.isStopped = !0, this.closed = !0, this.observers = null
                            }
                            _trySubscribe(t) {
                                if (this.closed) throw new o.a;
                                return super._trySubscribe(t)
                            }
                            _subscribe(t) {
                                if (this.closed) throw new o.a;
                                return this.hasError ? (t.error(this.thrownError), i.a.EMPTY) : this.isStopped ? (t.complete(), i.a.EMPTY) : (this.observers.push(t), new a.a(this, t))
                            }
                            asObservable() {
                                const t = new r.a;
                                return t.source = this, t
                            }
                        }
                        return t.create = (t, e) => new h(t, e), t
                    })();
                    class h extends u {
                        constructor(t, e) {
                            super(), this.destination = t, this.source = e
                        }
                        next(t) {
                            const {
                                destination: e
                            } = this;
                            e && e.next && e.next(t)
                        }
                        error(t) {
                            const {
                                destination: e
                            } = this;
                            e && e.error && this.destination.error(t)
                        }
                        complete() {
                            const {
                                destination: t
                            } = this;
                            t && t.complete && this.destination.complete()
                        }
                        _subscribe(t) {
                            const {
                                source: e
                            } = this;
                            return e ? this.source.subscribe(t) : i.a.EMPTY
                        }
                    }
                },
                XoHu: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return null !== t && "object" == typeof t
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                Ylt2: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("quSY");
                    class s extends r.a {
                        constructor(t, e) {
                            super(), this.subject = t, this.subscriber = e, this.closed = !1
                        }
                        unsubscribe() {
                            if (this.closed) return;
                            this.closed = !0;
                            const t = this.subject,
                                e = t.observers;
                            if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
                            const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                        }
                    }
                },
                ZUHj: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("51Dv"),
                        s = n("SeVD"),
                        i = n("HDdC");

                    function o(t, e, n, o, a = new r.a(t, n, o)) {
                        if (!a.closed) return e instanceof i.a ? e.subscribe(a) : Object(s.a)(e)(a)
                    }
                },
                ZvWg: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("ofXK"),
                        s = n("fXoL");
                    let i = (() => {
                        class t {}
                        return t.\u0275mod = s.Ib({
                            type: t
                        }), t.\u0275inj = s.Hb({
                            factory: function (e) {
                                return new(e || t)
                            },
                            imports: [
                                [r.b]
                            ]
                        }), t
                    })()
                },
                akL4: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("fXoL"),
                        s = n("jhN1");
                    let i = (() => {
                        class t {
                            constructor(t) {
                                this.sanitizer = t
                            }
                            transform(t) {
                                return this.sanitizer.bypassSecurityTrustHtml(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(s.b))
                        }, t.\u0275pipe = r.Jb({
                            name: "sanitizeHtml",
                            type: t,
                            pure: !0
                        }), t
                    })()
                },
                bHdf: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("5+tZ"),
                        s = n("SpAZ");

                    function i(t = Number.POSITIVE_INFINITY) {
                        return Object(r.a)(s.a, t)
                    }
                },
                bOdf: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("5+tZ");

                    function s(t, e) {
                        return Object(r.a)(t, e, 1)
                    }
                },
                c2HN: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                cp0P: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return c
                    }));
                    var r = n("HDdC"),
                        s = n("DH7j"),
                        i = n("lJxs"),
                        o = n("XoHu"),
                        a = n("Cfvw");

                    function c(...t) {
                        if (1 === t.length) {
                            const e = t[0];
                            if (Object(s.a)(e)) return l(e, null);
                            if (Object(o.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
                                const t = Object.keys(e);
                                return l(t.map(t => e[t]), t)
                            }
                        }
                        if ("function" == typeof t[t.length - 1]) {
                            const e = t.pop();
                            return l(t = 1 === t.length && Object(s.a)(t[0]) ? t[0] : t, null).pipe(Object(i.a)(t => e(...t)))
                        }
                        return l(t, null)
                    }

                    function l(t, e) {
                        return new r.a(n => {
                            const r = t.length;
                            if (0 === r) return void n.complete();
                            const s = new Array(r);
                            let i = 0,
                                o = 0;
                            for (let c = 0; c < r; c++) {
                                const l = Object(a.a)(t[c]);
                                let u = !1;
                                n.add(l.subscribe({
                                    next: t => {
                                        u || (u = !0, o++), s[c] = t
                                    },
                                    error: t => n.error(t),
                                    complete: () => {
                                        i++, i !== r && u || (o === r && n.next(e ? e.reduce((t, e, n) => (t[e] = s[n], t), {}) : s), n.complete())
                                    }
                                }))
                            }
                        })
                    }
                },
                eIep: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return c
                    }));
                    var r = n("l7GE"),
                        s = n("51Dv"),
                        i = n("ZUHj"),
                        o = n("lJxs"),
                        a = n("Cfvw");

                    function c(t, e) {
                        return "function" == typeof e ? n => n.pipe(c((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))))) : e => e.lift(new l(t))
                    }
                    class l {
                        constructor(t) {
                            this.project = t
                        }
                        call(t, e) {
                            return e.subscribe(new u(t, this.project))
                        }
                    }
                    class u extends r.a {
                        constructor(t, e) {
                            super(t), this.project = e, this.index = 0
                        }
                        _next(t) {
                            let e;
                            const n = this.index++;
                            try {
                                e = this.project(t, n)
                            } catch (r) {
                                return void this.destination.error(r)
                            }
                            this._innerSub(e, t, n)
                        }
                        _innerSub(t, e, n) {
                            const r = this.innerSubscription;
                            r && r.unsubscribe();
                            const o = new s.a(this, e, n),
                                a = this.destination;
                            a.add(o), this.innerSubscription = Object(i.a)(this, t, void 0, void 0, o), this.innerSubscription !== o && a.add(this.innerSubscription)
                        }
                        _complete() {
                            const {
                                innerSubscription: t
                            } = this;
                            t && !t.closed || super._complete(), this.unsubscribe()
                        }
                        _unsubscribe() {
                            this.innerSubscription = null
                        }
                        notifyComplete(t) {
                            this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete()
                        }
                        notifyNext(t, e, n, r, s) {
                            this.destination.next(e)
                        }
                    }
                },
                fXoL: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return Hi
                    })), n.d(e, "b", (function () {
                        return Dl
                    })), n.d(e, "c", (function () {
                        return Al
                    })), n.d(e, "d", (function () {
                        return Tl
                    })), n.d(e, "e", (function () {
                        return jl
                    })), n.d(e, "f", (function () {
                        return xu
                    })), n.d(e, "g", (function () {
                        return mu
                    })), n.d(e, "h", (function () {
                        return wi
                    })), n.d(e, "i", (function () {
                        return Kl
                    })), n.d(e, "j", (function () {
                        return fa
                    })), n.d(e, "k", (function () {
                        return Fl
                    })), n.d(e, "l", (function () {
                        return pa
                    })), n.d(e, "m", (function () {
                        return An
                    })), n.d(e, "n", (function () {
                        return sl
                    })), n.d(e, "o", (function () {
                        return G
                    })), n.d(e, "p", (function () {
                        return h
                    })), n.d(e, "q", (function () {
                        return K
                    })), n.d(e, "r", (function () {
                        return Fi
                    })), n.d(e, "s", (function () {
                        return Na
                    })), n.d(e, "t", (function () {
                        return Ra
                    })), n.d(e, "u", (function () {
                        return Ml
                    })), n.d(e, "v", (function () {
                        return ct
                    })), n.d(e, "w", (function () {
                        return yu
                    })), n.d(e, "x", (function () {
                        return at
                    })), n.d(e, "y", (function () {
                        return uu
                    })), n.d(e, "z", (function () {
                        return Xl
                    })), n.d(e, "A", (function () {
                        return d
                    })), n.d(e, "B", (function () {
                        return Rl
                    })), n.d(e, "C", (function () {
                        return Nl
                    })), n.d(e, "D", (function () {
                        return ba
                    })), n.d(e, "E", (function () {
                        return ga
                    })), n.d(e, "F", (function () {
                        return ya
                    })), n.d(e, "G", (function () {
                        return _a
                    })), n.d(e, "H", (function () {
                        return _r
                    })), n.d(e, "I", (function () {
                        return p
                    })), n.d(e, "J", (function () {
                        return _u
                    })), n.d(e, "K", (function () {
                        return Fa
                    })), n.d(e, "L", (function () {
                        return ru
                    })), n.d(e, "M", (function () {
                        return Ci
                    })), n.d(e, "N", (function () {
                        return wa
                    })), n.d(e, "O", (function () {
                        return za
                    })), n.d(e, "P", (function () {
                        return bt
                    })), n.d(e, "Q", (function () {
                        return hu
                    })), n.d(e, "R", (function () {
                        return Wn
                    })), n.d(e, "S", (function () {
                        return I
                    })), n.d(e, "T", (function () {
                        return Gn
                    })), n.d(e, "U", (function () {
                        return Cu
                    })), n.d(e, "V", (function () {
                        return ou
                    })), n.d(e, "W", (function () {
                        return Ll
                    })), n.d(e, "X", (function () {
                        return Ei
                    })), n.d(e, "Y", (function () {
                        return nc
                    })), n.d(e, "Z", (function () {
                        return br
                    })), n.d(e, "ab", (function () {
                        return tr
                    })), n.d(e, "bb", (function () {
                        return Fn
                    })), n.d(e, "cb", (function () {
                        return zn
                    })), n.d(e, "db", (function () {
                        return Bn
                    })), n.d(e, "eb", (function () {
                        return Vn
                    })), n.d(e, "fb", (function () {
                        return Un
                    })), n.d(e, "gb", (function () {
                        return $n
                    })), n.d(e, "hb", (function () {
                        return Ya
                    })), n.d(e, "ib", (function () {
                        return Su
                    })), n.d(e, "jb", (function () {
                        return Ja
                    })), n.d(e, "kb", (function () {
                        return tc
                    })), n.d(e, "lb", (function () {
                        return Hn
                    })), n.d(e, "mb", (function () {
                        return F
                    })), n.d(e, "nb", (function () {
                        return Bi
                    })), n.d(e, "ob", (function () {
                        return uo
                    })), n.d(e, "pb", (function () {
                        return lo
                    })), n.d(e, "qb", (function () {
                        return Za
                    })), n.d(e, "rb", (function () {
                        return Qt
                    })), n.d(e, "sb", (function () {
                        return T
                    })), n.d(e, "tb", (function () {
                        return Mn
                    })), n.d(e, "ub", (function () {
                        return Yo
                    })), n.d(e, "vb", (function () {
                        return Bt
                    })), n.d(e, "wb", (function () {
                        return ua
                    })), n.d(e, "xb", (function () {
                        return Br
                    })), n.d(e, "yb", (function () {
                        return Xi
                    })), n.d(e, "zb", (function () {
                        return Po
                    })), n.d(e, "Ab", (function () {
                        return Wo
                    })), n.d(e, "Bb", (function () {
                        return Xo
                    })), n.d(e, "Cb", (function () {
                        return Io
                    })), n.d(e, "Db", (function () {
                        return vl
                    })), n.d(e, "Eb", (function () {
                        return St
                    })), n.d(e, "Fb", (function () {
                        return jt
                    })), n.d(e, "Gb", (function () {
                        return b
                    })), n.d(e, "Hb", (function () {
                        return v
                    })), n.d(e, "Ib", (function () {
                        return Ot
                    })), n.d(e, "Jb", (function () {
                        return At
                    })), n.d(e, "Kb", (function () {
                        return Ji
                    })), n.d(e, "Lb", (function () {
                        return io
                    })), n.d(e, "Mb", (function () {
                        return ao
                    })), n.d(e, "Nb", (function () {
                        return oo
                    })), n.d(e, "Ob", (function () {
                        return so
                    })), n.d(e, "Pb", (function () {
                        return ro
                    })), n.d(e, "Qb", (function () {
                        return co
                    })), n.d(e, "Rb", (function () {
                        return On
                    })), n.d(e, "Sb", (function () {
                        return Qo
                    })), n.d(e, "Tb", (function () {
                        return Hc
                    })), n.d(e, "Ub", (function () {
                        return Vc
                    })), n.d(e, "Vb", (function () {
                        return zc
                    })), n.d(e, "Wb", (function () {
                        return Uc
                    })), n.d(e, "Xb", (function () {
                        return rt
                    })), n.d(e, "Yb", (function () {
                        return to
                    })), n.d(e, "Zb", (function () {
                        return kl
                    })), n.d(e, "ac", (function () {
                        return ho
                    })), n.d(e, "bc", (function () {
                        return Sl
                    })), n.d(e, "cc", (function () {
                        return mo
                    })), n.d(e, "dc", (function () {
                        return Jc
                    })), n.d(e, "ec", (function () {
                        return tl
                    })), n.d(e, "fc", (function () {
                        return el
                    })), n.d(e, "gc", (function () {
                        return _o
                    })), n.d(e, "hc", (function () {
                        return yo
                    })), n.d(e, "ic", (function () {
                        return eo
                    })), n.d(e, "jc", (function () {
                        return wo
                    })), n.d(e, "kc", (function () {
                        return So
                    })), n.d(e, "lc", (function () {
                        return Kc
                    })), n.d(e, "mc", (function () {
                        return Gc
                    })), n.d(e, "nc", (function () {
                        return Wc
                    })), n.d(e, "oc", (function () {
                        return Xc
                    })), n.d(e, "pc", (function () {
                        return ml
                    })), n.d(e, "qc", (function () {
                        return Yi
                    })), n.d(e, "rc", (function () {
                        return an
                    })), n.d(e, "sc", (function () {
                        return ge
                    })), n.d(e, "tc", (function () {
                        return wr
                    })), n.d(e, "uc", (function () {
                        return Sr
                    })), n.d(e, "vc", (function () {
                        return kt
                    })), n.d(e, "wc", (function () {
                        return _l
                    })), n.d(e, "xc", (function () {
                        return gl
                    })), n.d(e, "yc", (function () {
                        return Ao
                    })), n.d(e, "zc", (function () {
                        return Zi
                    })), n.d(e, "Ac", (function () {
                        return Ol
                    })), n.d(e, "Bc", (function () {
                        return Bo
                    })), n.d(e, "Cc", (function () {
                        return qo
                    })), n.d(e, "Dc", (function () {
                        return Ko
                    })), n.d(e, "Ec", (function () {
                        return Go
                    })), n.d(e, "Fc", (function () {
                        return yl
                    }));
                    var r = n("XNiG"),
                        s = n("quSY"),
                        i = n("HDdC"),
                        o = n("VRyK"),
                        a = n("w1tV");

                    function c(t) {
                        return {
                            toString: t
                        }.toString()
                    }
                    const l = "__parameters__";

                    function u(t, e, n) {
                        return c(() => {
                            const r = function (t) {
                                return function (...e) {
                                    if (t) {
                                        const n = t(...e);
                                        for (const t in n) this[t] = n[t]
                                    }
                                }
                            }(e);

                            function s(...t) {
                                if (this instanceof s) return r.apply(this, t), this;
                                const e = new s(...t);
                                return n.annotation = e, n;

                                function n(t, n, r) {
                                    const s = t.hasOwnProperty(l) ? t[l] : Object.defineProperty(t, l, {
                                        value: []
                                    })[l];
                                    for (; s.length <= r;) s.push(null);
                                    return (s[r] = s[r] || []).push(e), t
                                }
                            }
                            return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s
                        })
                    }
                    const h = u("Inject", t => ({
                            token: t
                        })),
                        d = u("Optional"),
                        f = u("Self"),
                        p = u("SkipSelf");
                    var m = function (t) {
                        return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
                    }({});

                    function g(t) {
                        for (let e in t)
                            if (t[e] === g) return e;
                        throw Error("Could not find renamed property on target object.")
                    }

                    function y(t, e) {
                        for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
                    }

                    function b(t) {
                        return {
                            token: t.token,
                            providedIn: t.providedIn || null,
                            factory: t.factory,
                            value: void 0
                        }
                    }

                    function v(t) {
                        return {
                            factory: t.factory,
                            providers: t.providers || [],
                            imports: t.imports || []
                        }
                    }

                    function _(t) {
                        return w(t, t[C]) || w(t, t[O])
                    }

                    function w(t, e) {
                        return e && e.token === t ? e : null
                    }

                    function S(t) {
                        return t && (t.hasOwnProperty(E) || t.hasOwnProperty(k)) ? t[E] : null
                    }
                    const C = g({
                            "\u0275prov": g
                        }),
                        E = g({
                            "\u0275inj": g
                        }),
                        x = g({
                            "\u0275provFallback": g
                        }),
                        O = g({
                            ngInjectableDef: g
                        }),
                        k = g({
                            ngInjectorDef: g
                        });

                    function T(t) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) return "[" + t.map(T).join(", ") + "]";
                        if (null == t) return "" + t;
                        if (t.overriddenName) return "" + t.overriddenName;
                        if (t.name) return "" + t.name;
                        const e = t.toString();
                        if (null == e) return "" + e;
                        const n = e.indexOf("\n");
                        return -1 === n ? e : e.substring(0, n)
                    }

                    function j(t, e) {
                        return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
                    }
                    const A = g({
                        __forward_ref__: g
                    });

                    function I(t) {
                        return t.__forward_ref__ = I, t.toString = function () {
                            return T(this())
                        }, t
                    }

                    function P(t) {
                        return N(t) ? t() : t
                    }

                    function N(t) {
                        return "function" == typeof t && t.hasOwnProperty(A) && t.__forward_ref__ === I
                    }
                    const R = "undefined" != typeof globalThis && globalThis,
                        D = "undefined" != typeof window && window,
                        L = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                        M = "undefined" != typeof global && global,
                        F = R || M || D || L,
                        H = g({
                            "\u0275cmp": g
                        }),
                        z = g({
                            "\u0275dir": g
                        }),
                        U = g({
                            "\u0275pipe": g
                        }),
                        V = g({
                            "\u0275mod": g
                        }),
                        $ = g({
                            "\u0275loc": g
                        }),
                        B = g({
                            "\u0275fac": g
                        }),
                        q = g({
                            __NG_ELEMENT_ID__: g
                        });
                    class K {
                        constructor(t, e) {
                            this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = b({
                                token: this,
                                providedIn: e.providedIn || "root",
                                factory: e.factory
                            }))
                        }
                        toString() {
                            return "InjectionToken " + this._desc
                        }
                    }
                    const G = new K("INJECTOR", -1),
                        W = {},
                        X = /\n/gm,
                        Q = "__source",
                        Z = g({
                            provide: String,
                            useValue: g
                        });
                    let Y, J = void 0;

                    function tt(t) {
                        const e = J;
                        return J = t, e
                    }

                    function et(t) {
                        const e = Y;
                        return Y = t, e
                    }

                    function nt(t, e = m.Default) {
                        if (void 0 === J) throw new Error("inject() must be called from an injection context");
                        return null === J ? st(t, void 0, e) : J.get(t, e & m.Optional ? null : void 0, e)
                    }

                    function rt(t, e = m.Default) {
                        return (Y || nt)(P(t), e)
                    }

                    function st(t, e, n) {
                        const r = _(t);
                        if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                        if (n & m.Optional) return null;
                        if (void 0 !== e) return e;
                        throw new Error(`Injector: NOT_FOUND [${T(t)}]`)
                    }

                    function it(t) {
                        const e = [];
                        for (let n = 0; n < t.length; n++) {
                            const r = P(t[n]);
                            if (Array.isArray(r)) {
                                if (0 === r.length) throw new Error("Arguments array must have arguments.");
                                let t = void 0,
                                    n = m.Default;
                                for (let e = 0; e < r.length; e++) {
                                    const s = r[e];
                                    s instanceof d || "Optional" === s.ngMetadataName || s === d ? n |= m.Optional : s instanceof p || "SkipSelf" === s.ngMetadataName || s === p ? n |= m.SkipSelf : s instanceof f || "Self" === s.ngMetadataName || s === f ? n |= m.Self : t = s instanceof h || s === h ? s.token : s
                                }
                                e.push(rt(t, n))
                            } else e.push(rt(r))
                        }
                        return e
                    }
                    class ot {
                        get(t, e = W) {
                            if (e === W) {
                                const e = new Error(`NullInjectorError: No provider for ${T(t)}!`);
                                throw e.name = "NullInjectorError", e
                            }
                            return e
                        }
                    }
                    class at {}
                    class ct {}

                    function lt(t, e) {
                        for (let n = 0; n < t.length; n++) e.push(t[n])
                    }

                    function ut(t, e) {
                        t.forEach(t => Array.isArray(t) ? ut(t, e) : e(t))
                    }

                    function ht(t, e, n) {
                        e >= t.length ? t.push(n) : t.splice(e, 0, n)
                    }

                    function dt(t, e) {
                        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
                    }

                    function ft(t, e) {
                        const n = [];
                        for (let r = 0; r < t; r++) n.push(e);
                        return n
                    }

                    function pt(t, e, n) {
                        let r = gt(t, e);
                        return r >= 0 ? t[1 | r] = n : (r = ~r, function (t, e, n, r) {
                            let s = t.length;
                            if (s == e) t.push(n, r);
                            else if (1 === s) t.push(r, t[0]), t[0] = n;
                            else {
                                for (s--, t.push(t[s - 1], t[s]); s > e;) t[s] = t[s - 2], s--;
                                t[e] = n, t[e + 1] = r
                            }
                        }(t, r, e, n)), r
                    }

                    function mt(t, e) {
                        const n = gt(t, e);
                        if (n >= 0) return t[1 | n]
                    }

                    function gt(t, e) {
                        return function (t, e, n) {
                            let r = 0,
                                s = t.length >> 1;
                            for (; s !== r;) {
                                const n = r + (s - r >> 1),
                                    i = t[n << 1];
                                if (e === i) return n << 1;
                                i > e ? s = n : r = n + 1
                            }
                            return ~(s << 1)
                        }(t, e)
                    }
                    var yt = function (t) {
                            return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t
                        }({}),
                        bt = function (t) {
                            return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
                        }({});
                    const vt = {},
                        _t = [];
                    let wt = 0;

                    function St(t) {
                        return c(() => {
                            const e = {},
                                n = {
                                    type: t.type,
                                    providersResolver: null,
                                    decls: t.decls,
                                    vars: t.vars,
                                    factory: null,
                                    template: t.template || null,
                                    consts: t.consts || null,
                                    ngContentSelectors: t.ngContentSelectors,
                                    hostBindings: t.hostBindings || null,
                                    hostVars: t.hostVars || 0,
                                    hostAttrs: t.hostAttrs || null,
                                    contentQueries: t.contentQueries || null,
                                    declaredInputs: e,
                                    inputs: null,
                                    outputs: null,
                                    exportAs: t.exportAs || null,
                                    onPush: t.changeDetection === yt.OnPush,
                                    directiveDefs: null,
                                    pipeDefs: null,
                                    selectors: t.selectors || _t,
                                    viewQuery: t.viewQuery || null,
                                    features: t.features || null,
                                    data: t.data || {},
                                    encapsulation: t.encapsulation || bt.Emulated,
                                    id: "c",
                                    styles: t.styles || _t,
                                    _: null,
                                    setInput: null,
                                    schemas: t.schemas || null,
                                    tView: null
                                },
                                r = t.directives,
                                s = t.features,
                                i = t.pipes;
                            return n.id += wt++, n.inputs = Tt(t.inputs, e), n.outputs = Tt(t.outputs), s && s.forEach(t => t(n)), n.directiveDefs = r ? () => ("function" == typeof r ? r() : r).map(Ct) : null, n.pipeDefs = i ? () => ("function" == typeof i ? i() : i).map(Et) : null, n
                        })
                    }

                    function Ct(t) {
                        return It(t) || function (t) {
                            return t[z] || null
                        }(t)
                    }

                    function Et(t) {
                        return function (t) {
                            return t[U] || null
                        }(t)
                    }
                    const xt = {};

                    function Ot(t) {
                        const e = {
                            type: t.type,
                            bootstrap: t.bootstrap || _t,
                            declarations: t.declarations || _t,
                            imports: t.imports || _t,
                            exports: t.exports || _t,
                            transitiveCompileScopes: null,
                            schemas: t.schemas || null,
                            id: t.id || null
                        };
                        return null != t.id && c(() => {
                            xt[t.id] = t.type
                        }), e
                    }

                    function kt(t, e) {
                        return c(() => {
                            const n = Nt(t, !0);
                            n.declarations = e.declarations || _t, n.imports = e.imports || _t, n.exports = e.exports || _t
                        })
                    }

                    function Tt(t, e) {
                        if (null == t) return vt;
                        const n = {};
                        for (const r in t)
                            if (t.hasOwnProperty(r)) {
                                let s = t[r],
                                    i = s;
                                Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, e && (e[s] = i)
                            } return n
                    }
                    const jt = St;

                    function At(t) {
                        return {
                            type: t.type,
                            name: t.name,
                            factory: null,
                            pure: !1 !== t.pure,
                            onDestroy: t.type.prototype.ngOnDestroy || null
                        }
                    }

                    function It(t) {
                        return t[H] || null
                    }

                    function Pt(t, e) {
                        return t.hasOwnProperty(B) ? t[B] : null
                    }

                    function Nt(t, e) {
                        const n = t[V] || null;
                        if (!n && !0 === e) throw new Error(`Type ${T(t)} does not have '\u0275mod' property.`);
                        return n
                    }
                    const Rt = 20,
                        Dt = 10;

                    function Lt(t) {
                        return Array.isArray(t) && "object" == typeof t[1]
                    }

                    function Mt(t) {
                        return Array.isArray(t) && !0 === t[1]
                    }

                    function Ft(t) {
                        return 0 != (8 & t.flags)
                    }

                    function Ht(t) {
                        return 2 == (2 & t.flags)
                    }

                    function zt(t) {
                        return 1 == (1 & t.flags)
                    }

                    function Ut(t) {
                        return null !== t.template
                    }

                    function Vt(t) {
                        return 0 != (512 & t[2])
                    }
                    class $t {
                        constructor(t, e, n) {
                            this.previousValue = t, this.currentValue = e, this.firstChange = n
                        }
                        isFirstChange() {
                            return this.firstChange
                        }
                    }

                    function Bt() {
                        return qt
                    }

                    function qt(t) {
                        return t.type.prototype.ngOnChanges && (t.setInput = Gt), Kt
                    }

                    function Kt() {
                        const t = Wt(this),
                            e = null == t ? void 0 : t.current;
                        if (e) {
                            const n = t.previous;
                            if (n === vt) t.previous = e;
                            else
                                for (let t in e) n[t] = e[t];
                            t.current = null, this.ngOnChanges(e)
                        }
                    }

                    function Gt(t, e, n, r) {
                        const s = Wt(t) || function (t, e) {
                                return t.__ngSimpleChanges__ = e
                            }(t, {
                                previous: vt,
                                current: null
                            }),
                            i = s.current || (s.current = {}),
                            o = s.previous,
                            a = this.declaredInputs[n],
                            c = o[a];
                        i[a] = new $t(c && c.currentValue, e, o === vt), t[r] = e
                    }

                    function Wt(t) {
                        return t.__ngSimpleChanges__ || null
                    }
                    Bt.ngInherit = !0;
                    let Xt = void 0;

                    function Qt(t) {
                        Xt = t
                    }

                    function Zt() {
                        return void 0 !== Xt ? Xt : "undefined" != typeof document ? document : void 0
                    }

                    function Yt(t) {
                        return !!t.listen
                    }
                    const Jt = {
                        createRenderer: (t, e) => Zt()
                    };

                    function te(t) {
                        for (; Array.isArray(t);) t = t[0];
                        return t
                    }

                    function ee(t, e) {
                        return te(e[t + Rt])
                    }

                    function ne(t, e) {
                        return te(e[t.index])
                    }

                    function re(t, e) {
                        return t.data[e + Rt]
                    }

                    function se(t, e) {
                        return t[e + Rt]
                    }

                    function ie(t, e) {
                        const n = e[t];
                        return Lt(n) ? n : n[0]
                    }

                    function oe(t) {
                        const e = function (t) {
                            return t.__ngContext__ || null
                        }(t);
                        return e ? Array.isArray(e) ? e : e.lView : null
                    }

                    function ae(t) {
                        return 4 == (4 & t[2])
                    }

                    function ce(t) {
                        return 128 == (128 & t[2])
                    }

                    function le(t, e) {
                        return null === t || null == e ? null : t[e]
                    }

                    function ue(t) {
                        t[18] = 0
                    }

                    function he(t, e) {
                        t[5] += e;
                        let n = t,
                            r = t[3];
                        for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) r[5] += e, n = r, r = r[3]
                    }
                    const de = {
                        lFrame: Re(null),
                        bindingsEnabled: !0,
                        checkNoChangesMode: !1
                    };

                    function fe() {
                        return de.bindingsEnabled
                    }

                    function pe() {
                        return de.lFrame.lView
                    }

                    function me() {
                        return de.lFrame.tView
                    }

                    function ge(t) {
                        de.lFrame.contextLView = t
                    }

                    function ye() {
                        return de.lFrame.previousOrParentTNode
                    }

                    function be(t, e) {
                        de.lFrame.previousOrParentTNode = t, de.lFrame.isParent = e
                    }

                    function ve() {
                        return de.lFrame.isParent
                    }

                    function _e() {
                        de.lFrame.isParent = !1
                    }

                    function we() {
                        return de.checkNoChangesMode
                    }

                    function Se(t) {
                        de.checkNoChangesMode = t
                    }

                    function Ce() {
                        const t = de.lFrame;
                        let e = t.bindingRootIndex;
                        return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
                    }

                    function Ee() {
                        return de.lFrame.bindingIndex
                    }

                    function xe() {
                        return de.lFrame.bindingIndex++
                    }

                    function Oe(t) {
                        const e = de.lFrame,
                            n = e.bindingIndex;
                        return e.bindingIndex = e.bindingIndex + t, n
                    }

                    function ke(t, e) {
                        const n = de.lFrame;
                        n.bindingIndex = n.bindingRootIndex = t, Te(e)
                    }

                    function Te(t) {
                        de.lFrame.currentDirectiveIndex = t
                    }

                    function je() {
                        return de.lFrame.currentQueryIndex
                    }

                    function Ae(t) {
                        de.lFrame.currentQueryIndex = t
                    }

                    function Ie(t, e) {
                        const n = Ne();
                        de.lFrame = n, n.previousOrParentTNode = e, n.lView = t
                    }

                    function Pe(t, e) {
                        const n = Ne(),
                            r = t[1];
                        de.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex
                    }

                    function Ne() {
                        const t = de.lFrame,
                            e = null === t ? null : t.child;
                        return null === e ? Re(t) : e
                    }

                    function Re(t) {
                        const e = {
                            previousOrParentTNode: null,
                            isParent: !0,
                            lView: null,
                            tView: null,
                            selectedIndex: 0,
                            contextLView: null,
                            elementDepthCount: 0,
                            currentNamespace: null,
                            currentDirectiveIndex: -1,
                            bindingRootIndex: -1,
                            bindingIndex: -1,
                            currentQueryIndex: 0,
                            parent: t,
                            child: null
                        };
                        return null !== t && (t.child = e), e
                    }

                    function De() {
                        const t = de.lFrame;
                        return de.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
                    }
                    const Le = De;

                    function Me() {
                        const t = De();
                        t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
                    }

                    function Fe() {
                        return de.lFrame.selectedIndex
                    }

                    function He(t) {
                        de.lFrame.selectedIndex = t
                    }

                    function ze() {
                        const t = de.lFrame;
                        return re(t.tView, t.selectedIndex)
                    }

                    function Ue(t, e) {
                        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
                            const e = t.data[n].type.prototype,
                                {
                                    ngAfterContentInit: r,
                                    ngAfterContentChecked: s,
                                    ngAfterViewInit: i,
                                    ngAfterViewChecked: o,
                                    ngOnDestroy: a
                                } = e;
                            r && (t.contentHooks || (t.contentHooks = [])).push(-n, r), s && ((t.contentHooks || (t.contentHooks = [])).push(n, s), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)), i && (t.viewHooks || (t.viewHooks = [])).push(-n, i), o && ((t.viewHooks || (t.viewHooks = [])).push(n, o), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)), null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a)
                        }
                    }

                    function Ve(t, e, n) {
                        qe(t, e, 3, n)
                    }

                    function $e(t, e, n, r) {
                        (3 & t[2]) === n && qe(t, e, n, r)
                    }

                    function Be(t, e) {
                        let n = t[2];
                        (3 & n) === e && (n &= 2047, n += 1, t[2] = n)
                    }

                    function qe(t, e, n, r) {
                        const s = null != r ? r : -1;
                        let i = 0;
                        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
                            if ("number" == typeof e[o + 1]) {
                                if (i = e[o], null != r && i >= r) break
                            } else e[o] < 0 && (t[18] += 65536), (i < s || -1 == s) && (Ke(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
                    }

                    function Ke(t, e, n, r) {
                        const s = n[r] < 0,
                            i = n[r + 1],
                            o = t[s ? -n[r] : n[r]];
                        s ? t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 2048, i.call(o)) : i.call(o)
                    }
                    class Ge {
                        constructor(t, e, n) {
                            this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
                        }
                    }

                    function We(t, e, n) {
                        const r = Yt(t);
                        let s = 0;
                        for (; s < n.length;) {
                            const i = n[s];
                            if ("number" == typeof i) {
                                if (0 !== i) break;
                                s++;
                                const o = n[s++],
                                    a = n[s++],
                                    c = n[s++];
                                r ? t.setAttribute(e, a, c, o) : e.setAttributeNS(o, a, c)
                            } else {
                                const o = i,
                                    a = n[++s];
                                Qe(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++
                            }
                        }
                        return s
                    }

                    function Xe(t) {
                        return 3 === t || 4 === t || 6 === t
                    }

                    function Qe(t) {
                        return 64 === t.charCodeAt(0)
                    }

                    function Ze(t, e) {
                        if (null === e || 0 === e.length);
                        else if (null === t || 0 === t.length) t = e.slice();
                        else {
                            let n = -1;
                            for (let r = 0; r < e.length; r++) {
                                const s = e[r];
                                "number" == typeof s ? n = s : 0 === n || Ye(t, n, s, null, -1 === n || 2 === n ? e[++r] : null)
                            }
                        }
                        return t
                    }

                    function Ye(t, e, n, r, s) {
                        let i = 0,
                            o = t.length;
                        if (-1 === e) o = -1;
                        else
                            for (; i < t.length;) {
                                const n = t[i++];
                                if ("number" == typeof n) {
                                    if (n === e) {
                                        o = -1;
                                        break
                                    }
                                    if (n > e) {
                                        o = i - 1;
                                        break
                                    }
                                }
                            }
                        for (; i < t.length;) {
                            const e = t[i];
                            if ("number" == typeof e) break;
                            if (e === n) {
                                if (null === r) return void(null !== s && (t[i + 1] = s));
                                if (r === t[i + 1]) return void(t[i + 2] = s)
                            }
                            i++, null !== r && i++, null !== s && i++
                        } - 1 !== o && (t.splice(o, 0, e), i = o + 1), t.splice(i++, 0, n), null !== r && t.splice(i++, 0, r), null !== s && t.splice(i++, 0, s)
                    }

                    function Je(t) {
                        return -1 !== t
                    }

                    function tn(t) {
                        return 32767 & t
                    }

                    function en(t) {
                        return t >> 16
                    }

                    function nn(t, e) {
                        let n = en(t),
                            r = e;
                        for (; n > 0;) r = r[15], n--;
                        return r
                    }

                    function rn(t) {
                        return "string" == typeof t ? t : null == t ? "" : "" + t
                    }

                    function sn(t) {
                        return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : rn(t)
                    }
                    const on = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(F))();

                    function an(t) {
                        return {
                            name: "window",
                            target: t.ownerDocument.defaultView
                        }
                    }

                    function cn(t) {
                        return t instanceof Function ? t() : t
                    }
                    let ln = !0;

                    function un(t) {
                        const e = ln;
                        return ln = t, e
                    }
                    let hn = 0;

                    function dn(t, e) {
                        const n = pn(t, e);
                        if (-1 !== n) return n;
                        const r = e[1];
                        r.firstCreatePass && (t.injectorIndex = e.length, fn(r.data, t), fn(e, null), fn(r.blueprint, null));
                        const s = mn(t, e),
                            i = t.injectorIndex;
                        if (Je(s)) {
                            const t = tn(s),
                                n = nn(s, e),
                                r = n[1].data;
                            for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s]
                        }
                        return e[i + 8] = s, i
                    }

                    function fn(t, e) {
                        t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
                    }

                    function pn(t, e) {
                        return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
                    }

                    function mn(t, e) {
                        if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
                        let n = e[6],
                            r = 1;
                        for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++;
                        return n ? n.injectorIndex | r << 16 : -1
                    }

                    function gn(t, e, n) {
                        ! function (t, e, n) {
                            let r;
                            "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(q) && (r = n[q]), null == r && (r = n[q] = hn++);
                            const s = 255 & r,
                                i = 1 << s,
                                o = 64 & s,
                                a = 32 & s,
                                c = e.data;
                            128 & s ? o ? a ? c[t + 7] |= i : c[t + 6] |= i : a ? c[t + 5] |= i : c[t + 4] |= i : o ? a ? c[t + 3] |= i : c[t + 2] |= i : a ? c[t + 1] |= i : c[t] |= i
                        }(t, e, n)
                    }

                    function yn(t, e, n, r = m.Default, s) {
                        if (null !== t) {
                            const s = function (t) {
                                if ("string" == typeof t) return t.charCodeAt(0) || 0;
                                const e = t.hasOwnProperty(q) ? t[q] : void 0;
                                return "number" == typeof e && e > 0 ? 255 & e : e
                            }(n);
                            if ("function" == typeof s) {
                                Ie(e, t);
                                try {
                                    const t = s();
                                    if (null != t || r & m.Optional) return t;
                                    throw new Error(`No provider for ${sn(n)}!`)
                                } finally {
                                    Le()
                                }
                            } else if ("number" == typeof s) {
                                if (-1 === s) return new En(t, e);
                                let i = null,
                                    o = pn(t, e),
                                    a = -1,
                                    c = r & m.Host ? e[16][6] : null;
                                for ((-1 === o || r & m.SkipSelf) && (a = -1 === o ? mn(t, e) : e[o + 8], Cn(r, !1) ? (i = e[1], o = tn(a), e = nn(a, e)) : o = -1); - 1 !== o;) {
                                    a = e[o + 8];
                                    const t = e[1];
                                    if (Sn(s, o, t.data)) {
                                        const t = vn(o, e, n, i, r, c);
                                        if (t !== bn) return t
                                    }
                                    Cn(r, e[1].data[o + 8] === c) && Sn(s, o, e) ? (i = t, o = tn(a), e = nn(a, e)) : o = -1
                                }
                            }
                        }
                        if (r & m.Optional && void 0 === s && (s = null), 0 == (r & (m.Self | m.Host))) {
                            const t = e[9],
                                i = et(void 0);
                            try {
                                return t ? t.get(n, s, r & m.Optional) : st(n, s, r & m.Optional)
                            } finally {
                                et(i)
                            }
                        }
                        if (r & m.Optional) return s;
                        throw new Error(`NodeInjector: NOT_FOUND [${sn(n)}]`)
                    }
                    const bn = {};

                    function vn(t, e, n, r, s, i) {
                        const o = e[1],
                            a = o.data[t + 8],
                            c = _n(a, o, n, null == r ? Ht(a) && ln : r != o && 3 === a.type, s & m.Host && i === a);
                        return null !== c ? wn(e, o, c, a) : bn
                    }

                    function _n(t, e, n, r, s) {
                        const i = t.providerIndexes,
                            o = e.data,
                            a = 1048575 & i,
                            c = t.directiveStart,
                            l = i >> 20,
                            u = s ? a + l : t.directiveEnd;
                        for (let h = r ? a : a + l; h < u; h++) {
                            const t = o[h];
                            if (h < c && n === t || h >= c && t.type === n) return h
                        }
                        if (s) {
                            const t = o[c];
                            if (t && Ut(t) && t.type === n) return c
                        }
                        return null
                    }

                    function wn(t, e, n, r) {
                        let s = t[n];
                        const i = e.data;
                        if (s instanceof Ge) {
                            const o = s;
                            if (o.resolving) throw new Error("Circular dep for " + sn(i[n]));
                            const a = un(o.canSeeViewProviders);
                            let c;
                            o.resolving = !0, o.injectImpl && (c = et(o.injectImpl)), Ie(t, r);
                            try {
                                s = t[n] = o.factory(void 0, i, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
                                    const {
                                        ngOnChanges: r,
                                        ngOnInit: s,
                                        ngDoCheck: i
                                    } = e.type.prototype;
                                    if (r) {
                                        const r = qt(e);
                                        (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)
                                    }
                                    s && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i))
                                }(n, i[n], e)
                            } finally {
                                o.injectImpl && et(c), un(a), o.resolving = !1, Le()
                            }
                        }
                        return s
                    }

                    function Sn(t, e, n) {
                        const r = 64 & t,
                            s = 32 & t;
                        let i;
                        return i = 128 & t ? r ? s ? n[e + 7] : n[e + 6] : s ? n[e + 5] : n[e + 4] : r ? s ? n[e + 3] : n[e + 2] : s ? n[e + 1] : n[e], !!(i & 1 << t)
                    }

                    function Cn(t, e) {
                        return !(t & m.Self || t & m.Host && e)
                    }
                    class En {
                        constructor(t, e) {
                            this._tNode = t, this._lView = e
                        }
                        get(t, e) {
                            return yn(this._tNode, this._lView, t, void 0, e)
                        }
                    }

                    function xn(t) {
                        const e = t;
                        if (N(t)) return () => {
                            const t = xn(P(e));
                            return t ? t() : null
                        };
                        let n = Pt(e);
                        if (null === n) {
                            const t = S(e);
                            n = t && t.factory
                        }
                        return n || null
                    }

                    function On(t) {
                        return c(() => {
                            const e = t.prototype.constructor,
                                n = e[B] || xn(e),
                                r = Object.prototype;
                            let s = Object.getPrototypeOf(t.prototype).constructor;
                            for (; s && s !== r;) {
                                const t = s[B] || xn(s);
                                if (t && t !== n) return t;
                                s = Object.getPrototypeOf(s)
                            }
                            return t => new t
                        })
                    }

                    function kn(t) {
                        return t.ngDebugContext
                    }

                    function Tn(t) {
                        return t.ngOriginalError
                    }

                    function jn(t, ...e) {
                        t.error(...e)
                    }
                    class An {
                        constructor() {
                            this._console = console
                        }
                        handleError(t) {
                            const e = this._findOriginalError(t),
                                n = this._findContext(t),
                                r = function (t) {
                                    return t.ngErrorLogger || jn
                                }(t);
                            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
                        }
                        _findContext(t) {
                            return t ? kn(t) ? kn(t) : this._findContext(Tn(t)) : null
                        }
                        _findOriginalError(t) {
                            let e = Tn(t);
                            for (; e && Tn(e);) e = Tn(e);
                            return e
                        }
                    }
                    class In {
                        constructor(t) {
                            this.changingThisBreaksApplicationSecurity = t
                        }
                        toString() {
                            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                        }
                    }
                    class Pn extends In {
                        getTypeName() {
                            return "HTML"
                        }
                    }
                    class Nn extends In {
                        getTypeName() {
                            return "Style"
                        }
                    }
                    class Rn extends In {
                        getTypeName() {
                            return "Script"
                        }
                    }
                    class Dn extends In {
                        getTypeName() {
                            return "URL"
                        }
                    }
                    class Ln extends In {
                        getTypeName() {
                            return "ResourceURL"
                        }
                    }

                    function Mn(t) {
                        return t instanceof In ? t.changingThisBreaksApplicationSecurity : t
                    }

                    function Fn(t, e) {
                        const n = Hn(t);
                        if (null != n && n !== e) {
                            if ("ResourceURL" === n && "URL" === e) return !0;
                            throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
                        }
                        return n === e
                    }

                    function Hn(t) {
                        return t instanceof In && t.getTypeName() || null
                    }

                    function zn(t) {
                        return new Pn(t)
                    }

                    function Un(t) {
                        return new Nn(t)
                    }

                    function Vn(t) {
                        return new Rn(t)
                    }

                    function $n(t) {
                        return new Dn(t)
                    }

                    function Bn(t) {
                        return new Ln(t)
                    }
                    let qn = !0,
                        Kn = !1;

                    function Gn() {
                        return Kn = !0, qn
                    }

                    function Wn() {
                        if (Kn) throw new Error("Cannot enable prod mode after platform setup.");
                        qn = !1
                    }

                    function Xn(t) {
                        return function () {
                            try {
                                return !!(new window.DOMParser).parseFromString("", "text/html")
                            } catch (t) {
                                return !1
                            }
                        }() ? new Qn : new Zn(t)
                    }
                    class Qn {
                        getInertBodyElement(t) {
                            t = "<body><remove></remove>" + t;
                            try {
                                const e = (new window.DOMParser).parseFromString(t, "text/html").body;
                                return e.removeChild(e.firstChild), e
                            } catch (e) {
                                return null
                            }
                        }
                    }
                    class Zn {
                        constructor(t) {
                            if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                                const t = this.inertDocument.createElement("html");
                                this.inertDocument.appendChild(t);
                                const e = this.inertDocument.createElement("body");
                                t.appendChild(e)
                            }
                        }
                        getInertBodyElement(t) {
                            const e = this.inertDocument.createElement("template");
                            if ("content" in e) return e.innerHTML = t, e;
                            const n = this.inertDocument.createElement("body");
                            return n.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
                        }
                        stripCustomNsAttrs(t) {
                            const e = t.attributes;
                            for (let r = e.length - 1; 0 < r; r--) {
                                const n = e.item(r).name;
                                "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n)
                            }
                            let n = t.firstChild;
                            for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
                        }
                    }
                    const Yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                        Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

                    function tr(t) {
                        return (t = String(t)).match(Yn) || t.match(Jn) ? t : (Gn() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`), "unsafe:" + t)
                    }

                    function er(t) {
                        return (t = String(t)).split(",").map(t => tr(t.trim())).join(", ")
                    }

                    function nr(t) {
                        const e = {};
                        for (const n of t.split(",")) e[n] = !0;
                        return e
                    }

                    function rr(...t) {
                        const e = {};
                        for (const n of t)
                            for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
                        return e
                    }
                    const sr = nr("area,br,col,hr,img,wbr"),
                        ir = nr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                        or = nr("rp,rt"),
                        ar = rr(or, ir),
                        cr = rr(sr, rr(ir, nr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), rr(or, nr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ar),
                        lr = nr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                        ur = nr("srcset"),
                        hr = rr(lr, ur, nr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), nr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                        dr = nr("script,style,template");
                    class fr {
                        constructor() {
                            this.sanitizedSomething = !1, this.buf = []
                        }
                        sanitizeChildren(t) {
                            let e = t.firstChild,
                                n = !0;
                            for (; e;)
                                if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild;
                                else
                                    for (; e;) {
                                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                                        let t = this.checkClobberedElement(e, e.nextSibling);
                                        if (t) {
                                            e = t;
                                            break
                                        }
                                        e = this.checkClobberedElement(e, e.parentNode)
                                    }
                            return this.buf.join("")
                        }
                        startElement(t) {
                            const e = t.nodeName.toLowerCase();
                            if (!cr.hasOwnProperty(e)) return this.sanitizedSomething = !0, !dr.hasOwnProperty(e);
                            this.buf.push("<"), this.buf.push(e);
                            const n = t.attributes;
                            for (let r = 0; r < n.length; r++) {
                                const t = n.item(r),
                                    e = t.name,
                                    s = e.toLowerCase();
                                if (!hr.hasOwnProperty(s)) {
                                    this.sanitizedSomething = !0;
                                    continue
                                }
                                let i = t.value;
                                lr[s] && (i = tr(i)), ur[s] && (i = er(i)), this.buf.push(" ", e, '="', gr(i), '"')
                            }
                            return this.buf.push(">"), !0
                        }
                        endElement(t) {
                            const e = t.nodeName.toLowerCase();
                            cr.hasOwnProperty(e) && !sr.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                        }
                        chars(t) {
                            this.buf.push(gr(t))
                        }
                        checkClobberedElement(t, e) {
                            if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                            return e
                        }
                    }
                    const pr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                        mr = /([^\#-~ |!])/g;

                    function gr(t) {
                        return t.replace(/&/g, "&amp;").replace(pr, (function (t) {
                            return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
                        })).replace(mr, (function (t) {
                            return "&#" + t.charCodeAt(0) + ";"
                        })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }
                    let yr;

                    function br(t, e) {
                        let n = null;
                        try {
                            yr = yr || Xn(t);
                            let r = e ? String(e) : "";
                            n = yr.getInertBodyElement(r);
                            let s = 5,
                                i = r;
                            do {
                                if (0 === s) throw new Error("Failed to sanitize html because the input is unstable");
                                s--, r = i, i = n.innerHTML, n = yr.getInertBodyElement(r)
                            } while (r !== i);
                            const o = new fr,
                                a = o.sanitizeChildren(vr(n) || n);
                            return Gn() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
                        } finally {
                            if (n) {
                                const t = vr(n) || n;
                                for (; t.firstChild;) t.removeChild(t.firstChild)
                            }
                        }
                    }

                    function vr(t) {
                        return "content" in t && function (t) {
                            return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
                        }(t) ? t.content : null
                    }
                    var _r = function (t) {
                        return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
                    }({});

                    function wr(t) {
                        const e = Cr();
                        return e ? e.sanitize(_r.HTML, t) || "" : Fn(t, "HTML") ? Mn(t) : br(Zt(), rn(t))
                    }

                    function Sr(t) {
                        const e = Cr();
                        return e ? e.sanitize(_r.URL, t) || "" : Fn(t, "URL") ? Mn(t) : tr(rn(t))
                    }

                    function Cr() {
                        const t = pe();
                        return t && t[12]
                    }

                    function Er(t, e) {
                        t.__ngContext__ = e
                    }

                    function xr(t) {
                        throw new Error("Multiple components match node with tagname " + t.tagName)
                    }

                    function Or() {
                        throw new Error("Cannot mix multi providers and regular providers")
                    }

                    function kr(t, e, n) {
                        let r = t.length;
                        for (;;) {
                            const s = t.indexOf(e, n);
                            if (-1 === s) return s;
                            if (0 === s || t.charCodeAt(s - 1) <= 32) {
                                const n = e.length;
                                if (s + n === r || t.charCodeAt(s + n) <= 32) return s
                            }
                            n = s + 1
                        }
                    }
                    const Tr = "ng-template";

                    function jr(t, e, n) {
                        let r = 0;
                        for (; r < t.length;) {
                            let s = t[r++];
                            if (n && "class" === s) {
                                if (s = t[r], -1 !== kr(s.toLowerCase(), e, 0)) return !0
                            } else if (1 === s) {
                                for (; r < t.length && "string" == typeof (s = t[r++]);)
                                    if (s.toLowerCase() === e) return !0;
                                return !1
                            }
                        }
                        return !1
                    }

                    function Ar(t) {
                        return 0 === t.type && t.tagName !== Tr
                    }

                    function Ir(t, e, n) {
                        return e === (0 !== t.type || n ? t.tagName : Tr)
                    }

                    function Pr(t, e, n) {
                        let r = 4;
                        const s = t.attrs || [],
                            i = function (t) {
                                for (let e = 0; e < t.length; e++)
                                    if (Xe(t[e])) return e;
                                return t.length
                            }(s);
                        let o = !1;
                        for (let a = 0; a < e.length; a++) {
                            const c = e[a];
                            if ("number" != typeof c) {
                                if (!o)
                                    if (4 & r) {
                                        if (r = 2 | 1 & r, "" !== c && !Ir(t, c, n) || "" === c && 1 === e.length) {
                                            if (Nr(r)) return !1;
                                            o = !0
                                        }
                                    } else {
                                        const l = 8 & r ? c : e[++a];
                                        if (8 & r && null !== t.attrs) {
                                            if (!jr(t.attrs, l, n)) {
                                                if (Nr(r)) return !1;
                                                o = !0
                                            }
                                            continue
                                        }
                                        const u = Rr(8 & r ? "class" : c, s, Ar(t), n);
                                        if (-1 === u) {
                                            if (Nr(r)) return !1;
                                            o = !0;
                                            continue
                                        }
                                        if ("" !== l) {
                                            let t;
                                            t = u > i ? "" : s[u + 1].toLowerCase();
                                            const e = 8 & r ? t : null;
                                            if (e && -1 !== kr(e, l, 0) || 2 & r && l !== t) {
                                                if (Nr(r)) return !1;
                                                o = !0
                                            }
                                        }
                                    }
                            } else {
                                if (!o && !Nr(r) && !Nr(c)) return !1;
                                if (o && Nr(c)) continue;
                                o = !1, r = c | 1 & r
                            }
                        }
                        return Nr(r) || o
                    }

                    function Nr(t) {
                        return 0 == (1 & t)
                    }

                    function Rr(t, e, n, r) {
                        if (null === e) return -1;
                        let s = 0;
                        if (r || !n) {
                            let n = !1;
                            for (; s < e.length;) {
                                const r = e[s];
                                if (r === t) return s;
                                if (3 === r || 6 === r) n = !0;
                                else {
                                    if (1 === r || 2 === r) {
                                        let t = e[++s];
                                        for (;
                                            "string" == typeof t;) t = e[++s];
                                        continue
                                    }
                                    if (4 === r) break;
                                    if (0 === r) {
                                        s += 4;
                                        continue
                                    }
                                }
                                s += n ? 1 : 2
                            }
                            return -1
                        }
                        return function (t, e) {
                            let n = t.indexOf(4);
                            if (n > -1)
                                for (n++; n < t.length;) {
                                    const r = t[n];
                                    if ("number" == typeof r) return -1;
                                    if (r === e) return n;
                                    n++
                                }
                            return -1
                        }(e, t)
                    }

                    function Dr(t, e, n = !1) {
                        for (let r = 0; r < e.length; r++)
                            if (Pr(t, e[r], n)) return !0;
                        return !1
                    }

                    function Lr(t, e) {
                        t: for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            if (t.length === r.length) {
                                for (let e = 0; e < t.length; e++)
                                    if (t[e] !== r[e]) continue t;
                                return !0
                            }
                        }
                        return !1
                    }

                    function Mr(t, e) {
                        return t ? ":not(" + e.trim() + ")" : e
                    }

                    function Fr(t) {
                        let e = t[0],
                            n = 1,
                            r = 2,
                            s = "",
                            i = !1;
                        for (; n < t.length;) {
                            let o = t[n];
                            if ("string" == typeof o)
                                if (2 & r) {
                                    const e = t[++n];
                                    s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
                                } else 8 & r ? s += "." + o : 4 & r && (s += " " + o);
                            else "" === s || Nr(o) || (e += Mr(i, s), s = ""), r = o, i = i || !Nr(r);
                            n++
                        }
                        return "" !== s && (e += Mr(i, s)), e
                    }
                    const Hr = {};

                    function zr(t) {
                        const e = t[3];
                        return Mt(e) ? e[3] : e
                    }

                    function Ur(t) {
                        return $r(t[13])
                    }

                    function Vr(t) {
                        return $r(t[4])
                    }

                    function $r(t) {
                        for (; null !== t && !Mt(t);) t = t[4];
                        return t
                    }

                    function Br(t) {
                        qr(me(), pe(), Fe() + t, we())
                    }

                    function qr(t, e, n, r) {
                        if (!r)
                            if (3 == (3 & e[2])) {
                                const r = t.preOrderCheckHooks;
                                null !== r && Ve(e, r, n)
                            } else {
                                const r = t.preOrderHooks;
                                null !== r && $e(e, r, 0, n)
                            } He(n)
                    }

                    function Kr(t, e) {
                        return t << 17 | e << 2
                    }

                    function Gr(t) {
                        return t >> 17 & 32767
                    }

                    function Wr(t) {
                        return 2 | t
                    }

                    function Xr(t) {
                        return (131068 & t) >> 2
                    }

                    function Qr(t, e) {
                        return -131069 & t | e << 2
                    }

                    function Zr(t) {
                        return 1 | t
                    }

                    function Yr(t, e) {
                        const n = t.contentQueries;
                        if (null !== n)
                            for (let r = 0; r < n.length; r += 2) {
                                const s = n[r],
                                    i = n[r + 1];
                                if (-1 !== i) {
                                    const n = t.data[i];
                                    Ae(s), n.contentQueries(2, e[i], i)
                                }
                            }
                    }

                    function Jr(t, e, n) {
                        return Yt(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
                    }

                    function ts(t, e, n, r, s, i, o, a, c, l) {
                        const u = e.blueprint.slice();
                        return u[0] = s, u[2] = 140 | r, ue(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = c || t && t[12] || null, u[9] = l || t && t[9] || null, u[6] = i, u[16] = 2 == e.type ? t[16] : u, u
                    }

                    function es(t, e, n, r, s, i) {
                        const o = n + Rt,
                            a = t.data[o] || function (t, e, n, r, s, i) {
                                const o = ye(),
                                    a = ve(),
                                    c = a ? o : o && o.parent,
                                    l = t.data[n] = ds(0, c && c !== e ? c : null, r, n, s, i);
                                return null === t.firstChild && (t.firstChild = l), o && (!a || null != o.child || null === l.parent && 2 !== o.type ? a || (o.next = l) : o.child = l), l
                            }(t, e, o, r, s, i);
                        return be(a, !0), a
                    }

                    function ns(t, e, n) {
                        Pe(e, e[6]);
                        try {
                            const r = t.viewQuery;
                            null !== r && Ds(1, r, n);
                            const s = t.template;
                            null !== s && is(t, e, s, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Yr(t, e), t.staticViewQueries && Ds(2, t.viewQuery, n);
                            const i = t.components;
                            null !== i && function (t, e) {
                                for (let n = 0; n < e.length; n++) As(t, e[n])
                            }(e, i)
                        } catch (r) {
                            throw t.firstCreatePass && (t.incompleteFirstPass = !0), r
                        } finally {
                            e[2] &= -5, Me()
                        }
                    }

                    function rs(t, e, n, r) {
                        const s = e[2];
                        if (256 == (256 & s)) return;
                        Pe(e, e[6]);
                        const i = we();
                        try {
                            ue(e), de.lFrame.bindingIndex = t.bindingStartIndex, null !== n && is(t, e, n, 2, r);
                            const o = 3 == (3 & s);
                            if (!i)
                                if (o) {
                                    const n = t.preOrderCheckHooks;
                                    null !== n && Ve(e, n, null)
                                } else {
                                    const n = t.preOrderHooks;
                                    null !== n && $e(e, n, 0, null), Be(e, 0)
                                } if (function (t) {
                                    for (let e = Ur(t); null !== e; e = Vr(e)) {
                                        if (!e[2]) continue;
                                        const t = e[9];
                                        for (let e = 0; e < t.length; e++) {
                                            const n = t[e],
                                                r = n[3];
                                            0 == (1024 & n[2]) && he(r, 1), n[2] |= 1024
                                        }
                                    }
                                }(e), function (t) {
                                    for (let e = Ur(t); null !== e; e = Vr(e))
                                        for (let t = Dt; t < e.length; t++) {
                                            const n = e[t],
                                                r = n[1];
                                            ce(n) && rs(r, n, r.template, n[8])
                                        }
                                }(e), null !== t.contentQueries && Yr(t, e), !i)
                                if (o) {
                                    const n = t.contentCheckHooks;
                                    null !== n && Ve(e, n)
                                } else {
                                    const n = t.contentHooks;
                                    null !== n && $e(e, n, 1), Be(e, 1)
                                }!
                            function (t, e) {
                                try {
                                    const n = t.expandoInstructions;
                                    if (null !== n) {
                                        let r = t.expandoStartIndex,
                                            s = -1,
                                            i = -1;
                                        for (let t = 0; t < n.length; t++) {
                                            const o = n[t];
                                            "number" == typeof o ? o <= 0 ? (i = 0 - o, He(i), r += 9 + n[++t], s = r) : r += o : (null !== o && (ke(r, s), o(2, e[s])), s++)
                                        }
                                    }
                                } finally {
                                    He(-1)
                                }
                            }(t, e);
                            const a = t.components;
                            null !== a && function (t, e) {
                                for (let n = 0; n < e.length; n++) js(t, e[n])
                            }(e, a);
                            const c = t.viewQuery;
                            if (null !== c && Ds(2, c, r), !i)
                                if (o) {
                                    const n = t.viewCheckHooks;
                                    null !== n && Ve(e, n)
                                } else {
                                    const n = t.viewHooks;
                                    null !== n && $e(e, n, 2), Be(e, 2)
                                }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), i || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, he(e[3], -1))
                        } finally {
                            Me()
                        }
                    }

                    function ss(t, e, n, r) {
                        const s = e[10],
                            i = !we(),
                            o = ae(e);
                        try {
                            i && !o && s.begin && s.begin(), o && ns(t, e, r), rs(t, e, n, r)
                        } finally {
                            i && !o && s.end && s.end()
                        }
                    }

                    function is(t, e, n, r, s) {
                        const i = Fe();
                        try {
                            He(-1), 2 & r && e.length > Rt && qr(t, e, 0, we()), n(r, s)
                        } finally {
                            He(i)
                        }
                    }

                    function os(t, e, n) {
                        if (Ft(e)) {
                            const r = e.directiveEnd;
                            for (let s = e.directiveStart; s < r; s++) {
                                const e = t.data[s];
                                e.contentQueries && e.contentQueries(1, n[s], s)
                            }
                        }
                    }

                    function as(t, e, n) {
                        fe() && (function (t, e, n, r) {
                            const s = n.directiveStart,
                                i = n.directiveEnd;
                            t.firstCreatePass || dn(n, e), Er(r, e);
                            const o = n.initialInputs;
                            for (let a = s; a < i; a++) {
                                const r = t.data[a],
                                    i = Ut(r);
                                i && Es(e, n, r);
                                const c = wn(e, t, a, n);
                                Er(c, e), null !== o && Os(0, a - s, c, r, 0, o), i && (ie(n.index, e)[8] = c)
                            }
                        }(t, e, n, ne(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
                            const r = n.directiveStart,
                                s = n.directiveEnd,
                                i = t.expandoInstructions,
                                o = t.firstCreatePass,
                                a = n.index - Rt,
                                c = de.lFrame.currentDirectiveIndex;
                            try {
                                He(a);
                                for (let n = r; n < s; n++) {
                                    const r = t.data[n],
                                        s = e[n];
                                    Te(n), null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? bs(r, s) : o && i.push(null)
                                }
                            } finally {
                                He(-1), Te(c)
                            }
                        }(t, e, n))
                    }

                    function cs(t, e, n = ne) {
                        const r = e.localNames;
                        if (null !== r) {
                            let s = e.index + 1;
                            for (let i = 0; i < r.length; i += 2) {
                                const o = r[i + 1],
                                    a = -1 === o ? n(e, t) : t[o];
                                t[s++] = a
                            }
                        }
                    }

                    function ls(t) {
                        const e = t.tView;
                        return null === e || e.incompleteFirstPass ? t.tView = us(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e
                    }

                    function us(t, e, n, r, s, i, o, a, c, l) {
                        const u = Rt + r,
                            h = u + s,
                            d = function (t, e) {
                                const n = [];
                                for (let r = 0; r < e; r++) n.push(r < t ? null : Hr);
                                return n
                            }(u, h);
                        return d[1] = {
                            type: t,
                            id: e,
                            blueprint: d,
                            template: n,
                            queries: null,
                            viewQuery: a,
                            node: null,
                            data: d.slice().fill(null, u),
                            bindingStartIndex: u,
                            expandoStartIndex: h,
                            expandoInstructions: null,
                            firstCreatePass: !0,
                            firstUpdatePass: !0,
                            staticViewQueries: !1,
                            staticContentQueries: !1,
                            preOrderHooks: null,
                            preOrderCheckHooks: null,
                            contentHooks: null,
                            contentCheckHooks: null,
                            viewHooks: null,
                            viewCheckHooks: null,
                            destroyHooks: null,
                            cleanup: null,
                            contentQueries: null,
                            components: null,
                            directiveRegistry: "function" == typeof i ? i() : i,
                            pipeRegistry: "function" == typeof o ? o() : o,
                            firstChild: null,
                            schemas: c,
                            consts: l,
                            incompleteFirstPass: !1
                        }
                    }

                    function hs(t, e, n, r) {
                        const s = Ms(e);
                        s.push(n), t.firstCreatePass && function (t) {
                            return t.cleanup || (t.cleanup = [])
                        }(t).push(r, s.length - 1)
                    }

                    function ds(t, e, n, r, s, i) {
                        return {
                            type: n,
                            index: r,
                            injectorIndex: e ? e.injectorIndex : -1,
                            directiveStart: -1,
                            directiveEnd: -1,
                            directiveStylingLast: -1,
                            propertyBindings: null,
                            flags: 0,
                            providerIndexes: 0,
                            tagName: s,
                            attrs: i,
                            mergedAttrs: null,
                            localNames: null,
                            initialInputs: void 0,
                            inputs: null,
                            outputs: null,
                            tViews: null,
                            next: null,
                            projectionNext: null,
                            child: null,
                            parent: e,
                            projection: null,
                            styles: null,
                            stylesWithoutHost: null,
                            residualStyles: void 0,
                            classes: null,
                            classesWithoutHost: null,
                            residualClasses: void 0,
                            classBindings: 0,
                            styleBindings: 0
                        }
                    }

                    function fs(t, e, n) {
                        for (let r in t)
                            if (t.hasOwnProperty(r)) {
                                const s = t[r];
                                (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : n[r] = [e, s]
                            } return n
                    }

                    function ps(t, e, n, r, s, i, o, a) {
                        const c = ne(e, n);
                        let l, u = e.inputs;
                        var h;
                        !a && null != u && (l = u[r]) ? (Hs(t, n, l, r, s), Ht(e) && function (t, e) {
                            const n = ie(e, t);
                            16 & n[2] || (n[2] |= 64)
                        }(n, e.index)) : 3 === e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, e.tagName || "", r) : s, Yt(i) ? i.setProperty(c, r, s) : Qe(r) || (c.setProperty ? c.setProperty(r, s) : c[r] = s))
                    }

                    function ms(t, e, n, r) {
                        let s = !1;
                        if (fe()) {
                            const i = function (t, e, n) {
                                    const r = t.directiveRegistry;
                                    let s = null;
                                    if (r)
                                        for (let i = 0; i < r.length; i++) {
                                            const o = r[i];
                                            Dr(n, o.selectors, !1) && (s || (s = []), gn(dn(n, e), t, o.type), Ut(o) ? (2 & n.flags && xr(n), _s(t, n), s.unshift(o)) : s.push(o))
                                        }
                                    return s
                                }(t, e, n),
                                o = null === r ? null : {
                                    "": -1
                                };
                            if (null !== i) {
                                let r = 0;
                                s = !0, Ss(n, t.data.length, i.length);
                                for (let t = 0; t < i.length; t++) {
                                    const e = i[t];
                                    e.providersResolver && e.providersResolver(e)
                                }
                                vs(t, n, i.length);
                                let a = !1,
                                    c = !1;
                                for (let s = 0; s < i.length; s++) {
                                    const l = i[s];
                                    n.mergedAttrs = Ze(n.mergedAttrs, l.hostAttrs), Cs(t, e, l), ws(t.data.length - 1, l, o), null !== l.contentQueries && (n.flags |= 8), null === l.hostBindings && null === l.hostAttrs && 0 === l.hostVars || (n.flags |= 128);
                                    const u = l.type.prototype;
                                    !a && (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - Rt), a = !0), c || !u.ngOnChanges && !u.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - Rt), c = !0), gs(t, l), r += l.hostVars
                                }! function (t, e) {
                                    const n = e.directiveEnd,
                                        r = t.data,
                                        s = e.attrs,
                                        i = [];
                                    let o = null,
                                        a = null;
                                    for (let c = e.directiveStart; c < n; c++) {
                                        const t = r[c],
                                            n = t.inputs,
                                            l = null === s || Ar(e) ? null : ks(n, s);
                                        i.push(l), o = fs(n, c, o), a = fs(t.outputs, c, a)
                                    }
                                    null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = i, e.inputs = o, e.outputs = a
                                }(t, n), ys(t, e, r)
                            }
                            o && function (t, e, n) {
                                if (e) {
                                    const r = t.localNames = [];
                                    for (let t = 0; t < e.length; t += 2) {
                                        const s = n[e[t + 1]];
                                        if (null == s) throw new Error(`Export of name '${e[t+1]}' not found!`);
                                        r.push(e[t], s)
                                    }
                                }
                            }(n, r, o)
                        }
                        return n.mergedAttrs = Ze(n.mergedAttrs, n.attrs), s
                    }

                    function gs(t, e) {
                        const n = t.expandoInstructions;
                        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
                    }

                    function ys(t, e, n) {
                        for (let r = 0; r < n; r++) e.push(Hr), t.blueprint.push(Hr), t.data.push(null)
                    }

                    function bs(t, e) {
                        null !== t.hostBindings && t.hostBindings(1, e)
                    }

                    function vs(t, e, n) {
                        const r = Rt - e.index,
                            s = t.data.length - (1048575 & e.providerIndexes);
                        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n)
                    }

                    function _s(t, e) {
                        e.flags |= 2, (t.components || (t.components = [])).push(e.index)
                    }

                    function ws(t, e, n) {
                        if (n) {
                            if (e.exportAs)
                                for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
                            Ut(e) && (n[""] = t)
                        }
                    }

                    function Ss(t, e, n) {
                        t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
                    }

                    function Cs(t, e, n) {
                        t.data.push(n);
                        const r = n.factory || (n.factory = Pt(n.type)),
                            s = new Ge(r, Ut(n), null);
                        t.blueprint.push(s), e.push(s)
                    }

                    function Es(t, e, n) {
                        const r = ne(e, t),
                            s = ls(n),
                            i = t[10],
                            o = Is(t, ts(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
                        t[e.index] = o
                    }

                    function xs(t, e, n, r, s, i) {
                        const o = ne(t, e),
                            a = e[11];
                        if (null == r) Yt(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
                        else {
                            const e = null == s ? rn(r) : s(r, t.tagName || "", n);
                            Yt(a) ? a.setAttribute(o, n, e, i) : i ? o.setAttributeNS(i, n, e) : o.setAttribute(n, e)
                        }
                    }

                    function Os(t, e, n, r, s, i) {
                        const o = i[e];
                        if (null !== o) {
                            const t = r.setInput;
                            for (let e = 0; e < o.length;) {
                                const s = o[e++],
                                    i = o[e++],
                                    a = o[e++];
                                null !== t ? r.setInput(n, a, s, i) : n[i] = a
                            }
                        }
                    }

                    function ks(t, e) {
                        let n = null,
                            r = 0;
                        for (; r < e.length;) {
                            const s = e[r];
                            if (0 !== s)
                                if (5 !== s) {
                                    if ("number" == typeof s) break;
                                    t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), r += 2
                                } else r += 2;
                            else r += 4
                        }
                        return n
                    }

                    function Ts(t, e, n, r) {
                        return new Array(t, !0, !1, e, null, 0, r, n, null, null)
                    }

                    function js(t, e) {
                        const n = ie(e, t);
                        if (ce(n)) {
                            const t = n[1];
                            80 & n[2] ? rs(t, n, t.template, n[8]) : n[5] > 0 && function t(e) {
                                for (let r = Ur(e); null !== r; r = Vr(r))
                                    for (let e = Dt; e < r.length; e++) {
                                        const n = r[e];
                                        if (1024 & n[2]) {
                                            const t = n[1];
                                            rs(t, n, t.template, n[8])
                                        } else n[5] > 0 && t(n)
                                    }
                                const n = e[1].components;
                                if (null !== n)
                                    for (let r = 0; r < n.length; r++) {
                                        const s = ie(n[r], e);
                                        ce(s) && s[5] > 0 && t(s)
                                    }
                            }(n)
                        }
                    }

                    function As(t, e) {
                        const n = ie(e, t),
                            r = n[1];
                        ! function (t, e) {
                            for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
                        }(r, n), ns(r, n, n[8])
                    }

                    function Is(t, e) {
                        return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
                    }

                    function Ps(t) {
                        for (; t;) {
                            t[2] |= 64;
                            const e = zr(t);
                            if (Vt(t) && !e) return t;
                            t = e
                        }
                        return null
                    }

                    function Ns(t, e, n) {
                        const r = e[10];
                        r.begin && r.begin();
                        try {
                            rs(t, e, t.template, n)
                        } catch (s) {
                            throw Fs(e, s), s
                        } finally {
                            r.end && r.end()
                        }
                    }

                    function Rs(t) {
                        ! function (t) {
                            for (let e = 0; e < t.components.length; e++) {
                                const n = t.components[e],
                                    r = oe(n),
                                    s = r[1];
                                ss(s, r, s.template, n)
                            }
                        }(t[8])
                    }

                    function Ds(t, e, n) {
                        Ae(0), e(t, n)
                    }
                    const Ls = (() => Promise.resolve(null))();

                    function Ms(t) {
                        return t[7] || (t[7] = [])
                    }

                    function Fs(t, e) {
                        const n = t[9],
                            r = n ? n.get(An, null) : null;
                        r && r.handleError(e)
                    }

                    function Hs(t, e, n, r, s) {
                        for (let i = 0; i < n.length;) {
                            const o = n[i++],
                                a = n[i++],
                                c = e[o],
                                l = t.data[o];
                            null !== l.setInput ? l.setInput(c, s, r, a) : c[a] = s
                        }
                    }

                    function zs(t, e, n) {
                        const r = ee(e, t),
                            s = t[11];
                        Yt(s) ? s.setValue(r, n) : r.textContent = n
                    }

                    function Us(t, e) {
                        const n = e[3];
                        return -1 === t.index ? Mt(n) ? n : null : n
                    }

                    function Vs(t, e) {
                        const n = Us(t, e);
                        return n ? ei(e[11], n[7]) : null
                    }

                    function $s(t, e, n, r, s) {
                        if (null != r) {
                            let i, o = !1;
                            Mt(r) ? i = r : Lt(r) && (o = !0, r = r[0]);
                            const a = te(r);
                            0 === t && null !== n ? null == s ? Js(e, n, a) : Ys(e, n, a, s || null) : 1 === t && null !== n ? Ys(e, n, a, s || null) : 2 === t ? ii(e, a, o) : 3 === t && e.destroyNode(a), null != i && function (t, e, n, r, s) {
                                const i = n[7];
                                i !== te(n) && $s(e, t, r, i, s);
                                for (let o = Dt; o < n.length; o++) {
                                    const s = n[o];
                                    ai(s[1], s, t, e, r, i)
                                }
                            }(e, t, i, n, s)
                        }
                    }

                    function Bs(t, e) {
                        return Yt(e) ? e.createText(t) : e.createTextNode(t)
                    }

                    function qs(t, e, n, r) {
                        const s = Vs(t.node, e);
                        s && ai(t, e, e[11], n ? 1 : 2, s, r)
                    }

                    function Ks(t, e) {
                        const n = t[9],
                            r = n.indexOf(e);
                        1024 & e[2] && he(e[3], -1), n.splice(r, 1)
                    }

                    function Gs(t, e) {
                        if (t.length <= Dt) return;
                        const n = Dt + e,
                            r = t[n];
                        if (r) {
                            const s = r[17];
                            null !== s && s !== t && Ks(s, r), e > 0 && (t[n - 1][4] = r[4]);
                            const i = dt(t, Dt + e);
                            qs(r[1], r, !1, null);
                            const o = i[19];
                            null !== o && o.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -129
                        }
                        return r
                    }

                    function Ws(t, e) {
                        if (!(256 & e[2])) {
                            const n = e[11];
                            Yt(n) && n.destroyNode && ai(t, e, n, 3, null, null),
                                function (t) {
                                    let e = t[13];
                                    if (!e) return Qs(t[1], t);
                                    for (; e;) {
                                        let n = null;
                                        if (Lt(e)) n = e[13];
                                        else {
                                            const t = e[10];
                                            t && (n = t)
                                        }
                                        if (!n) {
                                            for (; e && !e[4] && e !== t;) Lt(e) && Qs(e[1], e), e = Xs(e, t);
                                            null === e && (e = t), Lt(e) && Qs(e[1], e), n = e && e[4]
                                        }
                                        e = n
                                    }
                                }(e)
                        }
                    }

                    function Xs(t, e) {
                        let n;
                        return Lt(t) && (n = t[6]) && 2 === n.type ? Us(n, t) : t[3] === e ? null : t[3]
                    }

                    function Qs(t, e) {
                        if (!(256 & e[2])) {
                            e[2] &= -129, e[2] |= 256,
                                function (t, e) {
                                    let n;
                                    if (null != t && null != (n = t.destroyHooks))
                                        for (let r = 0; r < n.length; r += 2) {
                                            const t = e[n[r]];
                                            if (!(t instanceof Ge)) {
                                                const e = n[r + 1];
                                                if (Array.isArray(e))
                                                    for (let n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]);
                                                else e.call(t)
                                            }
                                        }
                                }(t, e),
                                function (t, e) {
                                    const n = t.cleanup;
                                    if (null !== n) {
                                        const t = e[7];
                                        for (let r = 0; r < n.length - 1; r += 2)
                                            if ("string" == typeof n[r]) {
                                                const s = n[r + 1],
                                                    i = "function" == typeof s ? s(e) : te(e[s]),
                                                    o = t[n[r + 2]],
                                                    a = n[r + 3];
                                                "boolean" == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), r += 2
                                            } else n[r].call(t[n[r + 1]]);
                                        e[7] = null
                                    }
                                }(t, e);
                            const n = e[6];
                            n && 3 === n.type && Yt(e[11]) && e[11].destroy();
                            const r = e[17];
                            if (null !== r && Mt(e[3])) {
                                r !== e[3] && Ks(r, e);
                                const n = e[19];
                                null !== n && n.detachView(t)
                            }
                        }
                    }

                    function Zs(t, e, n) {
                        let r = e.parent;
                        for (; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent;
                        if (null == r) {
                            const t = n[6];
                            return 2 === t.type ? Vs(t, n) : n[0]
                        }
                        if (e && 5 === e.type && 4 & e.flags) return ne(e, n).parentNode;
                        if (2 & r.flags) {
                            const e = t.data,
                                n = e[e[r.index].directiveStart].encapsulation;
                            if (n !== bt.ShadowDom && n !== bt.Native) return null
                        }
                        return ne(r, n)
                    }

                    function Ys(t, e, n, r) {
                        Yt(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0)
                    }

                    function Js(t, e, n) {
                        Yt(t) ? t.appendChild(e, n) : e.appendChild(n)
                    }

                    function ti(t, e, n, r) {
                        null !== r ? Ys(t, e, n, r) : Js(t, e, n)
                    }

                    function ei(t, e) {
                        return Yt(t) ? t.parentNode(e) : e.parentNode
                    }

                    function ni(t, e) {
                        if (2 === t.type) {
                            const n = Us(t, e);
                            return null === n ? null : si(n.indexOf(e, Dt) - Dt, n)
                        }
                        return 4 === t.type || 5 === t.type ? ne(t, e) : null
                    }

                    function ri(t, e, n, r) {
                        const s = Zs(t, r, e);
                        if (null != s) {
                            const t = e[11],
                                i = ni(r.parent || e[6], e);
                            if (Array.isArray(n))
                                for (let e = 0; e < n.length; e++) ti(t, s, n[e], i);
                            else ti(t, s, n, i)
                        }
                    }

                    function si(t, e) {
                        const n = Dt + t + 1;
                        if (n < e.length) {
                            const t = e[n],
                                r = t[1].firstChild;
                            if (null !== r) return function t(e, n) {
                                if (null !== n) {
                                    const r = n.type;
                                    if (3 === r) return ne(n, e);
                                    if (0 === r) return si(-1, e[n.index]);
                                    if (4 === r || 5 === r) {
                                        const r = n.child;
                                        if (null !== r) return t(e, r); {
                                            const t = e[n.index];
                                            return Mt(t) ? si(-1, t) : te(t)
                                        }
                                    } {
                                        const r = e[16],
                                            s = r[6],
                                            i = zr(r),
                                            o = s.projection[n.projection];
                                        return null != o ? t(i, o) : t(e, n.next)
                                    }
                                }
                                return null
                            }(t, r)
                        }
                        return e[7]
                    }

                    function ii(t, e, n) {
                        const r = ei(t, e);
                        r && function (t, e, n, r) {
                            Yt(t) ? t.removeChild(e, n, r) : e.removeChild(n)
                        }(t, r, e, n)
                    }

                    function oi(t, e, n, r, s, i, o) {
                        for (; null != n;) {
                            const a = r[n.index],
                                c = n.type;
                            o && 0 === e && (a && Er(te(a), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === c || 5 === c ? (oi(t, e, n.child, r, s, i, !1), $s(e, t, s, a, i)) : 1 === c ? li(t, e, r, n, s, i) : $s(e, t, s, a, i)), n = o ? n.projectionNext : n.next
                        }
                    }

                    function ai(t, e, n, r, s, i) {
                        oi(n, r, t.node.child, e, s, i, !1)
                    }

                    function ci(t, e, n) {
                        li(e[11], 0, e, n, Zs(t, n, e), ni(n.parent || e[6], e))
                    }

                    function li(t, e, n, r, s, i) {
                        const o = n[16],
                            a = o[6].projection[r.projection];
                        if (Array.isArray(a))
                            for (let c = 0; c < a.length; c++) $s(e, t, s, a[c], i);
                        else oi(t, e, a, o[3], s, i, !0)
                    }

                    function ui(t, e, n) {
                        Yt(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
                    }

                    function hi(t, e, n) {
                        Yt(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
                    }
                    class di {
                        constructor(t, e) {
                            this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null
                        }
                        get rootNodes() {
                            const t = this._lView;
                            return null == t[0] ? function t(e, n, r, s, i = !1) {
                                for (; null !== r;) {
                                    const o = n[r.index];
                                    if (null !== o && s.push(te(o)), Mt(o))
                                        for (let e = Dt; e < o.length; e++) {
                                            const n = o[e],
                                                r = n[1].firstChild;
                                            null !== r && t(n[1], n, r, s)
                                        }
                                    const a = r.type;
                                    if (4 === a || 5 === a) t(e, n, r.child, s);
                                    else if (1 === a) {
                                        const e = n[16],
                                            i = e[6].projection[r.projection];
                                        if (Array.isArray(i)) s.push(...i);
                                        else {
                                            const n = zr(e);
                                            t(n[1], n, i, s, !0)
                                        }
                                    }
                                    r = i ? r.projectionNext : r.next
                                }
                                return s
                            }(t[1], t, t[6].child, []) : []
                        }
                        get context() {
                            return this._lView[8]
                        }
                        get destroyed() {
                            return 256 == (256 & this._lView[2])
                        }
                        destroy() {
                            if (this._appRef) this._appRef.detachView(this);
                            else if (this._viewContainerRef) {
                                const t = this._viewContainerRef.indexOf(this);
                                t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
                            }
                            Ws(this._lView[1], this._lView)
                        }
                        onDestroy(t) {
                            hs(this._lView[1], this._lView, null, t)
                        }
                        markForCheck() {
                            Ps(this._cdRefInjectingView || this._lView)
                        }
                        detach() {
                            this._lView[2] &= -129
                        }
                        reattach() {
                            this._lView[2] |= 128
                        }
                        detectChanges() {
                            Ns(this._lView[1], this._lView, this.context)
                        }
                        checkNoChanges() {
                            ! function (t, e, n) {
                                Se(!0);
                                try {
                                    Ns(t, e, n)
                                } finally {
                                    Se(!1)
                                }
                            }(this._lView[1], this._lView, this.context)
                        }
                        attachToViewContainerRef(t) {
                            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                            this._viewContainerRef = t
                        }
                        detachFromAppRef() {
                            var t;
                            this._appRef = null, ai(this._lView[1], t = this._lView, t[11], 2, null, null)
                        }
                        attachToAppRef(t) {
                            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                            this._appRef = t
                        }
                    }
                    class fi extends di {
                        constructor(t) {
                            super(t), this._view = t
                        }
                        detectChanges() {
                            Rs(this._view)
                        }
                        checkNoChanges() {
                            ! function (t) {
                                Se(!0);
                                try {
                                    Rs(t)
                                } finally {
                                    Se(!1)
                                }
                            }(this._view)
                        }
                        get context() {
                            return null
                        }
                    }
                    let pi, mi, gi;

                    function yi(t, e, n) {
                        return pi || (pi = class extends t {}), new pi(ne(e, n))
                    }

                    function bi(t, e, n, r) {
                        return mi || (mi = class extends t {
                            constructor(t, e, n) {
                                super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
                            }
                            createEmbeddedView(t) {
                                const e = this._declarationTContainer.tViews,
                                    n = ts(this._declarationView, e, t, 16, null, e.node);
                                n[17] = this._declarationView[this._declarationTContainer.index];
                                const r = this._declarationView[19];
                                return null !== r && (n[19] = r.createEmbeddedView(e)), ns(e, n, t), new di(n)
                            }
                        }), 0 === n.type ? new mi(r, n, yi(e, n, r)) : null
                    }

                    function vi(t, e, n, r) {
                        let s;
                        gi || (gi = class extends t {
                            constructor(t, e, n) {
                                super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
                            }
                            get element() {
                                return yi(e, this._hostTNode, this._hostView)
                            }
                            get injector() {
                                return new En(this._hostTNode, this._hostView)
                            }
                            get parentInjector() {
                                const t = mn(this._hostTNode, this._hostView),
                                    e = nn(t, this._hostView),
                                    n = function (t, e, n) {
                                        if (n.parent && -1 !== n.parent.injectorIndex) {
                                            const t = n.parent.injectorIndex;
                                            let e = n.parent;
                                            for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
                                            return e
                                        }
                                        let r = en(t),
                                            s = e,
                                            i = e[6];
                                        for (; r > 1;) s = s[15], i = s[6], r--;
                                        return i
                                    }(t, this._hostView, this._hostTNode);
                                return Je(t) && null != n ? new En(n, e) : new En(null, this._hostView)
                            }
                            clear() {
                                for (; this.length > 0;) this.remove(this.length - 1)
                            }
                            get(t) {
                                return null !== this._lContainer[8] && this._lContainer[8][t] || null
                            }
                            get length() {
                                return this._lContainer.length - Dt
                            }
                            createEmbeddedView(t, e, n) {
                                const r = t.createEmbeddedView(e || {});
                                return this.insert(r, n), r
                            }
                            createComponent(t, e, n, r, s) {
                                const i = n || this.parentInjector;
                                if (!s && null == t.ngModule && i) {
                                    const t = i.get(at, null);
                                    t && (s = t)
                                }
                                const o = t.create(i, r, void 0, s);
                                return this.insert(o.hostView, e), o
                            }
                            insert(t, e) {
                                const n = t._lView,
                                    r = n[1];
                                if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                                if (this.allocateContainerIfNeeded(), Mt(n[3])) {
                                    const e = this.indexOf(t);
                                    if (-1 !== e) this.detach(e);
                                    else {
                                        const e = n[3],
                                            r = new gi(e, e[6], e[3]);
                                        r.detach(r.indexOf(t))
                                    }
                                }
                                const s = this._adjustIndex(e);
                                return function (t, e, n, r) {
                                    const s = Dt + r,
                                        i = n.length;
                                    r > 0 && (n[s - 1][4] = e), r < i - Dt ? (e[4] = n[s], ht(n, Dt + r, e)) : (n.push(e), e[4] = null), e[3] = n;
                                    const o = e[17];
                                    null !== o && n !== o && function (t, e) {
                                        const n = t[9];
                                        e[16] !== e[3][3][16] && (t[2] = !0), null === n ? t[9] = [e] : n.push(e)
                                    }(o, e);
                                    const a = e[19];
                                    null !== a && a.insertView(t), e[2] |= 128
                                }(r, n, this._lContainer, s), qs(r, n, !0, si(s, this._lContainer)), t.attachToViewContainerRef(this), ht(this._lContainer[8], s, t), t
                            }
                            move(t, e) {
                                if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                                return this.insert(t, e)
                            }
                            indexOf(t) {
                                const e = this._lContainer[8];
                                return null !== e ? e.indexOf(t) : -1
                            }
                            remove(t) {
                                this.allocateContainerIfNeeded();
                                const e = this._adjustIndex(t, -1),
                                    n = Gs(this._lContainer, e);
                                n && (dt(this._lContainer[8], e), Ws(n[1], n))
                            }
                            detach(t) {
                                this.allocateContainerIfNeeded();
                                const e = this._adjustIndex(t, -1),
                                    n = Gs(this._lContainer, e);
                                return n && null != dt(this._lContainer[8], e) ? new di(n) : null
                            }
                            _adjustIndex(t, e = 0) {
                                return null == t ? this.length + e : t
                            }
                            allocateContainerIfNeeded() {
                                null === this._lContainer[8] && (this._lContainer[8] = [])
                            }
                        });
                        const i = r[n.index];
                        if (Mt(i)) s = i;
                        else {
                            let t;
                            if (4 === n.type) t = te(i);
                            else if (t = r[11].createComment(""), Vt(r)) {
                                const e = r[11],
                                    s = ne(n, r);
                                Ys(e, ei(e, s), t, function (t, e) {
                                    return Yt(t) ? t.nextSibling(e) : e.nextSibling
                                }(e, s))
                            } else ri(r[1], r, t, n);
                            r[n.index] = s = Ts(i, r, t, n), Is(r, s)
                        }
                        return new gi(s, n, r)
                    }

                    function _i(t = !1) {
                        return function (t, e, n) {
                            if (!n && Ht(t)) {
                                const n = ie(t.index, e);
                                return new di(n, n)
                            }
                            return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new di(e[16], e) : null
                        }(ye(), pe(), t)
                    }
                    let wi = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => Si(), t
                    })();
                    const Si = _i,
                        Ci = Function,
                        Ei = new K("Set Injector scope."),
                        xi = {},
                        Oi = {},
                        ki = [];
                    let Ti = void 0;

                    function ji() {
                        return void 0 === Ti && (Ti = new ot), Ti
                    }

                    function Ai(t, e = null, n = null, r) {
                        return new Ii(t, n, e || ji(), r)
                    }
                    class Ii {
                        constructor(t, e, n, r = null) {
                            this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                            const s = [];
                            e && ut(e, n => this.processProvider(n, t, e)), ut([t], t => this.processInjectorType(t, [], s)), this.records.set(G, Ri(void 0, this));
                            const i = this.records.get(Ei);
                            this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof t ? null : T(t))
                        }
                        get destroyed() {
                            return this._destroyed
                        }
                        destroy() {
                            this.assertNotDestroyed(), this._destroyed = !0;
                            try {
                                this.onDestroy.forEach(t => t.ngOnDestroy())
                            } finally {
                                this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                            }
                        }
                        get(t, e = W, n = m.Default) {
                            this.assertNotDestroyed();
                            const r = tt(this);
                            try {
                                if (!(n & m.SkipSelf)) {
                                    let e = this.records.get(t);
                                    if (void 0 === e) {
                                        const n = ("function" == typeof (s = t) || "object" == typeof s && s instanceof K) && _(t);
                                        e = n && this.injectableDefInScope(n) ? Ri(Pi(t), xi) : null, this.records.set(t, e)
                                    }
                                    if (null != e) return this.hydrate(t, e)
                                }
                                return (n & m.Self ? ji() : this.parent).get(t, e = n & m.Optional && e === W ? null : e)
                            } catch (i) {
                                if ("NullInjectorError" === i.name) {
                                    if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(T(t)), r) throw i;
                                    return function (t, e, n, r) {
                                        const s = t.ngTempTokenPath;
                                        throw e[Q] && s.unshift(e[Q]), t.message = function (t, e, n, r = null) {
                                            t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                                            let s = T(e);
                                            if (Array.isArray(e)) s = e.map(T).join(" -> ");
                                            else if ("object" == typeof e) {
                                                let t = [];
                                                for (let n in e)
                                                    if (e.hasOwnProperty(n)) {
                                                        let r = e[n];
                                                        t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : T(r)))
                                                    } s = `{${t.join(", ")}}`
                                            }
                                            return `${n}${r?"("+r+")":""}[${s}]: ${t.replace(X,"\n  ")}`
                                        }("\n" + t.message, s, n, r), t.ngTokenPath = s, t.ngTempTokenPath = null, t
                                    }(i, t, "R3InjectorError", this.source)
                                }
                                throw i
                            } finally {
                                tt(r)
                            }
                            var s
                        }
                        _resolveInjectorDefTypes() {
                            this.injectorDefTypes.forEach(t => this.get(t))
                        }
                        toString() {
                            const t = [];
                            return this.records.forEach((e, n) => t.push(T(n))), `R3Injector[${t.join(", ")}]`
                        }
                        assertNotDestroyed() {
                            if (this._destroyed) throw new Error("Injector has already been destroyed.")
                        }
                        processInjectorType(t, e, n) {
                            if (!(t = P(t))) return !1;
                            let r = S(t);
                            const s = null == r && t.ngModule || void 0,
                                i = void 0 === s ? t : s,
                                o = -1 !== n.indexOf(i);
                            if (void 0 !== s && (r = S(s)), null == r) return !1;
                            if (null != r.imports && !o) {
                                let t;
                                n.push(i);
                                try {
                                    ut(r.imports, r => {
                                        this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r))
                                    })
                                } finally {}
                                if (void 0 !== t)
                                    for (let e = 0; e < t.length; e++) {
                                        const {
                                            ngModule: n,
                                            providers: r
                                        } = t[e];
                                        ut(r, t => this.processProvider(t, n, r || ki))
                                    }
                            }
                            this.injectorDefTypes.add(i), this.records.set(i, Ri(r.factory, xi));
                            const a = r.providers;
                            if (null != a && !o) {
                                const e = t;
                                ut(a, t => this.processProvider(t, e, a))
                            }
                            return void 0 !== s && void 0 !== t.providers
                        }
                        processProvider(t, e, n) {
                            let r = Li(t = P(t)) ? t : P(t && t.provide);
                            const s = function (t, e, n) {
                                return Di(t) ? Ri(void 0, t.useValue) : Ri(Ni(t, e, n), xi)
                            }(t, e, n);
                            if (Li(t) || !0 !== t.multi) {
                                const t = this.records.get(r);
                                t && void 0 !== t.multi && Or()
                            } else {
                                let e = this.records.get(r);
                                e ? void 0 === e.multi && Or() : (e = Ri(void 0, xi, !0), e.factory = () => it(e.multi), this.records.set(r, e)), r = t, e.multi.push(t)
                            }
                            this.records.set(r, s)
                        }
                        hydrate(t, e) {
                            var n;
                            return e.value === Oi ? function (t) {
                                throw new Error("Cannot instantiate cyclic dependency! " + t)
                            }(T(t)) : e.value === xi && (e.value = Oi, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
                        }
                        injectableDefInScope(t) {
                            return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
                        }
                    }

                    function Pi(t) {
                        const e = _(t),
                            n = null !== e ? e.factory : Pt(t);
                        if (null !== n) return n;
                        const r = S(t);
                        if (null !== r) return r.factory;
                        if (t instanceof K) throw new Error(`Token ${T(t)} is missing a \u0275prov definition.`);
                        if (t instanceof Function) return function (t) {
                            const e = t.length;
                            if (e > 0) {
                                const n = ft(e, "?");
                                throw new Error(`Can't resolve all parameters for ${T(t)}: (${n.join(", ")}).`)
                            }
                            const n = function (t) {
                                const e = t && (t[C] || t[O] || t[x] && t[x]());
                                if (e) {
                                    const n = function (t) {
                                        if (t.hasOwnProperty("name")) return t.name;
                                        const e = ("" + t).match(/^function\s*([^\s(]+)/);
                                        return null === e ? "" : e[1]
                                    }(t);
                                    return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), e
                                }
                                return null
                            }(t);
                            return null !== n ? () => n.factory(t) : () => new t
                        }(t);
                        throw new Error("unreachable")
                    }

                    function Ni(t, e, n) {
                        let r = void 0;
                        if (Li(t)) {
                            const e = P(t);
                            return Pt(e) || Pi(e)
                        }
                        if (Di(t)) r = () => P(t.useValue);
                        else if ((s = t) && s.useFactory) r = () => t.useFactory(...it(t.deps || []));
                        else if (function (t) {
                                return !(!t || !t.useExisting)
                            }(t)) r = () => rt(P(t.useExisting));
                        else {
                            const s = P(t && (t.useClass || t.provide));
                            if (s || function (t, e, n) {
                                    let r = "";
                                    throw t && e && (r = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${T(t)}'` + r)
                                }(e, n, t), ! function (t) {
                                    return !!t.deps
                                }(t)) return Pt(s) || Pi(s);
                            r = () => new s(...it(t.deps))
                        }
                        var s;
                        return r
                    }

                    function Ri(t, e, n = !1) {
                        return {
                            factory: t,
                            value: e,
                            multi: n ? [] : void 0
                        }
                    }

                    function Di(t) {
                        return null !== t && "object" == typeof t && Z in t
                    }

                    function Li(t) {
                        return "function" == typeof t
                    }
                    const Mi = function (t, e, n) {
                        return function (t, e = null, n = null, r) {
                            const s = Ai(t, e, n, r);
                            return s._resolveInjectorDefTypes(), s
                        }({
                            name: n
                        }, e, t, n)
                    };
                    let Fi = (() => {
                        class t {
                            static create(t, e) {
                                return Array.isArray(t) ? Mi(t, e, "") : Mi(t.providers, t.parent, t.name || "")
                            }
                        }
                        return t.THROW_IF_NOT_FOUND = W, t.NULL = new ot, t.\u0275prov = b({
                            token: t,
                            providedIn: "any",
                            factory: () => rt(G)
                        }), t.__NG_ELEMENT_ID__ = -1, t
                    })();
                    const Hi = new K("AnalyzeForEntryComponents");

                    function zi(t, e, n) {
                        let r = n ? t.styles : null,
                            s = n ? t.classes : null,
                            i = 0;
                        if (null !== e)
                            for (let o = 0; o < e.length; o++) {
                                const t = e[o];
                                "number" == typeof t ? i = t : 1 == i ? s = j(s, t) : 2 == i && (r = j(r, t + ": " + e[++o] + ";"))
                            }
                        n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = s : t.classesWithoutHost = s
                    }
                    let Ui = null;

                    function Vi() {
                        if (!Ui) {
                            const t = F.Symbol;
                            if (t && t.iterator) Ui = t.iterator;
                            else {
                                const t = Object.getOwnPropertyNames(Map.prototype);
                                for (let e = 0; e < t.length; ++e) {
                                    const n = t[e];
                                    "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Ui = n)
                                }
                            }
                        }
                        return Ui
                    }
                    class $i {
                        constructor(t) {
                            this.wrapped = t
                        }
                        static wrap(t) {
                            return new $i(t)
                        }
                        static unwrap(t) {
                            return $i.isWrapped(t) ? t.wrapped : t
                        }
                        static isWrapped(t) {
                            return t instanceof $i
                        }
                    }

                    function Bi(t) {
                        return !!qi(t) && (Array.isArray(t) || !(t instanceof Map) && Vi() in t)
                    }

                    function qi(t) {
                        return null !== t && ("function" == typeof t || "object" == typeof t)
                    }

                    function Ki(t, e, n) {
                        return t[e] = n
                    }

                    function Gi(t, e, n) {
                        return !Object.is(t[e], n) && (t[e] = n, !0)
                    }

                    function Wi(t, e, n, r) {
                        const s = Gi(t, e, n);
                        return Gi(t, e + 1, r) || s
                    }

                    function Xi(t, e, n, r) {
                        const s = pe();
                        return Gi(s, xe(), e) && (me(), xs(ze(), s, t, e, n, r)), Xi
                    }

                    function Qi(t, e, n, r) {
                        return Gi(t, xe(), n) ? e + rn(n) + r : Hr
                    }

                    function Zi(t, e, n, r, s, i, o, a) {
                        const c = pe(),
                            l = me(),
                            u = t + Rt,
                            h = l.firstCreatePass ? function (t, e, n, r, s, i, o, a, c) {
                                const l = e.consts,
                                    u = es(e, n[6], t, 0, o || null, le(l, a));
                                ms(e, n, u, le(l, c)), Ue(e, u);
                                const h = u.tViews = us(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, l),
                                    d = ds(0, null, 2, -1, null, null);
                                return d.injectorIndex = u.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u
                            }(t, l, c, e, n, r, s, i, o) : l.data[u];
                        be(h, !1);
                        const d = c[11].createComment("");
                        ri(l, c, d, h), Er(d, c), Is(c, c[u] = Ts(d, c, d, h)), zt(h) && as(l, c, h), null != o && cs(c, h, a)
                    }

                    function Yi(t) {
                        return se(de.lFrame.contextLView, t)
                    }

                    function Ji(t, e = m.Default) {
                        const n = pe();
                        return null == n ? rt(t, e) : yn(ye(), n, P(t), e)
                    }

                    function to(t) {
                        return function (t, e) {
                            if ("class" === e) return t.classes;
                            if ("style" === e) return t.styles;
                            const n = t.attrs;
                            if (n) {
                                const t = n.length;
                                let r = 0;
                                for (; r < t;) {
                                    const s = n[r];
                                    if (Xe(s)) break;
                                    if (0 === s) r += 2;
                                    else if ("number" == typeof s)
                                        for (r++; r < t && "string" == typeof n[r];) r++;
                                    else {
                                        if (s === e) return n[r + 1];
                                        r += 2
                                    }
                                }
                            }
                            return null
                        }(ye(), t)
                    }

                    function eo(t, e, n) {
                        const r = pe();
                        return Gi(r, xe(), e) && ps(me(), ze(), r, t, e, r[11], n, !1), eo
                    }

                    function no(t, e, n, r, s) {
                        const i = s ? "class" : "style";
                        Hs(t, n, e.inputs[i], i, r)
                    }

                    function ro(t, e, n, r) {
                        const s = pe(),
                            i = me(),
                            o = Rt + t,
                            a = s[11],
                            c = s[o] = Jr(e, a, de.lFrame.currentNamespace),
                            l = i.firstCreatePass ? function (t, e, n, r, s, i, o) {
                                const a = e.consts,
                                    c = le(a, i),
                                    l = es(e, n[6], t, 3, s, c);
                                return ms(e, n, l, le(a, o)), null !== l.attrs && zi(l, l.attrs, !1), null !== l.mergedAttrs && zi(l, l.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, l), l
                            }(t, i, s, 0, e, n, r) : i.data[o];
                        be(l, !0);
                        const u = l.mergedAttrs;
                        null !== u && We(a, c, u);
                        const h = l.classes;
                        null !== h && hi(a, c, h);
                        const d = l.styles;
                        null !== d && ui(a, c, d), ri(i, s, c, l), 0 === de.lFrame.elementDepthCount && Er(c, s), de.lFrame.elementDepthCount++, zt(l) && (as(i, s, l), os(i, l, s)), null !== r && cs(s, l)
                    }

                    function so() {
                        let t = ye();
                        ve() ? _e() : (t = t.parent, be(t, !1));
                        const e = t;
                        de.lFrame.elementDepthCount--;
                        const n = me();
                        n.firstCreatePass && (Ue(n, t), Ft(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function (t) {
                            return 0 != (16 & t.flags)
                        }(e) && no(n, e, pe(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function (t) {
                            return 0 != (32 & t.flags)
                        }(e) && no(n, e, pe(), e.stylesWithoutHost, !1)
                    }

                    function io(t, e, n, r) {
                        ro(t, e, n, r), so()
                    }

                    function oo(t, e, n) {
                        const r = pe(),
                            s = me(),
                            i = t + Rt,
                            o = s.firstCreatePass ? function (t, e, n, r, s) {
                                const i = e.consts,
                                    o = le(i, r),
                                    a = es(e, n[6], t, 4, "ng-container", o);
                                return null !== o && zi(a, o, !0), ms(e, n, a, le(i, s)), null !== e.queries && e.queries.elementStart(e, a), a
                            }(t, s, r, e, n) : s.data[i];
                        be(o, !0);
                        const a = r[i] = r[11].createComment("");
                        ri(s, r, a, o), Er(a, r), zt(o) && (as(s, r, o), os(s, o, r)), null != n && cs(r, o)
                    }

                    function ao() {
                        let t = ye();
                        const e = me();
                        ve() ? _e() : (t = t.parent, be(t, !1)), e.firstCreatePass && (Ue(e, t), Ft(t) && e.queries.elementEnd(t))
                    }

                    function co() {
                        return pe()
                    }

                    function lo(t) {
                        return !!t && "function" == typeof t.then
                    }

                    function uo(t) {
                        return !!t && "function" == typeof t.subscribe
                    }

                    function ho(t, e, n = !1, r) {
                        const s = pe(),
                            i = me(),
                            o = ye();
                        return function (t, e, n, r, s, i, o = !1, a) {
                            const c = zt(r),
                                l = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
                                u = Ms(e);
                            let h = !0;
                            if (3 === r.type) {
                                const d = ne(r, e),
                                    f = a ? a(d) : vt,
                                    p = f.target || d,
                                    m = u.length,
                                    g = a ? t => a(te(t[r.index])).target : r.index;
                                if (Yt(n)) {
                                    let o = null;
                                    if (!a && c && (o = function (t, e, n, r) {
                                            const s = t.cleanup;
                                            if (null != s)
                                                for (let i = 0; i < s.length - 1; i += 2) {
                                                    const t = s[i];
                                                    if (t === n && s[i + 1] === r) {
                                                        const t = e[7],
                                                            n = s[i + 2];
                                                        return t.length > n ? t[n] : null
                                                    }
                                                    "string" == typeof t && (i += 2)
                                                }
                                            return null
                                        }(t, e, s, r.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i, o.__ngLastListenerFn__ = i, h = !1;
                                    else {
                                        i = po(r, e, i, !1);
                                        const t = n.listen(f.name || p, s, i);
                                        u.push(i, t), l && l.push(s, g, m, m + 1)
                                    }
                                } else i = po(r, e, i, !0), p.addEventListener(s, i, o), u.push(i), l && l.push(s, g, m, o)
                            }
                            const d = r.outputs;
                            let f;
                            if (h && null !== d && (f = d[s])) {
                                const t = f.length;
                                if (t)
                                    for (let n = 0; n < t; n += 2) {
                                        const t = e[f[n]][f[n + 1]].subscribe(i),
                                            o = u.length;
                                        u.push(i, t), l && l.push(s, r.index, o, -(o + 1))
                                    }
                            }
                        }(i, s, s[11], o, t, e, n, r), ho
                    }

                    function fo(t, e, n) {
                        try {
                            return !1 !== e(n)
                        } catch (r) {
                            return Fs(t, r), !1
                        }
                    }

                    function po(t, e, n, r) {
                        return function s(i) {
                            if (i === Function) return n;
                            const o = 2 & t.flags ? ie(t.index, e) : e;
                            0 == (32 & e[2]) && Ps(o);
                            let a = fo(e, n, i),
                                c = s.__ngNextListenerFn__;
                            for (; c;) a = fo(e, c, i) && a, c = c.__ngNextListenerFn__;
                            return r && !1 === a && (i.preventDefault(), i.returnValue = !1), a
                        }
                    }

                    function mo(t = 1) {
                        return function (t) {
                            return (de.lFrame.contextLView = function (t, e) {
                                for (; t > 0;) e = e[15], t--;
                                return e
                            }(t, de.lFrame.contextLView))[8]
                        }(t)
                    }

                    function go(t, e) {
                        let n = null;
                        const r = function (t) {
                            const e = t.attrs;
                            if (null != e) {
                                const t = e.indexOf(5);
                                if (0 == (1 & t)) return e[t + 1]
                            }
                            return null
                        }(t);
                        for (let s = 0; s < e.length; s++) {
                            const i = e[s];
                            if ("*" !== i) {
                                if (null === r ? Dr(t, i, !0) : Lr(r, i)) return s
                            } else n = s
                        }
                        return n
                    }

                    function yo(t) {
                        const e = pe()[16][6];
                        if (!e.projection) {
                            const n = e.projection = ft(t ? t.length : 1, null),
                                r = n.slice();
                            let s = e.child;
                            for (; null !== s;) {
                                const e = t ? go(s, t) : 0;
                                null !== e && (r[e] ? r[e].projectionNext = s : n[e] = s, r[e] = s), s = s.next
                            }
                        }
                    }
                    let bo = !1;

                    function vo(t) {
                        bo = t
                    }

                    function _o(t, e = 0, n) {
                        const r = pe(),
                            s = me(),
                            i = es(s, r[6], t, 1, null, n || null);
                        null === i.projection && (i.projection = e), _e(), bo || ci(s, r, i)
                    }

                    function wo(t, e, n) {
                        return So(t, "", e, "", n), wo
                    }

                    function So(t, e, n, r, s) {
                        const i = pe(),
                            o = Qi(i, e, n, r);
                        return o !== Hr && ps(me(), ze(), i, t, o, i[11], s, !1), So
                    }
                    const Co = [];

                    function Eo(t, e, n, r, s) {
                        const i = t[n + 1],
                            o = null === e;
                        let a = r ? Gr(i) : Xr(i),
                            c = !1;
                        for (; 0 !== a && (!1 === c || o);) {
                            const n = t[a + 1];
                            xo(t[a], e) && (c = !0, t[a + 1] = r ? Zr(n) : Wr(n)), a = r ? Gr(n) : Xr(n)
                        }
                        c && (t[n + 1] = r ? Wr(i) : Zr(i))
                    }

                    function xo(t, e) {
                        return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && gt(t, e) >= 0
                    }
                    const Oo = {
                        textEnd: 0,
                        key: 0,
                        keyEnd: 0,
                        value: 0,
                        valueEnd: 0
                    };

                    function ko(t) {
                        return t.substring(Oo.key, Oo.keyEnd)
                    }

                    function To(t, e) {
                        const n = Oo.textEnd;
                        return n === e ? -1 : (e = Oo.keyEnd = function (t, e, n) {
                            for (; e < n && t.charCodeAt(e) > 32;) e++;
                            return e
                        }(t, Oo.key = e, n), jo(t, e, n))
                    }

                    function jo(t, e, n) {
                        for (; e < n && t.charCodeAt(e) <= 32;) e++;
                        return e
                    }

                    function Ao(t, e, n) {
                        return Ro(t, e, n, !1), Ao
                    }

                    function Io(t, e) {
                        return Ro(t, e, null, !0), Io
                    }

                    function Po(t) {
                        Do(pt, No, t, !0)
                    }

                    function No(t, e) {
                        for (let n = function (t) {
                                return function (t) {
                                    Oo.key = 0, Oo.keyEnd = 0, Oo.value = 0, Oo.valueEnd = 0, Oo.textEnd = t.length
                                }(t), To(t, jo(t, 0, Oo.textEnd))
                            }(e); n >= 0; n = To(e, n)) pt(t, ko(e), !0)
                    }

                    function Ro(t, e, n, r) {
                        const s = pe(),
                            i = me(),
                            o = Oe(2);
                        i.firstUpdatePass && Mo(i, t, o, r), e !== Hr && Gi(s, o, e) && zo(i, i.data[Fe() + Rt], s, s[11], t, s[o + 1] = function (t, e) {
                            return null == t || ("string" == typeof e ? t += e : "object" == typeof t && (t = T(Mn(t)))), t
                        }(e, n), r, o)
                    }

                    function Do(t, e, n, r) {
                        const s = me(),
                            i = Oe(2);
                        s.firstUpdatePass && Mo(s, null, i, r);
                        const o = pe();
                        if (n !== Hr && Gi(o, i, n)) {
                            const a = s.data[Fe() + Rt];
                            if ($o(a, r) && !Lo(s, i)) {
                                let t = r ? a.classesWithoutHost : a.stylesWithoutHost;
                                null !== t && (n = j(t, n || "")), no(s, a, o, n, r)
                            } else ! function (t, e, n, r, s, i, o, a) {
                                s === Hr && (s = Co);
                                let c = 0,
                                    l = 0,
                                    u = 0 < s.length ? s[0] : null,
                                    h = 0 < i.length ? i[0] : null;
                                for (; null !== u || null !== h;) {
                                    const d = c < s.length ? s[c + 1] : void 0,
                                        f = l < i.length ? i[l + 1] : void 0;
                                    let p = null,
                                        m = void 0;
                                    u === h ? (c += 2, l += 2, d !== f && (p = h, m = f)) : null === h || null !== u && u < h ? (c += 2, p = u) : (l += 2, p = h, m = f), null !== p && zo(t, e, n, r, p, m, o, a), u = c < s.length ? s[c] : null, h = l < i.length ? i[l] : null
                                }
                            }(s, a, o, o[11], o[i + 1], o[i + 1] = function (t, e, n) {
                                if (null == n || "" === n) return Co;
                                const r = [],
                                    s = Mn(n);
                                if (Array.isArray(s))
                                    for (let i = 0; i < s.length; i++) t(r, s[i], !0);
                                else if ("object" == typeof s)
                                    for (const i in s) s.hasOwnProperty(i) && t(r, i, s[i]);
                                else "string" == typeof s && e(r, s);
                                return r
                            }(t, e, n), r, i)
                        }
                    }

                    function Lo(t, e) {
                        return e >= t.expandoStartIndex
                    }

                    function Mo(t, e, n, r) {
                        const s = t.data;
                        if (null === s[n + 1]) {
                            const i = s[Fe() + Rt],
                                o = Lo(t, n);
                            $o(i, r) && null === e && !o && (e = !1), e = function (t, e, n, r) {
                                    const s = function (t) {
                                        const e = de.lFrame.currentDirectiveIndex;
                                        return -1 === e ? null : t[e]
                                    }(t);
                                    let i = r ? e.residualClasses : e.residualStyles;
                                    if (null === s) 0 === (r ? e.classBindings : e.styleBindings) && (n = Ho(n = Fo(null, t, e, n, r), e.attrs, r), i = null);
                                    else {
                                        const o = e.directiveStylingLast;
                                        if (-1 === o || t[o] !== s)
                                            if (n = Fo(s, t, e, n, r), null === i) {
                                                let n = function (t, e, n) {
                                                    const r = n ? e.classBindings : e.styleBindings;
                                                    if (0 !== Xr(r)) return t[Gr(r)]
                                                }(t, e, r);
                                                void 0 !== n && Array.isArray(n) && (n = Fo(null, t, e, n[1], r), n = Ho(n, e.attrs, r), function (t, e, n, r) {
                                                    t[Gr(n ? e.classBindings : e.styleBindings)] = r
                                                }(t, e, r, n))
                                            } else i = function (t, e, n) {
                                                let r = void 0;
                                                const s = e.directiveEnd;
                                                for (let i = 1 + e.directiveStylingLast; i < s; i++) r = Ho(r, t[i].hostAttrs, n);
                                                return Ho(r, e.attrs, n)
                                            }(t, e, r)
                                    }
                                    return void 0 !== i && (r ? e.residualClasses = i : e.residualStyles = i), n
                                }(s, i, e, r),
                                function (t, e, n, r, s, i) {
                                    let o = i ? e.classBindings : e.styleBindings,
                                        a = Gr(o),
                                        c = Xr(o);
                                    t[r] = n;
                                    let l, u = !1;
                                    if (Array.isArray(n)) {
                                        const t = n;
                                        l = t[1], (null === l || gt(t, l) > 0) && (u = !0)
                                    } else l = n;
                                    if (s)
                                        if (0 !== c) {
                                            const e = Gr(t[a + 1]);
                                            t[r + 1] = Kr(e, a), 0 !== e && (t[e + 1] = Qr(t[e + 1], r)), t[a + 1] = 131071 & t[a + 1] | r << 17
                                        } else t[r + 1] = Kr(a, 0), 0 !== a && (t[a + 1] = Qr(t[a + 1], r)), a = r;
                                    else t[r + 1] = Kr(c, 0), 0 === a ? a = r : t[c + 1] = Qr(t[c + 1], r), c = r;
                                    u && (t[r + 1] = Wr(t[r + 1])), Eo(t, l, r, !0), Eo(t, l, r, !1),
                                        function (t, e, n, r, s) {
                                            const i = s ? t.residualClasses : t.residualStyles;
                                            null != i && "string" == typeof e && gt(i, e) >= 0 && (n[r + 1] = Zr(n[r + 1]))
                                        }(e, l, t, r, i), o = Kr(a, c), i ? e.classBindings = o : e.styleBindings = o
                                }(s, i, e, n, o, r)
                        }
                    }

                    function Fo(t, e, n, r, s) {
                        let i = null;
                        const o = n.directiveEnd;
                        let a = n.directiveStylingLast;
                        for (-1 === a ? a = n.directiveStart : a++; a < o && (i = e[a], r = Ho(r, i.hostAttrs, s), i !== t);) a++;
                        return null !== t && (n.directiveStylingLast = a), r
                    }

                    function Ho(t, e, n) {
                        const r = n ? 1 : 2;
                        let s = -1;
                        if (null !== e)
                            for (let i = 0; i < e.length; i++) {
                                const o = e[i];
                                "number" == typeof o ? s = o : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), pt(t, o, !!n || e[++i]))
                            }
                        return void 0 === t ? null : t
                    }

                    function zo(t, e, n, r, s, i, o, a) {
                        if (3 !== e.type) return;
                        const c = t.data,
                            l = c[a + 1];
                        Vo(1 == (1 & l) ? Uo(c, e, n, s, Xr(l), o) : void 0) || (Vo(i) || 2 == (2 & l) && (i = Uo(c, null, n, s, a, o)), function (t, e, n, r, s) {
                            const i = Yt(t);
                            if (e) s ? i ? t.addClass(n, r) : n.classList.add(r) : i ? t.removeClass(n, r) : n.classList.remove(r);
                            else {
                                const e = -1 == r.indexOf("-") ? void 0 : 2;
                                null == s ? i ? t.removeStyle(n, r, e) : n.style.removeProperty(r) : i ? t.setStyle(n, r, s, e) : n.style.setProperty(r, s)
                            }
                        }(r, o, ee(Fe(), n), s, i))
                    }

                    function Uo(t, e, n, r, s, i) {
                        const o = null === e;
                        let a = void 0;
                        for (; s > 0;) {
                            const e = t[s],
                                i = Array.isArray(e),
                                c = i ? e[1] : e,
                                l = null === c;
                            let u = n[s + 1];
                            u === Hr && (u = l ? Co : void 0);
                            let h = l ? mt(u, r) : c === r ? u : void 0;
                            if (i && !Vo(h) && (h = mt(e, r)), Vo(h) && (a = h, o)) return a;
                            const d = t[s + 1];
                            s = o ? Gr(d) : Xr(d)
                        }
                        if (null !== e) {
                            let t = i ? e.residualClasses : e.residualStyles;
                            null != t && (a = mt(t, r))
                        }
                        return a
                    }

                    function Vo(t) {
                        return void 0 !== t
                    }

                    function $o(t, e) {
                        return 0 != (t.flags & (e ? 16 : 32))
                    }

                    function Bo(t, e = "") {
                        const n = pe(),
                            r = me(),
                            s = t + Rt,
                            i = r.firstCreatePass ? es(r, n[6], t, 3, null, null) : r.data[s],
                            o = n[s] = Bs(e, n[11]);
                        ri(r, n, o, i), be(i, !1)
                    }

                    function qo(t) {
                        return Ko("", t, ""), qo
                    }

                    function Ko(t, e, n) {
                        const r = pe(),
                            s = Qi(r, t, e, n);
                        return s !== Hr && zs(r, Fe(), s), Ko
                    }

                    function Go(t, e, n, r, s) {
                        const i = pe(),
                            o = function (t, e, n, r, s, i) {
                                const o = Wi(t, Ee(), n, s);
                                return Oe(2), o ? e + rn(n) + r + rn(s) + i : Hr
                            }(i, t, e, n, r, s);
                        return o !== Hr && zs(i, Fe(), o), Go
                    }

                    function Wo(t, e, n) {
                        Do(pt, No, Qi(pe(), t, e, n), !0)
                    }

                    function Xo(t, e, n, r, s, i, o, a, c) {
                        Do(pt, No, function (t, e, n, r, s, i, o, a, c, l) {
                            const u = function (t, e, n, r, s, i) {
                                const o = Wi(t, e, n, r);
                                return Wi(t, e + 2, s, i) || o
                            }(t, Ee(), n, s, o, c);
                            return Oe(4), u ? e + rn(n) + r + rn(s) + i + rn(o) + a + rn(c) + l : Hr
                        }(pe(), t, e, n, r, s, i, o, a, c), !0)
                    }

                    function Qo(t, e, n) {
                        const r = pe();
                        return Gi(r, xe(), e) && ps(me(), ze(), r, t, e, r[11], n, !0), Qo
                    }

                    function Zo(t, e) {
                        const n = oe(t)[1],
                            r = n.data.length - 1;
                        Ue(n, {
                            directiveStart: r,
                            directiveEnd: r + 1
                        })
                    }

                    function Yo(t) {
                        let e = Object.getPrototypeOf(t.type.prototype).constructor,
                            n = !0;
                        const r = [t];
                        for (; e;) {
                            let s = void 0;
                            if (Ut(t)) s = e.\u0275cmp || e.\u0275dir;
                            else {
                                if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
                                s = e.\u0275dir
                            }
                            if (s) {
                                if (n) {
                                    r.push(s);
                                    const e = t;
                                    e.inputs = Jo(t.inputs), e.declaredInputs = Jo(t.declaredInputs), e.outputs = Jo(t.outputs);
                                    const n = s.hostBindings;
                                    n && na(t, n);
                                    const i = s.viewQuery,
                                        o = s.contentQueries;
                                    if (i && ta(t, i), o && ea(t, o), y(t.inputs, s.inputs), y(t.declaredInputs, s.declaredInputs), y(t.outputs, s.outputs), Ut(s) && s.data.animation) {
                                        const e = t.data;
                                        e.animation = (e.animation || []).concat(s.data.animation)
                                    }
                                }
                                const e = s.features;
                                if (e)
                                    for (let r = 0; r < e.length; r++) {
                                        const s = e[r];
                                        s && s.ngInherit && s(t), s === Yo && (n = !1)
                                    }
                            }
                            e = Object.getPrototypeOf(e)
                        }! function (t) {
                            let e = 0,
                                n = null;
                            for (let r = t.length - 1; r >= 0; r--) {
                                const s = t[r];
                                s.hostVars = e += s.hostVars, s.hostAttrs = Ze(s.hostAttrs, n = Ze(n, s.hostAttrs))
                            }
                        }(r)
                    }

                    function Jo(t) {
                        return t === vt ? {} : t === _t ? [] : t
                    }

                    function ta(t, e) {
                        const n = t.viewQuery;
                        t.viewQuery = n ? (t, r) => {
                            e(t, r), n(t, r)
                        } : e
                    }

                    function ea(t, e) {
                        const n = t.contentQueries;
                        t.contentQueries = n ? (t, r, s) => {
                            e(t, r, s), n(t, r, s)
                        } : e
                    }

                    function na(t, e) {
                        const n = t.hostBindings;
                        t.hostBindings = n ? (t, r) => {
                            e(t, r), n(t, r)
                        } : e
                    }

                    function ra(t, e, n, r, s) {
                        if (t = P(t), Array.isArray(t))
                            for (let i = 0; i < t.length; i++) ra(t[i], e, n, r, s);
                        else {
                            const i = me(),
                                o = pe();
                            let a = Li(t) ? t : P(t.provide),
                                c = Ni(t);
                            const l = ye(),
                                u = 1048575 & l.providerIndexes,
                                h = l.directiveStart,
                                d = l.providerIndexes >> 20;
                            if (Li(t) || !t.multi) {
                                const r = new Ge(c, s, Ji),
                                    f = oa(a, e, s ? u : u + d, h); - 1 === f ? (gn(dn(l, o), i, a), sa(i, t, e.length), e.push(a), l.directiveStart++, l.directiveEnd++, s && (l.providerIndexes += 1048576), n.push(r), o.push(r)) : (n[f] = r, o[f] = r)
                            } else {
                                const f = oa(a, e, u + d, h),
                                    p = oa(a, e, u, u + d),
                                    m = f >= 0 && n[f],
                                    g = p >= 0 && n[p];
                                if (s && !g || !s && !m) {
                                    gn(dn(l, o), i, a);
                                    const u = function (t, e, n, r, s) {
                                        const i = new Ge(t, n, Ji);
                                        return i.multi = [], i.index = e, i.componentProviders = 0, ia(i, s, r && !n), i
                                    }(s ? ca : aa, n.length, s, r, c);
                                    !s && g && (n[p].providerFactory = u), sa(i, t, e.length, 0), e.push(a), l.directiveStart++, l.directiveEnd++, s && (l.providerIndexes += 1048576), n.push(u), o.push(u)
                                } else sa(i, t, f > -1 ? f : p, ia(n[s ? p : f], c, !s && r));
                                !s && r && g && n[p].componentProviders++
                            }
                        }
                    }

                    function sa(t, e, n, r) {
                        const s = Li(e);
                        if (s || e.useClass) {
                            const i = (e.useClass || e).prototype.ngOnDestroy;
                            if (i) {
                                const o = t.destroyHooks || (t.destroyHooks = []);
                                if (!s && e.multi) {
                                    const t = o.indexOf(n); - 1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i)
                                } else o.push(n, i)
                            }
                        }
                    }

                    function ia(t, e, n) {
                        return n && t.componentProviders++, t.multi.push(e) - 1
                    }

                    function oa(t, e, n, r) {
                        for (let s = n; s < r; s++)
                            if (e[s] === t) return s;
                        return -1
                    }

                    function aa(t, e, n, r) {
                        return la(this.multi, [])
                    }

                    function ca(t, e, n, r) {
                        const s = this.multi;
                        let i;
                        if (this.providerFactory) {
                            const t = this.providerFactory.componentProviders,
                                e = wn(n, n[1], this.providerFactory.index, r);
                            i = e.slice(0, t), la(s, i);
                            for (let n = t; n < e.length; n++) i.push(e[n])
                        } else i = [], la(s, i);
                        return i
                    }

                    function la(t, e) {
                        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
                        return e
                    }

                    function ua(t, e = []) {
                        return n => {
                            n.providersResolver = (n, r) => function (t, e, n) {
                                const r = me();
                                if (r.firstCreatePass) {
                                    const s = Ut(t);
                                    ra(n, r.data, r.blueprint, s, !0), ra(e, r.data, r.blueprint, s, !1)
                                }
                            }(n, r ? r(t) : t, e)
                        }
                    }
                    class ha {}
                    class da {
                        resolveComponentFactory(t) {
                            throw function (t) {
                                const e = Error(`No component factory found for ${T(t)}. Did you add it to @NgModule.entryComponents?`);
                                return e.ngComponent = t, e
                            }(t)
                        }
                    }
                    let fa = (() => {
                            class t {}
                            return t.NULL = new da, t
                        })(),
                        pa = (() => {
                            class t {
                                constructor(t) {
                                    this.nativeElement = t
                                }
                            }
                            return t.__NG_ELEMENT_ID__ = () => ma(t), t
                        })();
                    const ma = function (t) {
                        return yi(t, ye(), pe())
                    };
                    class ga {}
                    var ya = function (t) {
                        return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
                    }({});
                    let ba = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => va(), t
                    })();
                    const va = function () {
                        const t = pe(),
                            e = ie(ye().index, t);
                        return function (t) {
                            const e = t[11];
                            if (Yt(e)) return e;
                            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
                        }(Lt(e) ? e : t)
                    };
                    let _a = (() => {
                        class t {}
                        return t.\u0275prov = b({
                            token: t,
                            providedIn: "root",
                            factory: () => null
                        }), t
                    })();
                    class wa {
                        constructor(t) {
                            this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                        }
                    }
                    const Sa = new wa("10.0.14");
                    class Ca {
                        constructor() {}
                        supports(t) {
                            return Bi(t)
                        }
                        create(t) {
                            return new xa(t)
                        }
                    }
                    const Ea = (t, e) => e;
                    class xa {
                        constructor(t) {
                            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Ea
                        }
                        forEachItem(t) {
                            let e;
                            for (e = this._itHead; null !== e; e = e._next) t(e)
                        }
                        forEachOperation(t) {
                            let e = this._itHead,
                                n = this._removalsHead,
                                r = 0,
                                s = null;
                            for (; e || n;) {
                                const i = !n || e && e.currentIndex < ja(n, r, s) ? e : n,
                                    o = ja(i, r, s),
                                    a = i.currentIndex;
                                if (i === n) r--, n = n._nextRemoved;
                                else if (e = e._next, null == i.previousIndex) r++;
                                else {
                                    s || (s = []);
                                    const t = o - r,
                                        e = a - r;
                                    if (t != e) {
                                        for (let n = 0; n < t; n++) {
                                            const r = n < s.length ? s[n] : s[n] = 0,
                                                i = r + n;
                                            e <= i && i < t && (s[n] = r + 1)
                                        }
                                        s[i.previousIndex] = e - t
                                    }
                                }
                                o !== a && t(i, o, a)
                            }
                        }
                        forEachPreviousItem(t) {
                            let e;
                            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
                        }
                        forEachAddedItem(t) {
                            let e;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                        }
                        forEachMovedItem(t) {
                            let e;
                            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
                        }
                        forEachRemovedItem(t) {
                            let e;
                            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                        }
                        forEachIdentityChange(t) {
                            let e;
                            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
                        }
                        diff(t) {
                            if (null == t && (t = []), !Bi(t)) throw new Error(`Error trying to diff '${T(t)}'. Only arrays and iterables are allowed`);
                            return this.check(t) ? this : null
                        }
                        onDestroy() {}
                        check(t) {
                            this._reset();
                            let e, n, r, s = this._itHead,
                                i = !1;
                            if (Array.isArray(t)) {
                                this.length = t.length;
                                for (let e = 0; e < this.length; e++) n = t[e], r = this._trackByFn(e, n), null !== s && Object.is(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)), Object.is(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e), i = !0), s = s._next
                            } else e = 0,
                                function (t, e) {
                                    if (Array.isArray(t))
                                        for (let n = 0; n < t.length; n++) e(t[n]);
                                    else {
                                        const n = t[Vi()]();
                                        let r;
                                        for (; !(r = n.next()).done;) e(r.value)
                                    }
                                }(t, t => {
                                    r = this._trackByFn(e, t), null !== s && Object.is(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)), Object.is(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e), i = !0), s = s._next, e++
                                }), this.length = e;
                            return this._truncate(s), this.collection = t, this.isDirty
                        }
                        get isDirty() {
                            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                        }
                        _reset() {
                            if (this.isDirty) {
                                let t, e;
                                for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                                for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                                for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                            }
                        }
                        _mismatch(t, e, n, r) {
                            let s;
                            return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : t = this._addAfter(new Oa(e, n), s, r), t
                        }
                        _verifyReinsertion(t, e, n, r) {
                            let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                            return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
                        }
                        _truncate(t) {
                            for (; null !== t;) {
                                const e = t._next;
                                this._addToRemovals(this._unlink(t)), t = e
                            }
                            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                        }
                        _reinsertAfter(t, e, n) {
                            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                            const r = t._prevRemoved,
                                s = t._nextRemoved;
                            return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
                        }
                        _moveAfter(t, e, n) {
                            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
                        }
                        _addAfter(t, e, n) {
                            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                        }
                        _insertAfter(t, e, n) {
                            const r = null === e ? this._itHead : e._next;
                            return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Ta), this._linkedRecords.put(t), t.currentIndex = n, t
                        }
                        _remove(t) {
                            return this._addToRemovals(this._unlink(t))
                        }
                        _unlink(t) {
                            null !== this._linkedRecords && this._linkedRecords.remove(t);
                            const e = t._prev,
                                n = t._next;
                            return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
                        }
                        _addToMoves(t, e) {
                            return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
                        }
                        _addToRemovals(t) {
                            return null === this._unlinkedRecords && (this._unlinkedRecords = new Ta), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                        }
                        _addIdentityChange(t, e) {
                            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                        }
                    }
                    class Oa {
                        constructor(t, e) {
                            this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                        }
                    }
                    class ka {
                        constructor() {
                            this._head = null, this._tail = null
                        }
                        add(t) {
                            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                        }
                        get(t, e) {
                            let n;
                            for (n = this._head; null !== n; n = n._nextDup)
                                if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t)) return n;
                            return null
                        }
                        remove(t) {
                            const e = t._prevDup,
                                n = t._nextDup;
                            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
                        }
                    }
                    class Ta {
                        constructor() {
                            this.map = new Map
                        }
                        put(t) {
                            const e = t.trackById;
                            let n = this.map.get(e);
                            n || (n = new ka, this.map.set(e, n)), n.add(t)
                        }
                        get(t, e) {
                            const n = this.map.get(t);
                            return n ? n.get(t, e) : null
                        }
                        remove(t) {
                            const e = t.trackById;
                            return this.map.get(e).remove(t) && this.map.delete(e), t
                        }
                        get isEmpty() {
                            return 0 === this.map.size
                        }
                        clear() {
                            this.map.clear()
                        }
                    }

                    function ja(t, e, n) {
                        const r = t.previousIndex;
                        if (null === r) return r;
                        let s = 0;
                        return n && r < n.length && (s = n[r]), r + e + s
                    }
                    class Aa {
                        constructor() {}
                        supports(t) {
                            return t instanceof Map || qi(t)
                        }
                        create() {
                            return new Ia
                        }
                    }
                    class Ia {
                        constructor() {
                            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                        }
                        get isDirty() {
                            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                        }
                        forEachItem(t) {
                            let e;
                            for (e = this._mapHead; null !== e; e = e._next) t(e)
                        }
                        forEachPreviousItem(t) {
                            let e;
                            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
                        }
                        forEachChangedItem(t) {
                            let e;
                            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
                        }
                        forEachAddedItem(t) {
                            let e;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                        }
                        forEachRemovedItem(t) {
                            let e;
                            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                        }
                        diff(t) {
                            if (t) {
                                if (!(t instanceof Map || qi(t))) throw new Error(`Error trying to diff '${T(t)}'. Only maps and objects are allowed`)
                            } else t = new Map;
                            return this.check(t) ? this : null
                        }
                        onDestroy() {}
                        check(t) {
                            this._reset();
                            let e = this._mapHead;
                            if (this._appendAfter = null, this._forEach(t, (t, n) => {
                                    if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                                    else {
                                        const r = this._getOrCreateRecordForKey(n, t);
                                        e = this._insertBeforeOrAppend(e, r)
                                    }
                                }), e) {
                                e._prev && (e._prev._next = null), this._removalsHead = e;
                                for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
                            }
                            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                        }
                        _insertBeforeOrAppend(t, e) {
                            if (t) {
                                const n = t._prev;
                                return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                            }
                            return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
                        }
                        _getOrCreateRecordForKey(t, e) {
                            if (this._records.has(t)) {
                                const n = this._records.get(t);
                                this._maybeAddToChanges(n, e);
                                const r = n._prev,
                                    s = n._next;
                                return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n
                            }
                            const n = new Pa(t);
                            return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
                        }
                        _reset() {
                            if (this.isDirty) {
                                let t;
                                for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                                for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                                for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                            }
                        }
                        _maybeAddToChanges(t, e) {
                            Object.is(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
                        }
                        _addToAdditions(t) {
                            null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                        }
                        _addToChanges(t) {
                            null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                        }
                        _forEach(t, e) {
                            t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
                        }
                    }
                    class Pa {
                        constructor(t) {
                            this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                        }
                    }
                    let Na = (() => {
                            class t {
                                constructor(t) {
                                    this.factories = t
                                }
                                static create(e, n) {
                                    if (null != n) {
                                        const t = n.factories.slice();
                                        e = e.concat(t)
                                    }
                                    return new t(e)
                                }
                                static extend(e) {
                                    return {
                                        provide: t,
                                        useFactory: n => {
                                            if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                            return t.create(e, n)
                                        },
                                        deps: [
                                            [t, new p, new d]
                                        ]
                                    }
                                }
                                find(t) {
                                    const e = this.factories.find(e => e.supports(t));
                                    if (null != e) return e;
                                    throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);
                                    var n
                                }
                            }
                            return t.\u0275prov = b({
                                token: t,
                                providedIn: "root",
                                factory: () => new t([new Ca])
                            }), t
                        })(),
                        Ra = (() => {
                            class t {
                                constructor(t) {
                                    this.factories = t
                                }
                                static create(e, n) {
                                    if (n) {
                                        const t = n.factories.slice();
                                        e = e.concat(t)
                                    }
                                    return new t(e)
                                }
                                static extend(e) {
                                    return {
                                        provide: t,
                                        useFactory: n => {
                                            if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                            return t.create(e, n)
                                        },
                                        deps: [
                                            [t, new p, new d]
                                        ]
                                    }
                                }
                                find(t) {
                                    const e = this.factories.find(e => e.supports(t));
                                    if (e) return e;
                                    throw new Error(`Cannot find a differ supporting object '${t}'`)
                                }
                            }
                            return t.\u0275prov = b({
                                token: t,
                                providedIn: "root",
                                factory: () => new t([new Aa])
                            }), t
                        })();
                    const Da = [new Aa],
                        La = new Na([new Ca]),
                        Ma = new Ra(Da);
                    let Fa = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => Ha(t, pa), t
                    })();
                    const Ha = function (t, e) {
                        return bi(t, e, ye(), pe())
                    };
                    let za = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => Ua(t, pa), t
                    })();
                    const Ua = function (t, e) {
                            return vi(t, e, ye(), pe())
                        },
                        Va = {};
                    class $a extends fa {
                        constructor(t) {
                            super(), this.ngModule = t
                        }
                        resolveComponentFactory(t) {
                            const e = It(t);
                            return new Ka(e, this.ngModule)
                        }
                    }

                    function Ba(t) {
                        const e = [];
                        for (let n in t) t.hasOwnProperty(n) && e.push({
                            propName: t[n],
                            templateName: n
                        });
                        return e
                    }
                    const qa = new K("SCHEDULER_TOKEN", {
                        providedIn: "root",
                        factory: () => on
                    });
                    class Ka extends ha {
                        constructor(t, e) {
                            super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(Fr).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
                        }
                        get inputs() {
                            return Ba(this.componentDef.inputs)
                        }
                        get outputs() {
                            return Ba(this.componentDef.outputs)
                        }
                        create(t, e, n, r) {
                            const s = (r = r || this.ngModule) ? function (t, e) {
                                    return {
                                        get: (n, r, s) => {
                                            const i = t.get(n, Va, s);
                                            return i !== Va || r === Va ? i : e.get(n, r, s)
                                        }
                                    }
                                }(t, r.injector) : t,
                                i = s.get(ga, Jt),
                                o = s.get(_a, null),
                                a = i.createRenderer(null, this.componentDef),
                                c = this.componentDef.selectors[0][0] || "div",
                                l = n ? function (t, e, n) {
                                    if (Yt(t)) return t.selectRootElement(e, n === bt.ShadowDom);
                                    let r = "string" == typeof e ? t.querySelector(e) : e;
                                    return r.textContent = "", r
                                }(a, n, this.componentDef.encapsulation) : Jr(c, i.createRenderer(null, this.componentDef), function (t) {
                                    const e = t.toLowerCase();
                                    return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
                                }(c)),
                                u = this.componentDef.onPush ? 576 : 528,
                                h = {
                                    components: [],
                                    scheduler: on,
                                    clean: Ls,
                                    playerHandler: null,
                                    flags: 0
                                },
                                d = us(0, -1, null, 1, 0, null, null, null, null, null),
                                f = ts(null, d, h, u, null, null, i, a, o, s);
                            let p, m;
                            Pe(f, null);
                            try {
                                const t = function (t, e, n, r, s, i) {
                                    const o = n[1];
                                    n[20] = t;
                                    const a = es(o, null, 0, 3, null, null),
                                        c = a.mergedAttrs = e.hostAttrs;
                                    null !== c && (zi(a, c, !0), null !== t && (We(s, t, c), null !== a.classes && hi(s, t, a.classes), null !== a.styles && ui(s, t, a.styles)));
                                    const l = r.createRenderer(t, e),
                                        u = ts(n, ls(e), null, e.onPush ? 64 : 16, n[20], a, r, l, void 0);
                                    return o.firstCreatePass && (gn(dn(a, n), o, e.type), _s(o, a), Ss(a, n.length, 1)), Is(n, u), n[20] = u
                                }(l, this.componentDef, f, i, a);
                                if (l)
                                    if (n) We(a, l, ["ng-version", Sa.full]);
                                    else {
                                        const {
                                            attrs: t,
                                            classes: e
                                        } = function (t) {
                                            const e = [],
                                                n = [];
                                            let r = 1,
                                                s = 2;
                                            for (; r < t.length;) {
                                                let i = t[r];
                                                if ("string" == typeof i) 2 === s ? "" !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                                                else {
                                                    if (!Nr(s)) break;
                                                    s = i
                                                }
                                                r++
                                            }
                                            return {
                                                attrs: e,
                                                classes: n
                                            }
                                        }(this.componentDef.selectors[0]);
                                        t && We(a, l, t), e && e.length > 0 && hi(a, l, e.join(" "))
                                    } if (m = re(d, 0), void 0 !== e) {
                                    const t = m.projection = [];
                                    for (let n = 0; n < this.ngContentSelectors.length; n++) {
                                        const r = e[n];
                                        t.push(null != r ? Array.from(r) : null)
                                    }
                                }
                                p = function (t, e, n, r, s) {
                                    const i = n[1],
                                        o = function (t, e, n) {
                                            const r = ye();
                                            t.firstCreatePass && (n.providersResolver && n.providersResolver(n), vs(t, r, 1), Cs(t, e, n));
                                            const s = wn(e, t, e.length - 1, r);
                                            Er(s, e);
                                            const i = ne(r, e);
                                            return i && Er(i, e), s
                                        }(i, n, e);
                                    r.components.push(o), t[8] = o, s && s.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1);
                                    const a = ye();
                                    if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                                        He(a.index - Rt);
                                        const t = n[1];
                                        gs(t, e), ys(t, n, e.hostVars), bs(e, o)
                                    }
                                    return o
                                }(t, this.componentDef, f, h, [Zo]), ns(d, f, null)
                            } finally {
                                Me()
                            }
                            const g = new Ga(this.componentType, p, yi(pa, m, f), f, m);
                            return d.node.child = m, g
                        }
                    }
                    class Ga extends class {} {
                        constructor(t, e, n, r, s) {
                            super(), this.location = n, this._rootLView = r, this._tNode = s, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new fi(r),
                                function (t, e, n, r) {
                                    let s = t.node;
                                    null == s && (t.node = s = ds(0, null, 2, -1, null, null)), r[6] = s
                                }(r[1], 0, 0, r), this.componentType = t
                        }
                        get injector() {
                            return new En(this._tNode, this._rootLView)
                        }
                        destroy() {
                            this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
                        }
                        onDestroy(t) {
                            this.destroyCbs && this.destroyCbs.push(t)
                        }
                    }
                    const Wa = void 0;
                    var Xa = ["en", [
                            ["a", "p"],
                            ["AM", "PM"], Wa
                        ],
                        [
                            ["AM", "PM"], Wa, Wa
                        ],
                        [
                            ["S", "M", "T", "W", "T", "F", "S"],
                            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        ], Wa, [
                            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        ], Wa, [
                            ["B", "A"],
                            ["BC", "AD"],
                            ["Before Christ", "Anno Domini"]
                        ], 0, [6, 0],
                        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                        ["{1}, {0}", Wa, "{1} 'at' {0}", Wa],
                        [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                        function (t) {
                            let e = Math.floor(Math.abs(t)),
                                n = t.toString().replace(/^[^.]*\.?/, "").length;
                            return 1 === e && 0 === n ? 1 : 5
                        }
                    ];
                    let Qa = {};

                    function Za(t, e, n) {
                        "string" != typeof e && (n = e, e = t[nc.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), Qa[e] = t, n && (Qa[e][nc.ExtraData] = n)
                    }

                    function Ya(t) {
                        const e = function (t) {
                            return t.toLowerCase().replace(/_/g, "-")
                        }(t);
                        let n = ec(e);
                        if (n) return n;
                        const r = e.split("-")[0];
                        if (n = ec(r), n) return n;
                        if ("en" === r) return Xa;
                        throw new Error(`Missing locale data for the locale "${t}".`)
                    }

                    function Ja(t) {
                        return Ya(t)[nc.CurrencyCode] || null
                    }

                    function tc(t) {
                        return Ya(t)[nc.PluralCase]
                    }

                    function ec(t) {
                        return t in Qa || (Qa[t] = F.ng && F.ng.common && F.ng.common.locales && F.ng.common.locales[t]), Qa[t]
                    }
                    var nc = function (t) {
                        return t[t.LocaleId = 0] = "LocaleId", t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat", t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", t[t.DaysFormat = 3] = "DaysFormat", t[t.DaysStandalone = 4] = "DaysStandalone", t[t.MonthsFormat = 5] = "MonthsFormat", t[t.MonthsStandalone = 6] = "MonthsStandalone", t[t.Eras = 7] = "Eras", t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek", t[t.WeekendRange = 9] = "WeekendRange", t[t.DateFormat = 10] = "DateFormat", t[t.TimeFormat = 11] = "TimeFormat", t[t.DateTimeFormat = 12] = "DateTimeFormat", t[t.NumberSymbols = 13] = "NumberSymbols", t[t.NumberFormats = 14] = "NumberFormats", t[t.CurrencyCode = 15] = "CurrencyCode", t[t.CurrencySymbol = 16] = "CurrencySymbol", t[t.CurrencyName = 17] = "CurrencyName", t[t.Currencies = 18] = "Currencies", t[t.Directionality = 19] = "Directionality", t[t.PluralCase = 20] = "PluralCase", t[t.ExtraData = 21] = "ExtraData", t
                    }({});
                    const rc = ["zero", "one", "two", "few", "many"],
                        sc = "en-US";
                    let ic = sc;

                    function oc(t) {
                        var e, n;
                        n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
                            throw new Error("ASSERTION ERROR: " + t + ` [Expected=> null != ${e} <=Actual]`)
                        }(n, e), "string" == typeof t && (ic = t.toLowerCase().replace(/_/g, "-"))
                    }
                    const ac = {
                            marker: "element"
                        },
                        cc = {
                            marker: "comment"
                        },
                        lc = [];
                    let uc = -1,
                        hc = 0,
                        dc = 0;

                    function fc(t, e, n, r) {
                        const s = r[11];
                        let i = null,
                            o = null;
                        const a = [];
                        for (let c = 0; c < n.length; c++) {
                            const l = n[c];
                            if ("string" == typeof l) {
                                const e = Bs(l, s),
                                    u = n[++c];
                                o = i, i = vc(t, r, u, 3, e, null), a.push(u), _e()
                            } else if ("number" == typeof l) switch (7 & l) {
                                case 1:
                                    const s = l >>> 17;
                                    let u;
                                    u = s === e ? r[6] : re(t, s), o = yc(t, i, u, o, r);
                                    break;
                                case 0:
                                    const h = l >= 0,
                                        d = (h ? l : ~l) >>> 3;
                                    a.push(d), o = i, i = re(t, d), i && be(i, h);
                                    break;
                                case 5:
                                    o = i = re(t, l >>> 3), be(i, !1);
                                    break;
                                case 4:
                                    const f = n[++c],
                                        p = n[++c];
                                    xs(re(t, l >>> 3), r, f, p, null, null);
                                    break;
                                default:
                                    throw new Error(`Unable to determine the type of mutate operation for "${l}"`)
                            } else switch (l) {
                                case cc:
                                    const e = n[++c],
                                        u = n[++c],
                                        h = s.createComment(e);
                                    o = i, i = vc(t, r, u, 5, h, null), a.push(u), Er(h, r), _e();
                                    break;
                                case ac:
                                    const d = n[++c],
                                        f = n[++c];
                                    o = i, i = vc(t, r, f, 3, s.createElement(d), d), a.push(f);
                                    break;
                                default:
                                    throw new Error(`Unable to determine the type of mutate operation for "${l}"`)
                            }
                        }
                        return _e(), a
                    }

                    function pc(t, e, n, r, s, i) {
                        let o = !1;
                        for (let a = 0; a < r.length; a++) {
                            const c = r[a],
                                l = r[++a];
                            if (c & i) {
                                let i = "";
                                for (let c = a + 1; c <= a + l; c++) {
                                    const a = r[c];
                                    if ("string" == typeof a) i += a;
                                    else if ("number" == typeof a)
                                        if (a < 0) i += rn(n[s - a]);
                                        else {
                                            const l = a >>> 2;
                                            switch (3 & a) {
                                                case 1:
                                                    const a = r[++c],
                                                        u = r[++c];
                                                    ps(t, re(t, l), n, a, i, n[11], u, !1);
                                                    break;
                                                case 0:
                                                    zs(n, l, i);
                                                    break;
                                                case 2:
                                                    o = gc(t, e, r[++c], n, i);
                                                    break;
                                                case 3:
                                                    mc(t, e, r[++c], s, n, o)
                                            }
                                        }
                                }
                            }
                            a += l
                        }
                    }

                    function mc(t, e, n, r, s, i) {
                        const o = e[n],
                            a = s[o.currentCaseLViewIndex];
                        null !== a && pc(t, e, s, o.update[a], r, i ? -1 : hc)
                    }

                    function gc(t, e, n, r, s) {
                        ! function t(e, n, r, s) {
                            const i = n[r],
                                o = s[i.currentCaseLViewIndex];
                            if (null !== o) {
                                const r = i.remove[o];
                                for (let i = 0; i < r.length; i++) {
                                    const o = r[i],
                                        a = o >>> 3;
                                    switch (7 & o) {
                                        case 3:
                                            bc(e, s, a, !1);
                                            break;
                                        case 6:
                                            t(e, n, a, s)
                                    }
                                }
                            }
                        }(t, e, n, r);
                        let i = !1;
                        const o = e[n],
                            a = function (t, e) {
                                let n = t.cases.indexOf(e);
                                if (-1 === n) switch (t.type) {
                                    case 1: {
                                        const r = function (t, e) {
                                            const n = tc(e)(parseInt(t, 10)),
                                                r = rc[n];
                                            return void 0 !== r ? r : "other"
                                        }(e, ic);
                                        n = t.cases.indexOf(r), -1 === n && "other" !== r && (n = t.cases.indexOf("other"));
                                        break
                                    }
                                    case 0:
                                        n = t.cases.indexOf("other")
                                }
                                return n
                            }(o, s);
                        return r[o.currentCaseLViewIndex] = -1 !== a ? a : null, a > -1 && (fc(t, -1, o.create[a], r), i = !0), i
                    }

                    function yc(t, e, n, r, s) {
                        const i = e.next;
                        r || (r = n), r === n && e !== n.child ? (e.next = n.child, n.child = e) : r !== n && e !== r.next ? (e.next = r.next, r.next = e) : e.next = null, n !== s[6] && (e.parent = n);
                        let o = e.next;
                        for (; o;) o.next === e && (o.next = i), o = o.next;
                        if (1 === e.type) return ci(t, s, e), e;
                        ri(t, s, ne(e, s), e);
                        const a = s[e.index];
                        return 0 !== e.type && Mt(a) && ri(t, s, a[7], e), e
                    }

                    function bc(t, e, n, r) {
                        const s = re(t, n),
                            i = ee(n, e);
                        i && ii(e[11], i);
                        const o = se(e, n);
                        if (Mt(o)) {
                            const t = o;
                            0 !== s.type && ii(e[11], t[7])
                        }
                        r && (s.flags |= 64)
                    }

                    function vc(t, e, n, r, s, i) {
                        const o = ye();
                        e[n + Rt] = s;
                        const a = es(t, e[6], n, r, i, null);
                        return o && o.next === a && (o.next = null), a
                    }
                    const _c = /\ufffd(\d+):?\d*\ufffd/gi,
                        wc = /({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,
                        Sc = /\ufffd(\d+)\ufffd/,
                        Cc = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/;
                    let Ec;
                    const xc = [],
                        Oc = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
                        kc = /\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,
                        Tc = /\uE500/g;

                    function jc(t, e, n, r = null) {
                        const s = [null, null],
                            i = t.split(_c);
                        let o = 0;
                        for (let a = 0; a < i.length; a++) {
                            const t = i[a];
                            if (1 & a) {
                                const e = parseInt(t, 10);
                                s.push(-1 - e), o |= Pc(e)
                            } else "" !== t && s.push(t)
                        }
                        return s.push(e << 2 | (n ? 1 : 0)), n && s.push(n, r), s[0] = o, s[1] = s.length - 2, s
                    }

                    function Ac(t, e = 0) {
                        let n;
                        e |= Pc(t.mainBinding);
                        for (let r = 0; r < t.values.length; r++) {
                            const s = t.values[r];
                            for (let t = 0; t < s.length; t++) {
                                const r = s[t];
                                if ("string" == typeof r)
                                    for (; n = _c.exec(r);) e |= Pc(parseInt(n[1], 10));
                                else e = Ac(r, e)
                            }
                        }
                        return e
                    }

                    function Ic(t) {
                        return t + Ec++
                    }

                    function Pc(t) {
                        return 1 << Math.min(t, 31)
                    }

                    function Nc(t) {
                        return void 0 === t
                    }

                    function Rc(t) {
                        let e, n, r = "",
                            s = 0,
                            i = !1;
                        for (; null !== (e = Oc.exec(t));) i ? e[0] === `\ufffd/*${n}\ufffd` && (s = e.index, i = !1) : (r += t.substring(s, e.index + e[0].length), n = e[1], i = !0);
                        return r += t.substr(s), r
                    }

                    function Dc(t, e, n, r) {
                        const s = [],
                            i = [],
                            o = [],
                            a = [],
                            c = [],
                            l = e.values;
                        for (let u = 0; u < l.length; u++) {
                            const e = l[u],
                                h = [];
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                if ("string" != typeof n) {
                                    const r = h.push(n) - 1;
                                    e[t] = `\x3c!--\ufffd${r}\ufffd--\x3e`
                                }
                            }
                            const d = Mc(e.join(""), n, h, t, r);
                            s.push(d.create), i.push(d.remove), o.push(d.update), a.push(d.vars), c.push(d.childIcus)
                        }
                        t.push({
                            type: e.type,
                            vars: a,
                            currentCaseLViewIndex: Rt + r + 1,
                            childIcus: c,
                            cases: e.cases,
                            create: s,
                            remove: i,
                            update: o
                        }), Ec += Math.max(...a)
                    }

                    function Lc(t) {
                        const e = [],
                            n = [];
                        let r = 1,
                            s = 0;
                        const i = Fc(t = t.replace(Cc, (function (t, e, n) {
                            return r = "select" === n ? 0 : 1, s = parseInt(e.substr(1), 10), ""
                        })));
                        for (let o = 0; o < i.length;) {
                            let t = i[o++].trim();
                            1 === r && (t = t.replace(/\s*(?:=)?(\w+)\s*/, "$1")), t.length && e.push(t);
                            const s = Fc(i[o++]);
                            e.length > n.length && n.push(s)
                        }
                        return {
                            type: r,
                            mainBinding: s,
                            cases: e,
                            values: n
                        }
                    }

                    function Mc(t, e, n, r, s) {
                        const i = Xn(Zt()).getInertBodyElement(t);
                        if (!i) throw new Error("Unable to generate inert body element");
                        const o = {
                            vars: 1,
                            childIcus: [],
                            create: [],
                            remove: [],
                            update: []
                        };
                        return function t(e, n, r, s, i, o) {
                            if (e) {
                                const a = [];
                                for (; e;) {
                                    const c = e.nextSibling,
                                        l = o + ++n.vars;
                                    switch (e.nodeType) {
                                        case Node.ELEMENT_NODE:
                                            const c = e,
                                                u = c.tagName.toLowerCase();
                                            if (cr.hasOwnProperty(u)) {
                                                n.create.push(ac, u, l, r << 17 | 1);
                                                const a = c.attributes;
                                                for (let t = 0; t < a.length; t++) {
                                                    const e = a.item(t),
                                                        r = e.name.toLowerCase();
                                                    e.value.match(_c) ? hr.hasOwnProperty(r) && lt(lr[r] ? jc(e.value, l, e.name, tr) : ur[r] ? jc(e.value, l, e.name, er) : jc(e.value, l, e.name), n.update) : n.create.push(l << 3 | 4, e.name, e.value)
                                                }
                                                t(e.firstChild, n, l, s, i, o), n.remove.push(l << 3 | 3)
                                            } else n.vars--;
                                            break;
                                        case Node.TEXT_NODE:
                                            const h = e.textContent || "",
                                                d = h.match(_c);
                                            n.create.push(d ? "" : h, l, r << 17 | 1), n.remove.push(l << 3 | 3), d && lt(jc(h, l), n.update);
                                            break;
                                        case Node.COMMENT_NODE:
                                            const f = Sc.exec(e.textContent || "");
                                            if (f) {
                                                const t = parseInt(f[1], 10);
                                                n.create.push(cc, "", l, r << 17 | 1), a.push([s[t], l])
                                            } else n.vars--;
                                            break;
                                        default:
                                            n.vars--
                                    }
                                    e = c
                                }
                                for (let t = 0; t < a.length; t++) {
                                    const e = a[t][0],
                                        r = a[t][1];
                                    Dc(i, e, r, o + n.vars);
                                    const s = i.length - 1;
                                    n.vars += Math.max(...i[s].vars), n.childIcus.push(s);
                                    const c = Ac(e);
                                    n.update.push(Pc(e.mainBinding), 3, -1 - e.mainBinding, r << 2 | 2, s, c, 2, r << 2 | 3, s), n.remove.push(s << 3 | 6, r << 3 | 3)
                                }
                            }
                        }((vr(i) || i).firstChild, o, e, n, r, s), o
                    }

                    function Fc(t) {
                        if (!t) return [];
                        let e = 0;
                        const n = [],
                            r = [],
                            s = /[{}]/g;
                        let i;
                        for (s.lastIndex = 0; i = s.exec(t);) {
                            const s = i.index;
                            if ("}" == i[0]) {
                                if (n.pop(), 0 == n.length) {
                                    const n = t.substring(e, s);
                                    Cc.test(n) ? r.push(Lc(n)) : r.push(n), e = s + 1
                                }
                            } else {
                                if (0 == n.length) {
                                    const n = t.substring(e, s);
                                    r.push(n), e = s + 1
                                }
                                n.push("{")
                            }
                        }
                        const o = t.substring(e);
                        return r.push(o), r
                    }

                    function Hc(t, e, n) {
                        (function (t, e, n) {
                            const r = me();
                            ! function (t) {
                                lc[++uc] = t
                            }(t), vo(!0), r.firstCreatePass && null === r.data[t + Rt] && function (t, e, n, r, s) {
                                const i = e.blueprint.length - Rt;
                                Ec = 0;
                                const o = ye(),
                                    a = ve() ? o : o && o.parent;
                                let c = a && a !== t[6] ? a.index - Rt : n,
                                    l = 0;
                                xc[l] = c;
                                const u = [];
                                if (n > 0 && o !== a) {
                                    let t = o.index - Rt;
                                    ve() || (t = ~t), u.push(t << 3 | 0)
                                }
                                const h = [],
                                    d = [];
                                if ("" === r && Nc(s)) u.push(r, Ic(i), c << 17 | 1);
                                else {
                                    const t = function (t, e) {
                                            if (Nc(e)) return Rc(t); {
                                                const n = t.indexOf(`:${e}\ufffd`) + 2 + e.toString().length,
                                                    r = t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));
                                                return Rc(t.substring(n, r))
                                            }
                                        }(r, s),
                                        e = (f = t, f.replace(Tc, " ")).split(kc);
                                    for (let n = 0; n < e.length; n++) {
                                        let r = e[n];
                                        if (1 & n)
                                            if ("/" === r.charAt(0)) {
                                                if ("#" === r.charAt(1)) {
                                                    const t = parseInt(r.substr(2), 10);
                                                    c = xc[--l], u.push(t << 3 | 5)
                                                }
                                            } else {
                                                const t = parseInt(r.substr(1), 10),
                                                    e = "#" === r.charAt(0);
                                                u.push((e ? t : ~t) << 3 | 0, c << 17 | 1), e && (xc[++l] = c = t)
                                            }
                                        else {
                                            const e = Fc(r);
                                            for (let n = 0; n < e.length; n++)
                                                if (1 & n) {
                                                    const r = e[n];
                                                    if ("object" != typeof r) throw new Error(`Unable to parse ICU expression in "${t}" message.`);
                                                    const s = Ic(i);
                                                    u.push(cc, "", s, c << 17 | 1);
                                                    const o = Ac(r);
                                                    Dc(d, r, s, s);
                                                    const a = d.length - 1;
                                                    h.push(Pc(r.mainBinding), 3, -1 - r.mainBinding, s << 2 | 2, a, o, 2, s << 2 | 3, a)
                                                } else if ("" !== e[n]) {
                                                const t = e[n],
                                                    r = t.match(_c),
                                                    s = Ic(i);
                                                u.push(r ? "" : t, s, c << 17 | 1), r && lt(jc(t, s), h)
                                            }
                                        }
                                    }
                                }
                                var f;
                                Ec > 0 && function (t, e, n) {
                                    if (n > 0 && t.firstCreatePass) {
                                        for (let r = 0; r < n; r++) t.blueprint.push(null), t.data.push(null), e.push(null);
                                        t.expandoInstructions ? t.expandoInstructions.push(n) : t.expandoStartIndex += n
                                    }
                                }(e, t, Ec), e.data[n + Rt] = {
                                    vars: Ec,
                                    create: u,
                                    update: h,
                                    icus: d.length ? d : null
                                }
                            }(pe(), r, t, e, n)
                        })(t, e, n),
                        function () {
                            const t = pe();
                            (function (t, e) {
                                const n = lc[uc--],
                                    r = t.data[n + Rt],
                                    s = ye(),
                                    i = fc(t, n, r.create, e);
                                let o = n + 1;
                                for (; o <= s.index - Rt;) {
                                    -1 === i.indexOf(o) && bc(t, e, o, !0);
                                    const n = re(t, o);
                                    !n || 0 !== n.type && 3 !== n.type && 4 !== n.type || null === n.localNames || (o += n.localNames.length >> 1), o++
                                }
                            })(me(), t), vo(!1)
                        }()
                    }

                    function zc(t, e) {
                        ! function (t, e, n, r) {
                            const s = ye().index - Rt,
                                i = [];
                            for (let o = 0; o < r.length; o += 2) {
                                const a = r[o],
                                    c = r[o + 1].split(wc);
                                for (let r = 0; r < c.length; r++) {
                                    const o = c[r];
                                    if (1 & r) throw new Error("ICU expressions are not yet supported in attributes");
                                    if ("" !== o)
                                        if (o.match(_c)) e.firstCreatePass && null === e.data[n + Rt] && lt(jc(o, s, a), i);
                                        else {
                                            const n = re(e, s);
                                            3 === n.type && xs(n, t, a, o, null, null);
                                            const r = null !== n.inputs && n.inputs[a];
                                            r && Hs(e, t, r, a, o)
                                        }
                                }
                            }
                            e.firstCreatePass && null === e.data[n + Rt] && (e.data[n + Rt] = i)
                        }(pe(), me(), t, e)
                    }

                    function Uc(t) {
                        return Gi(pe(), xe(), t) && (hc |= 1 << dc), dc++, Uc
                    }

                    function Vc(t) {
                        ! function (t, e, n) {
                            if (dc > 0) {
                                const r = t.data[n + Rt];
                                let s, i = null;
                                Array.isArray(r) ? s = r : (s = r.update, i = r.icus), pc(t, i, e, s, Ee() - dc - 1, hc), hc = 0, dc = 0
                            }
                        }(me(), pe(), t)
                    }
                    const $c = new Map;
                    class Bc extends at {
                        constructor(t, e) {
                            super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new $a(this);
                            const n = Nt(t),
                                r = t[$] || null;
                            r && oc(r), this._bootstrapComponents = cn(n.bootstrap), this._r3Injector = Ai(t, e, [{
                                provide: at,
                                useValue: this
                            }, {
                                provide: fa,
                                useValue: this.componentFactoryResolver
                            }], T(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
                        }
                        get(t, e = Fi.THROW_IF_NOT_FOUND, n = m.Default) {
                            return t === Fi || t === at || t === G ? this : this._r3Injector.get(t, e, n)
                        }
                        destroy() {
                            const t = this._r3Injector;
                            !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
                        }
                        onDestroy(t) {
                            this.destroyCbs.push(t)
                        }
                    }
                    class qc extends ct {
                        constructor(t) {
                            super(), this.moduleType = t, null !== Nt(t) && function t(e) {
                                if (null !== e.\u0275mod.id) {
                                    const t = e.\u0275mod.id;
                                    (function (t, e, n) {
                                        if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${T(e)} vs ${T(e.name)}`)
                                    })(t, $c.get(t), e), $c.set(t, e)
                                }
                                let n = e.\u0275mod.imports;
                                n instanceof Function && (n = n()), n && n.forEach(e => t(e))
                            }(t)
                        }
                        create(t) {
                            return new Bc(this.moduleType, t)
                        }
                    }

                    function Kc(t, e, n) {
                        const r = Ce() + t,
                            s = pe();
                        return s[r] === Hr ? Ki(s, r, n ? e.call(n) : e()) : function (t, e) {
                            return t[e]
                        }(s, r)
                    }

                    function Gc(t, e, n, r) {
                        return Zc(pe(), Ce(), t, e, n, r)
                    }

                    function Wc(t, e, n, r, s) {
                        return Yc(pe(), Ce(), t, e, n, r, s)
                    }

                    function Xc(t, e, n, r, s, i) {
                        return function (t, e, n, r, s, i, o, a) {
                            const c = e + n;
                            return function (t, e, n, r, s) {
                                const i = Wi(t, e, n, r);
                                return Gi(t, e + 2, s) || i
                            }(t, c, s, i, o) ? Ki(t, c + 3, a ? r.call(a, s, i, o) : r(s, i, o)) : Qc(t, c + 3)
                        }(pe(), Ce(), t, e, n, r, s, i)
                    }

                    function Qc(t, e) {
                        const n = t[e];
                        return n === Hr ? void 0 : n
                    }

                    function Zc(t, e, n, r, s, i) {
                        const o = e + n;
                        return Gi(t, o, s) ? Ki(t, o + 1, i ? r.call(i, s) : r(s)) : Qc(t, o + 1)
                    }

                    function Yc(t, e, n, r, s, i, o) {
                        const a = e + n;
                        return Wi(t, a, s, i) ? Ki(t, a + 2, o ? r.call(o, s, i) : r(s, i)) : Qc(t, a + 2)
                    }

                    function Jc(t, e) {
                        const n = me();
                        let r;
                        const s = t + Rt;
                        n.firstCreatePass ? (r = function (t, e) {
                            if (e)
                                for (let n = e.length - 1; n >= 0; n--) {
                                    const r = e[n];
                                    if (t === r.name) return r
                                }
                            throw new Error(`The pipe '${t}' could not be found!`)
                        }(e, n.pipeRegistry), n.data[s] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s];
                        const i = r.factory || (r.factory = Pt(r.type)),
                            o = et(Ji),
                            a = un(!1),
                            c = i();
                        return un(a), et(o),
                            function (t, e, n, r) {
                                const s = n + Rt;
                                s >= t.data.length && (t.data[s] = null, t.blueprint[s] = null), e[s] = r
                            }(n, pe(), t, c), c
                    }

                    function tl(t, e, n) {
                        const r = pe(),
                            s = se(r, t);
                        return rl(r, nl(r, t) ? Zc(r, Ce(), e, s.transform, n, s) : s.transform(n))
                    }

                    function el(t, e, n, r) {
                        const s = pe(),
                            i = se(s, t);
                        return rl(s, nl(s, t) ? Yc(s, Ce(), e, i.transform, n, r, i) : i.transform(n, r))
                    }

                    function nl(t, e) {
                        return t[1].data[e + Rt].pure
                    }

                    function rl(t, e) {
                        return $i.isWrapped(e) && (e = $i.unwrap(e), t[Ee()] = Hr), e
                    }
                    const sl = class extends r.a {
                        constructor(t = !1) {
                            super(), this.__isAsync = t
                        }
                        emit(t) {
                            super.next(t)
                        }
                        subscribe(t, e, n) {
                            let r, i = t => null,
                                o = () => null;
                            t && "object" == typeof t ? (r = this.__isAsync ? e => {
                                setTimeout(() => t.next(e))
                            } : e => {
                                t.next(e)
                            }, t.error && (i = this.__isAsync ? e => {
                                setTimeout(() => t.error(e))
                            } : e => {
                                t.error(e)
                            }), t.complete && (o = this.__isAsync ? () => {
                                setTimeout(() => t.complete())
                            } : () => {
                                t.complete()
                            })) : (r = this.__isAsync ? e => {
                                setTimeout(() => t(e))
                            } : e => {
                                t(e)
                            }, e && (i = this.__isAsync ? t => {
                                setTimeout(() => e(t))
                            } : t => {
                                e(t)
                            }), n && (o = this.__isAsync ? () => {
                                setTimeout(() => n())
                            } : () => {
                                n()
                            }));
                            const a = super.subscribe(r, i, o);
                            return t instanceof s.a && t.add(a), a
                        }
                    };

                    function il() {
                        return this._results[Vi()]()
                    }
                    class ol {
                        constructor() {
                            this.dirty = !0, this._results = [], this.changes = new sl, this.length = 0;
                            const t = Vi(),
                                e = ol.prototype;
                            e[t] || (e[t] = il)
                        }
                        map(t) {
                            return this._results.map(t)
                        }
                        filter(t) {
                            return this._results.filter(t)
                        }
                        find(t) {
                            return this._results.find(t)
                        }
                        reduce(t, e) {
                            return this._results.reduce(t, e)
                        }
                        forEach(t) {
                            this._results.forEach(t)
                        }
                        some(t) {
                            return this._results.some(t)
                        }
                        toArray() {
                            return this._results.slice()
                        }
                        toString() {
                            return this._results.toString()
                        }
                        reset(t) {
                            this._results = function t(e, n) {
                                void 0 === n && (n = e);
                                for (let r = 0; r < e.length; r++) {
                                    let s = e[r];
                                    Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s)
                                }
                                return n
                            }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                        }
                        notifyOnChanges() {
                            this.changes.emit(this)
                        }
                        setDirty() {
                            this.dirty = !0
                        }
                        destroy() {
                            this.changes.complete(), this.changes.unsubscribe()
                        }
                    }
                    class al {
                        constructor(t) {
                            this.queryList = t, this.matches = null
                        }
                        clone() {
                            return new al(this.queryList)
                        }
                        setDirty() {
                            this.queryList.setDirty()
                        }
                    }
                    class cl {
                        constructor(t = []) {
                            this.queries = t
                        }
                        createEmbeddedView(t) {
                            const e = t.queries;
                            if (null !== e) {
                                const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                                    r = [];
                                for (let t = 0; t < n; t++) {
                                    const n = e.getByIndex(t);
                                    r.push(this.queries[n.indexInDeclarationView].clone())
                                }
                                return new cl(r)
                            }
                            return null
                        }
                        insertView(t) {
                            this.dirtyQueriesWithMatches(t)
                        }
                        detachView(t) {
                            this.dirtyQueriesWithMatches(t)
                        }
                        dirtyQueriesWithMatches(t) {
                            for (let e = 0; e < this.queries.length; e++) null !== xl(t, e).matches && this.queries[e].setDirty()
                        }
                    }
                    class ll {
                        constructor(t, e, n, r = null) {
                            this.predicate = t, this.descendants = e, this.isStatic = n, this.read = r
                        }
                    }
                    class ul {
                        constructor(t = []) {
                            this.queries = t
                        }
                        elementStart(t, e) {
                            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
                        }
                        elementEnd(t) {
                            for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
                        }
                        embeddedTView(t) {
                            let e = null;
                            for (let n = 0; n < this.length; n++) {
                                const r = null !== e ? e.length : 0,
                                    s = this.getByIndex(n).embeddedTView(t, r);
                                s && (s.indexInDeclarationView = n, null !== e ? e.push(s) : e = [s])
                            }
                            return null !== e ? new ul(e) : null
                        }
                        template(t, e) {
                            for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
                        }
                        getByIndex(t) {
                            return this.queries[t]
                        }
                        get length() {
                            return this.queries.length
                        }
                        track(t) {
                            this.queries.push(t)
                        }
                    }
                    class hl {
                        constructor(t, e = -1) {
                            this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
                        }
                        elementStart(t, e) {
                            this.isApplyingToNode(e) && this.matchTNode(t, e)
                        }
                        elementEnd(t) {
                            this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
                        }
                        template(t, e) {
                            this.elementStart(t, e)
                        }
                        embeddedTView(t, e) {
                            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new hl(this.metadata)) : null
                        }
                        isApplyingToNode(t) {
                            if (this._appliesToNextNode && !1 === this.metadata.descendants) {
                                const e = this._declarationNodeIndex;
                                let n = t.parent;
                                for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
                                return e === (null !== n ? n.index : -1)
                            }
                            return this._appliesToNextNode
                        }
                        matchTNode(t, e) {
                            const n = this.metadata.predicate;
                            if (Array.isArray(n))
                                for (let r = 0; r < n.length; r++) {
                                    const s = n[r];
                                    this.matchTNodeWithReadOption(t, e, dl(e, s)), this.matchTNodeWithReadOption(t, e, _n(e, t, s, !1, !1))
                                } else n === Fa ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, _n(e, t, n, !1, !1))
                        }
                        matchTNodeWithReadOption(t, e, n) {
                            if (null !== n) {
                                const r = this.metadata.read;
                                if (null !== r)
                                    if (r === pa || r === za || r === Fa && 0 === e.type) this.addMatch(e.index, -2);
                                    else {
                                        const n = _n(e, t, r, !1, !1);
                                        null !== n && this.addMatch(e.index, n)
                                    }
                                else this.addMatch(e.index, n)
                            }
                        }
                        addMatch(t, e) {
                            null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
                        }
                    }

                    function dl(t, e) {
                        const n = t.localNames;
                        if (null !== n)
                            for (let r = 0; r < n.length; r += 2)
                                if (n[r] === e) return n[r + 1];
                        return null
                    }

                    function fl(t, e, n, r) {
                        return -1 === n ? function (t, e) {
                            return 3 === t.type || 4 === t.type ? yi(pa, t, e) : 0 === t.type ? bi(Fa, pa, t, e) : null
                        }(e, t) : -2 === n ? function (t, e, n) {
                            return n === pa ? yi(pa, e, t) : n === Fa ? bi(Fa, pa, e, t) : n === za ? vi(za, pa, e, t) : void 0
                        }(t, e, r) : wn(t, t[1], n, e)
                    }

                    function pl(t, e, n, r) {
                        const s = e[19].queries[r];
                        if (null === s.matches) {
                            const r = t.data,
                                i = n.matches,
                                o = [];
                            for (let t = 0; t < i.length; t += 2) {
                                const s = i[t];
                                o.push(s < 0 ? null : fl(e, r[s], i[t + 1], n.metadata.read))
                            }
                            s.matches = o
                        }
                        return s.matches
                    }

                    function ml(t) {
                        const e = pe(),
                            n = me(),
                            r = je();
                        Ae(r + 1);
                        const s = xl(n, r);
                        if (t.dirty && ae(e) === s.metadata.isStatic) {
                            if (null === s.matches) t.reset([]);
                            else {
                                const i = s.crossesNgTemplate ? function t(e, n, r, s) {
                                    const i = e.queries.getByIndex(r),
                                        o = i.matches;
                                    if (null !== o) {
                                        const a = pl(e, n, i, r);
                                        for (let e = 0; e < o.length; e += 2) {
                                            const r = o[e];
                                            if (r > 0) s.push(a[e / 2]);
                                            else {
                                                const i = o[e + 1],
                                                    a = n[-r];
                                                for (let e = Dt; e < a.length; e++) {
                                                    const n = a[e];
                                                    n[17] === n[3] && t(n[1], n, i, s)
                                                }
                                                if (null !== a[9]) {
                                                    const e = a[9];
                                                    for (let n = 0; n < e.length; n++) {
                                                        const r = e[n];
                                                        t(r[1], r, i, s)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return s
                                }(n, e, r, []) : pl(n, e, s, r);
                                t.reset(i), t.notifyOnChanges()
                            }
                            return !0
                        }
                        return !1
                    }

                    function gl(t, e, n) {
                        bl(me(), pe(), t, e, n, !0)
                    }

                    function yl(t, e, n) {
                        bl(me(), pe(), t, e, n, !1)
                    }

                    function bl(t, e, n, r, s, i) {
                        t.firstCreatePass && (El(t, new ll(n, r, i, s), -1), i && (t.staticViewQueries = !0)), Cl(t, e)
                    }

                    function vl(t, e, n, r) {
                        wl(me(), pe(), e, n, r, !1, ye(), t)
                    }

                    function _l(t, e, n, r) {
                        wl(me(), pe(), e, n, r, !0, ye(), t)
                    }

                    function wl(t, e, n, r, s, i, o, a) {
                        t.firstCreatePass && (El(t, new ll(n, r, i, s), o.index), function (t, e) {
                            const n = t.contentQueries || (t.contentQueries = []);
                            e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
                        }(t, a), i && (t.staticContentQueries = !0)), Cl(t, e)
                    }

                    function Sl() {
                        return t = pe(), e = je(), t[19].queries[e].queryList;
                        var t, e
                    }

                    function Cl(t, e) {
                        const n = new ol;
                        hs(t, e, n, n.destroy), null === e[19] && (e[19] = new cl), e[19].queries.push(new al(n))
                    }

                    function El(t, e, n) {
                        null === t.queries && (t.queries = new ul), t.queries.track(new hl(e, n))
                    }

                    function xl(t, e) {
                        return t.queries.getByIndex(e)
                    }

                    function Ol(t, e) {
                        return bi(Fa, pa, t, e)
                    }

                    function kl(t = m.Default) {
                        const e = _i(!0);
                        if (null != e || t & m.Optional) return e;
                        throw new Error("No provider for ChangeDetectorRef!")
                    }
                    const Tl = new K("Application Initializer");
                    let jl = (() => {
                        class t {
                            constructor(t) {
                                this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
                                    this.resolve = t, this.reject = e
                                })
                            }
                            runInitializers() {
                                if (this.initialized) return;
                                const t = [],
                                    e = () => {
                                        this.done = !0, this.resolve()
                                    };
                                if (this.appInits)
                                    for (let n = 0; n < this.appInits.length; n++) {
                                        const e = this.appInits[n]();
                                        lo(e) && t.push(e)
                                    }
                                Promise.all(t).then(() => {
                                    e()
                                }).catch(t => {
                                    this.reject(t)
                                }), 0 === t.length && e(), this.initialized = !0
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(rt(Tl, 8))
                        }, t.\u0275prov = b({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const Al = new K("AppId"),
                        Il = {
                            provide: Al,
                            useFactory: function () {
                                return `${Pl()}${Pl()}${Pl()}`
                            },
                            deps: []
                        };

                    function Pl() {
                        return String.fromCharCode(97 + Math.floor(25 * Math.random()))
                    }
                    const Nl = new K("Platform Initializer"),
                        Rl = new K("Platform ID"),
                        Dl = new K("appBootstrapListener");
                    let Ll = (() => {
                        class t {
                            log(t) {
                                console.log(t)
                            }
                            warn(t) {
                                console.warn(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = b({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const Ml = new K("LocaleId"),
                        Fl = new K("DefaultCurrencyCode");
                    class Hl {
                        constructor(t, e) {
                            this.ngModuleFactory = t, this.componentFactories = e
                        }
                    }
                    const zl = function (t) {
                            return new qc(t)
                        },
                        Ul = zl,
                        Vl = function (t) {
                            return Promise.resolve(zl(t))
                        },
                        $l = function (t) {
                            const e = zl(t),
                                n = cn(Nt(t).declarations).reduce((t, e) => {
                                    const n = It(e);
                                    return n && t.push(new Ka(n)), t
                                }, []);
                            return new Hl(e, n)
                        },
                        Bl = $l,
                        ql = function (t) {
                            return Promise.resolve($l(t))
                        };
                    let Kl = (() => {
                        class t {
                            constructor() {
                                this.compileModuleSync = Ul, this.compileModuleAsync = Vl, this.compileModuleAndAllComponentsSync = Bl, this.compileModuleAndAllComponentsAsync = ql
                            }
                            clearCache() {}
                            clearCacheFor(t) {}
                            getModuleId(t) {}
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = b({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const Gl = (() => Promise.resolve(0))();

                    function Wl(t) {
                        "undefined" == typeof Zone ? Gl.then(() => {
                            t && t.apply(null, null)
                        }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
                    }
                    class Xl {
                        constructor({
                            enableLongStackTrace: t = !1,
                            shouldCoalesceEventChangeDetection: e = !1
                        }) {
                            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new sl(!1), this.onMicrotaskEmpty = new sl(!1), this.onStable = new sl(!1), this.onError = new sl(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                            Zone.assertZonePatched();
                            const n = this;
                            n._nesting = 0, n._outer = n._inner = Zone.current, Zone.wtfZoneSpec && (n._inner = n._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (n._inner = n._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (n._inner = n._inner.fork(Zone.longStackTraceZoneSpec)), n.shouldCoalesceEventChangeDetection = e, n.lastRequestAnimationFrameId = -1, n.nativeRequestAnimationFrame = function () {
                                    let t = F.requestAnimationFrame,
                                        e = F.cancelAnimationFrame;
                                    if ("undefined" != typeof Zone && t && e) {
                                        const n = t[Zone.__symbol__("OriginalDelegate")];
                                        n && (t = n);
                                        const r = e[Zone.__symbol__("OriginalDelegate")];
                                        r && (e = r)
                                    }
                                    return {
                                        nativeRequestAnimationFrame: t,
                                        nativeCancelAnimationFrame: e
                                    }
                                }().nativeRequestAnimationFrame,
                                function (t) {
                                    const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
                                        ! function (t) {
                                            -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(F, () => {
                                                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                                    t.lastRequestAnimationFrameId = -1, Jl(t), Yl(t)
                                                }, void 0, () => {}, () => {})), t.fakeTopEventTask.invoke()
                                            }), Jl(t))
                                        }(t)
                                    });
                                    t._inner = t._inner.fork({
                                        name: "angular",
                                        properties: {
                                            isAngularZone: !0,
                                            maybeDelayChangeDetection: e
                                        },
                                        onInvokeTask: (n, r, s, i, o, a) => {
                                            try {
                                                return tu(t), n.invokeTask(s, i, o, a)
                                            } finally {
                                                e && "eventTask" === i.type && e(), eu(t)
                                            }
                                        },
                                        onInvoke: (e, n, r, s, i, o, a) => {
                                            try {
                                                return tu(t), e.invoke(r, s, i, o, a)
                                            } finally {
                                                eu(t)
                                            }
                                        },
                                        onHasTask: (e, n, r, s) => {
                                            e.hasTask(r, s), n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask, Jl(t), Yl(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask))
                                        },
                                        onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
                                    })
                                }(n)
                        }
                        static isInAngularZone() {
                            return !0 === Zone.current.get("isAngularZone")
                        }
                        static assertInAngularZone() {
                            if (!Xl.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                        }
                        static assertNotInAngularZone() {
                            if (Xl.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                        }
                        run(t, e, n) {
                            return this._inner.run(t, e, n)
                        }
                        runTask(t, e, n, r) {
                            const s = this._inner,
                                i = s.scheduleEventTask("NgZoneEvent: " + r, t, Zl, Ql, Ql);
                            try {
                                return s.runTask(i, e, n)
                            } finally {
                                s.cancelTask(i)
                            }
                        }
                        runGuarded(t, e, n) {
                            return this._inner.runGuarded(t, e, n)
                        }
                        runOutsideAngular(t) {
                            return this._outer.run(t)
                        }
                    }

                    function Ql() {}
                    const Zl = {};

                    function Yl(t) {
                        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                            t._nesting++, t.onMicrotaskEmpty.emit(null)
                        } finally {
                            if (t._nesting--, !t.hasPendingMicrotasks) try {
                                t.runOutsideAngular(() => t.onStable.emit(null))
                            } finally {
                                t.isStable = !0
                            }
                        }
                    }

                    function Jl(t) {
                        t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
                    }

                    function tu(t) {
                        t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
                    }

                    function eu(t) {
                        t._nesting--, Yl(t)
                    }
                    class nu {
                        constructor() {
                            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new sl, this.onMicrotaskEmpty = new sl, this.onStable = new sl, this.onError = new sl
                        }
                        run(t, e, n) {
                            return t.apply(e, n)
                        }
                        runGuarded(t, e, n) {
                            return t.apply(e, n)
                        }
                        runOutsideAngular(t) {
                            return t()
                        }
                        runTask(t, e, n, r) {
                            return t.apply(e, n)
                        }
                    }
                    let ru = (() => {
                            class t {
                                constructor(t) {
                                    this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
                                        this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                                    })
                                }
                                _watchAngularEvents() {
                                    this._ngZone.onUnstable.subscribe({
                                        next: () => {
                                            this._didWork = !0, this._isZoneStable = !1
                                        }
                                    }), this._ngZone.runOutsideAngular(() => {
                                        this._ngZone.onStable.subscribe({
                                            next: () => {
                                                Xl.assertNotInAngularZone(), Wl(() => {
                                                    this._isZoneStable = !0, this._runCallbacksIfReady()
                                                })
                                            }
                                        })
                                    })
                                }
                                increasePendingRequestCount() {
                                    return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                                }
                                decreasePendingRequestCount() {
                                    if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                                    return this._runCallbacksIfReady(), this._pendingCount
                                }
                                isStable() {
                                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                                }
                                _runCallbacksIfReady() {
                                    if (this.isStable()) Wl(() => {
                                        for (; 0 !== this._callbacks.length;) {
                                            let t = this._callbacks.pop();
                                            clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                                        }
                                        this._didWork = !1
                                    });
                                    else {
                                        let t = this.getPendingTasks();
                                        this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
                                    }
                                }
                                getPendingTasks() {
                                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
                                        source: t.source,
                                        creationLocation: t.creationLocation,
                                        data: t.data
                                    })) : []
                                }
                                addCallback(t, e, n) {
                                    let r = -1;
                                    e && e > 0 && (r = setTimeout(() => {
                                        this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks())
                                    }, e)), this._callbacks.push({
                                        doneCb: t,
                                        timeoutId: r,
                                        updateCb: n
                                    })
                                }
                                whenStable(t, e, n) {
                                    if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                                    this.addCallback(t, e, n), this._runCallbacksIfReady()
                                }
                                getPendingRequestCount() {
                                    return this._pendingCount
                                }
                                findProviders(t, e, n) {
                                    return []
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(rt(Xl))
                            }, t.\u0275prov = b({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        su = (() => {
                            class t {
                                constructor() {
                                    this._applications = new Map, cu.addToWindow(this)
                                }
                                registerApplication(t, e) {
                                    this._applications.set(t, e)
                                }
                                unregisterApplication(t) {
                                    this._applications.delete(t)
                                }
                                unregisterAllApplications() {
                                    this._applications.clear()
                                }
                                getTestability(t) {
                                    return this._applications.get(t) || null
                                }
                                getAllTestabilities() {
                                    return Array.from(this._applications.values())
                                }
                                getAllRootElements() {
                                    return Array.from(this._applications.keys())
                                }
                                findTestabilityInTree(t, e = !0) {
                                    return cu.findTestabilityInTree(this, t, e)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = b({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })();
                    class iu {
                        addToWindow(t) {}
                        findTestabilityInTree(t, e, n) {
                            return null
                        }
                    }

                    function ou(t) {
                        cu = t
                    }
                    let au, cu = new iu;
                    const lu = new K("AllowMultipleToken");
                    class uu {
                        constructor(t, e) {
                            this.name = t, this.token = e
                        }
                    }

                    function hu(t, e, n = []) {
                        const r = "Platform: " + e,
                            s = new K(r);
                        return (e = []) => {
                            let i = du();
                            if (!i || i.injector.get(lu, !1))
                                if (t) t(n.concat(e).concat({
                                    provide: s,
                                    useValue: !0
                                }));
                                else {
                                    const t = n.concat(e).concat({
                                        provide: s,
                                        useValue: !0
                                    }, {
                                        provide: Ei,
                                        useValue: "platform"
                                    });
                                    ! function (t) {
                                        if (au && !au.destroyed && !au.injector.get(lu, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                        au = t.get(fu);
                                        const e = t.get(Nl, null);
                                        e && e.forEach(t => t())
                                    }(Fi.create({
                                        providers: t,
                                        name: r
                                    }))
                                } return function (t) {
                                const e = du();
                                if (!e) throw new Error("No platform exists!");
                                if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                                return e
                            }(s)
                        }
                    }

                    function du() {
                        return au && !au.destroyed ? au : null
                    }
                    let fu = (() => {
                        class t {
                            constructor(t) {
                                this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                            }
                            bootstrapModuleFactory(t, e) {
                                const n = function (t, e) {
                                        let n;
                                        return n = "noop" === t ? new nu : ("zone.js" === t ? void 0 : t) || new Xl({
                                            enableLongStackTrace: Gn(),
                                            shouldCoalesceEventChangeDetection: e
                                        }), n
                                    }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                                    r = [{
                                        provide: Xl,
                                        useValue: n
                                    }];
                                return n.run(() => {
                                    const e = Fi.create({
                                            providers: r,
                                            parent: this.injector,
                                            name: t.moduleType.name
                                        }),
                                        s = t.create(e),
                                        i = s.injector.get(An, null);
                                    if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                                    return s.onDestroy(() => gu(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({
                                            next: t => {
                                                i.handleError(t)
                                            }
                                        })),
                                        function (t, e, n) {
                                            try {
                                                const r = n();
                                                return lo(r) ? r.catch(n => {
                                                    throw e.runOutsideAngular(() => t.handleError(n)), n
                                                }) : r
                                            } catch (r) {
                                                throw e.runOutsideAngular(() => t.handleError(r)), r
                                            }
                                        }(i, n, () => {
                                            const t = s.injector.get(jl);
                                            return t.runInitializers(), t.donePromise.then(() => (oc(s.injector.get(Ml, sc) || sc), this._moduleDoBootstrap(s), s))
                                        })
                                })
                            }
                            bootstrapModule(t, e = []) {
                                const n = pu({}, e);
                                return function (t, e, n) {
                                    const r = new qc(n);
                                    return Promise.resolve(r)
                                }(0, 0, t).then(t => this.bootstrapModuleFactory(t, n))
                            }
                            _moduleDoBootstrap(t) {
                                const e = t.injector.get(mu);
                                if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
                                else {
                                    if (!t.instance.ngDoBootstrap) throw new Error(`The module ${T(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                                    t.instance.ngDoBootstrap(e)
                                }
                                this._modules.push(t)
                            }
                            onDestroy(t) {
                                this._destroyListeners.push(t)
                            }
                            get injector() {
                                return this._injector
                            }
                            destroy() {
                                if (this._destroyed) throw new Error("The platform has already been destroyed!");
                                this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
                            }
                            get destroyed() {
                                return this._destroyed
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(rt(Fi))
                        }, t.\u0275prov = b({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function pu(t, e) {
                        return Array.isArray(e) ? e.reduce(pu, t) : Object.assign(Object.assign({}, t), e)
                    }
                    let mu = (() => {
                        class t {
                            constructor(t, e, n, r, s, c) {
                                this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = s, this._initStatus = c, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Gn(), this._zone.onMicrotaskEmpty.subscribe({
                                    next: () => {
                                        this._zone.run(() => {
                                            this.tick()
                                        })
                                    }
                                });
                                const l = new i.a(t => {
                                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                            t.next(this._stable), t.complete()
                                        })
                                    }),
                                    u = new i.a(t => {
                                        let e;
                                        this._zone.runOutsideAngular(() => {
                                            e = this._zone.onStable.subscribe(() => {
                                                Xl.assertNotInAngularZone(), Wl(() => {
                                                    this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                                                })
                                            })
                                        });
                                        const n = this._zone.onUnstable.subscribe(() => {
                                            Xl.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                                t.next(!1)
                                            }))
                                        });
                                        return () => {
                                            e.unsubscribe(), n.unsubscribe()
                                        }
                                    });
                                this.isStable = Object(o.a)(l, u.pipe(Object(a.a)()))
                            }
                            bootstrap(t, e) {
                                if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                                let n;
                                n = t instanceof ha ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                                const r = n.isBoundToModule ? void 0 : this._injector.get(at),
                                    s = n.create(Fi.NULL, [], e || n.selector, r);
                                s.onDestroy(() => {
                                    this._unloadComponent(s)
                                });
                                const i = s.injector.get(ru, null);
                                return i && s.injector.get(su).registerApplication(s.location.nativeElement, i), this._loadComponent(s), Gn() && this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."), s
                            }
                            tick() {
                                if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                                try {
                                    this._runningTick = !0;
                                    for (let t of this._views) t.detectChanges();
                                    if (this._enforceNoNewChanges)
                                        for (let t of this._views) t.checkNoChanges()
                                } catch (t) {
                                    this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
                                } finally {
                                    this._runningTick = !1
                                }
                            }
                            attachView(t) {
                                const e = t;
                                this._views.push(e), e.attachToAppRef(this)
                            }
                            detachView(t) {
                                const e = t;
                                gu(this._views, e), e.detachFromAppRef()
                            }
                            _loadComponent(t) {
                                this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Dl, []).concat(this._bootstrapListeners).forEach(e => e(t))
                            }
                            _unloadComponent(t) {
                                this.detachView(t.hostView), gu(this.components, t)
                            }
                            ngOnDestroy() {
                                this._views.slice().forEach(t => t.destroy())
                            }
                            get viewCount() {
                                return this._views.length
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(rt(Xl), rt(Ll), rt(Fi), rt(An), rt(fa), rt(jl))
                        }, t.\u0275prov = b({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function gu(t, e) {
                        const n = t.indexOf(e);
                        n > -1 && t.splice(n, 1)
                    }
                    class yu {}
                    class bu {}
                    const vu = {
                        factoryPathPrefix: "",
                        factoryPathSuffix: ".ngfactory"
                    };
                    let _u = (() => {
                        class t {
                            constructor(t, e) {
                                this._compiler = t, this._config = e || vu
                            }
                            load(t) {
                                return this.loadAndCompile(t)
                            }
                            loadAndCompile(t) {
                                let [e, r] = t.split("#");
                                return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => wu(t, e, r)).then(t => this._compiler.compileModuleAsync(t))
                            }
                            loadFactory(t) {
                                let [e, r] = t.split("#"), s = "NgFactory";
                                return void 0 === r && (r = "default", s = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + s]).then(t => wu(t, e, r))
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(rt(Kl), rt(bu, 8))
                        }, t.\u0275prov = b({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function wu(t, e, n) {
                        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
                        return t
                    }
                    const Su = function (t) {
                            return null
                        },
                        Cu = hu(null, "core", [{
                            provide: Rl,
                            useValue: "unknown"
                        }, {
                            provide: fu,
                            deps: [Fi]
                        }, {
                            provide: su,
                            deps: []
                        }, {
                            provide: Ll,
                            deps: []
                        }]),
                        Eu = [{
                            provide: mu,
                            useClass: mu,
                            deps: [Xl, Ll, Fi, An, fa, jl]
                        }, {
                            provide: qa,
                            deps: [Xl],
                            useFactory: function (t) {
                                let e = [];
                                return t.onStable.subscribe(() => {
                                        for (; e.length;) e.pop()()
                                    }),
                                    function (t) {
                                        e.push(t)
                                    }
                            }
                        }, {
                            provide: jl,
                            useClass: jl,
                            deps: [
                                [new d, Tl]
                            ]
                        }, {
                            provide: Kl,
                            useClass: Kl,
                            deps: []
                        }, Il, {
                            provide: Na,
                            useFactory: function () {
                                return La
                            },
                            deps: []
                        }, {
                            provide: Ra,
                            useFactory: function () {
                                return Ma
                            },
                            deps: []
                        }, {
                            provide: Ml,
                            useFactory: function (t) {
                                return oc(t = t || "undefined" != typeof $localize && $localize.locale || sc), t
                            },
                            deps: [
                                [new h(Ml), new d, new p]
                            ]
                        }, {
                            provide: Fl,
                            useValue: "USD"
                        }];
                    let xu = (() => {
                        class t {
                            constructor(t) {}
                        }
                        return t.\u0275mod = Ot({
                            type: t
                        }), t.\u0275inj = v({
                            factory: function (e) {
                                return new(e || t)(rt(mu))
                            },
                            providers: Eu
                        }), t
                    })()
                },
                gRHU: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("2fFW"),
                        s = n("NJ4a");
                    const i = {
                        closed: !0,
                        next(t) {},
                        error(t) {
                            if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                            Object(s.a)(t)
                        },
                        complete() {}
                    }
                },
                itXk: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return l
                    }));
                    var r = n("z+Ro"),
                        s = n("DH7j"),
                        i = n("l7GE"),
                        o = n("ZUHj"),
                        a = n("yCtX");
                    const c = {};

                    function l(...t) {
                        let e = null,
                            n = null;
                        return Object(r.a)(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && Object(s.a)(t[0]) && (t = t[0]), Object(a.a)(t, n).lift(new u(e))
                    }
                    class u {
                        constructor(t) {
                            this.resultSelector = t
                        }
                        call(t, e) {
                            return e.subscribe(new h(t, this.resultSelector))
                        }
                    }
                    class h extends i.a {
                        constructor(t, e) {
                            super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
                        }
                        _next(t) {
                            this.values.push(c), this.observables.push(t)
                        }
                        _complete() {
                            const t = this.observables,
                                e = t.length;
                            if (0 === e) this.destination.complete();
                            else {
                                this.active = e, this.toRespond = e;
                                for (let n = 0; n < e; n++) {
                                    const e = t[n];
                                    this.add(Object(o.a)(this, e, e, n))
                                }
                            }
                        }
                        notifyComplete(t) {
                            0 == (this.active -= 1) && this.destination.complete()
                        }
                        notifyNext(t, e, n, r, s) {
                            const i = this.values,
                                o = this.toRespond ? i[n] === c ? --this.toRespond : this.toRespond : 0;
                            i[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
                        }
                        _tryResultSelector(t) {
                            let e;
                            try {
                                e = this.resultSelector.apply(this, t)
                            } catch (n) {
                                return void this.destination.error(n)
                            }
                            this.destination.next(e)
                        }
                    }
                },
                jZKg: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("HDdC"),
                        s = n("quSY");

                    function i(t, e) {
                        return new r.a(n => {
                            const r = new s.a;
                            let i = 0;
                            return r.add(e.schedule((function () {
                                i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete()
                            }))), r
                        })
                    }
                },
                jhN1: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return M
                    })), n.d(e, "b", (function () {
                        return I
                    })), n.d(e, "c", (function () {
                        return H
                    })), n.d(e, "d", (function () {
                        return D
                    })), n.d(e, "e", (function () {
                        return w
                    }));
                    var r = n("ofXK"),
                        s = n("fXoL");
                    class i extends r.A {
                        constructor() {
                            super()
                        }
                        supportsDOMEvents() {
                            return !0
                        }
                    }
                    class o extends i {
                        static makeCurrent() {
                            Object(r.E)(new o)
                        }
                        getProperty(t, e) {
                            return t[e]
                        }
                        log(t) {
                            window.console && window.console.log && window.console.log(t)
                        }
                        logGroup(t) {
                            window.console && window.console.group && window.console.group(t)
                        }
                        logGroupEnd() {
                            window.console && window.console.groupEnd && window.console.groupEnd()
                        }
                        onAndCancel(t, e, n) {
                            return t.addEventListener(e, n, !1), () => {
                                t.removeEventListener(e, n, !1)
                            }
                        }
                        dispatchEvent(t, e) {
                            t.dispatchEvent(e)
                        }
                        remove(t) {
                            return t.parentNode && t.parentNode.removeChild(t), t
                        }
                        getValue(t) {
                            return t.value
                        }
                        createElement(t, e) {
                            return (e = e || this.getDefaultDocument()).createElement(t)
                        }
                        createHtmlDocument() {
                            return document.implementation.createHTMLDocument("fakeTitle")
                        }
                        getDefaultDocument() {
                            return document
                        }
                        isElementNode(t) {
                            return t.nodeType === Node.ELEMENT_NODE
                        }
                        isShadowRoot(t) {
                            return t instanceof DocumentFragment
                        }
                        getGlobalEventTarget(t, e) {
                            return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
                        }
                        getHistory() {
                            return window.history
                        }
                        getLocation() {
                            return window.location
                        }
                        getBaseHref(t) {
                            const e = c || (c = document.querySelector("base"), c) ? c.getAttribute("href") : null;
                            return null == e ? null : (n = e, a || (a = document.createElement("a")), a.setAttribute("href", n), "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname);
                            var n
                        }
                        resetBaseElement() {
                            c = null
                        }
                        getUserAgent() {
                            return window.navigator.userAgent
                        }
                        performanceNow() {
                            return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                        }
                        supportsCookies() {
                            return !0
                        }
                        getCookie(t) {
                            return Object(r.D)(document.cookie, t)
                        }
                    }
                    let a, c = null;
                    const l = new s.q("TRANSITION_ID"),
                        u = [{
                            provide: s.d,
                            useFactory: function (t, e, n) {
                                return () => {
                                    n.get(s.e).donePromise.then(() => {
                                        const n = Object(r.C)();
                                        Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
                                    })
                                }
                            },
                            deps: [l, r.c, s.r],
                            multi: !0
                        }];
                    class h {
                        static init() {
                            Object(s.V)(new h)
                        }
                        addToWindow(t) {
                            s.mb.getAngularTestability = (e, n = !0) => {
                                const r = t.findTestabilityInTree(e, n);
                                if (null == r) throw new Error("Could not find testability for element.");
                                return r
                            }, s.mb.getAllAngularTestabilities = () => t.getAllTestabilities(), s.mb.getAllAngularRootElements = () => t.getAllRootElements(), s.mb.frameworkStabilizers || (s.mb.frameworkStabilizers = []), s.mb.frameworkStabilizers.push(t => {
                                const e = s.mb.getAllAngularTestabilities();
                                let n = e.length,
                                    r = !1;
                                const i = function (e) {
                                    r = r || e, n--, 0 == n && t(r)
                                };
                                e.forEach((function (t) {
                                    t.whenStable(i)
                                }))
                            })
                        }
                        findTestabilityInTree(t, e, n) {
                            if (null == e) return null;
                            const s = t.getTestability(e);
                            return null != s ? s : n ? Object(r.C)().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
                        }
                    }
                    const d = new s.q("EventManagerPlugins");
                    let f = (() => {
                        class t {
                            constructor(t, e) {
                                this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse()
                            }
                            addEventListener(t, e, n) {
                                return this._findPluginFor(e).addEventListener(t, e, n)
                            }
                            addGlobalEventListener(t, e, n) {
                                return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                            }
                            getZone() {
                                return this._zone
                            }
                            _findPluginFor(t) {
                                const e = this._eventNameToPlugin.get(t);
                                if (e) return e;
                                const n = this._plugins;
                                for (let r = 0; r < n.length; r++) {
                                    const e = n[r];
                                    if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
                                }
                                throw new Error("No event manager plugin found for event " + t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(s.Xb(d), s.Xb(s.z))
                        }, t.\u0275prov = s.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    class p {
                        constructor(t) {
                            this._doc = t
                        }
                        addGlobalEventListener(t, e, n) {
                            const s = Object(r.C)().getGlobalEventTarget(this._doc, t);
                            if (!s) throw new Error(`Unsupported event target ${s} for event ${e}`);
                            return this.addEventListener(s, e, n)
                        }
                    }
                    let m = (() => {
                            class t {
                                constructor() {
                                    this._stylesSet = new Set
                                }
                                addStyles(t) {
                                    const e = new Set;
                                    t.forEach(t => {
                                        this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
                                    }), this.onStylesAdded(e)
                                }
                                onStylesAdded(t) {}
                                getAllStyles() {
                                    return Array.from(this._stylesSet)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = s.Gb({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        g = (() => {
                            class t extends m {
                                constructor(t) {
                                    super(), this._doc = t, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(t.head)
                                }
                                _addStylesToHost(t, e) {
                                    t.forEach(t => {
                                        const n = this._doc.createElement("style");
                                        n.textContent = t, this._styleNodes.add(e.appendChild(n))
                                    })
                                }
                                addHost(t) {
                                    this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
                                }
                                removeHost(t) {
                                    this._hostNodes.delete(t)
                                }
                                onStylesAdded(t) {
                                    this._hostNodes.forEach(e => this._addStylesToHost(t, e))
                                }
                                ngOnDestroy() {
                                    this._styleNodes.forEach(t => Object(r.C)().remove(t))
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(s.Xb(r.c))
                            }, t.\u0275prov = s.Gb({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })();
                    const y = {
                            svg: "http://www.w3.org/2000/svg",
                            xhtml: "http://www.w3.org/1999/xhtml",
                            xlink: "http://www.w3.org/1999/xlink",
                            xml: "http://www.w3.org/XML/1998/namespace",
                            xmlns: "http://www.w3.org/2000/xmlns/"
                        },
                        b = /%COMP%/g;

                    function v(t, e, n) {
                        for (let r = 0; r < e.length; r++) {
                            let s = e[r];
                            Array.isArray(s) ? v(t, s, n) : (s = s.replace(b, t), n.push(s))
                        }
                        return n
                    }

                    function _(t) {
                        return e => {
                            if ("__ngUnwrap__" === e) return t;
                            !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
                        }
                    }
                    let w = (() => {
                        class t {
                            constructor(t, e, n) {
                                this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new S(t)
                            }
                            createRenderer(t, e) {
                                if (!t || !e) return this.defaultRenderer;
                                switch (e.encapsulation) {
                                    case s.P.Emulated: {
                                        let n = this.rendererByCompId.get(e.id);
                                        return n || (n = new C(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
                                    }
                                    case s.P.Native:
                                    case s.P.ShadowDom:
                                        return new E(this.eventManager, this.sharedStylesHost, t, e);
                                    default:
                                        if (!this.rendererByCompId.has(e.id)) {
                                            const t = v(e.id, e.styles, []);
                                            this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
                                        }
                                        return this.defaultRenderer
                                }
                            }
                            begin() {}
                            end() {}
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(s.Xb(f), s.Xb(g), s.Xb(s.c))
                        }, t.\u0275prov = s.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    class S {
                        constructor(t) {
                            this.eventManager = t, this.data = Object.create(null)
                        }
                        destroy() {}
                        createElement(t, e) {
                            return e ? document.createElementNS(y[e] || e, t) : document.createElement(t)
                        }
                        createComment(t) {
                            return document.createComment(t)
                        }
                        createText(t) {
                            return document.createTextNode(t)
                        }
                        appendChild(t, e) {
                            t.appendChild(e)
                        }
                        insertBefore(t, e, n) {
                            t && t.insertBefore(e, n)
                        }
                        removeChild(t, e) {
                            t && t.removeChild(e)
                        }
                        selectRootElement(t, e) {
                            let n = "string" == typeof t ? document.querySelector(t) : t;
                            if (!n) throw new Error(`The selector "${t}" did not match any elements`);
                            return e || (n.textContent = ""), n
                        }
                        parentNode(t) {
                            return t.parentNode
                        }
                        nextSibling(t) {
                            return t.nextSibling
                        }
                        setAttribute(t, e, n, r) {
                            if (r) {
                                e = r + ":" + e;
                                const s = y[r];
                                s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n)
                            } else t.setAttribute(e, n)
                        }
                        removeAttribute(t, e, n) {
                            if (n) {
                                const r = y[n];
                                r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`)
                            } else t.removeAttribute(e)
                        }
                        addClass(t, e) {
                            t.classList.add(e)
                        }
                        removeClass(t, e) {
                            t.classList.remove(e)
                        }
                        setStyle(t, e, n, r) {
                            r & s.F.DashCase ? t.style.setProperty(e, n, r & s.F.Important ? "important" : "") : t.style[e] = n
                        }
                        removeStyle(t, e, n) {
                            n & s.F.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
                        }
                        setProperty(t, e, n) {
                            t[e] = n
                        }
                        setValue(t, e) {
                            t.nodeValue = e
                        }
                        listen(t, e, n) {
                            return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, _(n)) : this.eventManager.addEventListener(t, e, _(n))
                        }
                    }
                    class C extends S {
                        constructor(t, e, n, r) {
                            super(t), this.component = n;
                            const s = v(r + "-" + n.id, n.styles, []);
                            e.addStyles(s), this.contentAttr = "_ngcontent-%COMP%".replace(b, r + "-" + n.id), this.hostAttr = "_nghost-%COMP%".replace(b, r + "-" + n.id)
                        }
                        applyToHost(t) {
                            super.setAttribute(t, this.hostAttr, "")
                        }
                        createElement(t, e) {
                            const n = super.createElement(t, e);
                            return super.setAttribute(n, this.contentAttr, ""), n
                        }
                    }
                    class E extends S {
                        constructor(t, e, n, r) {
                            super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = r, this.shadowRoot = r.encapsulation === s.P.ShadowDom ? n.attachShadow({
                                mode: "open"
                            }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
                            const i = v(r.id, r.styles, []);
                            for (let s = 0; s < i.length; s++) {
                                const t = document.createElement("style");
                                t.textContent = i[s], this.shadowRoot.appendChild(t)
                            }
                        }
                        nodeOrShadowRoot(t) {
                            return t === this.hostEl ? this.shadowRoot : t
                        }
                        destroy() {
                            this.sharedStylesHost.removeHost(this.shadowRoot)
                        }
                        appendChild(t, e) {
                            return super.appendChild(this.nodeOrShadowRoot(t), e)
                        }
                        insertBefore(t, e, n) {
                            return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
                        }
                        removeChild(t, e) {
                            return super.removeChild(this.nodeOrShadowRoot(t), e)
                        }
                        parentNode(t) {
                            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
                        }
                    }
                    let x = (() => {
                        class t extends p {
                            constructor(t) {
                                super(t)
                            }
                            supports(t) {
                                return !0
                            }
                            addEventListener(t, e, n) {
                                return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n)
                            }
                            removeEventListener(t, e, n) {
                                return t.removeEventListener(e, n)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(s.Xb(r.c))
                        }, t.\u0275prov = s.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const O = ["alt", "control", "meta", "shift"],
                        k = {
                            "\b": "Backspace",
                            "\t": "Tab",
                            "\x7f": "Delete",
                            "\x1b": "Escape",
                            Del: "Delete",
                            Esc: "Escape",
                            Left: "ArrowLeft",
                            Right: "ArrowRight",
                            Up: "ArrowUp",
                            Down: "ArrowDown",
                            Menu: "ContextMenu",
                            Scroll: "ScrollLock",
                            Win: "OS"
                        },
                        T = {
                            A: "1",
                            B: "2",
                            C: "3",
                            D: "4",
                            E: "5",
                            F: "6",
                            G: "7",
                            H: "8",
                            I: "9",
                            J: "*",
                            K: "+",
                            M: "-",
                            N: ".",
                            O: "/",
                            "`": "0",
                            "\x90": "NumLock"
                        },
                        j = {
                            alt: t => t.altKey,
                            control: t => t.ctrlKey,
                            meta: t => t.metaKey,
                            shift: t => t.shiftKey
                        };
                    let A = (() => {
                            class t extends p {
                                constructor(t) {
                                    super(t)
                                }
                                supports(e) {
                                    return null != t.parseEventName(e)
                                }
                                addEventListener(e, n, s) {
                                    const i = t.parseEventName(n),
                                        o = t.eventCallback(i.fullKey, s, this.manager.getZone());
                                    return this.manager.getZone().runOutsideAngular(() => Object(r.C)().onAndCancel(e, i.domEventName, o))
                                }
                                static parseEventName(e) {
                                    const n = e.toLowerCase().split("."),
                                        r = n.shift();
                                    if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
                                    const s = t._normalizeKey(n.pop());
                                    let i = "";
                                    if (O.forEach(t => {
                                            const e = n.indexOf(t);
                                            e > -1 && (n.splice(e, 1), i += t + ".")
                                        }), i += s, 0 != n.length || 0 === s.length) return null;
                                    const o = {};
                                    return o.domEventName = r, o.fullKey = i, o
                                }
                                static getEventFullKey(t) {
                                    let e = "",
                                        n = function (t) {
                                            let e = t.key;
                                            if (null == e) {
                                                if (e = t.keyIdentifier, null == e) return "Unidentified";
                                                e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && T.hasOwnProperty(e) && (e = T[e]))
                                            }
                                            return k[e] || e
                                        }(t);
                                    return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), O.forEach(r => {
                                        r != n && (0, j[r])(t) && (e += r + ".")
                                    }), e += n, e
                                }
                                static eventCallback(e, n, r) {
                                    return s => {
                                        t.getEventFullKey(s) === e && r.runGuarded(() => n(s))
                                    }
                                }
                                static _normalizeKey(t) {
                                    switch (t) {
                                        case "esc":
                                            return "escape";
                                        default:
                                            return t
                                    }
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(s.Xb(r.c))
                            }, t.\u0275prov = s.Gb({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        I = (() => {
                            class t {}
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = Object(s.Gb)({
                                factory: function () {
                                    return Object(s.Xb)(N)
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })();

                    function P(t) {
                        return new N(t.get(r.c))
                    }
                    let N = (() => {
                        class t extends I {
                            constructor(t) {
                                super(), this._doc = t
                            }
                            sanitize(t, e) {
                                if (null == e) return null;
                                switch (t) {
                                    case s.H.NONE:
                                        return e;
                                    case s.H.HTML:
                                        return Object(s.bb)(e, "HTML") ? Object(s.tb)(e) : Object(s.Z)(this._doc, String(e));
                                    case s.H.STYLE:
                                        return Object(s.bb)(e, "Style") ? Object(s.tb)(e) : e;
                                    case s.H.SCRIPT:
                                        if (Object(s.bb)(e, "Script")) return Object(s.tb)(e);
                                        throw new Error("unsafe value used in a script context");
                                    case s.H.URL:
                                        return Object(s.lb)(e), Object(s.bb)(e, "URL") ? Object(s.tb)(e) : Object(s.ab)(String(e));
                                    case s.H.RESOURCE_URL:
                                        if (Object(s.bb)(e, "ResourceURL")) return Object(s.tb)(e);
                                        throw new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                                    default:
                                        throw new Error(`Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`)
                                }
                            }
                            bypassSecurityTrustHtml(t) {
                                return Object(s.cb)(t)
                            }
                            bypassSecurityTrustStyle(t) {
                                return Object(s.fb)(t)
                            }
                            bypassSecurityTrustScript(t) {
                                return Object(s.eb)(t)
                            }
                            bypassSecurityTrustUrl(t) {
                                return Object(s.gb)(t)
                            }
                            bypassSecurityTrustResourceUrl(t) {
                                return Object(s.db)(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(s.Xb(r.c))
                        }, t.\u0275prov = Object(s.Gb)({
                            factory: function () {
                                return P(Object(s.Xb)(s.o))
                            },
                            token: t,
                            providedIn: "root"
                        }), t
                    })();
                    const R = [{
                            provide: s.B,
                            useValue: r.B
                        }, {
                            provide: s.C,
                            useValue: function () {
                                o.makeCurrent(), h.init()
                            },
                            multi: !0
                        }, {
                            provide: r.c,
                            useFactory: function () {
                                return Object(s.rb)(document), document
                            },
                            deps: []
                        }],
                        D = Object(s.Q)(s.U, "browser", R),
                        L = [
                            [], {
                                provide: s.X,
                                useValue: "root"
                            }, {
                                provide: s.m,
                                useFactory: function () {
                                    return new s.m
                                },
                                deps: []
                            }, {
                                provide: d,
                                useClass: x,
                                multi: !0,
                                deps: [r.c, s.z, s.B]
                            }, {
                                provide: d,
                                useClass: A,
                                multi: !0,
                                deps: [r.c]
                            },
                            [], {
                                provide: w,
                                useClass: w,
                                deps: [f, g, s.c]
                            }, {
                                provide: s.E,
                                useExisting: w
                            }, {
                                provide: m,
                                useExisting: g
                            }, {
                                provide: g,
                                useClass: g,
                                deps: [r.c]
                            }, {
                                provide: s.L,
                                useClass: s.L,
                                deps: [s.z]
                            }, {
                                provide: f,
                                useClass: f,
                                deps: [d, s.z]
                            },
                            []
                        ];
                    let M = (() => {
                        class t {
                            constructor(t) {
                                if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                            }
                            static withServerTransition(e) {
                                return {
                                    ngModule: t,
                                    providers: [{
                                        provide: s.c,
                                        useValue: e.appId
                                    }, {
                                        provide: l,
                                        useExisting: s.c
                                    }, u]
                                }
                            }
                        }
                        return t.\u0275mod = s.Ib({
                            type: t
                        }), t.\u0275inj = s.Hb({
                            factory: function (e) {
                                return new(e || t)(s.Xb(t, 12))
                            },
                            providers: L,
                            imports: [r.b, s.f]
                        }), t
                    })();

                    function F() {
                        return new H(Object(s.Xb)(r.c))
                    }
                    let H = (() => {
                        class t {
                            constructor(t) {
                                this._doc = t
                            }
                            getTitle() {
                                return this._doc.title
                            }
                            setTitle(t) {
                                this._doc.title = t || ""
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(s.Xb(r.c))
                        }, t.\u0275prov = Object(s.Gb)({
                            factory: F,
                            token: t,
                            providedIn: "root"
                        }), t
                    })();
                    "undefined" != typeof window && window
                },
                kJWO: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")()
                },
                l7GE: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("7o/Q");
                    class s extends r.a {
                        notifyNext(t, e, n, r, s) {
                            this.destination.next(e)
                        }
                        notifyError(t, e) {
                            this.destination.error(t)
                        }
                        notifyComplete(t) {
                            this.destination.complete()
                        }
                    }
                },
                lJxs: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("7o/Q");

                    function s(t, e) {
                        return function (n) {
                            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                            return n.lift(new i(t, e))
                        }
                    }
                    class i {
                        constructor(t, e) {
                            this.project = t, this.thisArg = e
                        }
                        call(t, e) {
                            return e.subscribe(new o(t, this.project, this.thisArg))
                        }
                    }
                    class o extends r.a {
                        constructor(t, e, n) {
                            super(t), this.project = e, this.count = 0, this.thisArg = n || this
                        }
                        _next(t) {
                            let e;
                            try {
                                e = this.project.call(this.thisArg, t, this.count++)
                            } catch (n) {
                                return void this.destination.error(n)
                            }
                            this.destination.next(e)
                        }
                    }
                },
                n6bG: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return "function" == typeof t
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                ngJS: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = t => e => {
                        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.complete()
                    }
                },
                o5C3: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return f
                    }));
                    var r = {};
                    ! function t(e, n, r, s) {
                        var i = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL);

                        function o() {}

                        function a(t) {
                            var r = n.exports.Promise,
                                s = void 0 !== r ? r : e.Promise;
                            return "function" == typeof s ? new s(t) : (t(o, o), null)
                        }
                        var c, l, u, h, d, f, p, m, g = (u = Math.floor(1e3 / 60), h = {}, d = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function (t) {
                                var e = Math.random();
                                return h[e] = requestAnimationFrame((function n(r) {
                                    d === r || d + u - 1 < r ? (d = r, delete h[e], t()) : h[e] = requestAnimationFrame(n)
                                })), e
                            }, l = function (t) {
                                h[t] && cancelAnimationFrame(h[t])
                            }) : (c = function (t) {
                                return setTimeout(t, u)
                            }, l = function (t) {
                                return clearTimeout(t)
                            }), {
                                frame: c,
                                cancel: l
                            }),
                            y = (m = {}, function () {
                                if (f) return f;
                                if (!r && i) {
                                    var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                                    try {
                                        f = new Worker(URL.createObjectURL(new Blob([e])))
                                    } catch (n) {
                                        return void 0 !== typeof console && "function" == typeof console.warn && console.warn("\ud83c\udf8a Could not load worker", n), null
                                    }! function (t) {
                                        function e(e, n) {
                                            t.postMessage({
                                                options: e || {},
                                                callback: n
                                            })
                                        }
                                        t.init = function (e) {
                                            var n = e.transferControlToOffscreen();
                                            t.postMessage({
                                                canvas: n
                                            }, [n])
                                        }, t.fire = function (n, r, s) {
                                            if (p) return e(n, null), p;
                                            var i = Math.random().toString(36).slice(2);
                                            return p = a((function (r) {
                                                function o(e) {
                                                    e.data.callback === i && (delete m[i], t.removeEventListener("message", o), p = null, s(), r())
                                                }
                                                t.addEventListener("message", o), e(n, i), m[i] = o.bind(null, {
                                                    data: {
                                                        callback: i
                                                    }
                                                })
                                            }))
                                        }, t.reset = function () {
                                            for (var e in t.postMessage({
                                                    reset: !0
                                                }), m) m[e](), delete m[e]
                                        }
                                    }(f)
                                }
                                return f
                            }),
                            b = {
                                particleCount: 50,
                                angle: 90,
                                spread: 45,
                                startVelocity: 45,
                                decay: .9,
                                gravity: 1,
                                ticks: 200,
                                x: .5,
                                y: .5,
                                shapes: ["square", "circle"],
                                zIndex: 100,
                                colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                                disableForReducedMotion: !1,
                                scalar: 1
                            };

                        function v(t, e, n) {
                            return function (t, e) {
                                return e ? e(t) : t
                            }(t && null != t[e] ? t[e] : b[e], n)
                        }

                        function _(t) {
                            return t < 0 ? 0 : Math.floor(t)
                        }

                        function w(t) {
                            return parseInt(t, 16)
                        }

                        function S(t) {
                            t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight
                        }

                        function C(t) {
                            var e = t.getBoundingClientRect();
                            t.width = e.width, t.height = e.height
                        }

                        function E(t, n) {
                            var o, c = !t,
                                l = !!v(n || {}, "resize"),
                                u = v(n, "disableForReducedMotion", Boolean),
                                h = i && v(n || {}, "useWorker") ? y() : null,
                                d = c ? S : C,
                                f = !(!t || !h || !t.__confetti_initialized),
                                p = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

                            function m(n) {
                                var i = u || v(n, "disableForReducedMotion", Boolean),
                                    m = v(n, "zIndex", Number);
                                if (i && p) return a((function (t) {
                                    t()
                                }));
                                c && o ? t = o.canvas : c && !t && (t = function (t) {
                                    var e = document.createElement("canvas");
                                    return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e
                                }(m), document.body.appendChild(t)), l && !f && d(t);
                                var y = {
                                    width: t.width,
                                    height: t.height
                                };

                                function b() {
                                    if (h) {
                                        var e = {
                                            getBoundingClientRect: function () {
                                                if (!c) return t.getBoundingClientRect()
                                            }
                                        };
                                        return d(e), void h.postMessage({
                                            resize: {
                                                width: e.width,
                                                height: e.height
                                            }
                                        })
                                    }
                                    y.width = y.height = null
                                }

                                function S() {
                                    o = null, l && e.removeEventListener("resize", b), c && t && (document.body.removeChild(t), t = null, f = !1)
                                }
                                return h && !f && h.init(t), f = !0, h && (t.__confetti_initialized = !0), l && e.addEventListener("resize", b, !1), h ? h.fire(n, y, S) : function (e, n, i) {
                                    for (var c, l, u, h, f, p, m = v(e, "particleCount", _), y = v(e, "angle", Number), b = v(e, "spread", Number), S = v(e, "startVelocity", Number), C = v(e, "decay", Number), E = v(e, "gravity", Number), x = v(e, "colors"), O = v(e, "ticks", Number), k = v(e, "shapes"), T = v(e, "scalar"), j = function (t) {
                                            var e = v(t, "origin", Object);
                                            return e.x = v(e, "x", Number), e.y = v(e, "y", Number), e
                                        }(e), A = m, I = [], P = t.width * j.x, N = t.height * j.y; A--;) I.push((u = void 0, h = (c = {
                                        x: P,
                                        y: N,
                                        angle: y,
                                        spread: b,
                                        startVelocity: S,
                                        color: x[A % x.length],
                                        shape: k[(p = k.length, Math.floor(Math.random() * (p - 0)) + 0)],
                                        ticks: O,
                                        decay: C,
                                        gravity: E,
                                        scalar: T
                                    }).angle * (Math.PI / 180), f = c.spread * (Math.PI / 180), {
                                        x: c.x,
                                        y: c.y,
                                        wobble: 10 * Math.random(),
                                        velocity: .5 * c.startVelocity + Math.random() * c.startVelocity,
                                        angle2D: -h + (.5 * f - Math.random() * f),
                                        tiltAngle: Math.random() * Math.PI,
                                        color: (l = c.color, u = String(l).replace(/[^0-9a-f]/gi, ""), u.length < 6 && (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]), {
                                            r: w(u.substring(0, 2)),
                                            g: w(u.substring(2, 4)),
                                            b: w(u.substring(4, 6))
                                        }),
                                        shape: c.shape,
                                        tick: 0,
                                        totalTicks: c.ticks,
                                        decay: c.decay,
                                        random: Math.random() + 5,
                                        tiltSin: 0,
                                        tiltCos: 0,
                                        wobbleX: 0,
                                        wobbleY: 0,
                                        gravity: 3 * c.gravity,
                                        ovalScalar: .6,
                                        scalar: c.scalar
                                    }));
                                    return o ? o.addFettis(I) : (o = function (t, e, n, i, o) {
                                            var c, l, u = e.slice(),
                                                h = t.getContext("2d"),
                                                d = a((function (e) {
                                                        function a() {
                                                            c = l = null, h.clearRect(0, 0, i.width, i.height), o(), e()
                                                        }
                                                        c = g.frame((function e() {
                                                                !r || i.width === s.width && i.height === s.height || (i.width = t.width = s.width, i.height = t.height = s.height), i.width || i.height || (n(t), i.width = t.width, i.height = t.height), h.clearRect(0, 0, i.width, i.height), (u = u.filter((function (t) {
                                                                        return function (t, e) {
                                                                            e.x += Math.cos(e.angle2D) * e.velocity, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += .1, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 5, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble);
                                                                            var n = e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,s=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(o-s)*e.ovalScalar,Math.PI/
                                                                            10 * e.wobble, 0, 2 * Math.PI): function (t, e, n, r, s, i, o, a, c) {
                                                                            t.save(), t.translate(e, n), t.rotate(i), t.scale(r, s), t.arc(0, 0, 1, 0, a, void 0), t.restore()
                                                                        }(t, e.x, e.y, Math.abs(i - r) * e.ovalScalar, Math.abs(o - s) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI): (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(s)), t.lineTo(Math.floor(i), Math.floor(o)), t.lineTo(Math.floor(r), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks
                                                                    }(h, t)
                                                                }))).length ? c = g.frame(e) : a()
                                                        })), l = a
                                                }));
                                        return {
                                            addFettis: function (t) {
                                                return u = u.concat(t), d
                                            },
                                            canvas: t,
                                            promise: d,
                                            reset: function () {
                                                c && g.cancel(c), l && l()
                                            }
                                        }
                                    }(t, I, d, n, i)).promise
                            }(n, y, S)
                        }
                        return m.reset = function () {
                            h && h.reset(), o && o.reset()
                        }, m
                    }
                    n.exports = E(null, {
                        useWorker: !0,
                        resize: !0
                    }), n.exports.create = E
                }(function () {
                    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this
                }(), r, !1);
                var s = r.exports.create,
                    i = n("fXoL"),
                    o = n("1kSV"),
                    a = n("wr6Y"),
                    c = n("ofXK"),
                    l = n("sYmb"),
                    u = n("akL4");
                const h = ["container"];

                function d(t, e) {
                    if (1 & t && (i.Pb(0, "div", 8), i.Pb(1, "div", 9), i.Pb(2, "div", 15), i.Lb(3, "img", 16), i.Ob(), i.Ob(), i.Ob()), 2 & t) {
                        const t = i.cc();
                        i.xb(3), i.ic("src", t.img, i.uc)
                    }
                }
                let f = (() => {
                    class t {
                        constructor(t, e) {
                            this.activeModal = t, this.annService = e, this.fireworks = !0
                        }
                        ngOnInit() {}
                        ngAfterViewInit() {
                            !this.viaBtn && this.fireworks && this.generateConfetti()
                        }
                        generateConfetti() {
                            const t = s(this.container.nativeElement, {
                                    resize: !0,
                                    useWorker: !0
                                }),
                                e = Date.now() + 15e3,
                                n = {
                                    startVelocity: 30,
                                    spread: 360,
                                    ticks: 60,
                                    zIndex: 0
                                },
                                r = setInterval(() => {
                                    const s = e - Date.now();
                                    if (s <= 0) return clearInterval(r);
                                    const i = s / 15e3 * 50;
                                    t(Object.assign({}, n, {
                                        particleCount: i,
                                        origin: {
                                            x: this.randomInRange(.1, .3),
                                            y: Math.random() - .2
                                        }
                                    })), t(Object.assign({}, n, {
                                        particleCount: i,
                                        origin: {
                                            x: this.randomInRange(.7, .9),
                                            y: Math.random() - .2
                                        }
                                    }))
                                }, 250)
                        }
                        randomInRange(t, e) {
                            return Math.random() * (e - t) + t
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(i.Kb(o.a), i.Kb(a.a))
                    }, t.\u0275cmp = i.Eb({
                        type: t,
                        selectors: [
                            ["app-announcement"]
                        ],
                        viewQuery: function (t, e) {
                            var n;
                            1 & t && i.Fc(h, !0), 2 & t && i.pc(n = i.bc()) && (e.container = n.first)
                        },
                        inputs: {
                            img: "img",
                            title: "title",
                            content: "content",
                            viaBtn: "viaBtn",
                            fireworks: "fireworks"
                        },
                        decls: 21,
                        vars: 9,
                        consts: [
                            [1, "modal-content"],
                            [1, "modal-header"],
                            [1, "modal-title"],
                            ["type", "button", "aria-label", "Close", 1, "close", 3, "click"],
                            ["aria-hidden", "true"],
                            [1, "modal-body"],
                            [1, "container-fluid"],
                            ["class", "row", 4, "ngIf"],
                            [1, "row"],
                            [1, "col"],
                            [1, "content-style", 3, "innerHTML"],
                            [1, "modal-footer"],
                            ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"],
                            [1, "pyro"],
                            ["container", ""],
                            [1, "mb-5"],
                            ["alt", "announcement image", 1, "ann-img", "position-relative", 3, "src"]
                        ],
                        template: function (t, e) {
                            1 & t && (i.Pb(0, "div", 0), i.Pb(1, "div", 1), i.Pb(2, "h4", 2), i.Bc(3), i.dc(4, "translate"), i.Ob(), i.Pb(5, "button", 3), i.ac("click", (function () {
                                return e.annService.setAnnouncementSeen(), e.activeModal.dismiss("Cross click")
                            })), i.Pb(6, "span", 4), i.Bc(7, "\xd7"), i.Ob(), i.Ob(), i.Ob(), i.Pb(8, "div", 5), i.Pb(9, "div", 6), i.zc(10, d, 4, 1, "div", 7), i.Pb(11, "div", 8), i.Pb(12, "div", 9), i.Lb(13, "div", 10), i.dc(14, "sanitizeHtml"), i.dc(15, "translate"), i.Ob(), i.Ob(), i.Ob(), i.Ob(), i.Pb(16, "div", 11), i.Pb(17, "button", 12), i.ac("click", (function () {
                                return e.annService.setAnnouncementSeen(), e.activeModal.close("Close click")
                            })), i.Bc(18, "Close "), i.Ob(), i.Ob(), i.Ob(), i.Lb(19, "canvas", 13, 14)), 2 & t && (i.xb(3), i.Cc(i.ec(4, 3, e.title)), i.xb(7), i.ic("ngIf", e.img), i.xb(3), i.ic("innerHTML", i.ec(14, 5, i.ec(15, 7, e.content)), i.tc))
                        },
                        directives: [c.l],
                        pipes: [l.c, u.a],
                        styles: [".ann-img[_ngcontent-%COMP%]{width:100%;position:absolute}.pyro[_ngcontent-%COMP%]{position:fixed;pointer-events:none;width:100%;top:0;left:0}"]
                    }), t
                })()
            },
            ofXK: function (t, e, n) {
                "use strict";
                n.d(e, "a", (function () {
                    return _
                })), n.d(e, "b", (function () {
                    return Pt
                })), n.d(e, "c", (function () {
                    return c
                })), n.d(e, "d", (function () {
                    return Tt
                })), n.d(e, "e", (function () {
                    return T
                })), n.d(e, "f", (function () {
                    return S
                })), n.d(e, "g", (function () {
                    return h
                })), n.d(e, "h", (function () {
                    return C
                })), n.d(e, "i", (function () {
                    return b
                })), n.d(e, "j", (function () {
                    return mt
                })), n.d(e, "k", (function () {
                    return yt
                })), n.d(e, "l", (function () {
                    return vt
                })), n.d(e, "m", (function () {
                    return Ct
                })), n.d(e, "n", (function () {
                    return Et
                })), n.d(e, "o", (function () {
                    return xt
                })), n.d(e, "p", (function () {
                    return Ot
                })), n.d(e, "q", (function () {
                    return w
                })), n.d(e, "r", (function () {
                    return jt
                })), n.d(e, "s", (function () {
                    return l
                })), n.d(e, "t", (function () {
                    return j
                })), n.d(e, "u", (function () {
                    return Dt
                })), n.d(e, "v", (function () {
                    return Q
                })), n.d(e, "w", (function () {
                    return N
                })), n.d(e, "x", (function () {
                    return P
                })), n.d(e, "y", (function () {
                    return R
                })), n.d(e, "z", (function () {
                    return Rt
                })), n.d(e, "A", (function () {
                    return a
                })), n.d(e, "B", (function () {
                    return Nt
                })), n.d(e, "C", (function () {
                    return i
                })), n.d(e, "D", (function () {
                    return pt
                })), n.d(e, "E", (function () {
                    return o
                }));
                var r = n("fXoL");
                let s = null;

                function i() {
                    return s
                }

                function o(t) {
                    s || (s = t)
                }
                class a {}
                const c = new r.q("DocumentToken");
                let l = (() => {
                    class t {}
                    return t.\u0275fac = function (e) {
                        return new(e || t)
                    }, t.\u0275prov = Object(r.Gb)({
                        factory: u,
                        token: t,
                        providedIn: "platform"
                    }), t
                })();

                function u() {
                    return Object(r.Xb)(d)
                }
                const h = new r.q("Location Initialized");
                let d = (() => {
                    class t extends l {
                        constructor(t) {
                            super(), this._doc = t, this._init()
                        }
                        _init() {
                            this.location = i().getLocation(), this._history = i().getHistory()
                        }
                        getBaseHrefFromDOM() {
                            return i().getBaseHref(this._doc)
                        }
                        onPopState(t) {
                            i().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
                        }
                        onHashChange(t) {
                            i().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
                        }
                        get href() {
                            return this.location.href
                        }
                        get protocol() {
                            return this.location.protocol
                        }
                        get hostname() {
                            return this.location.hostname
                        }
                        get port() {
                            return this.location.port
                        }
                        get pathname() {
                            return this.location.pathname
                        }
                        get search() {
                            return this.location.search
                        }
                        get hash() {
                            return this.location.hash
                        }
                        set pathname(t) {
                            this.location.pathname = t
                        }
                        pushState(t, e, n) {
                            f() ? this._history.pushState(t, e, n) : this.location.hash = n
                        }
                        replaceState(t, e, n) {
                            f() ? this._history.replaceState(t, e, n) : this.location.hash = n
                        }
                        forward() {
                            this._history.forward()
                        }
                        back() {
                            this._history.back()
                        }
                        getState() {
                            return this._history.state
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(r.Xb(c))
                    }, t.\u0275prov = Object(r.Gb)({
                        factory: p,
                        token: t,
                        providedIn: "platform"
                    }), t
                })();

                function f() {
                    return !!window.history.pushState
                }

                function p() {
                    return new d(Object(r.Xb)(c))
                }

                function m(t, e) {
                    if (0 == t.length) return e;
                    if (0 == e.length) return t;
                    let n = 0;
                    return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
                }

                function g(t) {
                    const e = t.match(/#|\?|$/),
                        n = e && e.index || t.length;
                    return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
                }

                function y(t) {
                    return t && "?" !== t[0] ? "?" + t : t
                }
                let b = (() => {
                    class t {}
                    return t.\u0275fac = function (e) {
                        return new(e || t)
                    }, t.\u0275prov = Object(r.Gb)({
                        factory: v,
                        token: t,
                        providedIn: "root"
                    }), t
                })();

                function v(t) {
                    const e = Object(r.Xb)(c).location;
                    return new w(Object(r.Xb)(l), e && e.origin || "")
                }
                const _ = new r.q("appBaseHref");
                let w = (() => {
                        class t extends b {
                            constructor(t, e) {
                                if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                                this._baseHref = e
                            }
                            onPopState(t) {
                                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                            }
                            getBaseHref() {
                                return this._baseHref
                            }
                            prepareExternalUrl(t) {
                                return m(this._baseHref, t)
                            }
                            path(t = !1) {
                                const e = this._platformLocation.pathname + y(this._platformLocation.search),
                                    n = this._platformLocation.hash;
                                return n && t ? `${e}${n}` : e
                            }
                            pushState(t, e, n, r) {
                                const s = this.prepareExternalUrl(n + y(r));
                                this._platformLocation.pushState(t, e, s)
                            }
                            replaceState(t, e, n, r) {
                                const s = this.prepareExternalUrl(n + y(r));
                                this._platformLocation.replaceState(t, e, s)
                            }
                            forward() {
                                this._platformLocation.forward()
                            }
                            back() {
                                this._platformLocation.back()
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(l), r.Xb(_, 8))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    S = (() => {
                        class t extends b {
                            constructor(t, e) {
                                super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
                            }
                            onPopState(t) {
                                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                            }
                            getBaseHref() {
                                return this._baseHref
                            }
                            path(t = !1) {
                                let e = this._platformLocation.hash;
                                return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                            }
                            prepareExternalUrl(t) {
                                const e = m(this._baseHref, t);
                                return e.length > 0 ? "#" + e : e
                            }
                            pushState(t, e, n, r) {
                                let s = this.prepareExternalUrl(n + y(r));
                                0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s)
                            }
                            replaceState(t, e, n, r) {
                                let s = this.prepareExternalUrl(n + y(r));
                                0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s)
                            }
                            forward() {
                                this._platformLocation.forward()
                            }
                            back() {
                                this._platformLocation.back()
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(l), r.Xb(_, 8))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    C = (() => {
                        class t {
                            constructor(t, e) {
                                this._subject = new r.n, this._urlChangeListeners = [], this._platformStrategy = t;
                                const n = this._platformStrategy.getBaseHref();
                                this._platformLocation = e, this._baseHref = g(x(n)), this._platformStrategy.onPopState(t => {
                                    this._subject.emit({
                                        url: this.path(!0),
                                        pop: !0,
                                        state: t.state,
                                        type: t.type
                                    })
                                })
                            }
                            path(t = !1) {
                                return this.normalize(this._platformStrategy.path(t))
                            }
                            getState() {
                                return this._platformLocation.getState()
                            }
                            isCurrentPathEqualTo(t, e = "") {
                                return this.path() == this.normalize(t + y(e))
                            }
                            normalize(e) {
                                return t.stripTrailingSlash(function (t, e) {
                                    return t && e.startsWith(t) ? e.substring(t.length) : e
                                }(this._baseHref, x(e)))
                            }
                            prepareExternalUrl(t) {
                                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
                            }
                            go(t, e = "", n = null) {
                                this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                            }
                            replaceState(t, e = "", n = null) {
                                this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                            }
                            forward() {
                                this._platformStrategy.forward()
                            }
                            back() {
                                this._platformStrategy.back()
                            }
                            onUrlChange(t) {
                                this._urlChangeListeners.push(t), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(t => {
                                    this._notifyUrlChangeListeners(t.url, t.state)
                                }))
                            }
                            _notifyUrlChangeListeners(t = "", e) {
                                this._urlChangeListeners.forEach(n => n(t, e))
                            }
                            subscribe(t, e, n) {
                                return this._subject.subscribe({
                                    next: t,
                                    error: e,
                                    complete: n
                                })
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(b), r.Xb(l))
                        }, t.normalizeQueryParams = y, t.joinWithSlash = m, t.stripTrailingSlash = g, t.\u0275prov = Object(r.Gb)({
                            factory: E,
                            token: t,
                            providedIn: "root"
                        }), t
                    })();

                function E() {
                    return new C(Object(r.Xb)(b), Object(r.Xb)(l))
                }

                function x(t) {
                    return t.replace(/\/index.html$/, "")
                }
                var O = function (t) {
                        return t[t.Decimal = 0] = "Decimal", t[t.Percent = 1] = "Percent", t[t.Currency = 2] = "Currency", t[t.Scientific = 3] = "Scientific", t
                    }({}),
                    k = function (t) {
                        return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
                    }({}),
                    T = function (t) {
                        return t[t.Format = 0] = "Format", t[t.Standalone = 1] = "Standalone", t
                    }({}),
                    j = function (t) {
                        return t[t.Narrow = 0] = "Narrow", t[t.Abbreviated = 1] = "Abbreviated", t[t.Wide = 2] = "Wide", t[t.Short = 3] = "Short", t
                    }({}),
                    A = function (t) {
                        return t[t.Short = 0] = "Short", t[t.Medium = 1] = "Medium", t[t.Long = 2] = "Long", t[t.Full = 3] = "Full", t
                    }({}),
                    I = function (t) {
                        return t[t.Decimal = 0] = "Decimal", t[t.Group = 1] = "Group", t[t.List = 2] = "List", t[t.PercentSign = 3] = "PercentSign", t[t.PlusSign = 4] = "PlusSign", t[t.MinusSign = 5] = "MinusSign", t[t.Exponential = 6] = "Exponential", t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent", t[t.PerMille = 8] = "PerMille", t[t[1 / 0] = 9] = "Infinity", t[t.NaN = 10] = "NaN", t[t.TimeSeparator = 11] = "TimeSeparator", t[t.CurrencyDecimal = 12] = "CurrencyDecimal", t[t.CurrencyGroup = 13] = "CurrencyGroup", t
                    }({});

                function P(t, e, n) {
                    const s = Object(r.hb)(t),
                        i = V([s[r.Y.DayPeriodsFormat], s[r.Y.DayPeriodsStandalone]], e);
                    return V(i, n)
                }

                function N(t, e, n) {
                    const s = Object(r.hb)(t),
                        i = V([s[r.Y.DaysFormat], s[r.Y.DaysStandalone]], e);
                    return V(i, n)
                }

                function R(t, e, n) {
                    const s = Object(r.hb)(t),
                        i = V([s[r.Y.MonthsFormat], s[r.Y.MonthsStandalone]], e);
                    return V(i, n)
                }

                function D(t, e) {
                    return V(Object(r.hb)(t)[r.Y.DateFormat], e)
                }

                function L(t, e) {
                    return V(Object(r.hb)(t)[r.Y.TimeFormat], e)
                }

                function M(t, e) {
                    return V(Object(r.hb)(t)[r.Y.DateTimeFormat], e)
                }

                function F(t, e) {
                    const n = Object(r.hb)(t),
                        s = n[r.Y.NumberSymbols][e];
                    if (void 0 === s) {
                        if (e === I.CurrencyDecimal) return n[r.Y.NumberSymbols][I.Decimal];
                        if (e === I.CurrencyGroup) return n[r.Y.NumberSymbols][I.Group]
                    }
                    return s
                }

                function H(t, e) {
                    return Object(r.hb)(t)[r.Y.NumberFormats][e]
                }
                const z = r.kb;

                function U(t) {
                    if (!t[r.Y.ExtraData]) throw new Error(`Missing extra locale data for the locale "${t[r.Y.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
                }

                function V(t, e) {
                    for (let n = e; n > -1; n--)
                        if (void 0 !== t[n]) return t[n];
                    throw new Error("Locale data API: locale data undefined")
                }

                function $(t) {
                    const [e, n] = t.split(":");
                    return {
                        hours: +e,
                        minutes: +n
                    }
                }
                const B = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
                    q = {},
                    K = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
                var G = function (t) {
                        return t[t.Short = 0] = "Short", t[t.ShortGMT = 1] = "ShortGMT", t[t.Long = 2] = "Long", t[t.Extended = 3] = "Extended", t
                    }({}),
                    W = function (t) {
                        return t[t.FullYear = 0] = "FullYear", t[t.Month = 1] = "Month", t[t.Date = 2] = "Date", t[t.Hours = 3] = "Hours", t[t.Minutes = 4] = "Minutes", t[t.Seconds = 5] = "Seconds", t[t.FractionalSeconds = 6] = "FractionalSeconds", t[t.Day = 7] = "Day", t
                    }({}),
                    X = function (t) {
                        return t[t.DayPeriods = 0] = "DayPeriods", t[t.Days = 1] = "Days", t[t.Months = 2] = "Months", t[t.Eras = 3] = "Eras", t
                    }({});

                function Q(t, e, n, s) {
                    let i = function (t) {
                        if (it(t)) return t;
                        if ("number" == typeof t && !isNaN(t)) return new Date(t);
                        if ("string" == typeof t) {
                            t = t.trim();
                            const e = parseFloat(t);
                            if (!isNaN(t - e)) return new Date(e);
                            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                                const [e, n, r] = t.split("-").map(t => +t);
                                return new Date(e, n - 1, r)
                            }
                            let n;
                            if (n = t.match(B)) return function (t) {
                                const e = new Date(0);
                                let n = 0,
                                    r = 0;
                                const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                                    i = t[8] ? e.setUTCHours : e.setHours;
                                t[9] && (n = Number(t[9] + t[10]), r = Number(t[9] + t[11])), s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                                const o = Number(t[4] || 0) - n,
                                    a = Number(t[5] || 0) - r,
                                    c = Number(t[6] || 0),
                                    l = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                                return i.call(e, o, a, c, l), e
                            }(n)
                        }
                        const e = new Date(t);
                        if (!it(e)) throw new Error(`Unable to convert "${t}" into a date`);
                        return e
                    }(t);
                    e = function t(e, n) {
                        const s = function (t) {
                            return Object(r.hb)(t)[r.Y.LocaleId]
                        }(e);
                        if (q[s] = q[s] || {}, q[s][n]) return q[s][n];
                        let i = "";
                        switch (n) {
                            case "shortDate":
                                i = D(e, A.Short);
                                break;
                            case "mediumDate":
                                i = D(e, A.Medium);
                                break;
                            case "longDate":
                                i = D(e, A.Long);
                                break;
                            case "fullDate":
                                i = D(e, A.Full);
                                break;
                            case "shortTime":
                                i = L(e, A.Short);
                                break;
                            case "mediumTime":
                                i = L(e, A.Medium);
                                break;
                            case "longTime":
                                i = L(e, A.Long);
                                break;
                            case "fullTime":
                                i = L(e, A.Full);
                                break;
                            case "short":
                                const n = t(e, "shortTime"),
                                    r = t(e, "shortDate");
                                i = Z(M(e, A.Short), [n, r]);
                                break;
                            case "medium":
                                const s = t(e, "mediumTime"),
                                    o = t(e, "mediumDate");
                                i = Z(M(e, A.Medium), [s, o]);
                                break;
                            case "long":
                                const a = t(e, "longTime"),
                                    c = t(e, "longDate");
                                i = Z(M(e, A.Long), [a, c]);
                                break;
                            case "full":
                                const l = t(e, "fullTime"),
                                    u = t(e, "fullDate");
                                i = Z(M(e, A.Full), [l, u])
                        }
                        return i && (q[s][n] = i), i
                    }(n, e) || e;
                    let o, a = [];
                    for (; e;) {
                        if (o = K.exec(e), !o) {
                            a.push(e);
                            break
                        } {
                            a = a.concat(o.slice(1));
                            const t = a.pop();
                            if (!t) break;
                            e = t
                        }
                    }
                    let c = i.getTimezoneOffset();
                    s && (c = st(s, c), i = function (t, e, n) {
                        const r = t.getTimezoneOffset();
                        return function (t, e) {
                            return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                        }(t, -1 * (st(e, r) - r))
                    }(i, s));
                    let l = "";
                    return a.forEach(t => {
                        const e = function (t) {
                            if (rt[t]) return rt[t];
                            let e;
                            switch (t) {
                                case "G":
                                case "GG":
                                case "GGG":
                                    e = tt(X.Eras, j.Abbreviated);
                                    break;
                                case "GGGG":
                                    e = tt(X.Eras, j.Wide);
                                    break;
                                case "GGGGG":
                                    e = tt(X.Eras, j.Narrow);
                                    break;
                                case "y":
                                    e = J(W.FullYear, 1, 0, !1, !0);
                                    break;
                                case "yy":
                                    e = J(W.FullYear, 2, 0, !0, !0);
                                    break;
                                case "yyy":
                                    e = J(W.FullYear, 3, 0, !1, !0);
                                    break;
                                case "yyyy":
                                    e = J(W.FullYear, 4, 0, !1, !0);
                                    break;
                                case "M":
                                case "L":
                                    e = J(W.Month, 1, 1);
                                    break;
                                case "MM":
                                case "LL":
                                    e = J(W.Month, 2, 1);
                                    break;
                                case "MMM":
                                    e = tt(X.Months, j.Abbreviated);
                                    break;
                                case "MMMM":
                                    e = tt(X.Months, j.Wide);
                                    break;
                                case "MMMMM":
                                    e = tt(X.Months, j.Narrow);
                                    break;
                                case "LLL":
                                    e = tt(X.Months, j.Abbreviated, T.Standalone);
                                    break;
                                case "LLLL":
                                    e = tt(X.Months, j.Wide, T.Standalone);
                                    break;
                                case "LLLLL":
                                    e = tt(X.Months, j.Narrow, T.Standalone);
                                    break;
                                case "w":
                                    e = nt(1);
                                    break;
                                case "ww":
                                    e = nt(2);
                                    break;
                                case "W":
                                    e = nt(1, !0);
                                    break;
                                case "d":
                                    e = J(W.Date, 1);
                                    break;
                                case "dd":
                                    e = J(W.Date, 2);
                                    break;
                                case "E":
                                case "EE":
                                case "EEE":
                                    e = tt(X.Days, j.Abbreviated);
                                    break;
                                case "EEEE":
                                    e = tt(X.Days, j.Wide);
                                    break;
                                case "EEEEE":
                                    e = tt(X.Days, j.Narrow);
                                    break;
                                case "EEEEEE":
                                    e = tt(X.Days, j.Short);
                                    break;
                                case "a":
                                case "aa":
                                case "aaa":
                                    e = tt(X.DayPeriods, j.Abbreviated);
                                    break;
                                case "aaaa":
                                    e = tt(X.DayPeriods, j.Wide);
                                    break;
                                case "aaaaa":
                                    e = tt(X.DayPeriods, j.Narrow);
                                    break;
                                case "b":
                                case "bb":
                                case "bbb":
                                    e = tt(X.DayPeriods, j.Abbreviated, T.Standalone, !0);
                                    break;
                                case "bbbb":
                                    e = tt(X.DayPeriods, j.Wide, T.Standalone, !0);
                                    break;
                                case "bbbbb":
                                    e = tt(X.DayPeriods, j.Narrow, T.Standalone, !0);
                                    break;
                                case "B":
                                case "BB":
                                case "BBB":
                                    e = tt(X.DayPeriods, j.Abbreviated, T.Format, !0);
                                    break;
                                case "BBBB":
                                    e = tt(X.DayPeriods, j.Wide, T.Format, !0);
                                    break;
                                case "BBBBB":
                                    e = tt(X.DayPeriods, j.Narrow, T.Format, !0);
                                    break;
                                case "h":
                                    e = J(W.Hours, 1, -12);
                                    break;
                                case "hh":
                                    e = J(W.Hours, 2, -12);
                                    break;
                                case "H":
                                    e = J(W.Hours, 1);
                                    break;
                                case "HH":
                                    e = J(W.Hours, 2);
                                    break;
                                case "m":
                                    e = J(W.Minutes, 1);
                                    break;
                                case "mm":
                                    e = J(W.Minutes, 2);
                                    break;
                                case "s":
                                    e = J(W.Seconds, 1);
                                    break;
                                case "ss":
                                    e = J(W.Seconds, 2);
                                    break;
                                case "S":
                                    e = J(W.FractionalSeconds, 1);
                                    break;
                                case "SS":
                                    e = J(W.FractionalSeconds, 2);
                                    break;
                                case "SSS":
                                    e = J(W.FractionalSeconds, 3);
                                    break;
                                case "Z":
                                case "ZZ":
                                case "ZZZ":
                                    e = et(G.Short);
                                    break;
                                case "ZZZZZ":
                                    e = et(G.Extended);
                                    break;
                                case "O":
                                case "OO":
                                case "OOO":
                                case "z":
                                case "zz":
                                case "zzz":
                                    e = et(G.ShortGMT);
                                    break;
                                case "OOOO":
                                case "ZZZZ":
                                case "zzzz":
                                    e = et(G.Long);
                                    break;
                                default:
                                    return null
                            }
                            return rt[t] = e, e
                        }(t);
                        l += e ? e(i, n, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), l
                }

                function Z(t, e) {
                    return e && (t = t.replace(/\{([^}]+)}/g, (function (t, n) {
                        return null != e && n in e ? e[n] : t
                    }))), t
                }

                function Y(t, e, n = "-", r, s) {
                    let i = "";
                    (t < 0 || s && t <= 0) && (s ? t = 1 - t : (t = -t, i = n));
                    let o = String(t);
                    for (; o.length < e;) o = "0" + o;
                    return r && (o = o.substr(o.length - e)), i + o
                }

                function J(t, e, n = 0, r = !1, s = !1) {
                    return function (i, o) {
                        let a = function (t, e) {
                            switch (t) {
                                case W.FullYear:
                                    return e.getFullYear();
                                case W.Month:
                                    return e.getMonth();
                                case W.Date:
                                    return e.getDate();
                                case W.Hours:
                                    return e.getHours();
                                case W.Minutes:
                                    return e.getMinutes();
                                case W.Seconds:
                                    return e.getSeconds();
                                case W.FractionalSeconds:
                                    return e.getMilliseconds();
                                case W.Day:
                                    return e.getDay();
                                default:
                                    throw new Error(`Unknown DateType value "${t}".`)
                            }
                        }(t, i);
                        if ((n > 0 || a > -n) && (a += n), t === W.Hours) 0 === a && -12 === n && (a = 12);
                        else if (t === W.FractionalSeconds) return c = e, Y(a, 3).substr(0, c);
                        var c;
                        const l = F(o, I.MinusSign);
                        return Y(a, e, l, r, s)
                    }
                }

                function tt(t, e, n = T.Format, s = !1) {
                    return function (i, o) {
                        return function (t, e, n, s, i, o) {
                            switch (n) {
                                case X.Months:
                                    return R(e, i, s)[t.getMonth()];
                                case X.Days:
                                    return N(e, i, s)[t.getDay()];
                                case X.DayPeriods:
                                    const a = t.getHours(),
                                        c = t.getMinutes();
                                    if (o) {
                                        const t = function (t) {
                                                const e = Object(r.hb)(t);
                                                return U(e), (e[r.Y.ExtraData][2] || []).map(t => "string" == typeof t ? $(t) : [$(t[0]), $(t[1])])
                                            }(e),
                                            n = function (t, e, n) {
                                                const s = Object(r.hb)(t);
                                                U(s);
                                                const i = V([s[r.Y.ExtraData][0], s[r.Y.ExtraData][1]], e) || [];
                                                return V(i, n) || []
                                            }(e, i, s),
                                            o = t.findIndex(t => {
                                                if (Array.isArray(t)) {
                                                    const [e, n] = t, r = a >= e.hours && c >= e.minutes, s = a < n.hours || a === n.hours && c < n.minutes;
                                                    if (e.hours < n.hours) {
                                                        if (r && s) return !0
                                                    } else if (r || s) return !0
                                                } else if (t.hours === a && t.minutes === c) return !0;
                                                return !1
                                            });
                                        if (-1 !== o) return n[o]
                                    }
                                    return P(e, i, s)[a < 12 ? 0 : 1];
                                case X.Eras:
                                    return function (t, e) {
                                        return V(Object(r.hb)(t)[r.Y.Eras], e)
                                    }(e, s)[t.getFullYear() <= 0 ? 0 : 1];
                                default:
                                    throw new Error("unexpected translation type " + n)
                            }
                        }(i, o, t, e, n, s)
                    }
                }

                function et(t) {
                    return function (e, n, r) {
                        const s = -1 * r,
                            i = F(n, I.MinusSign),
                            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
                        switch (t) {
                            case G.Short:
                                return (s >= 0 ? "+" : "") + Y(o, 2, i) + Y(Math.abs(s % 60), 2, i);
                            case G.ShortGMT:
                                return "GMT" + (s >= 0 ? "+" : "") + Y(o, 1, i);
                            case G.Long:
                                return "GMT" + (s >= 0 ? "+" : "") + Y(o, 2, i) + ":" + Y(Math.abs(s % 60), 2, i);
                            case G.Extended:
                                return 0 === r ? "Z" : (s >= 0 ? "+" : "") + Y(o, 2, i) + ":" + Y(Math.abs(s % 60), 2, i);
                            default:
                                throw new Error(`Unknown zone width "${t}"`)
                        }
                    }
                }

                function nt(t, e = !1) {
                    return function (n, r) {
                        let s;
                        if (e) {
                            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                                e = n.getDate();
                            s = 1 + Math.floor((e + t) / 7)
                        } else {
                            const t = function (t) {
                                    const e = new Date(t, 0, 1).getDay();
                                    return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e)
                                }(n.getFullYear()),
                                e = (i = n, new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() - t.getTime();
                            s = 1 + Math.round(e / 6048e5)
                        }
                        var i;
                        return Y(s, t, F(r, I.MinusSign))
                    }
                }
                const rt = {};

                function st(t, e) {
                    t = t.replace(/:/g, "");
                    const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
                    return isNaN(n) ? e : n
                }

                function it(t) {
                    return t instanceof Date && !isNaN(t.valueOf())
                }
                const ot = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
                    at = ".",
                    ct = "0";

                function lt(t, e, n, r, s, i, o = !1) {
                    let a = "",
                        c = !1;
                    if (isFinite(t)) {
                        let l = function (t) {
                            let e, n, r, s, i, o = Math.abs(t) + "",
                                a = 0;
                            for ((n = o.indexOf(at)) > -1 && (o = o.replace(at, "")), (r = o.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +o.slice(r + 1), o = o.substring(0, r)) : n < 0 && (n = o.length), r = 0; o.charAt(r) === ct; r++);
                            if (r === (i = o.length)) e = [0], n = 1;
                            else {
                                for (i--; o.charAt(i) === ct;) i--;
                                for (n -= r, e = [], s = 0; r <= i; r++, s++) e[s] = Number(o.charAt(r))
                            }
                            return n > 22 && (e = e.splice(0, 21), a = n - 1, n = 1), {
                                digits: e,
                                exponent: a,
                                integerLen: n
                            }
                        }(t);
                        o && (l = function (t) {
                            if (0 === t.digits[0]) return t;
                            const e = t.digits.length - t.integerLen;
                            return t.exponent ? t.exponent += 2 : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0), t.integerLen += 2), t
                        }(l));
                        let u = e.minInt,
                            h = e.minFrac,
                            d = e.maxFrac;
                        if (i) {
                            const t = i.match(ot);
                            if (null === t) throw new Error(i + " is not a valid digit info");
                            const e = t[1],
                                n = t[3],
                                r = t[5];
                            null != e && (u = ht(e)), null != n && (h = ht(n)), null != r ? d = ht(r) : null != n && h > d && (d = h)
                        }! function (t, e, n) {
                            if (e > n) throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);
                            let r = t.digits,
                                s = r.length - t.integerLen;
                            const i = Math.min(Math.max(e, s), n);
                            let o = i + t.integerLen,
                                a = r[o];
                            if (o > 0) {
                                r.splice(Math.max(t.integerLen, o));
                                for (let t = o; t < r.length; t++) r[t] = 0
                            } else {
                                s = Math.max(0, s), t.integerLen = 1, r.length = Math.max(1, o = i + 1), r[0] = 0;
                                for (let t = 1; t < o; t++) r[t] = 0
                            }
                            if (a >= 5)
                                if (o - 1 < 0) {
                                    for (let e = 0; e > o; e--) r.unshift(0), t.integerLen++;
                                    r.unshift(1), t.integerLen++
                                } else r[o - 1]++;
                            for (; s < Math.max(0, i); s++) r.push(0);
                            let c = 0 !== i;
                            const l = e + t.integerLen,
                                u = r.reduceRight((function (t, e, n, r) {
                                    return r[n] = (e += t) < 10 ? e : e - 10, c && (0 === r[n] && n >= l ? r.pop() : c = !1), e >= 10 ? 1 : 0
                                }), 0);
                            u && (r.unshift(u), t.integerLen++)
                        }(l, h, d);
                        let f = l.digits,
                            p = l.integerLen;
                        const m = l.exponent;
                        let g = [];
                        for (c = f.every(t => !t); p < u; p++) f.unshift(0);
                        for (; p < 0; p++) f.unshift(0);
                        p > 0 ? g = f.splice(p, f.length) : (g = f, f = [0]);
                        const y = [];
                        for (f.length >= e.lgSize && y.unshift(f.splice(-e.lgSize, f.length).join("")); f.length > e.gSize;) y.unshift(f.splice(-e.gSize, f.length).join(""));
                        f.length && y.unshift(f.join("")), a = y.join(F(n, r)), g.length && (a += F(n, s) + g.join("")), m && (a += F(n, I.Exponential) + "+" + m)
                    } else a = F(n, I.Infinity);
                    return a = t < 0 && !c ? e.negPre + a + e.negSuf : e.posPre + a + e.posSuf, a
                }

                function ut(t, e = "-") {
                    const n = {
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 0,
                            posPre: "",
                            posSuf: "",
                            negPre: "",
                            negSuf: "",
                            gSize: 0,
                            lgSize: 0
                        },
                        r = t.split(";"),
                        s = r[0],
                        i = r[1],
                        o = -1 !== s.indexOf(at) ? s.split(at) : [s.substring(0, s.lastIndexOf(ct) + 1), s.substring(s.lastIndexOf(ct) + 1)],
                        a = o[0],
                        c = o[1] || "";
                    n.posPre = a.substr(0, a.indexOf("#"));
                    for (let u = 0; u < c.length; u++) {
                        const t = c.charAt(u);
                        t === ct ? n.minFrac = n.maxFrac = u + 1 : "#" === t ? n.maxFrac = u + 1 : n.posSuf += t
                    }
                    const l = a.split(",");
                    if (n.gSize = l[1] ? l[1].length : 0, n.lgSize = l[2] || l[1] ? (l[2] || l[1]).length : 0, i) {
                        const t = s.length - n.posPre.length - n.posSuf.length,
                            e = i.indexOf("#");
                        n.negPre = i.substr(0, e).replace(/'/g, ""), n.negSuf = i.substr(e + t).replace(/'/g, "")
                    } else n.negPre = e + n.posPre, n.negSuf = n.posSuf;
                    return n
                }

                function ht(t) {
                    const e = parseInt(t);
                    if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t);
                    return e
                }
                class dt {}
                let ft = (() => {
                    class t extends dt {
                        constructor(t) {
                            super(), this.locale = t
                        }
                        getPluralCategory(t, e) {
                            switch (z(e || this.locale)(t)) {
                                case k.Zero:
                                    return "zero";
                                case k.One:
                                    return "one";
                                case k.Two:
                                    return "two";
                                case k.Few:
                                    return "few";
                                case k.Many:
                                    return "many";
                                default:
                                    return "other"
                            }
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(r.Xb(r.u))
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();

                function pt(t, e) {
                    e = encodeURIComponent(e);
                    for (const n of t.split(";")) {
                        const t = n.indexOf("="),
                            [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
                        if (r.trim() === e) return decodeURIComponent(s)
                    }
                    return null
                }
                let mt = (() => {
                    class t {
                        constructor(t, e, n, r) {
                            this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
                        }
                        set klass(t) {
                            this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                        }
                        set ngClass(t) {
                            this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (Object(r.nb)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                        }
                        ngDoCheck() {
                            if (this._iterableDiffer) {
                                const t = this._iterableDiffer.diff(this._rawClass);
                                t && this._applyIterableChanges(t)
                            } else if (this._keyValueDiffer) {
                                const t = this._keyValueDiffer.diff(this._rawClass);
                                t && this._applyKeyValueChanges(t)
                            }
                        }
                        _applyKeyValueChanges(t) {
                            t.forEachAddedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachChangedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachRemovedItem(t => {
                                t.previousValue && this._toggleClass(t.key, !1)
                            })
                        }
                        _applyIterableChanges(t) {
                            t.forEachAddedItem(t => {
                                if ("string" != typeof t.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Object(r.sb)(t.item));
                                this._toggleClass(t.item, !0)
                            }), t.forEachRemovedItem(t => this._toggleClass(t.item, !1))
                        }
                        _applyClasses(t) {
                            t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !0)) : Object.keys(t).forEach(e => this._toggleClass(e, !!t[e])))
                        }
                        _removeClasses(t) {
                            t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !1)) : Object.keys(t).forEach(t => this._toggleClass(t, !1)))
                        }
                        _toggleClass(t, e) {
                            (t = t.trim()) && t.split(/\s+/g).forEach(t => {
                                e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
                            })
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(r.Kb(r.s), r.Kb(r.t), r.Kb(r.l), r.Kb(r.D))
                    }, t.\u0275dir = r.Fb({
                        type: t,
                        selectors: [
                            ["", "ngClass", ""]
                        ],
                        inputs: {
                            klass: ["class", "klass"],
                            ngClass: "ngClass"
                        }
                    }), t
                })();
                class gt {
                    constructor(t, e, n, r) {
                        this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
                    }
                    get first() {
                        return 0 === this.index
                    }
                    get last() {
                        return this.index === this.count - 1
                    }
                    get even() {
                        return this.index % 2 == 0
                    }
                    get odd() {
                        return !this.even
                    }
                }
                let yt = (() => {
                    class t {
                        constructor(t, e, n) {
                            this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                        }
                        set ngForOf(t) {
                            this._ngForOf = t, this._ngForOfDirty = !0
                        }
                        set ngForTrackBy(t) {
                            Object(r.T)() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`), this._trackByFn = t
                        }
                        get ngForTrackBy() {
                            return this._trackByFn
                        }
                        set ngForTemplate(t) {
                            t && (this._template = t)
                        }
                        ngDoCheck() {
                            if (this._ngForOfDirty) {
                                this._ngForOfDirty = !1;
                                const n = this._ngForOf;
                                if (!this._differ && n) try {
                                    this._differ = this._differs.find(n).create(this.ngForTrackBy)
                                } catch (e) {
                                    throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                                }
                            }
                            var t;
                            if (this._differ) {
                                const t = this._differ.diff(this._ngForOf);
                                t && this._applyChanges(t)
                            }
                        }
                        _applyChanges(t) {
                            const e = [];
                            t.forEachOperation((t, n, r) => {
                                if (null == t.previousIndex) {
                                    const n = this._viewContainer.createEmbeddedView(this._template, new gt(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                                        s = new bt(t, n);
                                    e.push(s)
                                } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
                                else if (null !== n) {
                                    const s = this._viewContainer.get(n);
                                    this._viewContainer.move(s, r);
                                    const i = new bt(t, s);
                                    e.push(i)
                                }
                            });
                            for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
                            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                                const t = this._viewContainer.get(n);
                                t.context.index = n, t.context.count = r, t.context.ngForOf = this._ngForOf
                            }
                            t.forEachIdentityChange(t => {
                                this._viewContainer.get(t.currentIndex).context.$implicit = t.item
                            })
                        }
                        _perViewChange(t, e) {
                            t.context.$implicit = e.item
                        }
                        static ngTemplateContextGuard(t, e) {
                            return !0
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(r.Kb(r.O), r.Kb(r.K), r.Kb(r.s))
                    }, t.\u0275dir = r.Fb({
                        type: t,
                        selectors: [
                            ["", "ngFor", "", "ngForOf", ""]
                        ],
                        inputs: {
                            ngForOf: "ngForOf",
                            ngForTrackBy: "ngForTrackBy",
                            ngForTemplate: "ngForTemplate"
                        }
                    }), t
                })();
                class bt {
                    constructor(t, e) {
                        this.record = t, this.view = e
                    }
                }
                let vt = (() => {
                    class t {
                        constructor(t, e) {
                            this._viewContainer = t, this._context = new _t, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
                        }
                        set ngIf(t) {
                            this._context.$implicit = this._context.ngIf = t, this._updateView()
                        }
                        set ngIfThen(t) {
                            wt("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                        }
                        set ngIfElse(t) {
                            wt("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                        }
                        _updateView() {
                            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                        }
                        static ngTemplateContextGuard(t, e) {
                            return !0
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(r.Kb(r.O), r.Kb(r.K))
                    }, t.\u0275dir = r.Fb({
                        type: t,
                        selectors: [
                            ["", "ngIf", ""]
                        ],
                        inputs: {
                            ngIf: "ngIf",
                            ngIfThen: "ngIfThen",
                            ngIfElse: "ngIfElse"
                        }
                    }), t
                })();
                class _t {
                    constructor() {
                        this.$implicit = null, this.ngIf = null
                    }
                }

                function wt(t, e) {
                    if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${Object(r.sb)(e)}'.`)
                }
                class St {
                    constructor(t, e) {
                        this._viewContainerRef = t, this._templateRef = e, this._created = !1
                    }
                    create() {
                        this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef)
                    }
                    destroy() {
                        this._created = !1, this._viewContainerRef.clear()
                    }
                    enforceState(t) {
                        t && !this._created ? this.create() : !t && this._created && this.destroy()
                    }
                }
                let Ct = (() => {
                        class t {
                            constructor() {
                                this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1
                            }
                            set ngSwitch(t) {
                                this._ngSwitch = t, 0 === this._caseCount && this._updateDefaultCases(!0)
                            }
                            _addCase() {
                                return this._caseCount++
                            }
                            _addDefault(t) {
                                this._defaultViews || (this._defaultViews = []), this._defaultViews.push(t)
                            }
                            _matchCase(t) {
                                const e = t == this._ngSwitch;
                                return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e
                            }
                            _updateDefaultCases(t) {
                                if (this._defaultViews && t !== this._defaultUsed) {
                                    this._defaultUsed = t;
                                    for (let e = 0; e < this._defaultViews.length; e++) this._defaultViews[e].enforceState(t)
                                }
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275dir = r.Fb({
                            type: t,
                            selectors: [
                                ["", "ngSwitch", ""]
                            ],
                            inputs: {
                                ngSwitch: "ngSwitch"
                            }
                        }), t
                    })(),
                    Et = (() => {
                        class t {
                            constructor(t, e, n) {
                                this.ngSwitch = n, n._addCase(), this._view = new St(t, e)
                            }
                            ngDoCheck() {
                                this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(r.O), r.Kb(r.K), r.Kb(Ct, 1))
                        }, t.\u0275dir = r.Fb({
                            type: t,
                            selectors: [
                                ["", "ngSwitchCase", ""]
                            ],
                            inputs: {
                                ngSwitchCase: "ngSwitchCase"
                            }
                        }), t
                    })(),
                    xt = (() => {
                        class t {
                            constructor(t, e, n) {
                                n._addDefault(new St(t, e))
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(r.O), r.Kb(r.K), r.Kb(Ct, 1))
                        }, t.\u0275dir = r.Fb({
                            type: t,
                            selectors: [
                                ["", "ngSwitchDefault", ""]
                            ]
                        }), t
                    })(),
                    Ot = (() => {
                        class t {
                            constructor(t) {
                                this._viewContainerRef = t, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null
                            }
                            ngOnChanges(t) {
                                if (this._shouldRecreateView(t)) {
                                    const t = this._viewContainerRef;
                                    this._viewRef && t.remove(t.indexOf(this._viewRef)), this._viewRef = this.ngTemplateOutlet ? t.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext) : null
                                } else this._viewRef && this.ngTemplateOutletContext && this._updateExistingContext(this.ngTemplateOutletContext)
                            }
                            _shouldRecreateView(t) {
                                const e = t.ngTemplateOutletContext;
                                return !!t.ngTemplateOutlet || e && this._hasContextShapeChanged(e)
                            }
                            _hasContextShapeChanged(t) {
                                const e = Object.keys(t.previousValue || {}),
                                    n = Object.keys(t.currentValue || {});
                                if (e.length === n.length) {
                                    for (let t of n)
                                        if (-1 === e.indexOf(t)) return !0;
                                    return !1
                                }
                                return !0
                            }
                            _updateExistingContext(t) {
                                for (let e of Object.keys(t)) this._viewRef.context[e] = this.ngTemplateOutletContext[e]
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(r.O))
                        }, t.\u0275dir = r.Fb({
                            type: t,
                            selectors: [
                                ["", "ngTemplateOutlet", ""]
                            ],
                            inputs: {
                                ngTemplateOutletContext: "ngTemplateOutletContext",
                                ngTemplateOutlet: "ngTemplateOutlet"
                            },
                            features: [r.vb]
                        }), t
                    })();

                function kt(t, e) {
                    return Error(`InvalidPipeArgument: '${e}' for pipe '${Object(r.sb)(t)}'`)
                }
                let Tt = (() => {
                        class t {
                            constructor(t) {
                                this._locale = t
                            }
                            transform(e, n, r) {
                                if (At(e)) return null;
                                r = r || this._locale;
                                try {
                                    return function (t, e, n) {
                                        return lt(t, ut(H(e, O.Decimal), F(e, I.MinusSign)), e, I.Group, I.Decimal, n)
                                    }(It(e), r, n)
                                } catch (s) {
                                    throw kt(t, s.message)
                                }
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(r.u))
                        }, t.\u0275pipe = r.Jb({
                            name: "number",
                            type: t,
                            pure: !0
                        }), t
                    })(),
                    jt = (() => {
                        class t {
                            constructor(t) {
                                this._locale = t
                            }
                            transform(e, n, r) {
                                if (At(e)) return null;
                                r = r || this._locale;
                                try {
                                    return function (t, e, n) {
                                        return lt(t, ut(H(e, O.Percent), F(e, I.MinusSign)), e, I.Group, I.Decimal, n, !0).replace(new RegExp("%", "g"), F(e, I.PercentSign))
                                    }(It(e), r, n)
                                } catch (s) {
                                    throw kt(t, s.message)
                                }
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(r.u))
                        }, t.\u0275pipe = r.Jb({
                            name: "percent",
                            type: t,
                            pure: !0
                        }), t
                    })();

                function At(t) {
                    return null == t || "" === t || t != t
                }

                function It(t) {
                    if ("string" == typeof t && !isNaN(Number(t) - parseFloat(t))) return Number(t);
                    if ("number" != typeof t) throw new Error(t + " is not a number");
                    return t
                }
                let Pt = (() => {
                    class t {}
                    return t.\u0275mod = r.Ib({
                        type: t
                    }), t.\u0275inj = r.Hb({
                        factory: function (e) {
                            return new(e || t)
                        },
                        providers: [{
                            provide: dt,
                            useClass: ft
                        }]
                    }), t
                })();
                const Nt = "browser";

                function Rt(t) {
                    return t === Nt
                }
                let Dt = (() => {
                    class t {}
                    return t.\u0275prov = Object(r.Gb)({
                        token: t,
                        providedIn: "root",
                        factory: () => new Lt(Object(r.Xb)(c), window, Object(r.Xb)(r.m))
                    }), t
                })();
                class Lt {
                    constructor(t, e, n) {
                        this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0]
                    }
                    setOffset(t) {
                        this.offset = Array.isArray(t) ? () => t : t
                    }
                    getScrollPosition() {
                        return this.supportsScrolling() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                    }
                    scrollToPosition(t) {
                        this.supportsScrolling() && this.window.scrollTo(t[0], t[1])
                    }
                    scrollToAnchor(t) {
                        if (this.supportsScrolling()) {
                            const e = this.document.getElementById(t) || this.document.getElementsByName(t)[0];
                            e && this.scrollToElement(e)
                        }
                    }
                    setHistoryScrollRestoration(t) {
                        if (this.supportScrollRestoration()) {
                            const e = this.window.history;
                            e && e.scrollRestoration && (e.scrollRestoration = t)
                        }
                    }
                    scrollToElement(t) {
                        const e = t.getBoundingClientRect(),
                            n = e.left + this.window.pageXOffset,
                            r = e.top + this.window.pageYOffset,
                            s = this.offset();
                        this.window.scrollTo(n - s[0], r - s[1])
                    }
                    supportScrollRestoration() {
                        try {
                            if (!this.window || !this.window.scrollTo) return !1;
                            const t = Mt(this.window.history) || Mt(Object.getPrototypeOf(this.window.history));
                            return !(!t || !t.writable && !t.set)
                        } catch (t) {
                            return !1
                        }
                    }
                    supportsScrolling() {
                        try {
                            return !!this.window.scrollTo
                        } catch (t) {
                            return !1
                        }
                    }
                }

                function Mt(t) {
                    return Object.getOwnPropertyDescriptor(t, "scrollRestoration")
                }
            },
            pLZG: function (t, e, n) {
                "use strict";
                n.d(e, "a", (function () {
                    return s
                }));
                var r = n("7o/Q");

                function s(t, e) {
                    return function (n) {
                        return n.lift(new i(t, e))
                    }
                }
                class i {
                    constructor(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    call(t, e) {
                        return e.subscribe(new o(t, this.predicate, this.thisArg))
                    }
                }
                class o extends r.a {
                    constructor(t, e, n) {
                        super(t), this.predicate = e, this.thisArg = n, this.count = 0
                    }
                    _next(t) {
                        let e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        e && this.destination.next(t)
                    }
                }
            },
            quSY: function (t, e, n) {
                "use strict";
                n.d(e, "a", (function () {
                    return a
                }));
                var r = n("DH7j"),
                    s = n("XoHu"),
                    i = n("n6bG");
                const o = (() => {
                    function t(t) {
                        return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                })();
                let a = (() => {
                    class t {
                        constructor(t) {
                            this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                        }
                        unsubscribe() {
                            let e;
                            if (this.closed) return;
                            let {
                                _parentOrParents: n,
                                _unsubscribe: a,
                                _subscriptions: l
                            } = this;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                            else if (null !== n)
                                for (let t = 0; t < n.length; ++t) n[t].remove(this);
                            if (Object(i.a)(a)) try {
                                a.call(this)
                            } catch (u) {
                                e = u instanceof o ? c(u.errors) : [u]
                            }
                            if (Object(r.a)(l)) {
                                let t = -1,
                                    n = l.length;
                                for (; ++t < n;) {
                                    const n = l[t];
                                    if (Object(s.a)(n)) try {
                                        n.unsubscribe()
                                    } catch (u) {
                                        e = e || [], u instanceof o ? e = e.concat(c(u.errors)) : e.push(u)
                                    }
                                }
                            }
                            if (e) throw new o(e)
                        }
                        add(e) {
                            let n = e;
                            if (!e) return t.EMPTY;
                            switch (typeof e) {
                                case "function":
                                    n = new t(e);
                                case "object":
                                    if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                    if (this.closed) return n.unsubscribe(), n;
                                    if (!(n instanceof t)) {
                                        const e = n;
                                        n = new t, n._subscriptions = [e]
                                    }
                                    break;
                                default:
                                    throw new Error("unrecognized teardown " + e + " added to Subscription.")
                            }
                            let {
                                _parentOrParents: r
                            } = n;
                            if (null === r) n._parentOrParents = this;
                            else if (r instanceof t) {
                                if (r === this) return n;
                                n._parentOrParents = [r, this]
                            } else {
                                if (-1 !== r.indexOf(this)) return n;
                                r.push(this)
                            }
                            const s = this._subscriptions;
                            return null === s ? this._subscriptions = [n] : s.push(n), n
                        }
                        remove(t) {
                            const e = this._subscriptions;
                            if (e) {
                                const n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                            }
                        }
                    }
                    var e;
                    return t.EMPTY = ((e = new t).closed = !0, e), t
                })();

                function c(t) {
                    return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), [])
                }
            },
            sYmb: function (t, e, n) {
                "use strict";
                n.d(e, "a", (function () {
                    return A
                })), n.d(e, "b", (function () {
                    return Z
                })), n.d(e, "c", (function () {
                    return Q
                })), n.d(e, "d", (function () {
                    return X
                }));
                var r = n("fXoL"),
                    s = n("LRne"),
                    i = n("HDdC");

                function o(t) {
                    return !!t && (t instanceof i.a || "function" == typeof t.lift && "function" == typeof t.subscribe)
                }
                var a = n("cp0P"),
                    c = n("GyhO"),
                    l = n("NXyV"),
                    u = n("IzEk"),
                    h = n("XNiG"),
                    d = n("3N8a");
                class f extends d.a {
                    constructor(t, e) {
                        super(t, e), this.scheduler = t, this.work = e
                    }
                    schedule(t, e = 0) {
                        return e > 0 ? super.schedule(t, e) : (this.delay = e, this.state = t, this.scheduler.flush(this), this)
                    }
                    execute(t, e) {
                        return e > 0 || this.closed ? super.execute(t, e) : this._execute(t, e)
                    }
                    requestAsyncId(t, e, n = 0) {
                        return null !== n && n > 0 || null === n && this.delay > 0 ? super.requestAsyncId(t, e, n) : t.flush(this)
                    }
                }
                var p = n("IjjT");
                class m extends p.a {}
                const g = new m(f);
                var y = n("quSY"),
                    b = n("7o/Q"),
                    v = n("WMd4");
                class _ extends b.a {
                    constructor(t, e, n = 0) {
                        super(t), this.scheduler = e, this.delay = n
                    }
                    static dispatch(t) {
                        const {
                            notification: e,
                            destination: n
                        } = t;
                        e.observe(n), this.unsubscribe()
                    }
                    scheduleMessage(t) {
                        this.destination.add(this.scheduler.schedule(_.dispatch, this.delay, new w(t, this.destination)))
                    }
                    _next(t) {
                        this.scheduleMessage(v.a.createNext(t))
                    }
                    _error(t) {
                        this.scheduleMessage(v.a.createError(t)), this.unsubscribe()
                    }
                    _complete() {
                        this.scheduleMessage(v.a.createComplete()), this.unsubscribe()
                    }
                }
                class w {
                    constructor(t, e) {
                        this.notification = t, this.destination = e
                    }
                }
                var S = n("9ppp"),
                    C = n("Ylt2");
                class E extends h.a {
                    constructor(t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, n) {
                        super(), this.scheduler = n, this._events = [], this._infiniteTimeWindow = !1, this._bufferSize = t < 1 ? 1 : t, this._windowTime = e < 1 ? 1 : e, e === Number.POSITIVE_INFINITY ? (this._infiniteTimeWindow = !0, this.next = this.nextInfiniteTimeWindow) : this.next = this.nextTimeWindow
                    }
                    nextInfiniteTimeWindow(t) {
                        const e = this._events;
                        e.push(t), e.length > this._bufferSize && e.shift(), super.next(t)
                    }
                    nextTimeWindow(t) {
                        this._events.push(new x(this._getNow(), t)), this._trimBufferThenGetEvents(), super.next(t)
                    }
                    _subscribe(t) {
                        const e = this._infiniteTimeWindow,
                            n = e ? this._events : this._trimBufferThenGetEvents(),
                            r = this.scheduler,
                            s = n.length;
                        let i;
                        if (this.closed) throw new S.a;
                        if (this.isStopped || this.hasError ? i = y.a.EMPTY : (this.observers.push(t), i = new C.a(this, t)), r && t.add(t = new _(t, r)), e)
                            for (let o = 0; o < s && !t.closed; o++) t.next(n[o]);
                        else
                            for (let o = 0; o < s && !t.closed; o++) t.next(n[o].value);
                        return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), i
                    }
                    _getNow() {
                        return (this.scheduler || g).now()
                    }
                    _trimBufferThenGetEvents() {
                        const t = this._getNow(),
                            e = this._bufferSize,
                            n = this._windowTime,
                            r = this._events,
                            s = r.length;
                        let i = 0;
                        for (; i < s && !(t - r[i].time < n);) i++;
                        return s > e && (i = Math.max(i, s - e)), i > 0 && r.splice(0, i), r
                    }
                }
                class x {
                    constructor(t, e) {
                        this.time = t, this.value = e
                    }
                }

                function O(t, e, n) {
                    let r;
                    return r = t && "object" == typeof t ? t : {
                        bufferSize: t,
                        windowTime: e,
                        refCount: !1,
                        scheduler: n
                    }, t => t.lift(function ({
                        bufferSize: t = Number.POSITIVE_INFINITY,
                        windowTime: e = Number.POSITIVE_INFINITY,
                        refCount: n,
                        scheduler: r
                    }) {
                        let s, i, o = 0,
                            a = !1,
                            c = !1;
                        return function (l) {
                            o++, s && !a || (a = !1, s = new E(t, e, r), i = l.subscribe({
                                next(t) {
                                    s.next(t)
                                },
                                error(t) {
                                    a = !0, s.error(t)
                                },
                                complete() {
                                    c = !0, i = void 0, s.complete()
                                }
                            }));
                            const u = s.subscribe(this);
                            this.add(() => {
                                o--, u.unsubscribe(), i && !c && n && 0 === o && (i.unsubscribe(), i = void 0, s = void 0)
                            })
                        }
                    }(r))
                }
                var k = n("lJxs"),
                    T = n("bOdf"),
                    j = n("eIep");
                class A {}
                let I = (() => {
                    class t extends A {
                        getTranslation(t) {
                            return Object(s.a)({})
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return P(e || t)
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
                const P = r.Rb(I);
                class N {}
                let R = (() => {
                    class t {
                        handle(t) {
                            return t.key
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();

                function D(t, e) {
                    if (t === e) return !0;
                    if (null === t || null === e) return !1;
                    if (t != t && e != e) return !0;
                    let n, r, s, i = typeof t;
                    if (i == typeof e && "object" == i) {
                        if (!Array.isArray(t)) {
                            if (Array.isArray(e)) return !1;
                            for (r in s = Object.create(null), t) {
                                if (!D(t[r], e[r])) return !1;
                                s[r] = !0
                            }
                            for (r in e)
                                if (!(r in s) && void 0 !== e[r]) return !1;
                            return !0
                        }
                        if (!Array.isArray(e)) return !1;
                        if ((n = t.length) == e.length) {
                            for (r = 0; r < n; r++)
                                if (!D(t[r], e[r])) return !1;
                            return !0
                        }
                    }
                    return !1
                }

                function L(t) {
                    return null != t
                }

                function M(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }
                class F {}
                let H = (() => {
                    class t extends F {
                        constructor() {
                            super(...arguments), this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g
                        }
                        interpolate(t, e) {
                            let n;
                            return n = "string" == typeof t ? this.interpolateString(t, e) : "function" == typeof t ? this.interpolateFunction(t, e) : t, n
                        }
                        getValue(t, e) {
                            let n = "string" == typeof e ? e.split(".") : [e];
                            e = "";
                            do {
                                e += n.shift(), !L(t) || !L(t[e]) || "object" != typeof t[e] && n.length ? n.length ? e += "." : t = void 0 : (t = t[e], e = "")
                            } while (n.length);
                            return t
                        }
                        interpolateFunction(t, e) {
                            return t(e)
                        }
                        interpolateString(t, e) {
                            return e ? t.replace(this.templateMatcher, (t, n) => {
                                let r = this.getValue(e, n);
                                return L(r) ? r : t
                            }) : t
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return z(e || t)
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
                const z = r.Rb(H);
                class U {}
                let V = (() => {
                    class t extends U {
                        compile(t, e) {
                            return t
                        }
                        compileTranslations(t, e) {
                            return t
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return $(e || t)
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
                const $ = r.Rb(V);
                class B {
                    constructor() {
                        this.currentLang = this.defaultLang, this.translations = {}, this.langs = [], this.onTranslationChange = new r.n, this.onLangChange = new r.n, this.onDefaultLangChange = new r.n
                    }
                }
                const q = new r.q("USE_STORE"),
                    K = new r.q("USE_DEFAULT_LANG"),
                    G = new r.q("DEFAULT_LANGUAGE"),
                    W = new r.q("USE_EXTEND");
                let X = (() => {
                        class t {
                            constructor(t, e, n, s, i, o = !0, a = !1, c = !1, l) {
                                this.store = t, this.currentLoader = e, this.compiler = n, this.parser = s, this.missingTranslationHandler = i, this.useDefaultLang = o, this.isolate = a, this.extend = c, this.pending = !1, this._onTranslationChange = new r.n, this._onLangChange = new r.n, this._onDefaultLangChange = new r.n, this._langs = [], this._translations = {}, this._translationRequests = {}, l && this.setDefaultLang(l)
                            }
                            get onTranslationChange() {
                                return this.isolate ? this._onTranslationChange : this.store.onTranslationChange
                            }
                            get onLangChange() {
                                return this.isolate ? this._onLangChange : this.store.onLangChange
                            }
                            get onDefaultLangChange() {
                                return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange
                            }
                            get defaultLang() {
                                return this.isolate ? this._defaultLang : this.store.defaultLang
                            }
                            set defaultLang(t) {
                                this.isolate ? this._defaultLang = t : this.store.defaultLang = t
                            }
                            get currentLang() {
                                return this.isolate ? this._currentLang : this.store.currentLang
                            }
                            set currentLang(t) {
                                this.isolate ? this._currentLang = t : this.store.currentLang = t
                            }
                            get langs() {
                                return this.isolate ? this._langs : this.store.langs
                            }
                            set langs(t) {
                                this.isolate ? this._langs = t : this.store.langs = t
                            }
                            get translations() {
                                return this.isolate ? this._translations : this.store.translations
                            }
                            set translations(t) {
                                this.isolate ? this._translations = t : this.store.translations = t
                            }
                            setDefaultLang(t) {
                                if (t === this.defaultLang) return;
                                let e = this.retrieveTranslations(t);
                                void 0 !== e ? (null == this.defaultLang && (this.defaultLang = t), e.pipe(Object(u.a)(1)).subscribe(e => {
                                    this.changeDefaultLang(t)
                                })) : this.changeDefaultLang(t)
                            }
                            getDefaultLang() {
                                return this.defaultLang
                            }
                            use(t) {
                                if (t === this.currentLang) return Object(s.a)(this.translations[t]);
                                let e = this.retrieveTranslations(t);
                                return void 0 !== e ? (this.currentLang || (this.currentLang = t), e.pipe(Object(u.a)(1)).subscribe(e => {
                                    this.changeLang(t)
                                }), e) : (this.changeLang(t), Object(s.a)(this.translations[t]))
                            }
                            retrieveTranslations(t) {
                                let e;
                                return (void 0 === this.translations[t] || this.extend) && (this._translationRequests[t] = this._translationRequests[t] || this.getTranslation(t), e = this._translationRequests[t]), e
                            }
                            getTranslation(t) {
                                this.pending = !0;
                                const e = this.currentLoader.getTranslation(t).pipe(O(1), Object(u.a)(1));
                                return this.loadingTranslations = e.pipe(Object(k.a)(e => this.compiler.compileTranslations(e, t)), O(1), Object(u.a)(1)), this.loadingTranslations.subscribe({
                                    next: e => {
                                        this.translations[t] = this.extend && this.translations[t] ? Object.assign(Object.assign({}, e), this.translations[t]) : e, this.updateLangs(), this.pending = !1
                                    },
                                    error: t => {
                                        this.pending = !1
                                    }
                                }), e
                            }
                            setTranslation(t, e, n = !1) {
                                e = this.compiler.compileTranslations(e, t), this.translations[t] = (n || this.extend) && this.translations[t] ? function t(e, n) {
                                    let r = Object.assign({}, e);
                                    return M(e) && M(n) && Object.keys(n).forEach(s => {
                                        M(n[s]) ? s in e ? r[s] = t(e[s], n[s]) : Object.assign(r, {
                                            [s]: n[s]
                                        }) : Object.assign(r, {
                                            [s]: n[s]
                                        })
                                    }), r
                                }(this.translations[t], e) : e, this.updateLangs(), this.onTranslationChange.emit({
                                    lang: t,
                                    translations: this.translations[t]
                                })
                            }
                            getLangs() {
                                return this.langs
                            }
                            addLangs(t) {
                                t.forEach(t => {
                                    -1 === this.langs.indexOf(t) && this.langs.push(t)
                                })
                            }
                            updateLangs() {
                                this.addLangs(Object.keys(this.translations))
                            }
                            getParsedResult(t, e, n) {
                                let r;
                                if (e instanceof Array) {
                                    let r = {},
                                        i = !1;
                                    for (let s of e) r[s] = this.getParsedResult(t, s, n), o(r[s]) && (i = !0);
                                    if (i) {
                                        const t = e.map(t => o(r[t]) ? r[t] : Object(s.a)(r[t]));
                                        return Object(a.a)(t).pipe(Object(k.a)(t => {
                                            let n = {};
                                            return t.forEach((t, r) => {
                                                n[e[r]] = t
                                            }), n
                                        }))
                                    }
                                    return r
                                }
                                if (t && (r = this.parser.interpolate(this.parser.getValue(t, e), n)), void 0 === r && null != this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang && (r = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], e), n)), void 0 === r) {
                                    let t = {
                                        key: e,
                                        translateService: this
                                    };
                                    void 0 !== n && (t.interpolateParams = n), r = this.missingTranslationHandler.handle(t)
                                }
                                return void 0 !== r ? r : e
                            }
                            get(t, e) {
                                if (!L(t) || !t.length) throw new Error('Parameter "key" required');
                                if (this.pending) return this.loadingTranslations.pipe(Object(T.a)(n => o(n = this.getParsedResult(n, t, e)) ? n : Object(s.a)(n))); {
                                    let n = this.getParsedResult(this.translations[this.currentLang], t, e);
                                    return o(n) ? n : Object(s.a)(n)
                                }
                            }
                            getStreamOnTranslationChange(t, e) {
                                if (!L(t) || !t.length) throw new Error('Parameter "key" required');
                                return Object(c.a)(Object(l.a)(() => this.get(t, e)), this.onTranslationChange.pipe(Object(j.a)(n => {
                                    const r = this.getParsedResult(n.translations, t, e);
                                    return "function" == typeof r.subscribe ? r : Object(s.a)(r)
                                })))
                            }
                            stream(t, e) {
                                if (!L(t) || !t.length) throw new Error('Parameter "key" required');
                                return Object(c.a)(Object(l.a)(() => this.get(t, e)), this.onLangChange.pipe(Object(j.a)(n => {
                                    const r = this.getParsedResult(n.translations, t, e);
                                    return o(r) ? r : Object(s.a)(r)
                                })))
                            }
                            instant(t, e) {
                                if (!L(t) || !t.length) throw new Error('Parameter "key" required');
                                let n = this.getParsedResult(this.translations[this.currentLang], t, e);
                                if (o(n)) {
                                    if (t instanceof Array) {
                                        let e = {};
                                        return t.forEach((n, r) => {
                                            e[t[r]] = t[r]
                                        }), e
                                    }
                                    return t
                                }
                                return n
                            }
                            set(t, e, n = this.currentLang) {
                                this.translations[n][t] = this.compiler.compile(e, n), this.updateLangs(), this.onTranslationChange.emit({
                                    lang: n,
                                    translations: this.translations[n]
                                })
                            }
                            changeLang(t) {
                                this.currentLang = t, this.onLangChange.emit({
                                    lang: t,
                                    translations: this.translations[t]
                                }), null == this.defaultLang && this.changeDefaultLang(t)
                            }
                            changeDefaultLang(t) {
                                this.defaultLang = t, this.onDefaultLangChange.emit({
                                    lang: t,
                                    translations: this.translations[t]
                                })
                            }
                            reloadLang(t) {
                                return this.resetLang(t), this.getTranslation(t)
                            }
                            resetLang(t) {
                                this._translationRequests[t] = void 0, this.translations[t] = void 0
                            }
                            getBrowserLang() {
                                if ("undefined" == typeof window || void 0 === window.navigator) return;
                                let t = window.navigator.languages ? window.navigator.languages[0] : null;
                                return t = t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage, void 0 !== t ? (-1 !== t.indexOf("-") && (t = t.split("-")[0]), -1 !== t.indexOf("_") && (t = t.split("_")[0]), t) : void 0
                            }
                            getBrowserCultureLang() {
                                if ("undefined" == typeof window || void 0 === window.navigator) return;
                                let t = window.navigator.languages ? window.navigator.languages[0] : null;
                                return t = t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage, t
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(B), r.Xb(A), r.Xb(U), r.Xb(F), r.Xb(N), r.Xb(K), r.Xb(q), r.Xb(W), r.Xb(G))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    Q = (() => {
                        class t {
                            constructor(t, e) {
                                this.translate = t, this._ref = e, this.value = ""
                            }
                            updateValue(t, e, n) {
                                let r = e => {
                                    this.value = void 0 !== e ? e : t, this.lastKey = t, this._ref.markForCheck()
                                };
                                if (n) {
                                    let s = this.translate.getParsedResult(n, t, e);
                                    o(s.subscribe) ? s.subscribe(r) : r(s)
                                }
                                this.translate.get(t, e).subscribe(r)
                            }
                            transform(t, ...e) {
                                if (!t || !t.length) return t;
                                if (D(t, this.lastKey) && D(e, this.lastParams)) return this.value;
                                let n;
                                if (L(e[0]) && e.length)
                                    if ("string" == typeof e[0] && e[0].length) {
                                        let t = e[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":').replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                                        try {
                                            n = JSON.parse(t)
                                        } catch (r) {
                                            throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + e[0])
                                        }
                                    } else "object" != typeof e[0] || Array.isArray(e[0]) || (n = e[0]);
                                return this.lastKey = t, this.lastParams = e, this.updateValue(t, n), this._dispose(), this.onTranslationChange || (this.onTranslationChange = this.translate.onTranslationChange.subscribe(e => {
                                    this.lastKey && e.lang === this.translate.currentLang && (this.lastKey = null, this.updateValue(t, n, e.translations))
                                })), this.onLangChange || (this.onLangChange = this.translate.onLangChange.subscribe(e => {
                                    this.lastKey && (this.lastKey = null, this.updateValue(t, n, e.translations))
                                })), this.onDefaultLangChange || (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
                                    this.lastKey && (this.lastKey = null, this.updateValue(t, n))
                                })), this.value
                            }
                            _dispose() {
                                void 0 !== this.onTranslationChange && (this.onTranslationChange.unsubscribe(), this.onTranslationChange = void 0), void 0 !== this.onLangChange && (this.onLangChange.unsubscribe(), this.onLangChange = void 0), void 0 !== this.onDefaultLangChange && (this.onDefaultLangChange.unsubscribe(), this.onDefaultLangChange = void 0)
                            }
                            ngOnDestroy() {
                                this._dispose()
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Kb(X), r.Zb())
                        }, t.\u0275pipe = r.Jb({
                            name: "translate",
                            type: t,
                            pure: !1
                        }), t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    Z = (() => {
                        class t {
                            static forRoot(e = {}) {
                                return {
                                    ngModule: t,
                                    providers: [e.loader || {
                                        provide: A,
                                        useClass: I
                                    }, e.compiler || {
                                        provide: U,
                                        useClass: V
                                    }, e.parser || {
                                        provide: F,
                                        useClass: H
                                    }, e.missingTranslationHandler || {
                                        provide: N,
                                        useClass: R
                                    }, B, {
                                        provide: q,
                                        useValue: e.isolate
                                    }, {
                                        provide: K,
                                        useValue: e.useDefaultLang
                                    }, {
                                        provide: W,
                                        useValue: e.extend
                                    }, {
                                        provide: G,
                                        useValue: e.defaultLanguage
                                    }, X]
                                }
                            }
                            static forChild(e = {}) {
                                return {
                                    ngModule: t,
                                    providers: [e.loader || {
                                        provide: A,
                                        useClass: I
                                    }, e.compiler || {
                                        provide: U,
                                        useClass: V
                                    }, e.parser || {
                                        provide: F,
                                        useClass: H
                                    }, e.missingTranslationHandler || {
                                        provide: N,
                                        useClass: R
                                    }, {
                                        provide: q,
                                        useValue: e.isolate
                                    }, {
                                        provide: K,
                                        useValue: e.useDefaultLang
                                    }, {
                                        provide: W,
                                        useValue: e.extend
                                    }, {
                                        provide: G,
                                        useValue: e.defaultLanguage
                                    }, X]
                                }
                            }
                        }
                        return t.\u0275mod = r.Ib({
                            type: t
                        }), t.\u0275inj = r.Hb({
                            factory: function (e) {
                                return new(e || t)
                            }
                        }), t
                    })()
            }, "tk/3": function (t, e, n) {
                "use strict";
                n.d(e, "a", (function () {
                    return O
                })), n.d(e, "b", (function () {
                    return U
                }));
                var r = n("fXoL"),
                    s = n("LRne"),
                    i = n("HDdC"),
                    o = n("bOdf"),
                    a = n("pLZG"),
                    c = n("lJxs"),
                    l = n("ofXK");
                class u {}
                class h {}
                class d {
                    constructor(t) {
                        this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
                            this.headers = new Map, t.split("\n").forEach(t => {
                                const e = t.indexOf(":");
                                if (e > 0) {
                                    const n = t.slice(0, e),
                                        r = n.toLowerCase(),
                                        s = t.slice(e + 1).trim();
                                    this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s])
                                }
                            })
                        } : () => {
                            this.headers = new Map, Object.keys(t).forEach(e => {
                                let n = t[e];
                                const r = e.toLowerCase();
                                "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r))
                            })
                        } : this.headers = new Map
                    }
                    has(t) {
                        return this.init(), this.headers.has(t.toLowerCase())
                    }
                    get(t) {
                        this.init();
                        const e = this.headers.get(t.toLowerCase());
                        return e && e.length > 0 ? e[0] : null
                    }
                    keys() {
                        return this.init(), Array.from(this.normalizedNames.values())
                    }
                    getAll(t) {
                        return this.init(), this.headers.get(t.toLowerCase()) || null
                    }
                    append(t, e) {
                        return this.clone({
                            name: t,
                            value: e,
                            op: "a"
                        })
                    }
                    set(t, e) {
                        return this.clone({
                            name: t,
                            value: e,
                            op: "s"
                        })
                    }
                    delete(t, e) {
                        return this.clone({
                            name: t,
                            value: e,
                            op: "d"
                        })
                    }
                    maybeSetNormalizedName(t, e) {
                        this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
                    }
                    init() {
                        this.lazyInit && (this.lazyInit instanceof d ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
                    }
                    copyFrom(t) {
                        t.init(), Array.from(t.headers.keys()).forEach(e => {
                            this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
                        })
                    }
                    clone(t) {
                        const e = new d;
                        return e.lazyInit = this.lazyInit && this.lazyInit instanceof d ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
                    }
                    applyUpdate(t) {
                        const e = t.name.toLowerCase();
                        switch (t.op) {
                            case "a":
                            case "s":
                                let n = t.value;
                                if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                                this.maybeSetNormalizedName(t.name, e);
                                const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                                r.push(...n), this.headers.set(e, r);
                                break;
                            case "d":
                                const s = t.value;
                                if (s) {
                                    let t = this.headers.get(e);
                                    if (!t) return;
                                    t = t.filter(t => -1 === s.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                                } else this.headers.delete(e), this.normalizedNames.delete(e)
                        }
                    }
                    forEach(t) {
                        this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
                    }
                }
                class f {
                    encodeKey(t) {
                        return p(t)
                    }
                    encodeValue(t) {
                        return p(t)
                    }
                    decodeKey(t) {
                        return decodeURIComponent(t)
                    }
                    decodeValue(t) {
                        return decodeURIComponent(t)
                    }
                }

                function p(t) {
                    return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
                }
                class m {
                    constructor(t = {}) {
                        if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new f, t.fromString) {
                            if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                            this.map = function (t, e) {
                                const n = new Map;
                                return t.length > 0 && t.split("&").forEach(t => {
                                    const r = t.indexOf("="),
                                        [s, i] = -1 == r ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                                        o = n.get(s) || [];
                                    o.push(i), n.set(s, o)
                                }), n
                            }(t.fromString, this.encoder)
                        } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(e => {
                            const n = t.fromObject[e];
                            this.map.set(e, Array.isArray(n) ? n : [n])
                        })) : this.map = null
                    }
                    has(t) {
                        return this.init(), this.map.has(t)
                    }
                    get(t) {
                        this.init();
                        const e = this.map.get(t);
                        return e ? e[0] : null
                    }
                    getAll(t) {
                        return this.init(), this.map.get(t) || null
                    }
                    keys() {
                        return this.init(), Array.from(this.map.keys())
                    }
                    append(t, e) {
                        return this.clone({
                            param: t,
                            value: e,
                            op: "a"
                        })
                    }
                    set(t, e) {
                        return this.clone({
                            param: t,
                            value: e,
                            op: "s"
                        })
                    }
                    delete(t, e) {
                        return this.clone({
                            param: t,
                            value: e,
                            op: "d"
                        })
                    }
                    toString() {
                        return this.init(), this.keys().map(t => {
                            const e = this.encoder.encodeKey(t);
                            return this.map.get(t).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
                        }).filter(t => "" !== t).join("&")
                    }
                    clone(t) {
                        const e = new m({
                            encoder: this.encoder
                        });
                        return e.cloneFrom = this.cloneFrom || this, e.updates = (this.updates || []).concat([t]), e
                    }
                    init() {
                        null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
                            switch (t.op) {
                                case "a":
                                case "s":
                                    const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                                    e.push(t.value), this.map.set(t.param, e);
                                    break;
                                case "d":
                                    if (void 0 === t.value) {
                                        this.map.delete(t.param);
                                        break
                                    } {
                                        let e = this.map.get(t.param) || [];
                                        const n = e.indexOf(t.value); - 1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                                    }
                            }
                        }), this.cloneFrom = this.updates = null)
                    }
                }

                function g(t) {
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
                }

                function y(t) {
                    return "undefined" != typeof Blob && t instanceof Blob
                }

                function b(t) {
                    return "undefined" != typeof FormData && t instanceof FormData
                }
                class v {
                    constructor(t, e, n, r) {
                        let s;
                        if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                                switch (t) {
                                    case "DELETE":
                                    case "GET":
                                    case "HEAD":
                                    case "OPTIONS":
                                    case "JSONP":
                                        return !1;
                                    default:
                                        return !0
                                }
                            }(this.method) || r ? (this.body = void 0 !== n ? n : null, s = r) : s = n, s && (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.params && (this.params = s.params)), this.headers || (this.headers = new d), this.params) {
                            const t = this.params.toString();
                            if (0 === t.length) this.urlWithParams = e;
                            else {
                                const n = e.indexOf("?");
                                this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
                            }
                        } else this.params = new m, this.urlWithParams = e
                    }
                    serializeBody() {
                        return null === this.body ? null : g(this.body) || y(this.body) || b(this.body) || "string" == typeof this.body ? this.body : this.body instanceof m ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                    }
                    detectContentTypeHeader() {
                        return null === this.body || b(this.body) ? null : y(this.body) ? this.body.type || null : g(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof m ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
                    }
                    clone(t = {}) {
                        const e = t.method || this.method,
                            n = t.url || this.url,
                            r = t.responseType || this.responseType,
                            s = void 0 !== t.body ? t.body : this.body,
                            i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
                            o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
                        let a = t.headers || this.headers,
                            c = t.params || this.params;
                        return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (c = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), c)), new v(e, n, s, {
                            params: c,
                            headers: a,
                            reportProgress: o,
                            responseType: r,
                            withCredentials: i
                        })
                    }
                }
                var _ = function (t) {
                    return t[t.Sent = 0] = "Sent", t[t.UploadProgress = 1] = "UploadProgress", t[t.ResponseHeader = 2] = "ResponseHeader", t[t.DownloadProgress = 3] = "DownloadProgress", t[t.Response = 4] = "Response", t[t.User = 5] = "User", t
                }({});
                class w {
                    constructor(t, e = 200, n = "OK") {
                        this.headers = t.headers || new d, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
                    }
                }
                class S extends w {
                    constructor(t = {}) {
                        super(t), this.type = _.ResponseHeader
                    }
                    clone(t = {}) {
                        return new S({
                            headers: t.headers || this.headers,
                            status: void 0 !== t.status ? t.status : this.status,
                            statusText: t.statusText || this.statusText,
                            url: t.url || this.url || void 0
                        })
                    }
                }
                class C extends w {
                    constructor(t = {}) {
                        super(t), this.type = _.Response, this.body = void 0 !== t.body ? t.body : null
                    }
                    clone(t = {}) {
                        return new C({
                            body: void 0 !== t.body ? t.body : this.body,
                            headers: t.headers || this.headers,
                            status: void 0 !== t.status ? t.status : this.status,
                            statusText: t.statusText || this.statusText,
                            url: t.url || this.url || void 0
                        })
                    }
                }
                class E extends w {
                    constructor(t) {
                        super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? "Http failure during parsing for " + (t.url || "(unknown url)") : `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
                    }
                }

                function x(t, e) {
                    return {
                        body: e,
                        headers: t.headers,
                        observe: t.observe,
                        params: t.params,
                        reportProgress: t.reportProgress,
                        responseType: t.responseType,
                        withCredentials: t.withCredentials
                    }
                }
                let O = (() => {
                    class t {
                        constructor(t) {
                            this.handler = t
                        }
                        request(t, e, n = {}) {
                            let r;
                            if (t instanceof v) r = t;
                            else {
                                let s = void 0;
                                s = n.headers instanceof d ? n.headers : new d(n.headers);
                                let i = void 0;
                                n.params && (i = n.params instanceof m ? n.params : new m({
                                    fromObject: n.params
                                })), r = new v(t, e, void 0 !== n.body ? n.body : null, {
                                    headers: s,
                                    params: i,
                                    reportProgress: n.reportProgress,
                                    responseType: n.responseType || "json",
                                    withCredentials: n.withCredentials
                                })
                            }
                            const i = Object(s.a)(r).pipe(Object(o.a)(t => this.handler.handle(t)));
                            if (t instanceof v || "events" === n.observe) return i;
                            const l = i.pipe(Object(a.a)(t => t instanceof C));
                            switch (n.observe || "body") {
                                case "body":
                                    switch (r.responseType) {
                                        case "arraybuffer":
                                            return l.pipe(Object(c.a)(t => {
                                                if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                                return t.body
                                            }));
                                        case "blob":
                                            return l.pipe(Object(c.a)(t => {
                                                if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                                return t.body
                                            }));
                                        case "text":
                                            return l.pipe(Object(c.a)(t => {
                                                if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                                                return t.body
                                            }));
                                        case "json":
                                        default:
                                            return l.pipe(Object(c.a)(t => t.body))
                                    }
                                    case "response":
                                        return l;
                                    default:
                                        throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
                            }
                        }
                        delete(t, e = {}) {
                            return this.request("DELETE", t, e)
                        }
                        get(t, e = {}) {
                            return this.request("GET", t, e)
                        }
                        head(t, e = {}) {
                            return this.request("HEAD", t, e)
                        }
                        jsonp(t, e) {
                            return this.request("JSONP", t, {
                                params: (new m).append(e, "JSONP_CALLBACK"),
                                observe: "body",
                                responseType: "json"
                            })
                        }
                        options(t, e = {}) {
                            return this.request("OPTIONS", t, e)
                        }
                        patch(t, e, n = {}) {
                            return this.request("PATCH", t, x(n, e))
                        }
                        post(t, e, n = {}) {
                            return this.request("POST", t, x(n, e))
                        }
                        put(t, e, n = {}) {
                            return this.request("PUT", t, x(n, e))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)(r.Xb(u))
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
                class k {
                    constructor(t, e) {
                        this.next = t, this.interceptor = e
                    }
                    handle(t) {
                        return this.interceptor.intercept(t, this.next)
                    }
                }
                const T = new r.q("HTTP_INTERCEPTORS");
                let j = (() => {
                    class t {
                        intercept(t, e) {
                            return e.handle(t)
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new(e || t)
                    }, t.\u0275prov = r.Gb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
                const A = /^\)\]\}',?\n/;
                class I {}
                let P = (() => {
                        class t {
                            constructor() {}
                            build() {
                                return new XMLHttpRequest
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    N = (() => {
                        class t {
                            constructor(t) {
                                this.xhrFactory = t
                            }
                            handle(t) {
                                if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                                return new i.a(e => {
                                    const n = this.xhrFactory.build();
                                    if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                                        const e = t.detectContentTypeHeader();
                                        null !== e && n.setRequestHeader("Content-Type", e)
                                    }
                                    if (t.responseType) {
                                        const e = t.responseType.toLowerCase();
                                        n.responseType = "json" !== e ? e : "text"
                                    }
                                    const r = t.serializeBody();
                                    let s = null;
                                    const i = () => {
                                            if (null !== s) return s;
                                            const e = 1223 === n.status ? 204 : n.status,
                                                r = n.statusText || "OK",
                                                i = new d(n.getAllResponseHeaders()),
                                                o = function (t) {
                                                    return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                                                }(n) || t.url;
                                            return s = new S({
                                                headers: i,
                                                status: e,
                                                statusText: r,
                                                url: o
                                            }), s
                                        },
                                        o = () => {
                                            let {
                                                headers: r,
                                                status: s,
                                                statusText: o,
                                                url: a
                                            } = i(), c = null;
                                            204 !== s && (c = void 0 === n.response ? n.responseText : n.response), 0 === s && (s = c ? 200 : 0);
                                            let l = s >= 200 && s < 300;
                                            if ("json" === t.responseType && "string" == typeof c) {
                                                const t = c;
                                                c = c.replace(A, "");
                                                try {
                                                    c = "" !== c ? JSON.parse(c) : null
                                                } catch (u) {
                                                    c = t, l && (l = !1, c = {
                                                        error: u,
                                                        text: c
                                                    })
                                                }
                                            }
                                            l ? (e.next(new C({
                                                body: c,
                                                headers: r,
                                                status: s,
                                                statusText: o,
                                                url: a || void 0
                                            })), e.complete()) : e.error(new E({
                                                error: c,
                                                headers: r,
                                                status: s,
                                                statusText: o,
                                                url: a || void 0
                                            }))
                                        },
                                        a = t => {
                                            const {
                                                url: r
                                            } = i(), s = new E({
                                                error: t,
                                                status: n.status || 0,
                                                statusText: n.statusText || "Unknown Error",
                                                url: r || void 0
                                            });
                                            e.error(s)
                                        };
                                    let c = !1;
                                    const l = r => {
                                            c || (e.next(i()), c = !0);
                                            let s = {
                                                type: _.DownloadProgress,
                                                loaded: r.loaded
                                            };
                                            r.lengthComputable && (s.total = r.total), "text" === t.responseType && n.responseText && (s.partialText = n.responseText), e.next(s)
                                        },
                                        u = t => {
                                            let n = {
                                                type: _.UploadProgress,
                                                loaded: t.loaded
                                            };
                                            t.lengthComputable && (n.total = t.total), e.next(n)
                                        };
                                    return n.addEventListener("load", o), n.addEventListener("error", a), t.reportProgress && (n.addEventListener("progress", l), null !== r && n.upload && n.upload.addEventListener("progress", u)), n.send(r), e.next({
                                        type: _.Sent
                                    }), () => {
                                        n.removeEventListener("error", a), n.removeEventListener("load", o), t.reportProgress && (n.removeEventListener("progress", l), null !== r && n.upload && n.upload.removeEventListener("progress", u)), n.readyState !== n.DONE && n.abort()
                                    }
                                })
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(I))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                const R = new r.q("XSRF_COOKIE_NAME"),
                    D = new r.q("XSRF_HEADER_NAME");
                class L {}
                let M = (() => {
                        class t {
                            constructor(t, e, n) {
                                this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                            }
                            getToken() {
                                if ("server" === this.platform) return null;
                                const t = this.doc.cookie || "";
                                return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Object(l.D)(t, this.cookieName), this.lastCookieString = t), this.lastToken
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(l.c), r.Xb(r.B), r.Xb(R))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    F = (() => {
                        class t {
                            constructor(t, e) {
                                this.tokenService = t, this.headerName = e
                            }
                            intercept(t, e) {
                                const n = t.url.toLowerCase();
                                if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                                const r = this.tokenService.getToken();
                                return null === r || t.headers.has(this.headerName) || (t = t.clone({
                                    headers: t.headers.set(this.headerName, r)
                                })), e.handle(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(L), r.Xb(D))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    H = (() => {
                        class t {
                            constructor(t, e) {
                                this.backend = t, this.injector = e, this.chain = null
                            }
                            handle(t) {
                                if (null === this.chain) {
                                    const t = this.injector.get(T, []);
                                    this.chain = t.reduceRight((t, e) => new k(t, e), this.backend)
                                }
                                return this.chain.handle(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Xb(h), r.Xb(r.r))
                        }, t.\u0275prov = r.Gb({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })(),
                    z = (() => {
                        class t {
                            static disable() {
                                return {
                                    ngModule: t,
                                    providers: [{
                                        provide: F,
                                        useClass: j
                                    }]
                                }
                            }
                            static withOptions(e = {}) {
                                return {
                                    ngModule: t,
                                    providers: [e.cookieName ? {
                                        provide: R,
                                        useValue: e.cookieName
                                    } : [], e.headerName ? {
                                        provide: D,
                                        useValue: e.headerName
                                    } : []]
                                }
                            }
                        }
                        return t.\u0275mod = r.Ib({
                            type: t
                        }), t.\u0275inj = r.Hb({
                            factory: function (e) {
                                return new(e || t)
                            },
                            providers: [F, {
                                provide: T,
                                useExisting: F,
                                multi: !0
                            }, {
                                provide: L,
                                useClass: M
                            }, {
                                provide: R,
                                useValue: "XSRF-TOKEN"
                            }, {
                                provide: D,
                                useValue: "X-XSRF-TOKEN"
                            }]
                        }), t
                    })(),
                    U = (() => {
                        class t {}
                        return t.\u0275mod = r.Ib({
                            type: t
                        }), t.\u0275inj = r.Hb({
                            factory: function (e) {
                                return new(e || t)
                            },
                            providers: [O, {
                                provide: u,
                                useClass: H
                            }, N, {
                                provide: h,
                                useExisting: N
                            }, P, {
                                provide: I,
                                useExisting: P
                            }],
                            imports: [
                                [z.withOptions({
                                    cookieName: "XSRF-TOKEN",
                                    headerName: "X-XSRF-TOKEN"
                                })]
                            ]
                        }), t
                    })()
            },
            tyNb: function (t, e, n) {
                "use strict";
                n.d(e, "a", (function () {
                    return J
                })), n.d(e, "b", (function () {
                    return mn
                })), n.d(e, "c", (function () {
                    return vn
                })), n.d(e, "d", (function () {
                    return yn
                })), n.d(e, "e", (function () {
                    return An
                })), n.d(e, "f", (function () {
                    return _n
                }));
                var r = n("ofXK"),
                    s = n("fXoL"),
                    i = n("LRne"),
                    o = n("Cfvw"),
                    a = n("2Vo4"),
                    c = n("HDdC");
                const l = (() => {
                    function t() {
                        return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                })();
                var u = n("itXk"),
                    h = n("NXyV"),
                    d = n("EY2u"),
                    f = n("XNiG"),
                    p = n("lJxs"),
                    m = n("0EUg"),
                    g = n("pLZG"),
                    y = n("7o/Q"),
                    b = n("4I5i");

                function v(t) {
                    return function (e) {
                        return 0 === t ? Object(d.b)() : e.lift(new _(t))
                    }
                }
                class _ {
                    constructor(t) {
                        if (this.total = t, this.total < 0) throw new b.a
                    }
                    call(t, e) {
                        return e.subscribe(new w(t, this.total))
                    }
                }
                class w extends y.a {
                    constructor(t, e) {
                        super(t), this.total = e, this.ring = new Array, this.count = 0
                    }
                    _next(t) {
                        const e = this.ring,
                            n = this.total,
                            r = this.count++;
                        e.length < n ? e.push(t) : e[r % n] = t
                    }
                    _complete() {
                        const t = this.destination;
                        let e = this.count;
                        if (e > 0) {
                            const n = this.count >= this.total ? this.total : this.count,
                                r = this.ring;
                            for (let s = 0; s < n; s++) {
                                const s = e++ % n;
                                t.next(r[s])
                            }
                        }
                        t.complete()
                    }
                }

                function S(t = x) {
                    return e => e.lift(new C(t))
                }
                class C {
                    constructor(t) {
                        this.errorFactory = t
                    }
                    call(t, e) {
                        return e.subscribe(new E(t, this.errorFactory))
                    }
                }
                class E extends y.a {
                    constructor(t, e) {
                        super(t), this.errorFactory = e, this.hasValue = !1
                    }
                    _next(t) {
                        this.hasValue = !0, this.destination.next(t)
                    }
                    _complete() {
                        if (this.hasValue) return this.destination.complete(); {
                            let e;
                            try {
                                e = this.errorFactory()
                            } catch (t) {
                                e = t
                            }
                            this.destination.error(e)
                        }
                    }
                }

                function x() {
                    return new l
                }

                function O(t = null) {
                    return e => e.lift(new k(t))
                }
                class k {
                    constructor(t) {
                        this.defaultValue = t
                    }
                    call(t, e) {
                        return e.subscribe(new T(t, this.defaultValue))
                    }
                }
                class T extends y.a {
                    constructor(t, e) {
                        super(t), this.defaultValue = e, this.isEmpty = !0
                    }
                    _next(t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }
                    _complete() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }
                }
                var j = n("SpAZ"),
                    A = n("l7GE"),
                    I = n("51Dv"),
                    P = n("ZUHj");

                function N(t) {
                    return function (e) {
                        const n = new R(t),
                            r = e.lift(n);
                        return n.caught = r
                    }
                }
                class R {
                    constructor(t) {
                        this.selector = t
                    }
                    call(t, e) {
                        return e.subscribe(new D(t, this.selector, this.caught))
                    }
                }
                class D extends A.a {
                    constructor(t, e, n) {
                        super(t), this.selector = e, this.caught = n
                    }
                    error(t) {
                        if (!this.isStopped) {
                            let n;
                            try {
                                n = this.selector(t, this.caught)
                            } catch (e) {
                                return void super.error(e)
                            }
                            this._unsubscribeAndRecycle();
                            const r = new I.a(this, void 0, void 0);
                            this.add(r);
                            const s = Object(P.a)(this, n, void 0, void 0, r);
                            s !== r && this.add(s)
                        }
                    }
                }
                var L = n("IzEk");

                function M(t, e) {
                    const n = arguments.length >= 2;
                    return r => r.pipe(t ? Object(g.a)((e, n) => t(e, n, r)) : j.a, Object(L.a)(1), n ? O(e) : S(() => new l))
                }
                var F = n("5+tZ"),
                    H = n("vkgz");
                class z {
                    constructor(t, e, n) {
                        this.predicate = t, this.thisArg = e, this.source = n
                    }
                    call(t, e) {
                        return e.subscribe(new U(t, this.predicate, this.thisArg, this.source))
                    }
                }
                class U extends y.a {
                    constructor(t, e, n, r) {
                        super(t), this.predicate = e, this.thisArg = n, this.source = r, this.index = 0, this.thisArg = n || this
                    }
                    notifyComplete(t) {
                        this.destination.next(t), this.destination.complete()
                    }
                    _next(t) {
                        let e = !1;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        e || this.notifyComplete(!1)
                    }
                    _complete() {
                        this.notifyComplete(!0)
                    }
                }
                var V = n("eIep"),
                    $ = n("JX91");
                class B {
                    constructor(t, e, n = !1) {
                        this.accumulator = t, this.seed = e, this.hasSeed = n
                    }
                    call(t, e) {
                        return e.subscribe(new q(t, this.accumulator, this.seed, this.hasSeed))
                    }
                }
                class q extends y.a {
                    constructor(t, e, n, r) {
                        super(t), this.accumulator = e, this._seed = n, this.hasSeed = r, this.index = 0
                    }
                    get seed() {
                        return this._seed
                    }
                    set seed(t) {
                        this.hasSeed = !0, this._seed = t
                    }
                    _next(t) {
                        if (this.hasSeed) return this._tryNext(t);
                        this.seed = t, this.destination.next(t)
                    }
                    _tryNext(t) {
                        const e = this.index++;
                        let n;
                        try {
                            n = this.accumulator(this.seed, t, e)
                        } catch (r) {
                            this.destination.error(r)
                        }
                        this.seed = n, this.destination.next(n)
                    }
                }
                var K = n("bOdf"),
                    G = n("quSY");
                class W {
                    constructor(t) {
                        this.callback = t
                    }
                    call(t, e) {
                        return e.subscribe(new X(t, this.callback))
                    }
                }
                class X extends y.a {
                    constructor(t, e) {
                        super(t), this.add(new G.a(e))
                    }
                }
                var Q = n("bHdf");
                class Z {
                    constructor(t, e) {
                        this.id = t, this.url = e
                    }
                }
                class Y extends Z {
                    constructor(t, e, n = "imperative", r = null) {
                        super(t, e), this.navigationTrigger = n, this.restoredState = r
                    }
                    toString() {
                        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                    }
                }
                class J extends Z {
                    constructor(t, e, n) {
                        super(t, e), this.urlAfterRedirects = n
                    }
                    toString() {
                        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                    }
                }
                class tt extends Z {
                    constructor(t, e, n) {
                        super(t, e), this.reason = n
                    }
                    toString() {
                        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                    }
                }
                class et extends Z {
                    constructor(t, e, n) {
                        super(t, e), this.error = n
                    }
                    toString() {
                        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                    }
                }
                class nt extends Z {
                    constructor(t, e, n, r) {
                        super(t, e), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class rt extends Z {
                    constructor(t, e, n, r) {
                        super(t, e), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class st extends Z {
                    constructor(t, e, n, r, s) {
                        super(t, e), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = s
                    }
                    toString() {
                        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                    }
                }
                class it extends Z {
                    constructor(t, e, n, r) {
                        super(t, e), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class ot extends Z {
                    constructor(t, e, n, r) {
                        super(t, e), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class at {
                    constructor(t) {
                        this.route = t
                    }
                    toString() {
                        return `RouteConfigLoadStart(path: ${this.route.path})`
                    }
                }
                class ct {
                    constructor(t) {
                        this.route = t
                    }
                    toString() {
                        return `RouteConfigLoadEnd(path: ${this.route.path})`
                    }
                }
                class lt {
                    constructor(t) {
                        this.snapshot = t
                    }
                    toString() {
                        return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class ut {
                    constructor(t) {
                        this.snapshot = t
                    }
                    toString() {
                        return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class ht {
                    constructor(t) {
                        this.snapshot = t
                    }
                    toString() {
                        return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class dt {
                    constructor(t) {
                        this.snapshot = t
                    }
                    toString() {
                        return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class ft {
                    constructor(t, e, n) {
                        this.routerEvent = t, this.position = e, this.anchor = n
                    }
                    toString() {
                        return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                    }
                }
                const pt = "primary";
                class mt {
                    constructor(t) {
                        this.params = t || {}
                    }
                    has(t) {
                        return Object.prototype.hasOwnProperty.call(this.params, t)
                    }
                    get(t) {
                        if (this.has(t)) {
                            const e = this.params[t];
                            return Array.isArray(e) ? e[0] : e
                        }
                        return null
                    }
                    getAll(t) {
                        if (this.has(t)) {
                            const e = this.params[t];
                            return Array.isArray(e) ? e : [e]
                        }
                        return []
                    }
                    get keys() {
                        return Object.keys(this.params)
                    }
                }

                function gt(t) {
                    return new mt(t)
                }

                function yt(t) {
                    const e = Error("NavigationCancelingError: " + t);
                    return e.ngNavigationCancelingError = !0, e
                }

                function bt(t, e, n) {
                    const r = n.path.split("/");
                    if (r.length > t.length) return null;
                    if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
                    const s = {};
                    for (let i = 0; i < r.length; i++) {
                        const e = r[i],
                            n = t[i];
                        if (e.startsWith(":")) s[e.substring(1)] = n;
                        else if (e !== n.path) return null
                    }
                    return {
                        consumed: t.slice(0, r.length),
                        posParams: s
                    }
                }

                function vt(t, e) {
                    const n = Object.keys(t),
                        r = Object.keys(e);
                    if (!n || !r || n.length != r.length) return !1;
                    let s;
                    for (let i = 0; i < n.length; i++)
                        if (s = n[i], !_t(t[s], e[s])) return !1;
                    return !0
                }

                function _t(t, e) {
                    return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
                }

                function wt(t) {
                    return Array.prototype.concat.apply([], t)
                }

                function St(t) {
                    return t.length > 0 ? t[t.length - 1] : null
                }

                function Ct(t, e) {
                    for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
                }

                function Et(t) {
                    return Object(s.ob)(t) ? t : Object(s.pb)(t) ? Object(o.a)(Promise.resolve(t)) : Object(i.a)(t)
                }

                function xt(t, e, n) {
                    return n ? function (t, e) {
                        return vt(t, e)
                    }(t.queryParams, e.queryParams) && function t(e, n) {
                        if (!jt(e.segments, n.segments)) return !1;
                        if (e.numberOfChildren !== n.numberOfChildren) return !1;
                        for (const r in n.children) {
                            if (!e.children[r]) return !1;
                            if (!t(e.children[r], n.children[r])) return !1
                        }
                        return !0
                    }(t.root, e.root) : function (t, e) {
                        return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => _t(t[n], e[n]))
                    }(t.queryParams, e.queryParams) && function t(e, n) {
                        return function e(n, r, s) {
                            if (n.segments.length > s.length) return !!jt(n.segments.slice(0, s.length), s) && !r.hasChildren();
                            if (n.segments.length === s.length) {
                                if (!jt(n.segments, s)) return !1;
                                for (const e in r.children) {
                                    if (!n.children[e]) return !1;
                                    if (!t(n.children[e], r.children[e])) return !1
                                }
                                return !0
                            } {
                                const t = s.slice(0, n.segments.length),
                                    i = s.slice(n.segments.length);
                                return !!jt(n.segments, t) && !!n.children.primary && e(n.children.primary, r, i)
                            }
                        }(e, n, n.segments)
                    }(t.root, e.root)
                }
                class Ot {
                    constructor(t, e, n) {
                        this.root = t, this.queryParams = e, this.fragment = n
                    }
                    get queryParamMap() {
                        return this._queryParamMap || (this._queryParamMap = gt(this.queryParams)), this._queryParamMap
                    }
                    toString() {
                        return Nt.serialize(this)
                    }
                }
                class kt {
                    constructor(t, e) {
                        this.segments = t, this.children = e, this.parent = null, Ct(e, (t, e) => t.parent = this)
                    }
                    hasChildren() {
                        return this.numberOfChildren > 0
                    }
                    get numberOfChildren() {
                        return Object.keys(this.children).length
                    }
                    toString() {
                        return Rt(this)
                    }
                }
                class Tt {
                    constructor(t, e) {
                        this.path = t, this.parameters = e
                    }
                    get parameterMap() {
                        return this._parameterMap || (this._parameterMap = gt(this.parameters)), this._parameterMap
                    }
                    toString() {
                        return zt(this)
                    }
                }

                function jt(t, e) {
                    return t.length === e.length && t.every((t, n) => t.path === e[n].path)
                }

                function At(t, e) {
                    let n = [];
                    return Ct(t.children, (t, r) => {
                        r === pt && (n = n.concat(e(t, r)))
                    }), Ct(t.children, (t, r) => {
                        r !== pt && (n = n.concat(e(t, r)))
                    }), n
                }
                class It {}
                class Pt {
                    parse(t) {
                        const e = new qt(t);
                        return new Ot(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
                    }
                    serialize(t) {
                            return `${"/"+function t(e,n){if(!e.hasChildren())return Rt(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",r=[];return Ct(e.children,(e,n)=>{n!==pt&&r.push(`${n}:${t(e,!1)}`)}),r.length>0?`
                            $ {
                                n
                            }($ {
                                r.join("//")
                            })
                            `:n}{const n=At(e,(n,r)=>r===pt?[t(e.children.primary,!1)]:[`
                            $ {
                                r
                            }: $ {
                                t(n, !1)
                            }
                            `]);return`
                            $ {
                                Rt(e)
                            }
                            /(${n.join("/ / ")})`}}(t.root,!0)}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Lt(e)}=${Lt(t)}`).join(" & "):`${Lt(e)}=${Lt(n)}`});return e.length?" ? "+e.join(" & "):"
                            "}(t.queryParams)}${"
                            string "==typeof t.fragment?"#
                            "+encodeURI(t.fragment):"
                            "}`}}const Nt=new Pt;function Rt(t){return t.segments.map(t=>zt(t)).join(" / ")}function Dt(t){return encodeURIComponent(t).replace(/%40/g,"
                            @ ").replace(/%3A/gi,": ").replace(/%24/g,"
                            $ ").replace(/%2C/gi,", ")}function Lt(t){return Dt(t).replace(/%3B/gi,";
                            ")}function Mt(t){return Dt(t).replace(/\(/g," % 28 ").replace(/\)/g," % 29 ").replace(/%26/gi," & ")}function Ft(t){return decodeURIComponent(t)}function Ht(t){return Ft(t.replace(/\+/g," % 20 "))}function zt(t){return`${Mt(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${Mt(t)}=${Mt(e[t])}`).join("
                            ")}`;var e}const Ut=/^[^\/()?;=#]+/;function Vt(t){const e=t.match(Ut);return e?e[0]:"
                            "}const $t=/^[^=?&#]+/,Bt=/^[^?&#]+/;class qt{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional(" / "),"
                            "===this.remaining||this.peekStartsWith(" ? ")||this.peekStartsWith("#
                            ")?new kt([],{}):new kt([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional(" ? "))do{this.parseQueryParam(t)}while(this.consumeOptional(" & "));return t}parseFragment(){return this.consumeOptional("#
                            ")?decodeURIComponent(this.remaining):null}parseChildren(){if("
                            "===this.remaining)return{};this.consumeOptional(" / ");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith(" / ")&&!this.peekStartsWith(" //")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n.primary=new kt(t,e)),n}parseSegment(){const t=Vt(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(t),new Tt(Ft(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const e=Vt(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=Vt(this.remaining);t&&(n=t,this.capture(n))}t[Ft(e)]=Ft(n)}parseQueryParam(t){const e=function(t){const e=t.match($t);return e?e[0]:""}(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=function(t){const e=t.match(Bt);return e?e[0]:""}(this.remaining);t&&(n=t,this.capture(n))}const r=Ht(e),s=Ht(n);if(t.hasOwnProperty(r)){let e=t[r];Array.isArray(e)||(e=[e],t[r]=e),e.push(s)}else t[r]=s}parseParens(t){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=Vt(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let s=void 0;n.indexOf(":")>-1?(s=n.substr(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=pt);const i=this.parseChildren();e[s]=1===Object.keys(i).length?i.primary:new kt([],i),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new Error(`Expected "${t}".`)}}class Kt{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){const e=Gt(t,this._root);return e?e.children.map(t=>t.value):[]}firstChild(t){const e=Gt(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){const e=Wt(t,this._root);return e.length<2?[]:e[e.length-2].children.map(t=>t.value).filter(e=>e!==t)}pathFromRoot(t){return Wt(t,this._root).map(t=>t.value)}}function Gt(t,e){if(t===e.value)return e;for(const n of e.children){const e=Gt(t,n);if(e)return e}return null}function Wt(t,e){if(t===e.value)return[e];for(const n of e.children){const r=Wt(t,n);if(r.length)return r.unshift(e),r}return[]}class Xt{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}}function Qt(t){const e={};return t&&t.children.forEach(t=>e[t.value.outlet]=t),e}class Zt extends Kt{constructor(t,e){super(t),this.snapshot=e,re(this,t)}toString(){return this.snapshot.toString()}}function Yt(t,e){const n=function(t,e){const n=new ee([],{},{},"",{},pt,e,null,t.root,-1,{});return new ne("",new Xt(n,[]))}(t,e),r=new a.a([new Tt("",{})]),s=new a.a({}),i=new a.a({}),o=new a.a({}),c=new a.a(""),l=new Jt(r,s,o,c,i,pt,e,n.root);return l.snapshot=n.root,new Zt(new Xt(l,[]),n)}class Jt{constructor(t,e,n,r,s,i,o,a){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=i,this.component=o,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Object(p.a)(t=>gt(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Object(p.a)(t=>gt(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function te(t,e="emptyOnly"){const n=t.pathFromRoot;let r=0;if("always"!==e)for(r=n.length-1;r>=1;){const t=n[r],e=n[r-1];if(t.routeConfig&&""===t.routeConfig.path)r--;else{if(e.component)break;r--}}return function(t){return t.reduce((t,e)=>({params:Object.assign(Object.assign({},t.params),e.params),data:Object.assign(Object.assign({},t.data),e.data),resolve:Object.assign(Object.assign({},t.resolve),e._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class ee{constructor(t,e,n,r,s,i,o,a,c,l,u){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=i,this.component=o,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=gt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=gt(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ne extends Kt{constructor(t,e){super(e),this.url=t,re(this,e)}toString(){return se(this._root)}}function re(t,e){e.value._routerState=t,e.children.forEach(e=>re(t,e))}function se(t){const e=t.children.length>0?` { ${t.children.map(se).join(", ")} } `:"";return`${t.value}${e}`}function ie(t){if(t.snapshot){const e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,vt(e.queryParams,n.queryParams)||t.queryParams.next(n.queryParams),e.fragment!==n.fragment&&t.fragment.next(n.fragment),vt(e.params,n.params)||t.params.next(n.params),function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!vt(t[n],e[n]))return!1;return!0}(e.url,n.url)||t.url.next(n.url),vt(e.data,n.data)||t.data.next(n.data)}else t.snapshot=t._futureSnapshot,t.data.next(t._futureSnapshot.data)}function oe(t,e){var n,r;return vt(t.params,e.params)&&jt(n=t.url,r=e.url)&&n.every((t,e)=>vt(t.parameters,r[e].parameters))&&!(!t.parent!=!e.parent)&&(!t.parent||oe(t.parent,e.parent))}function ae(t){return"object"==typeof t&&null!=t&&!t.outlets&&!t.segmentPath}function ce(t,e,n,r,s){let i={};return r&&Ct(r,(t,e)=>{i[e]=Array.isArray(t)?t.map(t=>""+t):""+t}),new Ot(n.root===t?e:function t(e,n,r){const s={};return Ct(e.children,(e,i)=>{s[i]=e===n?r:t(e,n,r)}),new kt(e.segments,s)}(n.root,t,e),i,s)}class le{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&ae(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(t=>"object"==typeof t&&null!=t&&t.outlets);if(r&&r!==St(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class ue{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}}function he(t){return"object"==typeof t&&null!=t&&t.outlets?t.outlets.primary:""+t}function de(t,e,n){if(t||(t=new kt([],{})),0===t.segments.length&&t.hasChildren())return fe(t,e,n);const r=function(t,e,n){let r=0,s=e;const i={match:!1,pathIndex:0,commandIndex:0};for(;s<t.segments.length;){if(r>=n.length)return i;const e=t.segments[s],o=he(n[r]),a=r<n.length-1?n[r+1]:null;if(s>0&&void 0===o)break;if(o&&a&&"object"==typeof a&&void 0===a.outlets){if(!ye(o,a,e))return i;r+=2}else{if(!ye(o,{},e))return i;r++}s++}return{match:!0,pathIndex:s,commandIndex:r}}(t,e,n),s=n.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){const e=new kt(t.segments.slice(0,r.pathIndex),{});return e.children.primary=new kt(t.segments.slice(r.pathIndex),t.children),fe(e,0,s)}return r.match&&0===s.length?new kt(t.segments,{}):r.match&&!t.hasChildren()?pe(t,e,n):r.match?fe(t,0,s):pe(t,e,n)}function fe(t,e,n){if(0===n.length)return new kt(t.segments,{});{const r=function(t){return"object"==typeof t[0]&&null!==t[0]&&t[0].outlets?t[0].outlets:{[pt]:t}}(n),s={};return Ct(r,(n,r)=>{null!==n&&(s[r]=de(t.children[r],e,n))}),Ct(t.children,(t,e)=>{void 0===r[e]&&(s[e]=t)}),new kt(t.segments,s)}}function pe(t,e,n){const r=t.segments.slice(0,e);let s=0;for(;s<n.length;){if("object"==typeof n[s]&&null!==n[s]&&void 0!==n[s].outlets){const t=me(n[s].outlets);return new kt(r,t)}if(0===s&&ae(n[0])){r.push(new Tt(t.segments[e].path,n[0])),s++;continue}const i=he(n[s]),o=s<n.length-1?n[s+1]:null;i&&o&&ae(o)?(r.push(new Tt(i,ge(o))),s+=2):(r.push(new Tt(i,{})),s++)}return new kt(r,{})}function me(t){const e={};return Ct(t,(t,n)=>{null!==t&&(e[n]=pe(new kt([],{}),0,t))}),e}function ge(t){const e={};return Ct(t,(t,n)=>e[n]=""+t),e}function ye(t,e,n){return t==n.path&&vt(e,n.parameters)}class be{constructor(t,e,n,r){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r}activate(t){const e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),ie(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){const r=Qt(e);t.children.forEach(t=>{const e=t.value.outlet;this.deactivateRoutes(t,r[e],n),delete r[e]}),Ct(r,(t,e)=>{this.deactivateRouteAndItsChildren(t,n)})}deactivateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(r===s)if(r.component){const s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(t,e,s.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){const n=e.getContext(t.value.outlet);if(n&&n.outlet){const e=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:e,route:t,contexts:r})}}deactivateRouteAndOutlet(t,e){const n=e.getContext(t.value.outlet);if(n){const r=Qt(t),s=t.value.component?n.children:e;Ct(r,(t,e)=>this.deactivateRouteAndItsChildren(t,s)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(t,e,n){const r=Qt(e);t.children.forEach(t=>{this.activateRoutes(t,r[t.value.outlet],n),this.forwardEvent(new dt(t.value.snapshot))}),t.children.length&&this.forwardEvent(new ut(t.value.snapshot))}activateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(ie(r),r===s)if(r.component){const s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,s.children)}else this.activateChildRoutes(t,e,n);else if(r.component){const e=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const t=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),e.children.onOutletReAttached(t.contexts),e.attachRef=t.componentRef,e.route=t.route.value,e.outlet&&e.outlet.attach(t.componentRef,t.route.value),ve(t.route)}else{const n=function(t){for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig;if(t&&t.component)return null}return null}(r.snapshot),s=n?n.module.componentFactoryResolver:null;e.attachRef=null,e.route=r,e.resolver=s,e.outlet&&e.outlet.activateWith(r,s),this.activateChildRoutes(t,null,e.children)}}else this.activateChildRoutes(t,null,n)}}function ve(t){ie(t.value),t.children.forEach(ve)}class _e{constructor(t,e){this.routes=t,this.module=e}}function we(t){return"function"==typeof t}function Se(t){return t instanceof Ot}class Ce{constructor(t){this.segmentGroup=t||null}}class Ee{constructor(t){this.urlTree=t}}function xe(t){return new c.a(e=>e.error(new Ce(t)))}function Oe(t){return new c.a(e=>e.error(new Ee(t)))}function ke(t){return new c.a(e=>e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))}class Te{constructor(t,e,n,r,i){this.configLoader=e,this.urlSerializer=n,this.urlTree=r,this.config=i,this.allowRedirects=!0,this.ngModule=t.get(s.x)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,pt).pipe(Object(p.a)(t=>this.createUrlTree(t,this.urlTree.queryParams,this.urlTree.fragment))).pipe(N(t=>{if(t instanceof Ee)return this.allowRedirects=!1,this.match(t.urlTree);if(t instanceof Ce)throw this.noMatchError(t);throw t}))}match(t){return this.expandSegmentGroup(this.ngModule,this.config,t.root,pt).pipe(Object(p.a)(e=>this.createUrlTree(e,t.queryParams,t.fragment))).pipe(N(t=>{if(t instanceof Ce)throw this.noMatchError(t);throw t}))}noMatchError(t){return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)}createUrlTree(t,e,n){const r=t.segments.length>0?new kt([],{[pt]:t}):t;return new Ot(r,e,n)}expandSegmentGroup(t,e,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(t,e,n).pipe(Object(p.a)(t=>new kt([],t))):this.expandSegment(t,n,e,n.segments,r,!0)}expandChildren(t,e,n){return function(t,e){if(0===Object.keys(t).length)return Object(i.a)({});const n=[],r=[],s={};return Ct(t,(t,i)=>{const o=e(i,t).pipe(Object(p.a)(t=>s[i]=t));i===pt?n.push(o):r.push(o)}),i.a.apply(null,n.concat(r)).pipe(Object(m.a)(),function(t,e){const n=arguments.length>=2;return r=>r.pipe(t?Object(g.a)((e,n)=>t(e,n,r)):j.a,v(1),n?O(e):S(()=>new l))}(),Object(p.a)(()=>s))}(n.children,(n,r)=>this.expandSegmentGroup(t,e,r,n))}expandSegment(t,e,n,r,s,o){return Object(i.a)(...n).pipe(Object(p.a)(a=>this.expandSegmentAgainstRoute(t,e,n,a,r,s,o).pipe(N(t=>{if(t instanceof Ce)return Object(i.a)(null);throw t}))),Object(m.a)(),M(t=>!!t),N((t,n)=>{if(t instanceof l||"EmptyError"===t.name){if(this.noLeftoversInUrl(e,r,s))return Object(i.a)(new kt([],{}));throw new Ce(e)}throw t}))}noLeftoversInUrl(t,e,n){return 0===e.length&&!t.children[n]}expandSegmentAgainstRoute(t,e,n,r,s,i,o){return Pe(r)!==i?xe(e):void 0===r.redirectTo?this.matchSegmentAgainstRoute(t,e,r,s):o&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i):xe(e)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,e,n,r){const s=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Oe(s):this.lineralizeSegments(n,s).pipe(Object(F.a)(n=>{const s=new kt(n,{});return this.expandSegment(t,s,e,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i){const{matched:o,consumedSegments:a,lastChild:c,positionalParamSegments:l}=je(e,r,s);if(!o)return xe(e);const u=this.applyRedirectCommands(a,r.redirectTo,l);return r.redirectTo.startsWith("/")?Oe(u):this.lineralizeSegments(r,u).pipe(Object(F.a)(r=>this.expandSegment(t,e,n,r.concat(s.slice(c)),i,!1)))}matchSegmentAgainstRoute(t,e,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(t.injector,n).pipe(Object(p.a)(t=>(n._loadedConfig=t,new kt(r,{})))):Object(i.a)(new kt(r,{}));const{matched:s,consumedSegments:o,lastChild:a}=je(e,n,r);if(!s)return xe(e);const c=r.slice(a);return this.getChildConfig(t,n,r).pipe(Object(F.a)(t=>{const n=t.module,r=t.routes,{segmentGroup:s,slicedSegments:a}=function(t,e,n,r){return n.length>0&&function(t,e,n){return n.some(n=>Ie(t,e,n)&&Pe(n)!==pt)}(t,n,r)?{segmentGroup:Ae(new kt(e,function(t,e){const n={};n.primary=e;for(const r of t)""===r.path&&Pe(r)!==pt&&(n[Pe(r)]=new kt([],{}));return n}(r,new kt(n,t.children)))),slicedSegments:[]}:0===n.length&&function(t,e,n){return n.some(n=>Ie(t,e,n))}(t,n,r)?{segmentGroup:Ae(new kt(t.segments,function(t,e,n,r){const s={};for(const i of n)Ie(t,e,i)&&!r[Pe(i)]&&(s[Pe(i)]=new kt([],{}));return Object.assign(Object.assign({},r),s)}(t,n,r,t.children))),slicedSegments:n}:{segmentGroup:t,slicedSegments:n}}(e,o,c,r);return 0===a.length&&s.hasChildren()?this.expandChildren(n,r,s).pipe(Object(p.a)(t=>new kt(o,t))):0===r.length&&0===a.length?Object(i.a)(new kt(o,{})):this.expandSegment(n,s,r,a,pt,!0).pipe(Object(p.a)(t=>new kt(o.concat(t.segments),t.children)))}))}getChildConfig(t,e,n){return e.children?Object(i.a)(new _e(e.children,t)):e.loadChildren?void 0!==e._loadedConfig?Object(i.a)(e._loadedConfig):this.runCanLoadGuards(t.injector,e,n).pipe(Object(F.a)(n=>n?this.configLoader.load(t.injector,e).pipe(Object(p.a)(t=>(e._loadedConfig=t,t))):function(t){return new c.a(e=>e.error(yt(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))}(e))):Object(i.a)(new _e([],t))}runCanLoadGuards(t,e,n){const r=e.canLoad;return r&&0!==r.length?Object(o.a)(r).pipe(Object(p.a)(r=>{const s=t.get(r);let i;if(function(t){return t&&we(t.canLoad)}(s))i=s.canLoad(e,n);else{if(!we(s))throw new Error("Invalid CanLoad guard");i=s(e,n)}return Et(i)})).pipe(Object(m.a)(),Object(H.a)(t=>{if(!Se(t))return;const e=yt(`Redirecting to "${this.urlSerializer.serialize(t)}"`);throw e.url=t,e}),(s=t=>!0===t,t=>t.lift(new z(s,void 0,t)))):Object(i.a)(!0);var s}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Object(i.a)(n);if(r.numberOfChildren>1||!r.children.primary)return ke(t.redirectTo);r=r.children.primary}}applyRedirectCommands(t,e,n){return this.applyRedirectCreatreUrlTree(e,this.urlSerializer.parse(e),t,n)}applyRedirectCreatreUrlTree(t,e,n,r){const s=this.createSegmentGroup(t,e.root,n,r);return new Ot(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){const n={};return Ct(t,(t,r)=>{if("string"==typeof t&&t.startsWith(":")){const s=t.substring(1);n[r]=e[s]}else n[r]=t}),n}createSegmentGroup(t,e,n,r){const s=this.createSegments(t,e.segments,n,r);let i={};return Ct(e.children,(e,s)=>{i[s]=this.createSegmentGroup(t,e,n,r)}),new kt(s,i)}createSegments(t,e,n,r){return e.map(e=>e.path.startsWith(":")?this.findPosParam(t,e,r):this.findOrReturn(e,n))}findPosParam(t,e,n){const r=n[e.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);return r}findOrReturn(t,e){let n=0;for(const r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}}function je(t,e,n){if(""===e.path)return"full"===e.pathMatch&&(t.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(e.matcher||bt)(n,t,e);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function Ae(t){if(1===t.numberOfChildren&&t.children.primary){const e=t.children.primary;return new kt(t.segments.concat(e.segments),e.children)}return t}function Ie(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function Pe(t){return t.outlet||pt}class Ne{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Re{constructor(t,e){this.component=t,this.route=e}}function De(t,e,n){const r=t._root;return function t(e,n,r,s,i={canDeactivateChecks:[],canActivateChecks:[]}){const o=Qt(n);return e.children.forEach(e=>{!function(e,n,r,s,i={canDeactivateChecks:[],canActivateChecks:[]}){const o=e.value,a=n?n.value:null,c=r?r.getContext(e.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){const l=function(t,e,n){if("function"==typeof n)return n(t,e);switch(n){case"pathParamsChange":return!jt(t.url,e.url);case"pathParamsOrQueryParamsChange":return!jt(t.url,e.url)||!vt(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!oe(t,e)||!vt(t.queryParams,e.queryParams);case"paramsChange":default:return!oe(t,e)}}(a,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Ne(s)):(o.data=a.data,o._resolvedData=a._resolvedData),t(e,n,o.component?c?c.children:null:r,s,i),l&&i.canDeactivateChecks.push(new Re(c&&c.outlet&&c.outlet.component||null,a))}else a&&Me(n,c,i),i.canActivateChecks.push(new Ne(s)),t(e,null,o.component?c?c.children:null:r,s,i)}(e,o[e.value.outlet],r,s.concat([e.value]),i),delete o[e.value.outlet]}),Ct(o,(t,e)=>Me(t,r.getContext(e),i)),i}(r,e?e._root:null,n,[r.value])}function Le(t,e,n){const r=function(t){if(!t)return null;for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig}return null}(e);return(r?r.module.injector:n).get(t)}function Me(t,e,n){const r=Qt(t),s=t.value;Ct(r,(t,r)=>{Me(t,s.component?e?e.children.getContext(r):null:e,n)}),n.canDeactivateChecks.push(new Re(s.component&&e&&e.outlet&&e.outlet.isActivated?e.outlet.component:null,s))}const Fe=Symbol("INITIAL_VALUE");function He(){return Object(V.a)(t=>Object(u.a)(...t.map(t=>t.pipe(Object(L.a)(1),Object($.a)(Fe)))).pipe(function(t,e){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new B(t,e,n))}}((t,e)=>{let n=!1;return e.reduce((t,r,s)=>{if(t!==Fe)return t;if(r===Fe&&(n=!0),!n){if(!1===r)return r;if(s===e.length-1||Se(r))return r}return t},t)},Fe),Object(g.a)(t=>t!==Fe),Object(p.a)(t=>Se(t)?t:!0===t),Object(L.a)(1)))}function ze(t,e){return null!==t&&e&&e(new ht(t)),Object(i.a)(!0)}function Ue(t,e){return null!==t&&e&&e(new lt(t)),Object(i.a)(!0)}function Ve(t,e,n){const r=e.routeConfig?e.routeConfig.canActivate:null;if(!r||0===r.length)return Object(i.a)(!0);const s=r.map(r=>Object(h.a)(()=>{const s=Le(r,e,n);let i;if(function(t){return t&&we(t.canActivate)}(s))i=Et(s.canActivate(e,t));else{if(!we(s))throw new Error("Invalid CanActivate guard");i=Et(s(e,t))}return i.pipe(M())}));return Object(i.a)(s).pipe(He())}function $e(t,e,n){const r=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(t=>function(t){const e=t.routeConfig?t.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:t,guards:e}:null}(t)).filter(t=>null!==t).map(e=>Object(h.a)(()=>{const s=e.guards.map(s=>{const i=Le(s,e.node,n);let o;if(function(t){return t&&we(t.canActivateChild)}(i))o=Et(i.canActivateChild(r,t));else{if(!we(i))throw new Error("Invalid CanActivateChild guard");o=Et(i(r,t))}return o.pipe(M())});return Object(i.a)(s).pipe(He())}));return Object(i.a)(s).pipe(He())}class Be{}class qe{constructor(t,e,n,r,s,i){this.rootComponentType=t,this.config=e,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=i}recognize(){try{const t=We(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,e=this.processSegmentGroup(this.config,t,pt),n=new ee([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},pt,this.rootComponentType,null,this.urlTree.root,-1,{}),r=new Xt(n,e),s=new ne(this.url,r);return this.inheritParamsAndData(s._root),Object(i.a)(s)}catch(t){return new c.a(e=>e.error(t))}}inheritParamsAndData(t){const e=t.value,n=te(e,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),t.children.forEach(t=>this.inheritParamsAndData(t))}processSegmentGroup(t,e,n){return 0===e.segments.length&&e.hasChildren()?this.processChildren(t,e):this.processSegment(t,e,e.segments,n)}processChildren(t,e){const n=At(e,(e,n)=>this.processSegmentGroup(t,e,n));return function(t){const e={};t.forEach(t=>{const n=e[t.value.outlet];if(n){const e=n.url.map(t=>t.toString()).join("/"),r=t.value.url.map(t=>t.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`)}e[t.value.outlet]=t.value})}(n),n.sort((t,e)=>t.value.outlet===pt?-1:e.value.outlet===pt?1:t.value.outlet.localeCompare(e.value.outlet)),n}processSegment(t,e,n,r){for(const i of t)try{return this.processSegmentAgainstRoute(i,e,n,r)}catch(s){if(!(s instanceof Be))throw s}if(this.noLeftoversInUrl(e,n,r))return[];throw new Be}noLeftoversInUrl(t,e,n){return 0===e.length&&!t.children[n]}processSegmentAgainstRoute(t,e,n,r){if(t.redirectTo)throw new Be;if((t.outlet||pt)!==r)throw new Be;let s,i=[],o=[];if("**"===t.path){const i=n.length>0?St(n).parameters:{};s=new ee(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ze(t),r,t.component,t,Ke(e),Ge(e)+n.length,Ye(t))}else{const a=function(t,e,n){if(""===e.path){if("full"===e.pathMatch&&(t.hasChildren()||n.length>0))throw new Be;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(e.matcher||bt)(n,t,e);if(!r)throw new Be;const s={};Ct(r.posParams,(t,e)=>{s[e]=t.path});const i=r.consumed.length>0?Object.assign(Object.assign({},s),r.consumed[r.consumed.length-1].parameters):s;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:i}}(e,t,n);i=a.consumedSegments,o=n.slice(a.lastChild),s=new ee(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ze(t),r,t.component,t,Ke(e),Ge(e)+i.length,Ye(t))}const a=function(t){return t.children?t.children:t.loadChildren?t._loadedConfig.routes:[]}(t),{segmentGroup:c,slicedSegments:l}=We(e,i,o,a,this.relativeLinkResolution);if(0===l.length&&c.hasChildren()){const t=this.processChildren(a,c);return[new Xt(s,t)]}if(0===a.length&&0===l.length)return[new Xt(s,[])];const u=this.processSegment(a,c,l,pt);return[new Xt(s,u)]}}function Ke(t){let e=t;for(;e._sourceSegment;)e=e._sourceSegment;return e}function Ge(t){let e=t,n=e._segmentIndexShift?e._segmentIndexShift:0;for(;e._sourceSegment;)e=e._sourceSegment,n+=e._segmentIndexShift?e._segmentIndexShift:0;return n-1}function We(t,e,n,r,s){if(n.length>0&&function(t,e,n){return n.some(n=>Xe(t,e,n)&&Qe(n)!==pt)}(t,n,r)){const s=new kt(e,function(t,e,n,r){const s={};s.primary=r,r._sourceSegment=t,r._segmentIndexShift=e.length;for(const i of n)if(""===i.path&&Qe(i)!==pt){const n=new kt([],{});n._sourceSegment=t,n._segmentIndexShift=e.length,s[Qe(i)]=n}return s}(t,e,r,new kt(n,t.children)));return s._sourceSegment=t,s._segmentIndexShift=e.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function(t,e,n){return n.some(n=>Xe(t,e,n))}(t,n,r)){const i=new kt(t.segments,function(t,e,n,r,s,i){const o={};for(const a of r)if(Xe(t,n,a)&&!s[Qe(a)]){const n=new kt([],{});n._sourceSegment=t,n._segmentIndexShift="legacy"===i?t.segments.length:e.length,o[Qe(a)]=n}return Object.assign(Object.assign({},s),o)}(t,e,n,r,t.children,s));return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:n}}const i=new kt(t.segments,t.children);return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:n}}function Xe(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function Qe(t){return t.outlet||pt}function Ze(t){return t.data||{}}function Ye(t){return t.resolve||{}}function Je(t){return function(e){return e.pipe(Object(V.a)(e=>{const n=t(e);return n?Object(o.a)(n).pipe(Object(p.a)(()=>e)):Object(o.a)([e])}))}}class tn{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}}let en=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,e){1&t&&s.Lb(0,"router-outlet")},directives:function(){return[_n]},encapsulation:2}),t})();function nn(t,e=""){for(let n=0;n<t.length;n++){const r=t[n];rn(r,sn(e,r))}}function rn(t,e){if(!t)throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(t))throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);if(!t.component&&!t.children&&!t.loadChildren&&t.outlet&&t.outlet!==pt)throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);if(t.redirectTo&&t.children)throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);if(t.redirectTo&&t.loadChildren)throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);if(t.children&&t.loadChildren)throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);if(t.redirectTo&&t.component)throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);if(t.path&&t.matcher)throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);if(void 0===t.redirectTo&&!t.component&&!t.children&&!t.loadChildren)throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===t.path&&void 0===t.matcher)throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);if("string"==typeof t.path&&"/"===t.path.charAt(0))throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);if(""===t.path&&void 0!==t.redirectTo&&void 0===t.pathMatch)throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==t.pathMatch&&"full"!==t.pathMatch&&"prefix"!==t.pathMatch)throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);t.children&&nn(t.children,e)}function sn(t,e){return e?t||e.path?t&&!e.path?t+"/":!t&&e.path?e.path:`${t}/${e.path}`:"":t}function on(t){const e=t.children&&t.children.map(on),n=e?Object.assign(Object.assign({},t),{children:e}):Object.assign({},t);return!n.component&&(e||n.loadChildren)&&n.outlet&&n.outlet!==pt&&(n.component=en),n}const an=new s.q("ROUTES");class cn{constructor(t,e,n,r){this.loader=t,this.compiler=e,this.onLoadStartListener=n,this.onLoadEndListener=r}load(t,e){return this.onLoadStartListener&&this.onLoadStartListener(e),this.loadModuleFactory(e.loadChildren).pipe(Object(p.a)(n=>{this.onLoadEndListener&&this.onLoadEndListener(e);const r=n.create(t);return new _e(wt(r.injector.get(an)).map(on),r)}))}loadModuleFactory(t){return"string"==typeof t?Object(o.a)(this.loader.load(t)):Et(t()).pipe(Object(F.a)(t=>t instanceof s.v?Object(i.a)(t):Object(o.a)(this.compiler.compileModuleAsync(t))))}}class ln{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new un,this.attachRef=null}}class un{constructor(){this.contexts=new Map}onChildOutletCreated(t,e){const n=this.getOrCreateContext(t);n.outlet=e,this.contexts.set(t,n)}onChildOutletDestroyed(t){const e=this.getContext(t);e&&(e.outlet=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new ln,this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}}class hn{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}}function dn(t){throw t}function fn(t,e,n){return e.parse("/")}function pn(t,e){return Object(i.a)(null)}let mn=(()=>{class t{constructor(t,e,n,r,i,o,c,l){this.rootComponentType=t,this.urlSerializer=e,this.rootContexts=n,this.location=r,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new f.a,this.errorHandler=dn,this.malformedUriErrorHandler=fn,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:pn,afterPreactivation:pn},this.urlHandlingStrategy=new hn,this.routeReuseStrategy=new tn,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=i.get(s.x),this.console=i.get(s.W);const u=i.get(s.z);this.isNgZoneEnabled=u instanceof s.z,this.resetConfig(l),this.currentUrlTree=new Ot(new kt([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new cn(o,c,t=>this.triggerEvent(new at(t)),t=>this.triggerEvent(new ct(t))),this.routerState=Yt(this.currentUrlTree,this.rootComponentType),this.transitions=new a.a({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(t){const e=this.events;return t.pipe(Object(g.a)(t=>0!==t.id),Object(p.a)(t=>Object.assign(Object.assign({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl)})),Object(V.a)(t=>{let n=!1,r=!1;return Object(i.a)(t).pipe(Object(H.a)(t=>{this.currentNavigation={id:t.id,initialUrl:t.currentRawUrl,extractedUrl:t.extractedUrl,trigger:t.source,extras:t.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Object(V.a)(t=>{const n=!this.navigated||t.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))return Object(i.a)(t).pipe(Object(V.a)(t=>{const n=this.transitions.getValue();return e.next(new Y(t.id,this.serializeUrl(t.extractedUrl),t.source,t.restoredState)),n!==this.transitions.getValue()?d.a:[t]}),Object(V.a)(t=>Promise.resolve(t)),(r=this.ngModule.injector,s=this.configLoader,o=this.urlSerializer,a=this.config,function(t){return t.pipe(Object(V.a)(t=>function(t,e,n,r,s){return new Te(t,e,n,r,s).apply()}(r,s,o,t.extractedUrl,a).pipe(Object(p.a)(e=>Object.assign(Object.assign({},t),{urlAfterRedirects:e})))))}),Object(H.a)(t=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:t.urlAfterRedirects})}),function(t,e,n,r,s){return function(i){return i.pipe(Object(F.a)(i=>function(t,e,n,r,s="emptyOnly",i="legacy"){return new qe(t,e,n,r,s,i).recognize()}(t,e,i.urlAfterRedirects,n(i.urlAfterRedirects),r,s).pipe(Object(p.a)(t=>Object.assign(Object.assign({},i),{targetSnapshot:t})))))}}(this.rootComponentType,this.config,t=>this.serializeUrl(t),this.paramsInheritanceStrategy,this.relativeLinkResolution),Object(H.a)(t=>{"eager"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(t.urlAfterRedirects,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),Object(H.a)(t=>{const n=new nt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);e.next(n)}));var r,s,o,a;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:s,restoredState:o,extras:a}=t,c=new Y(n,this.serializeUrl(r),s,o);e.next(c);const l=Yt(r,this.rootComponentType).snapshot;return Object(i.a)(Object.assign(Object.assign({},t),{targetSnapshot:l,urlAfterRedirects:r,extras:Object.assign(Object.assign({},a),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=t.rawUrl,this.browserUrlTree=t.urlAfterRedirects,t.resolve(null),d.a}),Je(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:i,replaceUrl:o}}=t;return this.hooks.beforePreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!i,replaceUrl:!!o})}),Object(H.a)(t=>{const e=new rt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),Object(p.a)(t=>Object.assign(Object.assign({},t),{guards:De(t.targetSnapshot,t.currentSnapshot,this.rootContexts)})),function(t,e){return function(n){return n.pipe(Object(F.a)(n=>{const{targetSnapshot:r,currentSnapshot:s,guards:{canActivateChecks:a,canDeactivateChecks:c}}=n;return 0===c.length&&0===a.length?Object(i.a)(Object.assign(Object.assign({},n),{guardsResult:!0})):function(t,e,n,r){return Object(o.a)(t).pipe(Object(F.a)(t=>function(t,e,n,r,s){const o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||0===o.length)return Object(i.a)(!0);const a=o.map(i=>{const o=Le(i,e,s);let a;if(function(t){return t&&we(t.canDeactivate)}(o))a=Et(o.canDeactivate(t,e,n,r));else{if(!we(o))throw new Error("Invalid CanDeactivate guard");a=Et(o(t,e,n,r))}return a.pipe(M())});return Object(i.a)(a).pipe(He())}(t.component,t.route,n,e,r)),M(t=>!0!==t,!0))}(c,r,s,t).pipe(Object(F.a)(n=>n&&"boolean"==typeof n?function(t,e,n,r){return Object(o.a)(e).pipe(Object(K.a)(e=>Object(o.a)([Ue(e.route.parent,r),ze(e.route,r),$e(t,e.path,n),Ve(t,e.route,n)]).pipe(Object(m.a)(),M(t=>!0!==t,!0))),M(t=>!0!==t,!0))}(r,a,t,e):Object(i.a)(n)),Object(p.a)(t=>Object.assign(Object.assign({},n),{guardsResult:t})))}))}}(this.ngModule.injector,t=>this.triggerEvent(t)),Object(H.a)(t=>{if(Se(t.guardsResult)){const e=yt(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);throw e.url=t.guardsResult,e}}),Object(H.a)(t=>{const e=new st(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot,!!t.guardsResult);this.triggerEvent(e)}),Object(g.a)(t=>{if(!t.guardsResult){this.resetUrlToCurrentUrlTree();const n=new tt(t.id,this.serializeUrl(t.extractedUrl),"");return e.next(n),t.resolve(!1),!1}return!0}),Je(t=>{if(t.guards.canActivateChecks.length)return Object(i.a)(t).pipe(Object(H.a)(t=>{const e=new it(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),Object(V.a)(t=>{let n=!1;return Object(i.a)(t).pipe((r=this.paramsInheritanceStrategy,s=this.ngModule.injector,function(t){return t.pipe(Object(F.a)(t=>{const{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return Object(i.a)(t);let a=0;return Object(o.a)(n).pipe(Object(K.a)(t=>function(t,e,n,r){return function(t,e,n,r){const s=Object.keys(t);if(0===s.length)return Object(i.a)({});const a={};return Object(o.a)(s).pipe(Object(F.a)(s=>function(t,e,n,r){const s=Le(t,e,r);return Et(s.resolve?s.resolve(e,n):s(e,n))}(t[s],e,n,r).pipe(Object(H.a)(t=>{a[s]=t}))),v(1),Object(F.a)(()=>Object.keys(a).length===s.length?Object(i.a)(a):d.a))}(t._resolve,t,e,r).pipe(Object(p.a)(e=>(t._resolvedData=e,t.data=Object.assign(Object.assign({},t.data),te(t,n).resolve),null)))}(t.route,e,r,s)),Object(H.a)(()=>a++),v(1),Object(F.a)(e=>a===n.length?Object(i.a)(t):d.a))}))}),Object(H.a)({next:()=>n=!0,complete:()=>{if(!n){const n=new tt(t.id,this.serializeUrl(t.extractedUrl),"At least one route resolver didn't emit any value.");e.next(n),t.resolve(!1)}}}));var r,s}),Object(H.a)(t=>{const e=new ot(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}))}),Je(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:i,replaceUrl:o}}=t;return this.hooks.afterPreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!i,replaceUrl:!!o})}),Object(p.a)(t=>{const e=function(t,e,n){const r=function t(e,n,r){if(r&&e.shouldReuseRoute(n.value,r.value.snapshot)){const s=r.value;s._futureSnapshot=n.value;const i=function(e,n,r){return n.children.map(n=>{for(const s of r.children)if(e.shouldReuseRoute(s.value.snapshot,n.value))return t(e,n,s);return t(e,n)})}(e,n,r);return new Xt(s,i)}{const r=e.retrieve(n.value);if(r){const t=r.route;return function t(e,n){if(e.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(e.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=e.value;for(let r=0;r<e.children.length;++r)t(e.children[r],n.children[r])}(n,t),t}{const r=new Jt(new a.a((s=n.value).url),new a.a(s.params),new a.a(s.queryParams),new a.a(s.fragment),new a.a(s.data),s.outlet,s.component,s),i=n.children.map(n=>t(e,n));return new Xt(r,i)}}var s}(t,e._root,n?n._root:void 0);return new Zt(r,e)}(this.routeReuseStrategy,t.targetSnapshot,t.currentRouterState);return Object.assign(Object.assign({},t),{targetRouterState:e})}),Object(H.a)(t=>{this.currentUrlTree=t.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl),this.routerState=t.targetRouterState,"deferred"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),(c=this.rootContexts,l=this.routeReuseStrategy,u=t=>this.triggerEvent(t),Object(p.a)(t=>(new be(l,t.targetRouterState,t.currentRouterState,u).activate(c),t))),Object(H.a)({next(){n=!0},complete(){n=!0}}),(s=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new tt(t.id,this.serializeUrl(t.extractedUrl),`Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);e.next(n),t.resolve(!1)}this.currentNavigation=null},t=>t.lift(new W(s))),N(n=>{if(r=!0,(s=n)&&s.ngNavigationCancelingError){const r=Se(n.url);r||(this.navigated=!0,this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl));const s=new tt(t.id,this.serializeUrl(t.extractedUrl),n.message);e.next(s),r?setTimeout(()=>{const e=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(e,"imperative",null,{skipLocationChange:t.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:t.resolve,reject:t.reject,promise:t.promise})},0):t.resolve(!1)}else{this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl);const r=new et(t.id,this.serializeUrl(t.extractedUrl),n);e.next(r);try{t.resolve(this.errorHandler(n))}catch(i){t.reject(i)}}var s;return d.a}));var s,c,l,u}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}getTransition(){const t=this.transitions.value;return t.urlAfterRedirects=this.browserUrlTree,t}setTransition(t){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),t))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{let e=this.parseUrl(t.url);const n="popstate"===t.type?"popstate":"hashchange",r=t.state&&t.state.navigationId?t.state:null;setTimeout(()=>{this.scheduleNavigation(e,n,r,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){nn(t),this.config=t.map(on),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(t,e={}){const{relativeTo:n,queryParams:r,fragment:i,preserveQueryParams:o,queryParamsHandling:a,preserveFragment:c}=e;Object(s.T)()&&o&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const l=n||this.routerState.root,u=c?this.currentUrlTree.fragment:i;let h=null;if(a)switch(a){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=r||null}else h=o?this.currentUrlTree.queryParams:r||null;return null!==h&&(h=this.removeEmptyProps(h)),function(t,e,n,r,s){if(0===n.length)return ce(e.root,e.root,e,r,s);const i=function(t){if("string"==typeof t[0]&&1===t.length&&"/"===t[0])return new le(!0,0,t);let e=0,n=!1;const r=t.reduce((t,r,s)=>{if("object"==typeof r&&null!=r){if(r.outlets){const e={};return Ct(r.outlets,(t,n)=>{e[n]="string"==typeof t?t.split("/"):t}),[...t,{outlets:e}]}if(r.segmentPath)return[...t,r.segmentPath]}return"string"!=typeof r?[...t,r]:0===s?(r.split("/").forEach((r,s)=>{0==s&&"."===r||(0==s&&""===r?n=!0:".."===r?e++:""!=r&&t.push(r))}),t):[...t,r]},[]);return new le(n,e,r)}(n);if(i.toRoot())return ce(e.root,new kt([],{}),e,r,s);const o=function(t,e,n){if(t.isAbsolute)return new ue(e.root,!0,0);if(-1===n.snapshot._lastPathIndex){const t=n.snapshot._urlSegment;return new ue(t,t===e.root,0)}const r=ae(t.commands[0])?0:1;return function(t,e,n){let r=t,s=e,i=n;for(;i>s;){if(i-=s,r=r.parent,!r)throw new Error("Invalid number of '../'");s=r.segments.length}return new ue(r,!1,s-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,t.numberOfDoubleDots)}(i,e,t),a=o.processChildren?fe(o.segmentGroup,o.index,i.commands):de(o.segmentGroup,o.index,i.commands);return ce(o.segmentGroup,a,e,r,s)}(l,this.currentUrlTree,t,h,u)}navigateByUrl(t,e={skipLocationChange:!1}){Object(s.T)()&&this.isNgZoneEnabled&&!s.z.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=Se(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,e)}navigate(t,e={skipLocationChange:!1}){return function(t){for(let e=0;e<t.length;e++){const n=t[e];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${e}`)}}(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let e;try{e=this.urlSerializer.parse(t)}catch(n){e=this.malformedUriErrorHandler(n,this.urlSerializer,t)}return e}isActive(t,e){if(Se(t))return xt(this.currentUrlTree,t,e);const n=this.parseUrl(t);return xt(this.currentUrlTree,n,e)}removeEmptyProps(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null!=r&&(e[n]=r),e},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.events.next(new J(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,t.resolve(!0)},t=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(t,e,n,r,s){const i=this.getTransition();if(i&&"imperative"!==e&&"imperative"===i.source&&i.rawUrl.toString()===t.toString())return Promise.resolve(!0);if(i&&"hashchange"==e&&"popstate"===i.source&&i.rawUrl.toString()===t.toString())return Promise.resolve(!0);if(i&&"popstate"==e&&"hashchange"===i.source&&i.rawUrl.toString()===t.toString())return Promise.resolve(!0);let o,a,c;s?(o=s.resolve,a=s.reject,c=s.promise):c=new Promise((t,e)=>{o=t,a=e});const l=++this.navigationId;return this.setTransition({id:l,source:e,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:r,resolve:o,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(t=>Promise.reject(t))}setBrowserUrl(t,e,n,r){const s=this.urlSerializer.serialize(t);r=r||{},this.location.isCurrentPathEqualTo(s)||e?this.location.replaceState(s,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(s,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(t,e,n){this.routerState=t,this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(s.M),s.Xb(It),s.Xb(un),s.Xb(r.h),s.Xb(s.r),s.Xb(s.w),s.Xb(s.i),s.Xb(void 0))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})(),gn=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.route=e,this.commands=[],this.onChanges=new f.a,null==n&&r.setAttribute(s.nativeElement,"tabindex","0")}ngOnChanges(t){this.onChanges.next(this)}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}set preserveQueryParams(t){Object(s.T)()&&console&&console.warn&&console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."),this.preserve=t}onClick(){const t={skipLocationChange:bn(this.skipLocationChange),replaceUrl:bn(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,t),!0}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,preserveQueryParams:bn(this.preserve),queryParamsHandling:this.queryParamsHandling,preserveFragment:bn(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(mn),s.Kb(Jt),s.Yb("tabindex"),s.Kb(s.D),s.Kb(s.l))},t.\u0275dir=s.Fb({type:t,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(t,e){1&t&&s.ac("click",(function(){return e.onClick()}))},inputs:{routerLink:"routerLink",preserveQueryParams:"preserveQueryParams",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state"},features:[s.vb]}),t})(),yn=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.locationStrategy=n,this.commands=[],this.onChanges=new f.a,this.subscription=t.events.subscribe(t=>{t instanceof J&&this.updateTargetUrlAndHref()})}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}set preserveQueryParams(t){Object(s.T)()&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."),this.preserve=t}ngOnChanges(t){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(t,e,n,r){if(0!==t||e||n||r)return!0;if("string"==typeof this.target&&"_self"!=this.target)return!0;const s={skipLocationChange:bn(this.skipLocationChange),replaceUrl:bn(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,s),!1}updateTargetUrlAndHref(){this.href=this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,preserveQueryParams:bn(this.preserve),queryParamsHandling:this.queryParamsHandling,preserveFragment:bn(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(mn),s.Kb(Jt),s.Kb(r.i))},t.\u0275dir=s.Fb({type:t,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(t,e){1&t&&s.ac("click",(function(t){return e.onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)})),2&t&&(s.Sb("href",e.href,s.uc),s.yb("target",e.target))},inputs:{routerLink:"routerLink",preserveQueryParams:"preserveQueryParams",target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state"},features:[s.vb]}),t})();function bn(t){return""===t||!!t}let vn=(()=>{class t{constructor(t,e,n,r,s,i){this.router=t,this.element=e,this.renderer=n,this.cdr=r,this.link=s,this.linkWithHref=i,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.routerEventsSubscription=t.events.subscribe(t=>{t instanceof J&&this.update()})}ngAfterContentInit(){Object(o.a)([this.links.changes,this.linksWithHrefs.changes,Object(i.a)(null)]).pipe(Object(Q.a)()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){var t;null===(t=this.linkInputChangesSubscription)||void 0===t||t.unsubscribe();const e=[...this.links.toArray(),...this.linksWithHrefs.toArray(),this.link,this.linkWithHref].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=Object(o.a)(e).pipe(Object(Q.a)()).subscribe(t=>{this.isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(t){const e=Array.isArray(t)?t:t.split(" ");this.classes=e.filter(t=>!!t)}ngOnChanges(t){this.update()}ngOnDestroy(){var t;this.routerEventsSubscription.unsubscribe(),null===(t=this.linkInputChangesSubscription)||void 0===t||t.unsubscribe()}update(){this.links&&this.linksWithHrefs&&this.router.navigated&&Promise.resolve().then(()=>{const t=this.hasActiveLinks();this.isActive!==t&&(this.isActive=t,this.cdr.markForCheck(),this.classes.forEach(e=>{t?this.renderer.addClass(this.element.nativeElement,e):this.renderer.removeClass(this.element.nativeElement,e)}))})}isLinkActive(t){return e=>t.isActive(e.urlTree,this.routerLinkActiveOptions.exact)}hasActiveLinks(){const t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.linkWithHref&&t(this.linkWithHref)||this.links.some(t)||this.linksWithHrefs.some(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(mn),s.Kb(s.l),s.Kb(s.D),s.Kb(s.h),s.Kb(gn,8),s.Kb(yn,8))},t.\u0275dir=s.Fb({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(t,e,n){var r;1&t&&(s.Db(n,gn,!0),s.Db(n,yn,!0)),2&t&&(s.pc(r=s.bc())&&(e.links=r),s.pc(r=s.bc())&&(e.linksWithHrefs=r))},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",routerLinkActive:"routerLinkActive"},exportAs:["routerLinkActive"],features:[s.vb]}),t})(),_n=(()=>{class t{constructor(t,e,n,r,i){this.parentContexts=t,this.location=e,this.resolver=n,this.changeDetector=i,this.activated=null,this._activatedRoute=null,this.activateEvents=new s.n,this.deactivateEvents=new s.n,this.name=r||pt,t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=t;const n=(e=e||this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,s=new wn(t,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,s),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(un),s.Kb(s.O),s.Kb(s.j),s.Yb("name"),s.Kb(s.h))},t.\u0275dir=s.Fb({type:t,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),t})();class wn{constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===Jt?this.route:t===un?this.childContexts:this.parent.get(t,e)}}class Sn{}class Cn{preload(t,e){return Object(i.a)(null)}}let En=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=new cn(e,n,e=>t.triggerEvent(new at(e)),e=>t.triggerEvent(new ct(e)))}setUpPreloading(){this.subscription=this.router.events.pipe(Object(g.a)(t=>t instanceof J),Object(K.a)(()=>this.preload())).subscribe(()=>{})}preload(){const t=this.injector.get(s.x);return this.processRoutes(t,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,e){const n=[];for(const r of e)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const t=r._loadedConfig;n.push(this.processRoutes(t.module,t.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(t,r)):r.children&&n.push(this.processRoutes(t,r.children));return Object(o.a)(n).pipe(Object(Q.a)(),Object(p.a)(t=>{}))}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>this.loader.load(t.injector,e).pipe(Object(F.a)(t=>(e._loadedConfig=t,this.processRoutes(t.module,t.routes)))))}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(mn),s.Xb(s.w),s.Xb(s.i),s.Xb(s.r),s.Xb(Sn))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})(),xn=(()=>{class t{constructor(t,e,n={}){this.router=t,this.viewportScroller=e,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof Y?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof J&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof ft&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,e){this.router.triggerEvent(new ft(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,e))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(mn),s.Xb(r.u),s.Xb(void 0))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})();const On=new s.q("ROUTER_CONFIGURATION"),kn=new s.q("ROUTER_FORROOT_GUARD"),Tn=[r.h,{provide:It,useClass:Pt},{provide:mn,useFactory:function(t,e,n,s,i,o,a,c={},l,u){const h=new mn(null,t,e,n,s,i,o,wt(a));if(l&&(h.urlHandlingStrategy=l),u&&(h.routeReuseStrategy=u),c.errorHandler&&(h.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(h.malformedUriErrorHandler=c.malformedUriErrorHandler),c.enableTracing){const t=Object(r.C)();h.events.subscribe(e=>{t.logGroup("Router Event: "+e.constructor.name),t.log(e.toString()),t.log(e),t.logGroupEnd()})}return c.onSameUrlNavigation&&(h.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.urlUpdateStrategy&&(h.urlUpdateStrategy=c.urlUpdateStrategy),c.relativeLinkResolution&&(h.relativeLinkResolution=c.relativeLinkResolution),h},deps:[It,un,r.h,s.r,s.w,s.i,an,On,[class{},new s.A],[class{},new s.A]]},un,{provide:Jt,useFactory:function(t){return t.routerState.root},deps:[mn]},{provide:s.w,useClass:s.J},En,Cn,class{preload(t,e){return e().pipe(N(()=>Object(i.a)(null)))}},{provide:On,useValue:{enableTracing:!1}}];function jn(){return new s.y("Router",mn)}let An=(()=>{class t{constructor(t,e){}static forRoot(e,n){return{ngModule:t,providers:[Tn,Rn(e),{provide:kn,useFactory:Nn,deps:[[mn,new s.A,new s.I]]},{provide:On,useValue:n||{}},{provide:r.i,useFactory:Pn,deps:[r.s,[new s.p(r.a),new s.A],On]},{provide:xn,useFactory:In,deps:[mn,r.u,On]},{provide:Sn,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Cn},{provide:s.y,multi:!0,useFactory:jn},[Dn,{provide:s.d,multi:!0,useFactory:Ln,deps:[Dn]},{provide:Fn,useFactory:Mn,deps:[Dn]},{provide:s.b,multi:!0,useExisting:Fn}]]}}static forChild(e){return{ngModule:t,providers:[Rn(e)]}}}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)(s.Xb(kn,8),s.Xb(mn,8))}}),t})();function In(t,e,n){return n.scrollOffset&&e.setOffset(n.scrollOffset),new xn(t,e,n)}function Pn(t,e,n={}){return n.useHash?new r.f(t,e):new r.q(t,e)}function Nn(t){if(t)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function Rn(t){return[{provide:s.a,multi:!0,useValue:t},{provide:an,multi:!0,useValue:t}]}let Dn=(()=>{class t{constructor(t){this.injector=t,this.initNavigation=!1,this.resultOfPreactivationDone=new f.a}appInitializer(){return this.injector.get(r.g,Promise.resolve(null)).then(()=>{let t=null;const e=new Promise(e=>t=e),n=this.injector.get(mn),r=this.injector.get(On);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))t(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),t(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?Object(i.a)(null):(this.initNavigation=!0,t(!0),this.resultOfPreactivationDone),n.initialNavigation()}return e})}bootstrapListener(t){const e=this.injector.get(On),n=this.injector.get(En),r=this.injector.get(xn),i=this.injector.get(mn),o=this.injector.get(s.g);t===o.components[0]&&(this.isLegacyEnabled(e)?i.initialNavigation():this.isLegacyDisabled(e)&&i.setUpLocationChangeListener(),n.setUpPreloading(),r.init(),i.resetRootComponentType(o.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(t){return"legacy_enabled"===t.initialNavigation||!0===t.initialNavigation||void 0===t.initialNavigation}isLegacyDisabled(t){return"legacy_disabled"===t.initialNavigation||!1===t.initialNavigation}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(s.r))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})();function Ln(t){return t.appInitializer.bind(t)}function Mn(t){return t.bootstrapListener.bind(t)}const Fn=new s.q("Router Initializer")},vkgz:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("7o/Q"),s=n("KqfI"),i=n("n6bG");function o(t,e,n){return function(r){return r.lift(new a(t,e,n))}}class a{constructor(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}call(t,e){return e.subscribe(new c(t,this.nextOrObserver,this.error,this.complete))}}class c extends r.a{constructor(t,e,n,r){super(t),this._tapNext=s.a,this._tapError=s.a,this._tapComplete=s.a,this._tapError=n||s.a,this._tapComplete=r||s.a,Object(i.a)(e)?(this._context=this,this._tapNext=e):e&&(this._context=e,this._tapNext=e.next||s.a,this._tapError=e.error||s.a,this._tapComplete=e.complete||s.a)}_next(t){try{this._tapNext.call(this._context,t)}catch(e){return void this.destination.error(e)}this.destination.next(t)}_error(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)}_complete(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()}}},w1tV:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("XNiG"),s=n("HDdC"),i=n("7o/Q"),o=n("quSY");function a(){return function(t){return t.lift(new c(t))}}class c{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new l(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class l extends i.a{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class u extends s.a{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new o.a,t.add(this.source.subscribe(new d(this.getSubject(),this))),t.closed&&(this._connection=null,t=o.a.EMPTY)),t}refCount(){return a()(this)}}const h=(()=>{const t=u.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class d extends r.b{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function f(){return new r.a}function p(){return t=>{return a()((e=f,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,h);return r.source=t,r.subjectFactory=n,r})(t));var e}}},wr6Y:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("XNiG"),s=n("fXoL");const i="ANNOUNCEMENT_SEEN";let o=(()=>{class t{constructor(){this.topBannerCloseBtnClicked$=new r.a,this.topBannerCloseBtnClicked=!1}announcementSeen(){return Boolean(localStorage.getItem(i))}setAnnouncementSeen(){localStorage.setItem(i,JSON.stringify(!0))}onClickTopBannerCloseBtn(){this.topBannerCloseBtnClicked=!0,this.topBannerCloseBtnClicked$.next(!0)}getTopBannerCloseBtnClickedObs(){return this.topBannerCloseBtnClicked$.asObservable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},yCtX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("HDdC"),s=n("ngJS"),i=n("jZKg");function o(t,e){return e?Object(i.a)(t,e):new r.a(Object(s.a)(t))}},"z+Ro":function(t,e,n){"use strict";function r(t){return t&&"function"==typeof t.schedule}n.d(e,"a",(function(){return r}))},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),s=n("AytR"),i=n("ZvWg"),o=n("sYmb"),a=n("1kSV"),c=n("ofXK");let l=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[c.b,a.h,o.b,i.a]]}),t})();var u=n("jhN1"),h=n("tyNb");const d=[{path:"",loadChildren:()=>n.e(5).then(n.bind(null,"wfNR")).then(t=>t.LayoutModule)}];let f=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[h.e.forRoot(d,{scrollPositionRestoration:"top",enableTracing:!1})],h.e]}),t})();var p=n("o5C3"),m=n("1G5W"),g=n("XNiG"),y=n("wr6Y");let b=(()=>{class t{constructor(t,e,n,r,s){this.router=e,this.viewportScroller=n,this.modalService=r,this.annService=s,this.title="unifund.global",this.unsubscribe$=new g.a,t.setDefaultLang("en"),t.use("en")}ngOnInit(){this.router.events.pipe(Object(m.a)(this.unsubscribe$)).subscribe(t=>{t instanceof h.a&&setTimeout(()=>{const e=t.url.split("#").pop();this.viewportScroller.scrollToAnchor(e)},500)})}showAnnouncement(){const t=this.modalService.open(p.a);t.componentInstance.img="assets/images/trading-comp-1.png",t.componentInstance.title="ANNOUNCEMENT.TITLE",t.componentInstance.content="ANNOUNCEMENT.CONTENT"}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(o.d),r.Kb(h.b),r.Kb(c.u),r.Kb(a.g),r.Kb(y.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){1&t&&r.Lb(0,"router-outlet")},directives:[h.f],styles:[""]}),t})();var v=n("tk/3"),_=n("6NWb"),w={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},S={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]},C={prefix:"fas",iconName:"file-contract",icon:[384,512,[],"f56c","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]},E={prefix:"fas",iconName:"globe",icon:[496,512,[],"f0ac","M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"]},x={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},O={prefix:"fas",iconName:"list-ol",icon:[512,512,[],"f0cb","M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"]},k={prefix:"fas",iconName:"plus-circle",icon:[512,512,[],"f055","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"]},T={prefix:"fas",iconName:"shield-alt",icon:[512,512,[],"f3ed","M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"]},j={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]},A={prefix:"fas",iconName:"unlink",icon:[512,512,[],"f127","M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"]},I={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"]},P={prefix:"fab",iconName:"discord",icon:[448,512,[],"f392","M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"]},N={prefix:"fab",iconName:"medium",icon:[448,512,[],"f23a","M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"]},R={prefix:"fab",iconName:"telegram",icon:[496,512,[],"f2c6","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"]},D={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};class L{constructor(t,e="/assets/i18n/",n=".json"){this.http=t,this.prefix=e,this.suffix=n}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}}var M=n("R0Ic");function F(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function H(t){switch(t.length){case 0:return new M.d;case 1:return t[0];default:return new M.n(t)}}function z(t,e,n,r,s={},i={}){const o=[],a=[];let c=-1,l=null;if(r.forEach(t=>{const n=t.offset,r=n==c,u=r&&l||{};Object.keys(t).forEach(n=>{let r=n,a=t[n];if("offset"!==n)switch(r=e.normalizePropertyName(r,o),a){case M.o:a=s[n];break;case M.a:a=i[n];break;default:a=e.normalizeStyleValue(n,r,a,o)}u[r]=a}),r||a.push(u),l=u,c=n}),o.length){const t="\n - ";throw new Error(`Unable to animate due to the following errors:${t}${o.join(t)}`)}return a}function U(t,e,n,r){switch(e){case"start":t.onStart(()=>r(n&&V(n,"start",t)));break;case"done":t.onDone(()=>r(n&&V(n,"done",t)));break;case"destroy":t.onDestroy(()=>r(n&&V(n,"destroy",t)))}}function V(t,e,n){const r=n.totalTime,s=$(t.element,t.triggerName,t.fromState,t.toState,e||t.phaseName,null==r?t.totalTime:r,!!n.disabled),i=t._data;return null!=i&&(s._data=i),s}function $(t,e,n,r,s="",i=0,o){return{element:t,triggerName:e,fromState:n,toState:r,phaseName:s,totalTime:i,disabled:!!o}}function B(t,e,n){let r;return t instanceof Map?(r=t.get(e),r||t.set(e,r=n)):(r=t[e],r||(r=t[e]=n)),r}function q(t){const e=t.indexOf(":");return[t.substring(1,e),t.substr(e+1)]}let K=(t,e)=>!1,G=(t,e)=>!1,W=(t,e,n)=>[];const X=F();(X||"undefined"!=typeof Element)&&(K=(t,e)=>t.contains(e),G=(()=>{if(X||Element.prototype.matches)return(t,e)=>t.matches(e);{const t=Element.prototype,e=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector;return e?(t,n)=>e.apply(t,[n]):G}})(),W=(t,e,n)=>{let r=[];if(n)r.push(...t.querySelectorAll(e));else{const n=t.querySelector(e);n&&r.push(n)}return r});let Q=null,Z=!1;function Y(t){Q||(Q=("undefined"!=typeof document?document.body:null)||{},Z=!!Q.style&&"WebkitAppearance"in Q.style);let e=!0;return Q.style&&!function(t){return"ebkit"==t.substring(1,6)}(t)&&(e=t in Q.style,!e&&Z)&&(e="Webkit"+t.charAt(0).toUpperCase()+t.substr(1)in Q.style),e}const J=G,tt=K,et=W;function nt(t){const e={};return Object.keys(t).forEach(n=>{const r=n.replace(/([a-z])([A-Z])/g,"$1-$2");e[r]=t[n]}),e}let rt=(()=>{class t{validateStyleProperty(t){return Y(t)}matchesElement(t,e){return J(t,e)}containsElement(t,e){return tt(t,e)}query(t,e,n){return et(t,e,n)}computeStyle(t,e,n){return n||""}animate(t,e,n,r,s,i=[],o){return new M.d(n,r)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})(),st=(()=>{class t{}return t.NOOP=new rt,t})();const it="ng-enter",ot="ng-leave",at="ng-trigger",ct=".ng-trigger",lt="ng-animating",ut=".ng-animating";function ht(t){if("number"==typeof t)return t;const e=t.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:dt(parseFloat(e[1]),e[2])}function dt(t,e){switch(e){case"s":return 1e3*t;default:return t}}function ft(t,e,n){return t.hasOwnProperty("duration")?t:function(t,e,n){let r,s=0,i="";if("string"==typeof t){const n=t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return e.push(`The provided timing value "${t}" is invalid.`),{duration:0,delay:0,easing:""};r=dt(parseFloat(n[1]),n[2]);const o=n[3];null!=o&&(s=dt(parseFloat(o),n[4]));const a=n[5];a&&(i=a)}else r=t;if(!n){let n=!1,i=e.length;r<0&&(e.push("Duration values below 0 are not allowed for this animation step."),n=!0),s<0&&(e.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&e.splice(i,0,`The provided timing value "${t}" is invalid.`)}return{duration:r,delay:s,easing:i}}(t,e,n)}function pt(t,e={}){return Object.keys(t).forEach(n=>{e[n]=t[n]}),e}function mt(t,e,n={}){if(e)for(let r in t)n[r]=t[r];else pt(t,n);return n}function gt(t,e,n){return n?e+":"+n+";":""}function yt(t){let e="";for(let n=0;n<t.style.length;n++){const r=t.style.item(n);e+=gt(0,r,t.style.getPropertyValue(r))}for(const n in t.style)t.style.hasOwnProperty(n)&&!n.startsWith("_")&&(e+=gt(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t.style[n]));t.setAttribute("style",e)}function bt(t,e,n){t.style&&(Object.keys(e).forEach(r=>{const s=Ot(r);n&&!n.hasOwnProperty(r)&&(n[r]=t.style[s]),t.style[s]=e[r]}),F()&&yt(t))}function vt(t,e){t.style&&(Object.keys(e).forEach(e=>{const n=Ot(e);t.style[n]=""}),F()&&yt(t))}function _t(t){return Array.isArray(t)?1==t.length?t[0]:Object(M.i)(t):t}const wt=new RegExp("{{\\s*(.+?)\\s*}}","g");function St(t){let e=[];if("string"==typeof t){let n;for(;n=wt.exec(t);)e.push(n[1]);wt.lastIndex=0}return e}function Ct(t,e,n){const r=t.toString(),s=r.replace(wt,(t,r)=>{let s=e[r];return e.hasOwnProperty(r)||(n.push("Please provide a value for the animation param "+r),s=""),s.toString()});return s==r?t:s}function Et(t){const e=[];let n=t.next();for(;!n.done;)e.push(n.value),n=t.next();return e}const xt=/-+([a-z0-9])/g;function Ot(t){return t.replace(xt,(...t)=>t[1].toUpperCase())}function kt(t,e){return 0===t||0===e}function Tt(t,e,n){const r=Object.keys(n);if(r.length&&e.length){let i=e[0],o=[];if(r.forEach(t=>{i.hasOwnProperty(t)||o.push(t),i[t]=n[t]}),o.length)for(var s=1;s<e.length;s++){let n=e[s];o.forEach((function(e){n[e]=At(t,e)}))}}return e}function jt(t,e,n){switch(e.type){case 7:return t.visitTrigger(e,n);case 0:return t.visitState(e,n);case 1:return t.visitTransition(e,n);case 2:return t.visitSequence(e,n);case 3:return t.visitGroup(e,n);case 4:return t.visitAnimate(e,n);case 5:return t.visitKeyframes(e,n);case 6:return t.visitStyle(e,n);case 8:return t.visitReference(e,n);case 9:return t.visitAnimateChild(e,n);case 10:return t.visitAnimateRef(e,n);case 11:return t.visitQuery(e,n);case 12:return t.visitStagger(e,n);default:throw new Error("Unable to resolve animation metadata node #"+e.type)}}function At(t,e){return window.getComputedStyle(t)[e]}const It="*";function Pt(t,e){const n=[];return"string"==typeof t?t.split(/\s*,\s*/).forEach(t=>function(t,e,n){if(":"==t[0]){const r=function(t,e){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,e)=>parseFloat(e)>parseFloat(t);case":decrement":return(t,e)=>parseFloat(e)<parseFloat(t);default:return e.push(`The transition alias value "${t}" is not supported`),"* => *"}}(t,n);if("function"==typeof r)return void e.push(r);t=r}const r=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(`The provided transition expression "${t}" is not supported`),e;const s=r[1],i=r[2],o=r[3];e.push(Dt(s,o)),"<"!=i[0]||s==It&&o==It||e.push(Dt(o,s))}(t,n,e)):n.push(t),n}const Nt=new Set(["true","1"]),Rt=new Set(["false","0"]);function Dt(t,e){const n=Nt.has(t)||Rt.has(t),r=Nt.has(e)||Rt.has(e);return(s,i)=>{let o=t==It||t==s,a=e==It||e==i;return!o&&n&&"boolean"==typeof s&&(o=s?Nt.has(t):Rt.has(t)),!a&&r&&"boolean"==typeof i&&(a=i?Nt.has(e):Rt.has(e)),o&&a}}const Lt=new RegExp("s*:selfs*,?","g");function Mt(t,e,n){return new Ft(t).build(e,n)}class Ft{constructor(t){this._driver=t}build(t,e){const n=new Ht(e);return this._resetContextStyleTimingState(n),jt(this,_t(t),n)}_resetContextStyleTimingState(t){t.currentQuerySelector="",t.collectedStyles={},t.collectedStyles[""]={},t.currentTime=0}visitTrigger(t,e){let n=e.queryCount=0,r=e.depCount=0;const s=[],i=[];return"@"==t.name.charAt(0)&&e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),t.definitions.forEach(t=>{if(this._resetContextStyleTimingState(e),0==t.type){const n=t,r=n.name;r.toString().split(/\s*,\s*/).forEach(t=>{n.name=t,s.push(this.visitState(n,e))}),n.name=r}else if(1==t.type){const s=this.visitTransition(t,e);n+=s.queryCount,r+=s.depCount,i.push(s)}else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:t.name,states:s,transitions:i,queryCount:n,depCount:r,options:null}}visitState(t,e){const n=this.visitStyle(t.styles,e),r=t.options&&t.options.params||null;if(n.containsDynamicStyles){const s=new Set,i=r||{};if(n.styles.forEach(t=>{if(zt(t)){const e=t;Object.keys(e).forEach(t=>{St(e[t]).forEach(t=>{i.hasOwnProperty(t)||s.add(t)})})}}),s.size){const n=Et(s.values());e.errors.push(`state("${t.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:t.name,style:n,options:r?{params:r}:null}}visitTransition(t,e){e.queryCount=0,e.depCount=0;const n=jt(this,_t(t.animation),e);return{type:1,matchers:Pt(t.expr,e.errors),animation:n,queryCount:e.queryCount,depCount:e.depCount,options:Ut(t.options)}}visitSequence(t,e){return{type:2,steps:t.steps.map(t=>jt(this,t,e)),options:Ut(t.options)}}visitGroup(t,e){const n=e.currentTime;let r=0;const s=t.steps.map(t=>{e.currentTime=n;const s=jt(this,t,e);return r=Math.max(r,e.currentTime),s});return e.currentTime=r,{type:3,steps:s,options:Ut(t.options)}}visitAnimate(t,e){const n=function(t,e){let n=null;if(t.hasOwnProperty("duration"))n=t;else if("number"==typeof t)return Vt(ft(t,e).duration,0,"");const r=t;if(r.split(/\s+/).some(t=>"{"==t.charAt(0)&&"{"==t.charAt(1))){const t=Vt(0,0,"");return t.dynamic=!0,t.strValue=r,t}return n=n||ft(r,e),Vt(n.duration,n.delay,n.easing)}(t.timings,e.errors);let r;e.currentAnimateTimings=n;let s=t.styles?t.styles:Object(M.k)({});if(5==s.type)r=this.visitKeyframes(s,e);else{let s=t.styles,i=!1;if(!s){i=!0;const t={};n.easing&&(t.easing=n.easing),s=Object(M.k)(t)}e.currentTime+=n.duration+n.delay;const o=this.visitStyle(s,e);o.isEmptyStep=i,r=o}return e.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}visitStyle(t,e){const n=this._makeStyleAst(t,e);return this._validateStyleAst(n,e),n}_makeStyleAst(t,e){const n=[];Array.isArray(t.styles)?t.styles.forEach(t=>{"string"==typeof t?t==M.a?n.push(t):e.errors.push(`The provided style string value ${t} is not allowed.`):n.push(t)}):n.push(t.styles);let r=!1,s=null;return n.forEach(t=>{if(zt(t)){const e=t,n=e.easing;if(n&&(s=n,delete e.easing),!r)for(let t in e)if(e[t].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:n,easing:s,offset:t.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(t,e){const n=e.currentAnimateTimings;let r=e.currentTime,s=e.currentTime;n&&s>0&&(s-=n.duration+n.delay),t.styles.forEach(t=>{"string"!=typeof t&&Object.keys(t).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void e.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=e.collectedStyles[e.currentQuerySelector],o=i[n];let a=!0;o&&(s!=r&&s>=o.startTime&&r<=o.endTime&&(e.errors.push(`The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`),a=!1),s=o.startTime),a&&(i[n]={startTime:s,endTime:r}),e.options&&function(t,e,n){const r=e.params||{},s=St(t);s.length&&s.forEach(t=>{r.hasOwnProperty(t)||n.push(`Unable to resolve the local animation param ${t} in the given list of values`)})}(t[n],e.options,e.errors)})})}visitKeyframes(t,e){const n={type:5,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push("keyframes() must be placed inside of a call to animate()"),n;let r=0;const s=[];let i=!1,o=!1,a=0;const c=t.steps.map(t=>{const n=this._makeStyleAst(t,e);let c=null!=n.offset?n.offset:function(t){if("string"==typeof t)return null;let e=null;if(Array.isArray(t))t.forEach(t=>{if(zt(t)&&t.hasOwnProperty("offset")){const n=t;e=parseFloat(n.offset),delete n.offset}});else if(zt(t)&&t.hasOwnProperty("offset")){const n=t;e=parseFloat(n.offset),delete n.offset}return e}(n.styles),l=0;return null!=c&&(r++,l=n.offset=c),o=o||l<0||l>1,i=i||l<a,a=l,s.push(l),n});o&&e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&e.errors.push("Please ensure that all keyframe offsets are in order");const l=t.steps.length;let u=0;r>0&&r<l?e.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==r&&(u=1/(l-1));const h=l-1,d=e.currentTime,f=e.currentAnimateTimings,p=f.duration;return c.forEach((t,r)=>{const i=u>0?r==h?1:u*r:s[r],o=i*p;e.currentTime=d+f.delay+o,f.duration=o,this._validateStyleAst(t,e),t.offset=i,n.styles.push(t)}),n}visitReference(t,e){return{type:8,animation:jt(this,_t(t.animation),e),options:Ut(t.options)}}visitAnimateChild(t,e){return e.depCount++,{type:9,options:Ut(t.options)}}visitAnimateRef(t,e){return{type:10,animation:this.visitReference(t.animation,e),options:Ut(t.options)}}visitQuery(t,e){const n=e.currentQuerySelector,r=t.options||{};e.queryCount++,e.currentQuery=t;const[s,i]=function(t){const e=!!t.split(/\s*,\s*/).find(t=>":self"==t);return e&&(t=t.replace(Lt,"")),[t=t.replace(/@\*/g,ct).replace(/@\w+/g,t=>".ng-trigger-"+t.substr(1)).replace(/:animating/g,ut),e]}(t.selector);e.currentQuerySelector=n.length?n+" "+s:s,B(e.collectedStyles,e.currentQuerySelector,{});const o=jt(this,_t(t.animation),e);return e.currentQuery=null,e.currentQuerySelector=n,{type:11,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:i,animation:o,originalSelector:t.selector,options:Ut(t.options)}}visitStagger(t,e){e.currentQuery||e.errors.push("stagger() can only be used inside of query()");const n="full"===t.timings?{duration:0,delay:0,easing:"full"}:ft(t.timings,e.errors,!0);return{type:12,animation:jt(this,_t(t.animation),e),timings:n,options:null}}}class Ht{constructor(t){this.errors=t,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function zt(t){return!Array.isArray(t)&&"object"==typeof t}function Ut(t){var e;return t?(t=pt(t)).params&&(t.params=(e=t.params)?pt(e):null):t={},t}function Vt(t,e,n){return{duration:t,delay:e,easing:n}}function $t(t,e,n,r,s,i,o=null,a=!1){return{type:1,element:t,keyframes:e,preStyleProps:n,postStyleProps:r,duration:s,delay:i,totalTime:s+i,easing:o,subTimeline:a}}class Bt{constructor(){this._map=new Map}consume(t){let e=this._map.get(t);return e?this._map.delete(t):e=[],e}append(t,e){let n=this._map.get(t);n||this._map.set(t,n=[]),n.push(...e)}has(t){return this._map.has(t)}clear(){this._map.clear()}}const qt=new RegExp(":enter","g"),Kt=new RegExp(":leave","g");function Gt(t,e,n,r,s,i={},o={},a,c,l=[]){return(new Wt).buildKeyframes(t,e,n,r,s,i,o,a,c,l)}class Wt{buildKeyframes(t,e,n,r,s,i,o,a,c,l=[]){c=c||new Bt;const u=new Qt(t,e,c,r,s,l,[]);u.options=a,u.currentTimeline.setStyles([i],null,u.errors,a),jt(this,n,u);const h=u.timelines.filter(t=>t.containsAnimation());if(h.length&&Object.keys(o).length){const t=h[h.length-1];t.allowOnlyTimelineStyles()||t.setStyles([o],null,u.errors,a)}return h.length?h.map(t=>t.buildKeyframes()):[$t(e,[],[],[],0,0,"",!1)]}visitTrigger(t,e){}visitState(t,e){}visitTransition(t,e){}visitAnimateChild(t,e){const n=e.subInstructions.consume(e.element);if(n){const r=e.createSubContext(t.options),s=e.currentTimeline.currentTime,i=this._visitSubInstructions(n,r,r.options);s!=i&&e.transformIntoNewTimeline(i)}e.previousNode=t}visitAnimateRef(t,e){const n=e.createSubContext(t.options);n.transformIntoNewTimeline(),this.visitReference(t.animation,n),e.transformIntoNewTimeline(n.currentTimeline.currentTime),e.previousNode=t}_visitSubInstructions(t,e,n){let r=e.currentTimeline.currentTime;const s=null!=n.duration?ht(n.duration):null,i=null!=n.delay?ht(n.delay):null;return 0!==s&&t.forEach(t=>{const n=e.appendInstructionToTimeline(t,s,i);r=Math.max(r,n.duration+n.delay)}),r}visitReference(t,e){e.updateOptions(t.options,!0),jt(this,t.animation,e),e.previousNode=t}visitSequence(t,e){const n=e.subContextCount;let r=e;const s=t.options;if(s&&(s.params||s.delay)&&(r=e.createSubContext(s),r.transformIntoNewTimeline(),null!=s.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Xt);const t=ht(s.delay);r.delayNextStep(t)}t.steps.length&&(t.steps.forEach(t=>jt(this,t,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),e.previousNode=t}visitGroup(t,e){const n=[];let r=e.currentTimeline.currentTime;const s=t.options&&t.options.delay?ht(t.options.delay):0;t.steps.forEach(i=>{const o=e.createSubContext(t.options);s&&o.delayNextStep(s),jt(this,i,o),r=Math.max(r,o.currentTimeline.currentTime),n.push(o.currentTimeline)}),n.forEach(t=>e.currentTimeline.mergeTimelineCollectedStyles(t)),e.transformIntoNewTimeline(r),e.previousNode=t}_visitTiming(t,e){if(t.dynamic){const n=t.strValue;return ft(e.params?Ct(n,e.params,e.errors):n,e.errors)}return{duration:t.duration,delay:t.delay,easing:t.easing}}visitAnimate(t,e){const n=e.currentAnimateTimings=this._visitTiming(t.timings,e),r=e.currentTimeline;n.delay&&(e.incrementTime(n.delay),r.snapshotCurrentStyles());const s=t.style;5==s.type?this.visitKeyframes(s,e):(e.incrementTime(n.duration),this.visitStyle(s,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=t}visitStyle(t,e){const n=e.currentTimeline,r=e.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();const s=r&&r.easing||t.easing;t.isEmptyStep?n.applyEmptyStep(s):n.setStyles(t.styles,s,e.errors,e.options),e.previousNode=t}visitKeyframes(t,e){const n=e.currentAnimateTimings,r=e.currentTimeline.duration,s=n.duration,i=e.createSubContext().currentTimeline;i.easing=n.easing,t.styles.forEach(t=>{i.forwardTime((t.offset||0)*s),i.setStyles(t.styles,t.easing,e.errors,e.options),i.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(i),e.transformIntoNewTimeline(r+s),e.previousNode=t}visitQuery(t,e){const n=e.currentTimeline.currentTime,r=t.options||{},s=r.delay?ht(r.delay):0;s&&(6===e.previousNode.type||0==n&&e.currentTimeline.getCurrentStyleProperties().length)&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Xt);let i=n;const o=e.invokeQuery(t.selector,t.originalSelector,t.limit,t.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=o.length;let a=null;o.forEach((n,r)=>{e.currentQueryIndex=r;const o=e.createSubContext(t.options,n);s&&o.delayNextStep(s),n===e.element&&(a=o.currentTimeline),jt(this,t.animation,o),o.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,o.currentTimeline.currentTime)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(i),a&&(e.currentTimeline.mergeTimelineCollectedStyles(a),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=t}visitStagger(t,e){const n=e.parentContext,r=e.currentTimeline,s=t.timings,i=Math.abs(s.duration),o=i*(e.currentQueryTotal-1);let a=i*e.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":a=o-a;break;case"full":a=n.currentStaggerTime}const c=e.currentTimeline;a&&c.delayNextStep(a);const l=c.currentTime;jt(this,t.animation,e),e.previousNode=t,n.currentStaggerTime=r.currentTime-l+(r.startTime-n.currentTimeline.startTime)}}const Xt={};class Qt{constructor(t,e,n,r,s,i,o,a){this._driver=t,this.element=e,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=s,this.errors=i,this.timelines=o,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Xt,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new Zt(this._driver,e,0),o.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(t,e){if(!t)return;const n=t;let r=this.options;null!=n.duration&&(r.duration=ht(n.duration)),null!=n.delay&&(r.delay=ht(n.delay));const s=n.params;if(s){let t=r.params;t||(t=this.options.params={}),Object.keys(s).forEach(n=>{e&&t.hasOwnProperty(n)||(t[n]=Ct(s[n],t,this.errors))})}}_copyOptions(){const t={};if(this.options){const e=this.options.params;if(e){const n=t.params={};Object.keys(e).forEach(t=>{n[t]=e[t]})}}return t}createSubContext(t=null,e,n){const r=e||this.element,s=new Qt(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(t),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(t){return this.previousNode=Xt,this.currentTimeline=this.currentTimeline.fork(this.element,t),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(t,e,n){const r={duration:null!=e?e:t.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+t.delay,easing:""},s=new Yt(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,r,t.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(t){this.currentTimeline.forwardTime(this.currentTimeline.duration+t)}delayNextStep(t){t>0&&this.currentTimeline.delayNextStep(t)}invokeQuery(t,e,n,r,s,i){let o=[];if(r&&o.push(this.element),t.length>0){t=(t=t.replace(qt,"."+this._enterClassName)).replace(Kt,"."+this._leaveClassName);let e=this._driver.query(this.element,t,1!=n);0!==n&&(e=n<0?e.slice(e.length+n,e.length):e.slice(0,n)),o.push(...e)}return s||0!=o.length||i.push(`\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`),o}}class Zt{constructor(t,e,n,r){this._driver=t,this.element=e,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(t){const e=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||e?(this.forwardTime(this.currentTime+t),e&&this.snapshotCurrentStyles()):this.startTime+=t}fork(t,e){return this.applyStylesToKeyframe(),new Zt(this._driver,t,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(t){this.applyStylesToKeyframe(),this.duration=t,this._loadKeyframe()}_updateStyle(t,e){this._localTimelineStyles[t]=e,this._globalTimelineStyles[t]=e,this._styleSummary[t]={time:this.currentTime,value:e}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(t){t&&(this._previousKeyframe.easing=t),Object.keys(this._globalTimelineStyles).forEach(t=>{this._backFill[t]=this._globalTimelineStyles[t]||M.a,this._currentKeyframe[t]=M.a}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(t,e,n,r){e&&(this._previousKeyframe.easing=e);const s=r&&r.params||{},i=function(t,e){const n={};let r;return t.forEach(t=>{"*"===t?(r=r||Object.keys(e),r.forEach(t=>{n[t]=M.a})):mt(t,!1,n)}),n}(t,this._globalTimelineStyles);Object.keys(i).forEach(t=>{const e=Ct(i[t],s,n);this._pendingStyles[t]=e,this._localTimelineStyles.hasOwnProperty(t)||(this._backFill[t]=this._globalTimelineStyles.hasOwnProperty(t)?this._globalTimelineStyles[t]:M.a),this._updateStyle(t,e)})}applyStylesToKeyframe(){const t=this._pendingStyles,e=Object.keys(t);0!=e.length&&(this._pendingStyles={},e.forEach(e=>{this._currentKeyframe[e]=t[e]}),Object.keys(this._localTimelineStyles).forEach(t=>{this._currentKeyframe.hasOwnProperty(t)||(this._currentKeyframe[t]=this._localTimelineStyles[t])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(t=>{const e=this._localTimelineStyles[t];this._pendingStyles[t]=e,this._updateStyle(t,e)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const t=[];for(let e in this._currentKeyframe)t.push(e);return t}mergeTimelineCollectedStyles(t){Object.keys(t._styleSummary).forEach(e=>{const n=this._styleSummary[e],r=t._styleSummary[e];(!n||r.time>n.time)&&this._updateStyle(e,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const t=new Set,e=new Set,n=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((s,i)=>{const o=mt(s,!0);Object.keys(o).forEach(n=>{const r=o[n];r==M.o?t.add(n):r==M.a&&e.add(n)}),n||(o.offset=i/this.duration),r.push(o)});const s=t.size?Et(t.values()):[],i=e.size?Et(e.values()):[];if(n){const t=r[0],e=pt(t);t.offset=0,e.offset=1,r=[t,e]}return $t(this.element,r,s,i,this.duration,this.startTime,this.easing,!1)}}class Yt extends Zt{constructor(t,e,n,r,s,i,o=!1){super(t,e,i.delay),this.element=e,this.keyframes=n,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=o,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let t=this.keyframes,{delay:e,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){const s=[],i=n+e,o=e/i,a=mt(t[0],!1);a.offset=0,s.push(a);const c=mt(t[0],!1);c.offset=Jt(o),s.push(c);const l=t.length-1;for(let r=1;r<=l;r++){let o=mt(t[r],!1);o.offset=Jt((e+o.offset*n)/i),s.push(o)}n=i,e=0,r="",t=s}return $t(this.element,t,this.preStyleProps,this.postStyleProps,n,e,r,!0)}}function Jt(t,e=3){const n=Math.pow(10,e-1);return Math.round(t*n)/n}class te{}class ee extends te{normalizePropertyName(t,e){return Ot(t)}normalizeStyleValue(t,e,n,r){let s="";const i=n.toString().trim();if(ne[e]&&0!==n&&"0"!==n)if("number"==typeof n)s="px";else{const e=n.match(/^[+-]?[\d\.]+([a-z]*)$/);e&&0==e[1].length&&r.push(`Please provide a CSS unit value for ${t}:${n}`)}return i+s}}const ne=(()=>function(t){const e={};return t.forEach(t=>e[t]=!0),e}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function re(t,e,n,r,s,i,o,a,c,l,u,h,d){return{type:0,element:t,triggerName:e,isRemovalTransition:s,fromState:n,fromStyles:i,toState:r,toStyles:o,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:u,totalTime:h,errors:d}}const se={};class ie{constructor(t,e,n){this._triggerName=t,this.ast=e,this._stateStyles=n}match(t,e,n,r){return function(t,e,n,r,s){return t.some(t=>t(e,n,r,s))}(this.ast.matchers,t,e,n,r)}buildStyles(t,e,n){const r=this._stateStyles["*"],s=this._stateStyles[t],i=r?r.buildStyles(e,n):{};return s?s.buildStyles(e,n):i}build(t,e,n,r,s,i,o,a,c,l){const u=[],h=this.ast.options&&this.ast.options.params||se,d=this.buildStyles(n,o&&o.params||se,u),f=a&&a.params||se,p=this.buildStyles(r,f,u),m=new Set,g=new Map,y=new Map,b="void"===r,v={params:Object.assign(Object.assign({},h),f)},_=l?[]:Gt(t,e,this.ast.animation,s,i,d,p,v,c,u);let w=0;if(_.forEach(t=>{w=Math.max(t.duration+t.delay,w)}),u.length)return re(e,this._triggerName,n,r,b,d,p,[],[],g,y,w,u);_.forEach(t=>{const n=t.element,r=B(g,n,{});t.preStyleProps.forEach(t=>r[t]=!0);const s=B(y,n,{});t.postStyleProps.forEach(t=>s[t]=!0),n!==e&&m.add(n)});const S=Et(m.values());return re(e,this._triggerName,n,r,b,d,p,_,S,g,y,w)}}class oe{constructor(t,e){this.styles=t,this.defaultParams=e}buildStyles(t,e){const n={},r=pt(this.defaultParams);return Object.keys(t).forEach(e=>{const n=t[e];null!=n&&(r[e]=n)}),this.styles.styles.forEach(t=>{if("string"!=typeof t){const s=t;Object.keys(s).forEach(t=>{let i=s[t];i.length>1&&(i=Ct(i,r,e)),n[t]=i})}}),n}}class ae{constructor(t,e){this.name=t,this.ast=e,this.transitionFactories=[],this.states={},e.states.forEach(t=>{this.states[t.name]=new oe(t.style,t.options&&t.options.params||{})}),ce(this.states,"true","1"),ce(this.states,"false","0"),e.transitions.forEach(e=>{this.transitionFactories.push(new ie(t,e,this.states))}),this.fallbackTransition=new ie(t,{type:1,animation:{type:2,steps:[],options:null},matchers:[(t,e)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(t,e,n,r){return this.transitionFactories.find(s=>s.match(t,e,n,r))||null}matchStyles(t,e,n){return this.fallbackTransition.buildStyles(t,e,n)}}function ce(t,e,n){t.hasOwnProperty(e)?t.hasOwnProperty(n)||(t[n]=t[e]):t.hasOwnProperty(n)&&(t[e]=t[n])}const le=new Bt;class ue{constructor(t,e,n){this.bodyNode=t,this._driver=e,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(t,e){const n=[],r=Mt(this._driver,e,n);if(n.length)throw new Error("Unable to build the animation due to the following errors: "+n.join("\n"));this._animations[t]=r}_buildPlayer(t,e,n){const r=t.element,s=z(0,this._normalizer,0,t.keyframes,e,n);return this._driver.animate(r,s,t.duration,t.delay,t.easing,[],!0)}create(t,e,n={}){const r=[],s=this._animations[t];let i;const o=new Map;if(s?(i=Gt(this._driver,e,s,it,ot,{},{},n,le,r),i.forEach(t=>{const e=B(o,t.element,{});t.postStyleProps.forEach(t=>e[t]=null)})):(r.push("The requested animation doesn't exist or has already been destroyed"),i=[]),r.length)throw new Error("Unable to create the animation due to the following errors: "+r.join("\n"));o.forEach((t,e)=>{Object.keys(t).forEach(n=>{t[n]=this._driver.computeStyle(e,n,M.a)})});const a=H(i.map(t=>{const e=o.get(t.element);return this._buildPlayer(t,{},e)}));return this._playersById[t]=a,a.onDestroy(()=>this.destroy(t)),this.players.push(a),a}destroy(t){const e=this._getPlayer(t);e.destroy(),delete this._playersById[t];const n=this.players.indexOf(e);n>=0&&this.players.splice(n,1)}_getPlayer(t){const e=this._playersById[t];if(!e)throw new Error("Unable to find the timeline player referenced by "+t);return e}listen(t,e,n,r){const s=$(e,"","","");return U(this._getPlayer(t),n,s,r),()=>{}}command(t,e,n,r){if("register"==n)return void this.register(t,r[0]);if("create"==n)return void this.create(t,e,r[0]||{});const s=this._getPlayer(t);switch(n){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(t)}}}const he="ng-animate-queued",de="ng-animate-disabled",fe=".ng-animate-disabled",pe=[],me={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},ge={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class ye{constructor(t,e=""){this.namespaceId=e;const n=t&&t.hasOwnProperty("value");if(this.value=null!=(r=n?t.value:t)?r:null,n){const e=pt(t);delete e.value,this.options=e}else this.options={};var r;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(t){const e=t.params;if(e){const t=this.options.params;Object.keys(e).forEach(n=>{null==t[n]&&(t[n]=e[n])})}}}const be="void",ve=new ye(be);class _e{constructor(t,e,n){this.id=t,this.hostElement=e,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+t,ke(e,this._hostClassName)}listen(t,e,n,r){if(!this._triggers.hasOwnProperty(e))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${e}" because the provided event is undefined!`);if("start"!=(s=n)&&"done"!=s)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`);var s;const i=B(this._elementListeners,t,[]),o={name:e,phase:n,callback:r};i.push(o);const a=B(this._engine.statesByElement,t,{});return a.hasOwnProperty(e)||(ke(t,at),ke(t,"ng-trigger-"+e),a[e]=ve),()=>{this._engine.afterFlush(()=>{const t=i.indexOf(o);t>=0&&i.splice(t,1),this._triggers[e]||delete a[e]})}}register(t,e){return!this._triggers[t]&&(this._triggers[t]=e,!0)}_getTrigger(t){const e=this._triggers[t];if(!e)throw new Error(`The provided animation trigger "${t}" has not been registered!`);return e}trigger(t,e,n,r=!0){const s=this._getTrigger(e),i=new Se(this.id,e,t);let o=this._engine.statesByElement.get(t);o||(ke(t,at),ke(t,"ng-trigger-"+e),this._engine.statesByElement.set(t,o={}));let a=o[e];const c=new ye(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&c.absorbOptions(a.options),o[e]=c,a||(a=ve),c.value!==be&&a.value===c.value){if(!function(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!=r.length)return!1;for(let s=0;s<n.length;s++){const r=n[s];if(!e.hasOwnProperty(r)||t[r]!==e[r])return!1}return!0}(a.params,c.params)){const e=[],n=s.matchStyles(a.value,a.params,e),r=s.matchStyles(c.value,c.params,e);e.length?this._engine.reportError(e):this._engine.afterFlush(()=>{vt(t,n),bt(t,r)})}return}const l=B(this._engine.playersByElement,t,[]);l.forEach(t=>{t.namespaceId==this.id&&t.triggerName==e&&t.queued&&t.destroy()});let u=s.matchTransition(a.value,c.value,t,c.params),h=!1;if(!u){if(!r)return;u=s.fallbackTransition,h=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:e,transition:u,fromState:a,toState:c,player:i,isFallbackTransition:h}),h||(ke(t,he),i.onStart(()=>{Te(t,he)})),i.onDone(()=>{let e=this.players.indexOf(i);e>=0&&this.players.splice(e,1);const n=this._engine.playersByElement.get(t);if(n){let t=n.indexOf(i);t>=0&&n.splice(t,1)}}),this.players.push(i),l.push(i),i}deregister(t){delete this._triggers[t],this._engine.statesByElement.forEach((e,n)=>{delete e[t]}),this._elementListeners.forEach((e,n)=>{this._elementListeners.set(n,e.filter(e=>e.name!=t))})}clearElementCache(t){this._engine.statesByElement.delete(t),this._elementListeners.delete(t);const e=this._engine.playersByElement.get(t);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(t))}_signalRemovalForInnerTriggers(t,e){const n=this._engine.driver.query(t,ct,!0);n.forEach(t=>{if(t.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(t);n.size?n.forEach(n=>n.triggerLeaveAnimation(t,e,!1,!0)):this.clearElementCache(t)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(t=>this.clearElementCache(t)))}triggerLeaveAnimation(t,e,n,r){const s=this._engine.statesByElement.get(t);if(s){const i=[];if(Object.keys(s).forEach(e=>{if(this._triggers[e]){const n=this.trigger(t,e,be,r);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,t,!0,e),n&&H(i).onDone(()=>this._engine.processLeaveNode(t)),!0}return!1}prepareLeaveAnimationListeners(t){const e=this._elementListeners.get(t);if(e){const n=new Set;e.forEach(e=>{const r=e.name;if(n.has(r))return;n.add(r);const s=this._triggers[r].fallbackTransition,i=this._engine.statesByElement.get(t)[r]||ve,o=new ye(be),a=new Se(this.id,r,t);this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:r,transition:s,fromState:i,toState:o,player:a,isFallbackTransition:!0})})}}removeNode(t,e){const n=this._engine;if(t.childElementCount&&this._signalRemovalForInnerTriggers(t,e),this.triggerLeaveAnimation(t,e,!0))return;let r=!1;if(n.totalAnimations){const e=n.players.length?n.playersByQueriedElement.get(t):[];if(e&&e.length)r=!0;else{let e=t;for(;e=e.parentNode;)if(n.statesByElement.get(e)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(t),r)n.markElementAsRemoved(this.id,t,!1,e);else{const r=t.__ng_removed;r&&r!==me||(n.afterFlush(()=>this.clearElementCache(t)),n.destroyInnerAnimations(t),n._onRemovalComplete(t,e))}}insertNode(t,e){ke(t,this._hostClassName)}drainQueuedTransitions(t){const e=[];return this._queue.forEach(n=>{const r=n.player;if(r.destroyed)return;const s=n.element,i=this._elementListeners.get(s);i&&i.forEach(e=>{if(e.name==n.triggerName){const r=$(s,n.triggerName,n.fromState.value,n.toState.value);r._data=t,U(n.player,e.phase,r,e.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(n)}),this._queue=[],e.sort((t,e)=>{const n=t.transition.ast.depCount,r=e.transition.ast.depCount;return 0==n||0==r?n-r:this._engine.driver.containsElement(t.element,e.element)?1:-1})}destroy(t){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,t)}elementContainsData(t){let e=!1;return this._elementListeners.has(t)&&(e=!0),e=!!this._queue.find(e=>e.element===t)||e,e}}class we{constructor(t,e,n){this.bodyNode=t,this.driver=e,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(t,e)=>{}}_onRemovalComplete(t,e){this.onRemovalComplete(t,e)}get queuedPlayers(){const t=[];return this._namespaceList.forEach(e=>{e.players.forEach(e=>{e.queued&&t.push(e)})}),t}createNamespace(t,e){const n=new _e(t,e,this);return e.parentNode?this._balanceNamespaceList(n,e):(this.newHostElements.set(e,n),this.collectEnterElement(e)),this._namespaceLookup[t]=n}_balanceNamespaceList(t,e){const n=this._namespaceList.length-1;if(n>=0){let r=!1;for(let s=n;s>=0;s--)if(this.driver.containsElement(this._namespaceList[s].hostElement,e)){this._namespaceList.splice(s+1,0,t),r=!0;break}r||this._namespaceList.splice(0,0,t)}else this._namespaceList.push(t);return this.namespacesByHostElement.set(e,t),t}register(t,e){let n=this._namespaceLookup[t];return n||(n=this.createNamespace(t,e)),n}registerTrigger(t,e,n){let r=this._namespaceLookup[t];r&&r.register(e,n)&&this.totalAnimations++}destroy(t,e){if(!t)return;const n=this._fetchNamespace(t);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[t];const e=this._namespaceList.indexOf(n);e>=0&&this._namespaceList.splice(e,1)}),this.afterFlushAnimationsDone(()=>n.destroy(e))}_fetchNamespace(t){return this._namespaceLookup[t]}fetchNamespacesByElement(t){const e=new Set,n=this.statesByElement.get(t);if(n){const t=Object.keys(n);for(let r=0;r<t.length;r++){const s=n[t[r]].namespaceId;if(s){const t=this._fetchNamespace(s);t&&e.add(t)}}}return e}trigger(t,e,n,r){if(Ce(e)){const s=this._fetchNamespace(t);if(s)return s.trigger(e,n,r),!0}return!1}insertNode(t,e,n,r){if(!Ce(e))return;const s=e.__ng_removed;if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;const t=this.collectedLeaveElements.indexOf(e);t>=0&&this.collectedLeaveElements.splice(t,1)}if(t){const r=this._fetchNamespace(t);r&&r.insertNode(e,n)}r&&this.collectEnterElement(e)}collectEnterElement(t){this.collectedEnterElements.push(t)}markElementAsDisabled(t,e){e?this.disabledNodes.has(t)||(this.disabledNodes.add(t),ke(t,de)):this.disabledNodes.has(t)&&(this.disabledNodes.delete(t),Te(t,de))}removeNode(t,e,n,r){if(Ce(e)){const s=t?this._fetchNamespace(t):null;if(s?s.removeNode(e,r):this.markElementAsRemoved(t,e,!1,r),n){const n=this.namespacesByHostElement.get(e);n&&n.id!==t&&n.removeNode(e,r)}}else this._onRemovalComplete(e,r)}markElementAsRemoved(t,e,n,r){this.collectedLeaveElements.push(e),e.__ng_removed={namespaceId:t,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}listen(t,e,n,r,s){return Ce(e)?this._fetchNamespace(t).listen(e,n,r,s):()=>{}}_buildInstruction(t,e,n,r,s){return t.transition.build(this.driver,t.element,t.fromState.value,t.toState.value,n,r,t.fromState.options,t.toState.options,e,s)}destroyInnerAnimations(t){let e=this.driver.query(t,ct,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),0!=this.playersByQueriedElement.size&&(e=this.driver.query(t,ut,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(t){const e=this.playersByElement.get(t);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(t){const e=this.playersByQueriedElement.get(t);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(t=>{if(this.players.length)return H(this.players).onDone(()=>t());t()})}processLeaveNode(t){const e=t.__ng_removed;if(e&&e.setForRemoval){if(t.__ng_removed=me,e.namespaceId){this.destroyInnerAnimations(t);const n=this._fetchNamespace(e.namespaceId);n&&n.clearElementCache(t)}this._onRemovalComplete(t,e.setForRemoval)}this.driver.matchesElement(t,fe)&&this.markElementAsDisabled(t,!1),this.driver.query(t,fe,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(t=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,e)=>this._balanceNamespaceList(t,e)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)ke(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{e=this._flushAnimations(n,t)}finally{for(let t=0;t<n.length;t++)n[t]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){const t=this._whenQuietFns;this._whenQuietFns=[],e.length?H(e).onDone(()=>{t.forEach(t=>t())}):t.forEach(t=>t())}}reportError(t){throw new Error("Unable to process animations due to the following failed trigger transitions\n "+t.join("\n"))}_flushAnimations(t,e){const n=new Bt,r=[],s=new Map,i=[],o=new Map,a=new Map,c=new Map,l=new Set;this.disabledNodes.forEach(t=>{l.add(t);const e=this.driver.query(t,".ng-animate-queued",!0);for(let n=0;n<e.length;n++)l.add(e[n])});const u=this.bodyNode,h=Array.from(this.statesByElement.keys()),d=Oe(h,this.collectedEnterElements),f=new Map;let p=0;d.forEach((t,e)=>{const n=it+p++;f.set(e,n),t.forEach(t=>ke(t,n))});const m=[],g=new Set,y=new Set;for(let A=0;A<this.collectedLeaveElements.length;A++){const t=this.collectedLeaveElements[A],e=t.__ng_removed;e&&e.setForRemoval&&(m.push(t),g.add(t),e.hasAnimation?this.driver.query(t,".ng-star-inserted",!0).forEach(t=>g.add(t)):y.add(t))}const b=new Map,v=Oe(h,Array.from(g));v.forEach((t,e)=>{const n=ot+p++;b.set(e,n),t.forEach(t=>ke(t,n))}),t.push(()=>{d.forEach((t,e)=>{const n=f.get(e);t.forEach(t=>Te(t,n))}),v.forEach((t,e)=>{const n=b.get(e);t.forEach(t=>Te(t,n))}),m.forEach(t=>{this.processLeaveNode(t)})});const _=[],w=[];for(let A=this._namespaceList.length-1;A>=0;A--)this._namespaceList[A].drainQueuedTransitions(e).forEach(t=>{const e=t.player,s=t.element;if(_.push(e),this.collectedEnterElements.length){const t=s.__ng_removed;if(t&&t.setForMove)return void e.destroy()}const l=!u||!this.driver.containsElement(u,s),h=b.get(s),d=f.get(s),p=this._buildInstruction(t,n,d,h,l);if(p.errors&&p.errors.length)w.push(p);else{if(l)return e.onStart(()=>vt(s,p.fromStyles)),e.onDestroy(()=>bt(s,p.toStyles)),void r.push(e);if(t.isFallbackTransition)return e.onStart(()=>vt(s,p.fromStyles)),e.onDestroy(()=>bt(s,p.toStyles)),void r.push(e);p.timelines.forEach(t=>t.stretchStartingKeyframe=!0),n.append(s,p.timelines),i.push({instruction:p,player:e,element:s}),p.queriedElements.forEach(t=>B(o,t,[]).push(e)),p.preStyleProps.forEach((t,e)=>{const n=Object.keys(t);if(n.length){let t=a.get(e);t||a.set(e,t=new Set),n.forEach(e=>t.add(e))}}),p.postStyleProps.forEach((t,e)=>{const n=Object.keys(t);let r=c.get(e);r||c.set(e,r=new Set),n.forEach(t=>r.add(t))})}});if(w.length){const t=[];w.forEach(e=>{t.push(`@${e.triggerName} has failed due to:\n`),e.errors.forEach(e=>t.push(`- ${e}\n`))}),_.forEach(t=>t.destroy()),this.reportError(t)}const S=new Map,C=new Map;i.forEach(t=>{const e=t.element;n.has(e)&&(C.set(e,e),this._beforeAnimationBuild(t.player.namespaceId,t.instruction,S))}),r.forEach(t=>{const e=t.element;this._getPreviousPlayers(e,!1,t.namespaceId,t.triggerName,null).forEach(t=>{B(S,e,[]).push(t),t.destroy()})});const E=m.filter(t=>Ae(t,a,c)),x=new Map;xe(x,this.driver,y,c,M.a).forEach(t=>{Ae(t,a,c)&&E.push(t)});const O=new Map;d.forEach((t,e)=>{xe(O,this.driver,new Set(t),a,M.o)}),E.forEach(t=>{const e=x.get(t),n=O.get(t);x.set(t,Object.assign(Object.assign({},e),n))});const k=[],T=[],j={};i.forEach(t=>{const{element:e,player:i,instruction:o}=t;if(n.has(e)){if(l.has(e))return i.onDestroy(()=>bt(e,o.toStyles)),i.disabled=!0,i.overrideTotalTime(o.totalTime),void r.push(i);let t=j;if(C.size>1){let n=e;const r=[];for(;n=n.parentNode;){const e=C.get(n);if(e){t=e;break}r.push(n)}r.forEach(e=>C.set(e,t))}const n=this._buildAnimation(i.namespaceId,o,S,s,O,x);if(i.setRealPlayer(n),t===j)k.push(i);else{const e=this.playersByElement.get(t);e&&e.length&&(i.parentPlayer=H(e)),r.push(i)}}else vt(e,o.fromStyles),i.onDestroy(()=>bt(e,o.toStyles)),T.push(i),l.has(e)&&r.push(i)}),T.forEach(t=>{const e=s.get(t.element);if(e&&e.length){const n=H(e);t.setRealPlayer(n)}}),r.forEach(t=>{t.parentPlayer?t.syncPlayerEvents(t.parentPlayer):t.destroy()});for(let A=0;A<m.length;A++){const t=m[A],e=t.__ng_removed;if(Te(t,ot),e&&e.hasAnimation)continue;let n=[];if(o.size){let e=o.get(t);e&&e.length&&n.push(...e);let r=this.driver.query(t,ut,!0);for(let t=0;t<r.length;t++){let e=o.get(r[t]);e&&e.length&&n.push(...e)}}const r=n.filter(t=>!t.destroyed);r.length?je(this,t,r):this.processLeaveNode(t)}return m.length=0,k.forEach(t=>{this.players.push(t),t.onDone(()=>{t.destroy();const e=this.players.indexOf(t);this.players.splice(e,1)}),t.play()}),k}elementContainsData(t,e){let n=!1;const r=e.__ng_removed;return r&&r.setForRemoval&&(n=!0),this.playersByElement.has(e)&&(n=!0),this.playersByQueriedElement.has(e)&&(n=!0),this.statesByElement.has(e)&&(n=!0),this._fetchNamespace(t).elementContainsData(e)||n}afterFlush(t){this._flushFns.push(t)}afterFlushAnimationsDone(t){this._whenQuietFns.push(t)}_getPreviousPlayers(t,e,n,r,s){let i=[];if(e){const e=this.playersByQueriedElement.get(t);e&&(i=e)}else{const e=this.playersByElement.get(t);if(e){const t=!s||s==be;e.forEach(e=>{e.queued||(t||e.triggerName==r)&&i.push(e)})}}return(n||r)&&(i=i.filter(t=>!(n&&n!=t.namespaceId||r&&r!=t.triggerName))),i}_beforeAnimationBuild(t,e,n){const r=e.element,s=e.isRemovalTransition?void 0:t,i=e.isRemovalTransition?void 0:e.triggerName;for(const o of e.timelines){const t=o.element,a=t!==r,c=B(n,t,[]);this._getPreviousPlayers(t,a,s,i,e.toState).forEach(t=>{const e=t.getRealPlayer();e.beforeDestroy&&e.beforeDestroy(),t.destroy(),c.push(t)})}vt(r,e.fromStyles)}_buildAnimation(t,e,n,r,s,i){const o=e.triggerName,a=e.element,c=[],l=new Set,u=new Set,h=e.timelines.map(e=>{const h=e.element;l.add(h);const d=h.__ng_removed;if(d&&d.removedBeforeQueried)return new M.d(e.duration,e.delay);const f=h!==a,p=function(t){const e=[];return function t(e,n){for(let r=0;r<e.length;r++){const s=e[r];s instanceof M.n?t(s.players,n):n.push(s)}}(t,e),e}((n.get(h)||pe).map(t=>t.getRealPlayer())).filter(t=>!!t.element&&t.element===h),m=s.get(h),g=i.get(h),y=z(0,this._normalizer,0,e.keyframes,m,g),b=this._buildPlayer(e,y,p);if(e.subTimeline&&r&&u.add(h),f){const e=new Se(t,o,h);e.setRealPlayer(b),c.push(e)}return b});c.forEach(t=>{B(this.playersByQueriedElement,t.element,[]).push(t),t.onDone(()=>function(t,e,n){let r;if(t instanceof Map){if(r=t.get(e),r){if(r.length){const t=r.indexOf(n);r.splice(t,1)}0==r.length&&t.delete(e)}}else if(r=t[e],r){if(r.length){const t=r.indexOf(n);r.splice(t,1)}0==r.length&&delete t[e]}return r}(this.playersByQueriedElement,t.element,t))}),l.forEach(t=>ke(t,lt));const d=H(h);return d.onDestroy(()=>{l.forEach(t=>Te(t,lt)),bt(a,e.toStyles)}),u.forEach(t=>{B(r,t,[]).push(d)}),d}_buildPlayer(t,e,n){return e.length>0?this.driver.animate(t.element,e,t.duration,t.delay,t.easing,n):new M.d(t.duration,t.delay)}}class Se{constructor(t,e,n){this.namespaceId=t,this.triggerName=e,this.element=n,this._player=new M.d,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(t){this._containsRealPlayer||(this._player=t,Object.keys(this._queuedCallbacks).forEach(e=>{this._queuedCallbacks[e].forEach(n=>U(t,e,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(t.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(t){this.totalTime=t}syncPlayerEvents(t){const e=this._player;e.triggerCallback&&t.onStart(()=>e.triggerCallback("start")),t.onDone(()=>this.finish()),t.onDestroy(()=>this.destroy())}_queueEvent(t,e){B(this._queuedCallbacks,t,[]).push(e)}onDone(t){this.queued&&this._queueEvent("done",t),this._player.onDone(t)}onStart(t){this.queued&&this._queueEvent("start",t),this._player.onStart(t)}onDestroy(t){this.queued&&this._queueEvent("destroy",t),this._player.onDestroy(t)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(t){this.queued||this._player.setPosition(t)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(t){const e=this._player;e.triggerCallback&&e.triggerCallback(t)}}function Ce(t){return t&&1===t.nodeType}function Ee(t,e){const n=t.style.display;return t.style.display=null!=e?e:"none",n}function xe(t,e,n,r,s){const i=[];n.forEach(t=>i.push(Ee(t)));const o=[];r.forEach((n,r)=>{const i={};n.forEach(t=>{const n=i[t]=e.computeStyle(r,t,s);n&&0!=n.length||(r.__ng_removed=ge,o.push(r))}),t.set(r,i)});let a=0;return n.forEach(t=>Ee(t,i[a++])),o}function Oe(t,e){const n=new Map;if(t.forEach(t=>n.set(t,[])),0==e.length)return n;const r=new Set(e),s=new Map;return e.forEach(t=>{const e=function t(e){if(!e)return 1;let i=s.get(e);if(i)return i;const o=e.parentNode;return i=n.has(o)?o:r.has(o)?1:t(o),s.set(e,i),i}(t);1!==e&&n.get(e).push(t)}),n}function ke(t,e){if(t.classList)t.classList.add(e);else{let n=t.$$classes;n||(n=t.$$classes={}),n[e]=!0}}function Te(t,e){if(t.classList)t.classList.remove(e);else{let n=t.$$classes;n&&delete n[e]}}function je(t,e,n){H(n).onDone(()=>t.processLeaveNode(e))}function Ae(t,e,n){const r=n.get(t);if(!r)return!1;let s=e.get(t);return s?r.forEach(t=>s.add(t)):e.set(t,r),n.delete(t),!0}class Ie{constructor(t,e,n){this.bodyNode=t,this._driver=e,this._triggerCache={},this.onRemovalComplete=(t,e)=>{},this._transitionEngine=new we(t,e,n),this._timelineEngine=new ue(t,e,n),this._transitionEngine.onRemovalComplete=(t,e)=>this.onRemovalComplete(t,e)}registerTrigger(t,e,n,r,s){const i=t+"-"+r;let o=this._triggerCache[i];if(!o){const t=[],e=Mt(this._driver,s,t);if(t.length)throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join("\n - ")}`);o=function(t,e){return new ae(t,e)}(r,e),this._triggerCache[i]=o}this._transitionEngine.registerTrigger(e,r,o)}register(t,e){this._transitionEngine.register(t,e)}destroy(t,e){this._transitionEngine.destroy(t,e)}onInsert(t,e,n,r){this._transitionEngine.insertNode(t,e,n,r)}onRemove(t,e,n,r){this._transitionEngine.removeNode(t,e,r||!1,n)}disableAnimations(t,e){this._transitionEngine.markElementAsDisabled(t,e)}process(t,e,n,r){if("@"==n.charAt(0)){const[t,s]=q(n);this._timelineEngine.command(t,e,s,r)}else this._transitionEngine.trigger(t,e,n,r)}listen(t,e,n,r,s){if("@"==n.charAt(0)){const[t,r]=q(n);return this._timelineEngine.listen(t,e,r,s)}return this._transitionEngine.listen(t,e,n,r,s)}flush(t=-1){this._transitionEngine.flush(t)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function Pe(t,e){let n=null,r=null;return Array.isArray(e)&&e.length?(n=Re(e[0]),e.length>1&&(r=Re(e[e.length-1]))):e&&(n=Re(e)),n||r?new Ne(t,n,r):null}let Ne=(()=>{class t{constructor(e,n,r){this._element=e,this._startStyles=n,this._endStyles=r,this._state=0;let s=t.initialStylesByElement.get(e);s||t.initialStylesByElement.set(e,s={}),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&bt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(bt(this._element,this._initialStyles),this._endStyles&&(bt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(vt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(vt(this._element,this._endStyles),this._endStyles=null),bt(this._element,this._initialStyles),this._state=3)}}return t.initialStylesByElement=new WeakMap,t})();function Re(t){let e=null;const n=Object.keys(t);for(let r=0;r<n.length;r++){const s=n[r];De(s)&&(e=e||{},e[s]=t[s])}return e}function De(t){return"display"===t||"position"===t}const Le="animation",Me="animationend";class Fe{constructor(t,e,n,r,s,i,o){this._element=t,this._name=e,this._duration=n,this._delay=r,this._easing=s,this._fillMode=i,this._onDoneFn=o,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=t=>this._handleCallback(t)}apply(){!function(t,e){const n=Be(t,"").trim();n.length&&(function(t,e){let n=0;for(let r=0;r<t.length;r++)","===t.charAt(r)&&n++}(n),e=`${n}, ${e}`),$e(t,"",e)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),Ve(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){He(this._element,this._name,"paused")}resume(){He(this._element,this._name,"running")}setPosition(t){const e=ze(this._element,this._name);this._position=t*this._duration,$e(this._element,"Delay",`-${this._position}ms`,e)}getPosition(){return this._position}_handleCallback(t){const e=t._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(t.elapsedTime.toFixed(3));t.animationName==this._name&&Math.max(e-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),Ve(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(t,e){const n=Be(t,"").split(","),r=Ue(n,e);r>=0&&(n.splice(r,1),$e(t,"",n.join(",")))}(this._element,this._name))}}function He(t,e,n){$e(t,"PlayState",n,ze(t,e))}function ze(t,e){const n=Be(t,"");return n.indexOf(",")>0?Ue(n.split(","),e):Ue([n],e)}function Ue(t,e){for(let n=0;n<t.length;n++)if(t[n].indexOf(e)>=0)return n;return-1}function Ve(t,e,n){n?t.removeEventListener(Me,e):t.addEventListener(Me,e)}function $e(t,e,n,r){const s=Le+e;if(null!=r){const e=t.style[s];if(e.length){const t=e.split(",");t[r]=n,n=t.join(",")}}t.style[s]=n}function Be(t,e){return t.style[Le+e]}class qe{constructor(t,e,n,r,s,i,o,a){this.element=t,this.keyframes=e,this.animationName=n,this._duration=r,this._delay=s,this._finalStyles=o,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=r+s,this._buildStyler()}onStart(t){this._onStartFns.push(t)}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(t=>t()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(t){this._styler.setPosition(t)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new Fe(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}beforeDestroy(){this.init();const t={};if(this.hasStarted()){const e=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(t[n]=e?this._finalStyles[n]:At(this.element,n))})}this.currentSnapshot=t}}class Ke extends M.d{constructor(t,e){super(),this.element=t,this._startingStyles={},this.__initialized=!1,this._styles=nt(e)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(t=>{this._startingStyles[t]=this.element.style[t]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(t=>this.element.style.setProperty(t,this._styles[t])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(t=>{const e=this._startingStyles[t];e?this.element.style.setProperty(t,e):this.element.style.removeProperty(t)}),this._startingStyles=null,super.destroy())}}class Ge{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(t){return Y(t)}matchesElement(t,e){return J(t,e)}containsElement(t,e){return tt(t,e)}query(t,e,n){return et(t,e,n)}computeStyle(t,e,n){return window.getComputedStyle(t)[e]}buildKeyframeElement(t,e,n){n=n.map(t=>nt(t));let r=`@keyframes ${e} {\n`,s="";n.forEach(t=>{s=" ";const e=parseFloat(t.offset);r+=`${s}${100*e}% {\n`,s+=" ",Object.keys(t).forEach(e=>{const n=t[e];switch(e){case"offset":return;case"easing":return void(n&&(r+=`${s}animation-timing-function: ${n};\n`));default:return void(r+=`${s}${e}: ${n};\n`)}}),r+=s+"}\n"}),r+="}\n";const i=document.createElement("style");return i.innerHTML=r,i}animate(t,e,n,r,s,i=[],o){o&&this._notifyFaultyScrubber();const a=i.filter(t=>t instanceof qe),c={};kt(n,r)&&a.forEach(t=>{let e=t.currentSnapshot;Object.keys(e).forEach(t=>c[t]=e[t])});const l=function(t){let e={};return t&&(Array.isArray(t)?t:[t]).forEach(t=>{Object.keys(t).forEach(n=>{"offset"!=n&&"easing"!=n&&(e[n]=t[n])})}),e}(e=Tt(t,e,c));if(0==n)return new Ke(t,l);const u="gen_css_kf_"+this._count++,h=this.buildKeyframeElement(t,u,e);document.querySelector("head").appendChild(h);const d=Pe(t,e),f=new qe(t,e,u,n,r,s,l,d);return f.onDestroy(()=>{var t;(t=h).parentNode.removeChild(t)}),f}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class We{constructor(t,e,n,r){this.element=t,this.keyframes=e,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const t=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,t,this.options),this._finalKeyframe=t.length?t[t.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(t,e,n){return t.animate(e,n)}onStart(t){this._onStartFns.push(t)}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer.currentTime=t*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const t={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(e=>{"offset"!=e&&(t[e]=this._finished?this._finalKeyframe[e]:At(this.element,e))}),this.currentSnapshot=t}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}}class Xe{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(Qe().toString()),this._cssKeyframesDriver=new Ge}validateStyleProperty(t){return Y(t)}matchesElement(t,e){return J(t,e)}containsElement(t,e){return tt(t,e)}query(t,e,n){return et(t,e,n)}computeStyle(t,e,n){return window.getComputedStyle(t)[e]}overrideWebAnimationsSupport(t){this._isNativeImpl=t}animate(t,e,n,r,s,i=[],o){if(!o&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(t,e,n,r,s,i);const a={duration:n,delay:r,fill:0==r?"both":"forwards"};s&&(a.easing=s);const c={},l=i.filter(t=>t instanceof We);kt(n,r)&&l.forEach(t=>{let e=t.currentSnapshot;Object.keys(e).forEach(t=>c[t]=e[t])});const u=Pe(t,e=Tt(t,e=e.map(t=>mt(t,!1)),c));return new We(t,e,a,u)}}function Qe(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let Ze=(()=>{class t extends M.b{constructor(t,e){super(),this._nextAnimationId=0,this._renderer=t.createRenderer(e.body,{id:"0",encapsulation:r.P.None,styles:[],data:{animation:[]}})}build(t){const e=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(t)?Object(M.i)(t):t;return tn(this._renderer,null,e,"register",[n]),new Ye(e,this._renderer)}}return t.\u0275fac=function(e){return new(e||t)(r.Xb(r.E),r.Xb(c.c))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})();class Ye extends M.c{constructor(t,e){super(),this._id=t,this._renderer=e}create(t,e){return new Je(this._id,t,e||{},this._renderer)}}class Je{constructor(t,e,n,r){this.id=t,this.element=e,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(t,e){return this._renderer.listen(this.element,`@@${this.id}:${t}`,e)}_command(t,...e){return tn(this._renderer,this.element,this.id,t,e)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(t){this._command("setPosition",t)}getPosition(){return 0}}function tn(t,e,n,r,s){return t.setProperty(e,`@@${n}:${r}`,s)}const en="@",nn="@.disabled";let rn=(()=>{class t{constructor(t,e,n){this.delegate=t,this.engine=e,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),e.onRemovalComplete=(t,e)=>{e&&e.parentNode(t)&&e.removeChild(t.parentNode,t)}}createRenderer(t,e){const n=this.delegate.createRenderer(t,e);if(!(t&&e&&e.data&&e.data.animation)){let t=this._rendererCache.get(n);return t||(t=new sn("",n,this.engine),this._rendererCache.set(n,t)),t}const r=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,t);const i=e=>{Array.isArray(e)?e.forEach(i):this.engine.registerTrigger(r,s,t,e.name,e)};return e.data.animation.forEach(i),new on(this,s,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(t,e,n){t>=0&&t<this._microtaskId?this._zone.run(()=>e(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(t=>{const[e,n]=t;e(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([e,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return t.\u0275fac=function(e){return new(e||t)(r.Xb(r.E),r.Xb(Ie),r.Xb(r.z))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})();class sn{constructor(t,e,n){this.namespaceId=t,this.delegate=e,this.engine=n,this.destroyNode=this.delegate.destroyNode?t=>e.destroyNode(t):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,n){this.delegate.insertBefore(t,e,n),this.engine.onInsert(this.namespaceId,e,t,!0)}removeChild(t,e,n){this.engine.onRemove(this.namespaceId,e,this.delegate,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){e.charAt(0)==en&&e==nn?this.disableAnimations(t,!!n):this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.delegate.listen(t,e,n)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}}class on extends sn{constructor(t,e,n,r){super(e,n,r),this.factory=t,this.namespaceId=e}setProperty(t,e,n){e.charAt(0)==en?"."==e.charAt(1)&&e==nn?this.disableAnimations(t,n=void 0===n||!!n):this.engine.process(this.namespaceId,t,e.substr(1),n):this.delegate.setProperty(t,e,n)}listen(t,e,n){if(e.charAt(0)==en){const r=function(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}(t);let s=e.substr(1),i="";return s.charAt(0)!=en&&([s,i]=function(t){const e=t.indexOf(".");return[t.substring(0,e),t.substr(e+1)]}(s)),this.engine.listen(this.namespaceId,r,s,i,t=>{this.factory.scheduleListenerCallback(t._data||-1,n,t)})}return this.delegate.listen(t,e,n)}}let an=(()=>{class t extends Ie{constructor(t,e,n){super(t.body,e,n)}}return t.\u0275fac=function(e){return new(e||t)(r.Xb(c.c),r.Xb(st),r.Xb(te))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})();const cn=[{provide:st,useFactory:function(){return"function"==typeof Qe()?new Xe:new Ge}},{provide:new r.q("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:M.b,useClass:Ze},{provide:te,useFactory:function(){return new ee}},{provide:Ie,useClass:an},{provide:r.E,useFactory:function(t,e,n){return new rn(t,e,n)},deps:[u.e,Ie,r.z]}];let ln=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:cn,imports:[u.a]}),t})();function un(t){return new L(t,"./assets/i18n/",".json")}let hn=(()=>{class t{constructor(t){t.addIcons(x,E,O,I,k,A,w,R,D,N,P,S,C,T,j)}}return t.\u0275mod=r.Ib({type:t,bootstrap:[b]}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)(r.Xb(_.b))},providers:[{provide:c.i,useClass:c.f}],imports:[[u.a,ln,f,a.i,_.c,v.b,a.h,o.b.forRoot({loader:{provide:o.a,useFactory:un,deps:[v.a]}}),l]]}),t})();s.a.production&&Object(r.R)(),u.d().bootstrapModule(hn).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);