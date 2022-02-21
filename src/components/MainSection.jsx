import { Row, Col } from "react-bootstrap"
import ActivitiesCard from "./ActivitiesCard"
import AnalysisCard from "./AnalysisCard"
import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import InfosCard from "./InfosCard"
import LicensesCard from "./LicensesCard"
import ProfileMain from "./ProfileMain"
import ResourcesCard from "./Resourcescard"
import SidebarTop from "./SidebarTop"
import SidebarPeople from "./SidebarPeople"

const MainSection = () => {
  return (
    <div className="container">
      <Row className="m-auto">
        <Col md={8}>
          <ProfileMain />
          <AnalysisCard />
          <ResourcesCard />
          <InfosCard />
          <ActivitiesCard />
          <ExperienceCard />
          <EducationCard />
          <LicensesCard />
        </Col>
        <Col md={4}>
          <SidebarTop />
          <SidebarPeople sectionTitle={"People Also Viewed"} />
          <SidebarPeople sectionTitle={"People you may know"} />
        </Col>
      </Row>
    </div>
  )
}

export default MainSection
