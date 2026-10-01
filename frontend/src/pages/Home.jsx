import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page-section">
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-bar"></div>
        <div className="hero-content">
          <div className="hero-eye">Ingwe Technologies (Pty) Ltd — South Africa</div>
          <div className="hero-h1">INGWE</div>
          <div className="hero-h2">TECHNOLOGIES</div>
          <div className="hero-tag">Stealth &nbsp;·&nbsp; Strength &nbsp;·&nbsp; Agility</div>
          <div className="hero-rule"></div>
          <p className="hero-desc">
            A multi-disciplinary technology solutions company delivering precision drone
            services, tech solutions, and equipment sourcing across Southern Africa.
          </p>
          <Link className="btn btn-red" to="/services">Our Services</Link>
          <Link className="btn btn-outline" to="/contact">Get In Touch</Link>
        </div>
      </div>

      <div className="stats">
        <div className="stats-inner">
          <div className="stat"><div className="stat-n">3</div><div className="stat-l">Core Service Pillars</div></div>
          <div className="stat"><div className="stat-n">8+</div><div className="stat-l">Industries Served</div></div>
          <div className="stat"><div className="stat-n">2025</div><div className="stat-l">Founded</div></div>
        </div>
      </div>

      <div className="svc-preview">
        <div className="container">
          <div className="svc-preview-head">
            <div className="tag">What We Do</div>
            <h2 className="section-title">Three Pillars. One Standard.</h2>
            <div className="red-rule"></div>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Every service we offer is built around precision delivery, technical expertise,
              and measurable results.
            </p>
          </div>
          <div className="svc-grid">
            <Link className="svc-card" to="/services">
              <div className="svc-n">01</div>
              <div className="svc-t">Drone Services</div>
              <div className="svc-d">
                Security surveillance, aerial mapping, blast monitoring, pipeline inspection
                and more — across industrial, commercial, and civil sectors.
              </div>
              <div className="svc-a">Learn More →</div>
            </Link>
            <Link className="svc-card" to="/services">
              <div className="svc-n">02</div>
              <div className="svc-t">Tech Solutions</div>
              <div className="svc-d">
                Web development, cybersecurity, systems integration, software engineering,
                and data analysis — tailored to your operational needs.
              </div>
              <div className="svc-a">Learn More →</div>
            </Link>
            <Link className="svc-card" to="/services">
              <div className="svc-n">03</div>
              <div className="svc-t">Equipment Sourcing &amp; Hire</div>
              <div className="svc-d">
                From pumps to excavators and 777 dump trucks — we source, hire, inspect,
                and advise on heavy equipment at any scale.
              </div>
              <div className="svc-a">Learn More →</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="why">
        <div className="container">
          <div className="why-grid">
            <div>
              <div className="tag">Why Choose Us</div>
              <h2 className="section-title">Built for Corporate and Industrial Clients</h2>
              <div className="red-rule"></div>
              <p className="section-sub">
                Ingwe Technologies combines proven technical expertise with a client-first
                delivery model — ensuring every engagement is precise, reliable, and
                tailored to your exact specifications.
              </p>
              <ul className="why-points">
                <li><div className="why-ico"><svg viewBox="0 0 12 12"><polyline points="1,6 4.5,9.5 11,2" /></svg></div><span>Tailored solutions for every client — no one-size-fits-all approach</span></li>
                <li><div className="why-ico"><svg viewBox="0 0 12 12"><polyline points="1,6 4.5,9.5 11,2" /></svg></div><span>Proven expertise across drone, tech, and heavy equipment sectors</span></li>
                <li><div className="why-ico"><svg viewBox="0 0 12 12"><polyline points="1,6 4.5,9.5 11,2" /></svg></div><span>Structured reporting and documentation for tender requirements</span></li>
                <li><div className="why-ico"><svg viewBox="0 0 12 12"><polyline points="1,6 4.5,9.5 11,2" /></svg></div><span>Agile response to operational demands and time-sensitive projects</span></li>
              </ul>
            </div>
            <div className="why-vis">
              <div className="why-vis-q">"Stealth. Strength. Agility. — in every project we deliver."</div>
              <div className="ind-list">
                <div className="ind-pill">Mining &amp; Resources</div>
                <div className="ind-pill">Construction</div>
                <div className="ind-pill">Security &amp; Risk</div>
                <div className="ind-pill">Infrastructure</div>
                <div className="ind-pill">Government</div>
                <div className="ind-pill">Agriculture</div>
                <div className="ind-pill">Energy &amp; Utilities</div>
                <div className="ind-pill">Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta">
        <div className="container">
          <h2>Ready to work with us?</h2>
          <p>Contact Njabulo Mbatha and the Ingwe Technologies team today.</p>
          <Link className="btn btn-white" to="/contact">Get In Touch</Link>
        </div>
      </div>
    </section>
  );
}
