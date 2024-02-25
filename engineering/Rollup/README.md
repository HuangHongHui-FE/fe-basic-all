## Rollup

仅仅用来打包， 默认只支持ESmoudle

#### 基本使用

getting-started

默认tree-sharking

```js
yarn add rollup --dev
yarn rollup

yarn rollup ./src/index.js --format life  // 自调用的形式进行打包
yarn rollup ./src/index.js --format life --file dist/bundle.js
```

#### 配置文件

```
// 新建rollup.config.js
yarn rollup --config
yarn rollup --config rollup.config.js  // 指定打包时用的配置文件
```

#### 使用插件

```
rollup-plugin-json  // 可以在代码中通过import的方式导入json文件
yarn add rollup-plugin-json --dev

yarn rollup --config
```

#### 加载npm模块

```
yarn add rollup-plugin-node-resolve --dev  // 在代码中通过模块名称来导入模块
```

#### 加载common.js

```
yarn add rollup-plugin-commonjs
```

#### 代码拆分

```
// 修改配置文件
dir
format
```

#### 多入口打包

公共的部分会自动提取到单文件里

```
yarn rollup --config
// 注意index.html里面的引用配置
sever dist
```

## Parcel  

```
// 生产打包
yarn parcel build src/index.html
```

