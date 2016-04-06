import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('item', params.item_id);
  },

  sortBy: 'rating',
  sortedReviews: Ember.computed.sort('model.reviews', 'sortDefinition'),
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function(){
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  }),

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var item = params.item;

      item.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return item.save();
      });
      this.transitionTo('item');
    }
  }
});
