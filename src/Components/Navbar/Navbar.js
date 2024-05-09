import { Link, NavLink } from "react-router-dom";
import "../../styles/Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiPcgamingwiki } from "react-icons/si";
import { IconContext } from "react-icons";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo pb-3" onClick={closeMobileMenu}>
              <SiPcgamingwiki className="navbar-icon" />
              Computer store
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/computers"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  PC Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/keyboards"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Keyboards Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/mouses"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Mouse Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/games"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Games Store
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/create-pages"
                  onClick={closeMobileMenu}
                  className="nav-links"
                >
                  <button>AM</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
