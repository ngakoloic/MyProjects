import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastComp = (props) => {
    return (
        <ToastContainer
            className="p-3"
            position={'middle-center'}
            style={{ zIndex: 1046 }}
        >
            <Toast {...props}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{props.header_content}</strong>
                </Toast.Header>
                <Toast.Body className='text-black'>{props.body_content}</Toast.Body>
            </Toast>
        </ToastContainer>

    );
};

export default ToastComp;