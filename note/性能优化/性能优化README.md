https://www.yuque.com/books/share/bee30889-85b8-442e-be5c-6c683f783e2f?#（密码：xa3i） 《前端性能优化》

## RAIL模型

响应（Response）：响应用户，100ms以内

动画（Animation）:每一帧以16.6ms的时间进行渲染

空闲（idle）: 执行js主线程的时候应划分50ms一块，及时释放线程来交互

加载（load）: 1s内完成网站加载并进行交互



#### 指标：

- FCP:首次内容绘制。首次绘制来自dom内容的时间，内容必须是文本，图片（包括背景图），非白色的canvas或SVG，也包括正在加载中的web字体的文本
- LCP最大内容绘制，可视区域中最大的内容呈现到屏幕的时间
- FID首次输入延迟，用户第一次与页面交互到浏览器实际能够响应该交互的时间，一般在FCP与TTI之间
- TTI：网页完全达到可交互状态的时间点，是在最后一个长任务（50ms）完成的时间
- CLS: 累计布局偏移，cls会测量在页面整个生命周期中发生的每个意外的布局移位分数的总和
- TBT：总阻塞时间 是测量加载响应度的重要实验室指标，因为该项指标有助于量化在页面交互性变为可靠前，不可交互程度的严重性，较低的TBT 有助于确保页面的可用性。

#### 性能测量方法

- #### 性能测试工具：Lighthouse

https://github.com/GoogleChrome/lighthouse#using-lighthouse-in-chrome-devtools

- #### 使用web-vitals库



#### coverage面板检测代码覆盖率

调试工具里搜索“覆盖”or ... => 更多工具-> 覆盖率

#### memory面板

```
ctrl + shift + p  // 进行搜索，fps,内存
```

- #### 使用浏览器插件Web Vitals

#### 查看chrome浏览器帧率

```
打开控制面板        shift+ctrl+p    搜索fps
```

### 请求响应优化

- 减少dns查找
- 重用tcp连接
- 减少http重定向
- 压缩传输的资源
- 使用缓存
- 使用CDN
- 删除没必要请求的资源
- 客户端使用缓存
- ‘内容传输前压缩
- 并行处理请求与响应
- 服务端渲染，预渲染

#### 







性能优化：

1. nodejs开启GZIP,compossion
2. 用对应的图片大小，不要渲染的是50X*50， 而图片大小是500*X500
3. js文件，没用到的去除，尽量放在body底部。采用CDN加速。
4. webpack的mode: production
5. 代码层面的优化，及时清除定时器，dom的一次性添加，动画的GUP渲染

![img](https://static.vue-js.com/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png)