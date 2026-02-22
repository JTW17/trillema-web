import Link from "next/link";

export default function PerspektivenSection() {
  return (
    <section className="perspectives-section" id="perspektiven">
      <div className="perspectives-header reveal">
        <span className="section-label">Perspektiven</span>
        <h2 className="section-headline">
          Denkanstösse für
          <br />
          <strong>anpassungsfähige Unternehmen.</strong>
        </h2>
        <p className="section-text">
          Standpunkte und Denkmodelle aus der Praxis — entwickelt im Dialog zwischen unternehmerischer Erfahrung und künstlicher Intelligenz.
        </p>
        <div className="perspectives-ai-badge" aria-label="Entwickelt im Dialog Mensch + AI">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="8" cy="8" r="3" />
            <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
          </svg>
          Entwickelt im Dialog Mensch + AI
        </div>
      </div>

      <Link href="/perspektiven/plastizitaet" className="perspective-featured reveal">
        <div className="pf-content">
          <div className="pf-badge">Unternehmerische Plastizität</div>
          <h3 className="pf-title">Warum Agilität nicht reicht — und was Unternehmen wirklich anpassungsfähig macht.</h3>
          <p className="pf-excerpt">
            Alle reden von Agilität. Aber Agilität ist eine Reaktion auf Veränderung — keine Fähigkeit, sich dauerhaft zu wandeln, ohne den Kern zu verlieren. Was KMU stattdessen brauchen: unternehmerische Plastizität.
          </p>
          <span className="pf-link">
            Beitrag lesen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="pf-ai-label">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
            </svg>
            Entwickelt im Dialog Mensch + AI
          </div>
        </div>

        <div className="pf-visual" aria-hidden="true">
          <div className="pf-ring" />
          <div className="pf-ring pf-ring-2" />
          <div className="pf-visual-inner">
            <div className="pf-visual-keyword">Unternehmerische Plastizität</div>
            <div className="pf-visual-accent" />
            <div className="pf-visual-quote">Die Fähigkeit, sich dauerhaft zu wandeln — ohne den Kern zu verlieren.</div>
          </div>
        </div>
      </Link>

      <div className="perspectives-grid">
        <Link href="/perspektiven/wachstum" className="perspective-card reveal reveal-delay-1" data-field="wachstum">
          <div className="perspective-tag">Wachstum + Plastizität</div>
          <h3 className="perspective-title">Warum Skalierung die meisten KMU nicht stärker macht — sondern fragiler.</h3>
          <p className="perspective-excerpt">
            Wachstum ist kein Selbstzweck. Und Skalierung ohne strukturelle Reife zerstört genau das, was ein Unternehmen erfolgreich gemacht hat. Ein Erfahrungsbericht.
          </p>
          <span className="perspective-link">
            Beitrag lesen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="perspective-ai-label">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2" />
            </svg>
            Mensch + AI
          </div>
        </Link>

        <Link href="/perspektiven/governance" className="perspective-card reveal reveal-delay-2" data-field="stabilitaet">
          <div className="perspective-tag">Stabilität + Plastizität</div>
          <h3 className="perspective-title">Governance, die atmet: Warum starre Strukturen die grösste Gefahr für stabile Unternehmen sind.</h3>
          <p className="perspective-excerpt">
            Die besten Governance-Modelle geben Sicherheit, ohne Bewegung zu verhindern. Doch die meisten KMU verwechseln Kontrolle mit Stabilität — und zahlen dafür einen hohen Preis.
          </p>
          <span className="perspective-link">
            Beitrag lesen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="perspective-ai-label">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2" />
            </svg>
            Mensch + AI
          </div>
        </Link>

        <Link href="/perspektiven/ai-strategie" className="perspective-card reveal reveal-delay-3" data-field="erneuerung">
          <div className="perspective-tag">Erneuerung + Plastizität</div>
          <h3 className="perspective-title">AI im KMU: Weniger Technologie-Frage, mehr Führungsfrage.</h3>
          <p className="perspective-excerpt">
            Der grösste Fehler bei der AI-Adoption? Das Problem bei der Technologie zu suchen. Der wahre Engpass sitzt in der Unternehmenskultur und der Bereitschaft, Prozesse neu zu denken.
          </p>
          <span className="perspective-link">
            Beitrag lesen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="perspective-ai-label">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2" />
            </svg>
            Mensch + AI
          </div>
        </Link>
      </div>
    </section>
  );
}
