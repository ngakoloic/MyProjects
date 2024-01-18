import React, { useContext, useEffect, useState } from 'react';
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
import { client, getCookie } from '../data/functions';

const Teams = () => {
    const [users, SetUsers] = useState([]);
    useEffect(() => {
        client.get('api/store/team/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            // console.log(res)
            SetUsers(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const { dispatch } = useContext(AppContext);
    return (
        <div className='our-teams mb-3'>
            <h4>Our teams</h4>
            <p>Select one to check availability</p>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={15}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {users.map((user, i) =>
                    <SwiperSlide key={i}>
                        <div className='item'><Image onClick={() => {
                            dispatch(teamschedule(user.id));
                        }} id={user.id} src={user.image} width="100px" height="100px" />
                            <span id='team-name'>{user.pseudo}</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <Button onClick={() => {
                dispatch({
                    type: 'SELECT-ALL-BARBER',
                })
            }}>View all</Button>
        </div>
    );
};

export default Teams;