var CreateProductView = Backbone.View.extend({
  template: JST['products/create'],

  events: {
    'submit form': 'createProduct'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  createProduct: function(e) {
    e.preventDefault();
    var title = this.$('input[name=title]').val();
    var price = Number(this.$('input[name=price]').val());
    this.collection.create({
      title: title,
      price: price
    });

    this.$('input').not('[type=submit]').val('');
  }

});

export default CreateProductView;
