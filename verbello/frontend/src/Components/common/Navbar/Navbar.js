import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-bgcolor">
      <div className="container-fluid">
        <Link to="/" className="navbar-logo">
          <img src="assets/images/verbello-logo.jpeg" className="img-fluid" alt="Verbello" />
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
              <Link
                to="/aboutus"
                className="nav-link dropdown-toggle text-white"
              >
                About Us
              </Link>
            </li>
          </ul>

          <Link to="/login" className="login">
            <button type="button" className="btn btn-default mx-1">
              Log in
            </button>
          </Link>

          <Link to="/signup" className="signup">
            <button type="button" className="btn btn-default mx-1">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
