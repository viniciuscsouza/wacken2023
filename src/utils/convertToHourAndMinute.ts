const moment = require('moment-timezone');

export default function convertToHourAndMinute(timestampString: string) {
    const timestamp = parseInt(timestampString)
    const data = moment.tz(timestamp * 1000, 'Europe/Berlin')
    const hour = data.format('HH')
    const minute = data.format('mm')
  
    return `${hour}:${minute}`;
  }