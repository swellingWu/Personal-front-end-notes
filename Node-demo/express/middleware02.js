const express = require('express')
const app = express()

//? 注册多个全局中间件
app.use((req,res,next) => {
    console.log("one is runnning...")
    next()
})
app.use((req,res,next) => {
    console.log("two is runnning...")
    next()
})

app.get('/user',(req,res) => {
    res.send('User page.')
})

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})