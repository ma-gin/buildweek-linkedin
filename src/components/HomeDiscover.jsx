export default function HomeDiscover() {
  return (
    <div className="card-section font-10 mt-2 p-2">
      <div className="collapser">
        <h6 className="font-10">Recent</h6>
        <div className="d-flex">
          <CalendarSVG />
          <span>People Trends in 2022</span>
        </div>
      </div>
      <div className="collapser">
        <h6 className="font-10">Groups</h6>
        <div className="d-flex font-10">
          <PeopleSVG />
          <span>All things</span>
          <span>See all</span>
        </div>
      </div>
      <div className="collapser">
        <div className="d-flex">
          <h6 className="font-10">Events</h6>
        </div>
        <div className="d-flex">People Trends</div>
      </div>
      <div className="link">Followed Hashtags</div>
      <div className="text-center">Discover more</div>
    </div>
  )
}

const CalendarSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      className="mercado-match"
      width="16"
      height="16"
      focusable="false">
      <path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z"></path>
    </svg>
  )
}

const PeopleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      className="mercado-match"
      width="16"
      height="16"
      focusable="false">
      <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
      <circle cx="8" cy="4" r="2"></circle>
      <circle cx="12.5" cy="5.5" r="1.5"></circle>
      <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
      <circle cx="3.5" cy="5.5" r="1.5"></circle>
    </svg>
  )
}
