let join = {name:"John"};

    // let array = [join];
    // john = null;//! 对象被内存清除
    // alert(array[0].name);//* => John

    // let map = new Map();
    // map.set(join,"...");
    // join=null;
    // //*  function keys() { [native code] } //! join 被存储在了 map 中,不会因为 join 不可达被清理
    // alert(map.keys);

    // let weakMap = new WeakMap();
    // weakMap.set(join,"secret documents");//! weakMap 只能使用对象作为键,不能是原始值
    // join=null;
    // let array = [join]
    // //! join 被从内存中删除了
    // alert(join.name);//! Cannot read properties of null (reading 'name')
    //! => weakMap 作为弱映射可以自动清理对象回收后的内存

// ? 使用用户作为键,当用户离开时u数据自动回收
    // let visitsCountMap = new Map();
    //* //递增用户来访次数
    // function countUser(user) {
    //     let count = visitsCountMap.get(user) || 0;
    //     visitsCountMap.set(user,count + 1);
    // }

//? WeakSet => 只能向WeakSet 添加对象(而不是原始值)
let visitedSet = new WeakSet();

let john = {name: "John"};
let pete = {name: "pete"};
let mary = {name: "mary"};

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

//? 检查 JOhn 是否访问过
alert(visitedSet.has(john));//* => true
//? 检查 mary 是否访问过
alert(visitedSet.has(mary));//* => true

// 清理join
john = null;
// aler(john.name); //! => 被自动清理

//? 对对象进行键值操作，对象销毁后内存自动回收
