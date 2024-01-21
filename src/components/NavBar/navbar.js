import React from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import GmailIcon from "../../assets/gmail.png";

const Navbar = () => {
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
        <NavLink to="skills">About</NavLink>
        <NavLink to="works">Portfolio</NavLink>
        <NavLink to="articles">Articles</NavLink>
      </div>
      <button className="email-btn">
        <a href="mailto:rasmus.henriksen@live.dk" rel="noopener noreferrer">
          <img src={GmailIcon} alt="Email" className="email-link-icon" />
        </a>
        Contact Me
      </button>
      {/* ... other menu items and mobile menu ... */}
    </nav>
  );
};

export default Navbar;
