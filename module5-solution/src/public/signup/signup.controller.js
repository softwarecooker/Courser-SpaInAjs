(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'ApiPath', 'UserDataService'];
function SignUpController($http, ApiPath, UserDataService) {
    var signUpCtrl = this;

    signUpCtrl.submitForm = function () {
        $http({
            url: ApiPath + '/menu_items/' + signUpCtrl.user.favDishShortName + '.json'
        })
        .then(function (response) {
            signUpCtrl.menuItemNotFound = false;
            UserDataService.setUserData(signUpCtrl.user);
            signUpCtrl.infoSaved = true;
        })
        .catch(function (error) {
            signUpCtrl.menuItemNotFound = true;
            signUpCtrl.infoSaved = false;
        })

    };
}

})();
