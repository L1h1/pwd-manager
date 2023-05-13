import { useContext, useState } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap"
import { Context } from "../../index";
import { useEffect } from "react";
import { createPasswords, fetchCategories } from "../../http/managerAPI";
import { observer } from "mobx-react-lite";

const CreatePassword = observer(({show, onHide}) => {
  const {manager} = useContext(Context);

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchCategories().then(data => manager.setCategories(data));
  }, []);

  const addPassword = () => {
    createPasswords(name, login, password, comment, manager.selectedCategory.id).then(data => onHide());
  }

  return (
    <Modal 
        show={show}
        onHide={onHide}
        centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{manager.selectedCategory.name || "Select category"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {manager.categories.map(category =>
                <Dropdown.Item 
                    onClick={() => manager.setSelectedCategory(category)} 
                    key={category.id}>
                  {category.name}
                </Dropdown.Item> 
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control 
            className="mt-3"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter the name of password"/>
          <Form.Control 
            className="mt-3"
            value={login}
            onChange={e => setLogin(e.target.value)}
            placeholder="Enter login"/>
          <Form.Control 
            className="mt-3"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"/>
          <Form.Control 
            className="mt-3"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Enter comment"/>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addPassword}>Add</Button>
      </Modal.Footer>    
    </Modal>
  );
});

export default CreatePassword;