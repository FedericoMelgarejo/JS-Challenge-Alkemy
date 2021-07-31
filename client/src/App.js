import React from "react";


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
