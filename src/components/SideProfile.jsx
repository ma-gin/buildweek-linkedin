import { Button } from "react-bootstrap"

export default function SideProfile(props) {
  return (
    <div className="d-flex my-2">
      <img className="side-profile-img" src={props.img} alt="" />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="font-weight-bold mr-2">{props.name}</div>
          <span>3rd</span>
        </div>
        <div className="description-text my-1">{props.description}</div>
        <Button className="generic-btn side-btn" variant="outline-secondary">
          Message
        </Button>
      </div>
    </div>
  )
}
