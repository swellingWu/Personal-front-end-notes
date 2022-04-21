const express = require('express')
const app = express()

//=> 监听客户端的请求
app.get('/user',(req,res) => {
    //=> 调用 express 提供的 res.send() 向客户端响应一个 JSON 对象
    res.send({name: 'zs',agee: 20,gender: '男'})
})
app.post('/user',(req,res) => {
    res.send('请求成功')
})

app.listen(80,()=>{
    console.log('running...')
})

app.get('/',(req,res) => {
    console.log("name is: "+req.query.name)
    res.send(req.query)
})

app.get('/user/:id',(req,res) => {//=> id 动态参数
    console.log(req.params)//=> 动态匹配的 URL 参数，默认也是空对象
    res.send(req.params)
})