//! 过滤数组中的唯一值
    // function unique(arr) {
    //     return Array.from(new Set(arr));
    // }
    // let values = ["Hare", "Krishna", "Hare", "Krishna",
    //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
    // ];
    // alert( unique(values) ); // Hare, Krishna, :-O

//! 迭代键
let map = new Map();
map.set("name","John"); 
let keys = Array.from(map.keys());
keys.push('more');
alert(keys);// -> name,more