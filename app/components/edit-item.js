import Ember from 'ember';

export default Ember.Component.extend({
  editItemForm: false,

  actions: {
    editItemForm() {
      this.set('editItemForm', true);
    },

    editItem(item){
      var params = {
        name: this.get('name'),
        brand: this.get('brand'),
        description: this.get('description'),
        image: this.get('image'),
        price: this.get('price'),
      };
      this.sendAction('editItem', item, params);
      this.set('editItemForm', false);
      this.set('name', '');
      this.set('brand', '');
      this.set('description', '');
      this.set('image', '');
      this.set('price', '');
    }
  }
});
