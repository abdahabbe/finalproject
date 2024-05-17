import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: 10 }}>
      <Navbar.Brand href="#home">ABEMUZA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Sales</Nav.Link>
          <Nav.Link href="#inventory">Inventory</Nav.Link>
          <Nav.Link href="/addUser">Add User</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
