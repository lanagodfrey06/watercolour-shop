import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        <span>Tracy Godfrey</span>
        <small>ART</small>
      </Link>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-icons">
        <span>♡</span>
        <span>♧</span>
        <span>🛍</span>
      </div>

    </header>
  );
}

export default Navbar;
