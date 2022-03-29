    // let sayHi = function func(who) {//- func 调用函数本身
    //     if(who) {
    //         alert(`hello,${who}`)
    //         //= alert(sayHi.name)
    //         //= TypeError: Cannot read properties of null (reading 'name')
    //     } else {
    //         func("Guest");
    //     }
    // };
    // let welcome = sayHi;
    // sayHi = null;   
    // welcome();//' let sayHi = function func(who)


//* 为 counter 添加 set 和 decrease 方法
//? 修改 makeCounter() 代码，使得 counter 可以进行减一和设置值的操作：
//? counter() 应该返回下一个数字（与之前的逻辑相同）。
//? counter.set(value) 应该将 count 设置为 value。
//? counter.decrease() 应该把 count 减 1。

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count => value;

    counter.decrease = () => counter--;
}



//* 任意数量的括号求和
// function sum(a) {
//     let currentSUm = a;
    
//     function f(b) {
//         currentSUm += b;
//         return f;//= 将函数 f 返回，以至于不断调用
//     };
//     f.toString = function () {
//         return currentSUm;
//     };
//     return f;
// }
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15




//* new Function 语法
    //- let str = ... 动态地接收来自服务器的代码 ...
    //- let func = new Function(str);
    //- func();
let sum = new Function('a','b','return a*b');//= 可以将任意字符串变为函数
// alert(sum(5,3));
//! Function 的范围
function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };//! 全局变量
  
    return func;
  }
  
  getFunc()(); // "test"，从 getFunc 的词法环境中获取的


