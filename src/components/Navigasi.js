import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navigasi() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  });

  // loguot
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
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
              {!user ? (
                <Button>
                  <Link to={"/login"} className="link-navigasi text-light btn-primary">
                    Login
                  </Link>
                </Button>
              ) : (
                <Button className="text-light btn-danger" onClick={logout}>
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
