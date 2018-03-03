(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.lunchItemsStr = "";
    $scope.message = "";

    $scope.checkLunch = function () {

      if ($scope.lunchItemsStr == "") {

        $scope.message = "Please enter data first";

      } else {
        // means: when string is non-empty

        var lunchItemsArr = $scope.lunchItemsStr.split(',');

        var numOfLunchItems = lunchItemsArr.length;

        if (numOfLunchItems <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      } //string empty or non-empty if..else ends

    }; //$scope.checkLunch() function ends

  }; //LunchCheckController ends

})();
