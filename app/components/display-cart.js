import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed('shoppingCart.products', function() {
    var total = 0;
    for(var i = 0; i < this.get('shoppingCart.products.length'); i++) {
      var price = this.get('shoppingCart.products')[i].get('price');
      total += price;
    }
    return total;
  }),

  actions: {
    removeItemFromCart(product) {
      this.get('shoppingCart').remove(product);
      this.get('shoppingCart').notifyPropertyChange('products');
    }
  }
});




// WILL NOT WORK FOR SOME REASON. SEEMS LIKE IT SHOULD
// cartTotal: Ember.computed.sum('shoppingCart.products.@each.price'),
