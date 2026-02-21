const colorClass = {
  "sf-wachstum": "text-sf-wachstum",
  "sf-stabilitaet": "text-sf-stabilitaet",
  "sf-erneuerung": "text-sf-erneuerung",
} as const;

export function TrilemmaField({
  title,
  items,
  color,
}: {
  title: string;
  color: keyof typeof colorClass;
  items: { name: string; res: string }[];
}) {
  return (
    <div className="border border-brand-gray100 bg-white p-5">
      <div className={`text-xs tracking-[0.18em] uppercase font-[var(--font-heading)] font-semibold ${colorClass[color]}`}>
        {title}
      </div>

      <div className="mt-4 space-y-3">
        {items.map((it) => (
          <div key={it.name} className="border border-brand-gray100 p-4">
            <div className="font-[var(--font-heading)] font-semibold text-brand-navy">{it.name}</div>
            <div className="mt-1 text-sm text-brand-gray600">
              <span className="text-brand-gray400 font-[var(--font-heading)] font-semibold text-xs tracking-wide uppercase">Ergebnis: </span>
              {it.res}
            </div>
          </div>
        ))}
      </div>

      <a href="#austausch" className="mt-4 inline-flex text-sm font-[var(--font-heading)] font-medium text-brand-blue hover:underline">
        Ansatz besprechen →
      </a>
    </div>
  );
}
