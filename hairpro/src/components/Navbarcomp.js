import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mynavbar() {
  return (
    <Navbar key='lg' expand='lg' className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <Image src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="55" height="24"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Categories"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action3">Mens</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Womens
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">Appointment</Nav.Link>
              <Nav.Link href="#">Testimonies</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Mynavbar;