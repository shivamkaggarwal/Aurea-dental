"use client";

const steps = [
  {
    number: "01",
    title: "Book",
    description:
      "Choose a convenient time or contact the clinic directly.",
  },
  {
    number: "02",
    title: "Consult",
    description:
      "Meet the dentist and discuss your concerns.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Understand the treatment options and next steps.",
  },
  {
    number: "04",
    title: "Smile",
    description:
      "Move forward with care designed around you.",
  },
];

export default function PatientJourney() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">

        {/* HEADER */}
        <div className="journey-header">

          <h2>
            A simpler patient
            <br />
            journey.
          </h2>

          <p>
            Every beautiful section ultimately has one job;
            make the next step obvious.
          </p>

        </div>

        {/* STEPS */}
        <div className="journey-grid">

          {steps.map((step) => (
            <article
              key={step.number}
              className="journey-step"
            >

              <div className="journey-step-number">
                {step.number}
              </div>

              <div className="journey-step-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}