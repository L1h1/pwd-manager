import { Container, Card, Form, Button, Dropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import {useParams} from 'react-router-dom';
import { deletePassword, fetchCategories, fetchOnePassword, updatePassword } from "../http/managerAPI";
import { observer } from "mobx-react-lite";

const Detail = observer(() => {
  let navigate = useNavigate();

  const [password, setPassword] = useState({});
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [comment, setComment] = useState("");
  const {id} = useParams();

  const passDelete = () => {
    deletePassword(id).then((data) => {
      alert("Successful");
      navigate(MAIN_ROUTE);
    })
  }

  const passUpdate = () => {
    updatePassword(id, name, login, pass, comment, password.category).then(data => {
      alert("Updated");
    })
  }

  useEffect(() => {
    fetchOnePassword(id).then(data => {
      setPassword(data)
      setName(data.name);
      setLogin(data.login);
      setPass(data.password);
      setComment(data.comment);
    });
  }, []);


  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Detail of password</h2>
        <Form className="d-flex flex-column">
          <Form.Group className="d-flex align-items-center justify-content-between">
            <label className="mt-auto" htmlFor="name">NAME: </label>
            <Form.Control
                  style={{width:300}}
                  className="mt-3"
                  placeholder="Enter your username..."
                  value={name}
                  id="name"
                  onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-between">
            <label className="mt-auto" htmlFor="login">LOGIN: </label>
            <Form.Control 
                  className="mt-3"
                  style={{width:300}}
                  placeholder="Enter your username..."
                  value={login}
                  id="login"
                  onChange={e => setLogin(e.target.value)}/>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-between">
            <label className="mt-auto" htmlFor="password">PASSWORD: </label>
            <Form.Control 
                  className="mt-3"
                  style={{width:300}}
                  placeholder="Enter your username..."
                  value={pass}
                  id="password"
                  onChange={e => setPass(e.target.value)}/>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-between">
            <label className="mt-auto" htmlFor="comment">COMMENT: </label>
            <Form.Control 
                  className="mt-3"
                  style={{width:300}}
                  placeholder="Enter your username..."
                  value={comment}
                  id="comment"
                  onChange={e => setComment(e.target.value)}/>
          </Form.Group>
          <Button
              variant={"outline-success"}
              className="mt-3"
              onClick={() => {passUpdate()}}>
              UPDATE
          </Button>
          <Button
              variant={"outline-danger"}
              className="mt-3"
              onClick={() => {passDelete()}}>
              DELETE
          </Button> 
          <Button
              variant={"outline-dark"}
              className="mt-3"
              onClick={() => navigate(MAIN_ROUTE)}>
              Back
          </Button>
        </Form>
      </Card> 
    </Container>
  );
})

export default Detail;