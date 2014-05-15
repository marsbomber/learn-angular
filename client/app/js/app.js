var app = angular.module("app", ["ngResource", "ui.router", "ngSanitize"]);


app.run(['$rootScope', '$state', '$stateParams', '$location', 'AuthenticationService', 'FlashService', function($rootScope, $state, $stateParams, $location, AuthenticationService, FlashService) {
  $rootScope.$state       = $state;
  $rootScope.$stateParams = $stateParams;

  var routesThatRequireAuth = ['/home'];

  $rootScope.$on('$stateChangeStart', function(event, next, current) {
    if(_(routesThatRequireAuth).contains($location.path()) && !AuthenticationService.isLoggedIn()) {
      $location.path('/login');
      FlashService.show("Please log in to continue.");
    }
  });

  }
]);

app.config(function($httpProvider) {

  var logsOutUserOn401 = function($location, $q, SessionService, FlashService) {
    var success = function(response) {
      return response;
    };

    var error = function(response) {
      if(response.status === 401) {
        SessionService.unset('authenticated');
        $location.path('/login');
        FlashService.show(response.data.flash);
      }
      return $q.reject(response);
    };

    return function(promise) {
      return promise.then(success, error);
    };
  };

  $httpProvider.responseInterceptors.push(logsOutUserOn401);

});