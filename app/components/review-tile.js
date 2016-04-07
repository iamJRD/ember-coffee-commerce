import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: 'rating',
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function(){
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  }),
  // averageRating: function() {
  //     return this.get(for(var i = 0; i < this.get('review.length'); i++) {
  //       console.log(review.get('review.length'));
  //       // console.log(this.get('rating'));
  //       // var rating = this.get('item').get('reviews')[i].get('rating');
  //       // total += rating;
  //     }

  // }),

});
