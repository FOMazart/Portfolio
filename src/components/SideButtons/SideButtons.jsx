
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
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('home')}> <img src="../../assets/icons/home_bar.svg" className='home-bar'/> </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}><img src="../../assets/icons/person.svg" className='person-bar'/></button>
          </li>
          <li>
            <button onClick={() => scrollToSection('work')}><img src="../../assets/icons/work_bar.svg" className='work-bar'/></button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}><img src="../../assets/icons/Phone_bar.svg" className='Phone-bar'/></button>
          </li>
        </ul>
      </nav>
    </div>
    
  );

};

export default SideButtons;


