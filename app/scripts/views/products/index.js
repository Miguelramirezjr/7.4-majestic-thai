import ProductItemView from 'views/products/item';
import CollectionView from 'views/collection-view';

var ProductsIndexView = CollectionView.extend({
  tagName: 'ul',
  ItemViewConstructor: ProductItemView,
});

export default ProductsIndexView;
