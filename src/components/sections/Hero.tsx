export function Hero() {
  return (
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
            <animateTransform attributeName="transform" type="rotate" values="0 720 450;360 720 450" dur="150s" repeatCount="indefinite" />
          </path>

          <path d="M720 180 L1050 680 L390 680 Z" stroke="rgba(41,104,178,0.1)" strokeWidth="0.5" fill="none">
            <animateTransform attributeName="transform" type="rotate" values="360 720 450;0 720 450" dur="200s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-label">Für KMU, die sich wandeln — ohne sich zu verlieren</div>
        <h1 className="hero-headline">
          Wachsen. Stabilisieren. Erneuern.<br />
          <strong>Gleichzeitig.</strong>
        </h1>

        <div className="hero-bridge">
          <span className="hero-bridge-equation">Dieses Trilemma meistern = unternehmerische Plastizität</span>
          <span className="hero-bridge-definition">Die Fähigkeit zur dauerhaften Veränderung unter Belastung</span>
        </div>

        <p className="hero-sub">
          Wachstum, Stabilität und Erneuerung gleichzeitig zu meistern, ist eine der grössten Herausforderungen für KMU. Wir verbinden strategische Tiefe mit
          operativer Umsetzung — auf C-Level, im Verwaltungsrat/Beirat oder als Sparring Partner.
        </p>

        <div className="hero-cta-row">
          <a href="#austausch" className="btn-primary">
            Sprechen wir darüber
          </a>
          <a href="#philosophie" className="btn-secondary">
            Unsere Philosophie
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Entdecken
      </div>
    </section>
  );
}
