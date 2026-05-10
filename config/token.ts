// DALTROLL Token Configuration
// Update this file with your actual Solana token address after deployment

export const TOKEN_CONFIG = {
  // Replace with your actual Solana token address
  address: "YOUR_SOLANA_TOKEN_ADDRESS_HERE",
  
  // Token details
  name: "DALTROLL",
  symbol: "DALTROLL",
  decimals: 9,
  
  // Network
  network: "Solana",
  standard: "SPL",
  
  // Links
  solscan: (address: string) => `https://solscan.io/token/${address}`,
  explorer: (address: string) => `https://explorer.solana.com/address/${address}`,
  pumpFun: (address: string) => `https://pump.fun/coin/${address}`,
  
  // Social links
  twitter: "https://twitter.com/daltroll",
  telegram: "https://t.me/DALTROLL",
  
  // Contract verification
  verified: true,
  liquidityLocked: true,
  ownershipRenounced: true,
};

export default TOKEN_CONFIG;
