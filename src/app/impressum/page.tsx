import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Trillema GmbH",
  description:
    "Impressum der Trillema GmbH, Riniken, Schweiz. Angaben gemäss Art. 3 Abs. 1 lit. s UWG.",
};

export default function ImpressumPage() {
  return (
    <>
      <nav className="legal-nav" aria-label="Legal Navigation">
        <Link className="legal-nav-logo" href="/" aria-label="Zur Startseite">
          <img src="/brand/logo-color.svg" alt="Trillema" />
        </Link>
      </nav>

      <header className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-hero-label">Rechtliches</span>
          <h1>
            <strong>Impressum</strong>
          </h1>
          <p className="legal-hero-meta">
            Angaben gemäss Art. 3 Abs. 1 lit. s des Bundesgesetzes gegen den unlauteren Wettbewerb (UWG).
          </p>
        </div>
      </header>

      <main className="legal-content">
        <section className="legal-section">
          <h2>Unternehmen</h2>
          <div className="legal-data-grid">
            <span className="legal-data-label">Firma</span>
            <span className="legal-data-value">Trillema GmbH</span>

            <span className="legal-data-label">Adresse</span>
            <span className="legal-data-value">
              Mattenweg 1
              <br />
              CH-5223 Riniken
            </span>

            <span className="legal-data-label">E-Mail</span>
            <span className="legal-data-value">
              <a href="mailto:connect@trillema.com">connect@trillema.com</a>
            </span>

            <span className="legal-data-label">Telefon</span>
            <span className="legal-data-value">
              <a href="tel:+41765798606">+41 76 579 86 06</a>
            </span>
          </div>
        </section>

        <section className="legal-section">
          <h2>Vertretungsberechtigte Person</h2>
          <div className="legal-data-grid">
            <span className="legal-data-label">Geschäftsführer</span>
            <span className="legal-data-value">Vanja Rohr</span>
          </div>
        </section>

        <section className="legal-section">
          <h2>Handelsregistereintrag</h2>
          <div className="legal-data-grid">
            <span className="legal-data-label">Registergericht</span>
            <span className="legal-data-value">Handelsregisteramt des Kantons Aargau</span>

            <span className="legal-data-label">UID</span>
            <span className="legal-data-value">CHE-143.012.182</span>

            <span className="legal-data-label">MWST-Nr.</span>
            <span className="legal-data-value">CHE-143.012.182 MWST</span>
          </div>
        </section>

        <section className="legal-section">
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Die Trillema GmbH übernimmt jedoch keine Gewähr
            für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte erfolgt
            auf eigene Verantwortung. Beiträge Dritter sind als solche gekennzeichnet. Haftungsansprüche gegen die Trillema
            GmbH, die sich auf materielle oder immaterielle Schäden beziehen, welche durch die Nutzung oder Nichtnutzung der
            dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern kein nachweislich
            vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
          </p>
        </section>

        <section className="legal-section">
          <h2>Urheberrecht</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede
            Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der Trillema
            GmbH. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section className="legal-section">
          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält Verknüpfungen zu Websites Dritter. Für die Inhalte dieser verlinkten Seiten ist stets der
            jeweilige Anbieter verantwortlich. Die Trillema GmbH hat bei der erstmaligen Verknüpfung die fremden Inhalte
            daraufhin überprüft, ob etwaige Rechtsverstösse bestehen. Zum Zeitpunkt der Verlinkung waren keine
            Rechtsverstösse erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige
            Verknüpfungen umgehend entfernt.
          </p>
        </section>
      </main>
    </>
  );
}
