var qiniu = require('qiniu');
var path = require('path');

qiniu.conf.ACCESS_KEY = "8j2r9mb34BAyy7Qi-MBS_svtBggOmx5PvgNBJRid";
qiniu.conf.SECRET_KEY = "RCFMnnVdjs4UPncJYOtE_myhjRuDcE4nNJx6EbW7";
var bucket = 'neikan';
var imageFile = path.join(__dirname, "abc.png");

function uptoken(bucketname) {
  var putPolicy = new qiniu.rs.PutPolicy(bucketname);
  return putPolicy.token();
}


function uploadFile(localFile, key, uptoken) {
  var extra = new qiniu.io.PutExtra();

  qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
    if (!err) {
      // 上传成功， 处理返回值
      console.log(ret);
      console.log(ret.key, ret.hash);
      // ret.key & ret.hash
    } else {
      // 上传失败， 处理返回代码
      console.log(err);
    }
  });
}

var token = uptoken(bucket);
var key = Math.random() + 'abc.png';
uploadFile(imageFile, key, token);

/*
 function uploadFile(localFile, key, uptoken) {
 var extra = new qiniu.io.PutExtra();

 qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
 if (!err) {
 console.log("OK");
 console.log(ret);
 console.log(ret.key, ret.hash);
 } else {
 console.log(err);
 }
 // body...
 });
 }

 uploadFile(file, "upload.js", qiniu.conf.ACCESSKEY);*/
