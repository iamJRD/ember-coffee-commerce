import moment from 'moment';
import Ember from 'ember';

export function formattedDate(params) {
  var formattedDate = moment(params.date).format('MMM Do YY');

  return formattedDate;
}

export default Ember.Helper.helper(formattedDate);
