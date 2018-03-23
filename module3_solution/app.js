(function () {
   'use strict';

   angular.module('NarrowItDownApp', [])
   .controller('NarrowItDownController', NarrowItDownController)
   .service('MenuSearchService', MenuSearchService)
   .directive('foundItems', FoundItemsDirective);

   function FoundItemsDirective() {
      var ddo = {
         templateUrl: 'foundItems.html',
         //isolate scope:
         scope: {
            found: '<',
            arrEmptyMsg: '@',
            onRemove: '&'
         }
      };

      return ddo;
   };

   //The controller
   NarrowItDownController.$inject = ['MenuSearchService'];
   function NarrowItDownController(MenuSearchService) {

      var ctrl = this;
      ctrl.searchTerm = "";

      ctrl.getMatchingItems = function () {
         ctrl.errorMessage = "";
         ctrl.foundItems = [];
         ctrl.arrEmptyMsg = "";

         try {
            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm) .then(function (foundItems) {
               ctrl.foundItems = foundItems;
               ctrl.arrEmptyMsg = "Nothing found";
               console.log("ctrl.foundItems is: ", ctrl.foundItems);
            });
         } catch (error) {
            ctrl.errorMessage = error.message;
         }
      };

      ctrl.removeMenuItemFromList = function (index) {
         ctrl.searchTerm = "";
         MenuSearchService.removeMenuItemFromList(index);
      };


   };

   // The service
   MenuSearchService.$inject = ['$http'];
   function MenuSearchService($http) {

      var service = this;
      var foundItems = [];

      service.getMatchedMenuItems = function (searchTerm) {
         if (searchTerm.length !== 0) {

               return $http({
                  method: "GET",
                  url: "https://davids-restaurant.herokuapp.com/menu_items.json"
               })
               .then(function (result) {

                  var allMenuItems = result.data.menu_items;

                  foundItems = [];

                  // let's sort the data
                  for (var i = 0; i < allMenuItems.length; i++) {
                     if (allMenuItems[i].description.indexOf(searchTerm) !== -1) {

                        foundItems.push(allMenuItems[i]);

                     }
                  }

                  return foundItems;


               })
               .catch(function (error) {
                  console.log("$http call not successful.");
               });

            } else {
               throw new Error("Nothing found");
            }

      };

      service.removeMenuItemFromList = function (index) {
         foundItems.splice(index, 1);
      };

   };

})();
