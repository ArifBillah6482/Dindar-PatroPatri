import "./DesktopNav.css";
import { NavLink } from "react-router-dom";

export default function DesktopNavber() {
  return (
    <div className="desktopNavber">
      <div className="div1">
        <div>
          <img src="./favicon.ico" alt="Logo" />
        </div>
        {/*  */}
        <div className="navLinks">
          <div className="navLink">
            <NavLink to="/" className="NavLink">
              <span>Home</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/about" className="NavLink">
              <span> About</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/mywork" className="NavLink">
              <span>My Work</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/gallery" className="NavLink">
              <span>Gallery</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/contact" className="NavLink">
              <span>Contact Us</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/help" className="NavLink">
              {" "}
              <span> Help</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
