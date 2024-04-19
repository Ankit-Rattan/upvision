import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/upvision_logo.png";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section-outer">
      <div className="navbar-section">
        <h1 className="navbar-title">
          <Link to="/">
            <img src={logo} className="navbar-logo" />
          </Link>
        </h1>
        <ul className="navbar-items">
          <li>
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li>
            <a href="#About" className="navbar-links">
              About Us
            </a>
          </li>
          <li>
            <a href="#events" className="navbar-links">
              Events
            </a>
          </li>
          <li>
            <a href="#team" className="navbar-links">
              Team
            </a>
          </li>
          <li>
            <a href="#Message" className="navbar-links">
              Message
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-links">
              Contact Us
            </a>
          </li>
        </ul>
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>

          <ul className="mobile-navbar-links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                About Us
              </Link>
            </li>
            <li>
              <a onClick={openNav} href="#services">
                Events
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                Team
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#reviews">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="hamb-icon"
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
