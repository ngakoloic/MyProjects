import React, { useState } from 'react';
import { Alert, Button, Form, Modal, Image } from 'react-bootstrap';

import FormRegister from './FormRegister';

const Formconnect = (props) => {
    const [modalFormRegister, SetModalFormRegister] = useState(false);

    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter your password</Form.Label>
                            <Form.Control type="password" placeholder="Your password" />
                        </Form.Group>
                    </Form>
                    <p>
                        Don't have an account?
                        <i><a href="#"
                            onClick={() => SetModalFormRegister(true)}
                        >Register</a></i>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant="danger">Cancel</Button>
                    <Button onClick={props.onHide}>Sign in</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={modalFormRegister}
                onHide={() => SetModalFormRegister(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={true}
                scrollable="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter your information for registration
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegister></FormRegister>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => SetModalFormRegister(false)} variant="danger">Cancel</Button>
                    <Button>Submit</Button>
                </Modal.Footer>

            </Modal>
        </>

    );
};

export default Formconnect;