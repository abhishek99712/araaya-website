import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuildYourBrand from "@/components/BuildYourBrand";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import SectionImageText from "@/components/SectionImageText";

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          imageSrc="/images/hero-story.jpg"
          imageAlt="Our story"
          title="STORY"
          subtitle="Discover our journey, our foundation, and the people behind Araaya International Private Limited. This section reflects our approach to building a modern manufacturing company. It offers insight into how we operate, what we value, and what we aim to create."
        />

        {/* ─── ABOUT US ─────────────────────────────────────────── */}
        <SectionImageText
          id="about"
          label="WHO WE ARE"
          title="ABOUT US"
          body={[
            "Araaya International Private Limited is a modern manufacturing company focused on personal care, home care, and lifestyle products. We work with businesses to develop and manufacture products that are ready for the market.",
            "Our approach combines structured processes with an understanding of product experience and presentation. This allows us to deliver solutions that are both functional and aligned with current market expectations.",
          ]}
          imageSrc="/images/story-about.png"
          imageAlt="Our office and workspace"
          imagePosition="left"
          py="py-12 lg:py-16"
          gap="gap-8 md:gap-24"
        />

        {/* ─── OUR STORY ────────────────────────────────────────── */}
        <SectionImageText
          id="story"
          label="HOW IT STARTED"
          title="OUR STORY"
          body={[
            "Araaya International Private Limited was founded in 2025 by two young entrepreneurs driven by a shared curiosity for business and product creation. What began as an exploration into building something of their own gradually evolved into a focused journey in manufacturing.",
            "With an interest in personal care, home care, and lifestyle products, the idea was shaped into a structured business. The goal was simple — to build products that people connect with, backed by reliable manufacturing.",
          ]}
          imageSrc="/images/story-our-story.png"
          imageAlt="Our story"
          imagePosition="right"
          bg="white"
          py="py-12 lg:py-16"
          gap="gap-8 md:gap-24"
        />

        {/* ─── OUR BASE ─────────────────────────────────────────── */}
        <SectionImageText
          id="base"
          label="WHERE WE OPERATE"
          title="OUR BASE"
          body={[
            "Our manufacturing unit is designed to support the complete product lifecycle from formulation and development to final packaging and dispatch. The facility is organised into dedicated zones, including raw material storage, product development and testing, mixing and manufacturing, packaging, and finished goods storage.",
            "We operate with a semi-automated setup that balances skilled manpower with machinery, allowing flexibility while maintaining batch consistency. The unit also includes an in-house formulation and development lab, along with a dedicated space for product photography. This integrated environment enables us to manage the entire journey from idea to ready-to-market product with efficiency, control, and scalability.",
          ]}
          imageSrc="/images/story-base.png"
          imageAlt="Our manufacturing base"
          imagePosition="left"
          py="py-12 lg:py-16"
          gap="gap-8 md:gap-24"
        />

        {/* ─── REGULATORY STANDARDS ─────────────────────────────── */}
        <section id="regulatory" className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <FadeIn direction="left">
                <p className="section-label font-bold mb-1">BUILT ON STRUCTURE &amp; SAFETY</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.2] md:leading-[1.05] mb-5 md:mb-8">
                  REGULATORY
                  <br />
                  STANDARDS &amp;
                  <br />
                  COMPLIANCES
                </h2>
                <p className="text-[16px] text-black leading-[1.5] mb-5">
                  We follow defined processes and align our operations with applicable regulatory and
                  safety standards. From raw material handling to final product output, each stage is
                  governed by structured guidelines.
                </p>
                <p className="text-[16px] text-black leading-[1.5]">
                  This ensures product reliability, process consistency, and compliance with required
                  norms. Our focus is on maintaining transparency and discipline in manufacturing practices.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="space-y-0 border border-[#e0ddd8]">
                  {[
                    { icon: "01", title: "Product Safety Standards", desc: "Raw material validation and product safety testing at every stage." },
                    { icon: "02", title: "Labeling Requirements", desc: "Compliance with applicable labeling and packaging regulations." },
                    { icon: "03", title: "Quality Control SOPs", desc: "Defined standard operating procedures for consistent batch quality." },
                    { icon: "04", title: "Documentation & Traceability", desc: "Full process documentation for transparency and accountability." },
                    { icon: "05", title: "Distribution Compliance", desc: "Products structured to meet distribution and market entry standards." },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-6 p-6 md:p-8 bg-white hover:bg-[#f5f5f5] transition-colors duration-200 ${
                        i > 0 ? "border-t border-[#e0ddd8]" : ""
                      }`}
                    >
                      <span className="text-[10px] font-semibold tracking-[0.12em] text-black pt-0.5 w-5 flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold text-black tracking-wide mb-1.5">{item.title}</p>
                        <p className="text-[11px] text-black leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── OUR TEAM ─────────────────────────────────────────── */}
        <section id="team" className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <FadeIn direction="left">
                <div className="grid grid-cols-2 gap-4">
                  {["PRODUCT DEVELOPMENT", "OPERATIONS", "QUALITY CONTROL", "PACKAGING & DISPATCH"].map(
                    (role, i) => (
                      <div
                        key={i}
                        className="border border-[#e0ddd8] p-6 md:p-8 aspect-square flex flex-col justify-end bg-[#f5f5f5] hover:bg-white transition-colors duration-200"
                      >
                        <div className="mb-4">
                          <div className="w-10 h-10 rounded-full border border-[#d1d1d1] flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="6" r="3" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
                              <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-[9px] font-semibold tracking-[0.12em] uppercase text-black opacity-60">
                          {role}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <p className="section-label font-bold mb-1">PEOPLE BEHIND THE PROCESS</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.2] md:leading-[1.05] mb-5 md:mb-8">
                  OUR TEAM
                </h2>
                <p className="text-[16px] text-black leading-[1.5] mb-5">
                  Our team is built around product development, operations, and execution, working together
                  to maintain consistency and quality across every stage.
                </p>
                <p className="text-[16px] text-black leading-[1.5]">
                  As a growing organization, we focus on building a team that values structure, attention
                  to detail, and reliable processes. Each member contributes to delivering products that
                  meet both brand expectations and market standards.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── TIMELINE ─────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <FadeIn direction="up">
              <p className="section-label font-bold text-white/40 text-center mb-12">OUR MILESTONES</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                {[
                  { year: "2025", event: "Founded", detail: "Araaya International established" },
                  { year: "2025", event: "Facility", detail: "Manufacturing unit operational" },
                  { year: "2025", event: "First Batch", detail: "First products developed & tested" },
                  { year: "2025+", event: "Scale Up", detail: "Expanding product lines & capacity" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#0a0a0a] p-8 md:p-10 border border-white/5 hover:border-white/20 transition-colors duration-300">
                    <p className="font-display text-3xl md:text-4xl font-bold text-white/20 mb-4">{item.year}</p>
                    <p className="text-white text-[11px] font-semibold tracking-[0.12em] uppercase mb-2">{item.event}</p>
                    <p className="text-white/40 text-[11px] leading-relaxed">{item.detail}</p>
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
