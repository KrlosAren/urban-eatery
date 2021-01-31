import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';

// assets
import Logo from '../styles/assets/eating.svg';

const Navbar = () => {
  const { data } = useSelector((state) => state.user);
  return (
    <nav className='menu container'>
      <div className='menu__logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      {data.length > 0 ? null : (
        <div className='menu__search'>
          <Search />
        </div>
      )}
      <div className='menu__list'>
        <Link to='/favorites' className='menu__item'>
          My Favorites
        </Link>
        <Link to='/favorites' className='menu__item'>
          Login
        </Link>
        <Link to='/favorites' className='menu__item'>
          Sing Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
