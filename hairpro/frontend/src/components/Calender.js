import React, { useContext, useState } from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridplugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Button } from 'react-bootstrap';
import Formappointment from './Formappointment';
import { AppContext } from '../reducers/AppContext';

const Calender = () => {

    //const events = useSelector(state => state.teamevent);
    const { randomutility } = useContext(AppContext);

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');

    const handleClose = () => setShow(false);

    return (
        <div className='contain-calendar'>
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
                events={randomutility}
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
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Please confirm your appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>You selected {title} at {start}</div>
                    <Formappointment></Formappointment>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default Calender;