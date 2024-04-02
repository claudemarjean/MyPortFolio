import React,{useState} from 'react'

const Cursus = () => {
	const [experiences, setExperiences] = useState([
		{
			date: "Avril 2022 jusqu'à ce jour",
			title: "Développeur web Full Stack (PHP-JS)",
			description: "Développement de logiciel comptable avec Angular JS, CodeIgniter, jQuery, MySQL, HMVC."
		},
		{
			date: "Avril 2022 jusqu'à ce jour",
			title: "Développeur web Full Stack (PHP-JS)",
			description: "Développement de logiciel comptable avec Angular JS, CodeIgniter, jQuery, MySQL, HMVC."
		},
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