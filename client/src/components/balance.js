import React, { useEffect, useState } from "react";
import { Card, Container, } from "react-bootstrap";
import { axios } from "./axios"


function Balance() {
  const [operations, setOperations] = useState([]);
 
  const getOperations = async () => {
    const response = await axios
      .get("/operation/list")
      .catch((err) => console.log("Error:", err))

    if (response && response.data) setOperations(response.data);

  }
  useEffect(() => {
    getOperations();
  }, [])

  const expensesArray = operations.filter(operation => operation.type === "expense");
  const incomesArray = operations.filter(operation => operation.type === "income");


    let totalIncome = incomesArray.reduce((sum, current) => sum + parseInt(current.amount), 0);
    let totalExpense = expensesArray.reduce((sum, current) => sum + parseInt(current.amount), 0);
    let currentBalance = totalIncome - totalExpense;

  return (
    <div className="container col-lg-4 col-lg-offset-4 align-items">
      <br />
      <Card style={{ width: "auto", borderColor: "black", padding: "40px" }}>
        <Card.Body>
          <Container>
            <Card.Title>Your current balance</Card.Title>
            <Card.Text style={{ fontSize: "2rem" }}>${currentBalance}</Card.Text>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default Balance;
