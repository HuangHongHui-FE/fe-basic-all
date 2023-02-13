let express = require('express');

const app = express();

const Cors = require('cors');


app.use(Cors())


app.all('/*', (req, res, next) => {
    if (req.headers.origin) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }
    next();
})


app.get('/redir', (req, res) => {
    console.log('aaa');
    // res.location('/bar');

    res.redirect('/foo/bar');

    // res.redirect(301, 'http://example.com');
})


// 原理
// res.location = function (url) {
//     var req = this.req;

//     // "back" 是 referrer的别名
//     if ('back' == url) url = req.get('Referrer') || '/';

//     // 设置Lcation
//     this.setHeader('Location', url);
//     return this;
// };


// redirect
// res.redirect = function (url) {
//     var head = 'HEAD' == this.req.method;
//     var status = 302;
//     var body;

//     // 一些处理

//     // 通过 location 方法设置头信息
//     this.location(url);

//     // 另一些处理

//     // 设置状态并返回响应
//     this.statusCode = status;
//     this.set('Content-Length', Buffer.byteLength(body));
//     this.end(head ? null : body);
// };

app.listen('8080', () => {
    console.log('监听8080 ing!!!!!!!!!!!!');
})