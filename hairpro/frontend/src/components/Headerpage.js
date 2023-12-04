import React from 'react';

const Headerpage = (props) => {
    return (
        <div className='headerpage'>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Headerpage;