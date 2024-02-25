# Ajax基础

## Ajax概况

> 它是浏览器提供的一套方法，可以实现页面无刷新更新网站数据，提高用户浏览网站应用体验

## Ajax 应用场景

1. 页面上拉加载更多数据
2. 列表数据无刷新分页
3. 表单项离开焦点后验证
4. 搜索框提示文字下拉列表

## Ajax运行原理

Ajax 相当于浏览器发送请求与接收响应的代理人， 以实现在不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户的体验

## Ajax 实现步骤

```javascript
// 1.创建Ajax 对象
 var xhr = new XMLHttpRequest();
// 2. 告诉 Ajax 请求方式以及请求地址
xhr.open('get', 'http://localhost/first')
// 3.发送请求
xhr.send()
// 4.获取服务器端给与客户端的响应数据
xhr.onload = function () {
	// xhr.responseText
	console.log(xhr.responseText)
}
```

## 请求参数传递

### GET请求方法



```javascript
<p>
    <input type="text" placeholder="请输入名称">
</p>
<p>
    <input type="text" placeholder="年龄">
</p>
<p>
    <input type="button" value="提交" id="btn">
</p>

<script>
    // 获取元素
    var btn = document.querySelector('#btn')
    var text = document.querySelectorAll('input')

    // 添加点击事件
    btn.onclick = function () {
        // 创建Ajax 对象
        var xhr = new XMLHttpRequest();
        // 获取文本框 输入的值
        var name = text[0].value
        var age = text[1].value
        // 拼接请求参数
        var params = 'name=' + name + '&age=' + age
        // 告诉 Ajax 请求方式以及请求地址
        xhr.open('get', 'http://localhost/get?' + params)
        // 发送请求
        xhr.send()
        // 获取服务器端给与客户端的响应数据
        xhr.onload = function () {
            var responseText = JSON.parse(xhr.responseText)
            console.log(responseText);
        }
    }
</script>
```

### POST请求方法

```javascript
    <p>
        <input type="text" placeholder="请输入名称">
    </p>
    <p>
        <input type="text" placeholder="年龄">
    </p>
    <p>
        <input type="button" value="提交" id="btn">
    </p>

    <script>
        // 获取元素
        var btn = document.querySelector('#btn')
        var text = document.querySelectorAll('input')

        // 添加点击事件
        btn.onclick = function () {
            // 创建Ajax 对象
            var xhr = new XMLHttpRequest();
            // 获取文本框 输入的值
            var name = text[0].value
            var age = text[1].value
            // 拼接请求参数
            var params = 'name=' + name + '&age=' + age
            // 告诉 Ajax 请求方式以及请求地址
            xhr.open('post', 'http://localhost/post')
            //  请求参数的格式类型(post请求 必须要设置) 
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            // post请求的参数在xhr.send() 方法里面
            xhr.send(params)
            // 获取服务器端给与客户端的响应数据
            xhr.onload = function () {
                var responseText = JSON.parse(xhr.responseText)
                console.log(responseText);
            }
        }
    </script>
```

## 获取服务端的响应（了解）

### Ajax 状态码

> 在创建Ajax对象，配置Ajax对象，发送请求，以及接收完服务端响应数据，这个过程的每一个步骤都会对应一个数值，这个数值就是Ajax状态码

​	0： 请求未初始化（ 还没有调用 open()  ）

​	1:   请求已经建立，都是还没有发送（ 还没有调用 send() ）

​	2:   请求已经发送

​	3:   请求正在处理中，通常响应中已经有部分数据可以用了

​	4:   响应已经完成，可以获取并使用服务器的响应了

```javascript
// 获取状态码
xhr.onreadystatechange = function () {
            console.log(xhr.readyState);
}
```

## Ajax错误处理

> 可以判断服务器端返回的状态码，分别进行处理，xhr.status 获取http状态码

 	2. 网络畅通，服务器端没有收到请求，返回状态码 404

> 检查请求地址是否错误



  4.网络中断，请求无法发送到服务器端

> 会触发xhr对象下面的onerror事件，在onerror事件处理函数中对错误进行处理

## 低版本 IE浏览器的缓存问题

> 问题：在低版本 IE浏览器中，Ajax请求有严重的缓存问题，即在请求地址不发生变化的情况下，只有第一次请求会真正发送到服务器端，后续的请求都会从浏览器的缓存中获取结果，即使服务器端数据更新了，客户端依然拿到的是缓存中的旧数据

> 解决方案： 在请求地址的后面加请求参数，保证每一次请求中的请求参数的值不相同

```javascript
xhr.open('get','http://xkbk.top?t=' + Math.random() )
```

## 模板引擎

> 作用：使用模板引擎提供的模板语法，可以将数据和HTML拼接起来
>
> 官方地址：http://aui.github.io/art-template/zh-cn/index.html

### 使用步骤

1. 下载art-template模板引擎文件并在HTML页面中引入库文件

```javascript
<script src="./js/template-web.js"></script>
```

2. 准备atr-template模板

```javascript
<script id="tp1" type="text/html">
	<div class="box"> </div>
</script>
```

3.  告诉模板引擎将哪一个模板和哪一个数据进行拼接

```javascript
// 第一个参数是 模板id 第二个参数是数据
var html = template('tp1',{
		username:'xiaoke',
		age:'17'
})
```

4. 将拼接好的html字符串添加到页面中

```javascript
document.getElementById('container').innerHTML = html
```

5. 通过模板语法告诉模板引擎，数据和html字符串要如何拼接

```javascript
<script id="tp1" type="text/html">
	<div class="box"> {{ username }} </div>
</script>
```

## formData 对象的作用

> 配合node 使用formidable模块	

- 模拟HTML表单，相当于将HTML表单映射成表单对象，自动将表单对象中的数据拼接成请求参数的格式

1. 准备好HTML表单

```html
    <form id="form">
        <input type="text" name="username">
        <input type="password" name="password">
        <input type="button" value="">
    </form>
```

2. 将HTML表单转换为 formData对象

```javascript
var form = document.querySelector("#form")
var formData = new FormData(form)
```

3. 提交表单

```javascript
xhr.send(formData)
```



- 异步上传二进制文件

## formData 对象的实例子方法

1. 获取表单对象中的属性值

```javascript
formData.get('key')
```

2. 设置表单对象属性的值

```javascript
formData.set('key','value')
```

3. 删除表单对象中的属性值

```javascript
formData.delete('key')
```

4. 向表单对象中追加属性值

```javascript
formData.append('key','value')
```

> 注意：set 方法与 append 方法的区别是，在属性名已存在的情况下，set 会覆盖已有的键名的值， append会保留两个值

## formData 文件上传图片即时预览

> 在我们将图片上传到服务器端以后，服务器端通常都会将图片地址做为响应数据传递到客户端，客户端可以从响应数据中获取图片地址，如何将图片再显示在页面中

服务器端代码

```javascript
// 实现文件上传路由
app.post('/upload', (req, res) => {
    // 创建formidable表单解析对象
    var form = new formidable.IncomingForm()
    // 设置客户端文件上传的存储路径
    form.uploadDir = path.join(__dirname, 'public', 'upload')
    // 保留上传文件的后缀名
    form.keepExtensions = true
    // 解析客户端传递过来的FormData对象
    form.parse(req, (err, fields, files) => {
        res.send({
            path: files.attrName.path.split('public')[1]
        })
    })
    // res.send('ok')
})

```

客户端代码

```javascript
            xhr.onload = function () {
                if (xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText)
                    // 上传文件夹即时预览
                    // 动态创建img
                    var img = document.createElement('img')
                    // 给图片设置src属性
                    img.src = result.path
                    // 添加到页面中
                    img.onload = function () {
                        box.appendChild(img)
                    }

                }
            }
```





## 同源政策

#### 什么是同源？

> 有相同的协议，域名和端口

#### 同源政策的目的

> 同源政策是为了保证用户信息的安全，防止恶意的网站窃取数据，最初的同源政策是指A网站在客户端设置的cookie，B网站是不能访问的。

#### 使用JSONP 解决同源限制问题

> jsonp 是 json with padding 的缩写，它不属于Ajax请求，但它可以模拟Ajax请求

1. 将不同源的服务器端请求地址写在script标签的src属性中

```javascript
  <script src="http://localhost:3001/test"></script>
```

2. 服务器端响应数据必须是一个函数的调用，真正要发送给客户端的数据需要找我函数调用的参数

```javascript
var data  = 'fn({name: "xiaoke" , age: "16" })'
res.send(data)
```

3. 在客户端全局作用域下定义函数 fn

```javascript
function fn (data) {}
```

4. 在 fn 函数内部对服务器端返回的数据进行处理

```javascript
function fn (data) { console.log(data) }
```

#### JSONP 代码优化

1. 客户端需要将函数名称传递到服务器端
2. 将script请求的发送变成动态请求。
3. 设置请求成功后执行的回调函数
4. 设置传递参数

#### 服务器代码优化

> 可以直接返回JSON数据

```javascript
res.jsonp({ name: "xioake", age: 16 })
```

#### CORS 跨域资源共享

> CORS：全称为 Cross-origin resource sharing  即跨域资源共享，它允许浏览器向跨域服务器发送Ajax请求，克服了Ajax 只能同源使用的限制

```javascript
origin: http://localhost:3000
```

##### 服务器端代码

```javascript
// 所有express框架得中间件 拦截所有的请求
// 拦截所有请求
app.use((req,res,next) => {
	// 1.允许那些客户端访问我 
	res.header('Access-Control-Allow-Origin','*') // * 是允许使用人访问
	// 2.允许客户端使用那些请求方法访问我 多个请求使用 , 来分开
	res.header('Access-Control-Allow-Methods', 'get,post')
	next()
})
```

#### 访问非同源数据 服务器端解决方案

> 使用node中的第三方模块 request

#### get请求

```javascript
   request({
     timeout:5000,    // 设置超时
     method:'GET',    //请求方式
    url:'', //url
       qs:{                                                  //参数，注意get和post的参数设置不一样   
        xxx:"xxx",
        xxx:"xxx"
       }
     },function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
          res.send(body)
      
      }else{
          console.log("error");
      }
  });
```

#### post请求

```javascript

　　　request({
		timeout:5000,    // 设置超时
		method:'GET',    //请求方式
     	url:'xxx', //url
     	form:{                                                  //参数，注意get和post的参数设置不一样   
     	 xx:"xxx",
     	 xxx:"xxx",
     	 xxx:"xxx"
    }
		},function (error, response, body) {
		   if (!error && response.statusCode == 200) {
		  console.log(body);
		        	
		 }else{
		  console.log("error");
	 }

```

#### withCredentials属性

> withCredentials：指定这涉及到跨域请求时，是否携带cookie信息，默认值为false
>
> Access-Control-Allow-Credentials：true 允许客户端发送请求携带cookie

```javascript
	// 允许客户端发送跨域请求时携带cookie信息
	res.header('Access-Control-Allow-Creden	tials', true);
```

# XML基础

### XML是什么

XML的全称是 extensible markup language  代表可扩展标记语言 它的作用是传输和存储数据

```xml
/* 实例代码 */
<students>
	<student>
    	<sid>001</sid>
        <name>小白</name>
    </student>
    <studend>
    	<sid>002</sid>
        <name>二狗子</name>
    </studend>
</students>
```

### XML	DOM

XML DOM 即 XML 文档对象模型，是w3c 组织定义的一套操作 XML 文档对象的 API 浏览器会将 XML 文档解析成文档对象模型