B站webpack基础笔记    https://www.bilibili.com/video/BV1iv411N7jg?p=1

![image-20211009134332340](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009134332340.png)

### 配置文件

默认找到项目文件下的src文件夹下的index.js进行打包，生成dist目录下的main.js.

事先要安装webpack与webpack-cli

npm run build

##### 更改项目入口再进行打包

![image-20211009135514598](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009135514598.png)

webpack --entry ./src/main.js

##### 更改打包出来的路径

webpack --entry ./src/main.js **--output-path**  ./build

##### 配置文件的基本使用

![image-20211009135954456](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009135954456.png)

![image-20211009140037693](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009140037693.png)

### webpack依赖图

##### index.js中引入的文件才会被打包，index中引入的js文件中引入的文件也会被打包

![image-20211009140741079](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009140741079.png)

#### 修改webpack默认配置文件名称

![image-20211009140616830](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009140616830.png)

### CSS-loader

##### 安装

![image-20211009141055162](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009141055162.png)

##### 1. 使用

![image-20211009141642952](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009141642952.png)

css打包后并不能在页面看到效果，需要下面

### style-loader使用

##### 安装

![image-20211009141745650](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009141745650.png)

##### loader顺序

![image-20211009141855524](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009141855524.png)

### less-loader

##### 安装less

![image-20211009142021273](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009142021273.png)

##### less的使用

打包less成为css

![image-20211009142144160](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009142144160.png)

##### 配置

![image-20211009142236916](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009142236916.png)

### browserslitrc工作流程

##### 相当于是筛选出了要兼容的平台

node_modules目录默认有了browerslist包，这个包会引入caniuse-lite的api，按照返回的数据做兼容性的问题

![image-20211009143026003](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009143026003.png)

##### 实例

![image-20211009143138019](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009143138019.png)

返回满足条件的浏览器平台， 默认配置时

##### browserslist的一些配置

![image-20211009143341256](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009143341256.png)

1. 配置，在package.json中直接配置

![image-20211009143428582](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009143428582.png)

2. 建配置文件.browserslistrc

   ![image-20211009143633378](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009143633378.png)

![image-20211009143658184](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009143658184.png)

查看支持的

### postcss工作流程

js转换样式的工具,添加浏览器兼容的前缀

安装 cnpm install postcss

cnpm install postcss-cli -D   可以在终端命令行使用postcss

##### postcss将css进行转换

npm postcss -o ret.css ./src/css/test.css    指定修改后的css文件路径，已经要添加后缀的css路径

这时候运行完并没有加前缀

![image-20211009144559241](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009144559241.png)

##### 加前缀的工具

![image-20211009144712205](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009144712205.png)

再执行npm postcss --use autoprefixer -o ret.css ./src/css/test.css，就好了

![image-20211009145053662](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009145053662.png)

### post-loader处理兼容

安装 npm i postcss-loader -D

在css-loader之前工作

配置

![image-20211009145614041](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009145614041.png)

#### postcss-preset-env

预设，插件集合，里面包含很多插件

npm i postcss-preset-env -D

##### 配置

![image-20211009145930327](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009145930327.png)

npm run build打包

预设里面已经包含了autoprefixer

![image-20211009150111099](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009150111099.png)

#### postcss配置文件

避免重复使用时的代码冗余

新建postcss.config.js

![image-20211009150530278](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009150530278.png)

读到postcss-loader时，会自动加载配置文件

![image-20211009150728148](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009150728148.png)

### import Loaders属性

login.css中@import引入了test.css

默认，引入的test.css文件里的内容不会兼容性处理

![image-20211009152053188](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009152053188.png)

##### 配置

![image-20211009152257330](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009152257330.png)

### file-loader处理图片

![image-20211009152551542](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009152551542.png)

npm i file-loader -D

1. ##### 添加配置

![image-20211009152711472](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009152711472.png)

为一个对象。default

![image-20211009152747550](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009152747550.png)

2. ##### 这样添加配置就不用default

   ![image-20211009152930625](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009152930625.png)

   ##### 解决url()img的问题

![image-20211009153314113](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009153314113.png)

### 设置打包后的图片名称与输出

![image-20211009153650234](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009153650234.png)

![image-20211009153740519](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009153740519.png)

### url-loader处理图片

![image-20211009154029709](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009154029709.png)

![image-20211009154101208](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211009154101208.png)

限制大小以不同的资源形式展示

### asset处理图片

