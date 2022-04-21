// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

//! 除了错误级别的中间件 其他的中间件必须在路由之前进行配置

app.use(express.json())//=> 解析 JSON 格式的数据
//- 通过 express.urlencoded() 来解析表单 url-encoded 中的数据
app.use(express.urlencoded({extended: false}));

app.post('/user', (req, res) => {
  console.log(req.body)//=> 不配置解析表单数据的中间件时，则 req.boby 默认等于 underfined
  res.send('Userover ==> ...')
})

app.post('/book', (req, res) => {
  console.log(req.body)//=> 不配置解析表单数据的中间件时，则 req.boby 默认等于 underfined
  res.send('Bookover ==> ...')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})