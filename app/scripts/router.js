import ProductsCollection from 'models/products-collection';
import ProductsIndexView from 'views/products/index';

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
