import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {
  NavLink
} from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/" exact>React-Bootstrap</NavLink>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/" exact>Home</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/product">Product</NavLink>
              <NavLink className="nav-link" to="/detail">Detail</NavLink>
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navber;
