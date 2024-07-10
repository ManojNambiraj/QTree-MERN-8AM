// Promise

// async function demo() {
//   let myPromise = new Promise(function (myResolve, myReject) {
//     let x = 5;

//     if (x == 0) {
//       myResolve("Okay");
//     } else {
//       myReject("Error");
//     }
//   });

//   let result = await myPromise
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       return err;
//     });

//   console.log(result);
// }

// demo();

//   Async await

// JS Class

// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
// }

// let myCar = new Car("Volvo", 2015);
// let samCar = new Car("BMW", 2020);
// let RaviCar = new Car("Hyundai", 2023);

// console.log(myCar);
// console.log(samCar);
// console.log(RaviCar);

// Destructuring:

// Array destructure: (Unpacking)

// let fruits = ["Grapes", "Orange", "Apple", "Kiwi", "Banana"];

// const [g, o, a, k, b] = fruits;

// console.log(k);

// // console.log(fruits[2]);

// Object Destructure:

let student = { name: "Sam", Age: 25, dept: "IT", mobile: 9876543211 };

const {name, Age, dept, mobile} = student;

console.log(Age);


// console.log(student.dept);