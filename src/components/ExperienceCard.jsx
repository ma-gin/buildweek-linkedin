import ExperienceCardSec from "./ExperienceCardSec";
import { useEffect, useState } from "react";
import AddExperience from "./AddExperience";

export default function ExperienceCard(props) {
  const [user, setUser] = useState([]);

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const dataFetch = "https://striveschool-api.herokuapp.com/api/profile/" + props.id + "/experiences"
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          },
        }
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Experiences</h4>
          <div>
            <i
              className="bi bi-plus-lg mr-2"
              onClick={() => {
                setSelected(!selected);
              }}
            ></i>
            <i className="bi bi-pencil"></i>
          </div>
        </div>
        {user.map((userex) => (
          <ExperienceCardSec
            image={
              "http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif"
            }
            titleText={userex.role}
            description={userex.description}
            border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
            period={userex.startDate + " - " + userex.endDate}
            location={userex.area}
            key={userex._id}
          />
        ))}
        {selected === true && <AddExperience />}
      </div>
    </>
  );
}
