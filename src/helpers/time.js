// @flow
/**
 * 
 * 
 * @returns {String} AM or PM
 */

import moment from 'moment';

function getTimeOfDay(): string {
  const time = moment().format('H');
  return time;
}

export { getTimeOfDay };
