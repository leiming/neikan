"use strict";

var neikanControllers = angular.module('neikanControllers', []);

neikanControllers.controller('GalleryCtrl', ['$scope', GalleryCtrl]);
neikanControllers.controller('MagazineCtrl', ['$scope', '$routeParams', "$http" , MagazineCtrl]);

function GalleryCtrl($scope) {
  $scope.magazines = [
    {id: "01", name: '第一期', link: "01", thumbnail: ""},
    {id: "02", name: '第二期', link: "02", thumbnail: ""},
    {id: "03", name: '第三期', link: "03", thumbnail: ""},
    {id: "04", name: '第四期', link: "04", thumbnail: ""},
    {id: "05", name: '第五期', link: "05", thumbnail: ""},
    {id: "06", name: '第六期', link: "06", thumbnail: ""}
  ];

};

function MagazineCtrl($scope, $routeParams, $http) {
  $scope.magId = $routeParams.magId;
/*  $http.get('/resource/details.json').success(function (data) {
    $scope.details = data;

  });*/

  $scope.magLength = 7;

  $scope.magImages = [];

  for (var i = 0; i < $scope.magLength -1; i++) {
    $scope.magImages.push(i+1);
  }

}

