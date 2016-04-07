import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: 'rating',
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function(){
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  }),
});
