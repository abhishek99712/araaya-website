import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "OUR ACTIVITIES": [
    { label: "Formulation & Development", href: "/activities#formulation" },
    { label: "Production & Manufacturing", href: "/activities#manufacturing" },
    { label: "Product Packaging", href: "/activities#packaging" },
    { label: "Manufacturing Standards", href: "/activities#standards" },
    { label: "Regulatory Compliances", href: "/activities#compliance" },
  ],
  "THE PRODUCTS": [
    { label: "Personal Care", href: "/products#personal-care" },
    { label: "Home Care & Lifestyle", href: "/products#home-care" },
    { label: "Custom Formulation", href: "/products#custom" },
  ],
  "OUR STORY": [
    { label: "About Us", href: "/story#about" },
    { label: "How It Started", href: "/story#story" },
    { label: "Our Base", href: "/story#base" },
    { label: "Regulatory Standards", href: "/story#regulatory" },
    { label: "Our Team", href: "/story#team" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Logo row */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-6 flex justify-center">
        <Image
          src="/images/logo-black.png"
          alt="Araaya International Private Limited"
          width={400}
          height={400}
          className="w-48 md:w-56 h-auto -my-14"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-[#e0ddd8]" />

      {/* Main links + contact grid */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Nav link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="font-display text-[17px] font-bold tracking-[0.1em] uppercase text-black mb-5">
              {title}
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-[15px] font-medium hover:opacity-50 transition-opacity duration-200 leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <p className="font-display text-[17px] font-bold tracking-[0.1em] uppercase text-black mb-5">
            CONTACT US
          </p>
          <div className="space-y-5">
            <div>
              <a
                href="https://maps.google.com/?q=A1/268,+Swadeshi+Compound,+Kavi+Nagar+Industrial+Area,+Sector-17,+Ghaziabad,+Uttar+Pradesh+201002,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[15px] font-medium text-black hover:opacity-50 transition-opacity duration-200 leading-relaxed block"
              >
                A1/268, Swadeshi Compound, Kavi Nagar Industrial Area,
                Sector-17, Ghaziabad, Uttar Pradesh 201002, India
              </a>
            </div>
            <div>
              <a href="mailto:connect@araayainternational.com" className="font-sans text-[15px] font-medium text-black hover:opacity-50 transition-opacity duration-200 block leading-relaxed">
                connect@araayainternational.com
              </a>
              <a href="mailto:office@araayainternational.com" className="font-sans text-[15px] font-medium text-black hover:opacity-50 transition-opacity duration-200 block leading-relaxed">
                office@araayainternational.com
              </a>
            </div>
            <div>
              <a href="tel:+919599774765" className="font-sans text-[15px] font-medium text-black hover:opacity-50 transition-opacity duration-200 block leading-relaxed">
                +91 95997 74765
              </a>
              <a href="tel:+919599772765" className="font-sans text-[15px] font-medium text-black hover:opacity-50 transition-opacity duration-200 block leading-relaxed">
                +91 95997 72765
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#e0ddd8]" />

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-5 grid items-center gap-4" style={{ gridTemplateColumns: "auto 1fr auto" }}>
        {/* Legal links — left */}
        <div className="flex items-center gap-5">
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
          ].map((link) => (
            <Link key={link.label} href={link.href} className="font-sans text-[15px] text-black hover:opacity-50 transition-opacity duration-200 whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright — centre */}
        <p className="font-sans text-[15px] text-black text-center whitespace-nowrap">
          © 2025 Araaya International Private Limited. All rights reserved.
        </p>

        {/* Social icons — right */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/araayainternational.ind?igsh=MTR6dzZzNnRwOHhoNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:opacity-50 transition-opacity duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/araayainternational/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black hover:opacity-50 transition-opacity duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-black hover:opacity-50 transition-opacity duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}
