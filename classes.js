// Day 013
// Classes

/* 
Classes are a template for creating objects.
Classes encapsulate data with with code inorder to work on that data 

Classes have methods NOT functions 
Keyword "this" used in a class when referencing properties of the Class

Class come with a constructor method and that method is called first when create a new Class Object

Class Names are PascalCased: CollegeStudent UniveristyTeacher

To declare a class you must use the keyword "class"

*/

class Pizza {
    constructor(diameter, type) {
      this.diameter = diameter;
      this.type = type;
    }
    //   Method Example:
    bake() {
      return `Your ${this.diameter} inch pizza will be ready in 20 minutes`;
    }
  }
  
  // ! To create an instance of the class we have to use the word new ClassName
  
  let myPepperoniPizza = new Pizza(14, "pepperoni");
  
  // ? How do I access properties on a class
  
  console.log(myPepperoniPizza.diameter);
  console.log(myPepperoniPizza.type);
  
  // ? How do I change the value of the diameter to 25?
  myPepperoniPizza.diameter = 25;
  
  console.log(myPepperoniPizza.diameter);
  
  // ? How do I call a method created in a class
  console.log(myPepperoniPizza.bake());
  
  let chessePizza = new Pizza(18, "extra cheese");
  console.log(chessePizza.diameter);
  

  //  ! Rectangle Example
/* 
Create rectangle class that will accept 2 parameters when creating the new Rectangle (height, width)


*/


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    isSquare() {
      return this.height === this.width;
    }
  
    area()
    {
        return this.height *this.width;
    }
  }
  
  let rect1 = new Rectangle(10, 5);
  let rect = new Rectangle(20, 20);
  // let isSquare = rect1.height === rect1.width;
  
  console.log(`Is it a square`,rect1.isSquare());
  console.log(`Area is`,rect1.area());


// ! Inventory Example
class Pantry {
    constructor(initialPantryItems) {
      this.inventory = initialPantryItems;
    }
  
    // Prints the current Inventory
    displayInventory() {
      console.log(
        "The current items you have in your pantry are " + this.inventory
      );
    }
  
    //Adds an item to the inventory
    addInventory(itemToBeAdded) {
      this.inventory.push(itemToBeAdded);
    }
  
    //This checks to see if something was removed by comparing the length before and after
    removeInventory(itemToBeRemoved) {
      let snapshotInventorySize = this.inventory.length;
      this.inventory = this.inventory.filter((item) => item !== itemToBeRemoved);
      return snapshotInventorySize === this.inventory.length
        ? "No Items were removed"
        : "Item was removed";
    }
  }
  
  let kitchenPantry = new Pantry(["beans", "noodles", "peanut butter"]);
  
  kitchenPantry.addInventory("fries");
  console.log(kitchenPantry.removeInventory("beanz")); // "beanz" will not remove anything
  kitchenPantry.displayInventory();
  
  // let lastItem = kitchenPantry.inventory.pop();
  // console.log(lastItem);
  
  // let kitchenPantry2 = {
  //   inventory: ["beans", "noodles", "peanut butter"],
  //   displayInventory: function () {
  //     console.log(
  //       "The current items you have in your pantry are " + this.inventory
  //     );
  //   },
  // };
  
  // kitchenPantry2.displayInventory();
  