import React from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <div className={!isResults ? 'home' : 'home-with-search'}>
        {!isResults && (
          <div className='home__input'>
            <Search />
          </div>
        )}
        {isResults && <GridItems />}
        <ToastContainer />
        <ul className='errors' id='msg'>
          {isError && toast.error('😅 Something has happened !. Try again!')}
        </ul>
      </div>
    </div>
  );
};

export default Home;
