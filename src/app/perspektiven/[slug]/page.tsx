import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { perspectives } from "@/lib/perspectives";

export default function PerspectivePage({ params }: { params: { slug: string } }) {
  const p = perspectives.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <>
      <Header />
      <main className="pt-16 bg-white">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
          <div className="text-xs tracking-[0.18em] uppercase text-brand-gray400 font-[var(--font-heading)] font-semibold">{p.tag}</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-[var(--font-heading)] font-light text-brand-navy">{p.title}</h1>
          <p className="mt-4 text-brand-gray600 leading-relaxed">{p.excerpt}</p>

          <div className="mt-10 space-y-4 text-brand-gray600 leading-relaxed">
            <p>
              Template: Content folgt (nächster Schritt). Wenn du willst, machen wir das später mit MDX/Contentlayer — aktuell bleibt’s absichtlich minimal,
              damit Build/Deploy einfach bleibt.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
