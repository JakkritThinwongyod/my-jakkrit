import { Outlet} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbars=()=> {
  return (
    <>
        <Navbar  bg="light" expand="md" className="mb-3" style={{ height: '2rem' }}>
          <Container fluid>
            <Navbar.Brand href="/" style={{ paddingLeft: '0.5rem' }}>Administrator Control</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Customer</Nav.Link>
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