### B站webpack基础笔记    https://www.bilibili.com/video/BV1iv411N7jg?p=1

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

webpack5 以后就可以使用asset module type资源类型模块，处理图片，

![image-20211011110058343](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011110058343.png)

1. 基本使用
2. ![image-20211011110318299](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011110318299.png)
3. 管理打包后的路径，图片文件名

![image-20211011110509006](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011110509006.png)

##### asset/inline

![image-20211011110711550](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011110711550.png)

##### 两种方式结合

通过判断图片的大小，选择不同的方式打包图片

![image-20211011110844908](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011110844908.png)



### asset处理字体图标

webpack5之前的处理是直接拷贝到dist文件夹下。

![image-20211011111207854](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011111207854.png)



## webpack插件使用

##### 安装

![image-20211010182052955](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010182052955.png)

##### 配置

![image-20211010182235813](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010182235813.png)

### html-webpack-plugin使用

publlic下一般存放直接copy的不需要打包的资源

##### 打包完成默认在指定的文件夹创建Index.html文件

![image-20211010182605163](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010182605163.png)

##### 可以自定义设置创建的index文件的模板

![image-20211010183000469](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010183000469.png)

配置下

![image-20211010183204596](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010183204596.png)

#### 自定义变量的插件

![image-20211010183604493](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010183604493.png)

### babel的使用

![image-20211010183717600](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010183717600.png)

##### 处理js兼容

##### 安装核心模块

npm i @babel/core -D

安装让它能在命令行使用的工具

npm i @babel/cli -D

##### 打包js并输出到指定目录

并没有进行转换处理

![image-20211010184225175](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184225175.png)

#### 转换箭头函数

npm i @babel/plugin-transform-arrow-functions -D

安装后再进行打包

![image-20211010184429776](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184429776.png)

发现箭头函数已经转换到了普通函数

![image-20211010184501970](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184501970.png)

#### 处理块作用域

![image-20211010184553656](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184553656.png)

打包

![image-20211010184615759](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184615759.png)

#### 打包js的集合

安装

![image-20211010184715271](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184715271.png)

打包

![image-20211010184734959](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010184734959.png)

### babel-loader的使用

本身没有什么功能，主要是其安装的插件的功能

##### 安装

npm i babel-loader -D

##### 配置

![image-20211010191527186](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010191527186.png)

#### 打包js预设的使用

里面为好多集合用来打包js的

![image-20211010191801062](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010191801062.png)

也是根据.browerslistrc下的内容进行兼容处理

targets参数跟.browerslistrc作用一样，如果两者均存在，以targets为主

#### 配置文件babel.config.js

![image-20211010192522974](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010192522974.png)

配置文件加配置文件就可

![image-20211010192627281](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010192627281.png)

![image-20211010192653321](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010192653321.png)

### polyfill配置

解决预设的（env）插件仍然解决不了的打包的问题,按需配置

##### 安装（不建议直接安装babel/polyfill）

npm i @babel/polyfill --save

![image-20211010193444274](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010193444274.png)



##### 安装core-js与regenerator-runtime

npm i core-js regenerator-runtime --save

配置中引入

entry：就按照.browserslistrc进行打包



![image-20211010194401312](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010194401312.png)

### copy-webpack-plugins

不打包public的静态资源

npm i copy-webpack-plugin -D

##### 引入

![image-20211010194746293](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010194746293.png)

##### 配置

![image-20211010195356382](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010195356382.png)



### webpack-dev-server初始

打包后要在服务器运行的事

##### 内容改变，自动打包

1. 第一种方法

![image-20211010195752191](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010195752191.png)

2. 第二种方法

   ![image-20211010195900527](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010195900527.png)

##### 这种自动编译方法的不足

![image-20211010200120456](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010200120456.png)

##### 

##### 用webpack server

![image-20211010200257939](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010200257939.png)

添加上修改后的配置文件名

![image-20211010200415140](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010200415140.png)



### webpack-dev-middleware使用

主要是为了自定义打包需求

![image-20211010200631135](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010200631135.png)

##### 我们想要的过程

开启服务，打包代码，打包后的代码在服务上运行，浏览器访问

服务端

![image-20211010201112756](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010201112756.png)



### HMR功能使用

npm run server

##### 模块热替换

当需要浏览器只需要对局部发生数据改变的组件进行更新展示时用

##### 默认是刷新整个页面进行热更新

##### 使用

1. 

![image-20211010202208679](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010202208679.png)

2. 

![image-20211010202716783](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010202716783.png)





### react支持热更新

1. ![image-20211010203014993](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203014993.png)![image-20211010203030628](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203030628.png)

2. 

![image-20211010203115561](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203115561.png)



3. 

![image-20211010203149233](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203149233.png)

##### 匹配jsx文件，借助配置文件分开

![image-20211010203248201](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203248201.png)

![image-20211010203334277](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203334277.png)

当前App.jsx文件内容的热更新还是直接刷新内容，并不具备热更新的效果

4. 引入

   ![image-20211010203742973](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203742973.png)

5. package.json中提前安装好react-refresh/babel

![image-20211010203921303](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010203921303.png)



### vue支持热更新

1. ![image-20211010204245666](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010204245666.png)
2. 添加匹配规则并安装依赖

![image-20211010204349879](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010204349879.png)

3. npm run server即可

   

vue2版本对应vue-loader14版本

15版本需要手动加载插件，

node中安装的vue-loader可以看出

![image-20211010204727278](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010204727278.png)

##### 引入

![image-20211010204808603](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010204808603.png)

配置上

![image-20211010204858330](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010204858330.png)

##### 16就要vue3版本了

### output中的path

publicPath: 设置index内部的引用路径

index.html引用资源时：

- 域名 + publicPath + filename查找

![image-20211010210516748](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010210516748.png)

npm run build



### devserver中的path

publicPath: 指定本地服务所在的目录， 默认"/"

配置的

![image-20211010211154039](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010211154039.png)

##### 如果打包后的资源又依赖了其他资源，

contentBase就告知去哪找

![image-20211010211517607](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010211517607.png)

##### 监控contentBase里的内容是否修改了

![image-20211010211629199](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010211629199.png)



### devserver常用配置

httpOnly,组件不被其他组件的语法错误影响

![image-20211010212227220](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010212227220.png)

![image-20211010212618278](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010212618278.png)

![image-20211010212735929](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010212735929.png)



### proxy代理设置

![image-20211010213152192](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010213152192.png)

![image-20211010213214250](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010213214250.png)

##### 是否对/api进行重写

![image-20211010213345483](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010213345483.png)

##### changeOrigin设置请求的接口是否欺骗服务端

![image-20211010213600967](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010213600967.png)



### resolve模块解析规则

绝对路径，就直接去找，找不到就报错

相对路径：基于文件所在地址的上下文查找

模块名称：就直接去node_modules里去找

![image-20211010214016172](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010214016172.png)

##### resolve拓展名

![image-20211010214520469](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010214520469.png)

##### 别名

![image-20211010214621046](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010214621046.png)

![image-20211010214638844](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211010214638844.png)

### source-Map作用

调试错误的时候能更快的找出错误出现在源码的地方

##### mode的设置

![image-20211011092128279](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011092128279.png)

设置source-map

![image-20211011092554789](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011092554789.png)



### devtool详细说明

devtool不同参数

eval-source-map  js目录下不存在source-map文件

![image-20211011102717015](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011102717015.png)



![image-20211011102632051](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011102632051.png)



![image-20211011102750414](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011102750414.png)



![image-20211011102856198](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011102856198.png)

![image-20211011102934469](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011102934469.png)



vue是是source-map

react是cheap-module-source-map



### ts-loader编译ts

##### 安装ts

npm i typescript -D

tsc ./src/index.ts     打包单个文件

安装ts-loader

### babel-loader编译ts

四个预设![image-20211011103531764](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011103531764.png)

1.方式![image-20211011103603975](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011103603975.png)

2. 填充，与版本

   ![image-20211011103715118](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011103715118.png)

这种方式如果代码有误，打包时不会报错，运行时才报错

自定义的ts语法校验，同时不在src下产出index.js文件

![image-20211011104119080](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104119080.png)

npm run server连续执行两个操作

![image-20211011104221142](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104221142.png)



### 加载vue文件

![image-20211011104342536](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104342536.png)

##### 使用，没有对样式处理

1. ![image-20211011104530471](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104530471.png)

2. ![image-20211011104545595](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104545595.png)

3. ![image-20211011104601061](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104601061.png)

4. 样式处理

   ![image-20211011104737867](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011104737867.png)

### 区分打包环境

### 合并生产环境配置





## 尚硅谷webpack

### loader的基本使用和介绍

### loader的解析顺序

##### 从下到上![image-20211020184747685](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211020184747685.png)

##### 从上到下解析，module.exports的pitch方法

![image-20211020184854481](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211020184854481.png)





### 异步loader的解析

通过**this.async()**方法， 返回一个callback, 只有调用了callback才会执行

![image-20211020185311103](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211020185311103.png)



### 获取和校验loader的options的配置

loader-utils库可以获取其配置

![image-20211020185527541](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211020185527541.png)



validate验证loader的opyions是否合法的一个库，这个文件中为valider的配置

![image-20211020185817110](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211020185817110.png)

![image-20211020185919911](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211020185919911.png)



### 自定义babel-loader

