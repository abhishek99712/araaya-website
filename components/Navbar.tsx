"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuLinks = {
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isTransparent = !scrolled && !menuOpen;

  return (
    <div ref={navRef}>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        menuOpen ? "bg-white border-b border-[#e0ddd8]" : isTransparent ? "bg-transparent" : "bg-white border-b border-[#e0ddd8]"
      }`}>
        <div className="max-w-screen-2xl mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link href="/" className="group">
              <Image
                src={menuOpen || !isTransparent ? "/images/logo-black.png" : "/images/logo-white.png"}
                alt="Araaya International Private Limited"
                width={200}
                height={200}
                className="w-38 md:w-47 h-auto object-contain transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Hamburger / Close */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col justify-center gap-[7px] p-2 pr-5 transition-colors duration-300 ${
                menuOpen || !isTransparent ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="20" y2="20" />
                  <line x1="20" y1="2" x2="2" y2="20" />
                </svg>
              ) : (
                <>
                  <span className="block h-[2px] w-7 bg-current" />
                  <span className="block h-[2px] w-7 bg-current" />
                  <span className="block h-[2px] w-7 bg-current" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Dropdown menu — scrollable on mobile */}
      <div className={`fixed top-[80px] md:top-[96px] left-0 right-0 z-40 bg-white border-b border-[#e0ddd8] transition-all duration-300 overflow-y-auto max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-96px)] ${
        menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
      }`}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20">
            {Object.entries(menuLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-display text-[17px] font-bold tracking-[0.1em] uppercase text-black mb-5">
                  {title}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-[15px] font-medium text-black hover:opacity-50 transition-opacity duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
