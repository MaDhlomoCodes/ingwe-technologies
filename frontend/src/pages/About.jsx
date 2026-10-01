import { Link } from "react-router-dom";

const values = [
  ["Precision", "Accurate, considered work that meets the requirements of every brief."],
  ["Integrity", "Transparent communication, ethical conduct and accountability."],
  ["Agility", "The ability to adapt to changing needs and conditions in the field."],
  ["Reliability", "Consistent delivery to agreed standards and timelines."],
  ["Innovation", "Using technology and ingenuity to find more effective ways forward."],
];

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container page-banner-inner">
          <div className="eyebrow eyebrow-light"><span /> Our story</div>
          <h1>Grounded in purpose.<br /><em>Ready for what’s next.</em></h1>
          <p>A South African company built on precision, integrity and a commitment to solving real operational challenges.</p>
        </div>
      </section>
      <section className="section about-story">
        <div className="container about-grid">
          <div className="about-copy">
            <div className="eyebrow"><span /> About Ingwe</div>
            <h2>Ingwe Technologies</h2>
            <p>Ingwe Technologies (Pty) Ltd is a privately registered South African company founded in March 2025 by Njabulo Mbatha. Built around stealth, strength and agility, Ingwe was established to deliver targeted solutions to the operational challenges businesses face across multiple industries.</p>
            <p>Working across advanced drone applications, technology-driven services, and equipment sourcing and hire, we bring specialist capability together with a client-centred way of working.</p>
            <p>Every engagement is shaped around the client’s requirements — from initial scoping through to delivery, reporting and follow-up support.</p>
          </div>
          <aside className="founder-note">
            <div className="founder-mark">“</div>
            <blockquote>We were built to solve problems that other companies couldn’t. That’s what Ingwe means to us.</blockquote>
            <div className="founder-attribution"><strong>Njabulo Mbatha</strong><span>Founder &amp; Director</span></div>
          </aside>
        </div>
      </section>
      <section className="mission-section">
        <div className="container mission-grid">
          <article><div className="eyebrow eyebrow-light"><span /> Our mission</div><h2>Make complex work<br /><em>more achievable.</em></h2><p>To deliver precise, reliable and technology-forward solutions that solve real operational problems — with professionalism and measurable impact.</p></article>
          <article><div className="eyebrow eyebrow-light"><span /> Our vision</div><h2>A trusted partner<br /><em>across the region.</em></h2><p>To be a trusted multi-disciplinary technology solutions partner for businesses across Southern Africa and beyond, known for operational excellence and adaptive capability.</p></article>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><div className="eyebrow"><span /> What drives us</div><h2>Principles that<br /><em>show in the work.</em></h2></div>
            <p className="heading-aside">Our values shape how we scope, communicate and deliver — not just what we say about ourselves.</p>
          </div>
          <div className="values-grid">
            {values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="contact-band"><div className="container contact-band-inner"><div><div className="eyebrow eyebrow-light"><span /> Let’s work together</div><h2>Bring us your<br />next challenge.</h2></div><div className="contact-band-action"><p>Let’s talk about what your operation needs.</p><Link className="button button-white" to="/contact">Meet the team <span aria-hidden="true">↗</span></Link></div></div></section>
    </>
  );
}
