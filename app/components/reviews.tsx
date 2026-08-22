"use client";

import { useState } from "react";

const testimonials = [
  {
    category: "SMILE DESIGN",
    quote:
      "I finally feel confident smiling in photographs. The result looks completely natural and still feels like me.",
    name: "Rhea Kapoor",
    treatment: "Smile Design",
  },
  {
    category: "ORTHODONTICS",
    quote:
      "The entire process was explained so clearly. I always knew what was happening and what to expect next.",
    name: "Aarav Mehta",
    treatment: "Orthodontics",
  },
  {
    category: "WHITENING",
    quote:
      "Subtle, natural and exactly what I wanted. The whole experience felt thoughtful from beginning to end.",
    name: "Ananya Sharma",
    treatment: "Professional Whitening",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  return (
    <section
  className="reviews-section"
  id="testimonials"
>
      <div className="reviews-container">

        {/* TOP */}
        <div className="reviews-top">
          <div>
            <p className="reviews-eyebrow">
              PATIENT EXPERIENCES
            </p>

            <h2 className="reviews-heading">
              The difference is
              <br />
              how you feel.
            </h2>
          </div>

          <div className="reviews-rating">
            <div className="rating-number">
              5.0<span>★</span>
            </div>

            <p>
              Patient experience
              <br />
              rated exceptionally.
            </p>
          </div>
        </div>

        {/* MAIN EXPERIENCE */}
        <div className="reviews-main">

          {/* FEATURED TESTIMONIAL */}
          <div className="featured-review">

            <div className="featured-review-top">
              <span>0{active + 1}</span>

              <span className="featured-category">
                {testimonial.category}
              </span>
            </div>

            <div className="quote-mark">“</div>

            <blockquote key={active}>
              {testimonial.quote}
            </blockquote>

            <div className="review-author">
              <div className="author-initial">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.treatment}</span>
              </div>
            </div>

          </div>

          {/* SIDE INFORMATION */}
          <div className="reviews-side">

            <div className="reviews-side-intro">
              <p>
                Thoughtful care.
                <br />
                Natural results.
              </p>

              <span>
                Every smile has a story.
                We take the time to understand yours.
              </span>
            </div>

            <div className="reviews-stats">

              <div>
                <strong>2,500+</strong>
                <span>smiles cared for</span>
              </div>

              <div>
                <strong>15+</strong>
                <span>years of experience</span>
              </div>

              <div>
                <strong>98%</strong>
                <span>patient satisfaction</span>
              </div>

            </div>

          </div>
        </div>

        {/* CONTROLS */}
        <div className="reviews-controls">

          <div className="review-tabs">
            {testimonials.map((item, index) => (
              <button
                key={item.category}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                {item.category}
              </button>
            ))}
          </div>

          <div className="review-arrows">

            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setActive(
                  (active - 1 + testimonials.length) %
                    testimonials.length
                )
              }
            >
              ←
            </button>

            <button
              aria-label="Next testimonial"
              onClick={() =>
                setActive(
                  (active + 1) % testimonials.length
                )
              }
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}