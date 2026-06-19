# NB Sprays — Website

A premium, dark-themed, mobile-first marketing site for **NB Sprays**, vehicle
bodywork and paint repair specialists in North West England.

Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Editing content

Almost all text and every image path lives in one file:

```
lib/content.ts
```

Change copy, services, stats, before/after pairs and gallery items there — the
components read from it automatically.

## Adding / swapping images

1. Drop your photo into the matching folder under `public/images/`:

   | Folder           | Used for                              |
   | ---------------- | ------------------------------------- |
   | `hero/`          | Full-screen hero background           |
   | `gallery/`       | Masonry "Featured Gallery" grid       |
   | `before-after/`  | Before / After comparison slider      |
   | `projects/`      | About section photo                   |

2. Point the matching `src` in `lib/content.ts` at your file, e.g.
   `src: "/images/gallery/my-car.jpg"`, and update its `alt` text (good for SEO).

The shipped images are tasteful placeholders — replace them with real NB Sprays
photos. JPG or WebP at ~1600px on the long edge works best.

## Instagram feed

The Instagram section embeds the live profile feed via
`https://www.instagram.com/nbsprays/embed/` (set in `lib/content.ts` as
`instagramEmbed`). It updates automatically with new posts/reels. To change the
account, update the `instagramHandle` / `instagramUrl` / `instagramEmbed` values.

## Contact details

Phone, WhatsApp and Instagram are all configured in `lib/content.ts`
(`business`). The contact form opens the visitor's email client (`mailto:`) — set
a real `email` there. To collect submissions server-side instead, swap the
`onSubmit` handler in `components/Contact.tsx` for a form service (Formspree,
Resend, etc.).

## SEO

- Metadata, Open Graph and Twitter tags: `app/layout.tsx`
- `AutoBodyShop` JSON-LD schema: `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts`
- Update `SITE_URL` in `app/layout.tsx`, `sitemap.ts` and `robots.ts` to the real
  domain before launch, and replace `public/og-image.png` with a branded share image.
