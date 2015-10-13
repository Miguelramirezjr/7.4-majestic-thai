import MenuCollection from 'models/menu-collection';
import MenuListView from 'views/menu-list-view';
import OrderView from 'views/order-view';

/*
(document) function allows the page to load before running.
next it appends all applications into html by calling application
which will watch all hbs (handlebars) links .
*/

$(document).ready(function(){
  $('#container').append(JST.application());

  var menuCollection = new MenuCollection();

  var menuListView = new MenuListView({collection: menuCollection});
  $('.menu-container').html(menuListView.render().el);
  menuCollection.fetch();

  var orderView = new OrderView();
  $('.order-container').html(orderView.render().el);

  // window.menuCollection = new MenuCollection();
  // menuCollection.fetch();
  // console.log(menuCollection);
});
