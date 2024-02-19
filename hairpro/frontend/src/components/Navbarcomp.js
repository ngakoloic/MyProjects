import { AppContext } from '../reducers/AppContext';
import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formconnect from './Formconnect';
import { client, getCookie } from '../data/functions';
import { useContext, useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ToastComp from './Toast';


const Mynavbar = () => {
  const { dispatch, randomutility } = useContext(AppContext);
  const [modalFormShow, SetModalFormShow] = useState(false);
  const [toastShow, SetToastShow] = useState(false);
  const navigate = useNavigate();

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
      SetToastShow(true)
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('super');
      dispatch({
        type: 'USER-CONNECT-NOT'
      });
      navigate('/home')
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Navbar key='lg' expand='lg' className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <Image src="./logo.png" alt="Logo" width="55" height="45"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="section-schedule">Appointment</Nav.Link>
                <Nav.Link href="section-galeries">Galeries</Nav.Link>
                <Nav.Link href="section-testimonies">Testimonies</Nav.Link>
                <Nav.Link href="#section-contact">Contact</Nav.Link>
                {
                  (randomutility)['id'] ? '' : <Nav.Link style={{ border: '1px solid', borderRadius: '5px' }} onClick={() => SetModalFormShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                    &nbsp;Login</Nav.Link>
                }
                {
                  (randomutility)['id'] ? <NavDropdown
                    title={<i><b>Hi {sessionStorage.getItem('user')}!</b></i>}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    {
                      (randomutility)['id'] ? <NavDropdown.Item href="/my-space">My space</NavDropdown.Item> : ''
                    }
                    {
                      (sessionStorage.getItem('super') == 'cjiwfier4h5i9ehew943hh4i5rgfbq9439rhbneifr39mnzx') ? <NavDropdown.Item href="/dashboard" style={{ backgroundColor: 'Black', color: 'white' }}><i>Dashboard</i></NavDropdown.Item> : ''
                    }
                    {
                      (randomutility)['id'] ? <NavDropdown.Item onClick={() => submitLogout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                        </svg>
                        &nbsp;Logout</NavDropdown.Item> : <NavDropdown.Item onClick={() => SetModalFormShow(true)}>Login</NavDropdown.Item>
                    }
                  </NavDropdown> : ''
                }

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
      <Formconnect show={modalFormShow} onHide={() => SetModalFormShow(false)}></Formconnect>
      <ToastComp show={toastShow} delay={8000} bg={'info'} onClose={() => SetToastShow(false)} autohide body_content={'Succesfull logout'} header_content={'See you soon!'}></ToastComp>
    </>
  )
}

export default Mynavbar;