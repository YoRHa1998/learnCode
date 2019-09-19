const path = require('path')
module.exports = {
  // 注意！！！！！是exports!!!!!mmp，浪费老子这么长时间
  entry: path.join(__dirname,'/src/main.js'),
  // path.join()用来拼接两个地址的，__dirname表示当前文件夹的绝对路径
  output:{
    path:path.join(__dirname,'/dist'),
    filename:"bundle.js"
  }
}