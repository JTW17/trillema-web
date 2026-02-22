export default function Ueber() {
  return (
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
  );
}
