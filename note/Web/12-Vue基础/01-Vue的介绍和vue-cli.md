## 前端的各种框架


### Vue 和 React 的相同点

- 利用虚拟DOM实现快速渲染

- 轻量级

- 响应式组件

- 支持服务器端渲染

- 易于集成路由工具、打包工具以及状态管理工具

### 什么是虚拟 DOM

我们可以在 JS 的内存里构建类似于DOM的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到html里去。这就形成了虚拟 DOM。

Vue1.0没有虚拟DOM，Vue2.0改成了基于虚拟DOM。

### 前端框架回顾

![](http://img.smyhvae.com/20180302_1645.png)

![](http://img.smyhvae.com/20180302_1651.png)

![](http://img.smyhvae.com/20180302_1652.png)

## Vue 框架

### 相关网址

- [中文官网](https://cn.vuejs.org/)
- [vuejs官方论坛](https://forum.vuejs.org/)

### 介绍

 Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。

 Vue 以及大型 Vue 项目所需的周边技术，构成了生态。

### Vue框架的特点

- 响应式的更新机制：数据改变之后，视图会自动刷新。

- 渐进式框架

- 组件化/模块化

- 轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到60kb）。

### 常见的插件

- Webpack：代码模块化构建打包工具。

- Gulp：基于流的自动化构建工具。

- Babel：使用最新的 规范来编写 js。

- Vue：构建数据驱动的Web界面的渐进式框架




## 利用 vue-cli 新建一个空的项目

Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

### 官方代码参考

```
  npm install -g @vue/cli

  vue create my-app

  cd my-app

  npm run serve
```

我们根据上方的参考代码，来看看“利用 vue-cli 新建一个空的项目”的步骤。

### 安装 vue-cli（命令行工具）

安装命令如下：

```bash
# 全局安装 vue-cli
$ npm install -g @vue/cli
```

### 初始化一个 simple 项目

（1）首先执行：

```
  vue create my-app
```

输入上方命令后，会弹出一个选项：

![](http://img.smyhvae.com/20190624_163626.png)

如果是初学者，直接选`default`就行。之后会自动生成一个空的初始化项目，包含了项目目录、以及项目依赖的脚本。

这个空项目的工程文件如下：（请务必仔细研究这个项目的写法和目录结构）

- [2019-06-21-vue-my-app.zip](https://download.csdn.net/download/smyhvae/11256220)

我们可以看到这个项目的结构：

![](http://img.smyhvae.com/20190624_160726.png)

- .babelrc：ES6编译插件的配置

- index.html：单页面的入口

`npm run dev`指的是打开发包，`npm run build`指的是打生产包。



### 构建一个 非 simple 项目

构建一个空的项目，首先执行：

```
$ vue create vuedemo2
```

![](http://img.smyhvae.com/20190624_163726.png)

上图中，选择 `Manually select features`，然后根据提示依次输入：

![](http://img.smyhvae.com/20190624_164305.png)

-  project name：**要求小写**。

- description：默认即可。

- vue-router：需要。

- ESlint：语法检查，初学者可以暂时不需要。

- 单元测试：暂时也不需要。

- e2e test：不需要。

选择 eslint 的配置：

![](http://img.smyhvae.com/20190624_165001.png)



## vue 项目结构分析

![](http://img.smyhvae.com/20180501_2100.png)

- buid：打包配置的文件夹

- config：webpack对应的配置

- src：开发项目的源码
	- App.vue：入口组件。`.vue`文件都是组件。
	- main.js：项目入口文件。

- static：存放静态资源

- `.babelrc`：解析ES6的配置文件

- `.editorcofnig`：编辑器的配置

- `.postcssrc.js`：html添加前缀的配置

- `package.json`：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等。

### 图片的base64编码

默认是10k以下，建议都通过 base64编码。在配置文件`webpack.base.conf.js`中进行修改：

```
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
```

