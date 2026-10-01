import { useEffect, useMemo, useState } from "react";

const media = [
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Drone on site", description: "Field-ready equipment prepared for a site survey.", src: "photos/drone-on-site.jpg" },
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Aerial operations", description: "A multirotor working above an open field site.", src: "photos/drone-in-flight.jpg" },
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Surveying from the air", description: "Aerial perspective over a South African landscape.", src: "photos/drone-survey.jpg" },
  { kind: "photo", category: "Mining & industry", filter: "mining", title: "Earthmoving equipment", description: "Heavy equipment at an active earthworks site.", src: "photos/earthmoving-equipment.jpg" },
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Aerial survey in progress", description: "The flight controller displays live aerial imagery.", src: "photos/aerial-survey-controller.jpg" },
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Pre-flight preparation", description: "A survey aircraft positioned for a safe launch.", src: "photos/drone-launch-site.jpg" },
  { kind: "photo", category: "Mining & industry", filter: "mining", title: "Mine site operations", description: "A water cart working along a mine haul road.", src: "photos/mine-water-cart.jpg" },
  { kind: "photo", category: "Solar & infrastructure", filter: "solar", title: "Solar field team", description: "Site personnel moving through a utility-scale solar installation.", src: "photos/solar-site-team.jpg" },
  { kind: "photo", category: "Solar & infrastructure", filter: "solar", title: "Solar farm overview", description: "Aerial view across a large solar energy site.", src: "photos/solar-farm-aerial.jpg" },
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Flight control in the field", description: "A pilot monitoring the aircraft during a site operation.", src: "photos/field-drone-operation.jpg" },
  { kind: "photo", category: "Drone operations", filter: "drone", title: "Aerial inspection controls", description: "Live flight imagery and inspection controls in use.", src: "photos/survey-flight-controls.jpg" },
  { kind: "photo", category: "Solar & infrastructure", filter: "solar", title: "Solar infrastructure", description: "Site logistics and infrastructure at a solar installation.", src: "photos/solar-infrastructure.jpg" },
  { kind: "photo", category: "Solar & infrastructure", filter: "solar", title: "On-site operations", description: "A field team coordinating a solar site visit.", src: "photos/solar-field-operations.jpg" },
  { kind: "video", category: "Drone operations", filter: "drone", title: "Drone field footage", description: "A short clip from a recent drone operation.", src: "video/drone-field-clip.mp4", poster: "photos/drone-in-flight.jpg" },
  { kind: "video", category: "Mining & industry", filter: "mining", title: "Site operations · 01", description: "Field footage from an industrial site visit.", src: "video/site-operations-clip-1.mp4", poster: "photos/earthmoving-equipment.jpg" },
  { kind: "video", category: "Mining & industry", filter: "mining", title: "Site operations · 02", description: "Field footage from an industrial site visit.", src: "video/site-operations-clip-2.mp4", poster: "photos/mine-water-cart.jpg" },
  { kind: "video", category: "Mining & industry", filter: "mining", title: "Mine survey · 01", description: "Aerial survey footage from a working mine environment.", src: "video/mine-survey-clip-1.mp4", poster: "photos/mine-water-cart.jpg" },
  { kind: "video", category: "Mining & industry", filter: "mining", title: "Mine survey · 02", description: "Aerial survey footage from a working mine environment.", src: "video/mine-survey-clip-2.mp4", poster: "photos/aerial-survey-controller.jpg" },
  { kind: "video", category: "Drone operations", filter: "drone", title: "Field operations", description: "A short clip captured during a drone field operation.", src: "video/field-operations-clip.mp4", poster: "photos/field-drone-operation.jpg" },
  { kind: "video", category: "Solar & infrastructure", filter: "solar", title: "Solar site visit · 01", description: "Field footage from a renewable energy site.", src: "video/solar-site-clip-1.mp4", poster: "photos/solar-farm-aerial.jpg" },
  { kind: "video", category: "Solar & infrastructure", filter: "solar", title: "Solar site visit · 02", description: "Field footage from a renewable energy site.", src: "video/solar-site-clip-2.mp4", poster: "photos/solar-site-team.jpg" },
  { kind: "video", category: "Solar & infrastructure", filter: "solar", title: "Solar inspection · 01", description: "Aerial footage from a solar infrastructure inspection.", src: "video/solar-inspection-clip-1.mp4", poster: "photos/solar-infrastructure.jpg" },
  { kind: "video", category: "Solar & infrastructure", filter: "solar", title: "Solar inspection · 02", description: "Aerial footage from a solar infrastructure inspection.", src: "video/solar-inspection-clip-2.mp4", poster: "photos/solar-field-operations.jpg" },
  { kind: "video", category: "Drone operations", filter: "drone", title: "Equipment setup", description: "A short clip from on-site drone preparation.", src: "video/drone-setup-clip.mp4", poster: "photos/drone-launch-site.jpg" },
];

const filters = [
  { id: "all", label: "All work" },
  { id: "drone", label: "Drone operations" },
  { id: "mining", label: "Mining & industry" },
  { id: "solar", label: "Solar & infrastructure" },
];

const asset = (path) => `${import.meta.env.BASE_URL}gallery/${path}`;

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);
  const visibleMedia = useMemo(
    () => filter === "all" ? media : media.filter((item) => item.filter === filter),
    [filter],
  );

  return (
    <div className="gallery-page">
      <section className="page-banner">
        <div className="container page-banner-inner">
          <div className="eyebrow eyebrow-light"><span /> Ingwe in the field</div>
          <h1>Work you can <em>see.</em></h1>
          <p>A closer look at our drone operations, industrial environments and renewable energy site work.</p>
        </div>
      </section>

      <section className="gallery-content" aria-label="Project gallery">
        <div className="container">
          <div className="gallery-toolbar">
            <div className="gallery-filters" role="group" aria-label="Filter gallery">
              {filters.map((item) => (
                <button key={item.id} type="button" className={filter === item.id ? "is-active" : ""} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
            <span className="gallery-count">{visibleMedia.length} field moments</span>
          </div>

          <div className="gallery-grid">
            {visibleMedia.map((item) => (
              <article className={`gallery-card${item.kind === "video" ? " gallery-card-video" : ""}`} key={item.src}>
                <div className="gallery-media">
                  {item.kind === "video" ? (
                    <video controls playsInline preload="none" poster={asset(item.poster)} aria-label={item.title}>
                      <source src={asset(item.src)} type="video/mp4" />
                      Your browser does not support this video.
                    </video>
                  ) : (
                    <button className="gallery-image-button" type="button" onClick={() => setSelected(item)} aria-label={`View larger: ${item.title}`}>
                      <img src={asset(item.src)} alt={item.description} loading="lazy" />
                      <span className="gallery-zoom" aria-hidden="true">↗</span>
                    </button>
                  )}
                </div>
                <div className="gallery-card-copy">
                  <span className="gallery-category">{item.category}{item.kind === "video" && <span className="video-label">Video</span>}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="gallery-lightbox" role="presentation" onClick={() => setSelected(null)}>
          <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label={selected.title} onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close image">×</button>
            <img src={asset(selected.src)} alt={selected.description} />
            <p>{selected.title} <span>— {selected.description}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}
