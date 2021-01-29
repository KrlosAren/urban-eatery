import React from 'react';
import { getStart, getStarts } from '../utils/getStars';

const Rating = ({ value }) => (
  <div>{getStarts(value).map((start) => getStart(start))}</div>
);

export default Rating;
