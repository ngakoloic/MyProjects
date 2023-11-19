import React, { useState } from 'react';
import { Alert, Button, Form, Modal, Image } from 'react-bootstrap';
import { BsCameraFill, BsXLg } from "react-icons/bs";

const FormRegister = () => {
    // const [modalFormRegister, SetModalFormRegister] = useState(false);
    return (
        <div>
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
            </Form>
            {/* <p>
                Already register? Go back to <i>
                    <a href="#"
                        onClick={() => SetModalFormRegister(false)}
                    >sign in</a></i>
            </p> */}
        </div>
    );
};

export default FormRegister;