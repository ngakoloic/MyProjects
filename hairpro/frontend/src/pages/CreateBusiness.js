import React from 'react';
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Iconbutton from '../components/Iconbutton';
import Checkout from '../components/Checkout';
import Contact from '../components/Contact';
import { useNavigate } from 'react-router-dom';

const CreateBusiness = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <Container style={{
                maxWidth: '950px'
            }} id='scrollup'>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
                    <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </div>
                <Row xs={1} md={2} lg={3} className='mb-3 text-center' style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Col>
                        <Card className='mb-4 rounded-3 shadow-sm border-primary'>
                            <Card.Header className='py-3 text-bg-primary border-primary'>
                                <h4 class="my-0 fw-normal">Enterprise</h4>
                            </Card.Header>
                            <Card.Body>
                                <h1 class="card-title pricing-card-title">$250<small class="text-body-secondary fw-light">/year</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <a href="#section-contact" className='w-100 btn btn-lg btn-primary'>Contact us</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr class="my-4"></hr>
                {/********** Formulaire pour le checkout ************/}
                <Checkout></Checkout>
                <br /><br />
                <Iconbutton></Iconbutton>
                <br />
            </Container>
            <div className="section-contact" id="section-contact">
                <div className="container">
                    <Contact></Contact>
                </div>
            </div>
        </div>

    );
};

export default CreateBusiness;