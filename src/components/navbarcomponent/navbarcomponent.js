import React, { useState, useEffect } from 'react';
import './navbarcomponent.css';

export const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent immediate closing
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/">Mikrobusová přeprava osob Ostrava</a>
          </div>

          <div className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            <a href="#content" className="nav-link" onClick={() => setIsMenuOpen(false)}>Nabízíme</a>
            <a href="#fotogalerie" className="nav-link" onClick={() => setIsMenuOpen(false)}>Fotogalerie</a>
            <a href="#kontakty" className="nav-link" onClick={() => setIsMenuOpen(false)}>Kontakty</a>
            <a href="Tel: 00420777056080" className="nav-button" onClick={() => setIsMenuOpen(false)}>+420 777 056 080</a>
          </div>
        </div>
      </nav>
    </header>
  );
};




