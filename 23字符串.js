// function add(a,b) {
//     return a + b;
// }
// alert(`1 + 2 = ${add(1, 2)}.`); // 1 + 2 = 3.

// -> 换行符
// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// // alert(guestList);
// alert(guestList.indexOf("John"));

let str = "stringify";

// if (~str.indexOf("Widget")) {
//     // alert( ~2 ); // -3，和 -(2+1) 相同
//     // alert( ~1 ); // -2，和 -(1+1) 相同
//     // alert( ~0 ); // -1，和 -(0+1) 相同
//     // alert( ~-1 ); // 0，和 -(-1+1) 相同
//     // alert("We found it"); // 不工作！
// }
// // alert("Hello world".includes("world"));// -> true
// alert(str.slice(0,5));
// alert(str.slice(2));
// // the output corresponding to the subscript


// // 这些对于 substring 是相同的
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"

// // ……但对 slice 是不同的：
// alert( str.slice(2, 6) ); // "ring"（the same）
// alert( str.slice(6, 2) ); // ""（空字符串）

// //slice(start, end)	从 start 到 end（不含 end）	允许
// // substring(start, end)	start 与 end 之间（包括 start，但不包括 end）	负值代表 0
// // substr(start, length)	从 start 开始获取长为 length 的字符串	允许 start 为负数

// alert(str[0].toUpperCase() + str.slice(1));

// characters of the slice
alert("$120".slice(1)); //-> 120