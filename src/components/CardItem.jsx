import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const CardItem = ({ data }) => {
  const {
    id,
    image_url: img,
    name,
    location,
    rating,
    review_count: review,
    display_phone: phone,
  } = data;

  return (
    <div className='card__item'>
      <div className='card__item--img'>
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className='card__item--review'>
        <Rating value={rating} />
        {review}
      </div>
      <div className='card__item--info'>
        <p>Phone :{phone}</p>
        <p>Location :{location.display_address}</p>
      </div>
      <div className='card__item--button'>
        <Link to={`/detail/${id}`}>Conocer mas</Link>
      </div>
    </div>
  );
};

export default CardItem;
