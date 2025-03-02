import React, { useState, useRef } from 'react';
import { WaveEffect } from '../components/WaveEffect';
import './SideButtons.css';
  
const SideButtons = () => {
  const [activeSection, setActiveSection] = useState('');
  const [activeElement, setActiveElement] = useState(null);

  const scrollToSection = (sectionId, event) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setActiveElement(event.currentTarget);
    }
  };

  return (
    <div className="side-buttons">
      <nav style={{ position: 'relative' }}>
        <ul>
          <li>
            <button onClick={(e) => scrollToSection('home', e)}>
              <img 
                src="../../assets/icons/home_icon.svg" 
                className={activeSection === 'home' ? 'active-img' : ''} 
              /> 
            </button>
          </li>
          <li>
            <button onClick={(e) => scrollToSection('about', e)}>
              <img 
                src="../../assets/icons/about_icon.svg" 
                className={activeSection === 'about' ? 'active-img' : ''} 
              />
            </button>
          </li>
          <li>
            <button onClick={(e) => scrollToSection('work', e)}>
              <img 
                src="../../assets/icons/work_icon.svg" 
                className={activeSection === 'work' ? 'active-img' : ''} 
              />
            </button>
          </li>
          <li>
            <button onClick={(e) => scrollToSection('contact', e)}>
              <img 
                src="../../assets/icons/contact_icon.svg" 
                className={activeSection === 'contact' ? 'active-img' : ''} 
              />
            </button>
          </li>
        </ul>
        <WaveEffect activeElement={activeElement} />
      </nav>
    </div>
  );
};

export default SideButtons;


