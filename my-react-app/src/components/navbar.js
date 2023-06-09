import { Outlet} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import LogoImg from '../image/logo-nook-200x200.png'

const Navbars=()=> {
  return (
    <>
        <Navbar  bg="light" expand="md" className="mb-3">
          <Container fluid>
            
            <Image style={{ width: '3rem' }} src={LogoImg} roundedCircle />
            <Navbar.Brand href="/" style={{ paddingLeft: '1rem' }}>Jakkrit Thinwongyod</Navbar.Brand>
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
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