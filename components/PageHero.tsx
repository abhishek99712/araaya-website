import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] md:h-screen min-h-[480px] bg-[#0a0a0a] overflow-hidden flex flex-col justify-end">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          className="object-cover grayscale"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 z-10" />
      <div className="relative z-20 pb-10 md:pb-14 text-center">
        <h1
          className="font-display font-bold text-white leading-none tracking-tight px-4 md:px-6"
          style={{ fontSize: "clamp(3.5rem, 16.5vw, 15rem)" }}
        >
          {title}
        </h1>
        <p className="text-white text-[16px] max-w-[90%] mx-auto leading-[1.6] mt-3 px-4 md:px-6">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
