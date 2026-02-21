const HTML = String.raw`<div class="plasticity-inner">
            <div class="plasticity-content reveal">
                <span class="section-label">Unsere Philosophie</span>
                <h2 class="section-headline">
                    Warum <strong>Plastizität</strong> —<br>und nicht der nächste starre Strategieplan.
                </h2>
                <p class="section-text">
                    Die Welt, in der starre Strategiepläne funktionierten, gibt es nicht mehr. Märkte verschieben sich schneller, als Strategien geschrieben werden. Regulierung, Technologie, Fachkräftemangel — alles gleichzeitig, alles beschleunigt. Schweizer KMU stehen dabei vor einem besonderen Spannungsfeld: Sie müssen wachsen, stabil bleiben und sich erneuern — oft gleichzeitig, mit begrenzten Ressourcen.
                </p>
                <p class="section-text philo-accent">
                    Wir nennen die Fähigkeit, die das erfordert, <em>unternehmerische Plastizität</em> — die Kapazität eines Unternehmens, seine Strukturen, Prozesse und Kompetenzen laufend umzubauen, ohne dabei seine Identität, Kultur und Stärken zu verlieren.
                </p>
                <p class="section-text">
                    Der Begriff kommt aus der Neurowissenschaft: So wie das Gehirn sich durch neue Verbindungen ständig neu organisiert, müssen Unternehmen lernen, sich strukturell zu verändern, ohne zu brechen.
                </p>
                <p class="section-text">
                    Plastizität ist kein Projekt mit Enddatum. Sie ist eine Eigenschaft, die man aufbaut — oder verliert. Trillema existiert, um diese Eigenschaft in Schweizer KMU zu stärken. Nicht mit Frameworks an der Wand, sondern mit persönlicher Verantwortung in der Umsetzung.
                </p>
                <a href="#austausch" class="btn-primary-on-dark">Sprechen wir darüber</a>
            </div>
            <div class="plasticity-visual reveal reveal-delay-2">
                <div class="philo-image-frame">
                    <!-- Replace with real image: src="images/plasticity-roots.jpg" -->
                    <img src="/images/plasticity-roots.jpg" alt="Neuronales Netzwerk in Gehirnform — Sich verändern, ohne den Kern zu verlieren">
                    <div class="philo-image-caption">
                        Sich verändern, ohne den Kern zu verlieren.
                    </div>
                </div>
            </div>
        </div>`;

export function Philosophie() {
  return (
    <section className="plasticity-section" id="philosophie" dangerouslySetInnerHTML={ { __html: HTML } } />
  );
}
