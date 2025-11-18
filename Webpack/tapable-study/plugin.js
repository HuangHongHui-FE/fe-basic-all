// 1、一个js的命名函数
// 2、在插件函数里实现一个apply方法
// 3、制定一个绑定到webpack自身的事件钩子
// 4、处理webpack内部实例的指定数据
// 5、功能个完成后调用webpack提供的回调

const HtmlWebpackPlugin = require("html-webpack-plugin");

const pluginName = "MyPlugin";

class MyPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      console.log("MyPlugin: done");
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(pluginName, (data, cb) => {
        console.log("MyPlugin: beforeEmit");
        data.html += "++++++++++++++++========";
        cb(null, data);
      });
    });
    // compiler.hooks.done.tap('MyPlugin', (stats) => {
    //     console.log('MyPlugin: done');
    // });
  }
}

module.exports = MyPlugin;
