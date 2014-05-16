var app = angular.module("app");

app.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {

  // $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .state("login", {
      url: "/login",
      templateUrl: "login/index.html",
      controller: "LoginController"
    });

  $urlRouterProvider.otherwise('/login');

}]);
