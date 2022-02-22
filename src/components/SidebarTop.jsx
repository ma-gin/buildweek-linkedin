export default function SidebarTop() {
  const style = {
    color: "gray",
  }
  return (
    <div className="card-section py-2 px-3 mb-3 font-13" style={style}>
      <div className="d-flex justify-content-between my-2">
        <div>Edit public profile & URL</div>
        <i className="bi bi-question-circle"></i>
      </div>
      <div className="hr-line mx-auto"></div>
      <div className="d-flex justify-content-between my-2">
        <div>Add profile in another language</div>
        <i className="bi bi-question-circle"></i>
      </div>
    </div>
  )
}
