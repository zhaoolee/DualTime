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

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* 番茄钟表盘 */}
      <div className="relative">
        <svg
          ref={timerRef}
          width="280"
          height="280"
          className="cursor-pointer timer-dial"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* 外圆 */}
          <circle
            cx="140"
            cy="140"
            r="130"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          
          {/* 分钟刻度（每5分钟一个主刻度） */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) // 每30度一个刻度（对应5分钟）
            const x1 = 140 + 120 * Math.cos((angle - 90) * Math.PI / 180)
            const y1 = 140 + 120 * Math.sin((angle - 90) * Math.PI / 180)
            const x2 = 140 + 110 * Math.cos((angle - 90) * Math.PI / 180)
            const y2 = 140 + 110 * Math.sin((angle - 90) * Math.PI / 180)
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#6b7280"
                strokeWidth="2"
              />
            )
          })}
          
          {/* 分钟小刻度 */}
          {[...Array(60)].map((_, i) => {
            if (i % 5 !== 0) { // 不是主刻度的位置
              const angle = i * 6 // 每6度一个小刻度（对应1分钟）
              const x1 = 140 + 120 * Math.cos((angle - 90) * Math.PI / 180)
              const y1 = 140 + 120 * Math.sin((angle - 90) * Math.PI / 180)
              const x2 = 140 + 115 * Math.cos((angle - 90) * Math.PI / 180)
              const y2 = 140 + 115 * Math.sin((angle - 90) * Math.PI / 180)
              
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
            const x = 140 + 100 * Math.cos((angle - 90) * Math.PI / 180)
            const y = 140 + 100 * Math.sin((angle - 90) * Math.PI / 180)
            
            return (
              <text
                key={minute}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-gray-600 text-sm font-semibold select-none"
              >
                {minute}
              </text>
            )
          })}
          
          {/* 进度扇形 - 从12点位置开始 */}
          {rotationAngle > 0 && (
            <path
              d={`M 140 140 L 140 10 A 130 130 0 ${rotationAngle > 180 ? 1 : 0} 1 ${
                140 + 130 * Math.sin(rotationAngle * Math.PI / 180)
              } ${
                140 - 130 * Math.cos(rotationAngle * Math.PI / 180)
              } Z`}
              fill={isRunning && !isDragging && !isResetting ? "#10b981" : "#ef4444"}
              opacity="0.7"
            />
          )}
          
          {/* 计时针 */}
          <line
            x1="140"
            y1="140"
            x2={140 + 120 * Math.sin(rotationAngle * Math.PI / 180)}
            y2={140 - 120 * Math.cos(rotationAngle * Math.PI / 180)}
            stroke="#374151"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* 旋转旋钮 */}
          <circle
            cx={140 + 120 * Math.sin(rotationAngle * Math.PI / 180)}
            cy={140 - 120 * Math.cos(rotationAngle * Math.PI / 180)}
            r="12"
            fill="#374151"
            stroke="white"
            strokeWidth="3"
            className="cursor-grab active:cursor-grabbing"
          />
          
          {/* 12点位置的起始标记 */}
          <circle
            cx="140"
            cy="10"
            r="4"
            fill="#10b981"
          />
          
          {/* 中心圆点 */}
          <circle
            cx="140"
            cy="140"
            r="6"
            fill="#374151"
          />
        </svg>
      </div>
      
      {/* 时间显示 */}
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-4 select-none">
          {String(displayMinutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}
        </div>
        
        {/* 状态提示 */}
        <div className="text-sm text-gray-500 select-none">
          {isDragging || isResetting ? '拖拽重新设定时间，松手开始倒计时' : 
           isRunning ? '倒计时进行中...（可拖拽指针重新设定）' : 
           '拖拽旋钮设定番茄钟时间'}
        </div>
      </div>
    </div>
  )
} 