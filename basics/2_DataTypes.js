"use strict";  // Treat all JS code as New Version 

// alert( 2 + 2) // we are using node js not browser isliye error ayega   JAVA SCRIPT ka Engine Browser main hai 

// Code ki  Readibility honi chahiye 

console.log(3 + 5)

console.log("Ansh")

//  Documentation of Java Script ==>  https://tc39.es/ecma262/  
//                                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide


//  DATA Types   

let name = 'Ansh'
let age = 26
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint => trading / stock market ke liye use kare 
// String  => ""
// boolean => true / fasle 
// null => Standalone value hai  ( object hai ) [yeah undefined nahi hai value khali hai / agar site ne temp nahi bheja toh 0 nahi dikhana ktyu ki 0 bhi ek temp hai isliye hum null daalte hai ]
// undefined =>  value defined nahi kari tabhi ata hai ex, state 
//  symbol =>  uniquness  karne ke liye use hota hai [ React ]
// object 

console.log(typeof "ansh")     // String
console.log(typeof null)       // object
console.log(typeof undefined ) // undefined
console.log(typeof "1556")     // string  
console.log(typeof 56678)     // number
console.log(typeof false)     // boolean