import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveItem } from '../store/user';
import Rating from './Rating';

const CardItem = ({ data }) => {
  const { id, name, rating, phone, photos, display_phone } = data;

  const dispatch = useDispatch();

  return (
    <div className='card__item'>
      <div className='card__item--img'>
        <img src={photos} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className='card__item--review'>
        <Rating value={rating} />
        {/* {review} */}
      </div>
      <div className='card__item--info'>
        <p>Phone :{display_phone}</p>
        {/* <p>Location :{location.display_address}</p> */}
      </div>
      <div className='card__item--button'>
        <Link to={`/detail/${id}`}>Conocer mas</Link>
      </div>
    </div>
  );
};

export default CardItem;
