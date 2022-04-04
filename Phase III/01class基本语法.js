// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { alert(this.name); }
//   }
//   alert(typeof User); // function
  
//   alert(User === User.prototype.constructor); // true
  
//   alert(User.prototype.sayHi); // sayHi 方法的代码
  
//   alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi



// 用纯函数重写 class User
// 1. 创建构造器函数
// function User(name) {
//   this.name = name;
// }
// // 函数的原型（prototype）默认具有 "constructor" 属性，
// // 所以，我们不需要创建它
// // 2. 将方法添加到原型
// User.prototype.sayHi = function() {
//   alert(this.name);
// };
// // 用法：
// let user = new User("John");
// user.sayHi();



// function makeClass(phrase) {
//   // 声明一个类并返回它
//   return class {
//     sayHi() {
//       alert(phrase);
//     }
//   };
// }
// // 创建一个新的类
// let User = makeClass("Hello");
// new User().sayHi(); // Hello




// class User {
//   constructor(name) {
//     // 调用 setter
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User("John");
// alert(user.name); // John
// user = new User(""); // Name is too short.



class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

//? 传递一个包装函数，例如 setTimeout(() => button.click(), 1000)。
//? 将方法绑定到对象，例如在 constructor 中。

setTimeout(button.click, 1000); //' undefined