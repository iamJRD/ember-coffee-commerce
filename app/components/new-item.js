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
      this.set('brand', '');
      this.set('name', '');
      this.set('description', '');
      this.set('image', '');
      this.set('price', '');
    }
  }
});
