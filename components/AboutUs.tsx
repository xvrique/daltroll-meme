'use client';

import Image from 'next/image';
import { TheaterIcon, StarIcon, RocketIcon, CommunityIcon, CircusIcon, DiamondIcon } from './icons/Icons';
import TOKEN_CONFIG from '@/config/token';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-12 md:py-24 px-4 md:px-6">
      {/* Decorative Images - Positioned inside container to prevent clipping */}
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute -top-8 -left-8 md:-left-16 w-16 h-16 md:w-24 md:h-24 opacity-40 md:opacity-50 animate-float pointer-events-none">
          <Image src="/assets/coin.png" alt="coin" width={96} height={96} className="object-contain" />
        </div>
        <div className="absolute top-20 right-0 md:right-0 w-12 h-12 md:w-20 md:h-20 opacity-30 md:opacity-40 animate-pulse-slow pointer-events-none translate-x-1/2 md:translate-x-1/3">
          <Image src="/assets/rocket.png" alt="rocket" width={80} height={80} className="object-contain" />
        </div>
        <div className="absolute bottom-32 -left-6 md:-left-12 w-14 h-14 md:w-24 md:h-24 opacity-30 md:opacity-40 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
          <Image src="/assets/wagmi.png" alt="wagmi" width={96} height={96} className="object-contain" />
        </div>
        <div className="absolute bottom-10 right-0 md:right-0 w-16 h-16 md:w-28 md:h-28 opacity-25 md:opacity-35 animate-pulse-slow pointer-events-none translate-x-1/2 md:translate-x-1/3" style={{ animationDelay: '0.5s' }}>
          <Image src="/assets/tothemoon.png" alt="to the moon" width={112} height={112} className="object-contain" />
        </div>

        <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl pixel-text glow-blue text-blue-400 mb-4">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-6 md:p-8 hover:border-blue-400 transition-all">
              <h3 className="text-lg md:text-2xl pixel-text text-blue-400 mb-4 flex items-center gap-3">
                <TheaterIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                THE LEGEND BEGINS
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">
                In the chaotic realm of meme coins, two legendary forces collided: <span className="text-blue-400 font-bold">Dalang Pelo</span>, the puppet master of Indonesian internet culture, and <span className="text-blue-400 font-bold">Troll</span>, the embodiment of digital chaos.
              </p>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Together, they forged <span className="text-blue-400 font-bold glow-blue">DALTROLL</span> - not just a token, but a movement that brings together culture, comedy, and community on the Solana blockchain.
              </p>
            </div>

            <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-6 md:p-8 hover:border-blue-400 transition-all">
              <h3 className="text-lg md:text-2xl pixel-text text-blue-400 mb-4 flex items-center gap-3">
                <StarIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                OUR MISSION
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                To create the most entertaining and community-driven meme coin on Solana. We're here to bring laughter, chaos, and massive gains to everyone who joins the DALTROLL revolution!
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-2 border-blue-400/50 rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <RocketIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-sm md:text-lg pixel-text text-blue-400 mb-2">SOLANA POWERED</h4>
                  <p className="text-xs text-gray-300">Lightning-fast transactions with minimal fees. Built on the most efficient blockchain.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-2 border-purple-400/50 rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <CommunityIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="text-sm md:text-lg pixel-text text-purple-400 mb-2">COMMUNITY FIRST</h4>
                  <p className="text-xs text-gray-300">Built by the people, for the people. Every holder is part of the DALTROLL family.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-sm border-2 border-pink-400/50 rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <CircusIcon className="w-8 h-8 md:w-12 md:h-12 text-pink-400 flex-shrink-0" />
                <div>
                  <h4 className="text-sm md:text-lg pixel-text text-pink-400 mb-2">CHAOS & CULTURE</h4>
                  <p className="text-xs text-gray-300">Where Indonesian meme culture meets global crypto chaos. Expect the unexpected!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <DiamondIcon className="w-8 h-8 md:w-12 md:h-12 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-sm md:text-lg pixel-text text-green-400 mb-2">DIAMOND HANDS</h4>
                  <p className="text-xs text-gray-300">We're in this together. HODL strong and watch us moon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
            <div className="text-3xl md:text-4xl pixel-text text-blue-400 mb-2">100%</div>
            <p className="text-xs text-gray-400">COMMUNITY OWNED</p>
          </div>
          <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
            <div className="text-3xl md:text-4xl pixel-text text-blue-400 mb-2">0%</div>
            <p className="text-xs text-gray-400">TAX</p>
          </div>
          <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
            <div className="text-3xl md:text-4xl pixel-text text-blue-400 mb-2">LP</div>
            <p className="text-xs text-gray-400">BURNED</p>
          </div>
          <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
            <div className="text-3xl md:text-4xl pixel-text text-blue-400 mb-2">∞</div>
            <p className="text-xs text-gray-400">MEMES</p>
          </div>
        </div>

        {/* Pump.fun Highlight Section */}
        <div className="bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-green-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl md:text-3xl pixel-text text-green-400">
              NOW LIVE ON PUMP.FUN
            </h3>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs md:text-sm text-gray-300 mb-6 max-w-2xl mx-auto">
            DALTROLL is officially listed on Pump.fun, the leading Solana meme coin launchpad! 
            Join the revolution and be part of the most chaotic meme coin on Solana! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={TOKEN_CONFIG.pumpFun(TOKEN_CONFIG.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg pixel-text text-xs md:text-sm text-white shadow-2xl hover:shadow-green-500/50 transition-all border-2 border-green-400 hover:scale-105 inline-block text-center"
            >
              TRADE ON PUMP.FUN
            </a>
            <a 
              href={TOKEN_CONFIG.pumpFun(TOKEN_CONFIG.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent hover:bg-green-900/30 rounded-lg pixel-text text-xs md:text-sm text-green-400 border-2 border-green-400 hover:border-green-300 transition-all hover:scale-105 inline-block text-center"
            >
              VIEW CHART
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
