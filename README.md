# Kevin Shroads — Coaching & Transformation

Premium personal-brand website for Kevin Shroads: 1:1 coaching and mindfulness-based support focused on clarity, presence, alignment and intentional growth.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next/font` (Cormorant Garamond + Manrope)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env.local` and fill in values as Kevin provides them:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BOOKING_URL` (optional scheduling link)
- `NEXT_PUBLIC_CONTACT_ENDPOINT` (optional external form endpoint)
- `CONTACT_PROVIDER_URL` / `CONTACT_API_KEY` (server-side delivery)

Replaceable content lives in `src/data/site.ts`.

## Portrait

The site uses a clearly marked portrait placeholder until a verified professional photo of Kevin Shroads is provided. Set `images.portrait.hasVerifiedPhoto` to `true` and point `images.portrait.src` at the approved asset.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
