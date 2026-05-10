'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-32 pb-12 px-3 md:px-4">
      <div className="relative z-10 max-w-6xl mx-auto px-2 md:px-6 text-center w-full">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl pixel-text glow-blue text-blue-400 mb-4 md:mb-6 lg:mb-8 animate-float leading-tight break-words">
          DALTROLL
        </h1>

        {/* Character Avatar - Using logo-main.png */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto mb-4 md:mb-6 lg:mb-8">
          {/* Outer Glow Layer 1 */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-600/40 to-pink-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Outer Glow Layer 2 */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-float"></div>
          
          {/* Main Frame Container */}
          <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden">
            {/* Outer Border - Thick White */}
            <div className="absolute inset-0 rounded-full border-4 md:border-8 border-white shadow-2xl"></div>
            
            {/* Inner Border - Blue Glow */}
            <div className="absolute inset-1 md:inset-2 rounded-full border-2 md:border-4 border-blue-400/60 shadow-lg shadow-blue-500/50"></div>
            
            {/* Inner Border - Purple Accent */}
            <div className="absolute inset-2 md:inset-3 rounded-full border-1 md:border-2 border-purple-400/40"></div>
            
            {/* Background Gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/50 via-purple-900/60 to-blue-900/50 backdrop-blur-sm"></div>
            
            {/* Animated Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 md:border-3 border-transparent border-t-blue-400 border-r-purple-400 border-b-pink-400 border-l-cyan-400 animate-spin" style={{ animationDuration: '8s' }}></div>
            
            {/* Logo Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2 md:p-4">
              <Image 
                src="/assets/logo-main.png" 
                alt="DALTROLL Logo"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          
          {/* Ripple Effect - Outer */}
          <div className="absolute inset-0 rounded-full border-2 md:border-4 border-blue-400/40 animate-ping" style={{ animationDuration: '2s' }}></div>
          
          {/* Ripple Effect - Inner */}
          <div className="absolute inset-4 md:inset-8 rounded-full border-2 border-cyan-400/30 animate-pulse-slow"></div>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 md:w-6 md:h-6 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm md:text-base pixel-text text-gray-300 leading-relaxed px-2 md:px-4">
            The first <span className="text-blue-400 glow-blue">Dalang Pelo x Troll</span> meme collab on 
            <span className="text-purple-400"> Solana</span>, bringing chaos, culture, and community to the moon!
          </p>
        </div>

        {/* Pump.fun Badge */}
        <div className="mb-6 md:mb-8 px-2">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 rounded-full backdrop-blur-sm animate-pulse-slow max-w-full">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-xs md:text-sm pixel-text text-green-400 whitespace-nowrap">
              LISTING ON PUMP.FUN
            </span>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </section>
  );
}
