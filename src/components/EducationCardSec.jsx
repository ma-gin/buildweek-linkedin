import { Image } from "react-bootstrap"
const SkillsCardSec = (props) => {

    return (

        <div className='d-flex' style={props.border}>
          <Image className="experience-image" src={props.image} alt='experience image'></Image>
            <div className="mb-2">
            <h5>{props.titleText}</h5>
            <span className="d-block">{props.description}</span>
            <span className="d-block">{props.period}</span>
            </div>
        </div>

    )
}

export default SkillsCardSec