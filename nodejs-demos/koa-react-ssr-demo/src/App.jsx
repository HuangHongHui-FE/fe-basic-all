import React from "react";

// 接收服务端传递的 props（title）
const App = ({ title }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{title}</h1>
      <p>服务端渲染的计数器：{count}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: "8px 16px", fontSize: "16px" }}>
        点击+1（客户端交互）
      </button>
    </div>
  );
};

export default App;
