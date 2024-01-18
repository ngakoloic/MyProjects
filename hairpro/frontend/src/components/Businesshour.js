import React from 'react';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Teams from './Teams';

const Businesshour = () => {
    return (
        <div className="containt-businesshour">
            <Row xs={1} md={1}>
                <Col lg={12}>
                    {/* <Col> */}
                    <Row xs={12} md={6}>
                        <Col xs={12} md={6}>
                            <Col xs={12} md={12}>
                                <h4>Hours</h4>
                            </Col>
                            <Row xs={2} md={2} style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                                <Col xs={4} md={5}>
                                    <ul>
                                        <li>Monday</li>
                                        <li>Tuesday</li>
                                        <li>Wednesday</li>
                                        <li>Thursday</li>
                                        <li>Friday</li>
                                        <li>Saturday</li>
                                        <li>Sunday</li>
                                    </ul>
                                </Col>
                                <Col xs={7} md={7}>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li>08:30 AM - 9:00 PM</li>
                                        <li>08:30 AM - 9:00 PM</li>
                                        <li>08:30 AM - 9:00 PM</li>
                                        <li>08:30 AM - 9:00 PM</li>
                                        <li>08:30 AM - 9:00 PM</li>
                                        <li>08:30 AM - 4:00 PM</li>
                                        <li>Closed</li>
                                    </ul>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} md={6}>
                            <Col xs={12} md={12}>
                                <h4>Prices (taxes not included)</h4>
                            </Col>
                            <Row xs={2} md={2} style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                                <Col xs={5} md={6}>
                                    <ul>
                                        <li>Buzz Cut</li>
                                        <li>Kids Cut</li>
                                        <li>Adult Cut</li>
                                        <li>Sides & Back</li>
                                        <li>Clipper Cut</li>
                                        <li>Bear Trim</li>
                                        <li>Shampoo</li>
                                    </ul>
                                </Col>
                                <Col xs={7} md={5}>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li>$17</li>
                                        <li>$20</li>
                                        <li>$24</li>
                                        <li>$16</li>
                                        <li>$20</li>
                                        <li>$5</li>
                                        <li>$3</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* </Col> */}
                </Col>
                <Col xs={12} md={12}>
                    <Teams></Teams>
                </Col>
            </Row>
        </div>
    )
};

export default Businesshour;