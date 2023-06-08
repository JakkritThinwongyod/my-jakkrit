import { Outlet} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">หน้าหลัก</Nav.Link>
                  <NavDropdown
                    title="ประวัติ"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="/experience">ประวัติการทำงาน</NavDropdown.Item> 
                    <NavDropdown.Item href="/education">ประวัติการศึกษา</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/skill">ความสามารถ</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact">ข้อมูลการติดต่อ</Nav.Link>
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