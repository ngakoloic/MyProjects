import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Headerpage from '../components/Headerpage';
import { Breadcrumb, Alert, Image, Form, Button } from 'react-bootstrap';
import { BsXLg, BsCameraFill } from "react-icons/bs";
import Contact from '../components/Contact';
import Iconbutton from '../components/Iconbutton';
import Footer from '../components/Footer';

const Profile = (props) => {
    return (
        <div id='scrollup'>
            <Mynavbar></Mynavbar>
            <Headerpage title={props.title}></Headerpage>
            <div className="container" style={{
                marginBottom: '100px'
            }}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <div className="section-profile">
                    <Form>
                        <div className='uploadImg'>
                            <Image
                                src="./img/coupe-homme.jpg" width="150px" height="150px"
                            ></Image>

                            <Form.Group controlId="formFile" className="mb-3"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '150px',
                                }}
                            >
                                <Form.Control id="fileupload" type="file" />
                                <BsCameraFill />
                                <BsXLg />
                            </Form.Group>
                        </div>
                        <div style={{
                            border: '1px solid #c8c8c8',
                            padding: '10px'
                        }}>
                            <Form.Group className="mb-3" controlId="formBasicPseudo">
                                <Form.Label>Pseudo</Form.Label>
                                <Form.Control type="text" placeholder="Enter your pseudo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder="123-456-7890" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Enter your password</Form.Label>
                                <Form.Control type="password" placeholder="Your password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                <Form.Label>Confirm your password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm your password" />
                            </Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="Are you a barber?"
                            />
                            <Alert variant='warning'>If you check this box, other managers will be able to see your profile</Alert>
                            <br />
                            <div style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between'
                            }}>
                                <Button variant="danger">Cancel</Button>
                                <Button>Apply changes</Button>
                            </div>
                        </div>
                    </Form>
                </div>

            </div >
            <div className="section-contact" id="section-contact">
                <div className="container">
                    <Contact></Contact>
                </div>
            </div>
            <Iconbutton></Iconbutton>
            <Footer></Footer>
        </div >
    );
};

export default Profile;