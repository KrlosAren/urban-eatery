import React, { useState } from 'react';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='home'>
      <Search setSearch={setSearch} />
      <div>
        <GridItems search={search} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   businesses: state.businesses,
// });

export default Home;
// export default connect(props, actions)(Home);
// export default connect(mapStateToProps, null)(Home);
