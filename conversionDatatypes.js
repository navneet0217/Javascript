/*
===========================================
📘 JavaScript Type Conversion & Checking
===========================================

This file covers:
1. typeof operator
2. Number conversion
3. Boolean conversion
4. Important edge cases
===========================================
*/


// ===========================================
// 🔹 1. Checking Data Types (typeof)
// ===========================================

let score = 33;
console.log(typeof score); 
// Output: number

let second_score = "33abc";
console.log(typeof second_score); 
// Output: string

let third_score = "jsssk";
console.log(typeof third_score); 
// Output: string



// ===========================================
// 🔹 2. Converting to Number (Number())
// ===========================================

let valueInNumber = Number(third_score);

console.log(valueInNumber); 
// Output: NaN (Not a Number)

console.log(typeof valueInNumber); 
// Output: number (IMPORTANT: NaN is still a number type)

console.log(typeof third_score); 
// Output: string


/*
👉 Conversion Rules:

"33"      => 33
"33abc"   => NaN
"jsssk"   => NaN
true      => 1
false     => 0
""        => 0
*/




// ===========================================
// 🔹 3. Converting to Boolean (Boolean())
// ===========================================

let loggedIn = "nsjsnjs";
let isLoggedIn = Boolean(loggedIn);

console.log(isLoggedIn); 
// Output: true

console.log(typeof isLoggedIn); 
// Output: boolean


/*
👉 Boolean Conversion Rules:

✅ Truthy Values:
- Non-empty string ("hello")
- "0"
- " "
- Any non-zero number
- true

❌ Falsy Values:
- "" (empty string)
- 0
- null
- undefined
- NaN
- false
*/



// ===========================================
// 🔹 4. Quick Examples
// ===========================================

console.log(Number("33"));        // 33
console.log(Number("33abc"));     // NaN

console.log(Boolean(""));         // false
console.log(Boolean("hello"));    // true



// ===========================================
// 🔹 5. Key Takeaways
// ===========================================

/*
✔ typeof → used to check data type

✔ Number() → converts value to number
   - Invalid conversion gives NaN

✔ Boolean() → converts value to true/false
   - Empty → false
   - Non-empty → true

✔ Special Case:
   typeof NaN === "number"  (JavaScript quirk)

*/