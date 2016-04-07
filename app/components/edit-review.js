import Ember from 'ember';

export default Ember.Component.extend({
  editReviewForm: false,

  actions: {
    editReviewForm() {
      this.set('editReviewForm', true);
    },

    editReview(review) {
      var params = {
        username: this.get('username'),
        body: this.get('body'),
        rating: this.get('rating')
      };
      this.sendAction('editReview', review, params);
      this.set('editReviewForm', false);
      this.set('username', '');
      this.set('body', '');
      this.set('rating', '');
    }
  }
});
