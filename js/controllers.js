"use strict";

var neikanControllers = angular.module('neikanControllers', []);

neikanControllers.controller('GalleryCtrl', ['$scope', GalleryCtrl]);
neikanControllers.controller('MagazineCtrl', ['$scope', '$routeParams', "$http" , '$timeout', MagazineCtrl]);
neikanControllers.controller('ContentsCtrl', ['$scope', '$routeParams', "$http" , ContentsCtrl]);

function GalleryCtrl($scope) {
  $scope.magazines = [
    {id: "01", name: '第一期', link: "01", thumbnail: "", cover: "cover01"},
    {id: "02", name: '第二期', link: "02", thumbnail: "", cover: "cover01"},
    {id: "03", name: '第三期', link: "03", thumbnail: "", cover: "cover01"},
    {id: "04", name: '第四期', link: "04", thumbnail: "", cover: "cover01"},
    {id: "05", name: '第五期', link: "05", thumbnail: "", cover: "cover01"},
    {id: "06", name: '第六期', link: "06", thumbnail: "", cover: "cover01"}
  ];

}

function MagazineCtrl($scope, $routeParams, $http, $timeout) {
  $scope.magId = $routeParams.magId;
  $scope.pageId = $routeParams.pageId;
  /*  $http.get('/resource/details.json').success(function (data) {
   $scope.details = data;

   });*/

  // console.log($routeParams);
  $scope.magLength = 7;
  $scope.magImages = [];

  for (var i = 0; i < $scope.magLength; i++) {
    $scope.magImages.push(i);
  }

  $scope.carousel = function (idx) {
    console.log(idx);
    $('#carousel').carousel(parseInt(idx));

  }

/*  $timeout(function () {
    $scope.carousel($routeParams.pageId);
  }, 1000);*/

  $('#carousel').on('slide.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  $('#carousel').on('slid.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

}

function ContentsCtrl($scope, $routeParams, $http) {
  $scope.magId = $routeParams.magId
  $http.get("/resource/" + $routeParams.magId + "/details.json").success(function (data) {
    $scope.contentsList = data;
    $scope.contentsLength = data.length;
  });

  $http.get("/resource/" + $routeParams.magId + "/details_two.json").success(function (data) {
    $scope.two = data;
  });
}
