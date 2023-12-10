import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPersonCircle } from 'react-icons/bs';
import Formconnect from './Formconnect';
import { getCookie } from '../data/functions';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../reducers/AppContext';

import axios from 'axios';
// import { login } from '../data/functions';

axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://localhost:8000/"
})

const Mynavbar = () => {
  const { dispatch, randomutility } = useContext(AppContext);
  const [modalFormShow, SetModalFormShow] = useState(false);

  useEffect(() => {
    client.get('api/user/',
      { withCredentials: true },
      {
        headers: { "X-CSRFToken": getCookie('csrftoken') },
      }
    ).then((res) => {
      dispatch({
        type: 'USER-CONNECT'
      });
    }).catch((err) => {
      dispatch({
        type: 'USER-CONNECT-NOT'
      });
    })
  }, [])

  const submitLogout = () => {
    client.post('api/logout/',
      { withCredentials: true },
      {
        headers: { "X-CSRFToken": getCookie('csrftoken') },
      }
    ).then((res) => {
      // console.log(res.data);
      dispatch({
        type: 'USER-CONNECT-NOT'
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
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
                  title="Category"
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
                <Nav.Link href="/#section-schedule">Appointment</Nav.Link>
                <Nav.Link href="/#section-galeries">Galeries</Nav.Link>
                <Nav.Link href="/#section-testimonies">Testimonies</Nav.Link>
                <Nav.Link href="#section-contact">Contact</Nav.Link>
                <NavDropdown
                  title='Account'
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  {
                    (randomutility) ? <NavDropdown.Item href="/my-profile">My profile</NavDropdown.Item> : ''
                  }
                  {
                    (randomutility) ? <NavDropdown.Item onClick={() => submitLogout()}>Logout</NavDropdown.Item> : <NavDropdown.Item onClick={() => SetModalFormShow(true)}>Login</NavDropdown.Item>
                  }
                </NavDropdown>
                {/* {
                  <div id='user-hi'><i>Hi !</i></div>
                } */}
              </Nav>
              {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        {/* </div> */}

      </Navbar >
      <Formconnect show={modalFormShow} onHide={() => SetModalFormShow(false)}></Formconnect>
    </>
  )
}

export default Mynavbar;