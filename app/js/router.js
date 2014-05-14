angular.module("app")
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // $locationProvider.html5Mode(true);

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "home.html",
        controller: "HomeController",
        authenticate: true
      })
      .state("login", {
        url: "/login",
        templateUrl: "login.html",
        controller: "LoginController",
        authenticate: false
      });


    $urlRouterProvider.otherwise('/login');

  }]);
