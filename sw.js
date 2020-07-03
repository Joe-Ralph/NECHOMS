if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let i = Promise.resolve();
            return r[e] || (i = new Promise(async i => {
                if ("document" in self) {
                    const r = document.createElement("script");
                    r.src = e, document.head.appendChild(r), r.onload = i
                } else importScripts(e), i()
            })), i.then(() => {
                if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
                return r[e]
            })
        },
        i = (i, r) => {
            Promise.all(i.map(e)).then(e => r(1 === e.length ? e[0] : e))
        },
        r = {
            require: Promise.resolve(i)
        };
    self.define = (i, s, c) => {
        r[i] || (r[i] = Promise.resolve().then(() => {
            let r = {};
            const d = {
                uri: location.origin + i.slice(1)
            };
            return Promise.all(s.map(i => {
                switch (i) {
                    case "exports":
                        return r;
                    case "module":
                        return d;
                    default:
                        return e(i)
                }
            })).then(e => {
                const i = c(...e);
                return r.default || (r.default = i), r
            })
        }))
    }
}
define("./sw.js", ["./workbox-f80ee547"], (function (e) {
    "use strict";
    self.addEventListener("message", e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }), e.precacheAndRoute([{
        url: "404.html",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    }, {
        url: "css/style.css",
        revision: "fdc5281e3aca134377a8cd9e1585d9d8"
    }, {
        url: "css/uikit-rtl.min.css",
        revision: "f03fa8ff645d19246ff7025163c37c1d"
    }, {
        url: "css/uikit.min.css",
        revision: "99637d0d20a48fdc52bbe1cce51e085c"
    }, {
        url: "favicon.ico",
        revision: "097d36149c010ab3b783020a1dc576fe"
    }, {
        url: "html/feedback.html",
        revision: "d314d50999cbd777b4dd7c91b85dbb00"
    }, {
        url: "html/menu.html",
        revision: "ab0e7cab07d5161d75d179458f6b4814"
    }, {
        url: "html/permit.html",
        revision: "47ebd8b6a9a542edd4cc07213850f993"
    }, {
        url: "html/report.html",
        revision: "d40b27bde2753377d658611df171bfbe"
    }, {
        url: "icon.svg",
        revision: "4d1aacb548938cd322fb3c0869d161b2"
    }, {
        url: "index.html",
        revision: "374a0e816a5c1b72396098af0c9d9272"
    }, {
        url: "js/jquery-3.5.1.min.js",
        revision: "dc5e7f18c8d36ac1d3d4753a87c98d0a"
    }, {
        url: "js/tilt.jquery.min.js",
        revision: "034d38aaa44f4ac1723c041d215eb146"
    }, {
        url: "js/uikit-icons.min.js",
        revision: "c084847511a47cb85189e313320817b6"
    }, {
        url: "js/uikit.min.js",
        revision: "8ebf60659d435d84fb843ece0f881032"
    }, {
        url: "manifest.json",
        revision: "ddafb0a10f58354caeba73d5ea14c98e"
    }, {
        url: "offline.html",
        revision: "972e906c2091e6682cff27e95ab14d52"
    }, {
        url: "temp.html",
        revision: "2406eff6c6be0acf41631706e8883674"
    }], {})
}));
//# sourceMappingURL=sw.js.map