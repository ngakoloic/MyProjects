import React from 'react';
import { Button, Col, Form, Row, Image } from 'react-bootstrap';
import { BsCameraFill, BsXLg } from 'react-icons/bs';
import LoadingButton from './LoadingButton';

const Checkout = () => {
    return (
        <Row className='g-5'>
            <Col lg={12}>
                <h4 class="mb-3">Business information</h4>
                <Form className='needs-validation' novalidate=''>
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
                    <Row className='g-3'>
                        <Col sm={6}>
                            <Form.Label for='firstName'>First name</Form.Label>
                            <Form.Control
                                type='text'
                                id='firstName'
                                placeholder='first name'
                                required />
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </Col>
                        <Col sm={6}>
                            <Form.Label for='lastName'>Last name</Form.Label>
                            <Form.Control
                                type='text'
                                id='lastName'
                                placeholder='last name'
                                required />
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Form.Label for='businessName'>Business name</Form.Label>
                            <Form.Control
                                type='text'
                                id='businessName'
                                placeholder='business name'
                                required />
                            <div class="invalid-feedback">
                                Valid business name is required.
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Form.Label for='email'>Email</Form.Label>
                            <Form.Control
                                type='email'
                                id='email'
                                placeholder='you@example.com'
                                required />
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </Col>
                        <Col sm={6}>
                            <Form.Label for='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                id='password'
                                placeholder='create a password'
                                required />
                            <div class="invalid-feedback">
                                Please enter valid password.
                            </div>
                        </Col>
                        <Col sm={6}>
                            <Form.Label for='address'>Confrim Password</Form.Label>
                            <Form.Control
                                type='password'
                                id='confirm-password'
                                placeholder=''
                                required />
                            <div class="invalid-feedback">
                                Password are not the same
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Form.Label for='address'>Address</Form.Label>
                            <Form.Control
                                type='text'
                                id='address'
                                placeholder='1234 Main St'
                                required />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </Col>
                        <Col md={5}>
                            <Form.Label for='country'>Country</Form.Label>
                            <Form.Select
                                id='country'
                                required>
                                <option value="0">Choose...</option>
                                <option value="US">United States</option>
                            </Form.Select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </Col>
                        <Col md={4}>
                            <Form.Label for='state'>State</Form.Label>
                            <Form.Select
                                id='state'
                                required>
                                <option value="0">Choose...</option>
                                <option value="1">California</option>
                            </Form.Select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </Col>
                        <Col md={3}>
                            <Form.Label for='zip'>Zip</Form.Label>
                            <Form.Control
                                type='text'
                                id='zip'
                                placeholder=''
                                required />
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                        </Col>

                    </Row>
                    <hr class="my-4"></hr>

                    <h4 class="mb-3">Payment</h4>
                    <div class="my-3">
                        <Form.Check
                            type='radio'
                            name='paymentMethod'
                            id='credit'
                            checked=''
                            label='Credit card'
                            required
                        />
                        <Form.Check
                            type='radio'
                            name='paymentMethod'
                            id='debit'
                            checked=''
                            label='Debit card'
                            required
                        />
                    </div>
                    <Row className='gy-3'>
                        <Col md={12}>
                            <Form.Label for='cc-name'>Name on card</Form.Label>
                            <Form.Control
                                type='text'
                                id='cc-name'
                                placeholder=''
                                required />
                            <small class="text-body-secondary">Full name as displayed on card</small>
                            <div class="invalid-feedback">
                                Name on card is required
                            </div>
                        </Col>
                        <Col md={6}>
                            <Form.Label for='cc-number'>Credit card number</Form.Label>
                            <Form.Control
                                type='text'
                                id='cc-number'
                                placeholder=''
                                required />
                            <div class="invalid-feedback">
                                Credit card number is required
                            </div>
                        </Col>
                        <Col md={3}>
                            <Form.Label for='cc-expiration'>Expiration</Form.Label>
                            <Form.Control
                                type='text'
                                id='cc-expiration'
                                placeholder=''
                                required />
                            <div class="invalid-feedback">
                                Expiration date required
                            </div>
                        </Col>
                        <Col md={3}>
                            <Form.Label for='cc-cvv'>CVV</Form.Label>
                            <Form.Control
                                type='text'
                                id='cc-cvv'
                                placeholder=''
                                required />
                            <div class="invalid-feedback">
                                Security code required
                            </div>
                        </Col>
                    </Row>
                    <hr class="my-4"></hr>
                    <LoadingButton></LoadingButton>
                </Form>
            </Col>
        </Row>
    );
};

export default Checkout;