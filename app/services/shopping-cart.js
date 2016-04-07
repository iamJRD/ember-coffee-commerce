import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').pushObject(product);
  },

  remove(product) {
    var itemIndex = this.get('products').indexOf(product);
    this.set('products', this.get('products').removeAt(itemIndex));
  }
});
