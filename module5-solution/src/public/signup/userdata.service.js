(function () {

"use strict";

angular.module('public')
.service('UserDataService', UserDataService);

function UserDataService() {
    var service = this;

    service.user = {
        firstName: "",
        lastname: "",
        email: "",
        phone: "",
        favDishShortName: ""
    };

    service.userSignedUp = false;

    service.setUserData = function (user) {
        service.user.firstName = user.firstName;
        service.user.lastname = user.lastname;
        service.user.email = user.email;
        service.user.phone = user.phone;
        service.user.favDishShortName = user.favDishShortName;
        service.userSignedUp = true;
    };

}

})();
