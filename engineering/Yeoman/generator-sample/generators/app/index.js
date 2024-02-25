// generator的核心入口
// 需要导出一个继承自yoman generator的类型
// yoman generator在工作的时候会自动调用我们在此类型中定义的一些生命周期方法
// 在这些生命周期方法中，可以调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        // 询问用户环节会调用
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name?',
                default: this.appname  // 项目生成目录名称
            }
        ]).then(answers => {
            // answers => {name: '用户输入的值'}
            this.answers = answers
        })
    }



    writing() {
        // yoman自动生成文件阶段调用此方法
        // 往项目中写入文件
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )


        // 2. 通过模板方式写入文件到目标目录
        // 模板文件路径
        // const tmpl = this.templatePath('foo.txt');
        // // 输出目标路径
        // const output = this.destinationPath('foo.txt');
        // // 模板数据上下文
        // const context = { title: 'Hello zce~', success: false }

        // this.fs.copyTpl(tmpl, output, context);  // 这三个参数



        // 3. 用户输入
        // 模板文件路径
        const tmpl = this.templatePath('foo.txt');
        // 输出目标路径
        const output = this.destinationPath('foo.txt');
        // 模板数据上下文
        const context = this.answers;

        this.fs.copyTpl(tmpl, output, context);  // 这三个参数
    }
} 