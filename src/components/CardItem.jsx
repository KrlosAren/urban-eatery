import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const CardItem = ({ data }) => {
  const {
    id,
    alias,
    name,
    rating,
    photos,
    review_count,
    display_phone,
    location,
  } = data;

  return (
    <div className='card__item'>
      <div className='card__item--img'>
        <img src={photos} alt={name} />
      </div>
      <div className='card__item--info'>
        <h2>{name}</h2>
        <div className='card__item--review'>
          <Rating value={rating} />
          <span>{review_count} reviews</span>
        </div>
        <p>
          <FaPhoneAlt color='#ff5a29' />
          <span>{display_phone || 'Not phone'}</span>
        </p>
        <p>
          <FaMapMarkerAlt color='#ff5a29' />
          <span>{location.formatted_address}</span>
        </p>
        <Link
          type='button'
          to={`https://krlosaren.github.io/urban-eatery/detail/${alias}`}
          className='card__item--button'
        >
          View More...
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
