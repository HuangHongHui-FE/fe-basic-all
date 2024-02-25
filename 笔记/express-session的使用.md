### session工作流程

当浏览器访问服务器并发送第一次请求时，服务器端创建一个session对象，生成key, value.然后将key(cookie)返回到浏览器端，浏览器下次再访问时，携带key(cookie),找到对应的session(value)

### express-session使用流程

1. 安装cnpm install express-session  --save

2. 引入var  session = require("express-session");

3. 设置配置中间件

   ```javascript
   app.use(session({
   	secret: "this is session",  // 用于服务端生成签名
       name: "itying",  // 用来设置在浏览器application中Session Storage保存的名字
   	resave: false,  // 强制存储session,即使他没有变化
   	saveUninitialized: true,  // 强制将未初始化的session存储
       cookie: {
           maxAge: 1000*60,  // 60秒以后过期
           secure: false  // 只有http协议才能访问cookie
       },
       rolling: true  // 每一次访问都重新刷新过期时间
   }))
   ```

4. 设置session

   ![20210801093219](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210801093219.png)

5. 获取session

6. ![20210801093430](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210801093430.png)

7. 销毁session:![20210801094300](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210801094300.png)

8. 另一方法

   req.session.destroy(function(err){

   

   })

   ### 负载均衡配置session， 把session保存到数据库里面

   1. 安装connect-mongo
   2. 引入const MongoStore = require('connect-mongo')(session);          //////前提要已经有了session
   3. 配置：在配置session中间件的里面加入![20210801095157](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210801095157.png)
   4. store其他参数touchAfter: 24 * 3600   //  不管发出了多少请求，在24小时之内只更新一次session，除非session改变了
   5. 成功后运行，会在你指定的数据库里面加上sessions表，来存储session![20210801095910](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210801095910.png)

   