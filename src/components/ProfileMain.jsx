import { Row, Col, Button } from "react-bootstrap"
import "../App.css"
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
      <i class="bi bi-pen pen-lg"></i>
      <div className="profile-card m-4">
        <Row>
          <Col xs={6}>
            <h4 className="font-weight-bold">Javi Davidson</h4>
            <h6>Senior Full Stack Developer</h6>
            <div className="flexbox">
              <h6>Santa Barbara, CA</h6>
              <div className="link ml-3">Contact Info</div>
            </div>
            <div className="link">500+ connections</div>
          </Col>
          <Col xs={6}>
            <div className="d-flex align-items-center">
              <img
                className="profile-img-ed mr-2"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoursereport-s3-production.global.ssl.fastly.net%2Frich%2Frich_files%2Frich_files%2F6256%2Fs300%2Fstrive-20school-20logo.png&f=1&nofb=1"
                alt="strive"
              />
              <h6>Strive School</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="pl-3 mt-2 mb-3">
            <Button className="generic-btn">Open to</Button>
            <Button className="generic-btn" variant="outline-primary">
              Add profile section
            </Button>
            <Button className="generic-btn" variant="outline-secondary">
              More
            </Button>
          </div>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="card-section p-2 work-card position-relative open-card">
              <div className="font-weight-bold">Open to work</div>
              <div>Full Stack Developer roles</div>
              <div className="link">See all details</div>
              <i class="bi bi-pen icon-tr"></i>
            </div>
          </Col>
          <Col xs={6}>
            <div className="card-section p-2 position-relative pr-5 open-card">
              <div>
                <span className="font-weight-bold">
                  Find potential clients{" "}
                </span>
                by showcasing the services your provide.
              </div>
              <div className="link">Get started</div>
              <i class="bi bi-x-lg icon-tr"></i>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
