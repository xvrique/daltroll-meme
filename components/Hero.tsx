'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-12 px-4">
      {/* Floating Decorative Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rocket - Top Left */}
        <div className="absolute top-32 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24 animate-float opacity-80">
          <Image 
            src="/assets/rocket.png" 
            alt="Rocket"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Coin - Top Right */}
        <div className="absolute top-24 right-8 md:right-20 w-12 h-12 md:w-20 md:h-20 animate-pulse-slow opacity-90">
          <Image 
            src="/assets/coin.png" 
            alt="Coin"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Pump It - Left Side */}
        <div className="absolute top-1/3 left-4 md:left-12 w-20 h-20 md:w-28 md:h-28 animate-float opacity-70" style={{ animationDelay: '1s' }}>
          <Image 
            src="/assets/pumpit.png" 
            alt="Pump It"
            width={112}
            height={112}
            className="object-contain"
          />
        </div>

        {/* WAGMI - Right Side */}
        <div className="absolute top-1/2 right-4 md:right-16 w-20 h-20 md:w-32 md:h-32 animate-pulse-slow opacity-75" style={{ animationDelay: '0.5s' }}>
          <Image 
            src="/assets/wagmi.png" 
            alt="WAGMI"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        {/* LOL - Bottom Left */}
        <div className="absolute bottom-32 left-8 md:left-24 w-16 h-16 md:w-24 md:h-24 animate-float opacity-80" style={{ animationDelay: '2s' }}>
          <Image 
            src="/assets/lol.png" 
            alt="LOL"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Fungus - Bottom Right */}
        <div className="absolute bottom-24 right-8 md:right-20 w-16 h-16 md:w-24 md:h-24 animate-pulse-slow opacity-70" style={{ animationDelay: '1.5s' }}>
          <Image 
            src="/assets/fungus.png" 
            alt="Fungus"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* To The Moon Tag - Floating */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 animate-float opacity-60 hidden md:block" style={{ animationDelay: '0.8s' }}>
          <Image 
            src="/assets/tothemoon.png" 
            alt="To The Moon"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl pixel-text glow-blue text-blue-400 mb-4 md:mb-6 lg:mb-8 animate-float leading-tight">
          DALTROLL
        </h1>

        {/* Character Avatar - Using logo-main.png */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto mb-4 md:mb-6 lg:mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="relative w-full h-full rounded-full border-4 md:border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm">
            {/* Logo Image */}
            <Image 
              src="/assets/logo-main.png" 
              alt="DALTROLL Logo"
              width={320}
              height={320}
              className="object-contain p-2 md:p-4"
              priority
            />
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm md:text-base pixel-text text-gray-300 leading-relaxed px-2 md:px-4">
            The first <span className="text-blue-400 glow-blue">Dalang Pelo x Troll</span> meme collab on 
            <span className="text-purple-400"> Solana</span>, bringing chaos, culture, and community to the moon!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg pixel-text text-xs md:text-sm text-white shadow-2xl hover:shadow-blue-500/50 transition-all border-2 border-blue-400 hover:scale-105">
            BUY NOW
          </button>
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent hover:bg-blue-900/30 rounded-lg pixel-text text-xs md:text-sm text-blue-400 border-2 border-blue-400 hover:border-blue-300 transition-all hover:scale-105">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </section>
  );
}
