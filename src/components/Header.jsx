import { useState, useEffect } from 'react';

const Header = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo-link">
            <img src="/portfolio.jpg" alt="Logo" className="logo" />
          </a>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skills" 
                className={`nav-link ${currentSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('skills')}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#projects" 
                className={`nav-link ${currentSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                CONTACT
              </a>
            </li>
          </ul>
          
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;