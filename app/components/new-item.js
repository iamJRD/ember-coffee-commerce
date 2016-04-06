import Ember from 'ember';

export default Ember.Component.extend({
  purchaseQuantity: 0,
  inStock: 0,
  
  actions: {
    saveItem() {
      var params = {
        brand: this.get('brand'),
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        purchaseQuantity: this.get('purchaseQuantity'),
        price: this.get('price'),
        inStock: this.get('inStock'),
      };
      this.sendAction('saveItem', params);
    }
  }
});
