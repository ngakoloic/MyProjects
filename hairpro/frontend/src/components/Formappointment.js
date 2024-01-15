import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { getCookie, data } from '../data/functions';
import axios from 'axios';
import { AppContext } from '../reducers/AppContext';


axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: "http://localhost:8000/"
})

const Formappointment = (props) => {
    const { dispatch } = useContext(AppContext);
    const addAppointment = (props) => {
        const formData = new FormData()
        formData.append('id_user', sessionStorage.getItem('id'))
        formData.append('id_schedule', props.title)
        if (props.cutChoice) {
            formData.append('id_hairstyle', props.cutChoice)
        } else {
            // formData.append('id_hairstyle', props.cutChoice)
        }

        client.post('api/appointment/add/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            console.log(res.data)
            if (res.status == 201) {
                document.getElementById('loading').innerHTML = '<div class="alert alert-success" role="alert">Your appointment has been booked!</div>';
            }
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    return (
        <div>
            <div>Appointment for {props.date}</div>
            <div><b>Note : {(props.cutChoice) ? 'Choice of hairstyle done' : 'No choice of hairstyle, you can discuss it on site'}</b></div>
            <div id="loading" style={{ marginTop: 10, textAlign: 'center' }}></div>
            <Button style={{ marginTop: 10, width: '100%' }} onClick={() => addAppointment({ ...props })}>Apply</Button>
        </div>
    );
};

export default Formappointment;