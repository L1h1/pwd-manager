import { Container, Card, Form, Button, Row } from "react-bootstrap";
import { MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import { NavLink, useNavigate } from "react-router-dom";
import {login} from "../http/userAPI";
import {useState, useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer (() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      let data = await login(username, password);
      user.setUser(user);
      user.setIsAuth(true);
      localStorage.setItem('token', data.token);
      navigate(MAIN_ROUTE);
    }
    catch(e) {
      alert("Check your dataInput");
      //alert(e.response.data.massage)
    }
  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Authentification</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
                  className="mt-3"
                  placeholder="Enter your username..."
                  value={username}
                  onChange={e => setUserName(e.target.value)}/>
          <Form.Control 
                  className="mt-3"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"/>
          <Row className="d-flex align-items-center justify-content-between mt-3 pl-3 pr-3">
            <div>
              No account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
            </div>
            <Button 
                  variant={"outline-success"}
                  onClick={signIn}
            >
              Sign In
            </Button>
          </Row>
          
        </Form>
      </Card> 
    </Container>
  );
})

export default Auth;