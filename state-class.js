// Day 014
// State-Class

const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

function computerResponse(string) {
  let white = "\033[0;39m";
  let yellow = "\033[0;33m";
  console.log(yellow + string + white);
}

class School {
  constructor(stateOptions) {
    this.stateOptions = stateOptions;
  }
}

class Room {
  constructor({ possibleRooms }) {
    this.possibleRooms = possibleRooms;
  }
}

let foyer = new Room({ possibleRooms: ["kitchen", "bedroom"] });
// Don't change anything above this line!!!

/* Create an object called states

- keys: elementary, middle school, high school, college, & military
- each key will have a value that is in an array format
- elementary  you can only go to middle school
- middle school you can only go to high school
- high school - you can go to college, work, military
- college - you can go to work
- military - you can go to work or college
*/
let elementarySchool = new School(["middle school"]);
let middleSchool = new School(["high school"]);

let states = {
  elementary: elementarySchool,
  "middle school": middleSchool,
  "high school": ["college", "work", "military"],
  college: ["work"],
  military: ["work", "college"],
  work: ["college", "retire"],
};

// Initialize our current state that we want to start off at.
let currentState = "elementary";

async function start() {
  let humanEntry = "";

  while (humanEntry !== "exit") {
    humanEntry = await ask(
      `What status would you like to go to next? Your current status is ${currentState}. _> `
    );
    updateState(humanEntry);
  }
  process.exit();
}

start();

function updateState(humanEntry) {
  let possibleOptionsToUpdateState = states[currentState].possibleRoom;
  if (possibleOptionsToUpdateState.includes(humanEntry) === true) {
    // Found a match and we are able to update the current state
    currentState = humanEntry;
    computerResponse("You have moved state!");
  } else {
    // Match was not found and display a message to the user that is an invalid entry.
    computerResponse(
      "That is an invalid entry." +
        `Valid entries are the following: ${possibleOptionsToUpdateState}`
    );
  }
}
