import ActivitiesCardSec from "./ActivitiesCardSec"

export default function ActivitiesCard(props) {
  return( 
    <>
  <div className="card-section p-4 mb-3">
    <div className="d-flex justify-content-between">
<div>
<h4> Activities</h4>
<p>500+ follower</p>
</div>
<span>Button Placeholder</span>
</div>
<ActivitiesCardSec titleText={'Are 3 weeks that you are not posting news'} description={'The most recent posts you share and comments will appear here.'}/>

</div>
</>
  )
}
