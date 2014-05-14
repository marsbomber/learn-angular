angular.module("app").controller('ApplicationController', function($rootScope) {
  $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
      console.log(event);
  });
});