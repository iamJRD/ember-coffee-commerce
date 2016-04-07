import DS from 'ember-data';

export default DS.Model.extend({
    brand: DS.attr(),
    name: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    purchaseQuantity: DS.attr(),
    price: DS.attr('number'),
    inStock: DS.attr(),
    reviews: DS.hasMany('review', {async: true})
});
