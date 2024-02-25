module.exports = grunt => {
  // 多目标模式，可以让任务根据配置形成多个子任务

  // grunt.initConfig({
  //   build: {
  //     foo: 100,
  //     bar: '456'
  //   }
  // })

  // grunt.registerMultiTask('build', function () {
  //   console.log(`task: build, target: ${this.target}, data: ${this.data}`)  // 拿到执行的任务的信息
  // })

  grunt.initConfig({
    build: {
      options: {  // 任务的配置选项，不会作为任务
        msg: 'task options'
      },
      foo: {
        options: {
          msg: 'foo target options'
        }
      },
      bar: '456'
    }
  })

  grunt.registerMultiTask('build', function () {
    console.log(this.options())
  })
}
