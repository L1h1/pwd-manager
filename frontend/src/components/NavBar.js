import { CREATE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MANAGER_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import {observer} from "mobx-react-lite";
import {Navbar, Button, Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav"
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { useContext } from 'react';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink style={() => {
          return {
            color: "black",
            textDecoration: "none",
          };
        }} to={MANAGER_ROUTE}>Password Manager</NavLink>
        {user.isAuth ? 
          <Nav className="ml-auto">
            <Button 
                variant={"outline-dark"} 
                onClick={() => navigate(CREATE_ROUTE)}>
              Create
            </Button>
            <Button 
                className="ml-3" 
                variant={"outline-dark"} 
                onClick={() => navigate(MAIN_ROUTE)}>
              Passwords
            </Button>
            <Button 
                className="ml-3" 
                variant={"outline-dark"} 
                onClick={() => { logOut();
                localStorage.setItem('token', "")
                navigate(LOGIN_ROUTE)}}>
              Log Out
            </Button>
          </Nav>
          : 
          <Nav className="ml-auto">
            <Button variant={"outline-dark"} onClick={() => navigate(LOGIN_ROUTE)}>Sign In</Button>
            <Button className="ml-3" variant={"outline-dark"} onClick={() => navigate(REGISTRATION_ROUTE)}>Sign Up</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;