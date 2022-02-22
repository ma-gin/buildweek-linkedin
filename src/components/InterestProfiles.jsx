import { Button } from "react-bootstrap"

export default function InterestProfiles(props) {
  return (
    <div className="d-flex my-2">
      <img className="side-profile-img" src={props.img} alt="" />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="font-weight-bold mr-2">{props.name}</div>
          <i className="bi bi-diamond-fill"></i>
        </div>
        <span>{props.description}</span>
        <span>1.697.452 follower</span>
      </div>
    </div>
  )
}
