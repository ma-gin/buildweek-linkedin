
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
import SidebarPeople from "./SidebarPeople"
import SkillsCard from "./SkillsCard"
import MyFooter from "./MyFooter"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const MainSection = () => {

  const [infos, setInfos] = useState()


  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    infosRendered = !infosRendered
  })

  let infosRendered = true

  let change = (value) =>{

    setInfos(value)
  }

  let params = useParams()
  return (
    <div className="container padding-sec">
      <Row className="m-auto">
        <Col md={8}>
          <ProfileMain parameters={params.profileId} bio={change}/>
           {params.profileId === "62141c010448b4001511688d" &&
           <>
          <AnalysisCard parameters={params.profileId}/>
          <ResourcesCard parameters={params.profileId}/>
          </>
          }
         { infosRendered&&<InfosCard parameters={params.profileId} bio={infos}/>}
          {params.profileId === "62141c010448b4001511688d" &&
          <ActivitiesCard parameters={params.profileId}/>}
          <ExperienceCard parameters={params.profileId}/>
          <EducationCard parameters={params.profileId}/>
          <LicensesCard parameters={params.profileId}/>
          <SkillsCard parameters={params.profileId}/>
          <LanguagesCard parameters={params.profileId}/>
          <InterestCard parameters={params.profileId}/>
        </Col>
        <Col md={4}>
          <SidebarTop />
          <SidebarPeople sectionTitle={"People Also Viewed"} />
          <SidebarPeople sectionTitle={"People you may know"} />
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
};

export default MainSection;
