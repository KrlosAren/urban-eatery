import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const { data: businesses } = useSelector((state) => state.user);
  const items = Object.values(businesses);

  const item = items[0].find((i) => i.id === id);
  // const detail = businesses.find((b) => b.id === id);

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
