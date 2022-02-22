/* change font size */
import { Container, Row, Col } from "react-bootstrap";
const MyFooter = function () {
  return (
    <>
      <Container>
        <Row>
          <Col>LINKEDiN</Col>
        </Row>
        <Row className="text-muted">
          <Col xs={6} md={2}>
            <p> About </p>
            <p>Community Guidelines</p>
            <p>Privacy & Terms </p>
            <p>Sales Solutions</p>
            <p>Safety Center</p>
          </Col>
          <Col xs={6} md={2}>
            <p>Accessibility </p>
            <p> Careers </p>
            <p>Ad Choices</p>
            <p>Mobile</p>
            <p>Careers</p>
          </Col>
          <Col xs={6} md={2}>
            <p>Talent Solutions</p>
            <p> Marketing Solutons </p>
            <p>Advertising </p>
            <p>Community Guidelines</p>
            <p>Advertising</p>
            <p>Small Business</p>
          </Col>
          <Col md={2}>
            <Row>
              <i class="bi bi-question-circle-fill"></i>question
            </Row>
            <Row>
              <i class="bi bi-gear-fill"></i> Manage
            </Row>
          </Col>
          <Col md={2}>dropdown</Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
