module.exports = {
  mode: "development", // 开发模式（不压缩代码）
  entry: "./src/client.js", // 客户端入口文件
  output: {
    filename: "dist.js", // 打包后文件名
    path: `${__dirname}/public`, // 输出到 public 目录（koa-static 托管）
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配 js/jsx 文件
        exclude: /node_modules/, // 排除 node_modules
        use: "babel-loader", // 用 babel-loader 编译
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // 自动解析 .js/.jsx 后缀
  },
};
