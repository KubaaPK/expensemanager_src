angular
  .module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
   
    $stateProvider
      .state('index', {
        url         : "/",
        templateUrl : "app/components/index/index.tpl.html",
        controller  : "indexController as vm"
      });




      $locationProvider.html5Mode(true);

  });