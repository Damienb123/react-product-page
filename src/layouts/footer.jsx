import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <h3>The Gallery</h3>
        </div>

        {/* Company */}
        <nav>
          <h6>Company</h6>
          <a>About Us</a>
          <a>Our Story</a>
          <a>Sustainability</a>
          <a>Careers</a>
        </nav>

        {/* Support */}
        <nav>
          <h6>Support</h6>
          <a>Contact Us</a>
          <a>FAQs</a>
          <a>Shipping</a>
          <a>Returns</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6>Legal</h6>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookie Policy</a>
        </nav>

        {/* Social Icons */}
        <div className="footer-social">
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
          <span><FaFacebookF /></span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-links">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
        </div>
        <p>© 2026 The Gallery</p>
      </div>
    </footer>
  );
}

export default Footer;
