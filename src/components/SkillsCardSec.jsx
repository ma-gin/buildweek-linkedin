const SkillsCardSec = (props) => {

    return (

        <div className='d-flex' style={props.border}>
            <div className="mb-2 mr-1">
            <h5>{props.titleText}</h5>
            </div>

              <span> • {props.description}</span> 
        </div>

    )
}

export default SkillsCardSec