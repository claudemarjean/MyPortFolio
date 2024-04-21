import React from 'react';

const Service = () => {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Services
              </h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-display"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title" >Front-End Web Development</h2>
                <p className="s-description text-center"> 
                  Full Stack Web Developer, specializing in Front-End, proficient in HTML, CSS, JavaScript, React JS, Angular JS, D3JS. Creates captivating interfaces, delivering an exceptional user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-code-slash"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Back-End Web Development</h2>
                <p className="s-description text-center">
                  Experienced Full Stack web developer specializing in Back-End development, with expertise in PHP, CodeIgniter, Symfony, for crafting robust Back-End systems for seamless web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-camera"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Photographer</h2>
                <p className="s-description text-center">
                  Photographer and Videographer with expertise in video shooting, editing, photo retouching, and the creation of compelling advertising materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
