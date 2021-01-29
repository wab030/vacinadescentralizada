import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <div className="Footer">
            <div className="row production">
                <div className="col-md-12">
                    <p className="text-center text-light">Produzido pelo Conselho Político do mandato do vereador Cecílio</p>
                </div>
            </div>
            <div className="row information">
                <div className="col-md-12">
                    <p className="text-center text-light">Dúvidas ou informações escreva para:
                    <a href="mailto:mandatocecilio@gmail.com"> mandatocecilio@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default footer;