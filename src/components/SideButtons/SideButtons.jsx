
import React from 'react';
import './SideButtons.css';
  


const SideButtons = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-buttons">
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('work')}>Work</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </div>
    
  );

};

export default SideButtons;


