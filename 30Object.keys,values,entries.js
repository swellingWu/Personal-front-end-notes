//= 迭代数据结构


//! 	                 Map         |  Object
//! 调用语法	          map.keys()  |	 Object.keys(obj)，而不是 obj.keys()
//! 返回值		         可迭代项     |   “真正的”数组 

//' Object.keys，values，entries
//' 对于普通对象，下列这些方法是可用的：
//' Object.keys(obj) —— 返回一个包含该对象所有的键的数组。
//' Object.values(obj) —— 返回一个包含该对象所有的值的数组。
//' Object.entries(obj) —— 返回一个包含该对象所有 [key, value] 键值对的数组。

// * 例子
let user = {
    name: "John", 
    age: 30,
}
//* 使用 Object.values 来遍历属性
for (let values of Object.values(user)) {
    alert(values);//- John,then 30
}


//* 转换对象
