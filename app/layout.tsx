import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700"],
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.otf",   weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Araaya International Private Limited",
  description:
    "A new-age manufacturing startup producing personal care, home care, and lifestyle products. Formulation, development, and manufacturing for modern brands.",
  keywords: [
    "contract manufacturing",
    "personal care",
    "home care",
    "lifestyle products",
    "perfume manufacturing",
    "B2B manufacturing India",
  ],
  openGraph: {
    title: "Araaya International Private Limited",
    description: "Modernizing product manufacturing for personal care, home care & lifestyle brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
