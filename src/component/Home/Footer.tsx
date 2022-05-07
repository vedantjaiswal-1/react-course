import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="mt-2 mb-2">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
