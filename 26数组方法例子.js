// 将 border-left-width 转换成 borderLeftWidth
    // camelize("background-color") == 'backgroundColor';
    // camelize("list-style-image") == 'listStyleImage';
    // camelize("-webkit-transition") == 'WebkitTransition';
    // // =>
    // function camelize(str) {
    //     return str
    //         .split('-')
    //         .map(
    //             (world,index) => index => 0 ? world : world[0].toUpperCase()+world.slice(1)
    //         )
    //         .join('')
    // }
// ==================================================
// 过滤范围
    // let arr = [5, 3, 8, 1];
    // let filtered = filterRange(arr, 1, 4);
    // alert( filtered ); // 3,1（匹配值）
    // alert( arr ); // 5,3,8,1（未修改）
    // // =>
    // function filterRange(arr,a,b) {
    //     return arr.filter(item => (a <= item && item < b));
    // }
// ==================================================
// 删除过滤范围
    // let arr = [5, 3, 8, 1];
    // filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值
    // alert( arr ); // [3, 1]
    // // => 
    // function filterRangeInPlace(arr,a,b) {
    //     for (let i=0;i< arr.length;i++) {
    //         let val = arr[i];
    //         // 如果超出范围则删除
    //         if (val<a || val>b) {
    //             arr.splice(i,1);
    //             i--;
    //         }
    //     }
    // }
// ===================================================
// 降序排列
    // let arr = [5,2,1,-10,8];
    // // => 
    // arr.sort((a,b) => b-a);
    // alert(arr);
// ========================================================
// 复制和排序数组
    // let arr = ["HTML", "JavaScript", "CSS"];
    // let sorted = copySorted(arr);
    // alert( sorted ); // CSS, HTML, JavaScript
    // alert( arr ); // HTML, JavaScript, CSS (no changes)
// => 
    // function copySorted(arr) {
    //     return arr.slice().sort();
    // }
// ====================================================
// 映射到 names
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };
    // let users = [ john, pete, mary ];
    // // =>
    // let names = /* ... your code */ users.map(item => item.name);
    // alert( names ); // John, Pete, Mary
// =====================================================
// 映射到对象
    // let john = { name: "John", surname: "Smith", id: 1 };
    // let pete = { name: "Pete", surname: "Hunt", id: 2 };
    // let mary = { name: "Mary", surname: "Key", id: 3 };
    // let users = [ john, pete, mary ];
    // // => 
    // let usersMapped = /* ... your code ... */ users.map(user => ({
    //     fullName: `${user.name} ${user.surname}`,
    //     id: user.id
    // }));
    // /*
    // usersMapped = [
    // { fullName: "John Smith", id: 1 },
    // { fullName: "Pete Hunt", id: 2 },
    // { fullName: "Mary Key", id: 3 }
    // ]
    // */
    // alert( usersMapped[0].id ) // 1
    // alert( usersMapped[0].fullName ) // John Smith
// ===========================================================
// 根据大小排序
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };
    // let arr = [ pete, john, mary ];
    // sortByAge(arr);
    // // now: [john, mary, pete]
    // alert(arr[0].name); // John
    // alert(arr[1].name); // Mary
    // alert(arr[2].name); // Pete
    // // =>
    // function sortByAge(arr) {
    //     arr.sort((a,b) => a.age - b.age);
    // }
// ==========================================================
// 数组去重
    // function unique(arr) {
    //     /* your code */
    // }
    // let strings = ["Hare", "Krishna", "Hare", "Krishna",
    //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
    // ];
    // alert( unique(strings) ); // Hare, Krishna, :-O
    // // => 
    // function unique(arr) {
    //     let result = [];
    //     for(let str of arr) {
    //         if(!result.includes(str)) {
    //             result.push(str);
    //         }
    //     }
    //     return result;
    // }
// ===========================================================
// 从数组创建键值对象
    // let users = [
    //     {id: 'john', name: "John Smith", age: 20},
    //     {id: 'ann', name: "Ann Smith", age: 24},
    //     {id: 'pete', name: "Pete Peterson", age: 31},
    // ];
    // let usersById = groupById(users);
    // alert(usersById);
    // /*
    // // 调用函数后，我们应该得到：
    
    // usersById = {
    //     john: {id: 'john', name: "John Smith", age: 20},
    //     ann: {id: 'ann', name: "Ann Smith", age: 24},
    //     pete: {id: 'pete', name: "Pete Peterson", age: 31},
    // }
    // */
    // // => 
    // function groupById(arr) {
    //     return arr.reduce((obj,value) => {
    //         obj[value.id] = value;
    //         return obj;
    //     },{})
    // }// => 案例似乎有问题 ... 