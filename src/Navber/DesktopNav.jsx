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
            <NavLink to="/about" className="NavLink">
              <span> আমাদের সম্পর্কে</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/mywork" className="NavLink">
              <span>প্রশ্ন ও উত্তর</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/gallery" className="NavLink">
              <span>ভিডিও</span>
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink to="/contact" className="NavLink">
              <span>যোগাযোগ করুন </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
