import { Container, Row, Col } from "react-bootstrap";
const MyFooter = function () {
  return (
    <>
      <Container>
        <Row>
          <Col>LINKEDiN</Col>
        </Row>
        <Row className="text-muted row-cols-10">
          <Col>
            <Col xs={6} md={3}>
              About
            </Col>
            <Col xs={6} md={3}>
              Accessibility
            </Col>
            <Col xs={6} md={3}>
              Talent Solutions
            </Col>
            <Col xs={6} md={3}>
              Community Guidelines
            </Col>
            <Col xs={6} md={3}>
              Careers
            </Col>
            <Col xs={6} md={3}>
              Martketing Solutions
            </Col>
            <Col xs={6} md={3}>
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
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
