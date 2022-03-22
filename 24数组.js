// -> mixed value
let arr = [
    'App',
    {name: 'John'},
    true,
    function() {
        alert('over');
    },
    "end",
];
// alert(arr[1].name);
// arr[3]();
arr.pop();// => in the end of an array method, add and delete
arr.push("over");
alert(arr[4]);// -> over -> end
// acts on the array to the first method:

// => push/pop way to run faster, and shift/unshift be slow.

let vec = [];
vec[10] = 10;
alert(vec.length);// -> 11 -> 2 length also increases

let arry = new Array(2);// = > arry.length -> 2
let intarr = [1,2,3];
alert(String(intarr));// => [1,2,3] -> "1" "2" "3"

alert( 0 == '' ); // true, because "was transformed into digital 0
