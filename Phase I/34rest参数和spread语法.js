//= Rest 语法，自动迭代传入的参数
    // function sumAll(...args) {
    //     let sum = 0;
    //     for(let arg of args) sum+=arg;
    //     return sum;
    // }
    // alert(sumAll(1,2,3));//' 6
    // alert(sumAll(1,2,3,4,5));//' 15


//= arguments => self => 箭头函数没有自己的 this
    // function showName() {
    //     alert(arguments.length);
    //     alert(arguments[0]);
    //     alert(arguments[1]);

    //     //= 可遍历的
    //     for(let arg of arguments) alert(arg);
    // }
    // showName("Julius", "Caesar","Ilya");

//= 使用 spread 语法可以将各种函数方法组合使用
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
//*? 比如 Math.max 时
alert(Math.max(1,...arr1,100,...arr2,25));
//合并数组
let marged = [0,...arr1,4.5,...arr2];