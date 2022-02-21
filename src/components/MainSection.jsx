import { Row, Col } from "react-bootstrap"
import ProfileMain from "./ProfileMain"
import AnalysisCard from "./AnalysisCard"

const MainSection = () => {
  return (
    <div class="container">
      <Row className="m-auto">
        <Col md={8}>
          <ProfileMain />
          <AnalysisCard />
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default MainSection
