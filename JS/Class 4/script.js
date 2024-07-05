// Loopings

// for loop

// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// while loop

// let i = 10;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do...while loop

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let arr = [12, 20, 30, 40, 50, 100, 99, 79];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for...in

// for (let i in arr) {
//   console.log(arr[i]);
// }

// for...of

// for (let data of arr) {
//   console.log(data);
// }

// Functions:

// 1. Normal function

// DRY -> Don't repear your code

// function foo(a, b, n) {
//     console.log(a + b, n);
// }

// foo(20, 2, "hello")
// foo(10, 5)

// 2. Ananymous Function (Unnamed function)

// let demo = function() {
//     console.log("hello");
// }

// demo()

// 3. Arrow function (ES6)

// const arr = () => 2 * 3;

// console.log(arr());

// 4. IIFE Function (Immediatly Invoked function Expression)

// (() => {
//   console.log("It's IIFE");
// })();


let arr = [12, 20, 30, 40, 50, 100, 99, 79];

// arr.map((item) => {
//     console.log(item);
// })

let result = arr.filter((item) => item != 20)

console.log(result);