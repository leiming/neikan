"use strict";

var neikanApp = angular.module('neikanApp', ['ngRoute', 'neikanControllers']);

neikanApp.config(['$routeProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'gallery.html',
    controller : 'GalleryCtrl'}).otherwise({
        redirectTo: '/'
      });

  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
}]);

