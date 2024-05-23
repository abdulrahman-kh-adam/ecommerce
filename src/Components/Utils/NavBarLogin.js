import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <Navbar
      className="sticky-top"
      style={{ backgroundColor: "#272727" }}
      variant="dark"
      expand="sm"
    >
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="brand logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2 w-100"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Link
              to="/login"
              className="nav-link nav-text d-flex mt-3 justify-content-center"
            >
              <img
                src={login}
                className="login-img"
                alt="sfvs"
                style={{ marginRight: "5px" }}
              />
              <p style={{ color: "white" }}>Login</p>
            </Link>
            <Link
              to="/cart"
              className="nav-link nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img
                src={cart}
                className="login-img"
                alt="sfvs"
                style={{ marginRight: "5px" }}
              />
              <p style={{ color: "white" }}>Cart</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
