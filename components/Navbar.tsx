'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['about', 'roadmap', 'tokenomics'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'ABOUT US' },
    { href: '#roadmap', label: 'ROADMAP' },
    { href: '#tokenomics', label: 'TOKENOMICS' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className={`relative backdrop-blur-xl border-2 rounded-2xl md:rounded-3xl px-4 md:px-8 py-3 md:py-4 shadow-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a1628]/98 border-blue-500/40 shadow-blue-500/20' 
            : 'bg-[#0a1628]/85 border-[#1e3a5f]/60'
        }`}>
          {/* Glow effect on scroll */}
          {isScrolled && (
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl -z-10"></div>
          )}
          
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors"></div>
                
                {/* Logo image */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-1 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/assets/logo-main.png" 
                    alt="DALTROLL Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              <span className="text-lg md:text-2xl pixel-text glow-blue text-blue-400 group-hover:text-blue-300 transition-colors">
                DALTROLL
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-xs pixel-text transition-all duration-300 rounded-lg ${
                      isActive
                        ? 'text-blue-400'
                        : 'text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/30 animate-pulse-slow"></span>
                    )}
                    
                    {/* Hover effect */}
                    <span className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 rounded-lg transition-colors"></span>
                    
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              {/* Mobile menu button - placeholder for future */}
              <button className="lg:hidden w-10 h-10 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              {/* Buy Now Button */}
              <button className="relative group px-4 md:px-8 py-2 md:py-3 overflow-hidden rounded-lg md:rounded-xl pixel-text text-xs md:text-sm text-white transition-all duration-300 hover:scale-105">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 transition-all duration-300 group-hover:from-green-600 group-hover:via-emerald-700 group-hover:to-green-700"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                </div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg md:rounded-xl border-2 border-green-400 group-hover:border-green-300 transition-colors"></div>
                
                {/* Button text */}
                <span className="relative flex items-center gap-2">
                  BUY ON PUMP.FUN
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg md:rounded-xl shadow-lg group-hover:shadow-green-500/50 transition-shadow duration-300 -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
