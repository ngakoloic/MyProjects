import axios from 'axios';
// import { useState } from 'react';

// export const [stateComp, SetStateComp] = useState();

// get cookies id for the navigator
export const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CRSFToken';
axios.defaults.withCredentials = true;

export const client = axios.create({
    baseURL: "http://localhost:8000/"
})

export let data = {
    username: "",
    email: "",
    password: "",
    pseudo: "",
    tel: "",
    image: "",
    isbarber: false,
    id: sessionStorage.getItem('id')
};
// Liste des images for header
export const backgroundImage = {
    img_1: require('../img/IMG_HAIRSTYLE_01.jpg'),
    img_2: require('../img/IMG_HAIRSTYLE_02.jpg'),
    img_3: require('../img/IMG_HAIRSTYLE_03.jpg')
}

// Liste des evenements
export const listevents = [
    {
        '1': {
            id: 1,
            title: 'event 1',
            start: '2023-12-12T08:30:00',
            end: '2023-12-12T10:00:00',
            display: 'block',
        },
        '2': {
            id: 3,
            title: 'event 3',
            start: '2023-12-16T12:00:00',
            end: '2023-12-16T15:00:00',
            display: 'block',
        },
        '3': {
            id: 2,
            title: 'event 2',
            start: '2023-12-15T08:30:00',
            end: '2023-12-15T10:00:00',
            display: 'block',
        }
    }
]

export const initialEvents = () => {
    let keys = Object.keys(listevents[0]);
    let state = [];
    for (let i = 1; i <= keys.length; i++) {
        state.push(listevents[0][i]);
    }
    return state;
}

export const register = (data) => {

    client.post('api/register/', data
    ).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const login = (data) => {
    client.post('api/login/', data,
        {
            headers: { "X-CSRFToken": getCookie('csrftoken') },
        }
    ).then((res) => {
        console.log(res.data);
        return true
    }).catch((err) => {
        console.log(err);
        return false
    })
}

export const logout = () => {
    client.post('api/logout/',
        { withCredentials: true },
        {
            headers: { "X-CSRFToken": getCookie('csrftoken') },
        }
    ).then((res) => {
        console.log(res.data);
        return '1'
    }).catch((err) => {
        console.log(err);
        return false
    })
}

export const handleForm = (event) => {
    data[event.target.name] = event.target.value;
    return data
}