import React from 'react';
import { useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';
import Spinner from '../components/Spinner';

const Home = () => {
  const { user } = useSelector((state) => state);
  const { results, isError, isLoading } = user;
  const isResults = results.length > 0;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      {!isResults && (
        <h3 className='home-intro'>
          Lets Start!. Find the business want in any City
        </h3>
      )}
      <div className={!isResults ? 'home' : 'home-with-search'}>
        {!isResults && (
          <div className='home__input'>
            <Search />
          </div>
        )}
        {isResults && <GridItems results={results} />}
        {isResults && (
          <ul className='errors' id='msg'>
            {isError && <li>😅 Something has happened !. Try again!</li>}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
