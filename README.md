
# Memelab.fun — Premium Landing (React + Vite + Tailwind)

## Quick Start
```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & Deploy
```bash
npm run build
# Deploy the 'dist' folder to Netlify/Vercel/Cloudflare Pages
```

## Replace Assets
- Put your logo at: `src/assets/logo.svg` (kept small automatically via CSS)
- Put your hero visual at: `src/assets/hero.svg` (or .png)
- Sizes are **already constrained** so images won't overflow:
  - Logo: 32px (w-8 h-8) with `object-contain`
  - Hero: 260px mobile, 360px tablet, 440px desktop

## Notes
- X logo is inline SVG (no extra file needed).
- Premium look: gradient background, glass card, soft glow, responsive layout.
