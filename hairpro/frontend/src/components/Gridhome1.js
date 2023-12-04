import { useState, useContext } from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridplugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Formappointment from './Formappointment';
import Teams from './Teams';
import { AppContext } from '../reducers/AppContext';
// import Calender from './Calender';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { freshcutImage } from '../data/functions';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Gridhome1() {
    // alert('in')
    const { events } = useContext(AppContext);

    const [show, setShow] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [imgfreshcut, setImgfreshcut] = useState();
    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');

    const handleClose = () => setShow(false);
    const handleHidden = () => setHidden(true);

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
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='1' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='2' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='3' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='4' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='5' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='6' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='7' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='8' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'><Image onClick={(event) => {
                        const e = event.target;
                        chooseCut(e.id, e.src)
                    }} id='9' src="./img/coupe-homme.jpg" width="250px" height="300px" rounded /></div>
                </SwiperSlide>
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
                        <Row xs={2} md={2} lg={2}>
                            <Col>
                                <Image id={id} src={imgfreshcut} width="100%" height="100%" rounded />
                            </Col>
                            <Col>
                                <h4>Description :</h4>
                                <p>
                                    Degradé 3 niveaux, très élégante, appreciées par 80% de personne
                                </p>
                                <div>
                                    <b>Price : </b><i>$35</i>
                                </div>
                            </Col>
                        </Row>
                        <div className='py-3'>
                            <Teams></Teams>
                            <div style={{ marginBottom: 15 + 'px' }}></div>
                            <Fullcalendar
                                plugins={[dayGridPlugin, timeGridplugin, interactionPlugin]}
                                selectable={true}
                                initialView='timeGridWeek'
                                headerToolbar={
                                    {
                                        start: 'today', // will normally be on the left. if RTL, will be on the right
                                        center: 'title',
                                        // end: 'timeGridWeek,dayGridMonth', // will normally be on the right. if RTL, will be on the left
                                        end: 'prev,next', // will normally be on the right. if RTL, will be on the left
                                    }
                                }
                                events={events}
                                eventClick={(info) => {
                                    setTitle(info.event.title);
                                    setHour(info.event.start.getHours());
                                    setMin(info.event.start.getMinutes());
                                    setStart(hour + 'PM' + min);
                                    // Calender.changeView = ['timeGridDay', '2017-06-01'];
                                    setHidden(false);
                                }}
                                // eventClick={() => alert('in')}
                                businessHours={
                                    [ // specify an array instead
                                        {
                                            daysOfWeek: [1, 3, 5, 6], // Monday, Tuesday, Wednesday
                                            startTime: '08:30', // 8am
                                            endTime: '16:00' // 6pm
                                        },
                                        {
                                            daysOfWeek: [2, 4], // Monday, Tuesday, Wednesday
                                            startTime: '10:30', // 8am
                                            endTime: '15:00' // 6pm
                                        }
                                    ]
                                }
                            />
                        </div>
                        <h5>You selected <b>{title}</b> at <i>{start}</i></h5>
                        <Formappointment hidden={hidden}></Formappointment>
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
    function chooseCut(id, url) {
        setShow(true);
        setImgfreshcut(url);
        setId(id);
    }
}

export default Gridhome1