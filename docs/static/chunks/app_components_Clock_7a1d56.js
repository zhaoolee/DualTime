(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_Clock_7a1d56.js", {

"[project]/app/components/Clock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Clock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function Clock() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // 初始状态为 null，避免 hydration 错误
    ;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            setMounted(true);
            setTime(new Date());
            const timer = setInterval({
                "Clock.useEffect.timer": ()=>{
                    setTime(new Date());
                }
            }["Clock.useEffect.timer"], 1000);
            return ({
                "Clock.useEffect": ()=>clearInterval(timer)
            })["Clock.useEffect"];
        }
    }["Clock.useEffect"], []);
    // 如果还没有 mounted 或者时间还没设置，显示默认状态
    if (!mounted || !time) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "280",
                        height: "280",
                        className: "drop-shadow-lg clock-dial",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "140",
                                cy: "140",
                                r: "130",
                                fill: "white",
                                stroke: "#e5e7eb",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "140",
                                cy: "140",
                                r: "120",
                                fill: "none",
                                stroke: "#f3f4f6",
                                strokeWidth: "1",
                                strokeDasharray: "2,4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "140",
                                y1: "20",
                                x2: "140",
                                y2: "30",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "195.31",
                                y1: "32.5",
                                x2: "190.66",
                                y2: "40.34",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "235",
                                y1: "84.69",
                                x2: "227.16",
                                y2: "89.34",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "250",
                                y1: "140",
                                x2: "240",
                                y2: "140",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "235",
                                y1: "195.31",
                                x2: "227.16",
                                y2: "190.66",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "195.31",
                                y1: "247.5",
                                x2: "190.66",
                                y2: "239.66",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "140",
                                y1: "260",
                                x2: "140",
                                y2: "250",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "84.69",
                                y1: "247.5",
                                x2: "89.34",
                                y2: "239.66",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "45",
                                y1: "195.31",
                                x2: "52.84",
                                y2: "190.66",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "30",
                                y1: "140",
                                x2: "40",
                                y2: "140",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "45",
                                y1: "84.69",
                                x2: "52.84",
                                y2: "89.34",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "84.69",
                                y1: "32.5",
                                x2: "89.34",
                                y2: "40.34",
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "140",
                                y: "40",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "12"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "185",
                                y: "55",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "215",
                                y: "95",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "225",
                                y: "145",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "215",
                                y: "190",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "185",
                                y: "225",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "5"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "140",
                                y: "240",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "6"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "95",
                                y: "225",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "65",
                                y: "190",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "8"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "55",
                                y: "145",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "9"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "65",
                                y: "95",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "10"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "95",
                                y: "55",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: "11"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "140",
                                y1: "140",
                                x2: "140",
                                y2: "80",
                                stroke: "#374151",
                                strokeWidth: "6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "140",
                                y1: "140",
                                x2: "140",
                                y2: "55",
                                stroke: "#374151",
                                strokeWidth: "4",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "140",
                                y1: "140",
                                x2: "140",
                                y2: "45",
                                stroke: "#10b981",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "140",
                                cy: "140",
                                r: "8",
                                fill: "#374151"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "140",
                                cy: "140",
                                r: "4",
                                fill: "#10b981"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Clock.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Clock.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl font-bold text-gray-800 mb-4 select-none flex items-baseline justify-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "12:00"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-semibold text-gray-600",
                                    children: "AM"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 select-none",
                            children: "加载中..."
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Clock.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Clock.js",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    // 计算指针角度
    const getHourAngle = ()=>{
        const hours = time.getHours() % 12;
        const minutes = time.getMinutes();
        return hours * 30 + minutes * 0.5 // 每小时30度，每分钟0.5度
        ;
    };
    const getMinuteAngle = ()=>{
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return minutes * 6 + seconds * 0.1 // 每分钟6度，每秒0.1度
        ;
    };
    const getSecondAngle = ()=>{
        return time.getSeconds() * 6 // 每秒6度
        ;
    };
    // 格式化数字显示
    const formatTime = ()=>{
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12 // 0点显示为12点
        ;
        return {
            time: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
            ampm: ampm
        };
    };
    const formattedTime = formatTime();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "280",
                    height: "280",
                    className: "drop-shadow-lg clock-dial",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "140",
                            r: "130",
                            fill: "white",
                            stroke: "#e5e7eb",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "140",
                            r: "120",
                            fill: "none",
                            stroke: "#f3f4f6",
                            strokeWidth: "1",
                            strokeDasharray: "2,4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        [
                            ...Array(12)
                        ].map((_, i)=>{
                            const angle = i * 30 - 90;
                            const x1 = 140 + 110 * Math.cos(angle * Math.PI / 180);
                            const y1 = 140 + 110 * Math.sin(angle * Math.PI / 180);
                            const x2 = 140 + 100 * Math.cos(angle * Math.PI / 180);
                            const y2 = 140 + 100 * Math.sin(angle * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2,
                                stroke: "#374151",
                                strokeWidth: "3"
                            }, i, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this);
                        }),
                        [
                            ...Array(60)
                        ].map((_, i)=>{
                            if (i % 5 !== 0) {
                                const angle = i * 6 - 90;
                                const x1 = 140 + 110 * Math.cos(angle * Math.PI / 180);
                                const y1 = 140 + 110 * Math.sin(angle * Math.PI / 180);
                                const x2 = 140 + 105 * Math.cos(angle * Math.PI / 180);
                                const y2 = 140 + 105 * Math.sin(angle * Math.PI / 180);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x1,
                                    y1: y1,
                                    x2: x2,
                                    y2: y2,
                                    stroke: "#9ca3af",
                                    strokeWidth: "1"
                                }, i, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this);
                            }
                            return null;
                        }),
                        [
                            12,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11
                        ].map((number, i)=>{
                            const angle = i * 30 - 90;
                            const x = 140 + 85 * Math.cos(angle * Math.PI / 180);
                            const y = 140 + 85 * Math.sin(angle * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x,
                                y: y,
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-700 text-lg font-bold select-none",
                                children: number
                            }, number, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 252,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "140",
                            y1: "140",
                            x2: 140 + 60 * Math.cos((getHourAngle() - 90) * Math.PI / 180),
                            y2: 140 + 60 * Math.sin((getHourAngle() - 90) * Math.PI / 180),
                            stroke: "#374151",
                            strokeWidth: "6",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "140",
                            y1: "140",
                            x2: 140 + 85 * Math.cos((getMinuteAngle() - 90) * Math.PI / 180),
                            y2: 140 + 85 * Math.sin((getMinuteAngle() - 90) * Math.PI / 180),
                            stroke: "#374151",
                            strokeWidth: "4",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "140",
                            y1: "140",
                            x2: 140 + 95 * Math.cos((getSecondAngle() - 90) * Math.PI / 180),
                            y2: 140 + 95 * Math.sin((getSecondAngle() - 90) * Math.PI / 180),
                            stroke: "#10b981",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "140",
                            r: "8",
                            fill: "#374151"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "140",
                            r: "4",
                            fill: "#10b981"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Clock.js",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Clock.js",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl font-bold text-gray-800 mb-4 select-none flex items-baseline justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formattedTime.time
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-gray-600",
                                children: formattedTime.ampm
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Clock.js",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 select-none",
                        children: time.toLocaleDateString('zh-CN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            weekday: 'long'
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Clock.js",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Clock.js",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Clock.js",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(Clock, "hIdH065GB9CgNaXrcH330h+MbjA=");
_c = Clock;
var _c;
__turbopack_refresh__.register(_c, "Clock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_Clock_7a1d56.js.map