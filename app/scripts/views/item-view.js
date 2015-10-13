import MenuCollection from 'models/menu-collection';
import order from 'models/order';

var MenuItemView = Backbone.View.extend ({
  tagName: 'li',
  template: JST['menu'],

  events: {
    'click .add-to-order': 'createOrder',
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  createOrder: function(e){
    e.preventDefault();
    order.addOrder(this.model);
    console.log("Order");

  }
});

export default MenuItemView;
