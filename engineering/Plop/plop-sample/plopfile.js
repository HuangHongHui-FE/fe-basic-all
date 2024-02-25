// Plop 入口文件，需要导出一个函数
// 此函数接收一个 plop 对象，用于创建生成器任务

module.exports = plop => {
  plop.setGenerator('component', {  // 两个参数，生成器名字，配置
    description: 'create a component',
    prompts: [   // 交互
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    actions: [
      {
        type: 'add', // 代表添加文件
        path: 'src/components/{{name}}/{{name}}.js',  // 可以{{}}来进行插值
        templateFile: 'plop-templates/component.hbs'  // 模板文件
      },
      {
        type: 'add', // 代表添加文件
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/component.css.hbs'
      },
      {
        type: 'add', // 代表添加文件
        path: 'src/components/{{name}}/{{name}}.test.js',
        templateFile: 'plop-templates/component.test.hbs'
      }
    ]
  })
}