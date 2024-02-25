##### 盒子阴影

```css
box-shadow: 10px 10px 10px #FFccFF/*阴影比原本字向右，下，透明度，颜色*/
```

##### 边框图片

```css
边框图片    border-image
```



#### 链接

```html
<a href="#"></a>
```

如果href里面地址是一个文件或者压缩包，会下载这个文件

#### 单元格合并

跨行合并  rowspan="合并单元格的个数"

跨列合并  colspan="合并单元格的个数"

##### 步骤

1. 看跨行跨列
2. <td clospan="2"></td>
3. 删除多余的单元格

##### 自定义标签

```html
<dl>
	<dt>名词</dt>
    <dd>名词解释</dd>
    <dd>名词解释</dd>
</dl>
```

##### label标签

点击label标签内的文本，光标自动跳到对应的表单元素

```html
<label for="sex">男</label>
<input type="radio" name="sex" id="sex" />
```

##### 表格的折叠边框

```css
border-collapse: collapse;
```

### css

text-decoration: none, underline, overline, line-through;

text-indent: 2em; 可为－，当前元素2个文字的大小，当前文字没有大小，会找父元素的文字大小

:focus伪类选择器，

```
input: focus {
	backgoundcolor: yellow;
}
```

##### 块元素

h1, p, div, ul, ol, li

##### 行内元素

a, strong, b, em, i, del, s, ins, u, span

##### 行内块元素

img, input, td

##### 背景

background-attachment     设置背景图像是否固定或者随页面的其余部分滚动

background-attachment: scroll  |  fixed

##### 三大特性

层叠性（就近）， 继承性（子承父业）， 优先级（!important>行内>id>class>元素选择器>继承的或者*）

##### 外边距让块级盒子水平居中

1. 盒子指定了宽度，盒子的左右外边距都设置为auto

2. ```css
   .header{
   	width: 960px;
       margin: 0, auto;
   }
   ```

以上是让块元素水平居中

##### 去掉li前面的小圆点

list-style: none;

ul{

​	padding: 0;        // 可以去除小圆点的位置

}

#### float

浮动的元素具有行内块元素的特征

##### 清除浮动

1. clear: both;
2. 父级添加overflow属性，将其设置为hidden,auto或scroll
3. ![20210726202614](C:\Users\HDR\QQ\3167253066\FileRecv\20210726202614.png)
4. ![20210726202751](C:\Users\HDR\QQ\3167253066\FileRecv\20210726202751.png)

##### 图片格式

![20210726203059](C:\Users\HDR\QQ\3167253066\FileRecv\20210726203059.png)

##### css书写顺序

![20210726203547](C:\Users\HDR\QQ\3167253066\FileRecv\20210726203547.png)

#### position定位

1. relative: 移动位置相对自己的原来位置，仍然占有自己原来在标准流的位置
2. absolute: ![20210726205404](C:\Users\HDR\QQ\3167253066\FileRecv\20210726205404.png)
3. fixed![20210727223004](C:\Users\HDR\QQ\3167253066\FileRecv\20210727223004.png)





##### 子绝父相

因为父级需要占有位置，相对定位，子盒子不需要占有位置，绝对定位

子绝父绝也会有

##### visibility可见性

visible, hidden继续占有原来的位置

##### overflow

![image-20210810105415747](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810105415747.png)

#### 高级技巧

##### 精灵图

![image-20210810105651442](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810105651442.png)

##### css三角效果

![image-20210810110006099](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810110006099.png)

##### 鼠标样式

![image-20210810110212813](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810110212813.png)

##### 取消轮郭线

![image-20210810110315477](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810110315477.png)

##### 防拖拽文本域

![image-20210810110427226](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810110427226.png)

##### vertical-align设置垂直对齐

![image-20210810110554223](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810110554223.png)

![image-20210810110825826](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810110825826.png)

##### 单行溢出文字省略号显示

![image-20210810111211066](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810111211066.png)

##### 多行溢出文字显示省略号

![image-20210810111514132](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810111514132.png)

##### margin负值的巧妙运用

![image-20210810112238785](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810112238785.png)

![image-20210810112335396](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810112335396.png)

##### 文字围绕浮动元素的巧妙运用

![image-20210810112611004](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810112611004.png)

![image-20210810112648710](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810112648710.png)

##### css三角

![image-20210810113108915](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810113108915.png)

### html5新增

##### 新增语义化标签

![image-20210810113844270](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810113844270.png)

![image-20210810113936314](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810113936314.png)



### css新增

##### 属性选择器

![image-20210810144222098](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810144222098.png)

##### 结构伪类选择器

![image-20210810144507651](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810144507651.png)

![image-20210810144921025](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810144921025.png)

##### 新增伪元素选择器

![image-20210810145453161](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810145453161.png)

![image-20210810145607694](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810145607694.png)

![image-20210810150200293](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810150200293.png)

![image-20210810150347525](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810150347525.png)

![image-20210810150655117](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810150655117.png)

##### css过渡

![image-20210810150751843](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810150751843.png)

![image-20210810150939067](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210810150939067.png)

#### 2D转换--移动translate

不会影响其他元素位置，对行内标签没有效果

![image-20210812000632184](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812000632184.png)

![image-20210812000656656](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812000656656.png)

##### 盒子实现垂直水平居中

![image-20210812001049354](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812001049354.png)

#### 2D转换之旋转rotate

![image-20210812001312964](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812001312964.png)

#### 2D旋转之设置旋转中心点transform-origin

![image-20210812001624861](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812001624861.png)

![image-20210812001638777](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812001638777.png)

#### 2D旋转之缩放scale

![image-20210812001923828](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812001923828.png)

##### 图片放大案例

![image-20210812002058295](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812002058295.png)

##### 分页按钮案例

![image-20210812002219768](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812002219768.png)

![image-20210812002239750](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812002239750.png)

### 动画

##### 基本使用

![image-20210812200906657](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812200906657.png)

![image-20210812200935208](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812200935208.png)

![image-20210812201051759](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812201051759.png)

#### 动画常用属性

##### animation-fill-mode: forwards;定在最后

![image-20210812201150234](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812201150234.png)

##### 速度曲线细节

![image-20210812201522512](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812201522512.png)



#### 3D移动

![image-20210812202149000](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812202149000.png)

![image-20210812202356702](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812202356702.png)

##### 3D旋转 rorate3d

![image-20210812202724023](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812202724023.png)

##### 3D呈现

![image-20210812202824561](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812202824561.png)

![image-20210812202949411](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812202949411.png)

![image-20210812203819488](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812203819488.png)

#### 浏览器私有前缀

![image-20210812204102357](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812204102357.png)

### 移动web开发流式布局

#### 视口

![image-20210812211318712](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812211318712.png)

![image-20210812211329509](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812211329509.png)

##### 视口属性

![image-20210812211652555](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812211652555.png)

##### css初始化

![image-20210812215604841](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812215604841.png)

![image-20210812215718024](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812215718024.png)

##### 移动端技术布局

![image-20210812215906675](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812215906675.png)

![image-20210812221347917](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210812221347917.png)

#### flex布局

![image-20210814090043765](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814090043765.png)

![image-20210814090156618](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814090156618.png)

#### rem布局

![20210814135024](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210814135024.png)

#### 媒体查询

![image-20210814135138708](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814135138708.png)

![image-20210814135238211](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814135238211.png)

![image-20210814135638109](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814135638109.png)

![image-20210814135722261](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814135722261.png)

![image-20210814135814381](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814135814381.png)

![image-20210814135913106](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814135913106.png)

![image-20210814140016192](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814140016192.png)

![image-20210814140042039](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210814140042039.png)



































## js

##### 模板字符串中嵌入变量，需要将变量名写在${}中

##### underfined与null

![20210727155509](C:\Users\HDR\QQ\3167253066\FileRecv\20210727155509.png)

##### 转换成布尔型

![20210727155945](C:\Users\HDR\QQ\3167253066\FileRecv\20210727155945.png)

##### 解释型语言与编译型语言

![20210727160102](C:\Users\HDR\QQ\3167253066\FileRecv\20210727160102.png)

##### 运算符优先级![20210727161550](C:\Users\HDR\QQ\3167253066\FileRecv\20210727161550.png)

![20210727171236](C:\Users\HDR\QQ\3167253066\FileRecv\20210727171236.png)

##### 构造函数

![20210727171236(1)](C:\Users\HDR\QQ\3167253066\FileRecv\20210727171236(1).png)



![20210728122826](C:\Users\HDR\QQ\3167253066\FileRecv\20210728122826.png)

通过new关键字创建对象的过程也称为对象的实例化

