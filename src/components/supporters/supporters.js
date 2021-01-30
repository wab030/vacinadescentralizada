import React from 'react';
import './supporters.css';

const supporters = ({ supporters }) => {
    return (
        <div className='Supporters'>
            <h4 className='text-center Titulo'>Apoios</h4>
            <div className='Box'>
                {supporters.map((supporter, index) => {
                    let html = '';
                    if (supporter.publicSign) {
                        html = (
                            <div key={index} className="text-left">
                                {supporter.name} {supporter.surname}
                            </div>
                        );
                    }
                    return (html)
                })}
            </div>
        </div>
    );
};

export default supporters;