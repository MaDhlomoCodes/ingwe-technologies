import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link to="/" aria-label="Ingwe Technologies home"><img className="footer-logo" src={`${import.meta.env.BASE_URL}ingwe-logo.png`} alt="Ingwe Technologies" /></Link>
          <p>Stealth. Strength. Agility.</p>
          <span>A South African technology solutions company for corporate and industrial clients.</span>
        </div>
        <div className="footer-column"><div className="footer-heading">Explore</div><Link to="/about">About Ingwe</Link><Link to="/services">Our services</Link><Link to="/contact">Contact</Link></div>
        <div className="footer-column"><div className="footer-heading">Get in touch</div><a href="tel:+27789547360">078 954 7360</a><a href="mailto:Info@ingwetech.co.za">Info@ingwetech.co.za</a><span>Meyerton, Gauteng<br />South Africa</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ingwe Technologies (Pty) Ltd</span><span>Registered in South Africa</span></div>
    </footer>
  );
}
