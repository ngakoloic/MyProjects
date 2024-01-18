import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Headerpage from '../components/Headerpage';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Breadcrumb } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Iconbutton from '../components/Iconbutton';

const About = (props) => {
    return (
        <div id='scrollup'>
            <Mynavbar></Mynavbar>
            <Headerpage title={props.title}></Headerpage>
            <div className="container" style={{
                marginBottom: '100px'
            }}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Our values</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <b>Commitment to Excellence:</b>
                                    <p>Our hair salon is dedicated to excellence in every cut, color and style we create. We constantly strive to achieve the highest standards of quality to provide our customers with an exceptional hair experience.</p>
                                </li>
                                <li>
                                    <b>Creativity and Trend:</b>
                                    <p>At the heart of our hair salon, creativity is our driving force. Our talented hairdressers are constantly on the lookout for the latest trends and techniques to offer you unique, modern styles to suit your personality and lifestyle.</p>
                                </li>
                                <li>
                                    <b>Personalized service:</b>
                                    <p>At <i><b>Loic HairPro</b></i>, every customer is unique, and we believe in personalized service. Our attentive hairdressers take the time to understand your hair needs and aspirations to create a bespoke experience that leaves you satisfied with every visit.</p>
                                </li>
                                <li>
                                    <b>Warm and welcoming atmosphere:</b>
                                    <p>Our salon isn't just a place where you come for a haircut, it's a space where you feel welcomed and at ease. The warm ambience of our salon creates a relaxing environment where you can unwind and enjoy your hair experience.</p>
                                </li>
                                <li>
                                    <b>Respect for the environment:</b>
                                    <p>We believe in sustainable beauty. In addition to offering you exceptional services, we are committed to adopting environmentally-friendly practices. From reducing waste to choosing eco-responsible products, we're proud to contribute to the preservation of our planet.</p>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Our missions</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <b>Emphasizing Confidence and Well-Being:</b>
                                    <p>Our primary mission is to offer you much more than just a haircut. We are committed to creating an environment where confidence and well-being are at the heart of every service. Our dedicated team is here to help you feel and look your best.</p>
                                </li>
                                <li>
                                    <b>Daily Inspiration:</b>
                                    <p>Beyond scissors and combs, our mission is to inspire you every day. We believe that hairdressing is not only a physical transformation, but also an opportunity to boost your self-confidence and reflect your unique style. Discover inspiration at <i><b>Loic HairPro</b></i>.</p>
                                </li>
                                <li>
                                    <b>Educate and advise:</b>
                                    <p>We see ourselves as much more than just hairdressers. Our team is here to educate and advise, sharing personalized tips on hair care and trends. We want every visit to our salon to be an educational experience that helps you take care of your hair every day.</p>
                                </li>
                                <li>
                                    <b>Hair Community:</b>
                                    <p>Our mission is to build a hair community where people connect, share ideas and celebrate their individuality. Join us at [Salon Name] to be part of a community that celebrates diversity, creativity and the unique beauty of each individual.</p>
                                </li>
                                <li>
                                    <b>Environmental responsibility:</b>
                                    <p>As an environmentally conscious salon, our mission includes responsibility to our planet. We're committed to sustainable practices, from choosing eco-friendly products to reducing our carbon footprint. Together, we style while respecting the planet.</p>
                                </li>
                            </ul>
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