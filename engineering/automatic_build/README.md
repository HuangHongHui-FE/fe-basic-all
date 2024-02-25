## 自动化构建

注意中间都会有一些插件有很多配置

### scss转css体验

my-web-app

```
yarn init
yarn add scss --dev
./node_modules/.bin/scss

.\node_modules\.bin\scss scss/main.scss css/style.css --watch  // 输入路径 输出路径, 监听文件改变重新编译
```

npm scripts  : 实现简单的自动化构建

```
yarn add browser-sync --dev  // 启动测试服务器

yarn add npm-run-all --dev  // 同时执行多个命令
```

注意package.json里的scripts里面的配置：

```
"scripts": {
    "build": "sass scss/main.scss css/style.css --watch",
    "preserve": "yarn build",  // npm run serve ,  会先执行这个，再执行serve
    "serve": "browser-sync .",
    "start": "run-p build serve"  // 同时执行两个
  },
```

### 常用的自动化构建工具

Grunt:    插件完善，构建基于临时文件，速度较慢

Gulp： 基于内存完成，同时可以执行多个任务，生态也完善，直观易懂

Fis：   大而全，捆绑套餐，不够灵活

### Grunt

#### 基本使用

Grunt-sample, 

```
// 初始化项目后
yarn add grunt
// 新建gruntfile.js
。。。
yarn grunt foo  // 执行 
yarn grunt --help
yarn grunt
yarn frunt async-task
```

#### 标记任务失败

grunt-failed

```
yarn grunt bad
yarn grunt
yarn grunt --force
yarn grunt bad-async
```

#### 配置选项方法

Grunt-config

```
yarn grunt foo
```

#### 多目标任务

grunt-multi-task

```
yarn grunt build  // 会运行css和js全部的两个目标
yarn grunt build:css  // 只运行css的目标

yarn grunt build
```

#### 插件的使用

grunt-use-plugin

##### *grunt-contrib-clean*

清除项目开发工程中产生的临时文件。

```
yarn grunt grunt-contrib-clean

yarn grunt clean
```

#### 常用的插件

grunt-plugins

##### *grunt-sass*

```
yarn add grunt-sass sass --dev
// 多任务，需要配置目标
yarn frunt sass
```

##### *grunt-babel*

```
yarn add grunt-babel @babel/core @babel/preset-env --dev
yarn add load-grunt-tasks --dev  // 自动加载所有grunt插件中的任务
yarn grunt babel

yarn add grunt-contrib-watch --dev

...  配好defautl

yarn frunt
```



### gulp

#### 基本使用

gulp-sample

```
yarn init --yes
yarn add gulp --dev  // 安装完， node_module下.bin下就有了gulp的命令
// 新建gulpfile.js
...
yarn gulp foo
```

#### 创建组合任务

gulp-compose-tasks

```
yarn gulp foo  // 串行
yarn gulp bar  // 并行
```

#### 异步任务的三种方式

gulp-saync-task

```
yarn gulp promise
yarn gulp async
yarn gulp steam
```

#### 构建过程的核心工作原理

gulp-build-process

读取流  ->  转换流  -> 写入流

```
yarn gulp
```

#### 文件操作API + 插件的使用

gulp-files-api

```
yarn gulp
yarn add gulp-clean-css --dev
```

#### 自动化构建案例

zce-gulp-demo

```
yarn add gulp --dev
```

##### 转换sass

```css
yarn add gulp-sass
yarn gulp style
// 样式完全展开，sass的配置
// pipe(plugins.sass({ outputStyle: 'expanded' })) 
```

##### 转换js

```css
yarn add gulp-babel @babel/core @babel/preset-env --dev
```

```
yarn gulp script
```

##### 页面文件编译

```
yarn add gulp-swig --dev
yarn gulp page
```

三个任务同步执行

```
yarn gulp compile
```

##### 图片和字体文件的编译

```
yarn add imagemin --dev
yarn gulp image
```

##### 其他文件以及文件清除

```
yarn gulp build
yarn add del --dev
...
```

##### 自动加载插件

```
yarn add gulp-load-plugins --dev
```

##### 热更新开发服务器

```
yarn gulp serve
```

##### 监视变化以及构建优化

```
yarn gulp develop
```

##### useref插件

可以将以这种特殊注释的中间的内容打包到一个asset/styles/vendor.css里

```html
<!-- build:css assets/styles/vendor.css -->
<link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
<!-- endbuild -->
<!-- build:css assets/styles/main.css -->
<link rel="stylesheet" href="assets/styles/main.css">
<!-- endbuild -->
```

```
yarn add gulp-useref
```

过程中产生的文件处理

```
yarn add gulp-htmlmin gulp-uglify gulp-clean-css -dev
...
yarn gulp useref
```

##### 写在最后

注意编译的顺序以及文件的依赖关系。

```
yarn gulp complier
yarn gulp develop
```

完善package.json

```
"scripts": {
	"clean": "gulp clean",
	"build": "gulp build",
	"develop": "gulp develop"
}
```

完善.gitignore文件，排除生成的文件 

#### 封装自动化构建工作流

gulpfile + gulp =  构建工作流



gulpfile + gulpCli = zce-pages



真正用的时候会一个项目代码一个仓库，一个写的打包工具一个仓库。



在打包打包仓库的根目录下：

```
npm link  // 提升到全局
```

在开发的项目里用的话：

```
// 根目录下
npm link 'zce-pages'
// 修改gulpfile.js里
modules.exports = require('zce-pages')
// 项目里要安装gulpCli
yarn add gulp-cli
```

##### 工作流完善

zce-pages

1. data直接放在打包工具里不合适

约定大于配置

page.config.js为约定在项目文件里做的打包工具的data配置

在打包工具的文件里读取data来用就好了

2. 抽象的文件路径的配置抽离

##### 包装gulpCLi

项目中还需要自己写gulpfile.js来引入自己写的cli，不合理

```
yarn add --gulpfile
```

当在项目的node_module里安装了gulp_pages，其实就已经有了gulpfile.js

```
// 在项目根目录运行项目时，指定gulpfile.js文件, --cwd .是为了让cli知道根目录是项目的根目录（正在执行的目录）·
gulp build --gulpfile ./node_modules/zce-pages/lib/index.js  --cwd .
```

在cli工具的package里添加bin字段

#### 发布

发布的时候会把package.json文件里的files字段包含的目录和根目录的文件发布上去，所以需要添加bin

yarn publish

发布完后在新项目里，

```
// 初始化项目
yarn init -y
yarn add zce-pages --dev

// 新项目的package.json的配置
"script": {
	"clean": "zce-pages clean",
	"build": "ace-pages build",
	"develop": "zce-pages develop"
}
```

##### 新发布包的版本同步

新发布的发布到了官方的镜像，淘宝的不一定立马会同步，可以去淘宝的npm.taobao.org找ace-pages，有个sync点击下

#### 最后更完善的参考

github.com/zce/x-pages

### Fis

#### 基本使用

```
yarn add global fis3

// 在项目根目录下
fis3 release  // 就会在hdr文件夹下看到一个临时生成的文件
fis3 release -d output  // 指定生成的临时文件在项目根目录下的output里
```

解决资源路径的问题，变成绝对路径

```
// 新建fis-conf.js
...

fis3 release -d output
// 静态资源就会打包在了output的assets文件夹里
```

#### 编译与压缩

```js
yarn global add fis-parse-node-sass
。。。
fis3 release -d output

yarn global add fis-parse-babel-6.x
```

