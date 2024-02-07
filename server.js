const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 设置存储文件的位置和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// 初始化Multer
const upload = multer({
  storage: storage
}).any(); // 允许上传任意数量的文件

// Dropzone.js上传路由
app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).send('文件上传失败！');
    }
    // 文件上传成功
    res.send('文件上传成功！');
  });
});

// 启动服务器
app.listen(PORT, function () {
  console.log('服务器已启动，监听端口：' + PORT);
});
