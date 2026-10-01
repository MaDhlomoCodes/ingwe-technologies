import { Link } from "react-router-dom";

const serviceCards = [
  {
    number: "01",
    title: "Drone services",
    text: "Aerial insight for surveillance, mapping, infrastructure inspection, mining operations and search support.",
  },
  {
    number: "02",
    title: "Technology solutions",
    text: "Practical digital services, from web development and systems integration to cybersecurity and data analysis.",
  },
  {
    number: "03",
    title: "Equipment sourcing & hire",
    text: "Access to the equipment your operation needs, with sourcing, hire facilitation and technical guidance.",
  },
];

const sectors = [
  "Mining & resources",
  "Construction",
  "Security & risk",
  "Infrastructure",
  "Government",
  "Agriculture",
  "Energy & utilities",
  "Technology",
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-orbit orbit-three" />
          <div className="hero-coordinate">SOUTHERN AFRICA<br />26°12′S · 28°02′E</div>
          <div className="hero-art-mark">I</div>
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span /> Ingwe Technologies (Pty) Ltd · South Africa</div>
            <h1>Technology that moves<br /><em>business forward.</em></h1>
            <p className="hero-lede">
              Precision drone operations, practical technology and equipment sourcing for the people building Southern Africa.
            </p>
            <div className="hero-actions">
              <Link className="button button-red" to="/services">Explore our services <span aria-hidden="true">↗</span></Link>
              <Link className="button button-quiet" to="/contact">Talk to our team</Link>
            </div>
            <div className="hero-note">Stealth <span>·</span> Strength <span>·</span> Agility</div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><span className="index-line" /><span>03</span></div>
        </div>
        <div className="hero-bottom"><span>Independent thinking. Reliable delivery.</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="proof-strip" aria-label="Company overview">
        <div className="container proof-grid">
          <div><strong>03</strong><span>service pillars</span></div>
          <div><strong>08+</strong><span>industries served</span></div>
          <div><strong>2025</strong><span>founded in South Africa</span></div>
          <p>One capable partner for complex, real-world work.</p>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> What we do</div>
              <h2>Three disciplines.<br /><em>One standard.</em></h2>
            </div>
            <div className="heading-aside">
              <p>We bring technical skill, clear communication and accountable delivery to every engagement.</p>
              <Link className="text-link" to="/services">View all services <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="service-cards">
            {serviceCards.map((service) => (
              <Link className="service-card" to="/services" key={service.number}>
                <div className="card-top"><span>{service.number}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="card-rule" />
                <span className="card-more">Discover the service <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-approach">
        <div className="container approach-grid">
          <div className="approach-heading">
            <div className="eyebrow eyebrow-light"><span /> Why Ingwe</div>
            <h2>Built around<br />your <em>operation.</em></h2>
            <p>Good work starts by understanding the challenge. We shape each engagement to fit the client, the site and the outcome that matters.</p>
            <Link className="button button-outline-light" to="/about">Get to know Ingwe <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="approach-points">
            <article><span>01</span><div><h3>Purposeful by design</h3><p>Recommendations are tailored to the brief, with a clear line from scope to result.</p></div></article>
            <article><span>02</span><div><h3>Technical and practical</h3><p>We pair specialist capability with a grounded understanding of operational realities.</p></div></article>
            <article><span>03</span><div><h3>Accountable delivery</h3><p>Professional execution, useful reporting and open communication throughout the work.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section sectors-section">
        <div className="container sectors-grid">
          <div>
            <div className="eyebrow"><span /> Where we work</div>
            <h2>Made for demanding<br /><em>environments.</em></h2>
            <p className="section-intro">Our services support teams across industrial, commercial and public-sector settings.</p>
          </div>
          <div className="sector-list">
            {sectors.map((sector, index) => <div key={sector}><span>0{index + 1}</span>{sector}</div>)}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <div><div className="eyebrow eyebrow-light"><span /> Start a conversation</div><h2>Have a challenge<br />in mind?</h2></div>
          <div className="contact-band-action"><p>Tell us what you need. We’ll work with you to shape the right next step.</p><Link className="button button-white" to="/contact">Contact Ingwe <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
