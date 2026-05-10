'use client';

import Image from 'next/image';
import { TheaterIcon, FireIcon, StarIcon, RocketIcon, CheckIcon, BoltIcon, ClockIcon } from './icons/Icons';

export default function Roadmap() {
  const phases = [
    {
      phase: "PHASE 1",
      title: "THE AWAKENING",
      status: "completed",
      Icon: TheaterIcon,
      items: [
        "Launch DALTROLL token on Solana",
        "Build initial community",
        "Create social media presence",
        "Launch website & branding",
        "First meme contest"
      ]
    },
    {
      phase: "PHASE 2",
      title: "THE CHAOS BEGINS",
      status: "current",
      Icon: FireIcon,
      items: [
        "CoinGecko & CoinMarketCap listing",
        "Partnership with Indonesian influencers",
        "Dalang Pelo collaboration content",
        "Community events & giveaways",
        "Expand to 10,000+ holders"
      ]
    },
    {
      phase: "PHASE 3",
      title: "CULTURAL DOMINATION",
      status: "upcoming",
      Icon: StarIcon,
      items: [
        "Major CEX listings",
        "DALTROLL NFT collection launch",
        "Merchandise store opening",
        "International meme partnerships",
        "Reach 50,000+ holders"
      ]
    },
    {
      phase: "PHASE 4",
      title: "TO THE MOON",
      status: "upcoming",
      Icon: RocketIcon,
      items: [
        "DALTROLL DAO governance",
        "Metaverse integration",
        "Gaming platform launch",
        "Global marketing campaign",
        "100,000+ holders milestone"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-600/20';
      case 'current':
        return 'border-blue-400 bg-blue-600/20 animate-pulse-slow';
      case 'upcoming':
        return 'border-purple-400 bg-purple-600/20';
      default:
        return 'border-gray-400 bg-gray-600/20';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="text-xs pixel-text text-green-400 flex items-center gap-1">
            <CheckIcon className="w-4 h-4" /> COMPLETED
          </span>
        );
      case 'current':
        return (
          <span className="text-xs pixel-text text-blue-400 flex items-center gap-1">
            <BoltIcon className="w-4 h-4" /> IN PROGRESS
          </span>
        );
      case 'upcoming':
        return (
          <span className="text-xs pixel-text text-purple-400 flex items-center gap-1">
            <ClockIcon className="w-4 h-4" /> UPCOMING
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Images - Positioned inside container to prevent clipping */}
        <div className="absolute top-10 -right-8 md:-right-16 w-14 h-14 md:w-24 md:h-24 opacity-30 md:opacity-40 animate-pulse-slow pointer-events-none">
          <Image src="/assets/pumpit.png" alt="pump it" width={96} height={96} className="object-contain" />
        </div>
        <div className="absolute top-1/3 -left-6 md:-left-12 w-16 h-16 md:w-28 md:h-28 opacity-25 md:opacity-35 animate-float pointer-events-none">
          <Image src="/assets/lol.png" alt="lol" width={112} height={112} className="object-contain" />
        </div>
        <div className="absolute bottom-32 -right-6 md:-right-12 w-12 h-12 md:w-20 md:h-20 opacity-30 md:opacity-40 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}>
          <Image src="/assets/fungus.png" alt="fungus" width={80} height={80} className="object-contain" />
        </div>
        <div className="absolute bottom-10 -left-8 md:-left-16 w-14 h-14 md:w-24 md:h-24 opacity-25 md:opacity-35 animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }}>
          <Image src="/assets/pmup.png" alt="pmup" width={96} height={96} className="object-contain" />
        </div>

        <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl pixel-text glow-blue text-blue-400 mb-4">
            ROADMAP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Our journey to the moon is carefully planned, but expect chaos along the way!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-400 border-4 border-[#0a1628] z-10"></div>

                {/* Content Card */}
                <div
                  className={`bg-[#1e3a5f]/30 backdrop-blur-sm border-2 ${getStatusColor(
                    phase.status
                  )} rounded-2xl p-6 md:p-8 hover:scale-105 transition-all ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-4">
                    <div className="flex items-center gap-3">
                      <phase.Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">{phase.phase}</p>
                        <h3 className="text-lg md:text-2xl pixel-text text-blue-400">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <div className="ml-11 md:ml-0">
                      {getStatusBadge(phase.status)}
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border-2 border-blue-400/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl pixel-text text-blue-400 mb-4">
              JOIN THE JOURNEY!
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              This is just the beginning. The DALTROLL community will shape our future together!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg pixel-text text-sm text-white shadow-2xl hover:shadow-blue-500/50 transition-all border-2 border-blue-400 hover:scale-105">
              JOIN COMMUNITY
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
