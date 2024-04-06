import React, { useState, useEffect } from 'react';

const Cursus = () => {
  const dataEducation = [
    {
      date: "Avril 2022 - Janvier 2023",
      title: "bosy",
      description: "Compta"
    },
    {
      date: "Avril 2022 - Janvier 2023",
      title: "education",
      description: "Compta"
    }
  ];

  const dataExperiences = [
    {
      date: "Fevrier 2024 - Avril 2024",
      title: "Projet API Licences utilisateurs",
      description: "API"
    },
    {
      date: "Décembre 2023 - Janvier 2024",
      title: "Projet API Plateforme SMS",
      description: "SMS."
    },
    {
      date: "Septembre 2023 - Novembre 2023",
      title: "Projet Gescom (Gestion commerciale)",
      description: "Gescom"
    },
    {
      date: "Juin 2023 - Août 2023",
      title: "Projet CRM",
      description: "Développement de gestion "
    },
    {
      date: "Janvier 2023 - Mai 2023",
      title: "Projet Paie",
      description: "Paie "
    },
    {
      date: "Avril 2022 - Janvier 2023",
      title: "Projets Comptabilité",
      description: "Compta"
    }
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [mode, setMode] = useState('experiences');
  const [experiences, setExperiences] = useState(dataExperiences);

  useEffect(() => {
    if (mode === 'education') {
      setExperiences(dataEducation);
    }
	if (mode === 'experiences') {
		setExperiences(dataExperiences);
	  }
  }, [mode]);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  const toggleEducation = () => {
    setMode('education');
  };

  const toggleExperience = () => {
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
            <strong>{experience.description}</strong> {experience.description}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="mytabs_area p_120">
      <div className="container">
        <div className='row'>
          <div className='col-sm-4 mx-auto'>
            <div className='row'>
              <div className='col-sm-6'>
                <button
                  type="button"
                  className={`btn btn-outline-info ${mode === 'experiences' ? 'active' : ''}`}
                  onClick={toggleExperience}>
                  <span style={{ verticalAlign: 'inherit' }}>Mes expériences</span>
                </button>
              </div>
              <div className='col-sm-6'>
                <button
                  type="button"
                  className={`btn btn-outline-info ${mode === 'education' ? 'active' : ''}`}
                  onClick={toggleEducation}>
                  <span style={{ verticalAlign: 'inherit' }}>Mon éducation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-3'></div>
        <div className='row'>
          <div className='col-lg-6'>
            {experienceItems}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cursus;
