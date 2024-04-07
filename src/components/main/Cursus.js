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
  const [imagesProjectEtat, setImageProject] = useState(true);
  const [elementImage, setElementImage] = useState({
	entete: dataExperiences[0].title
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
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
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
            <strong>{experience.description}</strong> {experience.description}
          </div>
        </div>
      </div>
    </div>
  ));

  const imageProjet = (
	<div className="card mb-3">
			<h3 className="card-header">{elementImage.entete}</h3>
			<div className="card-body">
				<h5 className="card-title">Traitement spécial du titre</h5>
				<h6 className="card-subtitle text-muted">Sous-titre de la carte d'assistance</h6>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Espace réservé : Capuchon de l'image" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{ fontSize: '1.125rem', textAnchor: 'middle' }}>
				<rect width="100%" height="100%" fill="#868e96"></rect>
				<text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
			</svg>
			<div className="card-body">
				<p className="card-text">Quelques exemples de texte rapides pour s'appuyer sur le titre de la carte et constituer l'essentiel du contenu de la carte.</p>
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
