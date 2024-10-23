原生demos

#### IE与其他浏览器兼容性

- 获取css样式：---html/002-js获取css样式

#### 网站支持http2检测

- https://myssl.com/http2_check.html
- ```
  window.chrome.loadTimes()
  ```

#### package.json中`npm scripts`的生命周期

https://tiven.cn/p/a7460bda/

#### nginx配置http2

https://tiven.cn/p/1612b5cd/

#### parseInt的小bug

```
// 正常
console.log(parseInt(0.000001))   // 0

// bug
console.log(parseInt(0.0000001))  // 1

原因：
parseInt()函数的第一个参数默认字符串，如果不是字符串可能在处理时会进行转换。像这种：
console.log(String(0.0000001))  // '1e-7'
console.log(parseInt('1e-7'))  // 1
console.log(0.0000001)        // 1e-7
console.log(parseInt(1e-7))   // 1
console.log(parseInt('1e-7')) // 1

解决：
// 1e-7 
console.log(Math.floor(0.0000001))  // 0
```

#### git提交信息规范

```
git message 提交信息类型
feat: 一项新需求、新功能
fix: 一个错误（bug）修复
docs: 仅文档（readme）更改
style: 不影响代码逻辑的更改（空白，格式，缺少分号，style，css修改等）
refactor: 既不修正错误也不增加功能的代码更改（重构）
perf: 改进性能的代码更改
test: 添加缺失或更正现有测试
build: 影响构建系统或外部依赖项的更改（webpack，vite，npm等）
ci: 对CI配置文件和脚本的更改
chore: 更改构建过程或辅助工具和库（babel，lodash）

git commit -m "fix: change main.js"
```

#### git更新版本windows

1. 官网下载最新版本，安装
2. 执行命令

```
git update-git-for-windows
```

next:

- H5页面与原生交互-JsBridge

  https://tiven.cn/p/5790753b/
- NodeJs深入浅出 · require原理

  https://tiven.cn/p/8095c6b7/
- Blob与File、DataURL、canvas的相互转换

  https://tiven.cn/p/289c2beb/
- preload与prefetch的使用和区别

  https://tiven.cn/p/412392ba/
- JavaScript中的内存泄漏

  https://tiven.cn/p/cbdc36eb/
- pm2:

  https://tiven.cn/p/999defa6/

  全栈demo学习：

https://github.com/2662419405/AllDemo

RNdemo:

https://github.com/2662419405/RN_APP


验证测试 github
