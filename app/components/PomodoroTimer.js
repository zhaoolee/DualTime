'use client'

import { useState, useEffect, useRef } from 'react'

export default function PomodoroTimer() {
  const [totalMinutes, setTotalMinutes] = useState(0) // 设定的总时间
  const [remainingMinutes, setRemainingMinutes] = useState(0) // 剩余分钟
  const [remainingSeconds, setRemainingSeconds] = useState(0) // 剩余秒数
  const [isRunning, setIsRunning] = useState(false)
  const [rotationAngle, setRotationAngle] = useState(0) // 当前针的角度，0度为12点位置
  const [isDragging, setIsDragging] = useState(false)
  const [isResetting, setIsResetting] = useState(false) // 是否正在重新设定时间
  const timerRef = useRef(null)

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
      
      // 响应式圆环宽度 - 针对更小屏幕优化
      let ringWidth
      if (finalSize < 160) {
        ringWidth = 6  // 超小屏幕
      } else if (finalSize < 200) {
        ringWidth = 8  // 很小屏幕
      } else if (finalSize < 240) {
        ringWidth = 10 // 小屏幕 (iPhone SE等)
      } else if (finalSize < 280) {
        ringWidth = 12 // 中小屏幕
      } else if (finalSize < 320) {
        ringWidth = 14 // 中屏幕
      } else {
        ringWidth = 16 // 大屏幕
      }
      const outerRingInset = ringWidth
      const innerRingInset = Math.max(4, ringWidth - 3) // 确保内圆环至少有4px
      
      return { 
        size: finalSize, 
        center: center, 
        outerRadius: outerRadius, 
        innerRadius: innerRadius, 
        strokeWidth: strokeWidth,
        outerRingInset: outerRingInset,
        innerRingInset: innerRingInset
      }
    }
    return { size: 280, center: 140, outerRadius: 130, innerRadius: 120, strokeWidth: 2, outerRingInset: 14, innerRingInset: 11 }
  }

  const [dimensions, setDimensions] = useState(getResponsiveSize())

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getResponsiveSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 计时器逻辑
  useEffect(() => {
    let interval = null
    if (isRunning && !isDragging && !isResetting && (remainingMinutes > 0 || remainingSeconds > 0)) {
      interval = setInterval(() => {
        if (remainingSeconds > 0) {
          setRemainingSeconds(remainingSeconds - 1)
        } else if (remainingMinutes > 0) {
          setRemainingMinutes(remainingMinutes - 1)
          setRemainingSeconds(59)
        }
      }, 1000)
    } else if (remainingMinutes === 0 && remainingSeconds === 0 && isRunning && !isDragging && !isResetting) {
      setIsRunning(false)
      setRotationAngle(0)
      alert('番茄钟时间到！')
    }
    return () => clearInterval(interval)
  }, [isRunning, remainingMinutes, remainingSeconds, isDragging, isResetting])

  // 根据剩余时间更新针的角度（仅在非拖拽状态下）
  useEffect(() => {
    if (isRunning && totalMinutes > 0 && !isDragging && !isResetting) {
      const totalSeconds = totalMinutes * 60
      const remainingTotalSeconds = remainingMinutes * 60 + remainingSeconds
      const progress = remainingTotalSeconds / totalSeconds
      setRotationAngle(progress * totalMinutes * 6) // 保持剩余时间对应的角度
    }
  }, [remainingMinutes, remainingSeconds, totalMinutes, isRunning, isDragging, isResetting])

  // 角度转换为分钟 (360度对应60分钟)
  const angleToMinutes = (angle) => {
    return Math.round(angle / 6)
  }

  // 处理旋转拖拽 - 现在允许在倒计时时拖拽
  const handleMouseDown = (e) => {
    setIsDragging(true)
    if (isRunning) {
      setIsResetting(true) // 开始重新设定时间
    }
    updateAngleFromMouse(e)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    updateAngleFromMouse(e)
  }

  const handleMouseUp = () => {
    if (isDragging && rotationAngle > 0) {
      // 松手后设定新的时间并开始倒计时
      const minutes = angleToMinutes(rotationAngle)
      setTotalMinutes(minutes)
      setRemainingMinutes(minutes)
      setRemainingSeconds(0)
      setIsRunning(true)
      setIsResetting(false)
    } else if (isDragging && rotationAngle === 0) {
      // 如果拖拽到0位置，则停止计时器
      setIsRunning(false)
      setIsResetting(false)
      setTotalMinutes(0)
      setRemainingMinutes(0)
      setRemainingSeconds(0)
    }
    setIsDragging(false)
  }

  const updateAngleFromMouse = (e) => {
    const rect = timerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
    
    // 调整角度，使12点位置为0度起点
    let normalizedAngle = (angle + 90 + 360) % 360
    
    setRotationAngle(normalizedAngle)
  }

  // 触摸事件处理 - 现在允许在倒计时时拖拽
  const handleTouchStart = (e) => {
    // 阻止默认行为，防止触发下拉刷新
    e.preventDefault()
    e.stopPropagation()
    
    setIsDragging(true)
    if (isRunning) {
      setIsResetting(true) // 开始重新设定时间
    }
    const touch = e.touches[0]
    updateAngleFromTouch(touch)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    // 阻止默认行为，防止触发滚动和下拉刷新
    e.preventDefault()
    e.stopPropagation()
    const touch = e.touches[0]
    updateAngleFromTouch(touch)
  }

  const handleTouchEnd = () => {
    if (isDragging && rotationAngle > 0) {
      // 松手后设定新的时间并开始倒计时
      const minutes = angleToMinutes(rotationAngle)
      setTotalMinutes(minutes)
      setRemainingMinutes(minutes)
      setRemainingSeconds(0)
      setIsRunning(true)
      setIsResetting(false)
    } else if (isDragging && rotationAngle === 0) {
      // 如果拖拽到0位置，则停止计时器
      setIsRunning(false)
      setIsResetting(false)
      setTotalMinutes(0)
      setRemainingMinutes(0)
      setRemainingSeconds(0)
    }
    setIsDragging(false)
  }

  const updateAngleFromTouch = (touch) => {
    const rect = timerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI)
    
    // 调整角度，使12点位置为0度起点
    let normalizedAngle = (angle + 90 + 360) % 360
    
    setRotationAngle(normalizedAngle)
  }

  // 添加全局事件监听
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, rotationAngle, isRunning])

  // 显示时间：拖拽或重新设定时显示设定时间，运行时显示剩余时间
  const displayMinutes = (isDragging || isResetting) ? angleToMinutes(rotationAngle) : remainingMinutes
  const displaySeconds = (isDragging || isResetting) ? 0 : remainingSeconds

  const { size, center, outerRadius, innerRadius, strokeWidth, outerRingInset, innerRingInset } = dimensions

  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      {/* 番茄钟表盘 - 炉石传说风格 */}
      <div className="relative">
        {/* 外层装饰环 - 响应式宽度 */}
        <div 
          className="absolute bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-full shadow-2xl opacity-80"
          style={{ inset: `-${outerRingInset}px` }}
        ></div>
        <div 
          className="absolute bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-full shadow-xl opacity-90"
          style={{ inset: `-${innerRingInset}px` }}
        ></div>
        
        {/* 主表盘容器 */}
        <div className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 rounded-full border-4 border-amber-600 shadow-2xl overflow-hidden">
          
          {/* 内部纹理效果 */}
          <div className="absolute inset-0 rounded-full opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-300/20 to-amber-400/30 rounded-full"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.4)_0%,transparent_60%)] rounded-full"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(184,134,11,0.3)_0%,transparent_60%)] rounded-full"></div>
          </div>
          
          {/* 装饰宝石 */}
          {[0, 90, 180, 270].map((angle, index) => {
            const colors = ['from-ruby-400 to-ruby-600', 'from-emerald-400 to-emerald-600', 'from-sapphire-400 to-sapphire-600', 'from-amethyst-400 to-amethyst-600']
            const x = center + (outerRadius + 15) * Math.cos((angle - 90) * Math.PI / 180)
            const y = center + (outerRadius + 15) * Math.sin((angle - 90) * Math.PI / 180)
            return (
              <div
                key={index}
                className={`absolute w-4 h-4 bg-gradient-to-br ${colors[index]} rounded-full border-2 border-amber-700 shadow-lg z-20`}
                style={{
                  left: `${x - 8}px`,
                  top: `${y - 8}px`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
              </div>
            )
          })}

          <svg
            ref={timerRef}
            width={size}
            height={size}
            className="cursor-pointer timer-dial relative z-10"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* 外圆 - 金属质感 */}
            <defs>
              <radialGradient id="metalGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </radialGradient>
              <radialGradient id="innerGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="70%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <circle
              cx={center}
              cy={center}
              r={outerRadius}
              fill="url(#innerGradient)"
              stroke="url(#metalGradient)"
              strokeWidth={strokeWidth * 2}
            />
            
            {/* 内圆装饰 */}
            <circle
              cx={center}
              cy={center}
              r={innerRadius}
              fill="none"
              stroke="#92400e"
              strokeWidth={strokeWidth}
              opacity="0.6"
            />
            
            {/* 分钟刻度（每5分钟一个主刻度） - 金属风格 */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) // 每30度一个刻度（对应5分钟）
              const x1 = center + (outerRadius - 15) * Math.cos((angle - 90) * Math.PI / 180)
              const y1 = center + (outerRadius - 15) * Math.sin((angle - 90) * Math.PI / 180)
              const x2 = center + (outerRadius - 25) * Math.cos((angle - 90) * Math.PI / 180)
              const y2 = center + (outerRadius - 25) * Math.sin((angle - 90) * Math.PI / 180)
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#92400e"
                  strokeWidth={strokeWidth * 1.5}
                  strokeLinecap="round"
                />
              )
            })}
            
            {/* 分钟小刻度 - 精致风格 */}
            {[...Array(60)].map((_, i) => {
              if (i % 5 !== 0) { // 不是主刻度的位置
                const angle = i * 6 // 每6度一个小刻度（对应1分钟）
                const x1 = center + (outerRadius - 15) * Math.cos((angle - 90) * Math.PI / 180)
                const y1 = center + (outerRadius - 15) * Math.sin((angle - 90) * Math.PI / 180)
                const x2 = center + (outerRadius - 20) * Math.cos((angle - 90) * Math.PI / 180)
                const y2 = center + (outerRadius - 20) * Math.sin((angle - 90) * Math.PI / 180)
                
                return (
                  <line
                    key={`small-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#b45309"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )
              }
              return null
            })}
            
            {/* 分钟刻度标签 - 炉石风格字体 */}
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((minute) => {
              const angle = minute * 6 // 每分钟6度
              const x = center + (outerRadius - 45) * Math.cos((angle - 90) * Math.PI / 180)
              const y = center + (outerRadius - 45) * Math.sin((angle - 90) * Math.PI / 180)
              
              return (
                <g key={minute}>
                  {/* 背景文字 - 轻微阴影增强可读性 */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-[10px] sm:text-xs lg:text-sm font-bold select-none"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="2"
                  >
                    {minute}
                  </text>
                  {/* 主文字 */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-amber-900 text-[10px] sm:text-xs lg:text-sm font-bold select-none"
                  >
                    {minute}
                  </text>
                </g>
              )
            })}
            
            {/* 进度扇形 - 魔法效果 */}
            {rotationAngle > 0 && (
              <>
                <defs>
                  <radialGradient id="progressGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor={isRunning && !isDragging && !isResetting ? "#10b981" : "#ef4444"} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isRunning && !isDragging && !isResetting ? "#059669" : "#dc2626"} stopOpacity="0.6" />
                  </radialGradient>
                </defs>
                <path
                  d={`M ${center} ${center} L ${center} ${center - outerRadius} A ${outerRadius} ${outerRadius} 0 ${rotationAngle > 180 ? 1 : 0} 1 ${
                    center + outerRadius * Math.sin(rotationAngle * Math.PI / 180)
                  } ${
                    center - outerRadius * Math.cos(rotationAngle * Math.PI / 180)
                  } Z`}
                  fill="url(#progressGradient)"
                  filter="url(#glow)"
                />
              </>
            )}
            
            {/* 计时针 - 魔法指针 */}
            <line
              x1={center}
              y1={center}
              x2={center + (outerRadius - 15) * Math.sin(rotationAngle * Math.PI / 180)}
              y2={center - (outerRadius - 15) * Math.cos(rotationAngle * Math.PI / 180)}
              stroke="#92400e"
              strokeWidth={Math.max(3, strokeWidth + 2)}
              strokeLinecap="round"
              filter="url(#glow)"
            />
            
            {/* 旋转旋钮 - 宝石风格 */}
            <circle
              cx={center + (outerRadius - 15) * Math.sin(rotationAngle * Math.PI / 180)}
              cy={center - (outerRadius - 15) * Math.cos(rotationAngle * Math.PI / 180)}
              r={size < 200 ? "8" : size < 280 ? "10" : size < 320 ? "12" : "14"}
              fill="url(#metalGradient)"
              stroke="#92400e"
              strokeWidth="3"
              className="cursor-grab active:cursor-grabbing"
              filter="url(#glow)"
            />
            
            {/* 旋钮内部宝石 */}
            <circle
              cx={center + (outerRadius - 15) * Math.sin(rotationAngle * Math.PI / 180)}
              cy={center - (outerRadius - 15) * Math.cos(rotationAngle * Math.PI / 180)}
              r={size < 200 ? "4" : size < 280 ? "5" : size < 320 ? "6" : "7"}
              fill="#dc2626"
              opacity="0.8"
            />
            
            {/* 12点位置的起始标记 - 魔法水晶 */}
            <circle
              cx={center}
              cy={center - outerRadius}
              r={size < 200 ? "4" : size < 280 ? "5" : "6"}
              fill="#10b981"
              stroke="#065f46"
              strokeWidth="2"
              filter="url(#glow)"
            />
            
            {/* 中心圆点 - 魔法核心 */}
            <circle
              cx={center}
              cy={center}
              r={size < 200 ? "6" : size < 280 ? "8" : size < 320 ? "10" : "12"}
              fill="url(#metalGradient)"
              stroke="#92400e"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <circle
              cx={center}
              cy={center}
              r={size < 200 ? "3" : size < 280 ? "4" : size < 320 ? "5" : "6"}
              fill="#dc2626"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>
      
      {/* 时间显示 - 炉石风格 */}
      <div className="text-center">
        {/* 时间显示 */}
        <div className="relative  mb-2">
          {/* 时间背景装饰 */}
          <div className="absolute -inset-2 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-lg shadow-lg opacity-20"></div>
          <div className="relative text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold select-none px-3 py-1"
               style={{
                 background: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 filter: 'drop-shadow(1px 1px 2px rgba(255,255,255,0.8))'
               }}>
            {String(displayMinutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}
          </div>
        </div>
        
        {/* 状态提示 - 魔法卷轴风格 */}
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-md opacity-60"></div>
          <div className="relative text-[10px] sm:text-xs lg:text-sm text-amber-800 font-semibold select-none px-2 py-1 bg-amber-50/80 rounded-md border border-amber-300">
            {isDragging || isResetting ? '🔮 拖拽重新设定时间，松手开始倒计时' : 
             isRunning ? '⚡ 魔法倒计时进行中...（可拖拽指针重新设定）' : 
             '✨ 拖拽旋钮设定番茄魔法钟时间'}
          </div>
        </div>
      </div>
    </div>
  )
} 