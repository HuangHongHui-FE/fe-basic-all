## jqueryUI笔记

### 基本使用

![image-20210919033917187](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210919033917187.png)

![image-20210919033934349](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210919033934349.png)

### 拖动效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="jQuery文件.js"></script>
    <script src="jquery-ui.min.js"></script>
    <script src="2 .js"></script>
    <link type="text/css" href="jquery-ui.min.css" rel="stylesheet">
</head>
<body>
    <div style="width:100px; height:100px; border:2px solid red" id="div"></div>
</body>
</html>
```

```js
$(document).ready(function(){
    $("div").draggable();
})
```

### 放置效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="jQuery文件.js"></script>
    <script src="jquery-ui.min.js"></script>
    <script src="3 .js"></script>
    <link type="text/css" href="jquery-ui.min.css" rel="stylesheet">
</head>
<body>
    <div style="width:100px; height:100px; border:2px solid red" id="div1"></div>
    <div style="width:200px; height:200px; border:2px solid blue" id="div2"></div>
</body>
</html>
```

```js
$(document).ready(function(){
    $("#div1").draggable();
    $("#div2").droppable();

    $("#div2").on("drop",function(event,ui){
        //alert(event);
        $("#div2").text("drop事件")
    })
})
```

### 尺寸（可调）效果

```html
<div style="width:100px; height:100px; background-color:yellow" id="div"></div>
```

```js
$(document).ready(function(){
    $("#div").resizable();
})
```

### 选择效果

```html

<style>
    .ui-selected{
        background-color:blue;
    }
</style>
</head>
<body>
    <strong>世界上最美丽的人是？</strong>
    <ul id="select">
        <li id="right">A.me</li>
        <li>B.我</li>
        <li>C.I</li>
    </ul>
    <a href="#" id="btn">提交</a>
</body>
```

```js
$(document).ready(function(){
    $("#btn").button();
    $("#select").selectable();//ui-selected
    $("#btn").on("click",function(){
        //alert("hello");
        if($("#right").hasClass("ui-selected")){    //检查被选元素是否包含指定的class
            alert("恭喜你答对了");
        }
    })
})
```

### 分类拖动效果

```html
<ul id="sortable">
    <li>苹果</li>
    <li>橘子</li>
    <li>香蕉</li>
    <li>桃子</li>
</ul>
```

```js
$(document).ready(function(){
    $("#sortable").sortable();
})
```

.......