import React from 'react';
import { FacebookIcon, FacebookShareButton, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon } from "react-share";
import './share.css';

const share = () => {
    return (
        <div className="Share mb-4">
            <h3 className="text-center">Compartilhe nas suas redes.</h3>
            <FacebookShareButton
                className="m-2"
                url={"https://ceciliopt.com.br"}
                quote={"Vacinas em todos os Centros de Saúde de Campinas!"}
                hashtag="#descentralizavacina"
            >
                <FacebookIcon size={36} />
            </FacebookShareButton>
            <WhatsappShareButton
                className="m-2"
                url={"https://ceciliopt.com.br"}
                quote={"Vacinas em todos os Centros de Saúde de Campinas!"}
                hashtag="#descentralizavacina"
            >
                <WhatsappIcon size={36} />
            </WhatsappShareButton>
            <TwitterShareButton
                className="m-2"
                url={"https://ceciliopt.com.br"}
                title={"Vacinas em todos os Centros de Saúde de Campinas! Assine já em:"} 
                hashtags={["descentralizavacina"]}
                quote={"Vacinas em todos os Centros de Saúde de Campinas!"}
                hashtag="#descentralizavacina"
            >
                <TwitterIcon size={36} />
            </TwitterShareButton>
        </div>
    )
}

export default share;