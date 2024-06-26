import React from 'react';
import { useState,useEffect } from 'react';
import { imageLogoSlide } from './imageLogoSlide';

const LangageLogoSlides = () => {
    const languagesLogo = [
        imageLogoSlide.jsLogo,
        imageLogoSlide.phpLogo,
        imageLogoSlide.mySQL,
        imageLogoSlide.css,
        imageLogoSlide.gitFlow,
        imageLogoSlide.reactJs,
        imageLogoSlide.Bootstrap,
        imageLogoSlide.symfony,
        imageLogoSlide.htmlFive,
        imageLogoSlide.jQuery
    ];

    const [resetCounter, setResetCounter] = useState(0);

    const scrollWrapperStyle = {
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '110vh'
    };

    const scrollContentStyle = {
        display: 'inline-block',
        animation: 'scroll 50s linear infinite'
    };

    const keyframes = `
        @keyframes scroll {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-100%);
            }
        }
    `;

    const logoImageStyle = {
        maxWidth: '70%',
        maxHeight: '50%',
        width: 'auto',
        height: 'auto',
        margin: 'auto',
    };

    const scrollItemStyle = {
        display: 'block',
        marginBottom: '50%', // Espacement entre les logos
        cursor: 'pointer',
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setResetCounter(prevCounter => prevCounter + 1);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []); 

    useEffect(() => {
    }, [resetCounter]);

    const listeLogo = (
        languagesLogo.map((logolangage, index) => (
            <div key={index} style={scrollItemStyle}>
                <img src={logolangage} style={logoImageStyle} alt={`Logo ${index + 1}`} />
            </div>
        ))
    );

    return (
        <div style={scrollWrapperStyle} className="col-2 col-md-2" >
            <style>{keyframes}</style>
            <div style={scrollContentStyle}>
                {listeLogo}
                {listeLogo}
                {listeLogo}
            </div>
        </div>
    );
};

export default LangageLogoSlides;
