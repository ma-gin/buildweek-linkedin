import { Row, Col, Button } from "react-bootstrap"
import "../profile.css"

export default function ProfileMain() {
  return (
    <div className="card-section profile-main">
      <img
        className="profile-cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fcurvy-mountain-road-idaho-tatiana-travelways.jpg&f=1&nofb=1"
        alt="cover"
      />
      <img
        className="profile-img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F5%2F4018%2F4661169842_b3de099750_b.jpg&f=1&nofb=1"
        alt="profile"
      />
      <div className="profile-card m-4">
        <Row>
          <Col xs={6}>
            <h4 className="font-weight-bold">Javi Davidson</h4>
            <h6>Senior Full Stack Developer</h6>
            <div className="flexbox">
              <h5>Santa Barbara, CA</h5>
              <div className="link">Contact Info</div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="flex">
              <img src="" alt="" />
              <h5>Strive School</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Button>Open to</Button>
          <Button>Add profile section</Button>
          <Button>More</Button>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="font-weight-bold">Open to work</div>
            <div>Full Stack Developer roles</div>
            <div className="link">See all details</div>
          </Col>
          <Col xs={6}>
            <div>
              <span className="font-weight-bold">Find potential clients </span>
              by showcasing the services your provide.
            </div>
            <div className="link">Get started</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
