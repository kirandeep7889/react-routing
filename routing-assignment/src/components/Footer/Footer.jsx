// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="additional-info">
        <p>© 2024 Your Company. All rights reserved.</p>
        <p>Contact us: info@yourcompany.com</p>
      </div>
    </footer>
  );
};

export default Footer;
