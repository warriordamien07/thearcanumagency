"use client";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" aria-label="The Arcanum Agency — home">
              <img className="footer-logo" src="/assets/logo_desktop.svg" alt="The Arcanum Agency" width={512} height={225} />
            </a>
          </div>
          <div className="footer-filler">
            <form className="footer-form" action="#" onSubmit={(e) => e.preventDefault()} aria-label="Email signup">
              <label className="footer-form-label" htmlFor="footerEmail">
                know first
              </label>
              <div className="footer-form-row">
                <input id="footerEmail" type="email" placeholder="Email address" aria-label="Email address" required />
                <button type="submit" aria-label="Subscribe">
                  <span className="card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M0 6H30M30 6L23 1M30 6L23 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="butt" strokeLinejoin="miter" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="footer-filler">
            <p>
              Currently working privately. If capacity is full, we will say so plainly and, where useful, suggest an alternative. Select work available on request.
            </p>
          </div>
          <div className="footer-stack">
            <div className="footer-stack-inner">
              <nav className="footer-col" aria-label="Services">
                <h3 className="footer-col-title">Services</h3>
                <ul>
                  <li><a href="#services">Web Design & Development</a></li>
                  <li><a href="#services">Branding & Identity</a></li>
                  <li><a href="#services">SEO & AI Optimization</a></li>
                  <li><a href="#services">Ecommerce</a></li>
                  <li><a href="#services">Website Support & Hosting</a></li>
                  <li><a href="#services">Website Review</a></li>
                </ul>
              </nav>
              <nav className="footer-col" aria-label="Studio">
                <h3 className="footer-col-title">Studio</h3>
                <ul>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#journal">Journal</a></li>
                  <li><a href="mailto:hello@thearcanum.agency?subject=Enquiry%2C%20The%20Arcanum%20Agency">Reach Out</a></li>
                </ul>
              </nav>
              <div className="footer-col" aria-label="Contact">
                <h3 className="footer-col-title">Contact</h3>
                <ul className="footer-contact-list">
                  <li><a href="mailto:hello@thearcanum.agency">hello@thearcanum.agency</a></li>
                  <li>
                    <a href="https://wa.me/2347072309902" target="_blank" rel="noopener">
                      WhatsApp +234 707 230 9902
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 thearcanum.agency</span>
          <span>Built to be unmistakable.</span>
          <span>
            <a href="#">Terms</a> <a href="#">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}