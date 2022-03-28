//= 函数值选择
    // let name = "John";
    // function sayHi() {
    //     alert("hi"+name);
    // }
    // name = "Pate";
    // sayhi();//' 函数将从内到外依次在对应的词法环境中寻找目标变量，它使用最新的值。

//= 闭包
    // function sum(a) {
    //     return function(b) {
    //         return a+b;
    //     };
    // }
    // alert(sum(2)(5));
    // alert(sum(9)(7));

//= 变量的可见性
let x = 1;
function func() {
    alert(x);//! x 在进入函数时进入未初始化状态 => error
    let x = 2;
    alert(x);
}
func();