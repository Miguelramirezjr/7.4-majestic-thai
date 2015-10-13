import order from 'models/order';
import MenuItemView from 'views/item-view';

var OrderView = Backbone.View.extend ({
  template: JST['order'],

  render: function(){
    // console.log('order-up');
    this.$el.html(this.template(this.model));
    return this;
}

});

export default OrderView;
