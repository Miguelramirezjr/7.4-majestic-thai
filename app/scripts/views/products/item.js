var ProductItemView = Backbone.View.extend({
  className: 'product',

  template: JST['products/item'],

  initialize: function(){
    this.listenTo(appRouter.comparison, 'change:products', this.renderClasses);
  },

  events: {
    'change .js-is-compared': 'toggleCompared'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.renderClasses();
    return this;
  },

  toggleCompared: function(e) {
    appRouter.comparison.addProduct(this.model);
  },

  renderClasses: function(){
    var isCompared = appRouter.comparison.hasProduct(this.model);
    if(isCompared) {
      this.$el.addClass('product--selected');
    } else {
      this.$el.removeClass('product--selected');
    }
  }
});

export default ProductItemView;
