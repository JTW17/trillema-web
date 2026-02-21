import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Trillema GmbH gemäss Schweizer DSG.",
};

const toc = [
  ["verantwortlich", "Verantwortliche Stelle"],
  ["allgemein", "Allgemeines"],
  ["hosting", "Hosting"],
  ["serverlogs", "Server-Logdateien"],
  ["kontakt", "Kontaktaufnahme"],
  ["google-fonts", "Google Fonts"],
  ["analytics", "Analyse-Dienste"],
  ["cookies", "Cookies"],
  ["rechte", "Ihre Rechte"],
  ["aenderungen", "Änderungen"],
] as const;

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-brand-gray100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-brand-gray500 hover:text-brand-blue">
            ← Zurück zur Startseite
          </Link>
          <div className="text-sm font-[var(--font-heading)] font-semibold text-brand-navy">Datenschutz</div>
        </div>
      </div>

      <header className="bg-brand-navyDeep text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
          <p className="text-xs tracking-[0.22em] uppercase text-brand-blue font-[var(--font-heading)] font-semibold">Rechtliches</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-[var(--font-heading)] font-light">
            <span className="font-semibold">Datenschutz</span>
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Informationen zum Umgang mit Personendaten gemäss dem Schweizer Bundesgesetz über den Datenschutz (DSG). Gültig ab 15. Februar 2026.
          </p>
        </div>
      </header>

      <nav className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div className="text-xs tracking-[0.22em] uppercase text-brand-gray400 font-[var(--font-heading)] font-semibold">Inhalt</div>
        <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {toc.map(([id, label], i) => (
            <li key={id}>
              <a className="text-brand-blue hover:underline" href={`#${id}`}>
                <span className="text-brand-gray400 font-[var(--font-heading)] font-semibold mr-2">{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-8 border-t border-brand-gray100" />
      </nav>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-16 space-y-10">
        <Block id="verantwortlich" n="1" title="Verantwortliche Stelle">
          <p className="text-sm text-brand-gray600">Verantwortlich für die Datenbearbeitung im Zusammenhang mit dieser Website ist:</p>
          <Dl
            items={[
              ["Firma", site.legalName],
              ["Adresse", site.contact.address],
              ["E-Mail", <a className="text-brand-blue hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>],
              ["Telefon", <a className="text-brand-blue hover:underline" href={`tel:${site.contact.phone}`}>{site.contact.phoneDisplay}</a>],
            ]}
          />
        </Block>

        <Block id="allgemein" n="2" title="Allgemeines zur Datenbearbeitung">
          <P>
            Der Schutz Ihrer Personendaten ist uns ein wichtiges Anliegen. Wir bearbeiten Ihre Personendaten im Einklang mit dem Schweizer Bundesgesetz über
            den Datenschutz (DSG) sowie – soweit anwendbar – der europäischen Datenschutz-Grundverordnung (DSGVO).
          </P>
          <P>
            Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. Wir bearbeiten Personendaten nur, soweit
            dies für die Bereitstellung einer funktionsfähigen Website, unserer Inhalte und Dienstleistungen erforderlich ist.
          </P>
          <P>Ihre Personendaten werden nur so lange aufbewahrt, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Pflichten es verlangen.</P>
        </Block>

        <Block id="hosting" n="3" title="Hosting">
          <P>Diese Website wird auf der Infrastruktur von Microsoft Azure gehostet. Grundlage: berechtigtes Interesse an sicherer, effizienter Bereitstellung.</P>
          <Dl
            items={[
              ["Anbieter", "Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland"],
              ["Vertragsbasis", "Auftragsbearbeitungsvertrag (Data Processing Agreement) gemäss Microsoft Online Services Terms"],
            ]}
          />
          <P>
            Details:
            {" "}
            <a className="text-brand-blue hover:underline" target="_blank" rel="noopener" href="https://privacy.microsoft.com/de-de/privacystatement">
              Microsoft Datenschutzerklärung
            </a>.
          </P>
        </Block>

        <Block id="serverlogs" n="4" title="Server-Logdateien">
          <P>Bei Zugriff werden technisch bedingt Logdaten gespeichert: IP-Adresse, Datum/Uhrzeit, URL, Referrer, Browser/OS, Datenmenge, HTTP-Statuscode.</P>
          <P>Logs dienen Betrieb/Sicherheit/Optimierung. Löschung spätestens nach 30 Tagen.</P>
        </Block>

        <Block id="kontakt" n="5" title="Kontaktaufnahme">
          <P>Bei Kontakt per E-Mail/Telefon speichern wir die übermittelten Daten zur Bearbeitung und für Anschlussfragen. Keine Weitergabe ohne Einwilligung.</P>
        </Block>

        <Block id="google-fonts" n="6" title="Google Fonts">
          <P>
            Diese Website nutzt Google Fonts (Google Ireland Limited). Beim Aufruf kann eine Verbindung zu Google-Servern entstehen; IP kann übertragen werden.
          </P>
          <P>
            Details:
            {" "}
            <a className="text-brand-blue hover:underline" target="_blank" rel="noopener" href="https://policies.google.com/privacy">
              Google Datenschutzerklärung
            </a>
            {" "}
            und
            {" "}
            <a className="text-brand-blue hover:underline" target="_blank" rel="noopener" href="https://developers.google.com/fonts/faq">
              Google Fonts FAQ
            </a>.
          </P>
        </Block>

        <Block id="analytics" n="7" title="Analyse-Dienste">
          <P>Derzeit keine Analyse- oder Tracking-Dienste. Bei künftiger Aktivierung wird die Erklärung aktualisiert.</P>
        </Block>

        <Block id="cookies" n="8" title="Cookies">
          <P>Derzeit keine Cookies über technisch notwendige Funktionen hinaus (keine Tracking-/Werbe-Cookies).</P>
        </Block>

        <Block id="rechte" n="9" title="Ihre Rechte">
          <P>Sie haben Rechte gemäss DSG (und ggf. DSGVO): Auskunft, Berichtigung, Löschung, Datenherausgabe, Widerspruch.</P>
          <P>
            Anfragen an:{" "}
            <a className="text-brand-blue hover:underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            .
          </P>
          <h3 className="mt-6 text-sm font-[var(--font-heading)] font-semibold text-brand-navy">Aufsichtsbehörde</h3>
          <P>
            EDÖB:{" "}
            <a className="text-brand-blue hover:underline" target="_blank" rel="noopener" href="https://www.edoeb.admin.ch">
              www.edoeb.admin.ch
            </a>
          </P>
        </Block>

        <Block id="aenderungen" n="10" title="Änderungen">
          <P>Wir behalten uns Anpassungen vor. Es gilt jeweils die aktuelle, veröffentlichte Fassung.</P>
          <P>Letzte Aktualisierung: 15. Februar 2026</P>
          <div className="mt-6 border-l-4 border-brand-blue bg-brand-iceWarm p-4 text-sm text-brand-gray600">
            <strong className="text-brand-navy">Hinweis:</strong> Keine Rechtsberatung. Bei spezifischen Fragen: Fachperson beiziehen.
          </div>
        </Block>
      </section>
    </main>
  );
}

function Block({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id}>
      <h2 className="text-lg font-[var(--font-heading)] font-semibold text-brand-navy border-b border-brand-gray100 pb-3 flex gap-3 items-baseline">
        <span className="text-brand-blue text-sm font-[var(--font-heading)] font-semibold">{n}</span>
        {title}
      </h2>
      <div className="mt-4 space-y-3">{children}</div>
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
