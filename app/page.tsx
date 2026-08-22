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

{/* =====================================================
    TECHNOLOGY
===================================================== */}

<section className="technology-section" id="technology">

  {/* LEFT — SCAN VISUAL */}
  <div className="technology-visual">

    <div className="scan-orbit scan-orbit-1"></div>
    <div className="scan-orbit scan-orbit-2"></div>

    <div className="scan-center">
      <span>3D SCAN</span>
    </div>

    <div className="scan-line"></div>

    <div className="scan-corner scan-corner-tl"></div>
    <div className="scan-corner scan-corner-br"></div>

  </div>


  {/* RIGHT — CONTENT */}
  <div className="technology-content">

    <div className="section-eyebrow technology-eyebrow">
      TECHNOLOGY WITH PURPOSE
    </div>

    <h2>
      Precision at every step.
    </h2>

    <p className="technology-description">
      Technology should be explained through patient benefits —
      comfort, accuracy and better-informed treatment planning.
    </p>


    <div className="technology-list">

      <div className="technology-card">
        <div className="technology-card-title">
          <span>01</span>
          <strong>3D Imaging</strong>
        </div>

        <p>
          Detailed visualization to support accurate treatment planning.
        </p>
      </div>


      <div className="technology-card">
        <div className="technology-card-title">
          <span>02</span>
          <strong>Digital Scanning</strong>
        </div>

        <p>
          A modern, comfortable alternative to traditional impressions.
        </p>
      </div>


      <div className="technology-card">
        <div className="technology-card-title">
          <span>03</span>
          <strong>Guided Treatment</strong>
        </div>

        <p>
          Digitally planned workflows designed for precision and predictability.
        </p>
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

        <div className="doctor-image-glow"></div>

        <div className="doctor-portrait">
          <span>DR</span>
        </div>

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

        <div className="doctor-image-glow"></div>

        <div className="doctor-portrait">
          <span>DR</span>
        </div>

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