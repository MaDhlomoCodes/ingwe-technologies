import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container foot-grid">
        <div>
          <div className="foot-col-t">Navigation</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="foot-col-t">Contact</div>
          <p><a href="tel:0789547360">078 954 7360</a></p>
          <p><a href="mailto:Info@ingwetech.co.za">Info@ingwetech.co.za</a></p>
        </div>
      </div>
    </footer>
  );
}
