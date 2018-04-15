(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/categories.template.html',
            controller: 'CategoriesViewController as catCtrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{category}',
            templateUrl: 'src/menuapp/templates/items.template.html',
            controller: 'ItemsViewController as itemsview',
            resolve: {
                menuitems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    console.log("$stateParams: ", $stateParams);
                    return MenuDataService.getItemsForCategory($stateParams.category);
                }]
            }
        });

    };

})();
