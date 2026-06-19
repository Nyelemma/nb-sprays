import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = icons[name] ?? icons.car;
  return <Cmp {...props} />;
}

export const icons: Record<string, (p: IconProps) => JSX.Element> = {
  shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  panel: (p) => (
    <svg {...base} {...p}>
      <path d="M3 12c3-1 6-1.5 9-1.5s6 .5 9 1.5" />
      <path d="M4 12V8.5C4 7 5 6 6.5 6h11C19 6 20 7 20 8.5V12" />
      <path d="M4 12v4M20 12v4" />
      <circle cx="8" cy="16.5" r="1.2" />
      <circle cx="16" cy="16.5" r="1.2" />
    </svg>
  ),
  scratch: (p) => (
    <svg {...base} {...p}>
      <path d="M4 18L18 4" />
      <path d="M7 16l3-1-1 3-3 1z" />
      <path d="M14 9l4 4" />
    </svg>
  ),
  car: (p) => (
    <svg {...base} {...p}>
      <path d="M5 11l1.5-4A2 2 0 018.4 6h7.2a2 2 0 011.9 1.3L19 11" />
      <path d="M3 11h18v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-5z" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
    </svg>
  ),
  sparkle: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </svg>
  ),
  restore: (p) => (
    <svg {...base} {...p}>
      <path d="M4 12a8 8 0 018-8 8 8 0 016.9 4" />
      <path d="M20 12a8 8 0 01-8 8 8 8 0 01-6.9-4" />
      <path d="M19 4v4h-4M5 20v-4h4" />
    </svg>
  ),
  spray: (p) => (
    <svg {...base} {...p}>
      <path d="M9 8h5a2 2 0 012 2v9a1 1 0 01-1 1h-5a1 1 0 01-1-1v-9a2 2 0 011-2z" />
      <path d="M9 8V5a1 1 0 011-1h3" />
      <path d="M16 6h2M16 9h3M19 5v6" />
    </svg>
  ),
  document: (p) => (
    <svg {...base} {...p}>
      <path d="M7 3h7l4 4v14a0 0 0 010 0H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15h6M9 9h2" />
    </svg>
  ),
  medal: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="9" r="5" />
      <path d="M12 7l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2z" />
      <path d="M9 13.5L7 21l5-2.5L17 21l-2-7.5" />
    </svg>
  ),
  clock: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  tag: (p) => (
    <svg {...base} {...p}>
      <path d="M3 12l8-8h7a1 1 0 011 1v7l-8 8a1.5 1.5 0 01-2 0l-6-6a1.5 1.5 0 010-2z" />
      <circle cx="16" cy="8" r="1.3" />
    </svg>
  ),
  tools: (p) => (
    <svg {...base} {...p}>
      <path d="M14.5 6.5a3.5 3.5 0 00-4.6 4.3L4 16.7 7.3 20l5.9-5.9a3.5 3.5 0 004.3-4.6l-2.3 2.3-2-2 2.3-2.3z" />
    </svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}>
      <path d="M5 4h3l1.5 4-2 1.2a12 12 0 005.3 5.3L19 12.5 23 14v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 010-2z" transform="translate(-1 0)" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.6 14.3c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
      <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18.3a8.3 8.3 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 1112 20.3z" />
    </svg>
  ),
  instagram: (p) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  arrowRight: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg {...base} {...p}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  chevronRight: (p) => (
    <svg {...base} {...p}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  drag: (p) => (
    <svg {...base} {...p}>
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
    </svg>
  ),
};
