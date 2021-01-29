import React from 'react';
import vacina from '../../assets/images/vacina.png';
import './image.css';

const image = () => {
    return (
        <div className="mx-auto">
            <img src={vacina} className='imgvacina img-thumbnail text-center' alt="Mão segurando uma seringa"/>
        </div>
    );
};

export default image;