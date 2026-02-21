"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SpannungsfeldModel, { type Field } from "./SpannungsfeldModel";

const EMAIL = "connect@trillema.com";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeField, setActiveField] = useState<Field | null>(null);

  const fieldLabel = useMemo<Record<Field, string>>(
    () => ({
      wachstum: "Wachstum",
      stabilitaet: "Stabilität",
      erneuerung: "Erneuerung",
    }),
    []
  );

  // Navbar scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal (IntersectionObserver) – progressive enhancement
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) (entry.target as HTMLElement).classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") ?? "";
    if (!href.startsWith("#")) return;

    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (!el) return;

    e.preventDefault();
    setMenuOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleField = (field: Field) => {
    setActiveField((prev) => (prev === field ? null : field));
  };

  const selectFieldFromModel = (field: Field) => {
    setActiveField((prev) => (prev === field ? null : field));
    requestAnimationFrame(() => {
      const el = document.getElementById("spannungsfelder");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-logo" onClick={handleAnchorClick} aria-label="Zurück nach oben">
          <img src="/brand/logo-white.svg" alt="Trillema" className="logo-white" />
          <img src="/brand/logo-color.svg" alt="Trillema" className="logo-color" />
        </a>

        <div className="nav-links" style={menuOpen ? ({ display: "flex" } as const) : undefined}>
          <a href="#leistungen" onClick={handleAnchorClick}>
            Leistungen
          </a>
          <a href="#philosophie" onClick={handleAnchorClick}>
            Philosophie
          </a>
          <a href="#ueber" onClick={handleAnchorClick}>
            Über
          </a>
          <a href="#perspektiven" onClick={handleAnchorClick}>
            Perspektiven
          </a>
          <a href="#austausch" className="nav-cta" onClick={handleAnchorClick}>
            Austausch
          </a>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-gradient" />
        <div className="hero-bg" aria-hidden="true">
          <svg viewBox="0 0 1440 900" fill="none">
            <g transform="translate(370, 30) scale(7)" opacity="0.2">
              <path
                d="M46.58,5.539l-3.109,4.353c2.699,0.925-0.395,5.934-1.865,8.395 C27.835,41.32,13.727,75.184,6.783,80.78l4.042,13.68c4.56-17.929,39.59-20.313,78.972-12.747l3.42-5.907 C80.884,59.638,68.24,41.916,57.151,23.572c-1.07-1.525,0.414-3.731,0.622-5.596c-1.743,1.62-9.703,0.431-4.975,11.504 c8.395,14.406,17.722,28.189,27.049,41.351c-20.935-2.384-36.895-1.658-56.275,1.244c9.617-18.161,18.613-36.011,26.986-54.483 C52.355,11.417,49.552,8.052,46.58,5.539L46.58,5.539z"
                fill="rgba(41,104,178,1)"
              >
                <animate attributeName="opacity" values="1;0.5;1" dur="8s" repeatCount="indefinite" />
              </path>
            </g>

            <path
              d="M720 100 L1150 750 L290 750 Z"
              stroke="rgba(41,104,178,0.2)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="6 10"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 720 450;360 720 450"
                dur="150s"
                repeatCount="indefinite"
              />
            </path>

            <path d="M720 180 L1050 680 L390 680 Z" stroke="rgba(41,104,178,0.1)" strokeWidth="0.5" fill="none">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="360 720 450;0 720 450"
                dur="200s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-label">Für KMU, die sich wandeln — ohne sich zu verlieren</div>
          <h1 className="hero-headline">
            Wachsen. Stabilisieren. Erneuern.
            <br />
            <strong>Gleichzeitig.</strong>
          </h1>

          <div className="hero-bridge">
            <span className="hero-bridge-equation">Dieses Trilemma meistern = unternehmerische Plastizität</span>
            <span className="hero-bridge-definition">Die Fähigkeit zur dauerhaften Veränderung unter Belastung</span>
          </div>

          <p className="hero-sub">
            Wachstum, Stabilität und Erneuerung gleichzeitig zu meistern, ist eine der grössten Herausforderungen für KMU.
            Wir verbinden strategische Tiefe mit operativer Umsetzung — auf C-Level, im Verwaltungsrat/Beirat oder als
            Sparring Partner.
          </p>

          <div className="hero-cta-row">
            <a href="#austausch" className="btn-primary" onClick={handleAnchorClick}>
              Sprechen wir darüber
            </a>
            <a href="#philosophie" className="btn-secondary" onClick={handleAnchorClick}>
              Unsere Philosophie
            </a>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-line" />
          Entdecken
        </div>
      </section>

      {/* LEISTUNGEN */}
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
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gray-400)",
                  fontWeight: 600,
                }}
              >
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
                {f === "wachstum"
                  ? "Wachsen, ohne zu zerbrechen"
                  : f === "stabilitaet"
                    ? "Stabilität, die atmet"
                    : "Erneuern, ohne zu zerstören"}
              </div>
            </div>
          ))}
        </div>

        {/* Panels */}
        <div className={`sf-panel ${activeField === "wachstum" ? "active" : ""}`} id="panel-wachstum" role="tabpanel">
          <div className="sf-panel-header">
            <span className="sf-panel-title">Wachstum · 3 mögliche Ansätze</span>
          </div>
          <div className="leistung-grid">
            <div className="leistung-card" data-color="blue">
              <div className="leistung-name">Wachstum, das von innen kommt</div>
              <p className="leistung-methode">
                Sie wachsen — aber hält Ihre Organisation Schritt? Wir klären, was sich ändern muss, in welcher Reihenfolge, und mit wem.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Skalierungs-Roadmap mit klarer Sequenz von heute bis Zielgrösse</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="blue">
                  Skalierung
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>

            <div className="leistung-card" data-color="blue">
              <div className="leistung-name">Ein Zukauf, der wirklich passt</div>
              <p className="leistung-methode">
                Das Ziel sieht auf dem Papier gut aus — aber passt es wirklich? Wir prüfen, was klassische Due Diligence nicht abdeckt: kulturelle Passung, Integrationsfähigkeit und Identitätsrisiken.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Ganzheitliche Analyse des Targets — auch zu den unbequemen Fragen</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="blue">
                  Integration
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>

            <div className="leistung-card" data-color="blue">
              <div className="leistung-name">Neue Wege, die sich lohnen</div>
              <p className="leistung-methode">
                Neue Märkte, Modelle oder Partnerschaften — aber verkraftet Ihr Unternehmen die zusätzliche Komplexität? Wir bewerten die Chance und Ihre Fähigkeit, sie umzusetzen.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Strategische Bewertung mit Umsetzungsplan und Partner-Empfehlung</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="blue">
                  Diversifikation
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>
          </div>

          <div className="sf-panel-cta">
            <a href="#austausch" onClick={handleAnchorClick}>
              Gemeinsam Wachstum gestalten
            </a>
          </div>
        </div>

        <div className={`sf-panel ${activeField === "stabilitaet" ? "active" : ""}`} id="panel-stabilitaet" role="tabpanel">
          <div className="sf-panel-header">
            <span className="sf-panel-title">Stabilität · 2 mögliche Ansätze</span>
          </div>
          <div className="leistung-grid cols-2">
            <div className="leistung-card" data-color="navy">
              <div className="leistung-name">Strukturen, die mitwachsen</div>
              <p className="leistung-methode">
                Ihr Unternehmen hat sich verändert — Ihre Strukturen auch? Wir prüfen, ob VR, GL und Entscheidungswege noch zur heutigen Realität passen.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Governance-Setup, das Stabilität und Handlungsfähigkeit verbindet</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="navy">
                  Ordnung
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>

            <div className="leistung-card" data-color="navy">
              <div className="leistung-name">Eine Kultur, die trägt</div>
              <p className="leistung-methode">
                Ist Ihre Kultur ein Stabilitätsanker — oder eine starre Hülle? Wir finden heraus, wo sie Kraft gibt und wo sie verwundbar macht.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Kulturelle Standortbestimmung mit konkreten Massnahmen auf GL-/VR-Ebene</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="navy">
                  Fundament
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>
          </div>

          <div className="sf-panel-cta">
            <a href="#austausch" onClick={handleAnchorClick}>
              Stabilität gemeinsam stärken
            </a>
          </div>
        </div>

        <div className={`sf-panel ${activeField === "erneuerung" ? "active" : ""}`} id="panel-erneuerung" role="tabpanel">
          <div className="sf-panel-header">
            <span className="sf-panel-title">Erneuerung · 3 mögliche Ansätze</span>
          </div>

          <div className="leistung-grid">
            <div className="leistung-card" data-color="accent">
              <div className="leistung-name">Digitalisierung, die Sinn macht</div>
              <p className="leistung-methode">
                Wo schafft Digitalisierung echten Wert — und wo ist sie nur Rauschen? Eine ehrliche Standortbestimmung, priorisiert nach Geschäftswirkung statt Technologie-Trends.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Digitale Standortbestimmung mit strategischer Priorisierung</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="accent">
                  Infrastruktur
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>

            <div className="leistung-card" data-color="accent">
              <div className="leistung-name">AI, die Wirkung zeigt</div>
              <p className="leistung-methode">
                Alle reden von AI — aber wo bewegt sie bei Ihnen wirklich etwas? Von der strategischen Richtung über konkrete Use Cases bis zum Operating Model. Eine AI-Strategie, keine Pilot-Sammlung.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">AI-Strategie mit Operating Model, priorisierten Use Cases und Umsetzungsplan</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="accent">
                  Werkzeug
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>

            <div className="leistung-card" data-color="accent">
              <div className="leistung-name">Eine Vision, die führt</div>
              <p className="leistung-methode">
                Stimmt die Richtung noch? Passt Ihr Unternehmenszweck zur veränderten Realität? Ein Entwicklungsprozess mit Ihrer Führung — kein Einmal-Workshop.
              </p>
              <div className="leistung-ergebnis">
                <div className="leistung-ergebnis-label">Ergebnis</div>
                <div className="leistung-ergebnis-text">Erneuerte Vision und Zweckdefinition, die von der Führung getragen wird</div>
              </div>
              <div className="leistung-footer">
                <span className="leistung-ebene" data-color="accent">
                  Kompass
                </span>
                <a href="#austausch" className="leistung-cta" onClick={handleAnchorClick}>
                  Ansatz besprechen →
                </a>
              </div>
            </div>
          </div>

          <div className="sf-panel-cta">
            <a href="#austausch" onClick={handleAnchorClick}>
              Erneuerung gemeinsam angehen
            </a>
          </div>
        </div>

        <div className="challenge-banner reveal">
          <h3>Ihr Thema ist keines davon?</h3>
          <p>
            Modelle helfen – aber sie lösen nicht jedes Thema. Fordern Sie mich heraus mit dem, was Sie aktuell am meisten beschäftigt. Ich arbeite einen Tag mit Ihnen am Kern. Wenn danach kein spürbarer Mehrwert entsteht, tragen Sie kein Risiko: Der Tag geht auf mich – ich nehme die Erkenntnisse mit.
          </p>
          <a href="#austausch" className="btn-challenge" onClick={handleAnchorClick}>
            Herausforderung schildern →
          </a>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="plasticity-section" id="philosophie">
        <div className="plasticity-inner">
          <div className="plasticity-content reveal">
            <span className="section-label">Unsere Philosophie</span>
            <h2 className="section-headline">
              Warum <strong>Plastizität</strong> —<br />
              und nicht der nächste starre Strategieplan.
            </h2>
            <p className="section-text">
              Die Welt, in der starre Strategiepläne funktionierten, gibt es nicht mehr. Märkte verschieben sich schneller, als Strategien geschrieben werden. Regulierung, Technologie, Fachkräftemangel — alles gleichzeitig, alles beschleunigt. Schweizer KMU stehen dabei vor einem besonderen Spannungsfeld: Sie müssen wachsen, stabil bleiben und sich erneuern — oft gleichzeitig, mit begrenzten Ressourcen.
            </p>
            <p className="section-text philo-accent">
              Wir nennen die Fähigkeit, die das erfordert, <em>unternehmerische Plastizität</em> — die Kapazität eines Unternehmens, seine Strukturen, Prozesse und Kompetenzen laufend umzubauen, ohne dabei seine Identität, Kultur und Stärken zu verlieren.
            </p>
            <p className="section-text">
              Der Begriff kommt aus der Neurowissenschaft: So wie das Gehirn sich durch neue Verbindungen ständig neu organisiert, müssen Unternehmen lernen, sich strukturell zu verändern, ohne zu brechen.
            </p>
            <p className="section-text">
              Plastizität ist kein Projekt mit Enddatum. Sie ist eine Eigenschaft, die man aufbaut — oder verliert. Trillema existiert, um diese Eigenschaft in Schweizer KMU zu stärken. Nicht mit Frameworks an der Wand, sondern mit persönlicher Verantwortung in der Umsetzung.
            </p>
            <a href="#austausch" className="btn-primary-on-dark" onClick={handleAnchorClick}>
              Sprechen wir darüber
            </a>
          </div>

          <div className="plasticity-visual reveal reveal-delay-2">
            <div className="philo-image-frame">
              <img src="/brand/plasticity.jpg" alt="Unternehmerische Plastizität – Visual" loading="lazy" />
              <div className="philo-image-caption">Visualisierung: neuronale Plastizität als Metapher</div>
            </div>
          </div>
        </div>
      </section>

      {/* ÜBER */}
      <section className="about-section" id="ueber">
        <div className="about-inner">
          <div className="about-visual reveal">
            <div className="about-image-frame">
              <img src="/brand/vanja.jpg" alt="Vanja Rohr — Gründer Trillema GmbH" loading="lazy" />
            </div>
            <div className="about-namecard">
              <div className="about-namecard-name">Vanja Rohr</div>
            </div>
          </div>

          <div className="about-content reveal reveal-delay-2">
            <span className="section-label">Über</span>
            <h2 className="section-headline">Was dahintersteht.</h2>
            <p className="section-text">
              Ich habe über fünfzehn Jahre ein Schweizer ICT-Unternehmen mit aufgebaut — von der operativen Führung über Akquisitionen und Integrationen bis zum erfolgreichen Verkauf an einen internationalen Konzern. Nicht als Berater am Rand, sondern als CEO und Mitinhaber. Als jemand, der die Konsequenzen seiner Entscheide selbst getragen hat.
            </p>
            <p className="section-text">
              Mit Trillema bringe ich diese Erfahrung dorthin, wo sie am meisten bewirkt: in Schweizer KMU, die vor denselben Spannungsfeldern stehen. Nicht als externer Berater mit Empfehlungen, sondern als jemand, der persönlich Verantwortung übernimmt — im Verwaltungsrat, mit Haut im Spiel.
            </p>

            <div className="about-track-record">
              <div className="about-track-item">
                <div className="about-track-verb">Aufgebaut</div>
                <div className="about-track-label">Vom Kernteam zur Unternehmensgruppe</div>
              </div>
              <div className="about-track-item">
                <div className="about-track-verb">Integriert</div>
                <div className="about-track-label">Verschiedene Unternehmen, eine gemeinsame Identität</div>
              </div>
              <div className="about-track-item">
                <div className="about-track-verb">Übergeben</div>
                <div className="about-track-label">Verantwortungsvoll in neue Hände gelegt</div>
              </div>
              <div className="about-track-item">
                <div className="about-track-verb">Begleitet</div>
                <div className="about-track-label">Aktiv in diversen Verwaltungsräten</div>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="https://www.linkedin.com/in/vanjarohr/" target="_blank" rel="noopener noreferrer" className="about-link">
                <svg className="about-linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Mehr auf LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PERSPEKTIVEN */}
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
            <h3 className="perspective-title">
              Governance, die atmet: Warum starre Strukturen die grösste Gefahr für stabile Unternehmen sind.
            </h3>
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

      {/* KONTAKT */}
      <section className="contact-section" id="austausch">
        <div className="contact-inner">
          <span className="section-label">Austausch</span>
          <h2 className="contact-headline reveal">
            Sprechen wir
            <br />
            <strong>darüber.</strong>
          </h2>
          <p className="contact-sub reveal">
            Echte Zusammenarbeit entsteht durch gemeinsam investierte Zeit. Lassen Sie uns in einem ersten Gespräch Ihre Situation gemeinsam durchdenken.
          </p>

          <div className="contact-direct reveal">
            <div className="contact-item">
              <div className="contact-item-label">E-Mail</div>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Telefon</div>
              <a href="tel:+41765798606">+41 76 579 86 06</a>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Standort</div>
              <a
                href="https://maps.google.com/?q=Mattenweg+1,+5223+Riniken,+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-address-link"
              >
                Mattenweg 1, CH-5223 Riniken
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ verticalAlign: "-1px", marginLeft: 4, opacity: 0.5 }}
                  aria-hidden="true"
                >
                  <path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
