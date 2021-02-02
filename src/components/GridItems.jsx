import React from 'react';

// components
import CardItem from './CardItem';

const GridItems = ({ results }) => (
  <div className='grid__container'>
    {results.length > 0 && results.map((b) => <CardItem key={b.id} data={b} />)}
  </div>
);

export default GridItems;
