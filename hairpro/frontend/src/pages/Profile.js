import React, { useContext, useEffect, useState } from 'react';
import Mynavbar from '../components/Navbarcomp';
import Headerpage from '../components/Headerpage';
import { Breadcrumb, Alert, Image, Form, Button } from 'react-bootstrap';
import { BsXLg, BsCameraFill } from "react-icons/bs";
import Contact from '../components/Contact';
import Iconbutton from '../components/Iconbutton';
import Footer from '../components/Footer';
import { getCookie, data } from '../data/functions';
import axios from 'axios';
import { AppContext } from '../reducers/AppContext';


axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: "http://localhost:8000/"
})

const Profile = (props) => {
    // const { randomutility } = useContext(AppContext);
    const [username, SetUsername] = useState();
    const [pseudo, SetPseudo] = useState();
    const [tel, SetTel] = useState();
    const [email, SetEmail] = useState();
    const [isbarber, SetIsbarber] = useState();
    const [img, SetImg] = useState();
    const [file, SetFile] = useState();
    const [usernameinput, SetUsernameinput] = useState('');
    const [emailinput, SetEmailinput] = useState('');
    // const [name, SetName] = useState();

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
    }, [])

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
                SetEmailinput(event.target.value)
                return
            case 'isbarber':
                SetIsbarber(event.target.checked)
                return
            case 'file':
                SetImg(URL.createObjectURL(event.target.files[0]))
                SetFile(event.target.files[0])
                return
        }
    }

    const submitUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData()
        if (emailinput && usernameinput) {
            formData.append('email', emailinput)
            formData.append('username', usernameinput)
        } else if (emailinput) {
            formData.append('email', emailinput)
        } else if (usernameinput) {
            formData.append('username', usernameinput)
        } else {
            formData.append('pseudo', pseudo)
            formData.append('tel', tel)
            formData.append('isbarber', isbarber)
            formData.append('image', file)
        }
        formData.append('id', sessionStorage.getItem('id'))

        client.post('api/user/change/', formData,
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            sessionStorage.setItem('user', username)
            SetUsername(username);
            SetPseudo(res.data[1]['pseudo']);
            SetTel(res.data[1]['tel']);
            SetEmail(res.data[0]['email']);
            SetIsbarber(res.data[1]['is_barber']);
            (res.data[1]['image']) ? SetImg(res.data[1]['image']) : '';
            return true
        }).catch((err) => {
            console.log(err);
            return false
        })
        return data
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
                <div className="section-profile">
                    <Form onSubmit={e => submitUpdate(e)}>
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
                                <Form.Control id="fileupload" type="file" name='file' onChange={(e) => handleForm(e)} />
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
                                    <Form.Control type="email" name="email" style={{ width: '65%' }} value={emailinput} placeholder={email} onChange={(e) => handleForm(e, 'email')} />
                                </div>
                                <Button type='submit' style={{ marginBottom: 15, width: '100%' }}>Apply</Button>
                                <Alert variant='warning' style={{ marginBottom: 0 }}><center>Remember to use this name for your next login</center></Alert>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicPseudo">
                                <Form.Label>Pseudo</Form.Label>
                                <Form.Control type="text" name="pseudo" value={pseudo} placeholder="Enter your pseudo" onChange={(e) => handleForm(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="tel" name="tel" value={tel} pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder="123-456-7890" onChange={(e) => handleForm(e)} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Enter your password</Form.Label>
                                <Form.Control type="password" placeholder="Your password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                <Form.Label>Confirm your password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm your password" />
                            </Form.Group> */}
                            <Form.Check
                                type="checkbox"
                                label="Are you a barber?"
                                checked={isbarber}
                                name="isbarber"
                                onChange={(e) => handleForm(e)}
                            />
                            <Alert variant='warning' style={{ marginTop: 15 }}>If you check this box, other managers will be able to see your profile</Alert>
                            <br />
                            <div style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between'
                            }}>
                                <Button variant="danger">Delete Account</Button>
                                <Button type='submit'>Apply changes</Button>
                            </div>
                        </div>
                    </Form>
                </div>

            </div >
            <div className="section-contact" id="section-contact">
                <div className="container">
                    <Contact></Contact>
                </div>
            </div>
            <Iconbutton></Iconbutton>
            <Footer></Footer>
        </div >
    );
};

export default Profile;