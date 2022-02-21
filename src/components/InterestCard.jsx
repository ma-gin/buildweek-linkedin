import { Col, Row } from 'react-bootstrap'
import InterestCardSec from './InterestCardSec'
import InterestProfiles from './InterestProfiles'
import { useState } from 'react'

export default function InterestCard(props) {

  const [section, setSection] = useState(0)
  return( 
    <>
  <div className="card-section p-4 mb-3">

<h4> Interest</h4>
<div style={{borderBottom: '1px solid gray'}}>
<Row style={{width:'60%'}}>
{section=== 1 ?
  <Col md={4} style={{borderBottom: '2px solid green'}} onClick={()=> setSection(1)}>
  <h5 className='interest-titles' style={{color: 'green'}}>Influencer</h5>
  
  </Col>: <Col md={4}  onClick={()=> setSection(1)}>
  <h5 className='interest-titles' style={{color: 'gray'}}>Influencer</h5>
  
  </Col>
}
  {section=== 2 ?
  <Col md={4} style={{borderBottom: '2px solid green'}} onClick={()=> setSection(2)}>
  <h5 className='interest-titles' style={{color: 'green'}}>Company</h5>
  
  </Col>: <Col md={4}  onClick={()=> setSection(2)}>
  <h5 className='interest-titles' style={{color: 'gray'}}>Company</h5>
  
  </Col>
}
  {section=== 3 ?
  <Col md={4} style={{borderBottom: '2px solid green'}} onClick={()=> setSection(3)}>
  <h5 className='interest-titles' style={{color: 'green'}}>Schools and university</h5>
  
  </Col>: <Col md={4}  onClick={()=> setSection(3)}>
  <h5 className='interest-titles' style={{color: 'gray'}}>Schools and university</h5>
  
  </Col>
}
</Row>
</div>

  
{section===1 ?
  <Row>
  <Col md={6}>
<InterestProfiles
        img={
          "https://s8d2r8j5.rocketcdn.me/wp-content/uploads/2019/11/1_VJQhanK3SjxTPT4Ifd0MSg.jpeg"
        }
        name={"Steve Jobs"}
        description={"Aplle Inc. CEO"}
      />
      </Col>
      <Col md={6}>
      <InterestProfiles
        img={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1"
        }
        name={"Elon Musk"}
        description={"Business & Technology at Tesla and SpaceX"}
      />
      </Col>
</Row>: <div></div>}
{section===2 ?
  <Row>
  <Col md={6}>
<InterestProfiles
        img={
          "https://yt3.ggpht.com/ytc/AKedOLQDwJKsY3iwQz_oaWTqewhL4Cs7JukJwGaEtJgTHg=s900-c-k-c0x00ffffff-no-rj"
        }
        name={"Apple Inc."}
        
      />
      </Col>
      <Col md={6}>
      <InterestProfiles
        img={
          "data:image/png;base64,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"
        }
        name={"Juventus FC"}
      />
      </Col>
</Row>: <div></div>}

{section===3 ?
  <Row>
  <Col md={6}>
<InterestProfiles
         img={
          "https://strive.school/favicon.ico"
        }
        name={"Strive School"}
      />
      </Col>
      <Col md={6}>
      <InterestProfiles
        img={
          "data:image/png;base64,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"
        }
        name={"Harvard University"}
      />
      </Col>
</Row>: <div></div>}
</div>
</>
  )
}
