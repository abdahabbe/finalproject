import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const { loading, user, error } = useSelector((state) => state.auth);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: 10 }}>
      <Navbar.Brand href="#home">ABEMUZA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inventory</Nav.Link>
          <Nav.Link href="#sales">Sales</Nav.Link>
          {user && user.role === "superadmin" ? (
            <Nav.Link href="/addUser">Add User</Nav.Link>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
