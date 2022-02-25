import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import { Link } from "react-router-dom"
import MainSection from "./MainSection"

const SinglePost = (props) => {
  const [clicked, setClicked] = useState(false)

  const [dots, setDots] = useState(false)

  const [post, setPost] = useState({
    text: undefined,
  })

  let date = props.date.toLocaleString('en-GB', { timeZone: 'UTC' })

  
  const postId = props.unique
  // const userId = "62141c010448b4001511688d"

  const formData = new FormData()

  const poId =
    "https://striveschool-api.herokuapp.com/api/posts/" + props.unique

  const deleteData = async () => {
    try {
      const response = await fetch(poId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
        },
      })
      if (response.ok) {
        console.log("Ok")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const posId =
      "https://striveschool-api.herokuapp.com/api/posts/" + props.unique
      axios({
        method: "post",
        url: "https://striveschool-api.herokuapp.com/api/posts/" + postId,
        data: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log(response)
          props.fetch()
        })
        .catch((error) => {
          console.log(error)
        })

    try {
      const response = await fetch(posId, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          "Content-type": "application/json",
        },
      })
      if (response.ok) {
        console.log("OkOkOk")
      }
    } catch (error) {
      console.log(error)
    }


    
  }

  const grabValue = (value) => {
    setPost({ text: value })
  }

  // const updateImg = (e) => {
  //   e.preventDefault()

  //   axios({
  //     method: "post",
  //     url: "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/picture/",
  //     data: formData,
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then(function (response) {
  //       //handle success
  //       console.log(response)
  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.log(response)
  //     })
  // }

  const uploadImg = (e) => {
    e.preventDefault()
    formData.append("post", e.target.files[0])
  }

  return (
    <div className="card-section p-4 mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center mb-3">
          <img className="post-img mr-2" src={props.userimg} alt="" />
          <div>
          <Link to={"/profile/" + props.params} element={<MainSection />}>
            <h6 className="mb-0"> {props.username}</h6>
          </Link>
          <span className="text-muted font-12 text-one">{props.job}</span>
          <span className="text-muted font-11 text-one">{date}</span>
          </div>
        </div>
       { props.params=== '62141c010448b4001511688d'&& 
        <i
          className="bi bi-three-dots d-block"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setDots(!dots)
            setClicked(false)
          }}></i>}
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <div className="mb-2 font-14">{props.text}</div>
          {props.image && (
            <img className="post-post-img mb-3" src={props.image} alt="none" />
          )}
        </div>

        {dots && (
          <div className="d-flex">
            <i
              className="bi bi-pencil mr-2 d-block"
              style={{ cursor: "pointer" }}
              onClick={() => setClicked(!clicked)}></i>
            <i
              className="bi bi-trash3 d-block"
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {deleteData(); props.fetch()}}></i>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between" style={{ borderTop: "1px solid gray", paddingTop: "20px" }} >
          <div className="pointer">
          <i className="bi bi-hand-thumbs-up mr-2"></i>
          <span >Like</span>
          </div>
          <div className="pointer">
          <i className="bi bi-chat-left-dots mr-2"></i>
          <span >Comment</span>
          </div>
          <div className="pointer">
          <i className="bi bi-arrow-90deg-right mr-2"></i>
          <span >Share</span>
          </div>
          <div className="pointer" >
          <i className="bi bi-send-fill mr-2"></i>
          <span >Send</span>
          </div>
          </div>
      {clicked && (
        <Form
          style={{ borderTop: "1px solid gray", paddingTop: "20px" }}
          onSubmit={(event) => {handleSubmit(event)}}>
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Enter text"
              onChange={(e) => grabValue(e.target.value)}
              defaultValue={props.text}
            />
            <p className="font-weight-bold mt-4 font-12">Upload Image</p>
            <Form.Control type="file" name="profile-img" onChange={uploadImg} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  )
}
export default SinglePost
