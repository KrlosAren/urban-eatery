import React, { useState } from 'react';

const Search = ({ setSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 2) {
      setSearch((q) => [input, ...q]);
      setInput('');
    } else {
      console.log('Debe ingresar una busquedad valida');
    }
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
      <div>{/* <p>{query}</p> */}</div>
    </>
  );
};

export default Search;
