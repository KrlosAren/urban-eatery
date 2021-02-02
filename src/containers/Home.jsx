import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import { emptyErrors } from '../store/user';

const Home = () => {
  const dispatch = useDispatch();

  // state
  const { user } = useSelector((state) => state);

  // user
  const { results, isError, isLoading } = user;

  // app

  const isResults = results.length > 0;

  // clean errors function
  const cleanErrors = () => {
    const msg = document.getElementById('msg');
    msg.style.display = 'none';
    // dispatch(emptyErrors([]));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!isResults && (
        <h3 className='home-intro'>
          Let&#39;s Start! 😎.
          <span> Search for your favorite food 😋</span>
        </h3>
      )}
      <div className='container'>
        <div className={!isResults ? 'home' : 'home-with-search'}>
          {!isResults && (
            <div className='home__input'>
              <Search />
            </div>
          )}
          {isResults && <GridItems results={results} />}
          {isError && (
            <div className='errors' id='msg'>
              <p>😅 Something was happen !. Try again!</p>
              <span onClick={cleanErrors} role='button'>
                <IoMdClose size={25} />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
