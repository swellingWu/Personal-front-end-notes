const express = require('express')
const app = express()

//=> 导入路由模块
const router = require('./apiRouter')
app.use('/api',router)





app.listen(80,() => {
    console.log('run server running at http://127.0.0.1')
})