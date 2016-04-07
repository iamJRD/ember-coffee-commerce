import Ember from 'ember';

export default Ember.Component.extend({
  addReviewForm: false,

  actions: {
    addReviewForm() {
      this.set('addReviewForm', true);
    },

    saveReview() {
      var params = {
        username: this.get('username'),
        date: Date(),
        rating: this.get('rating'),
        body: this.get('body'),
        item: this.get('item')
      };
      this.sendAction('saveReview', params);
      this.set('addReviewForm', false);
      this.set('username', '');
      this.set('date', '');
      this.set('rating', '');
      this.set('body', '');
    }
  }
});
