

## js基础笔记

#### http://c.biancheng.net/view/9342.html

##### 01. 删除对象里面的属性方法

```js
var obj= {
    a:10,
    b:20
}

delete obj.a;

console.log(obj);
```



##### 05. 只能删除

![image-20210920165915344](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920165915344.png)

![image-20210920165925844](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920165925844.png)

##### 06. try  catch  throw

![image-20210920171024798](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920171024798.png)





##### 12.

![image-20210920172717011](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920172717011.png)

![image-20210920172704598](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920172704598.png)

##### 13.对象有关

![image-20210920172836041](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920172836041.png)

![image-20210920172845450](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920172845450.png)

##### 16.对象的freeze方法

![image-20210920173556593](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920173556593.png)

![image-20210920173612429](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920173612429.png)

##### 17. 错误的传参方式

![image-20210920173800080](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920173800080.png)

![image-20210920173809330](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920173809330.png)

##### 18.原型链上加方法

![image-20210920173906266](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920173906266.png)

![image-20210920173914064](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920173914064.png)

##### 19. 

![image-20210920174057641](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920174057641.png)

![image-20210920174106498](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920174106498.png)

##### 20. 

![image-20210920174759468](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920174759468.png)

![image-20210920174807250](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920174807250.png)

##### 21. conform函数

![image-20210927174506624](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927174506624.png)

##### 22. switch

![image-20210927174629599](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927174629599.png)

##### 23. for  ...  in ...  遍历对象

![image-20210927174912536](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927174912536.png)

##### 24. for ... of  遍历数组

![image-20210927175058577](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927175058577.png)

##### 25. js常用事件，事件绑定（事件可以分为四大类——鼠标事件、键盘事件、表单事件和窗口事件，另外还有一些其它事件。）

![image-20210927175337454](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927175337454.png)

事件绑定

以 onclick 属性为例，通过该属性我们可以为指定的 HTML 元素定义鼠标点击事件（即在该元素上单击鼠标左键时触发的事件），示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>
    <button type="button" onclick="myBtn()">按钮</button>
    <script type="text/javascript">
        function myBtn(){
            alert("Hello World!");
        }
    </script>
</body>
</html>
```

除了上述方法外，我们也可以直接使用 JavaScript 中提供的内置函数来为指定元素绑定事件处理程序，如下例所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>
    <button type="button" id="myBtn">按钮</button>
    <script>
        function sayHello() {
            alert('Hello World!');
        }
        document.getElementById("myBtn").onclick = sayHello;
    </script>
</body>
</html>
```

##### 27. Array对象的属性

![image-20210927175915503](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927175915503.png)

##### 29.存储事件的触发，storage

<script type="text/javascript">
        window.onload = function () {
            window.addEventListener("storage", function (event) {
                console.log(event.key + "=" + event.newValue);
            });
        }
</script>