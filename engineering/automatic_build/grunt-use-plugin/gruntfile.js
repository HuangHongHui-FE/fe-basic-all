module.exports = grunt => {
  grunt.initConfig({  // 添加任务的配置选项
    clean: {
      temp: 'temp/**'
    }
  })
  
  grunt.loadNpmTasks('grunt-contrib-clean')
}