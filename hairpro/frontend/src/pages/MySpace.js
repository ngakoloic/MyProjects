import React, { useEffect, useState } from 'react';
import Mynavbar from '../components/Navbarcomp';
import Headerpage from '../components/Headerpage';
import { Breadcrumb, Alert, Image, Form, Button, Spinner, Tabs, Tab, Modal, Badge } from 'react-bootstrap';
import { BsXLg, BsCameraFill } from "react-icons/bs";
import Contact from '../components/Contact';
import Iconbutton from '../components/Iconbutton';
import Footer from '../components/Footer';
import { getCookie, data, client } from '../data/functions';
import imageCompression from 'browser-image-compression';


const MySpace = (props) => {
    const [username, SetUsername] = useState();
    const [usernameinput, SetUsernameinput] = useState();
    const [pseudo, SetPseudo] = useState();
    const [tel, SetTel] = useState();
    const [email, SetEmail] = useState();
    const [isbarber, SetIsbarber] = useState();
    const [countAppointment, SetCountAppointment] = useState();
    const [img, SetImg] = useState();
    const [schedulelist, SetScheduleList] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [desc, SetDesc] = useState();
    const [device, SetDevice] = useState();
    const [image, SetImage] = useState();
    const [price, SetPrice] = useState();
    const [name, SetName] = useState();

    let tab = [];
    let alldata = [];
    //Requete au lancement de la page afin de recuillir les infos de l'user
    useEffect(() => {
        client.get('api/user/' + sessionStorage.getItem('id'),
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetUsername(sessionStorage.getItem('user'));
            SetPseudo(res.data[0]['pseudo']);
            SetTel(res.data[0]['tel']);
            SetEmail(sessionStorage.getItem('email'));
            SetIsbarber(res.data[0]['is_barber']);
            SetImg(res.data[0]['image']);
        }).catch((err) => {
            console.log(err)
        })
        // Get the list of appointment make by Cx
        getCxAppointment()
    }, [])
    const getCxAppointment = () => {
        client.get('api/store/appointment/user/' + sessionStorage.getItem('id'),
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            res.data.map((data, i) => {
                client.get('api/store/schedule/' + data.schedule + '/',
                    { withCredentials: true },
                    {
                        headers: { "X-CSRFToken": getCookie('csrftoken') },
                    }
                ).then((result) => {
                    client.get('api/user/' + data.user + '/',
                        { withCredentials: true },
                        {
                            headers: { "X-CSRFToken": getCookie('csrftoken') },
                        }
                    ).then((result_2) => {
                        alldata.push(result.data[0].date_created)
                        alldata.push(result.data[0].start.split('T')[1].slice(0, 5))
                        alldata.push(result_2.data[0].pseudo)
                        alldata.push(data.choice)
                        alldata.push(data.hairstyle)
                        alldata.push(data.id)
                        alldata.push(result_2.data[0].tel)
                        tab[i] = alldata

                        alldata = []
                        setTimeout(() => {
                            SetCountAppointment(tab.length)
                            SetScheduleList(tab)
                        }, 100);
                    }).catch((err) => {
                        console.log(err);
                        return false
                    })
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
    const submitUpdate = (e) => {
        e.preventDefault();
        document.getElementById('loading').style.display = 'block';
        const formData = new FormData()
        formData.append('pseudo', pseudo)
        formData.append('tel', tel)
        formData.append('isbarber', isbarber)
        formData.append('id', sessionStorage.getItem('id'))

        client.post('api/user/change/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            sessionStorage.setItem('user', username)
            SetUsername(username);
            SetPseudo(res.data.pseudo);
            SetTel(res.data.tel);
            document.getElementById('loading').innerHTML = '<div class="alert alert-success" role="alert">Done!</div>';
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
            }, 3000);
            return true
        }).catch((err) => {
            console.log(err);
            document.getElementById('loading').innerHTML = '<div class="alert alert-danger" role="alert">An Error occur!</div>';
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
            }, 3000);
            return false
        })
        return data
    }
    const submitUpdate_2 = (e) => {
        e.preventDefault();
        document.getElementById('loading_2').style.display = 'block';
        const formData = new FormData()
        if (usernameinput) {
            formData.append('username', username)
        }
        formData.append('email', email)
        formData.append('user', sessionStorage.getItem('user'))

        formData.append('id', sessionStorage.getItem('id'))

        client.post('api/user/change/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            if (res.status == 201) {
                sessionStorage.setItem('user', username)
                SetUsername(username);
                SetUsernameinput()
                SetEmail(res.data.email);
                document.getElementById('loading_2').innerHTML = '<div class="alert alert-success" role="alert">Done!</div>';
                setTimeout(() => {
                    document.getElementById('loading_2').style.display = 'none';
                }, 3000);
            }
            return true
        }).catch((err) => {
            console.log(err);
            document.getElementById('loading_2').innerHTML = '<div class="alert alert-danger" role="alert">' + err.response.data.username + '</div>';
            setTimeout(() => {
                document.getElementById('loading_2').style.display = 'none';
            }, 3000);
            return false
        })
        return data
    }
    //Utilsation de la handler de facon local car les valeur des inputs sont deja initialisees
    const handleForm = (event) => {
        switch (event.target.name) {
            case 'username':
                SetUsername(event.target.value)
                SetUsernameinput(event.target.value)
                return
            case 'pseudo':
                SetPseudo(event.target.value)
                return
            case 'tel':
                SetTel(event.target.value)
                return
            case 'email':
                SetEmail(event.target.value)
                return
            case 'isbarber':
                SetIsbarber(event.target.checked)
                return
            case 'file':
                console.log('in');
                SetImg(URL.createObjectURL(event.target.files[0]))
                // SetFile(event.target.files[0])
                const imageFile = event.target.files[0];
                handleImageUpload(imageFile)
                return
        }
    }
    const handleImageUpload = async (fileImage) => {
        const formData = new FormData()
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
            // SetFile(newFile)
            formData.append('image', newFile)
            formData.append('id', sessionStorage.getItem('id'))
            client.post('api/user/change/', formData,
                {
                    headers: { "X-CSRFToken": getCookie('csrftoken') },
                }
            ).then((res) => {
                return true
            }).catch((err) => {
                console.log(err);
                return false
            })
            return
        } catch (error) {
            console.log(error);
        }
    }
    const viewAppointment = (id) => {
        client.get('api/store/hairstyle/' + id + '/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetDevice(res.data[0].device)
            SetImage(res.data[0].image)
            SetPrice(res.data[0].price)
            SetName(res.data[0].name)
            setShow(true)
        }).catch((err) => {
            console.log(err)
        })
    }
    const doneAppointment = (apptm) => {
        client.post('api/appointment/done/',
            { id: apptm },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            getCxAppointment()
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
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
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="profile" title="Profile">
                        <div className="section-profile">
                            <div className='uploadImg'>
                                <Image
                                    // src="./img/coupe-homme.jpg" width="150px" height="150px"
                                    src={img} width="150px" height="150px"
                                ></Image>

                                <Form.Group controlId="formFile" className="mb-3"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '150px',
                                    }}
                                >
                                    <Form.Control id="fileupload" type="file" name='file' onChange={(event) => handleForm(event)} />
                                    <BsCameraFill />
                                    <BsXLg />
                                </Form.Group>
                            </div>

                            <div style={{
                                border: '1px solid #c8c8c8',
                                padding: '10px'
                            }}>
                                <div style={{
                                    border: '1px solid #c8c8c8',
                                    padding: '10px',
                                    marginBottom: '15px',
                                    backgroundColor: 'rgb(87 87 87)',
                                    color: 'white',
                                    borderRadius: '10px'
                                }}>
                                    <Form onSubmit={e => submitUpdate_2(e)}>
                                        <div style={{
                                            marginBottom: '15px',
                                            display: 'flex',
                                            flexWrap: 'nowrap',
                                            justifyContent: 'space-around',
                                            alignItems: 'flex-end'
                                        }}>
                                            <Form.Label>Name :</Form.Label>
                                            <Form.Control type="text" name="username" style={{ width: '65%' }} value={usernameinput} placeholder={username} onChange={(e) => handleForm(e)} />
                                        </div>
                                        <div style={{
                                            marginBottom: '15px',
                                            display: 'flex',
                                            flexWrap: 'nowrap',
                                            justifyContent: 'space-around',
                                            alignItems: 'flex-end'
                                        }}>
                                            <Form.Label>Email :</Form.Label>
                                            <Form.Control type="email" name="email" style={{ width: '65%' }} value={email} onChange={(e) => handleForm(e)} />
                                        </div>
                                        <div id="loading_2" style={{ display: 'none', textAlign: 'center' }}>
                                            <Spinner animation="border" />
                                        </div>
                                        <Button type='submit' style={{ marginBottom: 15, width: '100%' }}>Apply</Button>
                                        <Alert variant='warning' style={{ marginBottom: 0 }}><center>Remember to use this name for your next login</center></Alert>
                                    </Form>
                                </div>
                                <Form onSubmit={e => submitUpdate(e)}>
                                    <Form.Group className="mb-3" controlId="formBasicPseudo">
                                        <Form.Label>Pseudo</Form.Label>
                                        <Form.Control type="text" name="pseudo" value={pseudo} placeholder="Enter your pseudo" onChange={(e) => handleForm(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="tel" name="tel" value={tel} placeholder="123-456-7890" onChange={(e) => handleForm(e)} />
                                    </Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Are you a barber?"
                                        checked={isbarber}
                                        name="isbarber"
                                        onChange={(e) => handleForm(e)}
                                    />
                                    <Alert variant='warning' style={{ marginTop: 15 }}>If you check this box, other managers will be able to see your profile</Alert>
                                    <div id="loading" style={{ display: 'none', textAlign: 'center' }}>
                                        <Spinner animation="border" />
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'nowrap',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Button variant="danger">Delete Account</Button>
                                        <Button type='submit'>Apply changes</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Tab>
                    {
                        (isbarber) ? <Tab eventKey="appointment"
                            title={
                                <React.Fragment>
                                    Appointment
                                    &nbsp;<Badge bg="danger" class="position-absolute top-0 start-100 translate-middle rounded-pill">{countAppointment}</Badge>
                                </React.Fragment>
                            }
                        >

                            <div className="section-profile">
                                <div className='my-3'>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: '5px'
                                    }}>
                                        {
                                            schedulelist.map((schedule, i) =>
                                                <li className="list-time" key={i}>
                                                    <span>{schedule[0]} | {schedule[1]} for <b>{schedule[2]}</b><br />Phone : {schedule[6]}</span>
                                                    {
                                                        (schedule[3] == 'yes') ? <Button variant="success" className="ms-4" onClick={() => { viewAppointment(schedule[4]) }}>View</Button> : ''
                                                    }
                                                    <Button variant="success" className="ms-2" onClick={() => {
                                                        doneAppointment(schedule[5])
                                                    }}>Done</Button>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Tab> : ''
                    }

                </Tabs>
            </div >
            <div className="section-contact" id="section-contact">
                <div className="container">
                    <Contact></Contact>
                </div>
            </div>
            {/* Modal to show cx appointment */}
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title>View hairstyle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-user-info'>
                        <Image id='' src={image} className='mx-2' width='150px' height="150px" rounded />
                        <div id='user-info'>
                            <div><b>{name}</b></div>
                            <div><b>{price}{device}</b></div>
                        </div>
                    </div>
                    <div id="loading_1" style={{ margin: '5px 0 5px', display: 'none', textAlign: 'center' }}>
                        <Spinner animation="border" />
                    </div>
                </Modal.Body>
            </Modal>
            <Iconbutton></Iconbutton>
            <Footer></Footer>
        </div >
    );
};

export default MySpace;