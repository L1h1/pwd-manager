import {observer} from "mobx-react-lite";
import { Container, Row, Col } from "react-bootstrap";
import CategoryBar from "../components/CategoryBar";
import PasswordList from "../components/PasswordList";
import { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchCategories, fetchPasswords, fetchPasswordsByCategory } from "../http/managerAPI";

const Main = observer(() => {
  const {manager} = useContext(Context);

  useEffect(() => {
    fetchCategories().then(data => manager.setCategories(data));
    fetchPasswords().then(data => manager.setPasswords(data));
  }, []);

  useEffect(() => {
    fetchPasswordsByCategory(manager.selectedCategory.id).then(data => {
      console.log(data);
      manager.setPasswords(data);
    });
  }, [manager.selectedCategory]);

  return (
    <Container>
      <Row>
        <Col className="mt-2" md={5}>
          <CategoryBar/>
        </Col>
        <Col md={7}>
          <PasswordList />
        </Col>
      </Row>
    </Container>
  )
})

export default Main;