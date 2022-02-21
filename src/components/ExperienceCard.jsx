import ExperienceCardSec from "./ExperienceCardSec"

export default function ExperienceCard(props) {
  return( 
    <>
  <div className="card-section p-4 mb-3">


<div className='d-flex justify-content-between'>
<h4> Experiences</h4>
<div>
<i class="bi bi-plus-lg mr-2"></i>
<i class="bi bi-pencil"></i>
</div>
</div>
<ExperienceCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Full Stack Developer'} description={'Get known, put your content on your profile.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}} period={'July 2019 - October 2019 • 4 months'} location={'Barcelona'}/>
<ExperienceCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Mine network'} description={'Save and edit your network.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}} period={'July 2019 - October 2019 • 4 months'} location={'Barcelona'}/>
<ExperienceCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Activities'} description={'Find the shared post from your network.'} period={'July 2019 - October 2019 • 4 months'} location={'Barcelona'}/>

</div>
</>
  )
}
