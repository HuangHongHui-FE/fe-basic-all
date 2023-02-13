// 不会
// var counter = 3;
// function incCounter() {
//     counter++;
// }
// module.exports = {
//     counter: counter,
//     incCounter: incCounter,
// };


// 会
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
    // 取值器函数
  get counter() {
    return counter
  },
  incCounter: incCounter,
};