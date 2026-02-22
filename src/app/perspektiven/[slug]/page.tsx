import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = false;
export const dynamic = "force-static";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  body: string; // paragraphs separated by blank lines
};

const ARTICLES: Article[] = [
  {
    slug: "warum-agilitaet-nicht-reicht",
    title: "Warum Agilität nicht reicht",
    excerpt: "Agilität ist eine Technik. Plastizität ist Führung: Anpassung ohne Identitätsverlust.",
    body:
      "Dieser Artikel ist ein Platzhalter, damit Static Export sauber funktioniert.\n\n" +
      "Ersetze den Inhalt später durch deinen finalen Perspektiven-Text (800–1200 Wörter).",
  },
  {
    slug: "skalierung-ohne-fragilitaet",
    title: "Skalierung ohne Fragilität",
    excerpt: "Wachstum entsteht nicht durch Tempo, sondern durch tragfähige Strukturen.",
    body:
      "Platzhalter-Content.\n\n" +
      "Später: These, 3–4 stützende Gedanken, klare Schlussfolgerung.",
  },
  {
    slug: "governance-die-atmet",
    title: "Governance, die atmet",
    excerpt: "Regeln sind kein Selbstzweck. Gute Governance erhöht Handlungsfähigkeit.",
    body:
      "Platzhalter-Content.\n\n" +
      "Später: Governance als Enabler statt Bremse.",
  },
  {
    slug: "ai-als-fuehrungsfrage",
    title: "AI als Führungsfrage",
    excerpt: "AI ist kein Tool-Projekt. Es ist ein Operating-Model-Thema.",
    body:
      "Platzhalter-Content.\n\n" +
      "Später: Klarer Entscheidungsrahmen, Verantwortlichkeiten, Umsetzung.",
  },
];

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) return {};
  return {
    title: `${a.title} — Trillema`,
    description: a.excerpt,
  };
}

export default function PerspektiveDetailPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const paragraphs = article.body.split("\n\n").map((p) => p.trim()).filter(Boolean);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm opacity-70">{article.date ?? "Perspektive"}</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight">{article.title}</h1>
        <p className="mt-4 text-base opacity-80">{article.excerpt}</p>
      </div>

      <article className="prose prose-invert max-w-none">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </main>
  );
}