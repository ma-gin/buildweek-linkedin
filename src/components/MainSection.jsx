import { Row, Col } from "react-bootstrap"
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
</Col>
<Col md={4}>

</Col>
        </Row>
    </div>

  )
}

export default MainSection