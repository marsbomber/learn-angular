var app = angular.module("app");

app.factory("AuthenticationService",
            ["$http", "$sanitize", "$timeout", "SessionService", "FlashService",
             function($http, $sanitize, $timeout, SessionService, FlashService) {

  var cacheSession   = function() {
    SessionService.set('authenticated', true);
  };

  var uncacheSession = function() {
    SessionService.unset('authenticated');
  };

  var loginError     = function(response) {
    FlashService.show(response.flash);
  };

  return {
    login: function(credentials) {
      var login = $http.post("/login", credentials);
      login.success(cacheSession);
      login.success(FlashService.clear);
      login.error(loginError);
      return login;
    },
    logout: function() {
      var logout = $http.post("/logout");

      logout.success(uncacheSession);
      return logout;
    },
    isLoggedIn: function() {
      return SessionService.get('authenticated');
    }
  };
}]);