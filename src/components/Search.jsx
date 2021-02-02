import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useHistory, useParams } from 'react-router-dom';
import { fetchSearch, saveSearch, setError } from '../store/user';

const Search = () => {
  const dispatch = useDispatch();
  const form = useRef(null);
  const history = useHistory();
  const { pathname } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get from from useRef
    const formData = new FormData(form.current);

    const query = {
      search: formData.get('search'),
      location: formData.get('location') || 'santiago',
    };

    // get inputs values al clean -- the values may be have 2 lenght or more
    if (query.search.trim().length > 2 && query.location.trim().length > 2) {
      dispatch(fetchSearch(query), saveSearch(query));

      // clear storage after submit
      localStorage.clear();
    } else {
      dispatch(setError('Debe ingresar todos los datos'));
      localStorage.clear();
    }

    // push to client to / when the user search from detail page
    if (pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <form className='search' ref={form}>
      <label className='search__container' htmlFor='search'>
        <input
          className='search__input'
          type='text'
          name='search'
          id='search'
          placeholder='Search'
          required
        />
      </label>
      <label className='search__location' htmlFor='location'>
        <input
          className='search__input'
          type='text'
          name='location'
          id='location'
          placeholder='Santiago'
        />
      </label>
      <button type='submit' onClick={handleSubmit}>
        <IconContext.Provider value={{ color: 'white', size: '1em' }}>
          <FaSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default Search;
