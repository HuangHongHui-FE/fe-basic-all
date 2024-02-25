module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],  // 继承react中的配置就可以打包reatc项目
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2

    },
    "plugins": [
        'react'
    ]
}
