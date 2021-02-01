import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useHistory, useParams } from 'react-router-dom';
import { fetchSearch, saveSearch, setError } from '../store/user';

const Search = () => {
  const dispatch = useDispatch();
  // const { favorites } = useSelector((state) => state.user);
  const form = useRef(null);
  const [input, setInput] = useState();
  const history = useHistory();
  const { pathname } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const query = {
      search: formData.get('search'),
      location: formData.get('location') || 'santiago',
    };
    if (query.search.trim().length > 2 && query.location.trim().length > 2) {
      dispatch(fetchSearch(query), saveSearch(query));
      // dispatch(searchs(query.search));
      localStorage.clear();
    } else {
      dispatch(setError('Debe ingresar todos los datos'));
      localStorage.clear();
    }
    if (pathname !== '/') {
      history.push('/');
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
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
          onChange={handleChange}
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
          onChange={handleChange}
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
