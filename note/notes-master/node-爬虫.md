# node.js爬虫

## 发送http请求

```javascript
// 引入http模块 如果是 https 就引入 https 模块
const http = require('http')
// 创建一个请求 ( 未发送 )
let req = http.request('http://www.itheima.com/teacher.html', (res) => {
    // 异步响应
    // 创建初始数组
    let chunks = []
    // 进行拼接传递过来的数据片段
    res.on('data', c => chunks.push(c))

    // 拼接完成触发
    res.on('end', () => {
        // 拼接所有的 chunks，并且转换为字符串
        let htmlStr = Buffer.concat(chunks).toString('utf-8');
        console.log(htmlStr)
    })
})
// 发送请求
req.end()
```



## 例子

### 例1：获取 http://www.itheima.com/teacher.html 黑马程序员官网的所有老师的图片

```javascript
// 引入http模块 如果是 https 就引入 https 模块
const http = require('http')
// 引入处理 dom 模块 基于 jquery
const cheerio = require('cheerio')
// 引入 批量下载文件 模块
const download = require('download')

// 创建一个请求 ( 未发送 )
let req = http.request('http://www.itheima.com/teacher.html', (res) => {
    // 异步响应
    // 创建初始数组
    let chunks = []
    // 进行拼接传递过来的数据片段
    res.on('data', c => chunks.push(c))

    // 拼接完成触发
    res.on('end', () => {
        // 拼接所有的 chunks，并且转换为字符串
        let htmlStr = Buffer.concat(chunks).toString('utf-8');
        // 获取 
        let $ = cheerio.load(htmlStr)
        // 图片数组
        let imgArr = []
        // 处理 img 
        $('.main_pic img').each(function () {
            // 获取所有的 img 的 src 
            // 如果下载文件的地址有中文一定要用 encodeURI 进行 base64 编码
            let src = 'http://www.itheima.com' + encodeURI($(this).attr('src'))
            // 将所有的 img 存储在数组中
           imgArr.push(src)
       });
        // 批量下载 第一个参数是下载地址的数组 dist 是 下载文件存储的文件夹
        Promise.all(imgArr.map(x => download(x, 'dist')))
            // 全部下载完后执行
            .then(() => {
             console.log('全部下载完成');
        })
    })

})
// 发送请求
req.end()
```

