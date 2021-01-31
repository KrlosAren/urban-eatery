import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='search'>
            <input
              type='search'
              name='search'
              id='search'
              onChange={handleChange}
            />
            Search
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div>
        <p>{input}</p>
      </div>
    </>
  );
};

export default Search;
