const { src, dest } = require('gulp');  // 
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = () => {
  return src('src/*.css')  // 创建文件读取流
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))  // 指定重命名的拓展名
    .pipe(dest('dist'))  // 创建写入流
}
