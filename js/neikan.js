'use strict';

/* App Module */

var myApp = angular.module('neikanApp', [
      'ngRoute', 'neikanControllers' , "angularSmoothscroll"
    ]).config([
      '$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/page', {
              templateUrl: 'partials/viewpage.html',
              controller : 'ViewPageCtrl'})
            .when('/', {
              templateUrl: 'partials/view.html',
              controller : 'ViewCtrl'})
            .when('/:pageId', {
              templateUrl: 'partials/view.html',
              controller : 'ViewCtrl'})
            .otherwise({
              redirectTo: "/"
            });
      }
    ]);

