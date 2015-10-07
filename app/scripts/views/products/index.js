import ProductItemView from 'views/products/item';

var ProductsIndexView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addChild);
    this.listenTo(this.collection, 'remove', this.removeChild);
    this.listenTo(this.collection, 'sort', this.sortChildren);
  },

  addChild: function(post, collection) {
    var view = new ProductItemView({model: post});
    this.$el.append(view.render().el);
  }
});

export default ProductsIndexView;
