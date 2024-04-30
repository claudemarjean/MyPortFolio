import React from "react";
import Skill from "./about/Skill";
import DescriptionAbout from "./about/DescriptionAbout";
import LangageLogoSlides from "./about/LangageLogoSlides";

const About = () => {

    

    return (
        <section id="about" className="about-mf sect-p4 route">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="box-shadow-full">
                            <div className="row">
                                <DescriptionAbout/>
                                <Skill/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
