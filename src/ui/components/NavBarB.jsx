import React from "react";
import {Nav, Navbar,Container} from "react-bootstrap/";
import { Link } from "react-router-dom";
import "../../css/NavBarB.css";
import logo from '../../assets/img/logosn.png'

export const NavBarB = () => {
    return (
            <Navbar   fixed="top" expand="lg" bg="light" variant="light">
              <img className="nav-img"
                src={logo}
                alt="Logo de Voz Total"
              />
              <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                <Nav className= "ms-auto">
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/home">About me</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/technologies">Technologies</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/education">Education</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/contacto">Contact</Nav.Link>
                </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        };