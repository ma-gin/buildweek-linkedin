import { useState } from "react";
import {Form, Button} from 'react-bootstrap'

const SinglePost = (props) => {

  const [clicked, setClicked] = useState(false)

  const [post, setPost] = useState({
    text: undefined
  })
  
  const poId =
    "https://striveschool-api.herokuapp.com/api/posts/" +
    props.unique

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
    "https://striveschool-api.herokuapp.com/api/posts/" +
    props.unique

    try {
      const response = await fetch(
       posId,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
            "Content-type": "application/json",
          },
        }
      )
      if (response.ok) {
        alert('Modified successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const grabValue = (value) => {
    setPost({ text: value })
  }
  
  
  
  return (
    <div className="card-section p-4 mb-3">
      <div className="d-flex justify-content-between">
      <h4> {props.username}</h4>
      <div>
      <i
            className="bi bi-pencil mr-2"
            style={{ cursor: "pointer" }}
            onClick={()=> setClicked(!clicked)}></i>
      <i
            className="bi bi-trash3"
            style={{ color: "red", cursor: "pointer" }}
           onClick={()=> deleteData()}></i>
           </div>
           </div>
      <span className="mb-4">{props.text}</span>
      {clicked &&
      <Form style={{borderTop: '1px solid gray', paddingTop: '20px'}} onSubmit={(event) => handleSubmit(event)}>
      <Form.Group controlId="formBasicText">
        <Form.Control
          type="text"
          placeholder="Enter text"
          onChange={(e) => grabValue(e.target.value)}
          defaultValue={props.text}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>}
    </div>
  );
};
export default SinglePost;

