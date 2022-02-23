import { Row, Col } from "react-bootstrap"
import HomeSidebarLeft from "./HomeSidebarLeft"
import PostPost from "./PostPost"
import GetAPost from "./GetAPost"

const NewsMain = () => {
  return (
    <div className="container padding-sec">
      <Row className="m-auto">
        <Col md={2}>
          <HomeSidebarLeft />
        </Col>
        <Col md={6}>
          <PostPost />
    <GetAPost/>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default NewsMain
