(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesViewController', CategoriesViewController);

    CategoriesViewController.$inject = ['categories'];
    function CategoriesViewController(categories) {
        console.log("CategoriesViewController is loaded.");
        var catCtrl = this;
        catCtrl.categories = categories.data;
        console.log("Categories in controller: ", catCtrl.categories);
    };

})();
