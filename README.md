# fileup

安装于服务端,用户可通过网页上传文件到服务端且无需认证.
适用场景:匿名收集文件

### 配置教程:

首先，确保您已经安装了Node.js和Express，并且在您的项目中已经安装了express和multer（用于处理文件上传的中间件）,以下是具体做法.

安装Express和Multer：
`npm install express multer`

运行前请检查你的文件是否完整,如下
`project_folder/`
`│`
`├── public/`
`│   └── index.html`
`│`
`├── uploads/ (此文件夹用于存储上传的文件)`
`│`
`├── node_modules/ (Node.js依赖的模块文件夹)`
`│`
`├── package.json`
`│`
`└── server.js (或者您的服务器端代码文件)`

### 运行:

`node server.js`
