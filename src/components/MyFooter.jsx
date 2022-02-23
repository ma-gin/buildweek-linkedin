/* change font size */
import { Container, Row, Col, Dropdown } from "react-bootstrap"
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
          </Col>
          <Col xs={6} md={2}>
            <p>Talent Solutions</p>
            <p> Marketing Solutons </p>
            <p>Advertising</p>
            <p>Small Business</p>
          </Col>
          <Col md={2}>
            <Row>
              <i className="bi bi-question-circle-fill"></i>question
            </Row>
            <Row>
              <i className="bi bi-gear-fill"></i> Manage
            </Row>
          </Col>
          <Col md={2}>
            {/* add border */}
            <Dropdown>
              Select Language
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                English (English)
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  English(English)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Polish</Dropdown.Item>
                <Dropdown.Item href="#/action-4">German</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyFooter
