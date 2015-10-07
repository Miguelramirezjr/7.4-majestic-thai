import Product from 'models/product';

var ProductsCollection = Backbone.Collection.extend({
  model: Product,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/products",
  comparator: 'price'
});

export default ProductsCollection;
