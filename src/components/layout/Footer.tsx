export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/brand/logo-white.svg" alt="Trillema" />
      </div>

      <div className="footer-right">
        <a href="/impressum">Impressum</a>
        <span className="footer-sep" aria-hidden="true">|</span>
        <a href="/datenschutz">Datenschutz</a>
        <span className="footer-sep" aria-hidden="true">|</span>
        <span className="footer-copy">© 2026 Trillema GmbH. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
}
