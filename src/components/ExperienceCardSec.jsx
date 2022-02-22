import { Image } from "react-bootstrap"

const ExperienceCardSec = (props) => {
  const exId =
    "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/experiences/" +
    props.experienceId

  const deleteData = async () => {
    try {
      const response = await fetch(exId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
        },
      })
      if (response.ok) {
        props.fetch()
      }
    } catch (error) {
      console.log(error)
    }
  }

  let variable = props.selected

  return (
    <div className="d-flex justify-content-between" style={props.border}>
      <div className="d-flex">
        <Image
          className="experience-image"
          src={props.image}
          alt="experience image"></Image>
        <div className="mb-2">
          <h5 className="font-16">{props.titleText}</h5>
          <span className="d-block font-14">{props.description}</span>
          <span className="d-block font-12">{props.period}</span>
          <span className="d-block font-12">{props.location}</span>
        </div>
      </div>
      {variable === true && (
        <div className="d-flex">
          <i
            className="bi bi-pencil mr-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.toggle()
              props.experience(
                props.titleText,
                props.company,
                props.start,
                props.end,
                props.description,
                props.location
              )
              props.chanId(props.experienceId)
            }}></i>
          <i
            className="bi bi-trash3"
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => deleteData()}></i>
        </div>
      )}
    </div>
  )
}

export default ExperienceCardSec
