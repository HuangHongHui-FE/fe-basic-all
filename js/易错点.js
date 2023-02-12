// 1. 
// let object = { a: 0 };
// function fun(obj) {
//     obj.a = 1;
//     obj = { a: 2 };
//     obj.b = 2;
// }
// fun(object);
// console.log(object);  // { a: 1 }


// 2. 
// NaN == NaN  // false
// null == null  // true        
// null == undefined   // true
// null == 0           // false
// null == false       // false
// undefined == 0      // false
// undefined == false  // false
// 0 == '0'            // true
// NaN === NaN         // false
// null === undefined  // false
// 0 === '0'           // false



// nextTack
// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//     EventEmitter.call(this);

//     // 使用nextTick，可以等待下面的同步代码，myEmitter.on('event',。。)，执行完后，再触发event事件
//     //如果不使用nextTick，直接触发event事件，myEmitter.on('event',。。)可能都没有执行，就不会对event事件处理
//     process.nextTick(function() {
//         this.emit('event');
//     }.bind(this));
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// //对event事件的处理方法
// myEmitter.on('event', function() {
//     console.log('an event occurred!');
// });




function asyncReal(data, callback) {
    process.nextTick(function() {
         callback(data === 'foo');
    });
}

asyncReal('bar', function(result) {
    console.log(result);
})

console.log("#############");