const moment = require('moment');

export const parseTime = (time) => moment(time, 'HHmm').format('hh:mm a');

export const parseDay = (day) =>
  moment()
    .day(day + 1)
    .format('dddd');
