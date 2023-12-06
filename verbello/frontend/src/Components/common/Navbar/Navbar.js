import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import verbelloLogo from "../../../assets/images/verbello-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-bgcolor p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-logo">
          <span className="logo-txt">Verbello</span>
          {/* <img src={verbelloLogo} className="img-fluid logo" alt="Verbello" /> */}
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
            <button type="button" className="btn btn-outline-light mx-1">
              Login
            </button>
          </Link>

          <Link to="/signup" className="signup">
            <button type="button" className="btn btn-light mx-1">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
