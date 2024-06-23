import "./navbar.css";
import { useState, useEffect } from "react";
import WindowWidth from "./WindowSize";

function Navbar() {
  const [navLinkVisibility, setVisibility] = useState(false);

  const handleMouseEnter = () => {
    setVisibility(true);
  };

  const handleMouseLeave = () => {
    setVisibility(false);
  };



  const visibility = navLinkVisibility ? "nav-links-active" : "nav-links";
  const mobileNav = "nav-links-mobile"

  return (
    <nav onMouseLeave={handleMouseLeave}>
      <div className="nav-bar">
        <div className="logo">
          <p>PIXOVA LITE</p>
        </div>
        <ul className={visibility}>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#">RECENT WORK</a>
          </li>
          <li>
            <a href="#">TESTIMONIALS</a>
          </li>
          <li>
            <a href="#">TEAM</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="burger" onMouseEnter={handleMouseEnter}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
