import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import '../assets/css/Footer.css'
import NakshLogo from "../assets/images/naksh-logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container">

        {/* CTA Section */}
        <div className="legal-banner">
          <div className="Cta-content">
            <h1>Contact Us for Legal Assistance</h1>
            <p>Experienced lawyers ready to fight for your rights</p>

            <div className="Cta-buttons">
              <Link to="/areas-of-law" className="Cta-btn">
                Our areas of Law
              </Link>

              <Link to="/success" className="Cta-btn">
                New successes ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footerLinksWrapper">

          <div className="footerLinksItem">
            <h5>Address</h5>
            <div className="footerLinksContent">
              <p>
                201, 308 & 309, Rashmi Growth Hub, Opposite Vijay Sales Showroom,
                Near Hotel Sai Palace, S.P. Ring Road, Odhav, Ahmedabad,
                Gujarat 382415
              </p>
            </div>
          </div>

          <div className="footerLinksItem">
            <h5>Quick Links</h5>
            <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/about-us">About Us</Link></li>
              <li><Link className="nav-link" to="/products">Our Products</Link></li>
              <li><Link className="nav-link" to="/industries">Industries</Link></li>
              <li><Link className="nav-link" to="/blogs">Blogs</Link></li>
              <li><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footerLinksItem">
            <h5>Featured Brands</h5>
            <ul>

              <li><Link className="nav-link" to="/products/control-panel">Control Panel</Link></li>
              <li><Link className="nav-link" to="/products/huceen">HUCEEN</Link></li>
              <li><Link className="nav-link" to="/products/lapp-cables">LAPP Cables</Link></li>
              <li><Link className="nav-link" to="/products/pepperl-fuchs">Pepperl+Fuchs</Link></li>
              <li><Link className="nav-link" to="/products/schneider-electric">Schneider Electric</Link></li>
              <li><Link className="nav-link" to="/products/siemens">Siemens</Link></li>
            </ul>
          </div>

          <div className="footerLinksItem">
            <h5>Subscribe</h5>
            <div className="footerLinksContent">
              <p>Join our community to receive updates</p>

              <form className="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>

              <p>By subscribing you agree to our Privacy Policy</p>
            </div>
          </div>

        </div>

        {/* Logo + Social */}
        <div className="LogoWrapper">

          <div className="logo">
            <img
              src={NakshLogo}
              alt="logo"
            />
          </div>

          <div className="socialMedia">
            <ul>

              <li>
                <a href="https://www.facebook.com/Nakshtech0707/" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/naksh_technology/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li>
                <a href="https://x.com/nakshtech0707" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>

              <li>
                <a href="https://wa.me/+919510615012" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyRightText">
          <p>©2026 Naksh Technology</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;