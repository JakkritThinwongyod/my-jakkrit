import { Outlet } from "react-router-dom";

import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Navbars = () => {
  return (
    <>
      <Navbar bg="light" expand="md" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0em 0.2rem 0.2rem' }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ paddingLeft: '0.5rem' }} className="mobile-none">Administrator Control</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Customer1</Nav.Link>
                <Nav.Link href="/nsKitchen">Kitchen</Nav.Link>
                <Nav.Link href="/nsAdmin">Admin</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navbars;
