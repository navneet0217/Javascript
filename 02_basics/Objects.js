// //singleton(design pattern) - its there when object made with constructor (Object.create)

// //object literals
const mySym = Symbol("key1");
const user = {
  name: "Shivam",
  age: 20,
  "full name": "shivam choudhary",
  email: "shivam@mail.com",
  isLoggedIn: false,
  loginDays: ["Monday", "Tuesday", "Wednesday"],
  [mySym]: "mykey1",
};

// console.log(user.name);
// console.log(user["full name"]);
// console.log(mySym);
// console.log(typeof user[mySym]); // string
// console.log(user[mySym]); // "mykey1"

user.greeting = function () {
  // console.log("Hello JS User");
  return `Hello JS User`;
};
user.greetingTwo = function () {
  // console.log(`Hello JS User ${this["full name"]}`);
  return `Hello JS User ${this["full name"]}`;
};
console.log(user.greeting());
console.log(user.greetingTwo());
//why undefined - bcse of return value
//to stop that from coming just write
//1.use return instead of console.log then for printing the output use console.log(object.greeting())
//2.use console.log() only once or do not use console.log just call the function ()
//either 1 or 2 to stop undefined from coming
