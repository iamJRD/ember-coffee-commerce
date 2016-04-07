import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    },

    editItem(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('admin');
    },

    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('admin');
    },

    editReview(review, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          review.set(key, params[key]);
        }
      });
      review.save();
      this.transitionTo('admin');
    },

    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
