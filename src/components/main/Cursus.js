import React, { useState, useEffect } from 'react';
import {dataEducation, dataExperiences} from './dataCursus/dataCursus';
import {imageFiles} from  './dataCursus/imageProject';

const Cursus = () => {

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [mode, setMode] = useState('experiences');
  const [experiences, setExperiences] = useState(dataExperiences);
  const [imagesProjectEtat, setImageProject] = useState(true);
  const [elementImage, setElementImage] = useState({
    entete: dataExperiences[0].title,
    descriptionImage : dataExperiences[0].descriptionImage,
    titreImage : dataExperiences[0].titreImage,
    sousTitreImage: dataExperiences[0].sousTitreImage,
    imageName: dataExperiences[0].imageName
  });
  

  useEffect(() => {
    if (mode === 'education') {
      setExperiences(dataEducation);
    }
	if (mode === 'experiences') {
		setExperiences(dataExperiences);
	  }
  }, [mode]);

  const toggleAccordion = (accordionId) => {
    let idImage = accordionId.match(/\d+/)[0]; // prend l'id pour l'image à partir de collapse
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
    setElementImage({
      entete: dataExperiences[idImage].title,
      descriptionImage : dataExperiences[idImage].descriptionImage,
      titreImage : dataExperiences[idImage].titreImage,
      sousTitreImage: dataExperiences[idImage].sousTitreImage,
      imageName: dataExperiences[idImage].imageName
    });
  };

  const toggleEducation = () => {
	setImageProject(false);
    setMode('education');
  };

  const toggleExperience = () => {
	setImageProject(true);
    setMode('experiences');
  };

  const experienceItems = experiences.map((experience, index) => (
    <div className="accordion" id="accordionExample" key={index}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className={`accordion-button ${activeAccordion === `collaps${index}` ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(`collaps${index}`)}
            aria-expanded={activeAccordion === `collaps${index}`}
            aria-controls={`collaps${index}`}
          >
            {experience.title}
          </button>
        </h2>
        <div
          id={`collaps${index}`}
          className={`accordion-collapse collapse ${activeAccordion === `collaps${index}` ? 'show' : ''}`}
          aria-labelledby={`heading${index}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>{experience.date}</strong>
            <br/>
            {experience.description}
          </div>
        </div>
      </div>
    </div>
  ));

  const imageProjet = (
    <div className="card mb-3">
      <h3 className="card-header">{elementImage.entete}</h3>
      <div className="card-body">
        <h5 className="card-title">{elementImage.titreImage}</h5>
        <h6 className="card-subtitle text-muted">{elementImage.sousTitreImage}</h6>
      </div>
      <img src={imageFiles[elementImage.imageName]} alt={`${elementImage.imageName}`} className="img-fluid" />
      <div className="card-body">
        <p className="card-text">{elementImage.descriptionImage}</p>
      </div>
    </div>
  );
  

  const contentExperienceEducation = (
	imagesProjectEtat ? (
	  <>
		<div className='col-sm-6'>
		  {experienceItems}
		</div>
		<div className='col-sm-6'>
		  {imageProjet}
		</div>
	  </>
	) : (
	  <div className='col-sm-6 mx-auto'>
		{experienceItems}
	  </div>
	)
  );
  

  return (
    <section className="mytabs_area p_120">
      <div className="container">
        <div className='row'>
          <div className='col-sm-4 mx-auto'>
            <div className='row'>
              <div className='col-sm-6'>
                <button
                  type="button"
                  className={`btn btn-outline-light ${mode === 'experiences' ? 'active' : ''}`}
                  onClick={toggleExperience}>
                  <span style={{ verticalAlign: 'inherit' }}>Mes expériences</span>
                </button>
              </div>
              <div className='col-sm-6'>
                <button
                  type="button"
                  className={`btn btn-outline-light ${mode === 'education' ? 'active' : ''}`}
                  onClick={toggleEducation}>
                  <span style={{ verticalAlign: 'inherit' }}>Mon éducation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-3'></div>
        <div className='row'>
          {contentExperienceEducation}
        </div>
      </div>
    </section>
  )
}

export default Cursus;
