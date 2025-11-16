// 异步并行钩子

const { AsyncParallelHook, AsyncParallelBailHook } = require("tapable");

// 01-AsyncParallelHook - 异步并行
// const queue1 = new AsyncParallelHook(["name"]);
// console.time("const1");
// // 注册商品
// queue1.tapAsync("1", (name, cb) => {
//   setTimeout(() => {
//     console.log("🚀 ~ name:", name, 1);

//     cb("err1", "1");
//   }, 2000);
// });

// queue1.tapAsync("2", (name, cb) => {
//   setTimeout(() => {
//     console.log("🚀 ~ name:", name, 2);
//     cb("err2", "2");
//   }, 1000);
// });

// // 注意看输出的顺序
// queue1.callAsync("tapAsync", (err, res) => {
//   console.log("🚀 ~ err, res:", err, res);
//   console.timeEnd("const1");
// });

// 02-AsyncParallelHook - 异步并行

// 谁先执行完谁就先输出结果
// const queue2 = new AsyncParallelHook(["name"]);

// 全部执行完再输出结果
const queue2 = new AsyncParallelBailHook(["name"]);

console.time("const2");
queue2.tapPromise("1", (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("🚀 ~ name:", name, 1);
      resolve("1");
      //   reject("err1");
    }, 2000);
  });
});

queue2.tapPromise("2", (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("🚀 ~ name:", name, 2);
      // resolve("2");
      reject("err2");
    }, 1000);
  });
});

queue2
  .promise("tapPromise")
  .then((res) => {
    console.log("🚀 ~ res:", res);
    console.timeEnd("const2");
  })
  .catch((err) => {
    console.log("🚀 ~ err:", err);
    console.timeEnd("const2");
  });
