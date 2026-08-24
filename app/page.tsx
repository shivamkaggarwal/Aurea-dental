import Link from "next/link";
import BeforeAfter from "./components/BeforeAfter";
import Reviews from "./components/reviews";
import Gallery from "./components/Gallery";
import PatientJourney from "./components/PatientJourney";
import FinalCTA from "./components/FinalCTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <Link href="/" className="logo">
          Aurea <span>DENTAL</span>
        </Link>

        <nav className="nav-links">
          <a href="#treatments">Treatments</a>
          <a href="#about">About</a>
          <a href="#doctors">Doctors</a>
          <a href="#results">Results</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        <a href="#consultation" className="nav-cta">
          Book a consultation
        </a>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            AUREA DENTAL — PERSONALIZED, MODERN DENTISTRY
          </p>

          <h1>
            A better smile,
            <br />
            <span>beautifully</span>
            <br />
            designed.
          </h1>

          <p className="hero-description">
            Advanced dentistry, personalized care, and naturally beautiful
            results — designed around you.
          </p>

          <div className="hero-actions">
            <a href="#consultation" className="primary-button">
              Book a consultation
            </a>

            <a href="#treatments" className="secondary-button">
              Explore treatments
            </a>
          </div>

          <div className="trust-row">
            <div className="trust-dots">
              <span />
              <span />
              <span />
            </div>

            <strong>Trusted by 2,500+ smiles</strong>

            <div className="stars">★★★★★</div>
          </div>
        </div>

        {/* Temporary 3D area */}
        <div className="hero-visual">

  <div className="visual-label">
    SMILE DESIGN
  </div>

  <div className="tooth-float">
    <img
      src="/publictooth-heart.png"
      alt="Aurea Dental tooth"
    />
  </div>

  <div className="signature-card">
    <small>SIGNATURE PLAN</small>
    <strong>Smile refinement</strong>
  </div>

</div>
        
      </section>

      {/* =====================================================
    ABOUT / AUREA APPROACH
===================================================== */}

<section className="about-section" id="about">

  <div className="about-top">

    <div className="about-label">
      THE AUREA APPROACH
    </div>

  </div>

  <div className="about-content">

    <div className="about-image">
      <img
        src="/personalized-smile.png"
        alt="Natural smile and personalized dental care"
      />
    </div>

    <div className="about-intro">
      <h2>
        Personalized dentistry,
        <br />
        designed around you.
      </h2>

      <p>
        At Aurea Dental, every smile begins with understanding you.
        Our approach combines modern technology, thoughtful planning
        and refined clinical care to create results that feel natural,
        personal and built to last.
      </p>
    </div>

  </div>

</section>


  
     

{/* =====================================================
    TREATMENTS
===================================================== */}

<section className="treatments-section" id="treatments">

  <div className="treatments-intro">

    <div className="section-eyebrow">
      OUR TREATMENTS
    </div>

   <div className="treatments-heading-row">

  <h2>
    A considered approach
    <br />
    to every smile.
  </h2>

  <div className="treatments-heading-bottom">

    <p>
      From subtle refinements to complete smile transformations, every
      treatment is planned around your features, comfort and long-term
      oral health.
    </p>

    <div className="treatment-index">

      <a href="#smile-design" className="treatment-index-item">
        <span className="treatment-index-number">01</span>
        <span className="treatment-index-name">Smile Design</span>
        <span className="treatment-index-arrow">↗</span>
      </a>

      <a href="#align-refine" className="treatment-index-item">
        <span className="treatment-index-number">02</span>
        <span className="treatment-index-name">Align &amp; Refine</span>
        <span className="treatment-index-arrow">↗</span>
      </a>

      <a href="#implant-restore" className="treatment-index-item">
        <span className="treatment-index-number">03</span>
        <span className="treatment-index-name">Implant &amp; Restore</span>
        <span className="treatment-index-arrow">↗</span>
      </a>

      <a href="#whitening-care" className="treatment-index-item">
        <span className="treatment-index-number">04</span>
        <span className="treatment-index-name">Whitening &amp; Care</span>
        <span className="treatment-index-arrow">↗</span>
      </a>

    </div>

  </div>

</div>

  </div>


  <div className="treatments-grid">

    {/* 01 — SMILE DESIGN */}

    <article id="smile-design" className="treatment-card treatment-card-large">

      <div className="treatment-image treatment-image-smile">

  <span className="treatment-number">
    01
  </span>

  <img
    src="/treatment-smile-design.png"
    alt="Smile Design treatment"
  />

</div>
      <div className="treatment-content">

        <div>

          <span className="treatment-kicker">
            AESTHETIC DENTISTRY
          </span>

          <h3>
            Smile Design
          </h3>

          <p>
            Thoughtful aesthetic refinements designed
            to create a natural, balanced smile.
          </p>

        </div>

        <a href="#smile-design" className="treatment-link">
  Explore treatment <span>↗</span>
</a>

      </div>

    </article>


    {/* 02 — ALIGN */}

    <article id="align-refine" className="treatment-card">

      <div className="treatment-image treatment-image-align">

        <span className="treatment-number">
          02
        </span>

       <div className="treatment-visual">
  <img
    src="/treatment-align-refine.png"
    alt="Align & Refine treatment"
  />
</div>

      </div>

      <div className="treatment-content">

        <div>

          <span className="treatment-kicker">
            ORTHODONTICS
          </span>

          <h3>
            Align &amp; Refine
          </h3>

          <p>
            Modern alignment solutions for a confident,
            naturally balanced smile.
          </p>

        </div>

       <a href="#align-refine" className="treatment-link">
  Explore treatment <span>↗</span>
</a>

      </div>

    </article>


    {/* 03 — RESTORE */}

    <article id="implant-restore" className="treatment-card">

      <div className="treatment-image treatment-image-restore">

        <span className="treatment-number">
          03
        </span>
<div className="treatment-visual">
  <img
    src="/treatment-implant-restore.png"
    alt="Implant & Restore treatment"
  />
</div>

      </div>

      <div className="treatment-content">

        <div>

          <span className="treatment-kicker">
            RESTORATIVE DENTISTRY
          </span>

          <h3>
            Implant &amp; Restore
          </h3>

          <p>
            Precise restorative care focused on
            function, longevity and natural aesthetics.
          </p>

        </div>

        <a href="#implant-restore" className="treatment-link">
  Explore treatment <span>↗</span>
</a>

      </div>

    </article>


    {/* 04 — CARE */}

   <article id="whitening-care" className="treatment-card">

      <div className="treatment-image treatment-image-care">

        <span className="treatment-number">
          04
        </span>

        <div className="treatment-visual">
  <img
    src="/treatment-whitening-care.png"
    alt="Whitening & Care treatment"
  />
</div>

      </div>

      <div className="treatment-content">

        <div>

          <span className="treatment-kicker">
            PREVENTIVE CARE
          </span>

          <h3>
            Whitening &amp; Care
          </h3>

          <p>
            Professional maintenance and whitening
            for a fresh, healthy-looking smile.
          </p>

        </div>

        <a href="#whitening-care" className="treatment-link">
  Explore treatment <span>↗</span>
</a>

      </div>

    </article>

  </div>

</section>

{/* =========================================
    TECHNOLOGY — DIGITAL DIAGNOSTICS
========================================= */}

<section className="tech-v2" id="technology">

  {/* LEFT — DIGITAL SCAN EXPERIENCE */}
  <div className="tech-v2-visual">

    <div className="tech-v2-top-label">
      <span className="tech-v2-status-dot"></span>
      DIGITAL DIAGNOSTICS
    </div>

    <div className="tech-v2-corner tech-v2-corner-tl"></div>
    <div className="tech-v2-corner tech-v2-corner-tr"></div>
    <div className="tech-v2-corner tech-v2-corner-bl"></div>
    <div className="tech-v2-corner tech-v2-corner-br"></div>

    {/* Diagnostic information */}
    <div className="tech-v2-data tech-v2-data-left">
      <span>01</span>
      <strong>CAPTURE</strong>
    </div>

    <div className="tech-v2-data tech-v2-data-right">
      <span>02</span>
      <strong>ANALYZE</strong>
    </div>

    <div className="tech-v2-data tech-v2-data-bottom">
      <span>03</span>
      <strong>PLAN</strong>
    </div>

    {/* Scan grid */}
    <div className="tech-v2-grid"></div>

    {/* Rotating scan rings */}
    <div className="tech-v2-ring tech-v2-ring-1"></div>
    <div className="tech-v2-ring tech-v2-ring-2"></div>
    <div className="tech-v2-ring tech-v2-ring-3"></div>

   

    {/* Main scan beam */}
    <div className="tech-v2-scan-beam"></div>

    {/* Center information */}
    <div className="tech-v2-center">

      <div className="tech-v2-center-small">
        INTRAORAL DIGITAL MODEL
      </div>

      <div className="tech-v2-center-title">
        3D
      </div>

      <div className="tech-v2-center-subtitle">
        SCAN
      </div>

      <div className="tech-v2-center-line"></div>

      <div className="tech-v2-center-status">
        ANALYSIS READY
      </div>

    </div>

    {/* Bottom technical status */}
    <div className="tech-v2-footer-left">
      SCAN SYSTEM
    </div>

    <div className="tech-v2-footer-right">
      <span></span>
      READY
    </div>

  </div>


  {/* RIGHT — CONTENT */}
  <div className="tech-v2-content">

    <div className="tech-v2-eyebrow">
      TECHNOLOGY WITH PURPOSE
    </div>

    <h2>
      See your smile
      <br />
      <span>in greater detail.</span>
    </h2>

    <p className="tech-v2-description">
      Advanced digital technology helps us understand your teeth,
      plan treatment precisely, and make every step more predictable.
    </p>


    {/* CARD 01 */}
    <div className="tech-v2-card">

      <div className="tech-v2-card-number">
        01
      </div>

      <div className="tech-v2-card-content">

        <div className="tech-v2-card-heading">
          <h3>3D Imaging</h3>
          <span>↗</span>
        </div>

        <p>
          Detailed digital visualization to support accurate
          treatment planning.
        </p>

      </div>

    </div>


    {/* CARD 02 */}
    <div className="tech-v2-card">

      <div className="tech-v2-card-number">
        02
      </div>

      <div className="tech-v2-card-content">

        <div className="tech-v2-card-heading">
          <h3>Digital Scanning</h3>
          <span>↗</span>
        </div>

        <p>
          A modern, comfortable alternative to traditional
          dental impressions.
        </p>

      </div>

    </div>


    {/* CARD 03 */}
    <div className="tech-v2-card">

      <div className="tech-v2-card-number">
        03
      </div>

      <div className="tech-v2-card-content">

        <div className="tech-v2-card-heading">
          <h3>Guided Treatment</h3>
          <span>↗</span>
        </div>

        <p>
          Digitally planned workflows designed for precision,
          comfort and predictable results.
        </p>

      </div>

    </div>


    {/* PROCESS */}
    <div className="tech-v2-process">

      <div className="tech-v2-process-item active">
        <span>01</span>
        <strong>SCAN</strong>
      </div>

      <div className="tech-v2-process-line"></div>

      <div className="tech-v2-process-item">
        <span>02</span>
        <strong>PLAN</strong>
      </div>

      <div className="tech-v2-process-line"></div>

      <div className="tech-v2-process-item">
        <span>03</span>
        <strong>TREAT</strong>
      </div>

    </div>

  </div>

</section>

{/* =====================================================
    DOCTORS
===================================================== */}

<section className="doctors-section" id="doctors">

  <div className="doctors-heading">

  <div className="doctors-eyebrow">
    MEET YOUR DENTIST
  </div>

  <div className="doctor-sign-wrap">
    <img
      src="/doctor-sign.png"
      alt=""
      className="doctor-sign"
    />
  </div>

  <div className="doctor-specialties">
  AESTHETIC&nbsp;&nbsp;•&nbsp;&nbsp;RESTORATIVE&nbsp;&nbsp;•&nbsp;&nbsp;ALIGNMENT
</div>


  <div className="doctors-heading-content">
    <h2>
      Expertise with
      <br />
      a human touch.
    </h2>

    <p>
      Experienced clinicians, thoughtful treatment
      planning and a commitment to making every
      visit feel comfortable, clear and personal.
    </p>
  </div>

</div>


  <div className="doctors-grid">

    {/* DOCTOR 01 */}

    <article className="doctor-card">

      <div className="doctor-image">
  <img
    src="/doctor-aarav.jpg"
    alt="Dr. Aarav Mehta"
    className="doctor-photo"
  />

  <div className="doctor-image-glow"></div>

  <div className="doctor-number">
    01
  </div>

  <div className="doctor-specialty">
    AESTHETIC
  </div>
</div>


      <div className="doctor-info">

        <div>
          <span className="doctor-kicker">
            AESTHETIC &amp; RESTORATIVE DENTISTRY
          </span>

          <h3>
            Dr. Aarav Mehta
          </h3>

          <p>
            Focused on creating natural-looking smiles
            through thoughtful aesthetic and restorative care.
          </p>
        </div>

        <button className="doctor-link">
          View profile <span>↗</span>
        </button>

      </div>

    </article>


    {/* DOCTOR 02 */}

    <article className="doctor-card doctor-card-offset">

     <div className="doctor-image doctor-image-blue">
  <img
    src="/doctor-ananya.jpg"
    alt="Dr. Ananya Kapoor"
    className="doctor-photo"
  />

  <div className="doctor-image-glow"></div>

  <div className="doctor-number">
    02
  </div>

  <div className="doctor-specialty">
    ALIGNMENT
  </div>
</div>

      <div className="doctor-info">

        <div>
          <span className="doctor-kicker">
            ORTHODONTICS &amp; ALIGNMENT
          </span>

          <h3>
            Dr. Ananya Kapoor
          </h3>

          <p>
            Combining modern orthodontic techniques with
            a careful, patient-first approach to alignment.
          </p>
        </div>

        <button className="doctor-link">
          View profile <span>↗</span>
        </button>

      </div>

    </article>

  </div>


  <div className="doctors-bottom">

    <span>
      CLINICAL TEAM
    </span>

    <p>
      Collaborative care. Modern dentistry.
      One thoughtful approach to every smile.
    </p>

  </div>

</section>

{/* RESULTS */}
<BeforeAfter />

<Reviews />

<Gallery />

<PatientJourney />

<FinalCTA />

<ContactSection />
<Footer />
    </main>
  );
}