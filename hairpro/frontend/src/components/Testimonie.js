import React, { useContext, useEffect, useState } from 'react';
// import Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button, Form, Modal } from 'react-bootstrap';
import { client, getCookie } from '../data/functions';
import { AppContext } from '../reducers/AppContext';
import Formconnect from './Formconnect';

const Testimonie = () => {
    const { randomutility, dispatch } = useContext(AppContext);
    const [listtestimonie, setListTestimonie] = useState([]);
    const [show, setShow] = useState(false);
    const [testimonie, setTestimonie] = useState();
    const [modalFormShow, SetModalFormShow] = useState(false);

    const handleClose = () => setShow(false);

    let tab = [];
    let alldata = [];

    useEffect(() => {
        // Get the list of testimonies make by user
        getTestimonies()
    }, [])

    const getTestimonies = () => {
        client.get('api/store/testimonie/1/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            res.data.map((data, i) => {
                client.get('api/user/' + data.user + '/',
                    { withCredentials: true },
                    {
                        headers: { "X-CSRFToken": getCookie('csrftoken') },
                    }
                ).then((result) => {
                    alldata.push(data.text)
                    alldata.push(result.data[0].image)
                    alldata.push(result.data[0].pseudo)
                    alldata.push(data.id)
                    tab[i] = alldata
                    alldata = []
                    setListTestimonie(tab)
                    dispatch({});
                }).catch((err) => {
                    console.log(err)
                    return false
                })
            }
            )
        }).catch((err) => {
            console.log(err);
            return false
        })

        return tab
    }

    const addTestimonie = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('testimonie', testimonie)
        formData.append('id_user', sessionStorage.getItem('id'))

        client.post('api/store/testimonie/add/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            if (res.status == 201) {
                // Get the list of testimonies make by user
                getTestimonies()
            }
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }

    const handleForm = (event) => {
        switch (event.target.name) {
            case 'desc-testimonie':
                setTestimonie(event.target.value)
                return
        }
    }

    return (
        <>
            {
                (randomutility)['id'] ? <Button variant="secondary" className='mb-3' onClick={() => { setShow(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    &nbsp; Add your review
                </Button> : <Button variant="secondary" className='mb-3' onClick={() => SetModalFormShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                    &nbsp; Sign-in to leave a comment
                </Button>
            }

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
                {
                    listtestimonie.map((listtestimonie, i) =>
                        <SwiperSlide key={i}>
                            <div className="content-testimonial">
                                <div id="quote">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                </div>
                                <div id="text-testimonial">
                                    {listtestimonie[0]}
                                </div>
                                <div className="detail">
                                    <div id="img-testimonial">
                                        <img src={listtestimonie[1]} />
                                    </div>
                                    <div id="user-details">
                                        <h5>{listtestimonie[2]}</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            {/* Modal to add new testimonie */}
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Leave your testimonie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => addTestimonie(e)}>
                        <Form.Control
                            as="textarea"
                            id='desc-testimonie'
                            name='desc-testimonie'
                            className='my-3'
                            rows={4}
                            placeholder='Enter your text...'
                            onChange={(e) => handleForm(e)} />
                        <div class="invalid-feedback">
                            Testimonie is required.
                        </div>
                        <Button type='submit' style={{ marginBottom: 3, width: '100%' }}>Add</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Formconnect show={modalFormShow} onHide={() => SetModalFormShow(false)}></Formconnect>
        </>
    );
};

export default Testimonie;