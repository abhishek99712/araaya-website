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
            src="/images/hero-home-v2.jpg"
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
        <section className="bg-white py-4 md:py-6 overflow-hidden">

          {/* Auto-scrolling single row */}
          <div className="relative">
            <div className="flex gap-4 product-marquee">
              {[
                { label: "PERFUME SPRAYS", sub: "EDP · EDT · Body Mist", num: "01", img: "/images/showcase-sprays.png" },
                { label: "HOME CARE", sub: "Incense & Candles", num: "02", img: "/images/showcase-ceramics.png" },
                { label: "LIFESTYLE", sub: "Car & Room Fragrance", num: "03", img: "/images/showcase-lifestyle.png" },
                { label: "CUSTOM RANGE", sub: "Concept to Market", num: "04", img: "/images/showcase-product.png" },
                /* duplicate for seamless loop */
                { label: "PERFUME SPRAYS", sub: "EDP · EDT · Body Mist", num: "01", img: "/images/showcase-sprays.png" },
                { label: "HOME CARE", sub: "Incense & Candles", num: "02", img: "/images/showcase-ceramics.png" },
                { label: "LIFESTYLE", sub: "Car & Room Fragrance", num: "03", img: "/images/showcase-lifestyle.png" },
                { label: "CUSTOM RANGE", sub: "Concept to Market", num: "04", img: "/images/showcase-product.png" },
              ].map((item, i) => (
                <div key={i} className="group flex-shrink-0" style={{ width: "clamp(260px, 26vw, 380px)" }}>
                  <div className="relative w-full overflow-hidden bg-[#f5f4f0]" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
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
          bg="white"
          borderTop={false}
        />

        {/* ─── BUILD YOUR BRAND + CONTACT ───────────────────────── */}
        <BuildYourBrand />
      </main>
      <Footer />
    </>
  );
}
