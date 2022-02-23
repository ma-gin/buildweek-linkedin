import { useState } from "react"
import { Button } from "react-bootstrap"

export default function PostPost() {
  const [post, setPost] = useState({ text: undefined })

  const updatePost = (value) => {
    setPost({ text: value })
    console.log(post.text)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("working")

    try {
      await fetch("https://striveschool-api.herokuapp.com/api/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          "Content-type": "application/json",
        },
      })
      alert("posted")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card-section px-4 py-1 mb-3">
      <div className="d-flex align-items-center">
        <img
          className="post-img m-3"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmix96sac.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2018%2F10%2FGettyImages-498542040.jpg&f=1&nofb=1"
          alt=""
        />
        <input
          className="post-input pl-3"
          type="text"
          placeholder="Start a post"
          onChange={(e) => {
            updatePost(e.target.value)
          }}
        />
        <Button
          className="ml-3"
          onClick={(e) => {
            handleSubmit(e)
          }}>
          Send
        </Button>
      </div>
      <div className="d-flex justify-content-between font-14 mt-2">
        <div className="d-flex text-muted">
          <ImageSVG />
          Photo
        </div>
        <div className="d-flex  text-muted">
          <VideoSVG />
          Video
        </div>
        <div className="d-flex text-muted">
          <EventSVG />
          Event
        </div>
        <div className="d-flex text-muted">
          <ArticleSVG />
          Write article
        </div>
      </div>
    </div>
  )
}

const ImageSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mercado-match"
      width="24"
      height="24"
      className="mr-2 text-lightBlue"
      focusable="false">
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg>
  )
}

const VideoSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mercado-match"
      width="24"
      height="24"
      className="mr-2 text-green"
      focusable="false">
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
    </svg>
  )
}

const EventSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mercado-match"
      width="24"
      height="24"
      className="mr-2 text-orange"
      focusable="false">
      <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
    </svg>
  )
}

const ArticleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mercado-match"
      width="24"
      height="24"
      className="mr-2 text-pink"
      focusable="false">
      <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
    </svg>
  )
}
