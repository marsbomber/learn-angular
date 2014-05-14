angular.module("app", ["ngResource", "ui.router"])
  .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

    $rootScope.$state       = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.log = function(thing) {
      console.log(thing);
    };

    $rootScope.alert = function(thing) {
      alert(thing);
    };
  }

]);
