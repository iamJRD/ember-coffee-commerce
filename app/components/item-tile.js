import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  averageRating: Ember.computed('item.reviews', function(){
    var total = 0;
    for(var i = 0; i <= this.get('item.reviews.length'); i++)
    {
      var rating = this.get('item.reviews')[i].get('rating');
      console.log(rating);
      total+= rating;
    }
    var average = total / (this.get('item.reviews').length);
    return average;
  }),

  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    }
  }
});
