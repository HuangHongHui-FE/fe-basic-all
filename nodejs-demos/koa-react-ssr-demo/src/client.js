import React from "react";
import { hydrateRoot } from "react-dom/client"; // React 18 激活 API
import App from "./App.jsx";

// 服务端渲染时会注入 window.__INITIAL_PROPS__（传递给组件的初始 props）
const initialProps = window.__INITIAL_PROPS__;

// 激活 #root 元素（与服务端 HTML 中的 id 一致）
hydrateRoot(document.getElementById("root"), <App {...initialProps} />);
