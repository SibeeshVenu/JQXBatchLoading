/*
jQWidgets v3.5.0 (2014-Sep-15)
Copyright (c) 2011-2014 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function (b) { b.extend(b.jqx._jqxGrid.prototype, { exportdata: function (T, N, P, ab, Q, W, ag) { if (!b.jqx.dataAdapter.ArrayExporter) { throw "jqxGrid: Missing reference to jqxdata.export.js!" } if (P == undefined) { P = true } var a = this; if (ab == undefined) { var ab = this.getrows(); if (ab.length == 0) { throw "No data to export." } } this.exporting = true; if (!this.pageable) { this.loadondemand = true } if (this.altrows) { this._renderrows(this.virtualsizeinfo) } var J = Q != undefined ? Q : false; var M = {}; var aa = {}; var U = []; var ac = this.host.find(".jqx-grid-cell:first"); var V = this.host.find(".jqx-grid-cell-alt:first"); ac.removeClass(this.toThemeProperty("jqx-grid-cell-selected")); ac.removeClass(this.toThemeProperty("jqx-fill-state-pressed")); V.removeClass(this.toThemeProperty("jqx-grid-cell-selected")); V.removeClass(this.toThemeProperty("jqx-fill-state-pressed")); ac.removeClass(this.toThemeProperty("jqx-grid-cell-hover")); ac.removeClass(this.toThemeProperty("jqx-fill-state-hover")); V.removeClass(this.toThemeProperty("jqx-grid-cell-hover")); V.removeClass(this.toThemeProperty("jqx-fill-state-hover")); var ah = "cell"; var aj = 1; var K = "column"; var af = 1; var Z = []; for (var i = 0; i < this.columns.records.length; i++) { var ai = this.columns.records[i]; if (ai.cellclassname != "") { ai.customCellStyles = new Array(); if (typeof ai.cellclassname == "string") { for (var j = 0; j < ab.length; j++) { ai.customCellStyles[j] = ai.cellclassname } } else { for (var j = 0; j < ab.length; j++) { var X = this.getrowboundindex(j); var ae = ai.cellclassname(X, ai.displayfield, ab[j][ai.displayfield], ab[j]); if (ae) { ai.customCellStyles[j] = ae } } } } } var O = new Array(); b.each(this.columns.records, function (h) { var l = b(a.table[0].rows[0].cells[h]); if (a.table[0].rows.length > 1) { var f = b(a.table[0].rows[1].cells[h]) } var g = this; var c = function (n) { n.removeClass(a.toThemeProperty("jqx-grid-cell-selected")); n.removeClass(a.toThemeProperty("jqx-fill-state-pressed")); n.removeClass(a.toThemeProperty("jqx-grid-cell-hover")); n.removeClass(a.toThemeProperty("jqx-fill-state-hover")); if (g.customCellStyles) { for (var o in g.customCellStyles) { n.removeClass(g.customCellStyles[o]) } } }; c(l); if (f) { c(f) } if (this.displayfield == null) { return true } if (a.showaggregates) { if (a.getcolumnaggregateddata) { Z.push(a.getcolumnaggregateddata(this.displayfield, this.aggregates, true, ab)) } } var d = a._getexportcolumntype(this); if (this.exportable && (!this.hidden || J)) { M[this.displayfield] = {}; M[this.displayfield].text = this.text; M[this.displayfield].width = parseInt(this.width); if (isNaN(M[this.displayfield].width)) { M[this.displayfield].width = 60 } M[this.displayfield].formatString = this.cellsformat; M[this.displayfield].localization = a.gridlocalization; M[this.displayfield].type = d; M[this.displayfield].cellsAlign = this.cellsalign; M[this.displayfield].hidden = !P; M[this.displayfield].displayfield = this.displayfield; O.push(M[this.displayfield]) } ah = "cell" + aj; var m = b(this.element); if (this.element == undefined) { m = b(this.uielement) } K = "column" + af; if (T == "html" || T == "xls" || T == "pdf") { var e = function (p, v, s, q, r, o, n, t, u) { aa[p] = {}; if (typeof v != "undefined") { aa[p]["font-size"] = v.css("font-size"); aa[p]["font-weight"] = v.css("font-weight"); aa[p]["font-style"] = v.css("font-style"); aa[p]["background-color"] = o._getexportcolor(v.css("background-color")); aa[p]["color"] = o._getexportcolor(v.css("color")); aa[p]["border-color"] = o._getexportcolor(v.css("border-top-color")) } if (s) { aa[p]["text-align"] = r.align } else { aa[p]["text-align"] = r.cellsalign; aa[p]["formatString"] = r.cellsformat; aa[p]["dataType"] = d } if (T == "html" || T == "pdf") { aa[p]["border-top-width"] = v.css("border-top-width"); aa[p]["border-left-width"] = v.css("border-left-width"); aa[p]["border-right-width"] = v.css("border-right-width"); aa[p]["border-bottom-width"] = v.css("border-bottom-width"); aa[p]["border-top-style"] = v.css("border-top-style"); aa[p]["border-left-style"] = v.css("border-left-style"); aa[p]["border-right-style"] = v.css("border-right-style"); aa[p]["border-bottom-style"] = v.css("border-bottom-style"); if (s) { if (n == 0) { aa[p]["border-left-width"] = v.css("border-right-width") } aa[p]["border-top-width"] = v.css("border-right-width"); aa[p]["border-bottom-width"] = v.css("border-bottom-width") } else { if (n == 0) { aa[p]["border-left-width"] = v.css("border-right-width") } } aa[p]["height"] = v.css("height") } if (r.exportable && (!r.hidden || J)) { if (t == true) { if (!M[r.displayfield].customCellStyles) { M[r.displayfield].customCellStyles = new Array() } M[r.displayfield].customCellStyles[u] = p } else { if (s) { M[r.displayfield].style = p } else { if (!q) { M[r.displayfield].cellStyle = p } else { M[r.displayfield].cellAltStyle = p } } } } }; e(K, m, true, false, this, a, h); af++; e(ah, l, false, false, this, a, h); if (a.altrows) { ah = "cellalt" + aj; e(ah, f, false, true, this, a, h) } if (this.customCellStyles) { for (var k in g.customCellStyles) { l.removeClass(g.customCellStyles[k]) } for (var k in g.customCellStyles) { l.addClass(g.customCellStyles[k]); e(ah + g.customCellStyles[k], l, false, false, this, a, h, true, k); l.removeClass(g.customCellStyles[k]) } } aj++ } }); b.each(this.columns.records, function (c) { if (M[this.displayfield]) { M[this.displayfield].columnsDataFields = O } }); if (this.showaggregates) { var L = []; var I = T == "xls" ? "AG" : ""; var Y = this.groupable ? this.groups.length : 0; if (this.rowdetails) { Y++ } if (Z.length > 0) { b.each(this.columns.records, function (c) { if (this.aggregates) { for (var e = 0; e < this.aggregates.length; e++) { if (!L[e]) { L[e] = {} } if (L[e]) { var f = a._getaggregatename(this.aggregates[e]); var d = a._getaggregatetype(this.aggregates[e]); var g = Z[c - Y]; if (g) { L[e][this.displayfield] = I + f + ": " + g[d] } } } } }); b.each(this.columns.records, function (c) { for (var d = 0; d < L.length; d++) { if (L[d][this.displayfield] == undefined) { L[d][this.displayfield] = I } } }) } b.each(L, function () { ab.push(this) }) } var ad = this; var R = b.jqx.dataAdapter.ArrayExporter(ab, M, aa); if (N == undefined) { this._renderrows(this.virtualsizeinfo); var S = R.exportTo(T); if (this.showaggregates) { b.each(L, function () { ab.pop(this) }) } setTimeout(function () { ad.exporting = false }, 50); return S } else { R.exportToFile(T, N, W, ag) } if (this.showaggregates) { b.each(L, function () { ab.pop(this) }) } this._renderrows(this.virtualsizeinfo); setTimeout(function () { ad.exporting = false }, 50) }, _getexportcolor: function (t) { var g = t; if (t == "transparent") { g = "#FFFFFF" } if (!g || !g.toString()) { g = "#FFFFFF" } if (g.toString().indexOf("rgb") != -1) { var s = g.split(","); if (g.toString().indexOf("rgba") != -1) { var n = parseInt(s[0].substring(5)); var r = parseInt(s[1]); var p = parseInt(s[2]); var q = parseInt(s[3].substring(1, 4)); var u = { r: n, g: r, b: p }; var o = this._rgbToHex(u); if (n == 0 && r == 0 && p == 0 && q == 0) { return "#ffffff" } return "#" + o } var n = parseInt(s[0].substring(4)); var r = parseInt(s[1]); var p = parseInt(s[2].substring(1, 4)); var u = { r: n, g: r, b: p }; var o = this._rgbToHex(u); return "#" + o } else { if (g.toString().indexOf("#") != -1) { if (g.toString().length == 4) { var a = g.toString().substring(1, 4); g += a } } } return g }, _rgbToHex: function (a) { return this._intToHex(a.r) + this._intToHex(a.g) + this._intToHex(a.b) }, _intToHex: function (a) { var d = (parseInt(a).toString(16)); if (d.length == 1) { d = ("0" + d) } return d.toUpperCase() }, _getexportcolumntype: function (k) { var l = this; var n = "string"; var m = l.source.datafields || ((l.source._source) ? l.source._source.datafields : null); if (m) { var p = ""; b.each(m, function () { if (this.name == k.displayfield) { if (this.type) { p = this.type } return false } }); if (p) { return p } } if (k != null) { if (this.dataview.cachedrecords == undefined) { return n } var a = null; if (!this.virtualmode) { if (this.dataview.cachedrecords.length == 0) { return n } a = this.dataview.cachedrecords[0][k.displayfield]; if (a != null && a.toString() == "") { return "string" } } else { b.each(this.dataview.cachedrecords, function () { a = this[k.displayfield]; return false }) } if (a != null) { if (k.cellsformat.indexOf("c") != -1) { return "number" } if (k.cellsformat.indexOf("n") != -1) { return "number" } if (k.cellsformat.indexOf("p") != -1) { return "number" } if (k.cellsformat.indexOf("d") != -1) { return "date" } if (k.cellsformat.indexOf("y") != -1) { return "date" } if (k.cellsformat.indexOf("M") != -1) { return "date" } if (k.cellsformat.indexOf("m") != -1) { return "date" } if (k.cellsformat.indexOf("t") != -1) { return "date" } if (typeof a == "boolean") { n = "boolean" } else { if (b.jqx.dataFormat.isNumber(a)) { n = "number" } else { var o = new Date(a); if (o.toString() == "NaN" || o.toString() == "Invalid Date") { if (b.jqx.dataFormat) { o = b.jqx.dataFormat.tryparsedate(a); if (o != null) { if (o && o.getFullYear()) { if (o.getFullYear() == 1970 && o.getMonth() == 0 && o.getDate() == 1) { var j = new Number(a); if (!isNaN(j)) { return "number" } return "string" } } return "date" } else { n = "string" } } else { n = "string" } } else { n = "date" } } } } } return n } }) })(jqxBaseFramework);