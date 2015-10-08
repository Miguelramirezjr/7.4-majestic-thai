import Comparison from 'models/comparison';
import ProductsCollection from 'models/products-collection';
import ProductsIndexView from 'views/products/index';

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare': 'compare'
  },

  initialize: function() {
    this.products = new ProductsCollection();
    this.comparison = new Comparison();
  },

  index: function() {
    var view = new ProductsIndexView({
      collection: this.products
    });
    this.products.fetch();
    this.showView(view);
  },

  compare: function() {
    console.log('route:compare');
  },

  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#container').html(view.render().el);
    return view;
  }

});

export default AppRouter;
