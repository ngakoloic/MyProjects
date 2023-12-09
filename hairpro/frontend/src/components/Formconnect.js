import React, { useContext, useState } from 'react';
import { Alert, Button, Form, Modal, Image } from 'react-bootstrap';
import { register, handleForm, data, getCookie } from '../data/functions';
import { AppContext } from '../reducers/AppContext';
import axios from 'axios';
// import { login } from '../data/functions';

axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: "http://localhost:8000/"
})

import FormRegister from './FormRegister';

const Formconnect = (props) => {

    const { dispatch } = useContext(AppContext);
    const [modalFormRegister, SetModalFormRegister] = useState(false);

    const submitLogin = (data) => {
        client.post('api/login/', data,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            console.log(res.data);
            dispatch({
                type: 'USER-CONNECT'
            });
        }).catch((err) => {
            dispatch({
                type: 'USER-CONNECT-NOT'
            });
        })
    }

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
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter your name" onChange={(e) => handleForm(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter your password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Your password" onChange={(e) => handleForm(e)} />
                        </Form.Group>
                    </Form>
                    <p>
                        Don't have an account?&nbsp;
                        <i><a href="#"
                            onClick={() => SetModalFormRegister(true)}
                        >Register</a></i>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant="danger">Cancel</Button>
                    <Button onClick={() => submitLogin(data)}>Sign in</Button>
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
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegister></FormRegister>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => SetModalFormRegister(false)} variant="danger">Cancel</Button>
                    <Button onClick={() => register(data)}>Submit</Button>
                </Modal.Footer>

            </Modal>
        </>

    );
};

export default Formconnect;