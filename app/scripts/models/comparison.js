var Comparison = Backbone.Model.extend({
  defaults: function(){
    return {
        products: []
    };
  },

  addProduct: function(product) {
    // this is to ensure the change event is fired
    if(this.get('products').length < 3) {
      this.set('products', this.get('products').concat([product]));
    }
  },

  removeProduct: function(product) {
    this.set('products', _.without(this.get('products'), product));
  },

  hasProduct: function(product) {
    return _.contains(this.get('products'), product);
  }
});

export default Comparison;
