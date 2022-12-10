// 1. 
let object = { a: 0 };
function fun(obj) {
    obj.a = 1;
    obj = { a: 2 };
    obj.b = 2;
}
fun(object);
console.log(object);  // { a: 1 }


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