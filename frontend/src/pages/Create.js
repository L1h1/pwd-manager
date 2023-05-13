import { Button, Container } from "react-bootstrap";
import CreateCategory from "../components/modals/CreateCategory";
import CreatePassword from "../components/modals/CreatePassword";
import { useState } from "react";

function Create() {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
          variant={"outline-dark"}
          className="mt-4 p-2"
          onClick={() => setCategoryVisible(true)}>
        Add Category
      </Button>
      <Button
          variant={"outline-dark"}
          className="mt-4 p-2"
          onClick={() => setPasswordVisible(true)}>
        Add Password
      </Button>
      <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
      <CreatePassword show={passwordVisible} onHide={() => setPasswordVisible(false)}/>
    </Container>
  );
}

export default Create;