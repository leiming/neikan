'use strict';

/* App Module */

var myApp = angular.module('neikanApp', [
      'ngRoute', 'neikanControllers' , "angularSmoothscroll"
    ]).config([
      '$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'partials/contents.html',
              controller : 'ContentsCtrl'})
            .when('/magazine/:magId/:pageId', {
              templateUrl: 'partials/magazine.html',
              controller : 'MagazineCtrl',
              activetab  : 'pageId'})
            .when('/magazine/:magId', {
              templateUrl: 'partials/magazine.html',
              controller : 'MagazineCtrl',
              activetab  : '0'})
            .when('/contents/:magId', {
              templateUrl: 'partials/contents.html',
              controller : 'ContentsCtrl'
            })
            .when('/test', {
              templateUrl: 'partials/test.html',
              controller: 'TestCtrl'
            });

/*        $routeProvider.when('/', {
              templateUrl: 'partials/gallery.html',
              controller : 'GalleryCtrl'}).when('/magazine/:magId/:pageId', {
              templateUrl: 'partials/magazine.html',
              controller : 'MagazineCtrl',
              activetab  : 'pageId'}).when('/magazine/:magId', {
              templateUrl: 'partials/magazine.html',
              controller : 'MagazineCtrl',
              activetab  : '0'}).when('/contents/:magId', {
              templateUrl: 'partials/contents.html',
              controller : 'ContentsCtrl'
            });*/

        // $locationProvider.html5Mode(true);
      }
    ]);

