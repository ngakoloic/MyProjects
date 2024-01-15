import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../data/functions';

// import Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: "http://localhost:8000/"
})

const Galeries = () => {
    const [galeries, SetGaleries] = useState([]);

    useEffect(() => {
        client.get('api/store/galerie/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetGaleries(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <Swiper
            style={{
                '--swiper-pagination-color': '#fff',
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            effect={'coverflow'}
            slidesPerView={'auto'}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
                rotate: 10,
                stretch: 2,
                depth: 80,
                modifier: 2.5,
                slideShadows: true,
            }}
            // install Swiper modules
            modules={[EffectCoverflow, Pagination]}
        // className='mySwiper-2'
        >
            {galeries.map((galerie, i) =>
                <SwiperSlide>
                    <img src={galerie.image} width={'300px'} height={'350px'} />
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default Galeries;