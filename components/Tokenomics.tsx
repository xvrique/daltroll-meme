'use client';

import Image from 'next/image';
import { WaterDropIcon, GiftIcon, MegaphoneIcon, GearIcon, NoTaxIcon, DiamondIcon, FireIcon, CheckIcon, ShieldIcon, LockIcon, UsersIcon } from './icons/Icons';

export default function Tokenomics() {
  const distribution = [
    {
      label: "Liquidity Pool",
      percentage: 40,
      amount: "400M",
      color: "from-blue-500 to-blue-600",
      Icon: WaterDropIcon,
      description: "Locked forever for stable trading"
    },
    {
      label: "Community Rewards",
      percentage: 30,
      amount: "300M",
      color: "from-purple-500 to-purple-600",
      Icon: GiftIcon,
      description: "Airdrops, contests, and giveaways"
    },
    {
      label: "Marketing",
      percentage: 20,
      amount: "200M",
      color: "from-pink-500 to-pink-600",
      Icon: MegaphoneIcon,
      description: "Partnerships and promotions"
    },
    {
      label: "Development",
      percentage: 10,
      amount: "100M",
      color: "from-green-500 to-green-600",
      Icon: GearIcon,
      description: "Platform and ecosystem growth"
    }
  ];

  const features = [
    {
      title: "ZERO TAX",
      value: "0%",
      Icon: NoTaxIcon,
      description: "No buy or sell tax. Trade freely!"
    },
    {
      title: "TOTAL SUPPLY",
      value: "1B",
      Icon: DiamondIcon,
      description: "Fixed supply, no minting"
    },
    {
      title: "LP BURNED",
      value: "LOCKED",
      Icon: FireIcon,
      description: "Liquidity locked forever"
    },
    {
      title: "OWNERSHIP",
      value: "RENOUNCED",
      Icon: CheckIcon,
      description: "100% community owned"
    }
  ];

  return (
    <section id="tokenomics" className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Images - Positioned inside container to prevent clipping */}
        <div className="absolute top-10 -left-8 md:-left-16 w-16 h-16 md:w-28 md:h-28 opacity-30 md:opacity-40 animate-float pointer-events-none">
          <Image src="/assets/coin.png" alt="coin" width={112} height={112} className="object-contain" />
        </div>
        <div className="absolute top-1/2 -right-6 md:-right-12 w-14 h-14 md:w-24 md:h-24 opacity-25 md:opacity-35 animate-pulse-slow pointer-events-none">
          <Image src="/assets/rocket.png" alt="rocket" width={96} height={96} className="object-contain" />
        </div>
        <div className="absolute bottom-20 -left-6 md:-left-12 w-12 h-12 md:w-20 md:h-20 opacity-30 md:opacity-40 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
          <Image src="/assets/tothemoon.png" alt="to the moon" width={80} height={80} className="object-contain" />
        </div>
        <div className="absolute bottom-40 -right-8 md:-right-16 w-16 h-16 md:w-28 md:h-28 opacity-25 md:opacity-35 animate-pulse-slow pointer-events-none" style={{ animationDelay: '0.5s' }}>
          <Image src="/assets/wagmi.png" alt="wagmi" width={112} height={112} className="object-contain" />
        </div>

        <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl pixel-text glow-blue text-blue-400 mb-4">
            TOKENOMICS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Fair launch, community-driven, and built for the long term. No BS, just pure meme magic!
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-4 md:p-6 text-center hover:border-blue-400 hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-2 md:mb-3">
                <feature.Icon className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />
              </div>
              <h3 className="text-xs pixel-text text-gray-400 mb-1 md:mb-2">{feature.title}</h3>
              <div className="text-lg md:text-2xl pixel-text text-blue-400 mb-1 md:mb-2 break-words">
                {feature.value}
              </div>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Distribution Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Visual Chart */}
          <div className="relative">
            <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl pixel-text text-blue-400 mb-8 text-center">
                TOKEN DISTRIBUTION
              </h3>
              
              {/* Pie Chart Representation */}
              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <item.Icon className="w-6 h-6 text-blue-400" />
                        <span className="text-gray-300">{item.label}</span>
                      </div>
                      <span className="pixel-text text-blue-400">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Supply */}
              <div className="mt-8 pt-8 border-t-2 border-blue-500/30 text-center">
                <p className="text-xs text-gray-400 mb-2">TOTAL SUPPLY</p>
                <p className="text-2xl md:text-4xl pixel-text text-blue-400 glow-blue break-words px-2">
                  1,000,000,000
                </p>
                <p className="text-xs text-gray-500 mt-2">DALTROLL TOKENS</p>
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-4">
            {distribution.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color}/20 backdrop-blur-sm border-2 border-opacity-50 rounded-2xl p-6 hover:scale-105 transition-all`}
                style={{ borderColor: `${item.color.split(' ')[1]}` }}
              >
                <div className="flex items-start gap-4">
                  <item.Icon className="w-12 h-12 text-white" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg pixel-text text-white">{item.label}</h4>
                      <span className="text-2xl pixel-text text-blue-400">{item.percentage}%</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-400">
                      <span className="pixel-text text-blue-400">{item.amount}</span> DALTROLL
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-8">
          <h3 className="text-2xl pixel-text text-green-400 mb-6 text-center flex items-center justify-center gap-3">
            <ShieldIcon className="w-8 h-8" />
            SECURITY & TRANSPARENCY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <LockIcon className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="text-sm pixel-text text-blue-400 mb-2">CONTRACT VERIFIED</h4>
              <p className="text-xs text-gray-300">Fully audited and verified on Solscan</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <FireIcon className="w-12 h-12 text-orange-400" />
              </div>
              <h4 className="text-sm pixel-text text-blue-400 mb-2">LP BURNED</h4>
              <p className="text-xs text-gray-300">Liquidity permanently locked</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <UsersIcon className="w-12 h-12 text-blue-400" />
              </div>
              <h4 className="text-sm pixel-text text-blue-400 mb-2">COMMUNITY OWNED</h4>
              <p className="text-xs text-gray-300">No team tokens, 100% fair launch</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            * DALTROLL is a meme coin created for entertainment purposes. Always DYOR (Do Your Own Research) and invest responsibly. 
            Cryptocurrency investments carry risk. Never invest more than you can afford to lose.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
