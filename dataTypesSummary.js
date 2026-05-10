// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n

// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//   name: "hitesh",
//   age: 22,
// };

// const myFunction = function () {
//   console.log("Hello world");
// };

// console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3

//stack vs heap concepts

let myYoutubeName = "navneet"

let anotherName = myYoutubeName
console.log(anotherName)
console.log(myYoutubeName)

//In stack memory - copy is created (value copy , you do not have access to original one)
//while in Heap memory - reference is provided (always reference is provided)

// Example

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ankit@hcltech.com"

console.log(userOne.email)
console.log(userTwo.email)

//here actual value also changed 

