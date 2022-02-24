/* change font size */
import { Container, Row, Col, Dropdown } from "react-bootstrap";
const HomeFooter = function () {
  return (
    <footer>
      <Container>
            <Row className="text-muted">
            <Col md={6}>
            <p className="pointer"> About </p>
            </Col>
            <Col md={6}>
            <p className="pointer">Accessibility </p>
            </Col>
            </Row>
            <Row className="text-muted">
            <Col md={6}>
            <p className="pointer">Visit our Help Center</p>
            </Col>
            <Col md={6}>
            <p className="pointer">Privacy & Terms </p>
            </Col>
            </Row>
            <Row className="text-muted">
            <Col md={12}>
            <p className="pointer"> Marketing Solutons </p>
            </Col>
            </Row>
            <Row className="text-muted">
            <Col md={6}>
            <p className="pointer">Advertising</p>
            </Col>
            <Col md={6}>
            <p className="pointer">Business</p>
            </Col>
            </Row>
            <Row className="text-muted">
            <Col md={9}>
            <p className="pointer">Download Linkedin Mobile App</p>
            </Col>
            <Col md={3}>
            <p className="pointer">More</p>
            </Col>
            </Row>
            <Row>
          <Col>
            <span className="linkedinIcon">Linked <i className="bi bi-linkedin"></i> </span>
            <span className="font-muted font-14">LinkedIn Corporation @2022</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HomeFooter;
