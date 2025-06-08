(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_164fa4._.js", {

"[project]/app/components/Clock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Clock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$colorthief$40$2$2e$6$2e$0$2f$node_modules$2f$colorthief$2f$dist$2f$color$2d$thief$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/colorthief@2.6.0/node_modules/colorthief/dist/color-thief.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
// 图片路径前缀 - 生产环境添加前缀，开发环境不添加
const IMAGE_PREFIX = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '';
// 图片数组
const IMAGES = [
    `${IMAGE_PREFIX}/desk-decor/大象.png`,
    `${IMAGE_PREFIX}/desk-decor/葫芦.png`,
    `${IMAGE_PREFIX}/desk-decor/貔貅.png`,
    `${IMAGE_PREFIX}/desk-decor/金蟾.png`,
    `${IMAGE_PREFIX}/desk-decor/龙龟.png`,
    `${IMAGE_PREFIX}/desk-decor/大象001.png`,
    `${IMAGE_PREFIX}/desk-decor/葫芦001.png`,
    `${IMAGE_PREFIX}/desk-decor/貔貅001.png`,
    `${IMAGE_PREFIX}/desk-decor/金蟾001.png`,
    `${IMAGE_PREFIX}/desk-decor/龙龟001.png`,
    `${IMAGE_PREFIX}/desk-decor/大象002.png`,
    `${IMAGE_PREFIX}/desk-decor/葫芦002.png`,
    `${IMAGE_PREFIX}/desk-decor/龙龟002.png`,
    `${IMAGE_PREFIX}/desk-decor/龙龟003.png`,
    `${IMAGE_PREFIX}/desk-decor/龙龟004.png`,
    `${IMAGE_PREFIX}/desk-decor/五帝钱.png`,
    `${IMAGE_PREFIX}/desk-decor/关公像.png`,
    `${IMAGE_PREFIX}/desk-decor/文昌塔.png`,
    `${IMAGE_PREFIX}/desk-decor/水晶洞.png`,
    `${IMAGE_PREFIX}/desk-decor/关公像001.png`,
    `${IMAGE_PREFIX}/desk-decor/文昌塔001.png`,
    `${IMAGE_PREFIX}/desk-decor/五帝钱002.png`,
    `${IMAGE_PREFIX}/desk-decor/关公像002.png`,
    `${IMAGE_PREFIX}/desk-decor/文昌塔002.png`,
    `${IMAGE_PREFIX}/desk-decor/水晶洞002.png`,
    `${IMAGE_PREFIX}/desk-decor/文昌塔003.png`,
    `${IMAGE_PREFIX}/desk-decor/文昌塔004.png`,
    `${IMAGE_PREFIX}/desk-decor/福禄寿三星.png`,
    `${IMAGE_PREFIX}/desk-decor/福禄寿三星001.png`,
    `${IMAGE_PREFIX}/desk-decor/福禄寿三星002.png`,
    `${IMAGE_PREFIX}/desk-decor/福禄寿三星003.png`
];
function Clock() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // 初始状态为 null，避免 hydration 错误
    ;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(IMAGES[0]) // 当前图片状态
    ;
    const [imageColors, setImageColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isDark: false,
        primaryColor: [
            55,
            65,
            81
        ],
        backgroundColor: 'rgba(55, 65, 81, 0.15)',
        solidBackgroundColor: 'rgb(55, 65, 81)',
        textColor: '#374151',
        textShadow: 'none'
    });
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
    // 分析图片颜色 - 支持动态图片路径
    const analyzeImageColors = (imagePath)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = ()=>{
                try {
                    const colorThief = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$colorthief$40$2$2e$6$2e$0$2f$node_modules$2f$colorthief$2f$dist$2f$color$2d$thief$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                    const dominantColor = colorThief.getColor(img);
                    const palette = colorThief.getPalette(img, 5);
                    // 计算亮度 (使用相对亮度公式)
                    const getLuminance = (r, g, b)=>{
                        const [rs, gs, bs] = [
                            r,
                            g,
                            b
                        ].map((c)=>{
                            c = c / 255;
                            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
                        });
                        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
                    };
                    const luminance = getLuminance(dominantColor[0], dominantColor[1], dominantColor[2]);
                    const isDark = luminance < 0.5;
                    // 根据背景亮度选择合适的文字颜色
                    let textColor, textShadow;
                    if (isDark) {
                        // 深色背景，使用浅色文字
                        textColor = '#ffffff';
                        textShadow = '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)';
                    } else {
                        // 浅色背景，使用深色文字
                        textColor = '#000000';
                        textShadow = '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.5)';
                    }
                    // 生成和谐的背景色 - 基于主色调创建柔和的表盘背景
                    const getHarmonicBackgroundColor = (r, g, b)=>{
                        // 创建更加明显但仍然和谐的背景色
                        // 对于浅色图片，稍微加深颜色
                        // 对于深色图片，稍微提亮颜色
                        let adjustedR, adjustedG, adjustedB;
                        if (isDark) {
                            // 深色图片：提亮一些，但保持色相
                            adjustedR = Math.min(255, Math.round(r * 1.8 + 50));
                            adjustedG = Math.min(255, Math.round(g * 1.8 + 50));
                            adjustedB = Math.min(255, Math.round(b * 1.8 + 50));
                        } else {
                            // 浅色图片：稍微加深和增加饱和度
                            adjustedR = Math.max(0, Math.round(r * 0.8));
                            adjustedG = Math.max(0, Math.round(g * 0.8));
                            adjustedB = Math.max(0, Math.round(b * 0.8));
                        }
                        return `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`;
                    };
                    const backgroundColor = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.2)`;
                    const solidBackgroundColor = getHarmonicBackgroundColor(dominantColor[0], dominantColor[1], dominantColor[2]);
                    setImageColors({
                        isDark,
                        primaryColor: dominantColor,
                        backgroundColor,
                        solidBackgroundColor,
                        textColor,
                        textShadow
                    });
                } catch (error) {
                    console.warn('Error analyzing image colors:', error);
                }
            };
            img.src = imagePath;
        }
    };
    // 随机切换图片
    const handleClockClick = ()=>{
        const randomIndex = Math.floor(Math.random() * IMAGES.length);
        const newImage = IMAGES[randomIndex];
        setCurrentImage(newImage);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            const handleResize = {
                "Clock.useEffect.handleResize": ()=>{
                    setDimensions(getResponsiveSize());
                }
            }["Clock.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Clock.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Clock.useEffect"];
        }
    }["Clock.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            setMounted(true);
            setTime(new Date());
            analyzeImageColors(currentImage);
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
    // 当图片变化时重新分析颜色
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            if (mounted && currentImage) {
                analyzeImageColors(currentImage);
            }
        }
    }["Clock.useEffect"], [
        currentImage,
        mounted
    ]);
    const { size, center, outerRadius, innerRadius, strokeWidth } = dimensions;
    // 如果还没有 mounted 或者时间还没设置，显示默认状态
    if (!mounted || !time) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center space-y-3 sm:space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        className: "drop-shadow-lg clock-dial cursor-pointer",
                        onClick: handleClockClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                        id: "backgroundPattern",
                                        patternUnits: "userSpaceOnUse",
                                        width: size,
                                        height: size,
                                        x: "0",
                                        y: "0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: size,
                                                height: size,
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Clock.js",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                                href: currentImage,
                                                x: size * 0.15,
                                                y: size * 0.15,
                                                width: size * 0.7,
                                                height: size * 0.7,
                                                preserveAspectRatio: "xMidYMid slice",
                                                onError: (e)=>{
                                                    e.target.style.display = 'none';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Clock.js",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "clockClip",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: center,
                                            cy: center,
                                            r: outerRadius
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: outerRadius,
                                fill: imageColors.solidBackgroundColor,
                                stroke: "#e5e7eb",
                                strokeWidth: strokeWidth,
                                opacity: "0.8"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: outerRadius,
                                fill: "url(#backgroundPattern)",
                                stroke: "#e5e7eb",
                                strokeWidth: strokeWidth,
                                clipPath: "url(#clockClip)",
                                opacity: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: innerRadius,
                                fill: "none",
                                stroke: "#f3f4f6",
                                strokeWidth: "1",
                                strokeDasharray: "2,4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            [
                                ...Array(12)
                            ].map((_, i)=>{
                                const angle = i * 30 // 每30度一个刻度
                                ;
                                const x1 = center + outerRadius * Math.cos((angle - 90) * Math.PI / 180);
                                const y1 = center + outerRadius * Math.sin((angle - 90) * Math.PI / 180);
                                const x2 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180);
                                const y2 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: x1,
                                            y1: y1,
                                            x2: x2,
                                            y2: y2,
                                            stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                            strokeWidth: strokeWidth + 3
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: x1,
                                            y1: y1,
                                            x2: x2,
                                            y2: y2,
                                            stroke: imageColors.textColor,
                                            strokeWidth: strokeWidth + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this);
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
                            ].map((num, i)=>{
                                const angle = i * 30 // 每30度一个数字
                                ;
                                const x = center + (outerRadius - 25) * Math.cos((angle - 90) * Math.PI / 180);
                                const y = center + (outerRadius - 25) * Math.sin((angle - 90) * Math.PI / 180);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: x,
                                            y: y,
                                            textAnchor: "middle",
                                            dominantBaseline: "central",
                                            className: "text-xs sm:text-sm lg:text-lg font-bold select-none",
                                            fill: imageColors.isDark ? "#000000" : "#ffffff",
                                            stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                            strokeWidth: "3",
                                            children: num
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: x,
                                            y: y,
                                            textAnchor: "middle",
                                            dominantBaseline: "central",
                                            className: "text-xs sm:text-sm lg:text-lg font-bold select-none",
                                            fill: imageColors.textColor,
                                            children: num
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, num, true, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: center,
                                        y1: center,
                                        x2: center,
                                        y2: center - outerRadius * 0.5,
                                        stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                        strokeWidth: Math.max(6, strokeWidth + 4),
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: center,
                                        y1: center,
                                        x2: center,
                                        y2: center - outerRadius * 0.5,
                                        stroke: imageColors.textColor,
                                        strokeWidth: Math.max(4, strokeWidth + 2),
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: center,
                                        y1: center,
                                        x2: center,
                                        y2: center - outerRadius * 0.7,
                                        stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                        strokeWidth: Math.max(4, strokeWidth + 2),
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: center,
                                        y1: center,
                                        x2: center,
                                        y2: center - outerRadius * 0.7,
                                        stroke: imageColors.textColor,
                                        strokeWidth: Math.max(2, strokeWidth),
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: center,
                                y1: center,
                                x2: center,
                                y2: center - outerRadius * 0.8,
                                stroke: imageColors.isDark ? "#10b981" : "#059669",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: size < 200 ? "6" : size < 280 ? "7" : size < 320 ? "8" : "10",
                                fill: imageColors.isDark ? "#000000" : "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: size < 200 ? "4" : size < 280 ? "5" : size < 320 ? "6" : "8",
                                fill: imageColors.textColor
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: size < 200 ? "2" : size < 280 ? "3" : "4",
                                fill: imageColors.isDark ? "#10b981" : "#059669"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Clock.js",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Clock.js",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 select-none flex items-baseline justify-center space-x-1 sm:space-x-2 text-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "12:00"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base lg:text-lg font-semibold opacity-90 text-red-600",
                                    children: "AM"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] sm:text-xs lg:text-sm select-none opacity-70 text-gray-600",
                            children: "加载中..."
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Clock.js",
                    lineNumber: 423,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Clock.js",
            lineNumber: 220,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center space-y-3 sm:space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: size,
                    height: size,
                    className: "drop-shadow-lg clock-dial cursor-pointer",
                    onClick: handleClockClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "backgroundPatternLive",
                                    patternUnits: "userSpaceOnUse",
                                    width: size,
                                    height: size,
                                    x: "0",
                                    y: "0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: size,
                                            height: size,
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 479,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                            href: currentImage,
                                            x: size * 0.15,
                                            y: size * 0.15,
                                            width: size * 0.7,
                                            height: size * 0.7,
                                            preserveAspectRatio: "xMidYMid meet",
                                            onError: (e)=>{
                                                e.target.style.display = 'none';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Clock.js",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: "clockClipLive",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: center,
                                        cy: center,
                                        r: outerRadius
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 491,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: outerRadius,
                            fill: imageColors.solidBackgroundColor,
                            stroke: "#e5e7eb",
                            strokeWidth: strokeWidth,
                            opacity: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: outerRadius,
                            fill: "url(#backgroundPatternLive)",
                            stroke: "#e5e7eb",
                            strokeWidth: strokeWidth,
                            clipPath: "url(#clockClipLive)",
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: innerRadius,
                            fill: "none",
                            stroke: "#f3f4f6",
                            strokeWidth: "1",
                            strokeDasharray: "2,4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this),
                        [
                            ...Array(12)
                        ].map((_, i)=>{
                            const angle = i * 30 // 每30度一个刻度
                            ;
                            const x1 = center + outerRadius * Math.cos((angle - 90) * Math.PI / 180);
                            const y1 = center + outerRadius * Math.sin((angle - 90) * Math.PI / 180);
                            const x2 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180);
                            const y2 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x1,
                                        y1: y1,
                                        x2: x2,
                                        y2: y2,
                                        stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                        strokeWidth: strokeWidth + 3
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 540,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x1,
                                        y1: y1,
                                        x2: x2,
                                        y2: y2,
                                        stroke: imageColors.textColor,
                                        strokeWidth: strokeWidth + 1
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 549,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 538,
                                columnNumber: 15
                            }, this);
                        }),
                        [
                            ...Array(60)
                        ].map((_, i)=>{
                            if (i % 5 !== 0) {
                                const angle = i * 6 // 每6度一个小刻度
                                ;
                                const x1 = center + outerRadius * Math.cos((angle - 90) * Math.PI / 180);
                                const y1 = center + outerRadius * Math.sin((angle - 90) * Math.PI / 180);
                                const x2 = center + (outerRadius - 5) * Math.cos((angle - 90) * Math.PI / 180);
                                const y2 = center + (outerRadius - 5) * Math.sin((angle - 90) * Math.PI / 180);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x1,
                                    y1: y1,
                                    x2: x2,
                                    y2: y2,
                                    stroke: "#d1d5db",
                                    strokeWidth: "1"
                                }, `small-${i}`, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 571,
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
                        ].map((num, i)=>{
                            const angle = i * 30 // 每30度一个数字
                            ;
                            const x = center + (outerRadius - 25) * Math.cos((angle - 90) * Math.PI / 180);
                            const y = center + (outerRadius - 25) * Math.sin((angle - 90) * Math.PI / 180);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: y,
                                        textAnchor: "middle",
                                        dominantBaseline: "central",
                                        className: "text-xs sm:text-sm lg:text-lg font-bold select-none",
                                        fill: imageColors.isDark ? "#000000" : "#ffffff",
                                        stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                        strokeWidth: "3",
                                        children: num
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: y,
                                        textAnchor: "middle",
                                        dominantBaseline: "central",
                                        className: "text-xs sm:text-sm lg:text-lg font-bold select-none",
                                        fill: imageColors.textColor,
                                        children: num
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Clock.js",
                                        lineNumber: 607,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, num, true, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 592,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: center,
                                    y1: center,
                                    x2: center + outerRadius * 0.5 * Math.sin(getHourAngle() * Math.PI / 180),
                                    y2: center - outerRadius * 0.5 * Math.cos(getHourAngle() * Math.PI / 180),
                                    stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                    strokeWidth: Math.max(6, strokeWidth + 4),
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 623,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: center,
                                    y1: center,
                                    x2: center + outerRadius * 0.5 * Math.sin(getHourAngle() * Math.PI / 180),
                                    y2: center - outerRadius * 0.5 * Math.cos(getHourAngle() * Math.PI / 180),
                                    stroke: imageColors.textColor,
                                    strokeWidth: Math.max(4, strokeWidth + 2),
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 622,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: center,
                                    y1: center,
                                    x2: center + outerRadius * 0.7 * Math.sin(getMinuteAngle() * Math.PI / 180),
                                    y2: center - outerRadius * 0.7 * Math.cos(getMinuteAngle() * Math.PI / 180),
                                    stroke: imageColors.isDark ? "#000000" : "#ffffff",
                                    strokeWidth: Math.max(4, strokeWidth + 2),
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 645,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: center,
                                    y1: center,
                                    x2: center + outerRadius * 0.7 * Math.sin(getMinuteAngle() * Math.PI / 180),
                                    y2: center - outerRadius * 0.7 * Math.cos(getMinuteAngle() * Math.PI / 180),
                                    stroke: imageColors.textColor,
                                    strokeWidth: Math.max(2, strokeWidth),
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Clock.js",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: center,
                            y1: center,
                            x2: center + outerRadius * 0.8 * Math.sin(getSecondAngle() * Math.PI / 180),
                            y2: center - outerRadius * 0.8 * Math.cos(getSecondAngle() * Math.PI / 180),
                            stroke: imageColors.isDark ? "#10b981" : "#059669",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 666,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: size < 200 ? "6" : size < 280 ? "7" : size < 320 ? "8" : "10",
                            fill: imageColors.isDark ? "#000000" : "#ffffff"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 677,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: size < 200 ? "4" : size < 280 ? "5" : size < 320 ? "6" : "8",
                            fill: imageColors.textColor
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 683,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: size < 200 ? "2" : size < 280 ? "3" : "4",
                            fill: imageColors.isDark ? "#10b981" : "#059669"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Clock.js",
                            lineNumber: 689,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Clock.js",
                    lineNumber: 476,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Clock.js",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 select-none flex items-baseline justify-center space-x-1 sm:space-x-2 text-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formattedTime.time
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 701,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm sm:text-base lg:text-lg font-semibold opacity-90 text-red-600",
                                children: formattedTime.ampm
                            }, void 0, false, {
                                fileName: "[project]/app/components/Clock.js",
                                lineNumber: 702,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Clock.js",
                        lineNumber: 700,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] sm:text-xs lg:text-sm text-gray-500 select-none px-1",
                        children: [
                            time.toLocaleDateString('zh-CN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                weekday: 'long'
                            }),
                            " • 点击表盘切换图片"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Clock.js",
                        lineNumber: 707,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Clock.js",
                lineNumber: 699,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Clock.js",
        lineNumber: 473,
        columnNumber: 5
    }, this);
}
_s(Clock, "+LlLoYO+ZnT1mV+h/eb4H3WbXkk=");
_c = Clock;
var _c;
__turbopack_refresh__.register(_c, "Clock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/.pnpm/colorthief@2.6.0/node_modules/colorthief/dist/color-thief.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>u)
});
var t = function(t, r) {
    return t < r ? -1 : t > r ? 1 : 0;
}, r = function(t) {
    return t.reduce(function(t, r) {
        return t + r;
    }, 0);
}, n = /*#__PURE__*/ function() {
    function t(t) {
        this.colors = t;
    }
    var r = t.prototype;
    return r.palette = function() {
        return this.colors;
    }, r.map = function(t) {
        return t;
    }, t;
}(), o = function() {
    function o(t, r, n) {
        return (t << 10) + (r << 5) + n;
    }
    function e(t) {
        var r = [], n = !1;
        function o() {
            r.sort(t), n = !0;
        }
        return {
            push: function(t) {
                r.push(t), n = !1;
            },
            peek: function(t) {
                return n || o(), void 0 === t && (t = r.length - 1), r[t];
            },
            pop: function() {
                return n || o(), r.pop();
            },
            size: function() {
                return r.length;
            },
            map: function(t) {
                return r.map(t);
            },
            debug: function() {
                return n || o(), r;
            }
        };
    }
    function i1(t, r, n, o, e, i1, u) {
        var a = this;
        a.r1 = t, a.r2 = r, a.g1 = n, a.g2 = o, a.b1 = e, a.b2 = i1, a.histo = u;
    }
    function u() {
        this.vboxes = new e(function(r, n) {
            return t(r.vbox.count() * r.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    function a(t, r) {
        if (r.count()) {
            var n = r.r2 - r.r1 + 1, e = r.g2 - r.g1 + 1, i1 = Math.max.apply(null, [
                n,
                e,
                r.b2 - r.b1 + 1
            ]);
            if (1 == r.count()) return [
                r.copy()
            ];
            var u, a, c, f, s = 0, h = [], v = [];
            if (i1 == n) for(u = r.r1; u <= r.r2; u++){
                for(f = 0, a = r.g1; a <= r.g2; a++)for(c = r.b1; c <= r.b2; c++)f += t[o(u, a, c)] || 0;
                h[u] = s += f;
            }
            else if (i1 == e) for(u = r.g1; u <= r.g2; u++){
                for(f = 0, a = r.r1; a <= r.r2; a++)for(c = r.b1; c <= r.b2; c++)f += t[o(a, u, c)] || 0;
                h[u] = s += f;
            }
            else for(u = r.b1; u <= r.b2; u++){
                for(f = 0, a = r.r1; a <= r.r2; a++)for(c = r.g1; c <= r.g2; c++)f += t[o(a, c, u)] || 0;
                h[u] = s += f;
            }
            return h.forEach(function(t, r) {
                v[r] = s - t;
            }), function(t) {
                var n, o, e, i1, a, c = t + "1", f = t + "2", l = 0;
                for(u = r[c]; u <= r[f]; u++)if (h[u] > s / 2) {
                    for(e = r.copy(), i1 = r.copy(), a = (n = u - r[c]) <= (o = r[f] - u) ? Math.min(r[f] - 1, ~~(u + o / 2)) : Math.max(r[c], ~~(u - 1 - n / 2)); !h[a];)a++;
                    for(l = v[a]; !l && h[a - 1];)l = v[--a];
                    return e[f] = a, i1[c] = e[f] + 1, [
                        e,
                        i1
                    ];
                }
            }(i1 == n ? "r" : i1 == e ? "g" : "b");
        }
    }
    return i1.prototype = {
        volume: function(t) {
            var r = this;
            return r._volume && !t || (r._volume = (r.r2 - r.r1 + 1) * (r.g2 - r.g1 + 1) * (r.b2 - r.b1 + 1)), r._volume;
        },
        count: function(t) {
            var r = this, n = r.histo;
            if (!r._count_set || t) {
                var e, i1, u, a = 0;
                for(e = r.r1; e <= r.r2; e++)for(i1 = r.g1; i1 <= r.g2; i1++)for(u = r.b1; u <= r.b2; u++)a += n[o(e, i1, u)] || 0;
                r._count = a, r._count_set = !0;
            }
            return r._count;
        },
        copy: function() {
            var t = this;
            return new i1(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo);
        },
        avg: function(t) {
            var r = this, n = r.histo;
            if (!r._avg || t) {
                var e, i1, u, a, c = 0, f = 0, s = 0, h = 0;
                if (r.r1 === r.r2 && r.g1 === r.g2 && r.b1 === r.b2) r._avg = [
                    r.r1 << 3,
                    r.g1 << 3,
                    r.b1 << 3
                ];
                else {
                    for(i1 = r.r1; i1 <= r.r2; i1++)for(u = r.g1; u <= r.g2; u++)for(a = r.b1; a <= r.b2; a++)c += e = n[o(i1, u, a)] || 0, f += e * (i1 + .5) * 8, s += e * (u + .5) * 8, h += e * (a + .5) * 8;
                    r._avg = c ? [
                        ~~(f / c),
                        ~~(s / c),
                        ~~(h / c)
                    ] : [
                        ~~(8 * (r.r1 + r.r2 + 1) / 2),
                        ~~(8 * (r.g1 + r.g2 + 1) / 2),
                        ~~(8 * (r.b1 + r.b2 + 1) / 2)
                    ];
                }
            }
            return r._avg;
        },
        contains: function(t) {
            var r = this, n = t[0] >> 3;
            return gval = t[1] >> 3, bval = t[2] >> 3, n >= r.r1 && n <= r.r2 && gval >= r.g1 && gval <= r.g2 && bval >= r.b1 && bval <= r.b2;
        }
    }, u.prototype = {
        push: function(t) {
            this.vboxes.push({
                vbox: t,
                color: t.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(t) {
                return t.color;
            });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(t) {
            for(var r = this.vboxes, n = 0; n < r.size(); n++)if (r.peek(n).vbox.contains(t)) return r.peek(n).color;
            return this.nearest(t);
        },
        nearest: function(t) {
            for(var r, n, o, e = this.vboxes, i1 = 0; i1 < e.size(); i1++)((n = Math.sqrt(Math.pow(t[0] - e.peek(i1).color[0], 2) + Math.pow(t[1] - e.peek(i1).color[1], 2) + Math.pow(t[2] - e.peek(i1).color[2], 2))) < r || void 0 === r) && (r = n, o = e.peek(i1).color);
            return o;
        },
        forcebw: function() {
            var n = this.vboxes;
            n.sort(function(n, o) {
                return t(r(n.color), r(o.color));
            });
            var o = n[0].color;
            o[0] < 5 && o[1] < 5 && o[2] < 5 && (n[0].color = [
                0,
                0,
                0
            ]);
            var e = n.length - 1, i1 = n[e].color;
            i1[0] > 251 && i1[1] > 251 && i1[2] > 251 && (n[e].color = [
                255,
                255,
                255
            ]);
        }
    }, {
        quantize: function(r, c) {
            if (!Number.isInteger(c) || c < 1 || c > 256) throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");
            if (!r.length || c < 2 || c > 256) return !1;
            if (!r.length || c < 2 || c > 256) return !1;
            for(var f = [], s = new Set, h = 0; h < r.length; h++){
                var v = r[h], l = v.join(",");
                s.has(l) || (s.add(l), f.push(v));
            }
            if (f.length <= c) return new n(f);
            var g = function(t) {
                var r, n = new Array(32768);
                return t.forEach(function(t) {
                    r = o(t[0] >> 3, t[1] >> 3, t[2] >> 3), n[r] = (n[r] || 0) + 1;
                }), n;
            }(r);
            g.forEach(function() {});
            var p = function(t, r) {
                var n, o, e, u = 1e6, a = 0, c = 1e6, f = 0, s = 1e6, h = 0;
                return t.forEach(function(t) {
                    (n = t[0] >> 3) < u ? u = n : n > a && (a = n), (o = t[1] >> 3) < c ? c = o : o > f && (f = o), (e = t[2] >> 3) < s ? s = e : e > h && (h = e);
                }), new i1(u, a, c, f, s, h, r);
            }(r, g), b = new e(function(r, n) {
                return t(r.count(), n.count());
            });
            function m(t, r) {
                for(var n, o = t.size(), e = 0; e < 1e3;){
                    if (o >= r) return;
                    if (e++ > 1e3) return;
                    if ((n = t.pop()).count()) {
                        var i1 = a(g, n), u = i1[0], c = i1[1];
                        if (!u) return;
                        t.push(u), c && (t.push(c), o++);
                    } else t.push(n), e++;
                }
            }
            b.push(p), m(b, .75 * c);
            for(var d = new e(function(r, n) {
                return t(r.count() * r.volume(), n.count() * n.volume());
            }); b.size();)d.push(b.pop());
            m(d, c);
            for(var w = new u; d.size();)w.push(d.pop());
            return w;
        }
    };
}().quantize, e = function(t) {
    this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = t.naturalWidth, this.height = this.canvas.height = t.naturalHeight, this.context.drawImage(t, 0, 0, this.width, this.height);
};
e.prototype.getImageData = function() {
    return this.context.getImageData(0, 0, this.width, this.height);
};
var u = function() {};
u.prototype.getColor = function(t, r) {
    return void 0 === r && (r = 10), this.getPalette(t, 5, r)[0];
}, u.prototype.getPalette = function(t, r, n) {
    var i1 = function(t) {
        var r = t.colorCount, n = t.quality;
        if (void 0 !== r && Number.isInteger(r)) {
            if (1 === r) throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
            r = Math.max(r, 2), r = Math.min(r, 20);
        } else r = 10;
        return (void 0 === n || !Number.isInteger(n) || n < 1) && (n = 10), {
            colorCount: r,
            quality: n
        };
    }({
        colorCount: r,
        quality: n
    }), u = new e(t), a = function(t, r, n) {
        for(var o, e, i1, u, a, c = t, f = [], s = 0; s < r; s += n)e = c[0 + (o = 4 * s)], i1 = c[o + 1], u = c[o + 2], (void 0 === (a = c[o + 3]) || a >= 125) && (e > 250 && i1 > 250 && u > 250 || f.push([
            e,
            i1,
            u
        ]));
        return f;
    }(u.getImageData().data, u.width * u.height, i1.quality), c = o(a, i1.colorCount);
    return c ? c.palette() : null;
}, u.prototype.getColorFromUrl = function(t, r, n) {
    var o = this, e = document.createElement("img");
    e.addEventListener("load", function() {
        var i1 = o.getPalette(e, 5, n);
        r(i1[0], t);
    }), e.src = t;
}, u.prototype.getImageData = function(t, r) {
    var n = new XMLHttpRequest;
    n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
        if (200 == this.status) {
            var t = new Uint8Array(this.response);
            i = t.length;
            for(var n = new Array(i), o = 0; o < t.length; o++)n[o] = String.fromCharCode(t[o]);
            var e = n.join(""), u = window.btoa(e);
            r("data:image/png;base64," + u);
        }
    }, n.send();
}, u.prototype.getColorAsync = function(t, r, n) {
    var o = this;
    this.getImageData(t, function(t) {
        var e = document.createElement("img");
        e.addEventListener("load", function() {
            var t = o.getPalette(e, 5, n);
            r(t[0], this);
        }), e.src = t;
    });
};
;
}}),
}]);

//# sourceMappingURL=_164fa4._.js.map