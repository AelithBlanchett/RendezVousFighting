var fChatLibInstance;
var channel;

module.exports = function (parent, chanName) {
    fChatLibInstance = parent;

    var cmdHandler = {};
    channel = chanName;

    cmdHandler.guide = function (args, data) {
        console.log(data);
    };


    return cmdHandler;
};


//BBParser shamelessly borrowed from the f-chat javascript. Feel free to skip on past this bit.
BBParser = function () {
    var a = {};
    a._urlregex = /^\s*((?:https?|ftps?|irc):\/\/[^\s\/$.?#"'].[^\s]*)\s*$/;
    a.validateURL = function (g) {
        return a._urlregex.test(g)
    };
    a.unescapeURL = function (g) {
        g.replace('"', "&quot;");
        g.replace("'", "&#39;");
        g.replace("<", "&lt;");
        g.replace(">", "&gt;");
        var k = document.createElement("div");
        k.innerHTML = g;
        return k.textContent
    };
    var b = {
            noparse: {
                render: function (g) {
                    return g
                },
                allowed: false
            },
            b: {
                opentag: "strong",
                closetag: "strong",
                allowed: true
            },
            i: {
                opentag: "em",
                closetag: "em",
                allowed: true
            },
            u: {
                opentag: 'span style="text-decoration:underline;"',
                closetag: "span",
                allowed: true
            },
            s: {
                opentag: "del",
                closetag: "del",
                allowed: true
            },
            sub: {
                opentag: "sub",
                closetag: "sub",
                allowed: ["b", "i", "u"]
            },
            sup: {
                opentag: "sup",
                closetag: "sup",
                allowed: ["b", "i", "u"]
            },
            url: {
                render: function (g, k) {
                    if (typeof g == undefined || g.length == 0) {
                        g = k;
                        k = undefined
                    }
                    if (typeof k != "undefined") {
                        k = k.replace(/ /g, "%20");
                        if (a.validateURL(k) && !a.validateURL(g)) {
                            var l = a._urlregex.exec(k),
                                m = l[1].match(/(https?|ftps?|irc):\/\/(?:www.)?([^\/]+)/)[2],
                                p = document.createElement("div"),
                                q = document.createElement("a");
                            q.href = a.unescapeURL(l[1]);
                            q.className = "ParsedLink ImageLink";
                            q.target = "_blank";
                            q.textContent = g.replace(/&amp;/g, "&");
                            p.appendChild(q);
                            return p.innerHTML + ' <span style="font-size: 0.8em;">[' + m + "]</span>"
                        } else return "[bad url: " + k + "] " + g
                    } else if (a.validateURL(g)) {
                        l = a._urlregex.exec(g);
                        p = document.createElement("div");
                        q = document.createElement("a");
                        q.href = a.unescapeURL(l[1]);
                        q.className = "ParsedLink ImageLink";
                        q.target = "_blank";
                        q.textContent = l[1];
                        p.appendChild(q);
                        return p.innerHTML
                    } else return "[bad url: " +
                        g + "] "
                },
                allowed: false
            },
            color: {
                render: function (g, k) {
                    return '<span style="color:' + k + ';">' + g + "</span>"
                },
                allowed: true
            }
        }, c = null,
        d = null,
        e = false,
        f = null,
        h = /(\[[\[ \/]*)([^\[\]]+)([\] ]*\])/,
        n = false,
        o = "Text cut: too long.",
        t = function (g, k) {
            for (var l = 0; l < k.length; l++)
                if (k[l] == g) return true;
            return false
        }, x = function (g, k) {
            if (!b[k]) return true;
            k = b[k].allowed;
            if (g == true && k == true) return true;
            if (typeof k == "undefined") return g;
            if (g == false) return false;
            for (var l = [], m = 0; m < k.length; m++)
                if (g == true || t(g, k[m])) l.push(k[m]);
            return l.length == 0 ? false : l
        }, v = function (g, k, l) {
            if (g instanceof Array) {
                k = "";
                for (var m = 0; m < g.length; m++) k += v(g[m], l, x(l, g[m].tagname));
                return k
            }
            if (g.tagname == "text") {
                if (n && /\w{50,}/.test(c.substring(g.start, g.end))) return o;
                return c.substring(g.start, g.end)
            }
            if (g.tagname && k != false && (k == true || t(g.tagname, k))) {
                m = b[g.tagname];
                if (!g.content) return "";
                k = v(g.content, k, l);
                return typeof m.render == "function" ? m.render(k, g.attribute) : "<" + m.opentag + ">" + k + "</" + m.closetag + ">"
            } else e && g.tagname && f.push("The [" + g.tagname +
                "] tag is not allowed here: " + c.substr(g.start, 60) + "...");
            return c.substring(g.start, g.end)
        }, w = function (g, k, l) {
            for (var m = 0; m < g.length; m++) {
                if (g[m].tagname == "text") {
                    if (m == 0) g[m].start = k;
                    if (m == g.length - 1) g[m].end = l
                }
                if (m > 0 && g[m - 1].tagname == "text") g[m - 1].end = g[m].start
            }
        }, u = function (g, k, l, m) {
            if (g != null) {
                var p = g.openstart,
                    q = g.openend;
                if (g.tagname == "noparse") {
                    var r = "[/noparse]";
                    q = c.substring(g.openend, l).indexOf(r);
                    if (q > -1) q += g.openend + 10;
                    else q = l;
                    return {
                        tagname: "noparse",
                        start: g.openstart,
                        end: q,
                        content: [{
                            tagname: "text",
                            start: g.openstart + 9,
                            end: q - 10
                        }]
                    }
                }
                p = {
                    tagname: g.tagname,
                    attribute: g.attribute,
                    start: g.openstart
                };
                m = u(null, q + 1, l, m + 1);
                k = m[m.length - 1].end;
                r = "[/";
                r = c.substring(k, l).indexOf(r);
                if (r > -1) r += k;
                var s = c.substring(r, l).indexOf("]");
                if (s > -1) s += r;
                var y = c.substring(r + 2, s);
                if (r > -1 && y == g.tagname) {
                    p.end = s + 1;
                    p.content = m
                } else {
                    if (e) c.substring(k, l).indexOf("[/" + g.tagname) == -1 ? f.push("Open [" + g.tagname + "] tag is not properly closed (with [/" + g.tagname + "]).") : f.push("Bad BBCode in [" + g.tagname + "] tag, somewhere around/after '" +
                        c.substr(q + 1, 50) + "...'.");
                    p.tagname = "text";
                    p.end = r == -1 || s == -1 ? l : s + 1
                }
                w(m, q + 1, r);
                p.content = m;
                return p
            } else {
                p = c.substring(k, l).indexOf("[");
                if (p > -1) p += k;
                q = c.substring(p, l).indexOf("]");
                if (q > -1) q += p;
                r = null;
                if (p > -1 && q > -1) {
                    g = c.substring(p + 1, q).match(/^([a-z]+)(?:=([^\]]+))?/i);
                    if (g != null) {
                        r = g[1].toLowerCase();
                        if (b[r]) {
                            r = {
                                tagname: r
                            };
                            if (g[2]) r.attribute = g[2];
                            r = r
                        } else {
                            e && f.push("This looks like a bbcode tag, but isn't one: [" + r + "]");
                            r = null
                        }
                    } else r = null
                } else return [{
                    tagname: "text",
                    start: k,
                    end: k
                }]; if (r == null) return [{
                    tagname: "text",
                    start: k,
                    end: k
                }];
                g = [];
                if (k < p) {
                    k = u(null, k, p, m + 1);
                    for (s = 0; s < k.length; s++) g.push(k[s])
                }
                r.openstart = p;
                r.openend = q;
                p = u(r, q, l, m + 1, true);
                g.push(p);
                if (p.end < l) {
                    k = u(null, p.end, l, m + 1);
                    for (s = 0; s < k.length; s++) g.push(k[s])
                }
                return g
            }
        };

    return {
        Util: a,
        parseBB: function (g) {
            if (e) f = [];
            for (var k = g.replace(/\[\]/g, "&#91;&#93;"), l = 1, m = 0; l !== null;) {
                l = h.exec(k.substr(m));
                if (l !== null) {
                    if (l[2].indexOf("=") != -1) l[2] = l[2].slice(0, l[2].indexOf("="));
                    if (l[1] != "[" && l[1] != "[/" || l[3] != "]" || !b[l[2]]) {
                        var p = l[0].replace(/\[/g, "&#91;").replace(/\]/g,
                            "&#93;");
                        k = k.slice(0, m + l.index) + p + k.slice(m + l.index + l[0].length);
                        m = m + l.index + p.length
                    } else m += l[0].length
                }
            }
            c = k;
            d = u(null, 0, c.length, 0);
            w(d, 0, c.length);
            k = v(d, true, true);
            if (k.length == 0 && g.length > 0) {
                g = g;
                f.push("Toplevel tag structure errors found. Check your out-most tags.")
            } else g = k; if (e && f.length > 0) {
                k = '<div style="border: 2px solid yellow; padding: 3px; background: #600; color: white; margin-bottom: 1.5em;">Warning: The BBCode parser has found errors in your code.<ul style="margin-top: 0.5em; margin-bottom: 0.5em; padding-left: 1em; margin-left: 0.5em; list-style-type: square;">';
                for (var q in f) k += "<li>" + f[q].replace(/\n/g, "") + "</li>";
                k += "</ul></div>";
                g = k + g
            }
            d = c = null;
            return g
        },
        parseEmotes: function (g) {
            $.each(["hex-smile", "heart", "hex-yell", "hex-sad", "hex-grin", "hex-red", "hex-razz", "hex-twist", "hex-roll", "hex-mad", "hex-confuse", "hex-eek", "hex-wink", "lif-angry", "lif-blush", "lif-cry", "lif-evil", "lif-gasp", "lif-happy", "lif-meh", "lif-neutral", "lif-ooh", "lif-purr", "lif-roll", "lif-sad", "lif-sick", "lif-smile", "lif-whee", "lif-wink", "lif-wtf", "lif-yawn", "cake"], function (k, l) {
                g = g.replace(RegExp(":" +
                    l + ":", "gim"), "<img src='http://f-list.com/images/smileys/" + l + ".png' alt='" + l + " emote' title=':" + l + ":' align='middle'/>")
            });
            return g
        },
        parseContent: function (g) {
            g = this.parseBB(g);
            if (/<br ?\/?>/.test(g) == false) g = "";
            return this.parseEmotes(g)
        },
        addCustomTag: function (g, k, l) {
            b[g] = {
                render: l,
                allowed: k
            }
        },
        addSimpleTag: function (g, k, l, m) {
            b[g] = {
                opentag: k,
                closetag: l,
                allowed: m
            }
        },
        enableWarnings: function () {
            e = true
        },
        replaceLongWordsWith: function (g) {
            n = true;
            o = g
        }
    }
};
