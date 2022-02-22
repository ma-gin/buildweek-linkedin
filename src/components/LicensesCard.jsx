import LicenseCardSec from "./LicenseCardSec"

export default function LicensesCard(props) {
  return( 
    <>
  <div className="card-section p-4 mb-3">


<div className='d-flex justify-content-between'>
<h4> Licenses</h4>
<div>
<i className="bi bi-plus-lg mr-2"></i>
<i className="bi bi-pencil"></i>
</div>
</div>
<LicenseCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Bachelor degree'} description={'Get known, put your content on your profile.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}} period={'July 2019 - October 2019 • 4 months'}/>
<LicenseCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Bachelor degree'} description={'Get known, put your content on your profile.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}} period={'July 2019 - October 2019 • 4 months'}/>
<LicenseCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Bachelor degree'} description={'Get known, put your content on your profile.'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}} period={'July 2019 - October 2019 • 4 months'}/>
<LicenseCardSec image={'http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif'} titleText={'Bachelor degree'} description={'Get known, put your content on your profile.'}  period={'July 2019 - October 2019 • 4 months'}/>

</div>
</>
  )
}
