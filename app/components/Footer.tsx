export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <p className="footer-eyebrow">
            AUREA³ DENTAL
          </p>

          <h2>
            Thoughtful dentistry.
            <br />
            Naturally beautiful results.
          </h2>

          <a href="#booking" className="footer-cta">
            Book a consultation
            <span>↗</span>
          </a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <p className="footer-column-title">
            CONTACT
          </p>

          <a href="tel:+19085550123">(908) 555-0123</a>

          <a href="https://wa.me/19085550123">WhatsApp</a>

          <a href="mailto:hello@aureadental.com">
            hello@aureadental.com
          </a>

          <p>
            55 Woodland Avenue
            <br />
            Summit, NJ 07901
          </p>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <p className="footer-column-title">
            EXPLORE
          </p>

          <a href="#top">Home</a>
          <a href="#treatments">Treatments</a>
          <a href="#about">About</a>
          <a href="#doctors">Doctors</a>
          <a href="#results">Results</a>
          <a href="#testimonials">Patient Stories</a>
          <a href="#booking">Contact</a>
        </div>

        {/* TREATMENTS */}
        <div className="footer-column">
          <p className="footer-column-title">
            TREATMENTS
          </p>

          <a href="#smile-design">Smile Design</a>

          <a href="#align-refine">Align & Refine</a>

          <a href="#implant-restore">Implant & Restore</a>

          <a href="#whitening-care">Whitening & Care</a>

          <a href="#family-general">Family & General Dentistry</a>

          <a href="#emergency-care">Emergency Dental Care</a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <p>
          © 2026 Aurea Dental. All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms">
            Terms & Conditions
          </a>

          <a href="/accessibility">
            Accessibility
          </a>

          <a href="/cookies">
            Cookie Policy
          </a>
        </div>

      </div>

    </footer>
  );
}