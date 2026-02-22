import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = false;
export const dynamic = "force-static";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
};

const ARTICLES: Article[] = [
  {
    slug: "warum-agilitaet-nicht-reicht",
    title: "Warum Agilität nicht reicht",
    excerpt: "Agilität ist eine Technik. Plastizität ist Führung: Anpassung ohne Identitätsverlust.",
    body:
      "Platzhalter-Content, damit Static Export funktioniert.\n\n" +
      "Ersetze das später mit deinem finalen Text.",
  },
  {
    slug: "skalierung-ohne-fragilitaet",
    title: "Skalierung ohne Fragilität",
    excerpt: "Wachstum entsteht nicht durch Tempo, sondern durch tragfähige Strukturen.",
    body: "Platzhalter-Content.\n\nSpäter: These, Argumente, Schlussfolgerung.",
  },
  {
    slug: "governance-die-atmet",
    title: "Governance, die atmet",
    excerpt: "Regeln sind kein Selbstzweck. Gute Governance erhöht Handlungsfähigkeit.",
    body: "Platzhalter-Content.\n\nSpäter: Governance als Enabler statt Bremse.",
  },
  {
    slug: "ai-als-fuehrungsfrage",
    title: "AI als Führungsfrage",
    excerpt: "AI ist kein Tool-Projekt. Es ist ein Operating-Model-Thema.",
    body: "Platzhalter-Content.\n\nSpäter: Rahmen, Verantwortung, Umsetzung.",
  },
];

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  return a ? { title: `${a.title} — Trillema`, description: a.excerpt } : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();

  const paragraphs = a.body.split("\n\n").map((p) => p.trim()).filter(Boolean);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm opacity-70">Perspektive</p>
      <h1 className="mt-2 text-3xl font-semibold leading-tight">{a.title}</h1>
      <p className="mt-4 text-base opacity-80">{a.excerpt}</p>

      <article className="mt-10 space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base leading-7 opacity-90">
            {p}
          </p>
        ))}
      </article>
    </main>
  );
}