const ResourcesCardSec = (props) => {

    return (

        <div className='d-flex' style={props.border}>
            <i className={props.icons}></i>
            <div className="mb-2">
            <h5>{props.titleText}</h5>
            <span >{props.description}</span>
            </div>
        </div>

    )
}

export default ResourcesCardSec