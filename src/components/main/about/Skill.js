import React from 'react';
import LogoLangageSlides from './LangageLogoSlides';

const Skill = () => {
  return (
    <>
      <div className="col-sm-6 text-start row" style={{maxHeight:'100%'}}>
        <div className="skill-mf col-10 col-md-10">
          <p className="title-s"><b>Compétences</b></p>
          <span><b>Langages de programmation</b></span>
          <ul>
            <li><span>PHP</span></li>
            <li><span>Javascript</span></li>
          </ul>
          
          <div><span><b>Technologies Web</b></span></div>
          <ul>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
            <li><span>Bootstrap</span></li>
            <li><span>JQuery</span></li>
            <li><span>React JS</span></li>
            <li><span>Vue Js</span></li>
            <li><span>Symfony</span></li>
            <li><span>Code Igniter</span></li>
          </ul>
          <div><span><b>Méthodes de conception</b></span></div>
          <ul>
            <li><span>2TUP</span></li>
          </ul>
          <div><span><b>Langage de modélisation</b></span></div>
          <ul>
            <li><span>UML</span></li> 
          </ul>
          <div><span><b>système de gestion des versions</b></span></div>
          <ul>
            <li><span>Git</span></li>
          </ul>
          <div><span><b>Gestion de base de données</b></span></div>
          <ul>
            <li><span>MySQL</span></li>
          </ul>
          <div><span><b>Outil de modélisation de BDD:</b></span></div>
          <ul>
            <li><span>MySQL Workbench</span></li>
          </ul>
          <div><span><b>Logiciel graphique</b></span></div>
          <ul>
            <li><span>Adobe Photoshop</span></li>
            <li><span>Adobe Premiere Pro</span></li>
          </ul>
        </div>

        <LogoLangageSlides/>

      </div>
      
      
    </>
  )
}

export default Skill;
