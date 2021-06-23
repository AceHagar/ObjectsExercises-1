let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function move(){return Math.floor(Math.random()*11)}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function move(){return Math.floor(Math.random()*11)}
  };

let superChimpTwo ={
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  move: function move(){return Math.floor(Math.random()*11)}
};

let doge = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  move: function move(){return Math.floor(Math.random()*11)}
};

let waterBear = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  move: function move(){return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
doge["astronautID"] = 4;
waterBear["astronautID"] = 5;


// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, doge, waterBear]
// Print out the relevant information about each animal.
console.log(crew)
function crewReports(candidates){
 let results = [];
 for (let i = 0; i < candidates.length; i++){
     results.push(`${candidates[i].name} is a ${candidates[i].species}. They are ${candidates[i].age} years old and ${candidates[i].mass} kilograms.  Their ID is ${candidates[i].astronautID}. `)
 }
 return results;
}

console.log(crewReports(crew))

// Start an animal race!
function fitnessTest(candidates){
 let results = [], numSteps, turns;
 for (let i = 0; i < candidates.length; i++){
     numSteps = 0;
     turns = 0;
     while(numSteps < 20){
     numSteps += candidates[i].move();
     turns++;
     }
     results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
 }
 return results;
}

fitnessTest(crew)
