import {
  Container,
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = function (props) {
  return (
    <div className="navbar-full">
      <Container>
        <Navbar expand="lg" className="mb-4">
          <Navbar.Brand href="#home">
            <i className="bi bi-linkedin"></i>
          </Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-muted">
              <Nav.Link href="#home">
                <i className="bi bi-house-door-fill"></i>Home
              </Nav.Link>
              <Nav.Link href="#myNetwork">
                <i className="bi bi-people-fill"></i>My NetWork
              </Nav.Link>
              <Nav.Link href="#jobs">
                <i className="bi bi-briefcase-fill"></i>Jobs
              </Nav.Link>
              <Nav.Link href="#messaging">
                <i className="bi bi-chat-dots-fill"></i>Messaging
              </Nav.Link>
              <Nav.Link href="#notifications">
                <i className="bi bi-bell-fill"></i>Notifications
              </Nav.Link>
              <div className="pr-2">
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
              </div>
              <div className="b-left pl-2">
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
              {/* <Link to="#" className="getHired">
                Get Hired Faster,
                <br />
                Try Premium Free
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNavbar
