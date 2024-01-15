import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Mycarousel from '../components/Carouselcomp';
import Freshcut from '../components/Freshcut';
import Calender from '../components/Calender';
import { Col, Row } from 'react-bootstrap';
import Businesshour from '../components/Businesshour';
import Galeries from '../components/Galeries';
import Testimonie from '../components/Testimonie';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Iconbutton from '../components/Iconbutton';

const Home = () => {
    return (
        <div id='scrollup'>
            <Mynavbar></Mynavbar>
            <Mycarousel></Mycarousel>
            <div className="section-freshcuts">
                <div className="container">
                    <h1>Our fresh cuts</h1>
                    <br />
                    <Freshcut></Freshcut>
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
                    <Contact></Contact>
                </div>
            </div>
            {/* <div class="b-divider"></div> */}
            <Iconbutton></Iconbutton>
            <Footer></Footer>
        </div>
    );
};

export default Home;