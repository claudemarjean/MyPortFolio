import React,{useState} from 'react'

const Cursus = () => {
	const [experiences, setExperiences] = useState([
		{
			date: "Fevrier 2024 - Avril 2024",
			title: "Projet API Licences utilisateus  ",
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
	]);

	const experienceItems = experiences.map((experience,index)=>(
		<li key={index}>
			<span></span>
			<div className='media'>
				<div className='d-flex'>
					<p>{experience.date}</p>
				</div>
				<div className='media-body'>
					<h5>{experience.title}</h5>
					<p>{experience.description}</p>
				</div>
			</div>
		</li>
	));

  return (
    <section className="mytabs_area p_120">
        	<div className="container">
        		<div className="tabs_inner">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<ul className="list">
								{experienceItems}
							</ul>
							
						</div>
						
					</div>
        		</div>
        	</div>
        </section>
  )
}

export default Cursus