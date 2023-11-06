import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
                    <h4>Our conditions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores amet ex, deserunt quisquam mollitia sunt ipsa repudiandae earum tempora. Voluptatibus eligendi nemo, saepe repellat natus tempora quasi nihil corporis quidem similique rem? Necessitatibus minus rerum vero nostrum quos ex, possimus non tempore cum atque ea ducimus eligendi temporibus animi iusto!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores amet ex, deserunt quisquam mollitia sunt ipsa repudiandae earum tempora. Voluptatibus eligendi nemo, saepe repellat natus tempora quasi nihil corporis quidem similique rem? Necessitatibus minus rerum vero nostrum quos ex, possimus non tempore cum atque ea ducimus eligendi temporibus animi iusto!</p>
                </Col>
            </Row>
        </div>
    )
};

export default Businesshour;