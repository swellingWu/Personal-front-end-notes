const express = require('express')
const app = express()

//=> 注册为全局生效的中间件
app.use((req,res, next) => {
    console.log("middleware ==>")
    const time = Date.now()//=> 获取到达服务器的时间
    //- 为 req 对象挂载自定义属性，将时间共享
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    res.send('Home page , out time ==>'+req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User page , out time ==>'+req.startTime)
})

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})