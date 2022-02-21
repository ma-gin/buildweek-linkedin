const LanguagesCardSec = (props) => {

    return (

        <div className='d-flex' style={props.border}>
            <div className="mb-2 mr-1">
            <h5>{props.titleText}</h5>
            <span>{props.description}</span> 
            </div>
        </div>

    )
}

export default LanguagesCardSec