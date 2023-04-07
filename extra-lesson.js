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