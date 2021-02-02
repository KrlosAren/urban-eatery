import React from 'react';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';

/**
 *
 * @param [100,100,50,0,0]
 * @returns get star from every value in array
 *
 */

export function getStart(value, size = 25) {
  switch (value) {
    case 0:
      return <MdStarBorder size={size} style={{ fill: '#696969' }} />;

    case 50:
      return <MdStarHalf size={size} style={{ fill: '#ffe234' }} />;

    case 100:
      return <MdStar size={size} style={{ fill: '#ffe234' }} />;

    default:
      return value;
  }
}

/**
 *
 * @param  value rating value {4.1 , 2.5 ... etc}
 * @returns array of values [100,100,50,0,0]
 * this values is a number of star from rating value
 */
export function getStarts(value) {
  switch (parseFloat(value)) {
    case 0.0:
      return [0, 0, 0, 0, 0];
    case 0.5:
      return [50, 0, 0, 0, 0];
    case 1.0:
      return [100, 0, 0, 0, 0];
    case 1.5:
      return [100, 50, 0, 0, 0];
    case 2.0:
      return [100, 100, 0, 0, 0];
    case 2.5:
      return [100, 100, 50, 0, 0];
    case 3.0:
      return [100, 100, 100, 0, 0];
    case 3.5:
      return [100, 100, 100, 50, 0];
    case 4.0:
      return [100, 100, 100, 100, 0];
    case 4.5:
      return [100, 100, 100, 100, 50];
    case 5.0:
      return [100, 100, 100, 100, 100];

    default:
      return value;
  }
}
