import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Datenschutz — Trillema GmbH",
  description: "Datenschutzerklärung der Trillema GmbH gemäss Schweizer DSG.",
};

const TOC = String.raw`<div class="legal-toc">
        <p class="legal-toc-title">Inhalt</p>
        <ol class="legal-toc-list">
            <li><a href="#verantwortlich"><span class="toc-num">1</span> Verantwortliche Stelle</a></li>
            <li><a href="#allgemein"><span class="toc-num">2</span> Allgemeines</a></li>
            <li><a href="#hosting"><span class="toc-num">3</span> Hosting</a></li>
            <li><a href="#serverlogs"><span class="toc-num">4</span> Server-Logdateien</a></li>
            <li><a href="#kontakt"><span class="toc-num">5</span> Kontaktaufnahme</a></li>
            <li><a href="#google-fonts"><span class="toc-num">6</span> Google Fonts</a></li>
            <li><a href="#analytics"><span class="toc-num">7</span> Analyse-Dienste</a></li>
            <li><a href="#cookies"><span class="toc-num">8</span> Cookies</a></li>
            <li><a href="#rechte"><span class="toc-num">9</span> Ihre Rechte</a></li>
            <li><a href="#aenderungen"><span class="toc-num">10</span> Änderungen</a></li>
        </ol>
    </div>
    <div class="legal-toc-divider"><hr></div>`;
const CONTENT = String.raw`<!-- 1. Verantwortliche Stelle -->
        <section class="legal-section" id="verantwortlich">
            <h2><span class="section-num">1</span> Verantwortliche Stelle</h2>
            <p>Verantwortlich für die Datenbearbeitung im Zusammenhang mit dieser Website ist:</p>
            <div class="legal-data-grid" style="margin-top: 1rem;">
                <span class="legal-data-label">Firma</span>
                <span class="legal-data-value">Trillema GmbH</span>

                <span class="legal-data-label">Adresse</span>
                <span class="legal-data-value">Mattenweg 1, CH-5223 Riniken</span>

                <span class="legal-data-label">E-Mail</span>
                <span class="legal-data-value"><a href="mailto:connect@trillema.com">connect@trillema.com</a></span>

                <span class="legal-data-label">Telefon</span>
                <span class="legal-data-value"><a href="tel:+41765798606">+41 76 579 86 06</a></span>
            </div>
        </section>

        <!-- 2. Allgemeines -->
        <section class="legal-section" id="allgemein">
            <h2><span class="section-num">2</span> Allgemeines zur Datenbearbeitung</h2>
            <p>
                Der Schutz Ihrer Personendaten ist uns ein wichtiges Anliegen. Wir bearbeiten Ihre Personendaten im Einklang mit dem Schweizer Bundesgesetz über den Datenschutz (DSG) sowie – soweit anwendbar – der europäischen Datenschutz-Grundverordnung (DSGVO).
            </p>
            <p>
                Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. Wir bearbeiten Personendaten nur, soweit dies für die Bereitstellung einer funktionsfähigen Website, unserer Inhalte und Dienstleistungen erforderlich ist.
            </p>
            <p>
                Ihre Personendaten werden nur so lange aufbewahrt, wie es für den jeweiligen Bearbeitungszweck erforderlich ist oder wie es gesetzliche Aufbewahrungspflichten vorsehen. Danach werden sie gelöscht oder anonymisiert.
            </p>
        </section>

        <!-- 3. Hosting -->
        <section class="legal-section" id="hosting">
            <h2><span class="section-num">3</span> Hosting</h2>
            <p>
                Diese Website wird auf der Infrastruktur von Microsoft Azure gehostet. Die Bearbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten Bereitstellung unseres Online-Angebots.
            </p>
            <div class="legal-data-grid" style="margin-top: 1rem;">
                <span class="legal-data-label">Anbieter</span>
                <span class="legal-data-value">Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland</span>

                <span class="legal-data-label">Rechenzentrum</span>
                <span class="legal-data-value">Europa (Azure Region: West Europe / Switzerland North)</span>

                <span class="legal-data-label">Vertragsbasis</span>
                <span class="legal-data-value">Auftragsbearbeitungsvertrag (Data Processing Agreement) gemäss Microsoft Online Services Terms</span>
            </div>
            <p style="margin-top: 1rem;">
                Microsoft kann Personendaten in Länder ausserhalb der Schweiz und des EWR übermitteln. In solchen Fällen stellt Microsoft durch geeignete Garantien (insbesondere Standardvertragsklauseln) ein angemessenes Datenschutzniveau sicher. Weitere Informationen finden Sie in der <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener">Datenschutzerklärung von Microsoft</a>.
            </p>
        </section>

        <!-- 4. Server-Logdateien -->
        <section class="legal-section" id="serverlogs">
            <h2><span class="section-num">4</span> Server-Logdateien</h2>
            <p>
                Bei jedem Zugriff auf diese Website werden automatisch Informationen in sogenannten Server-Logdateien gespeichert, die Ihr Browser automatisch übermittelt. Es handelt sich dabei um:
            </p>
            <ul>
                <li>IP-Adresse des anfragenden Geräts</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
                <li>Verwendeter Browser und Betriebssystem</li>
                <li>Übertragene Datenmenge</li>
                <li>HTTP-Statuscode</li>
            </ul>
            <p>
                Diese Daten werden für die Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung unseres Angebots erhoben. Eine Zuordnung dieser Daten zu einer bestimmten Person ist uns nicht möglich. Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt. Die Logdateien werden nach spätestens 30 Tagen automatisch gelöscht.
            </p>
        </section>

        <!-- 5. Kontaktaufnahme -->
        <section class="legal-section" id="kontakt">
            <h2><span class="section-num">5</span> Kontaktaufnahme</h2>
            <p>
                Wenn Sie per E-Mail oder Telefon mit uns in Kontakt treten, werden die von Ihnen mitgeteilten Daten (z.B. Name, E-Mail-Adresse, Inhalt der Nachricht) von uns gespeichert, um Ihre Anfrage zu bearbeiten und für den Fall von Anschlussfragen. Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.
            </p>
            <p>
                Die Bearbeitung dieser Daten erfolgt auf Grundlage Ihrer Kontaktaufnahme und – soweit es um vorvertragliche oder vertragliche Massnahmen geht – zur Durchführung dieser Massnahmen. Die von Ihnen übermittelten Daten werden gelöscht, sobald der Zweck der Bearbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
        </section>

        <!-- 6. Google Fonts -->
        <section class="legal-section" id="google-fonts">
            <h2><span class="section-num">6</span> Google Fonts</h2>
            <p>
                Diese Website nutzt Schriftarten («Google Fonts») des Anbieters Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Beim Aufrufen unserer Seiten wird eine Verbindung zu den Servern von Google hergestellt, um die Schriftarten zu laden.
            </p>
            <p>
                Dabei kann Ihre IP-Adresse an Google übermittelt werden. Google kann diese Daten in die USA übertragen. Google hat sich zur Einhaltung angemessener Datenschutzstandards verpflichtet. Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von Google</a> sowie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener">Google Fonts FAQ</a>.
            </p>
            <p>
                Die Einbindung erfolgt auf Grundlage unseres berechtigten Interesses an einer einheitlichen und ansprechenden Darstellung unseres Online-Angebots.
            </p>
        </section>

        <!-- 7. Analyse-Dienste -->
        <section class="legal-section" id="analytics">
            <h2><span class="section-num">7</span> Analyse-Dienste</h2>
            <p>
                Derzeit setzt diese Website keine Analyse- oder Tracking-Dienste ein.
            </p>
            <p>
                Sollten wir künftig Analyse-Dienste (z.B. Google Analytics) implementieren, werden wir diese Datenschutzerklärung entsprechend aktualisieren und Sie vor der Aktivierung darüber informieren. Analyse-Dienste, die eine Datenbearbeitung in Drittländern vornehmen, werden nur unter Einhaltung geeigneter Garantien eingesetzt.
            </p>
        </section>

        <!-- 8. Cookies -->
        <section class="legal-section" id="cookies">
            <h2><span class="section-num">8</span> Cookies</h2>
            <p>
                Diese Website verwendet derzeit keine Cookies, die über technisch notwendige Funktionen hinausgehen. Es werden keine Tracking-Cookies, Werbe-Cookies oder vergleichbare Technologien eingesetzt.
            </p>
            <p>
                Sollten wir künftig Cookies einsetzen, die über das technisch Notwendige hinausgehen, werden wir Sie darüber informieren und – soweit erforderlich – Ihre Einwilligung einholen.
            </p>
        </section>

        <!-- 9. Ihre Rechte -->
        <section class="legal-section" id="rechte">
            <h2><span class="section-num">9</span> Ihre Rechte</h2>
            <p>
                Sie haben gemäss dem Schweizer DSG und – soweit anwendbar – der DSGVO folgende Rechte in Bezug auf Ihre Personendaten:
            </p>
            <ul>
                <li><strong>Auskunftsrecht:</strong> Sie können Auskunft darüber verlangen, ob und welche Personendaten wir über Sie bearbeiten (Art. 25 DSG).</li>
                <li><strong>Recht auf Berichtigung:</strong> Sie können die Berichtigung unrichtiger Personendaten verlangen.</li>
                <li><strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer Personendaten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li><strong>Recht auf Datenherausgabe:</strong> Sie können die Herausgabe Ihrer Personendaten in einem gängigen elektronischen Format verlangen (Art. 28 DSG).</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Bearbeitung Ihrer Personendaten jederzeit widersprechen.</li>
            </ul>
            <p>
                Bitte richten Sie Anfragen zu Ihren Rechten an: <a href="mailto:connect@trillema.com">connect@trillema.com</a>. Wir werden Ihre Anfrage in der Regel innerhalb von 30 Tagen beantworten.
            </p>

            <h3>Aufsichtsbehörde</h3>
            <p>
                Zuständige Datenschutzaufsichtsbehörde in der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB). Sie haben das Recht, sich jederzeit an die Aufsichtsbehörde zu wenden: <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener">www.edoeb.admin.ch</a>.
            </p>
        </section>

        <!-- 10. Änderungen -->
        <section class="legal-section" id="aenderungen">
            <h2><span class="section-num">10</span> Änderungen dieser Datenschutzerklärung</h2>
            <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unseres Angebots und der Datenbearbeitung aktuell zu halten. Es gilt jeweils die auf dieser Website veröffentlichte, aktuelle Fassung.
            </p>
            <p>
                Letzte Aktualisierung: 15. Februar 2026
            </p>
        </section>`;

export default function DatenschutzPage() {
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
          <h1><strong>Datenschutz</strong></h1>
        </div>
      </header>

      <div dangerouslySetInnerHTML={{ __html: TOC }} />
      <main className="legal-content" dangerouslySetInnerHTML={{ __html: CONTENT }} />

      <Footer />
    </div>
  );
}
