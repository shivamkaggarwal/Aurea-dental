"use client";

export default function ContactSection() {
  const whatsappNumber = "91XXXXXXXXXX";

  return (
    <>
      <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-intro">

          <p className="contact-eyebrow">
            PRIVATE CONSULTATION
          </p>

          <h2>
            Let&apos;s talk
            <br />
            about your smile.
          </h2>

          <p className="contact-description">
            Thoughtful care starts with a conversation.
            Tell us what you&apos;re looking for and our
            team will help you find the right next step.
          </p>

          <div className="contact-methods">

            <a href="tel:+919XXXXXXXXX" className="contact-method">
              <span className="contact-method-icon">↗</span>
              <span>
                <small>Call the clinic</small>
                <strong>+91 9XXXXXXXXX</strong>
              </span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <span className="contact-method-icon">↗</span>
              <span>
                <small>WhatsApp us</small>
                <strong>Start a conversation</strong>
              </span>
            </a>

            <a
              href="mailto:hello@aureadental.com"
              className="contact-method"
            >
              <span className="contact-method-icon">↗</span>
              <span>
                <small>Email</small>
                <strong>hello@aureadental.com</strong>
              </span>
            </a>

          </div>

          <div className="contact-hours">
            <span>CLINIC HOURS</span>
            <p>
              Monday – Friday · 9:00 AM – 6:00 PM
              <br />
              Saturday · By appointment
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="contact-form-card">

          <div className="contact-form-heading">
            <p>YOUR DETAILS</p>
            <h3>How can we help?</h3>
          </div>

          <form>

            <div className="contact-form-row">

              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>

            </div>

            <label>
              Phone / WhatsApp
              <input
                type="tel"
                name="phone"
                placeholder="+91"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us a little about what you&apos;re looking for..."
              />
            </label>

            <div className="contact-preference">

              <span>Preferred contact</span>

              <div className="contact-options">

                <label>
                  <input
                    type="radio"
                    name="contactPreference"
                    value="call"
                  />
                  <span>Call</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="contactPreference"
                    value="whatsapp"
                  />
                  <span>WhatsApp</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="contactPreference"
                    value="email"
                  />
                  <span>Email</span>
                </label>

              </div>

            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Book a consultation
              <span>↗</span>
            </button>

            <p className="contact-disclaimer">
              By submitting this form, you agree to be
              contacted regarding your consultation.
            </p>

          </form>

        </div>

      </div>
    </section>

    {/* LOCATION */}
<section className="location-section">
  <div className="location-inner">

    <div className="location-header">
      <div>
        <p className="location-eyebrow">
          FIND AUREA DENTAL
        </p>

        <h2>
          Visit us.
          <br />
          Your smile starts here.
        </h2>
      </div>

      <p className="location-description">
        A private, comfortable environment designed around
        thoughtful care and a relaxed patient experience.
      </p>
    </div>

    <div className="location-map-wrapper">

      {/* GOOGLE MAP */}
      <iframe
        className="location-map"
        src="https://www.google.com/maps?q=55+Woodland+Avenue,+Summit,+NJ+07901&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Aurea Dental location"
      />

      {/* LOCATION CARD */}
      <div className="location-card">

        <div className="location-card-top">
          <span className="location-pin">●</span>

          <span className="location-card-label">
            AUREA DENTAL
          </span>
        </div>

        <h3>
          Summit, New Jersey
        </h3>

        <p>
          55 Woodland Avenue
          <br />
          Summit, NJ 07901
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=55+Woodland+Avenue,+Summit,+NJ+07901"
          target="_blank"
          rel="noopener noreferrer"
          className="location-directions"
        >
          Get directions
          <span>↗</span>
        </a>

      </div>

    </div>

   </div>
</section>
    </>
  );
}
