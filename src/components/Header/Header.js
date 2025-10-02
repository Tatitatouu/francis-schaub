import React, { useState } from 'react';
import { Home } from 'lucide-react';
import './Header.css';
import Logo from '../../assets/branding/logo.svg';
import NavDropdown from './NavDropdown';
import MobileBurgerMenu from './MobileBurgerMenu';

const Header = ({ variant = 'default' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header header-${variant}`}>
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo" aria-label="Accueil Francis Schaub">
            <img src={Logo} alt="Francis Schaub" className="logo-img" />
          </a>

          <MobileBurgerMenu 
            isOpen={isMobileMenuOpen} 
            onToggle={toggleMobileMenu} 
          />

          {isMobileMenuOpen && (
            <div className="mobile-overlay" onClick={closeMobileMenu}></div>
          )}
          
          <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link home-link" onClick={closeMobileMenu} aria-label="Accueil">
                  <Home />
                </a>
              </li>
              <NavDropdown onMobileClose={closeMobileMenu} />
              <li className="nav-item">
                <a href="#realisations" className="nav-link" onClick={closeMobileMenu}>
                  NOS RÉALISATIONS
                </a>
              </li>
              <li className="nav-item">
                <a href="#avis" className="nav-link" onClick={closeMobileMenu}>
                  AVIS CLIENTS
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link" onClick={closeMobileMenu}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;