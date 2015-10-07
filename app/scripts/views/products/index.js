var ProductsIndexView = Backbone.View.extend({
  template: JST['products/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync reset', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
});

export default ProductsIndexView;
