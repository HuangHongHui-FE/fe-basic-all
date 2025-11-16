// 基础概念

// 同步钩子
const { SyncHook, SyncBailHook, SyncWaterfallHook, SyncLoopHook } = require("tapable");

// 01
// const syncHK = new SyncHook(["name", "age"]);

// // 生产商品，注册事件
// syncHK.tap("plugin1", (name, age) => {
//   console.log("🚀 plugin1 ~ name, age:", name, age);
// });

// syncHK.tap("plugin2", (name, age) => {
//   console.log("🚀 plugin2 ~ name, age:", name, age);
// });

// // 调用 - 消费
// syncHK.call("zf", 18);

// 🚀 plugin1 ~ name, age: zf 18
// 🚀 plugin1 ~ name, age: zf 18

// 02-中断执行
// const syncBailHK = new SyncBailHook(["name", "age"]);

// // 生产商品，注册事件
// syncBailHK.tap("plugin1", (name, age) => {
//   console.log("🚀 plugin1 ~ name, age:", name, age);
// });

// syncBailHK.tap("plugin2", (name, age) => {
//   console.log("🚀 plugin2 ~ name, age:", name, age);

//   // 中断执行
//   return "停止执行";
// });

// syncBailHK.tap("plugin3", (name, age) => {
//   console.log("🚀 plugin3 ~ name, age:", name, age);
// });

// // 调用 - 消费
// syncBailHK.call("zf", 18);

// 03-向下传递
// const syncWaterfallHK = new SyncWaterfallHook(["name", "age"]);

// // 生产商品，注册事件
// syncWaterfallHK.tap("plugin1", (name) => {
//   console.log("🚀 plugin1 ~ name, age:", name);
//   return name + "111";
// });

// syncWaterfallHK.tap("plugin2", (name) => {
//   console.log("🚀 plugin2 ~ name, age:", name);
// });

// // 调用 - 消费
// syncWaterfallHK.call("zf");

// 04-循环执行
const syncLoopHK = new SyncLoopHook(["age"]);
let count = 0;
syncLoopHK.tap("plugin1", (age) => {
  console.log("🚀 plugin1 ~ age:", count);
  if (count < 3) {
    count++;
    // 有返回值，一直循环执行
    return age + 1;
  }
  return;
});
syncLoopHK.call(1);
console.log("🚀 ~ count:", count);
