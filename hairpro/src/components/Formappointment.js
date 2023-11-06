import React from 'react';
import { Form } from 'react-bootstrap';

const Formappointment = (props) => {
    return (
        <div>
            <Form {...props}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Enter your phone number</Form.Label>
                    <Form.Control type="text" placeholder="Your number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Formappointment;