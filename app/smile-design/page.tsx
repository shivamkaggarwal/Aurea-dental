export default function SmileDesignPage() {
  return (
    <main className="smile-page">

      {/* =====================================================
          SMILE DESIGN — HERO
          ===================================================== */}

      <section className="smile-hero">

        <div className="smile-hero-content">

          {/* LEFT — COPY */}
          <div className="smile-hero-copy">

            <span className="smile-eyebrow">
              SMILE DESIGN
            </span>

            <h1>
              A smile
              <br />
              designed
              <br />
              around you.
            </h1>

            <p>
              Thoughtful aesthetic dentistry designed to enhance
              your natural smile while keeping your features,
              comfort and individuality at the centre.
            </p>

            <a
              href="/#contact"
              className="smile-hero-cta"
            >
              Book a consultation
              <span>↗</span>
            </a>

          </div>


          {/* RIGHT — IMAGE */}
          <div className="smile-hero-visual">

            <img
              src="/treatment-smile-design.png"
              alt="Smile Design treatment"
            />

            <div className="smile-hero-tag">

              <span>01</span>

              <p>
                Thoughtful
                <br />
                aesthetic refinement.
              </p>

            </div>

          </div>

        </div>


        {/* HERO FOOTER */}
        <div className="smile-hero-bottom">

          <span>
            01 — SMILE DESIGN
          </span>

          <span>
            PERSONALISED AESTHETIC DENTISTRY
          </span>

        </div>

      </section>


      {/* =====================================================
          INTRO SECTION
          ===================================================== */}

      <section
        id="smile-intro"
        className="smile-intro"
      >

        <div className="smile-intro-label">
          OUR APPROACH
        </div>

        <div className="smile-intro-content">

          <h2>
            Your smile,
            <br />
            thoughtfully refined.
          </h2>

          <p>
            Smile Design is a personalised approach to
            aesthetic dentistry. Every detail is considered
            around your natural features, proportions and
            individual goals.
          </p>

        </div>

      </section>

    </main>
  );
}