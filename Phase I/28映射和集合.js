// ? map 和 set (映射和集合)
    // let map = new Map();
    // map.set('1','str1');
    // map.set(1,'num1');
    // map.set(true,'bool1');
    // alert(map.get(1));
    // alert(map.get('1'));
    // alert(map.size);

// ? map 还可以使用对象作为键
    // let join = {name: "John"};
    // let visitsCountMap = new Map();
    // visitsCountMap.set(join,123);
    // alert(visitsCountMap.get(join));

// ? map 迭代
    // let recipeMap = new Map([
    //     ['cucumber',500],
    //     ['tomatoes',350],
    //     ['onion',50],
    // ]);
        //遍历所有的值
        // for (let vegetable of recipeMap.keys()) {
        //     alert(vegetable); // cucumber, tomatoes, onion
        // }
        // for (let amount of recipeMap.values()) {
        //     alert(amount); // 500, 350, 50
        // }
        // 遍历所有的实体
        // for (let entry of recipeMap) {
        //     alert(entry);// !cucumber,500 (and so on)
        // }
    // recipeMap.forEach((value,keys,map) => {
    //     alert(`${keys}: ${value}`);
    // });

// ? 根据已有对象创建 Map => Object.entries()
    // let obj = {
    //     name: "John", ageage: 30
    // };
    // let map = new Map(Object.entries(obj));
    // alert(map.get('name')); // => John

//? 根据 Mpa 创建对象 =>  Object.fromEntries
    // let map = new Map();
    // map.set('banana', 1);
    // map.set('orange', 2);
    // map.set('meat', 4);
    // let obj = Object.fromEntries(map.entries());// ! 创建一个普通对象
    // let obj = Object.fromEntries(map);//! fromEntries 需要一个可迭代的键值对 -> entries() 
    // alert(obj.orange);


//?  Set => 集合 => 不重复的集合
    // let set = new Set();
    // let join = "Join";
    // let pete = "Pete";
    // let mart = "Mart";
    // set.add(join);
    // set.add(pete);
    // set.add(mart);
    // set.add(join);
    // set.add(mart);
    // alert(set.size);
    // for(let user of set) {
    //     alert(user);
    // }

//? Set 迭代
let set = new Set(["oranges","apples","bananas"]);
for(let value of set) alert(value);
set.forEach((value,valueAgain,set) => {//! value == valueAgain
    alert(value);
})

//! 任何键，对象都可以作为键