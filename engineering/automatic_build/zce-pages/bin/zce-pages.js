#!/usr/bin/env node

// 相当于提前新增了--cwd . --gulpfile参数
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))

require('gulp/bin/gulp')
