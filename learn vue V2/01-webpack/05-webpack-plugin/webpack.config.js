const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 注意！！！！！是exports!!!!!mmp，浪费老子这么长时间
  entry: path.join(__dirname,'/src/main.js'),
  // path.join()用来拼接两个地址的，__dirname表示当前文件夹的绝对路径
  output:{
    path:path.join(__dirname,'/dist'),
    filename:"bundle.js",
    // publicPath:"dist/" //当图片使用file-loader加载时，图片会被打包到dist文件夹下，但是我们的index.html在src
                      // 文件夹下，所以需要使用publicPath来对图片的路径加上一个默认值，不过在真实开发中，一般
                      // 不会这么用
  },
  module:{
    rules:[  //用于配置各种loader
      {
        test:/\.css$/, //这里是一个正则表达式
        use:['style-loader','css-loader']  //注意：这里webpack是从右向左加载的
      },
      // {
      //   test:/\.less$/,
      //   use:[
      //     {loader:"style-loader"},
      //     {loader:"css-loader"},
      //     {loader:"less-loader"}
      //   ]
      // }   用于配置less-loader
      {
        test:/(\.jpg|png|gif|jpeg)$/,  //用于配置图片的loader
        use:[
          {
            loader:"url-loader",
            options:{
              limit:8192,  //这里是图片大小的限制，如果低于这个数值，webpack会将图片转换为base64位编码，如果
                          // 超过这个数值，则会调用 file-loader 将图片直接打包进dist，这个数值为图片大小*1024
              name:'img/[name].[hash:8].[ext]' //这里name属性的作用是给图片统一设置名字，前面的img/表示打包到
                                              // img这个文件夹下，[name]表示图片原本的名字，[hash:8]表示8位哈
                                              // 希值，[ext]表示图片的格式
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',//babel-loader的功能是将es6代码转成es5代码
          options: {
            presets: ['es2015']  //这里原来是@babel-preset-env，不过我们这里只需要简单配置一下，就使用es2015这                      //个包了
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{  
    alias:{
      "vue$":"vue/dist/vue.esm.js"  //配置vue的使用路径
    }
  },
  plugins:[
    new webpack.BannerPlugin("最终版权归YoRHa所有"),
    new HtmlWebpackPlugin({
      template:'./index.html'  //这里是新的文件按照什么模板进行生成,我们设置为当前目录下的index文件
    })
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
}