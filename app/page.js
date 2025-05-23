'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// 禁用服务端渲染，避免 hydration 错误
const PomodoroTimer = dynamic(() => import('./components/PomodoroTimer'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-[280px] h-[280px] bg-gray-100 rounded-full flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-4">00:00</div>
      </div>
    </div>
  )
})

const Clock = dynamic(() => import('./components/Clock'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-[280px] h-[280px] bg-gray-100 rounded-full flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-4">12:00 AM</div>
        <div className="text-sm text-gray-500">加载中...</div>
      </div>
    </div>
  )
})

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex gap-8 items-center max-w-4xl">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center select-none">番茄钟</h2>
          <PomodoroTimer />
        </div>
        
        <div className="w-px h-80 bg-gray-200"></div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center select-none">时钟</h2>
          <Clock />
        </div>
      </div>
    </div>
  )
}
