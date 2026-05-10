'use client';

import { TheaterIcon, StarIcon, RocketIcon, CommunityIcon, CircusIcon, DiamondIcon } from './icons/Icons';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
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
            <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-400 transition-all">
              <h3 className="text-2xl pixel-text text-blue-400 mb-4 flex items-center gap-3">
                <TheaterIcon className="w-8 h-8 text-blue-400" />
                THE LEGEND BEGINS
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                In the chaotic realm of meme coins, two legendary forces collided: <span className="text-blue-400 font-bold">Dalang Pelo</span>, the puppet master of Indonesian internet culture, and <span className="text-blue-400 font-bold">Troll</span>, the embodiment of digital chaos.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Together, they forged <span className="text-blue-400 font-bold glow-blue">DALTROLL</span> - not just a token, but a movement that brings together culture, comedy, and community on the Solana blockchain.
              </p>
            </div>

            <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-400 transition-all">
              <h3 className="text-2xl pixel-text text-blue-400 mb-4 flex items-center gap-3">
                <StarIcon className="w-8 h-8 text-blue-400" />
                OUR MISSION
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To create the most entertaining and community-driven meme coin on Solana. We're here to bring laughter, chaos, and massive gains to everyone who joins the DALTROLL revolution!
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-2 border-blue-400/50 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <RocketIcon className="w-12 h-12 text-blue-400" />
                <div>
                  <h4 className="text-lg pixel-text text-blue-400 mb-2">SOLANA POWERED</h4>
                  <p className="text-xs text-gray-300">Lightning-fast transactions with minimal fees. Built on the most efficient blockchain.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-2 border-purple-400/50 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <CommunityIcon className="w-12 h-12 text-purple-400" />
                <div>
                  <h4 className="text-lg pixel-text text-purple-400 mb-2">COMMUNITY FIRST</h4>
                  <p className="text-xs text-gray-300">Built by the people, for the people. Every holder is part of the DALTROLL family.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-sm border-2 border-pink-400/50 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <CircusIcon className="w-12 h-12 text-pink-400" />
                <div>
                  <h4 className="text-lg pixel-text text-pink-400 mb-2">CHAOS & CULTURE</h4>
                  <p className="text-xs text-gray-300">Where Indonesian meme culture meets global crypto chaos. Expect the unexpected!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <DiamondIcon className="w-12 h-12 text-green-400" />
                <div>
                  <h4 className="text-lg pixel-text text-green-400 mb-2">DIAMOND HANDS</h4>
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
        <div className="bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-green-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-2xl md:text-3xl pixel-text text-green-400">
              NOW LIVE ON PUMP.FUN
            </h3>
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-300 mb-6 max-w-2xl mx-auto">
            DALTROLL is officially listed on Pump.fun, the leading Solana meme coin launchpad! 
            Join the revolution and be part of the most chaotic meme coin on Solana! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg pixel-text text-sm text-white shadow-2xl hover:shadow-green-500/50 transition-all border-2 border-green-400 hover:scale-105">
              TRADE ON PUMP.FUN
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-green-900/30 rounded-lg pixel-text text-sm text-green-400 border-2 border-green-400 hover:border-green-300 transition-all hover:scale-105">
              VIEW CHART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
