import React from 'react';

// import Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Galeries = () => {
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
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/coupe-homme.jpg" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Galeries;