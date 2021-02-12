import React from 'react';
import './video.css';

const BoxVideo = ( {video, videoTitle}) => {
    return (
        <figure className="mx-auto">
            <video controls>
                <source src={video} type="video/mp4" />
                <p>Seu navegador não suporta o elemento video HTML5.</p>
            </video>
            <figcaption>{videoTitle}</figcaption>
        </figure>

    );
};

export default BoxVideo;