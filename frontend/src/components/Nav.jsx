import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav id="nav">
      <div className="nav-inner">
        <NavLink className="nav-logo" to="/" onClick={() => setOpen(false)}>
          Ingwe Technologies
        </NavLink>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={({ isActive }) => (isActive ? "active" : "")}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
