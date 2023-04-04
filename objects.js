// Unit 3 - Day 012

/* 
Objects
- Objects contain  properties
- They are setup in KEY & VALUE pairs
- KEYS will ALWAYS be strings and it CAN be multiple words but most of the time it will be one word. If you're using multiples words and you don't want a space you can use Camel Casing as a convention. 

ex: "Sent From" or "sentFrom"
- VALUES: string, numbers, boolean, undefined, null, arrays, objects

*/

let lilly = {
    name: "lilly",
    age: 15,
    breed: "mini poodle",
    color: "gray",
    spayed: true,
    weight: 8,
    favoriteActivty: ["play with her food", "bite owner"],
    "household owners": ["father", "mother", "simon"],
  };
  
  let lola = {
    name: "lola",
    age: 1.75,
    breed: "mini schnauzer mix",
    color: "gray",
    spayed: true,
    weight: 14,
    favoriteActivty: ["running", "chewing", "chasing bugs"],
    "household owners": ["ashlee", "grant"],
  };
  
  let minnie = {
    name: "minnie",
    age: 2,
    breed: "coton de tulear",
    color: "white",
    spayed: true,
    weight: 5,
    favoriteActivty: [
      "running in yard",
      "playing with duck",
      "getting belly rubbed",
    ],
    "household owners": ["john", "scarlem"],
  };
  

// ? How do we access data within the object
// ! Dot Notation
console.log(`Lily's age is ${lilly.age} years`); // returns "Lily's age is 15 years"
// ? How do I access color
console.log(`Lily is a ${lilly.color} dog`); // returns "Lily is a gray dog"
// ? How do I access "play with her food"
console.log(`Lily likes to ${lilly.favoriteActivty[0]}`); // returns "Lily likes to play with her food"


// ! Square Bracket Notation
// ? How do  access "house hold owners"
console.log(`The people who live with Lily are ${lilly["household owners"]}`); //returns "The people who live with Lily are father,mother,simon"


// ! Altering values in an object
console.log(`We are checking Lily's weight ${lilly.weight}`); // returns "We are checking Lily's weight 8"
lilly.weight = 9; // TODO This is reassigning Lily's weight
console.log(`We are checking Lily's weight ${lilly.weight}`); // returns "We are checking Lily's weight 9"



// ! Adding a new key and value to an existing object
lilly.gender = "female"; // TODO Adding to the object
console.table(lilly); //This prints the entire object out


// ! Combining Objects into an array
let studentPetArray1 = [lilly, minnie, lola];
console.log("studentArray1: ", studentPetArray1);

let studentPetArray2 = [];
studentPetArray2.push(lilly);
studentPetArray2.push(minnie);
studentPetArray2.push(lola);

console.log("studentArray2: ", studentPetArray2);

/* 
Create a Loop that will go through studentPetArray1 and it will console log the following.

"[pet name] is [age] years old who weights [weight] lbs"

bonus: "[pet name] is [age] years old who weights [weight] lbs. And [pet name]'s favorite activites are the following [favorite activites(with commas)]"

*/

// TODO Dog Challenge
console.log(`\n\nStart of Challenge`);
const numberOfPets = studentPetArray1.length;
console.log(`Number of Pets ${numberOfPets}`);

petSentence(studentPetArray1);

function petSentence(putArrayHere) {
    for (let i = 0; i < numberOfPets; i++) {
      let dogData = putArrayHere[i]; // dogData should be an object
      //console.log(dogData); //! Test
      console.log(`${dogData.name} is ${dogData.age} years old who weights ${dogData.weight} lbs`);
    }
  }
  
// TODO Dog Challenge - Bonus
console.log(`\n\nStart of Challenge - Bonus`);
petSentenceBonus(studentPetArray1);


function petSentenceBonus(bonusPoints) {
    for (let i = 0; i < numberOfPets; i++) {
      let dogData = bonusPoints[i]; // dogData should be an object
      //console.log(dogData); //! Test
      let lastActivity = dogData.favoriteActivty.pop(); // takes out last activity so we can be grammatically correct.
      console.log(`${dogData.name} is ${dogData.age} years old who weights ${dogData.weight} lbs. And ${dogData.name}'s favorite activites are the following: ${dogData.favoriteActivty.join(", ")}, and ${lastActivity}.`);
    }
  }