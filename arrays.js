// Unit 3 - Day 011

/* 
ARRAYS
Arrays are objects that have characteristics
- Arrays are resizable and can have a mix of different data types
- Arrays are indexed at zero
- Example of Datatypes: string, boolean, number, objects, arrays, functions, undefined, null

-What makes arrays powerful is they are loopable
*/


// ? How do we create an array
// Arrays consist of an opening and closing of the square brackets ([])
const names = ["George", "Tom", "Beth", "JoAnn"]; //<-- Prefered way of creating arrays

const namesArrayConstructor = new Array("George", "Tom", "Beth", "JoAnn");

// ? What does it mean to have indexes?
//                 0          1       2
let cityArr = ["Houston", "Tampa", "Alanta"];

// ? How Do I Access "Houston"
console.log(cityArr[0]);
// ? How Do I Access "Alanta"
console.log(cityArr[2]);

// ? How Do I Get the Size of the Array?
console.log("cityArr Length", cityArr.length);

// ? How do I loop through an array

for (let i = 0; i < cityArr.length; i++) {
  console.log(cityArr[i]);
}
// ! Arrays can have mixed data types
//  Level 1:           0       1   2          3
//  Level 2:                              0   1   2
let mixedDataArr = ["Spider", 65, true, [23, 55, 10]];

// ? How do I access "Spider"

console.log("spider: ", mixedDataArr[0]);

// ? How do I access the 55
console.log("55: ", mixedDataArr[3][1]);

// ? How do I know the size of the array [23, 55, 10]
console.log("mixedDataArr level2 Array Size: ", mixedDataArr[3].length);

// ? How to we replace a value in the array

let studentNames = ["Trevor", "John"];
// Replace John with Simon
studentNames[1] = "Simon";

// ? How do we add on to the array
// Add Ashlee to the end of the array

studentNames.push("Ashlee");
console.log(studentNames);

// Create a loop that will go through the array of groceryItemPrices
//  Inside the loop add on to the array of groceryItemPricesWithTax = itemPrice *1.06 .

let groceryItemPrices = [29.99, 1.5, 8.59, 45.89];

let groceryItemPricesWithTax = []; // An Empty array
for (let i = 0; i < groceryItemPrices.length; i++) {
  let itemPriceWithTax = groceryItemPrices[i] * 1.06;
  groceryItemPricesWithTax.push(+itemPriceWithTax.toFixed(2)); //toFixed() Rounds to decimal place in numebrs // Tge + turns the string into a number
}

console.log(groceryItemPricesWithTax);

// Arrays are Objects

// ! For Of Loop can be done with Arrays
/* 
1. a variable that will be used as reference to which index it is currently on. 
Typically it is the singluar version of the array (ex: restaurantNames would be restrauntName)
2. Keyword of - it's needed to complete the For - of loop
3. Array that you will be looping over

*/
let groceryItemPricesWithTax2 = [];
//     1             2        3
for (groceryItemPrice of groceryItemPrices) {
  let itemPriceWithTax = groceryItemPrice * 1.06;
  groceryItemPricesWithTax2.push(itemPriceWithTax);
}
console.log(groceryItemPricesWithTax2);
