// Call, Apply

// let person = {
//     fullName: function(country, State) {
//         return this.firstName + " " + this.lastName + " " + country + " " + State;
//     }
// }

// let person1 = {
//     firstName: "John",
//     lastName: "wlinder",
// }

// let person2 = {
//     firstName: "siva",
//     lastName: "kumar",
// }

// // console.log(person.fullName.call(person1));
// console.log(person.fullName.apply(person1, ["India", "TN"]));

// DOM -> Document Object Model

// Create
// Read
// Modify
// delete



// let ele1 = document.getElementById("demo");

// console.log(ele1);

// // ele.innerText = "Hello world...!"
// ele.innerHTML = "<h1>Hello</h1>"

// let ele = document.getElementsByClassName("para");

// ele[0].innerHTML = "dummy"

// ele[1].innerHTML = "hello"

// let ele3 = document.getElementsByTagName("h2");

// console.log(ele3);

// ele3[0].innerText = "John"
// ele3[1].innerText = "John"

// Query Selector -> ES6

// let ele = document.querySelector(".para");
let ele = document.querySelectorAll("p");

ele[0].style.color = "red";
ele[0].style.backgroundColor = "yellow";
ele[0].style.fontSize = "2em";