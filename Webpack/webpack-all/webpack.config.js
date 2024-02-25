const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const WebpackCleanConsolePlugin = require("webpack-clean-console-plugin");

const mode = process.env.NODE_ENV
const isDev = mode === 'development'
console.log("isDev---", isDev);


// 去除打包后的bundle.js的
// /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
// 前面的/***/

class MyPlugin {
  apply(compiler) {
    // console.log('MyPlugin 启动')
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // console.log(name)
        // console.log(compilation.assets[name].source())
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const withoutComments = contents.replace(/\/\*\*+\*\//g, '')
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    })
  }
}



module.exports = {
  entry: './src/index.js',

  // 1-2
  // 这个属性有三种取值，分别是 production、development 和 none。
  // 1. 生产模式下，Webpack 会自动优化打包结果；
  // 2. 开发模式下，Webpack 会自动优化打包速度，添加一些调试过程中的辅助；
  // 3. None 模式下，Webpack 就是运行最原始的打包，不做任何额外处理；
  mode: 'development',

  // 1-1
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // assetModuleFilename: "img/[name].[hash:4][ext]"
    // filename: isDev ? `[name].js` : `[name].[contenthash:5].js`,
    chunkFilename: isDev ? `[name].js` : `[name].[contenthash:5].js`,
  },

  // webpack-source-map
  // devtool: 'source-map',
  devtool: 'eval',

  devServer: {
    hot: true,
    // hotOnly: true // 只使用 HMR，不会 fallback 到 live reloading
    contentBase: './public',
    proxy: {
      '/api': {
        // http://localhost:8080/api/users -> https://api.github.com/api/users
        target: 'https://api.github.com',
        // http://localhost:8080/api/users -> https://api.github.com/users
        pathRewrite: {
          '^/api': ''
        },
        // 不能使用 localhost:8080 作为请求 GitHub 的主机名
        changeOrigin: true
      }
    },


    // hot: true,
    // hotOnly: true,
    // port: 4000,
    // open: false,
    // compress: true,
    // historyApiFallback: true
  },

  resolve: {
    extensions: [".js", ".json", '.ts', '.jsx', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },


  // 1-3 
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,  // MiniCssExtractPlugin
          'css-loader',
          'postcss-loader'
        ],
        sideEffects: true  // 指定文件不要tree shaking
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },

      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:4][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      },

      // {
      //   test: /\.(png|svg|gif|jpe?g)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'img/[name].[hash:6].[ext]',
      //         // outputPath: 'img'
      //       }
      //     }
      //   ]
      // },

      {
        test: /.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:6].[ext]',
              limit: 25 * 1024
            }
          }
        ]
      },

      // 字体相关
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3][ext]'
        }
      },


      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']

            // tree shaking相关
            presets: [
              // 如果 Babel 加载模块时已经转换了 ESM，则会导致 Tree Shaking 失效， 
              // ['@babel/preset-env', { modules: 'commonjs' }]
              // ['@babel/preset-env', { modules: false }]  //设置false,保证tree-shaking生效
              // 也可以使用默认配置，也就是 auto，这样 babel-loader 会自动关闭 ESM 转换
              ['@babel/preset-env', { modules: 'auto' }]
            ]
          }
        },
        exclude: [path.join(__dirname, '/node_modules')],
      },

      // {
      //   test: /.html$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       // FileList: ['img:src', 'a:href']
      //     }
      //   }
      // },

      {
        test: /.md$/,
        use: [
          'html-loader',
          './markdown-loader'
        ]
      }
    ]
  },

  plugins: [
    // 打包的进度条
    new webpack.ProgressPlugin(),

    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      meta: {
        viewport: 'width=device-width'
      },
      template: './index.html'
    }),

    new HtmlWebpackPlugin({
      filename: './about.html'
    }),

    // 复制文件夹内容到打包的文件夹
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve('./public'), to: './' }  // to这是相对于dist目录的
      ]
      // patterns: [
      //   {
      //     from: 'public',
      //     globOptions: {
      //       ignore: ['**/index.html']
      //     }
      //   }
      // ]
    }),

    new MyPlugin(),

    // HMR
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      API_BASE_URL: JSON.stringify('https://api.example.com')
    }),



    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].bundle.css'  // 自定义打包的hash
    }),

    // 清除console.log
    new WebpackCleanConsolePlugin({ include: ["log", "info"] })
  ],


  // tree shaking配置
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,  // 标记枯树叶，枯树枝
    // 尽可能合并每一个模块到一个函数中
    concatenateModules: true,
    // 压缩输出结果
    minimize: true,  // 摇掉枯树叶枯树枝


    // 多个打包入口与出口的配置
    // splitChunks: {
    //   // 自动提取所有公共模块到单独 bundle
    //   chunks: 'all'
    // },

    // MiniCssExtractPlugin
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }
}
