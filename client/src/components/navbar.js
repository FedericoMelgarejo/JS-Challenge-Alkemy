import React from "react";
import { Navbar, Container } from "react-bootstrap";

function navbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="nav-logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Budget tracker app
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
