"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const NAV_LINKS = [
  { href: "#treatments", label: "Treatments" },
  { href: "#about", label: "About" },
  { href: "#doctors", label: "Doctors" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo" onClick={closeMenu}>
          Aurea <span>DENTAL</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a href="#booking" className="nav-cta">
            Book a consultation
          </a>

          <button
            type="button"
            className="nav-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-menu-toggle-bar" />
            <span className="nav-menu-toggle-bar" />
            <span className="nav-menu-toggle-bar" />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <nav
        id={panelId}
        className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile primary"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#booking" className="mobile-nav-book" onClick={closeMenu}>
              Book a consultation
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
