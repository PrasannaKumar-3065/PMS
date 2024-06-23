import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarLayout() {
  const expand = false
  return (
    <>
      <Navbar key={expand} fixed='top' expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Brand href="/Home">Project Management System</Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                PMS Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Task"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">All Open</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Bulk Upload Task</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Created By Me</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Pending Task</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="/Home">Filter</Nav.Link>
                <Nav.Link href="/Home/Custom">Leave</Nav.Link>
                <Nav.Link href="/Home/Custom">Laptop Request - WFH</Nav.Link>
                <NavDropdown
                  title="Variable Pay"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Monthly Task Report</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Monthly Task Report</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="/Home/Custom">Change Password</Nav.Link>
                <Nav.Link href="/Home/Custom">Task Search Page</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLayout;