import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DETAIL_ROUTE } from "../utils/constants";

const PasswordItem = ({password}) => {
  const navigate = useNavigate();
  return (
    <Col className="mt-2" md={12} onClick={() => navigate(DETAIL_ROUTE + '/' + password.id)}>
      <Card style={{width: 300, cursor: "pointer"}} border={"dark"}>
        <div className="pl-4 mt-1 mb-1">{password.name}</div>
      </Card>
    </Col>
  );
};

export default PasswordItem;