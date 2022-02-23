import { Row, Col } from "react-bootstrap"
import PostPost from "./PostPost"

const NewsMain = () => {
  return (
    <div className="container padding-sec">
      <Row className="m-auto">
        <Col md={2}></Col>
        <Col md={6}>
          <PostPost />
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default NewsMain
