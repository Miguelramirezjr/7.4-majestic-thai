import ProductsCollection from 'models/products-collection';

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare': 'compare'
  },

  initialize: function() {
    $('#container').html(JST['application']());
    this.products = new ProductsCollection();
  },

  index: function() {
    console.log('route:index');
    this.products.fetch().then( () => {
      $('#container').append(JST['products/index'](this.products.toJSON()));
    });
  },

  compare: function() {
    console.log('route:compare');
  }

});

export default AppRouter;
