import { Row, Col } from "react-bootstrap"
import ActivitiesCard from "./ActivitiesCard"
import AnalysisCard from "./AnalysisCard"
import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import InfosCard from "./InfosCard"
import InterestCard from "./InterestCard"
import LanguagesCard from "./LanguagesCard"
import LicensesCard from "./LicensesCard"
import ProfileMain from "./ProfileMain"
import ResourcesCard from "./Resourcescard"
import SidebarTop from "./SidebarTop"
import SidebarTwo from "./SidebarTwo"
import SkillsCard from "./SkillsCard"

const MainSection = () => {
  return (
    <div class="container">
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
          <SkillsCard/>
          <LanguagesCard/>
          <InterestCard/>
        </Col>
        <Col md={4}>
          <SidebarTop />
          <SidebarTwo />
          <SidebarTwo />
        </Col>
      </Row>
    </div>
  )
}

export default MainSection
