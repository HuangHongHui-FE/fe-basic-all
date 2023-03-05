const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
const fs = require("fs");


// @babel/parser : 将 js 代码 ------->>>  AST 抽象语法树；
// @babel/traverse 对 AST 节点进行递归遍历；
// @babel/types 对具体的 AST 节点进行进行修改；
// @babel/generator :  AST 抽象语法树 ------->>> 新的 js 代码；


function compile(code) {
    // 1.parse
    const ast = parser.parse(code);

    // console.log('ast---', ast);

    // 2,traverse
    const visitor = {
        CallExpression(path) {
            console.log('path---', path.node.callee);
            const { callee } = path.node;
            const isConsoleLog =
                types.isMemberExpression(callee) &&
                callee.object.name === "console" &&
                callee.property.name === "log";
            if (isConsoleLog) {
                const funcPath = path.findParent(p => {
                    return p.isFunctionDeclaration();
                });
                const funcName = funcPath.node.id.name;
                fs.writeFileSync("./funcPath.json", JSON.stringify(funcPath.node), err => {
                    if (err) throw err;
                    console.log("写入成功");
                });
                path.node.arguments.unshift(types.stringLiteral(funcName));
            }
        }
    };
    traverse.default(ast, visitor);

    // 3. generator
    return generator.default(ast, {}, code);
}

const code = `
function getData() {
  console.log('data')
}
`;
console.log(compile(code).code);