## vite笔记



#### https://vitejs.cn/

https://vitejs.cn/vite3-cn/



vite相关文档

https://zhuanlan.zhihu.com/p/362126289

### 简介：

项目初始化工具， Vite的生产环境的打包是通过RollUp完成的

vite提供开发开发环境中的编译，打包依靠的是Rollup。

### 特征：

1. 冷启动，开发预览的时候不进行打包。ES6模块化加载规则。
2. 基于缓存的热更新， Vue-cli基于webpack的热更新。
3. 按需进行更新编译。

##### 直接网络请求各个文件，而不是打包

![image-20210927154953766](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210927154953766.png)

### 项目创建

##### 创建项目

```js
npm init vite-app app_name
yarn create vite-app app_name
```

##### 安装依赖

```
npm install
yarn
```

##### 运行

```
npm run dev
yarn dev
```



### vite搭建react开发环境

```
cd react-vite
npm init vite-app --template react

npm install 
npm run dev
```



### vite对ts, css, json的支持

App.vue文件里：

```
<script lang="ts">
	const jspang:string = 'jspang.com';
	import './assets/app.css'
	import data from './assets/jspang.json'
</script>
```



### vite中SASS使用，和JSX的支持

```js
yarn add -D sass
```

##### SASS

```css
<style lang="sass">
	.name{
		color: red;
	}
</style>
```

##### jsx

app.jsx

```js
function App(){
	return (
		<h1>
        	Js
        </h1>
	)
}
export default App;
```

main.js

```js
import App from './app.jsx'
```



### vite配置文件和别名的设置

##### 别名

app.vue,想要@来表示./路径

```
import '/@/assets/app.css'
```

vite.config.js

```js
const {resolve} = require('path')
export default {
    alias: {'/@/': resolve(__dirname, 'src')}
}
```



##### 配置文件https的配置

vite.config.js

```js
import {defineConfig} from 'vite';  
import Vue from '@/vitejs/plugin-vue'   // 代码提示配置

export default defineConfig{
	server: {
		
		https: true;  // 测试服务器开启http2
        open: true;  // 自动打开浏览器
	},
	plugin: [vue()]
}
```