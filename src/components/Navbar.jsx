import React from 'react';
import Search from './Search';

// assets
import logo from '../styles/assets/eating.svg';

const Navbar = () => (
  <nav className='menu container'>
    <div className='menu__logo'>
      <img src='../styles/assets/eating.svg' alt='eating-app' />
    </div>
    <div className='menu__nav'>
      <Search />
    </div>
  </nav>
);

export default Navbar;
