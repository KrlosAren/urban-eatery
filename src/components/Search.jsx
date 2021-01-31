import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { fetchData } from '../store/user';

const Search = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.user);

  const [input, setInput] = useState();

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const query = formData.get('search');
    e.preventDefault();
    if (query.trim().length > 2) {
      dispatch(fetchData({ query }));
    } else {
      console.log('ingrese un termino valido');
    }
    localStorage.clear();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <label className='search__container' htmlFor='search'>
        <input
          className='search__input'
          type='text'
          name='search'
          id='search'
          placeholder='Search'
          onChange={handleChange}
        />
      </label>
      <button type='submit'>
        <IconContext.Provider value={{ color: 'white', size: '1em' }}>
          <FaSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default Search;
