import ContactForm from "./ContactForm";

export default function BuildYourBrand() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[#f7f5f2]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <div>
            <p className="section-label font-bold mb-1">LET&apos;S BUILD YOUR PRODUCT LINE</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.2] md:leading-[1.05] mb-5 md:mb-8">
              BUILD YOUR
              <br />
              BRAND
            </h2>
            <p className="text-[16px] text-black leading-[1.5] mb-4">
              We work with businesses looking to create products that are
              market-ready and built to scale. From formulation and development
              to manufacturing and packaging, our process is structured to
              support you at every stage.
            </p>
            <p className="text-[16px] text-black leading-[1.5]">
              Whether you&apos;re starting fresh or expanding your range, we help
              turn your ideas into well-crafted products.
            </p>
          </div>

          {/* Right — Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
