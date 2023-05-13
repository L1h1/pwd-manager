import { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { createCategory } from "../../http/managerAPI";

const CreateCategory = ({show, onHide}) => {
  const [value, setValue] = useState("");

  const addCategory = () => {
    createCategory({name: value}).then(data => {
      setValue("");
      onHide();
    })
  }

  return (
    <Modal 
        show={show}
        onHide={onHide}
        size="lg"
        centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Enter the name of the category"}
            value={value}
            onChange={(e) => setValue(e.target.value)}>
          </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addCategory}>Add</Button>
      </Modal.Footer>    
    </Modal>
  )
}

export default CreateCategory;