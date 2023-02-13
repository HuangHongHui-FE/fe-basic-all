// 1. 
console.log("!==-------------------------------");
let obj = { name: "zhang", age: 20 };
console.log(obj.name !== undefined)
console.log(obj.sex !== undefined)
console.log(obj.toString !== undefined);  // true 表示对象继承toString属性

// 2. 
console.log("in-------------------------------");
console.log('name' in obj)  // true 表示有这个属性
console.log('sex' in obj)  // fasle 表示无 sex 这个属性
console.log('toString' in obj) // true 表示对象继承toString属性

// 3. hasOwnProperty() 方法 是检测对象是都某一属性名，返回布尔值，这里只能检测对象的私有属性，继承属性检测不出来
console.log('hasOwnProperty-------------------------');
let obj2 = { name: "zhang", age: 20 };
console.log(obj.hasOwnProperty('name'));  // // true 表示有这个属性

obj.hasOwnProperty('sex')// fasle 表示无 sex 这个属性
obj.hasOwnProperty('toString')// fasle 表示没有继承这个属性


// 4，hasPubProperty：用来检查属性是否为对象的公有属性
console.log('hasPubProperty--------------------------');
function foo() {
    this.name = 'foo'
    this.sayHi = function () {
        console.log('Say Hi');
    }
}

foo.prototype.sayGoodBy = function () {
    console.log('Say Good By');
}

let myPro = new foo();


console.log(myPro.hasOwnProperty('sayHi')) // true
console.log(myPro.hasOwnProperty('sayGoodBy')) // false


// 5. instanceof------即可检测是否是当前实例的类，还可以检查一个实例是否属于这个类

console.log('instance-------------------');
var arr = new Array;
console.log(arr instanceof Array);  // true =>是为true，不是为false
var arr = []
console.log(arr instanceof Array);  // true =>是为true，不是为false


// 6，isPrototypeOf（）：检测一个对象是否是另一个对象的原型。或者说一个对象是否被包含在另一个对象的原型链中
console.log('isPrototypeOf---------------------------------');
var p = { x: 1 };  //定义一个原型对象
var o = Object.create(p);  //使用这个原型创建一个对象
console.log(p.isPrototypeOf(o));  //=>true：o继承p
console.log(Object.prototype.isPrototypeOf(p));  //=> true p继承自Object.prototype