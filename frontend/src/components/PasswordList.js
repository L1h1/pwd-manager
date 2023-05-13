import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import PasswordItem from "./PasswordItem";
import { Row } from "react-bootstrap";

const PasswordList = observer(() => {
  const {manager} = useContext(Context);
  return (
    <Row className="mt-3">
      {manager.passwords.map(password => 
        <PasswordItem key={password.id} password={password}></PasswordItem>
      )}
    </Row>
  )
})

export default PasswordList;