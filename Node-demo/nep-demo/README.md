## 安装
```
npm install nep-demo
```

## 导入
```js
const demo = require('nep-demo')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = demo.dateFormat(new Date());
console.log(dtStr);
```

## 转义 HTML 中的特殊字符
```js
// 定义待转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是 h1 标签<span>123&nbsp;</span></h1>';
// 调用 htmlEscape 方法进行转换
const str = demo.htmlEscape(htmlStr);
// 转换的结果:
// const htmlStr = '<h1 title="abc">这是 h1 标签<span>123&nbsp;</span></h1>';
const str = demo.htmlEscape(htmlStr);
console.log(str);  
console.log(str);
```
## 还原 HTML 中的特殊字符
```js
const newStr = demo.htmlUnEscape(str);
// 转换的结果:
// <h1 title="abc">这是 h1 标签<span>123&nbsp;</span></h1>
console.log(newStr);
```

## 开源协议
ISC