import ProductItemView from 'views/products/item';
import CollectionView from 'views/collection-view';
import ProductsCreateView from 'views/products/create';

var ProductsCollectionView = CollectionView.extend({
  tagName: 'section',
  className: 'grid',
  ItemViewConstructor: ProductItemView
});

var ProductsIndexView = Backbone.View.extend({
  className: 'view',
  initialize: function() {
    this.productsCollectionView = new ProductsCollectionView({
      collection: this.collection
    });

    this.productsCreateView = new ProductsCreateView({
      collection: this.collection
    });
  },

  render: function() {
    this.$el.html(this.productsCollectionView.render().el);
    this.$el.append(this.productsCreateView.render().el);
    return this;
  },

  remove: function() {
    this.productsCollectionView.remove();
    this.productsCreateView.remove();
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});

export default ProductsIndexView;
