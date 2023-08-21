import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <h5>Chancellors Family Center</h5>
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Court-Booking">
              Court Booking
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
