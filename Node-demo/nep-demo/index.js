const date = require('./src/dateFormat');
const escape = require('./src/htmlEscape');

//=> 将数据从 module 暴露出去
module.exports = {
    ...date,
    ...escape
}