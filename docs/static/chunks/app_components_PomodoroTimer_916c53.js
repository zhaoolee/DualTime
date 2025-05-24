(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_PomodoroTimer_916c53.js", {

"[project]/app/components/PomodoroTimer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PomodoroTimer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function PomodoroTimer() {
    _s();
    const [totalMinutes, setTotalMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 设定的总时间
    ;
    const [remainingMinutes, setRemainingMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 剩余分钟
    ;
    const [remainingSeconds, setRemainingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 剩余秒数
    ;
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotationAngle, setRotationAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 当前针的角度，0度为12点位置
    ;
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isResetting, setIsResetting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // 是否正在重新设定时间
    ;
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 计时器逻辑
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroTimer.useEffect": ()=>{
            let interval = null;
            if (isRunning && !isDragging && !isResetting && (remainingMinutes > 0 || remainingSeconds > 0)) {
                interval = setInterval({
                    "PomodoroTimer.useEffect": ()=>{
                        if (remainingSeconds > 0) {
                            setRemainingSeconds(remainingSeconds - 1);
                        } else if (remainingMinutes > 0) {
                            setRemainingMinutes(remainingMinutes - 1);
                            setRemainingSeconds(59);
                        }
                    }
                }["PomodoroTimer.useEffect"], 1000);
            } else if (remainingMinutes === 0 && remainingSeconds === 0 && isRunning && !isDragging && !isResetting) {
                setIsRunning(false);
                setRotationAngle(0);
                alert('番茄钟时间到！');
            }
            return ({
                "PomodoroTimer.useEffect": ()=>clearInterval(interval)
            })["PomodoroTimer.useEffect"];
        }
    }["PomodoroTimer.useEffect"], [
        isRunning,
        remainingMinutes,
        remainingSeconds,
        isDragging,
        isResetting
    ]);
    // 根据剩余时间更新针的角度（仅在非拖拽状态下）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroTimer.useEffect": ()=>{
            if (isRunning && totalMinutes > 0 && !isDragging && !isResetting) {
                const totalSeconds = totalMinutes * 60;
                const remainingTotalSeconds = remainingMinutes * 60 + remainingSeconds;
                const progress = remainingTotalSeconds / totalSeconds;
                setRotationAngle(progress * totalMinutes * 6) // 保持剩余时间对应的角度
                ;
            }
        }
    }["PomodoroTimer.useEffect"], [
        remainingMinutes,
        remainingSeconds,
        totalMinutes,
        isRunning,
        isDragging,
        isResetting
    ]);
    // 角度转换为分钟 (360度对应60分钟)
    const angleToMinutes = (angle)=>{
        return Math.round(angle / 6);
    };
    // 处理旋转拖拽 - 现在允许在倒计时时拖拽
    const handleMouseDown = (e)=>{
        setIsDragging(true);
        if (isRunning) {
            setIsResetting(true) // 开始重新设定时间
            ;
        }
        updateAngleFromMouse(e);
    };
    const handleMouseMove = (e)=>{
        if (!isDragging) return;
        updateAngleFromMouse(e);
    };
    const handleMouseUp = ()=>{
        if (isDragging && rotationAngle > 0) {
            // 松手后设定新的时间并开始倒计时
            const minutes = angleToMinutes(rotationAngle);
            setTotalMinutes(minutes);
            setRemainingMinutes(minutes);
            setRemainingSeconds(0);
            setIsRunning(true);
            setIsResetting(false);
        } else if (isDragging && rotationAngle === 0) {
            // 如果拖拽到0位置，则停止计时器
            setIsRunning(false);
            setIsResetting(false);
            setTotalMinutes(0);
            setRemainingMinutes(0);
            setRemainingSeconds(0);
        }
        setIsDragging(false);
    };
    const updateAngleFromMouse = (e)=>{
        const rect = timerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        // 调整角度，使12点位置为0度起点
        let normalizedAngle = (angle + 90 + 360) % 360;
        setRotationAngle(normalizedAngle);
    };
    // 触摸事件处理 - 现在允许在倒计时时拖拽
    const handleTouchStart = (e)=>{
        // 阻止默认行为，防止触发下拉刷新
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        if (isRunning) {
            setIsResetting(true) // 开始重新设定时间
            ;
        }
        const touch = e.touches[0];
        updateAngleFromTouch(touch);
    };
    const handleTouchMove = (e)=>{
        if (!isDragging) return;
        // 阻止默认行为，防止触发滚动和下拉刷新
        e.preventDefault();
        e.stopPropagation();
        const touch = e.touches[0];
        updateAngleFromTouch(touch);
    };
    const handleTouchEnd = ()=>{
        if (isDragging && rotationAngle > 0) {
            // 松手后设定新的时间并开始倒计时
            const minutes = angleToMinutes(rotationAngle);
            setTotalMinutes(minutes);
            setRemainingMinutes(minutes);
            setRemainingSeconds(0);
            setIsRunning(true);
            setIsResetting(false);
        } else if (isDragging && rotationAngle === 0) {
            // 如果拖拽到0位置，则停止计时器
            setIsRunning(false);
            setIsResetting(false);
            setTotalMinutes(0);
            setRemainingMinutes(0);
            setRemainingSeconds(0);
        }
        setIsDragging(false);
    };
    const updateAngleFromTouch = (touch)=>{
        const rect = timerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
        // 调整角度，使12点位置为0度起点
        let normalizedAngle = (angle + 90 + 360) % 360;
        setRotationAngle(normalizedAngle);
    };
    // 添加全局事件监听
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroTimer.useEffect": ()=>{
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
            return ({
                "PomodoroTimer.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                }
            })["PomodoroTimer.useEffect"];
        }
    }["PomodoroTimer.useEffect"], [
        isDragging,
        rotationAngle,
        isRunning
    ]);
    // 显示时间：拖拽或重新设定时显示设定时间，运行时显示剩余时间
    const displayMinutes = isDragging || isResetting ? angleToMinutes(rotationAngle) : remainingMinutes;
    const displaySeconds = isDragging || isResetting ? 0 : remainingSeconds;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ref: timerRef,
                    width: "280",
                    height: "280",
                    className: "cursor-pointer timer-dial",
                    onMouseDown: handleMouseDown,
                    onTouchStart: handleTouchStart,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "140",
                            r: "130",
                            fill: "white",
                            stroke: "#e5e7eb",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        [
                            ...Array(12)
                        ].map((_, i)=>{
                            const angle = i * 30// 每30度一个刻度（对应5分钟）
                            ;
                            const x1 = 140 + 120 * Math.cos((angle - 90) * Math.PI / 180);
                            const y1 = 140 + 120 * Math.sin((angle - 90) * Math.PI / 180);
                            const x2 = 140 + 110 * Math.cos((angle - 90) * Math.PI / 180);
                            const y2 = 140 + 110 * Math.sin((angle - 90) * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2,
                                stroke: "#6b7280",
                                strokeWidth: "2"
                            }, i, false, {
                                fileName: "[project]/app/components/PomodoroTimer.js",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this);
                        }),
                        [
                            ...Array(60)
                        ].map((_, i)=>{
                            if (i % 5 !== 0) {
                                const angle = i * 6 // 每6度一个小刻度（对应1分钟）
                                ;
                                const x1 = 140 + 120 * Math.cos((angle - 90) * Math.PI / 180);
                                const y1 = 140 + 120 * Math.sin((angle - 90) * Math.PI / 180);
                                const x2 = 140 + 115 * Math.cos((angle - 90) * Math.PI / 180);
                                const y2 = 140 + 115 * Math.sin((angle - 90) * Math.PI / 180);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x1,
                                    y1: y1,
                                    x2: x2,
                                    y2: y2,
                                    stroke: "#d1d5db",
                                    strokeWidth: "1"
                                }, `small-${i}`, false, {
                                    fileName: "[project]/app/components/PomodoroTimer.js",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this);
                            }
                            return null;
                        }),
                        [
                            0,
                            5,
                            10,
                            15,
                            20,
                            25,
                            30,
                            35,
                            40,
                            45,
                            50,
                            55
                        ].map((minute)=>{
                            const angle = minute * 6 // 每分钟6度
                            ;
                            const x = 140 + 100 * Math.cos((angle - 90) * Math.PI / 180);
                            const y = 140 + 100 * Math.sin((angle - 90) * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x,
                                y: y,
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-600 text-sm font-semibold select-none",
                                children: minute
                            }, minute, false, {
                                fileName: "[project]/app/components/PomodoroTimer.js",
                                lineNumber: 244,
                                columnNumber: 15
                            }, this);
                        }),
                        rotationAngle > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M 140 140 L 140 10 A 130 130 0 ${rotationAngle > 180 ? 1 : 0} 1 ${140 + 130 * Math.sin(rotationAngle * Math.PI / 180)} ${140 - 130 * Math.cos(rotationAngle * Math.PI / 180)} Z`,
                            fill: isRunning && !isDragging && !isResetting ? "#10b981" : "#ef4444",
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "140",
                            y1: "140",
                            x2: 140 + 120 * Math.sin(rotationAngle * Math.PI / 180),
                            y2: 140 - 120 * Math.cos(rotationAngle * Math.PI / 180),
                            stroke: "#374151",
                            strokeWidth: "4",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: 140 + 120 * Math.sin(rotationAngle * Math.PI / 180),
                            cy: 140 - 120 * Math.cos(rotationAngle * Math.PI / 180),
                            r: "12",
                            fill: "#374151",
                            stroke: "white",
                            strokeWidth: "3",
                            className: "cursor-grab active:cursor-grabbing"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "10",
                            r: "4",
                            fill: "#10b981"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "140",
                            r: "6",
                            fill: "#374151"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PomodoroTimer.js",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PomodoroTimer.js",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl font-bold text-gray-800 mb-4 select-none",
                        children: [
                            String(displayMinutes).padStart(2, '0'),
                            ":",
                            String(displaySeconds).padStart(2, '0')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PomodoroTimer.js",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 select-none",
                        children: isDragging || isResetting ? '拖拽重新设定时间，松手开始倒计时' : isRunning ? '倒计时进行中...（可拖拽指针重新设定）' : '拖拽旋钮设定番茄钟时间'
                    }, void 0, false, {
                        fileName: "[project]/app/components/PomodoroTimer.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PomodoroTimer.js",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PomodoroTimer.js",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(PomodoroTimer, "A6ITAnFfEr5MFBEQ8Qz85E+SzwA=");
_c = PomodoroTimer;
var _c;
__turbopack_refresh__.register(_c, "PomodoroTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_PomodoroTimer_916c53.js.map