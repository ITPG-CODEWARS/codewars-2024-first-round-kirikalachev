import Menu from './menu.svg';
import CloseIcon from './close.svg';
import Logo from './logo.png';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavContent() {
  const navigate = useNavigate();
  const navContent = ['Trains', 'History', 'Blog', 'Contacts'];
  
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigate and close menu
  const handleLinkClick = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className='mobile-nav'>
      <ul className='mobile-navbar'>
        <li className='mobile-navbar-menu' onClick={toggleMenu}>
          <img src={isOpen ? CloseIcon : Menu} alt={isOpen ? 'Close' : 'Menu'} />
        </li>
        <li className='mobile-navbar-brand' onClick={() => handleLinkClick('/')}>
          <img src={Logo} alt='Logo' />
          <h1>RAILSPY</h1>
        </li>
      </ul>

      <ul className={`mobile-navbar-content ${isOpen ? 'open' : ''}`}>
        {navContent.map((item, index) => (
          <li
            className={`mobile-navbar-link ${isOpen ? 'open' : ''}`}
            key={index}
            onClick={() => handleLinkClick(`/${item.toLowerCase()}`)}
          >
            <span>{item}</span>
          </li>
        ))}
        <span></span>        
        <span></span>
        <span></span>        <span></span>        <span></span>        <span></span>

      </ul>
    </nav>
  );
}

export default NavContent;
