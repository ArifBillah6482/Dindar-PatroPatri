import "./DesktopNav.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";

export default function DesktopNavber() {
  return (
    <div className="desktopNavber">
      <div className="div1">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        {/*  */}
        <div className="navLinks">
          <div className="navLink">
            <NavLink to="/" className="NavLink">
              <span>হোম</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/allBiodata" className="NavLink">
              <span>সমস্ত বায়োডাটা</span>
            </NavLink>
          </div>
          <div className="navLink">
            <a
              className="NavLink"
              href="https://dindar-patropatri-form.netlify.app/"
            >
              <span>বায়োডাটা তৈরি করুন</span>
            </a>
          </div>
          <div className="navLink">
            <NavLink to="/contact" className="NavLink">
              <span>যোগাযোগ করুন </span>
            </NavLink>
          </div>
//           <div className="navLink">
//             <NavLink to="/admin" className="NavLink">
//               <span>এডমিন লগিন</span>
//             </NavLink>
//           </div>
        </div>
      </div>
    </div>
  );
}
