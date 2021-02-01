import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';

// assets
import Logo from '../styles/assets/eating.svg';

const Navbar = () => {
  const { results } = useSelector((state) => state.user);
  const isResults = results.length > 0;

  return (
    <nav className='menu container'>
      <div className='menu__logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      {isResults && (
        <div className='menu__search'>
          <Search />
        </div>
      )}
      <div className='menu__list'>
        <NavLink
          to='/favorites'
          className='menu__item'
          activeStyle={{ textDecoration: 'underline' }}
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
