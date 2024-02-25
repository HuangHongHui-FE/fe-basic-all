## js笔记

### 事件冒泡与事件默认行为

type:获取事件类型

target:获取事件目标

stopPropagation():阻止事件冒泡

preventDefault():阻止事件默认行为

![image-20210918231519603](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918231519603.png)

### 3种创建对象的方法

在对象中的函数叫方法，对象外的函数叫函数

```js
people = new Object();
people.name = "iwen";
people.age = "30";
document.write("name:"+people.name+"age:"+people.age);

// 2
people = {name:"iwen",age:"30"};
document.write("name:"+people.name+",age:"+people.age);

// 3
function people(name,age){
    this.name = name;
    this.age = age;
}
son = new people("iwen",30);
document.write("name:"+son.name+",age:"+son.age)
```

### 时间对象

```js
var date = new Date();
document.write(date);       //获取当前时间
document.write(date.getFullYear());//获取年份
document.write(date.getTime());//获取当前时间毫秒数

date.setFullYear(2020,1,1);//修改日期
document.write(date);
//getDay()获取星期


//例子
function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("timetxt").innerHTML = h+":"+m+":"+s;
    t = setTimeout(function(){
        startTime();
    },500);  // 500毫秒更新一次
}
function checkTime(i){
    if(i<10){
        i = "0"+i;
    }
    return i;
}
```

### 浏览器对象

```js
window.innerWidth     // 浏览器宽度
window.innerHeight    // 浏览器高度
window.open("html     26.html",name="_self","height = 200,top = 100,left=100,width=100"); // 打开网页事件
window.close()        // 关闭网页事件


window.history        // 对象包含浏览器历史（url）的集合
history.back()        // 与在浏览器点击后退按钮相同
history.forward()     // 与在浏览器点击向前按钮相同
history.go()          //进入历史中的某个界面


window.location  用于获得当前页面的地址（url）
location.hostname:返回web主机的域名
location.pathname:返回当前页面的路径和文件名
location.port:返回web主机的端口
location.protocol:返回所使用的web协议（http://或https://）
location.href:返回当前页面的URL
location.assign():方法加载新的文档


screen.availWidth-可用的屏幕宽度
screen.availHeight-可用的屏幕高度
screen.Height-屏幕高度
screen.Width-屏幕宽度
```

### 原型与原型链

```js
// 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
function Fun () {

}
console.log(Fun.prototype)  // 默认指向一个Object空对象(没有我们的属性)


// 原型对象中有一个属性constructor, 它指向函数对象
console.log(Fun.prototype.constructor === Fun)


//给原型对象添加属性(一般是方法) ===>实例对象可以访问
Fun.prototype.test = function () {
    console.log('test()')
}
var fun = new Fun()
fun.test()


// 1. 每个函数function都有一个prototype，即显式原型属性, 默认指向一个空的Object对象
console.log(Fn.prototype)

// 2. 每个实例对象都有一个__proto__，可称为隐式原型
  //创建实例对象
var fn = new Fn()
console.log(fn.__proto__)

// 3. 对象的隐式原型的值为其对应构造函数的显式原型的值
console.log(Fn.prototype===fn.__proto__) // true

/*
  2. 所有函数都是Function的实例(包含Function)
  */
console.log(Function.__proto__===Function.prototype)
```

