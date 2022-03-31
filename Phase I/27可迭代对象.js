// // 可迭代对象
let range = {
    from: 1,
    to: 5,

// for(let num of range) => num=1,2,3,4,5
// Symbol.iterator 的方法（一个专门用于使对象可迭代的内建 symbol）。
[Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};
// for (let num of range) {
//   alert(num); // 1, 然后是 2, 3, 4, 5
// }
// ================================
// 字符串是可迭代的
// for (let char of "test") {
//     alert(char);
// }
// let str = "abcdefghijk";
// let iterator = str[Symbol.iterator]();
// while (true) {
//     let result = iterator.next();
//     if (result.done) break;// 如果没有下一个则返回
//     alert(result.value);
// }

// 可迭代数组
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };
// let arr = Array.from(arrayLike);
// alert(arr);// => Hello,World

// => Array.from -> 传入一个可迭代的对象或类数组的值
// let arr = Array.from(range);// => 1,2,3,4,5
let arr = Array.from(range,num => num * num)// => 1,4,9,16,25
alert(arr);

// 可以应用 for..in 的对象三可迭代的，实现可迭代对象必须实现  Symbol.iterator  方法 => Symbol.iterator 方法会被 for..of 自动调用，但我们也可以直接调用它。