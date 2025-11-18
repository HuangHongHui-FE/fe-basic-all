// 异步串行钩子

const { AsyncSeriesHook, AsyncSeriesBailHook, AsyncSeriesWaterfallHook } = require("tapable");

// 1 - AsyncSeriesHook
// let queue1 = new AsyncSeriesHook(["name"]);

// console.time("cost1");

// queue1.tapAsync("1", function (name, callback) {
//   setTimeout(() => {
//     console.log(name, 1);
//     callback(null, 1);
//   }, 3000);
// });

// queue1.tapAsync("2", function (name, callback) {
//   setTimeout(() => {
//     console.log(name, 2);
//     callback(null, 2);
//   }, 2000);
// });

// queue1.tapAsync("3", function (name, callback) {
//   setTimeout(() => {
//     console.log(name, 3);
//     callback(null, 3);
//   }, 1000);
// });

// // 触发
// queue1.callAsync("zf", function () {
//   console.log("over");
//   console.timeEnd("cost1");
// });

// 2-AsyncSeriesHook

// let queue2 = new AsyncSeriesHook(["name"]);

// console.time("cost2");

// queue2.tapPromise("1", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 1);
//       resolve("1");
//     }, 3000);
//   });
// });

// queue2.tapPromise("2", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 2);
//       resolve("2");
//     }, 2000);
//   });
// });

// queue2.tapPromise("3", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 3);
//       resolve("3");
//     }, 1000);
//   });
// });

// queue2
//   .promise("zf")
//   .then(() => {
//     console.log("over");
//     console.timeEnd("cost2");
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err:", err);
//   });

// 3 - AsyncSeriesBailHook   有返回值直接返回结果

// let queue3 = new AsyncSeriesBailHook(["name"]);
// console.time("const3");
// queue3.tapAsync("1", (name, cb) => {
//   setTimeout(() => {
//     console.log(name, 1);
//     cb();
//   }, 3000);
// });

// queue3.tapAsync("2", (name, cb) => {
//   setTimeout(() => {
//     console.log(name, 2);
//     cb();
//   }, 2000);
// });

// queue3.tapAsync("1", (name, cb) => {
//   setTimeout(() => {
//     console.log(name, 1);
//     cb(null, "1");
//   }, 2000);
// });

// queue3.callAsync("zf", function (err, res) {
//   console.log("🚀 ~ res:", res);
//   console.log("over");
//   console.timeEnd("const3");
// });

// 4 - AsyncSeriesBailHook
// let queue4 = new AsyncSeriesBailHook(["name"]);

// console.time("cost4");

// queue4.tapPromise("1", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 1);
//       resolve("1");
//     }, 3000);
//   });
// });

// queue4.tapPromise("2", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 2);
//       resolve("2");
//     }, 2000);
//   });
// });

// queue4.tapPromise("3", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 3);
//       resolve("3");
//     }, 1000);
//   });
// });

// queue4
//   .promise("zf")
//   .then(() => {
//     console.log("over");
//     console.timeEnd("cost4");
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err:", err);
//   });

// 5 - AsyncSeriesWaterfallHook  有返回值，串行执行，返回结果

// let queue5 = new AsyncSeriesWaterfallHook(["name"]);

// console.time("cost5");

// queue5.tapPromise("1", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 1);
//       resolve("1");
//     });
//   });
// });

// queue5.tapPromise("2", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 2);
//       resolve("2");
//     });
//   });
// });

// queue5.tapPromise("3", (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("🚀 ~ name:", name, 3);
//       resolve("3");
//     });
//   });
// });

// queue5
//   .promise("zf")
//   .then(() => {
//     console.log("over");
//     console.timeEnd("cost5");
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err:", err);
//   });

// 6 - AsyncSeriesWaterfallHook  无返回值，串行执行，返回结果

let queue6 = new AsyncSeriesWaterfallHook(["name"]);

console.time("cost6");

queue6.tapAsync("1", (name, cb) => {
  setTimeout(() => {
    console.log("🚀 ~ name:", name, 1);
    cb(null, 1);
  }, 3000);
});

queue6.tapAsync("2", (name, cb) => {
  setTimeout(() => {
    // 拿到上一个返回的值
    console.log("🚀 ~ name:", name, 2);
    cb(null, 2);
  }, 2000);
});

queue6.tapAsync("3", (name, cb) => {
  setTimeout(() => {
    console.log("🚀 ~ name:", name, 3);
    cb(null, 3);
  }, 1000);
});

queue6.callAsync("zf", function (err, res) {
  console.log("🚀 ~ res:", res);
  console.log("over");
  console.timeEnd("cost6");
});
