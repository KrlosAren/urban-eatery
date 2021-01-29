import React, { useState } from 'react';
import GridItems from '../components/GridItems';
import Search from '../components/Search';

const Home = () => {
  const [search, setSearch] = useState([]);

  return (
    <div className='home'>
      <Search setSearch={setSearch} />
      <div>
        <GridItems search={search} />
      </div>
    </div>
  );
};

export default Home;
