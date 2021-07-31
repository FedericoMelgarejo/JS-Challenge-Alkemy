import React from "react";
import { Card, Container, } from "react-bootstrap";


function balance() {
  return (
    <div className="container col-lg-4 col-lg-offset-4 align-items">
      <br />
      <Card style={{ width: "auto", borderColor: "black", padding: "40px" }}>
        <Card.Body>
          <Container>
            <Card.Title>Your current balance</Card.Title>
            <Card.Text style={{ fontSize: "2rem" }}>$5000</Card.Text>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default balance;
