import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden">
      {/* Background Aurora Effect */}
      <div className="fixed inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-4xl mx-4 p-8">
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20">
          {/* Main Content */}
          <div className="flex flex-col items-center text-center">
            {/* 404 Text with Glow Effect */}
            <h1 className="text-[180px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-600 md:text-[220px] select-none relative">
              <span className="animate-pulse">404</span>
              <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-violet-400 to-pink-600 animate-pulse"></div>
            </h1>

            {/* Title and Description */}
            <div className="space-y-6 mt-4 mb-8">
              <h2 className="text-5xl font-bold text-white tracking-wide animate-fade-in">
                Lost in Space
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
                Houston, we have a problem! The page you're looking for has drifted into deep space.
                <br />
                <span className="text-purple-300 font-medium">Let's navigate back to familiar territory.</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link 
                to="/" 
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold rounded-xl 
                           overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-white/20 to-transparent skew-x-[25deg] 
                               group-hover:-translate-x-full transition-transform duration-700 ease-in-out"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Return Home
                </span>
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="px-8 py-4 text-white font-bold rounded-xl border-2 border-white/20 backdrop-blur-sm
                         hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Go Back
                </span>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 flex items-center gap-4 text-gray-400">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              <p className="text-sm font-medium">Error Code: 404_PAGE_NOT_FOUND</p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;