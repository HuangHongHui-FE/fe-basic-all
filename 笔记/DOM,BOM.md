#### HTML5新增获取元素的方法

document.querySelectorAll("选择器")

#### 获取body, html元素

##### body

var  bodyEle =  document.body

console.log(dir(bodyEle))               // 为body对象，有元素和方法

##### html

document.documentElement

### 事件基础

#### input各种事件

- onfocus  当input 获取到焦点时触发
- onblur  当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候才会触发该事件，用于判断标签为空。
- onchange   当input失去焦点并且它的value值发生变化时触发，个人感觉可以用于注册时的确认密码。
- onkeydown  按下按键时的事件触发，
- onkeyup   当按键抬起的时候触发的事件，在该事件触发之前一定触发了onkeydown事件--相当于一个按键，两个事件，没怎么用过
- onclick    主要是用于 input type=button，input作为一个按钮使用时的鼠标点击事件
- onselect    当input里的内容文本被选中后执行，只要选择了就会触发，不是全部选中
- oninput   当input的value值发生变化时就会触发，（与onchange的区别是不用等到失去焦点就可以触发了）
- 使用方法：
- 以上事件可以直接放到input的属性里，例如：<input type="text" οnfοcus="a();" οnblur="b()" οnchange="c();" οnkeydοwn="d();" />，
- 也可以通过js给input dom元素添加相应的事件，如：document.getElementByTagName('input').onfocus = function();

#### 鼠标事件

。。。

![image-20210806120247236](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806120247236.png)

##### 排他思想

##### ![image-20210806120335086](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806120335086.png)

##### 表格内容的隔行变色效果

![20210806120436](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210806120436.png)

![20210806120614](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210806120614.png)

##### 表单全选与取消全选

![20210806174710](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210806174710.png)

![20210806175023](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210806175023.png)

##### 自定义属性的操作

![20210806175146](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210806175146.png)

![image-20210806175338659](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806175338659.png)

![image-20210806175410119](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806175410119.png)

![image-20210806180104876](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806180104876.png)

![image-20210806180241585](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806180241585.png)

![image-20210806180301345](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806180301345.png)

##### tab栏切换制作

![image-20210806175920921](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806175920921.png)

#### 节点操作

##### 父节点 

![image-20210806180617254](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806180617254.png)

##### 子节点

![image-20210806180838688](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806180838688.png)

![image-20210806181009416](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806181009416.png)

##### 兄弟节点

![image-20210806181725207](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806181725207.png)

##### 直接封装兼容性的函数

![image-20210806181832734](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806181832734.png)

##### 创建添加节点

![image-20210806182009451](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806182009451.png)

![image-20210806182133384](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806182133384.png)

![image-20210806182149881](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210806182149881.png)

##### 留言板

![image-20210807105850876](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210807105850876.png)

##### 删除节点

![image-20210807110014616](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210807110014616.png)

##### 删除留言

![image-20210807110545929](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210807110545929.png)

##### 复制节点

![image-20210807110621609](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210807110621609.png)

![image-20210807110639943](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210807110639943.png)

##### 关于DOM

![image-20210808140232715](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808140232715.png)

##### 注册事件

![image-20210808140409475](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808140409475.png)

传统方式有唯一性

![image-20210808140623379](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808140623379.png)

##### 删除事件，解绑事件

![image-20210808140847956](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808140847956.png)

![image-20210808140938582](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808140938582.png)

##### DOM事件流

![image-20210808141145294](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808141145294.png)

![image-20210808141429378](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808141429378.png)

##### 事件对象

![image-20210808141623382](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808141623382.png)

兼容性写法

![image-20210808141753515](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808141753515.png)

target与this的区别

![image-20210808142124289](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808142124289.png)

事件对象的常见属性

![image-20210808142240373](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808142240373.png)

阻止默认行为

![image-20210808142548733](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808142548733.png)

阻止事件冒泡

![image-20210808142758687](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808142758687.png)

阻止事件冒泡的兼容性事件

![image-20210808142824217](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808142824217.png)

##### 事件委托

![image-20210808143135615](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808143135615.png)

![image-20210808143250598](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808143250598.png)

#### 常见的鼠标事件

##### 禁止选中文字和禁止右键菜单

![image-20210808143517923](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808143517923.png)

![image-20210808143548738](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808143548738.png)

##### 鼠标的事件对象

![image-20210808144217380](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808144217380.png)

##### 跟随鼠标的天使案例

![image-20210808144607342](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808144607342.png)

![image-20210808144620010](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808144620010.png)

#### 键盘事件

![image-20210808144858401](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808144858401.png)

##### keyCode判断用户按下的哪个值

![image-20210808145231568](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808145231568.png)

##### 按键位进入搜索框案例

![image-20210808145452983](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808145452983.png)

##### 模拟京东快递单号查询案例

![image-20210808145830982](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808145830982.png)

![image-20210808145755570](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808145755570.png)

![image-20210808150000284](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808150000284.png)

## BOM浏览器对象模型

![image-20210808151153167](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808151153167.png)

#### window常见事件

##### 窗口加载事件

![image-20210808151532263](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808151532263.png)

![image-20210808151655032](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808151655032.png)

##### 调整窗口大小事件

![image-20210808151858739](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808151858739.png)

![image-20210808151924830](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808151924830.png)

##### 定时器（毫秒）

![image-20210808152055603](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152055603.png)

##### 定时器的应用案例（广告五秒后自动关闭）

![image-20210808152333467](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152333467.png)

##### 清除定时器

![image-20210808152513428](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152513428.png)

##### setInterval定时器

![image-20210808152604545](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152604545.png)

![image-20210808152631792](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152631792.png)

##### 倒计时案例

![image-20210808152852278](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152852278.png)

![image-20210808152943063](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808152943063.png)

##### 清除定时器![image-20210808153113083](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808153113083.png)

##### 发送短息验证码的倒计时效果

![image-20210808153714671](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808153714671.png)

![image-20210808153707690](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808153707690.png)

#### js同步异步

![image-20210808153957931](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808153957931.png)

![image-20210808154215821](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808154215821.png)

##### 事件循环

![image-20210808154300365](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808154300365.png)

#### location对象

![image-20210808154448313](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808154448313.png)

![image-20210808154423686](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808154423686.png)



![image-20210808154524148](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808154524148.png)

##### 几秒之后跳转页面案例

![image-20210808154752409](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808154752409.png)

##### location对象的方法

![image-20210808155048043](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808155048043.png)

![image-20210808155130124](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808155130124.png)

#### navigator对象

![image-20210808155245719](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808155245719.png)

##### history对象

![image-20210808155524946](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808155524946.png)

![image-20210808155553762](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808155553762.png)

####  元素偏移量offset系列

##### 得到位置

![image-20210808162933357](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808162933357.png)

![image-20210808163035717](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808163035717.png)

##### offset与style的区别

![image-20210808163302305](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808163302305.png)

##### 获取鼠标在盒子内的坐标

![image-20210808163547845](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808163547845.png)

![image-20210808163601387](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808163601387.png)

##### 放大镜效果

发射点风格绿卡的撒噶噶；老师

##### 元素可视区client系列

![image-20210808164134633](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808164134633.png)

![image-20210808164210124](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808164210124.png)

##### 立即执行函数

![image-20210808164458781](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808164458781.png)

##### pageshow

![image-20210808165100816](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808165100816.png)

#### scroll元素滚动属性

![image-20210808165233909](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808165233909.png)

![image-20210808165343355](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210808165343355.png)

#####  仿淘宝固定侧边栏案例

#### mouseenter和mouseover的区别

![image-20210809224645266](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210809224645266.png)

### 动画效果

#### 轮播图

### 移动端网页特效

##### 触屏事件touch

![image-20210811140504574](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811140504574.png)

![image-20210811140557302](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811140557302.png)

##### 触摸事件对象

![image-20210811140744618](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811140744618.png)

![image-20210811140902806](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811140902806.png)

![image-20210811140928409](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811140928409.png)

##### 拖动元素

![image-20210811141140983](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811141140983.png)

![image-20210811141206656](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811141206656.png)

![image-20210811141326085](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811141326085.png)

![image-20210811141346334](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811141346334.png)

![image-20210811141445956](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811141445956.png)

#### 移动端click延时解决方案

![image-20210811142230221](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811142230221.png)

![image-20210811142244806](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811142244806.png)

##### 插件解决

![image-20210811144848469](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811144848469.png)



### 本地存储

##### sessionStorage

![image-20210811151920862](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811151920862.png)

![image-20210811152022628](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811152022628.png)

##### localStorage

![image-20210811152151127](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210811152151127.png)

