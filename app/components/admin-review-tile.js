import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editReview(review, params) {
      this.sendAction('editReview', review, params);
    }
  }
});
