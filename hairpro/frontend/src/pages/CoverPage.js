import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Image, Button } from 'react-bootstrap';
import { BsHandThumbsUpFill, BsShopWindow } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Iconbutton from '../components/Iconbutton';
import { client, getCookie } from '../data/functions';

const CoverPage = () => {
    const navigate = useNavigate();
    const [store, SetStore] = useState([]);
    useEffect(() => {
        client.get('api/store/',
            { withCredentials: true },
            {
                headers: { "X-CSRFToken": getCookie('csrftoken') },
            }
        ).then((res) => {
            SetStore(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    const openStore = (id) => {
        sessionStorage.setItem('store', id);
        setTimeout(() => {
            navigate('/home')
        }, 1000);
        return id
    }
    const [modalFormShow, SetModalFormShow] = useState(false);
    return (
        <div className='container' id='scrollup'>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                borderBottom: '1px solid #eaeaea;',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                paddingTop: '30px'
            }}>
                <Button variant="success" onClick={() => navigate('/create-my-business')}>Create your Business &nbsp; <BsShopWindow /></Button>
                {/* <h4>Or</h4>
                <Button variant="outline-success" onClick={() => SetModalFormShow(true)}>Sign In</Button>
                <br /> */}
                <br />
                <center><h3>find your barbershop</h3></center>
                <div style={{
                    borderBottom: '1px solid #eaeaea',
                    marginBottom: '15px'
                }}>
                    {/* <Form.Group as={Row} className="mb-3" controlId="formSelectRegion">
                        <Form.Label column sm="5">Regions : </Form.Label>
                        <Col sm="7">
                            <Form.Select size="sm">
                                <option>...</option>
                                <option value="1">New-Brunswick</option>
                                <option value="2">Quebec</option>
                                <option value="3">Ontario</option>
                            </Form.Select>
                        </Col>
                    </Form.Group> */}
                    <Form.Group as={Row} className="mb-3" controlId="formSelectTown">
                        <Form.Label column sm="5">Towns : </Form.Label>
                        <Col sm="7">
                            <Form.Select size="sm">
                                <option>...</option>
                                <option value="1">Moncton</option>
                                <option value="2">Dieppe</option>
                                <option value="3">Bathurst</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </div>
                <div className="list-barber">
                    <Row xs={1} md={2} lg={3}>
                        {store.map((store, i) =>
                            <Col className='item' id={store.id} key={i} onClick={() => openStore(store.id)}>
                                <div id="barbershop-img">
                                    <Image src={store.image} width="80px" height="80px" />
                                </div>
                                <div className="details">
                                    <div id='title'><b>{store.name}</b></div>
                                    <div id='adr'><b>Adresse : </b><span>{store.adress}</span></div>
                                    <div id='statut'>
                                        <div><b>Now : </b><i>{store.status}</i></div>
                                        <div id='stars'>
                                            <BsHandThumbsUpFill />&nbsp;{store.like}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
                <a href="/home">Go to home page</a>
            </div>
            <Iconbutton></Iconbutton>
            {/* <Formconnect show={modalFormShow} onHide={() => SetModalFormShow(false)}></Formconnect> */}
        </div>
    );
};
export default CoverPage; 