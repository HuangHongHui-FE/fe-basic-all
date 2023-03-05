// esprima、estraverse 和 escodegen 模块是操作 AST 的三个重要模块，也是实现 babel 的核心依赖

// esprima 将 JS 转换成 AST
// const esprima = require("esprima");
// let code = "function fn() {}";

// // 生成语法树
// let tree = esprima.parseScript(code);
// console.log(tree);

// Script {
//   type: 'Program',
//   body:
//    [ FunctionDeclaration {
//        type: 'FunctionDeclaration',
//        id: [Identifier],
//        params: [],
//        body: [BlockStatement],
//        generator: false,
//        expression: false,
//        async: false } ],
//   sourceType: 'script' }



// 2、estraverse 遍历和修改 AST

// const esprima = require("esprima");
// const estraverse = require("estraverse");

// let code = "function fn() {}";

// // 遍历语法树
// estraverse.traverse(esprima.parseScript(code), {
//     enter(node) {
//         console.log("enter", node.type);
//     },
//     leave() {
//         console.log("leave", node.type);
//     }
// });

// enter Program
// enter FunctionDeclaration
// enter Identifier
// leave Identifier
// enter BlockStatement
// leave BlockStatement
// leave FunctionDeclaration
// leave Program



// 3、escodegen 将 AST 转换成 JS
const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");

let code = "function fn() {}";
// 生成语法树
let tree = esprima.parseScript(code);

// 遍历语法树
estraverse.traverse(tree, {
    enter(node) {
        // 修改函数名
        if (node.type === "FunctionDeclaration") {
            node.id.name = "ast";
        }
    }
});

// 编译语法树
let result = escodegen.generate(tree);

console.log(result);

// function ast() {
// }