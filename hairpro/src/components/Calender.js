import React, { useState } from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridplugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Row, Col, Modal, Button } from 'react-bootstrap';

const Calender = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');

    const handleClose = () => setShow(false);

    const events = [
        {
            id: 1,
            title: 'event 1',
            start: '2023-11-05T08:00:00',
            end: '2023-11-05T10:00:00',
            display: 'block',
        },
        {
            id: 3,
            title: 'event 1',
            start: '2023-11-05T12:00:00',
            end: '2023-11-05T15:00:00',
            display: 'block',
        },
        {
            id: 2,
            title: 'event 2',
            start: '2023-11-10T08:00:00',
            end: '2023-11-10T10:00:00',
            display: 'block',
        }
    ]
    return (
        <div className='contain-calendar'>
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore doloribus officiis fugiat nesciunt possimus sed ad culpa, accusamus, id natus facilis inventore enim exercitationem deleniti dolorem temporibus atque consectetur. Sit.
                    </div>
                </Col>
                <Col>
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
                        eventClick={(el) => {
                            setTitle(el.event.title);
                            setHour(el.event.start.getHours());
                            setMin(el.event.start.getMinutes());
                            setStart(hour + 'PM' + min);
                            // Calender.changeView = ['timeGridDay', '2017-06-01'];
                            setShow(true);
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
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>You selected {title} at {start}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Calender;