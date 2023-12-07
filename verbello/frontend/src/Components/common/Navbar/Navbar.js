import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import verbelloLogo from "../../../assets/images/verbello-logo.jpeg";

const Navbar = () => {

  const [togglerColor, setTogglerColor] = useState("#ffffff");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleToggleClick = () => {
    // Toggle the color between white and green
    const newColor = togglerColor === "#ffffff" ? "#00ff00" : "#ffffff";
    setTogglerColor(newColor);
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-bgcolor p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-logo">
          <span className="logo-txt">Verbello</span>
          {/* <img src={verbelloLogo} className="img-fluid logo" alt="Verbello" /> */}
        </Link>

        <button
          className={`navbar-toggler custom-toggler ${
            isNavCollapsed ? "" : "collapsed"
          }`} 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={!isNavCollapsed}  
          aria-label="Toggle navigation"
          style={{ backgroundColor: togglerColor, borderColor: "#333" }}
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavCollapsed ? "" : "show"
          }`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/contactus" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-white">
                About Us
              </Link>
            </li>
          </ul>

          <Link to="/login" className="login">
            <button type="button" className="btn btn-outline-light mx-1 mt-0">
              Login
            </button>
          </Link>

          <Link to="/signup" className="signup">
            <button type="button" className="btn btn-light mx-1 mt-0">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
