import "./nav.css";
import { images, svgs } from "../../assets";
import '../animation/buttonAnimation.css'

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-right">
        <img className="logo" src={images.icons.logo} alt="Logo" />
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">
              Services
              <img src={svgs["down-arrow-white"]} alt="arrow" />
            </a>
          </li>
          <li>
            <a href="#">
              Fleets
              <img src={svgs["down-arrow-white"]} alt="arrow" />
            </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="phone"><div className="phone-icon-box"><img className="phone-icon" src={images.icons.phone} alt="phone-icon" /></div>
        <div className="phone-box"><span>Office Number</span><span>9394959399</span></div></div>
        <button className="button-animate" style={{ '--padding': "15px 28px" }}>Log In</button>

      </div>
    </nav>
  );
}

export default Nav;
