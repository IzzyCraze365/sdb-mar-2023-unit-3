// Unit 3 - Day 013
// Maps

/* 
.map()

- Does not destroy the original array
- Of upi jabe a n;aclindex (array bucket) the function will not run on it.
- Takes another function that resturns some value

 */

let numbers = [4, 10, 5, 15];
let doubleNumbers = numbers.map((number) => number * 2);

// An arrow function/ map has the function in the same line
/* 
let doubleNumbers2 = numbers.map(doubleNumberFunc);
function doubleNumberFunc(number) {
  return number * 2;
}
 */

console.log(numbers); // prints [ 4, 10, 5, 15 ]
console.log(doubleNumbers); // prints [ 8, 20, 10, 30 ]

// Copied from tag-search.js
let library = [
  {
    title: "A Game of Thrones",
    tags: ["fantasy", "george r.r. martin"],
  },
  {
    title: "Eloquent JavaScript",
    tags: ["technology", "programming", "marijn haverbeke"],
  },
  {
    title: "The Fellowship of the Ring",
    tags: ["fantasy", "jrr tolkien"],
  },
  {
    title: "The Return of the King",
    tags: ["fantasy", "jrr tolkien"],
  },
  {
    title: "The Anthropocene Reviewed",
    tags: ["nonfiction", "john green"],
  },
  {
    title: "The Left Hand of Darkness",
    tags: ["sci-fi", "ursula le guin "],
  },
];

// Example 1
const bookTitles = library.map((book) => book.title);
console.log(bookTitles); // prints only book titles in an Array

// Example 1.5
const bookTitles2 = library.map((book) => { // This si the same as example 1
  return book.title;
});




const bookTitles1 = library.map((book) => {
  //{
    return { waffle: book.title };
  //}
}); // curly boys make it think that it is a function block, so we need to add a second pair to make it know its an object
console.log(bookTitles1); // prints only book titles as a serperate object


// ? Using the students array create a new array that has the names comibined using a .map()
//  result1: ["Mike Franks", "Brenda Banks"]
//  result2: [{fullName: "Mike Franks"}, {fullName: "Brenda Banks"}]

let students = [
    { firstName: "Mike", lastName: "Franks" },
    { firstName: "Brenda", lastName: "Banks" },
    { firstName: "Cora", lastName: "Smith" },
  ];
  console.log(students);

  let combinedNames = students.map((student)=> student.firstName +" "+ student.lastName); // no commas in second half of the argument
  console.log(combinedNames);

  let combinedNames2 = students.map((student) => {
    return { fullName: student.firstName + " " + student.lastName };
  });
  
  console.log(combinedNames2);
  
  
// ? Create a function called getStringLengths(arrayOfStrings)
// ? The function will return an array with the length of the strings that are inside the given array
// Example: ["apple", "orange", "blackberry", "blueberry"]
// Expected Output: [5, 6, 10, 9]

function getStringLength(arrayOfStrings) {
    // create a variable set that equal to [array].map()
    let stringLength = arrayOfStrings.map((letters)=>  letters.length);
  //return; // return the variable you just created above
  return stringLength;
}

const string1 = ["apple", "orange", "blackberry", "blueberry"];

console.log(getStringLength(string1));
