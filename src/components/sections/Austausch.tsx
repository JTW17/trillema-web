const HTML = String.raw`<div class="contact-inner">
            <span class="section-label">Austausch</span>
            <h2 class="contact-headline reveal">
                Sprechen wir<br><strong>darüber.</strong>
            </h2>
            <p class="contact-sub reveal">
                Echte Zusammenarbeit entsteht durch gemeinsam investierte Zeit. Lassen Sie uns in einem ersten Gespräch Ihre Situation gemeinsam durchdenken.
            </p>
            <div class="contact-direct reveal">
                <div class="contact-item">
                    <div class="contact-item-label">E-Mail</div>
                    <a href="/cdn-cgi/l/email-protection#e0838f8e8e858394a09492898c8c858d81ce838f8d"><span class="__cf_email__" data-cfemail="9af9f5f4f4fff9eedaeee8f3f6f6fff7fbb4f9f5f7">[email&#160;protected]</span></a>
                </div>
                <div class="contact-item">
                    <div class="contact-item-label">Telefon</div>
                    <a href="tel:+41765798606">+41 76 579 86 06</a>
                </div>
                <div class="contact-item">
                    <div class="contact-item-label">Standort</div>
                    <a href="https://maps.google.com/?q=Mattenweg+1,+5223+Riniken,+Switzerland" target="_blank" rel="noopener" class="contact-address-link">
                        Mattenweg 1, CH-5223 Riniken
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style="vertical-align: -1px; margin-left: 4px; opacity: 0.5;"><path d="M5 3h8v8M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </div>
            </div>
        </div>`;

export function Austausch() {
  return (
    <section className="contact-section" id="austausch" dangerouslySetInnerHTML={ { __html: HTML } } />
  );
}
