'use client'

import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(null) // 初始状态为 null，避免 hydration 错误
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(new Date())
    
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 如果还没有 mounted 或者时间还没设置，显示默认状态
  if (!mounted || !time) {
    return (
      <div className="flex flex-col items-center space-y-6">
        {/* 静态时钟表盘 */}
        <div className="relative">
          <svg width="280" height="280" className="drop-shadow-lg">
            {/* 外圆背景 */}
            <circle
              cx="140"
              cy="140"
              r="130"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            
            {/* 内圆装饰 */}
            <circle
              cx="140"
              cy="140"
              r="120"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="1"
              strokeDasharray="2,4"
            />
            
            {/* 静态小时刻度 - 使用固定坐标 */}
            <line x1="140" y1="20" x2="140" y2="30" stroke="#374151" strokeWidth="3" />
            <line x1="195.31" y1="32.5" x2="190.66" y2="40.34" stroke="#374151" strokeWidth="3" />
            <line x1="235" y1="84.69" x2="227.16" y2="89.34" stroke="#374151" strokeWidth="3" />
            <line x1="250" y1="140" x2="240" y2="140" stroke="#374151" strokeWidth="3" />
            <line x1="235" y1="195.31" x2="227.16" y2="190.66" stroke="#374151" strokeWidth="3" />
            <line x1="195.31" y1="247.5" x2="190.66" y2="239.66" stroke="#374151" strokeWidth="3" />
            <line x1="140" y1="260" x2="140" y2="250" stroke="#374151" strokeWidth="3" />
            <line x1="84.69" y1="247.5" x2="89.34" y2="239.66" stroke="#374151" strokeWidth="3" />
            <line x1="45" y1="195.31" x2="52.84" y2="190.66" stroke="#374151" strokeWidth="3" />
            <line x1="30" y1="140" x2="40" y2="140" stroke="#374151" strokeWidth="3" />
            <line x1="45" y1="84.69" x2="52.84" y2="89.34" stroke="#374151" strokeWidth="3" />
            <line x1="84.69" y1="32.5" x2="89.34" y2="40.34" stroke="#374151" strokeWidth="3" />
            
            {/* 静态数字 - 使用固定坐标 */}
            <text x="140" y="40" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">12</text>
            <text x="185" y="55" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">1</text>
            <text x="215" y="95" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">2</text>
            <text x="225" y="145" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">3</text>
            <text x="215" y="190" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">4</text>
            <text x="185" y="225" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">5</text>
            <text x="140" y="240" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">6</text>
            <text x="95" y="225" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">7</text>
            <text x="65" y="190" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">8</text>
            <text x="55" y="145" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">9</text>
            <text x="65" y="95" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">10</text>
            <text x="95" y="55" textAnchor="middle" dominantBaseline="central" className="fill-gray-700 text-lg font-bold select-none">11</text>
            
            {/* 默认指针位置 (12:00:00) */}
            {/* 小时指针 */}
            <line
              x1="140"
              y1="140"
              x2="140"
              y2="80"
              stroke="#374151"
              strokeWidth="6"
              strokeLinecap="round"
            />
            
            {/* 分钟指针 */}
            <line
              x1="140"
              y1="140"
              x2="140"
              y2="55"
              stroke="#374151"
              strokeWidth="4"
              strokeLinecap="round"
            />
            
            {/* 秒针 */}
            <line
              x1="140"
              y1="140"
              x2="140"
              y2="45"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* 中心圆点 */}
            <circle
              cx="140"
              cy="140"
              r="8"
              fill="#374151"
            />
            <circle
              cx="140"
              cy="140"
              r="4"
              fill="#10b981"
            />
          </svg>
        </div>
        
        {/* 默认时间显示 */}
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-800 mb-4 select-none flex items-baseline justify-center space-x-2">
            <span>12:00</span>
            <span className="text-lg font-semibold text-gray-600">AM</span>
          </div>
          
          <div className="text-sm text-gray-500 select-none">
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
    <div className="flex flex-col items-center space-y-6">
      {/* 时钟表盘 */}
      <div className="relative">
        <svg width="280" height="280" className="drop-shadow-lg">
          {/* 外圆背景 */}
          <circle
            cx="140"
            cy="140"
            r="130"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          
          {/* 内圆装饰 */}
          <circle
            cx="140"
            cy="140"
            r="120"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="1"
            strokeDasharray="2,4"
          />
          
          {/* 小时刻度 */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) - 90
            const x1 = 140 + 110 * Math.cos(angle * Math.PI / 180)
            const y1 = 140 + 110 * Math.sin(angle * Math.PI / 180)
            const x2 = 140 + 100 * Math.cos(angle * Math.PI / 180)
            const y2 = 140 + 100 * Math.sin(angle * Math.PI / 180)
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#374151"
                strokeWidth="3"
              />
            )
          })}
          
          {/* 分钟刻度 */}
          {[...Array(60)].map((_, i) => {
            if (i % 5 !== 0) { // 不是小时刻度的位置
              const angle = (i * 6) - 90
              const x1 = 140 + 110 * Math.cos(angle * Math.PI / 180)
              const y1 = 140 + 110 * Math.sin(angle * Math.PI / 180)
              const x2 = 140 + 105 * Math.cos(angle * Math.PI / 180)
              const y2 = 140 + 105 * Math.sin(angle * Math.PI / 180)
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#9ca3af"
                  strokeWidth="1"
                />
              )
            }
            return null
          })}
          
          {/* 数字 */}
          {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number, i) => {
            const angle = (i * 30) - 90
            const x = 140 + 85 * Math.cos(angle * Math.PI / 180)
            const y = 140 + 85 * Math.sin(angle * Math.PI / 180)
            
            return (
              <text
                key={number}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-gray-700 text-lg font-bold select-none"
              >
                {number}
              </text>
            )
          })}
          
          {/* 小时指针 */}
          <line
            x1="140"
            y1="140"
            x2={140 + 60 * Math.cos((getHourAngle() - 90) * Math.PI / 180)}
            y2={140 + 60 * Math.sin((getHourAngle() - 90) * Math.PI / 180)}
            stroke="#374151"
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* 分钟指针 */}
          <line
            x1="140"
            y1="140"
            x2={140 + 85 * Math.cos((getMinuteAngle() - 90) * Math.PI / 180)}
            y2={140 + 85 * Math.sin((getMinuteAngle() - 90) * Math.PI / 180)}
            stroke="#374151"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* 秒针 */}
          <line
            x1="140"
            y1="140"
            x2={140 + 95 * Math.cos((getSecondAngle() - 90) * Math.PI / 180)}
            y2={140 + 95 * Math.sin((getSecondAngle() - 90) * Math.PI / 180)}
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* 中心圆点 */}
          <circle
            cx="140"
            cy="140"
            r="8"
            fill="#374151"
          />
          <circle
            cx="140"
            cy="140"
            r="4"
            fill="#10b981"
          />
        </svg>
      </div>
      
      {/* 数字时间显示 */}
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-4 select-none flex items-baseline justify-center space-x-2">
          <span>{formattedTime.time}</span>
          <span className="text-lg font-semibold text-gray-600">{formattedTime.ampm}</span>
        </div>
        
        <div className="text-sm text-gray-500 select-none">
          {time.toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
          })}
        </div>
      </div>
    </div>
  )
} 