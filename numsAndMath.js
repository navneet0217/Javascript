//Numbers

// const score = 400;
// console.log(score);

// const balance = new Number(1000);
// console.log(balance);

// console.log(typeof balance.toString()); //toString - converts to string

// console.log(balance.toFixed(2));

// const otherNum = 2034.22;

// console.log(otherNum.toPrecision(4));
// console.log(otherNum.toPrecision(3));

// const hundreds = 100000000;
// console.log(hundreds.toLocaleString("en-IN"));

//Maths
// console.log(Math)
// console.log(Math.PI)

// console.log(Math.abs(-4))

// console.log(Math.round(4.5))
// console.log(Math.ceil(5.3))   //6
// console.log(Math.floor(6.3))  //6
// console.log(Math.min(1,2,3))
// console.log(Math.max(1,2,3))

// console.log(Math.random())  //returns a random number between 0 and 1

// console.log(Math.random()*10)  //returns a random number between 0 and 10

console.log(Math.floor(Math.random() * 10 + 1)); //returns a random number between 1 and 10

const max = 20;
const min = 10;
console.log(Math.floor((Math.random() * (max - min + 1) + min)))
