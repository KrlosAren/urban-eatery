import React from 'react';
import useGetData from '../hooks/useGetData';
import CardItem from './CardItem';
// import useGetData from '../hooks/useGetData';

const GridItems = ({ search }) => {
  const { data, loading, error } = useGetData(search);
  if (loading) {
    return <div>...cargando</div>;
  }

  if (error) {
    return <div>...algo sucedio</div>;
  }

  const { businesses } = data;

  return (
    <div className='layout_card'>
      {data.lenght > 0 && data.map((b) => <CardItem key={b.id} data={b} />)}
    </div>
  );
};
export default GridItems;
