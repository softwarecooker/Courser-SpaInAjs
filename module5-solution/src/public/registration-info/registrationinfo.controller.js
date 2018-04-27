(function () {

"use strict";

angular.module('public')
.controller('RegistrationInfoController', RegistrationInfoController);

RegistrationInfoController.$inject = ['UserDataService', '$http', 'ApiPath'];
function RegistrationInfoController(UserDataService, $http, ApiPath) {
    var regInfoCtrl = this;
    regInfoCtrl.basePath = ApiPath;

    if (UserDataService.userSignedUp) {
        $http({
            url: regInfoCtrl.basePath + '/menu_items/' + UserDataService.user.favDishShortName + '.json'
        })
        .then(function (response) {
            console.log("$http success, response: ", response);
            regInfoCtrl.firstName = UserDataService.user.firstName;
            regInfoCtrl.lastname = UserDataService.user.lastname;
            regInfoCtrl.email = UserDataService.user.email;
            regInfoCtrl.phone = UserDataService.user.phone;
            regInfoCtrl.favDishShortName = UserDataService.user.favDishShortName;
            regInfoCtrl.dishName = response.data.name;
            regInfoCtrl.dishDescription = response.data.description;
        })
        .catch(function (error) {
            console.log("$http failure");

        });
    } else {
            regInfoCtrl.userNotRegistered = true;
    }


}

})();
