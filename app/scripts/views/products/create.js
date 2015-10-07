var CreateProductView = Backbone.View.extend({
  template: JST['products/create'],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default CreateProductView;
