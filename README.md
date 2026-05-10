# DALTROLL Landing Page

Landing page profesional untuk DALTROLL - The first Dalang Pelo x Troll meme collab on Solana.

## Features

- ⚡ Next.js 15 dengan App Router
- 🎨 Tailwind CSS untuk styling
- 🔤 Google Fonts (Press Start 2P) untuk pixel-style typography
- 🎭 Animasi smooth dan efek visual menarik
- 📱 Fully responsive design
- 🌙 Dark theme dengan gradient background
- ✨ Glow effects dan animasi floating

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
stonks-landing/
├── app/
│   ├── layout.tsx       # Root layout dengan font configuration
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles dan custom utilities
├── components/
│   ├── Navbar.tsx       # Navigation bar component
│   └── Hero.tsx         # Hero section component
└── public/              # Static assets
```

## Customization

### Colors
Edit warna di `tailwind.config.ts` dan `app/globals.css`

### Content
Edit konten di:
- `components/Hero.tsx` - Hero section text dan features
- `components/Navbar.tsx` - Navigation links
- `app/layout.tsx` - Metadata (title, description)

### Fonts
Font pixel-style menggunakan Press Start 2P dari Google Fonts. Bisa diganti di `app/layout.tsx`

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Google Fonts

## License

MIT
