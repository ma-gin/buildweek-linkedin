import SideProfile from "./SideProfile"

export default function SidebarPeople(props) {
  return (
    <div className="card-section p-3 mb-3">
      <h6 className="people-title font-weight-bold">{props.sectionTitle}</h6>
      <SideProfile
        img={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1"
        }
        name={"Elon Musk"}
        description={"Business & Technology at Tesla and SpaceX"}
        level={"1st"}
      />
      <SideProfile
        img={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1"
        }
        name={"Elon Musk 2"}
        description={"Business & Technology at Tesla and SpaceX"}
        level={"1st"}
      />
      <SideProfile
        img={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1"
        }
        name={"Elon Musk 3"}
        description={"Business & Technology at Tesla and SpaceX"}
        level={"1st"}
      />
      <SideProfile
        img={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1"
        }
        name={"Elon Musk 4"}
        description={"Business & Technology at Tesla and SpaceX"}
        level={"1st"}
      />
    </div>
  )
}
