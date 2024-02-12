import React, { useContext, useEffect, useState } from 'react';
import Mynavbar from '../components/Navbarcomp';
import Headerpage from '../components/Headerpage';
import { Accordion, Badge, Breadcrumb, Button, Card, Col, Form, Image, InputGroup, ListGroup, Modal, Row, Spinner } from 'react-bootstrap';
import Iconbutton from '../components/Iconbutton';
import Footer from '../components/Footer';
import { client, getCookie, url } from '../data/functions';
import { BsCameraFill, BsXLg } from 'react-icons/bs';
import imageCompression from 'browser-image-compression';
// import Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CalendarAddSchedule from '../components/CalendarAddSchedule';
import { AppContext } from '../reducers/AppContext';

const Manage = (props) => {
    const { dispatch } = useContext(AppContext);
    const [users, SetUsers] = useState([]);
    const [hairstyles, SetHairstyles] = useState([]);
    const [galeries, SetGaleries] = useState([]);
    const [listusers, SetListusers] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [show, setShow] = useState(false);
    const [show_hairstyle, setShow_hairstyle] = useState(false);
    const [show_add_hairstyle, SetShow_add_hairstyle] = useState(false);
    const [show_add_galerie, SetShow_add_galerie] = useState(false);
    const [show_galerie, SetShow_galerie] = useState(false);
    const [show_add_member, SetShow_add_member] = useState(false);
    const [show_approved_testimonie, SetShow_approved_testimonie] = useState(false);
    const [show_waiting_testimonie, SetShow_waiting_testimonie] = useState(false);
    const [pseudo, setPseudo] = useState();
    const [image, setImage] = useState();
    const [isbarber, setIsBarber] = useState();
    const [image_add_hairstyle, SetImage_add_hairstyle] = useState('./img/default.jpg');
    const [image_add_galerie, SetImage_add_galerie] = useState('./img/default.jpg');
    const [idSelectUser, setIdSelectUser] = useState();
    const [startDate, setStartDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [countWaiting, SetCountWaiting] = useState();

    const [name_view_hairstyle, setName_view_hairstyle] = useState();
    const [description_view_hairstyle, setDescription_view_hairstyle] = useState();
    const [price_view_hairstyle, setPrice_view_hairstyle] = useState();
    const [device_view_hairstyle, setDevice_view_hairstyle] = useState();
    const [image_view_hairstyle, setImage_view_hairstyle] = useState();
    const [id_view_hairstyle, setId_view_hairstyle] = useState();
    const [id_galerie, setId_galerie] = useState();

    const [device, setDevice] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState();
    const [name_hairstyle, setName_hairstyle] = useState();
    const [description, setDescription] = useState();

    const [facebook, setFacebook] = useState();
    const [instagram, setInstagram] = useState();
    const [youtube, setYoutube] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [store_name, setStore_name] = useState();
    const [store_email, setStore_email] = useState();
    const [store_contact, setStore_contact] = useState();
    const [store_address, setStore_address] = useState();

    const [duration, setDuration] = useState(30);

    const handleClose = () => setShow(false);
    const handleClose_hairstyle = () => setShow_hairstyle(false);
    const handleClose_add_hairstyle = () => SetShow_add_hairstyle(false);
    const handleClose_add_galerie = () => SetShow_add_galerie(false);
    const handleClose_galerie = () => SetShow_galerie(false);
    const handleClose_add_member = () => SetShow_add_member(false);
    const handleClose_approved_testimonie = () => SetShow_approved_testimonie(false);
    const handleClose_waiting_testimonie = () => SetShow_waiting_testimonie(false);

    const [listtestimonie, SetListTestimonie] = useState([]);
    const [waitingtestimonie, SetWaitingtestimonie] = useState([]);

    let alldata = [];
    let tab = [];

    useEffect(() => {
        client.get('api/store/team/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetUsers(res.data)
        }).catch((err) => {
            console.log(err)
        })
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
        client.get('api/store/galerie/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetGaleries(res.data)
        }).catch((err) => {
            console.log(err)
        })
        getTestimonies(1)
        setTimeout(() => {
            tab = []
            getTestimonies(0)
        }, 1000);
        client.get('api/store/contact/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            setFacebook(res.data[0].facebook)
            setInstagram(res.data[0].instagram)
            setYoutube(res.data[0].youtube)
            setWhatsapp(res.data[0].whatsapp)
            setStore_name(res.data[0].name)
            setStore_email(res.data[0].email)
            setStore_contact(res.data[0].tel)
            setStore_address(res.data[0].address)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const getTestimonies = (num) => {
        client.get('api/store/testimonie/' + num + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            res.data.map((data, i) => {
                client.get('api/user/' + data.user + '/',
                    { withCredentials: true },
                    {
                        headers: { "X-CSRFToken": getCookie('csrftoken') },
                    }
                ).then((result) => {
                    alldata.push(data.text)
                    alldata.push(result.data[0].image)
                    alldata.push(result.data[0].pseudo)
                    alldata.push(data.id)
                    tab[i] = alldata
                    alldata = []
                    if (num == 1) {
                        setTimeout(() => {
                            SetListTestimonie(tab)
                        }, 100);
                    } else if (num == 0) {
                        setTimeout(() => {
                            SetCountWaiting(tab.length)
                            SetWaitingtestimonie(tab)
                        }, 100);
                    }
                }).catch((err) => {
                    console.log(err);
                    return false
                })
            }
            )
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const searchUser = (e) => {
        if (e.target.value.length > 2 && e.target.value.length <= 5) {
            client.post('api/user/search/', { 'pseudo': e.target.value },
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                if (res.data.length > 0) {
                    SetListusers(res.data)
                    setHidden(false)
                } else {
                    setHidden(true)
                }

            }).catch((err) => {
                console.log(err)
            })
        } else {
            setHidden(true)
        }
    }
    const addDate = (e) => {
        e.preventDefault();
        // Lines to get input Hours and add minute to it
        // const d = new Date(startDate + 'T' + startTime + ':00')
        // const addMinutes = new Date(d.setMinutes(d.getMinutes() + parseInt(duration))).toLocaleString()

        const formData = new FormData()
        formData.append('startTime', startTime)
        formData.append('endTime', endTime)
        formData.append('duration', duration)
        formData.append('day_schedule', startDate)
        formData.append('idSelectUser', idSelectUser)
        // formData.append('end', startDate + 'T' + addMinutes.split(' ')[1])

        client.post('api/store/schedule/add/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            viewSchedule(idSelectUser)
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const addMember = () => {
        document.getElementById('loading_2').style.display = 'block';
        const formData = new FormData()
        formData.append('idSelectUser', idSelectUser)

        client.post('api/store/team/add/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            client.get('api/store/team/',
                { withCredentials: true },
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                SetUsers(res.data)
                document.getElementById('loading_2').innerHTML = '<div class="alert alert-success" role="alert">Done!</div>';
                setTimeout(() => {
                    document.getElementById('loading_2').style.display = 'none';
                }, 1500);
            }).catch((err) => {
                console.log(err)
                document.getElementById('loading_2').innerHTML = '<div class="alert alert-danger" role="alert">An error occur</div>';
                setTimeout(() => {
                    document.getElementById('loading_2').style.display = 'none';
                }, 1500);
            })
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const addContact = () => {
        document.getElementById('loading').style.display = 'block';
        const formData = new FormData()
        formData.append('facebook', facebook)
        formData.append('instagram', instagram)
        formData.append('youtube', youtube)
        formData.append('whatsapp', whatsapp)
        formData.append('store_name', store_name)
        formData.append('store_email', store_email)
        formData.append('store_contact', store_contact)
        formData.append('store_address', store_address)
        formData.append('id_user', sessionStorage['id'])

        client.post('api/store/update-contact/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            document.getElementById('loading').innerHTML = '<div class="alert alert-success" role="alert">Done!</div>';
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
            }, 1500);
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const addHairstyle = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('desc', description)
        formData.append('price', price)
        formData.append('device', device)
        formData.append('image', file)
        formData.append('name', name_hairstyle)
        formData.append('id_user', sessionStorage.getItem('id'))

        client.post('api/store/hairstyle/add/', formData,
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            if (res.status == 201) {
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
            }
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const addGalerie = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', file)
        formData.append('id_user', sessionStorage.getItem('id'))

        client.post('api/store/galerie/add/', formData,
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            if (res.status == 201) {
                client.get('api/store/galerie/',
                    { withCredentials: true },
                    {
                        headers: { "X-CSRFToken": getCookie('csrftoken') },
                    }
                ).then((res) => {
                    SetGaleries(res.data)
                }).catch((err) => {
                    console.log(err)
                })
            }
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const updateHairstyle = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('desc', description_view_hairstyle)
        formData.append('price', price_view_hairstyle)
        formData.append('device', device_view_hairstyle)
        if (typeof (file) != 'undefined') {
            formData.append('image', file)
        }
        formData.append('name', name_view_hairstyle)
        formData.append('id_hairstyle', id_view_hairstyle)

        client.post('api/store/hairstyle/update/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            if (res.status == 201) {
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
            }
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const deleteHairstyle = () => {
        client.get('api/store/hairstyle/delete/' + id_view_hairstyle + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            if (res.status == 200) {
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
            }
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const handleForm = (event) => {
        switch (event.target.name) {
            case 'date':
                setStartDate(event.target.value)
                return
            case 'start-time':
                setStartTime(event.target.value)
                return
            case 'end-time':
                setEndTime(event.target.value)
                return
            case 'duration':
                setDuration(event.target.value)
                return

            // section for add new hairstyle
            case 'name-hairstyle':
                setName_hairstyle(event.target.value)
                return
            case 'desc-hairstyle':
                setDescription(event.target.value)
                return
            case 'price':
                setPrice(event.target.value)
                return
            case 'device':
                setDevice(event.target.value)
                return
            case 'file':
                SetImage_add_hairstyle(URL.createObjectURL(event.target.files[0]))
                // setFile(event.target.files[0])
                handleImageUpload(event.target.files[0])
                return
            case 'galerie_file':
                SetImage_add_galerie(URL.createObjectURL(event.target.files[0]))
                // setFile(event.target.files[0])
                handleImageUpload(event.target.files[0])
                return

            // section for view new hairstyle
            case 'view-file':
                setImage_view_hairstyle(URL.createObjectURL(event.target.files[0]))
                handleImageUpload(event.target.files[0])
                return
            case 'view-name-hairstyle':
                setName_view_hairstyle(event.target.value)
                return
            case 'view-desc-hairstyle':
                setDescription_view_hairstyle(event.target.value)
                return
            case 'view-price':
                setPrice_view_hairstyle(event.target.value)
                return
            case 'view-device':
                setDevice_view_hairstyle(event.target.value)
                return

            // section contacts
            case 'facebook':
                setFacebook(event.target.value)
                return
            case 'instagram':
                setInstagram(event.target.value)
                return
            case 'youtube':
                setYoutube(event.target.value)
                return
            case 'whatsapp':
                setWhatsapp(event.target.value)
                return
            case 'store_name':
                setStore_name(event.target.value)
                return
            case 'store_email':
                setStore_email(event.target.value)
                return
            case 'store_contact':
                setStore_contact(event.target.value)
                return
            case 'store_address':
                setStore_address(event.target.value)
                return
        }
    }
    const viewSchedule = (id_user_select) => {
        client.get('api/user/schedule/' + id_user_select + '/',
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
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const removeGalerie = (id) => {
        client.get('api/store/galerie/remove/' + id + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            console.log(res.data);
            client.get('api/store/galerie/',
                { withCredentials: true },
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                SetGaleries(res.data)
            }).catch((err) => {
                console.log(err)
            })
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const removeTeamMember = (id_select_user) => {
        document.getElementById('loading_1').style.display = 'block';
        client.post('api/store/team/remove/', { 'id': id_select_user },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            console.log(res.data);
            client.get('api/store/team/',
                { withCredentials: true },
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                SetUsers(res.data)
                document.getElementById('loading_1').innerHTML = '<div class="alert alert-success" role="alert">Done!</div>';
                setTimeout(() => {
                    document.getElementById('loading_1').style.display = 'none';
                }, 3000);
            }).catch((err) => {
                console.log(err)
                document.getElementById('loading_1').innerHTML = '<div class="alert alert-danger" role="alert">An error occur</div>';
                setTimeout(() => {
                    document.getElementById('loading_1').style.display = 'none';
                }, 3000);
            })
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const removeTestimonie = (id) => {
        client.get('api/store/testimonie/delete/' + id + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            getTestimonies(1)
            handleClose_approved_testimonie()
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const approveTestimonie = (id) => {
        const formData = new FormData()
        formData.append('id', id)
        client.post('api/store/testimonie/update/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            getTestimonies(1)
            setTimeout(() => {
                tab = []
                getTestimonies(0)
            }, 1000);
            handleClose_waiting_testimonie()
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
    const handleImageUpload = async (fileImage) => {
        console.log('originalFile instanceof Blob', fileImage instanceof Blob); // true
        console.log(`originalFile size ${fileImage.size / 1024 / 1024} MB`);
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 350,
            useWebWorker: true,
        }
        try {
            const compressedFile = await imageCompression(fileImage, options);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            const newFile = new File([compressedFile], compressedFile.name);
            setFile(newFile)
            return
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div id='scrollup'>
            <Mynavbar></Mynavbar>
            <Headerpage title={props.title}></Headerpage>
            <div className="container" style={{
                marginBottom: '100px'
            }}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Our team</Accordion.Header>
                        <Accordion.Body>
                            <InputGroup className="mb-2">
                                <Form.Control
                                    placeholder="Search..."
                                    aria-label="Search"
                                    aria-describedby="Search"
                                    // value=''
                                    onChange={(e) => searchUser(e)}
                                />
                                <Button variant="secondary" id="button-addon2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </Button>
                            </InputGroup>
                            <ListGroup variant="flush" hidden={hidden}>
                                <div className="list-barber"
                                    style={{
                                        width: 'max-content',
                                        // borderRadius: '10px',
                                        boxShadow: '2px 2px 0px 0px #dbdcde',
                                        padding: '5px',
                                        position: 'absolute',
                                        backgroundColor: 'white',
                                        zIndex: 3,
                                        border: '1px solid #c4c4c5'
                                    }}>
                                    {listusers.map((listusers, i) =>
                                        <ListGroup.Item className='item' id={listusers.id} key={i} onClick={() => {
                                            setImage(url + listusers.image)
                                            setPseudo(listusers.pseudo)
                                            setIsBarber((listusers.is_barber).toString())
                                            setIdSelectUser(listusers.id)
                                            SetShow_add_member(true)
                                        }
                                        }
                                            style={{
                                                // maxWidth: '310px',
                                                width: '330px'
                                            }}>
                                            <div id="barbershop-img">
                                                <Image src={url + listusers.image} width="80px" height="79px" />
                                            </div>
                                            <div className="details" style={{ lineHeight: '22px' }}>
                                                <div id='title'><b>{listusers.pseudo}</b></div>
                                                <div id='adr'><b>Since : </b><span>{listusers.date_created}</span></div>
                                                <div id='statut'>
                                                    <div><b>Barber : </b><i>{(listusers.is_barber).toString()}</i></div>
                                                    {/* <div id='stars'>
                                                        <BsHandThumbsUpFill />&nbsp;{'store'}
                                                    </div> */}
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    )}
                                </div>
                            </ListGroup>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                                maxHeight: '350px',
                                overflowY: 'scroll'
                            }}>
                                {users.map((user, i) =>
                                    <div className='our-teams' key={i} style={{ width: '100px', margin: '5px 0 10px 10px' }}>
                                        <div className='item'><Image onClick={(event) => {
                                            setShow(true)
                                            setImage(event.target.src)
                                            setPseudo(user.pseudo)
                                            setIdSelectUser(user.id)
                                            viewSchedule(user.id)
                                        }} id={user.id} src={user.image} width="100px" height="100px" />
                                            <span id='team-name'>{user.pseudo}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hairstyles</Accordion.Header>
                        <Accordion.Body>
                            <div className='container-hairstyle'>
                                {hairstyles.map((hairstyle, i) =>
                                    <div id='list-hairstyle' key={i}>
                                        <Image onClick={(event) => {
                                            setShow_hairstyle(true)
                                            setImage_view_hairstyle(event.target.src)
                                            setName_view_hairstyle(hairstyle.name)
                                            setDescription_view_hairstyle(hairstyle.description)
                                            setPrice_view_hairstyle(hairstyle.price)
                                            setDevice_view_hairstyle(hairstyle.device)
                                            setId_view_hairstyle(hairstyle.id)
                                        }} id={hairstyle.id} src={hairstyle.image} price={hairstyle.price} width="110px" height="110px" rounded />
                                    </div>
                                )}
                                <div id='list-hairstyle' onClick={() => {
                                    SetShow_add_hairstyle(true)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                    </svg>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Galeries</Accordion.Header>
                        <Accordion.Body>
                            <div className='container-galerie'>
                                {galeries.map((galerie, i) =>
                                    <div id='list-galerie' key={i}>
                                        <Image onClick={(event) => {
                                            SetShow_galerie(true)
                                            setId_galerie(galerie.id)
                                            setImage(galerie.image)
                                        }} id={galerie.id} src={galerie.image} width="110px" height="110px" rounded />
                                    </div>
                                )}
                                <div id='list-galerie' onClick={() => {
                                    SetShow_add_galerie(true)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                    </svg>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <React.Fragment>
                                Our Testimonies
                                &nbsp;<Badge bg="danger" class="position-absolute top-0 start-100 translate-middle rounded-pill">{countWaiting}</Badge>
                            </React.Fragment>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row xs={1} md={2} lg={2}>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Header>Approved</Card.Header>
                                        <Card.Body className='p-0'>
                                            <Card.Text>
                                                <div style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'flex-start',
                                                    maxHeight: '350px',
                                                    overflowY: 'scroll'
                                                }}>
                                                    {listtestimonie.map((listtestimonie, i) =>
                                                        <div className='our-teams' key={i} style={{ width: '100px', margin: '5px 0 10px 10px' }}>
                                                            <div className='item'><Image onClick={(event) => {
                                                                SetShow_approved_testimonie(true)
                                                                setImage(listtestimonie[1])
                                                                setPseudo(listtestimonie[2])
                                                                setIdSelectUser(listtestimonie[3])
                                                                setDescription(listtestimonie[0])
                                                            }} id={listtestimonie[3]} src={listtestimonie[1]} width="100px" height="100px" />
                                                                <span id='team-name'>{listtestimonie[2]}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card bg='secondary' text='white'>
                                        <Card.Header>Wait for Approved &nbsp;<Badge bg="danger" class="position-absolute top-0 start-100 translate-middle rounded-pill">{countWaiting}</Badge> </Card.Header>
                                        <Card.Body className='p-0'>
                                            <Card.Text>
                                                <div style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'flex-start',
                                                    maxHeight: '350px',
                                                    overflowY: 'scroll'
                                                }}>
                                                    {waitingtestimonie.map((waitingtestimonie, i) =>
                                                        <div className='our-teams' key={i} style={{ width: '100px', margin: '5px 0 10px 10px' }}>
                                                            <div className='item'><Image onClick={(event) => {
                                                                SetShow_waiting_testimonie(true)
                                                                setImage(waitingtestimonie[1])
                                                                setPseudo(waitingtestimonie[2])
                                                                setIdSelectUser(waitingtestimonie[3])
                                                                setDescription(waitingtestimonie[0])
                                                            }} id={waitingtestimonie[3]} src={waitingtestimonie[1]} width="100px" height="100px" />
                                                                <span id='team-name'>{waitingtestimonie[2]}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            Contacts & Social Medias
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row xs={1} md={2} lg={2}>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Header>Social media</Card.Header>
                                        <Card.Body className='p-2'>
                                            <Card.Text>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicName">
                                                        <Form.Label>Facebook :</Form.Label>
                                                        <Form.Control type="text" name="facebook" value={facebook} placeholder="facebook url" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Instagram :</Form.Label>
                                                        <Form.Control type="email" name="instagram" value={instagram} placeholder="instagram url" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Youtube :</Form.Label>
                                                        <Form.Control type="text" name="youtube" value={youtube} placeholder="youtube url" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Whatsapp :</Form.Label>
                                                        <Form.Control type="text" name="whatsapp" value={whatsapp} placeholder="whatsapp url" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                </Form>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Header>Contact</Card.Header>
                                        <Card.Body className='p-2'>
                                            <Card.Text>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicName">
                                                        <Form.Label>Store name :</Form.Label>
                                                        <Form.Control type="text" name="store_name" value={store_name} placeholder="Enter your name" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Store email :</Form.Label>
                                                        <Form.Control type="email" name="store_email" value={store_email} placeholder="Enter email" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Store contact :</Form.Label>
                                                        <Form.Control type="text" name="store_contact" value={store_contact} placeholder="Enter contact" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Store address :</Form.Label>
                                                        <Form.Control type="text" name="store_address" value={store_address} placeholder="Enter address" onChange={(e) => handleForm(e)} />
                                                    </Form.Group>
                                                </Form>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <div id="loading" style={{ display: 'none', textAlign: 'center' }}>
                                <Spinner animation="border" />
                            </div>
                            <Button onClick={() => addContact()}>Apply</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Modal to add or delete schedule for a member team */}
                <Modal
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Informations</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='content-user-info'>
                            <Image id='{id}' src={image} className='mx-2' width='150px' height="150px" rounded />
                            <div id='user-info'>
                                <div>
                                    <b>Pseudo : </b>{pseudo}
                                </div>
                                <Button variant="danger" onClick={() => removeTeamMember(idSelectUser)}>Remove</Button>
                            </div>
                        </div>
                        <br />
                        <CalendarAddSchedule id_select_user={idSelectUser}></CalendarAddSchedule>
                        <div id="loading_1" style={{ margin: '5px 0 5px', display: 'none', textAlign: 'center' }}>
                            <Spinner animation="border" />
                        </div>
                        <Form onSubmit={e => addDate(e)}>
                            {/* <div className='my-3'>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: '5px'
                                }}>
                                    {
                                        timeList.map((timelist, i) =>
                                            <li className="list-time" key={i}>
                                                <span>{timelist.start.split('T')[0]} || {timelist.start.split('T')[1].slice(0, 5)}/{timelist.end.split('T')[1].slice(0, 5)}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" variant="danger" onClick={() => removeSchedule(timelist.id)}>
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div> */}
                            <Row className='g-3 my-3'>
                                <Col xs={12}>
                                    <Form.Label for='date'>Select day :</Form.Label>
                                    <Form.Control
                                        type='date'
                                        id='date'
                                        name='date'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <Form.Label for='start-time'>Start time :</Form.Label>
                                    <Form.Control
                                        type='time'
                                        id='start-time'
                                        name='start-time'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Valid time is required.
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <Form.Label for='end-time'>End time :</Form.Label>
                                    <Form.Control
                                        type='time'
                                        id='end-time'
                                        name='end-time'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Valid time is required.
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <Form.Label for='duration'>Time (Min) :</Form.Label>
                                    <Form.Control
                                        value={duration}
                                        type='number'
                                        id='duration'
                                        name='duration'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Valid duration is required.
                                    </div>
                                </Col>
                            </Row>
                            <Button type='submit' style={{ marginBottom: 5, width: '100%' }}>Add date</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                {/* Modal to see full information about hairstyle and make other operation */}
                <Modal
                    show={show_hairstyle}
                    onHide={handleClose_hairstyle}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Hairstyle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => updateHairstyle(e)}>
                            <div className='uploadImg'>
                                <Image
                                    src={image_view_hairstyle} width="150px" height="150px"
                                ></Image>

                                <Form.Group controlId="formFile" className="mb-3"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '150px',
                                    }}>
                                    <Form.Control id="fileupload" type="file" name='view-file' onChange={(event) => handleForm(event)} />
                                    <BsCameraFill />
                                    <BsXLg />
                                </Form.Group>
                            </div>
                            <Row className='g-1 mb-3'>
                                <Col xs={12}>
                                    <Form.Label for='name-hairstyle'>Name :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id='name-hairstyle'
                                        name='view-name-hairstyle'
                                        value={name_view_hairstyle}
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Name is required.
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <Form.Label for='desc-hairstyle'>Description :</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        id='desc-hairstyle'
                                        name='view-desc-hairstyle'
                                        value={description_view_hairstyle}
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Description is required.
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <Form.Label for='price'>Price :</Form.Label>
                                    <Form.Control
                                        type='number'
                                        id='price'
                                        name='view-price'
                                        value={price_view_hairstyle}
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Price is required.
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group controlId="formDevices">
                                        <Form.Label column sm="5">Devices : </Form.Label>
                                        <Col>
                                            <Form.Select size="sm" name="view-device" value={device_view_hairstyle} onChange={(e) => handleForm(e)}>
                                                <option value="">...</option>
                                                <option value="$CA">$CA</option>
                                                <option value="$US">$US</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </Col>
                            </Row>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Button variant="danger" onClick={() => deleteHairstyle()} style={{ marginBottom: 5 }}>Delete</Button>
                                <Button type='submit' style={{ marginBottom: 5 }}>Update</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
                {/* Modal to add new hairstyle */}
                <Modal
                    show={show_add_hairstyle}
                    onHide={handleClose_add_hairstyle}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New hairstyle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => addHairstyle(e)}>
                            <div className='uploadImg'>
                                <Image
                                    src={image_add_hairstyle} width="150px" height="150px"
                                ></Image>

                                <Form.Group controlId="formFile" className="mb-3"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '150px',
                                    }}>
                                    <Form.Control id="fileupload" type="file" name='file' onChange={(event) => handleForm(event)} />
                                    <BsCameraFill />
                                    <BsXLg />
                                </Form.Group>
                            </div>
                            <Row className='g-1 mb-3'>
                                <Col xs={12}>
                                    <Form.Label for='name-hairstyle'>Name :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id='name-hairstyle'
                                        name='name-hairstyle'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Name is required.
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <Form.Label for='desc-hairstyle'>Description :</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        id='desc-hairstyle'
                                        name='desc-hairstyle'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Description is required.
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <Form.Label for='price'>Price :</Form.Label>
                                    <Form.Control
                                        type='number'
                                        id='price'
                                        name='price'
                                        onChange={(e) => handleForm(e)} />
                                    <div class="invalid-feedback">
                                        Price is required.
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group controlId="formDevices">
                                        <Form.Label column sm="5">Devices : </Form.Label>
                                        <Col>
                                            <Form.Select size="sm" name="device" onChange={(e) => handleForm(e)}>
                                                <option value="">...</option>
                                                <option value="$CA">$CA</option>
                                                <option value="$US">$US</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </Col>
                            </Row>
                            <Button type='submit' style={{ marginBottom: 5, width: '100%' }}>Add Hairstyle</Button>
                            {/* <div style={{ marginBottom: 15 + 'px' }}></div> */}
                        </Form>
                    </Modal.Body>
                </Modal>
                {/* Modal to add new member team */}
                <Modal
                    show={show_add_member}
                    onHide={handleClose_add_member}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='content-user-info mb-3'>
                            <Image id='{id}' src={image} className='mx-2' width='150px' height="150px" rounded />
                            <div id='user-info'>
                                <div>
                                    <b>Pseudo : </b>{pseudo} <br />
                                    <b>Barber : </b>{isbarber}
                                </div>
                                {/* <Button variant="danger" onClick={''}>Remove from team</Button> */}
                            </div>
                        </div>
                        <div id="loading_2" style={{ display: 'none', textAlign: 'center' }}>
                            <Spinner animation="border" />
                        </div>
                        <Button onClick={() => addMember(idSelectUser)} style={{ marginBottom: 5, width: '100%' }}>Add Member</Button>
                    </Modal.Body>
                </Modal>
                {/* Modal to add new galerie */}
                <Modal
                    show={show_add_galerie}
                    onHide={handleClose_add_galerie}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New hairstyle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => addGalerie(e)}>
                            <div className='uploadImg'>
                                <Image
                                    src={image_add_galerie} width="250px" height="250px"
                                    style={{
                                        borderRadius: '0'
                                    }}></Image>

                                <Form.Group controlId="formFile" className="my-3"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '150px',
                                    }}>
                                    <Form.Control id="fileupload" type="file" name='galerie_file' onChange={(event) => handleForm(event)} />
                                    <BsCameraFill />
                                    <BsXLg />
                                </Form.Group>
                            </div>
                            <Button type='submit' style={{ marginBottom: 5, width: '100%' }}>Add Image</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                {/* Modal to delete image on galerie */}
                <Modal
                    show={show_galerie}
                    onHide={handleClose_galerie}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='content-user-info'>
                            <Image id='{id}' src={image} className='mx-2' width='210px' height="250px" rounded />
                            <div id='user-info'>
                                <Button variant="danger" onClick={() => removeGalerie(id_galerie)}>Delete</Button>
                            </div>
                        </div>
                        <div id="loading_1" style={{ margin: '5px 0 5px', display: 'none', textAlign: 'center' }}>
                            <Spinner animation="border" />
                        </div>
                    </Modal.Body>
                </Modal>
                {/* Modal to view testimonie */}
                <Modal
                    show={show_approved_testimonie}
                    onHide={handleClose_approved_testimonie}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Testimonie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Swiper
                            style={{
                                '--swiper-pagination-color': 'black',
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            effect={'coverflow'}
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 10,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            // install Swiper modules
                            modules={[EffectCoverflow, Pagination]}
                        // className='mySwiper-3'
                        >
                            <SwiperSlide>
                                <div className="content-testimonial">
                                    <div id="quote">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                        </svg>
                                    </div>
                                    <div id="text-testimonial">
                                        {description}
                                    </div>
                                    <div className="detail">
                                        <div id="img-testimonial">
                                            <img src={image} />
                                        </div>
                                        <div id="user-details">
                                            <h5>{pseudo}</h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => removeTestimonie(idSelectUser)} variant="danger">Remove</Button>
                        <Button onClick={handleClose_approved_testimonie}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {/* Modal to approve testimonie */}
                <Modal
                    show={show_waiting_testimonie}
                    onHide={handleClose_waiting_testimonie}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable="true"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Waiting for approbation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Swiper
                            style={{
                                '--swiper-pagination-color': 'black',
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            effect={'coverflow'}
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 10,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            // install Swiper modules
                            modules={[EffectCoverflow, Pagination]}
                        // className='mySwiper-3'
                        >
                            <SwiperSlide>
                                <div className="content-testimonial">
                                    <div id="quote">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                        </svg>
                                    </div>
                                    <div id="text-testimonial">
                                        {description}
                                    </div>
                                    <div className="detail">
                                        <div id="img-testimonial">
                                            <img src={image} />
                                        </div>
                                        <div id="user-details">
                                            <h5>{pseudo}</h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => removeTestimonie(idSelectUser)} variant="danger">Remove</Button>
                        <Button onClick={() => approveTestimonie(idSelectUser)}>Approve</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Iconbutton></Iconbutton>
            <Footer></Footer>
        </div >
    );
};

export default Manage;