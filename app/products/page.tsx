import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuildYourBrand from "@/components/BuildYourBrand";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import SectionImageText from "@/components/SectionImageText";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          imageSrc="/images/hero-products.jpg"
          imageAlt="Products"
          title="PRODUCTS"
          subtitle="Explore our range of personal care, home care, and lifestyle products, developed to meet modern consumer expectations. Each product is designed with a focus on performance, usability, and presentation. Our portfolio is built to support brands with ready-to-market and scalable solutions."
        />

        {/* ─── PERSONAL CARE ────────────────────────────────────── */}
        <SectionImageText
          id="personal-care"
          label="FRAGRANCE & DAILY USE PRODUCTS"
          title="PERSONAL CARE"
          body={[
            "We manufacture a range of personal care products designed for everyday use and modern consumer preferences. Each product is developed with attention to formulation, skin compatibility, and overall experience.",
            "Our focus is on creating products that balance performance with presentation. From fine sprays to oil-based formats, every product is structured to be consistent, scalable, and ready for the market.",
          ]}
          imageSrc="/images/product-personal-care.png"
          imageAlt="Personal care products"
          imagePosition="left"
          list={[
            "Perfume Sprays (EDP, EDT, Body Mists, Hair Mists)",
            "Oil-Based Perfume Roll-On",
            "Attars",
            "Other Custom Personal Care Products",
          ]}
          py="py-12 lg:py-16"
          gap="gap-8 md:gap-24"
        />

        {/* ─── HOME CARE & LIFESTYLE ────────────────────────────── */}
        <SectionImageText
          id="home-care"
          label="AMBIENCE & ENVIRONMENTAL PRODUCTS"
          title={"HOME CARE &\nLIFESTYLE"}
          body={[
            "We develop home care and lifestyle products that enhance everyday spaces through thoughtful design and functionality. Each product is created to deliver consistent performance while aligning with modern usage and aesthetics.",
            "Our range focuses on products that are easy to use, effective, and adaptable to different environments. These products are designed to elevate both personal and shared spaces.",
          ]}
          imageSrc="/images/product-home-care.png"
          imageAlt="Home care and lifestyle products"
          imagePosition="right"
          bg="white"
          list={[
            "Incense",
            "Candles",
            "Home Fragrance Solutions",
            "Car Fragrance Solutions",
            "Other Custom Lifestyle Products",
          ]}
          py="py-12 lg:py-16"
          gap="gap-8 md:gap-24"
        />

        {/* ─── CUSTOM FORMULATION ───────────────────────────────── */}
        <SectionImageText
          id="custom"
          label="TAILORED PRODUCTS FOR YOUR BRAND"
          title={"CUSTOM\nFORMULATION"}
          body={[
            "We offer custom formulation services for businesses looking to create unique and differentiated products. From concept to final product, we work closely to develop formulations that align with your brand identity and market positioning.",
            "Our process includes product development, testing, and refinement to ensure performance and consistency. This allows you to build products that are exclusive, scalable, and ready for launch.",
          ]}
          imageSrc="/images/product-custom.png"
          imageAlt="Custom formulation products"
          imagePosition="left"
          py="py-12 lg:py-16"
          gap="gap-8 md:gap-24"
        />

        {/* ─── PRODUCT CATEGORY GRID ────────────────────────────── */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <FadeIn direction="up">
              <p className="section-label font-bold text-white/40 mb-8 text-center">ALL CATEGORIES</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                {[
                  { cat: "PERFUME SPRAYS", detail: "EDP · EDT · Body Mist · Hair Mist" },
                  { cat: "ROLL-ON & ATTARS", detail: "Oil-based · Travel formats" },
                  { cat: "INCENSE & CANDLES", detail: "Home fragrance · Diffusers" },
                  { cat: "CAR FRAGRANCE", detail: "Hanging · Vent · Spray" },
                  { cat: "ROOM SPRAYS", detail: "Mist · Linen · Reed" },
                  { cat: "BATH & BODY", detail: "Lotions · Scrubs · Oils" },
                  { cat: "HAIR CARE", detail: "Mists · Oils · Treatments" },
                  { cat: "CUSTOM RANGE", detail: "Concept-to-market" },
                ].map((item) => (
                  <div key={item.cat} className="bg-[#0a0a0a] p-6 md:p-8 border border-white/5 hover:border-white/20 transition-colors duration-300 group">
                    <p className="text-white text-[10px] font-semibold tracking-[0.14em] mb-2 group-hover:opacity-100 opacity-80">
                      {item.cat}
                    </p>
                    <p className="text-white/30 text-[10px]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <BuildYourBrand />
      </main>
      <Footer />
    </>
  );
}
