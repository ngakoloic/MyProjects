import React from 'react';


// import Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonie = () => {
    return (
        <Swiper
            style={{
                '--swiper-pagination-color': 'black',
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            effect={'coverflow'}
            slidesPerView={'auto'}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            // install Swiper modules
            modules={[EffectCoverflow, Pagination]}
        // className='mySwiper-3'
        >
            <SwiperSlide>
                <div className="content-testimonial">
                    <div id="quote">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                    </div>
                    <div id="text-testimonial">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur est iure nemo harum vitae in ducimus. Sunt quam facilis soluta dignissimos nobis culpa accusamus dicta, iusto, optio ex laudantium provident nemo totam et similique deserunt pariatur! Alias expedita nemo esse recusandae suscipit necessitatibus ipsam itaque, facere ex reiciendis eos repellat illo
                    </div>
                    <div className="detail">
                        <div id="img-testimonial">
                            <img src="img/coupe-homme.jpg" />
                        </div>
                        <div id="user-details">
                            <h5>Ngako Loic</h5>
                            <span>
                                Customer membership
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="content-testimonial">
                    <div id="quote">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                    </div>
                    <div id="text-testimonial">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur est iure nemo harum vitae in ducimus. Sunt quam facilis soluta dignissimos nobis culpa accusamus dicta, iusto, optio ex laudantium provident nemo totam et similique deserunt pariatur! Alias expedita nemo esse recusandae suscipit necessitatibus ipsam itaque, facere ex reiciendis eos repellat illo
                    </div>
                    <div className="detail">
                        <div id="img-testimonial">
                            <img src="img/coupe-homme.jpg" />
                        </div>
                        <div id="user-details">
                            <h5>Ngako Loic</h5>
                            <span>
                                Customer membership
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="content-testimonial">
                    <div id="quote">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                    </div>
                    <div id="text-testimonial">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur est iure nemo harum vitae in ducimus. Sunt quam facilis soluta dignissimos nobis culpa accusamus dicta, iusto, optio ex laudantium provident nemo totam et similique deserunt pariatur! Alias expedita nemo esse recusandae suscipit necessitatibus ipsam itaque, facere ex reiciendis eos repellat illo
                    </div>
                    <div className="detail">
                        <div id="img-testimonial">
                            <img src="img/coupe-homme.jpg" />
                        </div>
                        <div id="user-details">
                            <h5>Ngako Loic</h5>
                            <span>
                                Customer membership
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Testimonie;