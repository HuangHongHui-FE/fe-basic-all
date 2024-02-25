const { src, dest, parallel, series, watch } = require('gulp')

const del = require('del')
const browserSync = require('browser-sync')


// const sass = require('gulp-sass')
// const babel = require('gulp-babel')
// const swig = require('gulp-swig')
// const imagemin = require('gulp-iamgemin')


const loadPlugins = require('gulp-load-plugins')  // 自动加载插件

const plugins = loadPlugins()
const bs = browserSync.create()

const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}

const clean = () => {
  return del(['dist', 'temp'])
}

const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })  // 转换时候的基准路径， src后面的路径就会保留
    .pipe(plugins.sass({ outputStyle: 'expanded' }))  // sass文件处理
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))  // 编译完成后以流的方式推送到浏览器
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
    .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))  // 添加预设
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}

const page = () => {
  return src('src/*.html', { base: 'src' })
    .pipe(plugins.swig({ data, defaults: { cache: false } })) // 防止模板缓存导致页面不能及时更新
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}

const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const extra = () => {
  return src('public/**', { base: 'public' })
    .pipe(dest('dist'))
}

const serve = () => {
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
  // watch('src/assets/images/**', image)  // 开发的时候对这些编译没有意义
  // watch('src/assets/fonts/**', font)
  // watch('public/**', extra)
  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)  // 这三个编译后调用bs的reload

  bs.init({
    notify: false,  // 关闭弹出的提示
    port: 2080,
    // open: false,
    // files: 'dist/**',  // 启动后监听的文件，改变就重新执行
    server: {
      baseDir: ['temp', 'src', 'public'],  // 网站的根目录，请求过来，先去第一个目录下去找，再去往后找
      routes: {
        '/node_modules': 'node_modules'  // 相对网站的根目录的路径
      }
    }
  })
}


const useref = () => {
  return src('temp/*.html', { base: 'temp' })
    .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
    // 打包特定注释的过程中产生了额外的文件，注意清除
    // html js css
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      collapseWhitespace: true,  // 折叠掉空白字符
      minifyCSS: true,
      minifyJS: true
    })))
    .pipe(dest('dist'))
}

const compile = parallel(style, script, page);  // 多个任务同时执行

// 上线之前执行的任务
const build =  series(  // clean与parallel是同步的
  clean,
  parallel(
    series(compile, useref),
    image,
    font,
    extra
  )
)

const develop = series(compile, serve)  

// 最终导出的让开发人员用的
module.exports = {
  clean,
  build,
  develop
}
