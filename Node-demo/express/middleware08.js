// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

//! 自定义中间件 => 解析表单数据
app.use((req, res,next) => {
  //' 定义具体业务
  //=> 定义 str 存储请求体数据
  let str = ''
  //=> 监听req 的 data 事件
  req.on('data',(chunk) => {
    str += chunk
  })
  //=> 监听 req 的 data 事件
  req.on('end',() => {//=> 所有数据发送完毕时必须被调用一次
    //- str 中存放的三完整的请求体数据
    console.log(str)
  })
})

app.post('/user',(req, res) => {
  res.send('Userover ==> ')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})