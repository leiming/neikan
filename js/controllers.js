"use strict";

var neikanControllers = angular.module('neikanControllers', []);

neikanControllers.controller('GalleryCtrl', ['$scope', '$http', '$anchorScroll', '$location', GalleryCtrl]);
neikanControllers.controller('MagazineCtrl', ['$scope', '$routeParams', '$http' , '$timeout', MagazineCtrl]);
neikanControllers.controller('ContentsCtrl', ['$scope', '$routeParams', '$http' , ContentsCtrl]);
neikanControllers.controller('TestCtrl', ['$scope', '$routeParams', '$http' , TestCtrl]);
neikanControllers.controller('ViewCtrl', ['$scope', '$routeParams', '$http' , ViewCtrl]);

/*******ViewCtrl********/

function ViewCtrl($scope, $routeParams, $http) {

  //初始值
  $scope.magId = $routeParams.magId || "09";
  console.log($scope.magId);
  // 获得不带专栏的文章标题列表，存储于$scope.articles中

  $http.get("/resource/" + $scope.magId + "/details.json").success(function (data) {
    $scope.columns = data;

    // 获得不带专栏的文章标题列表，存储于$scope.articles中
    var articles = [];
    for (var i in $scope.columns) {
      var column = $scope.columns[i];
      // console.log(column);
      for (var j in column.article) {
        articles.push(column.article[j]);
      }
    }
    $scope.articles = articles;

    // console.log($scope.articles);
    // console.log("length" + $scope.articles.length);

    // 图片数目应该单独存放，不应该通过计算得出，本期为21

    $scope.magImages = [];
    for (var k = 0; k < 19; k++) {
      $scope.magImages.push(k);
    }
  });

  $('#carousel').on('slide.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  $('#carousel').on('slid.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

}

/*******GalleryCtrl********/

function GalleryCtrl($scope, $http, $anchorScroll, $locationProvider) {
  $http.get("/resource/magazines.json").success(function (data) {
    $scope.magazines = data;
  });

  $scope.scrollTo = function (id) {
    $locationProvider.hash(id);
    $anchorScroll();
  }
}

/*******MagazineCtrl********/

function MagazineCtrl($scope, $routeParams, $http, $timeout) {

  //初始值
  $scope.magId = $routeParams.magId || "09";
  console.log($scope.magId);
  $scope.pageId = $routeParams.pageId;
  $scope.magImages = [];

  $http.get("/resource/magazines.json").success(function (data) {
    $scope.magazines = data;
    // console.log($scope.magazines);
    // alert(data);
    $scope.mag = $scope.magazines[magId];
    console.log("mag:" + $scope.mag);
  });

  $http.get("/resource/" + $routeParams.magId + "/details.json").success(function (data) {
    $scope.columns = data;

    // 获得不带专栏的文章标题列表，存储于$scope.articles中
    var articles = [];
    for (var i in $scope.columns) {
      var column = $scope.columns[i];
      // console.log(column);
      for (var j in column.article) {
        articles.push(column.article[j]);
      }
    }
    $scope.articles = articles;

    // console.log($scope.articles);
    // console.log("length" + $scope.articles.length);

    // 图片数目应该单独存放，不应该通过计算得出，本期为21

    for (var k = 0; k < 21; k++) {
      $scope.magImages.push(k);
    }
    // $scope.magLength = $scope.articles.length;
    // console.log("ima2:" + $scope.magImages);
  });

  /*  $scope.magLength = 7;

   for (var i = 0; i < 6; i++) {
   $scope.magImages.push(i);
   console.log("magImages" + $scope.magImages);
   }*/

  // 期刊图片不滚动处理

  $('#carousel').on('slide.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  $('#carousel').on('slid.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  // 调试信息
  $scope.changePage = function (index) {
    $scope.magImages = createArray(index);
  }

}

// 构造默认值为15的数字数组
/*function createArray(len) {
 console.log(len);
 var length = len || 15;
 console.log(length);
 var arr = [];
 for (var i = 0; i < length; i++) {
 arr.push(i);
 }
 return arr;
 }*/

/*******ContentsCtrl********/

function ContentsCtrl($scope, $routeParams, $http) {
  $scope.magId = $routeParams.magId || "09";
  // console.log("magid:" + $scope.magId);
  $http.get("/resource/magazines.json").success(function (data) {
    // $scope.contentsList = data;;
    // $scope.contentsLength = data.length;
  });

  $http.get("/resource/" + $scope.magId + "/details.json").success(function (data) {
    $scope.columns = data;
  });

}

/*******TestCtrl********/

function TestCtrl($scope, $routeParams, $http) {
  $scope.test = "hello";
  $scope.array01 = [1, 2, 3];
  $scope.array02 = [1, 2, 3, 4, 5];
  $scope.clickbtn = function () {
    console.log("btn");
    $scope.array01 = $scope.array02;
  }

}
