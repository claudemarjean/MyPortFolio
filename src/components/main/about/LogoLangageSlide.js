import React, { useEffect } from 'react';
import { imageLogoSlide } from './imageLogoSlide';
import { Carousel } from 'bootstrap';

const LogoLangageSlide = () => {
    // Supposons que languages soit un tableau contenant les chemins d'accès aux images des logos des langages
    const languages = [
        imageLogoSlide.phpLogo, 
        imageLogoSlide.jsLogo,
        imageLogoSlide.mySQL, 
        imageLogoSlide.css, 
        imageLogoSlide.gitFlow, 
        imageLogoSlide.reactJs, 
        imageLogoSlide.Bootstrap, 
        imageLogoSlide.symfony, 
        imageLogoSlide.htmlFive, 
        imageLogoSlide.jQuery, 
    ];

    useEffect(() => {
        const carousel = document.getElementById('carouselExampleSlidesOnly');
        const carouselInstance = new Carousel(carousel, {
            interval: 2000, // Changer la durée selon vos besoins
            ride: true
        });
    }, []);

    const containerStyle = {
        width: '200px', // Taille fixe du div
        height: '150px', // Taille fixe du div
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const logoImageStyle = {
        maxWidth: '50%', // Pour que l'image s'adapte à la largeur du conteneur
        maxHeight: '50%', // Pour que l'image s'adapte à la hauteur du conteneur
        width: 'auto', // Pour que l'image s'adapte à la largeur du conteneur
        height: 'auto', // Pour que l'image s'adapte à la hauteur du conteneur
        margin: 'auto' // Pour centrer l'image dans le conteneur
    };

    return (
        <div className="col-12">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {languages.map((language, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div style={containerStyle}>
                                <img src={language} className="d-block" style={logoImageStyle} alt={`Logo ${index}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogoLangageSlide;
