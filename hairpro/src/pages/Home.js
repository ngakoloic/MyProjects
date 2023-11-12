import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Mycarousel from '../components/Carouselcomp';
import Gridhome1 from '../components/Gridhome1';
import Calender from '../components/Calender';
import { Col, Row } from 'react-bootstrap';
import Businesshour from '../components/Businesshour';
import Galeries from '../components/Galeries';
import Testimonie from '../components/Testimonie';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div id='home'>
            <Mynavbar></Mynavbar>
            <Mycarousel></Mycarousel>
            <div className="section-freshcuts">
                <div className="container">
                    <h1>Our fresh cuts</h1>
                    <br />
                    <Gridhome1></Gridhome1>
                </div>
            </div>
            <div className="section-schedule" id="section-schedule">
                <div className="container">
                    <h1>Appointment</h1>
                    <br />
                    <Row xs={1} md={2} lg={2}>
                        <Col>
                            <Businesshour></Businesshour>
                        </Col>
                        <Col>
                            <Calender></Calender>
                        </Col>
                    </Row>

                </div>
            </div>
            <div className="section-galeries" id="section-galeries">
                <div className="container">
                    <h1>Galeries</h1>
                    <br />
                    <Galeries></Galeries>
                </div>
            </div>
            <div className="section-testimonies" id="section-testimonies">
                <div className="container">
                    <h1>What they said about us</h1>
                    <br />
                    <Testimonie></Testimonie>
                </div>
            </div>
            <div className="section-contact" id="section-contact">
                <div className="container">
                    {/* <h1>Contact us</h1>
                    <br /> */}
                    <Contact></Contact>
                </div>
            </div>
            {/* <div class="b-divider"></div> */}
            <Footer></Footer>
            <div class="iconbutton">
                <a href="#home">
                    {/* Add the code here for the logo to appear and the icon to be actionable */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Home;