import {
  Container,
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import NewsMain from "./NewsMain"
import MainSection from "./MainSection"

const MyNavbar = function (props) {
  return (
    <div className="navbar-full">
      <Container>
        <Navbar expand="lg" className="mb-4">
          <i className="bi bi-linkedin mr-2"></i>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-muted">
              <Link to="/" element={<NewsMain />} className="mr-4 font-12">
                <i className="bi bi-house-door-fill"></i>Home
              </Link>
              <div className="mr-4 font-12">
                <i className="bi bi-people-fill"></i>NetWork
              </div>
              <div className="mr-4 font-12">
                <i className="bi bi-briefcase-fill"></i>Jobs
              </div>
              <div className="mr-4 font-12">
                <i className="bi bi-chat-dots-fill"></i>Message
              </div>
              <div className="mr-4 font-12">
                <i className="bi bi-bell-fill"></i>Notifications
              </div>
              <Link
                to="/profile"
                element={<MainSection />}
                className="mr-4 font-12">
                <i className="bi bi-person-circle"></i>
                <NavDropdown title="Me" id="profile-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Link>
              <div className="b-left pl-4 font-12">
                <i className="bi bi-grid-3x3-gap-fill"></i>{" "}
                <NavDropdown title="Work" id="work-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="text-center  ml-5 font-12 promotional">
                Get Hired Faster,
                <br />
                Try Premium Free
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNavbar
