import axios from 'axios';
import imageCompression from 'browser-image-compression';
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
export let listevents = []

export const initialEvents = () => {
    let tab = [];
    client.get('api/store/schedule/',
        { withCredentials: true },
        {
            headers: { "X-CSRFToken": getCookie('csrftoken') },
        }
    ).then((res) => {
        tab = res.data;
        // console.log(tab)
        listevents.push(tab)
    }).catch((err) => {
        console.log(err);
        return false
    })
    return listevents[0];
}

export const register = (data) => {
    document.getElementById('loading_2').style.display = 'block';
    client.post('api/register/', data
    ).then((res) => {
        console.log(res.data)
        document.getElementById('loading_2').innerHTML = '<div class="alert alert-success" role="alert">Done!</div>';
        setTimeout(() => {
            document.getElementById('loading_2').style.display = 'none';
        }, 3000);
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
