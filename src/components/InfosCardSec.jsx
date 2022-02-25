import { useParams } from "react-router-dom"


const InfosCardSec = (props) => {
let params = useParams()
    return(  
      <>
  <div className='d-flex justify-content-between'>
    <h4 className='mb-3'>{props.titleText}</h4>
    {params.profileId === '62141c010448b4001511688d' && 
  <i className={props.icons}></i>}
  </div>
  <div>
  <span className="font-14">{props.description}</span>
  </div>
  </>
  
    )
  }
  
  export default InfosCardSec