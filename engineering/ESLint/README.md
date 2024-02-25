## ESLint

#### 安装

```
npm init -y
npm install eslint --save-dev
npx eslint --version
```

#### 简单上手

```
npx eslint --init   // 完成选择配置
npx eslint ./01-prepare.js
npx eslint ./01-prepare.js --fix  // 会自动修复风格上的问题

```

#### 配置注释

```
// 注释·的语法有很多种
npx eslint ./eslint-configuration-comments.js
```

文档：http://elint.cn/docs/user-guide/configuring#configuring-rules

#### 结合自动化构建工具

06-eslint-gulp

```
在script的时候加入就行了
并且需要初始化eslint, 
npx eslint --init

npx gulp script

// 打印错误信息
```

#### 结合webpack

07-elint-webpack

```
项目中安装eslint
eslint-loader
初始化配置文件.eslintrc.js

...
npx webpack

// react项目需要
npm i eslint-plugin-reac
```

#### 现代化项目集成eslint

#### TS配置eslint

初始化的时候选择就行了



#### Esllint结合git hooks

```
npm i husky -D

注意.git文件下的hooks钩子函数
// 在package.json里
"script": {
	"test": "eslint ./index.js"
}
"husky": {
	"hooks" : {
		"pre-commit": "npm run test"
	}
}

这样就会在commit之前检查了。
```



##### 执行多个命令：

```
npm install lint-staged -D

// package.json里
"script": {
	"test": "eslint ./index.js",
	"precommit": 'lint-staged'
}
"lint-staged": {
	"*.js": [
		"eslint",
		"git add"
	]
}
```

