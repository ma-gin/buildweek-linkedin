import { useState, useEffect } from "react"

export default function HomeProfile() {
  const [user, setUser] = useState({})

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          },
        }
      )
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="card-section text-center position-relative font-11">
      <img
        className="home-cover-img mb-5"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fcurvy-mountain-road-idaho-tatiana-travelways.jpg&f=1&nofb=1"
        alt=""
      />
      <img className="profile-img-home" src={user.image} alt="profile" />
      <h4 className="font-weight-bold font-16">{`${user.name} ${user.surname}`}</h4>
      <h6 className="font-14 mb-3">{user.title}</h6>
      <div className="d-flex home-connections p-2 text-left">
        <div className="d-flex flex-column">
          <p>Connections</p>
          <p>Grow your network</p>
          <p>Who viewed your profile</p>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <p>500+</p>
          <p>500+</p>
        </div>
      </div>
      <div className="text-left try-prem-home p-2">
        <p>Access exclusive tools & insights</p>
        <p className="font-weight-bold">Try Premium for free</p>
      </div>
      <div className="text-left p-2">My items</div>
    </div>
  )
}
