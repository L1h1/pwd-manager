import { Container, Row, Col, Card} from "react-bootstrap";

function Manager() {
  return (
    <Container>
      <Card.Deck mb="3">
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </Card.Deck>
      {/* <Row>
        <Col md={4}>
          <Card>
          <Card.Header>Intro</Card.Header>
            <Card.Body>
              <Card.Text>
              Have you ever thought about having one common source of your credentials that could be accessed from many devices and be always by your hand while you were brute-forcing the right password for this or that service? We solved this issue for you, so now you have to remember the only credentials for signing in to our Password Manager service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card  style={{heght: 600}}>
            <Card.Header>Functionality</Card.Header>
              <Card.Body>
                <Card.Text>
                The server provides its clients with the opportunity to manage a huge number of passwords related to different categories. The more flexibility there is, the more you can create your own categories and structure your credentials the way you like. You shouldn't worry about the safety of your data because it is well encrypted and our application servers have pre-built malicious protection.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
        <Card>
          <Card.Header>Data consistency</Card.Header>
            <Card.Body>
              <Card.Text>
              This app uses popular cloud providers infrastructure, which guarantees the safety of your data. In case the data were lost by those cloud providers, it wouldn't matter because it would be a world-size catastrophe. So, we're sure that your data won't be lost.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}





      {/* <h3>Intro</h3>
      <p>Have you ever thought about having one common source of your credentials that could be accessed from many devices and be always by your hand while you were brute-forcing the right password for this or that service? We solved this issue for you, so now you have to remember the only credentials for signing in to our Password Manager service.</p>
      <h3>Functionality</h3>
      <p>The server provides its clients with the opportunity to manage a huge number of passwords related to different categories. The more flexibility there is, the more you can create your own categories and structure your credentials the way you like. You shouldn't worry about the safety of your data because it is well encrypted and our application servers have pre-built malicious protection.</p>
      <h3>Data consistency</h3>
      <p>This app uses popular cloud providers infrastructure, which guarantees the safety of your data. In case the data were lost by those cloud providers, it wouldn't matter because it would be a world-size catastrophe. So, we're sure that your data won't be lost.</p>
      <h3>High availability</h3>
      <p>Since your data would be replicated over several regions with low-latency networks, there would be an opportunity to share credentials across the world with minimal downtime.</p> */}
    </Container> 
  );
}

export default Manager;
