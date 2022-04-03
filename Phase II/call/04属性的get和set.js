// let user = {
//     name: "John",
//     surname: "Smith",

//     // get fullName() {
//     //     return `${this.name} ${this.surname}`;
//     // },
//     // set fullName(value) {
//     //     [this.name,this.surname] = value.split(" ");
//     // }
// };//= 使用 get 和 set 属性可以让我们快速的修改属性的值
// // user.fullName = "Alice Cooper";

// //= 可以单独把 get 和 set 拿出来作访问器
// Object.defineProperty(user, "fullName", {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },
//     set() {
//         [this.name,this.surname] = value.split(" ");
//     }
// });
// alert(user.fullName);// John Smith
// for(let key in user) alert(key);// name,surname



function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // 年龄是根据当前日期和生日计算得出的
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
  let john = new User("John", new Date(1992, 6, 1));
  
  alert( john.birthday ); // birthday 是可访问的
  alert( john.age );      // ……age 也是可访问的
