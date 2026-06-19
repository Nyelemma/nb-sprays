import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }`}
    >
      <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-6 bg-silver-500" />
        {eyebrow}
      </span>
      <h2 className="section-title text-balance text-white">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-silver-400 sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
