import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";
import "./MobileNav.css";
export default function MobileNavber() {
  const [navToggle, setNavToggle] = useState(true);
  return (
    <div className="mobileNavber">
      <div className="div1">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        {/*  */}
        <div className={navToggle ? " navLinksHide" : "navLinks"}>
          <div className="navLink" onClick={() => setNavToggle(true)}>
            <NavLink
              to="/"
              className="NavLink"
              onClick={() => setNavToggle(true)}
            >
              <span>হোম</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              to="/allBiodata"
              className="NavLink"
              onClick={() => setNavToggle(true)}
            >
              <span>সমস্ত বায়োডাটা</span>
            </NavLink>
          </div>
          <div className="navLink">
            <a
              className="NavLink"
              href="https://dindar-patropatri-form.netlify.app/"
              onClick={() => setNavToggle(true)}
            >
              <span>বায়োডাটা তৈরি করুন</span>
            </a>
          </div>
          <div className="navLink">
            <NavLink
              to="/contact"
              className="NavLink"
              onClick={() => setNavToggle(true)}
            >
              <span>যোগাযোগ করুন</span>
            </NavLink>
          </div>
        {/*   <div className="navLink">
            <NavLink
              to="/admin"
              className="NavLink"
              onClick={() => setNavToggle(true)}
            >
              <span>এডমিন লগিন</span>
            </NavLink>
          </div> */}
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
