import React from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function Navigasi() {
  const navigate = useNavigate();

  // loguot
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        className="shadow"
      >
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand className="brand">
            <Link to={"/"} className="brand">
              Husnil Maarif
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-link">
                <Link to={"/"} className="link-navigasi">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to={"/about"} className="link-navigasi">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to={"/posting"} className="link-navigasi">
                  Posting
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to={"/login"} className="link-navigasi">
                  Login
                </Link>
              </Nav.Link>
              <Button
                className="text-light justify-content-center btn-danger"
                onClick={logout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
