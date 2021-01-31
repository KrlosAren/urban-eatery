import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const { results } = useSelector((state) => state.user);
  console.log(results);

  const item = results.find((r) => r.id === id);

  const history = useHistory();
  const {
    name,
    image_url: img,
    is_closed: isClosed,
    review_count: review,
    rating,
    coordinates,
    transactions,
    price,
    location,
    phone,
    display_phone: displayPhone,
    display_address: address,
  } = item;

  return (
    <div>
      <h2>{name}</h2>
      <div className='detail__card--img'>
        <img src={img} alt={name} />
      </div>
      <div className='detail__card--buttons'>
        <button
          type='button'
          onClick={() => {
            history.push('/');
          }}
        >
          get Back
        </button>
      </div>
    </div>
  );
};

export default Detail;
