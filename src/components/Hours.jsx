import React from 'react';
import { parseDay, parseTime } from '../utils/parseTime';

const Hours = ({ hour }) => (
  <div className='hour'>
    <p>
      <span>{parseDay(hour.day)} : </span>
      <span>
        {parseTime(hour.start)} - {parseTime(hour.end)}
      </span>
    </p>
  </div>
);

export default Hours;
