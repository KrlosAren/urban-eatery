import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';
import Spinner from '../components/Spinner';

const Home = () => {
  const { user } = useSelector((state) => state);
  const { results, error, isError, isLoading } = user;
  const isResults = results.length > 0;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <div className={!isResults ? 'home' : 'home-with-search'}>
        {!isResults && (
          <div className='home__input'>
            <Search />
          </div>
        )}
        {isResults && <GridItems />}
        {/* {!isResults && <div>No hay resultados</div>} */}
        <div className='errors'>{error && <span>{error}</span>}</div>
      </div>
    </div>
  );
};

export default Home;
