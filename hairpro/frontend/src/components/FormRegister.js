import React, { useState } from 'react';
import { Alert, Button, Form, Modal, Image, Spinner } from 'react-bootstrap';
import { BsCameraFill, BsXLg } from "react-icons/bs";
import { register, handleForm, data } from '../data/functions';

const FormRegister = () => {
    // const [modalFormRegister, SetModalFormRegister] = useState(false);
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter your name" onChange={(e) => handleForm(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e) => handleForm(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Your password" onChange={(e) => handleForm(e)} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your password" />
                </Form.Group> */}
                <div id="loading_2" style={{ display: 'none', textAlign: 'center' }}>
                    <Spinner animation="border" />
                </div>
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