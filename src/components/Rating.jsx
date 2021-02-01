import React from 'react';
import { getStart, getStarts } from '../utils/getStars';

const Rating = ({ value, size }) => (
  <div>{getStarts(value).map((start) => getStart(start, size))}</div>
);

export default Rating;
