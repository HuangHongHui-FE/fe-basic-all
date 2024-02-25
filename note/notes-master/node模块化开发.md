# node模块化开发

### 1.导出模块（exports）

```javascript
var a = 'xiaoke';
// 1.导出模块a
// exports.a = a;
// 2.另一种方法 如果这个修改了 就以这个为标准 权重最高
module.exports.a = a
```

### 2.引用模块（require）

```js
// 引用a模块
var a = require("./01-a")
console.log(a);
```

## 3.系统模块

##### 1.1.文件操作 （fs）读取内容

```javascript
// 引用模块
var fs  = require(fs)
// 读取文件内容  callback 是回调函数
//fs.readFile('文件夹路径'['文件编码'],callback)
fs.readFile('文件夹路径', function (err, dos) {
    // 如果文件读取发生错误参数err的值为错误对象，否则err的值为null
    // dos为文件内容
    if (err == null) {
        console.log(dos);
    }
})
```

##### 1.2.文件操作 （fs）写入内容

```javascript
var fs  = require(fs)
fs.writeFile('路径', '数据', function (err, dos) {
    if (err != null) {
        console.log(err);
        return
    }
    console.log('写入成功');
})
```

##### 2.系统模块path 路径操作 （路径拼接）

```javascript
var path = require("path")
// path.join('路径', '路径', '路径'...)
// 路径拼接 __dirname 当前目录的绝对路径
var finialPath = path.join(__dirname, 'index', 'uploads', 'avaatar')
// 输出拼接
console.log(finialPath);
```

## 3.第三方模块

##### 2.获取第三方模块

npmjs.com  : 第三方模块的存储和分发仓库

npm (node package manager) : node 的第三方模块管理工具

```nginx
下载：npm install 模块名称
```

```nginx
删除：npm uninstall package 模块名称
```

##### 4.第三方模块 nrm

> nrm(npm registry manager) : npm 下载地址切换
>
> npm 默认的下载地址在国外 ，国内下载速度慢
>
> ###### 使用步骤
>
> 1. 使用npm install nrm -g  下载
> 2. 查询可用的下载地址列表 nrm ls
> 3. 切换npm下载地址 nrm use 下载地址名称

##### 5.第三方模块 router

> 功能：实现路由
>
> 使用步骤
>
> 1. 获取路由对象
> 2. 调用路由对象提供的方法创建路由
> 3. 启用路由，使路由生效

## 创建服务器

```javascript
// 引入系统服务器模块
var http = require("http")
// 使用http的方法createServer() 创建服务器 使用一个变量去接收
var app = http.createServer()
// 添加事件
app.on('request', (req, res) => {
    res.end('ok')
})
// 监控80端口
app.listen(80)
```

```javascript
// 第三方处理路由模块
var getRouter = require('router')
// 返回路由对象 
var router = getRouter();
router.get('/add', (req, res) => {
    res.end('add')
})
router.get('/index', (req, res) => {
    res.end('index')
})
// 添加事件
app.on('request', (req, res) => {
    router(req, res, () => { })  //  这个是回调函数是必填的 否则出错 如果不需要
    // 可以传一个空函数
})

```

