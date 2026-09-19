import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "AION 2 Guide",
    template: "%s · AION 2 Guide",
  },
  description:
    "Fan guide for AION 2 global launch week: dates, classes, combat, gear, currencies, and a live roster.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} font-[family-name:var(--font-sans)] antialiased`}>
        <SiteHeader />
        <main className="page-wrap pb-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
