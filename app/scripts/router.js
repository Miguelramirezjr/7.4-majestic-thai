var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare': 'compare'
  },

  initialize: function() {
    $('#container').html(JST['application']());
  },

  index: function() {
    console.log('route:index');
  },

  compare: function() {
    console.log('route:compare');
  }

});

export default AppRouter;
