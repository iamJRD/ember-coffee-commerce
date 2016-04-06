import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editItem(item, params) {
      this.sendAction('editItem', item, params);
    }
  }
});
