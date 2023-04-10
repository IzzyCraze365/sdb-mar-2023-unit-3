//Day 014
//Extra Lesson on Classes

class Pantry {
    constructor (inventory){
        this.inventory = inventory;
    }
}

class Player{
    constructor(inventory){
        this.inventory = inventory;
    }
}

let rob = new Player([]); // Has no inventory
let pantry = new Pantry (["soap","fruit","jelly"]);

function exchangeInventory(giver, receiver, itemToBeExchanged){
    let index = giver.indexOf(itemToBeExchanged);
    giver.splice(index, 1);
    receiver.push(itemToBeExchanged);
}

console.log("Rob",rob.inventory);
console.log("Pantry",pantry.inventory);

exchangeInventory(pantry.inventory, rob.inventory, "fruit");

console.log("Rob",rob.inventory);
console.log("Pantry",pantry.inventory);

// Day 015
//Example of Conditional in a Class!!!
let sarah ={
    name: "Sarah",
    mood: "happy",
    speak: function(){
        if(this.mood == "Happy"){
            console.log(this.talk1);
    }  else{
        console.log(this.talk2);
    }},
    talk1: "Hello there",
    talk2: "Where are you",
    inventory:[],
}
sarah.speak()



sarah.speak("Hello from Sarah")


//! Day 016
//  Combining Arrays using spread.

let x = [1, 2, 3];
let y = [4, 5, 6];

let combinedArray = [...x, ...y];

console.log(combinedArray);

let livingRoom = {
  name: ["lr", "livingroom", "living room"],
  possibleLocations: ["kitchen", "foyer"],
};

let kitchen = {
  name: ["kitchen", "kit", "cooking room"],
  possibleLocations: ["living room", "foyer"],
};

let foyer = {
  nameVariations: ["foy", "foyer", "gathering place"],
  possibleLocations: ["kitchen", "living room"],
};

let locations = {
  "living room": livingRoom,
  kitchen: kitchen,
  foyer: foyer,
};

let currentLocation = "living room";
let humanInput = "foys";
let possibleOptionsToUpdateState = locations[currentLocation].possibleLocations;
console.log(possibleOptionsToUpdateState);
let acceptableNameVariations = [];

possibleOptionsToUpdateState.forEach((properRoomName) => {
  let x = locations[properRoomName];
  acceptableNameVariations = [
    ...acceptableNameVariations,
    ...locations[properRoomName].name,
  ];
});
console.clear();
console.log(acceptableNameVariations);
console.log(acceptableNameVariations.includes(humanInput));

