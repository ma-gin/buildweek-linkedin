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
            <p>Accessibility </p>
            <p>Talent Solutions</p>
            <p>Community Guidelines</p>
            <p>Careers</p>
            <p>Martketing Solutions</p>
          </Col>
          <Col xs={6} md={2}>
            <p> About </p>
            <p>Accessibility </p>
            <p>Talent Solutions</p>
            <p>Community Guidelines</p>
            <p>Careers</p>
            <p>Martketing Solutions</p>
          </Col>
          <Col xs={6} md={2}>
            <p> About </p>
            <p>Accessibility </p>
            <p>Talent Solutions</p>
            <p>Community Guidelines</p>
            <p>Careers</p>
            <p>Martketing Solutions</p>
          </Col>
          <Col md={2}>question</Col>
          <Col md={2}>dropdown</Col>
          <Row>
            <Col>other stuff</Col>
          </Row>
          {/* <Col xs={6} md={3}>
            Privacy & Terms
          </Col>
          <Col xs={6} md={3}>
            Ad Choices
          </Col>
          <Col xs={6} md={3}>
            Advertising
          </Col>
          <Col xs={6} md={3}>
            Sales Solutions
          </Col>
          <Col xs={6} md={3}>
            Mobile
          </Col>
          <Col xs={6} md={3}>
            Small Business
          </Col>
          <Col xs={6} md={3}>
            Safety Center
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

/* <i class="bi bi-question-circle-fill"></i> */
/* <i class="bi bi-gear-fill"></i> */
export default MyFooter;
