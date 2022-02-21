import { Row, Col } from "react-bootstrap"
import AnalysisCard from "./AnalysisCard"
import ResourcesCard from "./Resourcescard"


const MainSection = () => {

  return(  <div class="container">
        <Row className="m-auto" >

<Col md={8}>
<AnalysisCard/>
<ResourcesCard/>
</Col>
<Col md={4}>

</Col>
        </Row>
    </div>

  )
}

export default MainSection