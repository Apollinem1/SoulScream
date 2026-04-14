import { NAV_ITEMS } from "../data/constants";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const { activeSection, navRef, pillRef } = useActiveSection(NAV_ITEMS);

  return (
    <header className="topbar">
      <div className="topbar-inner container">
        <a className="brand" href="#home">
          <span className="brand-mark">SS</span>
          <span className="brand-text">SoulScream</span>
        </a>
        <nav className="nav" ref={navRef}>
          <span className="nav-pill" ref={pillRef} />
          {NAV_ITEMS.map((i) => (
            <a key={i.href} href={i.href} className={activeSection === i.href ? "active" : ""}>
              {i.label}
            </a>
          ))}
        </nav>
        <a className="topbar-phone" href="tel:+79609730086">
          +7 (960) 973-00-86
        </a>
      </div>
    </header>
  );
}
