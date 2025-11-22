import Koa from "koa";
import staticServe from "koa-static";
import React from "react";
import { renderToString } from "react-dom/server"; // React 服务端渲染 API
import App from "./App.jsx";

const app = new Koa();
const PORT = 3000;

// 1. 托管静态资源（public 目录，用于加载 client-bundle.js）
app.use(staticServe("./public"));

app.use(async (ctx) => {
  if (ctx.method === "GET" && ctx.path === "/") {
    // ① 定义传递给 React 组件的初始 props
    const initialProps = {
      title: "Koa2 + React SSR 极简 Demo",
    };

    // ② 服务端渲染 React 组件为 HTML 字符串
    const appHtml = renderToString(<App {...initialProps} />);

    // ③ 拼接完整 HTML（注入 SSR 结果 + 客户端激活脚本 + 初始 props）
    const html = `
      <!DOCTYPE html>
      <html lang="zh-CN">
        <head>
          <meta charset="UTF-8">
          <title>${initialProps.title}</title>
        </head>
        <body>
          <!-- 服务端渲染的 React 组件 HTML -->
          <div id="root">${appHtml}</div>
          
          <!-- 注入初始 props（客户端激活时使用） -->
          <script>
            window.__INITIAL_PROPS__ = ${JSON.stringify(initialProps)}
          </script>
          
          <!-- 客户端激活脚本（webpack 打包产物） -->
          <script src="/dist.js"></script>
        </body>
      </html>
    `;

    // ④ 返回 HTML 给客户端
    ctx.body = html;
    ctx.type = "text/html";
  }
});

// 启动服务
app.listen(PORT, () => {
  console.log(`SSR 服务启动成功：http://localhost:${PORT}`);
});
