'use strict';

/* App Module */


var myApp = angular.module('neikanApp', [
      'ngRoute',
      'neikanControllers'])
    .config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'gallery.html',
        controller : 'GalleryCtrl'}).
      when('/magazine/:magId', {
        templateUrl: 'magazine.html',
        controller : 'MagazineCtrl'
      });

  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
}]);
