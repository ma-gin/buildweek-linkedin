
import LanguagesCardSec from "./LanguagesCardSec"

export default function LanguagesCard(props) {
  return( 
    <>
  <div className="card-section p-4 mb-3">


<div className='d-flex justify-content-between'>
<h4> Languages</h4>
<div>
<i class="bi bi-plus-lg mr-2"></i>
<i class="bi bi-pencil"></i>
</div>
</div>
<LanguagesCardSec titleText={'Spanish'} description={'Mother tongue'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}}/>
<LanguagesCardSec titleText={'Polish'} description={'Mother tongue'} border={{borderBottom: '1px solid gray', marginBottom:'10px'}}/>
<LanguagesCardSec titleText={'Italian'} description={'Mother tongue'} />

</div>
</>
  )
}
