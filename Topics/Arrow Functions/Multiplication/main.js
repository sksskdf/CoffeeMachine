// write your code here
let arr = new Array(5).fill(0);
console.log(arr);

let arr2 = Array.from(arr, x => x + x);

console.log(arr2);

let arr3 = Array.of(1,2,3,4,5,6);

console.log(arr3);