import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import './Header.css';
import Logo from '../../assets/branding/logo.svg';
import NavDropdown from './NavDropdown';
import MobileBurgerMenu from './MobileBurgerMenu';

const Header = ({ variant = 'default' }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Détection de la section actuelle (sanitaire ou carrelage)
  const currentSection = location.pathname.startsWith('/carrelage') ? 'carrelage' : 'sanitaire';
  const homeLink = '/';

  useEffect(() => {
    const handleScroll = () => {
      // Détection du scroll pour réduire le header
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calcul de la progression du scroll
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header header-${variant} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="Retour au choix d'activité">
            <img src={Logo} alt="Francis Schaub" className="logo-img" />
          </Link>

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
                <Link to={homeLink} className="nav-link home-link" onClick={closeMobileMenu} aria-label="Accueil">
                  <Home />
                </Link>
              </li>
              {/* Menu "NOS PRESTATIONS" uniquement pour la section sanitaire */}
              {currentSection === 'sanitaire' && (
                <NavDropdown onMobileClose={closeMobileMenu} section={currentSection} />
              )}
              {/* Menu "NOS RÉALISATIONS" uniquement pour la section sanitaire */}
              {currentSection === 'sanitaire' && (
                <li className="nav-item">
                  <Link to={`/${currentSection}/realisations`} className="nav-link" onClick={closeMobileMenu}>
                    NOS RÉALISATIONS
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to={`/${currentSection}/contact`} className="nav-link" onClick={closeMobileMenu}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;