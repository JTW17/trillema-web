const HTML = String.raw`<!-- Intro — WIE -->
        <div class="leistungen-intro reveal">
            <h2 class="section-headline">
                Von der Diagnose<br><strong>bis zur Verantwortung.</strong>
            </h2>
            <p class="section-text">
                Verstehen, was ist. Umsetzen, was nötig ist. Tragen, was daraus folgt. Ein Weg, eine Person — von Anfang bis Ende.
            </p>
        </div>

        <!-- Kundenreise (above diagram, between intros) -->
        <div class="kundenreise reveal">
            <div class="kr-journey">

                <div class="kr-step">
                    <div class="kr-step-number">01</div>
                    <div class="kr-step-icon" style="color: var(--blue);">
                        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="16" cy="16" r="10"/>
                            <circle cx="16" cy="16" r="4.5"/>
                            <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="kr-step-title">Diagnostik</div>
                    <div class="kr-step-sub">Profil & Score</div>
                </div>

                <div class="kr-arrow">
                    <svg viewBox="0 0 22 22" fill="none"><path d="M5 11h12M13 7l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>

                <div class="kr-step">
                    <div class="kr-step-number">02</div>
                    <div class="kr-step-icon" style="color: var(--navy);">
                        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="8" y="8" width="16" height="16" rx="1.5" transform="rotate(45 16 16)"/>
                            <circle cx="16" cy="16" r="2" fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="kr-step-title">Begleitung</div>
                    <div class="kr-step-sub">Sparring & Orchestrierung</div>
                </div>

                <div class="kr-arrow">
                    <svg viewBox="0 0 22 22" fill="none"><path d="M5 11h12M13 7l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>

                <div class="kr-step">
                    <div class="kr-step-number">03</div>
                    <div class="kr-step-icon" style="color: var(--navy-deep);">
                        <svg viewBox="0 0 32 32" fill="none">
                            <rect x="8" y="8" width="16" height="16" rx="1.5" transform="rotate(45 16 16)" fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="kr-step-title">Verantwortung</div>
                    <div class="kr-step-sub">Bis hin zum VR-Mandat</div>
                </div>

            </div>
        </div>

        <!-- Interactive SVG Model (standalone, centered) -->
        <!-- Interactive SVG Model (standalone, centered) -->
        <div class="model-container reveal">
            <svg viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#2968B2" stop-opacity="0.85"/>
                        <stop offset="65%" stop-color="#1A3A5C" stop-opacity="0.95"/>
                        <stop offset="100%" stop-color="#0F2440" stop-opacity="1"/>
                    </radialGradient>
                    <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#2968B2" stop-opacity="0.12">
                            <animate attributeName="stop-opacity" values="0.12;0.05;0.12" dur="3s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="100%" stop-color="#2968B2" stop-opacity="0"/>
                    </radialGradient>
                    <!-- Curved text paths OUTSIDE the outer ring (r=295, ring=268) -->
                    <!-- Top arcs: clockwise = text renders outside -->
                    <path id="arcOutTL" d="M25,320 A295,295 0 0,1 320,25"/>
                    <path id="arcOutTR" d="M320,25 A295,295 0 0,1 615,320"/>
                    <!-- Bottom arcs: reversed direction so text reads left-to-right outside -->
                    <path id="arcOutBR" d="M320,615 A295,295 0 0,0 615,320"/>
                    <path id="arcOutBL" d="M25,320 A295,295 0 0,0 320,615"/>
                </defs>

                <!-- Background -->
                <rect width="640" height="640" rx="16" fill="#F8FAFC"/>

                <!-- ============ OUTER RING: DIAGNOSTIK ============ -->
                <circle cx="320" cy="320" r="268" stroke="#1A3A5C" stroke-width="1.2" stroke-dasharray="8 4" opacity="0.18"/>
                <text x="320" y="28" text-anchor="middle" fill="#8A97A8" font-size="8" font-weight="600" font-family="'Sora', system-ui, sans-serif" letter-spacing="0.18em" opacity="0.45">DIAGNOSTIK</text>

                <!-- Dimension dots (larger, distinct warm colors) on the ring -->
                <circle cx="130" cy="130" r="7" fill="#E8A838" opacity="0.85"/>
                <circle cx="510" cy="130" r="7" fill="#D4574E" opacity="0.85"/>
                <circle cx="510" cy="510" r="7" fill="#5BA67D" opacity="0.85"/>
                <circle cx="130" cy="510" r="7" fill="#C47D3F" opacity="0.85"/>

                <!-- Dimension labels curved OUTSIDE the outer ring -->
                <text font-size="10" font-weight="600" font-family="'Sora', system-ui, sans-serif" fill="#E8A838" letter-spacing="0.04em" opacity="0.8">
                    <textPath href="#arcOutTL" startOffset="50%" text-anchor="middle">Stakeholder-Bindung</textPath>
                </text>
                <text font-size="10" font-weight="600" font-family="'Sora', system-ui, sans-serif" fill="#D4574E" letter-spacing="0.04em" opacity="0.8">
                    <textPath href="#arcOutTR" startOffset="50%" text-anchor="middle">Markt-Dynamik</textPath>
                </text>
                <text font-size="10" font-weight="600" font-family="'Sora', system-ui, sans-serif" fill="#5BA67D" letter-spacing="0.04em" opacity="0.8">
                    <textPath href="#arcOutBR" startOffset="50%" text-anchor="middle">Organisations-Reife</textPath>
                </text>
                <text font-size="10" font-weight="600" font-family="'Sora', system-ui, sans-serif" fill="#C47D3F" letter-spacing="0.04em" opacity="0.8">
                    <textPath href="#arcOutBL" startOffset="50%" text-anchor="middle">Führungs-Kapazität</textPath>
                </text>

                <!-- ============ SPANNUNGSFELDER RING ============ -->
                <circle cx="320" cy="320" r="188" stroke="#1A3A5C" stroke-width="0.6" opacity="0.08"/>

                <!-- WACHSTUM (top center) -->
                <g class="sf-group" onclick="showFieldFromModel('wachstum')">
                    <circle cx="320" cy="132" r="40" fill="#2968B2" class="sf-main-circle sf-dot" id="dot-wachstum"/>
                    <text x="320" y="135" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="12" font-weight="600" font-family="'Sora', system-ui, sans-serif" pointer-events="none">Wachstum</text>
                    <g class="sf-tooltip">
                        <rect x="221" y="67" width="198" height="36" rx="10" fill="white" stroke="#2968B2" stroke-width="1.2" opacity="0.97"/>
                        <text x="320" y="89" text-anchor="middle" fill="#1A3A5C" font-size="11" font-style="italic" font-family="'DM Sans', system-ui, sans-serif">Wachsen, ohne zu zerbrechen</text>
                    </g>
                </g>

                <!-- STABILITÄT (bottom-left) -->
                <g class="sf-group" onclick="showFieldFromModel('stabilitaet')">
                    <circle cx="152" cy="420" r="40" fill="#374F6B" class="sf-main-circle sf-dot" id="dot-stabilitaet"/>
                    <text x="152" y="423" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="12" font-weight="600" font-family="'Sora', system-ui, sans-serif" pointer-events="none">Stabilität</text>
                    <g class="sf-tooltip">
                        <rect x="57" y="466" width="190" height="36" rx="10" fill="white" stroke="#374F6B" stroke-width="1.2" opacity="0.97"/>
                        <text x="152" y="488" text-anchor="middle" fill="#374F6B" font-size="11" font-style="italic" font-family="'DM Sans', system-ui, sans-serif">Stabilität, die atmet</text>
                    </g>
                </g>

                <!-- ERNEUERUNG (bottom-right) -->
                <g class="sf-group" onclick="showFieldFromModel('erneuerung')">
                    <circle cx="488" cy="420" r="40" fill="#48A5D1" class="sf-main-circle sf-dot" id="dot-erneuerung"/>
                    <text x="488" y="423" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="11.5" font-weight="600" font-family="'Sora', system-ui, sans-serif" pointer-events="none">Erneuerung</text>
                    <g class="sf-tooltip">
                        <rect x="389" y="466" width="198" height="36" rx="10" fill="white" stroke="#48A5D1" stroke-width="1.2" opacity="0.97"/>
                        <text x="488" y="488" text-anchor="middle" fill="#1A3A5C" font-size="11" font-style="italic" font-family="'DM Sans', system-ui, sans-serif">Erneuern, ohne zu zerstören</text>
                    </g>
                </g>

                <!-- ============ INNER RING (simple circle, no arrows) ============ -->
                <circle cx="320" cy="320" r="112" stroke="#1A3A5C" stroke-width="0.8" opacity="0.08"/>

                <!-- Diagnostik (210° on circle, upper-left gap) -->
                <g transform="translate(223, 264)">
                    <circle cx="0" cy="0" r="18" fill="none" stroke="#2968B2" stroke-width="1.3" opacity="0.4"/>
                    <circle cx="0" cy="0" r="9" fill="none" stroke="#2968B2" stroke-width="1" opacity="0.45"/>
                    <circle cx="0" cy="0" r="3.5" fill="#2968B2" opacity="0.7"/>
                    <text x="0" y="30" text-anchor="middle" fill="#1A3A5C" font-size="9.5" font-weight="600" font-family="'Sora', system-ui, sans-serif">Diagnostik</text>
                </g>

                <!-- Begleitung (330° on circle, upper-right gap) -->
                <g transform="translate(417, 264)">
                    <rect x="-13" y="-13" width="26" height="26" rx="2.5" transform="rotate(45 0 0)" fill="none" stroke="#1A3A5C" stroke-width="1.3" opacity="0.4"/>
                    <circle cx="0" cy="0" r="3.5" fill="#1A3A5C" opacity="0.6"/>
                    <text x="0" y="30" text-anchor="middle" fill="#1A3A5C" font-size="9.5" font-weight="600" font-family="'Sora', system-ui, sans-serif">Begleitung</text>
                </g>

                <!-- Verantwortung (90° on circle, bottom center gap) -->
                <g transform="translate(320, 432)">
                    <rect x="-13" y="-13" width="26" height="26" rx="2.5" transform="rotate(45 0 0)" fill="#0F2440"/>
                    <text x="0" y="30" text-anchor="middle" fill="#1A3A5C" font-size="9.5" font-weight="600" font-family="'Sora', system-ui, sans-serif">Verantwortung</text>
                </g>

                <!-- ============ CORE ============ -->
                <circle cx="320" cy="320" r="80" fill="url(#corePulse)"/>
                <circle cx="320" cy="320" r="62" fill="url(#coreGlow)"/>
                <circle cx="320" cy="320" r="62" fill="none" stroke="#2968B2" stroke-width="0.8" opacity="0.25"/>
                <text x="320" y="312" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="8.5" font-weight="400" font-family="'Sora', system-ui, sans-serif" letter-spacing="0.03em" opacity="0.7">Unternehmerische</text>
                <text x="320" y="332" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="12" font-weight="700" font-family="'Sora', system-ui, sans-serif" letter-spacing="0.05em">Plastizität</text>

                <!-- Hint -->
                <text x="320" y="618" text-anchor="middle" fill="#8A97A8" font-size="7.5" font-family="'Sora', system-ui, sans-serif" opacity="0.4">Wählen Sie ein Spannungsfeld</text>
            </svg>
        </div>

        <!-- Differenzierung Banner (below SVG) -->
        <div class="diff-banner reveal">
            <p class="diff-banner-text">
                <strong>Kein Teamwechsel. Kein Kontextverlust.</strong> Dieselbe Person begleitet Sie von der ersten Analyse bis ins Gremium — mit der Erfahrung und dem Willen, gemeinsam Resultate zu erzielen.
            </p>
        </div>

        <!-- Spannungsfelder — WO -->
        <div class="sf-filter-intro reveal">
            <h2 class="section-headline">
                Wo braucht Ihr Unternehmen<br><strong>Plastizität?</strong>
            </h2>
            <p class="section-text">
                Drei Felder, in denen sich die Zukunftsfähigkeit eines Unternehmens entscheidet. Wählen Sie das Thema, das Sie aktuell beschäftigt — und sehen Sie, womit wir arbeiten.
            </p>
        </div>

        <div class="sf-instruction reveal" id="sf-instruction">
            <p>Wählen Sie ein Spannungsfeld</p>
        </div>

        <div class="sf-filter-tabs reveal">
            <div class="sf-tab" data-field="wachstum" onclick="showField('wachstum')">
                <div class="sf-tab-title">Wachstum</div>
                <div class="sf-tab-sub">Wachsen, ohne zu zerbrechen</div>
            </div>
            <div class="sf-tab" data-field="stabilitaet" onclick="showField('stabilitaet')">
                <div class="sf-tab-title">Stabilität</div>
                <div class="sf-tab-sub">Stabilität, die atmet</div>
            </div>
            <div class="sf-tab" data-field="erneuerung" onclick="showField('erneuerung')">
                <div class="sf-tab-title">Erneuerung</div>
                <div class="sf-tab-sub">Erneuern, ohne zu zerstören</div>
            </div>
        </div>

        <!-- Wachstum Panel -->
        <div class="sf-panel" id="panel-wachstum">
            <div class="sf-panel-header">
                <span class="sf-panel-title">Wachstum · 3 mögliche Ansätze</span>
            </div>
            <div class="leistung-grid">
                <div class="leistung-card" data-color="blue">
                    <div class="leistung-name">Wachstum, das von innen kommt</div>
                    <p class="leistung-methode">
                        Sie wachsen — aber hält Ihre Organisation Schritt? Wir klären, was sich ändern muss, in welcher Reihenfolge, und mit wem.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Skalierungs-Roadmap mit klarer Sequenz von heute bis Zielgrösse</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="blue">Skalierung</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
                <div class="leistung-card" data-color="blue">
                    <div class="leistung-name">Ein Zukauf, der wirklich passt</div>
                    <p class="leistung-methode">
                        Das Ziel sieht auf dem Papier gut aus — aber passt es wirklich? Wir prüfen, was klassische Due Diligence nicht abdeckt: kulturelle Passung, Integrationsfähigkeit und Identitätsrisiken.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Ganzheitliche Analyse des Targets — auch zu den unbequemen Fragen</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="blue">Integration</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
                <div class="leistung-card" data-color="blue">
                    <div class="leistung-name">Neue Wege, die sich lohnen</div>
                    <p class="leistung-methode">
                        Neue Märkte, Modelle oder Partnerschaften — aber verkraftet Ihr Unternehmen die zusätzliche Komplexität? Wir bewerten die Chance und Ihre Fähigkeit, sie umzusetzen.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Strategische Bewertung mit Umsetzungsplan und Partner-Empfehlung</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="blue">Diversifikation</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
            </div>
            <div class="sf-panel-cta">
                <a href="#austausch">Gemeinsam Wachstum gestalten</a>
            </div>
        </div>

        <!-- Stabilität Panel -->
        <div class="sf-panel" id="panel-stabilitaet">
            <div class="sf-panel-header">
                <span class="sf-panel-title">Stabilität · 2 mögliche Ansätze</span>
            </div>
            <div class="leistung-grid cols-2">
                <div class="leistung-card" data-color="navy">
                    <div class="leistung-name">Strukturen, die mitwachsen</div>
                    <p class="leistung-methode">
                        Ihr Unternehmen hat sich verändert — Ihre Strukturen auch? Wir prüfen, ob VR, GL und Entscheidungswege noch zur heutigen Realität passen.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Governance-Setup, das Stabilität und Handlungsfähigkeit verbindet</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="navy">Ordnung</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
                <div class="leistung-card" data-color="navy">
                    <div class="leistung-name">Eine Kultur, die trägt</div>
                    <p class="leistung-methode">
                        Ist Ihre Kultur ein Stabilitätsanker — oder eine starre Hülle? Wir finden heraus, wo sie Kraft gibt und wo sie verwundbar macht.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Kulturelle Standortbestimmung mit konkreten Massnahmen auf GL-/VR-Ebene</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="navy">Fundament</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
            </div>
            <div class="sf-panel-cta">
                <a href="#austausch">Stabilität gemeinsam stärken</a>
            </div>
        </div>

        <!-- Erneuerung Panel -->
        <div class="sf-panel" id="panel-erneuerung">
            <div class="sf-panel-header">
                <span class="sf-panel-title">Erneuerung · 3 mögliche Ansätze</span>
            </div>
            <div class="leistung-grid">
                <div class="leistung-card" data-color="accent">
                    <div class="leistung-name">Digitalisierung, die Sinn macht</div>
                    <p class="leistung-methode">
                        Wo schafft Digitalisierung echten Wert — und wo ist sie nur Rauschen? Eine ehrliche Standortbestimmung, priorisiert nach Geschäftswirkung statt Technologie-Trends.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Digitale Standortbestimmung mit strategischer Priorisierung</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="accent">Infrastruktur</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
                <div class="leistung-card" data-color="accent">
                    <div class="leistung-name">AI, die Wirkung zeigt</div>
                    <p class="leistung-methode">
                        Alle reden von AI — aber wo bewegt sie bei Ihnen wirklich etwas? Von der strategischen Richtung über konkrete Use Cases bis zum Operating Model. Eine AI-Strategie, keine Pilot-Sammlung.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">AI-Strategie mit Operating Model, priorisierten Use Cases und Umsetzungsplan</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="accent">Werkzeug</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
                <div class="leistung-card" data-color="accent">
                    <div class="leistung-name">Eine Vision, die führt</div>
                    <p class="leistung-methode">
                        Stimmt die Richtung noch? Passt Ihr Unternehmenszweck zur veränderten Realität? Ein Entwicklungsprozess mit Ihrer Führung — kein Einmal-Workshop.
                    </p>
                    <div class="leistung-ergebnis">
                        <div class="leistung-ergebnis-label">Ergebnis</div>
                        <div class="leistung-ergebnis-text">Erneuerte Vision und Zweckdefinition, die von der Führung getragen wird</div>
                    </div>
                    <div class="leistung-footer">
                        <span class="leistung-ebene" data-color="accent">Kompass</span>
                        <a href="#austausch" class="leistung-cta">Ansatz besprechen →</a>
                    </div>
                </div>
            </div>
            <div class="sf-panel-cta">
                <a href="#austausch">Erneuerung gemeinsam angehen</a>
            </div>
        </div>

        <!-- Challenge Banner -->
        <div class="challenge-banner reveal">
            <h3>Ihr Thema ist keines davon?</h3>
            <p>Modelle helfen – aber sie lösen nicht jedes Thema. Fordern Sie mich heraus mit dem, was Sie aktuell am meisten beschäftigt. Ich arbeite einen Tag mit Ihnen am Kern. Wenn danach kein spürbarer Mehrwert entsteht, tragen Sie kein Risiko: Der Tag geht auf mich – ich nehme die Erkenntnisse mit.</p>
            <a href="#austausch" class="btn-challenge">Herausforderung schildern →</a>
        </div>`;

export function Leistungen() {
  return (
    <section className="leistungen-section" id="leistungen" dangerouslySetInnerHTML={ { __html: HTML } } />
  );
}
