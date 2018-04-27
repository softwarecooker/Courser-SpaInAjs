(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ashish-courser.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
