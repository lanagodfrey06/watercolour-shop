import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-tag-mark">TAG</span>
            <small>GALLERY</small>
          </Link>
          <p>Watercolour artwork inspired by the places that stay with us.</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Explore</p>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About the artist</Link>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Follow along</p>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@tracygodfreyart.com">Email me</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>TAG gallery © {new Date().getFullYear()}</span>
        <span>Made with care</span>
      </div>
    </footer>
  );
}

export default Footer;
