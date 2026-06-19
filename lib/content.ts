/* =============================================================================
   NB Sprays — SITE CONTENT & IMAGE CONFIG
   -----------------------------------------------------------------------------
   This is the single source of truth for text + images on the site.

   TO ADD / SWAP IMAGES:
   1. Drop your image file into the matching folder under /public/images/:
        - hero        -> /public/images/hero/
        - gallery     -> /public/images/gallery/
        - before/after-> /public/images/before-after/
        - projects    -> /public/images/projects/
   2. Add (or edit) an entry in the relevant array below, pointing `src` at it,
      e.g. src: "/images/gallery/my-photo.jpg".
   The component will pick it up automatically — no other code changes needed.
   ========================================================================== */

export const business = {
  name: "NB Sprays",
  tagline: "Professional Vehicle Bodywork Specialists",
  region: "North West England",
  phoneDisplay: "07467 457091",
  phoneHref: "tel:07467457091",
  whatsapp: "https://wa.me/447467457091",
  whatsappMessage:
    "https://wa.me/447467457091?text=Hi%20NB%20Sprays%2C%20I%27d%20like%20a%20quote%20for%20some%20bodywork.",
  instagramHandle: "nbsprays",
  instagramUrl: "https://www.instagram.com/nbsprays/",
  instagramEmbed: "https://www.instagram.com/nbsprays/embed/",
  // Placeholder — update with the real business email when available.
  email: "info@nbsprays.co.uk",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#before-after" },
  { label: "Gallery", href: "#gallery" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
] as const;

/* ---------- HERO ---------- */
export const hero = {
  // Swap this for your strongest full-bleed automotive shot.
  image: "/images/hero/hero.png",
  imageAlt:
    "Freshly resprayed car bodywork with a flawless mirror finish in the NB Sprays workshop",
  headline: "Professional Vehicle Bodywork Specialists",
  subheadline: "Bringing damaged vehicles back to life across North West England.",
  primaryCta: { label: "Get a Quote", href: "#contact" },
  secondaryCta: { label: "View Our Work", href: "#gallery" },
};

/* ---------- ABOUT ---------- */
export const about = {
  eyebrow: "About NB Sprays",
  title: "Bodywork crafted with precision and pride",
  paragraphs: [
    "NB Sprays is a trusted vehicle bodywork and paint repair specialist serving North West England. From minor scratches to full accident damage, every vehicle is treated with the same uncompromising attention to detail.",
    "We combine years of hands-on experience with modern refinishing techniques to deliver a factory-quality finish — restoring not just the look of your vehicle, but its value and your confidence in it.",
    "Quality workmanship, honest advice and complete customer satisfaction sit at the heart of everything we do.",
  ],
  // Swap for a workshop / technician-at-work photo.
  image: "/images/projects/about.png",
  imageAlt: "NB Sprays technician carefully refinishing a vehicle panel",
};

/* ---------- SERVICES ---------- */
export type Service = { title: string; description: string; icon: string };

export const services: Service[] = [
  {
    title: "Accident Damage Repairs",
    description:
      "Complete collision repair, returning your vehicle to its pre-accident condition with structural and cosmetic precision.",
    icon: "shield",
  },
  {
    title: "Dent Removal",
    description:
      "Skilled dent and ding removal that restores smooth, seamless panels without unnecessary respraying.",
    icon: "panel",
  },
  {
    title: "Scratch Repairs",
    description:
      "Expert scratch removal and colour-matched touch-ups for an invisible, factory-fresh finish.",
    icon: "scratch",
  },
  {
    title: "Panel Repairs",
    description:
      "Repair or replacement of damaged panels, blended seamlessly into your vehicle's existing paintwork.",
    icon: "car",
  },
  {
    title: "Paint Correction",
    description:
      "Machine polishing and correction to remove swirls, oxidation and imperfections for deep, mirror-like gloss.",
    icon: "sparkle",
  },
  {
    title: "Vehicle Restoration",
    description:
      "Full and partial restorations that bring tired or damaged vehicles back to their very best.",
    icon: "restore",
  },
  {
    title: "Respraying",
    description:
      "Precision colour-matched respraying, from single panels to complete vehicle refinishing.",
    icon: "spray",
  },
  {
    title: "Insurance Work",
    description:
      "Hassle-free insurance repair work managed start to finish, with quality you can trust.",
    icon: "document",
  },
];

/* ---------- BEFORE & AFTER ---------- */
export type BeforeAfter = {
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export const beforeAfter: BeforeAfter[] = [
  {
    title: "Rear Quarter Panel Respray",
    before: "/images/before-after/project-1-before.png",
    after: "/images/before-after/project-1-after.png",
    beforeAlt: "Scratched and dented rear quarter panel before repair",
    afterAlt: "Flawless resprayed rear quarter panel after repair",
  },
  {
    title: "Front Bumper Accident Repair",
    before: "/images/before-after/project-2-before.png",
    after: "/images/before-after/project-2-after.png",
    beforeAlt: "Cracked front bumper with collision damage before repair",
    afterAlt: "Repaired and refinished front bumper after repair",
  },
  {
    title: "Full Bodywork Restoration",
    before: "/images/before-after/project-3-before.png",
    after: "/images/before-after/project-3-after.png",
    beforeAlt: "Faded, damaged bodywork before restoration",
    afterAlt: "Fully restored bodywork with showroom shine after restoration",
  },
];

/* ---------- GALLERY ---------- */
export type GalleryItem = { src: string; alt: string; tall?: boolean };

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/work-1.png", alt: "Glossy resprayed bonnet with mirror reflections", tall: true },
  { src: "/images/gallery/work-2.png", alt: "Resprayed rear quarter panel mirror finish" },
  { src: "/images/gallery/work-3.png", alt: "Polished alloy wheel and refinished panel" },
  { src: "/images/gallery/work-4.png", alt: "Accident-damage front end fully repaired", tall: true },
  { src: "/images/gallery/work-5.png", alt: "Fully restored vehicle in showroom condition" },
  { src: "/images/gallery/work-6.png", alt: "Deep wet-look gloss after paint correction" },
  { src: "/images/gallery/work-7.png", alt: "Premium silver bodywork under studio lighting", tall: true },
  { src: "/images/gallery/work-8.png", alt: "Refinished side panel and alloy detail" },
];

/* ---------- WHY CHOOSE US ---------- */
export type Reason = { title: string; description: string; icon: string };

export const reasons: Reason[] = [
  {
    title: "Professional Workmanship",
    description: "Meticulous repairs carried out to the highest professional standard, every time.",
    icon: "medal",
  },
  {
    title: "High-Quality Finishes",
    description: "Flawless, durable, colour-matched finishes that look factory fresh.",
    icon: "sparkle",
  },
  {
    title: "Fast Turnaround Times",
    description: "Efficient repairs that get you back on the road without unnecessary delays.",
    icon: "clock",
  },
  {
    title: "Competitive Pricing",
    description: "Honest, transparent quotes and fair pricing on every job, large or small.",
    icon: "tag",
  },
  {
    title: "Experienced Technician",
    description: "Years of hands-on expertise behind every panel, paint and polish.",
    icon: "tools",
  },
  {
    title: "Trusted Local Service",
    description: "A reliable, friendly bodywork specialist trusted across North West England.",
    icon: "pin",
  },
];

/* ---------- SEO KEYWORDS ---------- */
export const seoKeywords = [
  "vehicle body repairs North West England",
  "car body repairs North West",
  "vehicle paint repairs",
  "accident damage repair specialists",
  "car restoration North West",
  "vehicle respraying services",
  "dent removal",
  "scratch repairs",
  "paint correction",
  "NB Sprays",
];
