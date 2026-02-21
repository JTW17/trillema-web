import Link from "next/link";
import { perspectives } from "@/lib/perspectives";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Perspektiven",
  description: "Denkanstösse und Artikel aus der Praxis — Trillema.",
};

export default function PerspectivesIndex() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-brand-iceWarm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-[var(--font-heading)] font-light text-brand-navy">Perspektiven</h1>
          <p className="mt-3 text-brand-gray600 max-w-2xl">
            Standpunkte und Denkmodelle aus der Praxis — entwickelt im Dialog Mensch + AI.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {perspectives.map((p) => (
              <Link key={p.slug} href={`/perspektiven/${p.slug}`} className="border border-brand-gray100 bg-white p-6 hover:border-brand-blue transition">
                <div className="text-xs text-brand-gray500">{p.tag}</div>
                <div className="mt-2 text-xl font-[var(--font-heading)] font-semibold text-brand-navy">{p.title}</div>
                <div className="mt-2 text-sm text-brand-gray600">{p.excerpt}</div>
                <div className="mt-3 text-sm font-[var(--font-heading)] font-medium text-brand-blue">Lesen →</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
