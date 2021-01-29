import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Detail;
