(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsViewController', ItemsViewController);

    ItemsViewController.$inject = ['menuitems'];
    function ItemsViewController(menuitems) {
        console.log("ItemsViewController is loaded");
        var itemsview = this;
        itemsview.menuitems = menuitems.data.menu_items;
        console.log("itemsview.menuitems: ", itemsview.menuitems);
    };

})();
