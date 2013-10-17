"use strict";

var neikanControllers = angular.module('neikanControllers', []);

neikanControllers.controller('GalleryCtrl', ['$scope',
  function GalleryCtrl($scope) {
    $scope.magazines = [
      {id: "cover01", name: '第一期', link: "01", thumbnail: ""},
      {id: "cover02", name: '第二期', link: "02", thumbnail: ""},
      {id: "cover03", name: '第三期', link: "03", thumbnail: ""},
      {id: "cover04", name: '第四期', link: "04", thumbnail: ""},
      {id: "cover05", name: '第五期', link: "05", thumbnail: ""},
      {id: "cover06", name: '第六期', link: "06", thumbnail: ""}
    ];

    $scope.clickImg = function () {
      console.log("asdf");
    };

  }]);

