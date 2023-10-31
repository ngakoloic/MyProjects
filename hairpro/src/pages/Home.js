import React from 'react';
import Mynavbar from '../components/Navbarcomp';
import Mycarousel from '../components/Carouselcomp';
import Gridhome1 from '../components/Gridhome1';

const Home = () => {
    return (
        <div>
            <Mynavbar></Mynavbar>
            <Mycarousel></Mycarousel>
            <div className="section-freshcuts">
                <div className="container">
                    <h1>Our fresh cuts</h1>
                    <Gridhome1></Gridhome1>
                </div>
            </div>
            <div className="container">

                <h1>ACCUEIL</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis, rerum aliquam error eos quod obcaecati adipisci sint reprehenderit ut! Saepe ad, sit maiores non modi sed doloremque error impedit!
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi odit voluptates hic sunt sapiente consectetur inventore vero possimus rem, et quos iste id omnis soluta reprehenderit? Quia qui sequi odit ipsum sit eos accusantium repellat? Tempore autem deserunt deleniti cum libero cumque officia impedit, reprehenderit necessitatibus, asperiores sunt nam. In, aperiam. Praesentium illum quis dicta vero reiciendis modi impedit consequatur eveniet sit minus voluptate adipisci velit beatae rem, voluptas hic cumque autem itaque saepe qui eius pariatur officiis. Provident dicta, quas quo placeat obcaecati odio ad consectetur doloribus ex neque fugit quia tenetur et beatae quasi ipsa vel, deserunt culpa sint impedit tempore assumenda hic? Culpa maxime quos sunt placeat amet nihil, hic eaque repellendus fugiat, sint laboriosam nesciunt. Quibusdam, amet nam. Hic magnam voluptas pariatur recusandae cupiditate vel dolor quaerat quia, dolores nihil eaque excepturi rem illo officia laborum suscipit numquam sint eius aliquam debitis, exercitationem, odit deleniti. Qui delectus sit totam architecto distinctio pariatur repudiandae accusantium corrupti debitis eligendi, optio molestias reprehenderit aperiam, odio, veniam expedita fuga aliquid officiis vitae reiciendis? Reiciendis beatae repellendus asperiores dolorem autem quod, nisi recusandae sit accusamus non ullam, atque facere consequatur inventore modi? Tenetur veniam debitis consectetur, quas perferendis atque labore eos!
                </p>
            </div>

        </div>
    );
};

export default Home;