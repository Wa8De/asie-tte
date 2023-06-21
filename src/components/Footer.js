import React from 'react'
import navLogo from "../pictures/logo-footer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faGoogle} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";


export default function Footer() {
  return (
    <div className="container footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
        {/* <span>© </span> Rachid Boukhazzroune 2023 */}
        <ul className="nav col-md-4 justify-content-center">
          <NavLink to="/">
            {" "}
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Accueil</a>
            </li>
          </NavLink>
          <NavLink to="/reservation">
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Réservation</a>
            </li>
          </NavLink>
          <NavLink to="/menu">
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Menu</a>
            </li>
          </NavLink>
          <NavLink to="/galerie">
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Galerie</a>
            </li>
          </NavLink>
        </ul>

        <a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img
            className="bi me-2"
            alt=""
            width="100"
            height="auto"
            src={navLogo}
          />
        </a>

        <p className="social-container nav col-md-4 justify-content-center">
          <a
            href="https://www.instagram.com/asiette.ma/"
            className="instagram social text-muted"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="mailto:asiette.ma@gmail.com"
            className="gmail social ms-3 text-muted"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
        </p>
      </footer>
    </div>
  );
}

