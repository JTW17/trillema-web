import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Impressum — Trillema GmbH",
  description: "Impressum der Trillema GmbH, Riniken, Schweiz.",
};

const CONTENT = String.raw`<!-- Unternehmensangaben -->
        <section class="legal-section">
            <h2>Unternehmen</h2>
            <div class="legal-data-grid">
                <span class="legal-data-label">Firma</span>
                <span class="legal-data-value">Trillema GmbH</span>

                <span class="legal-data-label">Adresse</span>
                <span class="legal-data-value">Mattenweg 1<br>CH-5223 Riniken</span>

                <span class="legal-data-label">E-Mail</span>
                <span class="legal-data-value"><a href="mailto:connect@trillema.com">connect@trillema.com</a></span>

                <span class="legal-data-label">Telefon</span>
                <span class="legal-data-value"><a href="tel:+41765798606">+41 76 579 86 06</a></span>
            </div>
        </section>

        <!-- Vertretung -->
        <section class="legal-section">
            <h2>Vertretungsberechtigte Person</h2>
            <div class="legal-data-grid">
                <span class="legal-data-label">Geschäftsführer</span>
                <span class="legal-data-value">Vanja Rohr</span>
            </div>
        </section>

        <!-- Handelsregister -->
        <section class="legal-section">
            <h2>Handelsregistereintrag</h2>
            <div class="legal-data-grid">
                <span class="legal-data-label">Registergericht</span>
                <span class="legal-data-value">Handelsregisteramt des Kantons Aargau</span>

                <span class="legal-data-label">UID</span>
                <span class="legal-data-value">CHE-143.012.182</span>

                <span class="legal-data-label">MWST-Nr.</span>
                <span class="legal-data-value">CHE-143.012.182 MWST</span>
            </div>
        </section>

        <!-- Haftungsausschluss -->
        <section class="legal-section">
            <h2>Haftungsausschluss</h2>
            <p>
                Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Die Trillema GmbH übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte erfolgt auf eigene Verantwortung. Beiträge Dritter sind als solche gekennzeichnet. Haftungsansprüche gegen die Trillema GmbH, die sich auf materielle oder immaterielle Schäden beziehen, welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
            </p>
        </section>

        <!-- Urheberrecht -->
        <section class="legal-section">
            <h2>Urheberrecht</h2>
            <p>
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der Trillema GmbH. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
        </section>

        <!-- Links -->
        <section class="legal-section">
            <h2>Haftung für Links</h2>
            <p>
                Diese Website enthält Verknüpfungen zu Websites Dritter. Für die Inhalte dieser verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Die Trillema GmbH hat bei der erstmaligen Verknüpfung die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstösse bestehen. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstösse erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Verknüpfungen umgehend entfernt.
            </p>
        </section>`;

export default function ImpressumPage() {
  return (
    <div className="legal-page">
      <nav className="legal-nav" aria-label="Rechtliches Navigation">
        <Link href="/" className="legal-nav-logo" aria-label="Zur Startseite">
          <img src="/brand/logo-color.svg" alt="Trillema" />
        </Link>

        <Link href="/" className="legal-nav-back">
          <span dangerouslySetInnerHTML={{ __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` }} aria-hidden="true" />
          Zurück zur Startseite
        </Link>
      </nav>

      <header className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-hero-label">Rechtliches</span>
          <h1><strong>Impressum</strong></h1>
        </div>
      </header>

      <main className="legal-content" dangerouslySetInnerHTML={{ __html: CONTENT }} />

      <Footer />
    </div>
  );
}
