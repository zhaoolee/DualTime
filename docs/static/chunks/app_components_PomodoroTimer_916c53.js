(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_PomodoroTimer_916c53.js", {

"[project]/app/components/PomodoroTimer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PomodoroTimer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function PomodoroTimer() {
    _s();
    const [totalMinutes, setTotalMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 设定的总时间
    ;
    const [remainingMinutes, setRemainingMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 剩余分钟
    ;
    const [remainingSeconds, setRemainingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 剩余秒数
    ;
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotationAngle, setRotationAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 当前针的角度，0度为12点位置
    ;
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isResetting, setIsResetting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // 是否正在重新设定时间
    ;
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 响应式尺寸
    const getResponsiveSize = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            // 考虑到容器高度为屏幕高度的80%，表盘需要适应这个高度
            // 预留空间给标题、文字和内边距
            const availableHeight = height * 0.8 - 200 // 预留200px给文字、标题和边距
            ;
            const maxSizeFromHeight = Math.min(availableHeight, height * 0.5) // 最大不超过屏幕高度的50%
            ;
            // 基于宽度的尺寸计算
            let sizeFromWidth;
            if (width < 480) {
                sizeFromWidth = 160;
            } else if (width < 640) {
                sizeFromWidth = 200;
            } else if (width < 768) {
                sizeFromWidth = 240;
            } else if (width < 1024) {
                sizeFromWidth = 280;
            } else if (width < 1280) {
                sizeFromWidth = 320;
            } else {
                sizeFromWidth = 360;
            }
            // 取宽度和高度限制中的较小值
            const finalSize = Math.min(sizeFromWidth, maxSizeFromHeight);
            const center = finalSize / 2;
            const outerRadius = center - 10;
            const innerRadius = center - 20;
            const strokeWidth = finalSize < 200 ? 1.5 : finalSize < 300 ? 2 : 3;
            return {
                size: finalSize,
                center: center,
                outerRadius: outerRadius,
                innerRadius: innerRadius,
                strokeWidth: strokeWidth
            };
        }
        "TURBOPACK unreachable";
    };
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getResponsiveSize());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroTimer.useEffect": ()=>{
            const handleResize = {
                "PomodoroTimer.useEffect.handleResize": ()=>{
                    setDimensions(getResponsiveSize());
                }
            }["PomodoroTimer.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "PomodoroTimer.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["PomodoroTimer.useEffect"];
        }
    }["PomodoroTimer.useEffect"], []);
    // 计时器逻辑
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    const { size, center, outerRadius, innerRadius, strokeWidth } = dimensions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center space-y-3 sm:space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ref: timerRef,
                    width: size,
                    height: size,
                    className: "cursor-pointer timer-dial",
                    onMouseDown: handleMouseDown,
                    onTouchStart: handleTouchStart,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: outerRadius,
                            fill: "white",
                            stroke: "#e5e7eb",
                            strokeWidth: strokeWidth
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        [
                            ...Array(12)
                        ].map((_, i)=>{
                            const angle = i * 30// 每30度一个刻度（对应5分钟）
                            ;
                            const x1 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180);
                            const y1 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180);
                            const x2 = center + (outerRadius - 20) * Math.cos((angle - 90) * Math.PI / 180);
                            const y2 = center + (outerRadius - 20) * Math.sin((angle - 90) * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2,
                                stroke: "#6b7280",
                                strokeWidth: strokeWidth
                            }, i, false, {
                                fileName: "[project]/app/components/PomodoroTimer.js",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this);
                        }),
                        [
                            ...Array(60)
                        ].map((_, i)=>{
                            if (i % 5 !== 0) {
                                const angle = i * 6 // 每6度一个小刻度（对应1分钟）
                                ;
                                const x1 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180);
                                const y1 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180);
                                const x2 = center + (outerRadius - 15) * Math.cos((angle - 90) * Math.PI / 180);
                                const y2 = center + (outerRadius - 15) * Math.sin((angle - 90) * Math.PI / 180);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x1,
                                    y1: y1,
                                    x2: x2,
                                    y2: y2,
                                    stroke: "#d1d5db",
                                    strokeWidth: "1"
                                }, `small-${i}`, false, {
                                    fileName: "[project]/app/components/PomodoroTimer.js",
                                    lineNumber: 281,
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
                            const x = center + (outerRadius - 40) * Math.cos((angle - 90) * Math.PI / 180);
                            const y = center + (outerRadius - 40) * Math.sin((angle - 90) * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x,
                                y: y,
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                className: "fill-gray-600 text-[10px] sm:text-xs lg:text-sm font-semibold select-none",
                                children: minute
                            }, minute, false, {
                                fileName: "[project]/app/components/PomodoroTimer.js",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this);
                        }),
                        rotationAngle > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M ${center} ${center} L ${center} ${center - outerRadius} A ${outerRadius} ${outerRadius} 0 ${rotationAngle > 180 ? 1 : 0} 1 ${center + outerRadius * Math.sin(rotationAngle * Math.PI / 180)} ${center - outerRadius * Math.cos(rotationAngle * Math.PI / 180)} Z`,
                            fill: isRunning && !isDragging && !isResetting ? "#10b981" : "#ef4444",
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: center,
                            y1: center,
                            x2: center + (outerRadius - 10) * Math.sin(rotationAngle * Math.PI / 180),
                            y2: center - (outerRadius - 10) * Math.cos(rotationAngle * Math.PI / 180),
                            stroke: "#374151",
                            strokeWidth: Math.max(2, strokeWidth + 1),
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center + (outerRadius - 10) * Math.sin(rotationAngle * Math.PI / 180),
                            cy: center - (outerRadius - 10) * Math.cos(rotationAngle * Math.PI / 180),
                            r: size < 200 ? "6" : size < 280 ? "8" : size < 320 ? "10" : "12",
                            fill: "#374151",
                            stroke: "white",
                            strokeWidth: "3",
                            className: "cursor-grab active:cursor-grabbing"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center - outerRadius,
                            r: size < 200 ? "2" : size < 280 ? "3" : "4",
                            fill: "#10b981"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: size < 200 ? "3" : size < 280 ? "4" : size < 320 ? "5" : "6",
                            fill: "#374151"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PomodoroTimer.js",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PomodoroTimer.js",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PomodoroTimer.js",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-1 sm:mb-2 select-none",
                        children: [
                            String(displayMinutes).padStart(2, '0'),
                            ":",
                            String(displaySeconds).padStart(2, '0')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PomodoroTimer.js",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] sm:text-xs lg:text-sm text-gray-500 select-none px-1",
                        children: isDragging || isResetting ? '拖拽重新设定时间，松手开始倒计时' : isRunning ? '倒计时进行中...（可拖拽指针重新设定）' : '拖拽旋钮设定番茄钟时间'
                    }, void 0, false, {
                        fileName: "[project]/app/components/PomodoroTimer.js",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PomodoroTimer.js",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PomodoroTimer.js",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s(PomodoroTimer, "g1U5KR49t8eWJsqTb+azdNsBrHg=");
_c = PomodoroTimer;
var _c;
__turbopack_refresh__.register(_c, "PomodoroTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_PomodoroTimer_916c53.js.map