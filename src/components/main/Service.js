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
                  
                  Développeur Web Full Stack, spécialisé en Front-End, maîtrisant HTML, CSS, JavaScript, React JS, Angular JS, D3JS. Crée des interfaces captivantes offrant une expérience utilisateur exceptionnelle.
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
                  
                  Développeur Web Full Stack expérimenté spécialisé dans le développement Back-End, avec une expertise en PHP, CodeIgniter, Symfony, pour créer des systèmes Back-End robustes pour des applications web fluides.
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
                <h2 className="s-title">Photographe</h2>
                <p className="s-description text-center">
                  
                  Photographe et vidéaste avec une expertise dans la prise de vue vidéo, le montage, la retouche photo et la création de matériel publicitaire percutant.
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
