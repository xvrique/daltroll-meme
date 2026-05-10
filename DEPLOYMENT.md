# Deployment Guide - STONKS Landing Page

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel adalah platform terbaik untuk Next.js karena dibuat oleh tim yang sama.

#### Deploy via CLI:
```bash
npm install -g vercel
vercel
```

#### Deploy via Git:
1. Push code ke GitHub/GitLab/Bitbucket
2. Import project di [vercel.com](https://vercel.com)
3. Vercel akan auto-detect Next.js dan deploy

### 2. Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### 3. Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Deploy:
```bash
railway login
railway init
railway up
```

### 4. Docker Deployment

Build Docker image:
```bash
docker build -t stonks-landing .
docker run -p 3000:3000 stonks-landing
```

### 5. Static Export (untuk hosting statis)

Edit `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

Build:
```bash
npm run build
```

Output akan ada di folder `out/` yang bisa di-upload ke:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting

## Environment Variables

Sebelum deploy, set environment variables:

```bash
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/youraccount
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/yourchannel
NEXT_PUBLIC_CONTRACT_ADDRESS=your_ton_contract_address
```

## Performance Optimization

Project ini sudah include:
- ✅ Image optimization (Next.js Image)
- ✅ Font optimization (Google Fonts)
- ✅ CSS optimization (Tailwind CSS)
- ✅ Code splitting otomatis
- ✅ Static generation

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Monitoring

Recommended tools:
- Vercel Analytics (built-in)
- Google Analytics
- Sentry (error tracking)

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Troubleshooting

### Build fails:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port already in use:
```bash
# Change port
PORT=3001 npm run dev
```

## Support

For issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
