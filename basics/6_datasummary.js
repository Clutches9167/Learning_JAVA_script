// Data Type 2 types

// Primitive => 7  Number, String , BigInt, null, undefined, Boolean, Symbol

const outsideTemp = null
let name = 'Ansh'
let age = 26
let isLoggedIn = false
let state;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log( id == anotherId); // false  Symbol used for uniqness

const bigNumber = 23465327625734n // n for BigInt

// Reference ( NON - Primitive) => Array , Object  , Functions    
//  NON primitive Data types ka return type = >  Funcions , Object Functions hi ata hai 

// Array
const heroes = [ "pokemon" , " Shaktiman", "Pikachu"] // Array

//  Everything inside  {  } is an Object 
const myobj =  {
    name : "ansh",
    age: " 25"
}

//  Function  as variable
const myFunction = function(){
    console.log("Ansh");
}

console.log(typeof heroes);     // objec 
console.log(typeof myobj);      // object
console.log(typeof myFunction);  // object function


console.log(typeof id);          //Symbol



