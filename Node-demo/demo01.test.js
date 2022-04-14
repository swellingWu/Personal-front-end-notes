const demo = require('./nep-demo');

//=> 格式化时间
const dtStr = demo.dateFormat(new Date());
console.log(dtStr);
console.log("================================================")

const htmlStr = '<h1 title="abc">这是 h1 标签<span>123&nbsp;</span></h1>';
const str = demo.htmlEscape(htmlStr);
console.log(str);
console.log("================================================")

const newStr = demo.htmlUnEscape(str);
console.log(newStr);