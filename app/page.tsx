import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuildYourBrand from "@/components/BuildYourBrand";
import SectionImageText from "@/components/SectionImageText";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative h-[70vh] md:h-screen min-h-[480px] bg-[#1a1a1a] overflow-hidden">
          {/* Background image */}
          <Image
            src="/images/hero-home.jpg"
            alt="Araaya manufacturing"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />

          {/* Bottom CTA buttons */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex">
            {[
              { href: "/activities", label: "ACTIVITIES" },
              { href: "/products", label: "PRODUCTS" },
              { href: "/story", label: "STORY" },
            ].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 bg-black hover:bg-white hover:text-black text-white flex items-center justify-center py-5 md:py-6 transition-colors duration-300 ${
                  i < 2 ? "border-r border-white/20" : ""
                }`}
              >
                <span className="font-display text-[11px] md:text-[12px] font-bold tracking-[0.25em]">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── PERSONAL CARE INTRO ───────────────────────────────── */}
        <SectionImageText
          label="PRODUCTION HOUSE"
          title={"PERSONAL\u00a0 CARE,\nHOME CARE &\nLIFESTYLE"}
          body={[
            "We manufacture a curated range of personal care, home care, and lifestyle products tailored for today's evolving consumer. Each product is developed with a strong focus on formulation, usability, and presentation.",
            "Our approach ensures that every product is aligned with modern market expectations. From everyday essentials to experience-driven products, everything we create is designed to be ready for the market.",
          ]}
          imageSrc="/images/hero-perfume.png"
          imageAlt="Personal care products illustration"
          imagePosition="left"
          borderTop={false}
        />

        {/* ─── PRODUCT SHOWCASE ──────────────────────────────────── */}
        <section className="overflow-hidden border-t border-[#e0ddd8]">
          <div className="flex">
            {[
              { label: "PERFUME SPRAYS", sub: "EDP / EDT / Body Mist", num: "01" },
              { label: "PERSONAL CARE", sub: "Roll-On & Attars", num: "02" },
              { label: "HOME CARE", sub: "Incense & Candles", num: "03" },
              { label: "LIFESTYLE", sub: "Car & Room Fragrance", num: "04" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex-1 relative overflow-hidden group bg-[#0a0a0a] ${
                  i < 3 ? "border-r border-white/10" : ""
                }`}
              >
                <div className="h-64 md:h-80 flex flex-col justify-end p-5 md:p-7">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <svg viewBox="0 0 80 160" className="w-12 h-24 md:w-16 md:h-32">
                      <rect x="20" y="15" width="40" height="135" rx="8" stroke="white" strokeWidth="1.5" fill="none" />
                      <rect x="28" y="5" width="24" height="14" rx="2" stroke="white" strokeWidth="1.2" fill="none" />
                      <rect x="32" y="-2" width="16" height="9" rx="3" stroke="white" strokeWidth="1.2" fill="none" />
                      <line x1="22" y1="68" x2="58" y2="68" stroke="white" strokeWidth="0.6" opacity="0.5" />
                      <rect x="26" y="30" width="28" height="50" rx="1" stroke="white" strokeWidth="0.6" opacity="0.3" fill="none" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-white/25 mb-3 block">
                    {item.num}
                  </span>
                  <p className="text-white text-[10px] md:text-[11px] font-semibold tracking-[0.14em] mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-white/40 text-[10px] tracking-wide">
                    {item.sub}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-white/30 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── MANUFACTURING STARTUP ─────────────────────────────── */}
        <SectionImageText
          label="THE NEW-AGE"
          title={"MANUFACTURING\nSTARTUP"}
          body={[
            "Founded in 2025, Araaya International Private Limited was built with the vision of modernizing product manufacturing. We combine structured processes with a strong understanding of branding and product experience.",
            "This allows us to support businesses in building products that are both reliable and relevant. We are not just manufacturers — we contribute to shaping products that represent your brand in the market.",
          ]}
          imageSrc="/images/hero-manufacturing.png"
          imageAlt="Manufacturing facility illustration"
          imagePosition="right"
          link={{ href: "/story", label: "OUR STORY" }}
        />

        {/* ─── OUR BASE ──────────────────────────────────────────── */}
        <SectionImageText
          label="BUILT TO DELIVER"
          title="OUR BASE"
          body={[
            "Our manufacturing unit is designed to support the complete product lifecycle, from formulation to final packaging. With a semi-automated setup and dedicated development infrastructure, we maintain consistency and efficiency at every stage.",
            "The facility includes product development and testing labs, manufacturing and mixing lines, packaging systems, and inventory storage. This integrated setup ensures quality control, operational clarity, and scalable production.",
          ]}
          imageSrc="/images/hero-building.png"
          imageAlt="Our base illustration"
          imagePosition="left"
          bg="cream"
          borderTop={false}
        />

        {/* ─── BUILD YOUR BRAND + CONTACT ───────────────────────── */}
        <BuildYourBrand />
      </main>
      <Footer />
    </>
  );
}
