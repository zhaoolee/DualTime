'use client'

import { useState, useEffect } from 'react'
import ColorThief from 'colorthief'

// 图片路径前缀 - 生产环境添加前缀，开发环境不添加
const IMAGE_PREFIX = process.env.NODE_ENV === 'production' ? '/DualTime' : ''

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
]

export default function Clock() {
  const [time, setTime] = useState(null) // 初始状态为 null，避免 hydration 错误
  const [mounted, setMounted] = useState(false)
  const [currentImage, setCurrentImage] = useState(IMAGES[0]) // 当前图片状态
  const [imageColors, setImageColors] = useState({
    isDark: false,
    primaryColor: [55, 65, 81], // 默认灰色
    backgroundColor: 'rgba(55, 65, 81, 0.15)', // 默认背景色
    solidBackgroundColor: 'rgb(55, 65, 81)', // 默认纯色背景
    textColor: '#374151',
    textShadow: 'none'
  })

  // 响应式尺寸
  const getResponsiveSize = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      const height = window.innerHeight
      
      // 考虑到容器高度为屏幕高度的80%，表盘需要适应这个高度
      // 预留空间给标题、文字和内边距
      const availableHeight = height * 0.8 - 200 // 预留200px给文字、标题和边距
      const maxSizeFromHeight = Math.min(availableHeight, height * 0.5) // 最大不超过屏幕高度的50%
      
      // 基于宽度的尺寸计算
      let sizeFromWidth
      if (width < 480) {
        sizeFromWidth = 160
      } else if (width < 640) {
        sizeFromWidth = 200
      } else if (width < 768) {
        sizeFromWidth = 240
      } else if (width < 1024) {
        sizeFromWidth = 280
      } else if (width < 1280) {
        sizeFromWidth = 320
      } else {
        sizeFromWidth = 360
      }
      
      // 取宽度和高度限制中的较小值
      const finalSize = Math.min(sizeFromWidth, maxSizeFromHeight)
      const center = finalSize / 2
      const outerRadius = center - 10
      const innerRadius = center - 20
      const strokeWidth = finalSize < 200 ? 1.5 : finalSize < 300 ? 2 : 3
      
      return { 
        size: finalSize, 
        center: center, 
        outerRadius: outerRadius, 
        innerRadius: innerRadius, 
        strokeWidth: strokeWidth 
      }
    }
    return { size: 280, center: 140, outerRadius: 130, innerRadius: 120, strokeWidth: 2 }
  }

  const [dimensions, setDimensions] = useState(getResponsiveSize())

  // 分析图片颜色 - 支持动态图片路径
  const analyzeImageColors = (imagePath) => {
    if (typeof window !== 'undefined') {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        try {
          const colorThief = new ColorThief()
          const dominantColor = colorThief.getColor(img)
          const palette = colorThief.getPalette(img, 5)
          
          // 计算亮度 (使用相对亮度公式)
          const getLuminance = (r, g, b) => {
            const [rs, gs, bs] = [r, g, b].map(c => {
              c = c / 255
              return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
            })
            return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
          }
          
          const luminance = getLuminance(dominantColor[0], dominantColor[1], dominantColor[2])
          const isDark = luminance < 0.5
          
          // 根据背景亮度选择合适的文字颜色
          let textColor, textShadow
          if (isDark) {
            // 深色背景，使用浅色文字
            textColor = '#ffffff'
            textShadow = '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)'
          } else {
            // 浅色背景，使用深色文字
            textColor = '#000000'
            textShadow = '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.5)'
          }
          
          // 生成和谐的背景色 - 基于主色调创建柔和的表盘背景
          const getHarmonicBackgroundColor = (r, g, b) => {
            // 创建更加明显但仍然和谐的背景色
            // 对于浅色图片，稍微加深颜色
            // 对于深色图片，稍微提亮颜色
            let adjustedR, adjustedG, adjustedB
            
            if (isDark) {
              // 深色图片：提亮一些，但保持色相
              adjustedR = Math.min(255, Math.round(r * 1.8 + 50))
              adjustedG = Math.min(255, Math.round(g * 1.8 + 50))
              adjustedB = Math.min(255, Math.round(b * 1.8 + 50))
            } else {
              // 浅色图片：稍微加深和增加饱和度
              adjustedR = Math.max(0, Math.round(r * 0.8))
              adjustedG = Math.max(0, Math.round(g * 0.8))
              adjustedB = Math.max(0, Math.round(b * 0.8))
            }
            
            return `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`
          }
          
          const backgroundColor = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.2)`
          const solidBackgroundColor = getHarmonicBackgroundColor(dominantColor[0], dominantColor[1], dominantColor[2])
          
          setImageColors({
            isDark,
            primaryColor: dominantColor,
            backgroundColor,
            solidBackgroundColor,
            textColor,
            textShadow
          })
        } catch (error) {
          console.warn('Error analyzing image colors:', error)
        }
      }
      img.src = imagePath
    }
  }

  // 随机切换图片
  const handleClockClick = () => {
    const randomIndex = Math.floor(Math.random() * IMAGES.length)
    const newImage = IMAGES[randomIndex]
    setCurrentImage(newImage)
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getResponsiveSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMounted(true)
    setTime(new Date())
    analyzeImageColors(currentImage)
    
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 当图片变化时重新分析颜色
  useEffect(() => {
    if (mounted && currentImage) {
      analyzeImageColors(currentImage)
    }
  }, [currentImage, mounted])

  const { size, center, outerRadius, innerRadius, strokeWidth } = dimensions

  // 如果还没有 mounted 或者时间还没设置，显示默认状态
  if (!mounted || !time) {
    return (
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        {/* 静态时钟表盘 */}
        <div className="relative">
          <svg width={size} height={size} className="drop-shadow-lg clock-dial cursor-pointer" onClick={handleClockClick}>
            <defs>
              <pattern id="backgroundPattern" patternUnits="userSpaceOnUse" width={size} height={size} x="0" y="0">
                <rect width={size} height={size} fill="white" />
                <image 
                  href={currentImage}
                  x={size * 0.15} 
                  y={size * 0.15} 
                  width={size * 0.7} 
                  height={size * 0.7} 
                  preserveAspectRatio="xMidYMid slice"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </pattern>
              <clipPath id="clockClip">
                <circle cx={center} cy={center} r={outerRadius} />
              </clipPath>
            </defs>
            
            {/* 底色背景圆 */}
            <circle
              cx={center}
              cy={center}
              r={outerRadius}
              fill={imageColors.solidBackgroundColor}
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
              opacity="0.8"
            />
            
            {/* 外圆背景 */}
            <circle
              cx={center}
              cy={center}
              r={outerRadius}
              fill="url(#backgroundPattern)"
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
              clipPath="url(#clockClip)"
              opacity="0.7"
            />
            
            {/* 内圆装饰 */}
            <circle
              cx={center}
              cy={center}
              r={innerRadius}
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="1"
              strokeDasharray="2,4"
            />
            
            {/* 静态小时刻度 */}
            {[...Array(12)].map((_, i) => {
              const angle = i * 30 // 每30度一个刻度
              const x1 = center + outerRadius * Math.cos((angle - 90) * Math.PI / 180)
              const y1 = center + outerRadius * Math.sin((angle - 90) * Math.PI / 180)
              const x2 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180)
              const y2 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180)
              
              return (
                <g key={i}>
                  {/* 背景线 */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={imageColors.isDark ? "#000000" : "#ffffff"}
                    strokeWidth={strokeWidth + 3}
                  />
                  {/* 主线 */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={imageColors.textColor}
                    strokeWidth={strokeWidth + 1}
                  />
                </g>
              )
            })}
            
            {/* 静态数字 */}
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
              const angle = i * 30 // 每30度一个数字
              const x = center + (outerRadius - 25) * Math.cos((angle - 90) * Math.PI / 180)
              const y = center + (outerRadius - 25) * Math.sin((angle - 90) * Math.PI / 180)
              
              return (
                <g key={num}>
                  {/* 背景文字 - 创建对比 */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-xs sm:text-sm lg:text-lg font-bold select-none"
                    fill={imageColors.isDark ? "#000000" : "#ffffff"}
                    stroke={imageColors.isDark ? "#000000" : "#ffffff"}
                    strokeWidth="3"
                  >
                    {num}
                  </text>
                  {/* 主文字 */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-xs sm:text-sm lg:text-lg font-bold select-none"
                    fill={imageColors.textColor}
                  >
                    {num}
                  </text>
                </g>
              )
            })}
            
            {/* 默认指针位置 (12:00:00) */}
            {/* 小时指针 */}
            <g>
              <line
                x1={center}
                y1={center}
                x2={center}
                y2={center - (outerRadius * 0.5)}
                stroke={imageColors.isDark ? "#000000" : "#ffffff"}
                strokeWidth={Math.max(6, strokeWidth + 4)}
                strokeLinecap="round"
              />
              <line
                x1={center}
                y1={center}
                x2={center}
                y2={center - (outerRadius * 0.5)}
                stroke={imageColors.textColor}
                strokeWidth={Math.max(4, strokeWidth + 2)}
                strokeLinecap="round"
              />
            </g>
            
            {/* 分钟指针 */}
            <g>
              <line
                x1={center}
                y1={center}
                x2={center}
                y2={center - (outerRadius * 0.7)}
                stroke={imageColors.isDark ? "#000000" : "#ffffff"}
                strokeWidth={Math.max(4, strokeWidth + 2)}
                strokeLinecap="round"
              />
              <line
                x1={center}
                y1={center}
                x2={center}
                y2={center - (outerRadius * 0.7)}
                stroke={imageColors.textColor}
                strokeWidth={Math.max(2, strokeWidth)}
                strokeLinecap="round"
              />
            </g>
            
            {/* 秒针 */}
            <line
              x1={center}
              y1={center}
              x2={center}
              y2={center - (outerRadius * 0.8)}
              stroke={imageColors.isDark ? "#10b981" : "#059669"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* 中心圆点 */}
            <circle
              cx={center}
              cy={center}
              r={size < 200 ? "6" : size < 280 ? "7" : size < 320 ? "8" : "10"}
              fill={imageColors.isDark ? "#000000" : "#ffffff"}
            />
            <circle
              cx={center}
              cy={center}
              r={size < 200 ? "4" : size < 280 ? "5" : size < 320 ? "6" : "8"}
              fill={imageColors.textColor}
            />
            <circle
              cx={center}
              cy={center}
              r={size < 200 ? "2" : size < 280 ? "3" : "4"}
              fill={imageColors.isDark ? "#10b981" : "#059669"}
            />
          </svg>
        </div>
        
        {/* 默认时间显示 */}
        <div className="text-center">
          <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 select-none flex items-baseline justify-center space-x-1 sm:space-x-2 text-gray-800">
            <span>12:00</span>
            <span className="text-sm sm:text-base lg:text-lg font-semibold opacity-90 text-red-600">
              AM
            </span>
          </div>
          
          <div className="text-[10px] sm:text-xs lg:text-sm select-none opacity-70 text-gray-600">
            加载中...
          </div>
        </div>
      </div>
    )
  }

  // 计算指针角度
  const getHourAngle = () => {
    const hours = time.getHours() % 12
    const minutes = time.getMinutes()
    return (hours * 30) + (minutes * 0.5) // 每小时30度，每分钟0.5度
  }

  const getMinuteAngle = () => {
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    return (minutes * 6) + (seconds * 0.1) // 每分钟6度，每秒0.1度
  }

  const getSecondAngle = () => {
    return time.getSeconds() * 6 // 每秒6度
  }

  // 格式化数字显示
  const formatTime = () => {
    let hours = time.getHours()
    const minutes = time.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // 0点显示为12点
    
    return {
      time: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
      ampm: ampm
    }
  }

  const formattedTime = formatTime()

  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      {/* 时钟表盘 */}
      <div className="relative">
        <svg width={size} height={size} className="drop-shadow-lg clock-dial cursor-pointer" onClick={handleClockClick}>
          <defs>
            <pattern id="backgroundPatternLive" patternUnits="userSpaceOnUse" width={size} height={size} x="0" y="0">
              <rect width={size} height={size} fill="white" />
              <image 
                href={currentImage}
                x={size * 0.15} 
                y={size * 0.15} 
                width={size * 0.7} 
                height={size * 0.7} 
                preserveAspectRatio="xMidYMid meet"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </pattern>
            <clipPath id="clockClipLive">
              <circle cx={center} cy={center} r={outerRadius} />
            </clipPath>
          </defs>
          
          {/* 底色背景圆 */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius}
            fill={imageColors.solidBackgroundColor}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            opacity="0.8"
          />
          
          {/* 外圆背景 */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius}
            fill="url(#backgroundPatternLive)"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            clipPath="url(#clockClipLive)"
            opacity="0.7"
          />
          
          {/* 内圆装饰 */}
          <circle
            cx={center}
            cy={center}
            r={innerRadius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="1"
            strokeDasharray="2,4"
          />
          
          {/* 小时刻度 */}
          {[...Array(12)].map((_, i) => {
            const angle = i * 30 // 每30度一个刻度
            const x1 = center + outerRadius * Math.cos((angle - 90) * Math.PI / 180)
            const y1 = center + outerRadius * Math.sin((angle - 90) * Math.PI / 180)
            const x2 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180)
            const y2 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180)
            
            return (
              <g key={i}>
                {/* 背景线 */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={imageColors.isDark ? "#000000" : "#ffffff"}
                  strokeWidth={strokeWidth + 3}
                />
                {/* 主线 */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={imageColors.textColor}
                  strokeWidth={strokeWidth + 1}
                />
              </g>
            )
          })}
          
          {/* 分钟小刻度 */}
          {[...Array(60)].map((_, i) => {
            if (i % 5 !== 0) { // 不是主刻度的位置
              const angle = i * 6 // 每6度一个小刻度
              const x1 = center + outerRadius * Math.cos((angle - 90) * Math.PI / 180)
              const y1 = center + outerRadius * Math.sin((angle - 90) * Math.PI / 180)
              const x2 = center + (outerRadius - 5) * Math.cos((angle - 90) * Math.PI / 180)
              const y2 = center + (outerRadius - 5) * Math.sin((angle - 90) * Math.PI / 180)
              
              return (
                <line
                  key={`small-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#d1d5db"
                  strokeWidth="1"
                />
              )
            }
            return null
          })}
          
          {/* 数字 */}
          {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
            const angle = i * 30 // 每30度一个数字
            const x = center + (outerRadius - 25) * Math.cos((angle - 90) * Math.PI / 180)
            const y = center + (outerRadius - 25) * Math.sin((angle - 90) * Math.PI / 180)
            
            return (
              <g key={num}>
                {/* 背景文字 - 创建对比 */}
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-xs sm:text-sm lg:text-lg font-bold select-none"
                  fill={imageColors.isDark ? "#000000" : "#ffffff"}
                  stroke={imageColors.isDark ? "#000000" : "#ffffff"}
                  strokeWidth="3"
                >
                  {num}
                </text>
                {/* 主文字 */}
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-xs sm:text-sm lg:text-lg font-bold select-none"
                  fill={imageColors.textColor}
                >
                  {num}
                </text>
              </g>
            )
          })}
          
          {/* 小时指针 */}
          <g>
            <line
              x1={center}
              y1={center}
              x2={center + (outerRadius * 0.5) * Math.sin(getHourAngle() * Math.PI / 180)}
              y2={center - (outerRadius * 0.5) * Math.cos(getHourAngle() * Math.PI / 180)}
              stroke={imageColors.isDark ? "#000000" : "#ffffff"}
              strokeWidth={Math.max(6, strokeWidth + 4)}
              strokeLinecap="round"
            />
            <line
              x1={center}
              y1={center}
              x2={center + (outerRadius * 0.5) * Math.sin(getHourAngle() * Math.PI / 180)}
              y2={center - (outerRadius * 0.5) * Math.cos(getHourAngle() * Math.PI / 180)}
              stroke={imageColors.textColor}
              strokeWidth={Math.max(4, strokeWidth + 2)}
              strokeLinecap="round"
            />
          </g>
          
          {/* 分钟指针 */}
          <g>
            <line
              x1={center}
              y1={center}
              x2={center + (outerRadius * 0.7) * Math.sin(getMinuteAngle() * Math.PI / 180)}
              y2={center - (outerRadius * 0.7) * Math.cos(getMinuteAngle() * Math.PI / 180)}
              stroke={imageColors.isDark ? "#000000" : "#ffffff"}
              strokeWidth={Math.max(4, strokeWidth + 2)}
              strokeLinecap="round"
            />
            <line
              x1={center}
              y1={center}
              x2={center + (outerRadius * 0.7) * Math.sin(getMinuteAngle() * Math.PI / 180)}
              y2={center - (outerRadius * 0.7) * Math.cos(getMinuteAngle() * Math.PI / 180)}
              stroke={imageColors.textColor}
              strokeWidth={Math.max(2, strokeWidth)}
              strokeLinecap="round"
            />
          </g>
          
          {/* 秒针 */}
          <line
            x1={center}
            y1={center}
            x2={center + (outerRadius * 0.8) * Math.sin(getSecondAngle() * Math.PI / 180)}
            y2={center - (outerRadius * 0.8) * Math.cos(getSecondAngle() * Math.PI / 180)}
            stroke={imageColors.isDark ? "#10b981" : "#059669"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* 中心圆点 */}
          <circle
            cx={center}
            cy={center}
            r={size < 200 ? "6" : size < 280 ? "7" : size < 320 ? "8" : "10"}
            fill={imageColors.isDark ? "#000000" : "#ffffff"}
          />
          <circle
            cx={center}
            cy={center}
            r={size < 200 ? "4" : size < 280 ? "5" : size < 320 ? "6" : "8"}
            fill={imageColors.textColor}
          />
          <circle
            cx={center}
            cy={center}
            r={size < 200 ? "2" : size < 280 ? "3" : "4"}
            fill={imageColors.isDark ? "#10b981" : "#059669"}
          />
        </svg>
      </div>
      
        {/* 时间显示 */}
        <div className="text-center">
          <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 select-none flex items-baseline justify-center space-x-1 sm:space-x-2 text-gray-800">
            <span>{formattedTime.time}</span>
            <span className="text-sm sm:text-base lg:text-lg font-semibold opacity-90 text-red-600">
              {formattedTime.ampm}
            </span>
          </div>
          
          <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 select-none px-1">
            {time.toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            })} • 点击表盘切换图片
          </div>
        </div>
    </div>
  )
} 