import React from 'react';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Teams from './Teams';

const Businesshour = () => {
    return (
        <div className="containt-businesshour">
            <Row xs={1} md={1}>
                <Col lg={12}>
                    <h4>Our Business hours</h4>
                </Col>
                <Col>
                    <Row xs={1} md={2}>
                        <Col xs={4} md={4}>
                            <ul>
                                <li>Monday</li>
                                <li>Tuesday</li>
                                <li>Wednesday</li>
                                <li>Thursday</li>
                                <li>Friday</li>
                            </ul>
                        </Col>
                        <Col xs={8} md={8}>
                            <ul>
                                <li>09PM30 - 16AM</li>
                                <li>09PM30 - 16AM</li>
                                <li>09PM30 - 15AM</li>
                                <li>09PM30 - 16AM</li>
                                <li>09PM30 - 16AM</li>
                            </ul>
                        </Col>
                    </Row>

                </Col>
                <Col xs={12} md={12}>
                    <Teams></Teams>
                </Col>
            </Row>
        </div>
    )
};

export default Businesshour;