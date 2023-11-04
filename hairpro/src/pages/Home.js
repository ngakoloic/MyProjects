import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Mycarousel from '../components/Carouselcomp';
import Gridhome1 from '../components/Gridhome1';
import Calender from '../components/Calender';

const Home = () => {
    return (
        <div>
            <Mynavbar></Mynavbar>
            <Mycarousel></Mycarousel>
            <div className="section-freshcuts">
                <div className="container">
                    <h1>Our fresh cuts</h1>
                    <br />
                    <Gridhome1></Gridhome1>
                </div>
            </div>
            <div className="section-schedule">
                <div className="container">
                    <h1>Appointment</h1>
                    <br />
                    <Calender></Calender>
                </div>
            </div>


        </div>
    );
};

export default Home;