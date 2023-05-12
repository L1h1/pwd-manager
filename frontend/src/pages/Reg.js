import { Container, Card, Form, Button, Row } from "react-bootstrap";
import { LOGIN_ROUTE } from "../utils/constants";
import { NavLink, useNavigate } from "react-router-dom";
import {registration} from "../http/userAPI";
import {useState, useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Reg = observer(() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');
  const [email, setEmail] = useState('');
  const signUp = async () => {
    try {
      let data;
      if(password === repeatePassword) {
        data = await registration(userName, email, password);
      }
      else {
        alert("Passwords are not the same");
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(LOGIN_ROUTE);
      alert(`${userName} was successfully register\nIt's time to Sign In :)`);
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
        <h2 className="m-auto">Registration</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
                  className="mt-3"
                  placeholder="Enter your username..."
                  value={userName}
                  onChange={e => setUserName(e.target.value)}/>
          <Form.Control 
                  className="mt-3"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}/>       
          <Form.Control 
                  className="mt-3"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"/>
          <Form.Control 
                  className="mt-3"
                  placeholder="Repeate password..."
                  value={repeatePassword}
                  onChange={e => setRepeatePassword(e.target.value)}
                  type="password"/>
          <Row className="d-flex align-items-center justify-content-between mt-3 pl-3 pr-3">
            <div>
              Have an account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
            </div>
            <Button 
                  variant={"outline-success"}
                  onClick={signUp}
            >
              Sign Up
            </Button>
          </Row>
          
        </Form>
      </Card> 
    </Container>
  );
})

export default Reg;