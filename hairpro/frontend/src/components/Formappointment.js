import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { getCookie, client } from '../data/functions';
import { AppContext } from '../reducers/AppContext';
import emailjs from 'emailjs-com';

const Formappointment = (props) => {
    const addAppointment = (props) => {
        const formData = new FormData()
        formData.append('id_user', sessionStorage.getItem('id'))
        formData.append('id_schedule', props.title)
        if (props.cutChoice) {
            formData.append('id_hairstyle', props.cutChoice)
        } else {
            // formData.append('id_hairstyle', props.cutChoice)
        }

        client.get('api/schedule/get-iduser/' + props.title + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            client.get('api/user/get-email/' + res.data[0].user + '/',
                { withCredentials: true },
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                const barber_email = res.data[0].email
                client.post('api/appointment/add/', formData,
                    {
                        headers: { "X-CSRFToken": getCookie('csrftoken') },
                    }
                ).then((res) => {
                    // console.log(res.data)
                    var templateParams = {
                        from_name: sessionStorage.getItem('user'),
                        user_email: sessionStorage.getItem('email'),
                        barber_email: barber_email,
                        date_appointment: props.date
                    };
                    if (res.status == 201) {
                        //Send email notification
                        emailjs.send('service_d8ms69q', 'template_oupg2ls', templateParams, 'YQsWN-aRt2cYU1Fc7')
                            .then((result) => {
                                document.getElementById('loading_appointment').innerHTML = '<div class="alert alert-success" role="alert">Your appointment has been booked!</div>';
                            }, (error) => {
                                console.log(error.text);
                            });
                    }
                    return true
                }).catch((err) => {
                    console.log(err);
                    return false
                })
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <div>Appointment for {props.date}</div>
            <div><b>Note : {(props.cutChoice) ? 'Choice of hairstyle done' : 'No choice of hairstyle, you can discuss it on site'}</b></div>
            <div id="loading_appointment" style={{ marginTop: 10, textAlign: 'center' }}></div>
            <Button style={{ marginTop: 10, width: '100%' }} onClick={() => addAppointment({ ...props })}>Apply</Button>
        </div>
    );
};

export default Formappointment;