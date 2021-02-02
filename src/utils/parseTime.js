/**
 *
 *  parteTime from parse time from values 1100 , 2200, 0900 to 11:00 am , 8:00 pm , 9:00 am ... etc
 *
 * parseDay from parse day from 0-6 to Monday-Sunday
 *
 */

const moment = require('moment');

export const parseTime = (time) => moment(time, 'HHmm').format('hh:mm a');

export const parseDay = (day) =>
  moment()
    .day(day + 1)
    .format('dddd');
