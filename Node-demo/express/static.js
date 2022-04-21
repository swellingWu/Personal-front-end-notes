const express = require('express')
const app = express()

//=> 调用 express.static() 对外提供静态资源
app.use('/clock',express.static('/home/nep/Newfile/javascript-demo/Node-demo/express/clock'))//=> 仍然会使用第一个托管的静态资源 =>前缀区分

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})