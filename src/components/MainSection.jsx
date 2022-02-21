import { Row, Col } from "react-bootstrap"
import ActivitiesCard from "./ActivitiesCard"
import AnalysisCard from "./AnalysisCard"
import ExperienceCard from "./ExperienceCard"
import InfosCard from "./InfosCard"
import ProfileMain from "./ProfileMain"
import ResourcesCard from "./Resourcescard"

const MainSection = () => {
  return(  <div class="container">
        <Row className="m-auto" >

<Col md={8}>
  <ProfileMain/>
<AnalysisCard/>
<ResourcesCard/>
<InfosCard/>
<ActivitiesCard/>
<ExperienceCard/>
</Col>
<Col md={4}>
</Col>
        </Row>
    </div>
  )
}

export default MainSection
