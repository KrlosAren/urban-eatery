import React from 'react';

const CardItem = ({ data }) => {
  const {
    image_url,
    name,
    location,
    rating,
    review_count,
    display_phone,
  } = data;

  return (
    <div className='card__item'>
      <div className='card__item--img'>
        <img src={image_url} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className='card-review'>
        <p>{rating}</p>
        <p>{review_count}</p>
      </div>
      <div className='card-info'>
        <p>Phone : {display_phone}</p>
        <p>Location : {location.display_address}</p>
      </div>
    </div>
  );
};

export default CardItem;
