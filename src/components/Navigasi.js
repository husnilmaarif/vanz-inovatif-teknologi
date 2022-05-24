import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigasi() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top" className="shadow">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand className="brand">
            <Link to="/" className="brand">
              Husnil Maarif
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-link">
                <Link to="/" className="link-navigasi">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to="/about" className="link-navigasi">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to="/posting" className="link-navigasi">
                  Posting
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to="/login" className="link-navigasi">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
