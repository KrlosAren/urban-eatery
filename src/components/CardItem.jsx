import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveItem } from '../store/user';
import Rating from './Rating';

const CardItem = ({ data }) => {
  const {
    id,
    name,
    rating,
    phone,
    photos,
    review_count,
    display_phone,
    location,
  } = data;

  return (
    <div className='card__item'>
      <div className='card__item--img'>
        <img src={photos} alt={name} onLoad={console.log('hola')} />
      </div>
      <div className='card__item--info'>
        <h2>{name}</h2>
        <div className='card__item--review'>
          <Rating value={rating} />
          <span>{review_count} reviews</span>
        </div>
        <p>
          Phone :<span>{display_phone || 'Not phone'}</span>
        </p>
        <p>
          Location : <span>{location.formatted_address}</span>
        </p>
        <Link to={`/detail/${id}`} className='card__item--button'>
          Conocer mas
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
