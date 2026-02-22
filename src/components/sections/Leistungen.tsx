"use client";

import { useMemo, useState } from "react";
import SpannungsfeldModel, { type Field } from "@/components/home/SpannungsfeldModel";

export default function Leistungen() {
  const [activeField, setActiveField] = useState<Field | null>(null);

  const fieldLabel = useMemo<Record<Field, string>>(
    () => ({
      wachstum: "Wachstum",
      stabilitaet: "Stabilität",
      erneuerung: "Erneuerung",
    }),
    []
  );

  const toggleField = (field: Field) => setActiveField((prev) => (prev === field ? null : field));

  const selectFieldFromModel = (field: Field) => {
    setActiveField((prev) => (prev === field ? null : field));
    requestAnimationFrame(() => {
      document.getElementById("spannungsfelder")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="leistungen-section" id="leistungen">
      <div className="leistungen-intro reveal">
        <h2 className="section-headline">
          Von der Diagnose
          <br />
          <strong>bis zur Verantwortung.</strong>
        </h2>
        <p className="section-text">
          Verstehen, was ist. Umsetzen, was nötig ist. Tragen, was daraus folgt. Ein Weg, eine Person — von Anfang bis Ende.
        </p>
      </div>

      <div className="kundenreise reveal">
        <div className="kr-journey">
          <div className="kr-step">
            <div className="kr-step-number">01</div>
            <div className="kr-step-icon" style={{ color: "var(--blue)" }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="16" r="10" />
                <circle cx="16" cy="16" r="4.5" />
                <circle cx="16" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="kr-step-title">Diagnostik</div>
            <div className="kr-step-sub">Profil &amp; Score</div>
          </div>

          <div className="kr-arrow" aria-hidden="true">
            <svg viewBox="0 0 22 22" fill="none">
              <path d="M5 11h12M13 7l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="kr-step">
            <div className="kr-step-number">02</div>
            <div className="kr-step-icon" style={{ color: "var(--navy)" }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="8" width="16" height="16" rx="1.5" transform="rotate(45 16 16)" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className="kr-step-title">Begleitung</div>
            <div className="kr-step-sub">Sparring &amp; Orchestrierung</div>
          </div>

          <div className="kr-arrow" aria-hidden="true">
            <svg viewBox="0 0 22 22" fill="none">
              <path d="M5 11h12M13 7l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="kr-step">
            <div className="kr-step-number">03</div>
            <div className="kr-step-icon" style={{ color: "var(--navy-deep)" }}>
              <svg viewBox="0 0 32 32" fill="none">
                <rect x="8" y="8" width="16" height="16" rx="1.5" transform="rotate(45 16 16)" fill="currentColor" />
              </svg>
            </div>
            <div className="kr-step-title">Verantwortung</div>
            <div className="kr-step-sub">Bis hin zum VR-Mandat</div>
          </div>
        </div>
      </div>

      <div className="model-container reveal">
        <SpannungsfeldModel activeField={activeField} onSelectField={selectFieldFromModel} />
      </div>

      <div className="diff-banner reveal">
        <p className="diff-banner-text">
          <strong>Kein Teamwechsel. Kein Kontextverlust.</strong> Dieselbe Person begleitet Sie von der ersten Analyse bis ins Gremium — mit der Erfahrung und dem Willen, gemeinsam Resultate zu erzielen.
        </p>
      </div>

      <div id="spannungsfelder" className="sf-filter-intro reveal">
        <h2 className="section-headline">
          Wo braucht Ihr Unternehmen
          <br />
          <strong>Plastizität?</strong>
        </h2>
        <p className="section-text">
          Drei Felder, in denen sich die Zukunftsfähigkeit eines Unternehmens entscheidet. Wählen Sie das Thema, das Sie aktuell beschäftigt — und sehen Sie, womit wir arbeiten.
        </p>
      </div>

      <div className={`sf-instruction reveal ${activeField ? "has-active" : ""}`} id="sf-instruction">
        {!activeField ? (
          <p>Wählen Sie ein Spannungsfeld</p>
        ) : (
          <p>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)", fontWeight: 600 }}>
              Im Fokus:
            </span>{" "}
            <strong>{fieldLabel[activeField]}</strong>
          </p>
        )}
      </div>

      <div className="sf-filter-tabs reveal" role="tablist" aria-label="Spannungsfelder">
        {(["wachstum", "stabilitaet", "erneuerung"] as const).map((f) => (
          <div
            key={f}
            className={`sf-tab ${activeField === f ? "active" : ""}`}
            data-field={f}
            role="tab"
            tabIndex={0}
            aria-selected={activeField === f}
            onClick={() => toggleField(f)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleField(f);
              }
            }}
          >
            <div className="sf-tab-title">{fieldLabel[f]}</div>
            <div className="sf-tab-sub">
              {f === "wachstum" ? "Wachsen, ohne zu zerbrechen" : f === "stabilitaet" ? "Stabilität, die atmet" : "Erneuern, ohne zu zerstören"}
            </div>
          </div>
        ))}
      </div>

      <div className={`sf-panel ${activeField === "wachstum" ? "active" : ""}`} id="panel-wachstum" role="tabpanel">
        <div className="sf-panel-header">
          <span className="sf-panel-title">Wachstum · 3 mögliche Ansätze</span>
        </div>
        <div className="leistung-grid">
          <div className="leistung-card" data-color="blue">
            <div className="leistung-name">Wachstum, das von innen kommt</div>
            <p className="leistung-methode">Sie wachsen — aber hält Ihre Organisation Schritt? Wir klären, was sich ändern muss, in welcher Reihenfolge, und mit wem.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Skalierungs-Roadmap mit klarer Sequenz von heute bis Zielgrösse</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="blue">
                Skalierung
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>

          <div className="leistung-card" data-color="blue">
            <div className="leistung-name">Ein Zukauf, der wirklich passt</div>
            <p className="leistung-methode">Das Ziel sieht auf dem Papier gut aus — aber passt es wirklich? Wir prüfen, was klassische Due Diligence nicht abdeckt: kulturelle Passung, Integrationsfähigkeit und Identitätsrisiken.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Ganzheitliche Analyse des Targets — auch zu den unbequemen Fragen</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="blue">
                Integration
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>

          <div className="leistung-card" data-color="blue">
            <div className="leistung-name">Neue Wege, die sich lohnen</div>
            <p className="leistung-methode">Neue Märkte, Modelle oder Partnerschaften — aber verkraftet Ihr Unternehmen die zusätzliche Komplexität? Wir bewerten die Chance und Ihre Fähigkeit, sie umzusetzen.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Strategische Bewertung mit Umsetzungsplan und Partner-Empfehlung</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="blue">
                Diversifikation
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>
        </div>

        <div className="sf-panel-cta">
          <a href="#austausch">Gemeinsam Wachstum gestalten</a>
        </div>
      </div>

      <div className={`sf-panel ${activeField === "stabilitaet" ? "active" : ""}`} id="panel-stabilitaet" role="tabpanel">
        <div className="sf-panel-header">
          <span className="sf-panel-title">Stabilität · 2 mögliche Ansätze</span>
        </div>
        <div className="leistung-grid cols-2">
          <div className="leistung-card" data-color="navy">
            <div className="leistung-name">Strukturen, die mitwachsen</div>
            <p className="leistung-methode">Ihr Unternehmen hat sich verändert — Ihre Strukturen auch? Wir prüfen, ob VR, GL und Entscheidungswege noch zur heutigen Realität passen.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Governance-Setup, das Stabilität und Handlungsfähigkeit verbindet</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="navy">
                Ordnung
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>

          <div className="leistung-card" data-color="navy">
            <div className="leistung-name">Eine Kultur, die trägt</div>
            <p className="leistung-methode">Ist Ihre Kultur ein Stabilitätsanker — oder eine starre Hülle? Wir finden heraus, wo sie Kraft gibt und wo sie verwundbar macht.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Kulturelle Standortbestimmung mit konkreten Massnahmen auf GL-/VR-Ebene</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="navy">
                Fundament
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>
        </div>

        <div className="sf-panel-cta">
          <a href="#austausch">Stabilität gemeinsam stärken</a>
        </div>
      </div>

      <div className={`sf-panel ${activeField === "erneuerung" ? "active" : ""}`} id="panel-erneuerung" role="tabpanel">
        <div className="sf-panel-header">
          <span className="sf-panel-title">Erneuerung · 3 mögliche Ansätze</span>
        </div>

        <div className="leistung-grid">
          <div className="leistung-card" data-color="accent">
            <div className="leistung-name">Digitalisierung, die Sinn macht</div>
            <p className="leistung-methode">Wo schafft Digitalisierung echten Wert — und wo ist sie nur Rauschen? Eine ehrliche Standortbestimmung, priorisiert nach Geschäftswirkung statt Technologie-Trends.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Digitale Standortbestimmung mit strategischer Priorisierung</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="accent">
                Infrastruktur
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>

          <div className="leistung-card" data-color="accent">
            <div className="leistung-name">AI, die Wirkung zeigt</div>
            <p className="leistung-methode">Alle reden von AI — aber wo bewegt sie bei Ihnen wirklich etwas? Von der strategischen Richtung über konkrete Use Cases bis zum Operating Model. Eine AI-Strategie, keine Pilot-Sammlung.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">AI-Strategie mit Operating Model, priorisierten Use Cases und Umsetzungsplan</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="accent">
                Werkzeug
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>

          <div className="leistung-card" data-color="accent">
            <div className="leistung-name">Eine Vision, die führt</div>
            <p className="leistung-methode">Stimmt die Richtung noch? Passt Ihr Unternehmenszweck zur veränderten Realität? Ein Entwicklungsprozess mit Ihrer Führung — kein Einmal-Workshop.</p>
            <div className="leistung-ergebnis">
              <div className="leistung-ergebnis-label">Ergebnis</div>
              <div className="leistung-ergebnis-text">Erneuerte Vision und Zweckdefinition, die von der Führung getragen wird</div>
            </div>
            <div className="leistung-footer">
              <span className="leistung-ebene" data-color="accent">
                Kompass
              </span>
              <a href="#austausch" className="leistung-cta">
                Ansatz besprechen →
              </a>
            </div>
          </div>
        </div>

        <div className="sf-panel-cta">
          <a href="#austausch">Erneuerung gemeinsam angehen</a>
        </div>
      </div>

      <div className="challenge-banner reveal">
        <h3>Ihr Thema ist keines davon?</h3>
        <p>
          Modelle helfen – aber sie lösen nicht jedes Thema. Fordern Sie mich heraus mit dem, was Sie aktuell am meisten beschäftigt. Ich arbeite einen Tag mit Ihnen am Kern. Wenn danach kein spürbarer Mehrwert entsteht, tragen Sie kein Risiko: Der Tag geht auf mich – ich nehme die Erkenntnisse mit.
        </p>
        <a href="#austausch" className="btn-challenge">
          Herausforderung schildern →
        </a>
      </div>
    </section>
  );
}
