//

// Hii, Please have a look here on the given example of array. You will get an idea how array spread and rest operators are working in real world ...
// Predict the output of given log messages and check the actual output by uncommenting them ...
// It will give you a really good idea, how array works in JavaScript ...

const arra = [1, 2, 3, 4, 5];
const newArra = [6, 7, 8];
// const newArra01 = [...arra, ...newArra, 9, 10];

console.log(...newArra01);

/////////
let arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//// SLICE method ...
// It makes a shalow copy of origional array (Origional array will no affected here) ...
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-3));
// console.log(arr.slice(0, -1));
// console.log([...arr]);

//// SPLICE method ...
// It extract the elements from origional array ...
// console.log(arr.splice(5));
// console.log(arr.splice(-1));
// console.log(arr.splice(0, 5));
// console.log(arr);

// REVERSE method ...
// It reverses the origional array ...
// console.log(arr);
let arr01 = arr.reverse();
// console.log(arr01);
// console.log(arr);

// CONCAT method ...
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["f", "g", "h", "i", "j"];
// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]);

// JOIN method ...
// console.log(arr.join('-'));

//
//
//
// Here you go, you can start practicing now 😎 ...
// ============================
//// 01...
// statement: Write a JavaScript function to get the first element of an array. (if we pass a parameter 'i011', it will print the first 'i011' elements of the array. else it will print first element of array)
// test case 01:
let a011 = [12, 14, 45, 567, 988, 123, 144];
// let i011 = 5; // let's check what happened if we do not pass 'i011' to function ...

// write your code here ...
// []

// test case 02:
let a012 = ["Orange", "Cherry", "Strawberry", "Apple", "Kiwi"];
let i012 = 5;

// write your code here ...
// []

//
// ============================
//// 02...
// statement: Write a JavaScript function which prints the sum of all elements of array.
// Hint: (pass array as parameter and use for loop for getting all element of array)
// test case 01:
let a021 = [12, 13, 18, 19, 20];

// write your code here ...
// []

// test case 02:
let a022 = [6, 9, 12, 15, 30, 40];

// write your code here ...
// []

//
// ============================
//// 03...
// statement: Write a JavaScript function which accepts the two arrays and concat them and creates the one combined array.
// test case 01:
let a031 = [12, 13, 18, 19, 20];
let b031 = ["HELLO", "ARRAY", "OBJECT", "FUNCTION"];

// write your code here ...
// []

// test case 02:
let a032 = ["Orange", "Monster", "Car", "React"];
let b032 = [6, 9, 12, 15, 30, 40];

// write your code here ...
// []

//
// ============================
//// 04...
// statement: Write a Javascript function which accepts the length of array and will print the array of that length with starting value from 0 to length
// test case 01:
let l041 = 6;
// Expected output: [0, 1, 2, 3, 4, 5]

// write your code here ...
// []

// test case 02:
let l042 = 8;
// Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

// write your code here ...
// []

//
// ============================
//// 05...
// statement: Write a Javascript function which accepts the array a051, starting_index si051 and ending_index ei051, and it will slice that array from starting_index to ending_index.
// test case 01:
let a051 = [
  "HELLO",
  "ARRAY",
  "OBJECT",
  "FUNCTION",
  "ORANGE",
  "MONSTER",
  "BIRD",
  "BURGER",
];
let si051 = 3;
let ei051 = 5;

// write your code here ...
// []

// test case 02:
let a052 = [23, 25, 28, 30, 32, 36, 38, 42, 46];
let si052 = 2;
let ei052 = 7;

// write your code here ...
// []

//
// ============================
//// 06...
// statement: Write a Javascript function which accepts the array a061 and new_value n062. add that new_value to the array and print that.
// test case 01:
let a061 = [
  "HELLO",
  "ARRAY",
  "OBJECT",
  "FUNCTION",
  "ORANGE",
  "MONSTER",
  "BIRD",
  "BURGER",
];
let n061 = "CHEESE";

// write your code here ...
// []

// test case 02:
let a062 = [23, 25, 28, 30, 32, 36, 38, 42, 46];
let n062 = 78;

// write your code here ...
// []

//
// ============================
//// 07...
// statement: Write a Javascript code that will add second array in first one with spread operators ...
// test case 01:
