import { site } from "@/lib/site";

export function Austausch() {
  return (
    <section className="contact-section" id="austausch">
      <div className="contact-inner">
        <span className="section-label">Austausch</span>

        <h2 className="contact-headline reveal">
          Sprechen wir<br />
          <strong>darüber.</strong>
        </h2>

        <p className="contact-sub reveal">
          Echte Zusammenarbeit entsteht durch gemeinsam investierte Zeit. Lassen Sie uns in einem ersten Gespräch Ihre Situation gemeinsam durchdenken.
        </p>

        <div className="contact-direct reveal">
          <div className="contact-item">
            <div className="contact-item-label">E-Mail</div>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>

          <div className="contact-item">
            <div className="contact-item-label">Telefon</div>
            <a href={`tel:${site.contact.phone}`}>{site.contact.phoneDisplay}</a>
          </div>

          <div className="contact-item">
            <div className="contact-item-label">Standort</div>
            <a
              href={site.contact.mapsUrl}
              target="_blank"
              rel="noopener"
              className="contact-address-link"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <span>{site.contact.address}</span>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.5 }}>
                <path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
