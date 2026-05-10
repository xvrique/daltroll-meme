'use client';

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
      <div className="max-w-7xl mx-auto">
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
                  )} rounded-2xl p-8 hover:scale-105 transition-all ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <phase.Icon className="w-10 h-10 text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-400">{phase.phase}</p>
                        <h3 className="text-xl md:text-2xl pixel-text text-blue-400">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    {getStatusBadge(phase.status)}
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
    </section>
  );
}
