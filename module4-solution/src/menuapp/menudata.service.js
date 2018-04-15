(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var menuData = this;

        menuData.getAllCategories = function () {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log("$http unsuccessful (in service)");
            });
        };

        menuData.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
            })
            .then(function (response) {
                console.log("$http successful; response: ", response);
                return response;
            })
            .catch(function (error) {
                console.log("$http unsuccessful; error: ", error);

            });

        };



    };

})();
