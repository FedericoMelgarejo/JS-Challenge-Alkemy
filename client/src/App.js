import React from "react";
import Incomes from "./components/incomes";
import Expenses from "./components/expenses";
import Balance from "./components/balance";
import Navbar from "./components/navbar";
import { Row, Col, Container} from "react-bootstrap";



function App() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col>
              <Balance />
            </Col>
          </Row>
          <Row>
            <Col>
              <Incomes />
            </Col>
            <Col>
              <Expenses />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default App;
