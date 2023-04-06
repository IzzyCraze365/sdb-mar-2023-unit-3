// Unit 3 - Day 011
// Destructuring Arrays

let person1 = ["Rob", 42, "indianapolis", "indiana"]; // Name, Age, City, State
let name = person1[0];
let age = person1[1];

let person2 = ["Bobur", 19, "denver", "colorado"]; // Name, Age, City, State

let [name2, age2, city2, state2] = ["Bobur", 19, "denver", "colorado"]; //! Destructuring an Array

console.log("Age of person 2 is", age2);

//Example that will //! be useful for Project 3 this week

let terminalEntry1 = "look note"; // ex: ["look", "note"]
let [command, noun] = terminalEntry1.split(" "); // made it into an array
// console.log(terminalEntryArr);

console.log(`The command is:`, command);
console.log(`The noun is:`, noun);

// Example

function areaAndVolume(length) {
  /*    let area = length **2;
    let volume = length **3;
    return[area, volume];
    OR use the following
     */
  return [length ** 2, length ** 3];
}

// Option 1 - Normal Way
let cube1 = areaAndVolume(5);
console.log(cube1);
console.log(`Area of Cube is`, cube1[0]);
console.log(`Volume of Cube is`, cube1[1]);

// Alternativly Option 2 - Destructured

let [cube1Area, cube1Volume] = areaAndVolume(5);
console.log(`Volume of Cube is`, cube1Volume);

//! Objects Destructuring

let student1 = {
  name3: "hans",
  age3: 34,
  grades3: [100, 75, 68],
};

console.log(student1.name3);

let{ name3, age3 } = student1; // uses curly brackets
console.log(name3, age3);  // prints "hans 34"

//Example 2

let student2 = {
    nameOfStudent: "Luke",
    age: 24,
    grades: [65, 25, 140],
  };
  let{ nameOfStudent: name4, age: age4 } = student2; // we are renamning "nameOfStudent" to be "name"
console.log(name4, age4);  // prints "Luke 24"


//Day 014
// Needs Curly brackets lets you use deconstructors

function printThings({ name, greeting }) {
  console.log(`${greeting}, ${name}`);
}

printThings({ greeting: "Good Morning", name: "Billy" });

class Room {
  constructor({ name, description, doorLock, inventory }) {
    this.name = name;
    this.description = description;
    this.inventory = inventory;
  }

  displayInventory() {
    return `You have the following items in this room ` + this.inventory;
  }
}

let foyer = new Room({
  name: "foyer",
  doorLock: false,
  inventory: ["hammer", "note"],
  description: "You have now enter foyer....",
});

let bedroom = new Room({
  name: "bedroom",
  doorLock: false,
  inventory: ["pillow", "sheets"],
  description: "You have now enter bedroom....",
});

let state = {
  foyer: foyer,
  bedroom: bedroom,
};

let currentState = "bedroom";

console.log(state[currentState].displayInventory());
// or you could enter it as
// ! Avoid this
// let foyer = new Room("foyer", "You have now enetered the foyer...", false, ["hammer", "note"])
