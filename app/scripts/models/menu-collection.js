import Menu from 'models/menu';

var MenuCollection = Backbone.Collection.extend ({
    model: Menu,
    url: "http://tiny-lasagna-server.herokuapp.com/collections/aaronrestaurant?limit=100"
});

export default MenuCollection;
