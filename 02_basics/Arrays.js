//Arrays

const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[0]);
// const cities = ["Jaipur", "Udaipur", "Sikar", "Jodhpur"];
// console.log(cities[3]);

// const myHundreds = new Array(100, 200, 300, 400);
// console.log(myHundreds[0]);

//Arrays methods

// myHundreds.push(500);
// console.log(myHundreds); //push element at end
// myHundreds.pop();
// console.log(myHundreds); //pop element from end

// arr.unshift(9);
// console.log(arr); // unshift element at start
// arr.shift();          //shift element from start
// console.log()

// console.log(arr.includes(2));
// console.log(arr.indexOf(2));

// const myArr = arr.join(); //converts array to string
// console.log(typeof myArr);

//slice and spice
// console.log("Before slice op: ");
// console.log(arr); //it includes the element at index 1 but does not include the element at index 3
// console.log("After slice op: ", arr.slice(1, 3));

// console.log("Array after slice", arr);

// console.log("After splice op:", arr.splice(1, 3)); // it includes the element at index 1 and it includes the element at index 3 and also changes the original array
// console.log("Array After splice", arr);

const marvel_heroes = ["Thor", "Iron Man", "Hulk", "Spiderman"];
const dc_heroes = ["Batman", "Superman", "Flash", "Wonder Woman"];

// dc_heroes.push(marvel_heroes);
// console.log(dc_heroes);

// const all_heroes = dc_heroes.concat(marvel_heroes); //return new array
// console.log(all_heroes);

// const all_heroes = [...dc_heroes, ...marvel_heroes];  //spread operator more prefered
// console.log(all_heroes);

//arrays inside array

// const og_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
// console.log(og_array);
// const new_array = og_array.flat(Infinity); //when you dont know the depth
// console.log(new_array);

console.log(Array.isArray("Navneet"));
console.log(Array.from("Navneet"));
let score1 = 10;
let score2 = 20;
let score3 = 30;
console.log(Array.of(score1, score2, score3));
