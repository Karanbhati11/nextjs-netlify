"use client";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");

  const MenuToggler = () => {
    if (active === "") {
      setActive("is-active");
    } else {
      setActive("");
    }
  };

  return (
    <div>
      <div className="nav-wrapper">
        <nav className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
            alt="Company Logo"
          />
          <div
            className={`menu-toggle ${active}`}
            onClick={MenuToggler}
            id="mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav no-search`}>
            <li className="nav-item nav-item-ltr">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item nav-item-ltr">
              <a href="#about">About</a>
            </li>
            <li className="nav-item nav-item-ltr">
              <a href="#work">Work</a>
            </li>
            <li className="nav-item nav-item-ltr">
              <a href="#contact">Contact Us</a>
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
