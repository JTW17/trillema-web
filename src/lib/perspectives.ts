export type Perspective = {
  slug: string;
  badge?: string;
  tag: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};

export const perspectives: Perspective[] = [
  {
    slug: "unternehmerische-plastizitaet",
    badge: "Unternehmerische Plastizität",
    tag: "Unternehmerische Plastizität",
    title: "Warum Agilität nicht reicht — und was Unternehmen wirklich anpassungsfähig macht.",
    excerpt:
      "Agilität ist Reaktion – keine Fähigkeit zur dauerhaften Veränderung unter Belastung. Was KMU stattdessen brauchen: unternehmerische Plastizität.",
    featured: true,
  },
  {
    slug: "wachstum",
    tag: "Wachstum + Plastizität",
    title: "Warum Skalierung die meisten KMU nicht stärker macht — sondern fragiler.",
    excerpt:
      "Skalierung ohne strukturelle Reife zerstört genau das, was ein Unternehmen erfolgreich gemacht hat. Ein Erfahrungsbericht.",
  },
  {
    slug: "governance",
    tag: "Stabilität + Plastizität",
    title: "Governance, die atmet: Warum starre Strukturen die grösste Gefahr für stabile Unternehmen sind.",
    excerpt:
      "Die besten Modelle geben Sicherheit, ohne Bewegung zu verhindern. Viele KMU verwechseln Kontrolle mit Stabilität — und zahlen dafür.",
  },
  {
    slug: "ai-strategie",
    tag: "Erneuerung + Plastizität",
    title: "AI im KMU: Weniger Technologie-Frage, mehr Führungsfrage.",
    excerpt:
      "Der Engpass sitzt selten in der Technologie. Der wahre Hebel liegt in Kultur, Operating Model und der Bereitschaft, Prozesse neu zu denken.",
  },
];
