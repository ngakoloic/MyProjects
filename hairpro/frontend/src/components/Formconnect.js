import React, { useContext, useState } from 'react';
import { Alert, Button, Form, Modal, Spinner } from 'react-bootstrap';
import { register, handleForm, data, getCookie } from '../data/functions';
import { AppContext } from '../reducers/AppContext';
import FormRegister from './FormRegister';
import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: "http://localhost:8000/"
})

const Formconnect = (props) => {

    const { dispatch, randomutility } = useContext(AppContext);
    const [modalFormRegister, SetModalFormRegister] = useState(false);
    const [username, SetUsername] = useState();

    const submitLogin = (data) => {
        document.getElementById('loading').style.display = 'block';
        client.post('api/login/', data,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            // console.log(res.data);
            dispatch({
                type: 'USER-CONNECT'
            });
            sessionStorage.setItem("id", res.data[1]);
            sessionStorage.setItem("user", res.data[0]);
            // console.log(sessionStorage.getItem('id'));
            SetUsername(res.data[0]);
            // client.get('api/user-detail/').then((response) => {
            //     console.log(response.data);
            // }).catch((err) => console.log(err))
            // setTimeout(() => {
            //     document.getElementById('loading').style.display = 'none';
            // }, 3000);
        }).catch((err) => {
            dispatch({
                type: 'USER-CONNECT-NOT'
            });
            document.getElementById('loading').innerHTML = '<div class="alert alert-danger" role="alert">Oups an error occur!</div>';
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
            }, 3000);
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
                        <div id="loading" style={{ display: 'none', textAlign: 'center' }}>
                            {
                                (randomutility) ? <Alert variant='success' style={{ textAlign: 'center' }}>Welcome {username}</Alert> : <Spinner animation="border" />
                            }
                        </div>
                    </Form>
                    <p>
                        Don't have an account?&nbsp;
                        <i><a href="#"
                            onClick={() => SetModalFormRegister(true)}
                        >Register</a></i>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant="danger">Close</Button>
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