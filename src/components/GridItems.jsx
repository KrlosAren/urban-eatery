import React from 'react';
import { useSelector } from 'react-redux';

// components
import CardItem from './CardItem';

const GridItems = () => {
  const { results } = useSelector((state) => state.user);

  return (
    <div className='grid__container'>
      {results ? (
        results.map((b) => <CardItem key={b.id} data={b} />)
      ) : (
        <div>Comienza por buscar tu lugar favorito</div>
      )}
    </div>
  );
};

export default GridItems;
