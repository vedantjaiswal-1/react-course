import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="mt-2 mb-2">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            CRUD APP
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};
