import React from 'react';
import { useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';

const Home = () => {
  const { user } = useSelector((state) => state);
  const { results } = user;

  const isResults = results.length > 0;

  return (
    <div className='container'>
      <div className={!isResults ? 'home' : 'home-with-search'}>
        {!results.length > 0 ? (
          <div className='home__input'>
            <Search />
          </div>
        ) : null}
        {results.length > 0 && <GridItems />}
      </div>
    </div>
  );
};

export default Home;
