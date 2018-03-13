(function () {
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.itemsToBuy = ShoppingListCheckOffService.getToBuyList();

    buyCtrl.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.boughtItems = ShoppingListCheckOffService.getAlreadyBoughtList();
  };

  function ShoppingListCheckOffService() {
    var shoppingService = this;

    var toBuyList = [
      {name: "cookies", quantity: 1},
      {name: "chips", quantity: 3},
      {name: "butter", quantity: 2},
      {name: "breads", quantity: 2},
      {name: "Pepto Bismol", quantity: 5},
      {name: "Cake", quantity: 1},
      {name: "Samosas", quantity: 6},
      {name: "Dhokla", quantity: 6},
      {name: "Kaju", quantity: 0.5},
      {name: "Anjeer", quantity: 0.5},
    ];

    var alreadyBoughtList = [];

    shoppingService.getToBuyList = function () {
      return toBuyList;
    };

    shoppingService.getAlreadyBoughtList = function () {
      return alreadyBoughtList;
    };

    shoppingService.removeItem = function (index) {
      var itemArr = toBuyList.splice(index, 1);
      alreadyBoughtList.push(itemArr[0]);
    };

  };

})();
