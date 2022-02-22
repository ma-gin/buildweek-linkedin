import { Image } from "react-bootstrap"
import { useState } from "react"


const ExperienceCardSec = (props) => {

    const exId = "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/experiences/" + props.experienceId

    const deleteData = async () => {
        try {
            const response = await fetch(exId,
              {
                method: 'DELETE',
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
                },
              }
            );
            if(response.ok){
                alert('Deleted successfully')
            }
          } catch (error) {
            console.log(error);
          }
      
    }

let variable = props.selected

    return (

        <div className='d-flex justify-content-between' style={props.border}>
            <div className="d-flex">
          <Image className="experience-image" src={props.image} alt='experience image'></Image>
            <div className="mb-2">
            <h5 className="font-16">{props.titleText}</h5>
            <span className="d-block font-14">{props.description}</span>
            <span className="d-block font-12">{props.period}</span>
            <span className="d-block font-12" >{props.location}</span>
            </div>
            </div>
            {variable === true &&
            <i className="bi bi-trash3" style={{color:'red', cursor: 'pointer'}} onClick={()=> deleteData()}></i>
            }</div>
    )
}

export default ExperienceCardSec