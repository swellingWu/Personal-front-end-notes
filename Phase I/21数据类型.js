// ==> 模块真的是个好东西..
let john = {
    name: "john",
    sayhi: function() {
        alert("fan hi~")
    },
    age: 20,
};
// john.sayhi();
// alert(john.name.toUpperCase());
// alert(john.age.toFixed(1));
// if(john) {
//     let number = Number("240");
//     number+10;
//     alert("对象在 if 中永远为 true , number 增加后为"+number);
// }

// alert(null.test);
let str = "Hello";
// str.test = 4;// => 无法直接为原始的数据类型添加属性 -> TypeError: Cannot create property 'test' on string 'Hello'
// alert(str);
// alert(str.test);
john.test = 4;
alert(john);
alert(john.test);