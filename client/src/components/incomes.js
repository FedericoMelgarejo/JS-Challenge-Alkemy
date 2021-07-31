import React, { useEffect, useState } from "react";
import Balance from "./balance";
import { Button, Table, Alert, Form, Modal } from "react-bootstrap";
import { axios } from "./axios"

function Incomes() {
  // MODAL
  const [showModal, setShowModal] = useState(false);
  let [idToEdit, setIdToEdit] = useState(false);

  const handleCloseModal = () => {setShowModal(false);getOperations()}
  const handleShowAddModal = (id) => { setShowModal(true); setIdToEdit(idToEdit=false);setOperationToEdit([])}
  const handleShowUpdateModal = (id) => { setShowModal(true); setIdToEdit(idToEdit=id);handleUpdate(id);}

  // BALANCE 
  


  // GET OPERATIONS

  const [operations, setOperations] = useState([]);
  const [operationToEdit, setOperationToEdit] = useState([]);
 
  const getOperations = async () => {
    const response = await axios
      .get("/operation/list")
      .catch((err) => console.log("Error:", err))

    if (response && response.data) setOperations(response.data);

  }

  const incomesArray = operations.filter(operation => operation.type === "income");

  useEffect(() => {
    getOperations();
  }, [])


  // ADD OPERATION
  const [addFormData, setAddFormData] = useState({});

  const addOperation = async () => {
    if(idToEdit!==false){
      const response = await axios
    .put(`/operation/update/${idToEdit}`, addFormData)
    .catch((err) => console.log("Error:", err))

  if (response) getOperations();
    }else{
    const response = await axios
    .post("/operation/create", addFormData)
    .catch((err) => console.log("Error:", err))

  if (response) getOperations();
    }

  }

  const handleChange = (e) => {
    setOperationToEdit([])
    setAddFormData({ ...addFormData, ["type"]: "income", [e.target.name]: e.target.value })
  }

// UPDATE OPERATION

const handleUpdate = async (id) => {
  setOperationToEdit([])
  const response = await axios
  .get(`/operation/${id}`)
  .catch((err)=> console.log("Error: ", err))

  if (response && response.data) setOperationToEdit(response.data);
}

// DELETE OPERATION

const deleteOperation = async (id) => {
  const response = await axios
  .delete(`/operation/delete/${id}`)
  .catch((err)=> console.log("Error: ", err))

  if(response)
  getOperations();
}


///////////////
  return (
    <div>
      {/* ADD INCOME BUTTON */}
      <Button variant="primary" onClick={handleShowAddModal} style={{ marginBottom: "5%" }}>
        Add Income
      </Button>
      {/* INCOMES TABLE */}
      <Alert variant="primary">Incomes</Alert>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            incomesArray.map((operation, idx) => (
              <tr key={idx}>
                <td>{operation.concept}</td>
                <td>{operation.amount}</td>
                <td>{operation.date}</td>
                <td>
                  <Button 
                    onClick={() => { handleShowUpdateModal(operation.id) }}>
                    <i className="material-icons">edit</i>
                  </Button>
                  <Button variant="danger" style={{ margin: "4px" }} onClick={() => { deleteOperation(operation.id)}}>
                    <i className="material-icons">delete</i>
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>


      {/* ADD/EDIT MODAL */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{
            idToEdit !== false ? "Update operation" : "Add Income"
          }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ADD/EDIT FORM  */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicConcept">
              <Form.Label>Concept</Form.Label>
              <Form.Control value={operationToEdit.concept} name="concept" onChange={handleChange} type="text" placeholder="eg. market" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control value={operationToEdit.amount} name="amount" onChange={handleChange} type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control value={operationToEdit.date} name="date" onChange={handleChange} type="date" />
            </Form.Group>
          </Form>
          {/* ADD/EDIT FORM END */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{addOperation();handleCloseModal()}}>
              {
                idToEdit !== false ? "Update" : "Add"
              }
            </Button>

        </Modal.Footer>
      </Modal>
      {/* ADD/EDIT MODAL END */}
    </div >
  );
}

export default Incomes;
