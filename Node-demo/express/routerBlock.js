const express = require('express')
const app = express()
//=> 导入 router 模块
const router = require('./router')
app.use(router)

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})