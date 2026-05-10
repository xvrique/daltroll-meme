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
            <p className="text-xs text-gray-400 mb-4">
              Join our growing community and be part of the DALTROLL revolution!
            </p>
            <div className="flex items-center gap-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@DalangPelo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 border border-red-400/50 hover:border-red-400 transition-all hover:scale-110"
                title="YouTube"
              >
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dalang.pelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 hover:bg-pink-500/40 border border-pink-400/50 hover:border-pink-400 transition-all hover:scale-110"
                title="Instagram"
              >
                <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/DALTROLL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/50 hover:border-blue-400 transition-all hover:scale-110"
                title="Telegram"
              >
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.97-.924c-.644-.203-.658-.644.135-.954l11.593-4.47c.537-.196 1.006.128.832.941z" />
                </svg>
              </a>
            </div>
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
