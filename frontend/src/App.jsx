import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const pages = {
      "/": {
        title: "Ingwe Technologies — Stealth. Strength. Agility.",
        description: "Ingwe Technologies delivers drone services, practical technology solutions, and equipment sourcing for corporate and industrial clients across Southern Africa.",
      },
      "/about": {
        title: "About Ingwe Technologies",
        description: "Learn about Ingwe Technologies, a South African technology solutions company serving corporate and industrial clients across Southern Africa.",
      },
      "/services": {
        title: "Services — Ingwe Technologies",
        description: "Explore Ingwe Technologies services: drone operations, practical digital technology solutions, and equipment sourcing and hire.",
      },
      "/contact": {
        title: "Contact Ingwe Technologies",
        description: "Contact Ingwe Technologies in Meyerton, Gauteng, to discuss drone operations, technology services, or equipment sourcing.",
      },
      "/gallery": {
        title: "Gallery — Ingwe Technologies",
        description: "View Ingwe Technologies field photography and video from drone operations, mining, solar, and infrastructure projects.",
      },
    };
    const pagePath = location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "") || "/";
    const page = pages[pagePath] || pages["/"];
    const canonicalPath = pages[pagePath] ? pagePath : "/";

    document.title = page.title;
    document.querySelector('meta[name="description"]').setAttribute("content", page.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://ingwetech.co.za${canonicalPath}`;
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
