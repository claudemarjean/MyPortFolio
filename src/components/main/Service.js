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
                <span className="ico-circle"><i className="bi bi-database"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Concepteur de Bases de Données</h2>
                <p className="s-description text-center">
                  Concepteur de bases de données spécialisé dans la modélisation et l'optimisation avec UML et MySQL Workbench. Expertise dans la création de structures de données robustes et évolutives pour diverses applications métiers. 
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
