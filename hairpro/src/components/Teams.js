import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import teamschedule from '../actions';
import { AppContext } from '../reducers/AppContext';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Teams = () => {
    const { dispatch } = useContext(AppContext);
    return (
        <div>
            <h4>Our teams</h4>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={15}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            // className="mySwiper-1"
            >
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        const id = e.id;
                        dispatch(teamschedule(id));
                        // dispatch({
                        //     type: 'SELECT-TEAM',
                        //     id: e.id,
                        // })
                    }} id='1' src="img/coupe-homme.jpg" width="100px" height="100px" />
                        <span id='team-name'>Loic1 Stars</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        const id = e.id;
                        dispatch(teamschedule(id));
                    }} id='2' src="img/coupe-homme.jpg" width="100px" height="100px" />
                        <span id='team-name'>Loic2 Stars</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        const id = e.id;
                        dispatch(teamschedule(id));
                    }} id='3' src="img/coupe-homme.jpg" width="100px" height="100px" />
                        <span id='team-name'>Loic3 Stars</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        const id = e.id;
                        dispatch(teamschedule(id));
                    }} id='1' src="img/coupe-homme.jpg" width="100px" height="100px" />
                        <span id='team-name'>Loic4 Stars</span>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Button onClick={() => {
                dispatch({
                    type: 'SELECT-ALL-TEAM',
                })
            }}>View all</Button>
        </div>
    );
};

export default Teams;