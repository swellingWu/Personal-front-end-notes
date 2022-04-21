// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

//! 错误中间件
app.get('/',(req, res) => {
  throw new Error('Not found Home page ==> ')
  res.send('Home page.')
})

//=> 定义错误级别中间件，避免程序的崩溃
app.use((err,req, res, next) => {
  console.log("发生了错误 ==> " + err.message)
  res.send('Error: '+err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
