import { useState, useEffect } from 'react';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Teams from './Teams';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCookie } from '../data/functions';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Calender from './Calender';

const client = axios.create({
    baseURL: "http://localhost:8000/"
})

function Freshcut() {
    const [show, setShow] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [imgfreshcut, setImgfreshcut] = useState();
    const [id, setId] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [device, setDevice] = useState();
    const [name, setName] = useState();
    const [hairstyles, SetHairstyles] = useState([]);

    const handleClose = () => setShow(false);
    const handleHidden = () => setHidden(true);

    useEffect(() => {
        client.get('api/store/hairstyle/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetHairstyles(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className='freshcutlist'>
            <h4 style={{ textAlign: 'center' }}>Choose your style and make your appointment</h4>
            <br />
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            // className="mySwiper-1"
            >
                {hairstyles.map((hairstyle, i) =>
                    <SwiperSlide key={i}>
                        <div className='item'><Image onClick={() => {
                            chooseCut(hairstyle.id, hairstyle.image, hairstyle.price, hairstyle.description, hairstyle.device, hairstyle.name)
                        }} id={hairstyle.id} src={hairstyle.image} width="250px" height="300px" rounded />
                            <div className='freshcut-price'>{hairstyle.price}{hairstyle.device}</div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Please select a date</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row xs={1} md={2} lg={2}>
                            <Col className='mb-2'>
                                <Image id={id} src={imgfreshcut} width="150px" height="150px" rounded />
                            </Col>
                            <Col>
                                <h4>{name}</h4>
                                <b>Description :</b>
                                <p>
                                    {description}
                                </p>
                                <div>
                                    <b>Price : </b><i>{price}{device}</i>
                                </div>
                            </Col>
                        </Row>
                        <div className='py-3'>
                            <Teams></Teams>
                            <div style={{ marginBottom: 15 + 'px' }}></div>
                            <Calender id_hairstyle={id}></Calender>
                        </div>
                        <div style={{ marginBottom: 15 + 'px' }}></div>
                    </Form>
                </Modal.Body>
                <Modal.Footer hidden={hidden}>
                    <Button variant="secondary" onClick={handleHidden}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
    function chooseCut(id, url, price, desc, device, name) {
        setShow(true);
        setImgfreshcut(url);
        setId(id);
        setPrice(price);
        setDescription(desc);
        setDevice(device);
        setName(name);
    }
}

export default Freshcut