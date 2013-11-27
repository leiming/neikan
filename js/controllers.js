"use strict";

var neikanControllers = angular.module('neikanControllers', []);

neikanControllers.controller('GalleryCtrl', ['$scope', '$http', '$anchorScroll', '$location', GalleryCtrl]);
neikanControllers.controller('MagazineCtrl', ['$scope', '$routeParams', '$http' , '$timeout', MagazineCtrl]);
neikanControllers.controller('ContentsCtrl', ['$scope', '$routeParams', '$http' , ContentsCtrl]);
neikanControllers.controller('TestCtrl', ['$scope', '$routeParams', '$http' , TestCtrl]);
neikanControllers.controller('ViewCtrl', ['$scope', '$routeParams', '$http' , ViewCtrl]);
neikanControllers.controller('ViewDoubleCtrl', ['$scope', '$routeParams', '$http', '$location' , ViewDoubleCtrl]);
neikanControllers.controller('ViewPageCtrl', ['$scope', '$routeParams', '$http' , ViewPageCtrl]);

function ViewDoubleCtrl($scope, $routeParams, $http, $location) {

  // 根据imgId检索对应json文件，获取columns、article、imageCount
  console.log($routeParams.magId);
  if ($routeParams.magId) {
    $scope.magId = $routeParams.magId;
    //初始化columns和articles
    $http.get("/resource/" + $scope.magId + "/details.json")
    .success(function (data) {
          $scope.columns = data;
          $scope.imageCount = $scope.columns[0].image_count;
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
          initMagImages();
          initPage();
        })
    .error(function (data) {
          $location.path('/');
        });
  }

  // 根据mag.imageCount初始化图片数组
  function initMagImages() {
    $scope.magImages = [];
    for (var k = 0; k < $scope.imageCount+1; k++) {
      $scope.magImages.push(k);
    }
  }

  function initPage(){
    if ($routeParams.doublePageId && checkdoublePageId($routeParams.doublePageId)) {
      $scope.pageId = $routeParams.doublePageId * 2;
    } else {
      console.log('false');
      $location.path('/' + $scope.magId);
    }

    // 检测doublePageId是否有效
    function checkdoublePageId(doublePageId) {
      if (isNaN(parseInt(doublePageId))) {
        return false;
      }
      // 根据总图像数量计算出doublePageId的最大有效值pageCount
      var pageCount = Math.round($scope.imageCount / 2);
      return (doublePageId <= pageCount && doublePageId >= 0) ? doublePageId: false;
    }

  }

  $('#carousel').on('slide.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  $('#carousel').on('slid.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  //返回奇数的函数
  $scope.isEven = function (n) {
    return !(n % 2 === 1);
  };

  //返回imagePage返回拼成的双页后的页码，应与PageId含义相同
  $scope.getDoubleImagePage = function (imagePage) {
    return Math.floor(imagePage / 2);
  };

}

/**ViewCtrl********/

function ViewCtrl($scope, $routeParams, $http) {
  $scope.magImages = [];
  for (var k = 0; k < 22; k++) {
    $scope.magImages.push(k);
  }

  //初始值
  $scope.magId = $routeParams.magId || "09";
  $scope.pageId = checkPageId($routeParams.pageId) || "0";

  function checkPageId(pageId) {
    if (isNaN(pageId)) {
      return false;
    }
    return (pageId <= 21 && pageId >= 0) ? pageId : false;
  }

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

  });

  $('#carousel').on('slide.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

  $('#carousel').on('slid.bs.carousel', function () {
    $('#carousel').carousel("pause");
  })

}

function ViewPageCtrl($scope, $routeParams, $http) {

  $scope.magId = 10;
  $scope.magImages = [];
  for (var k = 0; k < 5; k++) {
    $scope.magImages.push(k);
  }

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

  });

  function initBook() {
    // console.log('initBook');
    $('#book').turn({
      display: 'double'});
  }

  Modernizr.load({
    test    : Modernizr.csstransforms,
    yep     : ['/lib/turnjs/turn.min.js'],
    nope    : ['/lib/turnjs/turn.html4.min.js'],
    complete: initBook
  });

}

/**GalleryCtrl********/

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
