import React from "react";
import profileImage from '../../assets/images/profileImage.jpg';

const About = () => {

    const styleProgressBar = {
        width: '100%',
        'aria-valuenow' : '75',
        'aria-valuemin' : '0',
        'aria-valuemax' : '100'
    }

    return (
        <section id="section" className="about-mf sect-p4 route">
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
                                                        Name:<span> ANDRIAMAHATRADRAIBE</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="title-s">
                                                        Last Name: <span> Marjean Claude</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="title-s">
                                                        Profile: <span> full stack developer</span>
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
                                        <div className="more-info text-start ">
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
                                    </div>
                                </div>
                                <div className="col-md-6 text-start">
                                    <div className="skill-mf">
                                        <p className="title-s"><b>Skill</b></p>
                                        <span><b>Programming languages</b></span>
                                        <div><span>PHP</span></div>
                                        <div><span>Javascript</span></div>
                                        <hr/>
                                        <div><span><b>Web technologies</b></span></div>
                                        <div><span>HTML</span></div>
                                        <div><span>CSS</span></div>
                                        <div><span>JQuery</span></div>
                                        <div><span>React JS</span></div>
                                        <div><span>D3 JS</span></div>
                                        <div><span>Symfony</span></div>
                                        <div><span>Code Igniter</span></div>
                                        <hr/>
                                        <div><span><b>Design methods</b></span></div>
                                        <div><span>2TUP</span></div>
                                        <hr/>
                                        <div><span><b>Modeling language</b></span></div>
                                        <div><span>UML</span>
                                        <hr/>
                                        <div><span><b>Modeling language</b></span></div>
                                        <div><span>UML</span></div>
                                        <hr/>
                                        <div><span><b>versioning system</b></span></div>
                                        <div><span>Git</span></div>
                                        <hr/>
                                        <div><span><b>Database management</b></span></div>
                                        <div><span>MySQL</span></div>
                                        <hr/>
                                        <div><span><b>Graphics software</b></span></div>
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
