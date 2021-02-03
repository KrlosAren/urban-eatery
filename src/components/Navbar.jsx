import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';

// assets
import Logo from '../styles/assets/eating.svg';

const Navbar = () => {
  // get results from redux
  const { results } = useSelector((state) => state.user);
  const isResults = results.length > 0;

  // inline styles
  const style = {
    gridColumn: isResults && '1/2',
  };

  return (
    <nav className='menu container'>
      <div className='menu__logo' style={style}>
        <Link to='https://krlosaren.github.io/urban-eatery/'>
          <Logo />
        </Link>
      </div>
      {isResults && (
        <div className='menu__search'>
          <Search />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
