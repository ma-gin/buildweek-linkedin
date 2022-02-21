

const InfosCardSec = (props) => {

    return(  
      <>
  <div className='d-flex justify-content-between'>
    <h5>{props.titleText}</h5>
  <i className={props.icons}></i>
  </div>
  <div>
  <span>{props.description}</span>
  </div>
  </>
  
    )
  }
  
  export default InfosCardSec