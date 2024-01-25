import React, { useState } from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import GmailIcon from "../../assets/gmail.png";
import MenuIcon from "../../assets/menu.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ to, children }) => {
    return (
      <ScrollLink
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="desktopMenuListItem"
      >
        {children}
      </ScrollLink>
    );
  };

  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <NavLink to="intro">Home</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="works">Portfolio</NavLink>
        <NavLink to="articles">Articles</NavLink>
      </div>
      <button className="hamburger-btn" onClick={toggleMobileMenu}>
        <img src={MenuIcon} alt="Menu" className="menu-icon" />
      </button>
      {isMobileMenuOpen && (
        <div className="mobileMenu">
          <button className="closeMenu" onClick={toggleMobileMenu}>
            X
          </button>
          <NavLink to="intro">Home</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="works">Portfolio</NavLink>
          <NavLink to="articles">Articles</NavLink>
        </div>
      )}
      <a href="mailto:rasmus.henriksen@live.dk" rel="noopener noreferrer">
        <div className="email-btn-wrapper">
          <button className="email-btn">
            <img src={GmailIcon} alt="Email" className="email-link-icon" />
          </button>
          <p>Contact Me</p>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
