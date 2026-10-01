import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Drone services",
    intro: "Professional drone operations across industrial, commercial and civil environments — planned around the site, objective and reporting requirements.",
    items: ["Security surveillance and perimeter monitoring", "Aerial mapping and topographic survey", "Blast monitoring and mining pit inspection", "Crowd surveillance for industrial action and events", "Search and rescue support operations", "Pipeline and railway infrastructure inspection", "Construction progress reporting", "Industrial inspections and assessments"],
  },
  {
    number: "02",
    title: "Technology solutions",
    intro: "Technology services shaped around each client’s operational and digital needs — from digital infrastructure to data-informed decision support.",
    items: ["Web design and development", "Cybersecurity assessment and implementation", "Systems maintenance and construction", "Systems integration", "Software engineering and custom development", "Data analysis and reporting"],
  },
  {
    number: "03",
    title: "Equipment sourcing & hire",
    intro: "Through an established supplier network, we help clients source, assess and access the equipment needed for operations of different scales.",
    items: ["Sourcing from pumps to excavators and 777 dump trucks", "Equipment hire and access facilitation", "Technical support and procurement advisory", "Pre-purchase inspection of second-hand yellow machines", "Minor servicing and fault diagnosis on heavy equipment", "Equipment usage training and technical support"],
  },
];

export default function Services() {
  return (
    <>
      <section className="page-banner">
        <div className="container page-banner-inner">
          <div className="eyebrow eyebrow-light"><span /> What we do</div>
          <h1>Capability for<br /><em>work that matters.</em></h1>
          <p>Three service pillars, each built around a clear commitment: thoughtful execution and dependable delivery.</p>
        </div>
      </section>
      <section className="services-detail">
        <div className="container">
          {services.map((service) => (
            <article className="service-detail" key={service.number}>
              <div className="service-detail-head"><span>{service.number}</span><div><div className="eyebrow"><span /> Service pillar</div><h2>{service.title}</h2></div></div>
              <div className="service-detail-body"><p>{service.intro}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-band"><div className="container contact-band-inner"><div><div className="eyebrow eyebrow-light"><span /> Tailored to your brief</div><h2>Need something<br />more specific?</h2></div><div className="contact-band-action"><p>Tell us about the requirement. We’ll discuss a solution that fits.</p><Link className="button button-white" to="/contact">Discuss your needs <span aria-hidden="true">↗</span></Link></div></div></section>
    </>
  );
}
