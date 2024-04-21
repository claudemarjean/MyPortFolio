import React from "react";
import profileImage from '../../assets/images/profileImage.jpg';
import chearchIdea from '../../assets/animations/chearchIdea.gif';

const About = () => {

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
        <section id="about" className="about-mf sect-p4 route">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="box-shadow-full">
                            <div className="row">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-start">
                                    <div className="skill-mf">
                                        <p className="title-s"><b>Compétences</b></p>
                                        <span><b>Langages de programmation</b></span>
                                        <div><span>PHP</span></div>
                                        <div><span>Javascript</span></div>
                                        <div><span><b>Technologies Web</b></span></div>
                                        <div><span>HTML</span></div>
                                        <div><span>CSS</span></div>
                                        <div><span>Bootstrap</span></div>
                                        <div><span>JQuery</span></div>
                                        <div><span>React JS</span></div>
                                        <div><span>Vue Js</span></div>
                                        <div><span>Symfony</span></div>
                                        <div><span>Code Igniter</span></div>
                                        <div><span><b>Méthodes de conception</b></span></div>
                                        <div><span>2TUP</span></div>
                                        <div><span><b>Langage de modélisation</b></span></div>
                                        <div><span>UML</span>
                                        <div><span><b>système de gestion des versions</b></span></div>
                                        <div><span>Git</span></div>
                                        <div><span><b>Gestion de base de données</b></span></div>
                                        <div><span>MySQL</span></div>
                                        <div><span><b>Logiciel graphique</b></span></div>
                                        <div><span>Adobe Photoshop</span></div></div>
                                        <div></div><span>Adobe Premiere Pro</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
