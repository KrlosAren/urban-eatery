import React from 'react';
import { getStart, getStarts } from '../utils/getStars';

const Rating = ({ value, size }) => (
  // fuction to get start UI from values of rating in API
  <div>{getStarts(value).map((start) => getStart(start, size))}</div>
);

export default Rating;
