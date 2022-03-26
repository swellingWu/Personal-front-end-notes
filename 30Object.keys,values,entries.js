//= 迭代数据结构


//! 	                 Map         |  Object
//! 调用语法	          map.keys()  |	 Object.keys(obj)，而不是 obj.keys()
//! 返回值		         可迭代项     |   “真正的”数组 

//' Object.keys，values，entries
//' 对于普通对象，下列这些方法是可用的：
//' Object.keys(obj) —— 返回一个包含该对象所有的键的数组。
//' Object.values(obj) —— 返回一个包含该对象所有的值的数组。
//' Object.entries(obj) —— 返回一个包含该对象所有 [key, value] 键值对的数组。

    //*/ / * 例子
    // let user = {
    //     name: "John", 
    //     age: 30,
    // }
    // //* 使用 Object.values 来遍历属性
    // for (let values of Object.values(user)) {
    //     alert(values);//- John,then 30
    // }


    // //* 转换对象
    // let prices = {
    //     banna: 1, 
    //     orange: 2,
    //     meat: 4,
    // };
    // let doublePrices = Object.fromEntries(//' 对结果数组使用 Object.fromEntries(array) 方法，将结果转回成对象。
    //     //- price -> 数组 -> 对象
    //     Object.entries(prices).map(entry => [entry[0], entry[1]*2])
    // );
    // alert(doublePrices.meat);

//* 属性求和
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};
alert(sumSalaries(salaries));
alert("salaries 中属性的数量为:"+Object.keys(salaries).length);

function sumSalaries(salaries) {
    // let num = 0;
    // for(let salary of Objctor.values(salaries)) {
    //     sum += salary;
    // }
    // alert("num is"+num);
    // return sum;
    
    return Object.values(salaries).reduce((a,b) => a+b,0);
    //= 将 salaries 转换为数组取值后计算两数之和 => a+b,0为 a b 计算外额外相加的值，此处为 0 意为不相加'
}
