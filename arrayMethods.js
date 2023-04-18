// Unit 3 - Day 011
// Array Methods

// Convert strings to arrays based of a space.
let words = "I really have been enjoying this coding camp!";
let wordArr = words.split(" ");
console.log(`Split ${wordArr}`);

// Opposite of a Split is a Join
//converts an array into a sentence
let wordJoin = wordArr.join(" ");
console.log(`Split ${wordJoin}`);

// The push method adds an element to the ending of an array
let studentNames = ["Trevor", "John"];
studentNames.push("Ashlee");
console.log(studentNames);

// .pop() will remove the last item in the array
let poppedStudents = studentNames.pop();
console.log(studentNames);
console.log(poppedStudents);
studentNames.push("Simon");

// .slice() returns selected elements in an array and returns a new array
// you can give it a start and stop point or omit the stop point
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // Starts at position 1 ends at position 3
console.log(fruits);
console.log(citrus);
const noBanana = fruits.slice(1); //Whole array minus the first input
console.log(noBanana);

// .splice() it will add or remove to the array element
//fruits.splice(1,1); // Takes out the 1st position element and the 1 after it
console.log(fruits); //returns [ 'Banana', 'Lemon', 'Apple', 'Mango' ]
fruits.splice(1, 2);
console.log(fruits); // returns [ 'Banana', 'Mango' ]
fruits.splice(2, 0, "Strawberry", "Grape"); //add them after position 2
console.log(fruits);

// .reverse() reverses the order of the array
let numberArr = [1, 2, 3, 4, 5, "winner"];
console.log(numberArr.reverse()); // prints [ 'winner', 5, 4, 3, 2, 1 ]

// .includes() method check if the array includes certain values
// returns true or false

const nums = [1, 2, 3, 41, 5, 141, 4];

const includesThree = nums.includes(3);
console.log(includesThree); // returns true

const includesFortyOne = nums.includes(41);
console.log(includesFortyOne); // returns false

// . indexOf() it will search the array for a specific element and returns the first index.  If it doesn't find anything it returns a -1/

console.log(nums.indexOf(4)); // position 6
console.log(nums.indexOf(10)); // position -1 (does not exit)