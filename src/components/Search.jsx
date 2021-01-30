import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

// actions
import { search } from '../actions';
import ACTIONS from '../actions/ACTIONS.redux';

const Search = ({ setSearch }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    dispatch(search(input));
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

const mapDispatchToProps = {
  search,
};

export default connect(null, mapDispatchToProps)(Search);
