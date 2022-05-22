import React from "react";
import logo from "../logo.svg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navigasi() {
  return (
    <>
      {/* <div className="text-center text-light bg-secondary"> */}
        {/* Tugas PT. Vanz Inovatif Teknologi */}
      {/* </div> */}
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand href="/" className="brand">Husnil Maarif</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="/posting" className="nav-link">
                Posting
              </Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
