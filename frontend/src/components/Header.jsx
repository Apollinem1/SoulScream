import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NAV_ITEMS } from "../data/constants";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const { activeSection, navRef, pillRef } = useActiveSection(NAV_ITEMS);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  /* Портал внутрь .page: затемнение над main, но ниже .topbar (200) — не в document.body */
  const pageEl = typeof document !== "undefined" ? document.querySelector(".page") : null;
  const backdrop =
    menuOpen &&
    pageEl &&
    createPortal(
      <div
        className="nav-backdrop-overlay"
        aria-hidden
        role="presentation"
        onClick={closeMenu}
      />,
      pageEl
    );

  return (
    <>
      {backdrop}
      <header className={`topbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="topbar-inner container">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">SS</span>
          <span className="brand-text">SoulScream</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle-lines" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="nav" ref={navRef} id="site-nav">
          <span className="nav-pill" ref={pillRef} />
          <div className="nav-links">
            {NAV_ITEMS.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className={activeSection === i.href ? "active" : ""}
                onClick={closeMenu}
              >
                {i.label}
              </a>
            ))}
          </div>
          <a className="nav-mobile-phone" href="tel:+79609730086" onClick={closeMenu}>
            +7 (960) 973-00-86
          </a>
        </nav>

        <a className="topbar-phone" href="tel:+79609730086">
          +7 (960) 973-00-86
        </a>
      </div>
    </header>
    </>
  );
}
