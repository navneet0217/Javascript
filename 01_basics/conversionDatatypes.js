// /*
// ===========================================
// 📘 JavaScript Type Conversion & Checking
// ===========================================

// This file covers:
// 1. typeof operator
// 2. Number conversion
// 3. Boolean conversion
// 4. Important edge cases
// ===========================================
// */

// // ===========================================
// // 🔹 1. Checking Data Types (typeof)
// // ===========================================

// let score = 33;
// console.log(typeof score);
// // Output: number

// let second_score = "33abc";
// console.log(typeof second_score);
// // Output: string

// let third_score = "jsssk";
// console.log(typeof third_score);
// // Output: string

// // ===========================================
// // 🔹 2. Converting to Number (Number())
// // ===========================================

// let valueInNumber = Number(third_score);

// console.log(valueInNumber);
// // Output: NaN (Not a Number)

// console.log(typeof valueInNumber);
// // Output: number (IMPORTANT: NaN is still a number type)

// console.log(typeof third_score);
// // Output: string

// /*
// 👉 Conversion Rules:

// "33"      => 33
// "33abc"   => NaN
// "jsssk"   => NaN
// true      => 1
// false     => 0
// ""        => 0
// */

// // ===========================================
// // 🔹 3. Converting to Boolean (Boolean())
// // ===========================================

// let loggedIn = "nsjsnjs";
// let isLoggedIn = Boolean(loggedIn);

// console.log(isLoggedIn);
// // Output: true

// console.log(typeof isLoggedIn);
// // Output: boolean

// /*
// 👉 Boolean Conversion Rules:

// ✅ Truthy Values:
// - Non-empty string ("hello")
// - "0"
// - " "
// - Any non-zero number
// - true

// ❌ Falsy Values:
// - "" (empty string)
// - 0
// - null
// - undefined
// - NaN
// - false
// */

// // ===========================================
// // 🔹 4. Quick Examples
// // ===========================================

// console.log(Number("33"));        // 33
// console.log(Number("33abc"));     // NaN

// console.log(Boolean(""));         // false
// console.log(Boolean("hello"));    // true

// // ===========================================
// // 🔹 5. Key Takeaways
// // ===========================================

// /*
// ✔ typeof → used to check data type

// ✔ Number() → converts value to number
//    - Invalid conversion gives NaN

// ✔ Boolean() → converts value to true/false
//    - Empty → false
//    - Non-empty → true

// ✔ Special Case:
//    typeof NaN === "number"  (JavaScript quirk)

// */

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2");  //32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//increment / decrement operations
let a = 4;
let b = ++a;
console.table([a, b]);

let x = 6;
let y = --x;
console.table([x, y]);
