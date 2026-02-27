import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import "./legal.css";
import "./footer.css";
import "./nav-mobile.css";
import NavMobileInit from "@/components/NavMobileInit";

const sora = Sora({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-[var(--font-body)]">
        {children}
        <NavMobileInit />
      </body>
    </html>
  );
}
