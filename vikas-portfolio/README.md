# Vikas Banotra — Premium Portfolio

A dark, futuristic, glassmorphic portfolio built with Next.js 15, React 19,
TypeScript, Tailwind CSS, GSAP, Framer Motion, Three.js / React Three Fiber,
and Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, loader, cursor, navbar, footer
  page.tsx           Assembles all sections
  globals.css        Design tokens, glass/glow utilities, accessibility rules
components/
  Loader.tsx         Animated loading screen
  CustomCursor.tsx   Magnetic glowing custom cursor (desktop only)
  Navbar.tsx         Glassmorphic sticky nav with active-section indicator
  Hero.tsx           Hero section with your photo, typewriter, parallax
  About.tsx          About + animated stat counters
  Expertise.tsx       8 expertise cards with 3D tilt + glow
  Projects.tsx       Project showcase cards
  Contact.tsx        Contact form (wire up to your own backend/email API)
  Footer.tsx         Social links + copyright
  ThreeBackground.tsx  R3F particles + floating glow spheres
  MagneticButton.tsx  Reusable magnetic CTA button
  TiltCard.tsx        Reusable 3D tilt card wrapper
  SmoothScroll.tsx    Lenis smooth-scroll provider
data/
  expertise.ts        Edit your 8 expertise cards here
  projects.ts          Edit your project list, images, and links here
hooks/
  useMousePosition.ts
lib/
  utils.ts             cn() class-merging helper
public/images/hero.jpg Your hero photo
```

## Things to customize

- **Social links** — update the arrays in `components/Hero.tsx` and
  `components/Footer.tsx` (GitHub, Instagram, Telegram, Email).
- **Projects** — edit `data/projects.ts`. Swap in your own screenshots,
  GitHub repo links, and live demo URLs.
- **Expertise cards** — edit `data/expertise.ts`.
- **Contact form** — `components/Contact.tsx` currently simulates a submit.
  Wire the `handleSubmit` function to your own API route, Formspree,
  Resend, or EmailJS integration.
- **Hero photo** — replace `public/images/hero.jpg` with any image (same
  filename, or update the `src` in `Hero.tsx`).
- **Colors** — palette lives in `tailwind.config.ts` (`primary`,
  `secondary`, `base`, `accentGlow`) and mirrored as CSS vars in
  `app/globals.css`.

## Notes

- The custom cursor auto-disables on touch devices.
- Reduced-motion preference is respected globally (`prefers-reduced-motion`).
- The Three.js background is tuned for performance (capped particle count,
  DPR clamp, no heavy postprocessing) — adjust `count` in
  `ThreeBackground.tsx` if you want more/fewer particles.
- Remote images (Unsplash placeholders in `data/projects.ts`) are allowed
  via `next.config.mjs` `images.remotePatterns`. Add any new external image
  domains there.
