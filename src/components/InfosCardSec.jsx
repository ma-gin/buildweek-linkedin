

const InfosCardSec = (props) => {

    return(  
      <>
  <div className='d-flex justify-content-between'>
    <h4 className='mb-3'>{props.titleText}</h4>
  <i className={props.icons}></i>
  </div>
  <div>
  <span className="font-14">{props.description}</span>
  </div>
  </>
  
    )
  }
  
  export default InfosCardSec