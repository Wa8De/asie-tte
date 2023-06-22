// NavBar.js
import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import navLogo from "../pictures/only-logo-rmv.png";
import navTxt from "../pictures/only-txt-rmv.png";
import Image from "react-bootstrap/Image";
import "../styles/Accueil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";
import '../styles/NavBar.css'




export default function NavBar() {
  const { cartCount } = useContext(CartContext); // Access cartCount from context

  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" className="navigation">
        <Navbar.Brand href="/">
          <Image src={navLogo} rounded width={"70vw"} height={"auto"} />
          <Image src={navTxt} rounded width={"120vw"} height={"auto"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto flx">
            <LinkContainer to="/">
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reservation">
              <Nav.Link>Réservation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/galerie">
              <Nav.Link>Galerie</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cart">
              <Nav.Link>
          <div className="icon-container">
                <FontAwesomeIcon icon={faCartShopping} className="icon" />
                {cartCount > 0 ? (
                  <span className="cart-count">{cartCount}</span>
                ) : (
                  ""
                )}
          </div>
              </Nav.Link>
            </LinkContainer>
            <NavLink to="/Cart">
              <div className="icon-ctn"></div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
