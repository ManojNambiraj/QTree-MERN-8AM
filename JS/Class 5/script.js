// Callback function

// function display(result) {
//     console.log("The Answer is: ", result);
// }

// function fname(a, b, display) {
//     let result = a + b;

//     display(result);
// }

// fname(50, 3, display)

// setTimeout(() => {
//     console.log("hello");
//   }, 2000);

// setInterval(() => {
//   console.log("hi");
// }, 5000);

// let arr = [10, 20, 40, 99, 20, 79, 67, 85, 4, 5, 65, 67];

// Array methods: (MRF)

// Map

// let result = arr.map((item, index) => {
//     console.log(index);
// })

// console.log(result);

// Filter

// let result = arr.filter((item) => item % 2 != 0)

// console.log(result);

// Reduce

let arr = [10, 20, 40, 99, 20, 79, 67, 85, 4, 5, 65, 67];

let result1 = arr.reduce((acc, curr) => (acc + curr) * 2);
let result2 = arr.reduce((acc, curr) => (acc * curr));


console.log(result1); 
console.log(result2); 

// let a = 10;

// // a = a + 5;

// a += 5