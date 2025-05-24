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

  const { size, center, outerRadius, innerRadius, strokeWidth } = dimensions

  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      {/* 番茄钟表盘 */}
      <div className="relative">
        <svg
          ref={timerRef}
          width={size}
          height={size}
          className="cursor-pointer timer-dial"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* 外圆 */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius}
            fill="white"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          
          {/* 分钟刻度（每5分钟一个主刻度） */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) // 每30度一个刻度（对应5分钟）
            const x1 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180)
            const y1 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180)
            const x2 = center + (outerRadius - 20) * Math.cos((angle - 90) * Math.PI / 180)
            const y2 = center + (outerRadius - 20) * Math.sin((angle - 90) * Math.PI / 180)
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#6b7280"
                strokeWidth={strokeWidth}
              />
            )
          })}
          
          {/* 分钟小刻度 */}
          {[...Array(60)].map((_, i) => {
            if (i % 5 !== 0) { // 不是主刻度的位置
              const angle = i * 6 // 每6度一个小刻度（对应1分钟）
              const x1 = center + (outerRadius - 10) * Math.cos((angle - 90) * Math.PI / 180)
              const y1 = center + (outerRadius - 10) * Math.sin((angle - 90) * Math.PI / 180)
              const x2 = center + (outerRadius - 15) * Math.cos((angle - 90) * Math.PI / 180)
              const y2 = center + (outerRadius - 15) * Math.sin((angle - 90) * Math.PI / 180)
              
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
          
          {/* 分钟刻度标签 */}
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((minute) => {
            const angle = minute * 6 // 每分钟6度
            const x = center + (outerRadius - 40) * Math.cos((angle - 90) * Math.PI / 180)
            const y = center + (outerRadius - 40) * Math.sin((angle - 90) * Math.PI / 180)
            
            return (
              <text
                key={minute}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-gray-600 text-[10px] sm:text-xs lg:text-sm font-semibold select-none"
              >
                {minute}
              </text>
            )
          })}
          
          {/* 进度扇形 - 从12点位置开始 */}
          {rotationAngle > 0 && (
            <path
              d={`M ${center} ${center} L ${center} ${center - outerRadius} A ${outerRadius} ${outerRadius} 0 ${rotationAngle > 180 ? 1 : 0} 1 ${
                center + outerRadius * Math.sin(rotationAngle * Math.PI / 180)
              } ${
                center - outerRadius * Math.cos(rotationAngle * Math.PI / 180)
              } Z`}
              fill={isRunning && !isDragging && !isResetting ? "#10b981" : "#ef4444"}
              opacity="0.7"
            />
          )}
          
          {/* 计时针 */}
          <line
            x1={center}
            y1={center}
            x2={center + (outerRadius - 10) * Math.sin(rotationAngle * Math.PI / 180)}
            y2={center - (outerRadius - 10) * Math.cos(rotationAngle * Math.PI / 180)}
            stroke="#374151"
            strokeWidth={Math.max(2, strokeWidth + 1)}
            strokeLinecap="round"
          />
          
          {/* 旋转旋钮 */}
          <circle
            cx={center + (outerRadius - 10) * Math.sin(rotationAngle * Math.PI / 180)}
            cy={center - (outerRadius - 10) * Math.cos(rotationAngle * Math.PI / 180)}
            r={size < 200 ? "6" : size < 280 ? "8" : size < 320 ? "10" : "12"}
            fill="#374151"
            stroke="white"
            strokeWidth="3"
            className="cursor-grab active:cursor-grabbing"
          />
          
          {/* 12点位置的起始标记 */}
          <circle
            cx={center}
            cy={center - outerRadius}
            r={size < 200 ? "2" : size < 280 ? "3" : "4"}
            fill="#10b981"
          />
          
          {/* 中心圆点 */}
          <circle
            cx={center}
            cy={center}
            r={size < 200 ? "3" : size < 280 ? "4" : size < 320 ? "5" : "6"}
            fill="#374151"
          />
        </svg>
      </div>
      
      {/* 时间显示 */}
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-1 sm:mb-2 select-none">
          {String(displayMinutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}
        </div>
        
        {/* 状态提示 */}
        <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 select-none px-1">
          {isDragging || isResetting ? '拖拽重新设定时间，松手开始倒计时' : 
           isRunning ? '倒计时进行中...（可拖拽指针重新设定）' : 
           '拖拽旋钮设定番茄钟时间'}
        </div>
      </div>
    </div>
  )
} 