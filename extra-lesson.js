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