import { business } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="relative scroll-mt-20 border-t border-white/5 bg-ink-900 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Latest Work"
          title="Follow us on Instagram"
          description={`Fresh photos and reels from recent jobs on @${business.instagramHandle}. The live feed below updates automatically — on some devices Instagram may ask you to log in, you can always view the full profile in the app.`}
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 shadow-glass-lg">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-silver-sheen text-ink-900">
                <Icon name="instagram" className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">@{business.instagramHandle}</p>
                <p className="text-xs text-silver-500">Live Instagram feed</p>
              </div>
            </div>
            <iframe
              title={`Instagram feed for @${business.instagramHandle}`}
              src={business.instagramEmbed}
              loading="lazy"
              className="h-[560px] w-full bg-white"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal className="mt-8 text-center">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="instagram" className="h-5 w-5" strokeWidth={1.8} />
              Follow Us on Instagram
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
