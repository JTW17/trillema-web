export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/brand/logo-white.svg" alt="Trillema" />
      </div>

      <div className="footer-links">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>

      <div className="footer-copy">&copy; {new Date().getFullYear()} Trillema GmbH. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
