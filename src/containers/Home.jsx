import React from 'react';
import { useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';

const Home = () => {
  const { data: businesses } = useSelector((state) => state.user);
  return (
    <div className='home'>
      {!businesses.length > 0 ? null : <Search />}
      <div>
        <GridItems />
      </div>
    </div>
  );
};

export default Home;
