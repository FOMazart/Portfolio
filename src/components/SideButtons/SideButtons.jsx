import React, { useState } from 'react';
import './SideButtons.css';
  
const SideButtons = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="side-buttons">
      <nav>
        <ul>
          <li>
            <button 
              onClick={() => scrollToSection('home')} 
              className={activeSection === 'home' ? 'active' : ''}
            >
              <img src="../../assets/icons/home_icon.svg" className={`home-bar ${activeSection === 'home' ? 'active-img' : ''}`}/> 
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className={activeSection === 'about' ? 'active' : ''}
            >
              <img src="../../assets/icons/about_icon.svg" className={`person-bar ${activeSection === 'about' ? 'active-img' : ''}`}/>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('work')} 
              className={activeSection === 'work' ? 'active' : ''}
            >
              <img src="../../assets/icons/work_icon.svg" className={`work-bar ${activeSection === 'work' ? 'active-img' : ''}`}/>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              <img src="../../assets/icons/contact_icon.svg" className={`Phone-bar ${activeSection === 'contact' ? 'active-img' : ''}`}/>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideButtons;


