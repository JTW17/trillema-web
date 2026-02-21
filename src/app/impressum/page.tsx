import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Impressum",
  description: "Impressum der Trillema GmbH, Riniken, Schweiz.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-brand-gray100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-brand-gray500 hover:text-brand-blue">
            ← Zurück zur Startseite
          </Link>
          <div className="text-sm font-[var(--font-heading)] font-semibold text-brand-navy">Impressum</div>
        </div>
      </div>

      <header className="bg-brand-navyDeep text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
          <p className="text-xs tracking-[0.22em] uppercase text-brand-blue font-[var(--font-heading)] font-semibold">Rechtliches</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-[var(--font-heading)] font-light">
            <span className="font-semibold">Impressum</span>
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Angaben gemäss Art. 3 Abs. 1 lit. s des Bundesgesetzes gegen den unlauteren Wettbewerb (UWG).
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 space-y-10">
        <Block title="Unternehmen">
          <Dl
            items={[
              ["Firma", site.legalName],
              ["Adresse", "Mattenweg 1\nCH-5223 Riniken"],
              ["E-Mail", <a className="text-brand-blue hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>],
              ["Telefon", <a className="text-brand-blue hover:underline" href={`tel:${site.contact.phone}`}>{site.contact.phoneDisplay}</a>],
            ]}
          />
        </Block>

        <Block title="Vertretungsberechtigte Person">
          <Dl items={[["Geschäftsführer", "Vanja Rohr"]]} />
        </Block>

        <Block title="Handelsregistereintrag">
          <Dl
            items={[
              ["Registergericht", "Handelsregisteramt des Kantons Aargau"],
              ["UID", "CHE-143.012.182"],
              ["MWST-Nr.", "CHE-143.012.182 MWST"],
            ]}
          />
        </Block>

        <Block title="Haftungsausschluss">
          <P>
            Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Die Trillema GmbH übernimmt jedoch keine Gewähr für die Richtigkeit,
            Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte erfolgt auf eigene Verantwortung.
          </P>
        </Block>

        <Block title="Urheberrecht">
          <P>
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede Verwertung ausserhalb der Grenzen
            des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der Trillema GmbH.
          </P>
        </Block>

        <Block title="Haftung für Links">
          <P>Diese Website enthält Verknüpfungen zu Websites Dritter. Für die Inhalte dieser verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.</P>
        </Block>
      </section>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-[var(--font-heading)] font-semibold text-brand-navy border-b border-brand-gray100 pb-3">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Dl({ items }: { items: Array<[string, React.ReactNode]> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-y-2 gap-x-6 text-sm">
      {items.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-brand-gray400 font-[var(--font-heading)] font-semibold">{k}</dt>
          <dd className="text-brand-gray600 whitespace-pre-line">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-brand-gray600 leading-relaxed">{children}</p>;
}
