import React from 'react';
import './supporters.css';

const supporters = ({ supporters }) => {
    return (
        <div className='Supporters'>
            <h4 className='text-center Titulo'>Apoios</h4>
            <div className='Box'>
                {supporters.slice(supporters.length-8, supporters.length).map((supporter, index) => {
                    return (
                        <div key={index} className="text-left">
                            {supporter.name} {supporter.surname}
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
};

export default supporters;