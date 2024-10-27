import Menu from './menu.svg';
import CloseIcon from './close.svg';
import Logo from './logo.png';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavContent() {
  const navigate = useNavigate();
  const navContent = ['Home', 'Trains', 'History', 'Technology', 'Blog', 'Contacts'];
  
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mobile-nav'>
      <ul className='mobile-navbar'>
        <li className='mobile-navbar-menu' onClick={toggleMenu}>
          <img src={isOpen ? CloseIcon : Menu} alt={isOpen ? 'Close' : 'Menu'} />
        </li>
        <li className='mobile-navbar-brand' onClick={() => navigate('/')}> {/* Fix navigation */}
          <img src={Logo} alt='Logo' />
          <h1>RAILSPY</h1>
        </li>
      </ul>

      <ul className={`mobile-navbar-content ${isOpen ? 'open' : ''}`}>
        {navContent.map((item, index) => (
          <li
            className={`mobile-navbar-link ${isOpen ? 'open' : ''}`}
            key={index}
            onClick={() => navigate(`/${item.toLowerCase()}`)} // Dynamic navigation based on item
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavContent;
