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
          imageSrc="/images/hero-story-v2.jpg"
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
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "01", title: "Start Up India Certificate", label: "STARTUP RECOGNITION", file: "/documents/startup-india-certificate.pdf", preview: "/documents/startup-india-preview.png" },
                    { num: "02", title: "MSME Certificate", label: "MSME REGISTRATION", file: "/documents/msme-certificate.pdf", preview: "/documents/msme-preview.png" },
                    { num: "03", title: "Metrology License", label: "LEGAL METROLOGY", file: "/documents/metrology-license.pdf", preview: "/documents/metrology-preview.png" },
                    { num: "04", title: "GSTIN Certificate", label: "TAX REGISTRATION", file: "/documents/gstin-certificate.pdf", preview: "/documents/gstin-preview.png" },
                  ].map((cert) => (
                    <a
                      key={cert.num}
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-[#e0ddd8] hover:border-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col bg-white"
                    >
                      {/* Square preview */}
                      <div className="relative w-full overflow-hidden bg-[#f5f4f0]" style={{ aspectRatio: "1/1" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.preview}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 w-6 h-6 bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M1 9L9 1M9 1H4M9 1V6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      {/* Label */}
                      <div className="px-4 py-3 border-t border-[#e0ddd8]">
                        <p className="text-[9px] font-semibold tracking-[0.14em] text-black/40 uppercase mb-1">{cert.label}</p>
                        <p className="font-display text-[13px] font-bold text-black leading-snug">{cert.title}</p>
                      </div>
                    </a>
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

        {/* ─── CERTIFICATIONS & LICENSES ────────────────────────── */}
        <section id="certifications" className="py-8 md:py-12 lg:py-16 bg-[#f5f4f0]">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">

            {/* Header row — label + title on left, description on right */}
            <FadeIn direction="up">
              <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
                <div>
                  <p className="section-label font-bold text-black mb-3">VERIFIED &amp; RECOGNISED</p>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.05]">
                    CERTIFICATIONS
                    <br />
                    &amp; LICENSES
                  </h2>
                </div>
                <p className="font-sans text-black text-[16px] leading-[1.6] md:pb-1">
                  All applicable government registrations and certifications that authorise our operations and validate our standing as a compliant manufacturing entity.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {[
                {
                  label: "STARTUP RECOGNITION",
                  title: "Start Up India Certificate",
                  num: "01",
                  file: "/documents/startup-india-certificate.pdf",
                  preview: "/documents/startup-india-preview.png",
                },
                {
                  label: "MSME REGISTRATION",
                  title: "MSME Certificate",
                  num: "02",
                  file: "/documents/msme-certificate.pdf",
                  preview: "/documents/msme-preview.png",
                },
                {
                  label: "LEGAL METROLOGY",
                  title: "Metrology License",
                  num: "03",
                  file: "/documents/metrology-license.pdf",
                  preview: "/documents/metrology-preview.png",
                },
                {
                  label: "TAX REGISTRATION",
                  title: "GSTIN Certificate",
                  num: "04",
                  file: "/documents/gstin-certificate.pdf",
                  preview: "/documents/gstin-preview.png",
                },
              ].map((cert, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.08} className="h-full">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Document preview */}
                    <div className="relative w-full aspect-[3/4] bg-[#eeede9] overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cert.preview}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      {/* number badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm">
                        <span className="text-[10px] font-bold tracking-widest text-black">{cert.num}</span>
                      </div>
                      {/* open arrow */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 9L9 1M9 1H4M9 1V6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="flex flex-col flex-1 px-5 py-5 border-t border-[#e0ddd8]">
                      <p className="text-[9px] font-semibold tracking-[0.16em] text-black/40 uppercase mb-2">
                        {cert.label}
                      </p>
                      <p className="font-display text-[18px] font-bold text-black leading-snug">
                        {cert.title}
                      </p>
                      <div className="mt-auto pt-4 flex items-center gap-2">
                        <span className="text-[9px] font-semibold tracking-[0.12em] text-black/40 uppercase group-hover:text-black transition-colors duration-300">
                          VIEW DOCUMENT
                        </span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                          <path d="M1 9L9 1M9 1H4M9 1V6" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <BuildYourBrand />
      </main>
      <Footer />
    </>
  );
}
