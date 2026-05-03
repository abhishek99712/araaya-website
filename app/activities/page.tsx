import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuildYourBrand from "@/components/BuildYourBrand";
import PageHero from "@/components/PageHero";
import SectionImageText from "@/components/SectionImageText";

const activities = [
  {
    id: "formulation",
    label: "PRODUCT CREATION & TESTING",
    title: "FORMULATION &\nDEVELOPMENT",
    body: [
      "We develop products tailored to your brand requirements, focusing on formulation accuracy, stability, and performance. Each product goes through structured development and testing to ensure it meets functional and sensory expectations. Our approach balances creativity with technical precision.",
      "We also facilitate third-party laboratory testing through our lab partners to validate product quality and compliance. This ensures that every product is consistent, scalable, and ready for the market.",
    ],
    imageSrc: "/images/activity-formulation.png",
    imageAlt: "Formulation and development",
    imagePosition: "left" as const,
  },
  {
    id: "manufacturing",
    label: "CONTROLLED, SCALABLE OPERATIONS",
    title: "PRODUCTION &\nMANUFACTURING",
    body: [
      "Our production process is built on structured workflows and monitored execution at every stage. With a semi-automated setup, we ensure efficiency while maintaining flexibility for different product types.",
      "Each batch is handled with defined protocols to ensure consistency and quality. This enables reliable manufacturing that can scale with your business requirements.",
    ],
    imageSrc: "/images/activity-manufacturing.png",
    imageAlt: "Production and manufacturing",
    imagePosition: "right" as const,
  },
  {
    id: "packaging",
    label: "DESIGN, FILLING & FINAL PRESENTATION",
    title: "PRODUCT\nPACKAGING",
    body: [
      "Packaging plays a critical role in product perception and usability. We handle primary packaging, filling processes, and final assembly with attention to detail and consistency.",
      "Our systems are designed to maintain uniformity across batches while supporting different packaging formats. The goal is to deliver products that are both functional and visually aligned with your brand.",
    ],
    imageSrc: "/images/activity-packaging.png",
    imageAlt: "Product packaging",
    imagePosition: "left" as const,
  },
  {
    id: "standards",
    label: "HIGH-GRADE GUIDELINES & SOPS",
    title: "MANUFACTURING\nSTANDARDS",
    body: [
      "We operate under defined standard operating procedures to maintain consistency, hygiene, and process control. Every stage — from raw material handling to final output — is governed by structured guidelines.",
      "This reduces variability and ensures repeatable quality across batches. Our focus is on maintaining disciplined operations that support long-term reliability.",
    ],
    imageSrc: "/images/activity-standards.png",
    imageAlt: "Manufacturing standards",
    imagePosition: "right" as const,
  },
  {
    id: "compliance",
    label: "ALIGNED WITH REQUIRED STANDARDS",
    title: "REGULATORY\nCOMPLIANCES",
    body: [
      "We follow applicable regulatory frameworks and compliance requirements relevant to product manufacturing. Our processes are designed to ensure that products meet safety, labeling, and quality standards.",
      "Documentation and process alignment are maintained to support transparency and accountability. This ensures that your products are compliant and ready for distribution.",
    ],
    imageSrc: "/images/activity-compliance.png",
    imageAlt: "Regulatory compliances",
    imagePosition: "left" as const,
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          imageSrc="/images/hero-activities.jpg"
          imageAlt="Activities"
          title="ACTIVITIES"
          subtitle="An overview of our core operations, from formulation and product development to packaging, manufacturing, and compliance. Each stage is structured to ensure consistency, efficiency, and quality. Our processes are designed to deliver reliable, scalable, and market-ready products."
        />

        {activities.map((activity, idx) => (
          <SectionImageText
            key={activity.id}
            id={activity.id}
            label={activity.label}
            title={activity.title}
            body={activity.body}
            imageSrc={activity.imageSrc}
            imageAlt={activity.imageAlt}
            imagePosition={activity.imagePosition}
            bg={idx % 2 === 0 ? "white" : "cream"}
            py="py-12 lg:py-16"
            gap="gap-8 md:gap-24"
          />
        ))}

        <BuildYourBrand />
      </main>
      <Footer />
    </>
  );
}
