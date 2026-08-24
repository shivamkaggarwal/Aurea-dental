"use client";

import {
  useRef,
  useState,
  type PointerEvent,
} from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const rect = slider.getBoundingClientRect();

    let percentage =
      ((clientX - rect.left) / rect.width) * 100;

    percentage = Math.max(0, Math.min(100, percentage));

    setPosition(percentage);
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    dragging.current = true;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    updatePosition(event.clientX);
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (!dragging.current) return;

    event.preventDefault();

    updatePosition(event.clientX);
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    dragging.current = false;

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }
  };

  return (
    <section className="results-section" id="results">
      <div className="results-container">

        {/* HEADER */}
        <div className="results-header">
          <div>
            <p className="section-eyebrow">
              SMILE TRANSFORMATIONS
            </p>

            <h2>
              See the difference.
            </h2>
          </div>

        </div>

        {/* CONTENT */}
        <div className="results-grid">

          {/* BEFORE / AFTER SLIDER */}
          <div
            ref={sliderRef}
            className="before-after-slider"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >

            {/* AFTER */}
<div className="comparison-panel after-panel">

  <div className="comparison-label">
    AFTER
  </div>

  <img
    src="/after-dental.png"
    alt="After dental treatment"
    className="dental-comparison-image"
  />

</div>
            {/* BEFORE */}
<div
  className="comparison-panel before-panel"
  style={{
    clipPath: `inset(0 ${100 - position}% 0 0)`,
  }}
>

  <div className="comparison-label">
    BEFORE
  </div>

  <img
    src="/before-dental.png"
    alt="Before dental treatment"
    className="dental-comparison-image"
  />

</div>

             

            {/* DIVIDER */}
            <div
              className="comparison-divider"
              style={{
                left: `${position}%`,
              }}
            >
              <div className="comparison-handle">
                ↔
              </div>
            </div>

          </div>

          {/* STORY CARD */}
          <div className="results-story">

            <p className="story-eyebrow">
              PATIENT STORIES
            </p>

            <h3>
              Transformation,
              <br />
              not just
              <br />
              treatment.
            </h3>

            <p className="story-description">
              Replace the demo panels with genuine,
              consented patient cases before launch.
            </p>

            <div className="story-tags">
              <span>Smile design</span>
              <span>Implants</span>
              <span>Orthodontics</span>
              <span>Whitening</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}