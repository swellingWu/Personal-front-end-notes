//= 使用 setTimeout 时丢失 this
let user = {
    firstName:"John", 
    sayHi() {
        alert(`user,${this.firstName}`);
    }
};
//`sayTimeout(user.sayHi,1000);//* 丢失了 user 上下文
// setTimeout(function() {//' 从外部语法环境中获取到了 user
//     user.sayHi();
// },1000);//' Please enter,John
// setTimeout(() => user.sayHi(),1000); 
// //* 当一秒内修改了数据时
// user = {
//     sayHi() {
//         alert(`user,changer`);//= user,changer
//     }
// }
//* 那么当我们不希望该值改变时

let sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 1000);

//* 这样即使值在一秒内改变
//* sayHi 海斯会优先绑定 bound
user = {
    sayHi() { alert("Another user in setTimeout!"); }
}
