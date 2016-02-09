import Ember from 'ember';
import numeral from 'numeral';

export function formatNumber(number, options) {
  const format = options.format || '0,0.00';
  number = number.toString();
  return numeral(number).format(format);
}

export default Ember.Helper.helper(formatNumber);
