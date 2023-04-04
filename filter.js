// Unit 3 - Day 012
// Filters
// Arrow Functions well explained

/* 
Filter Method for Arrays
- Filter does NOT destroy the original array
- You must store the new filtered array in a new variable

*/

let fruits = [
  "apple",
  "banana",
  "mango",
  "orange",
  "pineapple",
  "blueberry",
  "strawberry",
  "cranberry",
  "blackberry",
];
console.log("apple" !== "mango"); // true

/* 
//! ARROW FUNCTION
console.log("Arrow Function");
console.log(fruits.filter((fruit) => fruit !== "mango")); // [ 'apple', 'banana', 'orange', 'pineapple' ]

//! Expanded Version of the Funciton
console.log("\n\nExpanded Version of the Funciton");
function notMango(fruit) {
  if (fruit !== "mango") {
    return true;
  } else {
    return false;
  }
}
console.log(fruits.filter((fruit) => notMango(fruit)));
 */

console.log("mango" !== "mango");

console.log(fruits.filter((fruit) => fruit !== "mango"));
console.log(fruits);

let noBanana = fruits.filter((fruit) => fruit !== "banana");
console.log(noBanana);

// TODO This is a good example of Arrow Function, they are the same function
let onlyBerry = fruits.filter((fruit)=> fruit.includes("berry")); // This gives the same as next line
console.log(`fruit`,onlyBerry);
onlyBerry = fruits.filter((poolParty)=> poolParty.includes("berry")); // normal naming conventions are to have 1 singular for the things inside of the group.
console.log(`poolParty`,onlyBerry);



//! Quick way to name a Number Array
let numArr = [];
for (let i = 1; i <= 50; i++) {
  numArr.push(i);
}
console.log(numArr);

// Even Numbers
let evenNumbers = numArr.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let threeOrFiveNumbers = numArr.filter((n) => n %3 ===0 || n %5 ===0);
console.log(threeOrFiveNumbers);

// More Examples with Movies
let movies = [
    {
        name: "Star Wars",
        category: "Sci-fi"
    },
    {
        name: "Lord of the Rings",
        category: "Sci-fi"
    },
    {
        name: "Dune",
        category: "Sci-fi"
    },
]

movies.push({name:"Alien", catergory: "Sci-fi"});
movies.push({name:"Harry Potter", catergory: "Fantasy"});

console.log(`Our Movie List is`,movies);

let ScifiMovies = movies.filter((movie) => movie.category === "Sci-fi");
console.log(`The Sci Fy movies on our list are`,ScifiMovies);