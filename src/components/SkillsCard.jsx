import { Button } from "react-bootstrap"
import SkillsCardSec from "./SkillsCardSec"

export default function SkillsCard(props) {
  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Skills</h4>
          <div>
            <Button className="generic-btn" variant="outline-primary">
              Evaluate your skills
            </Button>
            <i className="bi bi-plus-lg mr-2"></i>
            <i className="bi bi-pencil"></i>
          </div>
        </div>
        <SkillsCardSec
          titleText={"Full Stack Developer"}
          description={"3"}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        />
        <SkillsCardSec
          titleText={"Full Stack Developer"}
          description={"7"}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        />
        <SkillsCardSec titleText={"Full Stack Developer"} description={"196"} />
      </div>
    </>
  )
}
