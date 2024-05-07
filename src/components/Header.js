import React from 'react';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><a href="index.html"></a></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Accueil</a></li>
            <li><a className="nav-link scrollto" href="#about">à propos</a></li>
            <li><a className="nav-link scrollto" href="#experiences">expériences</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            {/* <li><a className="nav-link scrollto" href="#blog">Blog</a></li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
