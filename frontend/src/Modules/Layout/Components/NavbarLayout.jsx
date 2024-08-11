import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaTasks, FaFilter, FaLaptop, FaDollarSign, FaKey, FaSearch } from 'react-icons/fa'; // import icons from react-icons
import { Link } from 'react-router-dom';
function NavbarLayout() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleOffcanvasToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div className={`app-container ${isOffcanvasOpen ? 'offcanvas-open' : ''}`}>
      <Navbar fixed="top" expand={false} className="bg-body-tertiary mb-3 custom-navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOffcanvasToggle} />
          <Navbar.Brand href="/Home">Project Management System</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={isOffcanvasOpen}
            onHide={handleOffcanvasToggle}
            className="custom-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">PMS Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <NavDropdown title={<><FaTasks /> Task</>} id="task-dropdown">
                  <NavDropdown.Item as={Link} to={"AllOpen"}>All Open</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Bulk Upload Task</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Assigned To Me</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Pending Task</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Home"><FaFilter /> Filter</Nav.Link>
                <Nav.Link href="/Home/Custom"><FaLaptop /> Leave</Nav.Link>
                <Nav.Link href="/Home/Custom"><FaLaptop /> Laptop Request - WFH</Nav.Link>
                <NavDropdown title={<><FaDollarSign /> Variable Pay</>} id="variable-pay-dropdown">
                  <NavDropdown.Item href="#action3">Monthly Task Report</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Monthly Task Report</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Home/Custom"><FaKey /> Change Password</Nav.Link>
                <Nav.Link href="/Home/Custom"><FaSearch /> Task Search Page</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <main className="main-content">
        {/* Your main content here */}
      </main>
    </div>
  );
}

export default NavbarLayout;
