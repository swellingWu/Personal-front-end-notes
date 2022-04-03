// class Uaer {
//     constructor(name) {
//         this.name = name;
//     }
//     sayhi() {
//         alert(this.name);
//     }
// }
// let user = new User();//=》 new() 调用 constructor 
// user.sayhi();


// 使用纯函数重写
function User(name) {
    this.name = name;
}
User.prototype.sayhi = function sayhi() {
    alert(this.name);
}

let user = new User("John");
user.sayhi();