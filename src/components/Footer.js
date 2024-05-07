import React from 'react';
import devAvatar from '../assets/images/devAvatar.png';

const Footer = () => {
  const handleWattsApp = () =>{
    const phoneNumber = 2610345048888;
    window.open(`https://wa.me/${phoneNumber}`)
  }

  const handleFacebook = () =>{
    window.open(`https://web.facebook.com/claude.marjean/`);
  }

  const handleMail = () =>{
    window.open(`mailto:marjean.8888@gmail.com`);
  }

  const handleLinkedin = () =>{
    window.open(`https://www.linkedin.com/in/marjean-claude-andriamahatradraibe`);
  }

  const handleSiteWeb = () =>{
    window.open(`https://claudemarjean.vercel.app`);
  }

  const noSurligne = {
    textDecoration: 'none'
  }

  const handleDowload = () =>{
    const pdfUrl = '../assets/cv/cvClaude.pdf';
    window.open(pdfUrl, '_blank');
  }

  return (
    <footer>
      <div className="container" id="contact">
      <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">à propos</h2>
              <p>Passionné par le développement full-stack, spécialisé dans la création d'expériences web complètes, du frontend au backend, tout en concevant des bases de données efficaces. Mon expertise en tant que photographe et vidéaste enrichit chaque projet multimédia d'une touche artistique.</p>
              <ul className="ftco-footer-social list-unstyled d-md-inline-flex d-block mt-5">
                <li className="me-md-4" ><a href="" className="text-white"><span className="bi bi-whatsapp" onClick={() => handleWattsApp()}></span></a></li>
                <li className="me-md-4"><a href="" className='text-white'><span className="bi bi-facebook" onClick={()=>handleFacebook()}></span></a></li>
                <li className="me-md-4"><a href="" className='text-white'><span className="bi bi-linkedin"></span></a></li>
                <li className="me-md-4"><a href="" className='text-white'><span className="bi bi-envelope" onClick={()=>handleMail()}></span></a></li>
                <li className="me-md-4"><a href="" className='text-white'><span className="bi bi-globe" onClick={()=>handleSiteWeb()}></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Liens</h2>
              <ul className="list-unstyled">
                <li><a href="#hero" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2 "></span>Accueil</a></li>
                <li><a href="#about" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2"></span>à Propos</a></li>
                <li><a href="#experiences" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2"></span>Expériences</a></li>
                <li><a href="#services" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#contact" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-outline-info text-white" onClick={handleDowload}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Obtenir un CV</font></font></button>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#services" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2 "></span>Front-End</a></li>
                <li><a href="#services" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2 "></span>Back-End</a></li>
                <li><a href="#services" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2 "></span>Bases de données</a></li>
                <li><a href="#services" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2 "></span>Développement Web</a></li>
                <li><a href="#services" className='text-white' style={noSurligne}><span className="icon-long-arrow-right mr-2 "></span>Expérience utilisateur</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <img 
                    src={devAvatar} 
                      alt="avatar dev" 
                      className="img-fluid"
              />
            </div>
          </div>
        </div>
        

        <div className="row">
          <div className="col-12">
            <div className="copyright-box">
              <p className="copyright">&copy; Copyright <strong>C109</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
