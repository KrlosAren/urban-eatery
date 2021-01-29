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
    // console.log(error);
    return <div>...algo sucedio</div>;
  }

  const { businesses } = data;

  return (
    <div className='layout_card'>
      {businesses.map((b) => (
        <CardItem key={b.id} data={b} />
      ))}
    </div>
  );
};
export default GridItems;
