import { Row, Col, Button, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"
import "../App.css"
import "../profile.css"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function ProfileMain(props) {
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)

  let params = useParams()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    fetchData()
    props.bio(user.bio)
    props.fetchD(fetchData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!user.bio])

  const formData = new FormData()

  const uploadImg = (e) => {
    formData.append("profile", e.target.files[0])
  }

  const httpFetch =
    props.parameters === "62141c010448b4001511688d"
      ? "https://striveschool-api.herokuapp.com/api/profile/me"
      : "https://striveschool-api.herokuapp.com/api/profile/" + props.parameters

  const fetchData = async () => {
    try {
      const response = await fetch(httpFetch, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
        },
      })
      const data = await response.json()
      console.log(data)
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const submitFile = (e) => {
    e.preventDefault()

    axios({
      method: "post",
      url:
        "https://striveschool-api.herokuapp.com/api/profile/" +
        props.parameters +
        "/picture/",
      data: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  return (
    <div className="card-section profile-main mb-3">
      <img
        className="profile-cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fcurvy-mountain-road-idaho-tatiana-travelways.jpg&f=1&nofb=1"
        alt="cover"
      />
      <img className="profile-img object-top" src={user.image} alt="profile" />
{params.profileId === '62141c010448b4001511688d' && 
      <i className="bi bi-pencil pen-lg" onClick={() => handleShow()}></i>}
      <div className="profile-card m-4">
        <Row>
          <Col xs={6}>
            <h4 className="font-weight-bold">{`${user.name} ${user.surname}`}</h4>
            <h6>{user.title}</h6>
            <div className="d-flex">
              <h6>{user.area}</h6>
              <span className="mx-2"></span>
              <div className="link font-13">Contact Info</div>
            </div>
            <div className="link font-13">500+ connections</div>
          </Col>
          <Col xs={6}>
            <div className="d-flex align-items-center">
              <img
                className="profile-img-ed mr-2"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoursereport-s3-production.global.ssl.fastly.net%2Frich%2Frich_files%2Frich_files%2F6256%2Fs300%2Fstrive-20school-20logo.png&f=1&nofb=1"
                alt="strive"
              />
              <h6 className="smaller-font">Strive School</h6>
            </div>
          </Col>
        </Row>
        <Row>{params.profileId === '62141c010448b4001511688d' &&
          <>
          <div className="pl-3 mt-4 d-flex align-items-center">
            <Button className="generic-btn">Open to</Button>
            <Button className="generic-btn" variant="outline-primary">
              Add profile section
            </Button>
            <Button className="generic-btn" variant="outline-secondary">
              More
            </Button>
          </div></>}
        </Row>
        <Row className="d-none">
          <Col xs={6}>
            <div className="card-section p-2 work-card position-relative open-card font-12">
              <div className="font-weight-bold">Open to work</div>
              <div>Full Stack Developer roles</div>
              <div className="link font-12">See all details</div>
              <i className="bi bi-pen icon-tr"></i>
            </div>
          </Col>
          <Col xs={6}>
            <div className="card-section p-2 position-relative pr-5 open-card font-12">
              <div>
                <span className="font-weight-bold">
                  Find potential clients typ
                </span>
                by showcasing the services your provide.
              </div>
              <div className="link font-12">Get started</div>
              <i className="bi bi-x-lg icon-tr"></i>
            </div>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change profile image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" name="profile-img" onChange={uploadImg} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => submitFile(e)}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}
