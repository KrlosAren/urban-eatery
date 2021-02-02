import React from 'react';
import Rating from './Rating';

const Review = ({ review }) => {
  const { rating, text, user } = review;

  return (
    <div className='review__card'>
      <div className='review__card--user'>
        <img src={user.image_url} alt={user.name} />
        <div className='user-info'>
          <h3>{user.name}</h3>
          <Rating value={rating} size={15} />
        </div>
      </div>
      <div className='review__card--msg'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
