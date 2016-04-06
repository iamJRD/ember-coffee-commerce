import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      console.log(product);
      this.get('shoppingCart').add(product);
    }
  }
});
