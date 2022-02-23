import { Row, Col } from "react-bootstrap"
import HomeSidebarLeft from "./HomeSidebarLeft"
import PostPost from "./PostPost"
import GetAPost from "./GetAPost"
import LinkedNews from "./LinkedNews"
import LinkedNewsSec from "./LinkedNewsSec"

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
        <Col md={4}>
        <LinkedNews title={'LinkedIn News'}/>        
        </Col>
      </Row>
    </div>
  )
}

export default NewsMain
