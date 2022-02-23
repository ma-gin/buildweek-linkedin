import LinkedNewsSec from "./LinkedNewsSec"

const LinkedNews = (props) => {
    return(

    <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
        <h6>{props.title}</h6>
        <i className="bi bi-info-square-fill font-14"></i>
        </div>
        <LinkedNewsSec news={'Somebody told me: Just do it'} date={'1 hour ago • 1.238 readers'}/>
        <LinkedNewsSec news={'Somebody told me: Just do it'} date={'1 hour ago • 1.238 readers'}/>
        <LinkedNewsSec news={'Somebody told me: Just do it'} date={'1 hour ago • 1.238 readers'}/>
        <LinkedNewsSec news={'Somebody told me: Just do it'} date={'1 hour ago • 1.238 readers'}/>
        <LinkedNewsSec news={'Somebody told me: Just do it'} date={'1 hour ago • 1.238 readers'}/>

    </div>


    )
}

export default LinkedNews 