import { Navbar, Form, Nav, FormControl, NavDropdown } from "react-bootstrap";
const MyNavbar = function (props) {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand href="#home">
        <i class="bi bi-linkedin"></i>
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <i class="bi bi-house-door-fill"></i>Home
          </Nav.Link>
          <Nav.Link href="#myNetwork">
            <i class="bi bi-people-fill"></i>My NetWork
          </Nav.Link>
          <Nav.Link href="#jobs">
            <i class="bi bi-briefcase-fill"></i>Jobs
          </Nav.Link>
          <Nav.Link href="#messaging">
            <i class="bi bi-chat-dots-fill"></i>Messaging
          </Nav.Link>
          <Nav.Link href="#notifications">
            <i class="bi bi-bell-fill"></i>Notifications
          </Nav.Link>

          <NavDropdown title="Me" id="profile-nav-dropdown">
            {/* props.profileImg */}
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Work" id="work-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <a href="" className="getHired">
            Get Hired Faster,try Premium Free
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
