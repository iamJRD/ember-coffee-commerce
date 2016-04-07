import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  // averageRating: Ember.computed('item.reviews[1]', function() {
  //   console.log(`${this.get('item.reviews[1]')}`);
  // }),
  //   var total = 0;
  // debugger;
  //   for(var i = 0; i < this.get('item.reviews.length'); i++) {
  //
  //     console.log(this.get('rating'));
  //     var rating = this.get('item').get('reviews')[i].get('rating');
  //     total += rating;
    // }
    // var average = total / (this.get('item.reviews').length);
    // return average;


  actions: {
    addToCart(product) {
      var num = this.get('purchaseQuantity');
      product.incrementProperty('productQuantity', num);
      for(var i = 0; i < product.get('productQuantity'); i++) {
      this.get('shoppingCart').add(product);
      }
      product.set('productQuantity', 0);
    }
  }
});
