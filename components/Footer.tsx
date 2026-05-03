import Link from "next/link";

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
  "LEGAL": [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Logo row */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 flex justify-center">
        <span
          className="font-display text-[13px] font-bold tracking-[0.35em] uppercase text-black"
        >
          ARAAYA INTERNATIONAL
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e0ddd8]" />

      {/* Links grid */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-34">
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
                    className="font-sans text-[15px] hover:opacity-50 transition-opacity duration-200 leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#e0ddd8]" />

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[13px] text-black text-center">
          © 2025 Araaya International Private Limited. All rights reserved.
        </p>
        {/* Social icons */}
        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-black hover:opacity-50 transition-opacity duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-black hover:opacity-50 transition-opacity duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-black hover:opacity-50 transition-opacity duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}
