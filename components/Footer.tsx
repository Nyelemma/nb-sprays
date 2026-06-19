import { business, nav } from "@/lib/content";
import { Icon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/[0.04] font-display text-sm font-bold text-metal">
                NB
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Sprays
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver-400">
              Professional vehicle bodywork and paint repair specialists, bringing
              damaged vehicles back to life across {business.region}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NB Sprays on Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-silver-200 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={business.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message NB Sprays on WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-silver-200 transition-all hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:text-[#25D366]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-silver-500">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-silver-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-silver-500">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-silver-300 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 text-silver-500" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-silver-300 transition-colors hover:text-white"
                >
                  <Icon name="whatsapp" className="h-4 w-4 text-silver-500" />
                  Message on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-silver-300 transition-colors hover:text-white"
                >
                  <Icon name="instagram" className="h-4 w-4 text-silver-500" />
                  @{business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-silver-500">
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-silver-600">
            Vehicle bodywork &amp; paint repair specialists &middot; {business.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
