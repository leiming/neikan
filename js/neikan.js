'use strict';

/* App Module */

var myApp = angular.module('neikanApp', [
      'ngRoute', 'neikanControllers' , "angularSmoothscroll"
    ]).config([
      '$routeProvider', function ($routeProvider) {

        $routeProvider
/*            .when('/page', {
              templateUrl: 'partials/viewpage.html',
              controller : 'ViewPageCtrl'})*/
            .when('/:magId', {
              templateUrl: 'partials/view-double.html',
              controller : 'ViewDoubleCtrl'})
            .when('/:magId/:doublePageId', {
              templateUrl: 'partials/view-double.html',
              controller : 'ViewDoubleCtrl'})
            .when('/', {
              templateUrl: 'partials/view.html',
              controller : 'ViewCtrl'})
       /*     .when('/:pageId', {
              templateUrl: 'partials/view.html',
              controller : 'ViewCtrl'})*/
            .when('/error', {
              templateUrl: '404.html'})
            .otherwise({
              redirectTo: "/error"
            });
      }
    ]);

