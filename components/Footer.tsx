'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1628] border-t-2 border-[#1e3a5f] py-12">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Image 
                  src="/assets/logo-main.png" 
                  alt="DALTROLL Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl pixel-text glow-blue text-blue-400">
                DALTROLL
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              The first Dalang Pelo x Troll meme collab on Solana, bringing chaos, culture, and community to the moon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm pixel-text text-blue-400 mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#faq" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm pixel-text text-blue-400 mb-4">COMMUNITY</h3>
            <p className="text-xs text-gray-400">
              Join our growing community and be part of the DALTROLL revolution!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1e3a5f]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2026 DALTROLL. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#privacy" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
