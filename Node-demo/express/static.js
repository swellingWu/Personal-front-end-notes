const express = require('express')
const app = express()

//=> 调用 express.static() 对外提供静态资源
<<<<<<< HEAD:Node-demo/express/static.js
app.use('/clock',express.static('/home/nep/Newfile/javascript-demo/Node-demo/express/clock'))//=> 仍然会使用第一个托管的静态资源 =>前缀区分
=======
app.use('/clock'.express.static('/home/nep/Newfile/javascript-demo/Node-demo/express/clock'))//=> 仍然会使用第一个托管的静态资源 =>前缀区分
>>>>>>> 81da5cc51b8909b66b18b237cf7037a22030dc3c:Node-demo/express/express_1/static.js

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})