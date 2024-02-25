### cookie的使用

1. 安装 cnpm install cookie-parser --save 

2. 引入 var cookieParser = require('cookie-parser'); 

3. 设置中间件 app.use(cookieParser()); 

4. 设置 cookie       

5. res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true}); 

6. res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true }); 

7. res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })

5. 获取 cookie      req.cookies.name

6. 删除cookie   

7. res.cookie('rememberme', '', { expires: new Date(0)}); 

11. res.cookie('username','zhangsan'，{domain:'.ccc.com',maxAge:0,httpOnly:true});

    | 属性     | 描述                                                         |
    | -------- | ------------------------------------------------------------ |
    | domain   | 域名 name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样 |
    | expires  | 过 期 时 间 （ 秒 ） ， 在 设 置 的 某 个 时 间 点 后 该 Cookie 就 会 失 效 ， 如 expires=Wednesday, 09-Nov-99 23:12:40 GMT |
    | maxAge   | 最大失效时间（毫秒），设置在多少后失效                       |
    | secure   | 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效 |
    | Path     | 表示 cookie 影响到的路路径，如 path=/。如果路径不能匹配时，浏览器则 不发送这个 Cooki |
    | httpOnly | 是微软对 COOKIE 做的扩展。如果在 COOKIE 中设置了“httpOnly”属性，则通 过程序（JS 脚本、applet 等）将无法读取到 COOKIE 信息，防止 XSS 攻击 |
    | singed   | 表示是否签名 cookie, 设为 true 会对这个 cookie 签名，这样就需要用 res.signedCookies 而不是 res.cookies 访问它。被篡改的签名 cookie 会被服务 器拒绝，并且 cookie 值会重置为它的原始值 |

    #### 加密的cookie

    1. 配置中间件的时候需要传参   var cookieParser = require('cookie-parser'); app.use(cookieParser('123456')); 

    2. 设置 cookie 的时候配置 signed 属性    res.cookie('userinfo','hahaha',{domain:'.ccc.com',maxAge:900000,httpOnly:true,signed:true});
    3. signedCookies 调用设置的 cookie  console.log(req.signedCookies);

