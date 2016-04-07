import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
