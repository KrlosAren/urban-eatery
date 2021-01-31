import React from 'react';
import { useSelector } from 'react-redux';

// components
import CardItem from './CardItem';

const GridItems = () => {
  const { isError, isLoading, data } = useSelector((state) => state.user);
  const { businesses } = data;
  if (isLoading) {
    return <div>...cargando</div>;
  }

  if (isError) {
    return <div>...algo sucedio</div>;
  }
  return (
    <>
      <h1>data</h1>
      <div className='layout_card'>
        {businesses ? (
          businesses.map((b) => <CardItem key={b.id} data={b} />)
        ) : (
          <div>Comienza por buscar tu lugar favorito</div>
        )}
      </div>
    </>
  );
};

export default GridItems;
