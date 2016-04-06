import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed('product.price', function() {
    return this.get('product.price');
  }),

});
