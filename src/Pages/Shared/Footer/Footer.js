import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum aliquet quam, id gravida neque.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: nayebul780@gmail.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Nayebul Jannath Chowdhury. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
