import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label="Ingwe Technologies home">
          <img src={`${import.meta.env.BASE_URL}ingwe-logo.png`} alt="Ingwe Technologies" />
        </NavLink>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <NavLink className="nav-contact" to="/contact" onClick={closeMenu}>
            Start a conversation <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
