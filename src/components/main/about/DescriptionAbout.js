import React from 'react';
import profileImage from '../../../assets/images/profileImage.jpg';
import chearchIdea from '../../../assets/animations/chearchIdea.gif';
import LogoLangageSlide from './LogoLangageSlide';

const DescriptionAbout = () => {

    const styleProgressBar = {
        width: '100%',
        'aria-valuenow' : '75',
        'aria-valuemin' : '0',
        'aria-valuemax' : '100'
    }

    const styleChearchIdea = {
        width: '60%'
    }
    
  return (
    <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-6 col-md-5">
                                            <div className="about-img">
                                                <img 
                                                    src={profileImage} 
                                                    className="img-fluid rounded b-shadow-a" 
                                                    alt="Profile Image" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-7 text-start">
                                            <div className="about-info">
                                                <p>
                                                    <span className="title-s">
                                                        <span> ANDRIAMAHATRADRAIBE</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="title-s">
                                                        <span> Marjean Claude</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="title-s">
                                                        <span> Développeur Full Stack</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12  text-start aboutDescription" >
                                            <p>
                                            Je suis un développeur web passionné et créatif, spécialisé dans les langages tels que PHP et JavaScript, ainsi que dans les technologies web comme HTML, CSS, et les frameworks comme Symfony et React.js. Avec une solide expérience en conception et développement, ainsi qu'une maîtrise des outils tels que Git et Adobe Photoshop, je crée des solutions web innovantes et esthétiques qui répondent aux besoins de mes clients avec efficacité et élégance.
                                            </p>
                                        </div>
                                        <div className="skill-mf ">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={styleProgressBar}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-info text-start " style={{ color: 'black' }}>
                                            <ul className="list-ico"> 
                                                <li><span className="bi bi-geo-alt"></span>Madagascar</li>
                                                <li><span className="bi bi-phone"></span>+261 34 50 488 88</li>
                                                <li><span className="bi bi-envelope"></span>marjean.8888@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="socials text-start">
                                            <ul>
                                                <li><a href="https://web.facebook.com/claude.marjean/"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                                                <li><a href="https://www.linkedin.com/in/marjean-claude-andriamahatradraibe"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                                            </ul>
                                        </div>
                                        <div >
                                            <img src={chearchIdea} style={styleChearchIdea}/>
                                            <LogoLangageSlide/>
                                        </div>
                                        
                                    </div>
    </div>
  )
}

export default DescriptionAbout