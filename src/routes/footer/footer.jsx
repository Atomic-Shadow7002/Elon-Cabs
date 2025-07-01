import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./footer.css";
import { images } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-column footer-logo">
          <img src={images.icons.logo} alt="Elon Cabs" />
          <p>
            Whether you need a quick local ride, an outstation journey, or a
            reliable airport transfer, we've got you covered with the best
            prices and quality service.
          </p>
        </div>

        <div className="footer-column footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Booking</li>
            <li>Fleet</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Info</h4>
          <p>#19, 2nd Main Rd, Surabhi Nagar,<br />J.P Nagar 8th Phase, Bengaluru - 560078</p>
          <p><FaEnvelope /> info@eloncabs.com</p>
          <p><FaPhone /> 89049 00507</p>
          <p className="social-links">
            <span>Social Links:</span>
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 Elon Cabs | Designed & Hosted by <strong>Web Universals</strong>
      </div>
    </footer>
  );
};

export default Footer;
