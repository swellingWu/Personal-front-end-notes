let arr = ["a","b","c","d"];

// let array = {
//     0: "e",
//     print: function() {
//         alert("the arr is :"+arr)
//     }
// }

// delete arr[1];
// alert(arr.length);// -> 3 -> delete the subscript of the corresponding value but not deleted
// arr.unshift("d");
// alert(arr.length);// -> 4 => the length of the array will continue to grow

// arr.splice(0,2,"by Splice");// -> in turn, insert
// alert(arr);// b.c
// alert(arr.length);// 2

// let removed = arr.splice(0, 2); // => that will also remove
// alert(arr.length);// => 0

// alert(arr.slice(1,2));// -> b
// alert(arr.slice(1));// -> b,c
// alert(arr.slice(-1));// -> d

// array.print();
// let arr1 = arr.concat(array);// => it copies only the elements in the array.
// arr1.print(); // => the arr is :a,b,c,d

// forEach traverse
// arr.forEach((item,index,array) => {
//     alert(`${item} is at index ${index} in${array}`);
// })

// => search in the array
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
// ];
// let user = users.find(item => item.id==1);
// let someUsers = users.filter(item => item.id < 3);
// alert(user.name);// -> John 
// alert(someUsers.length);// -> 2 

// // -> convert an array
// alert(arr.map(item => item.length+1));

// // the custom collation
// function compare(a,b) {
//     if (a>b) return -1;
//     if (a == b) return 0;
//     if (a<b) return 1;
// }
// // arr.sort(compare);
// let arr2 = [1,5,4,1,6,7]
// alert("arr2 is ="+arr2.sort((a,b) => a-b));// -> for digital rangers for invalid characters -> '1'
// alert(arr2.reverse());// 7,6,5,4,1,1

// let str = "test";
// alert( str.split('') ); // t,e,s,t

// // for arrays, and
// let arr4 = [1, 2, 3, 4, 5];
// // delete the reduce initial value (no 0)
// let result = arr4.reduce((sum, current) => sum + current);
// alert( result ); // 15

let numberarray = [8,4,5,2,1,6];
alert(numberarray.sort(function(a,b) {return b-a; } )); // 8,6,5,4,2,1
alert(numberarray.slice(1,2));// 6
alert(numberarray.slice().sort());// -> 1,2,4,5,6,8


// array to heavy
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
};
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);