import React from 'react';
import { connect, useSelector } from 'react-redux';
// import useGetData from '../hooks/useGetData';
import CardItem from './CardItem';
import { useGetData } from '../hooks/useGetData';

const GridItems = () => {
  const search = useSelector((state) => state.search);
  const { data, loading, error } = useGetData(search);

  console.log(data);
  if (loading) {
    return <div>...cargando</div>;
  }

  if (error) {
    return <div>...algo sucedio</div>;
  }

  // const { businesses } = data;
  return (
    <div className='layout_card'>
      {data.lenght > 0 ? (
        data.map((b) => <CardItem key={b.id} data={b} />)
      ) : (
        <div>Comienza por buscar tu lugar favorito</div>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   search: state.search,
// });

// export default connect(mapStateToProps, null)(GridItems);
export default GridItems;
