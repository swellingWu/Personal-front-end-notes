const express = require('express')
const app = express()

//=> 调用 express.static() 对外提供静态资源
app.use(express.static('/home/nep/Newfile/javascript-demo/Node-demo/express/clock'))

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})