import React, { useContext, useEffect, useState } from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridplugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal } from 'react-bootstrap';
import Formappointment from './Formappointment';
import { AppContext } from '../reducers/AppContext';


const Calender = (props) => {
    const { randomutility } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [cutChoice, setCutChoice] = useState(false);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');

    const handleClose = () => setShow(false);
    return (
        <div className='contain-calendar'>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridplugin, interactionPlugin, dayGridPlugin]}
                selectable={true}
                initialView='timeGridWeek'
                height={500}
                allDaySlot={false}
                slotMinTime="08:00:00"
                slotMaxTime="22:00:00"
                headerToolbar={
                    {
                        start: 'today', // will normally be on the left. if RTL, will be on the right
                        center: 'title',
                        // end: 'timeGridWeek,dayGridMonth', // will normally be on the right. if RTL, will be on the left
                        end: 'prev,next', // will normally be on the right. if RTL, will be on the left
                    }
                }

                events={randomutility['event']}
                eventClick={(el) => {
                    setCutChoice(false)
                    setTitle(el.event.title);
                    setStart(el.event.start.toDateString() + ' at ' + el.event.start.toLocaleTimeString());
                    setShow(true);
                }}
            // eventClick={() => alert('in')}
            // businessHours={
            //     [ // specify an array instead
            //         {
            //             daysOfWeek: [1, 3, 5, 6], // Monday, Tuesday, Wednesday
            //             startTime: '08:30', // 8am
            //             endTime: '16:00' // 6pm
            //         },
            //         {
            //             daysOfWeek: [2, 4], // Monday, Tuesday, Wednesday
            //             startTime: '10:30', // 8am
            //             endTime: '15:00' // 6pm
            //         }
            //     ]}
            />
            < Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Validation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formappointment title={title} date={start} cutChoice={props.id_hairstyle}></Formappointment>
                </Modal.Body>
            </Modal>
        </div >
    );
};

export default Calender;