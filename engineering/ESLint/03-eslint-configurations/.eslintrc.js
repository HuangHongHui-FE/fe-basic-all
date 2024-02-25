module.exports = {
  env: {  // 根据环境判断是不是可以用那些api
    browser: false,
    es6: false
  },
  extends: [  // 继承了创建eslint时的标准的风格，可以在node_modules里面找到对应文件
    'standard'
  ],
  parserOptions: {  // 设置语法解析器的相关配置， 只是语法检测
    ecmaVersion: 2015
  },
  rules: {  // 配置校验规则的开启与关闭
    'no-alert': "error"
  },
  globals: {  // 可以用的全局变量
    "jQuery": "readonly"
  }
}
