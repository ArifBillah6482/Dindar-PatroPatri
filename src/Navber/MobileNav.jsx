import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.css";
export default function MobileNavber() {
  const [navToggle, setNavToggle] = useState(true);
  return (
    <div className="mobileNavber">
      <div className="div1">
        <div>
          <img src="./favicon.ico" alt="Logo" />
        </div>
        {/*  */}
        <div className={navToggle ? " navLinksHide" : "navLinks"}>
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
      {/*  */}
      {/*  */}
      <div className="div2">
        <button
          onClick={() => setNavToggle(false)}
          className={navToggle ? "MenuToggle" : "MenuToggle MenuToggleHide"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/*  */}
        <button
          onClick={() => setNavToggle(true)}
          className={navToggle === false ? "navClose" : "navClose navCloseHide"}
        >
          x
        </button>
      </div>
    </div>
  );
}
