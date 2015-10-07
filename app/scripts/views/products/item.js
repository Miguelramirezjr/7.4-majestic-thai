var ProductItemView = Backbone.View.extend({

  tagName: 'li',

  template: JST['products/item'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default ProductItemView;
