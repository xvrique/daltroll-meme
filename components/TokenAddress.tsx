'use client';

import { useState } from 'react';
import { CheckIcon } from './icons/Icons';
import TOKEN_CONFIG from '@/config/token';

export default function TokenAddress() {
  const [copied, setCopied] = useState(false);
  
  const tokenAddress = TOKEN_CONFIG.address;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shortenAddress = (address: string) => {
    if (address.length <= 16) return address;
    return `${address.slice(0, 8)}...${address.slice(-8)}`;
  };

  return (
    <section className="relative py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border-2 border-blue-400/50 rounded-3xl p-6 md:p-10 shadow-2xl">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl -z-10"></div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-xs pixel-text text-blue-400">SOLANA TOKEN</span>
            </div>
            <h2 className="text-2xl md:text-4xl pixel-text text-blue-400 glow-blue mb-2">
              CONTRACT ADDRESS
            </h2>
            <p className="text-xs md:text-sm text-gray-400">
              Official DALTROLL token on Solana blockchain
            </p>
          </div>

          {/* Token Address Display */}
          <div className="bg-[#0a1628]/80 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-4 md:p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Address */}
              <div className="flex-1 w-full">
                <p className="text-xs text-gray-500 mb-2 pixel-text">TOKEN ADDRESS</p>
                <div className="flex items-center gap-3">
                  <code className="text-sm md:text-base text-blue-400 font-mono break-all">
                    <span className="hidden md:inline">{tokenAddress}</span>
                    <span className="md:hidden">{shortenAddress(tokenAddress)}</span>
                  </code>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={copyToClipboard}
                className={`relative group px-6 py-3 rounded-xl pixel-text text-xs transition-all duration-300 hover:scale-105 ${
                  copied
                    ? 'bg-green-500/20 border-2 border-green-400 text-green-400'
                    : 'bg-blue-500/20 border-2 border-blue-400 text-blue-400 hover:bg-blue-500/30'
                }`}
              >
                <span className="flex items-center gap-2">
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      COPY
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* View on Solscan */}
            <a
              href={TOKEN_CONFIG.solscan(tokenAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 border-2 border-purple-400/50 hover:border-purple-400 rounded-xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs pixel-text text-purple-400">SOLSCAN</span>
            </a>

            {/* View on Solana Explorer */}
            <a
              href={TOKEN_CONFIG.explorer(tokenAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 border-2 border-blue-400/50 hover:border-blue-400 rounded-xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs pixel-text text-blue-400">EXPLORER</span>
            </a>

            {/* Trade on Pump.fun */}
            <a
              href={TOKEN_CONFIG.pumpFun(tokenAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 border-2 border-green-400/50 hover:border-green-400 rounded-xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs pixel-text text-green-400">PUMP.FUN</span>
            </a>
          </div>

          {/* Warning */}
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-400/30 rounded-xl">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-xs text-yellow-400 font-bold mb-1">⚠️ IMPORTANT</p>
                <p className="text-xs text-gray-400">
                  Always verify the contract address before trading. Beware of scam tokens with similar names. 
                  Only use official links from our verified social media channels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Network Info */}
          <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-6">
            <h3 className="text-sm pixel-text text-blue-400 mb-4">NETWORK INFO</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Blockchain</span>
                <span className="text-xs pixel-text text-blue-400">SOLANA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Token Standard</span>
                <span className="text-xs pixel-text text-blue-400">SPL</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Decimals</span>
                <span className="text-xs pixel-text text-blue-400">9</span>
              </div>
            </div>
          </div>

          {/* Security Info */}
          <div className="bg-[#1e3a5f]/30 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-6">
            <h3 className="text-sm pixel-text text-green-400 mb-4">SECURITY</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">Contract Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">Liquidity Locked</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">Ownership Renounced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
