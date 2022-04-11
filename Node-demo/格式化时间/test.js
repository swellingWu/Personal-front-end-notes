const TIME = require('./time')
const moment = require('moment')

//=> 自定义方法
const dt = new Date()
const newDT = TIME.dateFormat(dt);
console.log(newDT);

//=> 导入的 moment 方法
const dtM = moment().format('YYYY-MM-DD HH:mm::ss')
console.log(dtM);