import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface SectionImageTextProps {
  id?: string;
  label: string;
  title: string;           // use \n for line breaks
  body: string[];
  imageSrc?: string;
  imageAlt?: string;
  visualSlot?: React.ReactNode; // SVG/custom component — overrides imageSrc
  imagePosition?: "left" | "right"; // desktop position; text always comes first on mobile
  bg?: "white" | "cream";
  borderTop?: boolean;
  list?: string[];
  listLabel?: string;
  link?: { href: string; label: string };
  py?: string;
  gap?: string;
}

export default function SectionImageText({
  id,
  label,
  title,
  body,
  imageSrc,
  imageAlt,
  visualSlot,
  imagePosition = "left",
  bg = "white",
  borderTop = false,
  list,
  listLabel = "Product Range",
  link,
  py = "py-12 md:py-14 lg:py-20",
  gap = "gap-8 md:gap-28",
}: SectionImageTextProps) {
  const bgClass = bg === "cream" ? "bg-[#ffffff]" : "bg-white";
  const borderClass = borderTop ? "border-t border-[#e0ddd8]" : "";
  const imgLeft = imagePosition === "left";

  const visual = visualSlot ?? (
    imageSrc ? (
      <Image
        src={imageSrc}
        alt={imageAlt ?? ""}
        width={600}
        height={600}
        className="w-full h-auto max-h-[520px] object-contain object-center"
      />
    ) : null
  );

  return (
    <section id={id} className={`${py} ${bgClass} ${borderClass}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className={`grid md:grid-cols-2 ${gap} items-center`}>

          {/* ── TEXT — first in DOM so it appears above image on mobile ── */}
          <FadeIn
            direction={imgLeft ? "right" : "left"}
            delay={imgLeft ? 0.15 : 0}
            className={imgLeft ? "order-1 md:order-2" : ""}
          >
            <p className="section-label font-bold mb-1">{label}</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.2] md:leading-[1.05] mb-5 md:mb-8 whitespace-pre-line">
              {title}
            </h2>
            {body.map((para, i) => (
              <p
                key={i}
                className={`text-[16px] text-black leading-[1.5]${
                  i < body.length - 1 ? " mb-4" : ""
                }`}
              >
                {para}
              </p>
            ))}
            {list && (
              <div className="border-t border-[#e0ddd8] pt-7 mt-8">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-black mb-4">
                  {listLabel}
                </p>
                <ul className="space-y-2.5">
                  {list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-[#0a0a0a] flex-shrink-0" />
                      <span className="text-[16px] text-black leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {link && (
              <Link
                href={link.href}
                className="mt-10 inline-flex items-center gap-3 border border-[#0a0a0a] text-[10px] font-semibold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300"
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </FadeIn>

          {/* ── VISUAL (image or illustration slot) ── */}
          <FadeIn
            direction={imgLeft ? "left" : "right"}
            delay={imgLeft ? 0 : 0.15}
            className={imgLeft ? "order-2 md:order-1" : ""}
          >
            {visual}
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
