"use client";

const galleryItems = [
  {
    number: "01",
    title: "Reception",
    description: "A calm first impression, designed around comfort.",
    className: "gallery-reception",
    image: "/reception.png",
  },
  {
    number: "02",
    title: "Patient experience",
    description: "Thoughtful spaces for a more comfortable visit.",
    className: "gallery-patient",
    image: "/patient-experience.png",
  },
  {
    number: "03",
    title: "Technology",
    description: "Advanced digital tools supporting precise treatment.",
    className: "gallery-technology",
    image: "/technology.png",
  },
  {
    number: "04",
    title: "Treatment room",
    description: "Clinical precision in a calm, considered environment.",
    className: "gallery-treatment",
    image: "/treatment-room.png",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* HEADER */}
        <div className="gallery-header">

          <div>
            <p className="gallery-eyebrow">
              THE AUREA SPACE
            </p>

            <h2>
              Your clinic,
              <br />
              presented beautifully.
            </h2>
          </div>

          <p className="gallery-intro">
            A glimpse into the spaces, technology and
            details behind the AUREA experience.
          </p>

        </div>

        {/* GALLERY */}
        <div className="gallery-grid">

          {galleryItems.map((item) => (
            <article
              key={item.number}
              className={`gallery-card ${item.className}`}
            >

                <img
  src={item.image}
  alt={item.title}
  className="gallery-image"
/>

              <div className="gallery-overlay" />

              <div className="gallery-card-top">
                <span>{item.number}</span>
              </div>

              <div className="gallery-card-content">

                <div className="gallery-pill">
                  {item.title}
                </div>

                <div className="gallery-description">
                  {item.description}
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}