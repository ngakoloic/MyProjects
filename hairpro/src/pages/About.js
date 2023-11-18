import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Headerpage from '../components/Headerpage';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Col, Row, Image, Breadcrumb } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Iconbutton from '../components/Iconbutton';

const About = () => {
    return (
        <div id='scrollup'>
            <Mynavbar></Mynavbar>
            <Headerpage></Headerpage>
            <div className="container" style={{
                marginBottom: '100px'
            }}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About us</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Our values</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Our missions</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="section-contact" id="section-contact">
                <div className="container">
                    <Contact></Contact>
                </div>
            </div>
            <Iconbutton></Iconbutton>
            <Footer></Footer>
        </div>
    );
};

export default About;