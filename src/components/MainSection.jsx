import { Row, Col } from "react-bootstrap"
import ActivitiesCard from "./ActivitiesCard"
import AnalysisCard from "./AnalysisCard"
import InfosCard from "./InfosCard"
import ResourcesCard from "./Resourcescard"


const MainSection = () => {

  return(  <div class="container">
        <Row className="m-auto" >

<Col md={8}>
<AnalysisCard/>
<ResourcesCard/>
<InfosCard/>
<ActivitiesCard/>
</Col>
<Col md={4}>

</Col>
        </Row>
    </div>

  )
}

export default MainSection