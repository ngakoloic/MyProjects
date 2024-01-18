import React, { useContext, useEffect, useState } from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridplugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button, Modal } from 'react-bootstrap';
import { AppContext } from '../reducers/AppContext';
import { client, getCookie } from '../data/functions';


const CalendarAddSchedule = (props) => {
    const { dispatch, randomutility } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState();

    const handleClose = () => setShow(false);

    const removeSchedule = (title) => {
        console.log(title)
        client.get('api/store/schedule/delete/' + title + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            console.log(res.data);
            client.get('api/user/schedule/' + props.id_select_user + '/',
                { withCredentials: true },
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                // SetTimeList(res.data)
                dispatch({
                    type: 'USER-SCHEDULE-ADD',
                    event: res.data
                });
                handleClose();
                return true
            }).catch((err) => {
                console.log(err);
                return false
            })
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
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
                    setTitle(el.event.title);
                    setShow(true);
                }}
            />
            < Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Remove</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant='danger' style={{ marginTop: 10, width: '100%' }} onClick={() => removeSchedule(title)}>Delete</Button>
                </Modal.Body>
            </Modal>
        </div >
    );
};

export default CalendarAddSchedule;