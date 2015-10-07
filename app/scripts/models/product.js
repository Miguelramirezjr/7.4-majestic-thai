var Product = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: "",
    // price in cents
    price: 0,
    image: "default.png"
  }

});

export default Product;
