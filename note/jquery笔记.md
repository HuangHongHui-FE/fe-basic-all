## jquery笔记

### 1. 基本语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基本语法</title>
    <script src="jQuery文件.js"></script>
    <script src="1 .js"></script> // 一定要在jquery文件引入后再引入
</head>
<body>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    
    <script>
        $(document).ready(function(){
            alert("文档加载完毕");
            $("p").click(function(){
                $(this).hide();
            })
        });
    </script>
</body>
</html>
```

### 2. 选择器

```html
    <p>p1</p>
    <p>p2</p>
    <button>click me1</button>
<br/>
    <p1>p1</p1>
    <p1 id="pid">p2</p1>
    <button>click me2</button>
<br/>
    <p2>p1</p2>
    <p2 class="pclass">p2</p2>
    <button>click me3</button>
<br/>
```

```js
$(document).ready(function(){
    alert("文档加载完毕");
    $("button").click(function(){
        $("p").text("p元素被修改了");
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $("#pid").text("p元素被修改了");
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $(".pclass").text("p元素被修改了");
    });
});
```

### 事件常用方法

```html
<button>Click me</button>
```

```js
$(document).ready(function(){
//    $("button").click(function(){     //单击隐藏
//    $("button").dblclick(function(){    //双击隐藏
//    $("button").mouseenter(function(){
      $("button").mouseleave(function(){
           $(this).hide();  //单击隐藏
      });
});
```

### 事件绑定与解绑

```js
$(document).ready(function(){
    $("clickMeBtn").click(function(){
        alert("hello");
    });
    $("#clickMebtn").bind("click",clickHandler1);
    $("#clickMebtn").bind("click",clickHandler2);  //事件绑定
    $("#clickMeBtn").unbind("click",clickHandler1);
    $("#clickMeBtn").unbind("click");  //解除全部绑定
});

function clickHandler1(e){
    console.log("clickHandler1");//控制台能看到效果打印了出来
}
function clickHandler1(e){
    console.log("clickHandler2");
}
```

### 事件目标与冒泡

```html
<div style="width:300px; height:300px; background-color:aqua">
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
    </ul>
</div>
```

```js
$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler);
});

function bodyHandler(event){
    console.log(event);
}

function divHandler(event){
    console.log(event);
    event.stopPropagation(); //阻止
}
```

### 自定义事件

```html
<button id="ClickMeBtn">click me</button>
```

```js
$(document).ready(function(){
    $("#ClickMeBtn").click(function(){
        var e = jQuery.Event("MyEvent");
        $("#ClickMeBtn").trigger(e);
    });
    $("#CLickMeBtn").bind("MyEvent",function(event){
        console.log(event);
    });
});
```

### HTML捕获

```html
<p id="text">this is my webpage<a>  aaa</a></p>
<p><input type="text" id="it" value="jikexueyuan"></p>
<p><a href="http://baidu.com" id="aid">百度</a></p>
    
<button id="btn1">点击</button>
<button id="btn2">点击2</button>
```

```js
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("text: "+$("#text").text());
    });
    
    $("#btn1").click(function(){
        alert("text: "+$("#text").html());
    });
    
    $("#btn1").click(function(){
        alert("text:"+$("#it").val());
    });
    
    $("#btn2").click(function(){
        alert("text:"+$("#aid").attr("href"));
    });

});
```

### HTML设置

```html
<p id="p1">hello world</p>
<p id="p2">hello world</p>
<input type="text" id="i3" value="hello World">
<button id="btn1">按钮</button>
<button id="btn2">按钮</button>
<button id="btn3">按钮</button>
<br/>

<a id="aid" href="http://baidu.com">最初是百度，接下来是jikexueyuan</a>
<button id="btn4">跳转</button>
<br/>

<p id="p5">hello world</p>
<button id="btn5">按钮</button>
```

```js
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").text("极客学院");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href='http://baidu.com'>百度</a>");
    });
    $("#btn3").click(function(){
        $("#i3").val("极客学院");
    });

    $("#btn4").click(function(){
        $("#aid").attr({
           "href":"http://www.jikexueyuan.com",
           "title":"hello"          /*添加多个*/
        });
    });

    $("#btn5").click(function(){
        $("#p5").text(function(i,ot){
           return "old:"+ot+"  new:这是新的内容"+(i);
        });
    });
});
```

### HTML创建操作元素

```html
<p id="p1">hello world</p>
<p id="p2">hello world</p>
<button id="btn1">按钮</button>
<button id="btn2">按钮</button>
<button onclick="appendText()">按钮</button>
```

```js
$(document).ready(function(){
    $("#btn1").click(function(){
        //$("#p1").append("this is my webpage add content");  //后面插入
        $("#p1").prepend("this is my webpage add content.."); //在前面插入
    });

    $("#btn2").click(function(){
        //$("#p2").before("hello");
        $("#p2").after("hello");
    });

});

function appendText(){
    var text1 = "<p>iwen</p>";
    var text2 = $("<p></p>").text("ime");
    var text3 = document.createElement("p");
    text3.innerHTML = "acely";
    $("body").append(text1,text2,text3);
};
```

### html删除元素

```html
<div id="div" style="height:200px; width:200px; border:1px solid black;background-color:aqua;">
	hello
	<p>hello world</p>
	<p>hello</p>
</div>
<p>hello</p>
<button id="btn">按钮</button>
```

```js
$(document).ready(function(){
    $("#btn").click(function(){
        //$("p").remove();
        //$("p").empty();
        // $("#div").remove();  // 直接移除元素
        $("#div").empty();  // 清空里面的内容
    });
});
```

### 效果的隐藏和显示

```html
<button id="hide">隐藏</button>
<button id="show">显示</button>
<button id="toggle">隐藏/显示</button>
```

```js
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000);//
    });
    $("#show").click(function(){
        $("p").show(1000);
    });
    $("#toggle").click(function(){
        $("p").toggle(1000);
    });
});
```

### 效果的淡入淡出

```html
<button id="in">fadeIn</button>
<button id="out">fadeOut</button>
<button id="toggle">toggle</button>
<button id="to">fadeTo</button>

<div id="div1" style="width:80px; display:none; height:80px; background-color:aqua"></div>
<div id="div2" style="width:80px; display:none; height:80px; background-color:red"></div>
<div id="div3" style="width:80px; display:nine; height:80px; background-color:yellow"></div>
```

```js
$(document).ready(function(){
    $("#in").on("click",function(){
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
    $("#out").on("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    $("#toggle").on("click",function(){
        $("#div1").toggle(1000);
        $("#div2").toggle(1000);
        $("#div3").toggle(1000);
    });
    $("#to").on("click",function(){
        $("#div1").fadeTo(1000,0.5);
        $("#div2").fadeTo(1000,0.7);
        $("#div3").fadeTo(1000,0.3);//0.3为透明度
    });
});
```

### 效果的滑动

```html
<div id="flipshow">出现</div>
<div id="fliphide">隐藏</div>
<div id="fliptoggle">重复</div>
<div id="content">hello world</div>
```

```js
$(document).ready(function(){
    $("#flipshow").click(function(){
        $("#content").slideDown(1000);
    });
    $("#fliphide").click(function(){
        $("#content").slideUp(1000);
    });
    $("#fliptoggle").click(function(){
        $("#content").slideToggle(1000);
    });
});
```

### 效果结束的回调

```html
<p>hello world hello world hello world hello world </p>
<button>隐藏</button>
```

```js
$(document).ready(function(){
    $("button").click(function(){
        /*$("p").hide(1000,function(){
            alert("动画结束，这个被称为回调");
        });*/
        $("p").css("color","red").slideUp(1000).slideDown(1000);
    });
});
```

### css方法

```js
$(document).ready(function(){
    $("div").css("background","red");
    
    /*$("div").css({
        width:"100px",height:"100px",backgroundColor:"blue"
    });*/

    $("div").addClass("style1");
    $("div").click(function(){
        $(this).addClass("style2");
        //$(this).removeClass("style2");
        //$(this).toggleClass("style2");
    });
});
```

### 盒子模型

当外边加有边框就

```js
$(document).ready(function(){
    //alert($("#div").height());
    //alert($("#div").width());
    //alert($("#div").innerHeight());
    alert($("#div").outerHeight());
    //alert($("#div").outerHeight(true));
});
```

### 向下遍历

```html
<div id="div1">div1
    <div id="div2">div2
        <p>
            <a>
                hello
            </a>
        </p>
    </div>
</div>
```

```js
$(document).ready(function(){
    // $("#div1").children().css({border:"3px solid red"}) //不能传参
    $("#div1").find("a").css({border:"3px solid red"}) //必须要有参数
});
```

### 向上遍历

```html
<div id="div1">
    <div id="div2">
        <p>
            <a>
            	hello
            </a>
        </p>
    </div>
</div>
```

```js
$(document).ready(function(){
    //$("a").parent().css({border:"3px solid red"});
    //$("a").parents().css({border:"3px solid blue"});
    $("a").parentsUntil("#div1").css({border:"3px solid blue"});
})
```

### 同级遍历

```html
<div class="bd">
    <p>P</p>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>
    <h7>H7</h7>
</div>
```

```js
$(document).ready(function(){
    //$("h4").siblings().css({border:"3px solid red"});//除了h4,其他全改
    //$("h4").next().css({border:"3px solid red"}); //下一个
    //$("h4").nextAll().css({border:"3px solid red"});
    $("h4").nextUntil("h6").css({border:"3px solid red"});//h4与h6之间的
    $("h4").prev().css({border:"3px solid red"});//向上
    $("h4").prevAll().css({border:"3px solid red"});
    $("h4").prevUntil("h1").css({border:"3px solid red"});
});
```

### 过滤

```html
<div>
    <p class="p">div1</p>
</div>
<div>
    <p>div2</p>
</div>
<div>
    <p>div3</p>
</div>
```

```js
$document().ready(function(){
    //$("div p").first().css("background-color","red");
    //$("div p").last().css("background-color","red");
    //$("div p").eq(2).css("background-color","red");
    //$("div p").filter("p").css("background-color","red");
    $("div p").not(".p").css("background-color","red");
});
```

