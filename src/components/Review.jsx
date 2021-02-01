import React from 'react';
import Rating from './Rating';

const Review = ({ review }) => {
  const { rating, text, user } = review;

  console.log(review);
  return (
    <div className='review-card'>
      <div className='review__info--user'>
        <img src={user.image_url} alt={user.name} />
        <h3>{user.name}</h3>
        <div className='review__info--rating'>
          <p>{text}</p>
          <Rating value={rating} />
        </div>
      </div>
    </div>
  );
};

export default Review;
