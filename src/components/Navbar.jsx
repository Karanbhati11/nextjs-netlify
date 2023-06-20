"use client";
import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [navbar, setNavbar] = useState("");
  const MenuToggler = () => {
    if (active === "") {
      setActive("is-active");
      setNavbar("mobile-nav");
    } else {
      setActive("");
      setNavbar("");
    }
  };

  return (
    <div>
      <div className="nav-wrapper">
        <nav className="navbar">
          <img src="/nova-logos_transparent.png" alt="Company Logo" />
          <div
            className={`menu-toggle ${active}`}
            onClick={MenuToggler}
            id="mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav no-search ${navbar}`}>
            <li className="nav-item nav-item-ltr">
              <a
                href="#home"
                onClick={() => {
                  setNavbar("");
                  setActive("");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item nav-item-ltr">
              <a
                href="#about"
                onClick={() => {
                  setNavbar("");
                  setActive("");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item nav-item-ltr">
              <a
                href="#work"
                onClick={() => {
                  setNavbar("");
                  setActive("");
                }}
              >
                Work
              </a>
            </li>
            <li className="nav-item nav-item-ltr">
              <a
                href="#contact"
                onClick={() => {
                  setNavbar("");
                  setActive("");
                }}
              >
                Contact Us
              </a>
            </li>
            <i className="fas fa-search" id="search-icon"></i>
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
