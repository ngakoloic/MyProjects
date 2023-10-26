import React from 'react';
import Mynavbar from '../components/Navbarcomp';

const About = () => {
    return (
        <div>
            <Mynavbar></Mynavbar>
            <div className="container">
                <h1>ABOUT US</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis, rerum aliquam error eos quod obcaecati adipisci sint reprehenderit ut! Saepe ad, sit maiores non modi sed doloremque error impedit!
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corrupti officiis veniam aliquid placeat molestias, vel ab deleniti optio dolores, explicabo corporis hic a exercitationem temporibus sapiente repudiandae voluptatem consequuntur.
                </p>
            </div>

        </div>
    );
};

export default About;