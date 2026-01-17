import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Welcome to <span className="text-blue-600">RealBay</span>!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Modern React + Tailwind v4 + Vite — ready in 2026 style 🚀
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
